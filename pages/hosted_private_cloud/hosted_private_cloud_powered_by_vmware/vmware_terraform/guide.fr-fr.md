---
title: "Terraform - Premiers pas avec VMware"
excerpt: "Ce guide fournit les premieres instructions pour l'utilisation de Terraform (modules et providers) dans un écosystem Hosted Private Cloud VMware on OVHcloud"
updated: 2024-08-15
---
<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.
>

## Objectif

**Ce guide fournit des instructions sur l'utilisation de Terraform, de ses modules et providers dans un écosystem Hosted Private Cloud**.

## Prérequis

- Avoir accès à [l'espace client OVHcloud](/links/manager).
- Posséder une offre Hosted Private Cloud VMware on OVHcloud.
- Configurer un accès avec utilisateur Terraform ou un utilisateur unique (à sécuriser avec sudo au sein de Terraform).
- Le binaire Terraform (version >= 1.4).
- Un bucket S3 Object storage OVHcloud pour stocker le state Terraform avec les bon droits utilisateurs pour Terraform et le bucket.
- Le provider Terraform VMware vSphere (<https://registry.terraform.io/providers/hashicorp/vsphere/latest/docs>) 
- Un endpoint `https://nsxt` si vous voulez utiliser NSX-T avec Terraform au sein de OVHcloud (endpoint configuré par défaut avec toutes les offres NSX HPC). En effet L’API NSX est indépendante et non liée à l’API vSphere. C'est pourquoi nous avons créé un endpoint dédié pour l'atteindre.
- le module Terraform [SAP OVHcloud](<https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples/>).
- Le provider Docker [Kreuzwerker](<https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs>) Terraform pour deployer des conteneurs dans les VM (non-obligatoire).

### Étape 1 - Terraform au sein de Hosted Private Cloud

/// details | Comment configurer Terraform au sein de OVHcloud ?

**State Terraform**

La création d'un state Terraform peut-être réaliser à l'aide d'un bucket OVHcloud. Vous avez le guide [Gérer un bucket S3 avec Terraform](/pages/storage_and_backup/object_storage/s3_terraform) qui vous explique comment faire.

**Backend config**

Une fois votre bucket configuré, il vous faudra créer votre dossier terraform et initier votre config backend. Vous pouvez inclure directement votre config backend dans votre projet ou module et simplement lancer un `terraform init`.

`Terraform init`

Ou par exemple avec une configuration différente `Terraform init -backend-config=...` :

```Shell
terraform init \
    -backend-config="address=s3.gra.io.cloud.ovh.net" \
    -backend-config="path=example_app/terraform_state" \
    -backend-config="scheme=https"
```
**Installation de Terraform dans VMware on OVHcloud**

Dans le but de gérer les ressources (création, modification et destruction) sur votre solution VMware on OVHcloud, nous vous conseillons de créer un utilisateur dédié avec des droits limités. Ces droits sont nécessaires à l'utilisation de ce module Terraform.

|       Droit        |       Rôle       |
|--------------------|------------------|
| Accès vSphere      | Lecture/Écriture |
| Accès au vmNetwork | Opérateur        |
| Accès au V(x)Lans  | Opérateur        |

Pour les mots de passes, nous vous conseillons d'utiliser un fichier `xxx.tf` que vous utiliserez uniquement au sein de votre machine d'exécution. Ce fichier utilisera des variables Terraform classique avec les mots de passes, mais ne sera pas inclus dans votre répértoire global afin d'éviter le leak des mots de passe dans votre CI.

**Binaire Terraform**

Ce module a été écrit pour être compatible avec Terraform v1.4 ou supérieur. Pour découvrir comment installer Terraform, veuillez vous référer à la [documentation officielle](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) disponible sur Hashicorp.

**Utilisation du module Terraform**

Plusieurs exemples sont disponibles dans le [repository GitHub](<https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples/>) pour déployer des machines virtuelles de serveur d'application SAP.

Trois principaux fichiers sont requis pour utiliser comme attendu ce module Terraform :

- `main.tf`
- `outputs.tf`
- `versions.tf`

**main.tf**

Ce fichier contient le code pour appeler le module Terraform développé par OVHcloud. Si vous voulez utiliser d'autres template, nous allons voir comment changer les variables utilisées.

- Le bloc « provider » est nécessaire pour être en capacité d’interagir avec votre solution VMware on OVHcloud.
- Le bloc « module » regroupe toutes les variables que vous souhaitez passer au module Terraform développé par OVHcloud.

```Go
provider "vsphere" {
  vsphere_server = "pcc-xx-xx-xx-xx.ovh.com"
}
 
module "sap-application-server" {
  source = "github.com/ovh/terraform-vsphere-sap-application-server.git?ref=v1.0.0"
 
  sap_application_server_datastore = "ssd-xxxxxx"
  sap_application_servers = [
    {
      "name"                    = "terraform-vm-1",
      "model"                   = "",
      "cpus"                    = "2",
      "cpus_per_socket"         = "2",
      "memory"                  = "1024",
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
  vsphere_compute_cluster = "Cluster1"
  vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
}
```

Pour connaître toutes les entrées que vous pouvez passer à ce module, veuillez vous référer au README sur [GitHub](https://github.com/ovh/terraform-vsphere-sap-application-server).

Vous avez également la possibilité de créer des variables afin d'éviter de les coder en dur dans votre fichier main.tf. Pour cela, vous devez remplacer chaque valeur par une valeur avec la syntaxe `var.<nom_de_la_variable>` et créer un fichier nommé variables.tf qui contient la définition de chaque variable. Attention, le type de la variable doit être la même que la variable dans le module Terraform SAP Application Servers développé par OVHcloud.

Par exemple, vous ne pouvez pas appliquer le type « chaîne de caractères » pour la variable `sap_application_servers`, puisque dans le module Terraform SAP Application Servers développé par OVHcloud cette variable est une « liste ».

Dans ce cas, le fichier main.tf pourrait être comme ceci :

```Go
provider "vsphere" {
  vsphere_server = var.vsphere_server
}
 
module "sap-application-server" {
  source = "github.com/ovh/terraform-vsphere-sap-application-server.git?ref=v1.0.0"
 
  sap_application_server_datastore = var.sap_application_server_datastore
  sap_application_servers          = var.sap_application_servers
  vsphere_compute_cluster          = var.vsphere_compute_cluster
  vsphere_datacenter               = var.vsphere_datacenter
}
```

Le fichier variables.tf devrait être similaire à cela :

```Go
variable "vsphere_server" {
  type        = string
  description = "Nom du serveur vSphere"
}
 
variable "vsphere_datacenter" {
  type        = string
  description = "Nom du datacenter dans l'interface vSphere"
}
 
variable "sap_application_server_datastore" {
  type        = string
  description = "Nom du datastore pour stocker les machines virtuelles des serveurs d'application SAP"
}
 
variable "vsphere_compute_cluster" {
  type        = string
  description = "Nom du cluster vSphere"
}
 
variable "sap_application_servers" {
  type        = list(any)
  description = "Liste des machines virtuelles des serveurs d'application SAP souhaités"
}
```

Enfin, dans le but d'éviter de devoir fournir chaque valeur à travers la console, vous avez la possibilité de créer un fichier nommé terraform.tfvars dans lequel vous pouvez mettre les valeurs souhaitées pour chaque variable.

```Go
# vSphere
vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
vsphere_compute_cluster = "Cluster1"
vsphere_server          = "pcc-xx-xx-xx-xx.ovh.com"
 
# VM server (Gitlab cluster)
vm_datastore = "ssd-xxxxxx"
vm_servers = [
  {
    "name"                    = "terraform-vm-1",
    "model"                   = "",
    "cpus"                    = "2",
    "cpus_per_socket"         = "2",
    "memory"                  = "1024",
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

**outputs.tf**

Ce fichier affiche les informations après l'exécution de `terraform apply`, comme les IDs de vos machines virtuelles, les informations des règles d'anti-affinité ou encore les informations des groupes d'affinité.

Pour découvrir les sorties disponibles de ce module, veuillez vous référer au fichier outputs.tf sur [GitHub](<https://github.com/ovh/terraform-vsphere-sap-application-server>).

**versions.tf**

Ce fichier permet de fixer la version des binaires utilisés lors de l'exécution du code. Ce module doit être identique au fichier versions.tf présent dans le [repository Github](<https://github.com/ovh/terraform-vsphere-sap-application-server>) du module pour la release souhaitée.

**Exécution**

Une fois que votre repository avec ces trois fichiers (minimum) est prêt, vous pouvez lancer l'exécution avec les commandes suivantes :

```Bash
terraform init
terraform plan
terraform apply
```

La sortie de l'exécution devrait être similaire à celle-ci :

```Go
Plan: 1 to add, 0 to change, 0 to destroy.
 
Changes to Outputs:
  + affinity_hosts_sap_application_servers_rules = {}
  + anti_affinity_sap_application_servers_rule   = {}
  + sap_application_servers_ids                  = {
      + terraform-vm-1 = (known after apply)
    }
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Creating...
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Creation complete after 10s [id=42280216-8bbf-5550-51f9-4fb55a4f13e0]
 
Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
 
Outputs:
 
affinity_hosts_sap_application_servers_rules = {}
anti_affinity_sap_application_servers_rule = {}
sap_application_servers_ids = {
  "terraform-vm-1" = "42280216-8bbf-5550-51f9-4fb55a4f13e0"
}
```

Si l'exécution s'est déroulée sans erreurs, vous avez créé votre première machine virtuelle de serveur d'application SAP sur votre solution VMware on OVHcloud avec Terraform.

Nous vous suggérons de prendre connaissance des [exemples](<https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples>) et du [README](<https://github.com/ovh/terraform-vsphere-sap-application-server>) pour découvrir toutes les possibilités.

À tout moment, vous avez la possibilité de changer la configuration de la machine virtuelle (plus de vCPU, plus de mémoire ou ajout d'un nouveau disque par exemple) et relancer l'exécution de Terraform.

**Destruction**

Si vous souhaitez détruire cette machine virtuelle, exécutez la commande suivante :

```bash
terraform destroy
```

La sortie de l'exécution devrait ressembler à celle-ci :

```Go
Plan: 0 to add, 0 to change, 1 to destroy.

Changes to Outputs:
  - affinity_hosts_sap_application_servers_rules = {} -> null
  - anti_affinity_sap_application_servers_rule   = {} -> null
  - sap_application_servers_ids                  = {
      - terraform-vm-1 = "42280216-8bbf-5550-51f9-4fb55a4f13e0"
    } -> null
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Destroying... [id=42280216-8bbf-5550-51f9-4fb55a4f13e0]
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Destruction complete after 0s

Destroy complete! Resources: 1 destroyed.
```

///

### Étape 2 - Terraform et l'API OVHcloud

/// details | Comment récupérer les informations VMware de votre infrastructure OVHcloud ?

**Depuis l'API OVHcloud**

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud
>

Cet appel API permet de récupérer votre url vSphere managé on OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}
>
>**Paramètre** :
> 
> - `serviceName` : votre datacentre sous la form (pcc-XXX-XXX-XXX-XXX).
>

Cet appel API permet de récupérer votre "datacenterId" :

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}/datacenter
>
>**Paramètre** :
>
> - `serviceName` : votre datacentre sous la form (pcc-XXX-XXX-XXX-XXX).
>

Cet appel API permet de récupérer vos informations NSX-T :

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}/nsx{{t}} -> Si NSX-V enlever le "t"
>
>**Paramètre** :
>
> - `serviceName` : votre datacentre sous la form (pcc-XXX-XXX-XXX-XXX).
>

Retour :

```Shell
{
  "version": "4.1.1.0.0-XXXXX",
  "datacentersState": [
    {
      "state": "enabled",
      "id": XXXX
    }
  ],
  "url": "https://nsxt.pcc-XXX-XXX-XXX-XXX.ovh.de",
  "state": "enabled"
}
```
Retour avec NSX-V :

```Shell
{
  "state": "disabled",
  "url": "https://nsx.pcc-XXX-XXX-XXX-XXX.ovh.de/api"
}
```
///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).