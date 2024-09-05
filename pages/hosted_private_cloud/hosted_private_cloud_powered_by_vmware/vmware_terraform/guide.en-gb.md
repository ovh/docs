---
title: "Terraform - Getting started with VMware managed on OVHcloud"
excerpt: "This guide provides the first instructions for using Terraform with an S3 bucket, as well as the SAP module and the Docker provider in a VMware Hosted Private Cloud ecosystem managed on OVHcloud"
updated: 2024-09-05
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> If you require training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team.
>

## Objective

**This guide provides instructions on using Terraform, its modules and providers in a Hosted Private Cloud ecosystem**.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A [Hosted Private Cloud VMware on OVHcloud](/links/hosted-private-cloud/VMware) solution.
- Configure access with a Terraform user or a single user (to secure with sudo within Terraform).
- Terraform binary (version >= 1.4).
- An OVHcloud S3 Object Storage bucket to store the Terraform state with the correct user rights for Terraform and the bucket.
- The [Terraform VMware vSphere provider](https://registry.terraform.io/providers/hashicorp/vsphere/latest/docs) (mandatory)
- An endpoint `https://nsxt` if you want to use NSX-T with Terraform within OVHcloud (endpoint configured by default with all NSX HPC offers). The NSX API is independent, and not linked to the vSphere API. This is why we have created a dedicated endpoint to reach it.
- The Terraform module [SAP OVHcloud](https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples/).
- The Docker provider [Kreuzwerker](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs) Terraform for deploying containers in VMs (optional).

### Step 1 - Terraform on Hosted Private Cloud (VMware managed on OVHcloud)

/// details | How do I configure Terraform within OVHcloud?

**State Terraform**

You can create a Terraform state using an OVHcloud bucket. Please refer to our guide on [Managing an S3 bucket with Terraform](/pages/storage_and_backup/object_storage/s3_terraform).

**Backend config**

Once your bucket has been configured, you will need to create your terraform folder and launch your *backend-config*. You can include your *backend-config* directly in your project or module and simply launch a `terraform init`:

```bash
$ terraform init
```

Or for example with a different configuration `Terraform init -backend-config=...`:

```shell
terraform init \
    -backend-config="address=s3.gra.io.cloud.ovh.net" \
    -backend-config="path=example_app/terraform_state" \
    -backend-config="scheme=https"
```

**Installing Terraform in VMware on OVHcloud**

To manage the resources (creation, modification and destruction) on your VMware on OVHcloud solution, we recommend creating a dedicated user with limited rights. These permissions are required to use this Terraform module.

|       Right            |       Role       |
|------------------------|------------------|
| vSphere access         | Read/Write       |
| Access to the vNetwork | Operator         |
| Access to the V(x)LAN  | Operator         |

For passwords, we recommend using a `xxx.tf` file that you will only use within your execution machine. This file will use standard Terraform variables with passwords, but will not be included in your global directory to avoid locking passwords in your CI.

**Terraform Binary**

This module has been written to be compatible with Terraform v1.4 or higher. To find out how to install Terraform, please refer to [official Hashicorp documentation](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).

**Using the Terraform module**

Several examples are available in the [GitHub repository](https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples/) to deploy virtual machines in a vSphere managed on OVHcloud (SAP module -> on VWware on OVHcloud).

Three main files are required to use this Terraform module as expected:

- `main.tf`
- `outputs.tf`
- `versions.tf`

#### The **main.tf** file

This file contains the code for calling the Terraform module developed by OVHcloud. If you would like to use other templates, we will show you how to change the variables used.

- The "provider" block is required to be able to interact with your VMware on OVHcloud solution.
- The "module" block contains all the variables that you would like to switch to the Terraform module developed by OVHcloud.

```Go
provider "vsphere" {
  vsphere_server = "pcc-xx-xx-xx-xx.ovh.com"
}
 
module "sap-application-server" {
  source = "github.com/ovh/terraform-vsphere-sap-application-server.git?ref=v1.0.0"
 
  sap_application_server_datastore = "ssd-xxxxxx"
  sap_application_servers = [
    {
      "name"                    = "terraform-vm-1",
      "model"                   = "",
      "cpus"                    = "2",
      "cpus_per_socket"         = "2",
      "memory"                  = "1024",
      "custom_disks"            = false,
      "disks"                   = [],
      "networks"                = ["VLAN20"],
      "guest_id"                = "sles15_64Guest",
      "vsphere_content_library" = "",
      "template"                = "",
      "iso_datastore"           = "",
      "iso_path"                = "",
      "vapp_options"            = {}
    }
  ]
  vsphere_compute_cluster = "Cluster1"
  vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
}
```

For all the entries you can pass to this module, please refer to the README on [GitHub](https://github.com/ovh/terraform-vsphere-sap-application-server).

You can also create variables to avoid hard-coding them in your main.tf file. To do this, you must replace each value with a value with the syntax `var.<variable_name>` and create a file named `variables.tf` that contains the definition of each variable. Warning: the variable type must be the same as the variable type in the Terraform SAP Application Servers module developed by OVHcloud.

For example, you cannot apply the character string type to the `sap_application_servers` variable since, in the Terraform SAP Application Servers module developed by OVHcloud , this variable is a "list".

In this case, the main.tf file could be like this:

“GB
provider "vsphere" {
vsphere_server = var.vsphere_server
}

"sap-application-server" module {
source = "github.com/ovh/terraform-vsphere-sap-application-server.git?ref=v1.0.0"

sap_application_server_datastore = var.sap_application_server_datastore
sap_application_servers          = var.sap_application_servers
vsphere_compute_cluster          = var.vsphere_compute_cluster
vsphere_datacentre               = var.vsphere_datacenter
}
“

The variables.tf file should then be similar to this:

```Go
provider "vsphere" {
  vsphere_server = var.vsphere_server
}
 
module "sap-application-server" {
  source = "github.com/ovh/terraform-vsphere-sap-application-server.git?ref=v1.0.0"
 
  sap_application_server_datastore = var.sap_application_server_datastore
  sap_application_servers          = var.sap_application_servers
  vsphere_compute_cluster          = var.vsphere_compute_cluster
  vsphere_datacenter               = var.vsphere_datacenter
}
```

Le fichier variables.tf devrait être similaire à cela :

```Go
variable "vsphere_server" {
  type        = string
  description = "vSphere server name"
}
 
variable "vsphere_datacenter" {
  type        = string
  description = "Datacenter name in vSphere interface"
}
 
variable "sap_application_server_datastore" {
  type        = string
  description = "Name of datastore to store SAP application server VMs"
}
 
variable "vsphere_compute_cluster" {
  type        = string
  description = "vSphere cluster name"
}
 
variable "sap_application_servers" {
  type        = list(any)
  description = "List of desired SAP application server VMs"
}
```

Finally, in order to avoid having to provide each value through the console, you have the possibility to create a file named `terraform.tfvars` in which you can put the desired values for each variable.

```Go
# vSphere
vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
vsphere_compute_cluster = "Cluster1"
vsphere_server          = "pcc-xx-xx-xx-xx.ovh.com"
 
# VM server (Gitlab cluster)
vm_datastore = "ssd-xxxxxx"
vm_servers = [
  {
    "name"                    = "terraform-vm-1",
    "model"                   = "",
    "cpus"                    = "2",
    "cpus_per_socket"         = "2",
    "memory"                  = "1024",
    "custom_disks"            = false,
    "disks"                   = [],
    "networks"                = ["VLAN20"],
    "guest_id"                = "sles15_64Guest",
    "vsphere_content_library" = "",
    "template"                = "",
    "iso_datastore"           = "",
    "iso_path"                = "",
    "vapp_options"            = {}
  }
]
```

#### The **outputs.tf** file

This file displays information after running `terraform apply`, such as the IDs of your virtual machines, information on anti-affinity rules, and information on affinity groups.

To discover the available outputs of this module, please refer to the outputs.tf file on [GitHub](https://github.com/ovh/terraform-vsphere-sap-application-server).

#### The **versions.tf** file

This file is used to fix the version of binaries used when executing code. This module must be identical to the versions.tf file in the [Github repository](https://github.com/ovh/terraform-vsphere-sap-application-server) module for the desired release.

#### **Execution**

Once your repository with these three files (minimum) is ready, you can launch the execution with the following commands:

```bash
terraform init
terraform plan
terraform apply
```

Execution output should be similar to this:

```Go
Plan: 1 to add, 0 to change, 0 to destroy.
 
Changes to Outputs:
  + affinity_hosts_sap_application_servers_rules = {}
  + anti_affinity_sap_application_servers_rule   = {}
  + sap_application_servers_ids                  = {
      + terraform-vm-1 = (known after apply)
    }
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Creating...
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Creation complete after 10s [id=42280216-8bbf-5550-51f9-4fb55a4f13e0]
 
Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
 
Outputs:
 
affinity_hosts_sap_application_servers_rules = {}
anti_affinity_sap_application_servers_rule = {}
sap_application_servers_ids = {
  "terraform-vm-1" = "42280216-8bbf-5550-51f9-4fb55a4f13e0"
}
```

If the execution was without errors, you created your first SAP application server virtual machine on your VMware on OVHcloud solution with Terraform.

We recommend reading the [examples](https://github.com/ovh/terraform-vsphere-sap-application-server/tree/master/examples) and the [README](https://github.com/ovh/terraform-vsphere-sap-application-server) to discover all the possibilities.

At any time, you can change the configuration of the virtual machine (more vCPU, more memory or the addition of a new disk, for example) and restart Terraform execution.

#### **Destruction**

If you want to destroy this virtual machine, run the following command:

```shell
terraform destroy
```

Execution output should look like this:

```Go
Plan: 0 to add, 0 to change, 1 to destroy.

Changes to Outputs:
  - affinity_hosts_sap_application_servers_rules = {} -> null
  - anti_affinity_sap_application_servers_rule   = {} -> null
  - sap_application_servers_ids                  = {
      - terraform-vm-1 = "42280216-8bbf-5550-51f9-4fb55a4f13e0"
    } -> null
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Destroying... [id=42280216-8bbf-5550-51f9-4fb55a4f13e0]
vsphere_virtual_machine.sap_application_server["terraform-vm-1"]: Destruction complete after 0s

Destroy complete! Resources: 1 destroyed.
```

///

### Step 2 - Terraform and the OVHcloud API

/// details | How do I retrieve VMware information from my OVHcloud infrastructure?

**Via the OVHcloud API**

With this API call, you can retrieve your managed vSphere URL on OVHcloud:

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud
>
>

With this API call, you can retrieve your managed vSphere on OVHcloud service URL:

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}
>

> **Parameters**:
>
> - `serviceName`: your datacentre in the form `pcc-XXX-XXX-XXX-XXX`.
>

With this API call, you can retrieve your `datacenterId`:

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}/datacenter
>

> **Parameters**:
>
> - `serviceName`: your datacentre in the form `pcc-XXX-XXX-XXX-XXX`.
>

With this API call, you can retrieve your NSX-T information:

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dedicatedCloud/{serviceName}/nsx{{t}}
>

>**Parameters**:
>
> - If NSX-V, remove the "t"
>
> - `serviceName`: your datacentre in the form `pcc-XXX-XXX-XXX-XXX`.
>

Return:

```json
{
  "version": "4.1.1.0.0-XXXXX",
  "datacentersState": [
    {
      "state": "enabled",
      "id": XXXX
    }
  ],
  "url": "https://nsxt.pcc-XXX-XXX-XXX-XXX.ovh.de",
  "state": "enabled"
}
```

Return with NSX-V :

```json
{
  "state": "disabled",
  "url": "https://nsx.pcc-XXX-XXX-XXX-XXX.ovh.de/api"
}
```

//

## Go further

Join our [community of users](/links/community).