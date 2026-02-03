---
title: 'E-mail Pro - Configurer un compte e-mail sur Outlook classique pour Windows'
excerpt: 'Découvrez comment configurer votre compte E-mail Pro sur Outlook classique pour Windows'
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix.

**Découvrez comment configurer votre adresse e-mail E-mail Pro sur Outlook ou ultérieur pour Windows.**

## Prérequis

- Disposer d’un compte e-mail [E-mail Pro](/links/web/email-pro).
- Disposer de l'application [Outlook classique](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) sur Windows.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

/// details | Informations relatives à la gestion et la configuration des services OVHcloud

OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.

Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/transversal/marketplace-support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

///

## En pratique

> [!warning]
>
> Cette documentation s’applique uniquement à **Outlook classique** disponible dans la suite Microsoft 365. Si vous utilisez le nouvel Outlook, consultez notre guide « [E-mail Pro - Ajouter un compte e-mail sur le nouvel Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10) ».
>
> Pour installer Outlook classique sur votre ordinateur Windows, téléchargez-le depuis la page Microsoft « [Installer ou réinstaller Outlook classique sur un PC Windows](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) » et installez-le.
>
> Une fois l'installation terminée, pour distinguer les deux versions lorsqu'elles sont installées, tapez « Outlook » dans la barre de recherche Windows. Vous pourrez alors constater la différence comme ci-dessous.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Ajouter le compte <a name="add-account"></a>

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro?.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
>
> 1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
> 1. Rendez-vous dans la partie `Web Cloud`{.action}.
> 1. Cliquez sur `Email Pro`{.action}.
> 1. Sélectionnez la plateforme concernée.
> 1. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail. Passez directement à l'étape 1 plus bas sur cette page.

- **Si un compte a déjà été paramétré** : cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran, puis sur `Ajouter un compte`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

Pour configurer votre adresse e-mail, suivez les étapes en cliquant sur les onglets ci-dessous.

> **Étape 1**
>>
>> - Depuis la fenêtre **Ajouter un compte**, sélectionnez `Configuration manuelle ou types de serveurs supplémentaires`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>> - Sélectionnez `POP ou IMAP`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> Saisissez les informations de connexion à votre compte **(1)** :
>>
>> Informations sur l'utilisateur <br>
>> **Votre nom** : définissez un nom d'affichage.<br>
>> **Adresse de courrier** : saisissez votre adresse e-mail complète.<br>
>>
>> Informations sur le serveur <br>
>> **Type de compte** : sélectionnez IMAP.<br>
>> **Serveur de courrier entrant** : pro?.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur).<br>
>> **Serveur de courrier sortant (SMTP)** : pro?.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur).<br>
>>
>> Informations de connexion <br>
>> **Nom d'utilisateur** : Saisissez votre adresse e-mail complète.<br>
>> **Mot de passe** : Saisissez le mot de passe associé à votre adresse e-mail.<br>
>>
>> Cliquez sur `Paramètres supplémentaires...`{.action} **(2)** et passez à l'étape suivante.
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Étape 3**
>>
>> Depuis l'onglet `Serveur sortant`, cochez `Mon serveur sortant (SMTP) requiert une authentification`{.action} et laissez `Utiliser les mêmes paramètres que mon serveur de courrier entrant`{.action} sélectionné.
>>
>> Depuis l'onglet `Options avancées` :
>>
>> - **Serveur entrant (IMAP)** : 993
>> - **Utiliser le type de connexion chiffrée suivant** : SSL/TLS
>> - **Serveur de courrier sortant (SMTP)** : 587
>> - **Utiliser le type de connexion chiffrée suivant** : STARTTLS
>>
>> Cliquez sur `OK`{.action} pour valider les informations. Cliquez sur `Suivant`{.action} pour lancer la configuration du compte.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Étape 4**
>>
>> Cliquez sur `Suivant`{.action} pour lancer la configuration du compte. Si les paramètres sont validés, vous obtiendrez la fenêtre ci-dessous.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Le Webmail OVHcloud est accessible [ici](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, n'hésitez pas à consulter notre guide « [Consulter son compte Exchange depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ».

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consultez le paragraphe « **Exporter depuis Windows** » sur notre guide « [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter-depuis-windows) ».

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Allez dans `Fichier`{.action} depuis la barre de menu en haut de votre écran.
- Sélectionnez le compte à modifier dans le menu déroulant **(1)**.
- Cliquez sur `Paramètres du compte`{.action} **(2)** en dessous.
- Cliquez sur `Paramètres du compte...`{.action} **(3)** pour accéder à la fenêtre de paramètres.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}

- La fenêtre de paramètres des comptes s'affiche, sélectionnez le compte e-mail concerné et cliquez sur `Modifier...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Pour configurer votre compte, suivez les instructions à partir de **l'étape 2** dans la partie [Ajouter le compte](#add-account) de ce guide.

### Paramètres généraux d'envoi et de réception <a name="settings-account"></a>

#### Paramètres de réception IMAP et POP <a name="imap-pop"></a>

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**.

Sélectionnez l'onglet correspondant à votre type de configuration :

> [!tabs]
> **Configuration IMAP**
>>
>> - **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur entrant** : pro?.mail.ovh.net (remplacez bien le «?» par le numéro de votre serveur).
>> - **Port** : 993.
>> - **Type de sécurité** : SSL/TLS.
>>
> **Configuration POP**
>>
>> - **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur entrant** : pro?.mail.ovh.net (remplacez bien le «?» par le numéro de votre serveur).
>> - **Port** : 995.
>> - **Type de sécurité** : SSL/TLS.

#### Paramètres d'envoi SMTP <a name="smtp"></a>

Pour l'envoi des e-mails, retrouvez ci-dessous les paramètres **SMTP** à utiliser :

**Configuration SMTP**

- **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
- **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
- **Serveur sortant** : pro?.mail.ovh.net (remplacez bien le «?» par le numéro de votre serveur).
- **Port** : 587.
- **Type de sécurité** : STARTTLS.

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur macOS, consultez [le centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/ajouter-un-compte-de-courrier-dans-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurer son compte Exchange sur Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Échangez avec notre [communauté d'utilisateurs](/links/community).