import { docsDe } from '../lib/sections'
import { Liste } from '../components/Liste'

export function RecettesPage() {
  return <Liste cle="recettes" />
}

export function RecetteDetail({ id }) {
  const doc = docsDe('recettes').find(d => d._id === id)
  if (!doc) {
    return (
      <main className="container">
        <article>
          <header><h2>Document introuvable</h2></header>
          <footer><p><a href="/recettes">← retour aux recettes</a></p></footer>
        </article>
      </main>
    )
  }
  const v = doc.valeurs_nutritionnelles_par_portion
  return (
    <main className="container">
      <p><a href="/recettes">← retour aux recettes</a></p>
      <article>
        <header>
          <h1>{doc.nom}</h1>
          <p>
            <span className="tag">{doc.categorie}</span>
            {doc.regime_compatible.map(r => (
              <span className="tag secondaire" key={r}>{r}</span>
            ))}
          </p>
        </header>
        <h2>Nutrition par portion</h2>
        <dl>
          <dt>Calories</dt><dd>{v.calories_kcal} kcal</dd>
          <dt>Protéines</dt><dd>{v.proteines_g} g</dd>
          <dt>Glucides</dt><dd>{v.glucides_g} g</dd>
          <dt>Lipides</dt><dd>{v.lipides_g} g</dd>
          <dt>Fibres</dt><dd>{v.fibres_g} g</dd>
          <dt>Empreinte carbone</dt><dd>{doc.empreinte_carbone_kg_co2e} kgCO2e</dd>
        </dl>
        <h2>Préparation</h2>
        <dl>
          <dt>Temps</dt><dd>{doc.temps_preparation_min} min</dd>
          <dt>Portions</dt><dd>{doc.portions}</dd>
          <dt>Difficulté</dt><dd>{doc.difficulte}/3</dd>
          <dt>Saison recommandée</dt><dd>{doc.saison_recommandee}{doc.de_saison ? ' (actuellement de saison)' : ''}</dd>
        </dl>
        <h2>Ingrédients</h2>
        <ul>
          {doc.ingredients.map((i, k) => (
            <li key={k}>{i.nom} — {i.quantite} {i.unite}</li>
          ))}
        </ul>
        <h2>Étapes</h2>
        <ol>
          {doc.etapes.map((etape, k) => (
            <li key={k}>{etape}</li>
          ))}
        </ol>
        <footer>
          {doc.ingredient_local_bio ? 'Ingrédient local / bio' : 'Ingrédients hors circuit local'}
        </footer>
      </article>
    </main>
  )
}
