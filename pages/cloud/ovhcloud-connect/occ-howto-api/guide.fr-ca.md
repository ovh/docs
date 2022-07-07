---
title: Configuration de OVHcloud Connect depuis les APIv6 OVHcloud
slug: api
excerpt: Découvrez comment déployer OVHcloud Connect via les API OVHcloud
section: Configuration
order: 2
---

**Dernière mise à jour le 07/09/2020**

## Objectif

La mise en place de l'offre OVHcloud Connect peut se faire directement depuis les API OVhcloud.

**Découvrez comment configurer le service OVHcloud Connect via les API OVHcloud**. 

## Prérequis

> [!warning]
> Pour assurer un fonctionnement correct de ce service, vous devez prendre connaissance des [capacités et limites techniques de l'offre OVHcloud Connect](../occ-limits/) et configurer vos équipements réseau en accord avec celles-ci.
>

* Posséder une offre [OVHcloud Connect](https://www.ovh.com/fr/solutions/ovhcloud-connect/) dans votre compte OVHcloud.
* Être connecté aux [API OVHcloud](https://ca.api.ovh.com/console/){.external}.
* Avoir [créé vos credentials pour l'utilisation des API OVHcloud](../../api/first-steps-with-ovh-api/).

## En pratique

### Étape 1 : Association du vRack

Cette première étape est obligatoire, le service OVHcloud Connect devant être associé à un vRack pour activer la configuration. 

L'appel suivant vérifie que votre vRack peut être associé à un service OVHcloud Connect  :

> [!api]
>
> @api {GET} /vrack/{serviceName}/ovhCloudConnect
>

Il retournera l'uuid des services OVHcloud Connect admissibles.

Vous pouvez ensuite associer le service OVHcloud Connect à un vRack admissible via l'appel suivant :

> [!api]
>
> @api {POST} /vrack/{serviceName}/ovhCloudConnect
>

Renseignez le nom de votre vRack ainsi que l'uuid de votre service OVHcloud Connect.

### Étape 2 : Configurer le POP

C'est une étape importante car vous devez choisir entre L2 et L3. 

> [!warning]
> Pour basculer entre L2 et L3, il serait nécessaire de supprimer toute la configuration. Bien définir le choix de votre modèle est donc important à cette étape.
>

#### Obtenir l'ID de l'interface

Votre service est connecté à une interface avec un ID. Utilisez l'appel suivant pour obtenir cet ID :

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface
>

Une fois l'ID obtenu, vous pouvez utiliser l'appel suivant pour obtenir plus de détails :

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface/{id}
>

Le paramètre LightStatus est actualisé toutes les 5 minutes à des fins de surveillance du port.

#### Configuration en Layer 2 (L2)

Il s'agit de la configuration la plus simple. Utilisez l'appel suivant :

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

Renseignez uniquement les informations suivantes :

* ID interface : renseignez l'ID obtenu précédemment.
* Type : sélectionnez `l2`.

#### Configuration en Layer 3 (L3)

Cette configuration est plus complexe en raison des paramètres BGP à renseigner :

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

Renseignez les informations suivantes :

* ID interface : renseignez l'ID obtenu précédemment.
* Type : sélectionnez `l3`.
* customerBgpArea : votre ASN BGP, celui configuré sur votre routeur.
* ovhBgpArea : l'ASN BGP à configurer sur l'instance de routage OVHcloud. Un tel ASN apparaîtra dans la session BGP et en tant que chemin.
* sous-réseau : un bloc IPv4 /30   

### Étape 3 : Configuration du Datacentre (DC)

> [!primary]
> Si un premier service OVHcloud Connect est déjà configuré dans le même vRack, la configuration existante du Datacentre sera appliquée au deuxième service OVHcloud Connect.
>

#### Obtenir le Datacentre disponible

Vous pouvez répertorier les Datacentres disponibles pour la configuration à l'aide de l'appel suivant :

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter
>

L'appel suivant vous retourne le nom du Datacentre :

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter/{id}
>

#### Configuration en Layer 2 (L2)

La configuration en L2 reste la plus simple car seul l'ID du centre de données est nécessaire :

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

* datacenterId : Renseignez l'ID du Datacentre

#### Configuration en Layer 3 (L3)

La configuration en L3 nécessite là aussi d'autres informations à renseigner :

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

* datacenterId : Renseignez l'ID du Datacentre
* ovhBgpArea : comme pour la configuration POP, vous devez affecter un ASN pour l'instance de routage OVHcloud. Il apparaîtra dans as-path. Il peut être différent de l'ASN POP.
* sous-réseau : un bloc IPv4. Toute taille est acceptée à partir de /28.

Par défaut, le Datacentre est configuré avec une instance VRRP. Vous devez passer aux étapes suivantes pour le routage statique ou dynamique à l'aide de BGP.

##### **Option L3 : route statique**

Une route statique est nécessaire lorsque vous avez un ou plusieurs sous-réseaux derrière une passerelle. Une telle passerelle peut être un Linux (avec IP forward activé), un NSX edge ou toute instance de routage compatible.

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

* nextHop : Adresse IP agissant comme passerelle dans la plage de sous-réseau
* sous-réseau : un préfixe utilisant la notation CIDR.
* type : `network`

##### **Option L3 : Session BGP**

Une session BGP active le routage dynamique à partir de votre instance de routage avec OVHcloud Connect. Les annonces sont gérées de manière dynamique à l'aide du protocole BGP. L'activation d'une session BGP désactive la configuration VRRP. 

> [!primary]
> Vous ne pouvez pas combiner une session BGP et un itinéraire statique dans la même configuration de Datacentre. 
>

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

* bgpNeighborArea : votre  ASN BGP
* bgpNeighborIp : votre adresse IP dans la plage de sous-réseau
* type : `bgp`


### Suppression des ressources

Chaque ressource peut être supprimée individuellement, mais la suppression d'une ressource parente telle que DC ou POP supprimera automatiquement toutes les sous-ressources. 

La suppression récursive est plus lente que la suppression séquentielle de chaque ressource.

#### Suppression globale

L'appel suivant supprime récursivement toute la configuration d'un service OVHcloud Connect.

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>

L'état de chaque sous-ressource passe de `active` à `toDelete`. Le changement d'état peut nécessiter un certain temps.

Un seul identifiant de tâche est créé.

#### Supprimer par ressource

Chaque ressource peut être supprimée individuellement à l'aide de l'appel suivant qui va supprimer la plus petite ressource (extra) :

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId} 
>

L'appel suivant supprime la configuration DC ainsi que toute sous-ressource supplémentaire éventuelle. Celles-ci seront alors supprimées de manière récursive :

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

Lorsque toutes les sous-ressources ont été supprimées, la configuration POP peut être supprimée en toute sécurité.

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>


#### Adhérences

Si une configuration DC est partagée entre au moins deux services OVHcloud Connect, la suppression de la configuration POP d'un seul service OVHcloud Connect n'affectera pas la ressource DC. 

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
