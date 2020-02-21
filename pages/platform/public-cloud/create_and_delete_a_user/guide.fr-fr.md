---
title: 'Création et suppression d’un utilisateur OpenStack'
slug: creation-et-suppression-dun-utilisateur-openstack
section: 'Base de connaissances'
---

**Dernière mise à jour le 6 décembre 2019**

## Objectif
Pour pouvoir utiliser les API Horizon ou OpenStack, vous devrez au préalable créer un utilisateur OpenStack. Vous pouvez créer un nombre illimité d’utilisateurs OpenStack.

**Découvrez comment créer et supprimer un utilisateur OpenStack.**

## Prérequis

Disposer d'un projet Public Cloud. S'il s'agit de votre premier projet, il doit dater de plus de 7 jours (ou contactez l’assistance technique pour vérifier si vous pouvez débloquer le projet plus tôt). Les autres projets n’auront pas cette limitation.

## En pratique

### Créer un utilisateur OpenStack.
Tout d’abord, pour accéder à l’interface Horizon, vous devez créer un compte utilisateur OpenStack. Pour ce faire, connectez-vous à votre espace client et sélectionnez `Public Cloud`{.action}. Sur l’écran qui s’affiche, cliquez sur la `flèche`{.action} à côté du nom de votre projet en haut, à gauche.

![Add user](images/select_project.png){.thumbnail}

Dans la rubrique « Project Management » dans la barre latérale gauche, sélectionnez `Users & Roles`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Cliquez sur le bouton `Créer un utilisateur`{.action} pour afficher la fenêtre contextuelle suivante.

![Add user](images/adduser.png){.thumbnail}

La description de l’utilisateur ne représente pas le nom de cet utilisateur. Il s’agit simplement d’un terme descriptif qui vous rappellera le type d’utilisateur auquel il appartient. Sur l’écran suivant, vous pourrez définir les autorisations de l’utilisateur. Pour chaque case d’autorisation que vous cochez, l’utilisateur obtiendra les privilèges correspondants indiqués dans le tableau ci-dessous :

![Permissions](images/permissions.png){.thumbnail}

Cliquez sur le bouton `Confirmer`{.action} lorsque vous avez terminé et vous verrez l’écran suivant :

![User_pw](images/user_pw.png){.thumbnail}

Enregistrez votre mot de passe à cet instant même, car c’est la seule occasion que vous aurez de le récupérer. Toutefois, si vous le perdez, vous pouvez toujours en créer un nouveau en cliquant sur le bouton (...) à droite de l'utilisateur puis sur `Regénérer un mot de passe :`{.action}

![Generate](images/generatepw.png){.thumbnail}

Une fois votre utilisateur créé, vous pouvez utiliser ces identifiants pour vous connecter à l’interface Horizon via le bouton `Horizon`{.action} dans la barre latérale gauche.

### Supprimer un utilisateur OpenStack

Vous pouvez supprimer un utilisateur OpenStack depuis le menu `Users & Roles`{.action}. Cliquez sur le bouton (...) à droite de l'utilisateur à supprimer puis sur `Supprimer`{.action}. Vous devrez alors confirmer la suppression.

![public-cloud](images/delete.png){.thumbnail}


> [!alert]
>
> Toute suppression d’utilisateur est définitive et invalidera tous les tokens associés, y compris ceux dont la date d’expiration n’est pas encore dépassée.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>