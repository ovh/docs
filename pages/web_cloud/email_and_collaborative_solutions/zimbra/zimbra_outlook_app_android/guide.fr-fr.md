---
title: "Zimbra Pro - Configurer son compte e-mail via ActiveSync sur Outlook pour Android"
excerpt: "Découvrez comment configurer votre adresse e-mail Zimbra Pro sur l'application mobile Outlook pour Android via le protocole ActiveSync"
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

Les comptes Zimbra Pro peuvent être configurés sur un mobile Android en utilisant le protocole ActiveSync. Cela vous permet de configurer l'ensemble des fonctionnalités collaboratives de votre adresse e-mail en une seule fois. L'application Outlook de Microsoft sur Android est disponible gratuitement depuis le Google Play Store.

**Découvrez comment configurer votre adresse e-mail Zimbra Pro sur l'application mobile Outlook pour Android via le protocole ActiveSync.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il est de votre responsabilité d'assurer le bon fonctionnement de ces services.
>
> Ce guide est conçu pour vous aider à accomplir des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](https://marketplace.ovhcloud.com/c/support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Pour plus d'informations, consultez la section « [Aller plus loin](#go-further) » de ce guide .

## Prérequis

- Disposer d’une adresse e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Disposer de l'[application Outlook](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=fr) sur votre appareil mobile Android.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation a été réalisée depuis un appareil utilisant la version 14 d'Android.

## En pratique

### Ajouter le compte <a name="add-account"></a>

- **Lors du premier démarrage de l'application Outlook**, un assistant de configuration s'affiche :
    - Appuyez sur `Ajouter un compte`{.action}.

  ![outlook android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **Si un compte est déjà paramétré sur l'application Outlook** :
    - Appuyez sur l'enveloppe (`✉`{.action}) dans la partie supérieure gauche de votre écran.
    - Appuyez ensuite sur le bouton `+`{.action} dans la barre verticale de gauche.
    - Appuyez sur `Ajouter un compte`{.action}.

  ![outlook android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Suivez les étapes d'installation en cliquant successivement sur les **3** onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Saisissez votre adresse e-mail et appuyez sur `Continuer`{.action}.
>>
>> ![outlook android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Étape 2**
>>
>> ![outlook android](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Sélectionnez **Exchange** dans la liste des types de compte.
>> - **Ou**, si vous obtenez une fenêtre vous demandant de sélectionner le protocole **IMAP** ou **POP3**, appuyez sur l'un ou l'autre. Sur la fenêtre suivante, appuyez sur le bouton `?`{.action} dans le coin supérieur droit de l'écran, puis choisissez `Changer de fournisseur de compte`{.action}. Sélectionnez alors `Exchange`.
>>
>> ![outlook android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Étape 3**
>>
>> Dans la fenêtre suivante, cochez `Paramètres avancés`{.action} et complétez les informations suivantes :
>>
>> - **Adresse e-mail** : Saisissez votre adresse e-mail complète.
>> - **Description** : Renseignez un nom permettant d'identifier ce compte parmi vos autres comptes e-mail enregistrés sur Outlook.
>> - **Serveur** : Saisissez « zimbra1.mail.ovh.net ».
>> - **Domaine** : Laissez ce champ vide.
>> - **Nom d'utilisateur** : Saisissez votre adresse e-mail complète.
>>
>> Pour finaliser la configuration, appuyez sur le bouton « &#10003; ».
>>
>> ![outlook android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, vous pouvez commencer à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages, mais aussi gérer vos calendriers et tâches.

OVHcloud propose également une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Vous pouvez connecter au [webmail OVHcloud](/links/web/email) avec les identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, consultez notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».

### Comment modifier les paramètres existants ? <a name="modify-settings"></a>

L'application Outlook ne permet pas de modifier les paramètres serveur de votre compte e-mail.

Si votre compte e-mail est déjà configuré et que vous souhaitez en modifier les paramètres, vous devez alors le supprimer et le recréer :

1. Appuyez sur l'enveloppe (`✉`{.action}) dans la partie supérieure gauche de votre écran.
2. Appuyez sur l'icône de réglage (`⛭`{.action}) dans le bas de la colonne de gauche.
3. Dans la section « Général » appuyez sur `Comptes` pour visualiser l'ensemble des adresses e-mail configurées sur l'application.

  ![outlook android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Sélectionnez le compte e-mail concerné.
5. Appuyez sur `Supprimer le compte`{.action}.
6. Appuyez sur `Supprimer`{.action} lorsque la question « Voulez-vous supprimer le compte ? » apparaît.

  ![outlook android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Une fois votre compte e-mail supprimé, suivez les étapes d'installation indiquées dans la rubrique « [Ajouter le compte](#add-account) » de ce guide.

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur Android, consultez le [centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/configurer-le-courrier-%C3%A9lectronique-%C3%A0-l-aide-de-l-application-outlook-pour-android-886db551-8dfa-4fd5-b835-f8e532091872).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).