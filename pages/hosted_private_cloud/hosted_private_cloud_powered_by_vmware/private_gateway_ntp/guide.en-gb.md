---
title: Configuring NTP on the Private Gateway
excerpt: Find out how to use the NTP server of the Private Gateway on a Hosted Private Cloud infrastructure
updated: 2026-04-23
---

## Objective

The private gateway allows you to use an NTP server.

**This guide explains how to configure the NTP service on the private gateway of your Hosted Private Cloud infrastructure.**

## Requirements

- A [Hosted Private Cloud](/links/hosted-private-cloud/vmware) solution.
- Access to the vSphere management interface.
- Having [enabled the private gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway/).
- Having [created your OVHcloud API credentials](/pages/manage_and_operate/api/first-steps) and being connected to the [OVHcloud API](/links/api).

## Instructions

### Architecture

The private gateway is not routed by default. Only machines on the same subnet can access the NTP server directly. For access from another network, a source NAT must be configured.

![NTP private gateway - Architecture](images/architecture.png){.thumbnail}

### Configuring NTP on the private gateway

#### Retrieve the private gateway IP address

Make the following API call to retrieve the private gateway information and get the value of `customerIp`:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
>

![NTP private gateway - API call](images/apiGet.png){.thumbnail}

#### Install chrony

On the relevant VM, run the following command:

```shell
apt-get install chrony
```

#### Configure chrony

Edit the `/etc/chrony.conf` file by adding the private gateway server IP address and removing the default configuration.

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

Join our [community of users](/links/community).
