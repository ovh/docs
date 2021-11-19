---
title: SPN - Présentation du concept
slug: secnumcloud-connectivity-spn-concept
excerpt: 'Présentation du concept de SPN au sein de la solution SecNumCloud Connectivity'
section: SecNumCloud Connectivity
order: 02
---

**Dernière mise à jour le 18/11/2021**

## Objectif

Découvrez le détail de la mise en place de sous-réseaux avec SPN.

## En pratique

### Sous-réseau

Un sous-réseau est le plus petit objet réseau. Il définit un segment layer-2/ethernet avec un préfixe IPv4. Il n'est pas extensible aux autres zones SecNumCloud ou au vRack.

Les produits SecNumCloud sont attachés aux sous-réseaux : ils partageront le même segment ethernet et le même préfixe IPv4.

Les préfixes IPv4 obéissent aux règles suivantes :

* Taille minimum : /28
* Taille maximum : /24
* Les 3 premières IP sont réservées à OVHcloud : la première pour VIP, les deux suivantes pour les routeurs OVHcloud.
* Pas de tag VLAN.

Un sous-réseau peut également être configuré pour une route statique en utilisant le champ facultatif `next-hop` : le `next-hop` est l'adresse IP du next-hop permettant d'accéder au sous-réseau (c'est-à-dire que le next-hop agit comme un routeur, à l'instar d'un pare-feu). 

Le next-hop doit faire partie d'un autre sous-réseau.

### SPN - SecurePrivateNetwork

SPN est le conteneur des sous-réseaux qui agissent comme une instance de routage (unique).

Attacher des sous-réseaux au SPN dépend de deux règles :

* un SPN peut être attaché à plusieurs sous-réseaux;
* un sous-réseau ne peut être attaché qu’à un seul SPN.

![Règles de sous-réseau SPN](images/SNC-SPN-GW-Support.svg){.thumbnail}

Voici un comportement utilisant la fonctionnalité next-hop :

![fonctionnalité next-hop](images/SNC-SPN-Subnet-NH.svg){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.