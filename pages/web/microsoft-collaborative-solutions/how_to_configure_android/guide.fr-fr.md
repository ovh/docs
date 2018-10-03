---
title: Configurer son compte Exchange sur Android via l'application Gmail
slug: exchange-configuration-sous-android
excerpt: Apprenez à configurer un compte Exchange sur Android, via l'application Gmail
section: Configuration Exchange sur smartphone
order: 2
---

**Dernière mise à jour le 17/05/2018**

## Objectif

Les comptes Exchange peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d'utiliser votre adresse e-mail depuis l'appareil de votre choix.

**Apprenez à configurer un compte Exchange sur Android via l'application Gmail.**


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [Exchange](https://www.ovh.com/fr/emails/){.external}.
- Disposer de l'application Gmail installée sur votre appareil. Vous pouvez installer cette dernière depuis Google Play Store.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation a été réalisée depuis un appareil Nexus 6 utilisant la version 7.1.1 d'Android. Pour une question d'uniformisation, nous utilisons l'application Gmail pouvant être installée depuis le Play Store. Si vous souhaitez utiliser une autre application, la marche à suivre sera alors différente.
>
> Vous utilisez une version antérieure d'Android ? Consultez notre documentation : [Configurer son compte Exchange sur Android 5 Lollipop](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-sous-android-5-lollipop/){.external}.
>

## En pratique

### Étape 1 : ajouter le compte

Sur l'écran d'accueil de votre appareil, rendez-vous sur l'application `Gmail`{.action}. L’ajout d’un compte peut s’initier de deux manières différentes :

- **si aucun compte n'est paramétré** : passez l'étape de bienvenue , puis appuyez sur `Ajouter une adresse e-mail`{.action}. Choisissez enfin `Exchange et Office 365`{.action} ; 

- **si un compte a déjà été paramétré** : appuyez sur le pictogramme représentant trois traits en haut à gauche, puis sur celui en forme de flèche à droite du nom du compte déjà paramétré. Appuyez enfin sur `Ajouter un compte`{.action} et choisissez `Exchange et Office 365`{.action}. 

![exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Renseignez votre adresse e-mail, puis appuyez sur `Suivante`{.action}.

Indiquez maintenant le mot de passe de votre adresse e-mail, ne sélectionnez pas de certificat client, puis appuyez sur `Suivante`{.action} pour poursuivre la configuration. Des connexions vers le serveur d'OVH peuvent être effectuées pour configurer votre compte. Si tel est le cas, un avertissement s'affiche sur votre appareil : appuyez sur `OK`{.action} pour effectuer ces connexions.

Renseignez à présent les paramètres du serveur entrant. Certains champs peuvent être pré-remplis.

|Information|Description| 
|---|---| 
|Domaine/Nom d'utilisateur|Renseignez l'adresse e-mail complète.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Certificat client|Ne sélectionnez rien.|
|Serveur|Indiquez le serveur sur lequel est hébergé votre service Exchange. Vous pouvez le retrouver depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} dans l'onglet `Informations générales`{.action} du service Exchange concerné, puis dans le cadre `Connexion`{.action}.|
|Port|Renseignez le port  443 .|  
|Type de sécurité|Choisissez « SSL/TLS ».|

Appuyez maintenant sur `Suivante`{.action}. Si les informations renseignées sont correctes, la connexion au compte réussira.

![exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Pour finaliser votre configuration, vous devez autoriser le serveur d'OVH à contrôler à distance certaines fonctionnalités inhérentes à la sécurité de votre appareil. Appuyez sur `OK`{.action}, prenez connaissance des informations qui s'affichent et appuyez sur `Activer cet administrateur de l'appareil`{.action}.

Nommez enfin votre compte de manière à le reconnaître parmi d'autres affichés dans votre application. Appuyez ensuite sur `Suivante`{.action}.

Vous pouvez effectuer un test d'envoi de message pour vérifier que le compte est correctement paramétré.

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVH propose également une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external} accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Vous pouvez vous y connecter grâce aux identifiants relatifs à votre adresse e-mail.

## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Android via l'application Gmail](https://docs.ovh.com/fr/emails/configuration-android-6/){.external}.

[Configurer son compte E-mail Pro sur Android via l'application Gmail](https://docs.ovh.com/fr/emails-pro/configuration-android/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.