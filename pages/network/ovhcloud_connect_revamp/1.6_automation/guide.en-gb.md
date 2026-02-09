# Automation (API, CLI & Terraform)

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

# Example: Declare an OVHcloud Connect resource
# Check the Terraform Registry for exact resource names and attributes
resource "ovh_vrack_cloudconnect" "my_connect" {
  service_name = "vrack-abc123"
  connect_id   = "ovhcloudconnect-xyz789"
}
```

> **Note:** Resource names and attributes may change between provider versions. Always refer to the [Terraform Registry documentation](https://registry.terraform.io/providers/ovh/ovh/latest/docs) for the latest resource definitions.

### Terraform workflow

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="100" fill="#f8f9fa" rx="8"/>

  <rect x="20" y="25" width="120" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="80" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Write .tf files</text>

  <rect x="175" y="25" width="120" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="235" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">terraform init</text>

  <rect x="330" y="25" width="120" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="390" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">terraform plan</text>

  <rect x="485" y="25" width="120" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="545" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">terraform apply</text>

  <line x1="140" y1="50" x2="175" y2="50" stroke="#555" stroke-width="1.5" marker-end="url(#a3)"/>
  <line x1="295" y1="50" x2="330" y2="50" stroke="#555" stroke-width="1.5" marker-end="url(#a3)"/>
  <line x1="450" y1="50" x2="485" y2="50" stroke="#555" stroke-width="1.5" marker-end="url(#a3)"/>

  <defs>
    <marker id="a3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

1. **Write** your `.tf` files defining OVHcloud Connect resources.
2. **`terraform init`** — Downloads the OVH provider plugin.
3. **`terraform plan`** — Reviews changes before applying.
4. **`terraform apply`** — Creates or updates the resources.

## Best practices for automation

- **Version control** — Store all scripts and Terraform files in Git.
- **Separate environments** — Use different workspaces or state files for dev, staging, and production.
- **Test first** — Validate changes in a non-production environment before applying to production.
- **Monitor** — Add validation steps after automation (check BGP session is up, VLANs are present, run test pings).
- **Keep secrets safe** — Use environment variables, CI/CD secret stores, or a vault; never commit credentials.

## Useful links

| Resource | URL |
|---|---|
| OVHcloud API Console | [eu.api.ovh.com/console](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1) |
| OVH Python SDK | [github.com/ovh/python-ovh](https://github.com/ovh/python-ovh) |
| OVH Node.js SDK | [github.com/ovh/node-ovh](https://github.com/ovh/node-ovh) |
| OVH Go SDK | [github.com/ovh/go-ovh](https://github.com/ovh/go-ovh) |
| OVH Terraform Provider | [registry.terraform.io/providers/ovh/ovh](https://registry.terraform.io/providers/ovh/ovh/latest) |
| OVH Terraform GitHub | [github.com/ovh/terraform-provider-ovh](https://github.com/ovh/terraform-provider-ovh) |
