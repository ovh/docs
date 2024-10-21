---
title: 'E-mail Pro - Configurer son compte e-mail sur Mail pour macOS'
excerpt: 'Apprenez à configurer votre compte E-mail Pro sur Mail de macOS'
updated: 2024-10-09
---

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. L'application Mail sur macOS est disponible gratuitement sur tous les Mac.

**Découvrez comment configurer votre adresse E-mail Pro sur Mail de macOS.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](https://marketplace.ovhcloud.com/c/support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’une adresse [E-mail Pro](/links/web/email-pro).
- Disposer du logiciel Mail installé sur votre Mac.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro<b>?</b>.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
>
> Retrouvez ce chiffre dans votre [espace client OVHcloud](/links/manager), dans la rubrique `Web Cloud`{.action} puis `E-mail Pro`{.action}. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
>

### Ajouter le compte

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche directement et vous invite à choisir votre type de compte.

- **Si un compte a déjà été paramétré** : cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Comptes`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-emailpro01.png){.thumbnail}|Sélectionnez `Autre compte Mail`{.action} puis cliquez sur `Compte Mail`{.action}.|
|Saisissez, dans la fenêtre « **Ajouter un compte Mail** », les informations suivantes : <br>- le **Nom** de votre compte e-mail <br>- Votre **Adresse e-mail** <br>- Le **Mot de passe** de votre adresse e-mail |![mailmac](images/mail-mac-emailpro02.png){.thumbnail}|
|![mailmac](images/mail-mac-emailpro03.png){.thumbnail}|Dans la fenêtre suivante, complétez les informations : <br>- Laissez votre **Adresse e-mail** déjà saisie <br>- Saisissez votre adresse e-mail complète dans **Nom d'utilisateur** <br>- Laissez votre **Mot de passe** déjà saisi <br>- Sélectionnez `POP` ou `IMAP`(recommandé) dans **Type de compte**<br>- Saisissez `pro?.mail.ovh.net` dans **Serveur de réception** (remplacez bien «**?**» par le numéro de votre serveur)<br>-Saisissez également `pro?.mail.ovh.net` dans **Serveur d'envoi** (remplacez bien «**?**» par le numéro de votre serveur)<br><br>Pour finaliser la configuration, cliquez sur `Se connecter`{.action}|

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible à l’adresse [Webmail](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, aidez-vous de notre guide [Consulter son compte Exchange depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ou [Utiliser son adresse e-mail depuis le webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#ou-et-comment-se-connecter-au-webmail-roundcube).

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consultez le paragraphe « **Exporter** » dans la partie « **Mail sur Mac OS** » de notre guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter).

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Préférences`{.action}.
- Sélectionez le compte concerné dans la colonne de gauche, puis cliquez sur `Réglages du serveur`{.action}.

![mailmac](images/mail-mac-emailpro04.png){.thumbnail}

### Informations complémentaire

Dans le cadre d'une configuration en **IMAP**, les valeurs sont les suivantes:

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant(IMAP)|pro<b>?</b>.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|SSL/TLS|993|
|Sortant(SMTP)|pro<b>?</b>.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|STARTTLS|587|

Dans le cadre d'une configuration en **POP**, les valeurs sont les suivantes:

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant(POP)|pro<b>?</b>.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|SSL/TLS|995|
|Sortant(SMTP)|pro<b>?</b>.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|STARTTLS|587|

> [!primary]
>
> **Changer sa configuration**
>
> Si votre adresse e-mail est configurée en **IMAP** et que vous souhaitez changer cette configuration en **POP**, vous devez supprimer le compte sur Mail de MacOS puis le recréer en **POP**.

## Aller plus loin

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Mail sur macOS, consultez [le centre d'aide Apple](https://support.apple.com/fr-fr/guide/mail/mail35803/mac).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
