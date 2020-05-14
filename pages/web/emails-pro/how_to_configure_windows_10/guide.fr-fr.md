---
title: 'Configurer son compte E-mail Pro sur Courrier pour Windows 10'
slug: configuration-courrier-windows-10
excerpt: 'Apprenez à configurer un compte E-mail Pro sur l''application Courrier pour Windows 10'
section: 'Configuration sur ordinateur'
order: 4
---

**Dernière mise à jour le 20/03/2020**

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix.

**Apprenez à configurer un compte E-mail Pro sur l'application Courrier pour Windows 10.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external}.
- Disposer de l'application Courrier installée sur votre appareil.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Étape 1 : ajouter le compte

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**X**.mail.ovh.net. Vous devrez remplacer le « X » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `E-mail Pro`{.action}
> dans la colonne de gauche. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

Une fois l'application Courrier lancée sur votre appareil, l'ajout d'un compte peut être effectué de deux manières différentes.

- **Lors du premier démarrage de l'application** : une fenêtre vous invite à cliquer sur `Ajouter un compte`{.action}.

- **Si un compte a déjà été paramétré** : cliquez sur `Comptes`{.action} dans la barre de menu à gauche de l'application, puis sur `Ajouter un compte`{.action} dans le menu venant d'apparaître à droite.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Dans la fenêtre qui s'affiche, cliquez sur `Configuration avancée`{.action} puis choisissez `Courrier Internet`{.action} en type de compte.

Renseignez à présent les informations demandées :

|Information|Description|
|---|---|
|Adresse de courrier|Renseignez l'adresse e-mail complète.|
|Nom d'utilisateur|Indiquez l'adresse e-mail complète.|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Nom du compte|Indiquez un nom vous permettant de reconnaître ce compte parmi d'autres affichés dans votre application Courrier.|
|Envoyer vos messages en utilisant ce nom|Renseignez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.|
|Serveur de courrier entrant|Renseignez le serveur « pro**X**.mail.ovh.net:993 ».|
|Type de compte|Nous conseillons une utilisation en **IMAP4**. Vous pouvez cependant sélectionner **POP** (stockage des e-mails en local sur votre application Courrier) dans le menu déroulant.|
|Serveur de courrier sortant|Renseignez le serveur « pro**X**.mail.ovh.net:587 ».|

Assurez-vous que les cases sont bien cochées pour les choix suivants :

- « Le serveur sortant requiert l'authentification » ;
- « Utiliser le même nom d'utilisateur et mot de passe pour l'envoi du courrier » ;
- « Exiger le protocole SSL pour le courrier entrant » ;
- « Exiger le protocole SSL pour le courrier sortant ».

Une fois les informations complétées, cliquez sur `Se connecter`{.action}. Si celles-ci sont correctes, la connexion au compte réussira.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est bien paramétré.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Si vous devez renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre E-mail Pro :

|Type de serveur|Nom du serveur|SSL|Port|
|---|---|---|---|
|Entrant|pro**X**.mail.ovh.net|Oui|993|
|Sortant|pro**X**.mail.ovh.net|Oui|587|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose également une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external}. Celle-ci est accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur l'application Courrier pour Windows 10](https://docs.ovh.com/fr/emails/configuration-courrier-sur-windows-10/){.external}

[Configurer son compte Exchange sur l'application Courrier pour Windows 10](https://docs.ovh.com/fr/microsoft-collaborative-solutions/configuration-courrier-windows-10/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.