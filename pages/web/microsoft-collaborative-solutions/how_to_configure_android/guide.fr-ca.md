---
title: Configurer son compte Exchange sur Android via l'application Gmail
slug: exchange-configuration-android
excerpt: Apprenez à configurer un compte Exchange sur Android, via l'application Gmail
section: Configuration sur smartphone/tablette
order: 02
---

**Dernière mise à jour le 2018/10/05**

## Objectif

Les comptes Exchange peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d'utiliser votre adresse e-mail depuis l'appareil de votre choix.

**Apprenez à configurer un compte Exchange sur Android via l'application Gmail.**

## Prérequis

- Disposer d'une offre [Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/){.external}.
- Disposer de l'application Gmail installée sur votre appareil. Vous pouvez installer cette dernière depuis Google Play Store.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation a été réalisée depuis un appareil Nexus 6 utilisant la version 7.1.1 d'Android. Pour une question d'uniformisation, nous utilisons l'application Gmail pouvant être installée depuis le Play Store. Si vous souhaitez utiliser une autre application, la marche à suivre sera alors différente.
>

## En pratique

### Étape 1 : ajouter le compte

Sur l'écran d'accueil de votre appareil, rendez-vous sur l'application `Gmail`{.action}. L’ajout d’un compte peut s’initier de deux manières différentes :

- **si aucun compte n'est paramétré** : passez l'étape de bienvenue , puis appuyez sur `Ajouter une adresse e-mail`{.action}. Choisissez enfin `Exchange et Office 365`{.action} ; 

- **si un compte a déjà été paramétré** : appuyez sur le pictogramme représentant trois traits en haut à gauche, puis sur celui en forme de flèche à droite du nom du compte déjà paramétré. Appuyez enfin sur `Ajouter un compte`{.action} et choisissez `Exchange et Office 365`{.action}. 

![exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Renseignez votre adresse e-mail, puis appuyez sur `Suivante`{.action}.

Indiquez maintenant le mot de passe de votre adresse e-mail, ne sélectionnez pas de certificat client, puis appuyez sur `Suivante`{.action} pour poursuivre la configuration. Des connexions vers le serveur d'OVHcloud peuvent être effectuées pour configurer votre compte. Si tel est le cas, un avertissement s'affiche sur votre appareil : appuyez sur `OK`{.action} pour effectuer ces connexions.

Renseignez à présent les paramètres du serveur entrant. Certains champs peuvent être pré-remplis.

|Information|Description| 
|---|---| 
|Domaine/Nom d'utilisateur|Renseignez l'adresse e-mail complète.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Certificat client|Ne sélectionnez rien.|
|Serveur|Indiquez le serveur sur lequel est hébergé votre service Exchange. Vous pouvez le retrouver depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} dans l'onglet `Informations générales`{.action} du service Exchange concerné, puis dans le cadre `Connexion`{.action}.|
|Port|Renseignez le port  443 .|  
|Type de sécurité|Choisissez « SSL/TLS ».|

Appuyez maintenant sur `Suivante`{.action}. Si les informations renseignées sont correctes, la connexion au compte réussira.

![exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Pour finaliser votre configuration, vous devez autoriser le serveur d'OVHcloud à contrôler à distance certaines fonctionnalités inhérentes à la sécurité de votre appareil. Appuyez sur `OK`{.action}, prenez connaissance des informations qui s'affichent et appuyez sur `Activer cet administrateur de l'appareil`{.action}.

Nommez enfin votre compte de manière à le reconnaître parmi d'autres affichés dans votre application. Appuyez ensuite sur `Suivante`{.action}.

Vous pouvez effectuer un test d'envoi de message pour vérifier que le compte est correctement paramétré.

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose également une application web disposant de fonctions collaboratives accessible à l’adresse <https://ex.mail.ovh.ca/>. Vous pouvez vous y connecter grâce aux identifiants relatifs à votre adresse e-mail.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.