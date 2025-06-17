---
title: Public Cloud Network Services - Known limits (EN)
excerpt: 'Requirements and limits to respect'
updated: 2024-11-12
---

## vRack and Public Cloud projects

For a given Public Cloud project, you can attach only one vRack. If you wish to build private connectivity between 2 (or more) Public Cloud projects, you should attach the same vRack to those Public Cloud projects.

## Load Balancer Floating IP in the OVHcloud Control Panel

Currently, the Load Balancer details page in the OVHcloud Control Panel doesn't mention the Floating IP associated to a Load Balancer.

You can find this information:

- in [Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- using the [OpenStack CLI](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) by doing `openstack floating ip list` and `openstack loadbalancer list`.
- using the OVHcloud API:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}
>

## IPs used by services

When a service is spawned in a subnet, it is using some IPs from the subnet CIDR. The following table provides the number of IPs used by each service. If the subnet has a "small" number of available IPs, this can have impact. If all L3 services are in use, the total number of IPs used will be 7. We advise to use at least a `/28` mask.

| Used IPs by the service:| In DHCP allocation pool |	Outside of allocation pool (gateway_ip) |
| :---: | :---: | :---: |
| DHCP |	2 | |	
| Public Cloud Gateway | 1	| 1 |
| Public Cloud Load Balancer (Octavia)	| 3 | |	

## ICMP traffic towards Load Balancer IP

The traffic towards Load Balancer IP (private IP or floating IP) is filtered. Which means the `ping` on these IPs will not answer.

## Instance bandwidth

To achieve the maximum bandwidth provided with each instance you may need to use **multi-flow**.

For example, when using iperf to test your instance bandwidth, you can enable multi-flow by adding the `-P n` or `--parallel n` option. If n = 1 (which is the default if this option is omitted), you are testing bandwidth with a single flow. To achieve maximum bandwidth, you should increase the value of n.

## Subnet allocation pool update

When updating an allocation pool, e.g. from `[10.0.0.2:10.0.0.255]` to `[10.0.0.128:10.0.0.255]`, **all IPs already used prior to the allocation pool update are kept even if they are not in the new allocation pool.**

For instance, if the subnet DHCP is activated, the IPs `10.0.0.2` and `10.0.0.3` will be used by DHCP servers and will still be used after the pool update.

In order to release these IPs, you need to delete the two DHCP ports. They will be recreated automatically in the updated allocation pool. This can be done in Horizon or using the OpenStack CLI.

For instance, you can delete all the dhcp ports from the private network with ID <PRIVATE_NETWORK_ID> with:

```bash
openstack port list --network <PRIVATE_NETWORK_ID> --device-owner network:dhcp -f value -c ID | xargs -I {} openstack port delete {}
```

Then check the newly created port that should be inside the updated IP allocation pool with:

```bash
openstack port list --network <PRIVATE_NETWORK_UID> --device-owner network:dhcp
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                        | Status |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
| 4d991711-4322-4934-a06e-2e2b9cff2a56 |      | fa:16:3e:cc:48:27 | ip_address='10.0.0.129', subnet_id='578deb7c-211f-4f0f-8e45-c8ed07b3e16b' | ACTIVE |
| 738e3c59-439d-4eed-bded-c7c301717a8c |      | fa:16:3e:62:32:5e | ip_address='10.0.0.128', subnet_id='578deb7c-211f-4f0f-8e45-c8ed07b3e16b' | ACTIVE |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------+--------+
```

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our services!

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.
