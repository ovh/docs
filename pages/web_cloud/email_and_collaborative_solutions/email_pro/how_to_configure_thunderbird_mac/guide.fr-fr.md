---
title: 'E-mail Pro - Configurer son adresse e-mail sur Thunderbird pour macOS'
excerpt: 'Découvrez comment configurer votre adresse E-mail Pro sur Thunderbird pour macOS'
updated: 2025-09-19
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
.w-400 {
  max-width:400px !important;
}
</style>

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. Thunderbird est un client de messagerie libre et gratuit.

**Découvrez comment configurer votre adresse E-mail Pro sur Thunderbird pour macOS.**

## Prérequis

- Disposer d’une adresse [E-mail Pro](/links/web/email-pro).
- Disposer du logiciel Thunderbird installé sur votre Mac.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

/// details | Informations relatives à la gestion et configuration des services OVHcloud

Ce guide vous montre comment utiliser des solutions OVHcloud avec des outils externes ainsi que les modifications à apporter dans des contextes spécifiques. Il se peut que vous deviez adapter les instructions en fonction de votre situation.

Si vous éprouvez des difficultés à effectuer ces opérations, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) et/ou d'en discuter avec notre communauté. OVHcloud ne peut pas vous fournir d’assistance technique sur l'utilisation d'outils externes. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.

///

## En pratique

> [!warning]
>
> Dans notre exemple, nous utilisons la mention serveur : pro?.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
>
> 1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
> 1. Rendez-vous dans la partie `Web Cloud`{.action}.
> 1. Cliquez sur `Email Pro`{.action}.
> 1. Sélectionnez la plateforme concernée.
> 1. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.

### Ajouter le compte

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail.

- **Si un compte est déjà paramétré sur l'application** :

    1. Cliquez sur le menu `☰`{.action} dans la barre horizontale supérieure.
    2. Cliquez sur `Nouveau Compte`{.action}.
    3. Cliquez sur `Adresse E-mail`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

Suivez les étapes de configuration en cliquant successivement sur les **5** onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Dans la fenêtre qui s'affiche, saisissez les 2 informations suivantes :
>>
>>  - Votre nom complet (nom d'affichage).
>>  - L'adresse e-mail à paramétrer.
>>
>> Cliquez sur `Continuer`{.action} pour compléter les paramètres.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-02.png){.thumbnail .w-600}
>>
> **Étape 2**
>>
>> Lorsque Thunderbird détecte un nom de domaine OVHcloud, une configuration automatique relative à l'offre MX Plan est proposée. Cliquez sur `MODIFIER LA CONFIGURATION`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Étape 3**
>>
>> Paramètres du serveur de réception :
>>
>>  - **Protocole** : IMAP
>>  - **Nom d'hôte** : pro?.mail.ovh.net (remplacez le « ? » par le numéro de votre serveur)
>>  - **Port** : 993
>>  - **Sécurité de la connexion** : SSL/TLS
>>  - **Méthode d'authentification** : Mot de passe normal
>>  - **Nom d'utilisateur** : Votre adresse e-mail complète
>>
>> ![thunderbird](images/configuration-thunderbird-emp-04.png){.thumbnail .w-600}
>>
> **Étape 4**
>>
>> Paramètres du serveur d'envoi :
>>
>>  - **Protocole** : SMTP 
>>  - **Nom d'hôte** : pro?.mail.ovh.net (remplacez le « ? » par le numéro de votre serveur)
>>  - **Port** : 587
>>  - **Sécurité de la connexion** : STARTTLS
>>  - **Méthode d'authentification** : Mot de passe normal
>>  - **Nom d'utilisateur** : Votre adresse e-mail complète
>> 
>> 1\. Cliquez sur `Tester`{.action} pour vérifier les paramètres saisis.<br>
>> 2\. Cliquez sur `Continuer`{.action} pour valider ces paramètres.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-05.png){.thumbnail .w-600}
>>
> **Étape 5**
>>
>> Saisissez le mot de passe associé à l'adresse e-mail, puis cliquez sur `Continuer`{.action} pour finaliser la configuration.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configuration POP**
>
> Si vous souhaitez une configuration POP pour votre adresse e-mail, remplacez les paramètres de **l'étape 3** par les suivants :
>
> Paramètres du serveur de réception :
>
> - **Protocole** : POP3
> - **Nom d'hôte** : pro?.mail.ovh.net (remplacez le « ? » par le numéro de votre serveur)
> - **Port** : 995
> - **Sécurité de la connexion** : SSL/TLS
> - **Méthode d'authentification** : Mot de passe normal
> - **Nom d'utilisateur** : Votre adresse e-mail complète

Cliquez sur `Terminé`{.action} pour finaliser la configuration.

### Utiliser l'adresse e-mail

Une fois votre adresse e-mail configurée, vous pouvez commencer à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des e-mails.

OVHcloud propose également une application web permettant d'accéder à votre adresse e-mail depuis un navigateur Internet. Pour accéder au Webmail OVHcloud, cliquez sur [ce lien](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consultez le paragraphe « **Exporter** » dans la partie « **Thunderbird** » de notre guide « [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

1. Cliquez sur le menu `☰`{.action} dans la barre horizontale supérieure.
2. Cliquez sur `Paramètres des comptes`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Pour modifier les paramètres liés à la **réception** de vos e-mails, cliquez sur `Paramètres serveur`{.action} dans la colonne de gauche sous votre adresse e-mail.

![thunderbird](images/configuration-thunderbird-emp-mac-08.png){.thumbnail .w-600}

- Pour modifier les paramètres liés à **l'envoi** de vos e-mails, cliquez sur `Serveur sortant (SMTP)`{.action} tout en bas de la colonne de gauche.
- Cliquez sur l'adresse e-mail concernée dans la liste, puis cliquez sur `Modifier`{.action}.

![thunderbird](images/configuration-thunderbird-emp-mac-09.png){.thumbnail .w-600}

## Aller plus loin <a name="go-further"></a>

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis le client de messagerie Thunderbird, consultez [le centre d'aide de Mozilla](https://support.mozilla.org/products/thunderbird).

[Premiers pas avec la solution E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).