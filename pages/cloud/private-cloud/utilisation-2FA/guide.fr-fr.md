---
title: Utilisation 2FA
slug: utilisation-2FA
excerpt: Protéger votre infrastructure avec la double authentification
section: Fonctionnalités OVH
---


## Objectif

Mettre en place une double authentification pour protéger votre infrastructure.
Ce guide vous explique comment faire.

## Prérequis

- Disposer d'une infrastructure avec l'option advanced security (inclus dans les offres PCI-DSS et HDS).
- Disposer d'une application compatible sur un smartphone (Google Authenticator, Authy, OTP Auth...).


> [!warning]
>
> La double authentification sera active lors de la modification de mot de passe d'un des utilisateurs.
C'est à dire que si un seul des utilisateurs modifie son mot de passe, tous les utilisateurs auront la double authentification activée. 
>
> Ils devront de ce fait modifier leur mot de passe, et devront mettre en place la double authentification sur leurs utilisateurs, sinon, ces utilisateurs ne pourront plus se connecter.
>


> [!warning]
>
>Pour les clients disposant d'une infrastructure en version 6.0, l'accès au client vSphere (disponible uniquement sur Windows) ne sera plus possible.
L'accès se fera exclusivement par le client vSphere web.
>

## Mise en place

Pour cela, vous devrez vous rendre sur l'interface certifiée de votre PCC, disponible soit via la gateway de votre PCC (https://pcc-xxx-xxx-xxx-xxx.ovh.com) : 

![Gateway Private Cloud](images/gatewayPCC.jpg){.thumbnail}

Soit en direct via l'URL https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (le "/" à la fin est important).
Ensuite, il faut choisir le "Change Password" :

![Change Password](images/selectChangePassword.jpg){.thumbnail}

Dans cette interface, il sera nécessaire choisir dans la partie Change "Password and 2FA Shared Secret",
renseigner ensuite un nouveau mot de passe, puis, scanner le QRcode avec l'application de votre choix, et enfin renseigner le code obtenu.

![Scan QRcode](images/scanQRcode.jpg){.thumbnail}

Une tâche se créera et un token vous sera envoyé.
Rendez-vous dans la partie "Operation validation", chargez l'opération reçue par SMS, et confirmez avec le token reçu dans ce même SMS.
 
Dans le cadre d'un mot de passe oublié, la procédure de "Password lost" sera à réaliser, et la 2FA pourra être mise en place également via cette interface.

## Connexion

Vous pourrez ensuite vous rendre sur l'URL de votre client WEB, et arriverez sur cette page.

![Connexion 2FA](images/2FAtoken.jpg){.thumbnail}


Il est nécessaire de renseigner le token de votre application, puis vous pourrez vous connecter avec votre mot de passe.



## Création d'un nouvel utilisateur

Lors de la création d'un nouvel utilisateur, vous avez le choix de le rendre "token validator" ou non.
Dans les deux cas, il sera nécessaire de modifier le mot de passe à travers l'interface certifiée, afin de mettre en place la 2FA.
La seule différence sera l'autonomie pour la validation du token.

## Autorisation d'application

Il est possible d'utiliser plusieurs applications tierces nécessitant la connexion au vCenter.
Ces applications doivent être préalablement autorisées au travers de la politique d'accès au vCenter qui est paramètrable dans votre [espace client](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#securite)

Ces applications vont alors pouvoir accéder à nos infrastructures, mais ne vont pas forcément gérer la double authentification.
Dans ce cas, il sera nécessaire de créer une whitelist spécifique au bypass de la double authentification.

Cette whitelist sera un complément de la première regissant les accès au vCenter.
Pour ajouter les IPs publiques de vos applicatifs à cette seconde whitelist, les appels API suivant devront être utilisés : 

- Vérifier les IPs autorisées a bypass la double authentification.

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist
>


- Ajouter une IP au bypass de la double authentification.

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
