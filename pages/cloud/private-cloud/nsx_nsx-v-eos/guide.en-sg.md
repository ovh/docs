---
title: VMware NSX-v - End of Support
excerpt: Analyse your use of the NSX-v features and choose between the different evolution scenarios, from disabling the NSX-v component to the migration to NSX
updated: 2023-06-13
---

## Objective

The NSX-v component will no longer be maintained by VMware as of January 15, 2024. This guide helps you analysing your use of NSX-v features and therefore offers you different evolution scenarios: from disabling the NSX-v component to migrating to its successor NSX-T (named NSX by VMware since version 4.0).

## Instructions

### Identifying your NSX-v usage

To identify your usage of the NSX-v feature in your Hosted Private Cloud environment, you have to ask yourself the following questions:

- Am I using VXLAN?
- Am I using a Distributed Firewall rules?
- Am I using a Distributed Logical Router?
- Am I using an Edge Services Gateway?
- Am I using an SSL VPN?

#### I do not use any of the NSX-v features

If you do not use any of the above features, you will be able to deactivate NSX-v. You will be notified when the deactivation process is available.

#### I only use VXLAN

If the only feature you use is VXLAN, you have the following choice:

- Migrating to NSX (see [details](#migration) below)
- Reconfiguring your network in order to replace VXLAN with [VLAN](/pages/cloud/private-cloud/creation_vlan), using the following API call:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/generateVxlanToVrackMapping
>

> **Parameters:**
>
> serviceName: the reference for your PCC as `pcc-XX-XX-XX-XX`.

> [!primary]
>
>  Find more information on the OVHcloud API in our guide on [Getting started with the OVHcloud API](/pages/account/api/first-steps).

You will then have to deactivate NSX-v. You will be notified when the deactivation process is available.

#### I use some of the NSX-v features

We recommend migrating to NSX (see [details](#migration) below) to benefit from all its included features.

Alternatively, you can decide to deploy alternatives components (Load-balancer, Firewall appliance, VPN, ...) and then disable NSX-v (you will be notified when the deactivation process is available).

### Migrating to NSX <a name="migration"></a>

The NSX software is enabled at the Virtual Datacenter (vDC) level. In order to migrate from NSX-v to NSX, you can order a new vDC for your existing Hosted Private Cloud service (feature available starting July 5, 2023), add new Hosts and then migrate from your current vDC to the new vDC using VMware vMotion.

The documentation to migrate to NSX is not yet available. 

Our support teams and [Professional Services experts](https://www.ovhcloud.com/en-sg/professional-services/) can provide you with assistance when the migration is available.

## Go further <a name="gofurther"></a>

[Getting started with NSX](/pages/cloud/private-cloud/nsx-01-first-steps)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
