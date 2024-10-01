---
title: 'Créer et gérer des utilisateurs locaux sur un compte OVHcloud'
excerpt: 'Découvrez comment ajouter des utilisateurs locaux depuis votre compte OVHcloud'
updated: 2024-06-25
---

## Objectif

OVHcloud vous donne la possibilité de créer des utilisateurs locaux, qui peuvent agir en lecture ou en écriture sur votre espace client. Cela vous permet de donner aux membres de votre entreprise un accès à vos services OVHcloud. Et ce, sans avoir à recourir à des pratiques hasardeuses de partage de mot de passe ou de code de double authentification.

> [!primary]
>
> La gestion des utilisateurs est différente de la gestion des contacts. Un utilisateur aura accès à toutes les sections de l'espace client en fonction du niveau de droits qui lui est accordé.
>
> La gestion de contacts vise quant à elle à déléguer l'administration complète des aspects administratifs, techniques ou de facturation d'un ou plusieurs services sur votre compte OVHcloud. Pour plus de détails sur la gestion des contacts, consultez [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
>

**Ce guide détaille les différents privilèges qu'un utilisateur local peut détenir ainsi que la méthode pour ajouter et gérer vos utilisateurs.**

## Prérequis

- Disposer d'un compte OVHcloud actif.
- Être connecté à votre espace client.

## En pratique

### Présentation des identités

Les utilisateurs locaux sont un des types d'identités pouvant être mis en place sur votre compte OVHcloud. Les autres types de comptes sont décrits dans la [documentation associée](/pages/manage_and_operate/iam/identities-management).

### Gestion des utilisateurs locaux

#### Ajouter un utilisateur

Cliquez sur le nom de votre compte en haut à droite, puis de nouveau sur votre nom dans la barre latérale.

![Accès au menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Vous pouvez accéder au menu IAM via l’entrée dédiée dans votre espace client.

![Accès au menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Cliquez ensuite sur l'onglet `Identités`{.action} pour accéder à la gestion des utilisateurs locaux.

![Accès au menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Vous pouvez ensuite cliquer sur `Ajouter un utilisateur`{.action}.

Une fenêtre apparaît et vous devez y compléter les champs requis. Cliquez sur `Valider`{.action} pour créer l'utilisateur.

![users-management](images/usersmanagement2.png){.thumbnail}

| Champ | Détails |
|--|--|
| Identifiant | Renseignez, par exemple, le nom de l'utilisateur ou sa fonction. |
| E-mail | Renseignez l'adresse e-mail de l'utilisateur. |
| Mot de passe | Définissez le mot de passe de l'utilisateur. Il pourra modifier ce mot de passe lorsque son accès aura été créé. <br>Nous vous conseillons également de consulter [le guide sur la gestion du mot de passe](/pages/account_and_service_management/account_information/manage-ovh-password){.external} pour définir ce mot de passe. |
| Groupe | Choisissez un groupe parmi ceux disponibles (voir le tableau ci-dessous). |
| Description | Vous pouvez ajouter une description de l'utilisateur. Exemple : son rôle dans votre entreprise. |

**Détails des groupes par défaut :**

| Rôle | Détails |
|--|--|
| UNPRIVILEGED (lecture seule) | Donne un accès en lecture à l'espace client OVHcloud et à toutes ses sections. |
| DEFAULT (administrateur restreint) | Donne un accès en écriture à l'espace client OVHcloud et à toutes ses sections, à l'**exception de la gestion des** utilisateurs. |
| ADMIN (administrateur) | Donne un accès en écriture à l'espace client OVHcloud et à toutes ses sections, **y compris** la gestion des utilisateurs. |

L'utilisateur obtiendra alors son propre identifiant composé de l'identifiant numérique de votre compte (qui vous est rappelé dans le menu « Gestion des utilisateurs ») et de son nom d'utilisateur, les deux valeurs étant séparées par un « / ».

Exemple : **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

L'utilisateur créé pourra dès lors se connecter à [l'espace client OVHcloud](/links/manager){.external} en utilisant cet identifiant.

Il pourra également modifier son mot de passe et sécuriser son propre accès à votre compte en activant une mesure de double authentification (celle-ci concernera uniquement son accès en tant qu'utilisateur). Vous pouvez consulter à cet effet [le guide sur la mise en place de la double authentification](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa){.external}.

#### Gérer les utilisateurs

Vous pouvez modifier, désactiver/activer ou supprimer un utilisateur en cliquant sur les `…`{.action} à droite de celui-ci.

![users-management](images/usersmanagement4.png){.thumbnail}

La modification de l'utilisateur vous permettra de mettre à jour son adresse e-mail, ses privilèges ainsi que sa description.

![users-management](images/usersmanagement6.png){.thumbnail}

### Gestion des groupes

#### Ajouter un groupe

Dans l'onglet `Identités`{.action}, cliquez sur `Déclarer un groupe`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

Une fenêtre s'affiche et vous devez compléter les champs requis. Cliquez sur `Valider`{.action} pour créer le groupe.

![users-management](images/usersmanagement8.png){.thumbnail}

Les groupes attribuent un niveau de privilège par défaut aux utilisateurs qu'ils contiennent, en fonction du rôle que vous choisissez :

| Rôle | Détails |
|--|--|
| Aucun | Ne donne aucun accès à l'espace client OVHcloud si aucune politique IAM n'est mise en place. |
| Lecture Seule | Donne un accès en lecture à l'espace client OVHcloud et à toutes ses sections. |
| Administrateur restreint | Donne un accès en écriture à l'espace client OVHcloud et à toutes ses sections, à l'**exception de la gestion des** utilisateurs. |
| Administrateur | Donne un accès en écriture à l'espace client OVHcloud et à toutes ses sections, **y compris** la gestion des utilisateurs. |

#### Gérer les groupes

Vous pouvez mettre à jour ou supprimer un groupe en cliquant sur le bouton `...`{.action} à droite du nom de groupe.

![users-management](images/usersmanagement9.png){.thumbnail}

Lorsque vous modifiez un groupe, vous pouvez modifier sa description et son rôle.

![users-management](images/usersmanagement10.png){.thumbnail}

### Gestion des droits

En plus du rôle associé aux groupes d'utilisateurs, vous pouvez affiner les privilèges d'accès à l'aide de l'IAM OVHcloud.

Consultez notre guide sur [la gestion des politiques IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
