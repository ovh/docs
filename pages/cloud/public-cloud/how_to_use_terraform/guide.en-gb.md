---
title: How to use Terraform
slug: how-to-use-terraform
description: Procedure of use of Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Step-by-step documentation on how to use the Terraform utils to abstract your infrastructure
section: Getting started
---


## Preamble
OpenStack is a cloud operating system open source for creating public and private instances. OpenStack is offered in the Public Cloud product in OVH. Terraform, also open source, is a tool developed in order to easily create complex cloud infrastructure. It abstracts many concepts, give a way to describe your infrastructure in plain text file and deploy this infrastructure thanks to this file. In this guide, we explain to you how to use Terraform.


### Prerequisites
- An OpenStack user
- OpenStack environment variables
- [Your OVH API identifiers and OVH authorisation key](https://eu.api.ovh.com/g934.first_step_with_api){.external}
- [An SSH key](../guide.en-gb.md){.ref}
- [Terraform executable](https://www.terraform.io/intro/getting-started/install.html){.external}
- [OpenStack executables](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux_OpenStack_Platform/4/html/End_User_Guide/install_clients.html){.external}



> [!primary]
>
> This tutorial was made with the following version : Terraform v0.9.11
> 


## Create an Terraform environment
After the Terraform installation, we create a directory so that we can put all text files that describe your infrastructure. Create a directory test_terraform, and go into it :


```console
mkdir test_terraform && cd test_terraform
```

Now we can create a Terraform environment. Thanks to this environment, Terraform can create and manage the evolution of your infrastructure. The following command line can create a new Terraform environment :


```console
terraform env new test_terraform
```


## Create resources

### Create the provider
The provider, like OVH, gives you an environment to create and develop amazing applications. In Terraform a provider is the entry point of your cloud environment.

In a file provider.tf, put the following :


```python
# Configure the OpenStack provider hosted by OVH
provider "openstack" {
  auth_url = "https://auth.cloud.ovh.net/v3" # Authentication URL
  domain_name = "default" # Domain Name - Always "default" for OVH
  alias = "ovh" # An alias
}
```

An alias is an unique identifier of a provider. If you have 2 OpenStack provider with different credentials you must precise the provider in the resource.


### Create an instance
In Terraform, a resource is a component of your infrastructure. This can be an instance, a storage block, delivered by OpenStack provider or network delivered by OVH provider.

To create a simple instance, you need 4 things :

- An instance name
- An image
- A flavor
- A SSH key

To find all flavor names, or instances types, you can enter the following command :


```console
nova flavor-list
```

In this list we decide to take "s1-2" flavor.

To find all image name you can enter the following command :


```console
glance image-list
```

In this list, we decide to take "Ubuntu 16.04" image.

Here, we want to create a simple instance with Ubuntu 16.04 with the flavor s1-2 and upload SSH key, with Terraform. Put the following in a file named simple_instance.tf :


```python
# Create an SSH key pair resource
resource "openstack_compute_keypair_v2" "test_keypair" {
  provider = "openstack.ovh" # Precise the provider name
  name = "test_keypair" # SSH key's name
  public_key = "${file("~/.ssh/id_rsa.pub")}" # Path of your SSH key
}

# Create an instance OpenStack
resource "openstack_compute_instance_v2" "test_terraform_instance" {
  name = "terraform_instance" # Instance's name
  provider = "openstack.ovh" # Provider's name
  image_name = "Ubuntu 16.04" # Image's name
  flavor_name = "s1-2" # Flavor's name
  # Get the name of the resource openstack_compute_keypair_v2 named test_keypair
  key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
  network {
    name = "Ext-Net" # Add the network component to contact your machine
  }
}
```

All the requested files are now created, you can enter the following command to create the instance and the SSH key pair resources :


```console
terraform apply
```

Wait a moment, look into you OVH Cloud panel, and you will see your instance named "terraform_instance".

Launch again the previous command and you can see there is no change. Terraform applies change only if there are difference in configuration files or new one. But how to create multiple instances ?


### Create multiple instances
In this section, we want to create one Ubuntu instance on the flavor s1-2 in each region.

To find all region names you must look [the OVH API](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region#GET){.external} For example in OVH, you can find these 3 regions :

- GRA3
- SBG3
- BHS3

But how to make one instance in each region ? You can create 3 resources named openstack_compute_instance_v2 and change the region parameter, but it can become difficult to manage files with a large amount of identical resources. That's why the resource contain a meta parameter call count. It guarantees that the resource will be created n times, with n the number pass to this meta parameter.

To do that we create a file named multiple_instance.tf and put the following :


```python
# Create a variable region that is a list content all OVH regions
variable "region" {
  type = "list"
  default = ["GRA3", "SBG3", "BHS3"]
}

# Create SSH key
resource "openstack_compute_keypair_v2" "test_keypair_all" {
  count = "${length(var.region)}"
  provider = "openstack.ovh" # Provider name
  name = "test_keypair_all" # SSH key name
  public_key = "${file("~/.ssh/id_rsa.pub")}" # SSH key path
  region = "${element(var.region, count.index)}"
}


# Create a resource content an OpenStack instance on each regions
resource "openstack_compute_instance_v2" "instances_on_all_regions" {
  # Number of times the resource will be created
  # Here the length of the list named region
  count = "${length(var.region)}"
  provider = "openstack.ovh" # Precise the provider name
  name = "terraform_instances" # Name of your instance
  flavor_name = "s1-2" # Flavor's name
  image_name = "Ubuntu 16.04" # Image's name
  # element is a function that access to an element at the position
  # count.index in the list var.region
  region = "${element(var.region, count.index)}"
  # Access to name variable from the resource openstack_compute_keypair_v2
  # named test_keypair
  key_pair = "${element(openstack_compute_keypair_v2.test_keypair_all.*.name, count.index)}"
  network {
    name = "Ext-Net" # Add the network component to contact your machine
  }
}
```

Of course we can copy paste, the same resource and specify the region name, it works but that's a lot to do.

Don't forget to apply your change with the following command :


```console
terraform apply
```

With Terraform is simple to create multiple instances but it's also easy to modify you current infrastructure.


### Modify an instance
Here we want to attach a new storage volume to our first instance. To do that edit the file named simple_instance.tf and add the following lines :


```python
# Create a resource to store new thing
resource "openstack_blockstorage_volume_v2" "volume_to_add" {
  name = "simple_volume" # Storage's name
  size = 10 # Storage size
  provider = "openstack.ovh" # Provider's name
}

# Attach the volume create previously to the instance
resource "openstack_compute_volume_attach_v2" "attached" {
  # Get the id of your openstack_compute_instance_v2 named test_terraform_instance
  instance_id = "${openstack_compute_instance_v2.test_terraform_instance.id}"
  # Get the id of your openstack_blockstorage_volume_v2 named volume to add
  volume_id = "${openstack_blockstorage_volume_v2.volume_to_add.id}"
}
```

Don't forget to apply your change with :


```console
terraform apply
```

Terraform have attached this new device for you without losting your old data, and allowed you to upgrade your infrastructure.


### Create an instance in the OVH network
The Terraform OVH plugin can create for you, private network, private sub networks, Public Cloud user and vRack attachment. In this part we focus on the network creation.

First of all, you must load the OVH identifiers in your environment. Theses OVH API identifiers are :


```console
export OVH_ENDPOINT=ovh-eu
export OVH_APPLICATION_KEY=Your_application_key_OVH(or_AK)
export OVH_APPLICATION_SECRET=Your_application_secret_key_OVH(or_AS)
export OVH_VRACK=vRack_identification_OVH
export OVH_PUBLIC_CLOUD=Your_tenant_id_openstack
export TF_ACC=1
export OVH_CONSUMER_KEY=Your_token(or_CK)
```

Then add to the file provider.tf the following :


```python
# Configure the OVH Provider
provider "ovh" {
  endpoint = "ovh-eu" # Endpoint of the provider
  alias = "ovh" # An alias
}
```

Create a file create_private_instance.tf, and put the following :


```python
# Create a private network
resource "ovh_publiccloud_private_network" "network" {
   project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
   name = "private_network" # Network's name
   regions = ["OS_REGION_NAME"] # With OS_REGION_NAME the OS_REGION_NAME environment variable
   provider = "ovh.ovh" # Provider name
   vlan_id = 168 # vRack identifier
}

# Create a subnet work in the previous network
resource "ovh_publiccloud_private_network_subnet" "subnet" {
   project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
   # Get the id of the resource ovh_publiccloud_private_network named network
   network_id = "${ovh_publiccloud_private_network.network.id}"
   start = "192.168.168.100" # First IP for the subnet
   end = "192.168.168.200" # Last IP for the subnet
   network = "192.168.168.0/24" # Global network
   dhcp = true # Active the DHCP
   region = "OS_REGION_NAME" # With the OS_REGION_NAME the OS_REGION_NAME environment variable
   provider = "ovh.ovh" # Provider name
}

# Create an instance with 2 network interfaces
resource "openstack_compute_instance_v2" "proxy_instance" {
  provider = "openstack.ovh" # Provider's name
  name = "proxy_instance" # Instance's name
  image_name = "Ubuntu 16.04" # Image's name
  flavor_name = "s1-2" # Flavor's name
  # Get the name of the resource openstack_compute_keypair_v2 named test_keypair
  key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
  # Add to the public network and the private network
  network = [{name = "Ext-Net"}, {name = "${ovh_publiccloud_private_network.network.name}"}]
}
```

You have just created an instance with 2 interfaces in the OVH Public Cloud.


### Create an infrastructure for a web site
In this example, we want to make a basic web site infrastructure using Terraform and the OVH private network. In this part we want to create :

- A private network
- A sub network
- 2 instances with 2 network interfaces : the first one public and the second one private
- 1 instances with 1 private interface and 2 extra hard disk


![public-cloud](images/basic_infrastructure_for_a_web_site.png){.thumbnail}

To do that, we create a file named simple_web_site.tf :


```python
# Create a private network
resource "ovh_publiccloud_private_network" "private_network" {
  name = "backend" # Network's name
  regions = ["OS_REGION_NAME"] # With the OS_REGION_NAME the OS_REGION_NAME environment variable
  provider = "ovh.ovh" # Provider's name
  project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
  vlan_id = 42 # vRack identifier
}

# Create a private sub network
resource "ovh_publiccloud_private_network_subnet" "private_subnet" {
  # Get the id of the resource ovh_publiccloud_private_network named
  # private_network
  network_id = "${ovh_publiccloud_private_network.private_network.id}"
  project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
  region = "OS_REGION_NAME" # With OS_REGION_NAME the OS_REGION_NAME environment variable
  network = "192.168.42.0/24" # Global network
  start = "192.168.42.2" # First IP for the subnet
  end = "192.168.42.200" # Last IP for the subnet
  dhcp = false # Deactivate the DHCP service
  provider = "ovh.ovh" # Provider's name
}

# Find the most recent image Archlinux
data "openstack_images_image_v2" "archlinux" {
  name = "Archlinux" # Image's name
  most_recent = true # Find the most recent
  provider = "openstack.ovh" # Provider's name
}

# List of private IP that take front instance
variable "front_private_ip" {
  type = "list"
  default = ["192.168.42.2", "192.168.42.3"]
}

# Create 2 instances with 2 network interfaces
resource "openstack_compute_instance_v2" "front" {
  # Number of time the instance will be created
  count = "${length(var.front_private_ip)}"
  provider = "openstack.ovh" # Provider's name
  name = "front" # Instance's name
  flavor_name = "s1-2" # Flavor's name
  image_id = "${data.openstack_images_image_v2.archlinux.id}" # Image's id
  security_groups = ["default"] # Add into a security group
  network = [
    {
      name = "Ext-Net" # Public interface name
    },
    {
      # Private interface name
      name = "${ovh_publiccloud_private_network.private_network.name}"
      # Give an IP address depending on count.index
      fixed_ip_v4 = "${element(var.front_private_ip, count.index)}"
    }
  ]
}

# Create 1 hard disk attachable and detachable
resource "openstack_blockstorage_volume_v2" "backup" {
  name = "backup_disk" # Hard disk name
  size = 10 # Size
  provider = "openstack.ovh" # Provider's name
}

# Create 1 instance with 1 network interface and 1 extra hard disk
resource "openstack_compute_instance_v2" "back" {
  provider = "openstack.ovh" # Provider's name
  name = "back" # Instance's name
  flavor_name = "s1-2" # Flavor's name
  image_id = "${data.openstack_images_image_v2.archlinux.id}" # Image's id
  security_groups = ["default"] # Add into a security group
  network = [
    {
      name = "${ovh_publiccloud_private_network.private_network.name}" # Private interface name
      fixed_ip_v4 = "192.168.42.150" # Private IP
    }
  ]
  # Instance hard disk bootable content the Operating System
  block_device {
    uuid = "${data.openstack_images_image_v2.archlinux.id}" # Image's ID
    source_type = "image" # Source type of the block device
    destination_type = "local" # Destination
    volume_size = 10 # Size
    boot_index = 0 # Boot order
    delete_on_termination = true # It will be deleted when the instance will be deleted
  }
  # Hard disk create and attach directly with the instance
  block_device {
    source_type = "blank" # Source type of the block device
    destination_type = "volume" # Destination
    volume_size = 20 # Size
    boot_index = 1 # Boot order
    delete_on_termination = true # If it will be deleted when the instance will be deleted
  }
  # Hard disk created previously and attach
  block_device {
    uuid = "${openstack_blockstorage_volume_v2.backup.id}" # Volume id
    source_type = "volume" # Source type of the block device
    destination_type = "volume" # Destination
    boot_index = 2 # Boot order
    delete_on_termination = true # If it will be deleted when the instance will be deleted
 }
}
```


## Destroy everything
Terraform can create an infrastructure but can destroy it too, if needed. If you want to remove every resource you can enter the following command :


```console
terraform destroy
```



> [!primary]
>
> If you encounter some problems at the destruction, don't hesitate to relaunch the command.
> 
