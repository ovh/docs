---
title: Object Storage - Gérer un bucket Object Storage avec Terraform
updated: 2025-05-05
---

## Objectif

Ce tutoriel va vous permettre d'automatiser et d'orchestrer des actions pour utiliser l'[Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) - S3* API avec Terraform. Terraform est un outil open source permettant d'orchestrer la provision et la mise à disposition des ressources.

## Prérequis

- Installation de [la CLI Terraform](https://www.terraform.io/downloads.html)
- Accès à l'[API OVHcloud](/links/api) (créez vos identifiants en consultant [ce guide](/pages/manage_and_operate/api/first-steps))
- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud.
- OVHcloud fournit un [Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest) qui est disponible dans le registre officiel de Terraform. Vous devez avoir installé une version >= 2.0. Vous pouvez suivre le guide [Comment utiliser Terraform sur le Public Cloud OVHcloud](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform).

## Obtenir des informations sur vos jetons cluster/API

Le « provider OVH » doit être configuré avec un ensemble d'informations d'identification :

- une `application_key`
- une `application_secret`
- une `consumer_key`

### Pourquoi ?

Parce que, dans les coulisses, le « OVH Terraform provider » fait des requêtes aux API d'OVHcloud.

Afin de récupérer ces informations nécessaires, veuillez suivre le tutoriel [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps).

Lorsque vous avez généré avec succès vos tokens OVHcloud, conservez-les. Vous devrez les utiliser dans les minutes à venir.

La dernière information nécessaire est le `service_name` : c'est l'ID de votre projet Public Cloud.

### Comment l'obtenir ?

Dans la section Public Cloud, vous pouvez récupérer l'ID de votre nom de service grâce au bouton `Copier dans le presse-papier`{.action}.

![Copy paste service name](images/get-service-name.png){.thumbnail}

Vous utiliserez également ces informations dans les fichiers de définition des ressources Terraform.

## En pratique

Si vous souhaitez accéder à la documentation du provider sur Object Storage, [cliquez-ici](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_storage)

### Configuration

Tout d'abord, créez un fichier `provider.tf` avec la version minimale, le point de terminaison européen (`ovh-eu`) et les clés que vous avez obtenues dans ce guide.

Terraform :

```bash
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = "2.1.0" # greater than or equal to 2.0
    }
  }
}

provider "ovh" {
  endpoint           = "ovh-eu"
  application_key    = "<your_access_key>"
  application_secret = "<your_application_secret>"
  consumer_key       = "<your_consumer_key>"
}
```

Ici, nous avons défini le point de terminaison `ovh-eu` parce que nous voulons appeler l'API OVHcloud Europe, mais d'autres points de terminaison existent, en fonction de vos besoins :

- `ovh-eu` pour OVHcloud Europe API
- `ovh-us` pour OVHcloud US API
- `ovh-ca` pour OVHcloud North-America API

### Créer un bucket

Vous pouvez créer un fichier nommé 'object_storage_simple.tf' et écrire ce qui suit :

```python
# Créer un bucket Object Storage
resource "ovh_cloud_project_storage" "my-bucket" {
  service_name = "my_service_name" # Remplacer par votre OVHcloud project ID
  region_name = "GRA" # Remplacer par la région voulue en majuscule.
  name = "object-storage-simple"
  versioning = {
    status = "enabled"
  }
  encryption = {
    sse_algorithm = "AES256"
  }
}
```

Vous pouvez créer votre ressource en entrant la commande suivante :

```bash
terraform apply
```

### Supprimer un bucket

Vous pouvez supprimer votre bucket ainsi que tout les objets qu'il contient en entrant la commande suivante :

```bash
terraform destroy
```

> [!primary]
>
> Ce processus peut échouer si le bucket contient des objets verrouillés. Dans ce cas, vous devrez supprimer ces objets manuellement avant de pouvoir relancer la commande.
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

**\*** : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
