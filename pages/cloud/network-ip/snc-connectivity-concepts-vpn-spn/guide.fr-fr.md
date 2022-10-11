---
title: VPN-SPN - Présentation du concept
slug: secnumcloud-connectivity-vpn-spn-concept
excerpt: 'Présentation du concept de VPN-SPN au sein de la solution SecNumCloud Connectivity'
section: SecNumCloud Connectivity
order: 04
---

> [!primary]
> Une version en langue anglaise de cette page est disponible [ici](https://docs.ovh.com/gb/en/network-ip/secnumcloud-connectivity-vpn-spn-concept/).
>

**Dernière mise à jour le 18/11/2021**

## Objectif

VPN-SPN définit la connexion externe d'une zone SecNumCloud pour un tenant donné.

## En pratique

### Règles de base

VPN-SPN gère la connectivité externe d'un tenant réseau dans une zone SecNumCloud au vRack :

![Règles VPN-SPN](images/SNC-Elligibility-Rules-2.svg){.thumbnail}

* VPN-SPN peut être attaché à 1 ou plusieurs vRack.
* Nx VPN-SPN peuvent être attachés à Nx vRack.

![VPN-SPN sur le même vRack](images/SNC-Elligibility-Rules-1.svg){.thumbnail}

* Deux VPN-SPN peuvent être attachés à un même vRack.

Par l'intermédiaire de SPN Connector, VPN-SPN est accessible avec un SPN de la même zone SecNumCloud ou toute zone distante utilisant l'option InterDC.

![VPN-SPN and SPN Connector](images/spn-connector-rules-vpn.svg){.thumbnail}

* Deux VPN-SPN ne peuvent pas être attachés sur le même connecteur SPN dans la même zone.

### Configuration IPsec

#### Présentation

Deux tunnels sont fournis par défaut, attachés à deux équipements côté OVHcloud.<br>
Les deux tunnels sont actifs. le routage dynamique et statique est pris en charge, mais le routage dynamique est celui par défaut, préféré et recommandé.

Le SPN-VPN Gateway doit être lié au vRack. Seul le trafic IPsec est autorisé depuis le vRack. Le mode tunnel est GRE sur IPsec.

Ainsi, la connectivité IPSec externe hérite de la connectivité vRack. Les options prises en charge sont :

* OVHcloud Connect L3
* Tout produit OVHcloud (Hosted Private Cloud, Baremetal Cloud, Public Cloud) exécutant un point de terminaison VPN.

Comme le vRack prend en charge les trames Jumbo jusqu'à 9000 octets, le tunnel prend en charge les trames Jumbo jusqu'à 8900 octets.

Voici un exemple d'un point de terminaison VPN fonctionnant dans le vRack avec un tunnel vers deux zones SNC :

![VPN overview](images/SNC-SPN-VPN-vrack-v0.svg){.thumbnail}

#### Configuration IP

Dans la zone SecNumCloud, VPN-SPN doit être attaché à un SPN Connector lui-même attaché à un SPN et des sous-réseaux. Tous les sous-réseaux attachés sont automatiquement transférés depuis et vers VPN-SPN.

Informations requises :

* Deux (2x) adresses IP externes (IP + netmask) au sein du sous-réseau vRack (géré par OVHcloud Connect ou autre solution OVHcloud) → source tunnel
* Une (1x) IP distante → point de terminaison VPN
* Configuration de la sécurité (PSK)
* Deux (2x) sous-réseaux pour les tunnels (masque réseau : /30)

Par défaut, l'IP distante (point de terminaison VPN) sera automatiquement routée via un routeur virtuel (première IP du sous-réseau OVHcloud Connect).

Exemple avec une configuration exécutant OVHcloud Connect :

![Exemple de configuration OCC IP](images/SNC-SPN-VPN-Routing-v0.svg){.thumbnail}

#### Politique IKE

Seul IKEv2 est supporté.

**Chiffrement :**

* aes-cbc-128
* aes-cbc-256
* aes-gcm-128
* aes-gcm-256

**Intégrité (non nécessaire si GCM) :**

* Sha256

Sha1 n'est pas supporté.

**Groupe DH :**

* 14 : 2048
* 16 : 4096
* 19 : ECDH 256 bits
* 20 : ECDH 384 bits
* 24 : ECDH 2048 bits

**Fonction pseudo-aléatoire (*Pseudo-Random Function* ou PRF)**

* Identique à l'intégrité si non GCM
* SHA1 / SHA256 / SHA512

#### Routage sur tunnel

Le mode dynamique est la configuration nécessaire pour assurer une haute disponibilité avec les deux équipements VPN.

Une session eBGP doit être configurée dans le tunnel IPsec :

* Jusqu'à 50 préfixes peuvent être annoncés depuis le point de terminaison distant.
* OVHcloud vous annonce tous les sous-réseaux SPN.
* La première adresse IP du tunnel est l'équipement OVHcloud.
* La seconde adresse IP du tunnel est l'équipement client.
* BFD est actif par défaut.

![VPN-SPN BGP view](images/SNC-SPN-VPN-BGP-v0.svg){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
