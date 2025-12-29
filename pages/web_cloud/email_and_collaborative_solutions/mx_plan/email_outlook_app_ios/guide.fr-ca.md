---
title: "MX Plan - Configurer son compte e-mail sur Outlook pour iOS"
excerpt: "Découvrez comment configurer votre adresse e-mail MX Plan sur l'application mobile Outlook pour iOS"
updated: 2025-02-10
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objectif

Les comptes MX Plan peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. L'application Outlook de Microsoft sur iOS est disponible gratuitement depuis l'App Store de Apple.

**Découvrez comment configurer votre adresse e-mail MX Plan sur l'application mobile Outlook pour iOS**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.

## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVHcloud](/links/web/hosting)).
- Disposer de l'application Outlook sur votre appareil mobile [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Ajouter le compte <a name="add-account"></a>

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche, appuyez sur `Ajouter un compte`{.action}.

![outlook ios](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Si un compte a déjà été paramétré** :
    1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou l'icône de maison « &#8962; » dans la partie supérieure gauche de votre écran.
    2. Appuyez sur l'engrenage «  &#9881; » dans la partie inférieure gauche de votre écran.
    3. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
    4. Appuyez sur `Ajouter un compte`{.action}.
    5. Appuyez sur `Compte de courrier`{.action}.

![outlook ios](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Suivez les étapes d'installation en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> Saisissez votre adresse e-mail et appuyez sur `Ajouter un compte`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etape 2**
>>
>> Vous avez deux possibilités:
>>
>> - Si vous avez la mention « **IMAP** » en haut de la page, passez à l'étape 3.
>> - Si la fenêtre de paramètre du compte affiche « **Exchange** » en haut, appuyez sur le bouton `?` dans le coin supérieur droit de l'écran **(1)**, puis choisissez `Changer de fournisseur de compte`{.action} **(2)**. Sélectionnez alors `IMAP` **(3)** et passez à l'étape 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Etape 3**
>>
>> Dans la fenêtre suivante, cochez `Paramètres avancés`{.action} et  complétez les informations suivantes :
>>
>> - **Adresse e-mail**
>> - **Nom complet** : saisissez votre adresse e-mail complète
>> - **Description**
>> - **Serveur de courrier entrant IMAP** :<br>- **Nom d'hôte IMAP** : pour l'**EUROPE**, saisissez `imap.mail.ovh.net` ou `ssl0.ovh.net`. Pour l'**AMERIQUE/ASIE**, saisissez `imap.mail.ovh.ca`<br>- **Port IMAP** : 993<br>- **Nom d'utilisateur IMAP** : votre adresse e-mail complète<br>- **Mot de passe IMAP** : celui de votre adresse e-mail<br>- **Sécurité du port** : SSL
>> - **Serveur de courrier entrant SMTP** :<br>- **Nom d'hôte SMTP** : pour l'**EUROPE**, saisissez `smtp.mail.ovh.net` ou `ssl0.ovh.net`. Pour l'**AMERIQUE/ASIE**, saisissez `smtp.mail.ovh.ca`<br>- **Port SMTP** : 465<br>- **Nom d'utilisateur SMTP** : votre adresse e-mail complète<br>- **Mot de passe SMTP** : celui de votre adresse e-mail<br>- **Sécurité du port** : SSL
>>
>> Pour finaliser la configuration, appuyez sur `Connexion`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Si, après avoir suivi les étapes de configuration ci-dessus, vous rencontrez un défaut d'envoi ou de réception, consultez la rubrique « [Modifier les paramètres existants](#modify-settings) ».

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible via ce lien : [Webmail](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation et en fonction du webmail associé à votre offre, aidez-vous de nos guides :

- [Consulter son compte depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)
- [Utiliser son adresse e-mail depuis le webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)
- [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Modifier les paramètres existants <a name="modify-settings"></a>

1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou l'icône de maison « &#8962; » dans la partie supérieure gauche de votre écran.
2. Appuyez sur l'engrenage « &#9881; » dans la partie inférieure gauche de votre écran.
3. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
4. Sélectionnez le compte concerné.
5. Appuyez sur `Modifier les informations de connexion`{.action}.

![outlook ios](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Retrouvez les paramètres à **l'étape 3** du chapitre [Ajouter le compte](#add-account).

### Supprimer un compte e-mail <a name="delete"></a>

1. Appuyez sur le cercle contenant les initiales du compte e-mail consulté ou l'icône de maison « &#8962; » dans la partie supérieure gauche de votre écran.
2. Appuyez sur l'engrenage «  &#9881; » dans la partie inférieure gauche de votre écran.
3. Appuyez ensuite sur `Comptes`{.action} dans le menu **Réglages**.
4. Sélectionnez le compte concerné.
5. Appuyez sur `Suppression du compte`{.action}.

![outlook ios](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### Rappel des paramètres POP, IMAP et SMTP <a name="popimap-settings"></a>

#### Paramètres de réception IMAP et POP

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**.

> [!warning]
>
> Il est nécessaire de bien relever la valeur correspondante à votre localisation (**EUROPE** ou **AMERIQUE / ASIE-PACIFIQUE**)

Suivez les étapes d'installation en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Configuration IMAP**
>>
>> - **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**
>> - **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail
>> - **Serveur EUROPE (entrant)** : imap.mail.ovh.net **ou** ssl0.ovh.net
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : imap.mail.ovh.ca
>> - **Port** : 993
>> - **Type de sécurité** : SSL/TLS
>>
> **Configuration POP**
>>
>> - **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**
>> - **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail
>> - **Serveur EUROPE (entrant)** : pop.mail.ovh.net **ou** ssl0.ovh.net
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : pop.mail.ovh.ca
>> - **Port** : 995
>> - **Type de sécurité** : SSL/TLS

#### Paramètres d'envoi SMTP

Pour l'envoi des e-mails, si vous devez renseigner manuellement les paramètres **SMTP** dans les préférences du compte, retrouvez ci-dessous les paramètres à utiliser :

**Configuration SMTP**

- **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**
- **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail
- **Serveur EUROPE (entrant)** : pop.mail.ovh.net **ou** ssl0.ovh.net
- **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : pop.mail.ovh.ca
- **Port** : 465
- **Type de sécurité** : SSL/TLS

> [!primary]
>
> **Changer sa configuration**
>
> Si votre adresse e-mail est configurée en **IMAP** et que vous souhaitez changer cette configuration en **POP**, vous devez supprimer le compte puis le recréer en **POP**. Consultez le chapitre « [Modifier les paramètres existants](#modify-settings) » de ce guide.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).