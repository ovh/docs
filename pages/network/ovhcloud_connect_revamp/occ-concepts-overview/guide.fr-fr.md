---
title: Présentation d'OVHcloud Connect
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2026-01-29
---

## Qu'est-ce que OVHcloud Connect ?

OVHcloud Connect est un service de connectivité réseau qui permet de relier directement votre infrastructure (datacenter, site on-premise, réseau opérateur ou WAN d’entreprise) au réseau privé d’OVHcloud (vRack) sans passer par Internet, avec des débits garantis allant de 50 Mbit/s à 100 Gbit/s.

> **Commentaire:** changement de schema pour davantage d'informations, on a travaillé un autre design avec Grégoire cf ci-dessous, à adapter pour vue horizontale
<img width="606" height="1230" alt="image" src="https://github.com/user-attachments/assets/dccd1a94-3981-4254-a84f-9ccacd6b1ea9" />

OVHcloud Connect offers different ways to connect your assets:

**OVHcloud Connect Direct** is a service that provides a private, physical network connection between your equipment and OVHcloud network in a Point-of-Presence.
- You benefit from the full port bandwidth: 1 Gbps, 10 Gbps or 100 Gbps
- You need to order a Cross-Connect (physical connection) in the Point of Presence you chose, which may take a few days for the datacenter operator to deliver (see **Commentaire:** ajouter un lien vers la page sur les LOA)

**OVHcloud Connect Provider** is a private logical connection to OVHcloud provided through a provider: you share a provider’s physical link instead of owning a dedicated port.
- You can select your garanteed bandwidth with more granularity, from 50 Mbps to 50 Gbps.
- Such logical connections are deployed within minutes.
- You need to order network services from one of our partners (see **Commentaire:** ajouter un lien vers la page de doc sur les providers)

> [!primary]
> Pour des définitions techniques détaillées, reportez-vous au [Glossaire OVHcloud Connect](/pages/network/ovhcloud_connect_revamp/occ-glossary).
>

### Main applications

Cette solution est conçue pour les architectures cloud hybride et multi-cloud nécessitant :
- des performances réseau garanties,
- une faible latence,
- un haut niveau de sécurité,
- une disponibilité élevée.

### Key benefits

- **Performance & SLAs:** Offers guaranteed bandwidth from 50Mbps up to 100 Gbps, with improved latency and stability compared to Internet connections.
- **Security:** Traffic stays off the public Internet, reducing exposure to external threats.
- **Flexibility & Automation:** Supports quick provisioning and configuration via the OVHcloud Manager, APIs and Terraform provider. **Commentaire:** ajouter un lien vers la page Automation de la doc
- **Global Reach:** Extensive Points of Presence (PoPs) worldwide through OVHcloud and providers.
- **Hybrid & Multi-Cloud:** Seamlessly interconnects enterprise WANs with OVHcloud and other cloud provider resources in a private manner.

### Locations & Providers

We provide a worlwide footprint for both direct and provider connections.
If you are looking for a direct connection to OVHcloud, please reffer to this [table](/pages/network/ovhcloud_connect_revamp/occ-pop-table) to identify the location that 
************************************** ICI
As you may already work with onePour vous proposer OVHcloud Connect, nous collaborons avec de nombreux fournisseurs de services cloud. Vous trouverez la liste des PoP accessibles via nos partenaires sur .

## Technical overview





## Prérequis et limites

Pour vérifier qu'OVHcloud Connect adresse bien votre cas d'usage et pour mieux connaître les prérequis et limites opérationnelles de ce produit, veuillez consulter [ce guide](/pages/network/ovhcloud_connect_revamp/occ-limits).

## Aller plus loin

Si souhaitez une formation ou une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
