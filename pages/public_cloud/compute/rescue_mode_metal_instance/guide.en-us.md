---
title: Putting a Metal instance in rescue mode
excerpt: 'Find out how to activate the rescue mode environment on a Metal Instance'
hidden: true
updated: 2023-01-04
---

## Objective

Unlike other Public Cloud Instances where the rescue mode can be activated from the OVHcloud Control Panel, this option is not yet available for Metal Instances. To activate the rescue mode on a Metal Instance, you must go through the command line interface. This can be done via Openstack.

**This guide explains how to activate the rescue mode on a Metal Instance via CLI.**

> [!primary]
>
> This guide applies only to Metal instances. To access rescue mode for all other instance types, follow [this main guide](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account
- A [Public Cloud Metal instance](/pages/public_cloud/compute/public-cloud-first-steps) in your project

## Instructions

Before following these steps, it’s recommended that you first complete the following:

- [Preparing the environment to use the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Setting OpenStack environment variables](/pages/public_cloud/compute/loading_openstack_environment_variables)

### Putting a Metal instance in rescue mode using OpenStack CLI

Once your environment is set, establish an SSH connection to your instance and run the following command to list your existing Instances:

```bash
#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| f12124f8-c058-4ee7-8b89-5a732ca8079b | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 21.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
``` 

Once you have retrieved the ID of the instance, run the following command to reboot the instance in rescue mode:

```bash
openstack server rescue f12124f8-c058-4ee7-8b89-5a732ca8079b --password "csdsdf6dKcj5"
(openstack-client) ➜  openstack-client ssh root@xx.xx.xx.xx
The authenticity of host 'xx.xx.xx.xxx (xx.xx.xx.xxx)' can't be established.
ED25519 key fingerprint is SHA256:ddWp0YK4A3mN339daofocdJ3xlL++sTn7ppo4Lz4Ju0.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'xx.xx.xx.xxx' (ED25519) to the list of known hosts.
root@xx.xx.xx.xxx's password:
Linux rescue 5.10.0-8-amd64 #1 SMP Debian 5.10.46-4 (2021-08-03) x86_64The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
root@rescue:~# 
```

### Exiting rescue mode

Once you are done with your operations, you can use the following command to remove your instance from rescue mode:

```bash
$ openstack server unrescue SERVERID
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.