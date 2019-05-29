---
title: Utilisation de la double authentification (2FA)
slug: utilisation-2FA
excerpt: Apprenez à mette en place la double authentification pour protéger votre infrastructure
section: Fonctionnalités OVH
order: 05
---

**Dernière mise à jour le 11 janvier 2019**

## Objectif

La mise en place d'une double authentification permet de protéger l'accès à votre infrastructure Private Cloud en réduisant les risques liés, par exemple, à un vol de mot de passe.

**Apprenez à mette en place la double authentification pour protéger votre infrastructure.**

## Prérequis

- Disposer d'une infrastructure Private Cloud avec l'option advanced security (inclus dans les offres PCI-DSS et HDS).
- Disposer d'un smartphone et d'une application d'authentification (exemples : Google Authenticator, Authy, OTP Auth...).


## En pratique

### Activation de la double authentification

Afin de mettre en place la double authentification, il est nécessaire de se connecter sur l'interface certifiée de votre Private Cloud.

Pour cela, deux possibilités s'offrent à vous :
	
Via la gateway de votre Private Cloud (https://pcc-xxx-xxx-xxx-xxx.ovh.com) : 

![Gateway Private Cloud](images/gatewayPCC.jpg){.thumbnail}

Ou directement via l'URL https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ ( attention à ne pas oublier le "/" final de l'adrese).

Une fois connecté à l'interface de gestion, cliquez sur `Change Password`{.action}

![Change Password](images/selectChangePassword.jpg){.thumbnail}

Au sein de l'interface, vous devez alors :
	
* Sélectionner  `Password and 2FA Shared Secret`{.action} ,
* Renseigner un nouveau mot de passe, 
* Scanner le QRcode avec l'application smartphone d'authentification de votre choix ,
* Confirmer le code obtenu.

![Scan QRcode](images/scanQRcode.jpg){.thumbnail}

Une tâche se créera alors, et un token vous sera envoyé.

Rendez-vous dans la partie `Operation validation`{.action} , chargez l'opération reçue par SMS, et confirmez avec le token reçu dans ce même SMS.

> [!primary]
>
> Dans le cadre d'un mot de passe oublié, il sera nécessaire de lancer d'abord la procédure de "Password lost" , durant laquelle la mise en place d'une double authentification vous sera proposée.
>

### Connexion

Vous pouvez maintenant vous connecter à votre client *web* via son url habituelle, et arriverez alors sur cette page.

![Connexion 2FA](images/2FAtoken.jpg){.thumbnail}

Il est désormais nécessaire de renseigner le token généré par l'application d'authentification installée sur votre smartphone avant de pouvoir vous connecter avec votre mot de passe.


> [!warning]
>
> La double authentification sera active lors de la modification de mot de passe d'un des utilisateurs. Cela signifie que si un seul utilisateur modifie son mot de passe, l'ensemble des utilisateurs bénéficiera dela double authentification activée. 
>
> Ils devront de ce fait renouveler leur mot de passe, puis mettre en place la double authentification sur leurs utilisateurs, sous peine de voir ces utilisateurs perdre la possibilité de se connecter.
>
> Pour les clients disposant d'une infrastructure en version 6.0, l'accès au client vSphere (disponible uniquement sur Windows) ne sera plus possible. L'accès se fera alors exclusivement par le client vSphere web.
>

### Création d'un nouvel utilisateur

Lors de la création d'un nouvel utilisateur, vous avez maintenant le choix d'attribuer ou non un rôle de *token validator*.

Dans les deux cas de figure, il sera nécessaire de modifier le mot de passe à travers l'interface certifiée en suivant la procédure présentée précédement afin de mettre en place la 2FA.

La seule différence sera l'autonomie ou non de l'utilisateur pour la validation du token.

### Autorisation d'application

Il est possible d'utiliser plusieurs applications tierces nécessitant la connexion au vCenter.
Ces applications doivent être préalablement autorisées au travers de la politique d'accès au vCenter qui est paramètrable dans votre [espace client](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#securite)

Ces applications vont alors pouvoir accéder à nos infrastructures, mais ne vont pas forcément gérer la double authentification.

Dans ce cas, il sera nécessaire de créer une *whitelist* spécifique au *bypass* de la double authentification.

Cette *whitelist* sera un complément de la liste principale regissant les accès au vCenter.

Pour ajouter les IPs publiques de vos applicatifs à cette seconde *whitelist*, les appels API suivant devront être utilisés : 

- Vérifier les IPs autorisées à ne pas tenir compte de la double authentification.

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Ajouter une IP au *bypass* de la double authentification.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Afficher les informations d'une IP autorisée (nécessite un ID récupéré avec le premier appel).

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Supprimer une IP de la liste d'autorisation.

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Modifier les informations d'une IP autorisée.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.