import { docsDe } from '../lib/sections'
import { Liste } from '../components/Liste'
import { LigneDate } from '../components/LigneDate'

export function JournalPage() {
  return <Liste cle="journal" />
}

export function JournalDetail({ id }) {
  const doc = docsDe('journal').find(d => d._id === id)
  if (!doc) {
    return (
      <main className="container">
        <article>
          <header><h2>Document introuvable</h2></header>
          <footer><p><a href="/journal">← retour au journal</a></p></footer>
        </article>
      </main>
    )
  }
  return (
    <main className="container">
      <p><a href="/journal">← retour au journal</a></p>
      <article>
        <header>
          <h1>{doc.repas}</h1>
          <p><span className="tag">{doc.apports.calories_kcal} kcal</span></p>
        </header>
        <h2>Apports</h2>
        <dl>
          <dt>Protéines</dt><dd>{doc.apports.proteines_g} g</dd>
          <dt>Glucides</dt><dd>{doc.apports.glucides_g} g</dd>
          <dt>Lipides</dt><dd>{doc.apports.lipides_g} g</dd>
          <dt>Humeur après repas</dt><dd>{doc.humeur_apres_repas}/5</dd>
        </dl>
        <h2>Consommation</h2>
        <dl>
          <dt>Portions</dt><dd>{doc.portions_absorbees}</dd>
          <dt>Recette</dt><dd><code>{doc.recette_consommee}</code></dd>
          <dt>Utilisateur</dt><dd><code>{doc.user}</code></dd>
        </dl>
        <footer>
          <span>humeur {doc.humeur_apres_repas}/5</span>
          <LigneDate date={doc.date} />
        </footer>
      </article>
    </main>
  )
}
