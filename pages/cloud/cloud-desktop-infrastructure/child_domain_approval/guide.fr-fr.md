---
title: Ajouter une approbation avec un domaine enfant
slug: ajouter-approbation-avec-domaine-enfant
section: Tutoriels
---

** Dernière mise à jour le 16/11/2017 **

## Objectif

Vous souhaitez autoriser les utilisateurs de votre domaine enfant à joindre vos bureaux virtuels ou, tout simplement, les configurer dans votre propre domaine ? Il faut alors autoriser le domaine d'administration de Cloud Desktop Infrastructure. Ce guide vous explique comment y parvenir.

## Prérequis

- Avoir réalisé un Trust avec votre domaine principal.

## En pratique

Voici les paramètres que nous utiliserons pour ce guide :

|---|---|
|---|---|
|Domain AD OVH|view1045.local|
|IP AD OVH|172.16.0.6|
|Domaine AD Client|customer.local|
|IP AD client|10.209.0.23|
|IP interco routeur client|192.168.169.251|
|Réseau client|10.209.0.0/24|

### Étape 1 : créer le Trust sur l'Active Directory (AD) client

Sur votre domaine enfant, il est nécessaire de créer une approbation de type `external`.

### Étape 2 : créer le compte de domaine sur le domaine enfant

```shell
New-ADServiceAccount -Name horizonUI -AccountPassword (ConvertTo-SecureString -AsPlainText "p@ssw0rd" -Force) -Enabled $true -Path "CN=Managed Service Accounts,DC=CUSTOMER,DC=LOCAL" -RestrictToSingleComputer
```

Le `user` doit être **horizonUI**.
Le `mot de passe` sera à renseigner dans l'API.
DC: `customer` (domaine du client : **customer.local**).

### Étape 3 : créer l'approbation sur l'Active Directory (AD) OVH

Une fois le domaine créé, il est nécessaire de l'ajouter sur l'Active Directory OVH.

Pour cela, rendez-vous dans l'API :

> [!api]
>
> @api {POST} /console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addChildDomain
>

Vous devez vous munir de ces informations :

- l'IP de votre Active Directory ;
- le domaine de votre Active Directory ;
- un mot de passe complexe destiné à être la passphrase du Trust ;
- le mot de passe complexe que vous avez utilisé lorsque vous avez créé le compte de service.

Une fois la tâche créée, vous pouvez la surveiller via l'APIv6 ou depuis l'espace client.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.