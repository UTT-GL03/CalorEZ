import { Tag } from './Tag'
import { LigneDate } from './LigneDate'

const CHAMPS = {
  user: d => ({
    tag: d.profil.objectif,
    titre: d.pseudo,
    lignes: [`${d.profil.regime_alimentaire} — niveau ${d.niveau}`, `${d.xp} XP · ${d.pieces} pièces`],
    date: d.date_inscription,
  }),
  recette: d => ({
    tag: d.categorie,
    titre: d.nom,
    lignes: [
      `${d.valeurs_nutritionnelles_par_portion.calories_kcal} kcal · ${d.empreinte_carbone_kg_co2e} kgCO2e`,
      `${d.temps_preparation_min} min · ${d.portions} portion(s) · ${d.saison_recommandee}`,
    ],
  }),
  entree_journal: d => ({
    tag: `${d.apports.calories_kcal} kcal`,
    titre: d.repas,
    lignes: [
      `${d.apports.proteines_g} g prot · ${d.apports.glucides_g} g glu · ${d.apports.lipides_g} g lip`,
      `humeur : ${d.humeur_apres_repas}/5 · ${d.portions_absorbees} portion(s)`,
    ],
    date: d.date,
  }),
  quete: d => ({
    tag: d.frequence,
    titre: d.titre,
    lignes: [`${d.cible} à accomplir`, `${d.recompense.xp} XP · ${d.recompense.pieces} pièces`],
    date: d.actif_du,
  }),
  article_boutique: d => ({
    tag: d.categorie,
    titre: d.nom,
    lignes: [`${d.cout_pieces} pièces`, `niveau ${d.niveau_requis} requis`],
  }),
}

export function DocCard({ lien, ...doc }) {
  const carte = <CorpsDocCard {...doc} />
  return lien ? (
    <a className="tuile" href={lien}>{carte}</a>
  ) : (
    carte
  )
}

function CorpsDocCard({ type, ...doc }) {
  const { tag, titre, lignes, date } = CHAMPS[type](doc)
  return (
    <article>
      <header>
        <Tag>{type}</Tag>
        {tag && <Tag variante>{tag}</Tag>}
      </header>
      <h2>{titre}</h2>
      <ul>
        {lignes.map(ligne => (
          <li key={ligne}>{ligne}</li>
        ))}
      </ul>
      {date && <LigneDate date={date} />}
    </article>
  )
}
