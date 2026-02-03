---
title: "MX Plan - Configurer son adresse e-mail sur Outlook classique pour Windows"
excerpt: "Découvrez comment configurer votre adresse e-mail MX Plan sur Outlook classique pour Windows"
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

Les adresses e-mail de l'offre **MX Plan** peuvent être configurées sur un logiciel de messagerie compatible. Cela vous permet d'envoyer et de recevoir vos messages depuis l'application de votre choix.

**Découvrez comment configurer votre adresse e-mail MX Plan sur Outlook pour Windows.**

## Prérequis

- Disposer d'une solution e-mail OVHcloud **MX Plan** proposée avec nos [offres d’hébergement web](/links/web/hosting).
- Disposer de l'application [Outlook classique](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) sur Windows.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

/// details | Informations relatives à la gestion et la configuration des services OVHcloud

OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.

Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

///

> [!primary]
>
> Vous utilisez Outlook pour Mac ? Consultez notre documentation : [Configurer son adresse e-mail sur Outlook pour Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## En pratique

> [!warning]
>
> Cette documentation s’applique uniquement à **Outlook classique** disponible dans la suite Microsoft 365. Si vous utilisez le nouvel Outlook, consultez notre guide [MX Plan - Ajouter un compte e-mail sur le nouvel Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>
> Pour installer Outlook classique sur votre ordinateur Windows, téléchargez-le depuis la page Microsoft « [Installer ou réinstaller Outlook classique sur un PC Windows](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) » et installez-le.
>
> Une fois l'installation terminée, afin de distinguer les deux versions lorsqu'elles sont installées, tapez « Outlook » dans la barre de recherche Windows. Vous pourrez alors constater la différence comme ci-dessous.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Ajouter le compte <a name="add-account"></a>

> [!primary]
>
> Vous ne savez pas si vous devez configurer votre compte e-mail en **POP** ou en **IMAP**?
>
> Avant de poursuivre, consultez la section « [POP ou IMAP, quelle est la différence ?](#popimap) » de ce guide.
>
> Dans les paramètres suivants, vous constaterez la possibilité de renseigner 2 noms d'hôtes différents pour le même serveur (entrant ou sortant). Ces valeurs renvoient exactement au même serveur, elles ont été mises en place pour faciliter la saisie et éviter la confusion entre les protocoles POP, IMAP et SMTP qui utilisent des ports différents.

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail. Passez directement à l'étape 1 plus bas sur cette page.

- **Si un compte a déjà été paramétré** : cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran, puis sur `Ajouter un compte`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail .h-500}

Pour configurer votre adresse e-mail, suivez les étapes en cliquant sur les onglets ci-dessous.

> [!warning]
>
> Il est nécessaire de bien renseigner la valeur correspondant à votre localisation (**EUROPE** ou **AMERIQUE / ASIE-PACIFIQUE**).

> [!tabs]
> **Étape 1**
>>
>> - Depuis la fenêtre **Ajouter un compte**, sélectionnez `Configuration manuelle ou types de serveurs supplémentaires`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>> - Sélectionnez `POP ou IMAP`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> Saisissez les informations de connexion à votre compte **(1)** :
>>
>> Informations sur l'utilisateur <br>
>> **Votre nom** : définissez un nom d'affichage.<br>
>> **Adresse de courrier** : daisissez votre adresse e-mail complète.<br>
>>
>> Informations sur le serveur <br>
>> - **Type de compte** : sélectionnez IMAP<br>
>> - **Serveur de courrier entrant** : <br>
>>      - **EUROPE** : imap.mail.ovh.net **ou** ssl0.ovh.net <br>
>>      - **AMERIQUE/ASIE-PACIFIQUE** : imap.mail.ovh.ca <br>
>> - **Serveur de courrier sortant (SMTP)** : <br>
>>      - **EUROPE** : smtp.mail.ovh.net **ou** ssl0.ovh.net <br>
>>      - **AMERIQUE/ASIE-PACIFIQUE** : smtp.mail.ovh.ca <br>
>>
>> Informations de connexion <br>
>> **Nom d'utilisateur** : saisissez votre adresse e-mail complète.<br>
>> **Mot de passe** : saisissez le mot de passe associé à votre adresse e-mail.<br>
>>
>> Cliquez sur `Paramètres supplémentaires...`{.action} **(2)** et passez à l'étape suivante
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Étape 3**
>>
>> Depuis l'onglet `Serveur sortant`, cochez `Mon serveur sortant (SMTP) requiert une authentification`{.action} et laissez `Utiliser les mêmes paramètres que mon serveur de courrier entrant`{.action} sélectionné.
>>
>> Depuis l'onglet `Options avancées` :
>>
>> - **Serveur entrant (IMAP)** : 993
>> - **Utiliser le type de connexion chiffrée suivant** : SSL/TLS
>> - **Serveur de courrier sortant (SMTP)** : 465
>> - **Utiliser le type de connexion chiffrée suivant** : SSL/TLS
>>
>> Cliquez sur `OK`{.action} pour valider les informations. Cliquez sur `Suivant`{.action} pour lancer la configuration du compte.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Étape 4**
>>
>> Cliquez sur `Suivant`{.action} pour lancer la configuration du compte. Si les paramètres sont validés, vous obtiendrez la fenêtre ci-dessous.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Le Webmail OVHcloud est disponible [ici](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, n'hésitez pas à consulter notre guide [Consulter son compte Exchange depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consulter le paragraphe « **Exporter depuis Windows** » sur notre guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter-depuis-windows).

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Allez dans `Fichier`{.action} depuis la barre de menu en haut de votre écran.
- Sélectionnez le compte à modifier dans le menu déroulant **(1)**.
- Cliquez sur `Paramètres du compte`{.action} **(2)** en dessous.
- Cliquez sur `Paramètres du compte...`{.action} **(3)** pour accéder à la fenêtre de paramètres.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

- La fenêtre de paramètres des comptes s'affiche, sélectionnez le compte e-mail concerné et cliquez sur `Modifier...`{.action}.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Paramètre généraux d'envoi et de réception <a name="settings-account"></a>

#### Paramètres de réception IMAP et POP <a name="imap-pop"></a>

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**.

> [!warning]
>
> Il est nécessaire de bien relever la valeur correspondant à votre localisation (**EUROPE** ou **AMERIQUE / ASIE-PACIFIQUE**).

Sélectionnez l'onglet correspondant à votre type de configuration :

> [!tabs]
> **Configuration IMAP**
>>
>> - **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur EUROPE (entrant)** : imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : imap.mail.ovh.ca.
>> - **Port** : 993.
>> - **Type de sécurité** : SSL/TLS.
>>
> **Configuration POP**
>>
>> - **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur EUROPE (entrant)** : pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : pop.mail.ovh.ca.
>> - **Port** : 995.
>> - **Type de sécurité** : SSL/TLS.

#### Paramètres d'envoi SMTP <a name="smtp"></a>

Pour l'envoi des e-mails, retrouvez ci-dessous les paramètres **SMTP** à utiliser :

**Configuration SMTP**

- **Nom d'utilisateur** : renseignez l'adresse e-mail **complète**.
- **Mot de passe** : renseignez le mot de passe de l'adresse e-mail.
- **Serveur EUROPE (sortant)** : smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Serveur AMERIQUE/ASIE-PACIFIQUE (sortant)** : smtp.mail.ovh.ca.
- **Port** : 465.
- **Type de sécurité** : SSL/TLS.

### POP ou IMAP, quelle est la différence ? <a name="popimap"></a>

Lorsque vous configurez votre adresse e-mail manuellement, votre client de messagerie vous demande si vous souhaitez utiliser le protocole **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Pour bien comprendre, il faut situer le rôle des protocoles POP et IMAP dans la configuration de votre adresse e-mail.

Lors de la configuration de votre client de messagerie, vous devez lui renseigner les informations du **serveur entrant** pour recevoir les e-mails et le **serveur sortant** pour envoyer les e-mails. Pour envoyer les e-mails, il n'y a pas de choix, c'est le protocole **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) qui est utilisé. Pour la réception, vous aurez donc le choix entre **POP** ou **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Pour comprendre la différence entre l'utilisation du protocole POP et IMAP, nous allons détailler les éléments qui composent le traitement de vos e-mails en réception :

1. **Votre appareil** : un ordinateur, un smartphone ou une tablette. C'est votre support de consultation.
2. **Votre client de messagerie** : application dédiée à la gestion de vos e-mails. Son choix déterminera le niveau d'ergonomie et de fonctionnalités dont vous aurez besoin pour consulter vos e-mails.
3. **Le protocole de réception** : choix déterminant la façon de relever les e-mails sur votre appareil. Son choix a une incidence sur les autres appareils qui consultent ce même compte e-mail.
    - **IMAP** : votre client de messagerie interroge le serveur e-mail et télécharge les e-mails sur votre appareil. Lorsque vous consultez un e-mail non lu, le serveur le marque comme « lu » par défaut. Les autres appareils configurés en IMAP pourront constater cet état et consulter cet e-mail tant qu'il n'aura pas été supprimé sur l'un des appareils.
    - **POP** : votre client de messagerie interroge le serveur e-mail et télécharge les e-mails sur votre appareil. Par défaut, une fois l'e-mail téléchargé sur votre appareil, le message est supprimé du serveur. Par conséquent, les autres appareils connectés à cette adresse e-mail ne pourront pas consulter cet e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Ce desriptif est une synthèse, il représente le fonctionnement standard de ces deux protocoles. Il est possible de paramétrer le POP pour que les e-mails ne soit pas supprimés lorsque vous relevez vos e-mails. Notre objectif est de décrire le fonctionnement natif de ces deux protocoles.

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur macOS, consultez [le centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/ajouter-un-compte-de-courrier-dans-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurer son compte E-mail Pro sur Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Configurer son compte Exchange sur Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Échangez avec notre [communauté d'utilisateurs](/links/community)