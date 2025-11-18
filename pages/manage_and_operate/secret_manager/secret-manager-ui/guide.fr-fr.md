---
title: "Utiliser le Secret Manager dans l'espace client OVHcloud"
excerpt: "Découvrez comment utiliser le Secret Manager avec l'interface graphique"
updated: 2025-10-15
---

> [!primary]
> Le Secret Manager est actuellement en phase bêta. Ce guide est susceptible d’être mis à jour ultérieurement avec les avancées de nos équipes en charge de ce produit.
>

## Objectif

L'objectif de ce guide est de présenter l'utilisation du Secret Manager à travers l'espace client OVHcloud.

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## En pratique

### Description

Le Secret Manager est un produit vous permettant de stocker de manière sécurisée les credentials, clés d'API, clés SSH ou tout autre type de secret nécessaire au fonctionnement de vos applications.

Un secret est une collection d'une ou plusieurs clés/valeurs regroupées au sein d'une version.
Chaque modification d'un secret amène la création d'une nouvelle version de ce secret, permettant de remonter dans l'historique des modifications du secret.

### Création d'un secret

Le Secret Manager est accessible depuis le menu `Identité, Sécurité & Opérations`{.action} dans la section `Sécurité`{.action}.

![Secret Manager](images/Secret-onboarding.png){.thumbnail}

Pour créer un secret, cliquez directement sur le bouton `Créer un secret`{.action}.

Sélectionnez ensuite la région sur laquelle créer le secret.

> [!primary]
>
> Lors de la création d'un secret pour la première fois dans une nouvelle région, une étape d'activation préalable est nécessaire en cliquant sur le bouton `Activer`{.action} pour créer un domaine OKMS dans la région sélectionnée.
> Cette activation peut prendre quelques minutes pour être effective.

Indiquez ensuite le `Path` du secret, par exemple **prod/database/MySQL**. Ce Path servira à hiérarchiser les secrets entre eux.

Puis indiquez le contenu du secret. Le secret doit contenir une liste de clés/valeurs renseignées sous la forme d'un JSON :

```json
{
    "login": "admin",
    "password": "my_secret_password"
}
```

![Secret Manager](images/Secret-creation.png){.thumbnail}

> [!primary]
>
> Il n'y a pas de limite dans le nombre de clés/valeurs d'un secret, cependant la taille totale des données ne doit pas dépasser 64 ko.

Une fois le secret créé, celui-ci apparaît dans la liste des secrets du Secret Manager.

### Gestion des secrets

Une fois un secret créé, la liste des secrets s'affiche dans l'espace client.
Un sélecteur est présent pour naviguer entre les différentes régions où un secret est présent.

Il est possible d'accéder à la configuration du secret en cliquant dessus dans la liste des secrets pour en afficher le contenu, créer une nouvelle version ou le supprimer.

Le tableau de bord du secret affiche plusieurs informations comme les informations générales ainsi que les paramètres s'appliquant au secret :

- Nombre maximum de versions : Au-delà de la valeur indiquée, la plus ancienne version est supprimée.
- Durée d'expiration d'une version : Au-delà de la durée indiquée, la version est désactivée.
- CAS : Si activé, il est nécessaire de systématiquement préciser le numéro de version actuelle lors des modifications.

![Secret Manager](images/Secret-dashboard.png){.thumbnail}

#### Accéder au contenu d'un secret

Un utilisateur avec les droits IAM nécessaires peut accéder au contenu d'un secret.

> [!primary]
>
> Les droits pour lister une version (**okms:apiovh:secret/get**) sont différents du droit pour récupérer le contenu de cette version (**okms:apiovh:secret/version/getData**)

Pour cela, cliquez sur `Afficher la valeur`{.action} dans le tableau de bord d'un secret.

Un panneau latéral s'ouvre avec le contenu de la version la plus récente du secret.

![Secret Manager](images/Secret-content.png){.thumbnail}

Un sélecteur permet de naviguer entre les différentes versions du secret ainsi que de consulter le statut de la version sélectionnée.
Si la version est désactivée ou supprimée, aucune valeur n'est affichée.

#### Gestion des versions

Pour accéder aux versions d'un secret, un onglet `Versions` contient un tableau listant l'ensemble des versions d'un secret.
Chaque modification d'un secret amène la création d'une nouvelle version.

![Secret Manager](images/Secret-versions.png){.thumbnail}

Une version peut être soit :

- Active : La valeur de cette version est accessible.
- Désactivée : La valeur de cette version est encore présente dans le système mais n'est plus accessible tant que la version n'est pas réactivée.
- Supprimée : La valeur de cette version n'est plus présente dans le système et ne peut plus être restaurée.

Les boutons d'action de chaque version permettent d'afficher la valeur, désactiver ou réactiver la version, ou de supprimer celle-ci.

Une version supprimée par le paramètre **Nombre maximum de versions** n'apparaît plus dans la liste des versions.

### Gestion du domaine OKMS

Le domaine OKMS du Secret Manager est commun avec le domaine OKMS du Key Management Service.
La création ou la suppression d'un domaine OKMS a donc des conséquences sur les deux produits.

Dans le cadre de la version bêta du Secret Manager, il n'est pas encore possible de modifier la configuration du domaine OKMS via l'interface graphique.

#### Cas du multi-domaine OKMS

Dans le cas où au moins deux domaines OKMS sont déjà présents dans une région, une étape de sélection supplémentaire apparaît à la création du secret.

![Secret Manager](images/Secret-multi-domaine.png){.thumbnail}

De plus, dans la liste des secrets, si une région contient plusieurs domaines OKMS, un tableau intermédiaire est présent pour sélectionner le domaine OKMS ciblé.

![Secret Manager](images/Secret-multi-domaine-2.png){.thumbnail}

Dans le cadre de la bêta du Secret Manager, il n'est pas encore possible d'ajouter un domaine OKMS dans une région via l'interface graphique.

### Utilisation du Secret Manager par API

Le Secret Manager est accessible par deux jeu d'API différents :

- Une [API REST](/pages/manage_and_operate/secret_manager/secret_manager-rest-api) similaire aux standards d'API d'OVHcloud.
- Une [API compatible Hashicorp Vault KV2](/pages/manage_and_operate/secret_manager/secret_manager-kv2-api) apportant une compatibilité avec les applications déjà compatibles avec Hashicorp Vault KV2.

Les deux API manipulent les mêmes objets. Un secret créé par une méthode est accessible par l'autre méthode.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).