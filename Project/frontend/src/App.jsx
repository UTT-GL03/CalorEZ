import { AccueilPage } from './pages/AccueilPage'
import { UtilisateursPage, UtilisateurDetail } from './pages/utilisateurs'
import { RecettesPage, RecetteDetail } from './pages/recettes'
import { JournalPage, JournalDetail } from './pages/journal'

// Table des pages : chaque HTTP-URI du maquettage s'ajoutera ici.
const PAGES = {
  '/': AccueilPage,
  '/users/': UtilisateursPage,
  '/recettes/': RecettesPage,
  '/journal/': JournalPage,
}

// Pages de détail : /<section>/<id du document>
const DETAILS = {
  users: UtilisateurDetail,
  recettes: RecetteDetail,
  journal: JournalDetail,
}

export default function App() {
  const path = new URL(window.location.href).pathname
  const parts = path.split('/').filter(Boolean)
  let Page = PAGES['/' + (parts[0] ?? '') + (parts.length ? '/' : '')] ?? PAGES['/']
  if (parts[0] && parts.length >= 2 && DETAILS[parts[0]]) {
    Page = () => DETAILS[parts[0]]({ id: parts[1] })
  }
  return (
    <>
      <nav>
        <ul>
          <li><strong><a href="/">CalorEZ</a></strong></li>
        </ul>
        <ul>
          <li><a href="/users">Utilisateurs</a></li>
          <li><a href="/recettes">Recettes</a></li>
          <li><a href="/journal">Journal des repas</a></li>
        </ul>
      </nav>
      <Page />
    </>
  )
}
