import { SECTIONS, docsDe } from '../lib/sections'
import { Liste } from '../components/Liste'
import { LigneDate } from '../components/LigneDate'

export function UtilisateursPage() {
  return <Liste cle="users" />
}

export function UtilisateurDetail({ id }) {
  const doc = docsDe('users').find(d => d._id === id)
  if (!doc) {
    return (
      <main className="container">
        <article>
          <header><h2>Document introuvable</h2></header>
          <footer><p><a href="/users">← retour aux utilisateurs</a></p></footer>
        </article>
      </main>
    )
  }
  return (
    <main className="container">
      <p><a href="/users">← retour aux utilisateurs</a></p>
      <article>
        <header>
          <h1>{doc.pseudo}</h1>
          <p>{doc.email}</p>
        </header>
        <h2>Profil</h2>
        <dl>
          <dt>Âge / poids / taille</dt><dd>{doc.profil.age} ans · {doc.profil.poids_kg} kg · {doc.profil.taille_cm} cm</dd>
          <dt>Régime alimentaire</dt><dd>{doc.profil.regime_alimentaire}</dd>
          <dt>Objectif</dt><dd>{doc.profil.objectif}</dd>
        </dl>
        <h2>Objectifs quotidiens</h2>
        <dl>
          <dt>Calories</dt><dd>{doc.objectifs_quotidiens.calories_kcal} kcal</dd>
          <dt>Protéines</dt><dd>{doc.objectifs_quotidiens.proteines_g} g</dd>
          <dt>Glucides</dt><dd>{doc.objectifs_quotidiens.glucides_g} g</dd>
          <dt>Lipides</dt><dd>{doc.objectifs_quotidiens.lipides_g} g</dd>
        </dl>
        <h2>Progression</h2>
        <dl>
          <dt>Niveau</dt><dd>{doc.niveau}</dd>
          <dt>XP</dt><dd>{doc.xp}</dd>
          <dt>Pièces</dt><dd>{doc.pieces}</dd>
        </dl>
        <footer>
          <span>{doc.xp} XP</span>
          <LigneDate date={doc.date_inscription} />
        </footer>
      </article>
    </main>
  )
}
