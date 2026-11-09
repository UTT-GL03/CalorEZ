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

## Impact de l’exécution des scénarios auprès de différents services concurrents

L’EcoIndex d’une page, noté de A à G, est calculé en fonction de son positionnement parmi les pages web analysées selon trois critères :

- le nombre de requêtes lancées ;
- le poids des données transférées ;
- le nombre d’éléments du document, appelé DOM.

Nous avons choisi de mesurer plusieurs pages de trois services de suivi alimentaire accessibles en ligne : **MyFitnessPal**, **Cronometer** et **MyNetDiary**. Ces services proposent des fonctionnalités proches de certaines de celles envisagées pour CalorEZ, notamment le suivi des repas et des besoins nutritionnels.

| Service | Page mesurée | Score sur 100 | Classe |
| --- | --- | ---: | :---: |
| MyFitnessPal | Page d’accueil | 48 | D 🟧 |
| MyFitnessPal | Journal alimentaire | 52 | D 🟧 |
| MyFitnessPal | Journal d’activité physique | 80 | A 🟩 |
| Cronometer | Page d’accueil | 24 | F 🟪 |
| MyNetDiary | Tableau de bord | 51,62 | D 🟧 |
| MyNetDiary | Plan | 76,52 | B 🟩 |
| MyNetDiary | Repas | 63,42 | C 🟨 |

*Tab. 1 : Mesures EcoIndex de différentes pages des services concurrents.*

Les mesures révèlent des résultats assez variables, allant de la classe **A** à la classe **F**. La page d’accueil de Cronometer obtient le score le plus faible, avec 24/100. Elle comporte notamment 2 793 éléments dans son DOM, contre 475 pour la page d’accueil de MyFitnessPal.

Pour MyFitnessPal, on observe un écart important entre les pages : le journal d’activité physique obtient la classe A, tandis que le journal alimentaire et la page d’accueil sont classés D. Cette dernière lance à elle seule 114 requêtes, soit le nombre le plus élevé parmi les pages mesurées.

Les pages de MyNetDiary obtiennent des résultats plus homogènes, avec des classes comprises entre B et D. Le tableau de bord est la page la moins bien classée, tandis que la page de plan obtient le meilleur score des trois.

Ces résultats sont toutefois à nuancer. Les pages étudiées ne correspondent pas toutes aux mêmes usages, et certaines mesures ont été réalisées avec le cache du navigateur tandis que d’autres l’ont été sans cache. De plus, les mesures du journal alimentaire et du rapport nutritionnel de Cronometer ont échoué. Nous ne pouvons donc pas encore comparer les trois services sur l’ensemble de nos scénarios.

Les écarts observés montrent néanmoins qu’il existe une marge de progression. Pour CalorEZ, nous serons particulièrement attentifs au nombre de requêtes, au poids des images de recettes et à la quantité d’éléments affichés, notamment sur les pages les plus consultées comme le tableau de bord, les quêtes et les détails nutritionnels.

## Analyse de la concurrence et modèle économique

Le marché du suivi nutritionnel comporte plusieurs offreurs, notamment MyFitnessPal et YAZIO. Ces services présentent des fonctionnalités communes, mais peuvent se différencier par leur positionnement, leurs outils de suivi, leur accompagnement et leur modèle économique.

On peut notamment distinguer :

La différenciation des produits : certaines applications ciblent davantage la perte de poids, tandis que d'autres mettent l'accent sur la prise de masse, le sport ou le suivi nutritionnel général.
Les produits de substitution : journaux alimentaires papier, tableaux personnels et suivi manuel des calories.
La concurrence monopolistique : de nombreux offreurs proposent des services proches, mais cherchent à se différencier par leurs fonctionnalités, leur expérience utilisateur et leur positionnement.
Modèle économique de YAZIO

Le modèle économique observé pour YAZIO repose sur une logique de freemium. Une version gratuite, financée notamment par la publicité, permet de découvrir l'application. Une version payante par abonnement donne accès à des fonctionnalités ou à des contenus supplémentaires et permet de supprimer les publicités.

| **Service** | **Utilisateur gratuit** | **Abonné payant** |
|---|---|---|
| MyFitnessPal | Suivi des calories, publicités | Statistiques avancées, sans publicité |
| YAZIO | Suivi alimentaire de base | Recettes et fonctionnalités premium |
| CalorEZ | Suivi calorique, quêtes | Fonctionnalités avancées |

Ce modèle constitue une piste pour CalorEZ, mais son adoption devra tenir compte du positionnement environnemental du projet. Il faudra notamment évaluer si les revenus publicitaires justifient la consommation de ressources supplémentaire et si un abonnement permettrait de financer le service tout en limitant le recours à la publicité.

## Hypothèse de modèle économique pour CalorEZ

Nous envisageons plusieurs sources de revenus possibles :

Une version gratuite avec les fonctionnalités essentielles.
Un abonnement payant donnant accès à des fonctionnalités avancées.
Une option de publicités solidaires, dont les revenus seraient reversés à des associations écologiques.

Le modèle retenu devra concilier accessibilité, viabilité économique et cohérence avec les objectifs environnementaux. Il reste à déterminer quelles fonctionnalités seront gratuites, lesquelles seront réservées à l'abonnement et quelle part des revenus publicitaires pourra être reversée aux associations.

## Première estimation du seuil de rentabilité

Nous retenons les hypothèses suivantes :

Prix nominal de l'abonnement : 9,87 € par mois.
Prix moyen de l'abonnement en promotion : 3,99 € par mois.
Part des abonnements bénéficiant d'une promotion : 80 %.
Part des abonnements au prix nominal : 20 %.
Coût mensuel de référence : 3 507 €, correspondant au salaire médian chargé employeur retenu pour cette estimation.

Le revenu mensuel moyen par abonnement est estimé ainsi :

(3,99 × 0,80) + (9,87 × 0,20) = 5,166 €

Le nombre d'abonnements nécessaires pour couvrir le coût mensuel de référence est donc :

3 507 ÷ 5,166 ≈ 678,63

Il faudrait ainsi environ 679 abonnements payants actifs par mois pour couvrir ce seul coût de référence.

Cette estimation constitue un premier ordre de grandeur, et non un seuil de rentabilité complet. Elle ne prend pas en compte les frais d'hébergement, les services externes, le développement, la maintenance, les commissions des plateformes, les taxes ou les autres dépenses d'exploitation. Elle suppose également que les revenus moyens calculés sont effectivement perçus pour chaque abonnement sur le mois considéré.
