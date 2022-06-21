---
title: 'Configurer un compte E-mail Pro sur Outlook'
slug: configuration-outlook-2016
excerpt: 'Découvrez comment configurer votre compte E-mail Pro sur Outlook pour Windows'
section: 'Configuration sur ordinateur'
order: 1
---

**Dernière mise à jour le 05/07/2021**

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix.

**Découvrez comment configurer votre adresse e-mail E-mail Pro sur Outlook ou ultérieur pour Windows.**


> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d’un compte e-mail [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/){.external}.
- Disposer du logiciel Microsoft Outlook ou ultérieur.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Ajouter le compte

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail.

- **Si un compte a déjà été paramétré** : cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran, puis sur `Ajouter un compte`{.action}.

- Renseignez à présent votre adresse e-mail, puis appuyez sur `Options avancées`{.action}. Cochez la case à côté de `Configurer mon compte manuellement`{.action} qui vient d'apparaître, puis cliquez sur `Connexion`{.action}. 

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**?**.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, dans la rubrique `Web Cloud`{.action} puis `E-mail Pro`{.action}. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

| | |
|---|---|
|![Outlook](images/config-outlook-emailpro02.png){.thumbnail}|Parmi les différents types de comptes, choisissez entre IMAP et POP. <br>Nous vous conseillons une utilisation en IMAP.|
|Saisissez le mot de passe de votre adresse e-mail, puis cliquez sur `Suivant`{.action}. |![Outlook](images/config-outlook-emailpro03.png){.thumbnail}|
|![Outlook](images/config-outlook-emailpro04.png){.thumbnail}|Si Outlook n'est pas parvenu à configurer automatiquement votre adresse, cette fenêtre s'affiche. <br>Cliquez sur `Modifier les paramètres du compte`{.action} |
|Saisissez dans **Courrier entrant**: <br>- le serveur **pro**?**.mail.ovh.net** (remplacez bien «**?**» par le numéro de votre serveur) <br>- Port **993**<br>- Méthode de chiffrement **SSL/TLS**<br><br>Saisissez dans **Courrier sortant**: <br>- le serveur **pro**?**.mail.ovh.net** (remplacez bien «**?**» par le numéro de votre serveur)<br>- Port **587**<br>- Méthode de chiffrement **STARTTLS**<br><br>Cliquez sur `Suivant`{.action} pour valider. |![Outlook](images/config-outlook-emailpro05.png){.thumbnail}|


Dans le cadre d'une configuration en **POP**, les valeurs sont les suivantes:

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant|pro**?**.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|SSL/TLS|995|
|Sortant|pro**?**.mail.ovh.net (la mention **«?»** est à remplacer par le numéro de votre serveur)|STARTTLS|587|

### Utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible à l’adresse <https://www.ovh.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail. Pour toute question relative à son utilisation, n'hésitez pas à consulter notre guide [Consulter son compte Exchange depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/).

### Récupérer une sauvegarde de votre adresse e-mail

Si vous devez effectuer une manipulation qui risquerait d'entrainer la perte des données de votre compte e-mail, nous vous conseillons d'effectuer une sauvegarde préalable du compte e-mail concerné. Pour ce faire, consulter le paragraphe « **Exporter depuis Windows** » sur notre guide [Migrer manuellement votre adresse e-mail](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/#exporter-depuis-windows).

### Modifier les paramètres existants

Si votre compte e-mail est déjà paramétré et que vous devez accéder aux paramètres du compte pour les modifier :

- Allez dans `Fichier`{.action} depuis la barre de menu en haut de votre écran, puis sélectionnez le compte à modifier dans le menu déroulant **(1)**.
- Cliquez sur `Paramètres du compte`{.action}**(2)** en dessous.
- Cliquez sur `Paramètres du serveur`{.action}**(3)** pour accéder à la fenêtre de paramètres.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

La fenêtre est divisée en deux parties, **Courrier entrant** et **Courrier sortant**. Cliquez sur l'un ou l'autre pour pouvoir les modifier.

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**?**.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, dans la rubrique `Web Cloud`{.action} puis `E-mail Pro`{.action}. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

![Outlook](images/config-outlook-emailpro07.png){.thumbnail}


## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Outlook 2016 pour Windows](https://docs.ovh.com/fr/emails/configuration-outlook-2016/){.external}

[Configurer son compte Exchange sur Outlook 2016 pour Windows](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-outlook-2016/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
