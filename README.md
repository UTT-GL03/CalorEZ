# CalorEZ
CalorEZ est une application de suivi alimentaire et calorique ayant pour objectif d'aider ses utilisateurs à adopter une alimentation plus équilibrée et à atteindre leurs objectifs de poids de manière simple, motivante et ludique.
Le projet combine :
suivi nutritionnel ;
recommandations de recettes ;
gamification ;
entraide communautaire ;
sensibilisation à l'impact environnemental de l'alimentation ;
réflexion sur l'écoconception d'une application numérique.

**Utilité médico-social** : Sensibilisation au monde de la nutrition.
Aide morale et utile à la perte / prise de poids. Facilitation du tracking, Proposition de recette healthy et mise en avant de la diversité alimentaire.
Gamification pour aider à tenir les objectifs, motivation indirecte. (Système d’expérience, de quête quotidienne, combat contre ennemis, classements ...)
Communauté d’entraide et de personnes ayant des objectifs communs.

**Utilité** : Aider à adopter une alimentation saine, pour atteindre ses objectifs de manière ludique.

**Utile sur le plan du développement d’un territoire**
Amélioration des habitudes de consommation des citoyens, soutien aux producteurs locaux par l'encouragement de la consommation de saison, contribution à l'amélioration de la santé des usagers.

**Démocratie technique. Appropriation et souplesse des usages**
**Substitution effective à des pratiques / diapositives existante.**
**Effets rebond.**
**Eco-index.**

## 1. Objectif du projet
Le suivi d'une alimentation peut rapidement devenir contraignant : saisie répétitive des repas, consultation des calories, difficulté à trouver des recettes adaptées ou encore perte de motivation sur le long terme.
CalorEZ cherche à rendre cette démarche plus accessible et engageante.
**L'objectif principal est :**
Aider les utilisateurs à adopter une alimentation saine et diversifiée afin d'atteindre leurs objectifs nutritionnels de manière ludique, tout en réduisant les divers impacts écologiques liés à l’utilisation de l’applications (Impacts direct, comme les transactions de données, 
L'application ne vise pas à remplacer un médecin, un diététicien ou un nutritionniste. Elle constitue avant tout un outil d'accompagnement, de sensibilisation et de suivi personnel.

# Scénarios d'usage et impacts

Dans le cadre de l'utilisation de CalorEZ comme compteur de calories, nous baserons nos hypothèses d'utilisation vers des personnes utilisant l'ensemble des fonctionnalités de l'application, afin d'exploiter pleinement les usages de gamification.

# **Scénarios d'Usage**
## Scénario 1: L'utilisateur explore sa liste de recettes, et en ajoute une nouvelle.
   - L'utilisateur se rends dans l'onglet recette
   - La liste des recettes téléchargées est affichée
   - L'utilisateur sélectionne le menu de découverte de recettes
   - Il ajoute la recette à sa liste de recettes téléchargées
## Scénario 2 : L'utilisateur consulte sa liste de quêtes journalières.
   - L'utilisateur se rends dans le menu principal
   - Dans le menu, il ouvre le menu de quêtes et les consulte
## Scénario 3 : L'utilisateur consulte ses macros.
   - L'utilisateur se rends sur la page principale
   - L'utilisateur clique sur le bouton de détails des besoins nutritionnels, et les consulte

## Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de compage de calories et d'accompagnement au tracking alimentaires accessibles en ligne : **MyFitnessPal**, **Cronometer**, **MyNetDiary**.
