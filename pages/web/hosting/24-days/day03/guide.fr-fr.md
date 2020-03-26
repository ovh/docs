---
title: 'Choisir un hébergement web qui me correspond'
slug: day03
excerpt: 'Comment choisir son hebergement web ?'
section: 'Cas d''usage'
hidden: true
---

Une fois le nom de domaine trouvé, il faut se mettre en quête de l’hébergement idéal.

Comme nous l'avons vu le premier jour, un site web doit être hébergé sur un serveur. Ce peut être n'importe quel type de machine, y compris hébergé dans votre maison. Cependant, le risque de coupure y est important et il n'est pas imaginable pour un site comme mypersonaldomain.ovh d'avoir une coupure d'une semaine car vous êtes en vacances.

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

## Option 1 &#58; configurer son serveur soi-meme
Sur Airbnb, vous êtes plutôt du genre à rechercher des logements entiers que des chambres chez l’habitant. Vous souhaitez donc avoir votre serveur à vous et rien qu’à vous (par exemple pour y déployer une configuration un peu exotique). Configurer son serveur nécessite quelques compétences, mais avant cela il va vous falloir choisir quel type de serveur utiliser.

Pour débuter, vous pouvez sélectionner un VPS (Virtual Private Server) : [https://www.ovhcloud.com/fr/vps/](https://www.ovhcloud.com/fr/vps/){.external}. Vous bénéficierez alors d’une partie d’un gros serveur. Plusieurs serveurs virtuels cohabitent sur un même serveur physique, mais ils sont isolés les uns des autres. Les ressources du serveur (processeur, RAM, disques) sont partagées, mais pas les données évidemment. L’avantage de ce type de machine est son coût très faible, et la liberté totale que vous avez : vous êtes administrateur de la machine, c’est comme si elle était hébergée chez vous . Cependant, vous ne disposez pas de ressources garanties : si vous avez plusieurs voisins dont l’activité est très gourmande en ressources, qui rencontrent un pic d’activité en même temps, vous pouvez en pâtir. Votre site subira alors quelques ralentissements.

Si vous préférez bénéficier de ressources garanties, vous pouvez utiliser des serveurs cloud : [https://www.ovh.com/fr/cloud/instances/](https://www.ovh.com/fr/cloud/instances/){.external}. De la même manière que les VPS, il s’agit de serveurs virtuels hébergés sur de puissants serveurs physiques. Sauf qu’ils sont moins nombreux à cohabiter sur la même machine, et que vos ressources sont garanties. Vous êtes sûr de profiter, 100 % du temps, de la capacité de calcul et de la mémoire vive que l’on vous a alloué.

Avec ces deux types d’hébergement, nous n’avez pas à vous préoccuper des pannes matérielles. Nos équipes, présentes 24h/24 au sein de nos datacentres, veillent sur les serveurs et interviennent en cas d’incident. En revanche, vous êtes seul responsable des pannes logicielles (base de données corrompue, disque dur plein...) et des mises à jour à effectuer.

Nous n’évoquerons pas ici les serveurs dédiés (un serveur physique rien que pour vous), qui constituent une dernière alternative. Dans le cas de notre site de petites annonces, un serveur dédié serait surdimensionné par rapport à nos besoins. En revanche, vous souhaitez peut-être vous tourner vers une solution plus simple que les VPS ou serveurs cloud, et opter pour un hébergement administré par OVH, ne nécessitant quasiment pas de compétences techniques. Bienvenue sur l’hébergement web !

## Qu'est ce qu'un hébergement web ?
Les hébergements web de OVH sont des infrastructures qui permettent d’afficher des sites web. Ces infrastructures sont surveillées et managées 24h/24, afin que vous sites soient disponible en permanence, sans que nous n’ayez aucune intervention à réaliser.

La majeure partie de la configuration est commune à l’ensemble des sites web hébergés sur la plateforme. Mais quelques éléments sont néanmoins personnalisables depuis l’espace client. Vous pouvez ainsi sélectionner la version du langage PHP que vous souhaitez utiliser pour faire fonctionner votre site.

Les offres des hébergements web de OVH sont divisées en deux catégories :

- **Les hébergements mutualisés** : : il s’agit d’hébergement web à faible coût, dont les ressources sont communes à l’ensemble des autres clients de l’offre. Ainsi, lorsqu’un site voisin (hébergé sur le même cluster) consomme beaucoup de ressources, il peut y avoir un impact sur les performances de votre site. Cependant, nous avons codé des robots dont la mission se rapproche de celle de la police de proximité : s’assurer que personne n’abuse, pour préserver une bonne ambiance dans le quartier. OVH propose trois offres mutualisées : Kimsufi, Perso et Pro. Ces offres se différencient entre elles par des limites de ressources pour générer votre site et quelques fonctionnalités techniques qui s’activent au fur et à mesure que vous montez en gamme comme l'accès SSH, ou l'espace disque.
- **Les hébergements performance** : ces hébergements sont plus performants que les offres mutualisées, mais surtout bénéficient de ressources garanties sur les capacités de génération de page web. Ainsi, peu importe si vos voisins sont des fêtards, vous n’entendrez jamais le moindre bruit chez vous. L’hébergement de votre site aura des performances parfaitement constantes dans le temps, correspondant au palier de ressources garanties que vous aurez sélectionné (sur les 4 disponibles).

## Comment choisir l'offre qui me convient le mieux ?
Pour cela, il faut se poser plusieurs questions :

### Est ce que votre site peut avoir un impact pour votre activité ?
Pour notre site mypersonaldomain.ovh, c’est particulièrement le cas : si le site ne fonctionne pas, l’activité de l’entreprise est stoppée. De même pour les sites e-commerces. Dans ce cas, prenez une offre Performance qui vous garantit que les ressources attribuées à votre site ne seront jamais mobilisées par d’autres clients trop gourmands. Si ce n’est pas votre cas, vous pouvez continuer les questions :

### A quelle charge votre site devra-t-il résister ?
Si vous avez de nombreux visiteurs, ou que les pages de votre site sont générées à charger (si vous chargez de grandes quantitées de données depuis votre base ou depuis une API externe par exemple), votre site utilisera beaucoup de ressources. Afin que tous vos visiteurs puissent accéder à votre site, vous devrez probablement prendre l’offre Pro, voir Performance.

### Avez vous besoin d'hébergez plusieurs sites différents ?
Les offres d’hébergements web permettent d’héberger plusieurs sites sur la même offre. Vous pouvez par exemple créer un sous-domaine pour votre blog, ou encore créer une min-site web éphémère pour un évènement. Si vous souhaitez héberger plusieurs sites web, vous devez au minimum prendre une offre Perso puisque l’offre Kimsufi est limitée à un seul site.

### Avez vous besoin d'un accès SSH ?
Nous le verrons dans les jours à venir : l’accès SSH peut être très pratique pour déployer le code de son site web de manière automatique. Cet accès n’est disponible qu’à partir des offres Pro et Performances.

Vous n’êtes pas sûr de votre choix ? Ne vous inquiétez pas, vous pouvez changer d’offre à tout moment depuis votre espace client.

## Comment commander ?
Si vous souhaitez commander, rendez-vous sur le site d’OVH : [https://www.ovh.com/fr/hebergement-web](https://www.ovh.com/fr/hebergement-web){.external}. Vous y retrouverez les différentes offres d’hébergement web, avec un tableau comparatif de leurs différentes caractéristiques.

Vous pourrez alors commander votre site web avec votre nom de domaine. Plusieurs options vous seront proposées lors de la commande de votre hébergement web. Nous reviendrons sur chacune d'entre elle d'ici Noël.

Maintenant que vous avez commandé tous les éléments nécessaires au bon fonctionnement de mypersonaldomain.ovh, il est possible de commencer à mettre en ligne vos premières pages. Nous débuterons demain par la [publication d’un blog](../day04/guide.fr-fr.md){.ref}. , pour que l’équipe puisse, avant l’ouverture officielle du site, commencer à communiquer.

À demain

| Article précédent | Article suivant |
|---|---|
| [Choisir et configurer un nom de domaine](https://docs.ovh.com/fr/hosting/24-days/day02/) | [Créer le blog d’entreprise](https://docs.ovh.com/fr/hosting/24-days/day04/) |