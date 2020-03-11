---
title: 'Configurer la double authentification sur un compte Exchange'
slug: configurer-2fa-exchange
excerpt: 'Découvrez comment configurer la double authentification sur un compte Exchange'
section: 'Fonctionnalités des comptes Exchange'
order: 3
---

**Dernière mise à jour le 17/02/2020**

## Objectif

Si vous souhaitez augmenter la sécurité de votre compte Exchange, vous pouvez activer la double authentification (2FA). Celle-ci permet de générer un code à saisir à chaque connexion, en complément de votre mot de passe. Ce code est généré par une application *one-time password* (OTP) qu'il faudra installer sur votre smartphone ou tablette.

**Découvrez comment activer l'authentification à deux facteurs sur votre compte Exchange.**

## Prérequis

- Disposer d'une offre [Exchange OVHcloud](https://www.ovh.com/fr/emails/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Avoir installé une application OTP sur un smartphone ou une tablette Android ou iOS.

> [!primary]
>**Les applications mobiles OTP**
>
> De nombreuses applications OTP existent. En voici deux, gratuites :
> 
> - sur Android : Free OTP ;
> - sur iOS : OTP Auth.
> 

## En pratique

### Première configuration

#### Étape 1 : activer la double authentification sur la plateforme 

Lors d'une première configuration, il est nécessaire d'activer la double authentification sur la plateforme avant de l'activer sur un compte.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `Microsoft`{.action} dans la barre de services à gauche puis sur `Exchange`{.action}. Enfin, choisissez le service Exchange concerné.

Sélectionnez l'onglet `Sécurité`{.action} de votre plateforme. En dessous de la mention « Double authentification », cliquez sur `Activer`{.action}. Pour terminer, descendez en bas de la page et cliquez sur `Enregistrer les modifications`{.action}.

![2fa-exchange](images/2fa-exchange.gif){.thumbnail}

#### Étape 2 : activer la double authentification sur un compte

Après activation de la double authentification sur votre plateforme, vous pouvez l'activer sur l'un de vos comptes.

Toujours depuis votre plateforme Exchange, dirigez-vous sur l'onglet `Comptes e-mail`{.action}. Cliquez sur `...`{.action} à droite du compte sur lequel vous souhaitez activer la double authentification, puis cliquez sur `Activer la double authentification`{.action}.

![2fa-exchange](images/2fa-exchange-01.png){.thumbnail}

Pour associer votre compte à votre application OTP, connectez-vous au [webmail](https://mail.ovh.net).

Lors de cette première connexion, un QR code apparaît. Utilisez votre application OTP pour le scanner, puis saisissez le code généré par celle-ci pour vous connecter.

![2fa-exchange](images/2fa-exchange-02.png){.thumbnail}

Lors de vos connexions suivantes, seul le code généré par votre application vous sera demandé.

### Désactiver la double authentification

La double authentification de votre compte peut être désactivée de trois manières.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `Microsoft`{.action} dans la barre de services à gauche puis sur `Exchange`{.action}. Enfin, choisissez le service Exchange concerné.

Depuis l'onglet `Comptes e-mail`{.action} de votre plateforme Exchange, cliquez sur `...`{.action} à droite du compte sur lequel la double authentification est déjà active.

![2fa-exchange](images/2fa-exchange-04.png){.thumbnail}

Sélectionnez l'option correspondante à votre besoin selon le tableau ci-dessous :

| N°                 	| Fonction    | Description                                                                                                        	
|----------------------------------	|------------------|------------------|
| 1. | « Désactiver la double authentification » | Permet la suspension de la double authentification pendant une période définie en heures. Une fois le délai dépassé, la double authentification sera réactivée. <br> *Exemple : un utlisateur a oublié son smartphone et ne peut pas s'authentifier avec l'application OTP.*   |
| 2. | « Réinitialiser la double authentification » | Permet de réinitialiser le QR code demandé lors de votre première connexion au webmail.<br> *Exemple : un utilisateur a changé de smartphone et doit reconfigurer son application OTP.* |
| 3. | « Supprimer la double authentification » | Supprime totalement la double authentification sur le compte. | 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
