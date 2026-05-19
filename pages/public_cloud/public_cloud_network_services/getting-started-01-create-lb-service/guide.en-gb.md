---
title: Getting started with Load Balancer on Public Cloud
excerpt: Discover how to launch a Load Balancer on Public Cloud
updated: 2026-05-19
---

## Objective

Our Public Cloud Load Balancer  is based on [OpenStack Octavia](https://wiki.openstack.org/wiki/Octavia) and is fully integrated into the Public Cloud universe. 

**Learn how to configure an OVHcloud Load Balancer with the help of this guide.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Understanding the [Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- Understanding the [Public Cloud Networking concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts)
- A Load Balancer requires a subnet, read [this guide](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack) for more information
- (Optional): This guide explains the load balancer configuration through Graphical Interface & Command Line Interface. If you want to use the latter, then install the [OpenStack Command Line environment](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

## Instructions

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

### Creating the Load Balancer

<!-- CP-STEPS-START:create-load-balancer -->
> [!tabs]
> Via the OVHcloud Control Panel
>> Click `Load Balancer`{.action} (under **Network**) in the left menu, then click the `Create a Load Balancer`{.action} button.
>>
>> The configuration page will open. Complete each step:
>>
>> **Step 1: Name**
>>
>> Enter a name for your Load Balancer, then click `Next`{.action}.
>>
>> **Step 2: Region**
>>
>> Select the zone type:
>>
>> - **1AZ**: Deployment in a single availability zone.
>> - **3AZ**: Deployment spread across three availability zones for higher availability.
>>
>> Then select your region. Only regions where you have a private network with at least one subnet are available. Click `Next`{.action}.
>>
>> **Step 3: Size**
>>
>> Select the size (flavor) that matches your workload. The interface provides a link to the full benchmark and characteristics for each size. Click `Next`{.action}.
>>
>> **Step 4: Public IP**
>>
>> Choose whether your Load Balancer will handle public or private traffic (see [Public Cloud Networking concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) for details):
>>
>> - **`New Public IP`**: Creates a new Floating IP for your Load Balancer.
>> - **Existing Floating IP**: If you already have a Floating IP, select it from the list.
>> - **`No Public IP`{.action}**: For private traffic only.
>>
>> **Step 5: Private network and subnet**
>>
>> Select the private network and subnet where the Load Balancer will be deployed. The interface warns you if the selected network or subnet does not meet the prerequisites (see [Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer#network-prerequisites)).
>>
>> **Step 6 (optional): Listener and members**
>>
>> - **Listener**: Choose the protocol and port for incoming traffic. A `Prometheus` listener is also available for Load Balancer monitoring — no members can be added to it. See [this page](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus) for details.
>> - **Health Monitor**: Select the type compatible with your listener protocol. The interface filters to show only compatible types. See [this page](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) for compatibility details.
>> - **Members**: Select instance IPs and ports from your region to add to the pool.
>>
>> > [!primary]
>> > In this simplified workflow, the pool protocol must match the listener protocol, members can only be selected from existing instances, and the load balancing algorithm defaults to `ROUND_ROBIN`. Skip this step and configure pool and members after creation to bypass these limitations.
>> >
>>
>> Click `Create a Load Balancer`{.action} to confirm.
>>
>> You will be redirected to the Load Balancer listing page. The `Operating status` and `Provisioning status` columns reflect the current state of your load balancer. For details, see the "[Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer#operating-provisioning-status)" page.
>>
> Via the OpenStack CLI
>> Another way to create a Load Balancer is through the OpenStack Command Line Interface. Before you begin, consult the following guides:
>>
>> - [Preparing an environment for using the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>> - [Setting OpenStack environment variables](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).
>>
>> **Configuring your private network**
>>
>> Before creating a Load Balancer, you will need to set up a private network:
>>
>> ```bash
>> openstack network create my_network
>>
>> openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp
>>
>> openstack router create my_router
>>
>> openstack router add subnet my_router my_subnet
>>
>> openstack router set --external-gateway Ext-Net my_router
>> ```
>>
>> You can now attach your instances to the new network. We recommend following our guide to [integrate an instance into vRack](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#instance-integration).
>>
>> List the addresses of your instances in your network with the following command:
>>
>> ```bash
>> openstack server list
>> ```
>>
>> In the next step, configure the network interfaces of your instances according to this output.
>>
>> **Creating the Load Balancer**
>>
>> You can view a list of the different Load Balancer flavors we offer with this command:
>>
>> ```bash
>> openstack loadbalancer flavor list
>> ```
>>
>> You can now create your Load Balancer with the following command. In this example, we will create a "Small" Load Balancer.
>>
>> ```bash
>> openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
>> ```
>>
>> Your Load Balancer will be configured with an IP address of the private network. If you want to have access from the internet, you will need to attach a Floating IP address.
>>
>> **Attaching a Floating IP address to a Load Balancer**
>>
>> This is how to attach a Floating IP address to a Load Balancer:
>>
>> ```bash
>> openstack floating ip create Ext-Net
>> openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
>> ```
>>
>> > [!primary]
>> >
>> > To retrieve the VIP port ID of your Load Balancer, use `openstack loadbalancer show my_load_balancer`.
>> >
>>
>> **Configuring your Load Balancer**
>>
>> In this example we will configure an HTTP Load Balancer. In order to listen on port 80 of the Load Balancer, create a Listener with this command:
>>
>> ```bash
>> openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
>> ```
>>
>> Once the Listener has been created, you need to add each instance that can respond to external requests. To do this, you must create an Instance Pool:
>>
>> ```bash
>> openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
>> ```
>>
>> Add your instances to the Instance Pool:
>>
>> ```bash
>> openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
>> openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
>> ```
>>
>> You can now access your Load Balancer via the Floating IP or private IP address from an instance in your private network.
>>
> Via the OVHcloud API
>> Use the [OVHcloud API](/pages/manage_and_operate/api/first-steps) to create a Load Balancer programmatically.
>>
>> **Retrieve available flavors**
>>
>> ```bash
>> GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/flavor
>> ```
>>
>> **Create the Load Balancer**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer
>> ```
>>
>> ```json
>> {
>>   "flavorId": "<flavor_id>",
>>   "name": "my-load-balancer",
>>   "network": {
>>     "private": {
>>       "network": {
>>         "id": "<network_id>",
>>         "subnetId": "<subnet_id>"
>>       }
>>     }
>>   }
>> }
>> ```
>>
>> **Attach a Floating IP (for public traffic)**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadbalancerId}/floatingIp
>> ```
>>
>> **Create a listener**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener
>> ```
>>
>> ```json
>> {
>>   "loadbalancerId": "<loadbalancer_id>",
>>   "name": "my-listener",
>>   "port": 80,
>>   "protocol": "http"
>> }
>> ```
>>
>> **Create a pool**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool
>> ```
>>
>> ```json
>> {
>>   "algorithm": "roundRobin",
>>   "listenerId": "<listener_id>",
>>   "loadbalancerId": "<loadbalancer_id>",
>>   "name": "my-pool",
>>   "protocol": "http"
>> }
>> ```
>>
>> **Add members to the pool**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member
>> ```
>>
>> ```json
>> {
>>   "members": [
>>     { "address": "<private_ip_1>", "name": "member-1", "protocolPort": 80 },
>>     { "address": "<private_ip_2>", "name": "member-2", "protocolPort": 80 }
>>   ]
>> }
>> ```
>>
> Via the OVHcloud CLI
>> Use the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) to manage your Load Balancer. Set your cloud project with `--cloud-project <project_id>` or configure it in your profile.
>>
>> **Create the Load Balancer**
>>
>> ```bash
>> ovhcloud cloud loadbalancer create <region> \
>>   --name my-load-balancer \
>>   --size small \
>>   --network-id <network_id> \
>>   --subnet-id <subnet_id>
>> ```
>>
>> **Attach a Floating IP (for public traffic)**
>>
>> ```bash
>> ovhcloud cloud loadbalancer create-floating-ip <loadbalancer_id>
>> ```
>>
>> **Create a listener**
>>
>> ```bash
>> ovhcloud cloud loadbalancer listener create <region> \
>>   --loadbalancer-id <loadbalancer_id> \
>>   --name my-listener \
>>   --port 80 \
>>   --protocol http
>> ```
>>
>> **Create a pool**
>>
>> ```bash
>> ovhcloud cloud loadbalancer pool create <region> \
>>   --loadbalancer-id <loadbalancer_id> \
>>   --listener-id <listener_id> \
>>   --name my-pool \
>>   --algorithm roundRobin \
>>   --protocol http
>> ```
>>
>> **Add members to the pool**
>>
>> ```bash
>> ovhcloud cloud loadbalancer pool member create <pool_id> \
>>   --address <private_ip_1> --name member-1 --protocol-port 80
>> ovhcloud cloud loadbalancer pool member create <pool_id> \
>>   --address <private_ip_2> --name member-2 --protocol-port 80
>> ```
>>
> Via Terraform
>> Use the [OVH Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_loadbalancer){.external} to create a Load Balancer with the `ovh_cloud_project_loadbalancer` resource.
>>
>> **Retrieve available flavors**
>>
>> ```hcl
>> data "ovh_cloud_project_loadbalancer_flavors" "flavors" {
>>   service_name = var.service_name
>>   region_name  = var.region
>> }
>> ```
>>
>> **Create the Load Balancer**
>>
>> ```hcl
>> resource "ovh_cloud_project_loadbalancer" "lb" {
>>   service_name = var.service_name
>>   region_name  = var.region
>>   flavor_id    = data.ovh_cloud_project_loadbalancer_flavors.flavors.flavors[0].id
>>   name         = "my-load-balancer"
>>   network = {
>>     private = {
>>       network = {
>>         id        = var.network_id
>>         subnet_id = var.subnet_id
>>       }
>>     }
>>   }
>> }
>> ```
>>
<!-- CP-STEPS-END:create-load-balancer -->

## Go further

[Official documentation of OpenStack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook OpenStack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).

Join our [Discord](https://discord.gg/ovhcloud) to discuss with the OVHcloud team and other users.
