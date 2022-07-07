---
title: 'Configurer son adresse e-mail sur Mail de macOS'
slug: guide-configuration-mail-de-mac-el-capitan
section: 'Configuration sur ordinateur'
order: 03
---

**Dernière mise à jour le 13/06/2022**

## Objectif

Les comptes MX Plan peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. L'application Mail sur macOS est disponible gratuitement sur tous les Mac.

**Découvrez comment configurer votre adresse e-mail MX Plan sur Mail de macOS.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}).
- Disposer du logiciel Mail installé sur votre Mac.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.
 
## En pratique

### Ajouter le compte

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche directement et vous invite à choisir votre type de compte.

- **Si un compte a déjà été paramétré** : cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Comptes`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-mxplan01.png){.thumbnail}|Sélectionnez `Autre compte Mail`{.action} puis cliquez sur `Compte Mail`{.action}.|
|Saisissez, dans la fenêtre « **Ajouter un compte Mail** », les informations suivantes : <br>- le **Nom** de votre compte e-mail <br>- Votre **Adresse e-mail** <br>- Le **Mot de passe** de votre adresse e-mail |![mailmac](images/mail-mac-mxplan02.png){.thumbnail}|
|![mailmac](images/mail-mac-mxplan03.png){.thumbnail}|Dans la fenêtre suivante, complétez les informations : <br>- Laissez votre **Adresse e-mail** déjà saisie <br>- Saisissez votre adresse e-mail complète dans **Nom d'utilisateur** <br>- Laissez votre **Mot de passe** déjà saisi <br>- Sélectionnez `POP` ou `IMAP` (recommandé) dans **Type de compte**<br>- Saisissez `ssl0.ovh.net` dans **Serveur de réception** <br>- Saisissez également `ssl0.ovh.net` dans **Serveur d'envoi**<br><br>Pour finaliser la configuration, cliquez sur `Se connecter`{.action}|

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible à l’adresse <https://www.ovh.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, aidez-vous de notre guide [Consulter son compte depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/) ou [Utiliser son adresse e-mail depuis le webmail RoundCube](https://docs.ovh.com/fr/emails/utilisation-roundcube/#ou-et-comment-se-connecter-au-webmail-roundcube).

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consultez le paragraphe « **Exporter** » dans la partie « **Mail sur Mac OS** » de notre guide [Migrer manuellement votre adresse e-mail](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#exporter_1).

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Préférences`{.action}.
- Sélectionez le compte concerné dans la colonne de gauche puis cliquez sur `Réglages du serveur`{.action}.

![mailmac](images/mail-mac-mxplan04.png){.thumbnail}

### Informations complémentaires

Dans le cadre d'une configuration en **IMAP**, les valeurs sont les suivantes:

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant(IMAP)|ssl0.ovh.net|SSL/TLS|993|
|Sortant(SMTP)|ssl0.ovh.net|SSL/TLS|465|

Dans le cadre d'une configuration en **POP**, les valeurs sont les suivantes:

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant(POP)|ssl0.ovh.net|SSL/TLS|995|
|Sortant(SMTP)|ssl0.ovh.net|SSL/TLS|465|

> [!primary]
>
> **Changer sa configuration**
>
> Si votre adresse e-mail est configurée en **IMAP** et que vous souhaitez changer cette configuration en **POP**, vous devez supprimer le compte sur Mail de MacOS puis le recréer en **POP**.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
