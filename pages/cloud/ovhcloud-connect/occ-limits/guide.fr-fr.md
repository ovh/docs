---
title: Capacités et limites techniques
slug: occ-limits
excerpt: 'Découvrez les capacités et limites techniques de l offre OVHcloud Connect'
section: Ressources techniques
order: 1
---

**Dernière mise à jour 25/08/2022**

## Objectif

**Découvrez les capacités et limitations techniques de l'offre OVHcloud Connect.**

## En pratique

### Capacités de la connexion

* 1000Base-LX/LH pour 1Gb
* 10GBase-LR pour 10Gb
* Jumbo Frame: jusqu'à 9000 bytes
* Auto-négociation non supportée

### Limitations techniques

#### Mode Layer 2

* Le nombre d'adresses MAC coté client est limité à 512 par port

#### Mode Layer-3

* Chaque EntryPoint/POP ne prend en charge qu’une seule session BGP (pas de Multihop eBGP)
* Chaque EndPoint/DC prend en charge jusqu’à 4 peers BGP
* Jusqu’à 100 préfixes peuvent être annoncés par session BGP

### Fonctionnalités non supportées

#### Mode Layer 2

* CoS avec 802.1p
* DCBX et protocoles apparentés (802.1Qbb, 
802.1Qaz, 802.1Qau)
* TRILL, SPF et FabricPath
* FCoE
* Spannning-tree
* IGMP et Multicast
* EtherChannel, PaGP pour l'aggrégation de liens

#### Mode Layer-3

* IPv6
* Tout mécanisme de qualité de service
* Tag 802.1q
* Multi-VRF
* eBGP Multi-Hop
* iBGP
* Routage statique sur EntryPoint/POP

### Problèmes connus

Les problèmes suivants sont présents sur OVHcloud Connect.

| Problème | Détail | Cause | Contournement | Sites impactés |
|:--------:|:------:|:-----:|:-------------:|:--------------:|
| Routes du EndPoint/DC non propagées jusqu'au EntryPoint/POP | En utilisant l'AS65501, les routes annoncées en BGP depuis le vRack ne remontent pas | Configuration OVHcloud interne | Ne pas utiliser AS65501 | Tous |
| Lumière en réception mais absence de lien | L'équipement échoue à activer le lien malgré des valeurs optiques en réception correctes | L'auto-négociation est configurée | Désactiver l'auto-négociation | Tous les POP |

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
