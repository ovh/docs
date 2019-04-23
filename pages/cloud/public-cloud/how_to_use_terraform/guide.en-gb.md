---
title: How to use Terraform
slug: how-to-use-terraform
description: Procedure of use of Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Step-by-step documentation on how to use the Terraform utils to abstract your infrastructure
section: Tutorials
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
1. $ mkdir test_terraform && cd test_terraform
```

Now we can create a Terraform environment. Thanks to this environment, Terraform can create and manage the evolution of your infrastructure. The following command line can create a new Terraform environment :


```console
1. $ terraform env new test_terraform
```


## Create resources

### Create the provider
The provider, like OVH, gives you an environment to create and develop amazing applications. In Terraform a provider is the entry point of your cloud environment.

In a file provider.tf, put the following :


```python
1. # Configure the OpenStack provider hosted by OVH
2. provider "openstack" {
3.   auth_url = "https://auth.cloud.ovh.net/v3" # Authentication URL
4.   domain_name = "default" # Domain Name - Always "default" for OVH
5.   alias = "ovh" # An alias
6. }
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
1. $ nova flavor-list
```

In this list we decide to take "s1-2" flavor.

To find all image name you can enter the following command :


```console
1. $ glance image-list
```

In this list, we decide to take "Ubuntu 16.04" image.

Here, we want to create a simple instance with Ubuntu 16.04 with the flavor s1-2 and upload SSH key, with Terraform. Put the following in a file named simple_instance.tf :


```python
1. # Create an SSH key pair resource
2. resource "openstack_compute_keypair_v2" "test_keypair" {
3.   provider = "openstack.ovh" # Precise the provider name
4.   name = "test_keypair" # SSH key's name
5.   public_key = "${file("~/.ssh/id_rsa.pub")}" # Path of your SSH key
6. }
7. 
8. # Create an instance OpenStack
9. resource "openstack_compute_instance_v2" "test_terraform_instance" {
10.   name = "terraform_instance" # Instance's name
11.   provider = "openstack.ovh" # Provider's name
12.   image_name = "Ubuntu 16.04" # Image's name
13.   flavor_name = "s1-2" # Flavor's name
14.   # Get the name of the resource openstack_compute_keypair_v2 named test_keypair
15.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
16.   network {
17.     name = "Ext-Net" # Add the network component to contact your machine
18.   }
19. }
```

All the requested files are now created, you can enter the following command to create the instance and the SSH key pair resources :


```console
1. $ terraform apply
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
1. # Create a variable region that is a list content all OVH regions
2. variable "region" {
3.   type = "list"
4.   default = ["GRA3", "SBG3", "BHS3"]
5. }
6. 
7. # Create SSH key
8. resource "openstack_compute_keypair_v2" "test_keypair_all" {
9.   count = "${length(var.region)}"
10.   provider = "openstack.ovh" # Provider name
11.   name = "test_keypair_all" # SSH key name
12.   public_key = "${file("~/.ssh/id_rsa.pub")}" # SSH key path
13.   region = "${element(var.region, count.index)}"
14. }
15. 
16. 
17. # Create a resource content an OpenStack instance on each regions
18. resource "openstack_compute_instance_v2" "instances_on_all_regions" {
19.   # Number of times the resource will be created
20.   # Here the length of the list named region
21.   count = "${length(var.region)}"
22.   provider = "openstack.ovh" # Precise the provider name
23.   name = "terraform_instances" # Name of your instance
24.   flavor_name = "s1-2" # Flavor's name
25.   image_name = "Ubuntu 16.04" # Image's name
26.   # element is a function that access to an element at the position
27.   # count.index in the list var.region
28.   region = "${element(var.region, count.index)}"
29.   # Access to name variable from the resource openstack_compute_keypair_v2
30.   # named test_keypair
31.   key_pair = "${element(openstack_compute_keypair_v2.test_keypair_all.*.name, count.index)}"
32.   network {
33.     name = "Ext-Net" # Add the network component to contact your machine
34.   }
35. }
```

Of course we can copy paste, the same resource and specify the region name, it works but that's a lot to do.

Don't forget to apply your change with the following command :


```console
1. $ terraform apply
```

With Terraform is simple to create multiple instances but it's also easy to modify you current infrastructure.


### Modify an instance
Here we want to attach a new storage volume to our first instance. To do that edit the file named simple_instance.tf and add the following lines :


```python
1. # Create a resource to store new thing
2. resource "openstack_blockstorage_volume_v2" "volume_to_add" {
3.   name = "simple_volume" # Storage's name
4.   size = 10 # Storage size
5.   provider = "openstack.ovh" # Provider's name
6. }
7. 
8. # Attach the volume create previously to the instance
9. resource "openstack_compute_volume_attach_v2" "attached" {
10.   # Get the id of your openstack_compute_instance_v2 named test_terraform_instance
11.   instance_id = "${openstack_compute_instance_v2.test_terraform_instance.id}"
12.   # Get the id of your openstack_blockstorage_volume_v2 named volume to add
13.   volume_id = "${openstack_blockstorage_volume_v2.volume_to_add.id}"
14. }
```

Don't forget to apply your change with :


```console
1. $ terraform apply
```

Terraform have attached this new device for you without losting your old data, and allowed you to upgrade your infrastructure.


### Create an instance in the OVH network
The Terraform OVH plugin can create for you, private network, private sub networks, Public Cloud user and vRack attachment. In this part we focus on the network creation.

First of all, you must load the OVH identifiers in your environment. Theses OVH API identifiers are :


```console
1. $ export OVH_ENDPOINT=ovh-eu
2. $ export OVH_APPLICATION_KEY=Your_application_key_OVH(or_AK)
3. $ export OVH_APPLICATION_SECRET=Your_application_secret_key_OVH(or_AS)
4. $ export OVH_VRACK=vRack_identification_OVH
5. $ export OVH_PUBLIC_CLOUD=Your_tenant_id_openstack
6. $ export TF_ACC=1
7. $ export OVH_CONSUMER_KEY=Your_token(or_CK)
```

Then add to the file provider.tf the following :


```python
1. # Configure the OVH Provider
2. provider "ovh" {
3.   endpoint = "ovh-eu" # Endpoint of the provider
4.   alias = "ovh" # An alias
5. }
```

Create a file create_private_instance.tf, and put the following :


```python
1. # Create a private network
2. resource "ovh_publiccloud_private_network" "network" {
3.    project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
4.    name = "private_network" # Network's name
5.    regions = ["OS_REGION_NAME"] # With OS_REGION_NAME the OS_REGION_NAME environment variable
6.    provider = "ovh.ovh" # Provider name
7.    vlan_id = 168 # vRack identifier
8. }
9. 
10. # Create a subnet work in the previous network
11. resource "ovh_publiccloud_private_network_subnet" "subnet" {
12.    project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
13.    # Get the id of the resource ovh_publiccloud_private_network named network
14.    network_id = "${ovh_publiccloud_private_network.network.id}"
15.    start = "192.168.168.100" # First IP for the subnet
16.    end = "192.168.168.200" # Last IP for the subnet
17.    network = "192.168.168.0/24" # Global network
18.    dhcp = true # Active the DHCP
19.    region = "OS_REGION_NAME" # With the OS_REGION_NAME the OS_REGION_NAME environment variable
20.    provider = "ovh.ovh" # Provider name
21. }
22. 
23. # Create an instance with 2 network interfaces
24. resource "openstack_compute_instance_v2" "proxy_instance" {
25.   provider = "openstack.ovh" # Provider's name
26.   name = "proxy_instance" # Instance's name
27.   image_name = "Ubuntu 16.04" # Image's name
28.   flavor_name = "s1-2" # Flavor's name
29.   # Get the name of the resource openstack_compute_keypair_v2 named test_keypair
30.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
31.   # Add to the public network and the private network
32.   network = [{name = "Ext-Net"}, {name = "${ovh_publiccloud_private_network.network.name}"}]
33. }
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
1. # Create a private network
2. resource "ovh_publiccloud_private_network" "private_network" {
3.   name = "backend" # Network's name
4.   regions = ["OS_REGION_NAME"] # With the OS_REGION_NAME the OS_REGION_NAME environment variable
5.   provider = "ovh.ovh" # Provider's name
6.   project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
7.   vlan_id = 42 # vRack identifier
8. }
9. 
10. # Create a private sub network
11. resource "ovh_publiccloud_private_network_subnet" "private_subnet" {
12.   # Get the id of the resource ovh_publiccloud_private_network named
13.   # private_network
14.   network_id = "${ovh_publiccloud_private_network.private_network.id}"
15.   project_id = "OS_TENANT_ID" # With OS_TENANT_ID your tenant id's project
16.   region = "OS_REGION_NAME" # With OS_REGION_NAME the OS_REGION_NAME environment variable
17.   network = "192.168.42.0/24" # Global network
18.   start = "192.168.42.2" # First IP for the subnet
19.   end = "192.168.42.200" # Last IP for the subnet
20.   dhcp = false # Deactivate the DHCP service
21.   provider = "ovh.ovh" # Provider's name
22. }
23. 
24. # Find the most recent image Archlinux
25. data "openstack_images_image_v2" "archlinux" {
26.   name = "Archlinux" # Image's name
27.   most_recent = true # Find the most recent
28.   provider = "openstack.ovh" # Provider's name
29. }
30. 
31. # List of private IP that take front instance
32. variable "front_private_ip" {
33.   type = "list"
34.   default = ["192.168.42.2", "192.168.42.3"]
35. }
36. 
37. # Create 2 instances with 2 network interfaces
38. resource "openstack_compute_instance_v2" "front" {
39.   # Number of time the instance will be created
40.   count = "${length(var.front_private_ip)}"
41.   provider = "openstack.ovh" # Provider's name
42.   name = "front" # Instance's name
43.   flavor_name = "s1-2" # Flavor's name
44.   image_id = "${data.openstack_images_image_v2.archlinux.id}" # Image's id
45.   security_groups = ["default"] # Add into a security group
46.   network = [
47.     {
48.       name = "Ext-Net" # Public interface name
49.     },
50.     {
51.       # Private interface name
52.       name = "${ovh_publiccloud_private_network.private_network.name}"
53.       # Give an IP address depending on count.index
54.       fixed_ip_v4 = "${element(var.front_private_ip, count.index)}"
55.     }
56.   ]
57. }
58. 
59. # Create 1 hard disk attachable and detachable
60. resource "openstack_blockstorage_volume_v2" "backup" {
61.   name = "backup_disk" # Hard disk name
62.   size = 10 # Size
63.   provider = "openstack.ovh" # Provider's name
64. }
65. 
66. # Create 1 instance with 1 network interface and 1 extra hard disk
67. resource "openstack_compute_instance_v2" "back" {
68.   provider = "openstack.ovh" # Provider's name
69.   name = "back" # Instance's name
70.   flavor_name = "s1-2" # Flavor's name
71.   image_id = "${data.openstack_images_image_v2.archlinux.id}" # Image's id
72.   security_groups = ["default"] # Add into a security group
73.   network = [
74.     {
75.       name = "${ovh_publiccloud_private_network.private_network.name}" # Private interface name
76.       fixed_ip_v4 = "192.168.42.150" # Private IP
77.     }
78.   ]
79.   # Instance hard disk bootable content the Operating System
80.   block_device {
81.     uuid = "${data.openstack_images_image_v2.archlinux.id}" # Image's ID
82.     source_type = "image" # Source type of the block device
83.     destination_type = "local" # Destination
84.     volume_size = 10 # Size
85.     boot_index = 0 # Boot order
86.     delete_on_termination = true # It will be deleted when the instance will be deleted
87.   }
88.   # Hard disk create and attach directly with the instance
89.   block_device {
90.     source_type = "blank" # Source type of the block device
91.     destination_type = "volume" # Destination
92.     volume_size = 20 # Size
93.     boot_index = 1 # Boot order
94.     delete_on_termination = true # If it will be deleted when the instance will be deleted
95.   }
96.   # Hard disk created previously and attach
97.   block_device {
98.     uuid = "${openstack_blockstorage_volume_v2.backup.id}" # Volume id
99.     source_type = "volume" # Source type of the block device
100.     destination_type = "volume" # Destination
101.     boot_index = 2 # Boot order
102.     delete_on_termination = true # If it will be deleted when the instance will be deleted
103.   }
104. }
```


## Destroy everything
Terraform can create an infrastructure but can destroy it too, if needed. If you want to remove every resource you can enter the following command :


```console
1. $ terraform destroy
```



> [!primary]
>
> If you encounter some problems at the destruction, don't hesitate to relaunch the command.
> 