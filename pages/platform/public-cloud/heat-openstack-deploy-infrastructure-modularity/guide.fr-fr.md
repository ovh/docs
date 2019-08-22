---
title: Déployer une infrastructure avec des variables et des sorties formatées avec Heat d'OpenStack
excerpt: Découvrez comment exploiter les variables d'environnement en utilisant la modularité des gabarits Heat
slug: deployer-infrastructure-avec-variables-et-sorties-formatees-heat-openstack
section: Tutoriels
---

**Dernière mise à jour le 20/06/2018**

## Objectif

Nous avons vu dans le guide intitulé « [Déployer une infrastructure simple avec Heat d'OpenStack](https://docs.ovh.com/fr/public-cloud/deployer-infrastructure-avec-heat-openstack/){.external} » comment utiliser Heat pour créer des *stacks* simples et les manipuler. Nous allons à présent voir comment aller plus loin en utilisant des paramètres dans ces *stacks*.

**Apprenez comment formater la sortie pour utiliser les informations des ressources déployées.**


## Prérequis

- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager).
- Avoir créé un projet Public Cloud.
- Posséder un compte utilisateur OpenStack.
- Savoir manipuler un fichier YAML.
- Avoir inscrit votre projet Public Cloud dans le test bêta.

## En pratique

### Gérer les paramètres

Heat permet de rendre les *stacks* paramétrables grâce à des variables. Nous allons ajouter celles-ci dans le fichier `parameter-template.yaml` :

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

Les entrées avec `{ get_param: xxx }` représentent des paramètres qu'il est possible d'éviter à la création. De cette manière, il est possible d'utiliser le même gabarit pour créer des *stacks* différentes :

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

### Aller plus loin avec les paramètres dans les scripts de post-installation

À présent, nous souhaitons obtenir les informations de sortie une fois notre *stack* lancée afin de les récupérer pour d'autres traitements.

Modifiez le fichier pour inclure la définition des *outputs*.

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
   description: This is a list of first ip addresses of the server
   value: { get_attr: [my_instance, networks, Ext-Net]}
```

Une fois la *stack* créée, pour récupérer les informations formatées, utilisez `openstack stack output show` :

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

Il est possible d'aller plus loin ([voir la documentation d'OpenStack](https://docs.openstack.org/heat/pike/template_guide/hot_spec.html)), mais ces bases vous permettront de construire vos premières définitions d'infrastructure par du code.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.