---
title: Activer la Private Gateway
slug: private-gateway
excerpt: Découvrez comment activer la Private Gateway une infrastructure Hosted Private Cloud
section: Fonctionnalités OVH
hidden: true
---

**Dernière mise à jour le 22/04/2020**

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

* La private gateway est une machine virtuelle (VM) qui sera déployée sur l'infrastructure et connectée au vRack.
* La private gateway n'a pas de route, donc seul l'utilisateur du même sous-réseau peut atteindre la passerelle. La connexion à partir d'un autre réseau doit être source-natté.

> [!warning]
>
> Le certificat TLS reste le même (pcc-X-X-X-X-X.ovh.com).
>

### Prérequis

* Avoir créer un Portgroup sur le vRack pour connecter la private gateway. Il doit etre sous le datacenter prévu.
* Avoir ajouté le réseau de la private gateway dans [les autorisations par IP source](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/).
* Avoir ajouté une entrée dans le fichier /etc/hosts ou C:\Windows\system32\etc\hosts pour faire correspondre l'adresse pcc-X-X-X-X.ovh.com avec l'adresse IP privée (outre éviter des messages d'erreurs de certificat, cela est nécéssaire pour un bon fonctionnement des différentes consoles VMRC ou autre)

### Activer la private gateway

Avant de commencer, rassembler les informations nécessaires suivantes :
- **serviceName** : le nom du Hosted Private Cloud (syntaxe pcc-X-X-X-X)
- **datacenterId** : le datacenter ID
- **ip** & **netmask** : le réseau IP pour la private gateway
- **portgroup** : le nom du PortGroup pour la connexion au vRack

A utiliser dans les différents appels d'API qui suivent.

Lancer l'activation avec :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
>

L'appel entraîne la création d'une tâche qui va déployer la machine virtuelle et fait la configuration réseau.

### Désactiver la private gateway

Avant de commencer, rassembler les informations nécessaires suivantes :
- **serviceName** : le nom du Hosted Private Cloud (syntaxe pcc-X-X-X-X)
- **datacenterId** : le datacenter ID

> [!warning]
>
> La désactivation de la private gateway rétablit l'accès depuis Internet, il est donc important de s'assurer d'avoir mis en place le filtrage IP voulu.
>


Lancer la désactivation avec :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
