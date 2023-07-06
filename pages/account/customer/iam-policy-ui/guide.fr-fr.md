---
title : Comment utiliser les politiques IAM depuis votre espace client
excerpt: "Découvrez comment donner des droits d'accès spécifiques aux utilisateurs depuis un compte OVHcloud"
updated: 2023-07-06
---

> [!warning]
>
> Cette fonctionnalité est actuellement en version bêta. Vous trouverez plus d'information à cet endroit : <https://labs.ovhcloud.com/en/>
>

## Objectif

Ce guide vous explique comment fournir des droits d'accès spécifiques aux utilisateurs d'un compte OVHcloud.

La gestion des accès OVHcloud est basée sur un système de gestion des politiques. Il est possible d’écrire différentes politiques donnant accès aux utilisateurs à des fonctionnalités spécifiques sur les produits liés à un compte OVHcloud.

En détail, une politique contient :

- Une ou plusieurs **identités** visées par cette politique. 
    - Il peut s'agir d'identifiants de comptes, d'utilisateurs ou de groupes d'utilisateurs (comme ceux utilisés dans [Federation](/pages/account/customer/ovhcloud-account-connect-saml-adfs) - d'autres guides SSO sont disponibles). 
- Une ou plusieurs **ressources** concernées par cette politique. 
    - Une ressource est un produit OVHcloud qui sera concerné par cette politique (un nom de domaine, un serveur Nutanix, un Load Balancer, etc.).
- Une ou plusieurs **actions** autorisées ou exceptées par cette politique.
    - Les actions sont les droits spécifiques concernés par cette politique (redémarrage d'un serveur, création d'un compte e-mail, résiliation d'un abonnement, etc.)
 
Par exemple, nous pouvons créer une politique pour donner à un utilisateur nommé John, pour un VPS, l'accès à l'action « redémarrer ».

**Ce guide vous explique en détail comment déclarer ces politiques à l'aide de l'espace client OVHcloud et comment lister les identités, ressources et actions disponibles pour celles-ci.**

![politiques IAM](images/iam_policies.png){.thumbnail}

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Savoir [gérer les utilisateurs du compte](/pages/account/customer/ovhcloud-users-management)
- Un ou plusieurs produits OVHcloud liés à ce compte OVHcloud (Load Balancer, nom de domaine, VPS, etc.)

## En pratique

### Accéder au menu IAM

Cliquez sur le nom de votre compte en haut à droite, puis de nouveau sur votre nom dans la barre latérale.

![Accès au menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Vous pouvez accéder au menu IAM via l’entrée dédiée dans votre espace client.

![Accès au menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Le menu affiche la liste de toutes les politiques en cours créées sur votre compte.

![Accès au menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Chaque politique est affichée avec son nom, le nombre d'identités qui lui sont liées et le nombre d'actions qu'elle contient.

> [!primary]
>
> Cliquer sur le bouton « Mode avancé » affiche la liste de toutes les politiques OVHcloud. Ces politiques sont automatiquement créées par OVHcloud pour convertir la délégation préexistante des `NIC Tech` (contact technique) et `NIC Admin` (contact administrateur) sur la nouvelle fonctionnalité IAM. 
>
> Les clients ne sont pas autorisés à modifier ou supprimer ces politiques.

### Gestion des politiques

#### Créer une politique

Cliquez sur le bouton `Créer une politique`{.action}.

Le formulaire suivant s'affiche :

![Créer une politique](images/create_a_policy_01.png){.thumbnail}

- **Nom de la politique** (obligatoire) : il s'agit du nom qui apparaîtra dans les interfaces. Le nom doit être unique et ne doit contenir aucun espace.
- **Types de produits** : sélectionnez les types de produits pour définir le champ d'application de la politique. Un ou plusieurs types de produit peuvent être inclus dans la même politique.
- **Ressources** : ajoutez des ressources ou des groupes de ressources à couvrir par la politique. Les ressources disponibles sont filtrées par type de produit préalablement sélectionné.
- **Actions**.

Il existe 3 façons d'ajouter des actions :

- En activant l'option `Autoriser toutes les actions`{.action}

![Créer une politique](images/create_a_policy_02.png){.thumbnail}

Lors de l'activation de cette option, vous autorisez toutes les actions liées aux produits sélectionnés. Cela inclut toutes les actions existantes ainsi que les actions ajoutées à l'avenir pour ces catégories de produits.

- En ajoutant manuellement des actions

Si vous connaissez le nom de l'action, vous pouvez l'ajouter manuellement.

![Créer une politique](images/create_a_policy_03.png){.thumbnail}

Vous pouvez utiliser une *wildcard* au début ou à la fin du nom de l'action avec `*`.

Par exemple, l'ajout de `vps:apiovh:ips/*` accordera les droits suivants :

vps:apiovh:ips/edit <br>
vps:apiovh:ips/delete <br>
vps:apiovh:ips/get <br>

- En sélectionnant des actions dans la liste

Des actions peuvent être sélectionnées dans la liste.

![Créer une politique](images/create_a_policy_04.png){.thumbnail}

Les actions disponibles dépendent du type de ressource et appartiennent à l'une des cinq catégories suivantes :

- **Read** : répertorie les produits et affiche les informations les concernant (*ex : lister une IP VPS*).
- **Create** : action permettant de créer quelque chose sur un produit (*ex : créer un ticket support*).
- **Delete** : action permettant de supprimer quelque chose sur un produit (*ex : supprimer une instance Public Cloud*).
- **Edit** : action pour modifier un élément existant sur un produit (*ex : modifier la route TCP d'un Load Balancer*).
- **Operate** : appliquer des modifications sur l'infrastructure liée au produit (*ex : redémarrer un serveur dédié*).

Un champ de recherche est disponible pour vous aider à identifier une action spécifique dans la liste.

#### Modifier une politique

Pour modifier une politique existante, cliquez sur le bouton `...`{.action} à droite de la politique puis sur `Modifier la politique`{.action}.

![Modifier une politique](images/editing_a_policy.png){.thumbnail}

Vous pouvez ensuite modifier la portée de la politique.

#### Supprimer une politique

Pour supprimer une politique existante, cliquez sur le bouton `...`{.action} à droite de la politique puis sur `Supprimer la politique`{.action}.

Une fenêtre contextuelle vous demandera de confirmer la suppression.

### Associer une identité à une politique

Pour lier une identité à une politique, cliquez sur le bouton `...`{.action} à droite de la politique puis sur `Gérer les identités associées`{.action}.

![Modifier une politique](images/editing_a_policy.png){.thumbnail}

Cela vous permettra d'ajouter et de supprimer les utilisateurs ou les groupes auxquels la politique doit s'appliquer.

![Lier une identité](images/link_identity_to_policy.png){.thumbnail}

### Gestion des identités

Les identités disponibles pour les politiques sont gérées via l'onglet `Gestion des utilisateurs`{.action}, dans le menu `Mon compte`{.action}.

L'onglet `Identités`{.action} du menu IAM vous redirige vers ce menu.

Retrouvez les détails de la gestion des utilisateurs dans la [documentation dédiée](/pages/account/customer/ovhcloud-users-management).

### Gestion des groupes de ressources

Les politiques peuvent cibler des groupes de ressources (au lieu de cibler des ressources directement). Ces groupes de ressources peuvent assembler des ressources provenant de différents produits, par exemple pour configurer un environnement de test.

#### Créer un groupe de ressources

Pour créer un groupe de ressources, accédez à l’onglet dédié du menu IAM :

![Resource Group](images/resource_groups.png){.thumbnail}

Cliquez sur `Créer le groupe de ressources`{.action}.

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Nom du groupe de ressources** : il s'agit du nom qui apparaîtra dans les interfaces. Le nom doit être unique et ne doit contenir aucun espace.
- **Types de produits** : liste des types de produits concernés par ce groupe de ressources.
- **Ressources** : liste des ressources que le groupe contiendra.

#### Modifier un groupe de ressources

Pour modifier un groupe de ressources, cliquez sur son nom dans la liste.

#### Supprimer un groupe de ressources

Pour supprimer un groupe de ressources existant, cliquez sur le bouton `...`{.action} à droite du groupe puis sur `Supprimer le groupe de ressources`{.action}.

Une fenêtre contextuelle vous demandera de confirmer la suppression.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
