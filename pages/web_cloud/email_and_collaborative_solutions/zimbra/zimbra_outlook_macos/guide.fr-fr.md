---
title: "Zimbra Pro - Configurer son compte e-mail via EWS sur Outlook pour Mac"
excerpt: "Découvrez comment configurer votre adresse e-mail Zimbra Pro sur Outlook pour macOS via le protocole EWS"
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

Les comptes Zimbra Pro peuvent être configurés sur un Mac en utilisant le protocole EWS (**E**xchange **W**eb **S**ervices). Cela vous permet de configurer l'ensemble des fonctionnalités collaboratives de votre adresse e-mail en une seule fois. L'application [Outlook sur macOS](https://apps.apple.com/fr/app/microsoft-outlook/id985367838?mt=12) est disponible sur l'App Store d'Apple.

**Découvrez comment configurer votre adresse e-mail Zimbra Pro sur Outlook pour macOS via le protocole EWS.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il est de votre responsabilité d'assurer le bon fonctionnement de ces services.
>
> Ce guide est conçu pour vous aider à accomplir des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/transversal/marketplace-support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Pour plus d'informations, consultez la section « [Aller plus loin](#go-further) » de ce guide .

## Prérequis

- Disposer d’une adresse e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Disposer de l'application [Outlook sur macOS](https://apps.apple.com/fr/app/microsoft-outlook/id985367838?mt=12).
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Ajouter le compte <a name="add-account"></a>

- **Lors du premier démarrage de l'application Outlook** : un assistant de configuration s'affiche directement et vous invite à saisir la première adresse e-mail que vous souhaitez ajouter.

- **Si un compte est déjà paramétré sur l'application Outlook** : 
    1. Cliquez sur `Outils`{.action} dans la barre de menu en haut de votre écran.
    2. Cliquez sur `Comptes`{.action}.
    3. Depuis la fenêtre « Comptes » qui s'affiche, cliquez sur `+`{.action} en bas à gauche, puis cliquez sur `Nouveau compte`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Suivez les étapes d'installation en cliquant successivement sur les **3** onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Saisissez votre adresse e-mail sous la mention « Adresse de courrier », puis cliquez sur `Continuer`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> Deux scénarios sont possibles :
>>
>> - **Si la fenêtre « IMAP/POP » apparaît** : cliquez sur `Ce n'est pas un compte POP/IMAP`{.action}, puis choisissez `Exchange`{.action} depuis la fenêtre « Choisir le fourniseur ».
>> - **Si vous arrivez directement sur « Choisir le fourniseur »**, choisissez `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Étape 3**
>>
>> Vérifiez et complétez les informations suivantes :
>>
>> - **Méthode** : Choisissez `Nom d'utilisateur et mot de passe`.
>> - **Adresse de courrier** : Saisissez votre adresse e-mail complète.
>> - **DOMAINE\Nom d'utilisateur ou adresse de courrier** : Saisissez votre adresse e-mail complète.
>> - **Mot de passe** : Saisissez le mot de passe associé à votre adresse e-mail.
>> - **Serveur** : Saisissez « zimbra1.mail.ovh.net ».
>>
>> Pour finaliser la configuration, appuyez sur `Ajouter un compte`{.action} et sélectionnez les fonctionnalités que vous souhaitez explorer sur votre Mac.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Si vous rencontrez un défaut d'envoi ou de réception après avoir suivi les étapes de configuration ci-dessus, consultez la rubrique « [Modifier les paramètres existants](#modify-settings) » de ce guide.

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, vous pouvez commencer à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages, mais aussi gérer vos calendriers et tâches.

OVHcloud propose également une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Vous pouvez connecter au [webmail OVHcloud](/links/web/email) avec les identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, consultez notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».

### Comment modifier les paramètres existants ? <a name="modify-settings"></a>

Pour modifier les paramètres d’un compte e-mail déjà configuré, suivez les instructions ci-dessous :

1. Cliquez sur `Outils`{.action} dans la barre de menu en haut de votre écran.
1. Cliquez sur `Comptes`{.action}.
1. Sélectionnez votre compte dans la colonne de gauche.
1. Cliquez sur `Avancé...`{.action} en bas à droite.

![outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Retrouvez les paramètres à **l'étape 3** du chapitre « [Ajouter le compte](#add-account) ».

### Comment supprimer un compte e-mail ? <a name="delete-account"></a>

1. Cliquez sur `Outils`{.action} dans la barre de menu en haut de votre écran.
1. Cliquez sur `Comptes`{.action}.
1. Sélectionnez votre compte dans la colonne de gauche.
1. Cliquez sur `-`{.action} en bas à gauche

![outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Mail sur macOS, consultez le [centre d'aide Apple](https://support.apple.com/fr-fr/102619).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).