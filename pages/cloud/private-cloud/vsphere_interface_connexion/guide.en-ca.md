---
title: Logging in to the vSphere interface
slug: login-vsphere-interface
excerpt: Find out about the different ways you can log in to vSphere
section: 'Getting started'
order: 2
---

**Last updated 24th June 2022**

## Objective

**This guide explains how to connect to the vSphere client.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-ca/enterprise/products/hosted-private-cloud/) to receive login credentials.
- IP addresses added in the `Security`{.action} tab of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). For more information, please read our guide on [Authorising IP addresses for vCenter access](https://docs.ovh.com/ca/en/private-cloud/authorise-ip-addresses-vcenter/).

## Instructions

### Retrieving credentials

Login credentials are sent out by email when the Hosted Private Cloud service is created, when a password is changed or when a user profile is created.

```
Name/IP address: pcc-xxx-xxx-xxx-xxx.ovh.com Username: admin password: xxxxxx
```

To ensure access, please refer to the VMware documentation, in which the different ports to be opened in your firewall are listed: [Client access](https://kb.vmware.com/kb/1012382){.external}.

### Using the HTML5 web client

The HTML5 web client is available on the Hosted Private Cloud web interface at this URL: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (replace pcc-xxx-xxx-xxx-xxx.ovh.com with your Hosted Private Cloud address).

![Connecting to vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

You will arrive at this interface:

![Connecting to vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

The `Home`{.action} page provides accces to the main menus of your vCenter. 

## Go further

Join our community of users on <https://community.ovh.com/en/>.