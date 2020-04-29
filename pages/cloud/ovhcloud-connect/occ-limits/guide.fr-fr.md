---
title: Limites
slug: occ-limits
excerpt: 'Limites - OVHcloud Connect'
section: Ressources techniques
---

**Dernière mise à jour 29 Avril 2020**

## Capacités de la connexion

* 1000Base-LX/LH pour 1Gb
* 10GBase-LR pour 10Gb
* Jumbo Frame: jusqu'à 9000 bytes
* Autonegotiation non supportée

## Fonctions non supportées

### Mode Layer 2

* CoS avec 802.1p
* DCBX et protocoles apparentés (802.1Qbb, 
802.1Qaz, 802.1Qau)
* TRILL, SPF et FabricPath
* FCoE
* Spannning-tree
* IGMP et Multicast
* EtherChannel, PaGP pour l'aggrégation de liens

### Mode Layer-3

* Tout mécanisme de qualité de service
* Tag 802.1q
* Multi-VRF
* eBGP Multi-Hop
* iBGP
* Routage statique sur EntryPoint/POP

## Fonctions en roadmap

* IPv6

## Problèmes connus

Les problèmes suivants sont présents sur OVHcloud Connect.

| Problème | Détail | Cause | Contournement | Sites impactés |
|:--------:|:------:|:-----:|:-------------:|:--------------:|
| Session BGP rejetée | Message d'erreur "Bad AS" avec NeighborID configuré dans le range 169.254.0.0/16 | Bug identifié avec le constructeur | Changer NeighborID | DC: RBX, SBG, GRA, LIM; POP: PAR-TH2, PAR-GSW, PAR-PA3, FRA-FR5 |
| Routes du EndPoint/DC non propagées jusqu'au EntryPoint/POP | En utilisation l'AS65501, les routes annoncées en BGP depuis le vRack ne remontent pas | Configuration OVH interne | Ne pas utiliser AS65501 | ALL |
| ECMP non fonctionnel | Quand ECMP est activé sur un même POP par le client, les flux en sortie sont mal répartis | Limitation | Diviser les annonces pour répartir le trafic | Tous les POP |
| Lumière en réception mais absence de lien | L'équipement échoue à activer le lien malgré des valeurs optiques en réception correctes | L'autonegotiation est configurée | Désactiver l'autonégotiation | Tous les POP |

