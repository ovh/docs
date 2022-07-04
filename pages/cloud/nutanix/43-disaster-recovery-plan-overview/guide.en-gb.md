---
title: Disaster Recovery Plan in Nutanix
slug: disaster-recovery-plan-overview
excerpt: Overview of various Disaster Recovery Plan solutions in Nutanix
section: Disaster Recovery Plan
order: 01
---

**Last updated 29th June 2022**

## Objective

This guide will take you through the possibilities offered by Nutanix clusters installed on OVHcloud infrastructures, for implementing Disaster Recovery Plans (DRPs).

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- Multiple Nutanix clusters with either organisation:
    - multiple Nutanix clusters at physically different sites at OVHcloud
    - a Nutanix cluster provided by OVHcloud and another Nutanix cluster from another provider.
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- access to your clusters via Prism Central
- You must have a vRack or IPSEC VPN connection between the two clusters, as required.

## Solutions overview

### Interconnection solutions

As part of a disaster recovery plan, it is important to choose the right interconnection between remote sites.<br>
The two clusters must be fully visible to each other through a secure connection.

To do this, you can use various technologies such as:

- Connecting the websites between them via the same [vRack](https://www.ovh.co.uk/solutions/vrack/) across all websites.

![Interconnection with vRack diagram](images/vrackinterconnection.png){.thumbnail}

- Setting up an IPsec VPN between the two Nutanix clusters. 

![Interconnection with IPsec diagram](images/ipsecinterconnection.png){.thumbnail}

An example of an IPsec interconnect is available at this address: [IPsec interconnect between two sites](https://docs.ovh.com/gb/en/nutanix/ipsec-interconnection/)

### Nutanix solutions for implementing a disaster recovery plan

Some solutions are available with **Prism Element**:

- **Async DR**: replication between two remote **storage containers** is only done once per hour. If a problem occurs, it is possible to lose one hour of data (RPO 1 hour) but the restart can be done manually in one minute.
- **NearSync DR**: replication occurs several times per hour. You can sync between 1 and 15 minutes, depending on the licence you have (RPO between 1 and 15 minutes).

Details of these solutions can be found in our documentation on [asynchronous or NearSync replication through Prism Element](https://docs.ovh.com/gb/en/nutanix/prism-element-nutanix-replication/)

The management of disaster recovery plans can be improved via third-party tools or a Nutanix solution called **Leap** through **Prism Central**.

> [!warning]
> Asynchronous replication between two sites is integrated with the OVHcloud **Nutanix Standard** solution. However, you will need to upgrade to the OVHcloud **Nutanix Advanced** solution to use the other options.

## Go further

[IPsec interconnect between two sites](https://docs.ovh.com/gb/en/nutanix/ipsec-interconnection/)

[Asynchronous or *NearSync* replication through Prism Element](https://docs.ovh.com/gb/en/nutanix/prism-element-nutanix-replication/)

Join our community of users on <https://community.ovh.com/en/>.
