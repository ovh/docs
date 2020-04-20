---
title: 'Configurer son compte E-mail Pro sur Android via l''application Gmail'
slug: configuration-android
excerpt: 'Apprenez à configurer un compte E-mail Pro sur Android, via l''application Gmail'
section: 'Configuration sur smartphone'
order: 2
---

**Dernière mise à jour le 19/03/2020**

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d’utiliser votre adresse e-mail depuis l’appareil de votre choix.

**Apprenez à configurer un compte E-mail Pro sur Android, via l'application Gmail.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external}.
- Disposer de l'application Gmail sur votre appareil. Vous pouvez installer cette dernière depuis le Google Play Store.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation a été réalisée depuis un appareil Nexus 6 utilisant la version 7.1.1 d'Android. Pour une question d'uniformisation, nous utilisons l'application Gmail pouvant être installée depuis le Play Store. Si vous souhaitez utiliser une autre application, la marche à suivre pourrait alors être différente.
>

## En pratique

### Étape 1 : ajouter le compte

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**X**.mail.ovh.net. Vous devrez remplacer le « X » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `E-mail Pro`{.action}
> dans la colonne de gauche. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

Sur l'écran d'accueil de votre appareil, rendez-vous dans l'application `Gmail`{.action}. L’ajout d’un compte peut s’initier de deux manières différentes :

- **si aucun compte n'est paramétré** : passez l'étape de bienvenue puis appuyez sur `Ajouter une adresse e-mail`{.action}. Choisissez enfin `Autre`{.action} ; 

- **si un compte a déjà été paramétré** : appuyez sur le pictogramme représentant trois traits en haut à gauche, puis sur le pictogramme en forme de flèche à droite du nom du compte déjà paramétré. Appuyez enfin sur  `Ajouter un compte`{.action} et choisissez `Autre`{.action}. 

![emailpro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Renseignez à présent votre adresse e-mail, puis appuyez sur `Suivante`{.action}.

Lors du choix du type de compte, sélectionnez **IMAP** puis renseignez le mot de passe de votre adresse e-mail. Appuyez sur `Suivante`{.action} pour poursuivre la configuration.

![emailpro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Renseignez les paramètres du serveur entrant :

|Information|Description| 
|---|---| 
|Nom d'utilisateur|Renseignez l'adresse e-mail complète.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Serveur|Renseignez le serveur pro**X**.mail.ovh.net.|

Appuyez sur `Suivante`{.action} puis renseignez les paramètres du serveur sortant :

|Information|Description| 
|---|---| 
|Exiger une connexion|Assurez-vous de bien laisser ce bouton enclenché.|
|Nom d'utilisateur|Renseignez l'adresse e-mail complète.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Serveur SMTP|Renseignez le serveur pro**X**.mail.ovh.net.|

Appuyez maintenant sur `Suivante`{.action}. Si les informations renseignées sont correctes, la connexion au compte réussira.

![emailpro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Définissez les options du compte puis appuyez sur `Suivante`{.action}. Enfin, vous pouvez donner un nom à ce compte vous permettant de le reconnaître parmi d'autres présents dans votre application, ainsi que le nom qui s'affichera lorsque vous enverrez des e-mails. Une fois ces actions effectuées, appuyez sur `Suivante`{.action}.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est correctement configuré.

Si vous devez renseigner manuellement des champs techniques dans les préférences du compte, vous trouverez ci-dessous les paramètres à utiliser avec notre offre E-mail Pro :

|Type de serveur|Nom du serveur|Type de sécurité|Port|
|---|---|---|---|
|Entrant|pro**X**.mail.ovh.net|SSL/TLS|993|
|Sortant|pro**X**.mail.ovh.net|STARTTLS|587|

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose également une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external} accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Android via l'application Gmail](https://docs.ovh.com/fr/emails/configuration-android-6/){.external}.

[Configurer son compte Exchange sur Android via l'application Gmail](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-sous-android/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.