---
title: "Landing Zone Manager - Créer un compte utilisateur"
excerpt: "Découvrez comment créer un nouveau compte utilisateur dans le Landing Zone Manager et s'y connecter pour la première fois"
updated: 2026-04-30
---

## Objectif

Le Landing Zone Manager est le portail OPCP qui permet à chaque équipe, département ou client de déployer et piloter ses workloads en toute autonomie, dans un espace dédié et cloisonné. Les administrateurs y provisionnent les utilisateurs et leur donnent accès à la plateforme. Chaque compte utilisateur s'appuie sur un realm dédié dans l'instance Keycloak sous-jacente, garantissant l'isolation multitenant des accès.

**Ce guide explique comment créer un nouveau compte utilisateur dans le Landing Zone Manager et comment s'y connecter pour la première fois.**

## Prérequis

- Disposer d'un accès au Landing Zone Manager avec les privilèges d'administrateur permettant la gestion des comptes utilisateurs
- Connaître le mot de passe par défaut de première connexion défini lors du déploiement de votre Landing Zone Manager
- Disposer de l'URL du Landing Zone Manager (communiquée au préalable par votre administrateur)
- Disposer des informations utilisateur à provisionner (nom complet et adresse e-mail)

## En pratique

### Étape 1 : Accéder à la section de gestion des comptes utilisateurs

Connectez-vous au Landing Zone Manager avec un compte disposant des privilèges d'administrateur. Depuis la navigation principale, ouvrez la section `Account management`{.action}.

### Étape 2 : Créer un nouveau compte utilisateur

Cliquez sur le bouton `+ Create New account`{.action} pour ouvrir le formulaire de création de compte utilisateur.

Renseignez les champs obligatoires suivants :

| Champ      | Description                                                                                               |
| ------------| -----------------------------------------------------------------------------------------------------------|
| Name       | Le nom d'affichage du compte utilisateur                                                                  |
| Email      | L'adresse e-mail de l'utilisateur. Cette valeur sera également utilisée comme identifiant de **connexion** |
| First name | Le prénom de l'utilisateur                                                                                |
| Last name  | Le nom de famille de l'utilisateur                                                                        |

Une fois tous les champs remplis, confirmez la création du compte utilisateur.

> [!primary]
>
> L'adresse e-mail fournie est utilisée comme identifiant de connexion du nouveau compte utilisateur. Assurez-vous qu'elle est correcte avant de valider, car les utilisateurs s'authentifieront avec cette valeur.
>

### Étape 3 : Communiquer les identifiants de première connexion

Une fois le compte utilisateur créé avec succès, l'utilisateur peut se connecter pour la première fois en utilisant :

- **Login** : l'adresse e-mail saisie lors de la création
- **Mot de passe** : le mot de passe par défaut de première connexion défini lors du déploiement d'OPCP et du CloudStore

> [!warning]
>
> Le mot de passe par défaut est partagé entre toutes les premières connexions et est défini au moment du déploiement. Pour des raisons de sécurité, il sera demandé aux utilisateurs de le changer immédiatement après leur première connexion.
>

### Étape 4 : Première connexion au Landing Zone Manager

Une fois le compte utilisateur provisionné, l'utilisateur peut se connecter au Landing Zone Manager en utilisant l'URL communiquée précédemment.

## Correspondance des comptes dans Keycloak

> [!primary]
>
> Le Landing Zone Manager repose sur sa **propre stack Keycloak dédiée**, indépendante du Keycloak OPCP Core et de tout Keycloak CloudStore. Il n'est pas fédéré avec ces instances : les identités, realms et identifiants gérés dans le Landing Zone Manager sont totalement isolés des autres couches d'identité OPCP dédiées aux administrateurs.
>

Chaque compte créé dans le Landing Zone Manager génère automatiquement un **realm dédié dans Keycloak**. Cette conception garantit :

- une configuration indépendante des flux d'authentification par compte
- des bases d'utilisateurs et des mappings de rôles séparés par realm

> [!primary]
>
> Comme chaque compte correspond à un realm Keycloak distinct, toute opération liée à l'identité (ajout d'utilisateurs, configuration de la fédération, définition de rôles) doit être effectuée au sein du realm associé au compte cible.
>

## Aller plus loin

Pour une formation ou une assistance technique sur la mise en œuvre de nos solutions, contactez votre commercial ou consultez la page [Professional Services](/links/professional-services) pour obtenir un devis et faire analyser votre projet par nos experts.

Échangez avec notre [communauté d'utilisateurs](/links/community).
