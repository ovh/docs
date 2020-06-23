---
title: 'Modifier le mot de passe d''un utilisateur FTP'
slug: modifier-mot-de-passe-utilisateur-ftp
excerpt: 'Apprenez à changer le mot de passe d''un utilisateur FTP créé sur votre hébergement web OVHcloud'
section: 'FTP et SSH'
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les offres d'hébergement web d'OVHcloud donnent accès à un espace de stockage permettant la mise en ligne des fichiers de votre site internet. L'accès à cet espace est possible via un utilisateur FTP et du mot de passe qui lui est associé.

**Apprenez à modifier le mot de passe d'un utilisateur FTP créé sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion des utilisateurs FTP

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `FTP - SSH`{.action}.

Le tableau affiche les utilisateurs FTP créés sur votre hébergement. Ces utilisateurs vous permettent d'accéder à votre espace de stockage pour y mettre en ligne les fichiers de votre site internet. Un utilisateur est créé automatiquement lors de l'installation de votre hébergement.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### Étape 2 : modifier le mot de passe d'un utilisateur FTP

La modification du mot de passe d'un utilisateur FTP créé sur votre hébergement s'effectue de deux manières selon votre offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} :

- **pour les offres ne pouvant pas créer plusieurs utilisateurs FTP** (offres Start 10M, Kimsufi Web et Perso) : cliquez sur sur le pictogramme en forme de crayon dans la colonne `Mot de passe`{.action} du tableau, renseignez le nouveau mot de passe dans la zone de texte, puis validez le changement ;

- **pour les offres pouvant créer plusieurs utilisateurs FTP** (offres Pro et Performance) : dans le tableau, cliquez sur le pictogramme en forme de roue dentée à droite de l'utilisateur choisi puis sur `Changer le mot de passe`{.action}. Dans la fenêtre qui s'affiche, renseignez le nouveau mot de passe souhaité, confirmez-le puis cliquez sur le bouton `Valider`{.action}.

Le changement nécessite quelques minutes pour être effectif.

> [!primary]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors du choix du nouveau mot de passe. Nous vous recommandons également :
>
> - de ne pas utiliser deux fois le même mot de passe ;
>
> - de choisir un mot de passe qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à votre nom, prénom ou date de naissance par exemple) ;
>
> - de renouveler régulièrement vos mots de passe ;
>
> - de ne pas noter sur un papier ou de vous envoyer vos mots de passe sur votre adresse e-mail ;
>
> - de ne pas enregistrer vos mots de passe dans votre navigateur internet, même si ce dernier vous le propose.
>

### Étape 3 : accéder à votre espace de stockage

Une fois le mot de passe de l'utilisateur FTP modifié, vous pouvez à présent accéder à votre espace de stockage.

Pour cela, et selon votre offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external}, plusieurs moyens s'offrent à vous :

- **utiliser le FTP Explorer** : vous permettra d'accéder à votre espace de stockage depuis votre navigateur internet. Pour l'utiliser, toujours depuis l'onglet `FTP - SSH`{.action}, cliquez sur le bouton `FTP Explorer`{.action} ;

- **utiliser un logiciel compatible avec le protocole FTP** : vous devrez installer un logiciel compatible sur votre ordinateur (comme FileZilla par exemple) ;

- **utiliser un accès SSH** : vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage. Des connaissances plus avancées sont nécessaires pour utiliser ce type d'accès.

Pour vous aider dans cette démarche, nous vous invitons également à consulter cette documentation : [« Se connecter à l’espace de stockage de son hébergement web »](../connexion-espace-stockage-ftp-hebergement-web/){.external}.

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement web](../connexion-espace-stockage-ftp-hebergement-web/){.external}.

[Utilisation logiciel FileZilla avec votre hébergement](../mutualise-guide-utilisation-filezilla/){.external}.

[Le SSH sur les hébergements web](../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
