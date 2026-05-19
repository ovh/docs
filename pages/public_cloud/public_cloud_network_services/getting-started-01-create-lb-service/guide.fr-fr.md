---
title: Premiers pas avec le service Load Balancer pour Public Cloud
excerpt: Découvrez comment débuter avec un Load Balancer Public Cloud
updated: 2026-05-19
---

## Objectif

Notre Load Balancer Public Cloud est basé sur le service [Openstack Octavia](https://wiki.openstack.org/wiki/Octavia) et est entièrement intégré dans l'univers Public Cloud.

**Découvrez comment débuter avec un Load Balancer sur le Public Cloud.**

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud)
- Comprendre les [concepts du Load Balancer](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- Comprendre les [concepts de réseau Public Cloud](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts)
- Un Load Balancer nécessite un sous-réseau, lisez [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack) pour plus d'informations
- (Facultatif) : Ce guide explique la configuration du load balancer via l'interface graphique et l'interface en ligne de commande. Si vous souhaitez utiliser cette dernière, installez [l'environnement en ligne de commande OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

## En pratique

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

### Création du Load Balancer

> [!tabs]
> Via l'espace client OVHcloud
>> Cliquez sur `Load Balancer`{.action} (sous **Network**) dans le menu de gauche, puis cliquez sur le bouton `Créer un Load Balancer`{.action}.
>>
>> La page de configuration s'ouvre. Complétez chaque étape :
>>
>> **Étape 1 : Nom**
>>
>> Saisissez un nom pour votre Load Balancer, puis cliquez sur `Suivant`{.action}.
>>
>> **Étape 2 : Région**
>>
>> Sélectionnez le type de zone :
>>
>> - **1AZ** : Déploiement sur une seule zone de disponibilité.
>> - **3AZ** : Déploiement réparti sur trois zones pour une haute disponibilité.
>>
>> Choisissez ensuite votre région. Seules les régions sur lesquelles vous avez un réseau privé avec au moins un sous-réseau sont disponibles. Cliquez sur `Suivant`{.action}.
>>
>> **Étape 3 : Taille**
>>
>> Sélectionnez la taille (flavor) adaptée à votre charge de travail. L'interface fournit un lien vers le benchmark et les caractéristiques complètes de chaque taille. Cliquez sur `Suivant`{.action}.
>>
>> **Étape 4 : IP publique**
>>
>> Choisissez si votre Load Balancer doit gérer du trafic public ou privé (consultez notre page « [Concepts - Réseau Public Cloud](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) » pour plus de détails) :
>>
>> - **`Nouvelle IP Publique`** : Crée une nouvelle adresse Floating IP pour votre Load Balancer.
>> - **Floating IP existante** : Si vous avez déjà une adresse Floating IP, sélectionnez-la dans la liste.
>> - **`Aucune IP publique`{.action}** : Pour un trafic privé uniquement.
>>
>> **Étape 5 : Réseau privé et sous-réseau**
>>
>> Sélectionnez le réseau privé et le sous-réseau sur lesquels le Load Balancer sera déployé. L'interface vous avertit si le réseau ou le sous-réseau sélectionné ne respecte pas les prérequis (voir « [Concepts - Load Balancer](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer#network-prerequisites) »).
>>
>> **Étape 6 (facultatif) : Listener et membres**
>>
>> - **Listener** : Choisissez le protocole et le port pour le trafic entrant. Un listener `Prometheus` est également disponible pour le monitoring du Load Balancer — il n'est pas possible d'y ajouter des membres. Consultez [cette page](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus) pour plus de détails.
>> - **Health Monitor** : Sélectionnez le type compatible avec le protocole de votre listener. L'interface filtre les types pour n'afficher que les éléments compatibles. Consultez [cette page](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) pour les détails de compatibilité.
>> - **Membres** : Sélectionnez les IPs et ports des instances de votre région à ajouter au pool.
>>
>> > [!primary]
>> > Dans ce processus simplifié, le protocole du pool doit correspondre à celui du listener, les membres ne peuvent être sélectionnés qu'à partir des instances existantes, et l'algorithme de load balancing est `ROUND_ROBIN` par défaut. Ignorez cette étape et configurez le pool et les membres après la création pour contourner ces limitations.
>> >
>>
>> Cliquez sur `Créer un Load Balancer`{.action} pour confirmer.
>>
>> Vous serez redirigé vers la liste des Load Balancers. Les colonnes `Operating status` et `Provisioning status` indiquent l'état de votre load balancer. Pour plus de détails, consultez la page « [Concepts du Load Balancer](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer#operating-provisioning-status) ».
>>
> Via la CLI OpenStack
>> Une autre façon de créer un Load Balancer est d'utiliser l'interface de ligne de commande d'OpenStack. Avant de commencer, consultez les guides suivants :
>>
>> - [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>> - [Charger les variables d’environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).
>>
>> **Configurer votre réseau privé**
>>
>> Avant de commencer à utiliser un Load Balancer, il vous faut créer un réseau privé :
>>
>> ```bash
>> openstack network create my_network
>>
>> openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp
>>
>> openstack router create my_router
>>
>> openstack router add subnet my_router my_subnet
>>
>> openstack router set --external-gateway Ext-Net my_router
>> ```
>>
>> Vous pouvez maintenant attacher vos instances à ce nouveau réseau. Nous vous recommandons de suivre la documentation pour [attacher vos instances au vRack](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#instance-integration).
>>
>> Prenez note des adresses de vos instances dans votre réseau avec la commande suivante :
>>
>> ```bash
>> openstack server list
>> ```
>>
>> Vous devez maintenant configurer vos instances pour qu'elles aient leurs adresses IP configurées sur leur interfaces.
>>
>> **Créer votre Load Balancer**
>>
>> Vous pouvez consulter la liste des différents types de Load Balancer que nous offrons avec cette commande :
>>
>> ```bash
>> openstack loadbalancer flavor list
>> ```
>>
>> Vous pouvez maintenant créer votre Load Balancer avec la commande suivante. Dans cet exemple, nous allons faire un Load Balancer de type « Small ».
>>
>> ```bash
>> openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
>> ```
>>
>> Votre Load Balancer sera configuré avec une adresse IP dans le réseau privé. Si vous souhaitez avoir un accès depuis Internet, il vous faudra attacher une adresse Floating IP.
>>
>> **Attacher une adresse Floating IP à un Load Balancer**
>>
>> Voici comment attacher une adresse Floating IP à un Load Balancer.
>>
>> ```bash
>> openstack floating ip create Ext-Net
>> openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
>> ```
>>
>> > [!primary]
>> >
>> > Pour récupérer l'identifiant du port VIP de votre Load Balancer, utilisez `openstack loadbalancer show my_load_balancer`.
>> >
>>
>> **Configurer votre Load Balancer**
>>
>> Dans cet exemple, nous ferons juste un Load Balancer HTTP. Pour ce faire, il faut tout d'abord créer un Listener qui permettra d'écouter sur le port 80 du Load Balancer, avec cette commande :
>>
>> ```bash
>> openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
>> ```
>>
>> Une fois le Listener créé, il faut lui ajouter les différentes instances qui pourront répondre aux requêtes des clients. Pour ce faire, vous devez créer un Pool d'instances :
>>
>> ```bash
>> openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
>> ```
>>
>> Ajoutez vos instances au Pool :
>>
>> ```bash
>> openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
>> openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
>> ```
>>
>> Vous pouvez maintenant accéder à votre Load Balancer via l'adresse Floating IP ou l'adresse IP privée depuis une instance dans votre réseau privé.
>>
> Via l'API OVHcloud
>> Utilisez l'[API OVHcloud](/pages/manage_and_operate/api/first-steps) pour créer un Load Balancer de façon programmatique.
>>
>> **Lister les flavors disponibles**
>>
>> ```bash
>> GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/flavor
>> ```
>>
>> **Créer le Load Balancer**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer
>> ```
>>
>> ```json
>> {
>>   "flavorId": "<flavor_id>",
>>   "name": "my-load-balancer",
>>   "network": {
>>     "private": {
>>       "network": {
>>         "id": "<network_id>",
>>         "subnetId": "<subnet_id>"
>>       }
>>     }
>>   }
>> }
>> ```
>>
>> **Attacher une adresse Floating IP (trafic public)**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadbalancerId}/floatingIp
>> ```
>>
>> **Créer un listener**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener
>> ```
>>
>> ```json
>> {
>>   "loadbalancerId": "<loadbalancer_id>",
>>   "name": "my-listener",
>>   "port": 80,
>>   "protocol": "http"
>> }
>> ```
>>
>> **Créer un pool**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool
>> ```
>>
>> ```json
>> {
>>   "algorithm": "roundRobin",
>>   "listenerId": "<listener_id>",
>>   "loadbalancerId": "<loadbalancer_id>",
>>   "name": "my-pool",
>>   "protocol": "http"
>> }
>> ```
>>
>> **Ajouter des membres au pool**
>>
>> ```bash
>> POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member
>> ```
>>
>> ```json
>> {
>>   "members": [
>>     { "address": "<ip_privée_1>", "name": "member-1", "protocolPort": 80 },
>>     { "address": "<ip_privée_2>", "name": "member-2", "protocolPort": 80 }
>>   ]
>> }
>> ```
>>
> Via le CLI OVHcloud
>> Utilisez le [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli) pour gérer votre Load Balancer. Définissez votre projet cloud avec `--cloud-project <project_id>` ou configurez-le dans votre profil.
>>
>> **Créer le Load Balancer**
>>
>> ```bash
>> ovhcloud cloud loadbalancer create <region> \
>>   --name my-load-balancer \
>>   --size small \
>>   --network-id <network_id> \
>>   --subnet-id <subnet_id>
>> ```
>>
>> **Attacher une adresse Floating IP (trafic public)**
>>
>> ```bash
>> ovhcloud cloud loadbalancer create-floating-ip <loadbalancer_id>
>> ```
>>
>> **Créer un listener**
>>
>> ```bash
>> ovhcloud cloud loadbalancer listener create <region> \
>>   --loadbalancer-id <loadbalancer_id> \
>>   --name my-listener \
>>   --port 80 \
>>   --protocol http
>> ```
>>
>> **Créer un pool**
>>
>> ```bash
>> ovhcloud cloud loadbalancer pool create <region> \
>>   --loadbalancer-id <loadbalancer_id> \
>>   --listener-id <listener_id> \
>>   --name my-pool \
>>   --algorithm roundRobin \
>>   --protocol http
>> ```
>>
>> **Ajouter des membres au pool**
>>
>> ```bash
>> ovhcloud cloud loadbalancer pool member create <pool_id> \
>>   --address <ip_privée_1> --name member-1 --protocol-port 80
>> ovhcloud cloud loadbalancer pool member create <pool_id> \
>>   --address <ip_privée_2> --name member-2 --protocol-port 80
>> ```
>>
> Via Terraform
>> Utilisez le [provider Terraform OVH](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_loadbalancer) pour créer un Load Balancer avec la ressource `ovh_cloud_project_loadbalancer`.
>>
>> **Lister les flavors disponibles**
>>
>> ```hcl
>> data "ovh_cloud_project_loadbalancer_flavors" "flavors" {
>>   service_name = var.service_name
>>   region_name  = var.region
>> }
>> ```
>>
>> **Créer le Load Balancer**
>>
>> ```hcl
>> resource "ovh_cloud_project_loadbalancer" "lb" {
>>   service_name = var.service_name
>>   region_name  = var.region
>>   flavor_id    = data.ovh_cloud_project_loadbalancer_flavors.flavors.flavors[0].id
>>   name         = "my-load-balancer"
>>   network = {
>>     private = {
>>       network = {
>>         id        = var.network_id
>>         subnet_id = var.subnet_id
>>       }
>>     }
>>   }
>> }
>> ```
>>

## Aller plus loin

[Documentation officielle d'Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre [communauté d'utilisateurs](/links/community).