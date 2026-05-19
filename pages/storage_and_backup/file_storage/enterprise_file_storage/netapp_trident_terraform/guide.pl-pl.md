---
title: Wdrażanie stosu EFS dla Trident CSI z użyciem Terraform
excerpt: Dowiedz się, jak wykorzystać moduł Terraform do wdrożenia stosu infrastruktury dla NetApp Trident CSI z Enterprise File Storage oraz Managed Kubernetes Service
updated: 2026-05-19
---

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak wykorzystać moduł OVHcloud Terraform o nazwie [efs-trident](https://github.com/ovh/terraform-ovh-efs/tree/main/modules/efs-trident) do zainicjowania kompletnego stosu infrastruktury wymaganego do używania [NetApp Trident CSI](https://docs.netapp.com/us-en/trident/index.html) z Enterprise File Storage (EFS).

Moduł automatyzuje tworzenie:

- Usługi **Enterprise File Storage** (EFS)
- Klastra **Managed Kubernetes** (MKS)
- **vRack** oraz **vRack Services** wraz z ich konfiguracją
- Projektu **Public Cloud** ze skonfigurowaną siecią prywatną
- **Polityki IAM** oraz **danych uwierzytelniających OAuth2** do uwierzytelniania backendu pamięci masowej Trident CSI
- Sieciowej **bramy** zapewniającej łączność węzłom klastra MKS z OVHcloud API

**Dowiedz się, jak wdrożyć i skonfigurować infrastrukturę OVHcloud za pomocą Terraform, aby zainicjować woluminy EFS z NetApp Trident CSI.**

## Wymagania początkowe

- [Terraform >= 1.7.0](https://www.terraform.io/)
- [Dostawca OVHcloud Terraform >= v2.12.0](https://github.com/ovh/terraform-provider-ovh/releases/)
- Dostęp do [OVHcloud API](/links/api)
- Konto OVHcloud z uprawnieniami wystarczającymi do utworzenia wymaganych zasobów

## Architektura

Moduł Terraform tworzy następującą infrastrukturę:

![Architektura modułu Terraform](images/terraform-module-architecture.png){.thumbnail}

## Ograniczenia sieciowe

Moduł wymusza następujące ograniczenia:

| Ograniczenie | Opis |
|------------|-------------|
| Ten sam vRack | Cloud Project i vRack Services muszą znajdować się w tym samym vRacku |
| Ten sam region | vRack Services i EFS muszą znajdować się w tym samym regionie |
| Ten sam identyfikator VLAN | Sieć prywatna i podsieć vRack Services muszą używać tego samego identyfikatora VLAN |
| Ten sam CIDR | Sieć prywatna i podsieć vRack Services muszą używać tego samego CIDR |
| Brak nakładania się adresów IP | Pula przydziału podsieci prywatnej nie może nakładać się na zakres CIDR usługi |
| Wymagana brama | Klaster MKS wymaga bramy, aby uzyskać dostęp do OVH API |

## W praktyce

### Skonfiguruj dostawcę OVHcloud Terraform

#### Wygeneruj dane uwierzytelniające API

Dostawca OVHcloud Terraform musi zostać skonfigurowany z tokenem API, aby móc wykonywać wywołania do OVHcloud API.

Twój token API musi posiadać następujące uprawnienia:

- GET, POST, PUT, DELETE w `/storage/netapp/*`
- GET, POST, PUT, DELETE w `/vrack/*`
- GET, POST, PUT, DELETE w `/cloud/project/*`
- GET, POST, PUT, DELETE w `/me/*`
- GET, POST, PUT, DELETE w `/iam/*`
- POST w `/order/*`

Postępuj zgodnie z przewodnikiem [Pierwsze kroki z OVHcloud API](/pages/manage_and_operate/api/first-steps), aby wygenerować swój token API.

**Po wygenerowaniu tokenu zapisz jego informacje do późniejszego użycia z dostawcą OVHcloud Terraform**.

#### Skonfiguruj parametry dostawcy

Utwórz plik `provider.tf` z konfiguracją dostawcy OVHcloud:

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

Następnie utwórz plik `variables.tf` definiujący zmienne, które będą używane wewnątrz plików `.tf`:

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
> Informacja o zmiennej `ovh.endpoint`: domyślnie ustawiona jest wartość `ovh-eu`, ponieważ wykonujemy wywołania do OVHcloud Europe API.
>
> W zależności od potrzeb dostępne są inne punkty końcowe:
>
> - `ovh-eu` dla OVHcloud Europe API
> - `ovh-ca` dla OVHcloud America/Asia API

Utwórz plik `secrets.tfvars` z Twoimi danymi uwierzytelniającymi:

> [!warning]
> Nie zapomnij zastąpić wartości `<application_key>`, `<application_secret>` oraz `<consumer_key>` informacjami z Twojego tokenu API uzyskanego wcześniej.
>

```hcl
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}
```

### Użyj modułu Terraform

#### Minimalna konfiguracja

Utwórz plik `main.tf` używający modułu z minimalnymi wymaganymi parametrami:

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

Ta minimalna konfiguracja tworzy wszystkie zasoby od podstaw z domyślnymi ustawieniami.

> [!primary]
> Zalecamy, aby `region` dla EFS oraz `public_cloud_region` dla MKS były możliwie najbliżej siebie.
>
> Opóźnienia między regionami mogą wpływać na wydajność obciążenia pamięci masowej.
> **Utrzymuj pamięć masową i moc obliczeniową możliwie blisko siebie.**
>
> Na przykład:
>
> - `eu-west-gra` i `GRA9`
> - `eu-west-sbg` i `SBG5`
>
> Zobacz [dokumentację regionów OVHcloud](/links/bare-metal/regions), aby zapoznać się z pełnym mapowaniem.

#### Przykład pełnej konfiguracji

Aby uzyskać pełną kontrolę nad wszystkimi zasobami, użyj pełnej konfiguracji:

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

### Wykorzystaj istniejące zasoby

Moduł został zaprojektowany w taki sposób, aby był kompatybilny z Twoją istniejącą infrastrukturą. Możesz wykorzystać posiadane zasoby OVHcloud zamiast tworzyć nowe.

#### Wykorzystaj istniejący EFS i vRack Services powiązane z vRackiem

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

#### Wykorzystaj istniejący klaster MKS

Ten przykład zakłada, że istnieją wyłącznie produkty Public Cloud: klaster MKS z łącznością prywatnej sieci
oraz brama umożliwiająca dostęp do Internetu, ale bez vRacka, EFS lub innych zasobów.

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

### Wdróż infrastrukturę

Utwórz plik `outputs.tf`, który będzie zawierał wszystkie wyniki modułu:

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

Zainicjuj Terraform, aby pobrać wymaganych dostawców:

```bash
terraform init
```

Utwórz plan wykonania, aby przeanalizować zmiany:

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan
```

Przejrzyj wynik planu, aby zweryfikować zasoby, które zostaną utworzone:

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

Zastosuj konfigurację, aby utworzyć zasoby:

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
> Tworzenie zasobów może zająć kilka minut. Utworzenie klastra MKS zwykle trwa najdłużej.

### Pobierz wyniki

Po pomyślnym wdrożeniu pobierz wyniki potrzebne do konfiguracji Trident:

```bash
terraform output
```

Najważniejsze wyniki obejmują:

| Wynik | Opis |
|--------|-------------|
| `client_id` | Identyfikator klienta OAuth2 dla backendu Trident |
| `client_secret` | Sekret klienta OAuth2 (wrażliwy) |
| `efs_id` | Identyfikator usługi Enterprise File Storage |
| `mks_cluster_id` | Identyfikator klastra MKS |
| `kubeconfig` | Plik konfiguracyjny Kubernetes (wrażliwy) |
| `private_network_subnet_cidr` | CIDR sieci dla konfiguracji backendu Trident |

Aby pobrać wrażliwe wartości:

```bash
terraform output -raw client_secret
terraform output -raw kubeconfig > kubeconfig.yaml
```

### Skonfiguruj Trident CSI

Po wdrożeniu infrastruktury za pomocą tego modułu skonfiguruj Trident CSI tak, aby korzystał z Enterprise File Storage. Postępuj zgodnie z przewodnikiem [Pierwsze kroki z Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi), aby uzyskać szczegółowe instrukcje.

Wykorzystaj wyniki modułu do skonfigurowania backendu Trident.

Pobierz dane uwierzytelniające OAuth2:

```bash
export CLIENT_ID=$(terraform output -raw client_id)
export CLIENT_SECRET=$(terraform output -raw client_secret)
```

Utwórz sekret Kubernetes:

> [!warning]
> Jeśli przestrzeń nazw trident jeszcze nie istnieje, utwórz ją poleceniem `kubectl --kubeconfig kubeconfig.yaml create ns trident`

```bash
kubectl --kubeconfig kubeconfig.yaml create secret generic tbc-ovh-efs-secret \
  --namespace trident \
  --from-literal=clientID="$CLIENT_ID" \
  --from-literal=clientSecret="$CLIENT_SECRET"
```

### Usuń infrastrukturę

Przed usunięciem zasobów, jeśli powiązanie vRack Services z EFS zostało utworzone za pomocą Terraform, najpierw je usuń, ustawiając `vrackservices_attach_to_efs = false` i stosując nową konfigurację.

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

Gdy vRack Services zostanie odłączony od EFS, wszystkie zasoby mogą zostać usunięte.

Aby usunąć wszystkie zasoby utworzone przez moduł:

> [!warning]
> Spowoduje to trwałe usunięcie wszystkich zasobów, w tym klastra MKS i pamięci masowej EFS. Upewnij się, że masz kopię zapasową wszystkich ważnych danych, zanim przejdziesz dalej.

```bash
terraform destroy -var-file=secrets.tfvars
```

## Sprawdź również

- [Pierwsze kroki z Trident CSI](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_trident_csi)
- [Zarządzanie Enterprise File Storage za pomocą dostawcy OVHcloud Terraform](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_terraform)
- [Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)
- [Dokumentacja dostawcy OVHcloud Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs)

Jeśli potrzebujesz szkolenia lub pomocy technicznej przy wdrażaniu naszych rozwiązań, skontaktuj się ze swoim Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).
