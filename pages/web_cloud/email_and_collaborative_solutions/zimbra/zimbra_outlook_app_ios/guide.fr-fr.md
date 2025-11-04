---
title: "Zimbra Pro - Configurer son compte e-mail via ActiveSync sur Outlook pour iOS"
excerpt: "Découvrez comment configurer votre adresse e-mail Zimbra Pro sur l'application mobile Outlook pour iOS via le protocole ActiveSync"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Objectif

> [!primary]
> Ce guide s'adresse aux clients possédant une offre e-mail [Zimbra Pro](/links/web/emails-zimbra). Ce service sera disponible en bêta à partir de juillet 2025.

Les comptes Zimbra Pro peuvent être configurés sur un iPhone en utilisant le protocole ActiveSync. Cela vous permet de configurer l'ensemble des fonctionnalités collaboratives de votre adresse e-mail en une seule fois. L'application Outlook de Microsoft sur iOS est disponible gratuitement depuis l'App Store d'Apple.

**Découvrez comment configurer votre adresse e-mail Zimbra Pro sur l'application mobile Outlook pour iOS via le protocole ActiveSync.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il est de votre responsabilité d'assurer le bon fonctionnement de ces services.
>
> Ce guide est conçu pour vous aider à accomplir des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/transversal/marketplace-support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Pour plus d'informations, consultez la section « [Aller plus loin](#go-further) » de ce guide .

## Prérequis

- Disposer d’une adresse e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Disposer de l'application [Outlook pour iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Ajouter le compte <a name="add-account"></a>

- **Lors du premier démarrage de l'application Outlook**, un assistant de configuration s'affiche :
    - Appuyez sur `Ajouter un compte`{.action}.

  ![outlook ios](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Si un compte est déjà paramétré sur l'application Outlook** :
    1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou sur l'icône de maison (`⌂`{.action}) dans la partie supérieure gauche de votre écran.
    2. Appuyez sur l'engrenage (`⛭`{.action}) dans la partie inférieure gauche de votre écran.
    3. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
    4. Appuyez sur `Ajouter un compte`{.action}.
    5. Appuyez sur `Compte de courrier`{.action}.

  ![outlook ios](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Suivez les étapes d'installation en cliquant successivement sur les **3** onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Saisissez votre adresse e-mail et appuyez sur `Ajouter un compte`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> Deux scénarios sont possibles :
>>
>> - Si la mention « **IMAP** » est présente en haut de la page : appuyez sur le bouton `?` dans le coin supérieur droit de l'écran **(1)**, puis choisissez `Changer de fournisseur de compte`{.action} **(2)**. Sélectionnez alors `Exchange` **(3)** et passez à l'étape 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Si vous êtes directement dirigé vers le choix du type de compte, sélectionnez `Exchange`.
>>
> **Étape 3**
>>
>> Dans la fenêtre suivante, cochez `Paramètres avancés`{.action} et complétez les informations suivantes :
>>
>> - **Adresse e-mail** : Saisissez votre adresse e-mail complète.
>> - **Mot de passe** : Saisissez le mot de passe associé à votre adresse e-mail.
>> - **Description** : Renseignez un nom permettant d'identifier ce compte parmi vos autres comptes e-mail enregistrés sur Outlook.
>> - **Serveur** : saisissez « zimbra1.mail.ovh.net ».
>> - **Domaine** : Laissez ce champ vide.
>> - **Nom d'utilisateur** : Saisissez votre adresse e-mail complète.
>>
>> Pour finaliser la configuration, appuyez sur `Connexion`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Si vous rencontrez un défaut d'envoi ou de réception après avoir suivi les étapes de configuration ci-dessus, consultez la rubrique « [Modifier les paramètres existants](#modify-settings) » de ce guide.

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, vous pouvez commencer à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages, mais aussi gérer vos calendriers et tâches.

OVHcloud propose également une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Vous pouvez connecter au [webmail OVHcloud](/links/web/email) avec les identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, consultez notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».

### Comment modifier les paramètres existants ? <a name="modify-settings"></a>

1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou l'icône de maison (`⌂`{.action}) dans la partie supérieure gauche de votre écran.
1. Appuyez sur l'engrenage (`⛭`{.action}) dans la partie inférieure gauche de votre écran.
1. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
1. Sélectionnez le compte concerné.
1. Appuyez sur `Modifier les informations de connexion`{.action}.

![outlook ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Retrouvez les paramètres à **l'étape 3** du chapitre « [Ajouter le compte](#add-account) ».

### Comment supprimer un compte e-mail ? <a name="delete-account"></a>

1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou l'icône de maison (`⌂`{.action}) dans la partie supérieure gauche de votre écran.
1. Appuyez sur l'engrenage (`⛭`{.action}) dans la partie inférieure gauche de votre écran.
1. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
1. Sélectionnez le compte concerné.
1. Appuyez sur `Suppression du compte`{.action}.

![outlook ios](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur iOS, consultez le [centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).