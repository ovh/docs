---
title: 'Configuration du vRack Public Cloud'
excerpt: 'Découvrez comment configurer un vRack Public Cloud'
updated: 2024-12-23
---

## Objectif

Le [vRack](/links/network/vrack) est un réseau privé qui vous permet de configurer l’adressage entre plusieurs serveurs dédiés OVHcloud. Mais il vous permet également d’ajouter des [instances Public Cloud](/links/public-cloud/compute) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide a pour objectif de vous accompagner dans la configuration de vos instances Public Cloud au sein de votre vRack.**

## Prérequis

- Posséder un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir [créé un utilisateur OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (facultatif)
- Connaissances réseaux élémentaires

## Présentation des interfaces

Que ce soit pour créer votre vRack ou ajouter une instance au sein de ce réseau, vous pouvez être amenés à utiliser l'espace client OVHcloud, les APIv6 OVHcloud, les API OpenStack, l'interface Horizon ou Terraform.

Selon votre profil technique et vos besoins, vous serez amenés à devoir choisir quelle interface ou méthode utiliser. Ainsi, pour chaque action, nous vous proposerons les différentes démarches envisageables.

**Voici un descriptif rapide des actions possibles suivant la méthode/interface choisie :**

### Espace client OVHcloud

[L'espace client OVHcloud](/links/manager) est une interface entièrement et uniquement visuelle, ce qui en fait une interface idéale à la gestion de plusieurs VLAN. Vous aurez également la possibilité de personnaliser la plage d'IP privée qui, par défaut, est 10.x.x.x/16.

Les VLAN seront déployés dans la Région sélectionnée. Vous aurez également la possibilité d'activer ou non les passerelles, d'activer les distributions DHCP, etc.

Vous pourrez également gérer la facturation de vos services au travers de votre espace client OVHcloud.

### Interface Horizon

Interface visuelle indépendante d'OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} est l'implémentation d’origine du tableau de bord d'OpenStack, qui fournit une interface utilisateur web aux services OpenStack, notamment Nova, Swift, Keystone, etc.

Cette interface complète et technique vous permet de gérer la quasi totalité des actions OpenStack. Ce sera une des interfaces nécessaires si vous souhaitez gérer plus de deux VLAN, ajouter des interfaces réseau privées à vos instances, gérer des images personnalisées, etc.

Consultez le guide [Accéder à l'interface Horizon](/pages/public_cloud/compute/introducing_horizon) pour vous familiariser à Horizon.

> [!primary]
> Horizon fonctionnant par zone, pensez bien à choisir votre zone géographique de travail tout en haut à gauche de votre interface (GRA5, SBG3, BHS1, etc.)
>

### APIv6 OVHcloud

Chaque action que vous effectuez dans l'espace client OVHcloud fait appel aux [APIv6 OVHcloud](https://eu.api.ovh.com/). 
Vous pouvez même aller plus loin dans les API que dans votre espace client.

L'interface est moins visuelle que l'espace client OVHcloud mais vous permettra d'effectuer un grand nombre d'actions. Vous pourrez par ce biais gérer et personnaliser vos VLAN, ajouter des interfaces à vos instances ou encore créer des serveurs hautement personnalisés.

Il vous sera parfois nécessaire de récupérer plusieurs informations avant l'utilisation d'une API spécifique.

Vous pouvez simplement accéder aux API depuis [notre page web](https://eu.api.ovh.com/), mais aussi créer vos scripts PHP ou Python pour y faire appel.

Ainsi, il vous sera possible de librement automatiser les tâches de base au moyen de scripts, optimiser vos propres fonctions, etc.

Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

### API OpenStack

Il est possible d’administrer les services Public Cloud à l’aide de lignes de commandes Linux ou Windows, après le téléchargement et l’installation des outils OpenStack.

Cette méthode demande de bonnes connaissances Linux ou Windows pour en profiter, mais elle permet de profiter de toute la puissance d'OpenStack par ce biais.

Suivant la couche que vous souhaitez gérer, vous devrez utilisez le client Nova (Compute), Neutron (réseau), Glance (Image) ou encore Swift (Object Storage). Le dernier né de la famille, le client OpenStack, vous permet de gérer directement la quasi intégralité des couches OpenStack.

Grâce à l’API OpenStack, vous pouvez aussi facilement automatiser cette gestion au travers de vos scripts.

Afin de vous familariser avec l'API OpenStack, consultez tout d'abord les guides suivants :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

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
> Vous pouvez consulter à tout moment la [documentation officielle d'OpenStack](https://docs.openstack.org/fr/){.external} si vous souhaitez aller plus loin dans leur utilisation.
>

Pour plus d'informations, consultez ce guide : [Configuration du vRack Public Cloud l'aide de l'OpenStack CLI](/pages/public_cloud/public_cloud_network_services/getting-started-09-creating-vrack-with-openstack).

### Terraform

Terraform permet aussi de gérer les infrastructures d’OVHcloud.

Pour cela, vous devez choisir le bon fournisseur et la bonne ressource Terraform. Retrouvez plus d’informations dans notre [guide d’utilisation de Terraform](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## En pratique

### Étape 1 : Activer et gérer un vRack <a name="activation"></a>

#### Depuis l'espace client OVHcloud

> [!primary]
> Ceci ne s'applique pas aux projets nouvellement créés qui sont désormais automatiquement livrés avec un vRack. Pour visualiser le vRack une fois le projet créé, rendez-vous dans le menu `Bare Metal Cloud`{.action} et cliquez sur `Network`{.action} dans l’onglet de gauche. Cliquez sur `Réseau Privé vRack`{.action} pour voir le(s) vRack(s).
>

Si vous avez un projet plus ancien et que vous n'avez pas de vRack, vous devez en commander un. Ce produit est gratuit et la mise à disposition ne prend que quelques minutes.

Allez dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur l'option `vRack`{.action}.

![Commander le vrack](images/ordering_vrack_2024.png){.thumbnail}

Vous serez redirigé vers une autre page pour valider la commande, l'opération prendra quelques minutes.

Une fois le service actif, vous le retrouverez dans votre espace client dans la section `Bare Metal Cloud`{.action} > `Network`{.action} > `Réseau Privé vRack`{.action}. Sous l’appellation « pn-xxxxxx ».

Dans la liste des services éligibles, sélectionnez le projet que vous souhaitez ajouter au vRack et cliquez sur le bouton `Ajouter`{.action}.

![ajouter le projet](images/addprojectvrack.png){.thumbnail}

Pour continuer la configuration du vRack depuis l'espace client OVHcloud, poursuivez la lecture de ce guide à partir de [Créer un VLAN dans le vRack depuis l'espace client OVHcloud](./#creer-un-reseau-prive-depuis-lespace-client-ovhcloud).

#### Depuis les APIv6 OVHcloud

Pour activer et gérer un vRack depuis les APIv6 OVHcloud, cliquez [ici](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#etape-1-activer-et-gerer-un-vrack) pour consulter le guide spécifique à cette méthode.

### Étape 2 : Créer un réseau privé dans le vRack

Il est nécessaire de créer un réseau privé avec un réseau local virtuel (VLAN) afin que les instances reliées au vRack puissent communiquer entre elles.

Sur l'offre Public Cloud, vous pouvez créer jusqu'à 4 000 VLAN au sein d’un seul vRack. Cela signifie donc que vous pouvez utiliser chaque adresse IP privée jusqu’à 4 000 fois.
Ainsi, par exemple, l'IP 192.168.0.10 du VLAN 2 est différente de l'IP 192.168.0.10 du VLAN 42.

Cela peut vous être utile afin de segmenter votre vRack entre plusieurs réseaux virtuels.

Depuis l'espace client OVHcloud, vous pouvez attribuer le VLAN de votre choix et personnaliser la plage d'IP privées.

> [!primary]
> Sur les serveurs dédiés, par défaut, vous êtes sur le VLAN 0. Le fonctionnement de l’infrastructure OpenStack fait que vous devrez spécifier le numéro de votre VLAN directement au niveau de l'infrastructure.
>
> Contrairement aux serveurs dédiés, il n’est pas nécessaire de « tagguer » le VLAN directement sur une instance Public Cloud. 
>
> Pour plus d'informations sur la gestion des VLAN du vRack des serveurs dédiés, vous pouvez consulter ce guide : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> Le vRack étant une infrastructure gérée au niveau d'OVHcloud, vous ne pourrez l'administrer qu'au travers de l'espace client OVHcloud et des APIv6 OVHcloud.
>
> OpenStack n'étant pas située au même niveau de l'infrastructure, vous ne pourrez pas personnaliser les VLAN au travers de l'interface Horizon ou des API OpenStack.
>

#### Créer un réseau privé depuis l'espace client OVHcloud

Une fois votre vRack créé, l’étape suivante consiste à créer un réseau privé.

Dans l'onglet Public cloud , cliquez sur `Private Network`{.action} dans le menu de gauche sous **Network**.

![VLAN creation](images/vrack2022-03.png){.thumbnail}

Cliquez à présent sur `Créer un réseau privé`{.action}. La page suivante vous permettra de personnaliser plusieurs paramètres.

À l'étape 1, sélectionnez la région dans laquelle vous souhaitez créer le réseau privé.

![select region](images/vrack5-2024.png){.thumbnail}

À l'étape suivante, un certain nombre d'options vous sont présentées :

![create network](images/vrack6-2022.png){.thumbnail}

Dans le champ **Nom du réseau privé**, définissez un nom pour votre réseau privé.

**Créez une Gateway et connectez-vous au réseau privé**

Sélectionnez cette option si vous avez l'intention de créer des instances avec un réseau privé uniquement. Pour plus d’informations, nous vous invitons à consulter les guides suivants : [Créer un réseau privé avec une Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) et [Créer une première instance Public Cloud et s’y connecter](/pages/public_cloud/compute/public-cloud-first-steps).

> [!warning]
> Si l'option est grisée, cela signifie qu'elle est incompatible avec la région sélectionnée. Pour plus d’informations, veuillez vous référer à notre page sur la [disponibilité des produits Public Cloud pour chaque région](/links/public-cloud/regions-pci).
>

**Options réseau du layer 2**

Si vous cochez la case `Définir un VLAN`, vous devrez choisir un numéro de VLAN allant de 0 à 4000.

Si vous ne cochez pas cette case, le système attribuera un numéro de VLAN aléatoire.

Dans le cas où vous devez faire communiquer des serveurs dédiés OVHcloud avec du VLAN taggué, consultez le guide suivant : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

**Options de distribution des adresses DHCP**

La plage DHCP par défaut est en 10.0.0.0/16. Vous pouvez utiliser une autre plage privée de votre choix.

Une fois vos choix faits, cliquez sur `Créer`{.action} pour lancer le processus.

> [!primary]
> La création du réseau privé peut prendre plusieurs minutes.
>

#### Créer un réseau privé depuis les APIv6 OVHcloud <a name="vlansetup"></a>

Pour créer un réseau privé depuis les APIv6 OVHcloud, cliquez [ici](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#etape-3-creer-un-vlan-dans-le-vrack) pour consulter le guide spécifique à cette méthode.

#### Créer un réseau privé via Terraform

Dans Terraform, il faut utiliser le provider openstack. Vous pouvez télécharger un exemple de script terraform complet dans [ce dépôt](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).

La partie spécifique à OVHcloud pour l'intégration vRack est le paramètre `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type"    = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name       = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr       = "10.0.0.0/16"
  enable_dhcp       = true
}
```

### Étape 3 : Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L'instance existe déjà et vous devez l'ajouter au vRack.

**Cas d'une nouvelle instance**

#### Depuis l'espace client OVHcloud

Consultez le guide [Créer une instance depuis l’espace client](/pages/public_cloud/compute/public-cloud-first-steps). Lors de la création d'une instance, vous pouvez choisir, à l'étape 5, un mode réseau, puis un réseau privé dans lequel intégrer votre instance.

![attach new instance](images/network-selection.png){.thumbnail}

> [!warning]
> Lors de la création d'une nouvelle instance, vous ne pourrez raccorder votre instance qu'à un seul vRack depuis l'espace client OVHcloud.
> Pour ajouter plusieurs interfaces différentes, vous devrez passer par les API OpenStack ou Horizon.
>

#### Depuis les APIv6 OVHcloud

Cliquez [ici](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#etape-4-integrer-une-instance-dans-le-vrack) pour consulter le guide spécifique à cette méthode.

**Cas d'une instance déjà existante**

L'espace client OVHcloud permet d'attacher une instance à un ou plusieurs réseaux privés mais n'offre pas de configuration avancée des interfaces réseaux. Si vous souhaitez personnaliser davantage celles-ci, il vous faudra les gérer soit depuis les APIv6 OVHcloud, soit via les API OpenStack ou via Horizon.

L'action consistera alors à simplement ajouter une nouvelle interface réseau à votre serveur, en plus de celle existante.

Ainsi, par exemple, si vous avez une interface publique *eth0*, vous aurez en plus une interface *eth1*.

> [!warning]
> La configuration de cette nouvelle interface est rarement automatique.
> Il vous faudra donc la configurer en DHCP ou IP Fixe selon votre infrastructure.
>

#### Depuis l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez ensuite le projet Public Cloud concerné en haut à gauche.

Cliquez alors sur `Instances`{.action} dans le menu latéral de gauche. Cliquez ensuite sur le bouton `...`{.action} à droite de l'instance concernée puis sur `Détail de l'instance`{.action}.

![detail instance](images/vrack2021.png){.thumbnail}

Le tableau de bord de votre instance vous est alors présenté. Cliquez sur le bouton `...`{.action} à droite de « Réseau(x) privé(s) » puis sur `Attacher un réseau`{.action}.

![attacher réseau](images/vrack2021-01.png){.thumbnail}

Dans la pop-up qui apparaît, sélectionnez le ou les réseaux privés à attacher à votre instance puis cliquez sur `Attacher`{.action}.

![attacher réseau](images/vrack9.png){.thumbnail}

#### Gestion des interfaces réseaux depuis les APIv6 OVHcloud

Cliquez [ici](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#cas-dune-instance-deja-existante) pour consulter le guide spécifique à cette méthode.

#### Gestion des interfaces réseaux depuis OpenStack Horizon

Connectez-vous à l'interface [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} en suivant la méthode indiquée dans la [première partie de ce guide](./#interface-horizon).

Connectez-vous bien sur votre zone de travail :

![connexion Horizon](images/horizon1.png){.thumbnail}

Dirigez-vous ensuite dans `Compute`, puis `Instances` :

![Horizon compute instances](images/horizon2.png){.thumbnail}

**Ajout d'une interface privée**

Pour ajouter une interface, dans la colonne « Actions », cliquez sur la flèche permettant d'accéder aux actions possible sur l'instance. Cliquez alors sur `Attach Interface`{.action} :

![Horizon attach interface](images/horizon3.png){.thumbnail}

Sélectionnez votre interface et validez :

![Horizon attach interface](images/horizon4.png){.thumbnail}

> [!primary]
> Votre instance OVHcloud disposera donc d'une nouvelle interface réseau en plus de l'interface publique (Ext-net).
><br>Vous pourrez voir, dans le résumé de l'instance, l'adresse IP privée attribuée automatiquement à votre interface.
><br>À votre charge de l'utiliser en configurant votre interface via le DHCP ou en utilisant vos propres IP au travers d'une configuration en IP statique.
>

**Suppression d'une interface privée**

> [!warning]
> La suppression d'une interface est définitive.
>
> Dans le cas où vous supprimeriez l'interface « Ext-Net » (IP publique), cette adresse serait relâchée et remise en circulation. Vous ne pourriez donc pas vous la réattribuer.
><br>Cette action n'est à effectuer que si vous souhaitez isoler votre serveur dans le vRack (interface « Ext-Net ») ou la sortir d'un VLAN.
>

Pour supprimer une interface, dans la colonne « Actions », cliquez sur la flèche permettant d'accéder aux actions possible sur l'instance. Cliquez alors sur `Detach Interface`{.action} :

![Horizon detach interface](images/horizon5.png){.thumbnail}

Sélectionnez l'interface à supprimer et validez :

![Horizon detach interface](images/horizon6.png){.thumbnail}

## Aller plus loin

[Configuration du vRack Public Cloud depuis les APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api)

[Serveurs Dédiés - Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).