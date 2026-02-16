---
title: "Zimbra Pro - Configurer son compte e-mail via ActiveSync sur Outlook classique pour Windows"
excerpt: "Découvrez comment configurer votre adresse e-mail Zimbra Pro sur Outlook pour Windows via le protocole ActiveSync"
updated: 2025-12-31
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

Les comptes Zimbra Pro peuvent être configurés sur Windows en utilisant le protocole ActiveSync, cela vous permet de configurer l'ensemble des fonctionnalités collaboratives de votre adresse e-mail en une seule fois. L'application Outlook pour Windows permet la consultation de votre compte e-mail Zimbra Pro via le protocole ActiveSync.

**Découvrez comment configurer votre adresse e-mail Zimbra Pro sur Outlook pour Windows via le protocole ActiveSync.**


## Prérequis

- Disposer d’une adresse e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Disposer de l'application [Outlook classique](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) sur Windows.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

/// details | Informations relatives à la gestion et la configuration des services OVHcloud

OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.

Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/transversal/marketplace-support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

///

## En pratique

> [!warning]
>
> Avant de débuter votre configuration, il est important de noter que l'application Outlook incluse gratuitement avec Windows 11 est incompatible avec le protocole ActiveSync, nécessaire à la configuration d'un compte Zimbra Pro. Vous devrez utiliser la version **Outlook classique** pour bénéficier de la prise en charge du protocole ActiveSync.
>
> Pour installer Outlook classique sur votre ordinateur Windows, téléchargez-le depuis la page Microsoft « [Installer ou réinstaller Outlook classique sur un PC Windows](https://support.microsoft.com/fr-fr/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) », et installez-le.
>
> Une fois l'installation terminée, pour distinguer les deux versions lorsqu'elles sont installées, tapez « Outlook » dans la barre de recherche Windows. Vous pourrez alors constater la différence comme ci-dessous.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Ajouter le compte <a name="add-account"></a>

Pour ajouter un compte Zimbra Pro sur Outlook classique, suivez les étapes ci-dessous en cliquant successivement sur les onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> 1. Rendez-vous dans le **panneau de configuration** de Windows.
>> 2. Cliquez sur `Comptes d'utilisateurs`{.action}.
>> 3. Cliquez sur `Courrier`{.action}.
>> 4. Cliquez sur `Comptes de messagerie...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step01.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> - Depuis la fenêtre **Paramètres du compte**, dans l'onglet `Messagerie`, cliquez sur `Nouveau...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step02.png){.thumbnail .h-500}
>>
> **Étape 3**
>>
>> - Depuis la fenêtre **Ajouter un compte**, sélectionnez `Configuration manuelle ou types de serveurs supplémentaires`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>>
>> ![outlook Windows](images/outlook-windows-add-step03.png){.thumbnail .h-500}
>>
> **Étape 4**
>>
>> - Sélectionnez `Exchange ActiveSync`{.action}.
>> - Cliquez sur `Suivant`{.action} pour continuer.
>>
>> ![outlook Windows](images/outlook-windows-add-step04.png){.thumbnail .h-500}
>>
> **Étape 5**
>>
>> Saisissez les informations de connection à votre compte :
>>
>> - **Votre nom** : Définissez un nom d'affichage.
>> - **Adresse e-mail** : Saisissez votre adresse e-mail complète.
>> - **Serveur de courrier** : Saisissez « zimbra1.mail.ovh.net ».
>> - **Nom d'utilisateur** : Saisissez votre adresse e-mail complète.
>> - **Mot de passe** : Saisissez le mot de passe associé à votre adresse e-mail.
>>
>> Cliquez sur `Suivant`{.action} pour finaliser l'ajout du compte.
>>
>> ![outlook Windows](images/outlook-windows-add-step05.png){.thumbnail .h-500}
>>
> **Étape 6**
>>
>> Votre adresse e-mail est maintenant configurée pour Outlook. Pour bénéficier d'une pleine synchronisation des fonctionnalités de votre compte Zimbra Pro, **téléchargez et installez** le module « [Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/) ».
>> 
>> ![outlook Windows](images/outlook-windows-add-step06.png){.thumbnail .h-500}
>>
> **Étape 7**
>>
>> Une fois le module « [Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/) » installé, lancez Outlook classique.
>> La première fois, la fenêtre de configuration **Zimbra Server configuration Settings** s'affiche. Complétez les informations suivantes :
>>
>> - **Nom du serveur** : Saisissez « zimbra1.mail.ovh.net ».
>> - **Adresse e-mail** : Saisissez votre adresse e-mail complète.
>> - **Mot de passe** : Saisissez le mot de passe associé à votre adresse e-mail.
>>
>> Il n'est pas nécessaire de modifier les autres paramètres. Cliquez sur `Appliquer`{.action} pour valider les paramètres et assurez-vous qu'ils soient conformes. Cliquez enfin sur `OK`{.action} pour accéder à Outlook et commencer à utiliser votre adresse e-mail.
>>
>> ![outlook Windows](images/outlook-windows-add-step-07.png){.thumbnail .h-500}

> [!warning]
>
> Si vous rencontrez un défaut d'envoi ou de réception après avoir suivi les étapes de configuration ci-dessus, consultez la rubrique « [Modifier les paramètres existants](#modify-settings) » de ce guide.

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, vous pouvez commencer à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages, mais aussi gérer vos calendriers et tâches.

OVHcloud propose également une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Vous pouvez connecter au [webmail OVHcloud](/links/web/email) avec les identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, consultez notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».

### Comment modifier les paramètres existants ? <a name="modify-settings"></a>

Pour modifier les paramètres d’un compte e-mail déjà configuré, suivez les instructions ci-dessous :

1. Rendez-vous dans le **panneau de configuration** de Windows.
1. Cliquez sur `Comptes d'utilisateurs`{.action}.
1. Cliquez sur `Courrier`{.action}.
1. Cliquez sur `Comptes de messagerie...`{.action}.
1. Sélectionnez le compte e-mail concerné dans la liste et cliquez sur `Modifier...`{.action}.

![outlook ios](images/outlook-windows-modify-01.png){.thumbnail .h-500}

Retrouvez les paramètres à **l'étape 7** du chapitre « [Ajouter le compte](#add-account) ».

### Comment supprimer un compte e-mail ? <a name="delete-account"></a>

Pour supprimer votre compte e-mail, suivez les instructions ci-dessous:

1. Rendez-vous dans le **panneau de configuration** de Windows.
1. Cliquez sur `Comptes d'utilisateurs`{.action}.
1. Cliquez sur `Courrier`{.action}.
1. Cliquez sur `Comptes de messagerie...`{.action}.
1. Sélectionnez le compte e-mail concerné dans la liste et cliquez sur `Supprimer`{.action}.

![outlook ios](images/outlook-windows-delete-01.png){.thumbnail .h-500}

> [!warning]
>
> Pour avoir la possibilité de supprimer votre compte e-mail, il est nécessaire que celui-ci ne soit pas le compte e-mail par défaut.

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur Windows, consultez le [centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/ajouter-un-compte-de-messagerie-%C3%A0-outlook-pour-windows-6e27792a-9267-4aa4-8bb6-c84ef146101b?ocmsassetID=HA102823161&CorrelationId=778d1d8d-9ac2-449b-9624-1268559fa794).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).