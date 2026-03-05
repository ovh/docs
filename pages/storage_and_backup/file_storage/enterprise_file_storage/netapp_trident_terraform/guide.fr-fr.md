---
title: Déployer une stack EFS pour Trident CSI avec Terraform
excerpt: Découvrez comment utiliser un module Terraform pour créer et configurer une stack d'infrastructure pour utiliser NetApp Trident CSI avec Enterprise File Storage et Managed Kubernetes Service
updated: 2026-05-13
---

## Objectif

Ce guide explique comment utiliser un module Terraform OVHcloud appelé [efs-trident](https://github.com/ovh/terraform-ovh-efs/tree/main/modules/efs-trident) pour provisionner la stack d'infrastructure complète nécessaire à l'utilisation de [NetApp Trident CSI](https://docs.netapp.com/us-en/trident/index.html) avec Enterprise File Storage (EFS).

Le module automatise la création de :

- Un service **Enterprise File Storage** (EFS)
- Un cluster **Managed Kubernetes Service** (MKS)
- Un **vRack** et un **vRack Services** ainsi que leur configuration
- Un **Public Cloud Project** avec une configuration pour le réseau privé
- Une **politique IAM** et des **identifiants OAuth2** pour l'authentification du backend de stockage Trident CSI
- Une **passerelle** réseau pour la connectivité des nœuds du cluster MKS à l'API OVHcloud

**Découvrez comment déployer et configurer un ensemble de services OVHcloud avec Terraform pour pouvoir provisionner des volumes EFS avec NetApp Trident CSI.**

## Prérequis

- [Terraform >= 1.7.0](https://www.terraform.io/)
- [Provider Terraform OVHcloud >= v2.12.0](https://github.com/ovh/terraform-provider-ovh/releases/)
- Accès à l'[API OVHcloud](/links/api)
- Un compte OVHcloud avec les permissions suffisantes pour créer les ressources nécessaires

## Architecture

Le module Terraform crée l'infrastructure suivante :

![Architecture du module Terraform](images/terraform_module_architecture.excalidraw.png){.thumbnail}

## Contraintes réseau

Le module applique les contraintes suivantes :

| Contrainte | Description |
|------------|-------------|
| Même vRack | Le Cloud Project et le vRack Services doivent être dans le même vRack |
| Même région | Le vRack Services et l'EFS doivent être dans la même région |
| Même VLAN ID | Le réseau privé et le sous-réseau vRack Services doivent utiliser le même VLAN ID |
| Même CIDR | Le réseau privé et le sous-réseau vRack Services doivent utiliser le même CIDR |
| Pas de chevauchement IP | Le pool d'allocation du sous-réseau du réseau privé ne doit pas chevaucher le CIDR de la plage de services |
| Passerelle requise | Le cluster MKS nécessite une passerelle pour joindre l'API OVH |

## Instructions

### Configurer le provider Terraform OVHcloud

#### Générer les identifiants API

Le provider Terraform OVHcloud doit être configuré avec un token d'API afin de pouvoir appeler l'API OVHcloud.

Votre token d'API devra disposer des droits suivants :

- GET, POST, PUT, DELETE sur `/storage/netapp/*`
- GET, POST, PUT, DELETE sur `/vrack/*`
- GET, POST, PUT, DELETE sur `/cloud/project/*`
- GET, POST, PUT, DELETE sur `/me/*`
- GET, POST, PUT, DELETE sur `/iam/*`
- POST sur `/order/*`

Suivez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour générer votre token d'API.

**Une fois le token généré, conservez ses informations pour les utiliser ensuite avec le provider Terraform OVHcloud.**

#### Configurer les paramètres du provider

Créez un fichier `provider.tf` avec la configuration du provider OVHcloud :

```hcl
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = ">= 2.12.0"
    }
  }

  required_version = ">= 1.7.0"
}

provider "ovh" {
  endpoint           = var.ovh.endpoint
  application_key    = var.ovh.application_key
  application_secret = var.ovh.application_secret
  consumer_key       = var.ovh.consumer_key
}
```

Créez ensuite un fichier `variables.tf` définissant les variables qui seront utilisées dans vos fichiers `.tf` :

```hcl
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
> À propos de la variable `ovh.endpoint` : par défaut, `ovh-eu` est défini, car nous effectuons des appels aux API OVHcloud Europe.
>
> D'autres points de terminaison existent, en fonction de vos besoins :
>
> - `ovh-eu` pour les API OVHcloud Europe
> - `ovh-ca` pour les API OVHcloud Amérique / Asie

Créez un fichier `secrets.tfvars` avec vos identifiants :

> [!warning]
> N'oubliez pas de remplacer `<application_key>`, `<application_secret>` et `<consumer_key>` par les informations de votre token d'API obtenu précédemment.

```hcl
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}
```

### Utiliser le module Terraform

#### Configuration minimale

Créez un fichier `main.tf` utilisant le module avec les paramètres minimaux requis :

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  # Configuration de la région (requis)
  region              = "eu-west-gra"
  public_cloud_region = "GRA9"

  # Configuration réseau (requis)
  vlan_id = 1234

  # Définir à false et appliquer la configuration avec Terraform avant destruction pour détacher le point de terminaison du service vRack Services
  vrackservices_attach_to_efs = true
}
```

Cette configuration minimale crée toutes les ressources à partir de zéro avec les paramètres par défaut.

> [!primary]
> Nous recommandons de choisir une `region` EFS et une région `public_cloud_region` MKS les plus proches possibles.
>
> Soyez conscient que la latence entre différentes régions peut impacter les performances de vos charges de travail de stockage.
> **Il est fortement recommandé de garder votre stockage et vos calculs aussi proches que possible.**
>
> Par exemple :
>
> - `eu-west-gra` et `GRA9`
> - `eu-west-sbg` et `SBG5`
>
> Consultez la [documentation des régions OVHcloud](https://www.ovhcloud.com/fr/about-us/global-infrastructure/expansion-regions-az/) pour le mapping complet.

#### Exemple de configuration complète

Pour un contrôle total sur toutes les ressources, utilisez la configuration complète :

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  # Configuration de la région
  region              = "eu-west-gra"
  public_cloud_region = "GRA9"

  # Configuration réseau
  vlan_id = 1234

  # Définir à false et appliquer la configuration avec Terraform avant destruction pour détacher le point de terminaison du service vRack Services
  vrackservices_attach_to_efs = true

  # OAuth2 et IAM
  oauth2_client_name        = "efs-trident-client"
  oauth2_client_description = "OAuth2 client for EFS Trident integration"
  iam_policy_name           = "efs-trident-policy"
  iam_policy_description    = "IAM policy for EFS Trident access"

  # EFS
  storage_efs_name      = "my-efs-storage"
  storage_efs_plan_code = "enterprise-file-storage-premium-1tb"

  # vRack
  vrack_name        = "my-vrack"
  vrack_description = "vRack for EFS connectivity"

  # Cluster MKS
  mks_cluster_name                    = "my-mks-cluster"
  mks_cluster_node_pool_name          = "default-pool"
  mks_cluster_node_pool_flavor        = "b3-8"
  mks_cluster_node_pool_desired_nodes = 3

  # Configuration réseau
  private_network_subnet_cidr             = "10.6.0.0/24"
  private_network_gateway                 = "10.6.0.254"
  vrackservices_subnet_name               = "efs-subnet"
  vrackservices_subnet_service_range_cidr = "10.6.0.0/29"

  # Réseau privé Public Cloud
  public_cloud_private_network_name        = "mks-private-network"
  public_cloud_private_network_subnet_name = "mks-subnet"
  public_cloud_private_network_subnet_allocation_pools = {
    start = "10.6.0.8"
    end   = "10.6.0.253"
  }

  # Passerelle
  public_cloud_gateway_name  = "mks-gateway"
  public_cloud_gateway_model = "s"

  # Cloud Project
  cloud_project_description = "EFS Trident Project"
}
```

### Utiliser des ressources existantes

Le module est conçu pour être compatible avec votre infrastructure existante. Vous pouvez utiliser vos ressources OVHcloud au lieu d'en créer de nouvelles.

#### Utiliser un EFS et un vRack Services existants liés à un vRack

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  region              = "eu-west-gra"
  public_cloud_region = "GRA9"
  vlan_id             = 1234

  # Utiliser un EFS existant
  create_efs = false
  efs_id     = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

  # Utiliser un vRack Services existant
  create_vrack_services = false
  vrack_services_id     = "vrs-xyz-789"

  # Utiliser un vRack existant
  create_vrack       = false
  vrack_service_name = "pn-1234567"

  # Configuration réseau
  # Ajustez le pool d'allocation du sous-réseau et l'adresse de la passerelle si votre configuration réseau diffère de l'exemple.
  # public_cloud_private_network_subnet_allocation_pools = {
  #   start = "10.7.0.8"
  #   end   = "10.7.0.253"
  # }
  # private_network_gateway = "10.7.0.254"

  # Ignorer le binding entre vRack et vRack services si il est déjà configuré
  bind_vrack_to_vrack_services = false
}
```

#### Utiliser un cluster MKS existant

Cet exemple suppose que seuls des produits Public Cloud existent déjà : un cluster MKS avec connectivité sur réseau privé
et une passerelle pour joindre Internet, mais pas de vRack, d'EFS ni d'autres ressources.

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  region              = "eu-west-gra"
  public_cloud_region = "GRA9"
  vlan_id             = 1234

  # Utiliser un Cloud Project existant
  create_cloud_project = false
  cloud_project_id     = "abc123"

  # Utiliser un réseau privé existant
  create_private_network = false
  private_network_id     = "network-openstack-id"

  # Utiliser un sous-réseau existant
  create_private_subnet = false
  private_subnet_id     = "subnet-id"

  # Ignorer la création de la passerelle (le réseau existant a déjà une passerelle)
  create_gateway = false

  # Utiliser un cluster MKS existant
  create_mks_cluster = false
  mks_cluster_id     = "cluster-id"

  # Ne pas créer de node pool pour le cluster MKS
  create_node_pool = false
}
```

### Déployer l'infrastructure

Créez un fichier `outputs.tf` qui regroupera toutes les sorties du module :

```hcl
# OAuth2 Credentials for Trident
output "client_id" {
  description = "OAuth2 client ID for EFS access"
  value       = module.ovh_efs_trident.client_id
}

output "client_secret" {
  description = "OAuth2 client secret for EFS access"
  value       = module.ovh_efs_trident.client_secret
  sensitive   = true
}

# Kubernetes Configuration
output "kubeconfig" {
  description = "Kubernetes configuration file for MKS cluster"
  value       = module.ovh_efs_trident.kubeconfig
  sensitive   = true
}

# Resource Identifiers
output "efs_id" {
  description = "EFS service name"
  value       = module.ovh_efs_trident.efs_id
}

output "vrack_service_name" {
  description = "vRack service name"
  value       = module.ovh_efs_trident.vrack_service_name
}

output "cloud_project_id" {
  description = "Cloud Project ID"
  value       = module.ovh_efs_trident.cloud_project_id
}

output "mks_cluster_id" {
  description = "MKS cluster ID"
  value       = module.ovh_efs_trident.mks_cluster_id
}

# Network Information
output "private_network_id" {
  description = "Private network OpenStack ID"
  value       = module.ovh_efs_trident.private_network_id
}

output "vlan_id" {
  description = "VLAN ID used"
  value       = module.ovh_efs_trident.vlan_id
}

# Summary
output "resources_created" {
  description = "Summary of resources that were created vs used"
  value       = module.ovh_efs_trident.resources_created
}
```

Initialisez Terraform pour télécharger les providers requis :

```bash
terraform init
```

Créez un plan d'exécution pour examiner les changements :

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan
```

Examinez la sortie du plan pour vérifier les ressources qui seront créées :

```bash
Terraform will perform the following actions:

  # module.ovh_efs_trident.null_resource.config_validation will be created
  # module.ovh_efs_trident.ovh_cloud_project.cloud_project[0] will be created
  # module.ovh_efs_trident.ovh_cloud_project_gateway.gateway[0] will be created
  # module.ovh_efs_trident.ovh_cloud_project_kube.mks_cluster[0] will be created
  # module.ovh_efs_trident.ovh_cloud_project_kube_nodepool.node_pool[0] will be created
  # module.ovh_efs_trident.ovh_cloud_project_network_private.network[0] will be created
  # module.ovh_efs_trident.ovh_cloud_project_network_private_subnet_v2.subnet[0] will be created
  # module.ovh_efs_trident.ovh_iam_policy.iam_policy will be created
  # module.ovh_efs_trident.ovh_me_api_oauth2_client.api_oauth2_client will be created
  # module.ovh_efs_trident.ovh_storage_efs.efs[0] will be created
  # module.ovh_efs_trident.ovh_vrack.vrack[0] will be created
  # module.ovh_efs_trident.ovh_vrack_cloudproject.vrack-cloudproject-binding[0] will be created
  # module.ovh_efs_trident.ovh_vrack_vrackservices.vrack-vrackservices-binding[0] will be created
  # module.ovh_efs_trident.ovh_vrackservices.vrackservices[0] will be created

Plan: 14 to add, 0 to change, 0 to destroy.
```

Appliquez la configuration pour créer les ressources :

```bash
terraform apply main.tfplan
```

```
module.ovh_efs_trident.null_resource.config_validation: Creation complete after 0s [id=xxx]
module.ovh_efs_trident.ovh_me_api_oauth2_client.api_oauth2_client: Creation complete after 0s [id=EU.xxx]
module.ovh_efs_trident.ovh_cloud_project.cloud_project[0]: Creation complete after 26s [id=xxx]
module.ovh_efs_trident.ovh_vrack.vrack[0]: Creation complete after 54s [id=pn-xxx]
module.ovh_efs_trident.ovh_vrack_cloudproject.vrack-cloudproject-binding[0]: Creation complete after 52s [id=vrack_pn-xxx-cloudproject_xxx]
module.ovh_efs_trident.ovh_cloud_project_network_private.network[0]: Creation complete after 14s [id=pn-xxx]
module.ovh_efs_trident.ovh_cloud_project_network_private_subnet_v2.subnet[0]: Creation complete after 1s [id=x-x-x-x-x]
module.ovh_efs_trident.ovh_cloud_project_gateway.gateway[0]: Creation complete after 32s [id=x-x-x-x-x]
module.ovh_efs_trident.ovh_storage_efs.efs[0]: Creation complete after 3m58s [id=x-x-x-x-x]
module.ovh_efs_trident.ovh_iam_policy.iam_policy: Creation complete after 0s [id=x-x-x-x-x]
module.ovh_efs_trident.ovh_vrackservices.vrackservices[0]: Creation complete after 56s [id=vrs-x-x-x-x]
module.ovh_efs_trident.ovh_vrack_vrackservices.vrack-vrackservices-binding[0]: Creation complete after 1m11s [id=vrack_pn-xxx-vrackServices_vrs-x-x-x-x]
module.ovh_efs_trident.ovh_cloud_project_kube.mks_cluster[0]: Creation complete after 4m11s [id=x-x-x-x-x]
module.ovh_efs_trident.ovh_cloud_project_kube_nodepool.node_pool[0]: Creation complete after 5m23s [id=x-x-x-x-x]

Apply complete! Resources: 14 added, 0 changed, 0 destroyed.
```

> [!warning]
> La création des ressources peut prendre plusieurs minutes. La création du cluster MKS est généralement la plus longue.

### Récupérer les outputs

Après un déploiement réussi, récupérez les outputs nécessaires à la configuration de Trident :

```bash
terraform output
```

Les sorties clés incluent :

| Sortie | Description |
|--------|-------------|
| `client_id` | ID client OAuth2 pour le backend Trident |
| `client_secret` | Secret client OAuth2 (valeur sensible) |
| `efs_id` | ID du service Enterprise File Storage |
| `mks_cluster_id` | ID du cluster MKS |
| `kubeconfig` | Fichier de configuration Kubernetes (valeur sensible) |
| `private_network_subnet_cidr` | CIDR du réseau pour la configuration du backend Trident |

Pour récupérer les valeurs sensibles :

```bash
terraform output -raw client_secret
terraform output -raw kubeconfig > kubeconfig.yaml
```

### Configurer Trident CSI

Après avoir déployé l'infrastructure avec ce module, configurez Trident CSI pour utiliser Enterprise File Storage. Suivez le guide [Premiers pas avec Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi) pour des instructions détaillées.

Utilisez les sorties du module pour configurer le backend Trident.

Récupérez les identifiants OAuth2 :

```bash
export CLIENT_ID=$(terraform output -raw client_id)
export CLIENT_SECRET=$(terraform output -raw client_secret)
```

Créez le secret Kubernetes :

> [!warning]
> Si le namespace `trident` n'existe pas encore, créez-le avec `kubectl --kubeconfig kubeconfig.yaml create ns trident`

```bash
kubectl --kubeconfig kubeconfig.yaml create secret generic tbc-ovh-efs-secret \
  --namespace trident \
  --from-literal=clientID="$CLIENT_ID" \
  --from-literal=clientSecret="$CLIENT_SECRET"
```

### Détruire l'infrastructure

Avant de supprimer les ressources, si l'attachement du vRack Services à l'EFS a été effectué avec Terraform, supprimez-le d'abord en définissant `vrackservices_attach_to_efs = false` et en appliquant la nouvelle configuration.

```hcl
module "ovh_efs_trident" {
  [...]
  # Définir à false et appliquer la configuration avec Terraform avant destruction pour détacher le point de terminaison du service vRack Services
  vrackservices_attach_to_efs = false
  [...]
}
```

```bash
terraform apply -var-file=secrets.tfvars
```

Une fois le vRack Services détaché de l'EFS, toutes les ressources peuvent être supprimées.

Pour supprimer toutes les ressources créées par le module :

> [!warning]
> Cela supprimera définitivement toutes les ressources, y compris le cluster MKS et le stockage EFS. Assurez-vous d'avoir sauvegardé toutes les données importantes avant de procéder.

```bash
terraform destroy -var-file=secrets.tfvars
```

## Aller plus loin

- [Premiers pas avec Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi)
- [Gérer Enterprise File Storage avec le provider Terraform OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_terraform)
- [Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)
- [Documentation du provider Terraform OVHcloud](https://registry.terraform.io/providers/ovh/ovh/latest/docs)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
