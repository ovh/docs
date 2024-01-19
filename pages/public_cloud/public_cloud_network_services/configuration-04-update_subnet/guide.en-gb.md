---
title: Update a subnet options
excerpt: Find out how to update the options of an existing subnet
updated: 2024-01-19
---

## Objective

This page explains how to update the options of an existing subnet. This can be needed if you want to comply with the pre requisites to be able to use the Public Cloud Gateway : have a gateway IP defined in your subnet.
For this example, we will use a private network and a subnet with the following attributes :
- CIDR 10.1.0.0/16
- DHCP enabled with allocation pool on the global range
- No gateway IP 

We will see how to update it to have a gateway IP set to 10.1.0.1 and remove that IP from the allocation pool. 


## Prerequisites
You shall have created a private network and a subnet as explained in that [guide](../getting-started-07-creating-vrack/guide.en-gb.md)


## Instructions

### OVHCloud Control Panel
It is currently not possible to update a subnet through this interface

### Horizon
- Connect to Horizon & choose the region where the subnet is defined as explained in that [guide](../../compute/introducing_horizon/guide.en-gb.md)
- Click on `Network > Networks`. The page will display the list of network available which contains OVHCloud managed network for public connectivity (`Ext-Net`) as well as your network.
![network list](images/network_list.png){thumbnail}
- In that list, click on your network name ("private_network_GRA11" in this example), the network detail page is displayed.
  
![network details](images/network_details.png){thumbnail}

- Click on `Subnets` tab: the subnets from the private network are listed.
  
![subnets list](images/subnets_list.png){thumbnail}

- Click on your `Edit Subnet`.For this guide, our target is to add a gateway IP :
  - Click untick the  `Disable Gateway`. The field `Gateway IP` will appear. Fill it in with an IP within your CIDR (usually the first IP of the range is used). In my case, `10.1.0.1`
  ![gateway IP](images/add_gateway_ip.png){thumbnail}
  - Click on `Subnet Details`. Update the `Allocation Pools` to remove the gateway IP that you filled in the previous step. In my case, I need to update from `10.1.0.1,10.1.255.254` to `10.1.0.2,10.1.255.254`
  
  ![subnet details](images/subnet_details.png){thumbnail}
  
- Click on `Save` and your subnet is updated with a gateway IP !


### Openstack Command Line Interface

You need to have your [CLI environment set up](../../compute/prepare_the_environment_for_using_the_openstack_api/guide.en-gb.md) and your [variables defined](../../compute/loading_openstack_environment_variables/guide.en-gb.md)

Run the following (replace `private_network_GRA11`) by the name of your private network.

```bash 
❯ openstack  network show private_network_GRA11
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2024-01-19T10:44:33Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | 6b1a7c0c-58c5-427b-a21e-ba6a1485ace7 |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | None                                 |
| is_vlan_transparent       | None                                 |
| l2_adjacency              | True                                 |
| mtu                       | 1500                                 |
| name                      | private_network_GRA11                |
| port_security_enabled     | True                                 |
| project_id                | REDACTED     |
| provider:network_type     | vrack                                |
| provider:physical_network | None                                 |
| provider:segmentation_id  | 1700                                 |
| qos_policy_id             | None                                 |
| revision_number           | 3                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   | 15a17e0e-6767-42ea-a345-3f65ee73b47c |
| tags                      |                                      |
| tenant_id                 | REDACTED     |
| updated_at                | 2024-01-19T10:44:33Z                 |
+---------------------------+--------------------------------------+
```

In this output, the `subnets` provides the UID of your subnet. 
You can check your subnet detail by running the following (update the UID according to your value !)

```bash
❯ openstack subnet show 15a17e0e-6767-42ea-a345-3f65ee73b47c
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.1.0.1-10.1.255.254                |
| cidr                 | 10.1.0.0/16                          |
| created_at           | 2024-01-19T10:44:33Z                 |
| description          |                                      |
| dns_nameservers      | 213.186.33.99                        |
| dns_publish_fixed_ip | None                                 |
| enable_dhcp          | True                                 |
| gateway_ip           | None                                 |
| host_routes          |                                      |
| id                   | 15a17e0e-6767-42ea-a345-3f65ee73b47c |
| ip_version           | 4                                    |
| ipv6_address_mode    | None                                 |
| ipv6_ra_mode         | None                                 |
| name                 |                                      |
| network_id           | 6b1a7c0c-58c5-427b-a21e-ba6a1485ace7 |
| project_id           | REDACTED     |
| revision_number      | 0                                    |
| segment_id           | None                                 |
| service_types        |                                      |
| subnetpool_id        | None                                 |
| tags                 |                                      |
| updated_at           | 2024-01-19T10:44:33Z                 |
+----------------------+--------------------------------------+
```

Now let's update the `gateway_ip` and the `allocation_pool`
```bash
❯ openstack subnet set  --gateway 10.1.0.1 --no-allocation-pool --allocation-pool start=10.1.0.2,end=10.1.255.254  15a17e0e-6767-42ea-a345-3f65ee73b47c
```

and check that the subnet has been updated: 
```bash
❯ openstack subnet show 15a17e0e-6767-42ea-a345-3f65ee73b47c
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.1.0.2-10.1.255.254                |
| cidr                 | 10.1.0.0/16                          |
| created_at           | 2024-01-19T10:44:33Z                 |
| description          |                                      |
| dns_nameservers      | 213.186.33.99                        |
| dns_publish_fixed_ip | None                                 |
| enable_dhcp          | True                                 |
| gateway_ip           | 10.1.0.1                             |
| host_routes          |                                      |
| id                   | 15a17e0e-6767-42ea-a345-3f65ee73b47c |
| ip_version           | 4                                    |
| ipv6_address_mode    | None                                 |
| ipv6_ra_mode         | None                                 |
| name                 |                                      |
| network_id           | 6b1a7c0c-58c5-427b-a21e-ba6a1485ace7 |
| project_id           | REDACTED     |
| revision_number      | 1                                    |
| segment_id           | None                                 |
| service_types        |                                      |
| subnetpool_id        | None                                 |
| tags                 |                                      |
| updated_at           | 2024-01-19T14:45:11Z                 |
+----------------------+--------------------------------------+
```