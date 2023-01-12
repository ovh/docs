---
title: "Paramètres d'accès et de sécurité dans Horizon"
excerpt : "Découvrez comment gérer et sécuriser l'accès à vos instances"
slug: access_and_security_in_horizon
legacy_guide_number: 1774
section: Gestion depuis Horizon
order: 07
---

**Dernière mise à jour le 26 mai 2021**

## Objectif

L'interface OpenStack Horizon fournit des options pour configurer l'accès à vos instances et à d'autres services.<br>
Vous pouvez par exemple configurer des groupes de sécurité pour filtrer les connexions entrantes et sortantes, ou bien encore télécharger le fichier OpenRC contenantvos identifiants afin d'utiliser les API OpenStack.

**Découvrez comment gérer et sécuriser l'accès à vos instances**

## Prérequis

- [Accéder à l'interface Horizon](../horizon/)

## En pratique

Connectez-vous à [l'interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

Les paramètres d'accès et de sécurité se composent des sections suivantes, accessibles via le menu de gauche :

- **API Access** (sous `Project`{.action})

Le tableau d'accès à l'API répertorie les endpoints des API OpenStack.

![horizon - accès API](images/api_access.png){.thumbnail}

Pour vérifier les valeurs d'accès à utiliser avec les API, cliquez sur `View Credentials`{.action}.

Cliquez sur le bouton `Download OpenStack RC File`{.action} pour ouvrir un menu déroulant dans lequel vous pouvez choisir le fichier RC approprié à télécharger.

- **Key Pairs** (sous `Project`{.action} puis `Compute`{.action})

Cette section vous permet de stocker et de gérer les paires de clés SSH. Vous pouvez simplement créer et ajouter une clé publique et une clé privée en cliquant sur le bouton `Create Key Pair`{.action}.

![horizon - clés SSH](images/key_pairs.png){.thumbnail}

Si vous souhaitez ajouter une clé pré-existante, cliquez sur `Import Public Key`{.action}. Dans la fenêtre qui s'affiche, vous pouvez entrer une clé ou sélectionner un fichier de clé.

Cette section d'interface contient des instructions de base. Pour plus d'informations sur les clés SSH, consultez [ce guide](../creation-des-cles-ssh/).

- **Security Groups** (sous `Project`{.action} puis `Network`{.action})

Les groupes de sécurité sont des ensembles de règles de filtrage qui sont appliquées aux interfaces réseau. Vous pouvez les utiliser pour restreindre l'accès aux instances à des adresses IP et des ports.

![horizon - groupes de sécurité](images/security_groups.png){.thumbnail}

Ajoutez un groupe de sécurité en cliquant sur `Create Security Group`{.action}, puis appliquez-lui des règles personnalisées ou prédéfinies via le bouton `Manage Rules`{.action} dans le tableau.

## Aller plus loin

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
