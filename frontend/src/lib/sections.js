import data from '../data/sample_data.json'

export const SECTIONS = {
  users: {
    chemin: '/users',
    type: 'user',
    titre: 'Utilisateurs',
    resume: 'Profils, objectifs nutritionnels et progression (XP, pièces) de chaque utilisateur.',
  },
  recettes: {
    chemin: '/recettes',
    type: 'recette',
    titre: 'Recettes',
    resume: 'Nutrition par portion, préparation et empreinte carbone de chaque recette.',
  },
  journal: {
    chemin: '/journal',
    type: 'entree_journal',
    titre: 'Journal des repas',
    resume: 'Repas consommés, apports en macros et humeur après repas.',
  },
}

export function docsDe(cle) {
  return data.docs.filter(d => d.type === SECTIONS[cle].type)
}
