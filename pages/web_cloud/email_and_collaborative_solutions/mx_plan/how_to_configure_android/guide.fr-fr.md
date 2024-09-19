---
title: "MXplan - Configurer une adresse e-mail dans Gmail pour Android"
excerpt: "Apprenez à configurer une adresse e-mail MX Plan sur Android, via l'application Gmail"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objectif

Les adresses e-mail de l'offre MX Plan peuvent être configurées sur différents logiciels de messagerie compatibles. Cela vous permet d'envoyer et de recevoir vos messages depuis l'appareil de votre choix. Dans ce guide, nous allons détailler le processus de configuration d'une adresse e-mail MXplan depuis l'application Gmail présente sur les appareils Android.

**Découvrez comment configurer une adresse e-mail MX Plan sur Android, via l'application Gmail.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](https://marketplace.ovhcloud.com/c/support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.

## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVHcloud](/links/web/hosting)).
- Disposer de l'application Gmail sur votre appareil. Vous pouvez installer cette dernière depuis le Google Play Store si elle n'est pas déjà présente.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation a été réalisée depuis un appareil utilisant la version 13 d'Android.
>

## En pratique

### Comment ajouter votre compte e-mail

Sur l'écran d'accueil de votre appareil, rendez-vous dans l'application `Gmail`{.action}.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

L’ajout d’un compte se fera différemment **si aucun compte n'est paramétré** ou **si un compte a déjà été paramétré**. Sélectionnez l'onglet correspondant à l'une des 2 situations évoquées :

> [!tabs]
> **Première configuration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Sélectionnez `Ajouter une adresse e-mail`{.action}|
>>
> **Configuration existante**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1. Dirigez-vous vers le menu situé dans la partie supérieure gauche de l'écran<br><br>2.Sélectionnez `Paramètres`{.action}<br><br>3.Sélectionnez `Ajouter un compte`{.action}|
>>

Suivez les étapes successives de configuration en parcourant les onglets ci-dessous :

> [!tabs]
> **Etape 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|Dans le menu des types de comptes e-mail, sélectionnez `Autre`{.action}.|
>>
> **Etape 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Saisissez votre adresse e-mail.|
>>
> **Etape 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Sélectionnez le protocole de réception des e-mails. Il est conseillé de sélectionner `Personnel (IMAP)`{.action}<br><br>Retrouvez [plus de détails sur les protocoles POP et IMAP](#popimap) à la fin de ce guide pour comprendre leurs différences.|
>>
> **Etape 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Saisissez le mot de passe de votre adresse e-mail. |
>>
> **Etape 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Complétez les « **Paramètres de serveur entrant** »<br><br>- **Nom d'utilisateur** : Votre adresse e-mail complète<br>- **Mot de passe** : Le mot de passe de votre adresse e-mail<br>- **Serveur** : saisissez **ssl0.ovh.net** |
>>
> **Etape 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Complétez les « **Paramètres de serveur sortant** »<br><br>- **Nom d'utilisateur** : Votre adresse e-mail complète<br>- **Mot de passe** : Le mot de passe de votre adresse e-mail<br>- **Serveur SMTP** : saisissez **ssl0.ovh.net** |
>>
> **Etape 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Choisissez la fréquence de synchronisation de vos e-mails selon vos préférences.|
>>
> **Etape 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Déterminez le nom d'affichage de votre adresse e-mail dans l'application Gmail puis appuyez sur `Suivante`{.action}|
>>

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages depuis votre application Gmail.

> [!success]
>
> OVHcloud propose une application web permettant d'accéder à votre adresse e-mail depuis un navigateur web, à l’adresse <https://www.ovhcloud.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

### Paramètres POP, IMAP  et SMTP

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**. Pour comprendre leur fonctionnement respectif, consultez notre section [« POP ou IMAP, quelle est la différence ? »](#popimap)

- **Pour une configuration en POP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur|ssl0.ovh.net|
|Port|995|
|Type de sécurité|SSL/TLS|

- **Pour une configuration en IMAP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur|ssl0.ovh.net|
|Port|993|
|Type de sécurité|SSL/TLS|

Pour l'envoi des e-mails, si vous devez renseigner manuellement les paramètres **SMTP** dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser :

- **Configuration SMTP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur|ssl0.ovh.net|
|Port|465|
|Type de sécurité|SSL/TLS|

### POP ou IMAP, quelle est la différence ? <a name="popimap"></a>

Lorsque vous configurez votre adresse e-mail manuellement, votre client de messagerie vous demande si vous souhaitez utiliser le protocole **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Pour bien comprendre, il faut situer la place des protocoles POP et IMAP dans la configuration de votre adresse e-mail.

Lors de la configuration de votre client de messagerie, vous devez lui renseigner les informations du **serveur entrant** pour recevoir les e-mails et le **serveur sortant** pour envoyer les e-mails. Pour envoyer les e-mails, il n'y a pas de choix, c'est le protocole **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) qui est utilisé. Pour la réception, vous aurez donc le choix entre **POP** ou **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

Pour comprendre la différence entre l'utilisation du protocole POP et IMAP, nous allons décomposer les éléments qui composent le traitement de vos e-mails en réception :

1. **Votre appareil** : un ordinateur, un smartphone ou une tablette. C'est votre support de consultation.

2. **Votre client de messagerie** : logiciel ou application dédié() à la gestion de vos e-mails. Son choix déterminera le niveau d'ergonomie et de fonctionnalités dont vous aurez besoin pour consulter vos e-mails.

3. **Le protocole de réception** : choix déterminant la façon de relever les e-mails sur votre appareil. Son choix a une incidence sur les autres appareils qui consultent ce même compte e-mail.
    - **IMAP** : votre client de messagerie interroge le serveur e-mail et télécharge les e-mails sur votre appareil. Lorsque vous consultez un e-mail non lu, le serveur le marque comme « lu » par défaut. Les autres appareils configurés en IMAP pourront constater cet état et consulter cet e-mail tant qu'il n'aura pas été supprimé sur l'un des appareils.
    - **POP** : votre client de messagerie interroge le serveur e-mail et va télécharger les e-mails sur votre appareil. Par défaut, une fois l'e-mail téléchargé sur votre appareil, le message est supprimé du serveur. Par conséquent, les autres appareils connectés à cette adresse e-mail ne pourront pas consulter cet e-mail.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Ce desriptif est une synthèse, il représente le fonctionnement standard de ces deux protocoles. Il est possible de paramétrer le POP pour que les e-mails ne soit pas supprimés lorsque vous relevez vos e-mails. L'objectif, ici, est de décrire le fonctionnement natif de ces deux protocoles et vous éviter des manipulations supplémentaires afin de correspondre à votre besoin.

## Aller plus loin

[Configurer son compte E-mail Pro sur Android via l'application Gmail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

[Configurer son compte Exchange sur Android via l'application Gmail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.