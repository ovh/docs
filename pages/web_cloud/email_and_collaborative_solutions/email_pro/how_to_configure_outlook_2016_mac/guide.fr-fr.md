---
title: 'E-mail Pro - Configurer son compte e-mail sur Outlook pour macOS'
excerpt: 'Apprenez à configurer un compte E-mail Pro sur Outlook pour Mac'
updated: 2024-10-09
---

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix.

**Apprenez à configurer un compte E-mail Pro sur Outlook pour Mac.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](https://marketplace.ovhcloud.com/c/support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [E-mail Pro](/links/web/email-pro).
- Disposer de l'application Microsoft Outlook installée sur votre Mac.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Vous utilisez Outlook pour Windows ? Consultez notre documentation : [Configurer son adresse e-mail sur Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016).
>

## En pratique

### Étape 1 : ajouter le compte

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**?**.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](/links/manager), dans la rubrique `Web Cloud`{.action} puis `E-mail Pro`{.action}. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

Une fois l'application Outlook lancée sur votre appareil, l'ajout d'un compte peut être effectué de deux manières différentes.

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail.

- **Si un compte a déjà été paramétré** : cliquez sur `Outils`{.action} dans la barre de menu en haut de votre écran puis sur `Comptes`{.action}. Dans la fenêtre qui s'affiche, cliquez sur `+`{.action} puis sur `Nouveau compte`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Renseignez à présent votre adresse e-mail puis cliquez sur `Continuer`{.action}. Parmi les fournisseurs, choisissez `IMAP/POP`{.action} puis remplissez les informations demandées.

|Information|Description|
|---|---|
|Type de compte|Laissez **IMAP** (sélectionné par défaut).|
|Adresse de courrier|Renseignez un nom vous permettant de reconnaître ce compte parmi d'autres affichés dans votre application Outlook.|
|Nom d'utilisateur|Renseignez l'adresse e-mail complète.|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Serveur entrant|Renseignez le serveur « pro**?**.mail.ovh.net ». Laissez cochée la case **Utiliser SSL pour se connecter**.|
|Port entrant|Renseignez le port « 993 ».|
|Serveur sortant|Renseignez le serveur « pro**?**.mail.ovh.net ». Laissez cochée la case **Utiliser SSL pour se connecter**.|
|Port sortant|Renseignez le port « 587 ».|

Une fois les informations complétées, cliquez sur `Ajouter un compte`{.action}. Si celles-ci sont correctes, la connexion au compte réussira.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est bien paramétré.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Si vous devez renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre E-mail Pro.

|Type de serveur|Nom du serveur|SSL|Port|
|---|---|---|---|
|Entrant|pro**?**.mail.ovh.net|Oui|993|
|Sortant|pro**?**.mail.ovh.net|Oui|587|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose également une application web disposant de [fonctions collaboratives](/links/web/emails). Celle-ci est accessible à l’adresse <https://pro1.mail.ovh.net>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

## Aller plus loin

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur macOS, consultez [le centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/add-an-email-account-to-outlook-for-mac-6aeec61b-86af-40af-8ffe-985d0fc82ddb).

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Outlook pour Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)

[Configurer son compte Exchange sur Outlook pour Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.