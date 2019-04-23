---
title: Déployer une infrastructure simple avec Heat d'OpenStack (BÊTA)
slug: deployer-infrastructure-avec-heat-openstack
excerpt: Découvrez une première approche de Heat et des *stacks* en déployant votre première infrastructure
section: Tutoriels
---

**Dernière mise à jour le 20/06/2018**

## Objectif

Heat est un outil d'orchestration d'infrastructures pour OpenStack. Il prend en entrée un fichier descriptif indiquant les différents éléments de l'infrastructure à piloter, ainsi que les comportements à adopter suite à certains événements. L'objectif : industrialiser la gestion d'infrastructures cloud par du code. C'est ce que l'on appelle l'**Infrastructure as Code**.

Nous vous apportons une première approche de Heat et des *stacks* représentant des infrastructures orchestrées.

**Ce guide vous montre comment déployer votre première infrastructure simple basée sur Heat.**

> [!warning]
>
> Heat d'OpenStack est actuellement déployé en version bêta. En cas de difficulté et/ou si vous souhaitez échanger avec d'autres utilisateurs, vous pouvez envoyer un e-mail sur la mailing list <cloud@ml.ovh.net> ou sur notre forum d'entraide communautaire <https://community.ovh.com>.
> 

## Prérequis

- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager).
- Avoir créé un projet Public Cloud.
- Posséder un compte utilisateur OpenStack.
- Savoir manipuler un fichier YAML.
- Avoir inscrit votre projet Public Cloud dans le test bêta.

## En pratique

### Découvrir Heat

Dans notre langage, voici ce que l'on pourrait transmettre à Heat.

« Mon application est composée de :
- trois serveurs frontaux web de type [B2-15](https://www.ovh.com/fr/public-cloud/instances/tarifs/){.external} ;
- deux serveurs de base de données de type [C2-30](https://www.ovh.com/fr/public-cloud/instances/tarifs/){.external} ;
- deux disques additionnels raccordés aux serveurs de base de données ;
- l'ensemble communique via un réseau privé ;
- le scénario de *scaling* consiste à ajouter un serveur frontal web [B2-15](https://www.ovh.com/fr/public-cloud/instances/tarifs/){.external}. »

Suite à cela, il est possible déployer votre infrastructure complète avec une simple commande et de déclencher le scénario de *scaling* lorsque c'est pertinent.

> [!primary]
>
> Les scénarios de *scaling* sont disponibles via une URL et sur déclenchement de la part de l'utilisateur. De nouvelles fonctionnalités sont en cours d'intégration sur Public Cloud pour proposer des déclenchements automatiques suite à une importante charge CPU ou RAM par exemple. Ces fonctionnalités arriveront d'ici quelques semaines.
> 

### Rappels sur l'installation du client

Il convient d'installer le client en ligne de commande d'OpenStack.

> [!primary]
>
> Les anciennes versions de clients en ligne de commande pour OpenStack (Nova, Cinder, Neutron, Heat) sont en fin de cycle de vie. Il est donc important d'utiliser le nouveau client unifié appelé **OpenStack**.
> 

```sh
# apt install python-openstackclient python-heatclient
```

Vous pouvez également installer le client en utilisant pip.

```sh
# apt install python-pip
# pip install --upgrade python-openstackclient python-heatclient
```

Une clé SSH sera également nécessaire pour vous connecter aux instances.

```
$ openstack keypair create heat_key > heat_key.priv
$ chmod 600 heat_key.priv
```

### Démarrer une infrastructure basique

Démarrez la plus petite infrastructure composée d'un seul serveur pour vous familiariser avec les *stacks* de Heat.

Créez un fichier nommé `basic-template.yaml` contenant ceci :

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

Créez ensuite votre  première *stack* avec la commande suivante :

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

La *stack* est en cours de création. Après quelques secondes, vous pouvez vérifier son état :

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

Comme pour les autres ressources OpenStack, il est possible de lister vos *stacks* :

```sh
$ openstack stack list
+--------------------------------------+-------------+-----------------+----------------------+--------------+
| ID                                   | Stack Name  | Stack Status    | Creation Time        | Updated Time |
+--------------------------------------+-------------+-----------------+----------------------+--------------+
| f81ec642-96b6-4540-b323-d5184327ae34 | first-stack | CREATE_COMPLETE | 2018-03-27T16:12:36Z | None         |
+--------------------------------------+-------------+-----------------+----------------------+--------------+
```

Comme vous avez pu le voir, une *stack* possède un état, au même titre qu'une instance. Pour lister l'historique d'une *stack*, utilisez :

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

De même, il est possible de voir les différentes ressources présentes dans la *stack*. Dans notre cas il n'y a qu'un serveur :

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

Comme vous avez pu le voir, une *stack* regroupe un ensemble de ressources et son cycle de vie décrit des états dont l'historique est consultable.

Nous allons supprimer la *stack* à présent :

```sh
$ openstack stack delete first-stack
Are you sure you want to delete this stack(s) [y/N]? y
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.