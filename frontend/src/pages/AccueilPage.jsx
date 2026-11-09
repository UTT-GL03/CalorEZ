import { SECTIONS, docsDe } from '../lib/sections'
import data from '../data/sample_data.json'
import './accueil.css'

export function AccueilPage() {
  return (
    <main className="container">
      <hgroup>
        <h1>CalorEZ</h1>
        <p>Index des données — {data.docs.length} documents répartis en trois sections.</p>
      </hgroup>
      <div className="grid">
        {Object.entries(SECTIONS).map(([cle, s]) => (
          <article key={cle}>
            <header>
              <h2><a href={s.chemin}>{s.titre}</a></h2>
            </header>
            <p>{s.resume}</p>
            <footer>
              <a href={s.chemin}>{docsDe(cle).length} documents →</a>
            </footer>
          </article>
        ))}
      </div>
    </main>
  )
}
