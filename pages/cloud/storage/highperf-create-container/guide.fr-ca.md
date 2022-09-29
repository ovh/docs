---
title: Création d'un bucket
slug: s3/create-container
section: Object Storage S3 High Performance
order: 040
---

**Dernière mise à jour le 27/09/2022**

## Objectif

**Ce guide à pour objectif de vous familiariser avec la création d'un bucket**

> [!primary]
>
> - Si vous êtes intéressé par la classe de stockage: ***Standard object storage - SWIFT API***, veuillez suivre ce [guide](https://docs.ovh.com/ca/fr/storage/pcs/creation-de-conteneur/)
> - Si vous êtes intéressé par la classe de stockage: ***Cloud Archive - SWIFT API***, veuillez suivre ce [guide](https://docs.ovh.com/ca/fr/storage/pca/creation-de-conteneur/).
>

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Un accès à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/ca/fr/\&ovhSubsidiary=qc)

## En pratique

### Utilisation de l'espace client

Pour créer un bucket Object Storage, vous devez d'abord vous connecter à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/ca/fr/\&ovhSubsidiary=qc) et ouvrir votre projet "Public Cloud"{.action}. Cliquez sur `Object Storage`{.action} dans la barre de navigation à gauche puis sur l'onglet `Mes conteneurs`{.action}.

![My containers Dashboard](images/highperf-create-container-2022092808185322.png)

Cliquez sur `Créer un conteneur d'objet`{.action} et sélectionnez votre classe de stockage:

![Select your solution](images/highperf-create-container-20220928081750384.png)

Sélectionnez une région:

> [!primary]
>
> Les régions peuvent variées suivant la classe de stockage sélectionnée.
>

![Select a region](images/highperf-create-container-20220928082104424.png)

Vous devez lier un utilisateur au bucket:

![Link a user](images/highperf-create-container-20220928082210758.png)

Pour cela, vous pouvez soit lier un utilisateur S3 existant:

![Link a user](images/highperf-create-container-20220928082306958.png)

Vous pouvez voir les informations d'identification de l'utilisateur, en cliquant sur `View credentials`{.action}:

![view credentials](images/highperf-create-container-20220928082435427.png)

Ou vous pouvez créer un nouvel utilisateur S3:

![Create S3 user](images/highperf-create-container-20220928082604314.png)

Les informations d'identification de l'utilisateur sont alors affichées:

![User created credentials](images/highperf-create-container-20220928082836834.png)

Pour finir, nommer votre bucket:

![Container name](images/highperf-create-container-20220928082938155.png)

Félicitation, votre bucket est créé:

![Result](images/highperf-create-container-20220928083209650.png)

### Où trouver l'URL Endpoint d'un bucket

Cliquer sur le nom de votre bucket pour en afficher les détails et contenu:

![Bucket details](images/highperf-create-container-20220928091433895.png)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
