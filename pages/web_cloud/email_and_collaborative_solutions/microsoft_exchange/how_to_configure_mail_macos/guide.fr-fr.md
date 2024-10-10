---
title: Exchange - Configurer son compte e-mail sur Mail de macOS
excerpt: Apprenez à configurer votre compte Exchange sur Mail de macOS
updated: 2024-10-09
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

Les comptes Exchange peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix. L'application Mail sur macOS est disponible gratuitement sur tous les Mac.

**Découvrez comment configurer votre adresse e-mail Exchange sur Mail de macOS.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [partenaire spécialisé](https://marketplace.ovhcloud.com/c/support-collaboration) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’une adresse e-mail [Exchange](/links/web/emails-hosted-exchange).
- Disposer du logiciel Mail installé sur votre Mac.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Ajouter le compte <a name="addaccount"></a>

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : ex**?**.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service Exchange.
>
> Retrouvez ce chiffre dans votre [espace client OVHcloud](/links/manager), dans la rubrique `Web Cloud`{.action} puis `Microsoft`{.action}.
> Cliquez sur `Exchange`{.action}, puis sur la plateforme Exchange souhaitée. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
>

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche directement et vous invite à choisir votre type de compte.

- **Si un compte a déjà été paramétré** : cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Comptes`{.action}.

> [!tabs]
> **Etape 1**
>> Sélectionnez `Exchange`{.action}<br><br> 
>> ![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>
> **Etape 2**
>> Saisissez le **Nom** de votre compte e-mail et votre **Adresse e-mail**, puis cliquez sur `Se connecter`{.action} <br><br> 
>> ![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>
> **Etape 3**
>> Dans la fenêtre suivante, cliquez sur `Configuration manuelle`{.action} : <br><br>- Définissez le **Nom** qui s'affichera dans l'interface de navigation <br>- Laissez votre **adresse e-mail**<br>- Laissez votre **Mot de passe** déjà saisi <br><br>Pour finaliser la configuration, cliquez sur `Se connecter`{.action} <br><br> 
>> ![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>
> **Etape 4**
>> Saisissez: <br><br>- Adresse e-mail : laissez votre adresse e-mail complète<br>- Nom d'utilisateur : laissez votre adresse e-mail complète <br>- Mot de passe : laissez votre **mot de passe**<br> - URL interne : **ex?.mail.ovh.net** (remplacez le **?** par [le numéro de votre serveur Exchange](#addaccount))<br>- URL externe : **ex?.mail.ovh.net** (remplacez le **?** par [le numéro de votre serveur Exchange](#addaccount))<br><br>
>>
>> > [!warning]
>> >
>> > Il est normal de voir apparaître le message en rouge « **Impossible de vérfier le nom ou le mot de passe du compte** » lorsque la fenêtre apparaît la première fois. Néanmoins, si ce message persiste après validation, cela signifie que les informations saisies sont erronées.<br><br>
>>
>> ![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>
> **Etape 5**
>> En plus de vos e-mails, vous pouvez sélectionner d'autres fonctionnalités Exchange que vous souhaitez gérer depuis votre Mac. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible à l’adresse [Webmail](/links/web/email). Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, aidez-vous de notre guide [Consulter son compte Exchange depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ou [Utiliser son adresse e-mail depuis le webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#ou-et-comment-se-connecter-au-webmail-roundcube).

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consultez le paragraphe « **Exporter** » dans la partie « **Mail sur Mac OS** » de notre guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter).

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Cliquez sur `Mail`{.action} dans la barre de menu en haut de votre écran, puis sur `Préférences...`{.action} **ou** `Réglages...`{.action} selon votre version de macOS.
- Depuis l'onglet `Comptes`{.action}, sélectionnez le compte concerné dans la colonne de gauche, puis cliquez sur `Réglages du serveur`{.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Aller plus loin

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Mail sur macOS, consultez [le centre d'aide Apple](https://support.apple.com/fr-fr/guide/mail/mail35803/mac).

[FAQ e-mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Configurer votre compte E-mail Pro sur Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configurer votre compte e-mail MX plan sur Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
