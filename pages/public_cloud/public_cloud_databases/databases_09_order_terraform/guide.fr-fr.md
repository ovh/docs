---
title: Premiers pas avec Terraform pour les bases de données Public Cloud (EN)
excerpt: Find out how to order and manage your Public Cloud managed database service using Terraform
updated: 2026-03-04
---

## Objective

Public Cloud managed databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.

**This guide explains how to order a MongoDB instance of a Public Cloud managed database service using Terraform.**

## Requirements

- [Terraform](https://www.terraform.io/) installed. *This guide was tested with version v1.14.6.*
- Access to the [OVHcloud API](/links/api) (create your credentials by consulting [this guide](/pages/manage_and_operate/api/first-steps))
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

## Instructions

### Step 1: Gather the OVHcloud required parameters

#### Getting your cluster/API tokens information

The "OVH provider" needs to be configured with a set of credentials:

- an `application_key`
- an `application_secret`
- a `consumer_key`

**Why?**

Because, behind the scenes, the "OVH Terraform provider" is doing requests to OVHcloud APIs. 

To retrieve this information, follow our [First steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps) tutorial.

Specifically, you have to generate these credentials via the OVHcloud token generation page with the following rights:

- **GET** `/cloud/project/*/database/*`
- **POST** `/cloud/project/*/database/*`
- **PUT** `/cloud/project/*/database/*`
- **DELETE** `/cloud/project/*/database/*`

> [!tabs]
> EU region
>> [Generate OVHcloud API tokens (EU)](https://auth.eu.ovhcloud.com/api/createToken?GET=/cloud/project/*/database/*&POST=/cloud/project/*/database/*&PUT=/cloud/project/*/database/*&DELETE=/cloud/project/*/database/*)
> CA region
>> [Generate OVHcloud API tokens (CA)](https://auth.ca.ovhcloud.com/api/createToken?GET=/cloud/project/*/database/*&POST=/cloud/project/*/database/*&PUT=/cloud/project/*/database/*&DELETE=/cloud/project/*/database/*)

Once you have generated your tokens, save them — you will need them shortly.

The last needed information is the `service_name`: it is the ID of your Public Cloud project.

**How to get it?**

In the Public Cloud section, you can retrieve your service name ID thanks to the `Copy to clipboard`{.action} button.

You will also use this information in Terraform resources definition files.

### Step 2: Gather the set of required parameters

To create a new MongoDB cluster, specify at least:

- the _engine_ (e.g. "mongodb")
- the _version_ (e.g. "8.2")
- the _region_ (e.g. "EU-WEST-PAR")
- the _plan_ (e.g. "production")
- the _flavor_ of the cluster (e.g. "b3-8")

### Step 3: Create Terraform files

First, create a `main.tf` file defining the resources that will be created.

```bash
terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = ">= 2.11.0"
    }
  }
}

provider "ovh" {
  endpoint           = var.ovh.endpoint
  application_key    = var.ovh.application_key
  application_secret = var.ovh.application_secret
  consumer_key       = var.ovh.consumer_key
}

resource "ovh_cloud_project_database" "service" {
  service_name = var.product.project_id
  description  = var.product.name
  engine       = var.product.engine
  version      = var.product.version
  plan         = var.product.plan
  nodes {
    region = var.product.region
  }
  nodes {
    region = var.product.region
  }
  nodes {
    region = var.product.region
  }
  flavor = var.product.flavor
  ip_restrictions {
    ip = var.product.ip
  }
}

resource "ovh_cloud_project_database_mongodb_user" "dbuser" {
  service_name = ovh_cloud_project_database.service.service_name
  cluster_id   = ovh_cloud_project_database.service.id
  name         = var.access.name
}
```

Then, create a `variables.tf` file defining the variables used in `main.tf`:

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

variable "product" {
  type = map(string)
  default = {
    project_id = ""
    name       = ""
    engine     = ""
    region     = "EU-WEST-PAR"
    plan       = "production"
    flavor     = "b3-8"
    version    = ""
    ip         = "0.0.0.0/32"
  }
}

variable "access" {
  type = map(string)
  default = {
    name = "johndoe"
  }
}
```

Here, we defined the `ovh-eu` endpoint because we want to call the OVHcloud Europe API. Other endpoints exist, depending on your needs:

- `ovh-eu` for OVHcloud Europe API
- `ovh-ca` for OVHcloud North-America API

Then, create a `secrets.tfvars` file containing the required variables values:

```bash
ovh = {
  endpoint           = "ovh-eu"
  application_key    = "<application_key>"
  application_secret = "<application_secret>"
  consumer_key       = "<consumer_key>"
}

product = {
  project_id = "<service_name>"
  name       = "mongodb-terraform"
  engine     = "mongodb"
  region     = "EU-WEST-PAR"
  plan       = "production"
  flavor     = "b3-8"
  version    = "8.2"
  ip         = "<ip_range>"
}

access = {
  name = "johndoe"
}
```

> [!primary]
>
> Don't forget to replace `<service_name>`, `<application_key>`, `<application_secret>`, `<consumer_key>`, `<ip_range>` by the real data.

Finally, create an `outputs.tf` file defining the resources that will be exported:

```bash
output "cluster_uri" {
  value = ovh_cloud_project_database.service.endpoints.0.uri
}

output "user_name" {
  value = ovh_cloud_project_database_mongodb_user.dbuser.name
}

output "user_password" {
  value     = ovh_cloud_project_database_mongodb_user.dbuser.password
  sensitive = true
}
```

### Step 4: Run

Now we need to initialise Terraform, generate a plan, and apply it.

```bash
terraform init
```

The [init](https://www.terraform.io/cli/commands/init) command will initialize your working directory which contains `.tf` configuration files.

Run it first for any new configuration, or after checking out a configuration from a git repository.

The `init` command will:

- Download and install Terraform providers/plugins
- Initialise backend (if defined)
- Download and install modules (if defined)

Now, we can generate our plan:

```bash
terraform plan -var-file=secrets.tfvars
```

Thanks to the [plan](https://www.terraform.io/cli/commands/plan) command, we can check what Terraform wants to create, modify or remove.

The plan is OK for us, so let's [apply](https://www.terraform.io/cli/commands/apply) it:

```bash
terraform apply -var-file=secrets.tfvars -auto-approve
```

Finally export the user credentials and the URI:

```bash
export PASSWORD=$(terraform output -raw user_password)
export USER=$(terraform output -raw user_name)
export URI=$(terraform output -raw cluster_uri)
```

And, voilà, the MongoDB cluster is created.

## How to deploy with other engines

This guide covered deploying a MongoDB service. You can find examples for other engines here:

> [!tabs]
> MySQL
>> [https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mysql/terraform/hello-world](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mysql/terraform/hello-world)
> PostgreSQL
>> [https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql/terraform/hello-world](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql/terraform/hello-world)

## Go further

[MongoDB capabilities](/pages/public_cloud/public_cloud_databases/mongodb_01_concept_capabilities)

[Managing a MongoDB service from the OVHcloud Control Panel](/pages/public_cloud/public_cloud_databases/mongodb_02_manage_control_panel)

[Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
