---
title: Premiers pas avec le service Load Balancer pour Public Cloud
excerpt: Découvrez comment débuter avec un Load Balancer Public Cloud
updated: 2022-11-02
---


## Objectif

Notre nouvelle solution Load Balancer as a Service (LBaaS) est basée sur le service [Openstack Octavia](https://docs.openstack.org/octavia/queens/reference/introduction.html){.external} et est entièrement intégrée dans l'univers Public Cloud.

**Découvrez comment débuter avec un Load Balancer sur le Public Cloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/)
- Utiliser [l'environnement de commande Openstack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api))
- Avoir installé le client Openstack Octavia

## En pratique

### Configurer votre réseau privé

Avant de commencer à utiliser un Load Balancer, il vous faut créer un réseau privé:

```bash
openstack network create my_network

openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp

openstack router create my_router

openstack router add subnet my_router my_subnet

openstack router set --external-gateway Ext-Net my_router
```

Vous pouvez maintenant attacher vos instances à ce nouveau réseau. Nous vous recommandons de suivre la documentation pour [attacher vos instances au vRack](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#instance-integration). 

Prenez note des adresses de vos instances dans votre réseau avec la commande suivante :

```bash
openstack server list
```

Vous devez maintenant configurer vos instances pour qu'elles aient leurs adresses IP configurées sur leur interfaces.

### Créer votre Load Balancer

Vous pouvez consulter la liste des différents types de Load Balancer que nous offrons avec cette commande :

```bash
openstack loadbalancer flavor list
```

Vous pouvez maintenant créer votre Load Balancer avec la commande suivante. Dans cet exemple, nous allons faire un Load Balancer de type « Small ».

```bash
openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
```

Votre Load Balancer sera configuré avec une adresse IP dans le réseau privé. Si vous souhaitez avoir un accès depuis Internet, il vous faudra attacher une adresse Floating IP.

### Attacher une adresse Floating IP à un Load Balancer

Voici comment attacher une adresse Floating IP à un Load Balancer.

```bash
openstack floating ip create Ext-Net
openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> Pour récupérer l'identifiant du port VIP de votre Load Balancer, utilisez `openstack loadbalancer show my_load_balancer`.

### Configurer votre Load Balancer

Dans cet exemple, nous ferons juste un Load Balancer HTTP. Pour ce faire, il faut tout d'abord créer un Listener qui permettra d'écouter sur le port 80 du Load Balancer, avec cette commande :

```bash
openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
```

Une fois le Listener créé, il faut lui ajouter les différentes instances qui pourront répondre aux requêtes des clients. Pour ce faire, vous devez créer un Pool d'instances :

```bash
openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
```

Ajoutez vos instances au Pool :

```bash
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

Vous pouvez maintenant accéder à votre Load Balancer via l'adresse Floating IP ou l'adresse IP privée depuis une instance dans votre réseau privé.

## Aller plus loin

[Documentation officielle d'Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
