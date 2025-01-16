---
title: "Synchroniser un calendrier CalDAV Zimbra dans une application"
excerpt: "Découvrez comment ajouter un calendrier Zimbra sur une application via le protocole CalDAV"
updated: 2025-01-13
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!warning]
>
> **Important**
>
> L'offre Zimbra est un produit en phase bêta.
>
> Il est uniquement disponible aux personnes ayant complété le [formulaire d'inscription à la bêta](https://labs.ovhcloud.com/en/zimbra-beta/).
>
> Certaines fonctionnalités ou limitations présentées dans ce guide sont susceptibles d'évoluer lorsque le produit sera commercialisé.

## Objectif

Les comptes e-mail Zimbra peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. Zimbra inclut la fonctionnalité de calendrier partagé qui peut donc être synchronisé depuis un logiciel compatible avec le protocole CalDAV.

**Découvrez comment ajouter un calendrier Zimbra sur une application via le protocole CalDAV.**

## Prérequis

- Disposer d’une adresse e-mail Zimbra.
- Avoir installé une application prenant en charge le protocole de calendrier CalDAV
- Posséder les identifiants relatifs à l'adresse e-mail attachée au calendrier que vous souhaitez paramétrer.

## En pratique

### Qu'est-ce que le protocole CalDAV ?

CalDAV est un protocole de partage de calendrier et de tâches en ligne. Les adresses e-mail Zimbra disposent de calendriers utilisant le protocole CalDAV.

La configuration de calendrier CalDAV est similaire à celle d'une adresse e-mail et nécessite une application prenant en charge ce protocole.

### Configurer le Calendrier CalDAV sur un logiciel compatible

Nous avons sélectionné des applications stables et compatibles avec le protocole CalDAV.

- **Pour Windows** : Suivez le chapitre [Ajouter un calendrier sur Thunderbird](#thunderbird)
- **Pour macOS** : Suivez le chapitre [Ajouter un calendrier sur macOS](#apple-macos) ou [Ajouter un calendrier sur Thunderbird](#thunderbird)
- **Pour Linux** : Suivez le chapitre [Ajouter un calendrier sur Thunderbird](#thunderbird)
- **Pour iPhone et iPad** : Suivez le chapitre [Ajouter un calendrier sur iOS et ipadOS](#apple-ios)
- **Pour Android** : Nous vous invitons à suivre le guide [Zimbra - Configurer son compte e-mail sur l'application mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios).

> [!warning]
>
> Les appareils Android ne proposent actuellement pas de prise en charge native du protocole CalDAV. Nous n'avons également pas trouvé d'application tierce stable en mesure de synchroniser les calendriers Zimbra de nos offres.
>
> Seule l'application Zimbra, basée sur son Webmail, est en mesure de consulter les calendriers partagés sur un appareil Android.

#### Paramètres généraux pour un calendrier CalDAV Zimbra  <a name="general-settings"></a>

Si vous utilisez une application compatible avec le protocole CalDAV, voici les paramètres généraux à connaitre pour paramétrer un calendrier CalDAV Zimbra :

- **Serveur / Adresse / URL** : saisissez la valeur `zimbra1.mail.ovh.net`. Pour certains logiciels il est nécessaire d'ajouter le protocole « https » dans l'adresse, saisissez alors la valeur `https://zimbra1.mail.ovh.net`.
- **Nom d'utilisateur** : saisissez l'adresse e-mail complète associée au calendrier.
- **Mot de passe** : saisissez le mot de passe de l'adresse e-mail associée au calendrier.

#### Ajouter un calendrier sur Thunderbird <a name="thunderbird"></a>

> [!primary]
>
> [Mozilla Thunderbird](https://www.thunderbird.net/) est disponible sur Windows, macOS et Linux. Les étapes d'installation suivantes ont été réalisées depuis macOS mais elles s'appliquent de la même façon sur Windows et Linux.

Ouvrez Thunderbird et cliquez sur l'icône « Agenda » dans la colonne à gauche.

Suivez les étapes d'installation en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> - Cliquez sur `Nouveau calendrier`{.action} en bas de la colonne du calendrier ou faites un clic droit sur un calendrier existant et sélectionnez `Nouveau calendrier`{.action} dans le menu déroulant qui s'affiche.
>> - Sélectionnez `Sur le réseau`, puis cliquez sur `Suivant`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird01.png){.thumbnail .w-600 .h-600}
>>
> **Etape 2**
>>
>> Saisissez les informations de connexion au calendrier :
>>
>> - **Nom d'utilisateur** : saisissez l'adresse e-mail complète associée au calendrier.
>> - **Adresse** : saisissez la valeur `zimbra1.mail.ovh.net`.
>> - **Cette adresse ne demande pas d’identifiant de connexion** : laissez cette case décochée, il vous sera demandé de saisir le mot de passe associé à l'adresse e-mail renseignée plus haut.
>> - **Prise en charge du mode hors connexion** : vous pouvez laisser cette option cochée.
>>
>> Cliquez sur `Rechercher des agendas`{.action} pour initier la synchronisation du calendrier. Saisissez le mot de passe de l'adresse e-mail associée au nom d'utilisateur dans la fenêtre qui apparait et validez votre saisie.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird02.png){.thumbnail .w-600 .h-600}
>>
> **Etape 3**
>>
>> La fenêtre ci-dessous apparait avec les éléments CalDAV présents sur un compte e-mail Zimbra. Cochez les éléments que vous souhaitez faire apparaitre dans le calendrier Thunderbird et cliquez sur `Se connecter`{.action} pour terminer la configuration.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird03.png){.thumbnail .w-600 .h-600}
>>

#### Ajouter un calendrier sur iOS et ipadOS <a name="apple-ios"></a>

> [!warning]
>
> La configuration ci-dessous a été réalisée à partir d'un iPhone. Néanmoins, la manipulation reste la même depuis un iPad.

Pour ajouter un calendrier CalDAV sur l'application Apple `Calendrier` de votre iPhone ou iPad, suivez les étapes d'installation en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> Dirigez-vous dans les `Réglages`{.action} de votre iPhone ou iPad. Retrouvez la section `Calendrier`{.action} en faisant défiler le menu ou en saisissant « calendrier » dans la barre de recherche des réglages.
>>
>> ![zimbra_app](images/zimbra-calendar-ios01.png){.thumbnail .w-600 .h-600}
>>
> **Etape 2**
>>
>> Dirigez vous dans `Comptes Calendrier`{.action} puis sélectionnez `Ajouter un compte`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-ios02.png){.thumbnail .w-600 .h-600}
>>
> **Etape 3**
>>
>> Choisissez `Autre`{.action}, puis sélectionnez `Ajoutez un compte CalDAV`{.action} dans la section « CALENDRIER ».
>>
>> ![zimbra_app](images/zimbra-calendar-ios03.png){.thumbnail .w-600 .h-600}
>>
> **Etape 4**
>>
>> Saisissez les informations de connexion au calendrier :
>>
>> - **Serveur** : saisissez la valeur `zimbra1.mail.ovh.net`.
>> - **Nom d'utilisateur** : saisissez l'adresse e-mail complète associée au calendrier.
>> - **Mot de passe** : saisissez le mot de passe de l'adresse e-mail.
>> - **Description** : ajoutez une description au calendrier.
>>
>> Validez avec le bouton `Suivant`{.action}.
>>
>> Choisissez les applications `Calendrier` et `Rappel` qui utiliseront les informations du calendrier Zimbra.
>>
>> ![zimbra_app](images/zimbra-calendar-ios04.png){.thumbnail .w-600 .h-600}
>>

#### Ajouter un calendrier sur macOS <a name="apple-macos"></a>

Pour ajouter un calendrier CalDAV sur l'application Apple `Calendrier` de votre Mac, lancez l'application et suivez les étapes d'installation en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> Cliquez sur `Calendrier`{.action} dans la barre de menu supérieure, puis sur `Ajouter un compte`{.action}. Sélectionnez `Ajoutez un compte CalDAV`, puis cliquez sur `Continuer`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos01.png){.thumbnail .w-600 .h-600}
>>
> **Etape 2**
>>
>> Depuis la fenêtre de configuration, complétez les informations suivantes :
>>
>> - **Type de compte** : choisissez `Manuel` dans le menu déroulant.
>> - **Nom d'utilisateur** : saisissez l'adresse e-mail complète associée au calendrier.
>> - **Mot de passe** : saisissez le mot de passe de l'adresse e-mail.
>> - **Adresse du serveur** : saisissez la valeur `zimbra1.mail.ovh.net`.
>>
>> Pour finaliser, cliquez sur `Se connecter`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos02.png){.thumbnail .w-600 .h-600}
>>

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurer son adresse e-mail Zimbra sur un logiciel de messagerie](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).