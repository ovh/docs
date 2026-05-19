---
title: Einen EFS-Stack für Trident CSI mit Terraform bereitstellen
excerpt: Erfahren Sie, wie Sie mit einem Terraform-Modul den Infrastruktur-Stack für NetApp Trident CSI mit Enterprise File Storage und Managed Kubernetes Service bereitstellen
updated: 2026-05-19
---

## Ziel

Diese Anleitung erklärt, wie Sie ein OVHcloud Terraform-Modul mit dem Namen [efs-trident](https://github.com/ovh/terraform-ovh-efs/tree/main/modules/efs-trident) verwenden, um den vollständigen Infrastruktur-Stack bereitzustellen, der für die Verwendung von [NetApp Trident CSI](https://docs.netapp.com/us-en/trident/index.html) mit Enterprise File Storage (EFS) erforderlich ist.

Das Modul automatisiert die Erstellung von:

- Einem **Enterprise File Storage** (EFS) Dienst.
- Einem **Managed Kubernetes Service** (MKS) Cluster.
- Ein **vRack** und ein **vRack Services** sowie deren Konfiguration.
- Einem **Public Cloud Projekt** mit privater Netzwerkkonfiguration.
- Einer **IAM-Richtlinie** und **OAuth2-Anmeldedaten** für die Authentifizierung des Trident CSI Storage-Backends.
- Einem Netzwerk-**Gateway** für die Anbindung der MKS-Cluster-Knoten an die OVHcloud API.

**Erfahren Sie, wie Sie die OVHcloud Infrastruktur mit Terraform bereitstellen und konfigurieren, um EFS-Volumes mit NetApp Trident CSI bereitzustellen.**

## Voraussetzungen

- Sie haben [Terraform >= 1.7.0](https://www.terraform.io/) installiert.
- Sie haben den [OVHcloud Terraform Provider >= v2.12.0](https://github.com/ovh/terraform-provider-ovh/releases/) installiert.
- Sie haben Zugang zur [OVHcloud API](/links/api).
- Sie verfügen über ein OVHcloud Konto mit ausreichenden Berechtigungen, um die erforderlichen Ressourcen zu erstellen.

## Architektur

Das Terraform-Modul erstellt die folgende Infrastruktur:

![Architektur des Terraform-Moduls](images/terraform-module-architecture.png){.thumbnail}

## Netzwerk-Beschränkungen

Das Modul setzt die folgenden Beschränkungen durch:

| Beschränkung | Beschreibung |
|------------|-------------|
| Gleiches vRack | Cloud Projekt und vRack Services müssen sich im selben vRack befinden |
| Gleiche Region | vRack Services und EFS müssen sich in derselben Region befinden |
| Gleiche VLAN-ID | Privates Netzwerk und vRack Services Subnetz müssen dieselbe VLAN-ID verwenden |
| Gleiches CIDR | Privates Netzwerk und vRack Services Subnetz müssen denselben CIDR verwenden |
| Keine IP-Überschneidung | Der Zuweisungspool des privaten Netzwerk-Subnetzes darf sich nicht mit dem CIDR des Dienstbereichs überschneiden |
| Gateway erforderlich | Der MKS-Cluster benötigt ein Gateway, um die OVH API zu erreichen |

## In der praktischen Anwendung

### OVHcloud Terraform Provider konfigurieren

#### API-Anmeldedaten generieren

Der OVHcloud Terraform Provider muss mit einem API-Token konfiguriert werden, um Aufrufe an die OVHcloud API zu tätigen.

Ihr API-Token muss die folgenden Rechte besitzen:

- GET, POST, PUT, DELETE auf `/storage/netapp/*`
- GET, POST, PUT, DELETE auf `/vrack/*`
- GET, POST, PUT, DELETE auf `/cloud/project/*`
- GET, POST, PUT, DELETE auf `/me/*`
- GET, POST, PUT, DELETE auf `/iam/*`
- POST auf `/order/*`

Folgen Sie der Anleitung [Erste Schritte mit den OVHcloud APIs](/pages/manage_and_operate/api/first-steps), um Ihr API-Token zu generieren.

**Sobald Ihr Token generiert ist, speichern Sie die Informationen für die spätere Verwendung mit dem OVHcloud Terraform Provider**.

#### Provider-Parameter konfigurieren

Erstellen Sie eine Datei `provider.tf` mit der OVHcloud Provider-Konfiguration:

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

Erstellen Sie anschließend eine Datei `variables.tf`, in der die Variablen definiert werden, die in Ihren `.tf`-Dateien verwendet werden:

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
> Zur Variablen `ovh.endpoint`: Standardmäßig ist `ovh-eu` definiert, da wir Aufrufe an die OVHcloud Europe API tätigen.
>
> Je nach Bedarf existieren weitere Endpunkte:
>
> - `ovh-eu` für die OVHcloud Europe API
> - `ovh-ca` für die OVHcloud America/Asia API

Erstellen Sie eine Datei `secrets.tfvars` mit Ihren Anmeldedaten:

> [!warning]
> Vergessen Sie nicht, `<application_key>`, `<application_secret>` und `<consumer_key>` durch die zuvor erhaltenen Informationen Ihres API-Tokens zu ersetzen.
>

```hcl
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}
```

### Das Terraform-Modul verwenden

#### Minimale Konfiguration

Erstellen Sie eine Datei `main.tf`, die das Modul mit den minimal erforderlichen Parametern verwendet:

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  # Region Configuration (required)
  region              = "eu-west-gra"
  public_cloud_region = "GRA9"

  # Network Configuration (required)
  vlan_id = 1234

  # Set to false and terraform apply the configuration before destroying to detach vRack Services service endpoint
  vrackservices_attach_to_efs = true
}
```

Diese minimale Konfiguration erstellt alle Ressourcen von Grund auf mit Standardeinstellungen.

> [!primary]
> Wir empfehlen, dass die EFS-`region` und die MKS-`public_cloud_region` so nah wie möglich beieinander liegen.
>
> Die Latenz zwischen den Regionen kann die Leistung Ihres Speicher-Workloads beeinträchtigen.
> **Halten Sie Ihren Speicher und Ihre Rechenleistung so nah wie möglich beieinander.**
>
> Zum Beispiel:
>
> - `eu-west-gra` und `GRA9`
> - `eu-west-sbg` und `SBG5`
>
> Die vollständige Zuordnung finden Sie in der [OVHcloud Regionen-Dokumentation](/links/bare-metal/regions).

#### Beispiel einer vollständigen Konfiguration

Verwenden Sie für die vollständige Kontrolle über alle Ressourcen die vollständige Konfiguration:

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  # Region Configuration
  region              = "eu-west-gra"
  public_cloud_region = "GRA9"

  # Network Configuration
  vlan_id = 1234

  # Set to false and terraform apply the configuration before destroying to detach vRack Services service endpoint
  vrackservices_attach_to_efs = true

  # OAuth2 and IAM
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

  # MKS Cluster
  mks_cluster_name                    = "my-mks-cluster"
  mks_cluster_node_pool_name          = "default-pool"
  mks_cluster_node_pool_flavor        = "b3-8"
  mks_cluster_node_pool_desired_nodes = 3

  # Network Configuration
  private_network_subnet_cidr             = "10.6.0.0/24"
  private_network_gateway                 = "10.6.0.254"
  vrackservices_subnet_name               = "efs-subnet"
  vrackservices_subnet_service_range_cidr = "10.6.0.0/29"

  # Public Cloud Private Network
  public_cloud_private_network_name        = "mks-private-network"
  public_cloud_private_network_subnet_name = "mks-subnet"
  public_cloud_private_network_subnet_allocation_pools = {
    start = "10.6.0.8"
    end   = "10.6.0.253"
  }

  # Gateway
  public_cloud_gateway_name  = "mks-gateway"
  public_cloud_gateway_model = "s"

  # Cloud Project
  cloud_project_description = "EFS Trident Project"
}
```

### Bestehende Ressourcen verwenden

Das Modul ist so konzipiert, dass es mit Ihrer bestehenden Infrastruktur kompatibel ist. Sie können Ihre OVHcloud Ressourcen verwenden, anstatt neue zu erstellen.

#### Eine bestehende EFS- und vRack Services-Instanz verwenden, die an ein vRack gebunden ist

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  region              = "eu-west-gra"
  public_cloud_region = "GRA9"
  vlan_id             = 1234

  # Use existing EFS
  create_efs = false
  efs_id     = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

  # Use existing vRack Services
  create_vrack_services = false
  vrack_services_id     = "vrs-xyz-789"

  # Use existing vRack
  create_vrack       = false
  vrack_service_name = "pn-1234567"

  # Network Configuration
  # Adjust subnet allocation pool and gateway address if your network configuration differs from example.
  # public_cloud_private_network_subnet_allocation_pools = {
  #   start = "10.7.0.8"
  #   end   = "10.7.0.253"
  # }
  # private_network_gateway = "10.7.0.254"

  # Skip binding since vRack Services is already configured
  bind_vrack_to_vrack_services = false
}
```

#### Einen bestehenden MKS-Cluster verwenden

Dieses Beispiel geht davon aus, dass nur Public Cloud Produkte bereits vorhanden sind: ein MKS-Cluster mit privater Netzwerkanbindung
und ein Gateway, um das Internet zu erreichen, aber kein vRack, EFS oder andere Ressourcen.

```hcl
module "ovh_efs_trident" {
  source = "ovh/efs/ovh//modules/efs-trident"

  region              = "eu-west-gra"
  public_cloud_region = "GRA9"
  vlan_id             = 1234

  # Use existing Cloud Project
  create_cloud_project = false
  cloud_project_id     = "abc123"

  # Use existing Private Network
  create_private_network = false
  private_network_id     = "network-openstack-id"

  # Use existing Subnet
  create_private_subnet = false
  private_subnet_id     = "subnet-id"

  # Skip gateway creation (existing network already has a gateway)
  create_gateway = false

  # Use existing MKS Cluster
  create_mks_cluster = false
  mks_cluster_id     = "cluster-id"

  # Don't create a node pool for MKS cluster
  create_node_pool = false
}
```

### Die Infrastruktur bereitstellen

Erstellen Sie eine Datei `outputs.tf`, die alle Ausgaben des Moduls enthält:

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

Initialisieren Sie Terraform, um die erforderlichen Provider herunterzuladen:

```bash
terraform init
```

Erstellen Sie einen Ausführungsplan, um die Änderungen zu überprüfen:

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan
```

Überprüfen Sie die Ausgabe des Plans, um die Ressourcen zu prüfen, die erstellt werden:

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

Wenden Sie die Konfiguration an, um die Ressourcen zu erstellen:

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
> Die Erstellung der Ressourcen kann mehrere Minuten dauern. Die Erstellung des MKS-Clusters dauert in der Regel am längsten.

### Ausgaben abrufen

Rufen Sie nach der erfolgreichen Bereitstellung die für die Trident-Konfiguration erforderlichen Ausgaben ab:

```bash
terraform output
```

Wichtige Ausgaben sind:

| Ausgabe | Beschreibung |
|--------|-------------|
| `client_id` | OAuth2 Client-ID für das Trident-Backend |
| `client_secret` | OAuth2 Client-Secret (sensibel) |
| `efs_id` | Service-ID des Enterprise File Storage |
| `mks_cluster_id` | ID des MKS-Clusters |
| `kubeconfig` | Kubernetes-Konfigurationsdatei (sensibel) |
| `private_network_subnet_cidr` | Netzwerk-CIDR für die Trident-Backend-Konfiguration |

Um sensible Werte abzurufen:

```bash
terraform output -raw client_secret
terraform output -raw kubeconfig > kubeconfig.yaml
```

### Trident CSI konfigurieren

Nachdem Sie die Infrastruktur mit diesem Modul bereitgestellt haben, konfigurieren Sie Trident CSI, um Enterprise File Storage zu verwenden. Folgen Sie der Anleitung [Erste Schritte mit Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi) für detaillierte Anweisungen.

Verwenden Sie die Ausgaben des Moduls, um das Trident-Backend zu konfigurieren.

Rufen Sie die OAuth2-Anmeldedaten ab:

```bash
export CLIENT_ID=$(terraform output -raw client_id)
export CLIENT_SECRET=$(terraform output -raw client_secret)
```

Erstellen Sie ein Kubernetes-Secret:

> [!warning]
> Falls der Trident-Namespace noch nicht existiert, erstellen Sie ihn mit `kubectl --kubeconfig kubeconfig.yaml create ns trident`.

```bash
kubectl --kubeconfig kubeconfig.yaml create secret generic tbc-ovh-efs-secret \
  --namespace trident \
  --from-literal=clientID="$CLIENT_ID" \
  --from-literal=clientSecret="$CLIENT_SECRET"
```

### Die Infrastruktur zerstören

Bevor Sie die Ressourcen entfernen, löschen Sie zuerst die Verbindung zwischen vRack Services und EFS, falls sie mit Terraform erstellt wurde. Setzen Sie dazu `vrackservices_attach_to_efs = false` und wenden Sie die neue Konfiguration an.

```hcl
module "ovh_efs_trident" {
  [...]
  # Set to false and terraform apply the configuration before destroying to detach vRack Services service endpoint
  vrackservices_attach_to_efs = false
  [...]
}
```

```bash
terraform apply -var-file=secrets.tfvars
```

Sobald vRack Services von EFS getrennt ist, können alle Ressourcen entfernt werden.

Um alle vom Modul erstellten Ressourcen zu entfernen:

> [!warning]
> Dadurch werden alle Ressourcen einschließlich des MKS-Clusters und des EFS-Speichers dauerhaft gelöscht. Stellen Sie sicher, dass Sie alle wichtigen Daten gesichert haben, bevor Sie fortfahren.

```bash
terraform destroy -var-file=secrets.tfvars
```

## Weiterführende Informationen

- [Erste Schritte mit Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi)
- [Enterprise File Storage mit dem OVHcloud Terraform Provider verwalten](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_terraform)
- [Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)
- [Dokumentation zum OVHcloud Terraform Provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
