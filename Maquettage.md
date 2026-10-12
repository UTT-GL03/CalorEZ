## Maquettage et architecture des pages

L'application CalorEZ est organisée autour de plusieurs pages accessibles à partir d'URLs dédiées. Cette organisation permet de séparer les fonctionnalités principales de l'application tout en facilitant la navigation entre le suivi alimentaire, les recettes, la progression personnelle et les mécanismes de gamification.

### 1. Architecture des routes

| Route                         | Page                      | Fonctionnalités principales                                                                                                                                 |
| ----------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                           | Accueil                   | Vue d'ensemble de la journée, résumé des calories consommées, progression vers les objectifs nutritionnels et accès rapide aux fonctionnalités principales. |
| `/recipe`                     | Liste des recettes        | Consultation des recettes disponibles, recherche, filtres par type de plat ou ingrédients, et accès aux fiches détaillées.                                  |
| `/recipe/{recipe_name}-token` | Fiche recette             | Présentation d'une recette, de ses ingrédients, des quantités, des étapes de préparation, des valeurs nutritionnelles et de son empreinte carbone estimée.  |
| `/profile`                    | Profil utilisateur        | Consultation et modification des informations personnelles, des objectifs, des préférences alimentaires et de la progression globale.                       |
| `/macro`                      | Suivi des macronutriments | Visualisation des apports en protéines, glucides et lipides, comparaison avec les objectifs quotidiens et suivi de leur évolution.                          |
| `/quest`                      | Quêtes                    | Consultation des quêtes journalières et hebdomadaires, suivi de leur progression et récupération des récompenses obtenues.                                  |
| `/shop`                       | Boutique                  | Utilisation des récompenses accumulées pour acheter des éléments virtuels ou des avantages destinés à personnaliser l'expérience utilisateur.               |

La route `/recipe/{recipe_name}-token` représente une route dynamique : le nom de la recette et son identifiant permettent d'accéder à une fiche spécifique. Le suffixe `token` peut servir à différencier des recettes portant des noms similaires.


Cette organisation vise à rendre l'application lisible et à limiter le nombre d'étapes nécessaires pour accéder aux fonctionnalités principales. Le maquettage devra également prendre en compte l'accessibilité, la lisibilité des informations nutritionnelles et la simplicité de navigation sur ordinateur comme sur mobile.
