---
title: Gestion des utilisateurs OpenStack
excerpt: Découvrez comment gérer les utilisateurs OpenStack dans votre espace client OVHcloud et dans l'interface Horizon
updated: 2025-04-28
---

## Objectif

L’accès à Horizon et aux API OpenStack s’effectue via des combinaisons identifiant/mot de passe appelées « *OpenStack users* ». Vous pouvez créer autant d'utilisateurs OpenStack que nécessaire et leur attribuer différents droits d'accès.

Depuis l'interface Horizon, vous pouvez définir un mot de passe pour chaque utilisateur. Attention, le changement de mot de passe d’un compte utilisateur entraîne la révocation immédiate du précédent mot de passe.

**Ce guide vous explique comment gérer des utilisateurs OpenStack depuis votre espace client OVHcloud et via l'interface Horizon.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Un projet [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Création d'un utilisateur OpenStack

Connectez-vous à l’[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez sur `Utilisateurs & Rôles`{.action} dans le menu de gauche sous **Paramètres**.

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

Une fois l'utilisateur OpenStack créé, vous pourrez utiliser ses identifiants pour vous connecter à [l'interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) en cliquant sur le lien `Horizon`{.action} dans le menu de gauche.

### Changer le mot de passe d'un utilisateur OpenStack

La création d’un mot de passe OpenStack est possible après vous être connecté à l'interface [OpenStack Horizon](https://horizon.cloud.ovh.net) :

![Connexion à Horizon](images/1_H_login_window.png){.thumbnail}

L’identifiant de l’utilisateur Horizon se trouve dans le coin supérieur droit de l'interface Horizon. Cliquez sur votre identifiant pour faire apparaître un menu avec les options disponibles.
Sélectionnez `Paramètres`{.action} puis, sur la gauche, `Changer le mot de passe`{.action} :

![Changement de mot de passe](images/2_H_pass_change_option.png){.thumbnail}

Entrez votre mot de passe actuel dans le premier champ et votre nouveau mot de passe dans les deux champs suivants.

> [!primary]
>
> Lors du changement de mot de passe, vérifiez que les critères suivants sont pris en compte :
>
> - le mot de passe doit comporter au minimum 8 caractères ;
> - le mot de passe doit comporter au maximum 30 caractères ;
> - le mot de passe doit comporter au moins une lettre majuscule ;
> - le mot de passe doit comporter au moins une lettre minuscule ;
> - le mot de passe doit comporter au moins un chiffre ;
> - le mot de passe doit comporter uniquement des chiffres et des lettres.
>

Confirmez ensuite la création du nouveau mot de passe en cliquant sur `Changer`{.action}.

![Paramétrage du mot de passe](images/3_H_set_new_passord.png){.thumbnail}

Veuillez noter que le changement de mot de passe du compte d’utilisateur entraîne la révocation immédiate du précédent mot de passe.

### Suppression de l'utilisateur OpenStack

La suppression de l'utilisateur OpenStack se fait depuis [l'espace client OVHcloud](/links/manager). Cliquez sur `Utilisateurs & Rôles`{.action} dans le menu de gauche sous **Paramètres**. 

![public-cloud](images/delete.png){.thumbnail}

Cliquez sur `...`{.action} et sélectionnez `Supprimer`{.action}.

> [!warning]
>
> La suppression d'un utilisateur est définitive et invalidera tous les tokens associés, y compris ceux dont la date d'expiration n'est pas encore dépassée.
> 

## Aller plus loin

[Présentation de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Échangez avec notre [communauté d'utilisateurs](/links/community).
