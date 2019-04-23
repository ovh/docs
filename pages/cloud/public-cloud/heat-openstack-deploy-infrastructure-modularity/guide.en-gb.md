---
title: Deploying an infrastructure with variables and formatted outputs using OpenStack Heat (BETA)
slug: deploy-infrastructure-with-variables-and-formatted-outputs-openstack-heat
excerpt: Find out how to process environment variables using the modularity of Heat templates
section: Tutorials
---

**Last updated June 20th 2018**

## Objective

We recommend starting off by reading our guide on [Deploying a basic infrastructure with OpenStack Heat](https://docs.ovh.com/gb/en/public-cloud/deploy-infrastructure-with-openstack-heat/){.external}, which covers how to use Heat for creating and manipulating simple *stacks*. In this guide, we will go a step further by using parameters in these *stacks*.

**Find out how to format the output, so that you can use this information on the resources you have deployed.**

## Requirements

- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- a Public Cloud project
- an OpenStack user account
- how to manipulate YAML files
- sign up your Public Cloud project for the beta test

## Instructions

### Manage the parameters

Using variables, you can edit the parameters for *stacks* in Heat. We will add these into the file `parameter-template.yaml`:

```yaml
heat_template_version: 2014-10-16
 
description: Simple template to deploy a single compute instance with an attached volume
 
parameters:
  key_name:
    type: string
    description: Name of a KeyPair to enable SSH access to the instance
    default: heat_key
 
  image_id:
    type: string
    description: Name of a cloud image in the catalog
    default: Debian 9
 
  size_gb:
    type: string
    description: Size of the volume
    default: 10
 
resources:
  my_instance:
    type: OS::Nova::Server
    properties:
      key_name: { get_param: key_name }
      image: { get_param: image_id }
      flavor: c2-7
      networks:
        - network: Ext-Net
 
  my_volume:
    type: OS::Cinder::Volume
    properties:
      size: { get_param: size_gb }
 
  my_attachment:
      type: OS::Cinder::VolumeAttachment
      properties:
        instance_uuid:  { get_resource: my_instance }
        volume_id: { get_resource: my_volume }
        mountpoint: /dev/vdb
```


The entries with `{ get_param: xxx }` represent parameters you can avoid when you create the stack. This way, you can use the same template to  create different *stacks*:

```sh
$ openstack stack create -t parameter-template.yaml --parameter key_name=heat_key --parameter image_id="Centos 7" --parameter size_gb=50 second-stack
+---------------------+-----------------------------------------------------------------------------+
| Field               | Value                                                                       |
+---------------------+-----------------------------------------------------------------------------+
| id                  | 35ba3489-f48f-47fc-a0ed-cf17ad302e9c                                        |
| stack_name          | second-stack                                                                |
| description         | Simple template to deploy a single compute instance with an attached volume |
| creation_time       | 2018-03-28T14:34:15Z                                                        |
| updated_time        | None                                                                        |
| stack_status        | CREATE_IN_PROGRESS                                                          |
| stack_status_reason | Stack CREATE started                                                        |
+---------------------+-----------------------------------------------------------------------------+
$ openstack stack create -t parameter-template.yaml --parameter key_name=heat_key --parameter image_id="Ubuntu 17.10" --parameter size_gb=10 third-stack
+---------------------+-----------------------------------------------------------------------------+
| Field               | Value                                                                       |
+---------------------+-----------------------------------------------------------------------------+
| id                  | 10f5926e-fc7b-4ca0-914e-d3a964d0796a                                        |
| stack_name          | third-stack                                                                 |
| description         | Simple template to deploy a single compute instance with an attached volume |
| creation_time       | 2018-03-28T14:35:49Z                                                        |
| updated_time        | None                                                                        |
| stack_status        | CREATE_IN_PROGRESS                                                          |
| stack_status_reason | Stack CREATE started                                                        |
+---------------------+-----------------------------------------------------------------------------+
```

### Go further with the parameters in the post-installation scripts

At this point, it would be helpful for you to get output information once you have launched your *stack*, so that you can use this information for other processing operations.

Modify the file to include the definition of *outputs*.

```yaml
heat_template_version: 2014-10-16
 
description: Simple template to deploy a single compute instance with an attached volume
 
parameters:
  key_name:
    type: string
    description: Name of a KeyPair to enable SSH access to the instance
    default: heat_key
 
  image_id:
    type: string
    description: Name of a cloud image in the catalog
    default: Debian 9
 
  size_gb:
    type: string
    description: Size of the volume
    default: 10
 
resources:
  my_instance:
    type: OS::Nova::Server
    properties:
      key_name: { get_param: key_name }
      image: { get_param: image_id }
      flavor: c2-7
      networks:
        - network: Ext-Net
 
  my_volume:
    type: OS::Cinder::Volume
    properties:
      size: { get_param: size_gb }
 
  my_attachment:
      type: OS::Cinder::VolumeAttachment
      properties:
        instance_uuid:  { get_resource: my_instance }
        volume_id: { get_resource: my_volume }
        mountpoint: /dev/vdb
 
outputs:
 server:
   description: This is a list of server names.
   value: { get_attr: [my_instance, name]}
 server_ip:
   description: This is a list of first ip addresses of the server.
   value: { get_attr: [my_instance, networks, Ext-Net]}
```

Once you have created the *stack*, use `openstack stack output show` to retrieve the formatted information:

```sh
$ openstack stack output show fourth-stack server_ip
+--------------+----------------------------------------------------+
| Field        | Value                                              |
+--------------+----------------------------------------------------+
| description  | This is a list of first ip addresses of the server |
| output_key   | server_ip                                          |
| output_value | [u'2001:41d0:801:1000::26', u'54.37.0.132']        |
+--------------+----------------------------------------------------+
$ openstack stack output show fourth-stack server
+--------------+-------------------------------------+
| Field        | Value                               |
+--------------+-------------------------------------+
| description  | This is a list of server names.     |
| output_key   | server                              |
| output_value | four-stack-my_instance-jmeobt3egom3 |
+--------------+-------------------------------------+
```

You can find out more by reading the [official OpenStack documentation](https://docs.openstack.org/heat/pike/template_guide/hot_spec.html), but these guides should be enough to help you build your first infrastructure definitions using code.

## Go further

Join our community of users on <https://community.ovh.com/en/>.