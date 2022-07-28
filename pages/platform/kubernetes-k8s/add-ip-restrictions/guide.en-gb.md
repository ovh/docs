---
title: Add IP restrictions on an OVHcloud Managed Kubernetes cluster
slug: add-ip-restrictions
excerpt: 'Find out how to add IP restrictions/manage access to the API server of an OVHcloud Managed Kubernetes cluster'
section: User guides
---

**Last updated 28th July 2022**

## Objective

The OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

This guide will cover the feature that allows you to manage access to the API server of your OVHcloud Managed Kubernetes cluster. Thanks to that you can add IP restrictions in a cluster.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An OVHcloud Managed Kubernetes cluster

## Instructions

### Add IP restrictions through the OVHcloud Control Panel

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

![Clusters](images/clusters.png){.thumbnail}

Click on your Kubernetes cluster.

![Your Kubernetes cluster](images/cluster.png){.thumbnail}

Click the `APIServer access`{.action} tab or the *Modify limitations* link.

![APIServer access](images/apiserver_access.png){.thumbnail}

Click the `+ Add a new limitation`{.action} button.

Enter an IPv4 range in the *Authorised clients* input field and then click the `✔️`{.action} button.
You can add one or several IP ranges.

![Add IP restriction to a Kubernetes cluster](images/add-ip-restriction.png){.thumbnail}

> [!primary]
>
> If there are no Authorised clients IPs, it means that no restriction is applied.

### Add IP restrictions through Terraform

Since the version 0.19+ of our [OVH Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs) you can add IP restrictions also through Terraform.

#### Getting your cluster/API tokens information

The "OVH provider" needs to be configured with a set of credentials:

* an `application_key`
* an `application_secret`
* a `consumer_key`

**Why?**

Because, behind the scenes, the "OVH Terraform provider" is doing requests to OVHcloud APIs. 

In order to retrieve this necessary information, please follow our [First steps with the OVHcloud APIs](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/) tutorial.

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

Then, define the resources you want to create in a new file called `ovh_kube_cluster_iprestrictions.tf`:

```bash
resource "ovh_cloud_project_kube_iprestrictions" "iprestrictions" {
	service_name  = <service_name>
	kube_id       = <cluster_id>
    ips           = ["<your_IP_range>"]
}
```

> [!primary]
>
> Don't forget to replace `<service_name>`, `<cluster_id>` and `<your_IP_range>` by the real data.

In this resources configuration, we ask Terraform to add an IP restriction to your Kubernetes cluster.

Now we need to initialise Terraform, generate a plan, and apply it.

```bash
$ terraform init

Initializing the backend...

Initializing provider plugins...
- Finding latest version of ovh/ovh...
- Finding latest version of hashicorp/local...
- Installing ovh/ovh v0.19.1...
- Installed ovh/ovh v0.19.1 (signed by a HashiCorp partner, key ID F56D1A6CBDAAADA5)
- Installing hashicorp/local v2.2.3...
- Installed hashicorp/local v2.2.3 (signed by HashiCorp)

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

  # ovh_cloud_project_kube_iprestrictions.iprestrictions will be created
  + resource "ovh_cloud_project_kube_iprestrictions" "iprestrictions" {
      + id           = (known after apply)
      + ips          = [
          + "10.42.0.0/16",
        ]
      + kube_id      = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      + service_name = "a123a4e56b789c4a123a4e56b789c4"
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

  # ovh_cloud_project_kube_iprestrictions.iprestrictions will be created
  + resource "ovh_cloud_project_kube_iprestrictions" "iprestrictions" {
      + id           = (known after apply)
      + ips          = [
          + "10.42.0.0/16",
        ]
      + kube_id      = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      + service_name = "a123a4e56b789c4a123a4e56b789c4"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_cloud_project_kube_iprestrictions.iprestrictions: Creating...
ovh_cloud_project_kube_iprestrictions.iprestrictions: Creation complete after 6s [id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

#### Destroy

If you want to delete the IP restrictions you added it through Terraform, have to execute `terraform destroy` command:

```bash
$ terraform destroy
ovh_cloud_project_kube_iprestrictions.iprestrictions: Refreshing state... [id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_cloud_project_kube_iprestrictions.iprestrictions will be destroyed
  - resource "ovh_cloud_project_kube_iprestrictions" "iprestrictions" {
      - id           = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" -> null
      - ips          = [
          - "10.42.0.0/16",
        ] -> null
      - kube_id      = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" -> null
      - service_name = "a123a4e56b789c4a123a4e56b789c4" -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_cloud_project_kube_iprestrictions.iprestrictions: Destroying... [id=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
ovh_cloud_project_kube_iprestrictions.iprestrictions: Destruction complete after 6s

Destroy complete! Resources: 1 destroyed.
```

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/).

Join our community of users on <https://community.ovh.com/en/>.
