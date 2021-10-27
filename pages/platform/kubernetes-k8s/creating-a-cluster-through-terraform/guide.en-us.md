---
title: Creating a cluster through Terraform
slug: creating-a-cluster-through-terraform
excerpt: 'Creates a Kubernetes cluster through Terraform'
section: Getting started
---

**Last updated 27th October 2021**

## Objective

Creating a OVHcloud Managed Kubernetes cluster through the OVHcloud Control Panel is cool but do you know you can deploy a cluster programmatically, with Terraform?

## Terraform

[Terraform](https://www.terraform.io/), is an open-source infrastructure as code (IaC) tool created by [Hashicorp](https://www.hashicorp.com/) in 2014, written in Go. It aims to build, change and version control your infrastructure. You can define and provision your infrastructure by writing the definition of your resources in Hashicorp Configuration Language (HCL).

This tool have a powerful and very intuitive command line interface (CLI).
If you are interested to leverage your knowledge about Terraform CLI, a [Cheat Sheet](https://github.com/scraly/terraform-cheat-sheet/blob/master/terraform-cheat-sheet.pdf){.external} exists.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-us/public-cloud/) in your OVHcloud account
- [Install Terraform CLI](https://www.terraform.io/downloads.html){.external}

## Before you begin

* You should have installed Terraform CLI, version 0.12.x minimum, in your machine. You can install it with [detailed installation instructions](){.external} or with [tfenv](https://github.com/tfutils/tfenv){.external} tool.

## OVHcloud Terraform provider

![Terraform](images/ovh-loves-terraform.png){.thumbnail}

In order to create a Kubernetes cluster, and others resources, OVHcloud provides a [Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest){.external} which is available in the official Terraform registry.

All available resources and data sources have their definition and documentation.

In this guide, we will create two resources:
* a [cloud_project_kube](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_kube){.external}, that represent a OVH managed Kubernetes cluster
* and a [cloud_project_kube_nodepool](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_kube_nodepool){.external}, that represent a Kubernetes Node Pool

![Kubernetes cluster and node pool](images/cluster-and-node-pool.png){.thumbnail}

## Getting your cluster/API tokens information

The OVH provider needs to be configured with a set of credentials:

* an `application_key`
* an `application_secret`
* a `consumer_key`

Why?

Because, behind the scene, the OVH Terraform provider is doing requests to OVHcloud APIs. 

In order to retrieve theses needed informations, please follow [First steps with the OVHcloud APIs](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/) tutorial.

When you have successfully generated your OVH tokens, please keep them. You'll have to defined them in the coming minutes ;-).

A latest needed information, is the `service_name`: it is the ID of your Public Cloud project.

How to get it?

In Public Cloud section, you can retrieve your service name ID thanks to `Copy to clipboard`{.action} button.

![Copy paste service name](images/get-service-name.png){.thumbnail}

You will also use this information in Terraform resources definition files.

## Instructions 

When you want to manage (create, modify, and remove) your infrastructure, getting started with Terraform is easy.
Just create files ending with `.tf` containing the description of the resources you want to have.

In our case, we want to create:
* a OVHcloud managed Kubernetes cluster
* a nodepool

So, let's start!

### Resources definition

First, create a `provider.tf` file with the minimum version, european endpoint ("ovh-eu") and keys you got in this guide previously.

```
# Configure the OVHcloud Provider
provider "ovh" {
  version            = "~> 0.11"
  endpoint           = "ovh-eu"
  application_key    = "<your_access_key>"
  application_secret = "<your_application_secret>"
  consumer_key       = "<your_consumer_key>"
}
```

Here, we defined `ovh-eu` endpoint, because we want to call OVHcloud Europe API, but another endpoints exists depending on your needs:

* `ovh-eu` for OVHcloud Europe API
* `ovh-us` for OVHcloud US API
* `ovh-ca` for OVHcloud North-America API

Then, create a `variables.tf` with service_name:

```
variable service_name {
  type        = string
  default     = "<your_service_name>"
}
```

Define the resources you want to create in a new file called `ovh_kube_cluster.tf`:

```
resource "ovh_cloud_project_kube" "my_kube_cluster" {
   service_name = "${var.service_name}"
   name         = "my_kube_cluster"
   region       = "GRA7"
   version      = "1.22"
}

resource "ovh_cloud_project_kube_nodepool" "node_pool" {
   service_name  = "${var.service_name}"
   kube_id       = ovh_cloud_project_kube.my_kube_cluster.id
   name          = "my-pool" //Warning: "_" char is not allowed!
   flavor_name   = "b2-7"
   desired_nodes = 3
   max_nodes     = 3
   min_nodes     = 3
}
```

In this resources definition, we ask to Terraform to create a Kubernetes cluster, in GRA7 region, with the Kubernetes version equals to 1.22 (the last and recommended version at the time we wrote this tutorial).
And we tell Terraform to create a Node Pool with 3 Nodes with B2-7 machine type.

Finally, create a `output.tf` file with the following content:

```
output "kubeconfig" {
  value = ovh_cloud_project_kube.my_kube_cluster.kubeconfig
}
```

With this output, we tell Terraform to retrieve the `kubeconfig file` content. This information is needed to connect to the new Kubernetes cluster.

For your information, outputs are useful to retrieve and display specific informations after the resources creation.

Your code organization should be like this: 

```
.
├── data.tf
├── output.tf
├── ovh_kube_cluster.tf
├── provider.tf
└── variables.tf
```

### Create our cluster through Terraform

Now we need to initialize Terraform, generate a plan, and apply it.

```bash
$ terraform init

Initializing the backend...

Initializing provider plugins...
- Checking for available provider plugins...
- Downloading plugin for provider "ovh" (terraform-providers/ovh) 0.11.0...


Warning: registry.terraform.io: This version of Terraform has an outdated GPG key and is unable to verify new provider releases. Please upgrade Terraform to at least 0.12.31 to receive new provider updates. For details see: https://discuss.hashicorp.com/t/hcsec-2021-12-codecov-security-event-and-hashicorp-gpg-key-exposure/23512



Warning: registry.terraform.io: For users on Terraform 0.13 or greater, this provider has moved to ovh/ovh. Please update your source in required_providers.


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

* Download and install Terraform providers/plugins
* Initialize backend (if defined)
* Download and install modules (if defined)

Now, we can generate our plan:

```
$ terraform plan
Refreshing Terraform state in-memory prior to plan...
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.


------------------------------------------------------------------------

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_cloud_project_kube.my_kube_cluster will be created
  + resource "ovh_cloud_project_kube" "my_kube_cluster" {
      + control_plane_is_up_to_date = (known after apply)
      + id                          = (known after apply)
      + is_up_to_date               = (known after apply)
      + kubeconfig                  = (sensitive value)
      + name                        = "my_kube_cluster"
      + next_upgrade_versions       = (known after apply)
      + nodes_url                   = (known after apply)
      + region                      = "GRA7"
      + service_name                = "<your-service-name>"
      + status                      = (known after apply)
      + update_policy               = (known after apply)
      + url                         = (known after apply)
      + version                     = "1.22"
    }

  # ovh_cloud_project_kube_nodepool.node_pool will be created
  + resource "ovh_cloud_project_kube_nodepool" "node_pool" {
      + anti_affinity  = false
      + desired_nodes  = 3
      + flavor_name    = "b2-7"
      + id             = (known after apply)
      + kube_id        = (known after apply)
      + max_nodes      = 3
      + min_nodes      = 3
      + monthly_billed = false
      + name           = "my-pool"
      + service_name   = "<your-service-name>"
      + status         = (known after apply)
    }

Plan: 2 to add, 0 to change, 0 to destroy.

------------------------------------------------------------------------

Note: You didn't specify an "-out" parameter to save this plan, so Terraform
can't guarantee that exactly these actions will be performed if
"terraform apply" is subsequently run.
```

Thanks to the `plan` command, we can check what Terraform want to create, modify or remove.

the plan is OK for us, so let's apply it:

```
$ terraform apply

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_cloud_project_kube.my_kube_cluster will be created
  + resource "ovh_cloud_project_kube" "my_kube_cluster" {
      + control_plane_is_up_to_date = (known after apply)
      + id                          = (known after apply)
      + is_up_to_date               = (known after apply)
      + kubeconfig                  = (sensitive value)
      + name                        = "my_kube_cluster"
      + next_upgrade_versions       = (known after apply)
      + nodes_url                   = (known after apply)
      + region                      = "GRA7"
      + service_name                = "<your_service_name>"
      + status                      = (known after apply)
      + update_policy               = (known after apply)
      + url                         = (known after apply)
      + version                     = "1.22"
    }

  # ovh_cloud_project_kube_nodepool.node_pool will be created
  + resource "ovh_cloud_project_kube_nodepool" "node_pool" {
      + anti_affinity  = false
      + desired_nodes  = 3
      + flavor_name    = "b2-7"
      + id             = (known after apply)
      + kube_id        = (known after apply)
      + max_nodes      = 3
      + min_nodes      = 3
      + monthly_billed = false
      + name           = "my-pool"
      + service_name   = "<your_service_name>"
      + status         = (known after apply)
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_cloud_project_kube.my_kube_cluster: Creating...
ovh_cloud_project_kube.my_kube_cluster: Still creating... [10s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [20s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [30s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [40s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [50s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m0s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m10s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m20s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m30s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m40s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [1m50s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [2m0s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [2m10s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [2m20s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Still creating... [2m30s elapsed]
ovh_cloud_project_kube.my_kube_cluster: Creation complete after 2m32s [id=7628f0e1-a082-4ec5-98df-2aba283ca3f3]
ovh_cloud_project_kube_nodepool.node_pool: Creating...
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [10s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [20s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [30s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [40s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [50s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m0s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m10s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m20s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m30s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m40s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [1m50s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m0s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m10s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m20s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m30s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m40s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [2m50s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m0s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m10s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m20s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m30s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m40s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [3m50s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Still creating... [4m0s elapsed]
ovh_cloud_project_kube_nodepool.node_pool: Creation complete after 4m5s [id=ebfa7726-d50c-4fbc-8b24-e722a1ff28f5]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.

Outputs:

kubeconfig = apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: <encoded_value>
    server: https://xxxxxx.c1.gra7.k8s.ovh.net
  name: my_kube_cluster
contexts:
- context:
    cluster: my_kube_cluster
    user: kubernetes-admin-my_kube_cluster
  name: kubernetes-admin@my_kube_cluster
current-context: kubernetes-admin@my_kube_cluster
kind: Config
preferences: {}
users:
- name: kubernetes-admin-my_kube_cluster
  user:
    client-certificate-data: <encoded_value>
    client-key-data: <encoded_value>
```

Now, go in the `OVHcloud Control Panel`, click on [Public Cloud](https://www.ovhcloud.com/en-us/public-cloud/) and then click on `Managed Kubernetes Service` section. 
As you can see, your cluster have been successfuly created:

![Cluster created](images/cluster-created.png){.thumbnail}

Now, click on `my_kube_cluster`, then in `Node pools` tab:

![Node pool created](images/my-pool-node-pool-created.png){.thumbnail}

Our node pool is created too.

Perfect!

## Connect to the cluster

Our cluster is created, now we need to connect to it in order to check our nodes, existing pods and to deploy our applications.

In order to do this, retrieve the kubeconfig file locally:

```
$ terraform output kubeconfig > /Users/<your-user>/.kube/my_kube_cluster.yml
```

You can define it in your `$KUBECONFIG` environment variable or you can use it directly in the `kubectl` command with `--kubeconfig` option.

List our Node Pool:

```
$ kubectl --kubeconfig=/Users/<your-user>/.kube/my_kube_cluster.yml get nodepool
NAME      FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-pool   b2-7     false         false            false           3         3         3            3           3     3     1d
```

Display the list of the Nodes:

```
$ kubectl --kubeconfig=/Users/<your-user>/.kube/my_kube_cluster.yml get node
NAME                  STATUS   ROLES    AGE   VERSION
my-pool-node-1bb290   Ready    <none>   1d   v1.22.2
my-pool-node-8280a6   Ready    <none>   1d   v1.22.2
my-pool-node-8a1bfe   Ready    <none>   1d   v1.22.2
```

Awesome!

You can now deploy your applications and/or create new clusters through Terraform.

## Known issues

By default, the Public Cloud projects as well as the resources total (RAM, CPU, disk space, number of instances, etc.) you can use are limited for security reasons.

When you create a new Kubernetes Node Pool, if you run out of resources in your available quota, the Nodes might be in error.

You may get the following error message: "not enough xxx quotas".
xxx can be: RAM, CPU, VM, Disk or Port.

If this is the case, the quotas must be increased.
In order to check your quota and increase them, please follow this tutorial:
[increase Public Cloud quota](https://docs.ovh.com/us/en/public-cloud/increase-public-cloud-quota/){.external}.

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-us/public-cloud/kubernetes/).

To deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [configuring default settings for `kubectl`](../configuring-kubectl/) and [deploying a Hello World application](../deploying-hello-world/).

Join our community of users on <https://community.ovh.com/en/>.
