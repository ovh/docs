---
title: Exchange - Configurer son compte e-mail sur Outlook pour Windows
excerpt: Apprenez à configurer un compte Exchange sur Outlook pour Windows
updated: 2024-10-09
---

## Objectif

Les comptes Exchange peuvent être configurés sur différents logiciels de messagerie compatibles. Cela vous permet d'utiliser votre adresse e-mail depuis l'appareil de votre choix.

## Prérequis

- Disposer d'une offre [Exchange](/links/web/emails-hosted-exchange).
- Disposer du logiciel Microsoft Outlook installé sur votre appareil.
- Posséder les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.
- Le champ SRV d'OVHcloud doit être correctement configuré dans la zone DNS du nom de domaine.

> [!primary]
>
> Vous utilisez Outlook pour Mac ? Consultez notre documentation : [Configurer son compte Exchange sur Outlook pour Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).

## En pratique

### Étape 1 : ajouter le compte

Une fois l'application Outlook lancée sur votre appareil, l'ajout d'un compte peut être effectué de deux manières différentes.

- **Lors du premier démarrage de l'application** : un assistant de configuration s'affiche et vous invite à renseigner votre adresse e-mail.

- **Si un compte a déjà été paramétré** : cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran, puis sur `Ajouter un compte`{.action}.

![exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Renseignez à présent votre adresse e-mail, puis appuyez sur `Options avancées`{.action}. Cochez la case à côté de `Configurer mon compte manuellement`{.action} qui vient d'apparaître, puis cliquez sur `Connexion`{.action}. Parmi les types de comptes, choisissez **Exchange**.

Une fenêtre de sécurité vous demandant de renseigner le **mot de passe** de l'adresse e-mail apparaît. Renseignez ce dernier, cochez la case pour le mémoriser puis cliquez sur `OK`{.action}.

> [!primary]
>
> Si un message vous indique qu'Outlook n'a pas pu paramétrer votre compte, cela peut indiquer que le champ SRV d'OVHcloud n'est pas correctement configuré dans la zone DNS de votre nom de domaine.
>
> Nous vous conseillons de vérifier la configuration du nom de domaine paramétré sur votre service Exchange dans votre [espace client OVHcloud](/links/manager), onglet `Domaines associés`{.action}, puis colonne `Diagnostic`{.action} du tableau.

Si la configuration de votre nom de domaine est correcte, un message vous demandant d'autoriser une connexion vers le serveur d'OVHcloud apparaît. Acceptez cette connexion afin de permettre la configuration automatique de votre compte Exchange.

Une fois celui-ci correctement paramétré et accessible depuis votre logiciel Outlook, vous pouvez effectuer un test d'envoi pour vérifier que le compte est fonctionnel.

![exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

### Étape 2 : utiliser l'adresse e-mail

Une fois l'adresse e-mail configurée, il ne reste plus qu’à l'utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages.

OVHcloud propose une application web disposant de fonctions collaboratives. Celle-ci est accessible à l’adresse <https://ex.mail.ovh.ca/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.

## Aller plus loin

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'application Outlook sur Windows, consultez [le centre d'aide Microsoft](https://support.microsoft.com/fr-fr/office/ajouter-un-compte-de-courrier-dans-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.