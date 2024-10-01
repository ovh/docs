---
title: "Déployer des machines virtuelles de base de données SAP HANA sur une solution VMware on OVHcloud avec Terraform"
excerpt: "Ce guide fournit des instructions sur l'utilisation du module Terraform SAP HANA databases développé par OVHcloud"
updated: 2023-09-05
---

## Objectif

Ce guide fournit des instructions sur l'utilisation du module Terraform SAP HANA databases développé par OVHcloud afin de déployer des machines virtuelles de base de données SAP HANA sur une solution VMware on OVHcloud.

## Prérequis

- Être connecté à l'[espace client](/links/manager).
- Une [solution VMware on OVHcloud](https://www.ovhcloud.com/fr-ca/hosted-private-cloud/vmware/) déployée.
- Binaire Terraform (version >= 1.4).

## En pratique

### Création de l'utilisateur Terraform

Dans le but de gérer les ressources (création, modification et destruction) sur votre solution VMware on OVHcloud, nous vous conseillons de créer un utilisateur dédié avec des droits limités. Ces droits sont nécessaires à l'utilisation de ce module Terraform.

|       Droit        |       Rôle       |
|--------------------|------------------|
| Accès vSphere      | Lecture/Écriture |
| Accès au vmNetwork | Opérateur        |
| Accès au V(x)Lans  | Opérateur        |

### Binaire Terraform

Ce module a été écrit pour être compatible avec Terraform v1.4 ou supérieur. Pour découvrir comment installer Terraform, veuillez vous référer à la [documentation officielle](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) disponible sur Hashicorp.

### Utilisation du module Terraform

Plusieurs exemples sont disponibles dans le [repository GitHub](https://github.com/ovh/terraform-vsphere-sap-hana-database/tree/master/examples/) pour déployer des machines virtuelles de base de données SAP HANA.

Trois principaux fichiers sont requis pour utiliser comme attendu ce module Terraform :

- main.tf
- outputs.tf
- versions.tf

#### main.tf

Ce fichier contient le code pour appeler le module Terraform SAP HANA databases développé par OVHcloud.

- Le bloc « provider » est nécessaire pour être en capacité d’interagir avec votre solution VMware on OVHcloud.
- Le bloc « module » regroupe toutes les variables que vous souhaitez passer au module Terraform SAP HANA databases développé par OVHcloud.

```python
provider "vsphere" {
  vsphere_server = "pcc-xx-xx-xx-xx.ovh.com"
}
 
module "sap-hana-database" {
  source = "github.com/ovh/terraform-vsphere-sap-hana-database.git?ref=v1.0.0"

  sap_hana_database_datastore              = "vsanDatastore"
  sap_hana_database_thin_datastore_policy  = "vSAN Default Storage Policy"
  sap_hana_database_thick_datastore_policy = "SAP HANA VM Storage Policy"
  sap_hana_databases = [
    {
      "name"                    = "terraform-vm-hana-1",
      "model"                   = "S",
      "cpus"                    = "",
      "cpus_per_socket"         = "24",
      "memory"                  = "",
      "custom_disks"            = false,
      "scsi_controller_count"   = "",
      "disks"                   = []
      "networks"                = ["VLAN20"],
      "guest_id"                = "sles15_64Guest",
      "vsphere_content_library" = "",
      "template"                = "",
      "iso_datastore"           = "",
      "iso_path"                = ""
      "vapp_options"            = {}
    }
  ]
  vsphere_compute_cluster = "Cluster1"
  vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
}
```

> [!primary]
> Où « SAP HANA VM Storage Policy » a été auparavant créée dans l'interface vSphere avec une politique de provisionnement *thick*. Pour en savoir plus sur les recommandations à propos de cette politique de stockage, nous vous conseillons [ce guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_hana_template_vmware/#configure-advanced-parameters).
>

Pour connaître toutes les entrées que vous pouvez passer à ce module, veuillez vous référer au README sur [GitHub](https://github.com/ovh/terraform-vsphere-sap-hana-database).

Vous avez également la possibilité de créer des variables afin d'éviter de les coder en dur dans votre fichier main.tf. Pour cela, vous devez remplacer chaque valeur par une valeur avec la syntaxe `var.<nom_de_la_variable>` et créer un fichier nommé variables.tf qui contient la définition de chaque variable. Attention, le type de la variable doit être la même que la variable dans le module Terraform SAP HANA databases développé par OVHcloud.

Par exemple, vous ne pouvez pas appliquer le type « chaîne de caractères » pour la variable `sap_hana_databases` puisque, dans le module Terraform SAP HANA databases développé par OVHcloud, cette variable est une « liste ».

Dans ce cas, le fichier main.tf pourrait être comme ceci :

```python
provider "vsphere" {
  vsphere_server = var.vsphere_server
}
 
module "sap-hana-database" {
  source = "github.com/ovh/terraform-vsphere-sap-hana-database.git?ref=v1.0.0"
 
  sap_hana_database_datastore              = var.sap_hana_database_datastore
  sap_hana_database_thick_datastore_policy = var.sap_hana_database_thick_datastore_policy
  sap_hana_database_thin_datastore_policy  = var.sap_hana_database_thin_datastore_policy
  sap_hana_databases                       = var.sap_hana_databases
  vsphere_compute_cluster                  = var.vsphere_compute_cluster
  vsphere_datacenter                       = var.vsphere_datacenter
}
```

Le fichier variables.tf devrait être similaire à cela :

```python
variable "vsphere_server" {
  type        = string
  description = "Nom du serveur vSphere"
}
 
variable "vsphere_datacenter" {
  type        = string
  description = "Nom du datacenter dans l'interface vSphere"
}
 
variable "sap_hana_database_datastore" {
  type        = string
  description = "Nom du datastore pour stocker les machines virtuelles des bases de données SAP HANA"
}

variable "sap_hana_database_thick_datastore_policy" {
  type        = string
  description = "Cette politique de stockage doit être un provisionnement thick"
}

variable "sap_hana_database_thin_datastore_policy" {
  type        = string
  description = "Cette politique de stockage doit être un provisionnement thin"
}

variable "vsphere_compute_cluster" {
  type        = string
  description = "Nom du cluster vSphere"
}
 
variable "sap_hana_databases" {
  type        = list(any)
  description = "Liste des machines virtuelles des bases de données SAP HANA souhaitées"
}
```

Enfin, dans le but d'éviter de devoir fournir chaque valeur à travers la console, vous avez la possibilité de créer un fichier nommé terraform.tfvars dans lequel vous pouvez mettre les valeurs souhaitées pour chaque variable.

```python
# vSphere
vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
vsphere_compute_cluster = "Cluster1"
vsphere_server          = "pcc-xx-xx-xx-xx.ovh.com"
 
# SAP HANA databases
sap_hana_database_datastore              = "vsanDatastore"
sap_hana_database_thick_datastore_policy = "SAP HANA VM Storage Policy"
sap_hana_database_thin_datastore_policy  = "vSAN Default Storage Policy"
sap_hana_databases = [
  {
    "name"                    = "terraform-vm-hana-1",
    "model"                   = "S",
    "cpus"                    = "",
    "cpus_per_socket"         = "24",
    "memory"                  = "",
    "custom_disks"            = false,
    "disks"                   = [],
    "networks"                = ["VLAN20"],
    "guest_id"                = "sles15_64Guest",
    "vsphere_content_library" = "",
    "template"                = "",
    "iso_datastore"           = "",
    "iso_path"                = "",
    "vapp_options"            = {}
  }
]
```

#### outputs.tf

Ce fichier affiche les informations après l'exécution de `terraform apply`, comme les IDs de vos machines virtuelles, les informations des règles d'anti-affinité ou encore les informations des groupes d'affinité.

Pour découvrir les sorties disponibles de ce module, veuillez vous référer au fichier outputs.tf sur [GitHub](https://github.com/ovh/terraform-vsphere-sap-hana-database).

#### versions.tf

Ce fichier permet de fixer la version des binaires utilisés lors de l'exécution du code. Ce module doit être identique au fichier versions.tf présent dans le [repository Github](https://github.com/ovh/terraform-vsphere-sap-hana-database) du module pour la release souhaitée.

### Exécution

Une fois que votre repository avec ces trois fichiers (minimum) est prêt, vous pouvez lancer l'exécution avec les commandes suivantes :

```bash
terraform init
terraform plan
terraform apply
```

La sortie de l'exécution devrait être similaire à celle-ci :

```python
Plan: 1 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + affinity_hosts_sap_hana_databases_rules = {}
  + anti_affinity_sap_hana_databases_rule   = {}
  + sap_hana_databases_ids                  = {
      + terraform-vm-hana-1 = (known after apply)
    }

vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Creating...
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Still creating... [10s elapsed]
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Creation complete after 12s [id=4228f3fa-30a0-4ec0-ec1f-a7a6188452f7]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

affinity_hosts_sap_hana_databases_rules = {}
anti_affinity_sap_hana_databases_rule = {}
sap_hana_databases_ids = {
  "terraform-vm-hana-1" = "4228f3fa-30a0-4ec0-ec1f-a7a6188452f7"
}
```

Si l'exécution s'est déroulée sans erreur, vous avez créé votre première machine virtuelle de base de données SAP HANA sur votre solution VMware on OVHcloud avec Terraform.

Nous vous suggérons de prendre connaissance des [exemples](https://github.com/ovh/terraform-vsphere-sap-hana-database/tree/master/examples) et du [README](https://github.com/ovh/terraform-vsphere-sap-hana-database) pour découvrir toutes les possibilités.

À tout moment, vous avez la possibilité de changer la configuration de la machine virtuelle (plus de vCPU, plus de mémoire ou ajout d'un nouveau disque par exemple) et relancer l'exécution de Terraform.

### Destruction

Si vous souhaitez détruire cette machine virtuelle, exécutez la commande suivante :

```bash
terraform destroy
```

La sortie de l'exécution devrait ressembler à celle-ci :

```python
Plan: 0 to add, 0 to change, 1 to destroy.

Changes to Outputs:
  - affinity_hosts_sap_hana_databases_rules = {} -> null
  - anti_affinity_sap_hana_databases_rule   = {} -> null
  - sap_hana_databases_ids                  = {
      - terraform-vm-hana-1 = "4228f3fa-30a0-4ec0-ec1f-a7a6188452f7"
    } -> null
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Destroying... [id=4228f3fa-30a0-4ec0-ec1f-a7a6188452f7]
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Destruction complete after 1s

Destroy complete! Resources: 1 destroyed.
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
