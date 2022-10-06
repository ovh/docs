---
title: 'Managing Octavia Loadbalancer'
slug: managing-octavia-loadbalancer
excerpt: 'Discover how to manage your octavia loadbalancer in the Horizon interface'
section: Horizon
---

**Last updated 30th August 2022**

## Objective

The following guide will explaing the following:

- Creating a basic HTTP loadbalancer
- Managing your listeners
- Managing your pools
- Managing health checks

## Requirements

- A [Public Cloud project](../create_a_public_cloud_project/) in your OVHcloud account
- An [OpenStack user](../creation-and-deletion-of-openstack-user/) created in your project
- Basic understanding of the [Horizon interface](../horizon/)
- [vRack configured on your public cloud project](../public-cloud-vrack/)
- Region GRA9 enabled on your Public Cloud Project

## Instructions

### Creating a loadbalancer

In this example, we will create a HTTP loadbalancer. You may use different protocol as you wish as most of the steps are the same.

Open the [Horizon login page](https://horizon.cloud.ovh.net/auth/login/) and enter the [OpenStack user credentials](../creation-and-deletion-of-openstack-user/) previously created, then click on `Connect`{.action}.

Once connected, select the region on the top left.

#### Step 1: Creating the private network

In this tutorial we will assume there is no existing private network and therefore we first need to create a network. This network will be used to communicate between our backends and our loadbalancer

Follow the steps below to create a new private network:

![public-cloud](images/create_network_step_1){.thumbnail}
![public-cloud](images/create_network_step_2){.thumbnail}
![public-cloud](images/create_network_step_3){.thumbnail}
![public-cloud](images/create_network_step_4){.thumbnail}

#### Step 2: Creating the virtual router

Now that our private network and its subnet has been created, we can now create our virtual router.

![public-cloud](images/create_router_step_1){.thumbnail}
![public-cloud](images/create_router_step_2){.thumbnail}
![public-cloud](images/create_router_step_3){.thumbnail}
![public-cloud](images/create_router_step_4){.thumbnail}
![public-cloud](images/create_router_step_5){.thumbnail}

#### Step 2: Creating the loadbalancer

At this stage we will create the loadbalancer and its basic configuration. Our pool members will be added at a later stage, but if your pool members already exist you may add them during this stage also.

![public-cloud](images/create_lb_step_1){.thumbnail}
![public-cloud](images/create_lb_step_2){.thumbnail}
![public-cloud](images/create_lb_step_3){.thumbnail}
![public-cloud](images/create_lb_step_4){.thumbnail}
![public-cloud](images/create_lb_step_5){.thumbnail}

#### Step 3: Creating the floating IP

![public-cloud](images/create_fip_step_1){.thumbnail}
![public-cloud](images/create_fip_step_2){.thumbnail}
![public-cloud](images/create_fip_step_3){.thumbnail}
![public-cloud](images/create_fip_step_4){.thumbnail}

#### Step 4: Add your banckends

In this step we will assume you already have instances in your public cloud to add to your loadbalancer as pool members (backends).

![public-cloud](images/add_pool_members_step_1){.thumbnail}
![public-cloud](images/add_pool_members_step_2){.thumbnail}
![public-cloud](images/add_pool_members_step_3){.thumbnail}
![public-cloud](images/add_pool_members_step_4){.thumbnail}

### Managing your listeners

#### Create a listener

#### Modify a listener

#### Delete a listener

### Managing your pools

#### Create a pool

#### Modify a pool

#### Delete a pool

#### Add a pool member

#### Modify a pool member

#### Delete a pool member

#### Add health monitors

#### Modify health monitors

#### Delete health monitors