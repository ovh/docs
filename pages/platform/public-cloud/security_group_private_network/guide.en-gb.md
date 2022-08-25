---
title: Managing firewall rules and port security on private networks
slug: firewall_security_pci
excerpt: Find out how security groups work on Public Cloud
section: OpenStack
---

**Last updated 25th August 2022**

## Objective

The OpenStack platform manages firewall security by combining connection rules into **security groups**. Rules are then applied by assigning security groups to networking ports.

A **port** in the context of [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html) is a point of connection between subnets and networking elements (such as instances, load balancers, routers etc.).

**This guide explains how security groups for private networks are managed on Public Cloud.**

> [!primary]
>
> This guide only concerns configurations for private networks. For public networks the firewall rules are global.
>
> Please take note of the [migration details](#migration) below regarding changes to the Public Cloud OpenStack [regions](#regions).

## Requirements

- Preparing the environment to [use the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/)
- Setting the [OpenStack environment variables](../set-openstack-environment-variables/)


## Instructions

### Default settings

Each networking port is attached to a security group which contains some specific rules.

The "default" security group contains the following rules:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

The return shows that all connections are allowed for any protocol and in both directions.

Depending on the region, the implementation might be different but the result is identical: all connections are allowed.

As a consequence, all the network ports (public and private) will allow every connection when you start an instance.

### Managing your private firewall rules

#### Adding rules

If you want to configure specific rules, you can edit the default security group. Alternatively, create a new security group and associate your networking port with it.

Use this command to create the group:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

This example security group has only egress rules which means no ingress communication will be allowed.

To add a rule for SSH connections for example, you can use this command:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```


Enter the following command to associate your security group with your port:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

#### Different behaviour depending on regions <a name="regions"></a>

The private network default configuration might be different depending on the region you are using.

> [!primary]
>
> In some regions the "port security" property is shown as "enabled" even when it is not applying any rule on private network. On some other regions (depending on the OpenStack version deployed), the "port security" property is shown as "enabled" and rules are applied correctly on private network.
>

To summarise, for the following regions running OpenStack Newton **no firewall rules will work** for your private networks, even if port security is enabled:

- Singapore: SGP1
- Sydney: SYD1
- Hillsboro: US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

In the following regions (running OpenStack Stein release), the firewall rules for private networks **will work** as expected:

- Beauharnois: BHS1, BHS3, BHS5
- Frankfurt: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA9, GRA11
- Strasbourg: SBG5, SBG7
- London: UK1
- Warsaw: WAW1

OVHcloud will progressively upgrade all Newton regions to Stein, so the port security property feature will be available.

To avoid any breaking change during the upgrade, the "port security" will be set to "False" on all already created networks. Once a region will be upgraded to OpenStack Stein release, if you want to use firewall rules on private networks you will have to set the "port security" property as "True".

You can check whether your private network port has port security enabled:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Migration process <a name="migration"></a>

#### For new ports:

- Since the upgrade to the Stein version on OpenStack regions and the new version of OpenVSwitch, the default port security is **enabled** by default.
- The firewall rules will work for the new ports. Nothing will change for the existing ports.

#### For existing ports:

You have to use `openstack` CLI to enable the port security on your existing ports:

```bash
openstack network set --enable-port-security <network_ID>
openstack port set --enable-port-security <port_ID>
```

> [!primary]
> In order to retrieve the port, you can use OpenStack CLI. Execute the command ``openstack port list --server <server_ID>` to retrieve the ports on a given server.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.