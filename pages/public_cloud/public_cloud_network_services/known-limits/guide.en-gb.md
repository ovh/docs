---
title: Known limits
excerpt: 'Requirements and limits to respect'
updated: 2023-11-14
---

## Vrack and Public Cloud project

For a given Public Cloud project, you can attach only one vrack. If you wish to build private connectivity between 2 (or more) public cloud projects, you should attach the same vrack to those public cloud projects.

## Load Balancer Floating IP in OVHcloud Control panel

Currently the floating IP associated to a Load Balancer is missing in the Load Balancer details page on OVHcloud Control panel. You can find it in [Horizon](../../compute/introducing_horizon/), in [Openstack CLI](../../compute/prepare_the_environment_for_using_the_openstack_api/) by doing `openstack floating ip list` and `openstack loadbalancer list` or through OVHcloud API.

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

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our services!

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
