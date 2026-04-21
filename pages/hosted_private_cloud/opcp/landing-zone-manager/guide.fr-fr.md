---
title: "Landing Zone Manager - Créer et utiliser un compte"
excerpt: "Découvrez comment créer un nouveau compte utilisateur dans le Landing Zone Manager et s'y connecter pour la première fois"
updated: 2026-04-21
---

## Objectif

Le Landing Zone Manager propose une gestion de comptes en self-service qui permet aux administrateurs de provisionner de nouveaux utilisateurs et de leur donner accès à la plateforme. Chaque compte créé dans le Landing Zone Manager s'appuie sur un realm dédié dans l'instance Keycloak sous-jacente.

**Ce guide explique comment créer un nouveau compte dans le Landing Zone Manager et comment s'y connecter pour la première fois.**

## Prérequis

- disposer d'un accès au Landing Zone Manager avec les privilèges d'administrateur permettant la gestion des comptes
- connaître le mot de passe par défaut de première connexion défini lors du déploiement de votre Landing Zone Manager
- disposer de l'URL du Landing Zone Manager (communiquée au préalable par votre administrateur)
- disposer des informations utilisateur à provisionner (nom complet et adresse email)

## En pratique

### Étape 1 : Accéder à la section de gestion des comptes

Connectez-vous au Landing Zone Manager avec un compte disposant des privilèges d'administrateur. Depuis la navigation principale, ouvrez la section `Account management`{.action}.

### Étape 2 : Créer un nouveau compte

Cliquez sur le bouton `+ Create New account`{.action} pour ouvrir le formulaire de création de compte.

Renseignez les champs obligatoires suivants :

|Champ|Description|
|---|---|
|Name|Le nom d'affichage du compte|
|Email|L'adresse email de l'utilisateur. Cette valeur sera également utilisée comme identifiant de **connexion**|
|First name|Le prénom de l'utilisateur|
|Last name|Le nom de famille de l'utilisateur|

Une fois tous les champs remplis, confirmez la création du compte.

> [!primary]
>
> L'adresse email fournie est utilisée comme identifiant de connexion du nouveau compte. Assurez-vous qu'elle est correcte avant de valider, car les utilisateurs s'authentifieront avec cette valeur.
>

### Étape 3 : Communiquer les identifiants de première connexion

Une fois le compte créé avec succès, l'utilisateur peut se connecter pour la première fois en utilisant :

- **Login** : l'adresse email saisie lors de la création
- **Mot de passe** : le mot de passe par défaut de première connexion défini lors du déploiement du Landing Zone Manager

> [!warning]
>
> Le mot de passe par défaut est partagé entre toutes les premières connexions et est défini au moment du déploiement. Pour des raisons de sécurité, les utilisateurs doivent le changer immédiatement après leur première connexion réussie.
>

### Étape 4 : Première connexion au Landing Zone Manager

Une fois le compte provisionné, l'utilisateur peut se connecter au Landing Zone Manager en utilisant l'URL communiquée précédemment.

Depuis la page de connexion :

1. Saisissez l'adresse email utilisée lors de la création du compte comme identifiant.
2. Saisissez le mot de passe par défaut de première connexion.
3. Validez pour accéder au Landing Zone Manager.

Lors de la première connexion, l'utilisateur peut être invité à mettre à jour son mot de passe et à compléter les étapes d'authentification supplémentaires requises par la plateforme.

## Correspondance des comptes dans Keycloak

> [!info]
>
> Le Landing Zone Manager repose sur sa **propre stack Keycloak dédiée**, indépendante du Keycloak OPCP Core et de tout Keycloak CloudStore. Il n'est pas fédéré avec ces instances : les identités, realms et identifiants gérés dans le Landing Zone Manager sont totalement isolés des autres couches d'identité OPCP.
>

Chaque compte créé dans le Landing Zone Manager génère automatiquement un **realm dédié dans Keycloak**. Cette conception garantit :

- une configuration indépendante des flux d'authentification par compte
- des bases d'utilisateurs et des mappings de rôles séparés par realm

> [!primary]
>
> Comme chaque compte correspond à un realm Keycloak distinct, toute opération liée à l'identité (ajout d'utilisateurs, configuration de la fédération, définition de rôles) doit être effectuée au sein du realm associé au compte cible.
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
