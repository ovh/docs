---
title: "Configurer une adresse e-mail Zimbra sur un logiciel de messagerie"
excerpt: "Découvrez comment configurer votre logiciel de messagerie pour consulter les e-mails de votre compte Zimbra"
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
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

## Objectif

Avec l'offre Zimbra, OVHcloud vous propose une plateforme de messagerie collaborative open source offrant toutes les fonctionnalités nécessaires à une utilisation professionnelle. Retrouvez sur cette page les informations nécessaires à la configuration de vos comptes e-mail Zimbra sur votre logiciel de messagerie préféré.

**Découvrez comment configurer votre logiciel de messagerie pour consulter les e-mails de votre comtpe Zimbra**

## Prérequis

- Avoir souscrit à un compte e-mail sur notre solution e-mail Zimbra OVHcloud.
- Avoir installé un logiciel de messagerie sur l'appareil de votre choix.

## En pratique

### Configurer son compte e-mail <a name="mail-config"></a>

La configuration de votre compte e-mail Zimbra utilise les mêmes paramètres que l'offre MX Plan, incluse avec les hébergements Web OVHcloud ou en offre seule. C'est pourquoi les liens de configuration ci-dessous ont une mention « MX Plan » dans leur titre.

Cliquez sur l'onglet correspondant au type d'appareil que vous utilisez :

> [!tabs]
> **Ordinateur Windows**
>>
>> - [Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Courrier pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Ordinateur Apple mac**
>>
>> - [Outlook pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone ou iPad**
>>
>> - [Mail pour iPhone et iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone ou Tablette Android**
>>
>> - [Gmail pour Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interface Web**
>>
>> - [Interface en ligne de Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Rappel des paramètres POP, IMAP et SMTP <a name="popimap-settings"></a>

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**.

- **Pour une configuration en POP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur **EUROPE** (entrant)|pop.mail.ovh.net **ou** ssl0.ovh.net|
|Serveur **AMERIQUE / ASIE-PACIFIQUE** (entrant)|pop.mail.ovh.ca|
|Port|995|
|Type de sécurité|SSL/TLS|

- **Pour une configuration en IMAP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur **EUROPE** (entrant)|imap.mail.ovh.net **ou** ssl0.ovh.net|
|Serveur **AMERIQUE / ASIE-PACIFIQUE** (entrant)|imap.mail.ovh.ca|
|Port|993|
|Type de sécurité|SSL/TLS|

Pour l'envoi des e-mails, si vous devez renseigner manuellement les paramètres **SMTP** dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser :

- **Configuration SMTP**

|Information|Description|
|---|---|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail|
|Serveur **EUROPE** (entrant)|smtp.mail.ovh.net **ou** ssl0.ovh.net|
|Serveur **AMERIQUE / ASIE-PACIFIQUE** (entrant)|smtp.mail.ovh.ca|
|Port|465|
|Type de sécurité|SSL/TLS|

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).