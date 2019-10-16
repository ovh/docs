---
title: Création d'un sous compte OVH et d'un utilisateur pour l'accès au manager OVH
excerpt: 
slug: sub-account
section: APIv6
---

**Dernière mise à jour le xx/xx/2019**

## Objectif

Nous allons decrire comment créer un sous-compte OVH afin de créer une identitée particulière permettant d'isoler la visibilité sur des services, la facturation.

Et d'ajouter un ou des logins a ce sous-compte pour l'accès au manager.
Et l'ajout de

## Prérequis

- Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
- Avoir [créé ses identifiants pour l'API OVH](https://api.ovh.com/g934.first_step_with_api){.external}.
- Avoir un compte client avec un tag Reseller (Contacter votre commercial pour connaitre votre éligibilité le cas échéant).

## En pratique

### Ressources

- /me/subAccount

- /me/identity/user

### Déroulement des opérations

#### Création d'un Sous compte

> [!api]
>
> @api {POST} /me/subAccount
>

Récupérer et stocker l'id

#### Création d'une ConsumerKey sur ce sous-compte

> [!api]
>
> @api {POST} /me/subAccount/{id}/createConsumerKey
>

La ConsumerKey permet d'effectuer des actions sur l'API avec l'identité sous-

#### Création d'un user pour ce sous-compte

Avec la ConsumerKey précédament obtenu

> [!api]
>
> @api {POST} /me/identity/user
>

- email : ajouter l'adresse mail pour cet utilisateur
- login : une chaine
- password : doit répondre au exigence de https://github.com/dropbox/zxcvbn et valide sur https://haveibeenpwned.com/Passwords

#### Ajout de cet utilisateur dans groupe

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
