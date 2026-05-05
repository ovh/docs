---
title: 'OVHcloud Connect - Automatisation (API, CLI et Terraform)'
excerpt: 'Découvrez comment administrer OVHcloud Connect de manière programmatique via l''API, la CLI et Terraform'
updated: 2026-02-18
---

## Objectif

OVHcloud Connect peut être administré de manière programmatique via l'API OVHcloud, des outils en ligne de commande et Terraform. L'automatisation réduit les erreurs manuelles, accélère le provisionnement et rend votre infrastructure reproductible et versionnée.

## API OVHcloud

L'API OVHcloud fournit des endpoints RESTful pour toutes les opérations OVHcloud Connect : commande, configuration, supervision et résiliation des connexions.

**Console API :** [https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1)

### Principaux endpoints API

| Endpoint | Description |
|---|---|
| `GET /ovhCloudConnect` | Lister tous vos services OVHcloud Connect |
| `GET /ovhCloudConnect/{serviceName}` | Obtenir les détails d'un service spécifique |
| `GET /ovhCloudConnect/{serviceName}/config/pop` | Lister les configurations de PoPs |
| `POST /ovhCloudConnect/{serviceName}/config/pop` | Créer une nouvelle configuration de PoP |
| `GET /ovhCloudConnect/{serviceName}/serviceInfos` | Obtenir les métadonnées du service et les informations de facturation |

### Premiers pas avec l'API

1. **Créez des identifiants API** — Rendez-vous sur [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/) et générez une Application Key, une Application Secret et une Consumer Key.
2. **Choisissez un SDK** — OVHcloud propose des wrappers d'API officiels dans plusieurs langages :
   - **Python :** [github.com/ovh/python-ovh](https://github.com/ovh/python-ovh)
   - **Node.js :** [github.com/ovh/node-ovh](https://github.com/ovh/node-ovh)
   - **Go :** [github.com/ovh/go-ovh](https://github.com/ovh/go-ovh)
   - **PHP :** [github.com/ovh/php-ovh](https://github.com/ovh/php-ovh)
   - **C# :** [github.com/ovh/csharp-ovh](https://github.com/ovh/csharp-ovh)
3. **Effectuez votre premier appel** — Exemple en Python :

```python
import ovh

client = ovh.Client(
    endpoint='ovh-eu',
    # Configure via environment variables or ovh.conf file:
    # OVH_APPLICATION_KEY, OVH_APPLICATION_SECRET, OVH_CONSUMER_KEY
)

# List all OVHcloud Connect services
services = client.get('/ovhCloudConnect')
print(services)
```

> **Conseil de sécurité :** ne codez jamais en dur vos identifiants API. Utilisez des variables d'environnement, un fichier de configuration (`ovh.conf`) ou un gestionnaire de secrets (par exemple HashiCorp Vault, secrets CI/CD).

## Interface en ligne de commande (CLI)

Bien qu'il n'existe pas de binaire CLI OVHcloud dédié à OVHcloud Connect, vous pouvez utiliser les wrappers d'API dans un contexte de scripting ou créer des scripts CLI légers à l'aide des SDKs ci-dessus.

Exemple : un rapide script bash utilisant `curl` et le mécanisme de signature de l'API OVHcloud :

```bash
# Simplified example — use an SDK for proper signature handling
curl -X GET \
  -H "X-Ovh-Application: YOUR_APP_KEY" \
  -H "X-Ovh-Consumer: YOUR_CONSUMER_KEY" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: \$1\$..." \
  "https://eu.api.ovh.com/1.0/ovhCloudConnect"
```

> En pratique, utiliser le SDK Python ou Node.js est bien plus simple que de gérer la signature manuellement.

## Terraform

Terraform vous permet de définir votre infrastructure OVHcloud Connect en tant que code. C'est idéal pour des déploiements reproductibles, le versioning et la collaboration.

### Provider Terraform OVH

- **Terraform Registry :** [registry.terraform.io/providers/ovh/ovh](https://registry.terraform.io/providers/ovh/ovh/latest)
- **GitHub :** [github.com/ovh/terraform-provider-ovh](https://github.com/ovh/terraform-provider-ovh)

### Exemple de configuration Terraform

```hcl
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = ">= 2.7.0"
    }
  }
}

provider "ovh" {
  endpoint = "ovh-eu"
  # Credentials from environment variables:
  # OVH_APPLICATION_KEY, OVH_APPLICATION_SECRET, OVH_CONSUMER_KEY
}

# Example: Associate an OVHcloud Connect service with a vRack
# Check the Terraform Registry for exact resource names and attributes
resource "ovh_vrack_ovhcloudconnect" "my_connect" {
  service_name      = "vrack-abc123"
  ovh_cloud_connect = "ovhcloudconnect-xyz789"
}
```

> **Remarque :** les noms de ressources et attributs peuvent évoluer entre les versions du provider. Référez-vous toujours à la [documentation du Terraform Registry](https://registry.terraform.io/providers/ovh/ovh/latest/docs) pour les définitions de ressources les plus récentes.

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
