---
title: 'Comment assigner un tag à un serveur Bare Metal'
excerpt: "Découvrez comment créer et modifier des tags pour chaque serveur dédié depuis l'espace client OVHcloud"
updated: 2025-07-01
---

## Objectif

Les tags sont des étiquettes attribuables à vos ressources, vous permettant de les organiser et de les gérer plus efficacement.

Chaque tag est constitué de deux parties :

- **La clé** : Représente un attribut ou une catégorie.
- **La valeur** : Correspond à l'information associée à cette clé.

Par exemple, vous pouvez catégoriser vos ressources par site, par service, ou encore par niveau de sécurité. L'utilisation des tags peut notamment faciliter la recherche, l'organisation de vos ressources, la gestion des coûts associés, ou encore l'application de stratégies avec la granularité souhaitée.

**Ce guide vous explique comment créer, attribuer et supprimer des tags pour chaque serveur dédié depuis l'espace client OVHcloud.**

## Prérequis

- Disposer d'un [serveur dédié](/links/bare-metal/bare-metal).
- Être connecté à l’[espace client OVHcloud](/links/manager).

## En pratique

### Attribuer un tag à un serveur dédié depuis l’espace client

Pour attribuer un tag à un serveur :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la section `Bare Metal Cloud`{.action}.
1. Cliquez sur `Serveurs dédiés`{.action} et sélectionnez votre serveur dans la liste.

Par défaut, vous êtes redirigé vers l'onglet `Informations générales`{.action}.

![Informations générales](images/general_information.png){.thumbnail}

Dans l'encadré **Tags**, cliquez sur `Ajouter un tag`{.action}.

![Ajouter un tag](images/add_a_tag.png){.thumbnail}

Vous êtes automatiquement orienté vers l'onglet `Tags`.

Cliquez sur le bouton `Assigner un tag`{.action}.

![Tags - liste vide](images/tag_list_empty.png){.thumbnail}

Dans la fenêtre qui apparaît, cliquez dans le champ `Clé`{.action} pour ouvrir le menu déroulant, puis sélectionnez la clé souhaitée.

![Assigner un tag - clé](images/assign_tag.png){.thumbnail}

Ensuite, cliquez dans le champ `Valeur`{.action} et sélectionnez la valeur appropriée dans le menu déroulant.

![Assigner un tag - valeur](images/assign_tag_populated.png){.thumbnail}

> [!warning]
>
> **Si vous souhaitez utiliser une clé ou une valeur qui n'existe pas encore**, vous pouvez la créer en la saisissant, puis en cliquant sur `Ajouter ce-texte`{.action}, où « ce-texte » corrrespond au texte que vous avez renseigné.
>

Enfin, cliquez sur le bouton `Ajouter`{.action} pour créer le tag, puis sur le bouton `Assigner`{.action} dans la partie inférieure droite de la fenêtre.

![Tag ajouté](images/tag_added.png){.thumbnail}

Un message de confirmation apparaît en vert, au-dessus de la liste des tags appliqués au serveur choisi.

![Tags - liste avec exemple](images/tag_list_with_example.png){.thumbnail}

### Supprimer un tag sur un serveur dédié

Pour retrouver la liste des tags attribués à votre serveur :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la section `Bare Metal Cloud`{.action}.
1. Cliquez sur `Serveurs dédiés`{.action} et sélectionnez votre serveur dans la liste.
1. Rendez-vous dans l'onglet `Tags`{.action}.

Cliquez sur le bouton `...`{.action}, à droite du tag que vous souhaitez supprimer de votre serveur.
Cliquez ensuite sur `Désassigner`{.action}.

![Supprimer un tag de la liste](images/tag_list_remove.png){.thumbnail}

Une fenêtre de confirmation s'affiche. Cliquez sur le bouton `Confirmer`{.action} pour désassigner le tag.

![Confirmer la suppression du tag](images/remove_tag.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).