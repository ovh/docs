---
title: Modifier le mot de passe de la base de données d'un hébergement web
slug: modifier-mot-de-passe-base-de-donnees
excerpt: Apprenez à changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web
section: Bases de données
order: 2
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Une base de données (*database*, « DB » ou « BDD ») permet de stocker des éléments dits dynamiques, comme des commentaires ou des articles par exemple. Ces bases sont aujourd'hui utilisées par la quasi-totalité des systèmes de gestion de contenu (*Content Management System* ou CMS) comme WordPress, Joomla! et sont accessibles grâce à un mot de passe associé.

**Apprenez à changer le mot de passe d'une base de données créée dans le cadre d'une offre d'hébergement web.**

## Prérequis

- Disposer d'une offre d’[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Disposer d'un accès à la gestion de l'offre d'hébergement web depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> En modifiant le mot de passe de votre base de données, vous devrez également répercuter ce changement dans le fichier de configuration liant cette dernière à votre site internet.
>

## En pratique

### Étape 1 : évaluer la situation

**Changer le mot de passe d'une base de données est une manipulation sensible** : ce changement pourrait rendre inaccessible tout site internet utilisant cette base de données si la modification n'est pas correctement effectuée. Comprendre les impacts d’un tel changement vous permettra de mieux appréhender la modification que vous allez opérer.

Aujourd'hui, la quasi-totalité des CMS (WordPress, Joomla!, etc.) utilisent une base de données pour y stocker des éléments dynamiques, comme les commentaires ou les articles. Pour ces sites, une connexion à la base de données est donc indispensable afin que ceux-ci puissent fonctionner correctement. Pour cela, un fichier de configuration disposant des informations de la base de données permet cette connexion. De ce fait, en modifiant le mot de passe de la base de données chez OVHcloud, vous devrez impérativement répercuter ce changement dans le fichier assurant le lien entre votre site et la base de données.

> [!primary]
>
> Avant d'opérer tout changement, nous vous recommandons vivement de vérifier si votre site est relié ou non à une base de données. Si tel est le cas, assurez-vous de savoir comment répercuter le changement afin de ne pas rendre votre site internet inaccessible.
>
> Si vous ne savez pas comment agir, ce paramétrage étant inhérent à la configuration de votre site et non à OVHcloud, nous vous recommandons par conséquent de vous rapprocher de son éditeur ou de faire appel à un professionnel tel qu'un prestataire spécialisé si vous souhaitez obtenir de l'aide pour réaliser cette manipulation.
>

### Étape 2 : accéder à la gestion des bases de données de l'hébergement

Pour démarrer la manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web.

![databasepassword](images/database-password-step1.png){.thumbnail}

### Étape 3 : modifier le mot de passe de la base de données

Pour modifier le mot de passe, cliquez sur les trois points à droite de la base de données concernée, puis sur `Changer le mot de passe`{.action}.

![databasepassword](images/database-password-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe, confirmez-le, puis cliquez sur le bouton `Valider`{.action}.

**Le changement nécessite quelques minutes avant d'être effectif.**

> [!primary]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors du choix du nouveau mot de passe. Nous vous recommandons également :
>
> - de ne pas utiliser deux fois le même mot de passe ;
>
> - de choisir un mot de passe qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à votre nom, prénom ou date de naissance, par exemple) ;
>
> - de renouveler régulièrement vos mots de passe ;
>
> - de ne pas noter sur un papier ou de vous envoyer vos mots de passe sur votre adresse e-mail ;
>
> - de ne pas enregistrer vos mots de passe dans votre navigateur internet, même si ce dernier vous le propose.
>

![databasepassword](images/database-password-step3.png){.thumbnail}

### Étape 4 : rétablir le lien entre la base et le site

> [!primary]
>
> Cette partie peut être facultative si votre site internet n'est pas relié à une base de données.
>

Si votre site internet affiche un message indiquant que la connexion vers la base de données ne peut être effectuée, cela signifie que vous n'avez pas répercuté le changement de mot de passe dans le fichier assurant le lien entre votre site et la base de données.

En effet, pour que votre site internet soit en mesure de s'y connecter, un fichier se trouvant sur votre espace de stockage comporte des informations permettant de se connecter à la base : un nom d'utilisateur et de son mot de passe, le nom de la base de données ainsi que de l'adresse du serveur. Du fait de la modification du mot de passe de la base depuis l'espace client OVHcloud, ce lien est à présent brisé.

Pour le rétablir, vous devez renseigner le nouveau mot de passe dans le fichier comportant les informations de la base de données. Ce paramétrage étant inhérent à la configuration de votre site et non à OVHcloud, nous vous recommandons de vous rapprocher de l'éditeur du site internet ou de faire appel à un professionnel tel qu'un prestataire spécialisé si vous souhaitez obtenir de l'aide pour réaliser cette manipulation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
