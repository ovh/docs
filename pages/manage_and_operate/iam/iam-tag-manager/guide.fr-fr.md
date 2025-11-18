---
title: "Comment utiliser les tags sur vos ressources"
excerpt: "Découvrez comment gérer et utiliser les tags sur vos ressources OVHcloud"
updated: 2025-09-15
---

## Objectif

Dans ce guide, vous apprendrez à affecter et gérer des tags sur vos produits OVHcloud et comment les utiliser dans les politiques IAM.

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## En pratique

### Gérer les tags via l'espace client

Il est possible de gérer les tags de vos produits OVHcloud soit a travers l'interface générale de gestion des tag, soit à travers les interfaces dédiées dans les produits.

Les tags sont des métadonnées sous forme de clé/valeur ajoutées aux ressources OVHcloud, qui peuvent être utilisées dans les politiques IAM ou la catégorisation des ressources.

#### Tag Manager

**Tag Manager** est l'interface qui vous permet de gérer vos tags sur l'ensemble de vos produits OVHcloud.

Pour y accéder, rendez-vous dans le menu `Identité, Sécurité & Opérations`{.action} puis cliquez sur `Tag Management`{.action} sous la section `Gestion des identités et des accès`.

Vous retrouverez sur cette page l'ensemble des tags actuellement placés sur vos ressources.

![Tag Manager](images/tag-manager-01.png){.thumbnail}

Pour chaque tag, le tableau de bord indique le nombre de ressources associées ainsi que le type de tag.

Il existe 3 types de tags :

- Custom : Créé et géré par vos soins.
- Prédéfini : Créé par OVHcloud, il vous appartient d'assigner ce type de tag à vos ressources.
- Système : Créé et assigné automatiquement par OVHcloud à vos ressources (les tags de ce type ne peuvent pas être supprimés).

Les tags prédéfinis non assignés et les tags système ne n'apparaissent pas par défaut et doivent être affichés via le bouton `Filtres rapides`{.action}.

En cliquant sur un tag, on accède aux détails du tag avec la liste des ressources concernées.

![Tag Manager](images/tag-manager-02.png){.thumbnail}

Il est ensuite possible d'assigner ce tag à d'autres ressources via le bouton `Assigner le tags`{.action}. La liste de l'ensemble des ressources du compte s'affiche alors, permettant plusieurs sélections.

Un champ de filtre est présent à droite pour faciliter la recherche dans les ressources.

A l'inverse, en sélectionnant les ressources dans les détails du tag, il est possible de supprimer le tag de celles-ci via le bouton `Désassigner le tag`{.action}.

#### Tableau de bord du produit

Pour certains produits OVHcloud, une interface a été ajoutée pour gérer les tags directement depuis le tableau de bord de gestion des ressources.

![Tag Manager](images/baremetal-tag-01.png){.thumbnail}

L'interface de gestion de tags permet d'ajouter ou retirer des tags sur la ressource.

![Tag Manager](images/baremetal-tag-02.png){.thumbnail}

Il est possible de sélectionner un ou plusieurs tags dans la liste des tags prédéfinis ou d'entrer vos propres tags en saisissant directement les clés et les valeurs dans les champs.

### Gestion des tags via l'API

La gestion des tags est centralisée dans une API unique pour tous les produits OVHcloud :

| **Méthode** |              **Chemin**               |            **Description**             |
| :---------: | :-----------------------------------: | :------------------------------------: |
|    POST     |    /iam/resource/{resourceURN}/tag    |    Ajout d'un tag sur une ressource    |
|     DEL     | /iam/resource/{resourceURN}/tag/{key} | Suppression d'un tag sur une ressource |

Le tag doit être indiqué sous cette forme :

```json
{
  "key": "environment",
  "value": "production"
}
```

### Utilisation dans les politiques IAM

Les tags peuvent être utilisés comme conditions dans les politiques IAM grâce à la condition `resource.Tag(tag_key)`.

Par exemple, la politique suivante accorde des droits à tous les VPS portant le tag `Environment:Production` :

```json
{
  "conditions": {
    "conditions": [
      {
        "operator": "MATCH",
        "values": {
          "resource.Tag(Environment)": "Production"
        }
      }
    ],
    "operator": "AND"
  },
  "description": "Give access to VPS with tag Environment:Production",
  "identities": [
    "urn:v1:eu:identity:group:aa1-ovh/devs"
  ],
  "name": "vps-production",
  "permissions": {
    "allow": [
      {
        "action": "vps:apiovh:*"
      }
    ]
  },
  "resources": [
    {
      "urn": "urn:v1:eu:resource:vps:*"
    }
  ]
}
```

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).