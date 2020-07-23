---
title: 'Accéder à l''interface Horizon'
slug: creer-un-acces-a-horizon
legacy_guide_number: 1773
excerpt: 'Découvrez comment accéder à l’interface Horizon'
section: 'Gestion depuis Horizon'
order: 2
---

**Dernière mise à jour le 14 novembre 2019**

## Objectif

Horizon est l’interface graphique d’administration d’OpenStack. Certaines fonctionnalités ne sont accessibles que via cette interface.

**Ce guide vous montre comment accéder à l’interface Horizon**


## Prérequis

- Un projet Public Cloud activé
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Créer un compte utilisateur OpenStack.

Tout d’abord, pour accéder à l’interface Horizon, vous devez créer un compte utilisateur OpenStack. Pour ce faire, cliquez sur la section `Public Cloud`{.action} de votre espace client OVHclud. Sur l’écran qui s’affiche, cliquez sur la `flèche`{.action} à côté du nom de votre projet en haut à gauche.

![Add user](images/select_project.png){.thumbnail}

Dans la rubrique « Gestion de projets » du menu de gauche, sélectionnez `Utilisateurs et rôles d’utilisateurs`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Cliquez sur le bouton `Créer un utilisateur`{.action} pour afficher la fenêtre suivante.

![Add user](images/adduser.png){.thumbnail}

La description de l’utilisateur ne représente pas le nom de cet utilisateur. Il s’agit simplement d’un terme descriptif qui vous rappellera le type d’utilisateur auquel il appartient. Sur l’écran suivant, vous pourrez définir les droits des utilisateurs. Pour chaque case d’autorisation que vous cochez, l’utilisateur obtiendra les privilèges correspondants indiqués dans le tableau ci-dessous :

![Permissions](images/permissions.png){.thumbnail}

Cliquez sur le bouton `Confirmer`{.action} lorsque vous avez terminé et vous verrez l’écran suivant :

![User_pw](images/user_pw.png){.thumbnail}

Enregistrez votre mot de passe à cet instant, car c’est la seule occasion où il sera visible. Toutefois, si vous le perdez, vous pouvez toujours en créer un nouveau en cliquant sur l’icône des trois points (...) dans le menu suivant et en sélectionnant `Générer un mot de passe :`{.action}

![Generate](images/generatepw.png){.thumbnail}

Une fois votre utilisateur créé, vous pouvez utiliser ces identifiants pour vous connecter à l’interface Horizon via le `bouton Horizon`{.action} dans la barre latérale gauche.

### Se connecter à OpenStack Horizon

Pour ouvrir le menu, cliquez sur l’icône des trois points à la fin de la ligne (`...`{.action}). Ensuite, cliquez sur le lien `Ouvrir OpenStack Horizon`{.action}. La page de connexion de [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} apparaîtra. Pour vous connecter, saisissez votre `nom d’utilisateur` et votre mot de passe.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Une fois connecté, l’interface d’OpenStack Horizon apparaîtra :

![Horizon interface](images/5_H_view.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
