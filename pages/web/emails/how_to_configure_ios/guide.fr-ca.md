---
title: Configurer son adresse e-mail sur un iPhone ou un iPad
slug: mail-mutualise-guide-configuration-iphone-ios-91
excerpt: Apprenez à configurer l'adresse e-mail de votre hébergement sur un iPhone ou un iPad, via l'application Mail
section: Configuration sur smartphone
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les adresses e-mail de l'offre MX Plan peuvent être configurées sur un logiciel ou une application de messagerie compatibles. Cela vous permet d'envoyer et de recevoir vos messages depuis l'appareil de votre choix.

**Apprenez à configurer une adresse e-mail MX Plan sur un iPhone ou un iPad, via l'application Mail.**


> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/){.external}.
- Disposer de l'application Mail installée sur votre appareil.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation est applicable aux versions suivantes d'iOS : iOS 7 et versions ultérieures.
>

## En pratique

Cet ajout peut s'effectuer de deux manières différentes :

- **en quelques clics depuis notre outil Apple Devices** : rendez-vous sur le lien <https://autodiscover.mail.ovh.net/AppleDevices/> et suivez les différentes étapes de configuration ;

- **en suivant l'assistant de configuration de votre appareil**.

À partir de ce point, cette documentation abordera uniquement la configuration des e-mails depuis votre appareil.

### Étape 1 : ajouter le compte

Sur l'écran d'accueil de votre appareil, rendez-vous sur `Réglages`{.action}. L'ajout d'un compte s'effectue de deux manières selon votre version d'iOS :

- **pour iOS 7, 8, 9 et 10** : appuyez sur `Mail, Contacts, Calendrier`{.action}, puis sur `Ajouter un compte`{.action}. Choisissez finalement `Autre`{.action}, puis `Ajouter un compte Mail`{.action} ;

- **pour iOS 11** : appuyez sur `Comptes et mots de passe`{.action}, puis sur `Ajouter un compte`{.action}. Choisissez finalement `Autre`{.action}, puis `Ajouter un compte Mail`{.action}.

![exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Renseignez à présent les informations de votre compte :

|Information|Description|
|---|---|
|Nom|Renseignez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.|
|Adresse e-mail|Renseignez l'adresse e-mail complète.|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Description|Renseignez le nom vous permettant de reconnaître ce compte parmi d'autres affichés dans votre application Mail.|

Appuyez maintenant sur `Suivant`{.action}, puis renseignez les informations demandées :

|Information|Description| 
|---|---| 
|IMAP ou POP|Nous conseillons une utilisation en **IMAP** (sélectionné par défaut). Vous pouvez cependant sélectionner **POP** (stockage des e-mails en local sur votre application Mail) en le sélectionnant.|
|Nom d'hôte (réception)|Renseignez le serveur « ssl0.ovh.net ».|
|Nom d'utilisateur (réception)|Renseignez l'adresse e-mail complète.|
|Mot de passe (réception)|Renseignez le mot de passe de l'adresse e-mail.|  
|Nom d'hôte (envoi)|Renseignez le serveur « ssl0.ovh.net ».|
|Nom d'utilisateur (envoi)|Renseignez l'adresse e-mail complète.|
|Mot de passe (envoi)|Renseignez le mot de passe de l'adresse e-mail.| 

Appuyez maintenant sur `Suivant`{.action}. Si les informations renseignées sont correctes, la connexion au compte réussira.

![exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Lors du choix des applications, assurez-vous de bien laisser `Mail`{.action} coché afin que l'application puisse utiliser ce compte, puis cliquez sur `Sauvegarder`{.action}.

Vous pouvez effectuer un test d’envoi depuis l’application Mail de votre appareil pour vérifier que le compte est correctement paramétré.

Si vous êtes amené à renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre MX Plan :

- **pour une configuration en IMAP**

|Type de serveur|Nom du serveur|SSL|Port|
|---|---|---|---|
|Entrant|ssl0.ovh.net|Oui|993|
|Sortant|ssl0.ovh.net|Oui|465|

- **pour une configuration en POP**

|Type de serveur|Nom du serveur|SSL|Port|
|---|---|---|---|
|Entrant|ssl0.ovh.net|Oui|995|
|Sortant|ssl0.ovh.net|Oui|465|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose une application web permettant d'accéder à votre adresse e-mail depuis votre navigateur internet accessible sur l’adresse <https://www.ovh.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants relatifs à votre adresse e-mail.

## Aller plus loin

[Configurer son compte E-mail Pro sur un iPhone ou un iPad](../../emails-pro/configuration-iphone/){.external}.

[Configurer son compte Exchange sur un iPhone ou un iPad](../../microsoft-collaborative-solutions/exchange-configuration-automatique-sous-ios-iphone-ipad/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
