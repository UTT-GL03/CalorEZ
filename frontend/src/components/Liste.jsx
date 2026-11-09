import { SECTIONS, docsDe } from '../lib/sections'
import { DocCard } from './DocCard'

export function Liste({ cle }) {
  const section = SECTIONS[cle]
  const docs = docsDe(cle)
  const rows = Object.values(Object.groupBy(docs, (_, i) => Math.floor(i / 3)))
  return (
    <main className="container">
      <hgroup>
        <h1>{section.titre}</h1>
        <p>{section.resume}</p>
      </hgroup>
      {rows.map((row, r) => (
        <div className="grid" key={r}>
          {row.map(doc => (
            <DocCard key={doc._id} lien={`${section.chemin}/${doc._id}`} {...doc} />
          ))}
        </div>
      ))}
    </main>
  )
}
