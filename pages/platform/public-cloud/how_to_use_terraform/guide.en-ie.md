---
title: How to use Terraform
slug: how-to-use-terraform
description: Procedure of use of Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Step-by-step documentation on how to use Terraform configurations for your infrastructure
section: Tutorials
---

**Last updated 1st July 2021**

## Objective

OpenStack is an open source cloud operating system for building and managing public and private cloud computing platforms. The OpenStack software components are the foundation of the OVHcloud Public Cloud infrastructure.

The open source tool Terraform was developed to make the creation of complex cloud infrastructures easier. It enables your infrastructure's properties to be abstracted in text files which can be used as a basis to deploy your infrastructure.

**This guide explains how to use Terraform with the Public Cloud by way of practical examples.**

### Requirements

- [Configuring user access to Horizon](../configure_user_access_to_horizon/)
- [Preparing an environment for using the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/)
- [Setting OpenStack environment variables](../set-openstack-environment-variables/)
- [Your OVHcloud API identifiers and authorisation key](../../api/first-steps-with-ovh-api/)
- [An SSH key](../create-ssh-keys)
- [Terraform OpenStack provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs){.external}
- [The OVHcloud Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs){.external}

> [!primary]
>
> This tutorial is compatible with Terraform version 0.14.0 and later.
>

## Instructions

### Creating the Terraform environment

After the Terraform installation, create a directory for all text files that will describe your infrastructure:

```console
mkdir test_terraform && cd test_terraform
```

You can now create a Terraform environment with the following command. This will allow you to create and manage the evolution of your infrastructure.

```console
terraform workspace new test_terraform
```

### Creating resources

#### Creating a provider

In Terraform, you specify "providers" for your cloud environment. A "provider" (such as OVHcloud) hosts your OpenStack infrastructure resources.

In a file named *provider.tf*, put the following lines:

```python
# Define providers and set versions
terraform {
required_version    = ">= 0.14.0" # Takes into account Terraform versions from 0.14.0
  required_providers {
    openstack = {
      source  = "terraform-provider-openstack/openstack"
      version = "~> 1.42.0"
    }
 
    ovh = {
      source  = "ovh/ovh"
      version = ">= 0.13.0"
    }
  }
}
 
# Configure the OpenStack provider hosted by OVHcloud
provider "openstack" {
  auth_url    = "https://auth.cloud.ovh.net/v3/" # Authentication URL
  domain_name = "default" # Domain name - Always at 'default' for OVHcloud
  alias       = "ovh" # An alias
}
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF1.txt" download>here and "Save Link As"</a> to download the code-only text file.

The "alias" is a unique identifier for a provider. For example, if you have two OpenStack providers with different credentials, you must precise each provider in the resource.

#### Creating an instance

In Terraform, a "resource" is a component of your infrastructure. This can be an instance, a storage block, delivered by OpenStack provider or network delivered by the OVHcloud provider.

To create an instance, you need at least:

- An instance name
- An image
- A flavor
- An SSH key

For example purposes, we will create a simple instance on **Debian 10** with the flavour **s1-2**, and import an SSH key. Add the following lines to a file named *simple_instance.tf*:

```python
# Creating an SSH key pair resource
resource "openstack_compute_keypair_v2" "test_keypair" {
  provider   = openstack.ovh # Provider name declared in provider.tf
  name       = "test_keypair" # Name of the SSH key to use for creation
  public_key = file("~/.ssh/id_rsa.pub") # Path to your previously generated SSH key
}
 
# Creating the instance
resource "openstack_compute_instance_v2" "test_terraform_instance" {
  name        = "terraform_instance" # Instance name
  provider    = openstack.ovh  # Provider name
  image_name  = "Debian 10" # Image name
  flavor_name = "s1-2" # Instance type name
  # Name of openstack_compute_keypair_v2 resource named keypair_test
  key_pair    = openstack_compute_keypair_v2.test_keypair.name
  network {
    name      = "Ext-Net" # Adds the network component to reach your instance
  }
}
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF2.txt" download>here and "Save Link As"</a> to download the code-only text file.

You now need to [create a new OpenStack user](https://docs.ovh.com/ie/en/public-cloud/creation-and-deletion-of-openstack-user/) , then [generate the OpenRC file](https://docs.ovh.com/ie/en/public-cloud/set-openstack-environment-variables/#step-1-retrieve-the-variables) containing all of the credentials you want to export as environment variables.

Load this file, then enter the password for the user you created earlier:

```console
$ source openrc.sh
Please enter your OpenStack Password:
```

You now need to initialise your workspace in order to download the provider plugins:

```console
terraform init
```

To see what will be added/created/deleted in your infrastructure, you can use:

```console
terraform plan
```

You can enter the following command to import your SSH key and create your first instance:

```console
terraform apply
```

If you log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) or [the Horizon interface](https://horizon.cloud.ovh.net/auth/login/), you will find an instance named "terraform_instance".

> [!primary]
> Note that creating a second, identical instance with `terraform apply` will not work.
> <br>Terraform applies change only if it recognises a difference in your configuration files or a new file..
>

#### Creating multiple instances

In this section, we will create an Ubuntu instance of the flavor "s1-2" in three different regions.

You can find all region names by checking this OVHcloud API endpoint:

> [!api]
>
> @api {GET} cloud/project/{serviceName}/region
>

We will use the following OVHcloud regions for this example:

- GRA11
- SBG5
- BHS5

You can create three resources named "openstack_compute_instance_v2" and change the region parameter for each. It can however become difficult to manage files with a large amount of identical resources.

A better method is to use the resource meta parameter called "count". It allows you to tell Terraform to create the same resource several times.

To do this, we will create a file named "multiple_instance.tf". In it, we first define a variable containing the three regions, and then add an instance creation counter:

```python
# Create a region variable containing the list of OVHcloud regions
# It will be used to iterate over different regions in order to
# start an instance on each of them.
 variable "region" {
   type = list
   default = ["GRA11", "SBG5", "BHS5"]
 }
  
# Creating an SSH key pair
 resource "openstack_compute_keypair_v2" "test_keypair_all" {
   count = length(var.region)
   provider = openstack.ovh # Specify provider name
   name = "test_keypair_all" # Name of the SSH key
   public_key = file("~/.ssh/id_rsa.pub") # Your SSH key path
   region = element(var.region, count.index)
 }
  
 # Create a resource that is an OpenStack instance in each region
 resource "openstack_compute_instance_v2" "instances_on_all_regions" {
   # Number of times the resource will be created
   # defined by the length of the list named region
   count = length(var.region)
   provider = openstack.ovh # Provider name
   name = "terraform_instances" # Instance name
   flavor_name = "s1-2" # Instance flavor
   image_name = "Debian 10" # Image name
   # element is a function that accesses the element at the position
   # count.index of the list var.region. It allows to iterate between regions
   region = element(var.region, count.index)
   # Accesses the name of the openstack_compute_keypair_v2 resource variable named test_keypair
   key_pair = element(openstack_compute_keypair_v2.test_keypair_all.*.name, count.index)
   network {
     name = "Ext-Net" # Adds the public network to your instance
   }
 }
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF3.txt" download>here and "Save Link As"</a> to download the code-only text file.

Check the changes you need to make to your infrastructure using the following command:

```console
terraform plan
```

Apply your changes with the following command:

```console
terraform apply
```

Terraform can create multiple instances with this method but you can use it to modify you current infrastructure as well.

#### Modifying an instance

In this example we will attach a new storage volume to our first instance. Open and edit the file named "simple_instance.tf", then add the following lines:

```python
# Create a resource for storage
resource "openstack_blockstorage_volume_v2" "volume_to_add" {
  name = "simple_volume" # Volume name
  size = 10 # Volume size in GB
  provider = openstack.ovh # Provider name
}
 
# Attach the volume created previously to the instance
resource "openstack_compute_volume_attach_v2" "attached" {
  # ID of openstack_compute_instance_v2 resource named test_terraform_instance
  instance_id = openstack_compute_instance_v2.test_terraform_instance.id
  # ID of openstack_blockstorage_volume_v2 resource named volume_to_add
  volume_id = openstack_blockstorage_volume_v2.volume_to_add.id
}
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF4.txt" download>here and "Save Link As"</a> to download the code-only text file.

Check the changes you need to make to your infrastructure using the following command:

```console
terraform plan
```

Apply your changes with the following command:

```console
terraform apply
```

#### Creating an instance in the OVHcloud network (vRack)

The Terraform OVHcloud plugin can manage private networks, private subnets, Public Cloud users and vRack attachments. In this part we will focus on the network creation.

First, the OVHcloud identifiers have to be initialised in your environment. Customise the commands with your actual values:

```console
$ export OVH_ENDPOINT=ovh-eu
$ export OVH_APPLICATION_KEY=Your_key_application_OVH(or_AK)
$ export OVH_APPLICATION_SECRET=Your_secret_application_key_OVH(or_AS)
$ export OVH_CONSUMER_KEY=Your_token(or_CK)
$ export TF_ACC=1
```

Now add the following lines to the file "provider.tf":

```python
# Provider configuration
provider "ovh" {
  endpoint = "ovh-eu" # Provider entry point
  alias    = "ovh" # Provider alias
}
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF5.txt" download>here and "Save Link As"</a> to download the code-only text file.

Create a file "create_private_network_instance.tf" and enter the following:

```python
# Associating cloud project to vRack
 resource "ovh_vrack_cloudproject" "vcp" {
  service_name = "VRACK_NAME" # Replace with the name of your vRack
  project_id   = "OS_TENANT_ID" # Replace OS_TENANT_ID with your Project Tenant ID
} 
 # Creating a private network
 resource "ovh_cloud_project_network_private" "network" {
    service_name = "OS_TENANT_ID" # Replace OS_TENANT_ID with your Project Tenant ID
    name         = "private_network" # Network name
    regions      = ["OS_REGION_NAME"] # Replace OS_REGION_NAME with the environment variable OS_REGION_NAME 
    provider     = ovh.ovh # Provider name
    vlan_id      = 168 # VLAN ID for vRack
    depends_on   = [ovh_vrack_cloudproject.vcp] # Depends on the vRack's association with the cloud project
 }
  
 # Creating a subnet using the previously created private network
 resource "ovh_cloud_project_network_private_subnet" "subnet" {
    service_name = "OS_TENANT_ID" # Replace OS_TENANT_ID with your Project Tenant ID
    # ID of the ovh_cloud_network_private resource named network
    network_id   = ovh_cloud_project_network_private.network.id
    start        = "192.168.168.100" # First IP of the subnet
    end          = "192.168.168.200" # Last IP of the subnet
    network      = "192.168.168.0/24" # Subnet IP address location
    dhcp         = true # Enables DHCP
    region       = "OS_REGION_NAME" # Replace OS_REGION_NAME with the environment variable OS_REGION_NAME
    provider     = ovh.ovh # Provider name
    no_gateway   = true # No default gateway
 }
  
# Creating an instance with 2 network interfaces
 resource "openstack_compute_instance_v2" "proxy_instance" {
   provider     = openstack.ovh # Provider name
   name         = "proxy_instance" # Instance name
   image_name   = "Debian 10" # Image name
   flavor_name  = "s1-2" # Flavor name
   # Name of openstack_compute_keypair_v2 resource named keypair_test
   key_pair     = openstack_compute_keypair_v2.test_keypair.name
   # Add public and private network
   network {
        name    = "Ext-Net"
    }
   network {
        name    = ovh_cloud_project_network_private.network.name
    }
 }
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF6.txt" download>here and "Save Link As"</a> to download the code-only text file.

Check the changes you need to make to your infrastructure using the following command:

```console
terraform plan
```

Apply your changes using the following command:

```console
terraform apply
```

In your Public Cloud project, you will see a new instance appear, with a public and private interface.

#### Creating an infrastructure for a web site

In this example, we will create a basic web site infrastructure using Terraform and the OVHcloud private network. The components created are:

- a private network
- a subnet
- two instances with two network interfaces each: the first one public and the second one private
- an instance with a private interface and two additional disks

![public-cloud](images/basic_infrastructure_for_a_web_site.png){.thumbnail}

Create a file named "simple_web_site.tf" and enter the following lines:

```python
# Creating a private network
resource "ovh_cloud_project_network_private" "private_network" {
  service_name  = "c076ca2979904ef6bf93faff181dab18" # Replace OS_TENANT_ID with your Tenant Project ID
  name          = "backend" # Network name
  regions       = ["SBG5"] # Replace OS_REGION_NAME with the OS_REGION_NAME environment variable
  provider      = ovh.ovh # Provider name
  vlan_id       = 42 # vRack vlan ID
  depends_on    = [ovh_vrack_cloudproject.vcp] # Depends on vRack being associated with the cloud project
}
 
# Creating a private subnet
resource "ovh_cloud_project_network_private_subnet" "private_subnet" {
  # ID for the ovh_cloud_network_private resource named private_network
  network_id    = ovh_cloud_project_network_private.private_network.id
  service_name  = "c076ca2979904ef6bf93faff181dab18" # Replace OS_TENANT_ID with your Tenant Project ID
  region        = "SBG5" # Replace OS_REGION_NAME with the environment variable OS_REGION_NAME
  network       = "192.168.42.0/24" # Subnet IP
  start         = "192.168.42.2" # First IP of the subnet
  end           = "192.168.42.200" # Last IP of the subnet
  dhcp          = false # Disabling DHCP
  provider      = ovh.ovh # Provider name
  no_gateway    = true # No default gateway
}
 
# Search for the latest Archlinux image
data "openstack_images_image_v2" "archlinux" {
  name          = "Archlinux" # Image name
  most_recent   = true # Limits search to the most recent
  provider      = openstack.ovh # Provider name
}
 
# List of possible private IP addresses for front-ends
variable "front_private_ip" {
  type          = list(any)
  default       = ["192.168.42.2", "192.168.42.3"]
}
 
# Create 2 instances with 2 network interfaces
resource "openstack_compute_instance_v2" "front" {
  count           = length(var.front_private_ip) # Number of instances to create
  provider        = openstack.ovh # Provider name
  name            = "front" # Instance name
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2" # Instance type name
  image_id        = data.openstack_images_image_v2.archlinux.id # Instance image ID
  security_groups = ["default"] # Adds the instance to the security group
  network {
    name = "Ext-Net" # Public network interface name
  }
  network {
    # Private network interface name
    name = ovh_cloud_project_network_private.private_network.name
    # IP address taken from the list defined earlier
    fixed_ip_v4 = element(var.front_private_ip, count.index)
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet] # Depends on private network
}
 
# Create an attachable storage device for the backup (volume)
resource "openstack_blockstorage_volume_v2" "backup" {
  name     = "backup_disk" # Name of storage device
  size     = 10 # Size
  provider = openstack.ovh # Provider name
}
 
# Create an instance with a network interface and storage device
resource "openstack_compute_instance_v2" "back" {
  provider        = openstack.ovh # Provider name
  name            = "back" # Instance name
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2" # Instance type name
  image_id        = data.openstack_images_image_v2.archlinux.id # Instance image ID
  security_groups = ["default"] # Adds the instance to the security group
  network {
    name        = ovh_cloud_project_network_private.private_network.name # Private network name
    fixed_ip_v4 = "192.168.42.150" # Private IP address chosen arbitrarily
  }
  # Bootable storage device containing the OS
  block_device {
    uuid                  = data.openstack_images_image_v2.archlinux.id # Instance image ID
    source_type           = "image" # Source type
    destination_type      = "local" # Destination
    volume_size           = 10 # Size
    boot_index            = 0  # Boot order
    delete_on_termination = true  # The device will be deleted when the instance is deleted
  }
  # Storage device
  block_device {
    source_type           = "blank" # Source type
    destination_type      = "volume" # Destination
    volume_size           = 20 # Size
    boot_index            = 1 # Boot order
    delete_on_termination = true # The device will be deleted when the instance is deleted
  }
  # Previously created storage device
  block_device {
    uuid                  = openstack_blockstorage_volume_v2.backup.id # Storage Device ID
    source_type           = "volume" # Source type
    destination_type      = "volume" # Destination
    boot_index            = 2 # Boot order
    delete_on_termination = true # The device will be deleted when the instance is deleted
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet] # Depends on private network
}
```

Right-click <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF7.txt" download>here and "Save Link As"</a> to download the code-only text file.

Check the changes you need to make to your infrastructure using the following command:

```console
terraform plan
```

Apply your changes with the following command:

```console
terraform apply
```

### Deleting an infrastructure

To remove every resource you can enter the following command:

```console
terraform destroy
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
