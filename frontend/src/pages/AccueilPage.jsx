import { SECTIONS, docsDe } from '../lib/sections'
import { EtatChargement, useSampleData } from '../lib/useSampleData'
import './accueil.css'

export function AccueilPage() {
  const { data, erreur } = useSampleData()
  if (!data) return <EtatChargement erreur={erreur} />

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
              <a href={s.chemin}>{docsDe(cle, data).length} documents →</a>
            </footer>
          </article>
        ))}
      </div>
    </main>
  )
}
