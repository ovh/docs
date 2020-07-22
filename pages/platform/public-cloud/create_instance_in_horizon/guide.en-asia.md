---
title: 'Creating an Instance via the Horizon interface'
slug: create-an-instance-in-horizon
excerpt: 'Find out how to create an Instance via the Horizon interface'
section: Horizon
order: 4
---

**Last updated 27th March 2018**

## Objective

You can create multiple Instances directly in the Horizon interface, and also configure a security group to apply to your Instances.

**Find out how to create an Instance via the Horizon interface.**

## Requirements

- a [Public Cloud](https://www.ovh.com/asia/public-cloud/instances/){.external} project, created via your OVHcloud account
- [access to the Horizon interface](../configure_user_access_to_horizon/){.external} 

## Instructions

To start creating an Instance, log in to the Horizon interface. If you are unsure about how to do this, please refer to our guide to [Accessing the Horizon interface](../configure_user_access_to_horizon/){.external}.

Next, click `Compute`{.action} in the left-hand menu, then `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

The page that opens can be used to view the Instances that are currently launched. To launch a new one, click the `Launch Instance`{.action} button.

![createinstance](images/create-instance-step2.png){.thumbnail}

You will then need to fill in the information requested. If you need to do so, you can use the table below to fill in the fields. Please note that this grid is not exhaustive. 

|Information|Details|
|---|---|
|Availability zone|Leave "nova" (default choice).|
|Instance name|Specify the name you want for the Instance that will be launched.|
|Template|Select the type of Instance to launch.|
|Count|Specify the number of Instances to launch.|
|Instance launch source|Select the source for launching an instance (e.g. "Launch from an image" or "Launch from a snapshot").|
|Image name|Select the Instance image (only when launching from an image).|
|Instance snapshot|Choose an Instance snapshot (only for launching from a snapshot).|
|Key pair|Select an SSH key to use for connecting to the Instance later (you can create a key by clicking the "+" sign).|
|Security groups|Specify the security group for the Instance (authorisation for opening ports).|
|Selected networks|Select the network(s) for the Instance you want to create, from the list of available networks.|
|Custom script source|Specify the source between a "direct entry" or a "file".|
|Script data|Enter the script code in the input field (16KB maximum).|
|Script file|Click ‘browse’ to select the post-installation script.|
|Disk partitioning|Choose between "automatic" or "manual".|
|Configuration disk|Configure OpenStack to write metadata on to a specific configuration disk that will be attached to the Instance when it is launched.|

Once you are ready to launch the Instances, click the `Launch Instance`{.action} button.

![createinstance](images/create-instance-step3.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
