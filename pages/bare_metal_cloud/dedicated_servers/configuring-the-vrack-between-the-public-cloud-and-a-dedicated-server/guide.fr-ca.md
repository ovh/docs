---
title: 'Configurer le vRack entre Public Cloud et un serveur dédié'
excerpt: 'Découvrez comment configurer un réseau privé entre une instance Public Cloud et un serveur dédié.'
updated: 2024-10-24
---

## Objectif

Le [vRack](https://www.ovh.com/ca/fr/solutions/vrack/) OVHcloud est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [Serveurs dédiés](https://www.ovh.com/ca/fr/serveurs_dedies/) OVHcloud. Mais il vous permet également d'ajouter des [instances Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) et un [Serveur dédié](https://www.ovh.com/ca/fr/serveurs_dedies/).**

## Prérequis

* Avoir créé une [instance Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Avoir activé un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack)
* Posséder un [serveur dédié](/links/bare-metal/bare-metal) compatible avec le vRack
* Être connecté à l'[espace client OVHcloud](/links/manager)
* Une plage d'adresses IP privées de votre choix

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.

## En pratique

### Ajouter un projet Public Cloud au vRack

> [!primary]
> Ceci ne s'applique pas aux projets nouvellement créés, qui sont automatiquement livrés avec un vRack. Pour visualiser le vRack une fois le projet créé, allez dans le menu `Bare Metal Cloud`{.action} et cliquez sur `Network`{.action} dans l'onglet de gauche. Cliquez sur `Réseau Privé vRack`{.action} pour visualiser le(s) vRack(s).
>
> Vous pouvez également retirer le projet du vRack qui lui a été attribué et l'attacher à un autre vRack si vous le souhaitez, en particulier si vous aviez déjà un vRack existant avec votre/vos serveur(s) dédié(s).


Pour les projets plus anciens, une fois que vous avez commandé votre [vRack](/links/network/vrack), rendez-vous dans le menu `Bare Metal Cloud`{.action}, cliquez sur `Network`{.action} dans l'onglet de gauche, puis sur `Réseau Privé vRack`{.action}. Sélectionnez votre vRack dans la liste.

Allez dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur l'option `vRack`{.action}.

Dans la liste des services éligibles, sélectionnez le projet que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

![ajouter un projet au vrack](images/addprojectvrack.png){.thumbnail}

### Intégrer une instance dans le vRack

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L’instance existe déjà et vous devez l’ajouter au vRack.

#### Cas d’une nouvelle instance

Si vous avez besoin d’aide, consultez le guide [Créer une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#create-instance){.external}. Lors de la création d’une instance, vous pourrez spécifier, durant l’étape 5, un réseau privé dans lequel intégrer votre instance.

#### Cas d’une instance déjà existante

Vous pouvez associer une instance existante à un réseau privé.

Avec votre projet lié au vRack, vous êtes prêt à créer des réseaux privés.

Dans l'onglet Public cloud, cliquez sur `Private Network`{.action} dans le menu de gauche sous **Network**.

![create private network](images/vrack2022-03.png){.thumbnail}

Cliquez sur le bouton `Ajouter un réseau privé`{.action}. La page suivante vous permet de personnaliser plusieurs paramètres.

À l'étape 1, sélectionnez la région dans laquelle vous souhaitez placer le réseau privé.

![select region](images/vrack2024-01.png){.thumbnail}

Pour que les deux services puissent communiquer entre eux, ils doivent être « taggués » avec le même **VLAN ID**.

Celui-ci peut être configuré à l'étape 2.

![configure network](images/configure_private_network.png){.thumbnail}

Cette étape offre plusieurs options de configuration. Pour les besoins de ce guide, nous allons nous concentrer sur les éléments nécessaires. Cliquez sur les onglets ci-dessous pour afficher les détails :

> [!tabs]
> **Nom du réseau privé**
>>
>> Entrez un nom pour votre réseau privé.<br>
>>
> **Options réseau Layer 2**
>>
>> Par défaut, le VLAN ID des serveurs dédiés est **0**. Pour utiliser ce VLAN ID pour une instance, il sera nécessaire de marquer le réseau privé avec le VLAN **0** également.
>> Cochez la case **Set a VLAN ID** et sélectionnez VLAN ID **0**.
>>
>> Si vous ne cochez pas la case, le système attribuera un numéro d'identifiant VLAN aléatoire à votre réseau privé.
>>
>>
> **Utilisation d'un VLAN ID différent**
>>
>> Si vous n'avez pas l'intention d'utiliser le VLAN ID **0**, vous pouvez sélectionner un ID différent compris entre 1 et 4000. Les règles suivantes s'appliquent :
>>
>> - Le réseau privé lié à l'instance Public Cloud doit être « taggué » avec cet identifiant de VLAN.
>> - Lors de la configuration du vRack sur le serveur dédié, ce VLAN ID doit être inclus dans le fichier de configuration réseau.
>>
>> [!primary]
>> Pour le Public Cloud, vous définissez un VLAN ID unique par réseau privé. Il n'est pas possible de définir le même VLAN ID sur deux réseaux privés différents.
>>
>> [!primary]
>> Contrairement aux serveurs dédiés (lorsque l’on utilise un VLAN ID différent de 0), il n’est pas nécessaire d’inclure directement le VLAN ID dans le fichier de configuration réseau de l’instance Public Cloud une fois qu’il est paramétré dans l’espace client OVHcloud.
>>
>> Exemple : si votre réseau privé d'instance est « taggué » avec le VLAN 2, ce VLAN ID doit être inclus dans la configuration réseau du serveur dédié uniquement. Pour plus d'informations, consultez le guide suivant : [Create multiple VLANs in the vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlan-in-a-vrack).<br>
>>
> **Options de distribution des adresses DHCP**
>>
>> Vous pouvez conserver la plage IP privée par défaut ou en utiliser une autre.
>>

Une fois fait, cliquez sur `Créer`{.action}. Cette opération peut prendre quelques minutes.

Dans le tableau de bord de l'instance correspondante, cliquez sur le bouton `...`{.action} dans la case « Réseaux », à côté de « Réseau(x) privé(s) », et sélectionnez `Attacher un réseau`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le ou les réseaux privés à attacher à votre instance et cliquez sur `Attacher`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configurer vos interfaces réseau

Configurez ensuite les interfaces réseau sur votre nouvelle instance Public Cloud et votre serveur dédié à l'aide de ce guide : [Configurer plusieurs serveurs dédiés dans le vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).