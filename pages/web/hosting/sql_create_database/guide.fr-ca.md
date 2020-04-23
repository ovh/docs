---
title: Créer une base de données sur son hébergement web
slug: creer-base-de-donnees
excerpt: Apprenez à créer une base de données sur votre hébergement web OVH
section: Bases de données
order: 1
---

**Dernière mise à jour le 27/04/2018**

## Objectif

Une base de données (*database*, « DB » ou « BDD ») permet de stocker des éléments dits dynamiques, comme des commentaires ou des articles par exemple. Ces bases sont aujourd'hui utilisées par la quasi-totalité des systèmes de gestion de contenu (*Content Management System* ou CMS) comme WordPress, Joomla!.

**Apprenez à créer une base de données sur votre hébergement web OVH.**

## Prérequis

- Disposer d'une offre d’[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}.
- Avoir la possibilité de créer des bases de données dans le cadre de votre offre.
- Disposer d'un accès à la gestion de l'offre d'hébergement web depuis l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion des bases de données de l'hébergement

Pour démarrer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Étape 2 : créer la base de données

Pour initier la création d'une nouvelle base de données, il existe deux possibilités :

- **si vous n'avez pas encore créé de base de données** : cliquez sur le bouton `Créer une base de données`{.action} ;

- **si vous avez déjà créé une base de données** : cliquez sur le bouton `Actions`{.action} puis sur `Créer une base de données`{.action}.

Dans la fenêtre qui s'affiche, sélectionnez les informations souhaitées, puis cliquez sur `Suivant`{.action}.

|Information|Description|  
|---|---|  
|Moteur de base de données|Sélectionnez le moteur de base de données qui sera utilisé par cette dernière. Les bases de données comprises dans une offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} ne proposent que le moteur MySQL.|  
|Version de la base de données|Sélectionnez la version utilisée par le moteur de la base de données. Veillez à la compatibilité de votre site avec la version choisie. |  
|Type de base de données|Sélectionnez la capacité de la base de données. Il s'agit de l'espace dont bénéficiera votre base pour stocker des données.|   

Complétez ensuite les informations demandées puis cliquez sur `Suivant`{.action}.

|Information|Description|   
|---|---|   
|Utilisateur|Personnalisez le nom d'utilisateur qui sera associé à votre base de données.|   
|Mot de passe|Définissez un mot de passe pour cet utilisateur, puis confirmez-le.|   

Vérifiez alors les informations qui s'affichent dans le récapitulatif ; si celles-ci sont correctes, cliquez sur `Valider`{.action} pour lancer la création de la base de données. Répétez cette manipulation autant de fois que nécessaire pour créer plusieurs bases de données.

> [!primary]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors du choix du mot de passe. Nous vous recommandons également :
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

![databasecreation](images/database-creation-step2.png){.thumbnail}

### Étape 3 : utiliser votre base de données

Il ne reste plus qu'à utiliser votre base de données. Pour cela, munissez-vous des informations permettant de s'y connecter : le nom d'utilisateur et le mot de passe que vous venez de définir, le nom de la base de données que vous venez également de personnaliser, ainsi que de l'adresse du serveur.

Ces informations sont indispensables pour relier votre site internet à la base de données. Selon le site internet utilisé, ce lien doit être réalisé manuellement ou via une interface générée par le site lui-même. Ce paramétrage étant inhérent à la configuration de votre site et non à OVH, nous vous recommandons de vous rapprocher de l'éditeur du site internet ou de faire appel à un professionnel comme un prestataire spécialisé si vous souhaitez obtenir de l'aide pour effectuer cette manipulation.

OVH met à votre disposition un applicatif en ligne : phpMyAdmin. Pour connaître le lien d'accès à ce dernier, toujours positionné sur l'onglet `Bases de données`{.action}, cliquez dans le tableau sur les trois points à droite de la base de données concernée puis sur `Accéder à phpMyAdmin`{.action}. Vous devrez y renseigner les identifiants de la base créée chez OVH.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.