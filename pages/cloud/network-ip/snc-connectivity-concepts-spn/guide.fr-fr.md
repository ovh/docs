---
title: SPN - Présentation du concept
slug: secnumcloud-connectivity-spn-concept
excerpt: 'Présentation du concept de SPN au sein de la solution SecNumCloud Connectivity'
section: SecNumCloud Connectivity
order: 02
---

> [!primary]
> Une version en langue anglaise de cette page est disponible [ici](https://docs.ovh.com/gb/en/network-ip/secnumcloud-connectivity-spn-concept/).
>

**Dernière mise à jour le 10/10/2022**

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

Un sous-réseau routé statiquement n'est pas limité en taille (c'est-à-dire qu'il peut être supérieur à /24).

### SPN - SecurePrivateNetwork

SPN est le conteneur des sous-réseaux qui agissent comme une instance de routage (unique).

Attacher des sous-réseaux au SPN dépend de deux règles :

* un SPN peut être attaché à plusieurs sous-réseaux;
* un sous-réseau ne peut être attaché qu’à un seul SPN.

![Règles de sous-réseau SPN](images/SNC-SPN-GW-Support.svg){.thumbnail}

Voici un comportement utilisant la fonctionnalité next-hop :

![fonctionnalité next-hop](images/SNC-SPN-Subnet-NH.svg){.thumbnail}

La fonctionnalité next-hop configure une route statique pour ce subnet à destination du next-hop configuré. Cette route statique est re-diffusée via le SPN-Connector au VPN-SPN et via l'interDC.

#### Configuration BGP

Le protocole BGP est nécessaire avec l'option VPN-SPN et facultatif dans le SPN. L'activation du protocole BGP dans le SPN désactive la configuration VRRP, c'est-à-dire la 1ère adresse IP du subnet.

* La configuration nécessite un AS. Cet AS doit être indépendant de l'AS BGP du client pour former une relation eBGP.
La valeur recommandée est dans la plage 64512-65534.
* Multihop eBGP n'est pas supporté
* Avec plusieurs neighbors, ECMP est automatiquement activé. MED et/ou AS-PATH doivent être réglés pour que le chemin soit sélectionné.
* Chaque SPN prend en charge jusqu'à 4 peers BGP.
* Jusqu'à 50 préfixes peuvent être annoncés par session BGP.
* Pour chaque SPN, vous devez établir une session BGP avec un équipement « A » et un équipement « B ».
* Par défaut, le protocole BFD est activé sur toutes les sessions BGP. Ce protocole est fortement recommandé pour avoir une convergence plus rapide.

Topologie classique:

![Topologie BGP](images/SNC-SPN-BGP-v0.svg){.thumbnail}

* Le SPN est ici configuré avec un subnet A.B.C.D/X
* Les routeurs Ra et Rb ont chacun une adresse IP, respectivement la 2e et 3e du subnet
* Rc est l'appliance de routage du client
* Rc doit avoir une session eBGP avec Ra et Rb
* Le réseau local Q.R.S.T/X sera appris par BGP sur les routeurs Ra et Rb et l'annonce renvoyée via le SPN Connector (donc vers InterDC et/ou VPN-SPN)
* Les Ra et Rb envoient les annonces reçues depuis InterDC et/ou VPN-SPN

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
