---
title: Deploying a basic infrastructure with OpenStack Heat (BETA)
slug: deploy-infrastructure-with-openstack-heat
excerpt: Find out how to get started with Heat and stacks by deploying your first infrastructure
section: Tutorials
---

**Last updated June 20th 2018**

## Objective

Heat is an infrastructure orchestration tool for OpenStack. It takes descriptive files as inputs. These files list the various elements of the infrastructure that need to be managed, as well as the behaviours to adopt following certain events. The purpose of this is to industrialise cloud infrastructure management using code. This is called **Infrastructure as code**.

We will help you get started using Heat, and the *stacks* that represent orchestrated infrastructures.

**This guide will show you how to deploy your first basic infrastructure based on Heat.**

> [!warning]
>
> OpenStack Heat is currently only deployed as a beta version. If you experience any difficulties and/or would like to discuss your experience with other users, you can send an email to the mailing list, <cloud@ml.ovh.net>, or get in touch on our community platform: <https://community.ovh.com/en/>.
> 

## Requirements

- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- a Public Cloud project
- an OpenStack user account
- how to manipulate YAML files
- sign up your Public Cloud project for the beta test

## Instructions

### Learn the basics about Heat

The text below is an example of the sort of instructions we could send to Heat, expressed in English.

“My application is composed of:

- three [B2-15](https://www.ovh.co.uk/public-cloud/instances/prices/){.external} front-end web servers
- two [C2-30](https://www.ovh.co.uk/public-cloud/instances/prices/){.external} database servers
- two additional disks connected to the database servers
- all of these components communicate with one another via a private network
- the *scaling* scenario consists of adding another [B2-15](https://www.ovh.co.uk/public-cloud/instances/prices/){.external} front-end web server.”

Once you have done this, you can deploy your full infrastructure with a single command, and launch the *scaling* scenario as required.

> [!primary]
>
> The *scaling* scenarios are available via a URL, and triggered by the user. New features are currently being integrated into the Public Cloud, and they will offer automatic triggering based on conditions such as very high CPU and RAM usage. These features will become available in a few weeks.
> 

### Installing the client

It is best to install the client using the OpenStack command line.

> [!primary]
>
> The old command line clients for OpenStack (Nova, Cinder, Neutron, Heat) are at the end of their lifecycles. Because of this, it is important to use the new unified client, called **OpenStack**.
> 

```sh
# apt install python-openstackclient python-heatclient
```

You can also install the client using pip.

```sh
# apt install python-pip
# pip install --upgrade python-openstackclient python-heatclient
```

You will also need a SSH key to connect to your instances.

```
$ openstack keypair create heat_key > heat_key.priv
$ chmod 600 heat_key.priv
```

### Launch a basic infrastructure

We recommend launching a very small infrastructure, composed of a single server, so that you can familiarise yourself with Heat *stacks*.

Create a file with the name `basic-template.yaml`, and add the following into the file:

```yaml
heat_template_version: 2014-10-16

description: Simple template to deploy a single compute instance with an attached volume

resources:
  my_instance:
    type: OS::Nova::Server
    properties:
      key_name: heat_key
      image: Debian 9
      flavor: c2-7
      networks:
        - network: Ext-Net

  my_volume:
    type: OS::Cinder::Volume
    properties:
      size: 10

  my_attachment:
      type: OS::Cinder::VolumeAttachment
      properties:
        instance_uuid:  { get_resource: my_instance }
        volume_id: { get_resource: my_volume }
        mountpoint: /dev/vdb
```

Then create your first *stack* with the following command:

```sh
$ openstack stack create -t basic-template.yaml first-stack
+---------------------+-----------------------------------------------------------------------------+
| Field               | Value                                                                       |
+---------------------+-----------------------------------------------------------------------------+
| id                  | f81ec642-96b6-4540-b323-d5184327ae34                                        |
| stack_name          | first-stack                                                                 |
| description         | Simple template to deploy a single compute instance with an attached volume |
| creation_time       | 2018-03-27T16:12:36Z                                                        |
| updated_time        | None                                                                        |
| stack_status        | CREATE_IN_PROGRESS                                                          |
| stack_status_reason | Stack CREATE started                                                        |
+---------------------+-----------------------------------------------------------------------------+
```

The *stack* is being created. After a few seconds, you can check its status:

```sh
$ openstack stack show first-stack
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                                                                                |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                    | f81ec642-96b6-4540-b323-d5184327ae34                                                                                                                 |
| stack_name            | first-stack                                                                                                                                          |
| description           | Simple template to deploy a single compute instance with an attached volume                                                                          |
| creation_time         | 2018-03-27T16:12:36Z                                                                                                                                 |
| updated_time          | None                                                                                                                                                 |
| stack_status          | CREATE_COMPLETE                                                                                                                                      |
| stack_status_reason   | Stack CREATE completed successfully                                                                                                                  |
| parameters            | OS::project_id: d6eefcacfa68469fb1f26446daa5fa78                                                                                                     |
|                       | OS::stack_id: f81ec642-96b6-4540-b323-d5184327ae34                                                                                                   |
|                       | OS::stack_name: first-stack                                                                                                                          |
|                       |                                                                                                                                                      |
| outputs               | []                                                                                                                                                   |
|                       |                                                                                                                                                      |
| links                 | - href: https://orchestration.preprod.gra1.cloud.ovh.net/v1/d6eefcacfa68469fb1f26446daa5fa78/stacks/first-stack/f81ec642-96b6-4540-b323-d5184327ae34 |
|                       | rel: self                                                                                                                                            |
|                       |                                                                                                                                                      |
| capabilities          | []                                                                                                                                                   |
| timeout_mins          | None                                                                                                                                                 |
| stack_user_project_id | 5043d0839de0449cb726bb88cfba02b8                                                                                                                     |
| parent                | None                                                                                                                                                 |
| deletion_time         | None                                                                                                                                                 |
| notification_topics   | []                                                                                                                                                   |
| stack_owner           | None                                                                                                                                                 |
| tags                  | None                                                                                                                                                 |
| disable_rollback      | True                                                                                                                                                 |
+-----------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
```

As with other OpenStack resources, you can list your *stacks*:

```sh
$ openstack stack list
+--------------------------------------+-------------+-----------------+----------------------+--------------+
| ID                                   | Stack Name  | Stack Status    | Creation Time        | Updated Time |
+--------------------------------------+-------------+-----------------+----------------------+--------------+
| f81ec642-96b6-4540-b323-d5184327ae34 | first-stack | CREATE_COMPLETE | 2018-03-27T16:12:36Z | None         |
+--------------------------------------+-------------+-----------------+----------------------+--------------+
```

As you can see, a *stack* has a status, just like an instance. To see the event list for a *stack*, use:

```sh
$ openstack stack event list first-stack
2018-03-27 16:12:38Z [first-stack]: CREATE_IN_PROGRESS Stack CREATE started
2018-03-27 16:12:38Z [first-stack.my_instance]: CREATE_IN_PROGRESS state changed
2018-03-27 16:12:39Z [first-stack.my_volume]: CREATE_IN_PROGRESS state changed
2018-03-27 16:12:41Z [first-stack.my_volume]: CREATE_COMPLETE state changed
2018-03-27 16:13:00Z [first-stack.my_instance]: CREATE_COMPLETE state changed
2018-03-27 16:13:00Z [first-stack.my_attachment]: CREATE_IN_PROGRESS state changed
2018-03-27 16:13:04Z [first-stack.my_attachment]: CREATE_COMPLETE state changed
2018-03-27 16:13:04Z [first-stack]: CREATE_COMPLETE Stack CREATE completed successfully
```

You can also see the various resources present in the *stack*. In this case, there is only one server:

```sh
$ openstack stack resource list first-stack
+---------------+--------------------------------------+------------------------------+-----------------+----------------------+
| resource_name | physical_resource_id                 | resource_type                | resource_status | updated_time         |
+---------------+--------------------------------------+------------------------------+-----------------+----------------------+
| my_volume     | 2fc5d81c-db47-4d21-9179-11895b332944 | OS::Cinder::Volume           | CREATE_COMPLETE | 2018-03-27T16:12:38Z |
| my_attachment | 2fc5d81c-db47-4d21-9179-11895b332944 | OS::Cinder::VolumeAttachment | CREATE_COMPLETE | 2018-03-27T16:12:38Z |
| my_instance   | 8263d0e0-5ad2-46f5-89a2-5b8ecea43b66 | OS::Nova::Server             | CREATE_COMPLETE | 2018-03-27T16:12:38Z |
+---------------+--------------------------------------+------------------------------+-----------------+----------------------+
```

As you can see, a *stack* groups together a set of resources, and its lifecycle shows statuses, for which you can view the event list.

We will now delete this *stack*:

```sh
$ openstack stack delete first-stack
Are you sure you want to delete this stack(s) [y/N]? y
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.