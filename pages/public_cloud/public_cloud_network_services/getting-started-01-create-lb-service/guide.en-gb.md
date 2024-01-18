---
title: Getting started with Load Balancer on Public Cloud
excerpt: Discover how to launch a Load Balancer on Public Cloud
updated: 2022-11-02
---

## Objective

Our new Public Cloud Load Balancer is based on [OpenStack Octavia](https://docs.openstack.org/octavia/latest/reference/introduction.html){.external} and is fully integrated into the Public Cloud universe.

**Learn how to configure an OVHcloud Load Balancer with the help of this guide.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Understand the [Load Balancer concepts](../concepts-03-loadbalancer/guide.en-gb.md)
- Understand the [Public Cloud Networking concepts](../concepts-01-public-cloud-networking-concepts/guide.en-gb.md)
- A Load Balancer requires a subnet, see this [guide](../getting-started-07-creating-vrack/)
- [Optional] This guide explains the load balancer configuration through Graphical Interface & Command Line Interface, if you want to use the latter, then install the [OpenStack Command Line environment](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api/guide.en-gb.md)



## Instructions

### Creating the Load Balancer with OVHCloud Control Panel
Open your public cloud project and click to `Network > Load Balancer` in the left menu, then click on `Create a Load Balancer` button.

The configuration page will open with 5 steps
#### Step 1 : Size choice 
![Size choice](images/size.png){.thumbnail}
The interface contains a link to the website where the characteristics / benchmark of all size are provided. Once you have chosen your size, click on `Next`

#### Step 2 : Region choice 
 ![Region choice](images/region.png){.thumbnail}
 Only regions where you have private network and at least one subnet can be selected. Select the region and click on `Next` 

 #### Step 3 : Attach a public IP (or not)
 ![Public IP choice](images/floating_IP.png){.thumbnail}
 At this step, you need to know which architecture if your load balancer will be receiving public traffic or not (for more details, see [Public Cloud Networking concepts](../concepts-01-public-cloud-networking-concepts/guide.en-gb.md)). 
If your load balancer is processing public traffic, you have 2 choices :
* `New Public IP`: this option will create a new Floating IP for your load balancer. 
* If you have some floating IPs, the interface will propose you to pick one.
If your load balancer is processing private traffic, choose `No Public IP`

 #### Step 4 : Select the private network and the subnet where the load balancer will be spawned. 
![Network choice](images/private_network.png){.thumbnail}
 The interface will inform you if the private network / subnet is not compliant with the pre requisites (see [Public Cloud Networking concepts](concepts-01-public-cloud-networking-concepts/guide.en-gb.md###Network pre requisites))

 #### Step 5 (Optional) Define the listener(s) and the members
![Listener choice](images/listener.png){.thumbnail}

  * First, choose the listener protocol & the port according to the traffic you will receive. Note that a specific listener called `Prometheus` is available to monitor your load balancer. In that case, it is not possible to add members. For more information on this listener, check this [page](../technical-resources-02-octavia-monitoring-prometheus/guide.en-gb.md)
  * Then, choose the Health monitor type. Note that since some health monitor types are not compatible with some protocols, the user interface filters those types so that you can only choose compatible items. For more information, on the health monitor compatibility, check this [page](../concepts-01-public-cloud-networking-concepts/guide.en-gb.md)
  * Finally, from the instances of your region, choose the member IP & port that will be part of the pool. Note that in order to simplify the configuration workflow, it is only possible to have a pool with the same protocol as the listener, and that the member can only be chosen from the instance. Those limitations can be bypassed by skipping this part of configuration and use the pool / member configuration once the Load Balancer is created. 

  
 #### Step 6 Define the name of Load Balancer 
![Name](images/name.png){.thumbnail}
You can update the name according to your choice and click on `Create a Load Balancer`.

You will be redirected to the Load Balancer listing page. Among the attributes that are displayed, the `Operating status` and `Provisioning status` provide information on the state of your load balancer. More information on the [Load Balancer concepts page](../concepts-03-loadbalancer/guide.en-gb.md##Operating and Provisioning status)


### Creating the Load Balancer with Openstack Command Line Interface

You can view a list of the different Load Balancer flavors we offer with this command:

```bash
openstack loadbalancer flavor list
```

You can now create your Load Balancer with the following command. In this example, we will create a "Small" Load Balancer.

```bash
openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
```

Your Load Balancer will be configured with an IP address of the private network. If you want to have access from the internet, you will need to attach a Floating IP address.

### Attaching a Floating IP address to a Load Balancer

This is how to attach a Floating IP address to a Load Balancer:

```bash
openstack floating ip create Ext-Net
openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> To retrieve the VIP port ID of your Load Balancer, use `openstack loadbalancer show my_load_balancer`.

### Configuring your Load Balancer

In this example we will configure an HTTP Load Balancer. In order to listen on port 80 of the Load Balancer, create a Listener with this command:

```bash
openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
```

Once the Listener has been created, you need to add each instance that can respond to external requests. To do this, you must create an Instance Pool:

```bash
openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
```

Add your instances to the Instance Pool:

```bash
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

You can now access your Load Balancer via the Floating IP or private IP address from an instance in your private network.

## Go further

[Official documentation of OpenStack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook OpenStack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.

Join our [Discord](https://discord.gg/PwPqWUpN8G) to discuss with the OVHcloud team and other users.
