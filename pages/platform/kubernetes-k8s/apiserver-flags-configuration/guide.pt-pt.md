---
title: Configuring the API server flags on an OVHcloud Managed Kubernetes cluster
slug: apiserver-flags-configuration
excerpt: 'Find out how to configure the managed components of your Kubernetes: CoreDNS, IPVS, and even API server admission plugins on an OVHcloud Managed Kubernetes cluster'
section: User guides
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/apiserver-flags-configuration/'
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }q
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 25th November 2022**

## Objective

The OVHcloud Managed Kubernetes service provides you with Kubernetes clusters without the hassle of installing or operating them. 
At OVHcloud, we like to provide you with the best products and services, which is why we give you the ability to customize the managed components of your Kubernetes: CoreDNS, IPVS, and even [API server admission plugins](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/) to enable and disable on your OVHcloud Managed Kubernetes clusters.

In this guide, we will show you how to enable and disable API server admission plugins, but you can follow the guide for other customizations to the OVHcloud Managed Kubernetes cluster configuration.

## Requirements 

- An OVHcloud Managed Kubernetes cluster

## Instructions

> [!warning]
> Only the `AlwaysPullImages` admission plugin is customizable for the moment. It is enabled by default for security purposes, but can be disabled to prevent overuse of docker registries (e.g. to avoid reaching the Docker Hub download rate limit).  
> The `NodeRestriction` admission plugin is enabled by default and must stay enabled for security purposes.

### Configure the API server admission plugins through the API

#### The API Explorer

To simplify things, we are using the [API Explorer](https://api.ovh.com/), which allows to explore, learn and interact with the API in an interactive way.

Log in to the API Explorer using your OVH NIC.

![Log in to the API Explorer](images/kubernetes-quickstart-api-ovh-com-001.png){.thumbnail}

If you go to the [Kubernetes section](https://api.ovh.com/console/#/kube) of the API Explorer, you will see the available endpoints:

![Kubernetes section of the API Explorer](images/kubernetes-quickstart-api-ovh-com-002.png){.thumbnail}

#### API endpoints

- Get an existing cluster's customization:

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/kube/{kubeID}/customization
>

**Result:**
```json
{
    "apiServer": {
        "admissionPlugins": {
            "disabled": [],
            "enabled": ["AlwaysPullImages", "NodeRestriction"]
        }
    }
}
```

- Update an existing cluster's customization to disable the "AlwaysPullImages" admission plugin (e.g. in order to avoid our kubelet agents from reaching the Docker Hub download rate limit):

> [!api]
>
> @api {PUT} /cloud/project/{serviceName}/kube/{kubeID}/customization
>

```json
{
    "apiServer": {
        "admissionPlugins": {
            "enabled": ["NodeRestriction"],
            "disabled": ["AlwaysPullImages"]
        }
    }
}
```

- Create a Kubernetes cluster in the GRA5 region while disabling the "AlwaysPullImages" admission plugin:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/kube
>

```json
{
    "region": "GRA5",
    "name": "my-super-cluster",
    "customization": {
        "apiServer": {
            "admissionPlugins": {
                "enabled": ["NodeRestriction"],
                "disabled": ["AlwaysPullImages"]
            }
        }
    }
}
```

- Reset an existing cluster while disabling the "AlwaysPullImages" admission plugin:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/kube/{kubeID}/reset
>

```json
{
    "customization": {
        "apiServer": {
            "admissionPlugins": {
                "enabled": ["NodeRestriction"],
                "disabled": ["AlwaysPullImages"]
            }
        }
    }
}
```

### Configure the API server admission plugins through Terraform

Since the version 0.21+ of our [OVH Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs), you can configure your Kubernetes cluster (API server flags, CoreDNS, IPVS ...) through Terraform.

#### Getting your cluster/API tokens information

The "OVH provider" needs to be configured with a set of credentials:

* an `application_key`
* an `application_secret`
* a `consumer_key`

**Why?**

Because, behind the scenes, the "OVH Terraform provider" is doing requests to OVHcloud APIs. 

In order to retrieve this necessary information, please follow our [First steps with the OVHcloud APIs](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/) tutorial.

Specifically, you have to generate these credentials via the [OVHcloud token generation page](https://api.ovh.com/createToken/?GET=/*&POST=/*&PUT=/*&DELETE=/*) with the following rights:

![OVHcloud API rights](images/api-rights.png){.thumbnail}

When you have successfully generated your OVHcloud tokens, please save them as you will need to use them very soon.

The last needed information is the `service_name`: it is the ID of your Public Cloud project.

**How to get it?**

In the Public Cloud section, you can retrieve your service name ID thanks to the `Copy to clipboard`{.action} button.

![Copy paste service name](images/get-service-name.png){.thumbnail}

You will also use this information in Terraform resources definition files.

#### Terraform instructions

First, create a `provider.tf` file with the minimum version, european endpoint ("ovh-eu") and the keys previously retrieved in this guide.

Terraform 0.13 and later:

```bash
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
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

Terraform 0.12 and earlier:

```bash
# Configure the OVHcloud Provider
provider "ovh" {
  endpoint           = "ovh-eu"
  application_key    = "<your_access_key>"
  application_secret = "<your_application_secret>"
  consumer_key       = "<your_consumer_key>"
}
```

Alternatively the secret keys can be retrieved from your environment.

- `OVH_ENDPOINT`
- `OVH_APPLICATION_KEY`
- `OVH_APPLICATION_SECRET`
- `OVH_CONSUMER_KEY`

This later method (or a similar alternative) is recommended to avoid storing secret data in a source repository.

Here, we defined the `ovh-eu` endpoint because we want to call the OVHcloud Europe API, but other endpoints exist, depending on your needs:

* `ovh-eu` for OVHcloud Europe API
* `ovh-us` for OVHcloud US API
* `ovh-ca` for OVHcloud North-America API

Then, create a `variables.tf` file with service_name:

```bash
variable service_name {
  type        = string
  default     = "<your_service_name>"
}
```

Define the resources you want to create in a new file called `ovh_kube_cluster.tf`:

```bash
resource "ovh_cloud_project_kube" "cluster" {
  service_name = var.service_name
  name         = "my-super-cluster"
  region       = "GRA5"
  version      = "1.24"

  customization {
    apiserver {
      admissionplugins{
        enabled = ["NodeRestriction"]
        disabled = ["AlwaysPullImages"]
      }
    }
  }
}
```

In this resources configuration, we ask Terraform to create a Kubernetes cluster, in the GRA5 region, using the Kubernetes version 1.24, while disabling the "AlwaysPullImages" admission plugin (e.g. in order to avoid our kubelet agents from reaching the Docker Hub download rate limit).

Now we need to initialise Terraform, generate a plan, and apply it.

```bash
$ terraform init

Initializing the backend...

Initializing provider plugins...
- Finding latest version of ovh/ovh...
- Installing ovh/ovh v0.21.0...
- Installed ovh/ovh v0.21.0 (signed by a HashiCorp partner, key ID F56D1A6CBDAAADA5)

Partner and community providers are signed by their developers.
If you'd like to know more about provider signing, you can read about it here:
<https://www.terraform.io/docs/cli/plugins/signing.html>

Terraform has created a lock file `.terraform.lock.hcl` to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

The `init` command will initialize your working directory which contains `.tf` configuration files.

It’s the first command to execute for a new configuration, or after doing a checkout of an existing configuration in a given git repository for example.

The `init` command will:

- Download and install Terraform providers/plugins
- Initialize the backend (if defined)
- Download and install modules (if defined)

Now, we can generate our plan:

```bash
$ terraform plan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_cloud_project_kube.cluster will be created
  + resource "ovh_cloud_project_kube" "cluster" {
      + control_plane_is_up_to_date = (known after apply)
      + id                          = (known after apply)
      + is_up_to_date               = (known after apply)
      + kubeconfig                  = (sensitive value)
      + name                        = "my-super-cluster"
      + next_upgrade_versions       = (known after apply)
      + nodes_url                   = (known after apply)
      + region                      = "GRA5"
      + service_name                = "xxxxxxxxxxxxxxxxxxxxx"
      + status                      = (known after apply)
      + update_policy               = (known after apply)
      + url                         = (known after apply)
      + version                     = "1.24"

      + customization {
          + apiserver {
              + admissionplugins {
                  + disabled = [
                      + "AlwaysPullImages",
                    ]
                  + enabled  = [
                      + "NodeRestriction",
                    ]
                }
            }
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't guarantee to take exactly these actions if you run "terraform apply" now.
```

Thanks to the `plan` command, we can check what Terraform wants to create, modify or remove.

The plan is OK for us, so let's apply it:

```bash
$ terraform apply

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_cloud_project_kube.cluster will be created
  + resource "ovh_cloud_project_kube" "cluster" {
      + control_plane_is_up_to_date = (known after apply)
      + id                          = (known after apply)
      + is_up_to_date               = (known after apply)
      + kubeconfig                  = (sensitive value)
      + name                        = "my-super-cluster"
      + next_upgrade_versions       = (known after apply)
      + nodes_url                   = (known after apply)
      + region                      = "GRA5"
      + service_name                = "xxxxxxxxxxxxxxxxxxxxx"
      + status                      = (known after apply)
      + update_policy               = (known after apply)
      + url                         = (known after apply)
      + version                     = "1.24"

      + customization {
          + apiserver {
              + admissionplugins {
                  + disabled = [
                      + "AlwaysPullImages",
                    ]
                  + enabled  = [
                      + "NodeRestriction",
                    ]
                }
            }
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_cloud_project_kube.cluster: Creating...
ovh_cloud_project_kube.cluster: Still creating... [10s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [20s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [30s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [40s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [50s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m0s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m10s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m20s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m30s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m40s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [1m50s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m0s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m10s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m20s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m30s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m40s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [2m50s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [3m0s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [3m10s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [3m20s elapsed]
ovh_cloud_project_kube.cluster: Creation complete after 3m23s [id=xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

#### Destroy

If you want to delete the Kubernetes cluster you added through Terraform, you have to execute the `terraform destroy` command:

```bash
$ terraform destroy
ovh_cloud_project_kube.cluster: Refreshing state... [id=xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_cloud_project_kube.cluster will be destroyed
  - resource "ovh_cloud_project_kube" "cluster" {
      - control_plane_is_up_to_date = true -> null
      - id                          = "xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx" -> null
      - is_up_to_date               = true -> null
      - kubeconfig                  = (sensitive value)
      - name                        = "my-super-cluster" -> null
      - next_upgrade_versions       = [] -> null
      - nodes_url                   = "xxxxxx.nodes.c2.gra.k8s.ovh.net" -> null
      - region                      = "GRA5" -> null
      - service_name                = "xxxxxxxxxxxxxxxxxxxxx" -> null
      - status                      = "READY" -> null
      - update_policy               = "ALWAYS_UPDATE" -> null
      - url                         = "xxxxxx.c2.gra.k8s.ovh.net" -> null
      - version                     = "1.24" -> null

      - customization {
          - apiserver {
              - admissionplugins {
                  - disabled = [
                      - "AlwaysPullImages",
                    ] -> null
                  - enabled  = [
                      - "NodeRestriction",
                    ] -> null
                }
            }
        }
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_cloud_project_kube.cluster: Destroying... [id=xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx]
ovh_cloud_project_kube.cluster: Still destroying... [id=xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx, 10s elapsed]
ovh_cloud_project_kube.cluster: Still destroying... [id=xxxxxxxxx-xxxx-xxxx-XXXX-xxxxxxxxxx, 20s elapsed]
ovh_cloud_project_kube.cluster: Destruction complete after 26s

Destroy complete! Resources: 1 destroyed.
```

## Go further

To have an overview of the OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

To learn more about how to use your Kubernetes cluster the practical way, we invite you to look at our [tutorials](../).

Join our [community of users](https://community.ovh.com/en/).
