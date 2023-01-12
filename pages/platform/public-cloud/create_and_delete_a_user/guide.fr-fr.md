---
title: "Création et suppression d’utilisateurs OpenStack"
slug: creation-et-suppression-dun-utilisateur-openstack
section: 'Gestion de projets'
excerpt: Découvrez comment créer et supprimer un utilisateur OpenStack depuis votre espace client OVHcloud
order: 9
---

**Dernière mise à jour le 17/03/2022**

## Objectif

L’accès à Horizon et aux API OpenStack s’effectue via des combinaisons identifiant/mot de passe appelées « *OpenStack users* ». Vous pouvez créer autant d'utilisateurs OpenStack que nécessaire et leur attribuer différents droits d'accès.

**Ce guide vous explique comment gérer des utilisateurs OpenStack depuis votre espace client OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Un projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!primary]
>
> Si le projet Public Cloud concerné est le **premier projet** créé dans votre espace client, la création d'utilisateurs OpenStack ne sera possible qu’au bout de 7 jours à compter de la date de création du projet.
>
> Vous pouvez demander la suppression de cette mesure de sécurité en créant un ticket d'assistance dans votre espace client.
>

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

Une fois l'utilisateur OpenStack créé, vous pourrez utiliser ses identifiants pour vous connecter à [l'interface Horizon](https://docs.ovh.com/fr/public-cloud/horizon/) en cliquant sur le lien `Horizon`{.action} dans le menu de gauche.

### Suppression de l'utilisateur OpenStack

La suppression de l'utilisateur OpenStack se fait depuis [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Users & Roles`{.action} dans le menu de gauche sous « Project management ». 

![public-cloud](images/delete.png){.thumbnail}

Cliquez sur `...`{.action} et sélectionnez `Supprimer`{.action}.

> [!warning]
>
> La suppression d'un utilisateur est définitive et invalidera tous les tokens associés, y compris ceux dont la date d'expiration n'est pas encore dépassée.
> 

## Aller plus loin

[Présentation de Horizon](https://docs.ovh.com/fr/public-cloud/horizon/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
