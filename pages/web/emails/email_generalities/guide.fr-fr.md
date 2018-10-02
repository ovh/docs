---
title: Configurer son adresse e-mail MX Plan
slug: generalites-sur-les-emails-mutualises
legacy_guide_number: 1474
excerpt: Vous trouverez dans ce guide differentes informations concernant les e-mails mutualisés chez OVH
section: Premiers pas
order: 3
---

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Accéder à son adresse e-mail MX Plan

Il vous est possible d'envoyer vos e-mails et de les recevoir via notre interface en ligne (*webmail*) en vous rendant sur le lien [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}.

Une documentation est disponible pour vous aider à prendre en main le *webmail* : [Consulter son adresse e-mail depuis le webmail RoundCube](https://docs.ovh.com/fr/emails/utilisation-roundcube/){.external}.

## Configurer son adresse e-mail MX Plan

Aidez-vous de nos tutoriaux pour configurer votre adresse e-mail :

|Windows|Outlook|Apple|Android|Autre|
|---|---|---|---|---|
|[Windows 10](https://docs.ovh.com/fr/emails/configuration-courrier-sur-windows-10/){.external}|[Outlook 2016](https://docs.ovh.com/fr/emails/configuration-outlook-2016/){.external}|[Mail de macOS (dernière version)](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-el-capitan/){.external}|[Android (dernière version)](https://docs.ovh.com/fr/emails/configuration-android-6/){.external}|[Téléphone BlackBerry](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-blackberry/){.external}|
|[Windows 8](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-sous-windows-8/){.external}|[Outlook 2013](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2013/){.external}|[Mail de Mac (Mavericks & Yosemite)](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-mavericks-et-yosemite/){.external}|[Android 5.1](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-telephone-mobile-sous-android-version-51/){.external}|[Gmail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-e-mail-mutualise-ovh-sur-linterface-de-gmail/){.external}|
|[Windows Phone](https://docs.ovh.com/fr/emails/configuration-windows-phone-mail-mutu/){.external}|[Outlook 2011 Mac](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2011-sur-mac/){.external}|[iOS 7 et versions ultérieures](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-iphone-ios-91/){.external}|[Android 4.4](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-telephone-mobile-sous-android-version-44/){.external}| |
|[Windows Mail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-windows-mail/){.external}|[Outlook 2010](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2010/){.external}|[Thunderbird sur Mac](https://docs.ovh.com/fr/emails/guide-de-configuration-email-pour-thunderbird-mac/){.external}|[Android 4.1.2](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-sous-tablette-android-412/){.external}| |
|[Thunderbird sur Windows](https://docs.ovh.com/fr/emails/configuration-email-configuration-pour-thunderbird/){.external}|[Outlook 2007](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2007/){.external}| | | |
| |[Outlook.com](https://docs.ovh.com/fr/emails/configuration-outlook-com/){.external}| | | |

Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre adresse e-mail MX Plan, retrouvez ci-dessous les paramètres à utiliser :

**Pour une configuration en IMAP (recommandée)**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|SSL0.OVH.NET|993|143|
|Sortant|SSL0.OVH.NET|465|587|

Assurez-vous de bien activer l'authentification pour le serveur sortant (SMTP). Si cela n'est pas fait, vous pourriez recevoir une erreur `553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)`.

**Pour une configuration en POP (recommandée)**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|SSL0.OVH.NET|995|110|
|Sortant|SSL0.OVH.NET|465|587|

Assurez-vous de bien activer l'authentification pour le serveur sortant (SMTP). Si cela n'est pas fait, vous pourriez recevoir une erreur `553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)`.

Si vous ne savez pas choisir entre POP ou IMAP :

- Le protocole **IMAP** permet de consulter les fichiers distants (e-mails) à distance sur un serveur. C'est à dire que cela **ne place pas les e-mails directement sur votre disque dur** sauf si le logiciel que vous utilisez effectue cette copie locale. En cas de dysfonctionnement de votre ordinateur et que vous perdez vos données (perte de disque dur), il sera toujours possible de consulter vos e-mails puisque ceux-ci sont toujours accessibles sur nos serveurs.

- Le protocole **POP** permet de télécharger les fichiers distants (e-mails) en local sur votre propre équipement (ordinateur ou smartphone par exemple). C'est à dire que cela **place les e-mails directement sur votre disque dur**. En cas de dysfonctionnement de votre ordinateur et que vous perdez vos données (perte de disque dur), les e-mails stockés sur celui-ci sont définitivement perdus à moins que vous disposiez d'une sauvegarde personnelle de ces derniers ou que le logiciel que vous utilisiez était paramétré pour conserver une copie des e-mails reçus sur le serveur. 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.