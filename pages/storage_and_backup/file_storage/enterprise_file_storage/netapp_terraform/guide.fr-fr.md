---
title: Enterprise File Storage - Gestion avec Terraform
excerpt: Découvrez comment gérer votre service Enterprise File Storage avec Terraform
updated: 2025-07-11
---

## Objectif

Enterprise File Storage est une solution de stockage qui vous permet de provisionner des volumes NFS entièrement gérés par OVHcloud. Terraform est un outil d'*infrastructure-as-code* qui automatise la provision de ressources.

Dans ce guide, vous apprendrez à utiliser le provider Terraform d'OVHcloud pour gérer les volumes de votre solution Enterprise File Storage (EFS), les snapshots et plus encore.

> [!primary]
> Dans ce guide, les termes suivants sont utilisés de manière interchangeable :
> 
> - Un volume est également appelé *share*
> - Un instantané est également appelé *snapshot*
> - Une liste de contrôle d'accès est également appelée *ACL*
>
	
## Prérequis

- [Terraform >= 0.17.1](https://www.terraform.io/)
- [Provider Terraform OVHcloud >= v2.5.0](https://github.com/ovh/terraform-provider-ovh/releases/)
- Avoir accèss aux [API OVHcloud](/links/api)
- Avoir un service Enterprise File Storage dans votre compte OVHcloud. Le service peut être commandé depuis la [page produit](/links/storage/enterprise-file-storage) ou depuis l'[espace client OVHcloud](/links/manager).

## En pratique 

### Configurer le provider Terraform d'OVHcloud

#### Générer un token d'accès API

Le provider Terraform d'OVHcloud doit être configuré avec un token d'API afin de pouvoir faire des appels à aux API OVHclod.

Le token API doit avoir les permissions suivantes :

- GET `/storage/netapp/*`
- POST `/storage/netapp/*`
- PUT `/storage/netapp/*`
- DELETE `/storage/netapp/*`

Vous pouvez suivre le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour générer votre token d'API.

**Une fois le token généré, sauvegardez les informations du token pour pouvoir l'utiliser avec le provider Terraform d'OVHcloud**.

#### Récupérer l'ID d'un service

L'ID d'un service peut être obtenu depuis les API OVHcloud ou via l'espace client OVHcloud.

> [!success]
> Si vous n'êtes pas familiarisé avec l'utilisation des API OVHcloud, veuillez consulter notre guide sur les [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps).

- **Méthode API** : Appelez `GET /storage/netapp`

> [!api]
> 
> @api {v1} /storage GET /storage/netapp
>

- **Méthode via l'espace client OVHcloud** : Accédez à la section [Enteprise File Storage](/links/manager)

#### Configurer le provider Terraform OVHcloud

Créez un fichier `provider .tf` définissant la configuration du provider OVHcloud :

```bash
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = "2.5.0"
    }
  }

  required_version = ">= 0.17.1"
}

provider "ovh" {
  endpoint           = var.ovh.endpoint
  application_key    = var.ovh.application_key
  application_secret = var.ovh.application_secret
  consumer_key       = var.ovh.consumer_key
}
```

Créez ensuite un fichier `variables.tf` définissant les variables qui seront utilisées dans vos fichiers `.tf` :

```bash
variable "ovh" {
  type = map(string)
  default = {
    endpoint           = "ovh-eu"
    application_key    = ""
    application_secret = ""
    consumer_key       = ""
  }
}
```

> [!primary]
> À propos de la variable ovh.endpoint : par défaut, `ovh-eu` est défini car nous effectuons des appels aux API OVHcloud Europe.
>
> D'autres valeurs existent pour cette variable, en fonction de vos besoins :
>
> - `ovh-eu` pour les API OVHcloud Europe
> - `ovh-ca` pour les API OVHcloud Amérique / Asie
>

Finalement, créez un fichier `secrets.tfvars` contenant les valeurs de variables requises :

> [!warning]
> N'oubliez pas de remplacer `<application_key>`, `<application_secret>` et `<consumer_key>` avec les informations de votre token API obtenu précédemment.
>

```bash
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}
```

Maintenant, vous pouvez initaliser Terraform :

```bash
terraform init
```

La commande `init` initialisera votre répertoire de travail qui contient les fichiers de configuration `.tf`.

C'est la première commande à exécuter pour une nouvelle configuration, ou après avoir récupéré une configuration existante depuis un dépôt Git, par exemple.

La commande `init` téléchargera les providers Terraform nécessaires et configurera l'environnement de travail.

> [!success]
> 
> Une fois l'initialisation réussie, vous êtes maintenant en mesure de gérer les ressources et les sources de données d'une offre Enterprise File Storage qui sont disponibles à l'intérieur du [provider Terraform OVHcloud](https://registry.terraform.io/providers/ovh/ovh/latest/docs).
>

### Gestion des services

#### Récupérer les informations d'un service

La source de données [ovh_storage_efs](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs) permet de récupérer les détails d'un service.

Créez un fichier `main.tf` :

```bash
data "ovh_storage_efs" "efs" {
  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
}
```

Définissez les [outputs](https://developer.hashicorp.com/terraform/language/values/outputs) dans un fichier `output.tf` :

```bash
output "service_id" {
  value = data.ovh_storage_efs.efs.id
}

output "service_product" {
 value = data.ovh_storage_efs.efs.product
}

output "service_quota" {
 value = data.ovh_storage_efs.efs.quota
}
```

Exécutez la commande [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) pour voir le résultat :

```bash
terraform apply -var-file=secrets.tfvars

data.ovh_storage_efs.efs: Reading...
data.ovh_storage_efs.efs: Read complete after 0s [id=xxx-xxx-xxx-xxx-xxx]

Changes to Outputs:
  + service_id      = "xxx-xxx-xxx-xxx-xxx"
  + service_product = "enterprise-file-storage-premium-1tb"
  + service_quota   = 1000

You can apply this plan to save these new output values to the Terraform state, without changing any real infrastructure.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

Apply complete! Resources: 0 added, 0 changed, 0 destroyed.

Outputs:

service_id = "xxx-xxx-xxx-xxx-xxx"
service_product = "enterprise-file-storage-premium-1tb"
service_quota = 1000
```

### Gestion des volumes

Le provider Terraform OVHcloud permet les opérations de gestion de volume suivantes : création, modification et suppression.

La ressource [ovh_storage_efs_share](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share) représente un volume.

#### Créer un volume

Définissez un volume à l’intérieur de votre fichier `main.tf` :

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
  # mount_path = <mount_path_value>
  # snapshot_id = <snapshot_id_to_use>
}
```

Propriétés supplémentaires :

- Un chemin de montage personnalisé peut être spécifié en utilisant la propriété `mount_path`
- Le volume peut être créé à partir d'un snapshot existant en utilisant la propriété `snapshot_id`

Exécutez la commande [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) afin de créer un plan d'exécution :

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```
	
Points clés :

- La commande `terraform plan` va créer un plan d'exécution mais ne l'exécutera pas. Au lieu de cela, elle déterminera les actions nécessaires pour créer la configuration spécifiée à l'intérieur de vos fichiers de configuration. Cela vous permettra de vérifier si votre plan d'exécution correspond à vos attentes avant d'apporter des modifications aux ressources réelles.
- Le paramètre facultatif `-out` vous permet de spécifier un fichier de sortie pour le plan. Il garantit que le plan que vous avez examiné sera le même que celui qui est appliqué.

Une fois que vous avez examiné le plan d'exécution, exécutez `terraform apply` pour apporter des modifications :

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 11s [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

Votre volume est désormais créé.

#### Modifier un volume

Le nom (`name`), la description (`description`) et la taille (`size`) d'un volume peuvent être mis à jour.

Une fois que la (ou les) valeur(s) est (sont) mise(s) à jour dans votre fichier `main.tf`, appliquez les modifications en utilisant [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply).

#### Supprimer un volume

Pour supprimer votre volume, utilisez la commande [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy).

> [!warning]
>
> Si votre volume a des snapshots de type `manual` qui ne sont pas référencés par Terraform, ils doivent être supprimés avant que le volume ne soit supprimé.
>

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T09:53:17Z" -> null
      - description  = "My share" -> null
      - id           = "29d1facf-db03-4951-a4e4-c6c8ac7b1104" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share.volume: Destroying... [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]
ovh_storage_efs_share.volume: Destruction complete after 1s

Destroy complete! Resources: 1 destroyed.
```

#### Obtenir des informations sur les chemins d'access d'un volume

Pour récupérer des informations sur un ou tous les chemins d'accès d'un volume, utilisez respectivement les sources de données [ovh_storage_efs_share_access_paths](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs_share_access_paths) et [ovh_storage_efs_share_access_path](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs_share_access_path).

Créez ou ajoutez au fichier `main.tf` existant le contenu suivant :

> [!primary]
>
> Vous pouvez (ré)utiliser un volume qui existe déjà (dans votre configuration Terraform ou non).
> 

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
}

data "ovh_storage_efs_share_access_paths" "access_paths" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  share_id = ovh_storage_efs_share.volume.id
}

data "ovh_storage_efs_share_access_path" "access_path" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  share_id = ovh_storage_efs_share.volume.id
  id = tolist(data.ovh_storage_efs_share_access_paths.access_paths.access_paths).0.id
}
```

Définissez les [outputs](https://developer.hashicorp.com/terraform/language/values/outputs) dans un fichier `output.tf` :

```bash
output "share_acccess_path" {
  value = data.ovh_storage_efs_share_access_path.access_path
}

output "share_access_paths" {
  value = data.ovh_storage_efs_share_access_paths.access_paths
}
```

Exécutez la commande [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) pour ajouter les sources de données et afficher les *outputs* :

```bash
terraform apply data_source.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
 <= read (data resources)

Terraform will perform the following actions:

  # data.ovh_storage_efs_share_access_path.access_path will be read during apply
  # (config refers to values not yet known)
 <= data "ovh_storage_efs_share_access_path" "access_path" {
      + id           = (known after apply)
      + path         = (known after apply)
      + preferred    = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }

  # data.ovh_storage_efs_share_access_paths.access_paths will be read during apply
  # (config refers to values not yet known)
 <= data "ovh_storage_efs_share_access_paths" "access_paths" {
      + access_paths = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }
 
  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + share_acccess_path = {
      + id           = (known after apply)
      + path         = (known after apply)
      + preferred    = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }
  + share_access_paths = {
      + access_paths = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 10s [id=1d6669a7-8b86-472a-bb04-cf8be7b9af16]
data.ovh_storage_efs_share_access_paths.access_paths: Reading...
data.ovh_storage_efs_share_access_paths.access_paths: Read complete after 1s
data.ovh_storage_efs_share_access_path.access_path: Reading...
data.ovh_storage_efs_share_access_path.access_path: Read complete after 0s [id=7cbcf0ca-50f4-4e3c-9222-406e71a10649]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

share_acccess_path = {
  "id" = "7cbcf0ca-50f4-4e3c-9222-406e71a10649"
  "path" = "10.6.0.1:/share_b038413e_c446_4788_871f_a762fb1b7697"
  "preferred" = true
  "service_name" = "xxx-xxx-xxx-xxx-xxx"
  "share_id" = "1d6669a7-8b86-472a-bb04-cf8be7b9af16"
}
share_access_paths = {
  "access_paths" = toset([
    {
      "id" = "7cbcf0ca-50f4-4e3c-9222-406e71a10649"
      "path" = "10.6.0.1:/share_b038413e_c446_4788_871f_a762fb1b7697"
      "preferred" = true
    },
  ])
  "service_name" = "xxx-xxx-xxx-xxx-xxx"
  "share_id" = "1d6669a7-8b86-472a-bb04-cf8be7b9af16"
}
```

### Gestion des snapshots

Le provider Terraform OVHcloud permet les opérations de gestion de snapshots suivantes : création, modification et suppression.

[ovh_storage_efs_share_snapshot](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share_snapshot) représente un snapshot.

#### Créer un snapshot

Définissez un snapshot à l'intérieur de votre fichier `main.tf` :

> [!primary]
>
> Vous pouvez (ré)utiliser un volume qui existe déjà (dans votre configuration Terraform ou non) pour créer votre snapshot.
>

> [!primary]
>
> La ressource `time_sleep` gère le délai entre la suppression du snapshot et la suppression du volume. Le snapshot doit être supprimé avant que le volume puisse être supprimé.
>
> Si n'avez pas déjà installé le provider Terraform `hashicorp/time`, vous devrez exécuter `terraform init -upgrade` pour le télécharger avant de lancer la commande `terraform plan`.
>

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
}

resource "ovh_storage_efs_share_snapshot" "snapshot" {
  depends_on = [time_sleep.wait_10_seconds]

  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
  share_id = ovh_storage_efs_share.share.id
  name = "snapshot"
  description = "My snapshot"
}

resource "time_sleep" "wait_10_seconds" {
  depends_on = [ovh_storage_efs_share.share]

  destroy_duration = "10s"
}
```

Exécutez la commande [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) afin de créer un plan d'exécution :

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

  # ovh_storage_efs_share_snapshot.snapshot will be created
  + resource "ovh_storage_efs_share_snapshot" "snapshot" {
      + created_at   = (known after apply)
      + description  = "My snapshot"
      + id           = (known after apply)
      + name         = "snapshot"
      + path         = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
      + status       = (known after apply)
      + type         = (known after apply)
    }

  # time_sleep.wait_10_seconds will be created
  + resource "time_sleep" "wait_10_seconds" {
      + destroy_duration = "10s"
      + id               = (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```

Points clés :

- La commande `terraform plan` va créer un plan d'exécution mais ne l’exécutera pas. Au lieu de cela, elle déterminera les actions nécessaires pour créer la configuration spécifiée à l'intérieur de vos fichiers de configuration. Cela vous permettra de vérifier si votre plan d'exécution correspond à vos attentes avant d'apporter des modifications aux ressources réelles.
- Le paramètre facultatif `-out` vous permet de spécifier un fichier de sortie pour le plan. Il garantit que le plan que vous avez examiné sera le même que celui qui est appliqué.

Une fois que vous avez examiné le plan d'exécution, exécutez `terraform apply` pour apporter des modifications :

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Still creating... [20s elapsed]
ovh_storage_efs_share.volume: Still creating... [30s elapsed]
ovh_storage_efs_share.volume: Still creating... [40s elapsed]
ovh_storage_efs_share.volume: Creation complete after 41s [id=1f551984-6529-48f8-830d-f6a70d062174]
time_sleep.wait_10_seconds: Creating...
time_sleep.wait_10_seconds: Creation complete after 0s [id=2025-07-01T13:39:01Z]
ovh_storage_efs_share_snapshot.snapshot: Creating...
ovh_storage_efs_share_snapshot.snapshot: Still creating... [10s elapsed]
ovh_storage_efs_share_snapshot.snapshot: Creation complete after 10s [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
```

Votre snapshot est désormais créé.

#### Modifier un snapshot

Le nom (`name`) et la description (`description`) d'un snapshot peuvent être mis à jour.

Une fois que la (ou les) valeur(s) est (sont) mise(s) à jour dans votre fichier `main.tf`, appliquez les modifications en utilisant [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply).

#### Supprimer un snapshot

Pour supprimer votre snapshot, utilisez la commande [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy).

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=1f551984-6529-48f8-830d-f6a70d062174]
time_sleep.wait_10_seconds: Refreshing state... [id=2025-07-01T13:39:01Z]
ovh_storage_efs_share_snapshot.snapshot: Refreshing state... [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T13:38:21Z" -> null
      - description  = "My share" -> null
      - id           = "1f551984-6529-48f8-830d-f6a70d062174" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

  # ovh_storage_efs_share_snapshot.snapshot will be destroyed
  - resource "ovh_storage_efs_share_snapshot" "snapshot" {
      - created_at   = "2025-07-01T13:39:01Z" -> null
      - description  = "My snapshot" -> null
      - id           = "f92bc04a-301f-4a9a-80ba-7c7bf18b2275" -> null
      - name         = "snapshot" -> null
      - path         = ".snapshot/share_snapshot_b571d597_80b0_4a5f_ac42_00fb3401c70c" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - share_id     = "1f551984-6529-48f8-830d-f6a70d062174" -> null
      - status       = "available" -> null
      - type         = "manual" -> null
    }

  # time_sleep.wait_10_seconds will be destroyed
  - resource "time_sleep" "wait_10_seconds" {
      - destroy_duration = "10s" -> null
      - id               = "2025-07-01T13:39:01Z" -> null
    }

Plan: 0 to add, 0 to change, 3 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share_snapshot.snapshot: Destroying... [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]
ovh_storage_efs_share_snapshot.snapshot: Destruction complete after 0s
time_sleep.wait_10_seconds: Destroying... [id=2025-07-01T13:39:01Z]
time_sleep.wait_10_seconds: Still destroying... [id=2025-07-01T13:39:01Z, 10s elapsed]
time_sleep.wait_10_seconds: Destruction complete after 10s
ovh_storage_efs_share.volume: Destroying... [id=1f551984-6529-48f8-830d-f6a70d062174]
ovh_storage_efs_share.volume: Destruction complete after 1s

Destroy complete! Resources: 3 destroyed.
```

### Gestion des ACLs

Le provider Terraform OVHcloud permet les opérations de gestion des ACL suivantes : création et suppression.

La ressource [ovh_storage_efs_share_acl](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share_acl) représente une ACL.

#### Créer une ACL

Définissez une ACL dans le fichier `main.tf` :

> [!primary]
>
> Vous pouvez (ré)utiliser un volume qui existe déjà (dans votre configuration Terraform ou non) pour créer une ACL.
>

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
  name = "share"
  description = "My share"
  protocol = "NFS"
  size = 100
}
i
resource "ovh_storage_efs_share_acl" "acl" {
  service_name = "<service_id>" # Remplacez cette valeur par l'ID de votre service EFS.
  share_id = ovh_storage_efs_share.volume.id
  access_level = "rw"
  access_to = "10.0.0.1/32"
}
```

Exécutez la commande [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) afin de créer un plan d'exécution :

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

  # ovh_storage_efs_share_acl.acl will be created
  + resource "ovh_storage_efs_share_acl" "acl" {
      + access_level = "rw"
      + access_to    = "10.0.0.1/32"
      + access_type  = (known after apply)
      + created_at   = (known after apply)
      + id           = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
      + status       = (known after apply)
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```

Points clés :

- La commande `terraform plan` va créer un plan d'execution mais ne l’exécutera pas. Au lieu de cela, elle déterminera les actions nécessaires pour créer la configuration spécifiée à l'intérieur de vos fichiers de configuration. Cela vous permettra de vérifier si votre plan d'exécution correspond à vos attentes avant d'apporter des modifications aux ressources réelles.
- Le paramètre facultatif `-out` vous permet de spécifier un fichier de sortie pour le plan. Il garantit que le plan que vous avez examiné sera le même que celui qui est appliqué.

Une fois que vous avez examiné le plan d'exécution, exécutez `terraform apply` pour apporter les modifications :

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 10s [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share_acl.acl: Creating...
ovh_storage_efs_share_acl.acl: Still creating... [10s elapsed]
ovh_storage_efs_share_acl.acl: Creation complete after 11s [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
```

Votre ACL est désormais créée.

#### Supprimer une ACL

Pour supprimer votre ACL, utilisez la commande [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy).

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share_acl.acl: Refreshing state... [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T14:36:37Z" -> null
      - description  = "My share" -> null
      - id           = "001ccf4b-3537-41c0-b446-a42663971d58" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

  # ovh_storage_efs_share_acl.acl will be destroyed
  - resource "ovh_storage_efs_share_acl" "acl" {
      - access_level = "rw" -> null
      - access_to    = "10.0.0.1/32" -> null
      - access_type  = "ip" -> null
      - created_at   = "2025-07-01T14:36:48Z" -> null
      - id           = "9274f4d4-de96-46eb-935f-ffbc747a19bc" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - share_id     = "001ccf4b-3537-41c0-b446-a42663971d58" -> null
      - status       = "active" -> null
    }
	
Plan: 0 to add, 0 to change, 2 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share_acl.acl: Destroying... [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]
ovh_storage_efs_share_acl.acl: Destruction complete after 0s
ovh_storage_efs_share.volume: Destroying... [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share.volume: Destruction complete after 0s

Destroy complete! Resources: 2 destroyed.
```

## Erreurs fréquentes

- **Problèmes d'authentification** : Vérifiez les informations d'identification des API et les autorisations.
- **Limites de ressources** : Vérifiez l'utilisation des quotas de volumes/snapshots dans le gestionnaire OVHcloud.
- **Problèmes de suppression de volume** : Assurez-vous que tous les snapshots de type `manual` sont supprimés avant de supprimer le volume.

## Aller plus loin

[Enterprise File Storage - API Quickstart](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
