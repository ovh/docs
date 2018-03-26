---
title: Généralités sur les e-mails mutualisés
slug: generalites-sur-les-emails-mutualises
legacy_guide_number: 1474
excerpt: Vous trouverez dans ce guide differentes informations concernant les e-mails mutualisés chez OVH
section: Généralités
order: 1
---

## Nos tutoriaux pour la configuration


|Windows|Outlook|Apple|Android|Autre|
|---|---|---|---|---|
|[Windows 10](https://docs.ovh.com/fr/emails/configuration-courrier-sur-windows-10/){.external}|[Outlook 2016](https://docs.ovh.com/fr/emails/configuration-outlook-2016/){.external}|[Mail de macOS (dernière version)](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-el-capitan/){.external}|[Android (dernière version)](https://docs.ovh.com/fr/emails/configuration-android-6/){.external}|[Téléphone BlackBerry](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-blackberry/){.external}|
|[Windows 8](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-sous-windows-8/){.external}|[Outlook 2013](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2013/){.external}|[Mail de Mac (Mavericks & Yosemite)](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-mavericks-et-yosemite/){.external}|[Android 5.1](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-telephone-mobile-sous-android-version-51/){.external}|[Gmail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-e-mail-mutualise-ovh-sur-linterface-de-gmail/){.external}|
|[Windows Phone](https://docs.ovh.com/fr/emails/configuration-windows-phone-mail-mutu/){.external}|[Outlook 2011 Mac](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2011-sur-mac/){.external}|[iOS 7 et versions ultérieures](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-iphone-ios-91/){.external}|[Android 4.4](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-dun-telephone-mobile-sous-android-version-44/){.external}||
|[Windows Mail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-windows-mail/){.external}|[Outlook 2010](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2010/){.external}|[Thunderbird sur Mac](https://docs.ovh.com/fr/emails/guide-de-configuration-email-pour-thunderbird-mac/){.external}|[Android 4.1.2](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-sous-tablette-android-412/){.external}||
|[Thunderbird sur Windows](https://docs.ovh.com/fr/emails/configuration-email-configuration-pour-thunderbird/){.external}|[Outlook 2007](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2007/){.external}||||
||[Outlook.com](https://docs.ovh.com/fr/emails/configuration-outlook-com/){.external}||||


## Webmail RoundCube

Il vous est possible d'envoyer vos e-mails et de les recevoir via notre interface en ligne (*webmail*) en vous rendant sur le lien [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}.

Une documentation est disponible pour vous aider à prendre en main le *webmail* : [Utilisation de RoundCube](https://docs.ovh.com/fr/emails/utilisation-roundcube/){.external}.


## Rappel des paramètres IMAP et POP

### Configuration en IMAP (recommandée)
Voici les informations détaillées pour la configuration d'un compte e-mail en **IMAP** :

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|SSL0.OVH.NET|993|143|
|Sortant|SSL0.OVH.NET|465|587|

Vous devez également être en possession du mot de passe de l'adresse e-mail que vous avez défini dans [l'espace client OVH](https://www.ovh.com/manager/web/login/){.external}.

### Configuration POP
Voici les informations détaillées pour la configuration d'un compte e-mail en **POP** :

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|SSL0.OVH.NET|995|110|
|Sortant|SSL0.OVH.NET|465|587|

Vous devez également être en possession du mot de passe de l'adresse e-mail que vous avez défini dans [l'espace client OVH](https://www.ovh.com/manager/web/login/){.external}.

### Rappel sur l'authentification
Il est nécessaire que le  **serveur sortant**  soit authentifié afin d'envoyer sans erreur vos e-mails.

Vous pourriez sinon rencontrer cette erreur :

```bash
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```

Si ce message d'erreur s'affiche, assurez-vous dans votre client de messagerie que l'authentification SMTP pour les messages sortants soit activée.