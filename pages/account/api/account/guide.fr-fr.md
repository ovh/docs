---
title: Création d'un sous compte OVH et d'un utilisateur via l'API OVH
excerpt: Création d'un sous compte OVH et d'un utilisateur pour l'accès au manager OVH via l'API
slug: ovh-api-sub-account
section: OVH APIv6
---

**Dernière mise à jour le 15/10/2019**

## Objectif

Nous allons décrire comment créer un sous-compte OVH afin de créer une identité particulière permettant d'isoler la visibilité sur des services, la facturation.

Ce guide vous permettra d'ajouter un ou des logins a ce sous-compte pour l'accès à l'espace-client OVH.

## Prérequis

* Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVH](https://api.ovh.com/g934.first_step_with_api){.external}.
* Avoir un compte client avec un tag Reseller (Contactez votre commercial pour connaitre votre éligibilité le cas échéant).

## En pratique

### Ressources

* /me/subAccount
* /me/identity/user

### Déroulement des opérations

#### Création d'un Sous compte

> [!api]
>
> @api {POST} /me/subAccount
>

Récupérez et sauvegardez l'ID obtenu.

#### Création d'une ConsumerKey sur ce sous-compte

> [!api]
>
> @api {POST} /me/subAccount/{id}/createConsumerKey
>

La ConsumerKey permet d'effectuer des actions sur l'API avec l'identité du sous-compte.

#### Création d'un user pour ce sous-compte

Avec la ConsumerKey précédemment obtenue

> [!api]
>
> @api {POST} /me/identity/user
>

* email : ajoutez l'adresse mail pour cet utilisateur
* login : une chaine de caractères
* password : celui-ci doit répondre aux exigences de [zxcvbn: Low-Budget Password Strength Estimation](https://github.com/dropbox/zxcvbn){.external} et être valide en le testant sur [Pwned Passwords](https://haveibeenpwned.com/Passwords){.external} .

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
