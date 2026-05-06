---
title: 'Automate OVHcloud Connect with API, CLI, and Terraform'
excerpt: 'Discover how to manage OVHcloud Connect programmatically using the API, CLI, and Terraform'
updated: 2026-02-18
---

## Objective

OVHcloud Connect can be managed programmatically using the OVHcloud API, command-line tools, and Terraform. Automation reduces manual errors, speeds up provisioning, and makes your infrastructure repeatable and version-controlled.

## OVHcloud API

The OVHcloud API provides RESTful endpoints for all OVHcloud Connect operations: ordering, configuring, monitoring, and cancelling connections.

**API Console:** [https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1)

### Key API endpoints

| Endpoint | Description |
|---|---|
| `GET /ovhCloudConnect` | List all your OVHcloud Connect services |
| `GET /ovhCloudConnect/{serviceName}` | Get details of a specific service |
| `GET /ovhCloudConnect/{serviceName}/config/pop` | List PoP configurations |
| `POST /ovhCloudConnect/{serviceName}/config/pop` | Create a new PoP configuration |
| `GET /ovhCloudConnect/{serviceName}/serviceInfos` | Get service metadata and billing info |

### Getting started with the API

1. **Create API credentials** — Go to [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/) and generate an Application Key, Application Secret, and Consumer Key.
2. **Choose an SDK** — OVHcloud provides official API wrappers in multiple languages:
   - **Python:** [github.com/ovh/python-ovh](https://github.com/ovh/python-ovh)
   - **Node.js:** [github.com/ovh/node-ovh](https://github.com/ovh/node-ovh)
   - **Go:** [github.com/ovh/go-ovh](https://github.com/ovh/go-ovh)
   - **PHP:** [github.com/ovh/php-ovh](https://github.com/ovh/php-ovh)
   - **C#:** [github.com/ovh/csharp-ovh](https://github.com/ovh/csharp-ovh)
3. **Make your first call** — Example in Python:

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

> **Security tip:** Never hard-code your API credentials. Use environment variables, a configuration file (`ovh.conf`), or a secrets manager (e.g. HashiCorp Vault, CI/CD secrets).

## Command-Line Interface (CLI)

While there is no dedicated OVHcloud CLI binary for OVHcloud Connect, you can use the API wrappers in a scripting context or build lightweight CLI scripts using the SDKs above.

Example: a quick bash script using `curl` and the OVHcloud API signing mechanism:

```bash
# Simplified example — use an SDK for proper signature handling
curl -X GET \
  -H "X-Ovh-Application: YOUR_APP_KEY" \
  -H "X-Ovh-Consumer: YOUR_CONSUMER_KEY" \
  -H "X-Ovh-Timestamp: $(date +%s)" \
  -H "X-Ovh-Signature: \$1\$..." \
  "https://eu.api.ovh.com/1.0/ovhCloudConnect"
```

> In practice, using the Python or Node.js SDK is much simpler than manual signing.

## Terraform

Terraform allows you to define your OVHcloud Connect infrastructure as code. This is ideal for repeatable deployments, version control, and collaboration.

### OVH Terraform Provider

- **Terraform Registry:** [registry.terraform.io/providers/ovh/ovh](https://registry.terraform.io/providers/ovh/ovh/latest)
- **GitHub:** [github.com/ovh/terraform-provider-ovh](https://github.com/ovh/terraform-provider-ovh)

### Example Terraform configuration

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

> **Note:** Resource names and attributes may change between provider versions. Always refer to the [Terraform Registry documentation](https://registry.terraform.io/providers/ovh/ovh/latest/docs) for the latest resource definitions.

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
