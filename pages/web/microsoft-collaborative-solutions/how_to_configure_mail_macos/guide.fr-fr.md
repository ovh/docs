---
title: Configurer son compte Exchange sur Mail de macOS
slug: exchange-configuration-automatique-sous-mail-mac
excerpt: Apprenez à configurer votre compte Exchange sur Mail de macOS El Capitan, Sierra et High Sierra
section: Configuration Exchange sur ordinateur
order: 3
---

**Dernière mise à jour le 17/05/2018**

## Objectif

Les comptes Exchange peuvent être configurés sur un logiciel de messagerie compatible. Cela vous permet d'utiliser votre adresse e-mail depuis l'application de votre choix et de bénéficier des fonctions collaboratives inhérentes à Exchange.

**Apprenez à configurer votre compte Exchange sur Mail de macOS El Capitan, Sierra et High Sierra.**


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [Exchange](https://www.ovh.com/fr/emails/){.external}.
- Disposer de l'application Mail installée sur votre appareil.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

> [!primary]
>
> Cette documentation est applicable aux versions de macOS suivantes : El Capitan, Sierra, High Sierra.
>

## En pratique

Cet ajout peut s'effectuer de deux manières différentes :

- **en quelques clics depuis notre outil Apple Devices** : rendez-vous sur le lien <https://autodiscover.mail.ovh.net/AppleDevices/> et suivez les différentes étapes de configuration ;

- **en suivant l'assistant de configuration de l'application Mail** : lancez l'application Mail sur votre appareil.

À partir de ce point, cette documentation abordera uniquement la configuration depuis l'application Mail.

### Étape 1 : ajouter le compte

Une fois l'application Mail lancée sur votre appareil, l'ajout d'un compte peut s'initier de deux manières différentes.

- **Lors du premier démarrage de l'application** : une fenêtre vous invite à choisir un fournisseur de compte Mail. Sélectionnez `Exchange`{.action}, puis continuez.

- **Si un compte a déjà été paramétré** : cliquez sur `Mail`{.action} en haut de votre écran, puis sur `Ajouter un compte`{.action}. Sélectionnez `Exchange`{.action}, puis continuez.

![exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Renseignez à présent les informations de votre compte :

|Information|Description| 
|---|---| 
|Nom|Renseignez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.|
|Adresse e-mail|Renseignez l'adresse e-mail complète.|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|  

Cliquez à présent sur le bouton `Se connecter`{.action}. Si les informations renseignées sont correctes, et si le nom de domaine est correctement paramétré sur votre service Exchange, la connexion au compte réussira.

![exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Lors du choix des applications, assurez-vous de bien laisser au minimum `Mail`{.action} coché afin que l'application puisse utiliser ce compte. Les autres applications peuvent utiliser certaines des fonctions collaboratives inhérentes à Exchange. Une fois votre choix effectué, cliquez sur `Terminé`{.action}.

Vous pouvez effectuer un test d'envoi pour vérifier que le compte est correctement paramétré.

![exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Si la connexion au compte n'aboutit pas, nous vous conseillons de :

- vérifier la configuration du nom de domaine paramétré sur votre service Exchange dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, onglet `Domaines associés`{.action} puis colonne `Diagnostic`{.action} du tableau ;

- essayer de renseigner manuellement les URL de connexion au service Exchange. Poursuivez la manipulation malgré l'alerte du sécurité du certificat, puis complétez les champs `URL interne`{.action} et `URL externe`{.action} avec les informations du serveur sur lequel est hébergé votre service Exchange.

Pour retrouver ce serveur, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur le service Exchange concerné. Positionnez-vous ensuite sur l'onglet `Informations générales`{.action}, puis récupérez le serveur qui s'affiche dans le cadre `Connexion`{.action}.

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVH propose une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external} accessible sur l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Vous pouvez y accéder grâce aux identifiants relatifs à votre adresse e-mail.

## Aller plus loin

[Configurer son adresse e-mail comprise dans l’offre MX Plan ou dans une offre d’hébergement web sur Mail de macOS](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-el-capitan/){.external}.


[Configurer son compte E-mail Pro sur Mail de macOS](https://docs.ovh.com/fr/emails-pro/configurer-email-pro-mail-macos/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.