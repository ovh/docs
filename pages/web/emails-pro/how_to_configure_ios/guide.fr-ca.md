---
title: 'Configurer son compte E-mail Pro sur un iPhone ou un iPad'
slug: configuration-iphone
excerpt: 'Apprenez à configurer un compte E-mail Pro sur un iPhone ou un iPad, via l''application Mail'
section: 'Configuration sur smartphone'
order: 1
---

**Dernière mise à jour le 19/03/2020**

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d'utiliser votre adresse e-mail depuis l'appareil de votre choix.

**Apprenez à configurer votre compte E-mail Pro sur un iPhone ou un iPad, via l'application Mail.**


> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external}.
- Disposer de l’application Mail installée sur votre appareil.
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

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**X**.mail.ovh.net. Vous devrez remplacer le « X » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `E-mail Pro`{.action}
>  dans la colonne de gauche. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

Sur l'écran d'accueil de votre appareil, rendez-vous sur `Réglages`{.action}. L'ajout d'un compte s'effectue de deux manières selon votre version d'iOS :

- **pour iOS 7, 8, 9 et 10** : appuyez sur `Mail, Contacts, Calendrier`{.action}, puis sur `Ajouter un compte`{.action}. Choisissez finalement `Autre`{.action}, puis `Ajouter un compte Mail`{.action} ;

- **pour iOS 11** : appuyez sur `Comptes et mots de passe`{.action}, puis sur `Ajouter un compte`{.action}. Choisissez finalement `Autre`{.action}, puis `Ajouter un compte Mail`{.action}.

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

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
|IMAP ou POP|Laissez **IMAP** déjà sélectionné par défaut.|
|Nom d'hôte (réception)|Renseignez le serveur « pro**X**.mail.ovh.net ».|
|Nom d'utilisateur (réception)|Renseignez l'adresse e-mail complète.|
|Mot de passe (réception)|Renseignez le mot de passe de l'adresse e-mail.|  
|Nom d'hôte (envoi)|Renseignez le serveur « pro**X**.mail.ovh.net ».|
|Nom d'utilisateur (envoi)|Renseignez l'adresse e-mail complète.|
|Mot de passe (envoi)|Renseignez le mot de passe de l'adresse e-mail.|

Appuyez maintenant sur `Suivant`{.action}. Si les informations renseignées sont correctes, la connexion au compte réussira.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

Lors du choix des applications, assurez-vous de bien laisser `Mail`{.action} coché afin que l'application puisse utiliser ce compte, puis appuyez sur `Sauvegarder`{.action}.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est correctement paramétré.

Si vous êtes amené à renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre E-mail Pro :

|Type de serveur|Nom du serveur|SSL|Port|
|---|---|---|---|
|Entrant|pro**X**.mail.ovh.net|Oui|993|
|Sortant|pro**X**.mail.ovh.net|Oui|587|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVH propose également une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external} accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Vous pouvez vous y connecter grâce aux identifiants relatifs à votre adresse e-mail.

## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur un iPhone ou un iPad](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-iphone-ios-91/){.external}.

[Configurer son compte Exchange sur un iPhone ou un iPad](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-ios-iphone-ipad/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.