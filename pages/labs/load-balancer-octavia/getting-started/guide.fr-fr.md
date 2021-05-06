---
title: Premiers pas avec le service Load Balancer sur le Public Cloud (Beta)
slug: premiers-pas-avec-load-balancer-public-cloud
excerpt: Découvrez comment débuter avec un Load Balancer sur le Public Cloud
section: Premiers pas
order: 1
---

**Dernière mise à jour le 05/05/2021**

## Objectif

Notre nouvelle solution Load Balancer as a Service (LBaaS) est basée sur le service [Openstack Octavia](https://wiki.openstack.org/wiki/Octavia){.external} et sera entièrement intégrée dans l'univers Public Cloud.

**Découvrez comment débuter avec un Load Balancer sur le Public Cloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)
- Avoir activé la région GRA9 sur votre projet
- Utiliser l'environement de commande d'Openstack ([Tutoriel](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/))
- Avoir installé le client Openstack Octavia

## En pratique

### Configuration de votre réseau privé

Avant de commencer à utiliser un Load Balancer, il vous faut créer un réseau privé:

```
openstack network create my_network

openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp

openstack router create my_router

openstack router add subnet my_router my_subnet

openstack router set --external-gateway Ext-Net my_router
```

> [!alert]
>
> La fonctionnalité LBaaS étant en Beta, le réseau doit être déployé au moins à GRA9 et ne doit pas faire partie du sous réseau 10.224.0.0/16. (Ces restrictions seront retirées lors de la disponibilité générale du service).

Vous pouvez maintenant attacher vos instances à ce nouveau réseau. Nous vous recommandons de suivre cette documentation pour [attacher vos instances au vRack](https://docs.ovh.com/fr/public-cloud/public-cloud-vrack/#etape-3-integrer-une-instance-dans-le-vrack_1). Prenez note des adresses de vos instances dans votre réseau avec la commande suivante :

```
openstack server list
```

Vous devez maintenant configurer vos instances pour qu'elles aient leurs adresses IP configurées sur leur interfaces.

### Création du Load Balancer

Vous pouvez consulter la liste des différents types de Load Balancer que nous offrons avec cette commande :

```
openstack loadbalancer flavor list
```

Vous pouvez maintenant créer votre Load Balancer avec la commande suivante. Dans cet exemple, nous allons faire un Load Balancer de type « Small ».

```
openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
```

Votre Load Balancer sera configuré avec une adresse IP dans le réseau privé. Si vous souhaitez avoir un accès depuis Internet, il vous faudra attacher une adresse IP Flottante.

### Attacher une adresse IP Flottante à un Load Balancer

Voici comment attacher une adresse IP Flottante à un Load Balancer.

```
openstack floating ip create Ext-Net
openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> Pour récuprer l'identifiant du port VIP de votre Load Balancer, utilisez `openstack loadbalancer show my_load_balancer`.

### Configuration de votre Load Balancer

Dans cet exemple, nous ferons juste un Load Balancer HTTP. Pour ce faire, il faut tout d'abord créer un Listener qui permettra d'écouter sur le port 80 du Load Balancer, avec cette commande :

```
openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
```

Une fois le Listener créé, il faut lui ajouter les différentes instances qui pourront répondre aux requêtes des clients. Pour ce faire, vous devez créer un Pool d'instances :

```
openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
```

Ajoutez vos instances au Pool :

```
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

Vous pouvez maintenant accéder à votre Load Balancer via l'adresse IP Flottante ou l'adresse IP privée depuis une instance dans votre réseau privé.

## Aller plus loin

[Découvrez les autres pages de documentation à propos des Load Balancer sur le Public Cloud](../)

[Documentation officiel d'Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe d'OVHcloud, venez sur [notre room Gitter](https://gitter.im/ovh/octavia-loadbalancer)**
