---
title: Introduction à OVHcloud Connect
excerpt: Vue d'ensemble des concepts nécessaires à la compréhension de l'offre OVHcloud Connect
updated: 2026-02-18
---

## Qu'est-ce qu'OVHcloud Connect ?

OVHcloud Connect est une **connexion réseau privée et dédiée** entre votre infrastructure et OVHcloud. Au lieu d'acheminer le trafic via l'internet public, OVHcloud Connect établit un lien direct qui offre une meilleure sécurité, une latence réduite et une bande passante garantie.

## À qui s'adresse-t-elle ?

OVHcloud Connect s'adresse aux organisations qui ont besoin de :

- **Connectivité fiable** pour les applications critiques pour l'activité (ERP, bases de données, sauvegardes).
- **Sécurité renforcée** en maintenant le trafic hors de l'internet public.
- **Performances prévisibles** grâce à une bande passante dédiée (sans goulets d'étranglement partagés).
- Architectures **multi-cloud ou hybrides** reliant des datacenters sur site, différentes infrastructures cloud ou des réseaux WAN à OVHcloud.

## Comment cela fonctionne-t-il ?

OVHcloud Connect relie votre réseau à OVHcloud via un **Point de présence (PoP)** — un emplacement physique où OVHcloud dispose d'équipements réseau. Vous pouvez établir cette liaison de deux manières :

| Type de connexion | Fonctionnement | Idéal pour |
|---|---|---|
| **OVHcloud Connect Direct** | Vous gérez un câble physique (cross-connect) entre votre équipement et celui d'OVHcloud dans un Point de présence commun. | Les organisations déjà présentes dans un PoP OVHcloud. |
| **OVHcloud Connect Provider** | Un opérateur réseau tiers parmi nos [partenaires](https://www.ovhcloud.com/en/network/ovhcloud-connect/#partenaires) prend en charge la connexion physique pour vous. | Les organisations qui ne sont pas colocalisées avec OVHcloud ou qui préfèrent un service de connectivité managé. |

### Service Layer 2 (L2) - OVHcloud Connect Direct uniquement

OVHcloud Connect L2 relie votre infrastructure aux services OVHcloud au niveau de la couche liaison de données (Layer 2). Il vous permet d'étendre votre réseau privé aux datacenters OVHcloud, créant un pont transparent entre votre réseau local et vos ressources cloud, sans routage. Contrairement au service Layer 3, il est transparent aux VLAN (802.1q).

**Points clés :**
- Il s'agit d'un lien strictement point à point (**un seul PoP** et **une seule AZ**).
- La redondance est possible via l'agrégation de liens (LACP) sur le même PoP.

**Cas d'usage potentiels :**
- Topologies hybrides simples
- Migrations « Lift & Shift » sans changement d'adressage IP
- Applications nécessitant l'adjacence L2 ou la transparence VLAN

### Service Layer 3 (L3)

OVHcloud Connect L3 relie votre infrastructure aux services OVHcloud au niveau de la couche réseau (Layer 3). Il permet le routage et nécessite l'échange de routes.

Une fois le lien physique établi, le routage est configuré via **BGP (Border Gateway Protocol)**, et la connexion est associée à votre **vRack** — le réseau privé virtuel d'OVHcloud — afin que vos ressources OVHcloud puissent communiquer en privé avec votre infrastructure externe.

**Points clés :**
- Il repose sur une architecture Full Mesh permettant d'interconnecter plusieurs PoPs et availability zones (AZ) au sein d'une région.
- La résilience réseau peut être obtenue via des sessions BGP (multi-peers) et ECMP, avec la possibilité d'un basculement automatique entre plusieurs PoPs.

**Cas d'usage potentiels :**
- Intégration WAN d'entreprise (Cloud as a Branch)
- Architectures multi-PoP critiques
- Déploiements complexes à grande échelle.

## Vue d'ensemble de l'architecture

![Conception globale](image.png)

## Et ensuite ?

- Consultez le [Glossaire](../1.2_glossary) pour comprendre les termes clés.
- Découvrez la liste des [Providers](../1.3_providers) disponibles pour la connectivité managée.
- Lisez les [prérequis et limitations](../1.8_prerequisites_limitations) pour vérifier si OVHcloud Connect répond à votre cas d'usage.
- Accédez aux [guides Quick Start : Direct](../2.1_quick_start_direct) pour vous connecter.
- Accédez aux [guides Quick Start : Provider](../2.2_quick_start_provider) pour vous connecter.

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
