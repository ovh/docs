---
title: Présentation d'OVHcloud Connect
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2026-01-29
---

## Qu'est-ce que OVHcloud Connect ?

OVHcloud Connect est un service de connectivité réseau qui permet de relier votre infrastructure (datacenter, site on-premise, réseau opérateur ou WAN d'entreprise) directement à un réseau privé OVHcloud (vRack), sans passer par internet.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

La solution est conçue pour les architectures cloud hybride et multi-cloud nécessitant :
- des performances réseau garanties,
- une faible latence,
- un haut niveau de sécurité,
- une disponibilité élevée.

OVHcloud Connect fournit un lien physique (OVHcloud Connect Direct) ou logique (OVHcloud Connect Provider) dédié entre le réseau client et OVHcloud, avec des débits garantis allant de 50 Mbit/s à 100 Gbit/s.

> [!primary]
> Pour des définitions techniques détaillées, reportez-vous au [Glossaire OVHcloud Connect](/pages/network/ovhcloud_connect_revamp/occ-glossary).
>

### Avantages de l'offre

#### Performance et haute disponibilité
OVHcloud Connect offre une bande passante garantie allant de 50 Mbps jusqu'à 100 Gbps, avec une latence et une stabilité améliorées par rapport aux connexions internet classiques.

#### Sécurité
Vos flux réseau transitent en dehors de l'internet public, réduisant ainsi l'exposition aux menaces externes.

#### Flexibilité et automatisation
Le service permet un déploiement et une configuration rapides via [l'espace client OVHcloud](/links/manager), [l'API OVHcloud](/links/api), ou encore via [notre provider Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs).

#### Portée mondiale
OVHcloud Connect permet d'interconnecter vos infrastructures via un vaste réseau de points de présence (PoP) à travers le monde, grâce à OVHcloud et ses partenaires. En utilisant des protocoles de routage dynamique, vous assurez une résilience maximale à vos services distribués.

#### Hybride & Multi-Cloud
Notre offre interconnecte de manière fluide et privée des réseaux WAN d'entreprise avec les ressources d'OVHcloud et celles de nos partenaires.

### Architecture du service

Le fonctionnement d'OVHcloud Connect repose sur la création d'une liaison entre plusieurs composants clés :

- **Point of Presence (PoP) :** Le point de présence physique où votre réseau se raccorde à celui d'OVHcloud, directement ou [via un Provider](/links/network/ovhcloud-connect).
- **Région :** Entité locale constituée d'une ou plusieurs zones de disponibilité (AZ), hébergeant les infrastructures d'OVHcloud.
- **Availability Zone (AZ) :** Zone de disponibilité au sein d'une région, qui contient le ou les datacenters hébergeant vos services. Les AZ sont à la fois suffisamment distantes géographiquement entre elles pour être isolées en cas de sinistre, et suffisamment proches pour assurer une faible latence.
- **vRack :** Réseau privé virtuel isolé qui permet d'interconnecter vos services OVHcloud, quel que soit leur localisation. C'estr lui qui assure la distribution finale de la connexion vers vos services. Pour plus d'informations, vous pouvez consulter la [page produit sur notre site web](/links/network/vrack).

Dans le cadre de l'offre OVHcloud Connect Direct, un composant supplémentaire entre en jeu: le **Cross-connect**, qui est une liaison fibre physique établie au sein du PoP pour lier vos équipements aux nôtres.

### Principes de fonctionnement

OVHcloud Connect fait le lien entre un PoP et au moins une AZ OVHcloud.

#### Layer 2 (L2)

La liaison virtuelle fonctionne comme un tunnel Ethernet (mode pont) :
- Extension directe de votre réseau local.
- Liaison point-à-point stricte (**un seul PoP** et **une seule AZ**).
- Redondance possible grâce à une agrégation de liens (LACP) sur un même PoP.
- Cas d'usage : topologies hybrides simples, migrations "Lift & Shift" sans modification d'IP, applications exigeant une adjacence L2 ou une transparence VLAN.

#### Layer 3 (L3)

La liaison virtuelle s'appuie sur un routage IP dynamique (BGP) :
- Routage par sous-réseaux IP.
- Architecture Full Mesh permettant d’interconnecter plusieurs PoPs et zones de disponibilité (AZ) au sein d’une région.
- Résilience réseau via sessions BGP (multi-peers) et ECMP, avec possibilité de failover automatique entre plusieurs PoPs.
- Cas d’usage : Intégration WAN d'entreprise (Cloud as a Branch), architectures multi-PoPs critiques et déploiements complexes à grande échelle.

## Fournisseurs, PoP et Régions

Pour vous proposer OVHcloud Connect, nous collaborons avec de nombreux fournisseurs de services cloud. Vous trouverez la liste des PoP accessibles via nos partenaires sur [la page produit OVHcloud Connect](/links/network/ovhcloud-connect).

Afin de choisir le PoP le plus approprié pour votre infrastructure, veuillez vous référer à notre [tableau de correspondances entre PoP et régions](/pages/network/ovhcloud_connect_revamp/occ-pop-table).

## Prérequis et limites

Pour vérifier qu'OVHcloud Connect répond à votre cas d'usage et pour mieux connaître les prérequis et limites opérationnelles de ce produit, veuillez consulter [ce guide](/pages/network/ovhcloud_connect_revamp/occ-limits).

## Aller plus loin

Si vous souhaitez une formation ou une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).