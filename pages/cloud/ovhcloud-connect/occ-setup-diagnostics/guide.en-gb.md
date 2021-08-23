---
title: Troubleshooting common errors setting up OVHcloud Connect
slug: occ-diagnostics
excerpt: Find out how to resolve the most common errors associated with setting up OVHcloud Connect
section: Getting started
order: 4
---

**Last updated 23rd August 2021**

## Objective

Find out how to resolve the most common errors associated with setting up OVHcloud Connect

## Requirements

- an OVHcloud Connect [solution](https://www.ovhcloud.com/en-gb/network-security/ovhcloud-connect/)

## Instructions

### Checking for light on the OVHcloud Connect link

When you order an OVHcloud Connect link, you can see the IN/OUT optical values on the OVHcloud side. You can request information about this from your support team.

- If **OUT** is **DOWN**, this means that the port is being enabled on OVHcloud equipment. After a few minutes, the port becomes active (**UP**).
- If **IN** is **DOWN**, the following reasons may be the cause:
    - your equipment is not yet connected
    - the port may be disabled;
    - there is a Cross-Connect issue.

> [!warning]
>
> - As a reminder, Cross-Connect is your contractual responsibility.
> - Before contacting the OVHcloud teams, you will need to open a ticket to the PoP.
>

#### LOA verification

A misinterpretation of the position on the Cross-Connect by the PoP can result in a lack of light on the OVHcloud Connect link.
For example, the PoP may indicate that there is no interconnection at the LOA position.

##### **How to read LOA information?**

Here is an example of information on the LOA:

```
Equipment: 103 PA3:OG:00GMC3:OVH Patch Panel: PP:0103:1132697
Port: P16/FO31-32/BCK Fiber Termination: SC/PC
```

This information is interpreted as follows:

- Cabinet (position of the bay where the RACK is located): **103**
- Cage (RACK): **PA3:OG:00GMC3:OVH**
- PatchPanel Z-side (switch position): **PP:0103:1132697**
- Position (on switch): **16**
- FiberOptic / Port A: **31**
- FiberOptic / Port B: **32**
- Side (front or back): **BACK**
- Fiber Termination: **SC/PC**

#### Fiber inversion

If there is a fiber inversion between PortA and PortB, the link will be DOWN.

Contact the PoP to check that there is no reversal on the patch panel.

### Peering verification

The peering check should be done once the light is **UP** on both sides.

If peering is **DOWN** on one or both sides, there may be several reasons:

- An SFP issue
- An improper auto-negotiation configuration
- IP address conflict
- BGP link misconfiguration

#### SFP Configuration

The SFP to use on the client device on an OVHcloud Connect link depends on the link you ordered.

If you have ordered a 1 Gbps link, the SFP will be: 1000Base-LX/LH.

```
speed 1000
```

If you have ordered a 10 Gbps link, the SFP will be: 10GBase-LR.

```
speed 10000
```

For more information, please read the [technical capabilities and limitations of the OVHcloud Connect solution](../occ-limits/)

#### Configuring auto-negotiation

Auto-negotiation is not supported in the OVHcloud Connect solution. This setting must be disabled.

To disable auto-negotiation on a Cisco device, use the following command:

```
no negotiate
```

#### PoP/DC configuration

An IP address conflict may occur if you have selected an IP address used by OVHcloud.

The rules for configuring IP addresses based on the Subnet are as follows.

- DC-side subnet: /30 - First IP address for OVHcloud, second IP address for the customer.
- PoP-side Subnet: /28 - First three IP addresses for OVHcloud - Vlan by default at 0

### Configuring the BGP link

The BGP Area on your side must be different to the OVHcloud side.

- Range Area = AS BGP
- AS: any (preferably between 64512-65534)
- The OVHcloud BGP AS zone and your BGP AS number (PoP side) must be different.
- The OVHcloud BGP AS zone: can be the same between the DC side and the PoP side configuration (recommended)

## Go further

Join our community of users on <https://community.ovh.com/>.
