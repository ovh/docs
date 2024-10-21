---
title: 'Configurer le vRack entre Public Cloud et un serveur dédié'
excerpt: 'Découvrez comment configurer un réseau privé entre une instance Public Cloud et un serveur dédié.'
updated: 2023-02-14
---

## Objectif

Le [vRack](https://www.ovh.com/fr/solutions/vrack/) OVHcloud est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [Serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/) OVHcloud. Mais il vous permet également d'ajouter des [instances Public Cloud](https://www.ovh.com/fr/public-cloud/instances/) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#etape-3-creer-une-instance) et un [Serveur dédié](https://www.ovhcloud.com/fr/bare-metal/).**

## Prérequis

* Avoir créé une [instance Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Avoir activé un service [vRack](https://www.ovh.com/fr/solutions/vrack)
* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/) compatible avec le vRack
* Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
* Une plage d'adresses IP privées de votre choix

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr/compare/) pour plus d’informations.

## En pratique

### Ajouter un projet Public Cloud au vRack

Une fois votre [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) configuré, il est nécessaire de l’ajouter au vRack. Cela peut se faire de deux manières :

1. En commandant un service vRack si vous n’en avez pas un, ce produit est gratuit et la mise à disposition ne prend que quelques minutes.

Allez dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur l'option `vRack`{.action}.

![Commander le vrack](images/orderingvrack.png){.thumbnail}

Vous serez redirigé vers une autre page pour valider la commande, l'opération prendra quelques minutes.

Une fois le service vRack livré sur votre compte, vous pouvez à présent y ajouter votre projet.

Cliquez sur le menu `Bare Metal Cloud`{.action}, puis sur `Network`{.action}, et ensuite sur `vRack`{.action}. Sélectionnez votre vRack dans la liste.

Dans la liste des services éligibles, sélectionnez le projet que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

![ajouter un projet au vrack](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li>En <a href="/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#etape-1-activer-et-gerer-un-vrack">créant ou en ajoutant un service vRack existant</a> dans la section Public Cloud.</li>
</ol>

### Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L’instance existe déjà et vous devez l’ajouter au vRack.

#### Cas d’une nouvelle instance

Si vous avez besoin d’aide, consultez le guide [Créer une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#etape-3-creer-une-instance){.external}. Lors de la création d’une instance, vous pourrez spécifier, durant l’étape 4, un réseau privé dans lequel intégrer votre instance. Choisissez alors, dans le menu déroulant présenté, votre vRack précédemment créé.

#### Cas d’une instance déjà existante

Vous pouvez associer une instance existante à un réseau privé. Pour plus d'informations, vous pouvez consulter [cette section du guide correspondant](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#cas-dune-instance-deja-existante).

### Créer un VLAN ID

Pour que les deux services puissent communiquer entre eux, ils doivent être « taggués » avec le même **VLAN ID**. 

#### Utilisation du VLAN ID par défaut

Sur les serveurs dédiés, par défaut, vous êtes sur le VLAN **0**. Si vous souhaitez utiliser cet ID, il sera nécessaire de « tagguer » le réseau privé lié à votre instance avec le VLAN **0**. Pour cela, vous devez passer par [l’API OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#etape-3-creer-un-vlan-dans-le-vrack).

> [!primary]
> Sur le Public Cloud, vous définissez un VLAN ID unique par réseau privé.
>
> Vous ne pouvez pas définir le même VLAN ID sur deux réseaux privés différents.

#### Utilisation d'un VLAN ID différent

Si vous décidez d'utiliser un VLAN ID différent :

- Le réseau privé associé à l'instance Public Cloud doit être « taggué » avec cet ID.
- Dans le fichier de configuration réseau du serveur dédié, l'interface réseau privée doit être « tagguée » avec cet ID.

Dans ce cas, si vous cochez la case `Définir un VLAN`, vous devrez choisir un numéro de VLAN allant de 2 à 4000.

Si vous ne cochez pas cette case, le système attribuera un numéro de VLAN aléatoire.

> [!primary]
> 
> Contrairement aux serveurs dédiés, il n’est pas nécessaire de « tagguer » le VLAN directement dans le fichier de configuration réseau de l'instance Public Cloud, une fois le VLAN ID défini dans l’espace client OVHcloud.
>

Par exemple : si vous avez défini le réseau privé lié à votre instance avec VLAN 2, l'interface réseau privée de votre serveur dédié doit être « tagguée » avec VLAN 2. Pour plus d'informations consultez le guide suivant : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

### Configurer vos interfaces réseau

Configurez ensuite les interfaces réseau sur votre nouvelle instance Public Cloud et votre serveur dédié à l'aide de ce guide : [Configurer plusieurs serveurs dédiés dans le vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.