---
title: Troubleshooting common errors setting up OVHcloud Connect
slug: occ-diagnostics
excerpt: Find out how to resolve the most common errors associated with setting up OVHcloud Connect
section: Getting started
order: 4
---

**Last updated 2nd September 2021**

## Objective

Find out how to resolve the most common errors associated with setting up OVHcloud Connect

## Requirements

- an [OVHcloud Connect solution](https://www.ovhcloud.com/en-ca/network-security/ovhcloud-connect/)

## Instructions

An OVHcloud Connect service will appear in your OVHcloud Control Panel, and can only be configured when it is considered **delivered**.

For the **OVHcloud Connect Direct** offer, the service is **delivered** in the following situations:

- When OVHcloud detects light at the position indicated in the LOA. This detection suggests that the cross-connect was performed by the client.
- 60 days after the order if no light has been detected.

### LOA verification

A misinterpretation of the position on the Cross-Connect by the PoP can result in a lack of light on the OVHcloud Connect link.
For example, the PoP may indicate that there is no interconnection at the position mentioned on the LOA.

#### How to read LOA information?

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

### OVHcloud Connect Direct (only): checking for light on the link

> [!warning]
>
> - As a reminder, Cross-Connect is contractually your responsibility.
> - Before contacting the OVHcloud teams, you will need to open a ticket to the PoP concerned by the LOA.
>

#### Before service delivery

When you order an OVHcloud Connect link, the IN/OUT optical values can be checked on the OVHcloud side. You can request information about this from your support team.

If the service has not yet been delivered, our support teams will be able to check the status of the IN and OUT optical values on the OVHcloud infrastructure side.

#### After service delivery

In the OVHcloud Control Panel, check the IN/OUT optical values:

- If the **OUT** value is **DOWN**, , the following reasons may be the cause:
    - the port on the OVHcloud side does not emit light
    - the service is being cancelled
    - the port is locked in your OVHcloud Control Panel
    - there is an SFP issue
- If **IN** is **DOWN**, the following reasons may be the cause:
    - your equipment is not yet connected
    - the port can be disabled or has a defect that prevents it from emitting light
    - there is a Cross-Connect issue

### Tx/Rx Fiber inversion

If there is a fiber inversion between Port A and Port B, the light is not received in the right place and the **IN (Rx)** port will display **DOWN**. If your service has not yet been delivered, contact the support teams so that the link status is checked.

Contact the PoP concerned by the LOA to check that there is no Tx/Rx inversion on the Cross-Connect.

### Peering verification

The peering should be checked once the light is **UP** on both sides.

If peering cannot be established (DOWN) on one or both sides, there may be several reasons:

- An SFP issue
- Auto-negotiation is not disabled on the customer side
- IP address conflict
- BGP link misconfiguration

#### SFP Configuration

Optical values **UP** but no Ethernet link (interface **DOWN**) are a symptom of a misconfigured SFP.

The SFP to use on the client device on an OVHcloud Connect link depends on the link you ordered. You must use an SFP that conforms to the ordered bandwidth.

If you have ordered a 1 Gbps link, the SFP will be: 1000Base-LX/LH.

```
speed 1000
```

If you have ordered a 10 Gbps link, the SFP will be: 10GBase-LR.

```
speed 10000
```

For more information, please read the [technical capabilities and limitations of the OVHcloud Connect solution](../occ-limits/)

#### Disabling auto-negotiation

Auto-negotiation is not supported in the OVHcloud Connect solution. This setting must be disabled.

To disable auto-negotiation on a Cisco device, use the following command:

```
no negotiate auto
```

or

```
no speed negotiate
```

On Cisco IOS, use the following command:

```
speed nonegotiate
```

On Cisco NX-OS, use the following command:

```
speed 1000
no negotiate auto
```

#### PoP/DC configuration

An IP address conflict may occur if you are using an IP address(es) normally reserved for OVHcloud.

The rules for assigning IP addresses according to the subnet are as follows:

- DC-side subnet: /28 (minimum value) - The first three IP addresses are reserved for OVHcloud - Vlan fixed to 0 (untagged).
- PoP-side subnet: /30 (fixed value) - The first IP address is reserved for OVHcloud, the second IP address for the customer.

#### Configuring the BGP link

The BGP Area on the customer side must be different from the OVHcloud side.

- Range Area = AS BGP
- AS number: We recommend ASNs between 64512 and 65534. The choice is your, with the exception of the following numbers, which are reserved for OVHcloud.
    - 65501 if the PoP is in Europe
    - 65502 if the PoP is in Canada
    - 65519 if the PoP is in Asia
- The OVHcloud BGP AS zone and your BGP AS number (on the PoP side) must be different.
- The OVHcloud BGP AS zone: can be the same between the DC side and the PoP side configuration (recommended)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
