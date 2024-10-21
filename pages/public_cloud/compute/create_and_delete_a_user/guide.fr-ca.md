---
title: "Création et suppression d’utilisateurs OpenStack"
excerpt: Découvrez comment créer et supprimer un utilisateur OpenStack depuis votre espace client OVHcloud
updated: 2024-03-04
---

## Objectif

L’accès à Horizon et aux API OpenStack s’effectue via des combinaisons identifiant/mot de passe appelées « *OpenStack users* ». Vous pouvez créer autant d'utilisateurs OpenStack que nécessaire et leur attribuer différents droits d'accès.

**Ce guide vous explique comment gérer des utilisateurs OpenStack depuis votre espace client OVHcloud.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Un projet [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Création d'un utilisateur OpenStack

Connectez-vous à votre espace client OVHcloud et ouvrez votre projet `Public Cloud`{.action}. Cliquez sur `Users & Roles`{.action} dans le menu de gauche sous « Project management ». 

Cliquez sur le bouton `Créer un utilisateur`{.action}.

![User roles](images/users_roles.png){.thumbnail}

La description de l'utilisateur n'est pas le nom d'utilisateur OpenStack mais bien une description à renseigner afin de vous aider à organiser les utilisateurs et leurs droits. Entrez une description et cliquez sur `Suivant`{.action}.

![Add user](images/adduser.png){.thumbnail}

Vous pouvez maintenant sélectionner des rôles représentant les autorisations que l'utilisateur obtiendra. Pour chaque case cochée, l’utilisateur obtiendra des privilèges d’accès selon le tableau ci-dessous.

![Permissions](images/permissions.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour créer l'utilisateur OpenStack. L’identifiant et le mot de passe sont automatiquement générés et affichés dans votre espace client.

![User_pw](images/user_pw.png){.thumbnail}

Veillez à enregistrer le mot de passe, uniquement affiché à ce moment précis dans le cadre vert, dans un gestionnaire de mots de passe. Le mot de passe ne pourra pas être récupéré par la suite. Cependant, il est toujours possible de créer un nouveau mot de passe en cliquant sur `...`{.action} et en sélectionnant `Regénérer un mot de passe`{.action}.

![Generate](images/generatepw.png){.thumbnail}

Une fois l'utilisateur OpenStack créé, vous pourrez utiliser ses identifiants pour vous connecter à [l'interface Horizon](/pages/public_cloud/compute/introducing_horizon) en cliquant sur le lien `Horizon`{.action} dans le menu de gauche.

### Suppression de l'utilisateur OpenStack

La suppression de l'utilisateur OpenStack se fait depuis [l'espace client OVHcloud](/links/manager). Cliquez sur `Users & Roles`{.action} dans le menu de gauche sous « Project management ». 

![public-cloud](images/delete.png){.thumbnail}

Cliquez sur `...`{.action} et sélectionnez `Supprimer`{.action}.

> [!warning]
>
> La suppression d'un utilisateur est définitive et invalidera tous les tokens associés, y compris ceux dont la date d'expiration n'est pas encore dépassée.
> 

## Aller plus loin

[Présentation de Horizon](/pages/public_cloud/compute/introducing_horizon)

Échangez avec notre [communauté d'utilisateurs](/links/community).
