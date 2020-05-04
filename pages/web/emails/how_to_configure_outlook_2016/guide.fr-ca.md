---
title: Configurer son adresse e-mail sur Outlook 2016 pour Windows
slug: configuration-outlook-2016
excerpt: Apprenez à configurer votre adresse e-mail MX Plan sur Outlook 2016 pour Windows
section: Configuration sur ordinateur
order: 1
---

**Dernière mise à jour le 17/05/2018**

## Objectif

Les adresses e-mail de l'offre MX Plan peuvent être configurées sur un logiciel de messagerie compatible. Cela vous permet d'envoyer et de recevoir vos messages depuis l'application de votre choix.

**Apprenez à configurer votre adresse e-mail MX Plan sur Outlook 2016 pour Windows.**


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 


## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}).
- Disposer du logiciel Microsoft Outlook 2016 installé sur votre appareil.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Vous utilisez une version antérieure d'Outlook pour Windows ? Consultez notre documentation pour [Outlook 2013](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2013/){.external} ou pour [Outlook 2010](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-outlook-2010/){.external}.
>
> Vous utilisez Outlook 2016 pour Mac ? Consultez notre documentation : [Configurer son adresse e-mail sur Outlook 2016 pour Mac](https://docs.ovh.com/fr/emails/configuration-outlook-2016-mac/){.external}.
>

## En pratique

### Étape 1 : ajouter le compte

Une fois l'application Outlook lancée sur votre appareil, l'ajout d'un compte peut être effectué de deux manières différentes.

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail.

- **Si un compte a déjà été paramétré** : cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran, puis sur `Ajouter un compte`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Renseignez à présent votre adresse e-mail, puis appuyez sur `Options avancées`{.action}. Cochez la case à côté de `Configurer mon compte manuellement`{.action} qui vient d'apparaître, puis cliquez sur `Connexion`{.action}.

Parmi les différents types de comptes, choisissez entre **IMAP** et **POP**. Nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP** pour le stockage local des e-mails sur votre logiciel Outlook.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Complétez ensuite les informations demandées.

- **pour le courrier entrant :**

|Information|Description|
|---|---|
|Serveur|Renseignez le serveur « ssl0.ovh.net ».|
|Port|Indiquez le port « 993 ».|
|Méthode de chiffrement|Sélectionnez « SSL/TLS ».|
|Exiger l'authentification|Ne cochez pas la case « Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion ».|

- **pour le courrier sortant :**

|Information|Description|
|---|---|
|Serveur|Renseignez le serveur « ssl0.ovh.net ».|
|Port|Indiquez le port « 465 ».|
|Méthode de chiffrement|Sélectionnez « SSL/TLS ».|
|Exiger l'authentification|Ne cochez pas la case « Exiger l'authentification par mot de passe sécurisé (SPA) lors de la connexion ».|

Une fois les informations complétées, cliquez sur `Suivant`{.action} puis renseignez le **mot de passe** de l'adresse e-mail. Si les informations renseignées sont correctes, la connexion au compte réussira.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est correctement paramétré.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Si vous êtes amené à renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre MX Plan :

- **Pour une configuration en IMAP**

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant|ssl0.ovh.net|SSL/TLS|993|
|Sortant|ssl0.ovh.net|SSL/TLS|465|

- **Pour une configuration en POP**

|Type de serveur|Nom du serveur|Méthode de chiffrement|Port|
|---|---|---|---|
|Entrant|ssl0.ovh.net|SSL/TLS|995|
|Sortant|ssl0.ovh.net|SSL/TLS|465|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVH propose aussi une application web permettant d'accéder à votre adresse e-mail depuis un navigateur internet. Celle-ci est accessible à l’adresse <https://www.ovh.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

## Aller plus loin

[Configurer son compte E-mail Pro sur Outlook 2016 pour Windows](https://docs.ovh.com/fr/emails-pro/configuration-outlook-2016/){.external}

[Configurer son compte Exchange sur Outlook 2016 pour Windows](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-outlook-2016/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.