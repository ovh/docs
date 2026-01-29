---
title: Présentation des concepts
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2026-01-21
---

## Qu'est-ce que OVHcloud Connect ?

OVHcloud Connect est une connexion privée et dédiée entre votre réseau sur site et votre vRack OVHcloud. Il est conçu pour étendre votre réseau et vous connecter de manière sécurisée à vos ressources cloud, en contournant l'internet public.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

> [!primary]
> Pour des définitions techniques détaillées, reportez-vous au [Glossaire OVHcloud Connect](/pages/network/ovhcloud_connect/occ-glossary).
>

## Avantages de l'offre

### Performance et Isolation
Le mode dédié offre une connexion dont la bande passante (1 Gbps ou 10 Gbps) vous est exclusivement réservée. Votre trafic est totalement isolé d'Internet, vous permettant de gérer vos propres VLAN et vos plans d'adressage IP en toute sécurité.

### Extension réseau et Hybridation
OVHcloud Connect permet une extension transparente de votre WAN ou de vos datacentres locaux vers le cloud. Cette approche facilite les stratégies de cloud hybride et les migrations en conservant votre topologie réseau existante.

### Haute disponibilité
Le service permet d'interconnecter votre réseau via plusieurs points de présence (PoP) pour atteindre plusieurs datacentres OVHcloud. En utilisant des protocoles de routage dynamique, vous assurez une résilience maximale à vos services distribués.

## Architecture du service

Le fonctionnement d'OVHcloud Connect repose sur la création d'une liaison entre plusieurs composants clés :

- **EntryPoint (PoP) :** Le point de présence physique où votre réseau se raccorde à celui d'OVHcloud.
- **Interconnexion (Cross-connect) :** La liaison fibre physique établie au sein du PoP pour lier vos équipements aux nôtres.
- **EndPoint (DC) :** Le datacentre de destination hébergeant vos ressources.
- **vRack :** Le réseau privé qui assure la distribution finale de la connexion vers vos services.

## Principes de fonctionnement

OVHcloud Connect est basé sur une liaison virtuelle entre un EntryPoint et un EndPoint. Vous pouvez choisir n'importe quel datacentre de la même région que le PoP. 

### Layer 2 (L2)
La liaison virtuelle fonctionne comme un tunnel Ethernet (mode pont). Dans cette configuration, un **EntryPoint** est lié à **un seul EndPoint** spécifique.

### Layer 3 (L3)
La liaison virtuelle s'appuie sur un routage IP dynamique (BGP). Elle crée un réseau à maillage complet permettant d'atteindre **n'importe quel EndPoint** d'une région depuis n'importe quel **EntryPoint** de cette même région.

## PoP accessibles par fournisseur de service

La liste disponible sur [ce lien de notre site web](/links/network/ovhcloud-connect) présente les PoP OVHcloud accessibles via chacun de nos partenaires fournisseurs de services cloud.

## Régions accessibles par PoP

Lorsque vous établissez une connexion à OVHcloud Connect, votre trafic entre dans le réseau OVHcloud via un PoP spécifique. Chaque PoP est associé à une zone géographique, et les régions OVHcloud qui peuvent être atteintes depuis ce PoP sont limitées à la zone dans laquelle il se trouve. Selon le PoP que vous choisissez, seul un ensemble de régions prédéfini sera disponible pour l'interconnexion.

Le tableau suivant répertorie les régions accessibles depuis chaque PoP :

| Zone | PoP OVHcloud Connect | Régions OVHcloud accessibles |
| :--- | :--- | :--- |
| **Europe** | &bull;Paris: Equinix - PA3, GlobalSwitch, Telehouse - TH2<br>&bull;Frankfurt: Equinix - FR5<br>&bull;London: Equinix - LD5, Telehouse - West<br>&bull;Madrid: Digital Realty - MAD2<br>&bull;Warsaw: Equinix - WA2<br>&bull;Lille: ETIX - ETX2 | &bull;Strasbourg (`eu-west-sbg`),<br>&bull;Gravelines (`eu-west-gra`),<br>&bull;Roubaix (`eu-west-rbx`),<br>&bull;Paris (`eu-west-par`),<br>&bull;Limburg (`eu-west-lim`),<br>&bull;Warsaw (`eu-central-waw`),<br>&bull;Erith (`eu-west-eri`) |
| **North America** | &bull;Montreal: Cologix - MTL3<br>&bull;Toronto: Equinix - TR1 | &bull;Beauharnois (`ca-east-bhs`),<br>&bull;Toronto (`ca-east-tor`) |
| **Asia-Pacific** | &bull;Singapore: Equinix - SG1<br>&bull;Mumbai: Equinix - MB2 | &bull;Singapore (`ap-southeast-sgp`),<br>&bull;Mumbai (`ap-south-mum`) |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).