---
title: Activer la Private Gateway
slug: private-gateway
excerpt: Découvrez comment activer la Private Gateway sur une infrastructure Hosted Private Cloud
section: Fonctionnalités OVHcloud
hidden: true
---

**Dernière mise à jour le 12/11/2021**

## Objectif

L'interface vSphere est accessible par défaut via Internet. Pour les infrastructures qui peuvent être gérées via le réseau privé vRack, il est possible de basculer l'accès vSphere sur le vRack au moyen de la private gateway.

**Ce guide vous explique comment activer la private gateway sur votre infrastructure Hosted Private Cloud via l'API OVHCloud.**

> [!warning]
>
> L'activation de la private gateway coupe l'accès depuis Internet, il est donc important de s'assurer de pouvoir accéder au vRack.
>

## Prérequis

* Posséder une offre [Hosted Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Accéder à l’interface de gestion vSphere.
* Être connecté aux [API OVHCloud](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVHCloud](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.

## En pratique

### Architecture

* La private gateway est une machine virtuelle (VM) qui sera déployée sur l'infrastructure et connectée à un portgroup vSphere associé au vRack.
* La private gateway n'a pas de route, donc seul l'utilisateur du même sous-réseau peut atteindre la passerelle. La connexion à partir d'un autre réseau doit être source-natté.

> [!warning]
>
> Les certificats TLS reste les mêmes (pcc-192-0-2-1.ovh.com)
>

### Création du PortGroup

Il est possible d'utiliser un Portgroup déjà existant pour connecter la private gateway. Il doit être sous le datacenter prévu.

Pour en créer un spécifiquement, se référer à la documentation [Création VLAN - vRack](../creation-vlan-vxlan/#vlan-vrack).


### Vérification du filtrage

Avant de lancer l'activation vérifier que vous avez ajouté le réseau de la private gateway dans [les autorisations par IP source](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/).

> [!warning]
>
> En cas d'oublie et/ou d'erreur et d'activation de l'[interface securisée](../interface-secure/), **l'accès vSphere ne sera plus possible.**
>

### Ajouter des entrée dans le fichier hôtes

Avec l'activation de la private gateway, il faut faire correspondre le fully qualified domain name ([FQDN](https://fr.wikipedia.org/wiki/Fully_qualified_domain_name)) pcc-192-0-2-1.ovh.com avec l'adresse IP privée de la private-gateway (exemple: 172.16.0.1) pour éviter des messages d'erreurs de certificat, cela est nécessaire pour un bon fonctionnement des différentes consoles VMRC, l'accès vRops ou encore les API vSphere et NSX Manager.

> [!primary]
>
> Dans les prochains paragraphes replacer les valeurs suivantes par celles correspondant à votre environnement :
> 
> * pcc-192-0-2-1
> * 172.16.0.1
>

#### Linux

Pour les machines Linux, editer le fichier **/etc/hosts** en tant que **root** et ajouter les 3 entrées suivantes :

```
172.16.0.1 pcc-192-0-2-1.ovh.com
172.16.0.1 vrops.pcc-192-0-2-1.ovh.com
172.16.0.1 nsx.pcc-192-0-2-1.ovh.com
```

Enregister le fichier.

#### Windows

Pour les machines Linux, editer le fichier **C:\Windows\system32\drivers\etc\hosts** en tant qu'**administrateur** et ajouter les 3 entrées suivantes :

```
172.16.0.1 pcc-192-0-2-1.ovh.com
172.16.0.1 vrops.pcc-192-0-2-1.ovh.com
172.16.0.1 nsx.pcc-192-0-2-1.ovh.com
```

Enregister le fichier.

### Activer la private gateway

Avant de commencer, rassemblez les informations nécessaires suivantes :

- **serviceName** : le nom du Hosted Private Cloud (exemple : pcc-192-0-2-1)
- **datacenterId** : le datacenter ID
- **ip** & **netmask** : le réseau IP pour la private gateway (exemple : 172.16.0.1/24)
- **portgroup** : le nom du PortGroup pour la connexion au vRack

> [!primary]
>
> Dans les prochains paragraphes replacer les valeurs suivantes par celles correspondant à votre environnement :
> 
> * pcc-192-0-2-1
> * 172.16.0.1
>

Ces informations seront à utiliser dans les différents appels d'API qui suivent.

Lancez l'activation avec :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
>

L'appel entraîne la création d'une tâche qui va déployer la machine virtuelle et fait la configuration réseau.

Vous recevrez peut-être une notification de livraison de ressource (un nouveau datastore). Celui-ci ne sera pas facturé et sera placé dans le dossier **Admin Storages** de la vue **Storage**. Il est ajouté pour pouvoir héberger la machine virtuelle sans affecter vos espaces de stockage.

### Désactiver la private gateway

Avant de commencer, rassemblez les informations nécessaires suivantes :

- **serviceName** : le nom du Hosted Private Cloud (exemple : pcc-192-0-2-1)
- **datacenterId** : le datacenter ID

> [!warning]
>
> La désactivation de la private gateway rétablit l'accès depuis Internet, il est donc important de s'assurer d'avoir mis en place le filtrage IP voulu.
>

Lancez la désactivation avec :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
