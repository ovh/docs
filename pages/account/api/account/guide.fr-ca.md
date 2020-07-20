---
title: Création d'un sous compte OVHcloud et d'un utilisateur via l'API OVH
excerpt: Création d'un sous compte OVHcloud et d'un utilisateur pour l'accès au manager OVHcloud via l'API
slug: ovh-api-sub-account
section: APIv6 OVHcloud
---

**Dernière mise à jour le 08/06/2020**

## Objectif

Nous allons décrire comment créer un sous-compte OVHcloud afin de créer une identité particulière permettant d'isoler la visibilité sur des services, la facturation.

Ce guide vous permettra aussi d'ajouter un ou des logins a ce sous-compte pour l'accès à l'espace-client OVHcloud.

## Prérequis


* Être connecté aux [API OVHcloud](https://ca.api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVHcloud](../api-premiers-pas/){.external}.
* Avoir un compte client avec un tag Reseller (Contactez votre commercial pour connaitre votre éligibilité le cas échéant).

## En pratique

### Ressources

* /me/subAccount
* /me/identity/user

### Déroulement des opérations

#### Création d'un sous-compte

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

* email : ajoutez une adresse mail pour cet utilisateur
* login : renseignez une chaîne de caractères
* password : celui-ci doit répondre aux exigences de [zxcvbn: Low-Budget Password Strength Estimation](https://github.com/dropbox/zxcvbn){.external} et être valide en le testant sur [Pwned Passwords](https://haveibeenpwned.com/Passwords){.external} .

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
