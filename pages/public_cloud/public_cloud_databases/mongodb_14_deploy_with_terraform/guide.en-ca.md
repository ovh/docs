---
title: MongoDB - Tutorial - How to deploy a database with Terraform
excerpt: Find out how to to set up an OVHcloud managed MongoDB service via Terraform within a vRack, as well as how to access it from other parts of your infrastructure.
updated: 2024-04-17
---

## Objective

The vRack offered by OVHcloud is a private network solution that allows our customers to route their traffic between their OVHcloud services, eg. instances, physical dedicated servers, or, in this case, a managed database service.

**This tutorial shows you how to set up an OVHcloud managed MongoDB service via Terraform within a vRack, as well as how to access it from other parts of your infrastructure.**

However, if you would like to know how to do the same with Terraform, but over a public network, read our guide "[Getting started with Public Cloud Databases via Terraform ](/pages/public_cloud/public_cloud_databases/databases_09_order_terraform)".

## Requirements

- **OVHcloud requirements**
    - A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
    - Access to the [OVHcloud Control Panel](/links/manager)
    - A private vRack network that can be accessed from your Public Cloud project (if you don’t have one, please refer to our guide [Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).
    - An OpenStack user account in your Public Cloud project (if you don’t have one, please refer to the following guide: [Creating and deleting OpenStack users](/pages/public_cloud/compute/create_and_delete_a_user/).
- **Terraform requirements**
    - You must have downloaded the `openrc.sh` file for interaction with the OpenStack platform. If not already downloaded, please refer to the following guide: [Setting OpenStack environment variables](/pages/public_cloud/compute/loading_openstack_environment_variables)
    - You must have created a token to log in to the OVHcloud API. If it's not already created, please refer to the following guide: [First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps)

## Instructions

### How to deploy the MongoDB database on a private network

<a name="declaration"></a>

#### Step 1 - Declaration of providers (Terraform, providers, authentication)

The first thing you need to do is tell Terraform which providers you will be using:

- OVHcloud, for database server resources;
- OpenStack, for network resources

```bash
terraform {
  required_providers {
    ovh = {
      source = "ovh/ovh"
      version = "~> 0.35.0"
    }
    openstack = {
      source = "terraform-provider-openstack/openstack"
      version = "~> 1.51.1"
    }
  }

  required_version = ">= 0.17.1"
}
```

These are the latest versions. If you need to, you can update to the latest version available.

Then, declare a first block concerning authentication details with OVHcloud Terraform provider (these are the tokens created beforehand).

```bash
provider "ovh" {
  endpoint           = var.ovh.endpoint
  application_key    = var.ovh.application_key
  application_secret = var.ovh.application_secret
  consumer_key       = var.ovh.consumer_key
}
```

This information is stored separately, in a `variables.tf` file of this type:

```bash
variable "ovh" {
  type = map(string)
  default = {
    endpoint           = "ovh-eu"
    application_key    = "xxx"
    application_secret = "yyy"
    consumer_key       = "zzz"
  }
}
```

For OpenStack, use the `openrc.sh` file, which has been previously downloaded.

Openstack variables are read (source `openrc.sh)`, then Terraform accesses them directly during execution.

```bash
# Configure OpenStack Provider
"openstack" { provider
  auth_url    = "https://auth.cloud.ovh.net/v3.0/"

  # Credentials are acquired by a previous `source openrc.sh`
}
```

#### Step 2 - Creating a network resource, the Private Network

Inside the vRack, Terraform will deploy a new private network. Here, we have chosen to create a subnet (`192.168.12.0/24`) within this private network for future use, in which we can enable DHCP in a range `192.168.12.100-192.168.12.200`.

This means that if you deploy instances later on, in the same subnet, they will benefit from DHCP and their address pool would already be declared.

```bash
resource "openstack_networking_network_v2" "my_private_network" {
  name           = var.network.name
  admin_state_up = "true"
  region         = var.network.region
}

resource "openstack_networking_subnet_v2" "my_subnet" {
  network_id      = openstack_networking_network_v2.my_private_network.id
  name            = "mySubnet"
  region          = var.network.region
  cidr            = "192.168.12.0/24"
  enable_dhcp     = true
  no_gateway      = false
  dns_nameservers = ["213.186.33.99"]

  allocation_pool {
    start = "192.168.12.100"
    end   = "192.168.12.200"
  }
}
```

#### Step 3 - Creating a MongoDB resource

You can now define the service for the MongoDB managed database.

The features selected for this service will be listed:

- size (flavor);
- Service level (plan);
- version.

You will also need to attach it to a `service_name`, which, in this case, matches your `project_id`.

An important distinction between private network and public network deployment is that at this stage, you need to tell Terraform that each node will be part of the private network by specifying the `subnet_id` and `network_id` variables as follows:

```bash
resource "ovh_cloud_project_database" "service" {
  service_name = var.product.project_id
  description  = "terraform-hello-world"
  engine       = "mongodb"
  version      = "6.0"
  plan         = "production"
  flavor       = "db2-2"

  nodes {
    region = var.product.region
    subnet_id  = openstack_networking_subnet_v2.my_subnet.id
    network_id = openstack_networking_network_v2.my_private_network.id
  }
  nodes {
    region = var.product.region
    subnet_id  = openstack_networking_subnet_v2.my_subnet.id
    network_id = openstack_networking_network_v2.my_private_network.id
  }
  nodes {
    region = var.product.region
    subnet_id  = openstack_networking_subnet_v2.my_subnet.id
    network_id = openstack_networking_network_v2.my_private_network.id
  }
}
```

The MongoDB service should have been created and made available within the private network at this point, but connecting directly to it won’t be possible.
For security reasons, you need to complete deployment by carrying out a final step.

#### Step 4 - Setting up access restriction

To access the MongoDB service, you will need to create connection permissions for IP addresses.

So, add the IP range `192.168.12.0/24`, which you picked and used when you declared the private network ([Declaration step](#declaration)).
This way, all Public Cloud instances hosted on it can directly access the MongoDB service.

```bash
resource "ovh_cloud_project_database_ip_restriction" "iprestriction" {
  service_name = ovh_cloud_project_database.service.service_name
  engine       = ovh_cloud_project_database.service.engine
  cluster_id   = ovh_cloud_project_database.service.id
  ip           = "192.168.12.0/24"
}
```

Of course, you can be more restrictive and provide several IP addresses separately in /32, to target only certain authorised sources.

#### Step 5 - User management

To access the MongoDB service, you need to be an authenticated user.
By default, the cluster will be delivered with the user `admin@admin`, whose password you can reset via the OVHcloud Control Panel to log in directly.

You can also add another user via Terraform, with full wide read/write permissions on all databases, as follows:

```bash
resource "ovh_cloud_project_database_mongodb_user" "tf_user" {
  service_name = ovh_cloud_project_database.service.service_name
  cluster_id   = ovh_cloud_project_database.service.id
  name         = "tf_mongodb_user"
  roles        = ["readWriteAnyDatabase@admin"]
}
```

#### Step 6 - Useful information

At the end of the Terraform script, it is always useful to prepare some “outputs” that will provide relevant information to keep in mind at the end of the setup.

In our case:

- the MongoDB connection URI;
- the login details of the user created by Terraform, including their password.

```bash
output "cluster_uri" {
  value = ovh_cloud_project_database.service.endpoints.0.uri
}

output "user_name" {
  value = ovh_cloud_project_database_mongodb_user.tf_user.name
}

output "user_password" {
  value     = ovh_cloud_project_database_mongodb_user.tf_user.password
  sensitive = true
}
```

#### Step 7 - Terraform Plan Command

```bash
$ terraform apply
[…]
Plan: 5 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + cluster_uri   = (known after apply)
  + user_name     = "tf_mongodb_user@admin"
  + user_password = (sensitive value)

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only “yes” will be accepted to approve.

  Enter a value: yes

openstack_networking_network_v2.my_private_network: Creating...
openstack_networking_subnet_v2.my_subnet: Creating...
ovh_cloud_project_database.service: Creating...
[…]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.

Outputs:

cluster_uri = "mongodb+srv://<username>:<password>@mongodb-xxx-yyy.database.cloud.ovh.net/admin?replicaSet=replicaset&tls=true"
user_name = "tf_mongodb_user@admin"
user_password = <sensitive>
```

### Connection test using an instance of the same private network

> [!success]
>
> You can also use a Floating IP to reach your private network from a public IP address. For more information, read our guide "[Attaching a Floating IP to a Public Cloud instance](/pages/public_cloud/public_cloud_network_services/getting-started-03-attach-floating-ip-to-instance)".
>

**Requirements**: MongoDB CLI, or `mongos`”, installed on the server from which you want to initiate connection.

```bash
root@d2-2-gra9:~# mongosh --version
1.6.1
```

This makes it easy to log in using the information obtained in the Terraform output.

Replace `username` and `password` in the URI, then use the following command:

```bash
root@d2-2-gra9:~# mongosh "mongodb+srv:// ://<username>:<password>@mongodb-xxx-yyy.database.cloud.ovh.net/admin?replicaSet=replicaset&tls=true"
Current Mongosh Log ID:	65a69dafc492ec7f1fd98d24
Connecting to:		mongodb+srv://<credentials>@mongodb-xxx-yyy.database.cloud.ovh.net/admin?replicaSet=replicaset&tls=true&appName=mongosh+1.6.1
Using MongoDB:		6.0.12
Using Mongosh:		1.6.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt out by running the disableTelemetry() command.

replicaset [primary] admin>
```

You are now connected to your MongoDB managed database from a machine on your private network, fully deployed with Terraform.

## We want your feedback!

For more information about Managed Databases for MongoDB, please visit our [product page](https://www.ovhcloud.com/fr/public-cloud/mongodb/).

Visit the [Terraform repository](https://registry.terraform.io/providers/ovh/ovh/latest) to find the latest documentation about OVHcloud provider.

We would love to help answer questions and appreciate any feedback you may have.

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
