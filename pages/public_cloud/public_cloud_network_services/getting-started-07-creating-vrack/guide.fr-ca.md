---
title: 'Configuration du vRack Public Cloud'
excerpt: 'Découvrez comment configurer un vRack Public Cloud'
updated: 2025-12-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Le [vRack](/links/network/vrack) est un réseau privé qui vous permet de configurer l’adressage entre plusieurs serveurs dédiés OVHcloud. Mais il vous permet également d’ajouter des [instances Public Cloud](/links/public-cloud/compute) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide a pour objectif de vous accompagner dans la configuration de vos instances Public Cloud au sein de votre vRack.**

## Prérequis

- Posséder un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir [créé un utilisateur OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (facultatif)
- Connaissances réseaux élémentaires

## Présentation des interfaces

Que ce soit pour créer votre vRack ou ajouter une instance au sein de ce réseau, vous pouvez être amenés à utiliser l'espace client OVHcloud, les APIv6 OVHcloud, les API OpenStack, l'interface Horizon ou Terraform.

Selon votre profil technique et vos besoins, vous serez amenés à devoir choisir quelle interface ou méthode utiliser. Ainsi, pour chaque action, nous vous proposerons les différentes démarches envisageables.

**Voici un descriptif rapide des actions possibles suivant la méthode/interface choisie :** <a name="horizon"></a>

/// details | Espace client OVHcloud

[L'espace client OVHcloud](/links/manager) est une interface entièrement et uniquement visuelle, ce qui en fait une interface idéale à la gestion de plusieurs VLAN. Vous aurez également la possibilité de personnaliser la plage d'IP privée qui, par défaut, est 10.1.0.0/16.

Les VLAN seront déployés dans la Région sélectionnée. Vous aurez également la possibilité d'activer ou non les passerelles, d'activer les distributions DHCP, etc.

Vous pourrez également gérer la facturation de vos services au travers de votre espace client OVHcloud.

///

/// details | Interface Horizon

Interface visuelle indépendante d'OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/) est l'implémentation d’origine du tableau de bord d'OpenStack, qui fournit une interface utilisateur web aux services OpenStack, notamment Nova, Swift, Keystone, etc.

Cette interface complète et technique vous permet de gérer la quasi totalité des actions OpenStack. Ce sera une des interfaces nécessaires si vous souhaitez gérer plus de deux VLAN, ajouter des interfaces réseau privées à vos instances, gérer des images personnalisées, etc.

Consultez le guide « [Présentation de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) » pour vous familiariser à Horizon.

> [!primary]
> Horizon fonctionnant par zone, pensez bien à choisir votre zone géographique de travail tout en haut à gauche de votre interface (GRA5, SBG3, BHS1, etc.)
>

///

/// details | APIv6 OVHcloud

Chaque action que vous effectuez dans l'espace client OVHcloud fait appel aux [APIv6 OVHcloud](/links/api). 
Vous pouvez même aller plus loin dans les API que dans votre espace client.

L'interface est moins visuelle que l'espace client OVHcloud mais vous permettra d'effectuer un grand nombre d'actions. Vous pourrez par ce biais gérer et personnaliser vos VLAN, ajouter des interfaces à vos instances ou encore créer des serveurs hautement personnalisés.

Il vous sera parfois nécessaire de récupérer plusieurs informations avant l'utilisation d'une API spécifique.

Vous pouvez simplement accéder aux API depuis [notre page web](/links/api), mais aussi créer vos scripts PHP ou Python pour y faire appel.

Ainsi, il vous sera possible de librement automatiser les tâches de base au moyen de scripts, optimiser vos propres fonctions, etc.

Consultez le guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) » pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

///

/// details | API OpenStack

Il est possible d’administrer les services Public Cloud à l’aide de lignes de commandes Linux ou Windows, après le téléchargement et l’installation des outils OpenStack.

Cette méthode demande de bonnes connaissances Linux ou Windows pour en profiter, mais elle permet de profiter de toute la puissance d'OpenStack par ce biais.

Suivant la couche que vous souhaitez gérer, vous devrez utiliser le client Nova (Compute), Neutron (réseau), Glance (image) ou encore Swift (Object Storage). Le dernier né de la famille, le client OpenStack, vous permet de gérer directement la quasi intégralité des couches OpenStack.

Grâce à l’API OpenStack, vous pouvez aussi facilement automatiser cette gestion au travers de vos scripts.

Afin de vous familiariser avec l'API OpenStack, consultez tout d'abord les guides suivants :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Vous pourrez alors, suivant votre besoin, utiliser les API dédiées à OpenStack :

- Nova (compute)
- Glance (image)
- Cinder (image)
- Neutron (réseau)

> [!primary]
> Dans certains cas, il sera plus simple d'utiliser les API OpenStack et dans d'autres, les API Nova, Neutron, etc.
>
> De même, certaines fonctionnalités peuvent être absentes de l'API OpenStack selon la version de votre client et de votre système d'exploitation.
> Dans le cadre de ce guide, le choix a été fait de vous proposer les alternatives les plus simples et les plus intuitives.
> Vous pouvez consulter à tout moment la [documentation officielle d'OpenStack](https://docs.openstack.org/fr/) si vous souhaitez aller plus loin dans leur utilisation.
>

///

/// details | CLI OpenStack

Vous pouvez gérer vos services Public Cloud et votre vRack OVHcloud directement depuis votre terminal Linux ou Windows grâce à la CLI OpenStack.

Cette interface permet de gérer toutes les couches OpenStack :

- Nova : instances (compute)
- Neutron : réseaux
- Glance : images
- Cinder : volumes

La CLI centralise ces fonctionnalités et peut être intégrée à vos scripts pour automatiser vos tâches.

Avant de commencer, consultez les guides suivants :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> La CLI OpenStack est pratique pour gérer votre vRack, cependant certaines fonctions peuvent différer selon la version du client ou du système d’exploitation. Consultez la [documentation officielle d'OpenStack](https://docs.openstack.org/fr/).
>

///

/// details | Terraform

Terraform permet aussi de gérer les infrastructures d’OVHcloud.

Pour cela, vous devez choisir le bon fournisseur et la bonne ressource Terraform. Retrouvez plus d’informations dans notre [guide d’utilisation de Terraform](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## En pratique

### Étape 1 : Activer et gérer un vRack <a name="activation"></a>

> [!warning]
>
> Le vRack est géré au niveau de l’infrastructure OVHcloud, ce qui signifie que vous ne pouvez l’administrer que depuis votre espace client et les APIv6 OVHcloud.
>

> [!tabs]
> Depuis l'espace client OVHcloud
>> > [!primary]
>> >
>> > Cette étape ne s'applique pas aux projets nouvellement créés, qui sont désormais automatiquement livrés avec un vRack. Pour visualiser le vRack une fois le projet créé, rendez-vous dans la section `Network`{.action} et cliquez sur `Réseau Privé vRack`{.action} pour voir le(s) vRack(s).
>> >
>>
>> Si vous avez un projet plus ancien et que vous n'avez pas de vRack, vous devez en commander un. Ce produit est gratuit et la mise à disposition ne prend que quelques minutes.
>>
>> Dans le menu situé à gauche de l'écran, cliquez sur le bouton `Ajouter un service`{.action} (icône de panier d'achat). Utilisez le filtre en haut de la page ou faites défiler vers le bas pour trouver le service `vRack`{.action}.
>>
>> ![Commander le vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Vous serez redirigé vers une autre page pour valider la commande, l'opération prendra quelques minutes.
>>
>> Une fois le service actif, vous le retrouverez dans votre espace client dans la section `Network`{.action} > `Réseau Privé vRack`{.action}, sous l’appellation « pn-xxxxxx ».
>>
>> Cliquez sur votre vRack, sélectionnez le projet que vous souhaitez y ajouter dans la liste des services éligibles puis cliquez sur le bouton `Ajouter`{.action}.
>>
>> ![ajouter le projet](images/addprojectvrack.png){.thumbnail}
>>
>> Pour continuer la configuration du vRack depuis l'espace client OVHcloud, poursuivez la lecture de ce guide à partir de l'[étape 2 : Créer un réseau privé dans le vRack](#create-pn-in-vrack), onglet **Depuis l'espace client OVHcloud**.
>>
> Depuis les APIv6 OVHcloud
>>
>> **Étape 1 : Activer et gérer un vRack**
>>
>> Connectez-vous aux APIv6 OVHcloud en suivant le guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».
>>
>> Une fois authentifié, suivez les étapes décrites ci-dessous :
>>
>> **Création du panier**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Cet appel va créer un identifiant pour votre « panier ». Vous pourrez y ajouter autant d'articles que vous voulez avant de le valider.
>> >
>> > Dans le cas présent, la commande d’un vRack est gratuite. Récupérez le numéro de votre panier (cartId), il sera indispensable pour la suite.
>> >
>>
>> **Récupération des informations nécessaires à la commande du vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Cet appel va vous permettre de récupérer l'ensemble des informations nécessaires à la commande du vRack. Copiez les éléments suivants :
>> >
>> > *cartId*, *duration*, *planCode*, et *pricingMode*.
>> >
>>
>> **Ajout du vRack dans le panier**
>> 
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Cet appel va vous permettre d'ajouter le vRack au panier en ajoutant l’ensemble des informations nécessaires à la commande.
>> >
>> > Dans le cas du vRack, cela donnerait par exemple :
>> >
>> > cartId : [identifiant de votre panier]
>> >
>> > duration : « P1M »
>> >
>> > planCode : « vrack »
>> >
>> > pricingMode : « default »
>> >
>> > quantity : 1
>> >
>>
>> Une fois que vous aurez validé la commande, vous obtiendrez un numéro d'article (« itemId »). Conservez cette information, elle vous sera utile si vous souhaitez apporter des modifications avant la validation du panier.
>>
>> **Validation du panier**
>>
>> Une fois l'ensemble des articles mis dans votre panier, vous devrez le valider :
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > Cet appel va valider le panier et vous créer un bon de commande (orderId). Conservez cette information, elle sera nécessaire à la validation de la commande.
>> >
>>
>> **Validation de la commande finale**
>>
>> Pour valider la commande, vous avez deux méthodes possibles :
>>
>> - Passer par l'URL visible lorsque le panier est validé.  
>> Exemple d'URL : https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Valider par l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Même s’il s’agit d’un bon de commande à 0 €, il est nécessaire de simuler un paiement du bon de commande (orderId). Votre bon de commande sera alors validé et son traitement commencera.
>> >
>>
>> Une fois le bon de commande gratuit validé, un délai de quelques minutes peut être nécessaire pour que le vRack soit actif.
>>
>> **Étape 2 : Ajouter votre projet Public Cloud dans le vRack**
>>
>> Une fois le vRack actif, il vous faudra intégrer votre ou vos projets Public Cloud dans le vRack.
>>
>> Connectez-vous aux APIv6 OVHcloud en suivant le guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».
>>
>> Dans le cas ou l’identifiant du projet Public Cloud n’est pas connu, les appels suivants vous permettront de le retrouver.
>>
>> **Identification du projet**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Cet appel permet de récupérer la liste des projets.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Cet appel permet d'identifier le projet grâce au champ « description ».
>> >
>>
>> **Ajout du projet dans le vRack**
>>
>> Une fois l’identifiant du projet et le nom du vRack connus, leur association se fait via l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Renseignez les champs de l'appel avec les informations relevées précédemment :
>>
>> - **serviceName** : nom du vRack sous la forme « pn-xxxxxx ».  
>> - **project** : identifiant du projet Public Cloud, sous la forme d’une chaîne de 32 caractères.
>>
>> > [!primary]
>> >
>> > Cet appel initialise l’association du projet au vRack, il faut ensuite récupérer l’identifiant de la tâche pour vérifier son avancement.
>> >
>>
>> **Vérification de l'avancement de la tâche d'ajout**
>>
>> Vous pouvez consulter l'évolution de l'ajout du projet dans le vRack grâce à cet appel :
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > Cet appel est facultatif et permet juste de vérifier le statut de la tâche. Une fois celle-ci terminée, vous pouvez passer à l’étape suivante.
>> >
>>
 
### Étape 2 : Créer un réseau privé dans le vRack <a name="create-pn-in-vrack"></a>

Il est nécessaire de créer un réseau privé avec un réseau local virtuel (VLAN) afin que les instances reliées au vRack puissent communiquer entre elles.

Sur l'offre Public Cloud, vous pouvez créer jusqu'à 4 000 VLAN au sein d’un seul vRack. Cela signifie donc que vous pouvez utiliser chaque adresse IP privée jusqu’à 4 000 fois.
Ainsi, par exemple, l'IP 192.168.0.10 du VLAN 2 est différente de l'IP 192.168.0.10 du VLAN 42.

Cela peut vous être utile afin de segmenter votre vRack entre plusieurs réseaux virtuels.

Depuis l'espace client OVHcloud et les APIv6 OVHcloud, vous pourrez personnaliser l'ensemble des paramètres : mode et région de déploiement, nom et ID du VLAN, plage d'adresses IP privées (10.0.0.0/16 par exemple), DHCP et Gateway.

> [!primary]
> Sur les serveurs dédiés, par défaut, vous êtes sur le VLAN 0. Le fonctionnement de l’infrastructure OpenStack fait que vous devrez spécifier le numéro de votre VLAN directement au niveau de l'infrastructure.
>
> Contrairement aux serveurs dédiés, il n’est pas nécessaire de « tagguer » le VLAN directement sur une instance Public Cloud.
>
> Pour plus d'informations sur la gestion des VLAN du vRack des serveurs dédiés, consultez ce guide : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> Le vRack étant une infrastructure gérée au niveau d'OVHcloud, vous ne pourrez l'administrer qu'au travers de l'espace client OVHcloud et des APIv6 OVHcloud.
>
> OpenStack n'étant pas situé au même niveau de l'infrastructure, vous ne pourrez pas personnaliser les VLAN au travers de l'interface Horizon ou des API OpenStack.
>

> [!tabs]
> Depuis l'espace client OVHcloud
>> Une fois votre vRack créé, l’étape suivante consiste à créer un réseau privé.
>>
>> Dans l'onglet `Public cloud`{.action}, cliquez sur `Private Network`{.action} dans le menu de gauche sous **Network**.
>>
>> ![VLAN creation](images/vrack2022-03.png){.thumbnail}
>>
>> Cliquez à présent sur `Créer un réseau privé`{.action}. La page suivante vous permettra de personnaliser plusieurs paramètres.
>>
>> Pour commencer, sélectionnez un mode de déploiement ainsi que la région dans laquelle vous souhaitez créer le réseau privé.
>>
>> ![select region](images/vrack5-2024.png){.thumbnail}
>>
>> À l'étape suivante, un certain nombre d'options vous sont présentées :
>>
>> ![create network](images/vrack6-2022.png){.thumbnail}
>>
>> Dans le champ **Nom du réseau privé**, définissez un nom pour votre réseau privé.
>>
>> **Option réseau du layer 2**
>>
>> Si vous cochez la case `Définir un ID de VLAN`{.action}, vous devrez choisir un numéro de VLAN allant de 0 à 4000.
>>
>> Si vous ne cochez pas cette case, le système attribuera un numéro de VLAN aléatoire.
>>
>> Dans le cas où vous devez faire communiquer des serveurs dédiés OVHcloud avec du VLAN taggué, consultez le guide suivant : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Options de distribution des adresses DHCP**
>>
>> La plage DHCP par défaut est en 10.1.0.0/16. Vous pouvez utiliser une autre plage privée de votre choix ou désactiver le DHCP pour ce réseau privé.
>>
>> **Options de passerelle réseau**
>>
>> - **Annoncer la première adresse d'un CIDR donné comme passerelle par défaut (DHCP option 3)** : Lorsque cette option est activée, le serveur DHCP annonce la première adresse du CIDR comme passerelle par défaut aux machines connectées au réseau.
>> - **Assigner une Gateway et connectez-vous au réseau privé** : Sélectionnez cette option si vous avez l'intention de créer des instances avec un réseau privé uniquement. Pour plus d’informations, nous vous invitons à consulter les guides suivants : [Créer un réseau privé avec une Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) et [Créer une première instance Public Cloud et s’y connecter](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Si la seconde option est grisée, cela signifie qu'elle est incompatible avec la région sélectionnée. Pour plus d’informations, veuillez vous référer à notre page sur la [disponibilité des produits Public Cloud pour chaque région](/links/public-cloud/regions-pci).
>> >
>>
>> Une fois vos choix faits, cliquez sur `Configurez votre réseau privé`{.action} pour lancer le processus.
>>
>> > [!primary]
>> >
>> > La création du réseau privé peut prendre plusieurs minutes.
>> >
>>
> Depuis les APIv6 OVHcloud <a name="vlansetup"></a>
>>
>> Une fois connecté à l'[APIv6 OVHcloud](/links/api), exécutez les commandes suivantes dans l'ordre.
>>
>> **Étape 1 - Récupération des informations nécessaires :**
>>
>> **Projet Public Cloud**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Cet appel permet de récupérer la liste des projets.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Cet appel permet d'identifier le projet grâce au champ « description ».
>> >
>>
>> **vRack concerné**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Dans le champ serviceName, indiquez l'identifiant de votre projet. Conservez l'information relative à l'identifiant du vRack sous la forme « pn-xxxxx ».
>> >
>>
>> **Étape 2 - Création du réseau privé :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Renseignez les champs avec les informations précédemment obtenues :
>> >
>> > - **serviceName** : ID du projet.
>> > - **name** : le nom que vous voulez donner au VLAN.
>> >
>> > Vous pouvez laisser le champ « Region » vide pour que celui ci soit activé pour toutes les régions.
>> >
>> > L’identifiant du VLAN (vlanId) est nécessaire si vous souhaitez créer un VLAN spécifique.
>> >
>>
>> La création prend quelques instants.
>>
>> Pour vérifier les informations de vos VLAN, vous pouvez utiliser l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Cet appel permet de récupérer le networkId. Celui ci se présentera sous la forme suivante : nom-vrack_vlanId.
>> >
>> > Par exemple, pour le VLAN 42 : pn-xxxxxx_42.
>> >
>>
>> **Étape 3 - Création du sous-réseau :**
>>
>> Par défaut, si vous ne n'ajoutez pas de sous réseau, la plage IP utilisée est la suivante :
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Si vous souhaitez gérer vous même les affectations IP, vous devrez créer un sous-réseau.
>>
>> Pour cela, une fois le VLAN créé, vous devrez créer le sous-réseau pour chaque zone concernée via l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Vous pouvez remplir les champs comme cela :
>>
>> |Champ|Description| 
>> |---|---| 
>> |serviceName|Identifiant de votre projet.|
>> |networkId|Identifiant de votre réseau récupéré lors des commandes précédentes. Par exemple : pn-xxxxxx_42 pour le VLAN 42.|
>> |dhcp|Case cochée pour activation / décochée pour désactivation du DHCP dans le VLAN.|
>> |end|Dernière adresse du sous réseau de la région. Par exemple : 192.168.1.50.|
>> |network|Bloc IP du sous réseau. Par exemple : 192.168.1.0/24.|
>> |region|Exemple : SBG3.|
>> |start|Première adresse du sous réseau pour cette région Par exemple : 192.168.1.15.|
>>
>> > [!primary]
>> >
>> > C’est l’étape de création du sous-réseau par région. Vous pouvez activer ou non l’attribution d’adresses IP privées de manière dynamique via DHCP.
>> >
>> > Vous devrez effectuer la même opération pour chaque zone où vos instances sont présentes.
>> >
>>
>> > [!warning]
>> >
>> > Faites attention à bien séparer vos pools d’adresses IP pour les différentes régions. Par exemple :
>> >
>> > - De 192.168.0.2 à 192.168.0.254 pour SBG1.
>> > - De 192.168.1.2 à 192.168.1.254 pour GRA1.
>> >
>>
> Depuis Terraform
>>
>> Dans Terraform, il faut utiliser le provider OpenStack. Vous pouvez télécharger un exemple de script terraform complet dans [ce dépôt GitHub](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).
>>
>> La partie spécifique à OVHcloud pour l'intégration vRack est le paramètre `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> Depuis la CLI OpenStack
>> Dans l'exemple suivant, nous spécifions le `VLAN_ID` auquel nous voulons que le réseau fasse partie via `--provider-network-type` et `--provider-segment`.
>>
>> Vous pouvez supprimer ces paramètres. Dans ce cas, un `VLAN_ID` disponible sera utilisé.
>>
>> ```bash 
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>> 

### Étape 3 : Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L'instance existe déjà et vous devez l'ajouter au vRack.

/// details | **Cas d'une nouvelle instance**

> [!tabs]
> Depuis l'espace client OVHcloud
>> Consultez le guide « [Créer une instance depuis l’espace client](/pages/public_cloud/compute/public-cloud-first-steps) ». Lors de la création d'une instance, vous pouvez choisir à l'étape 5, un mode réseau puis un réseau privé dans lequel intégrer votre instance.
>>
>> ![attach new instance](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Lors de la création d'une nouvelle instance, vous ne pourrez raccorder votre instance qu'à **un seul** vRack depuis l'espace client OVHcloud.
>> >
>> > Pour ajouter plusieurs interfaces différentes, vous devrez passer par les API OpenStack ou Horizon.
>> >
>>
> Depuis les APIv6 OVHcloud
>> Une fois connecté à l'[APIv6 OVHcloud](/links/api), exécutez les commandes suivantes dans l'ordre.
>>
>> **Étape 1 - Récupération des informations nécessaires**
>>
>> **Récupération de l'identifiant du projet :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Récupération du networkID du réseau public (EXT-NET)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Récupération du networkID du réseau privé (interface vRack créée précédemment)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > L'identifiant alors obtenu a la forme : « pn-xxxxx_yy » où yy est le numéro du VLAN.
>> >
>>
>> **Récupération de l'identifiant du type d'instance choisi (flavorId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > Vous pouvez limiter la liste en indiquant la zone de création de votre instance.
>> >
>>
>> **Récupération de l'identifiant de l'image choisie (imageId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > Vous pouvez limiter la liste en indiquant la zone de création de votre instance.
>> >
>>
>> **Récupération de l'identifiant de votre clé SSH OpenStack (sshKeyId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Si vous n'avez pas encore ajouté de clé SSH à votre espace client, vous pourrez le faire au travers de la fonction API suivante :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> **Étape 2 - Déploiement de l'instance**
>>
>> Une fois l'ensemble des éléments nécessaires au déploiement rassemblés, vous pouvez utiliser l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Vous devrez renseigner a minima les champs suivants :
>>
>> |Champ|Description| 
>> |---|---| 
>> |serviceName|Identifiant du projet Public Cloud concerné.|
>> |flavorId|Identifiant du type d'instance (par exemple : D2-2, B2-7, WIN-R2-15, etc.).|
>> |imageId|Identifiant du l'image de déploiement (par exemple : Debian 9, Centos 7, etc.).|
>> |name|Nom que vous donnez à votre instance.|
>> |networks|Dans la partie « networkId », indiquez l'identifiant du réseau public (ext-net) ou celui de votre VLAN (pn-xxxxxx_yy). Vous pouvez cliquer sur le bouton « + » pour ajouter d'autres réseaux.|
>> |region|Régions de déploiement de l'instance (par exemple : GRA5).|
>> |sshKeyId|Identifiant de votre clé SSH OpenStack.|
>>
>> Une fois l'appel effectué, si toutes les informations sont correctement renseignées, l'instance va se créer avec une ou plusieurs interfaces réseau.
>>
>> > [!warning]
>> >
>> > Selon les systèmes d'exploitation, vous devrez configurer manuellement vos interfaces réseau privées pour que la prise en compte se fasse.<br>
>> > OpenStack n'étant pas en mesure de prioriser l'interface publique de l'interface vRack, il peut arriver que cette dernière passe en tant que route par défaut.<br>
>> > La conséquence directe est que l'instance est injoignable depuis une IP publique.<br>
>> > Un ou plusieurs redémarrages de l'instance depuis l'espace client peut permettre de rétablir la situation.<br>
>> > L'autre solution consiste à vous connecter à l'instance en SSH au travers d'un autre de vos serveurs présents dans le même réseau privé. Vous pouvez aussi corriger la configuration réseau de l'instance au travers du mode Rescue.
>> >
>>
> Depuis la CLI OpenStack
>> **Récupération des informations nécessaires**
>>
>> Identification des réseaux publics et privés :
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN_0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN_0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Vous devrez noter les ID des réseaux vous intéressant :
>> >
>> > - Ext-Net pour avoir une IP publique.
>> > - Celui du ou des VLAN nécessaires à votre configuration.
>> >
>>
>> Pensez également à noter les informations suivantes, comme indiqué dans le [guide d'utilisation de l'API Nova](/pages/public_cloud/compute/starting_with_nova) :
>>
>> - ID ou nom de la clé SSH OpenStack.
>> - ID du type d'instance (flavor).
>> - ID de l'image souhaitée (Système d'exploitation, snapshot, etc.).
>>
>> **Déploiement de l'instance**
>>
>> Avec les éléments récupérés précédemment, il est possible de créer une instance en l'incluant directement dans le vRack :
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Par exemple :
>>
>> ```bash
>> nova boot --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>> 
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nom de la clé]                                      |
>> | metadata                             | {}                                                   |
>> | name                                 | [nom de votre instance]                              |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Par exemple :
>>
>> ```bash
>> openstack server create --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nom de la clé]                                      |
>> | metadata                             | {}                                                   |
>> | name                                 | [nom de votre instance]                              |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Vous avez la possibilité de définir l'adresse IP de l'instance de votre interface vRack au niveau d'OpenStack.
>>
>> Pour cela, vous pouvez ajouter un simple argument dans la fonction « --nic » :
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Par exemple :
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Vérification de l'instance**
>>
>> Après quelques instants, on peut vérifier la liste des instances existantes afin de retrouver le serveur créé :
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | ID                                   |       Name          | Status | Networks                                         |     Image Name      |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Nom de l'instance] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] | [Nom-de-l'instance] |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name                | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Nom-de-l'instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **Cas d'une instance déjà existante**

L'espace client OVHcloud permet d'attacher une instance à un ou plusieurs réseaux privés mais n'offre pas de configuration avancée des interfaces réseau. Si vous souhaitez personnaliser davantage celles-ci, il vous faudra les gérer soit depuis les APIv6 OVHcloud, soit via les API OpenStack ou via Horizon.

L'action consistera alors à simplement ajouter une nouvelle interface réseau à votre serveur, en plus de celle existante.

Ainsi, par exemple, si vous avez une interface publique *eth0*, vous aurez en plus une interface *eth1*.

> [!warning]
> La configuration de cette nouvelle interface est rarement automatique. Il vous faudra donc la configurer en DHCP ou en IP fixe selon votre infrastructure.
>

> [!tabs]
> Depuis l'espace client OVHcloud
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné en haut à gauche.
>>
>> Cliquez alors sur `Instances`{.action} dans le menu latéral de gauche. Cliquez ensuite sur le bouton `⁝`{.action} à droite de l'instance concernée puis sur `Détail de l'instance`{.action}.
>>
>> ![detail instance](images/instance_details.png){.thumbnail}
>>
>> Le tableau de bord de votre instance vous est alors présenté. Cliquez sur le bouton `⁝`{.action} à droite de « Réseaux privés » puis sur `Attacher un réseau`{.action}.
>>
>> ![attacher réseau](images/vrack2021-01.png){.thumbnail}
>>
>> Dans la pop-up qui apparaît, sélectionnez le ou les réseaux privés à attacher à votre instance puis cliquez sur `Confirmer`{.action}.
>>
>> ![attacher réseau](images/vrack9.png){.thumbnail}
>>
> Depuis les APIv6 OVHcloud
>> L'action consistera simplement à ajouter une nouvelle interface réseau à votre serveur, en plus de celle existante.
>>
>> Ainsi, par exemple, si le serveur dispose d’une interface publique eth0, une interface supplémentaire eth1 sera ajoutée.
>>
>> > [!primary]
>> >
>> > La configuration de cette nouvelle interface est rarement automatique.<br>
>> > Il vous faudra donc la configurer en DHCP ou en IP fixe selon votre infrastructure.
>> >
>>
>> **Les étapes ci-dessous décrivent comment effectuer la gestion des interfaces réseau de vos instances.**
>>
>> **Étape 1 - Récupération des informations nécessaires**
>>
>> **Récupération de l'identifiant du projet :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Récupération de l'identifiant de l'instance :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Récupération du networkID du réseau public (EXT-NET) :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Récupération du networkID du réseau privé (interface vRack créée précédemment) :**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > L'identifiant alors obtenu a la forme : « pn-xxxxx_yy » où yy est le numéro du VLAN.
>> >
>>
>> **Étape 2 - Ajout d'une interface à votre instance**
>>
>> Une fois l'ensemble des informations nécessaires récupérées, vous pouvez utiliser l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Vous devrez renseigner a minima les champs suivants :
>>
>> |Champ|Description| 
>> |---|---| 
>> |serviceName|Identifiant du projet Public Cloud concerné.|
>> |instanceId|Identifiant de l'instance concernée.|
>> |networkId|Indiquez l'identifiant du réseau public (ext-net) ou celui de votre VLAN (pn-xxxxxx_yy).|
>> |ip|Définir une IP spécifique (fonctionne uniquement pour les interfaces privées).|
>>
>> Une fois l'appel effectué, si toutes les informations sont correctement renseignées, une nouvelle interface va s'ajouter sur votre instance.
>>
>> > [!primary]
>> >
>> > Votre instance OVHcloud disposera donc d'une nouvelle interface réseau en plus de l'interface publique (Ext-net).<br>
>> > Vous pourrez voir, dans le résumé de l'instance, l'adresse IP privée attribuée automatiquement à votre interface.<br>
>> > À votre charge de l'utiliser en configurant votre interface via le DHCP ou en utilisant vos propres adresses IP au travers d'une configuration en IP statique.
>> >
>>
>> **Étape 3 - Détacher une interface de votre instance**
>>
>> > [!warning]
>> >
>> > Détacher une interface réseau entraîne sa suppression immédiate.
>> >
>> > Cependant, il est important de noter que si vous détachez l'interface « Ext-Net » (IP publique), cette adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.<br>
>> > Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (réseau privé) ou, à l’inverse, le retirer d’un ou de plusieurs VLAN.
>> >
>>
>> Une fois l'ensemble des informations nécessaires récupérées, vous pouvez utiliser l'appel suivant pour supprimer une interface :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Vous devrez renseigner a minima les champs suivants :
>>
>> |Champ|Description| 
>> |---|---| 
>> |serviceName|Identifiant du projet Public Cloud concerné.|
>> |instanceId|Identifiant de l'instance concernée.|
>> |networkId|Indiquez l'identifiant du réseau public (ext-net) ou celui de votre VLAN (pn-xxxxxx_yy).|
>>
> Depuis OpenStack Horizon
>> Connectez-vous à l'interface [Horizon](https://horizon.cloud.ovh.net/auth/login/) en suivant la méthode indiquée dans la [première partie de ce guide](#horizon).
>>
>> Connectez-vous sur votre zone de travail :
>>
>> ![connexion Horizon](images/horizon1.png){.thumbnail}
>>
>> Dirigez-vous ensuite dans `Compute`, puis `Instances` :
>>
>> ![Horizon compute instances](images/horizon2.png){.thumbnail}
>>
>> **Ajout d'une interface réseau privée**
>>
>> Pour ajouter une interface, dans la colonne `Actions`, cliquez sur la flèche permettant d'accéder aux actions possible sur l'instance. Cliquez alors sur `Attach Interface`{.action} :
>>
>> ![Horizon attach interface](images/horizon3.png){.thumbnail}
>>
>> Sélectionnez votre interface et validez :
>>
>> ![Horizon attach interface](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Votre instance OVHcloud disposera donc d'une nouvelle interface réseau en plus de l'interface publique (Ext-net).<br>
>> > Vous pourrez voir, dans le résumé de l'instance, l'adresse IP privée attribuée automatiquement à votre interface.<br>
>> > À votre charge de l'utiliser en configurant votre interface via le DHCP ou en utilisant vos propres adresses IP au travers d'une configuration en IP statique.
>> >
>>
>> **Détacher une interface réseau**
>>
>> > [!warning]
>> >
>> > Détacher une interface réseau entraîne sa suppression immédiate.
>> >
>> > Cependant, il est important de noter que si vous détachez l'interface « Ext-Net » (IP publique), cette adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.<br>
>> > Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (réseau privé) ou, à l’inverse, le retirer d’un ou de plusieurs VLAN.
>> >
>>
>> Pour détacher une interface réseau privée, dans la colonne `Actions`, cliquez sur la flèche permettant d'accéder aux actions possible sur l'instance. Cliquez alors sur `Detach Interface`{.action} :
>>
>> ![Horizon detach interface](images/horizon5.png){.thumbnail}
>>
>> Sélectionnez l'interface à supprimer et validez :
>>
>> ![Horizon detach interface](images/horizon6.png){.thumbnail}
>>
> Depuis la CLI OpenStack
>> **Récupération des informations nécessaires**
>>
>> Identification de vos instances :
>>
>> ```bash
>> openstack server list
>>
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name         | Status | Networks                                                               | Image Name |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mon-Instance | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MonVrack=192.168.0.124 | Debian 9   |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mon-Instance | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MonVrack=192.168.0.124 |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Identification des réseaux publics et privés :
>>
>> ```bash
>> openstack network list
>>  
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN-0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MonVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MonVLAN-0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Vous devrez noter les ID des réseaux vous intéressant :
>> >
>> > - Ext-Net pour avoir une IP publique.
>> > - Celui du ou des VLAN nécessaires à votre configuration.
>> >
>>
>> **Ajout d'une interface réseau privée**
>>
>> Afin d'attacher une nouvelle interface, vous pouvez effectuer la commande suivante :
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Par exemple :
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Vous pouvez vérifier que l'action à bien été prise en compte :
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => votre IP publique
>> | MonVLAN-42 network                   | 192.168.0.x                                              | => votre IP privée
>> [...]
>> ```
>>
>> ou
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MonVLAN-42=192.168.0.x  | => votre IP publique ; votre IP privée
>> [...]
>> ```
>>

### Détacher une interface réseau

> [!warning]
> Détacher une interface réseau entraîne sa suppression immédiate.
>
> Cependant, il est important de noter que si vous détachez l'interface « Ext-Net » (IP publique), cette adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.<br>
> Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (réseau privé) ou, à l’inverse, le retirer d’un ou de plusieurs VLAN.
>

Pour détacher une interface réseau, vous aurez besoin dans un premier temps d'identifier le port Neutron qui aura été créé.

Pour cela, vous pouvez utiliser les commandes suivantes :

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

ou

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Une fois le port à supprimer identifié, vous pouvez effectuer la commande suivante :

```bash
nova interface-detach <ID_instance> <port_id>
```

Par exemple :

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Aller plus loin

[Serveurs Dédiés - Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).