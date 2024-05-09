---
title: "Deploy virtual machines of SAP HANA database on VMware on OVHcloud solution with Terraform"
excerpt: "This guide provides instructions for using the SAP HANA databases Terraform module developed by OVHcloud"
updated: 2023-09-05
---

## Objective

This guide provides instructions for using the SAP HANA databases Terraform module developed by OVHcloud to deploy a set of virtual machines of SAP HANA database on VMware on OVHcloud solution.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/en/&ovhSubsidiary=en).
- [VMware on OVHcloud solution](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/) deployed.
- Terraform binary (version >= 1.4).

## Instructions

### Terraform user creation

To be able to manage resources (create, modify, destroy) on your VMware on OVHcloud solution, we advise you to create a dedicated user with limited rights. The following rights are mandatory to use this Terraform module:

|          Right           |    Role    |
|--------------------------|------------|
| vSphere access           | Read/Write |
| Access to the VM Network | Operator   |
| Access to the V(X)LANs   | Operator   |

### Terraform binary

This module has been written to be compatible with Terraform v1.4 or higher. To discover how to install Terraform, please refer to the [official documentation](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) available on Hashicorp.

### Usage of the Terraform module

Several examples are available in the [GitHub repository](https://github.com/ovh/terraform-vsphere-sap-hana-database/tree/master/examples/) to deploy a set of virtual machines of SAP HANA database.

Three main files are required to use as expected this Terraform module:

- main.tf
- outputs.tf
- versions.tf

#### main.tf

This file contains the code to call the SAP HANA databases Terraform module developed by OVHcloud.

- The block "provider" is needed to be able to interact with your VMware on OVHcloud solution.
- The block "module" regroups all variables that you want to pass to the SAP HANA databases Terraform module developed by OVHcloud.

```hcl
provider "vsphere" {
  vsphere_server = "pcc-xx-xx-xx-xx.ovh.com"
}
 
module "sap-hana-database" {
  source = "github.com/ovh/terraform-vsphere-sap-hana-database.git?ref=v1.0.0"

  sap_hana_database_datastore              = "vsanDatastore"
  sap_hana_database_thin_datastore_policy  = "vSAN Default Storage Policy"
  sap_hana_database_thick_datastore_policy = "SAP HANA VM Storage Policy"
  sap_hana_databases = [
    {
      "name"                    = "terraform-vm-hana-1",
      "model"                   = "S",
      "cpus"                    = "",
      "cpus_per_socket"         = "24",
      "memory"                  = "",
      "custom_disks"            = false,
      "scsi_controller_count"   = "",
      "disks"                   = []
      "networks"                = ["VLAN20"],
      "guest_id"                = "sles15_64Guest",
      "vsphere_content_library" = "",
      "template"                = "",
      "iso_datastore"           = "",
      "iso_path"                = ""
      "vapp_options"            = {}
    }
  ]
  vsphere_compute_cluster = "Cluster1"
  vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
}
```

> [!primary]
> Where "SAP HANA VM Storage Policy" has been previously created on vSphere interface with a thick provisioning policy. To know more about our recommendations about this VM Storage Policy, we advise you [this guide](#configure-advanced-parameters.).
>

To know all inputs that you can pass to this module, please refer to the README on [GitHub](https://github.com/ovh/terraform-vsphere-sap-hana-database).

You have also the possibility to create variables to avoid hard-coding it in your main.tf file. To do this, you must replace each value by a value with the syntax `var.<name_of_the_variable>` and create a file named variables.tf which contains the definition of each variable. Caution, the variable type must be the same as that of the variables in the SAP HANA databases Terraform module developed by OVHcloud.

For example, you cannot set the type "string" for the variable `sap_hana_databases`, because in the SAP HANA databases Terraform module developed by OVHcloud this variable is a "list".

In this case, the main.tf file could be like:

```hcl
provider "vsphere" {
  vsphere_server = var.vsphere_server
}
 
module "sap-hana-database" {
  source = "github.com/ovh/terraform-vsphere-sap-hana-database.git?ref=v1.0.0"
 
  sap_hana_database_datastore              = var.sap_hana_database_datastore
  sap_hana_database_thick_datastore_policy = var.sap_hana_database_thick_datastore_policy
  sap_hana_database_thin_datastore_policy  = var.sap_hana_database_thin_datastore_policy
  sap_hana_databases                       = var.sap_hana_databases
  vsphere_compute_cluster                  = var.vsphere_compute_cluster
  vsphere_datacenter                       = var.vsphere_datacenter
}
```

The variables.tf file should be similar to this:

```hcl
variable "vsphere_server" {
  type        = string
  description = "Name of the vSphere server"
}
 
variable "vsphere_datacenter" {
  type        = string
  description = "Name of the datacenter in vSphere interface"
}
 
variable "sap_hana_database_datastore" {
  type        = string
  description = "Name of the datastore to store virtual machines of SAP HANA database"
}

variable "sap_hana_database_thick_datastore_policy" {
  type        = string
  description = "This Storage Policy must be a Thick provisioning"
}

variable "sap_hana_database_thin_datastore_policy" {
  type        = string
  description = "This Storage Policy must be a Thin provisioning"
}
 
variable "vsphere_compute_cluster" {
  type        = string
  description = "Name of the vSphere cluster"
}
 
variable "sap_hana_databases" {
  type        = list(any)
  description = "List of SAP HANA database virtual machines wanted"
}
```

Last, in order to avoid having to provide each value through your console, you have the possibility to create a file named terraform.tfvars in which you put all values needed by each variable.

```hcl
# vSphere
vsphere_datacenter      = "pcc-xx-xx-xx-xx_datacenterxxxx"
vsphere_compute_cluster = "Cluster1"
vsphere_server          = "pcc-xx-xx-xx-xx.ovh.com"
 
# SAP HANA databases
sap_hana_database_datastore              = "vsanDatastore"
sap_hana_database_thick_datastore_policy = "SAP HANA VM Storage Policy"
sap_hana_database_thin_datastore_policy  = "vSAN Default Storage Policy"
sap_hana_databases = [
  {
    "name"                    = "terraform-vm-hana-1",
    "model"                   = "S",
    "cpus"                    = "",
    "cpus_per_socket"         = "24",
    "memory"                  = "",
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

#### outputs.tf

This file display information after running `terraform apply`, as your virtual machine IDs, anti-affinity rule(s) information or affinity group(s) information.

To discover all outputs available in this module, please refer to the outputs.tf file on [GitHub](https://github.com/ovh/terraform-vsphere-sap-hana-database).

#### versions.tf

This file allows fixing the version of binaries used during the execution of the code. This file must match the versions.tf file presents in the [GitHub repository](https://github.com/ovh/terraform-vsphere-sap-hana-database) of this module for the release wanted.

### Execution

Once your repository with these three files (minimum) is ready, you can run these following commands:

```bash
terraform init
terraform plan
terraform apply
```

The output of the execution should be similar to this:

```hcl
Plan: 1 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + affinity_hosts_sap_hana_databases_rules = {}
  + anti_affinity_sap_hana_databases_rule   = {}
  + sap_hana_databases_ids                  = {
      + terraform-vm-hana-1 = (known after apply)
    }

vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Creating...
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Still creating... [10s elapsed]
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Creation complete after 12s [id=4228f3fa-30a0-4ec0-ec1f-a7a6188452f7]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

affinity_hosts_sap_hana_databases_rules = {}
anti_affinity_sap_hana_databases_rule = {}
sap_hana_databases_ids = {
  "terraform-vm-hana-1" = "4228f3fa-30a0-4ec0-ec1f-a7a6188452f7"
}
```

If the execution ran without issue, you have created your first SAP HANA database virtual machine on your VMware on OVHcloud solution with Terraform.

We suggest that you look the [examples folder](https://github.com/ovh/terraform-vsphere-sap-hana-database/tree/master/examples) and [README](https://github.com/ovh/terraform-vsphere-sap-hana-database) to discover all possibilities.

At any moment, you have the possibility to change the configuration of the virtual machine (more vCPU, more memory or add a new disk, for example) and relaunch the Terraform execution.

### Deletion

If you want to destroy this virtual machine, run the following command:

```bash
terraform destroy
```

The output of the execution should be similar to this:

```hcl
Plan: 0 to add, 0 to change, 1 to destroy.

Changes to Outputs:
  - affinity_hosts_sap_hana_databases_rules = {} -> null
  - anti_affinity_sap_hana_databases_rule   = {} -> null
  - sap_hana_databases_ids                  = {
      - terraform-vm-hana-1 = "4228f3fa-30a0-4ec0-ec1f-a7a6188452f7"
    } -> null
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Destroying... [id=4228f3fa-30a0-4ec0-ec1f-a7a6188452f7]
vsphere_virtual_machine.sap_hana_database["terraform-vm-hana-1"]: Destruction complete after 1s

Destroy complete! Resources: 1 destroyed.
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/?_gl=1*1vve3gg*_gcl_au*MzU3MTAzMzA5LjE2ODY1NTk4MTE.) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.