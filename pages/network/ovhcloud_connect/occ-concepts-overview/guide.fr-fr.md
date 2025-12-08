---
title: Présentation des concepts
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2025-10-29
---

## Qu'est-ce que OVHcloud Connect ?

OVHcloud Connect est une connexion privée et dédiée entre votre réseau sur site et votre vRack OVHcloud. Il est conçu pour étendre votre réseau et vous connecter de manière sécurisée à vos ressources cloud, en contournant l'internet public.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

## Avantages de l'offre

### Dédié

Le mode dédié est une connexion directe avec les services OVHcloud. Vous pouvez gérer différentes configurations, d'une connexion unique à une connexion multiple à l'aide de LACP (L2) ou BGP-ECMP (L3) avec une vitesse de port de 1 Gbps ou 10 Gbps. L'interface et la bande-passante ne sont pas partagées avec d'autres clients.

### Privé

Votre trafic est isolé d'Internet, vous gérez vos propres VLAN (L2) et/ou vos propres adresses IP (L3). Même les instances BGP sont privées et vous pouvez configurer l'ASN de votre choix.
OVHcloud Connect est connecté à votre vRack avec tous les services compatibles.

### Extension réseau

OVHcloud Connect peut être connecté à votre réseau WAN ou à votre réseau de Datacentres. permettant une extension transparente vers le cloud. Ceci facilite les stratégies de cloud hybride et les migrations en conservant la topologie de vos VLAN existants ou vos adresses IP.

### Haute disponibilité

Grâce à BGP, vous pouvez interconnecter votre réseau via plusieurs PoP et atteindre plusieurs Datacentres OVHcloud. À partir du vRack, configurez BGP pour permettre une résilience maximale avec les services distribués.

## Composants

### PoP - EntryPoint

Les points de présence (PoP) sont des installations comme Equinix, InterXion, Telehouse ou Global Switch. Le PoP est l'entrée de service d'OVHcloud Connect: nous l'appelons EntryPoint.

### DC - EndPoint

Le Datacentre (DC) OVHcloud est la terminaison du service, le EndPoint.

### Interconnexion

Une interconnexion (Cross-connect) est une liaison physique (fibre monomode) gérée par les équipes d'installation dans le PoP. L'interconnexion est établie dans la MMR (Meet-Me-Room) entre la position donnée par OVHcloud et la position détenue par le client. Dans le cas d'une offre OVHcloud Connect Direct, le client doit commander et gérer l'interconnexion. 

### vRack

Réseau privé OVHcloud, disponible sur les ressources Cloud entre tous les Datacentres OVHcloud.

### BGP

Protocole de routage à utiliser lors de l'utilisation du mode de L3.

## Principes

OVHcloud Connect est basé sur une liaison virtuelle entre un EntryPoint et un EndPoint. Le EntryPoint est là où vous voulez établir l'interconnexion avec OVHcloud. Le EndPoint est le Datacentre OVHcloud où sont situés vos services. Vous pouvez choisir n'importe quel Datacentre de la même région que le PoP. 

### Layer 2 (L2)

La liaison virtuelle est un tunnel L2 pour OVHcloud Connect L2. Seul un PoP/EntryPoint avec 1 DC/EndPoint peut être configuré.

### Layer 3 (L3)

La liaison virtuelle est un réseau IP à maillage complet entre tout PoP/EntryPoint et tout DC/EndPoint de la même région.

## PoPs accessibles par fournisseur de service

La liste disponible sur [ce lien de notre site web](/links/network/ovhcloud-connect) présente les PoPs d'OVHcloud accessibles via chacun de nos partenaires fournisseurs de services cloud.

## Régions accessibles par PoP

Lorsque vous établissez une connexion à OVHcloud Connect, votre trafic entre dans le réseau OVHcloud via un PoP spécifique. Chaque PoP est associé à une zone géographique, et les régions OVHcloud qui peuvent être atteintes depuis ce PoP sont limitées à la zone dans laquelle il se trouve. Selon le PoP que vous choisissez, seul un ensemble de régions prédéfini sera disponible pour l'interconnexion.

Le tableau suivant répertorie les régions accessibles depuis chaque PoP :

| Zone | PoPs OVHcloud Connect | Régions OVHcloud accessibles |
| :--- | :--- | :--- |
| **Europe** | &bull;Paris: Equinix - PA3, GlobalSwitch, Telehouse - TH2<br>&bull;Frankfurt: Equinix - FR5<br>&bull;London: Equinix - LD5, Telehouse - West<br>&bull;Madrid: Digital Realty - MAD2<br>&bull;Warsaw: Equinix - WA2<br>&bull;Lille: ETIX - ETX2 | &bull;Strasbourg (`eu-west-sbg`),<br>&bull;Gravelines (`eu-west-gra`),<br>&bull;Roubaix (`eu-west-rbx`),<br>&bull;Paris (`eu-west-par`),<br>&bull;Limburg (`eu-west-lim`),<br>&bull;Warsaw (`eu-central-waw`),<br>&bull;Erith (`eu-west-eri`) |
| **North America** | &bull;Montreal: Cologix - MTL3<br>&bull;Toronto: Equinix - TR1 | &bull;Beauharnois (`ca-east-bhs`),<br>&bull;Toronto (`ca-east-tor`) |
| **Asia-Pacific** | &bull;Singapore: Equinix - SG1<br>&bull;Mumbai: Equinix - MB2 | &bull;Singapore (`ap-southeast-sgp`),<br>&bull;Mumbai (`ap-south-mum`) |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
