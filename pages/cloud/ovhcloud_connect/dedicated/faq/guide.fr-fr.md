---
title: 'OVHcloud Connect Dedicated FAQ'
slug: occdedicated-faq
excerpt: 'FAQ OVHcloud Connect Dedicated'
section: FAQ
---

**Dernière mise à jour le 11/12/2019**

## Objectif

Nous allons lister les questions posées par nos clients et y répondre.

## Questions

### 1. A quoi sert la solution OVHcloud Connect ?

OVHcloud Connect permet d'étendre votre réseau d'entreprise avec votre réseau privé OVHcloud vRack sans passer par l'établissement d'un tunnel VPN à travers Internet. Cette connexion sera ainsi plus rapide, plus fiable et avec une bande passante garantie.

### 2. Quels produits sont compatibles avec OVHcloud Connect ?

OVHcloud Connect est l'extension de votre réseau privé OVHcloud vRack donc tous les produits ayant la fonctionnalité vRack activée.


### 3. Comment choisir entre une interconnexion de niveau 2 ou de niveau 3 du modèle OSI?

Les caractéristiques associées aux réseaux de niveau 2 et 3 doivent être prises en compte lors de la phase de construction afin de répondre au mieux à vos besoins d'hybridation.
    
#### <li> Niveau 2 OSI </li>

    Le produit OVHcloud Connect dédié de niveau 2 signifie que la connexion est transparente au protocole Ethernet.

    L'intéret d'une interconnexion de niveau 2 est de pouvoir connecter le réseau campus de votre datacenter avec votre réseau privé OVHcloud vRack de manière simplifiée. 

    La connaissance réseau nécéssaire est la maitrise basique des réseaux de type LAN. 

    La redondance peut-être locale au sein du même point de présense (PoP) en utilisant le protocole LACP 802.3ad.

    Les réseaux locaux virtuels (VLAN) sont les mêmes dans votre datacenter et au sein des datacenters OVHcloud.

#### <li> Niveau 3 OSI </li>

    Le produit OVHcloud Connect dédié de niveau 3 est une connexion est gérée par des routeurs. 

    L'intéret d'une interconnexion de niveau 3 est de pouvoir connecter le réseau WAN de votre entreprise avec votre réseau privé OVHcloud vRack afin qu'il soit vu comme un ou des sites du réseau WAN. 

    Les connaissances réseau nécéssaires sont la maitrise avancée des réseaux de type MAN et WAN ainsi que la gestion de routage entre réseaux. 

    Les réseaux de niveau 3 nécessitent l'établissement d'une ou des sessions BGP externes privées entre l'entreprise et OVHcloud. 

    La redondance peut-être locale au sein du même point de présense (PoP) en utilisant le protocole LACP 802.3ad et aussi géographique entre deux points de présence (PoP) en utilisant les mécanismes de redondance de BGP.

    Les réseaux locaux virtuels (VLAN) ne sont les mêmes dans vos datacenters et au sein des datacenters OVHcloud.

### 4. Est-ce que OVHcloud peut héberger mes routeurs ?

OVHcloud n'héberge pas de matériel réseau pour les clients dans ses datacenters et points de présence (PoP). Le client doit faire héberger ses routeurs par son opérateur ou par un tiers puis demander une connexion avec les équipements OVHcloud dans la MeetMeRoom (MMR) des points de présence grâce aux informations fournies dans la Letter of Authorization (LOA). 


### 5. Pour OVHcloud Connect, quelles connectiques sont supportées?  ?

Nous supportons la fibre optique mono-mode soit 1000LX/LH soit 10G-LR.

