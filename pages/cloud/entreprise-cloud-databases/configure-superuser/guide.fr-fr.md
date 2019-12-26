---
title: 'Configurer le mot de passe de votre utilisateur administrateur'
slug: configurer-mdp-superuser
excerpt: 'Apprenez comment configurer le mot de passe de votre utilisateur administrateur'
section: 'Démarrer avec votre cluster PostgreSQL'
order: 3
---

**Dernière mise à jour le 20/12/2019**

## Objectif

Chaque cluster Enterprise Cloud Databases est configuré nativement avec un utilisateur administrateur.
Ce guide va vous présenter les étapes nécessaire à son utilisation.


## Pré-requis
- Disposer d'un cluster Enterprise Cloud Databases.
- Disposer d'un accès à l'espace client ou à l'API avec des droits suffisants (administrateur ou technique).


## En pratique

### Étape 1 : comprendre les rôles superuser

OVH vous fournit un compte administrateur pour votre instance de base de données. Cet utilisateur **postgres** peut réaliser toutes les opérations techniques de type "administration". il dispose des droits superuser.

Reportez-vous à la [documentation officielle de PostgreSQL](https://www.postgresql.org/docs/current/role-attributes.html){.external} pour connaître ces privilèges.


### Étape 2 : configuration via espace client

Le mot de passe de l'utilisateur administrateur **postgres** est modifiable à tout instant. Pour ce faire, rendez-vous sur votre espace client dans l'onglet `Accueil > Informations`{.action} et au niveau des identifiants cliquez sur le bouton `...`{.action} puis `Mettre à jour le mot de passe`{.action}.

> [!primary]
> Pour des raisons de sécurité, le mot de passe doit respecter certaines règles de complexité :
>
> - être alpha-numérique
> - doit contenir au moins une lettre majuscule
> - doit contenir au moins deux chiffres
> - faire entre 12 et 32 caractères
>


### Étape 2 bis : configuration via API

La route API suivante vous permet de mettre à jour votre mot de passe administrateur.
Veillez à respecter les règles de complexité définies à l'étape 2.


> [!api]
>
> @api {POST} /cloudDB/enterprise/cluster/{clusterId}/user
>
```