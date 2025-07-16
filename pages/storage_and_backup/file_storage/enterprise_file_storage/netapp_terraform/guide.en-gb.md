---
title: Managing Enterprise File Storage with OVHcloud Terraform provider
excerpt: Find out how to manage your Enterprise File Storage offer using Terraform
updated: 2025-07-11
---

## Objective

Enterprise File Storage is a storage solution that allows you to provision NFS volumes that are fully managed by OVHcloud. Terraform is an infrastructure-as-code tool that automates resource provisioning.

In this guide, you will learn how to use OVHcloud Terraform provider to manage your EFS solution volumes, snapshots and more.

> [!primary]
> In this guide, a volume is also called *share* as in the OVHcloud API.
>

**Learn how manage your EFS service using Terraform.**

## Requirements

- [Terraform >= 0.17.1](https://www.terraform.io/)
- [OVHcloud Terraform provider >= v2.5.0](https://github.com/ovh/terraform-provider-ovh/releases/)
- Access to the [OVHcloud API](/links/api)
- An Enterprise File Storage service. A service can be ordered from the [product page](/links/storage/enterprise-file-storage) or from the [OVHcloud Control Panel](/links/manager).

## Instructions

### Configure the OVHcloud Terraform provider

#### Generate API credentials

The OVHcloud Teraform Provider needs to be configured with an API token to be able to make calls to the OVHcloud API.

The API token information is needed because **the OVHcloud Terraform Provider is making requests to the OVHcloud API in the backend**.

Your API token will need to have the following rights:

- GET `/storage/netapp/*`
- POST `/storage/netapp/*`
- PUT `/storage/netapp/*`
- DELETE `/storage/netapp/*`

Follow the [First steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) guide to generate your API token.

**Once your token is generated, save its information for later use with the OVHcloud Terraform provider**.
	
#### Get your service ID

The ID of your Enterprise File Storage service can be obtained via the OVHcloud API or the OVHcloud Control Panel.

> [!success]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](/pages/manage_and_operate/api/first-steps).

- **API method**: Call `GET /storage/netapp`.

> [!api]
> 
> @api {v1} /storage GET /storage/netapp
>

- **OVHcloud Control Panel method**: Navigate to the [Enteprise File Storage](/links/manager) section.

#### Configure provider parameters

Create a `provider.tf` file defining the OVHcloud provider configuration:

```bash
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = "2.5.0"
    }
  }

  required_version = ">= 0.17.1"
}

provider "ovh" {
  endpoint           = var.ovh.endpoint
  application_key    = var.ovh.application_key
  application_secret = var.ovh.application_secret
  consumer_key       = var.ovh.consumer_key
}
```

Then create a `variables.tf` file definining the variables that will be used inside your `.tf` files:

```bash
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
> About the `ovh.endpoint` variable: by default, `ovh-eu` is defined because we are making calls to the OVHcloud Europe API.
>
> Other endpoints exists, depending on your needs:
>
> - `ovh-eu` for OVHcloud Europe API
> - `ovh-ca` for OVHcloud America/Asia API

Finally, create a `secrets.tfvars` file containing the required variable values:

> [!warning]
> Don't forget to replace `<application_key>`, `<application_secret>` and `<consumer_key>` with your API token information obtained previously.
>

```bash
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}
```

Now you need to initiliaze Terraform:

```bash
terraform init
```

The init command will initialize your working directory which contains `.tf` configuration files.

It’s the first command to execute for a new configuration, or after doing a checkout of an existing configuration in a given git repository for example.

The init command will download the necessary providers and initialize the backend.

> [!success]
> 
> Once the initialization is successfull you are now able to manage Enterprise File Storage resources and data sources that are availalable inside the OVHcloud Terraform provider.
>

### Service management

#### Get service information

Use the [ovh_storage_efs](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs) data source to fetch service details. 

Create a `main.tf` file:

```bash
data "ovh_storage_efs" "efs" {
  service_name = "<service_id>" # Replace this value with EFS service ID.
}
```

Define [outputs](https://developer.hashicorp.com/terraform/language/values/outputs) in an `output.tf` file:
	
```bash
output "service_id" {
  value = data.ovh_storage_efs.efs.id
}

output "service_product" {
 value = data.ovh_storage_efs.efs.product
}

output "service_quota" {
 value = data.ovh_storage_efs.efs.quota
}
```

Run [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) to view the outputs: 

```bash
terraform apply -var-file=secrets.tfvars

data.ovh_storage_efs.efs: Reading...
data.ovh_storage_efs.efs: Read complete after 0s [id=xxx-xxx-xxx-xxx-xxx]

Changes to Outputs:
  + service_id      = "xxx-xxx-xxx-xxx-xxx"
  + service_product = "enterprise-file-storage-premium-1tb"
  + service_quota   = 1000

You can apply this plan to save these new output values to the Terraform state, without changing any real infrastructure.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

Apply complete! Resources: 0 added, 0 changed, 0 destroyed.

Outputs:

service_id = "xxx-xxx-xxx-xxx-xxx"
service_product = "enterprise-file-storage-premium-1tb"
service_quota = 1000
```

### Volumes Management

OVHcloud Terraform Provider allows the following volume management operations: creation, modification and deletion.

[ovh_storage_efs_share](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share) resource represents a volume.

#### Create a volume

Define a volume inside your `main.tf` file:

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Replace this value with EFS service ID.
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
  # mount_path = <mount_path_value>
  # snapshot_id = <snapshot_id_to_use>
}
```

Additionnal properties:

- A custom mount path can be specified using `mount_path` property.
- The volume can be created from an existing snapshot using `snapshot_id` property.

Run [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) to create the execution plan:

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```

Key points:

 - The `terraform plan` command will create an execution plan but won't execute it. Instead, it will determine what actions are necessary to create the configuration specified inside your configuration files. This will allow you to verifiy whether your execution plan matches exectations before making any changes to actual resources.

 - The optional `-out` parameter allows your to specifiy an output file for the plan. It will ensure that the plan you reviewed will be the same as what is applied.

Once you reviewed the execution plan, run [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) to make changes:

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 11s [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

Your volume is now created.

#### Modify a volume

Volume `name`, `description` and `size` can be updated.

Once the value(s) are updated inside your `main.tf` file, apply the changes using [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply).

#### Delete a volume

To delete your volume use [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy) command. 

> [!warning]
>
> If your volume has `manual` snapshots that are not referenced by Terraform, they must be deleted before the volume is deleted. 
>

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T09:53:17Z" -> null
      - description  = "My share" -> null
      - id           = "29d1facf-db03-4951-a4e4-c6c8ac7b1104" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share.volume: Destroying... [id=29d1facf-db03-4951-a4e4-c6c8ac7b1104]
ovh_storage_efs_share.volume: Destruction complete after 1s

Destroy complete! Resources: 1 destroyed.
```

#### Get information about volume access paths

To retrieve information about one or all of the volume access paths use [ovh_storage_efs_share_access_paths](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs_share_access_paths) and [ovh_storage_efs_share_access_path](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/storage_efs_share_access_path) data sources respectively.

Create or add to an existing `main.tf` file the following content:

> [!primary]
>
> You can (re-)use a volume that already exists (within your Terraform configuration or not).
>

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
}

data "ovh_storage_efs_share_access_paths" "access_paths" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  share_id = ovh_storage_efs_share.volume.id
}

data "ovh_storage_efs_share_access_path" "access_path" {
  service_name = "xxx-xxx-xxx-xxx-xxx"
  share_id = ovh_storage_efs_share.volume.id
  id = tolist(data.ovh_storage_efs_share_access_paths.access_paths.access_paths).0.id
}
```

Define access path [outputs](https://developer.hashicorp.com/terraform/language/values/outputs) in an `output.tf` file:

```bash
output "share_acccess_path" {
  value = data.ovh_storage_efs_share_access_path.access_path
}

output "share_access_paths" {
  value = data.ovh_storage_efs_share_access_paths.access_paths
}
```

Run [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) to add your data source and create outputs:

```bash
terraform apply data_source.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
 <= read (data resources)

Terraform will perform the following actions:

  # data.ovh_storage_efs_share_access_path.access_path will be read during apply
  # (config refers to values not yet known)
 <= data "ovh_storage_efs_share_access_path" "access_path" {
      + id           = (known after apply)
      + path         = (known after apply)
      + preferred    = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }

  # data.ovh_storage_efs_share_access_paths.access_paths will be read during apply
  # (config refers to values not yet known)
 <= data "ovh_storage_efs_share_access_paths" "access_paths" {
      + access_paths = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + share_acccess_path = {
      + id           = (known after apply)
      + path         = (known after apply)
      + preferred    = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }
  + share_access_paths = {
      + access_paths = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
    }

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 10s [id=1d6669a7-8b86-472a-bb04-cf8be7b9af16]
data.ovh_storage_efs_share_access_paths.access_paths: Reading...
data.ovh_storage_efs_share_access_paths.access_paths: Read complete after 1s
data.ovh_storage_efs_share_access_path.access_path: Reading...
data.ovh_storage_efs_share_access_path.access_path: Read complete after 0s [id=7cbcf0ca-50f4-4e3c-9222-406e71a10649]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

share_acccess_path = {
  "id" = "7cbcf0ca-50f4-4e3c-9222-406e71a10649"
  "path" = "10.6.0.1:/share_b038413e_c446_4788_871f_a762fb1b7697"
  "preferred" = true
  "service_name" = "xxx-xxx-xxx-xxx-xxx"
  "share_id" = "1d6669a7-8b86-472a-bb04-cf8be7b9af16"
}
share_access_paths = {
  "access_paths" = toset([
    {
      "id" = "7cbcf0ca-50f4-4e3c-9222-406e71a10649"
      "path" = "10.6.0.1:/share_b038413e_c446_4788_871f_a762fb1b7697"
      "preferred" = true
    },
  ])
  "service_name" = "xxx-xxx-xxx-xxx-xxx"
  "share_id" = "1d6669a7-8b86-472a-bb04-cf8be7b9af16"
}
```

### Snapshots Management

OVHcloud Terraform Provider allows the following snapshot management operations: creation, modification and deletion.

[ovh_storage_efs_share_snapshot](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share_snapshot) represents a volume snapshot.

#### Create a snapshot

Define a snapshot inside `main.tf` file:

> [!primary]
>
> You can (re-)use a volume that already exists (within your Terraform configuration or not) to create your snapshot.
>

> [!primary]
> 
> The `time_sleep` resource manages delay between snapshot and volume deletion. The snapshot has to be deleted before the volume can be deleted.
>
> If you don't already have the `hashicorp/time` provider installed, you will need to run `terraform init -upgrade` to download it.
>

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Replace this value with service ID.
  name         = "share"
  description  = "My share"
  protocol     = "NFS"
  size         = 100
}

resource "ovh_storage_efs_share_snapshot" "snapshot" {
  depends_on = [time_sleep.wait_10_seconds]

  service_name = "<service_id>" # Replace this value with service ID.
  share_id = ovh_storage_efs_share.share.id
  name = "snapshot"
  description = "My snapshot"
}

resource "time_sleep" "wait_10_seconds" {
  depends_on = [ovh_storage_efs_share.share]

  destroy_duration = "10s"
}
```

Run [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) to create the execution plan:

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

  # ovh_storage_efs_share_snapshot.snapshot will be created
  + resource "ovh_storage_efs_share_snapshot" "snapshot" {
      + created_at   = (known after apply)
      + description  = "My snapshot"
      + id           = (known after apply)
      + name         = "snapshot"
      + path         = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
      + status       = (known after apply)
      + type         = (known after apply)
    }

  # time_sleep.wait_10_seconds will be created
  + resource "time_sleep" "wait_10_seconds" {
      + destroy_duration = "10s"
      + id               = (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```

Key points:

 - The `terraform plan` command will create an execution plan but won't execute it. Instead, it will determine what actions are necessary to create the configuration specified inside your configuration files. This will allow you to verifiy whether your execution plan matches exectations before making any changes to actual resources.

 - The optional `-out` parameter allows your to specifiy an output file for the plan. It will ensure that the plan you reviewed will be the same as what is applied.

Once you reviewed the execution plan, run [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) to make changes:

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Still creating... [20s elapsed]
ovh_storage_efs_share.volume: Still creating... [30s elapsed]
ovh_storage_efs_share.volume: Still creating... [40s elapsed]
ovh_storage_efs_share.volume: Creation complete after 41s [id=1f551984-6529-48f8-830d-f6a70d062174]
time_sleep.wait_10_seconds: Creating...
time_sleep.wait_10_seconds: Creation complete after 0s [id=2025-07-01T13:39:01Z]
ovh_storage_efs_share_snapshot.snapshot: Creating...
ovh_storage_efs_share_snapshot.snapshot: Still creating... [10s elapsed]
ovh_storage_efs_share_snapshot.snapshot: Creation complete after 10s [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
```

Your snapshot is now available.

#### Modify a snapshot

Snapshot `name` and `description` properties can be updated.

Once the value(s) are updated inside your `main.tf` file, apply the changes using [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply).

#### Delete a snapshot

To delete your snapshot use the [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy) command.

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=1f551984-6529-48f8-830d-f6a70d062174]
time_sleep.wait_10_seconds: Refreshing state... [id=2025-07-01T13:39:01Z]
ovh_storage_efs_share_snapshot.snapshot: Refreshing state... [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T13:38:21Z" -> null
      - description  = "My share" -> null
      - id           = "1f551984-6529-48f8-830d-f6a70d062174" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

  # ovh_storage_efs_share_snapshot.snapshot will be destroyed
  - resource "ovh_storage_efs_share_snapshot" "snapshot" {
      - created_at   = "2025-07-01T13:39:01Z" -> null
      - description  = "My snapshot" -> null
      - id           = "f92bc04a-301f-4a9a-80ba-7c7bf18b2275" -> null
      - name         = "snapshot" -> null
      - path         = ".snapshot/share_snapshot_b571d597_80b0_4a5f_ac42_00fb3401c70c" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - share_id     = "1f551984-6529-48f8-830d-f6a70d062174" -> null
      - status       = "available" -> null
      - type         = "manual" -> null
    }

  # time_sleep.wait_10_seconds will be destroyed
  - resource "time_sleep" "wait_10_seconds" {
      - destroy_duration = "10s" -> null
      - id               = "2025-07-01T13:39:01Z" -> null
    }

Plan: 0 to add, 0 to change, 3 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share_snapshot.snapshot: Destroying... [id=f92bc04a-301f-4a9a-80ba-7c7bf18b2275]
ovh_storage_efs_share_snapshot.snapshot: Destruction complete after 0s
time_sleep.wait_10_seconds: Destroying... [id=2025-07-01T13:39:01Z]
time_sleep.wait_10_seconds: Still destroying... [id=2025-07-01T13:39:01Z, 10s elapsed]
time_sleep.wait_10_seconds: Destruction complete after 10s
ovh_storage_efs_share.volume: Destroying... [id=1f551984-6529-48f8-830d-f6a70d062174]
ovh_storage_efs_share.volume: Destruction complete after 1s

Destroy complete! Resources: 3 destroyed.
```

### ACLs management

OVHcloud Terraform Provider allows ACLs creation and deletion.

[ovh_storage_efs_share_acl](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/storage_efs_share_acl) resource represents an ACL.

#### Create an ACL

Define an ACL inside `main.tf` file:

> [!primary]
>
> You can (re-)use a volume that already exists (within your Terraform configuration or not) to create your ACL.
>

```bash
resource "ovh_storage_efs_share" "volume" {
  service_name = "<service_id>" # Replace this value with service ID.
  name = "share"
  description = "My share"
  protocol = "NFS"
  size = 100
}

resource "ovh_storage_efs_share_acl" "acl" {
  service_name = "<service_id>" # Replace this value with service ID.
  share_id = ovh_storage_efs_share.volume.id
  access_level = "rw"
  access_to = "10.0.0.1/32"
}
```

Run [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) to create the execution plan:

```bash
terraform plan -var-file=secrets.tfvars -out main.tfplan

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be created
  + resource "ovh_storage_efs_share" "volume" {
      + created_at       = (known after apply)
      + description      = "My share"
      + id               = (known after apply)
      + mount_point_name = (known after apply)
      + name             = "share"
      + protocol         = "NFS"
      + service_name     = "xxx-xxx-xxx-xxx-xxx"
      + size             = 100
      + snapshot_id      = (known after apply)
      + status           = (known after apply)
    }

  # ovh_storage_efs_share_acl.acl will be created
  + resource "ovh_storage_efs_share_acl" "acl" {
      + access_level = "rw"
      + access_to    = "10.0.0.1/32"
      + access_type  = (known after apply)
      + created_at   = (known after apply)
      + id           = (known after apply)
      + service_name = "xxx-xxx-xxx-xxx-xxx"
      + share_id     = (known after apply)
      + status       = (known after apply)
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Saved the plan to: main.tfplan

To perform exactly these actions, run the following command to apply:
    terraform apply "main.tfplan"
```

Key points:

  - The `terraform plan` command will create an execution plan but won't execute it. Instead, it will determine what actions are necessary to create the configuration specified inside your configuration files. This will allow you to verifiy whether your execution plan matches exectations before making any changes to actual resources.

  - The optional `-out` parameter allows your to specifiy an output file for the plan. It will ensure that the plan you reviewed will be the same as what is applied.

Once you reviewed the execution plan, run [terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply) to make changes:

```bash
terraform apply main.tfplan

ovh_storage_efs_share.volume: Creating...
ovh_storage_efs_share.volume: Still creating... [10s elapsed]
ovh_storage_efs_share.volume: Creation complete after 10s [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share_acl.acl: Creating...
ovh_storage_efs_share_acl.acl: Still creating... [10s elapsed]
ovh_storage_efs_share_acl.acl: Creation complete after 11s [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
```

Your ACL is now available.

#### Delete an ACL

To delete your ACL use the [terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy) command. 

```bash
terraform destroy -var-file=secrets.tfvars

ovh_storage_efs_share.volume: Refreshing state... [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share_acl.acl: Refreshing state... [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # ovh_storage_efs_share.volume will be destroyed
  - resource "ovh_storage_efs_share" "volume" {
      - created_at   = "2025-07-01T14:36:37Z" -> null
      - description  = "My share" -> null
      - id           = "001ccf4b-3537-41c0-b446-a42663971d58" -> null
      - name         = "share" -> null
      - protocol     = "NFS" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - size         = 100 -> null
      - status       = "available" -> null
        # (1 unchanged attribute hidden)
    }

  # ovh_storage_efs_share_acl.acl will be destroyed
  - resource "ovh_storage_efs_share_acl" "acl" {
      - access_level = "rw" -> null
      - access_to    = "10.0.0.1/32" -> null
      - access_type  = "ip" -> null
      - created_at   = "2025-07-01T14:36:48Z" -> null
      - id           = "9274f4d4-de96-46eb-935f-ffbc747a19bc" -> null
      - service_name = "xxx-xxx-xxx-xxx-xxx" -> null
      - share_id     = "001ccf4b-3537-41c0-b446-a42663971d58" -> null
      - status       = "active" -> null
    }

Plan: 0 to add, 0 to change, 2 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

ovh_storage_efs_share_acl.acl: Destroying... [id=9274f4d4-de96-46eb-935f-ffbc747a19bc]
ovh_storage_efs_share_acl.acl: Destruction complete after 0s
ovh_storage_efs_share.volume: Destroying... [id=001ccf4b-3537-41c0-b446-a42663971d58]
ovh_storage_efs_share.volume: Destruction complete after 0s

Destroy complete! Resources: 2 destroyed.
```

## Troubleshooting

- **Authentication Issues**: Verify API credentials and permissions.
- **Resource Limits**: Check volume/snapshot quota usage in the OVHcloud Control Panel.
- **Volume Deletion Issues**: Ensure all `manual` snapshots are deleted before removing the volume.

## Go further

[API Quickstart](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
