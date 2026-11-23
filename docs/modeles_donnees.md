# Modèle de données & échantillon — CalorEZ

## Démarche suivie

1. **Étude du modèle d'exemple** (prof, projet QVOTIDIE) : récupération de `sample_data.hbs` et analyse des primitives `dummy-json` utilisées :
   - `{{#repeat min max}}` : duplique un bloc N fois (N aléatoire entre min et max), éléments séparés par des virgules (comportement par défaut).
   - `{{random 'a' 'b' …}}` : tire une valeur dans une liste fournie.
   - `{{date 'début' 'fin' 'format'}}` : date aléatoire dans une plage, formatée (ex. `YYYY-MM-DD`).
   - `{{int min max}}` / `{{float min max 'format'}}` : nombre aléatoire, avec un format numbro optionnel (`'0.0'` = une décimale).
   - `{{firstName}} {{lastName}}`, `{{email}}`, `{{guid}}` : identités / identifiants aléatoires.
   - `{{lorem min max}}` : faux texte de N–M mots.
   - `{{#repeat min max comma=false}}` : variante sans virgules, utilisée par le prof pour concaténer des paragraphes avec `\n\n`.
2. **Adaptation au domaine CalorEZ** : réécriture du modèle pour couvrir les entités de l'application (utilisateurs, recettes, journal alimentaire, quêtes, boutique — cf. `README.md` et `Maquettage.md`).
3. **Génération** : `npx dummy-json@latest sample_data.hbs > sample_data.json`, puis validation du JSON (parsing + comptage des documents par type) et corrections itératives du modèle :
   - apostrophes dans les chaînes délimitées par des apostrophes (`d'avoine`, `d'olive`…) → passage de ces chaînes en doubles guillemets ;
   - tableau `etapes` : retour au comportement par défaut (virgules), le `comma=false` du prof ne servait que lors de concaténations de texte ;
   - `{{float 0.1 3.5 '0.0'}}` pour des valeurs d'empreinte carbone lisibles (une décimale) ;
   - cette version de dummy-json n'a pas de `#random` en mode bloc → booléens générés via `{{random 'true' 'false'}}` placé sans guillemets dans le JSON.

## Contenu de l'échantillon (`sample_data.json`)

Un unique tableau `docs`, prêt à être importé en `_bulk_docs` dans CouchDB :

| type | volume / génération | Rôle métier |
|---|---|---|
| `user` | 4–8 | Profil utilisateur : macros cibles, régime, objectif, XP / pièces (gamification) |
| `recette` | 25–35 | Recettes : ingrédients, étapes, nutrition par portion, **empreinte carbone**, saison, régimes compatibles |
| `entree_journal` | 20–30 | Suivi quotidien : repas consommé + apports macro + humeur |
| `quete` | 8–14 | Missions quotidiennes / hebdomadaires, cible, récompense XP + pièces |
| `article_boutique` | 6–10 | Objets achetables avec les pièces gagnées |

Regénérer l'échantillon :

```bash
npx dummy-json@latest sample_data.hbs > sample_data.json
```

> ⚠️ Sous PowerShell, préférer `cmd /c "…" >` pour la redirection afin d'éviter le réencodage UTF-16 de la sortie.

## Modèle de données CouchDB (noSQL)

CouchDB : une **base plate de documents JSON indépendants**, accédés par `_id`, versionnés par `_rev`, sans jointures. Les documents embarquent leurs données et se référencent par `_id`. Ils sont discriminés par un champ `type`.

### Types de documents et schéma d'identifiants

| Document | `_id` | Champs clés | Références |
|---|---|---|---|
| `user` | `user-<uuid>` | pseudo, email, `{date_inscription, niveau, xp, pieces}`, `profil{age, poids_kg, taille_cm, regime_alimentaire, objectif}`, `objectifs_quotidiens{calories_kcal, proteines_g, glucides_g, lipides_g}`, `preferences_alimentaires[]` | `recettes_favorites[] → recette._id` |
| `recette` | `recette-<uuid>` | nom, categorie, saison_recommandee, `regime_compatible[]`, temps_preparation_min, portions, difficulte, `ingredients[{nom, quantite, unite}]`, `etapes[]`, `valeurs_nutritionnelles_par_portion{…}`, `empreinte_carbone_kg_co2e`, de_saison, ingredient_local_bio | (référencé par le journal et les favoris) |
| `entree_journal` | `journal-<uuid>` | date, repas, user, recette_consommee, portions_absorbees, `apports{…}`, humeur_apres_repas | `user → user._id`, `recette_consommee → recette._id` |
| `quete` | `quete-<uuid>` | titre, frequence, description, condition_reussite, cible, `recompense{xp, pieces}`, actif_du, actif_au | (affichée à tous les utilisateurs) |
| `progression_quete` | `pbq-<uuid>` | user, etat, progression_en_cours | `user → user._id`, `quete → quete._id` |
| `article_boutique` | `boutique-<uuid>` | nom, categorie, description, cout_pieces, niveau_requis | (achetable) |
| `achat` | `achat-<uuid>` | user, article_boutique, date | `user → user._id`, `article_boutique → article_boutique._id` |

### Pages ↔ données (composants métiers réutilisables)

| Page | Données utilisées | Composants métiers partagés |
|---|---|---|
| `/` Accueil | `entree_journal` (agrégat du jour) + `user.objectifs_quotidiens` + `quete` (jour) | Barre de progression macro (identique à `/macro`), carte de quête (identique à `/quest`) |
| `/recipe`, `/recipe/{nom}-token` | `recette` | Carte recette (liste = fiche tronquée), badge CO₂ |
| `/profile` | `user` | Objectifs, favoris, XP/pièces |
| `/macro` | `entree_journal.apports` + `user.objectifs_quotidiens` | Barre de progression (réutilisation) |
| `/quest` | `quete` (+ `progression_quete`) | Carte de quête, compteur XP/pièces |
| `/shop` | `article_boutique` (+ `user.pieces`) | Compteur XP/pièces |

### Index Mango (exemples)

```json
{ "index": { "fields": ["type", "nom"] }, "name": "recettes-par-nom" }
{ "index": { "fields": ["type", "saison_recommandee"] }, "name": "recettes-par-saison" }
{ "index": { "fields": ["type", "user", "date"] }, "name": "journal-par-user-date" }
{ "index": { "fields": ["type", "frequence"] }, "name": "quetes-par-frequence" }
```

### Vues / design docs (agrégats, si besoin de MapReduce)

```js
// calories et macros consommées par jour (accueil, /macro) — reduce _sum
emit([doc.user, doc.date], doc.apports)

// empreinte carbone des recettes par saison (analyse éco)
emit(doc.saison_recommandee, doc.empreinte_carbone_kg_co2e)
```

### Choix d'écoconception (cohérence avec le projet)

- Index limités au strict nécessaire : moins de traitements par requête, temps de réponse plus courts et énergie gaspillée en moins.
- Les données affichées par page sont regroupées pour éviter les requêtes unitaires répétées (ex. apports du jour calculés en un seul appel via un index/agrégat).
- Dates en `YYYY-MM-DD` : tri lexical direct, pas de conversion à chaque lecture.
- Redondance raisonnable dans les documents : une `entree_journal` stocke les apports déjà calculés, la page n'a donc pas besoin de rejoindre la recette pour afficher l'essentiel (mais référence la recette pour le détail).

## Import CouchDB prévu

```bash
curl -X POST "$COUCH_URL/calorez/_bulk_docs" \
     -H "Content-Type: application/json" \
     -d @sample_data.json
# la structure de l'échantillon {"docs": [...]} correspond au format attendu par _bulk_docs
```
