---
title: Changing the security update policy on an OVHcloud Managed Kubernetes cluster
slug: change-security-update
excerpt: 'Find out how to change the security update policy on an OVHcloud Managed Kubernetes cluster'
section: User guides
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
 }
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

**Last updated 7th October 2022**

## Objective

The OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. At OVHcloud, we like to provide you with the best products and services. For us, security is important, that's why by default we apply security updates on your Kubernetes clusters. <br>
**Still, you can change the configuration of the security update policy for your cluster. Learn how to do it in this guide.**

## Requirements 

- An OVHcloud Managed Kubernetes cluster

## Instructions

### Configure security update policy through the OVHcloud Control Panel

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

![Access to the administration UI](images/upgrading-kubernetes-version-000.png){.thumbnail}

Click on the `...`{.action} button to the right of your Kubernetes cluster and choose `Manage cluster`{.action}.

![Click on the right end button and choose Manage cluster](images/upgrading-kubernetes-version-001.png){.thumbnail}

On the *Management* section, click on `Change security policy`{.action}.

![Click on Change the security policy](images/change-security-update-002.png){.thumbnail}

A pop-up displays all the options you can have:

- **Do not update**. We do not recommend this choice. OVHcloud reserves the right to update Kubernetes components or your nodes on an exceptional basis, in critical cases that limit the security of our infrastructure.

- **Minimum unavailability**. Apply ('patch version') security updates to my Kubernetes service, to guarantee service security and stability. If we cannot avoid downtime while performing a rolling update on your nodes, we will report this to you. We advise sizing your cluster to ensure that it can be updated at any time.

- **Maximum security**. Apply ('patch version') security updates to my Kubernetes service, to guarantee service security and stability. The update may result in your nodes being unavailable for a few minutes, while we perform the rolling update.

The security policy **Maximum security** is configured by default. Even if we recommand the maximum security, you can choose the security policy that is convenient for you.

Choose one option and click `Confirm`{.action}.

![Click on Confirm](images/change-security-update-004.png){.thumbnail}

### Configure security update policy through Terraform

Since the version 0.20+ of our [OVH Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs), you can configure the security update policy at cluster creation and update also through Terraform.

#### Getting your cluster/API tokens information

The "OVH provider" needs to be configured with a set of credentials:

* an `application_key`
* an `application_secret`
* a `consumer_key`

**Why?**

Because, behind the scenes, the "OVH Terraform provider" is doing requests to OVHcloud APIs. 

In order to retrieve this necessary information, please follow our [First steps with the OVHcloud APIs](https://docs.ovh.com/sg/en/api/first-steps-with-ovh-api/) tutorial.

Specifically, you have to generate these credentials via the [OVHcloud token generation page](https://api.ovh.com/createToken/?GET=/*&POST=/*&PUT=/*&DELETE=/*) with the following rights:

![OVHcloud API rights](images/api-rights.png){.thumbnail}

When you have successfully generated your OVHcloud tokens, please save them as you will have to use them very soon.

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

  update_policy = "NEVER_UPDATE" # "ALWAYS_UPDATE" by default but you can choose also "MINIMAL_DOWNTIME" or "NEVER_UPDATE"
}
```

In this resources configuration, we ask Terraform to create a Kubernetes cluster, in the GRA5 region, using the Kubernetes version 1.24 (the last and recommended version at the time we wrote this tutorial), with a security update policy that equals to "Do not update".

Now we need to initialise Terraform, generate a plan, and apply it.

```bash
$ terraform init

Initializing the backend...

Initializing provider plugins...
- Finding latest version of ovh/ovh...
- Installing ovh/ovh v0.20.0...
- Installed ovh/ovh v0.20.0 (signed by a HashiCorp partner, key ID F56D1A6CBDAAADA5)

Partner and community providers are signed by their developers.
If you'd like to know more about provider signing, you can read about it here:
https://www.terraform.io/docs/cli/plugins/signing.html

Terraform has created a lock file .terraform.lock.hcl to record the provider
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
- Initialise backend (if defined)
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
      + service_name                = "xxxxxxxxxxxxxxxxxxxx"
      + status                      = (known after apply)
      + update_policy               = "NEVER_UPDATE"
      + url                         = (known after apply)
      + version                     = "1.24"
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
      + service_name                = "xxxxxxxxxxxxxxxxxxxx"
      + status                      = (known after apply)
      + update_policy               = "NEVER_UPDATE"
      + url                         = (known after apply)
      + version                     = "1.24"
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
ovh_cloud_project_kube.cluster: Still creating... [3m30s elapsed]
ovh_cloud_project_kube.cluster: Still creating... [3m40s elapsed]
ovh_cloud_project_kube.cluster: Creation complete after 3m47s [id=76db2764-58d2-4384-b17f-ab38b0c7fc78]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

#### Update

Because security is important, if you want to update the security policy, you can also do it through Terraform. Edit the `ovh_kube_cluster.tf` file with this content:

```bash
resource "ovh_cloud_project_kube" "cluster" {
  service_name = var.service_name
  name         = "my-super-cluster"
  region       = "GRA5"
  version      = "1.24"

  update_policy = "ALWAYS_UPDATE" # "ALWAYS_UPDATE" by default but you can choose also "MINIMAL_DOWNTIME" or "NEVER_UPDATE"
}
```

And apply it:

```bash
$ terraform apply
ovh_cloud_project_kube.cluster: Refreshing state... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  ~ update in-place

Terraform will perform the following actions:

  # ovh_cloud_project_kube.cluster will be updated in-place
  ~ resource "ovh_cloud_project_kube" "cluster" {
        id                          = "xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
        name                        = "my-super-cluster"
      ~ update_policy               = "NEVER_UPDATE" -> "ALWAYS_UPDATE"
        # (10 unchanged attributes hidden)
    }

Plan: 0 to add, 1 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_cloud_project_kube.cluster: Modifying... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx]
ovh_cloud_project_kube.cluster: Modifications complete after 1s [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx]

Apply complete! Resources: 0 added, 1 changed, 0 destroyed.
```

#### Destroy

If you want to delete the Kubernetes cluster you added through Terraform, you have to execute the `terraform destroy` command:

```bash
$ terraform destroy
ovh_cloud_project_kube.cluster: Refreshing state... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_cloud_project_kube.cluster will be destroyed
  - resource "ovh_cloud_project_kube" "cluster" {
      - control_plane_is_up_to_date = true -> null
      - id                          = "xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" -> null
      - is_up_to_date               = true -> null
      - kubeconfig                  = (sensitive value)
      - name                        = "my-super-cluster" -> null
      - next_upgrade_versions       = [] -> null
      - nodes_url                   = "xxxxxx.nodes.c3.gra.k8s.ovh.net" -> null
      - region                      = "GRA5" -> null
      - service_name                = "xxxxxxxxxxxxxxxxx" -> null
      - status                      = "READY" -> null
      - update_policy               = "ALWAYS_UPDATE" -> null
      - url                         = "xxxxxx.c3.gra.k8s.ovh.net" -> null
      - version                     = "1.24" -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_cloud_project_kube.cluster: Destroying... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx]
ovh_cloud_project_kube.cluster: Still destroying... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx, 10s elapsed]
ovh_cloud_project_kube.cluster: Still destroying... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx, 20s elapsed]
ovh_cloud_project_kube.cluster: Still destroying... [id=xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx, 30s elapsed]
ovh_cloud_project_kube.cluster: Destruction complete after 37s

Destroy complete! Resources: 1 destroyed.
```

## Go further

To have an overview of the OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

To learn more about how to use your Kubernetes cluster the practical way, we invite you to look at our [tutorials](../).

Join our [community of users](https://community.ovh.com/en/).
