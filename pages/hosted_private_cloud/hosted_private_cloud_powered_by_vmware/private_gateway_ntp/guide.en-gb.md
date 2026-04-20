---
title: NTP configuration private gateway
excerpt: Find out how to use the NTP server of the Private Gateway on a Hosted Private Cloud infrastructure
updated: 2026-04-20
---

## Objective

The private gateway gives you the ability to use an NTP server.

**This guide explains how to use the NTP server of the private gateway on your Hosted Private Cloud infrastructure.**

## Requirements

* A [Hosted Private Cloud](https://www.ovh.com/fr/private-cloud/) solution.
* Access to the vSphere management interface.
* Being connected to the [OVHCloud API](/links/api).
* Having [created your OVHCloud API credentials](/pages/manage_and_operate/api/first-steps).
* Having [enabled the private gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway/).

## Instructions

### Architecture

The private gateway has no route, so only users on the same subnet can use the NTP server. Connections from another network must be source-NATted.
![NTP private gateway - Architecture](images/architecture.png){.thumbnail}

<a name="useNTP"></a>

### Using the NTP server of the private gateway

#### Retrieve the private gateway IP address:

Make an API call to retrieve the private gateway information and get the value of customerIp:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
>
![NTP private gateway - Api call](images/apiGet.png){.thumbnail}

#### Install chrony
On the relevant VM, run the following command:

```shell
apt-get install chrony
```

#### Configure chrony
Edit the /etc/chrony.conf file by adding the private gateway server IP address and removing the default configuration.
![NTP private gateway - Configuration](images/configFile.png){.thumbnail}

#### Restart chrony
Restart the chrony service:
```shell
systemctl restart chrony
```

#### Check the client
Verify that the VM is correctly connecting to the server:
```shell
chronyc sources
```
![NTP private gateway - Server Check](images/ntpServer.png){.thumbnail}

Verify that the synchronization is working:
```shell
chronyc tracking
```
![NTP private gateway - Synchronization check](images/ntpSynchro.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
