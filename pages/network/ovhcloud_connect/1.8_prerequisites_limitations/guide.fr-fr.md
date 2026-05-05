---
title: 'OVHcloud Connect - Prérequis et limitations'
excerpt: 'Vérifiez les exigences et les limitations actuelles avant de commander OVHcloud Connect'
updated: 2026-02-18
---

## Objectif

Avant de commander OVHcloud Connect, passez en revue les exigences ci-dessous pour vous assurer que votre environnement est prêt. Tenez également compte des limitations actuelles afin de planifier efficacement votre mise en œuvre.

## Général

### Prérequis

- Un **compte OVHcloud** valide avec une facturation configurée.
- Des permissions suffisantes pour gérer les services réseau (Network / vRack).
- Un service **vRack** provisionné (ou prêt à être créé) à associer à OVHcloud Connect.
- Vous (ou votre équipe réseau) devez maîtriser les bases du réseau IP (sous-réseaux, routage), les concepts BGP, la configuration VLAN.

> **Astuce :** si vous n'êtes pas à l'aise avec BGP ou la configuration réseau, envisagez de travailler avec un fournisseur de services managés ou de solliciter l'équipe Professional Services d'OVHcloud.

### Limites

- Un service OVHcloud Connect ne peut être associé qu'à un seul vRack.
- Nombre maximum de services OVHcloud Connect par PoP et par vRack : 16.
- MTU maximum (Jumbo frame) : jusqu'à 9000 octets.

## OVHcloud Connect Direct

### Prérequis

#### Prérequis administratifs

- Accès à une **installation de colocation** où OVHcloud dispose d'un PoP (consultez [Emplacements des PoPs et régions](../1.4_pop_locations_regions/guide.fr-fr.md)).
- Capacité à commander un **cross-connect** dans le datacenter (ou à en organiser un via l'opérateur de l'installation).

#### Prérequis techniques

- L'interface de votre équipement doit être prise en charge (référez-vous au tableau ci-dessous).

| Bande passante | Type d'interface |
|---|---|
| 1 Gb | 1000Base-LX/LH |
| 10 Gb | 10GBase-LR |
| 100 Gb | 100GBase-LR4 |

- L'auto-négociation doit être désactivée (non prise en charge).

### Limites

#### Mode Layer 2

- Le nombre d'adresses MAC côté client est limité à 512 par port.
- La bande passante maximale est de 10 Gb par port.
- Un seul OVHcloud Connect Direct Layer 2 peut être attaché par vRack.
  - Ce mode ne permet pas de déployer des architectures à PoPs redondants.
  - Vous pouvez déployer des liens redondants au sein du même PoP en activant LACP.

- Les fonctionnalités suivantes ne sont pas prises en charge :
  - 802.1p CoS-based
  - DCBX et protocoles associés (802.1Qbb, 802.1Qaz, 802.1Qau)
  - TRILL, SPF et FabricPath
  - FCoE
  - Spanning Tree
  - IGMP et Multicast
  - EtherChannel, PaGP pour l'agrégation

#### Mode Layer 3

Si vous avez choisi un OVHcloud Connect Direct Layer 3, veuillez consulter la [section Layer 3](#id-l3) ci-dessous.

## OVHcloud Connect Provider

### Prérequis

- Un contrat avec un **provider pris en charge** (consultez [Providers](../1.3_providers/guide.fr-fr.md)).
- Le provider doit être présent au PoP OVHcloud que vous avez choisi.

### Limites

#### Mode Layer 3

OVHcloud Connect Provider est toujours un service réseau Layer 3 : veuillez consulter la [section Layer 3](#id-l3) ci-dessous.

## <a id="id-l3"></a>Mode Layer 3

### Limites

- Une seule session BGP entre votre équipement et le routeur du Point de présence OVHcloud (pas d'eBGP Multihop). Plus de détails dans [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md).
- Chaque Availability Zone supporte jusqu'à 4 peers BGP. Plus de détails dans [Configurer votre réseau vRack](../3.6_vrack_network_setup/guide.fr-fr.md).
- Jusqu'à 100 préfixes peuvent être annoncés par session BGP.

- Les fonctionnalités suivantes ne sont pas prises en charge :
  - IPv6
  - Tout mécanisme de QoS
  - Tag 802.1q
  - Multi-VRF
  - eBGP Multi-Hop
  - iBGP
  - Routage statique dans la configuration de PoP

## Et ensuite ?

- Accédez au [Quick Start : connexion Direct](../2.1_quick_start_direct/guide.fr-fr.md) ou au [Quick Start : connexion via Provider](../2.2_quick_start_provider/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
