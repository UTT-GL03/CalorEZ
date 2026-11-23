# Consignes projet CalorEZ (pour l'agent)

## Stratégie écoconception — À RESPECTER

- Le frontend doit être développé de façon **frugale mais volontairement NON optimisée** (pas de lazy-loading, pas de compression, qui sait tout, cache naïf, etc. prématurés).
- La démarche attendue (rôle pédagogique de l'exercice) :
  1. Version de base naïve / frugale.
  2. **Mesure** avec l'addon **EcoIndex** (réseau : requêtes, poids ; DOM : nb d'éléments) via GreenIT-Analysis.
  3. Identification des failles de consommation inutile.
  4. Optimisation **ciblée** sur ce qui a été mesuré, avec mesures avant/après.
- **Ne pas livrer du code « impeccable »** d'emblée : les défauts assumés servent de matière à la démarche expérimentale et au rapport (avant/après EcoIndex, comparaison MyFitnessPal / Cronometer / MyNetDiary déjà entamée dans le README).
- Ne pas corriger « par réflexe » des choses qui font partie du scénario voulu.

## Git

- Repo : `UTT-GL03/CalorEZ` — commits/pushs font sous l'identité locale `EKE5980 <64850864+EKE5980@users.noreply.github.com>` (config locale au repo, déjà posée).
- Travail de dev sur la branche `dev`.
- Ne commiter/pusher **que** si demandé explicitement ; montrer avant si demandé.
- Fichiers actuellement non commités (en attente de validation utilisateur) : `docs/modeles_donnees.md`, `AGENTS.md` (ce fichier).

## Contexte données

- Échantillon : `sample_data.hbs` (modèle dummy-json) → `sample_data.json` (structure `{"docs": [...]}`, importable en `_bulk_docs` CouchDB).
- Spécifs applicatives : `README.md`, `Maquettage.md`, `Modèle économique.md`.
- Modèle de données CouchDB détaillé : `docs/modeles_donnees.md`.
