---
title: "Zimbra - Configurer son compte e-mail sur un logiciel de messagerie"
excerpt: "Choisissez la méthode de configuration adaptée à votre offre Zimbra Starter ou Pro et à votre logiciel de messagerie"
updated: 2026-04-22
---

## Objectif

Avec l'offre Zimbra, OVHcloud vous propose une plateforme de messagerie collaborative open source avec toutes les fonctionnalités nécessaires à un usage professionnel. Ce guide vous aide à choisir la méthode de configuration adaptée à votre offre Zimbra et à votre logiciel de messagerie.

**Découvrez quelle méthode choisir pour configurer votre compte e-mail Zimbra sur le logiciel de messagerie de votre choix.**

## Prérequis

- Avoir souscrit à un compte e-mail sur l'une de nos [solutions Zimbra](/links/web/emails-zimbra) (**Zimbra Starter** ou **Zimbra Pro**).
- Avoir installé un logiciel de messagerie sur l'appareil de votre choix.
- Posséder les identifiants de connexion de l'adresse e-mail à configurer.

<!-- CP-NAV-START:web-zimbra -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zimbra](/links/control-panel/web-zimbra)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## En pratique

### Identifier votre offre Zimbra <a name="identifier-offre"></a>

La méthode de configuration à utiliser dépend de votre offre Zimbra. Les deux offres ne prennent pas en charge les mêmes protocoles.

| Offre | Protocoles pris en charge | Fonctionnalités synchronisées |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | E-mails uniquement |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | E-mails, calendrier, contacts, tâches |

> [!primary]
>
> Pour identifier votre offre, connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action} puis `Zimbra Mail`{.action}. Dans l'onglet `Compte email`{.action}, l'offre est indiquée dans la colonne **Offre** de chaque compte.

### Configurer un compte Zimbra Pro <a name="config-zimbra-pro"></a>

> [!success]
>
> Pour tirer pleinement parti des fonctionnalités collaboratives de Zimbra Pro (synchronisation du calendrier, des contacts et des tâches), utilisez les protocoles **ActiveSync** ou **EWS** via les guides dédiés ci-dessous. La configuration IMAP/POP reste possible, mais ne synchronise que les e-mails.

Cliquez sur l'onglet correspondant au type d'appareil que vous utilisez :

> [!tabs]
> **Ordinateur Windows**
>>
>> - [Outlook classique via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Ordinateur Apple Mac**
>>
>> - [Mail via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone ou iPad**
>>
>> - [Mail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Smartphone ou tablette Android**
>>
>> - [Gmail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Configurer un compte Zimbra Starter (ou un compte Zimbra Pro en IMAP/POP) <a name="mail-config"></a>

Pour l'offre **Zimbra Starter**, ou si vous préférez une configuration IMAP/POP pour votre compte **Zimbra Pro**, utilisez les guides ci-dessous.

> [!primary]
>
> Les guides ci-dessous sont partagés avec l'offre MX Plan car les paramètres IMAP/POP/SMTP sont strictement identiques pour les deux offres. C'est pourquoi les liens ont une mention « MX Plan » dans leur titre.

Cliquez sur l'onglet correspondant au type d'appareil que vous utilisez :

> [!tabs]
> **Ordinateur Windows**
>>
>> - [Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Courrier pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Ordinateur Apple Mac**
>>
>> - [Outlook pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone ou iPad**
>>
>> - [Mail pour iPhone et iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone ou tablette Android**
>>
>> - [Gmail pour Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interface web**
>>
>> - [Interface en ligne de Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Utiliser l'application mobile Zimbra <a name="config-zimbra-app"></a>

Compatible avec les offres **Zimbra Starter** et **Zimbra Pro**, l'application mobile Zimbra (Android et iOS) permet d'accéder à votre compte via le protocole natif de Zimbra.

- [Configurer l'application mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Paramètres IMAP, POP et SMTP de référence <a name="popimap-settings"></a>

Si votre logiciel de messagerie nécessite une configuration manuelle, utilisez les paramètres suivants.

#### Serveurs de réception

Pour la réception des e-mails, nous recommandons le protocole **IMAP**. Le protocole **POP** reste disponible. Cliquez sur l'onglet correspondant au protocole de votre choix :

> [!tabs]
> **IMAP (recommandé)**
>>
>> - **Nom d'utilisateur** : adresse e-mail **complète**
>> - **Mot de passe** : mot de passe de l'adresse e-mail
>> - **Serveur EUROPE (entrant)** : `imap.mail.ovh.net` **ou** `ssl0.ovh.net`
>> - **Serveur AMÉRIQUE/ASIE-PACIFIQUE (entrant)** : `imap.mail.ovh.ca`
>> - **Port** : 993
>> - **Type de sécurité** : SSL/TLS
>>
> **POP**
>>
>> - **Nom d'utilisateur** : adresse e-mail **complète**
>> - **Mot de passe** : mot de passe de l'adresse e-mail
>> - **Serveur EUROPE (entrant)** : `pop.mail.ovh.net` **ou** `ssl0.ovh.net`
>> - **Serveur AMÉRIQUE/ASIE-PACIFIQUE (entrant)** : `pop.mail.ovh.ca`
>> - **Port** : 995
>> - **Type de sécurité** : SSL/TLS
>>

#### Serveur d'envoi

Pour l'envoi des e-mails, utilisez les paramètres **SMTP** suivants :

- **Nom d'utilisateur** : adresse e-mail **complète**
- **Mot de passe** : mot de passe de l'adresse e-mail
- **Serveur EUROPE (sortant)** : `smtp.mail.ovh.net` **ou** `ssl0.ovh.net`
- **Serveur AMÉRIQUE/ASIE-PACIFIQUE (sortant)** : `smtp.mail.ovh.ca`
- **Port** : 465
- **Type de sécurité** : SSL/TLS

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurer l'application mobile Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
