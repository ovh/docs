---
title: Présentation d'OVHcloud Connect
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2026-01-29
---

## Qu'est-ce que OVHcloud Connect ?

OVHcloud Connect est une connexion privée et dédiée entre votre réseau sur site et votre vRack OVHcloud. Il est conçu pour étendre votre réseau et vous connecter de manière sécurisée à vos ressources cloud, en contournant l'internet public.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

> [!primary]
> Pour des définitions techniques détaillées, reportez-vous au [Glossaire OVHcloud Connect](/pages/network/ovhcloud_connect_revamp/occ-glossary).
>

### Avantages de l'offre

#### Performance et Isolation
Le mode dédié offre une connexion dont la bande passante (1 Gbps ou 10 Gbps) vous est exclusivement réservée. Votre trafic est totalement isolé d'Internet, vous permettant de gérer vos propres VLAN et vos plans d'adressage IP en toute sécurité.

#### Extension réseau et Hybridation
OVHcloud Connect permet une extension transparente de votre WAN ou de vos datacentres locaux vers le cloud. Cette approche facilite les stratégies de cloud hybride et les migrations en conservant votre topologie réseau existante.

#### Haute disponibilité
Le service permet d'interconnecter votre réseau via plusieurs points de présence (PoP) pour atteindre plusieurs datacentres OVHcloud. En utilisant des protocoles de routage dynamique, vous assurez une résilience maximale à vos services distribués.

### Architecture du service

Le fonctionnement d'OVHcloud Connect repose sur la création d'une liaison entre plusieurs composants clés :

- **Point of Presence (PoP) :** Le point de présence physique où votre réseau se raccorde à celui d'OVHcloud.
- **Interconnexion (Cross-connect) :** La liaison fibre physique établie au sein du PoP pour lier vos équipements aux nôtres.
- **Région :** Entité locale constituée d'une ou plusieurs zones de disponibilité (AZ), hébergeant les infrastructures d'OVHcloud.
- **Availability Zone (AZ) :** Zone de disponibilité au sein d'une région, qui contient le ou les datacenters hébergeant vos services. Les AZ sont à la fois suffisamment distantes géographiquement entre elles pour être isolées en cas de sinistre, et suffisamment proches pour assurer une faible latence.
- **vRack :** Réseau privé virtuel isolé qui permet d'interconnecter vos services OVHcloud, quel que soit leur localisation. C'estr lui qui assure la distribution finale de la connexion vers vos services. Pour plus d'informations, vous pouvez consulter la [page produit sur notre site web](/links/network/vrack).

### Principes de fonctionnement

OVHcloud Connect fait le lien entre un PoP et au moins une AZ OVHcloud.

#### Layer 2 (L2)
La liaison virtuelle fonctionne comme un tunnel Ethernet (mode pont). Dans cette configuration, un **PoP** ne peut être lié qu'à **une seule AZ** et **un seul vRack**.

#### Layer 3 (L3)
La liaison virtuelle s'appuie sur un routage IP dynamique (BGP). Elle crée un réseau à maillage complet permettant d'atteindre **n'importe quelle région** d'une zone géographique donnée (EU, NA ou APAC) depuis n'importe quel **PoP** de cette même région.

## Fournisseurs, PoP et Régions

Pour vous proposer OVHcloud Connect, nous collaborons avec de nombreux fournisseurs de services cloud. Vous trouverez la liste des PoP accessibles via nos partenaires sur [la page produit OVHcloud Connect](/links/network/ovhcloud-connect).

Afin de choisir le PoP le plus approprié pour votre infrastructure, veuillez vous référer à notre [tableau de correspondances entre PoP et régions](/pages/network/ovhcloud_connect_revamp/occ-pop-table).

## Prérequis et limites

Pour vérifier que votre cas d'usage permet bien l'utilisation d'OVHcloud Connect, ou pour mieux connaître les prérequis et limites opérationnelles de ce produit, veuillez consulter [ce guide](/pages/network/ovhcloud_connect_revamp/occ-limits).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).