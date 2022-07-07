---
title: FAQ OVHcloud Connect
slug: ovhcloudconnect-faq
section: Premiers pas
order: 3
---

**Dernière mise à jour le 07/09/2020**

## FAQ Ovhcloud Connect

### À quoi sert la solution OVHcloud Connect ?

OVHcloud Connect permet d'étendre votre réseau d'entreprise avec votre réseau privé OVHcloud vRack sans passer par l'établissement d'un tunnel VPN à travers Internet. Cette connexion sera ainsi plus rapide, plus fiable et avec une bande passante garantie.

### Quels sont les produits compatibles avec OVHcloud Connect ?

OVHcloud Connect est l'extension de votre réseau privé OVHcloud vRack donc tous les produits ayant la fonctionnalité vRack activée sont compatibles.

### Comment choisir entre une interconnexion de niveau 2 ou de niveau 3 du modèle OSI ?

Les caractéristiques associées aux réseaux de niveau 2 et 3 doivent être prises en compte lors de la phase de construction afin de répondre au mieux à vos besoins d'hybridation.

#### Niveau 2 OSI

Le produit OVHcloud Connect dédié de niveau 2 signifie que la connexion est transparente au protocole Ethernet.

L'intérêt d'une interconnexion de niveau 2 est de pouvoir connecter le réseau campus de votre datacenter avec votre réseau privé OVHcloud vRack de manière simplifiée. 

La connaissance réseau nécéssaire est la maîtrise basique des réseaux de type LAN. 

La redondance peut-être locale au sein du même point de présense (PoP) en utilisant le protocole LACP 802.3ad.

Les réseaux locaux virtuels (VLAN) sont les mêmes dans votre datacenter et au sein des datacenters OVHcloud.

#### Niveau 3 OSI

Le produit OVHcloud Connect dédié de niveau 3 est une connexion gérée par des routeurs. 

L'intérêt d'une interconnexion de niveau 3 est de pouvoir connecter le réseau WAN de votre entreprise avec votre réseau privé OVHcloud vRack afin qu'il soit vu comme un ou des sites du réseau WAN. 

Les connaissances réseau nécéssaires sont la maîtrise avancée des réseaux de type MAN et WAN ainsi que la gestion de routage entre réseaux. 

Les réseaux de niveau 3 nécessitent l'établissement d'une ou des sessions BGP externes privées entre l'entreprise et OVHcloud. 

La redondance peut-être locale au sein du même point de présense (PoP) et aussi géographique entre deux points de présence (PoP) en utilisant les mécanismes de redondance de BGP.

Les réseaux locaux virtuels (VLAN) ne sont pas les mêmes dans vos datacenters et au sein des datacenters OVHcloud.

### Est-ce que OVHcloud peut héberger mes routeurs ?

OVHcloud n'héberge pas de matériel réseau pour les clients dans ses datacenters et points de présence (PoP). Le client doit faire héberger ses équipements par son opérateur ou par un tiers puis demander une connexion avec les équipements OVHcloud dans la MeetMeRoom (MMR) des points de présence grâce aux informations fournies dans la Letter of Authorization (LOA). 

### Quelles connectiques sont supportées par OVHcloud Connect ?

Nous supportons la fibre optique mono-mode pour modules SFP/SFP+ compatible soit 1000LX/LH (1Gb/s) soit 10G-LR (10Gb/s).

### Quand mon offre OVHcloud Connect sera-t-elle livrée et disponible pour la configuration ?

Une offre OVHcloud Connect doit d'abord être livrée avant de pouvoir être configurée.

Une solution OVHcloud Connect Provider sera livrée dès que la *clé de service* (Service Key) sera envoyée au client par e-mail. Cet e-mail sera envoyé quelques minutes après la finalisation de la commande du service correspondant.

Une solution OVHcloud Connect Direct est considérée comme livrée dans les cas suivants :

- La lumière indiquant la connexion à l'équipement du client est visible du côté de OVHcloud.
- 60 jours se sont écoulés depuis la commande.
- Le client a explicitement demandé une livraison manuelle auprès des services OVHcloud.

Une fois la commande finalisée, OVHcloud fournira au client une Lettre d'autorisation (LOA) pour lui permettre d'effectuer l'interconnexion avec l'infrastructure OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
