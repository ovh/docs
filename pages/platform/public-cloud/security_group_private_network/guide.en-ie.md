---
title: Managing firewall rules and port security on networks using OpenStack CLI
slug: firewall_security_pci
excerpt: Find out how security groups work on Public Cloud
section: OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 25th August 2022**

## Objective

The OpenStack platform manages firewall security by combining connection rules into **security groups**. Rules are then applied by assigning security groups to networking ports.

A **port** in the context of [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html) is a point of connection between subnets and networking elements (such as instances, load balancers, routers etc.).

**This guide explains how security groups for public and private networks are managed on Public Cloud.**


## Requirements

- Preparing the environment to [use the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/)
- Setting the [OpenStack environment variables](../set-openstack-environment-variables/)

## Instructions

### Activation process <a name="Activation"></a>

> [!primary]
>
> This guide section only concerns configurations for private networks.

#### For already created private network:

To prevent breaking changes during OpenStack Stein and Open vSwitch version upgrades, the "port security" has been set to "False" on existing networks.

You have to use `openstack` CLI to enable the port security on your existing ports and network.

First, if you want to use firewall rules on private networks you will have to set the "port security" property as "True":

```bash
openstack network set --enable-port-security <network_ID>
```

Then, you will need to enable the port security on the port of your service in this network. 

> [!primary]
> As a reminder, to retrieve the port, you can use OpenStack CLI. Execute the command `openstack port list --server <server_ID>` to retrieve the ports on a given server.
>

For all services with an active port in this network, enable port security:

```bash
openstack port set --enable-port-security <port_ID>
```

Then you can check if a port has port security enabled:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

The result should look like to the following:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### For a new private network:

Since the upgrade to the Stein version on OpenStack regions and the new version of Open vSwitch are done ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), the "port security" flag will be set to "True" by default on any newly created private networks.

This will ensure that we stay consistent with the default "True" policy, like on vanilla OpenStack deployments.

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

As a consequence, all the network ports (public and private) will allow every connection when you start an instance.

### Managing your private firewall rules

#### Adding rules

If you want to configure specific rules, you can create a new security group and associate your networking port with it.

``bash
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

## Go further

Join our community of users on <https://community.ovh.com/en/>.