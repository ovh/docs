---
title: 'Configurer un routeur manuellement'
excerpt: 'Découvrez comment configurer votre accès internet OVHcloud sur votre propre routeur'
updated: 2023-08-08
---

## Objectif

Si vous souhaitez utiliser votre équipement personnel pour gérer la connexion PPPoE sur votre offre xDSL/FTTH OVHcloud, vous devez récupérer les identifiants PPPoE associés cet accès.
Si vous ne les connaissez pas vous pouvez suivre le guide suivant pour les récupérer « [Obtenir les identifiants PPPoE](/pages/telecom/xdsl/obtenir_id_ppp) »

**Découvrez comment configurer votre accès internet OVHcloud sur votre propre routeur**.

## Prérequis

- Disposer d'une [offre xDSL ou FTTH OVHcloud](https://www.ovhtelecom.fr/offre-internet/) active.
- Disposer d'un équipement (routeur, firewall) compatible PPPoE.
- Disposer des identifiants PPPoE de votre accès internet OVHcloud, consultez le guide [Obtenir les identifiants PPPoE](/pages/telecom/xdsl/obtenir_id_ppp) si vous ne les connaissez pas.

## En pratique

Les identifiants PPPoE vous sont envoyés par e-mail (à l'adresse e-mail de contact de votre compte OVHcloud) lors de la livraison de votre accès.<br>
Ces identifiants vous permettent de configurer votre modem OVHcloud, dans le cas d’une configuration manuelle en local du modem fourni par OVHcloud ou de votre équipement personnel pour l’usage de votre accès à Internet.

Si votre offre a été fournie avec un modem OVHcloud, les identifiants PPPoE vous sont envoyés par e-mail systématiquement après chaque réinitialisation du modem.

Le *login* reste identique après chaque réinitialisation.
Pour des raisons de sécurité, le *mot de passe* est systématiquement modifié après chaque réinitialisation de votre routeur OVHcloud.

Si vous utilisez votre propre modem/routeur, vous pouvez utiliser les API OVHcloud afin de générer l'envoi de nouveaux identifiants PPPoE par e-mail.

> [!warning]
>
> Chaque routeur à une méthode de configuration différente, ce guide liste les paramètres indispensables pour faire fonctionner votre connexion, mais nous vous invitons à lire le manuel utilisateur de votre
> modem/routeur pour connaitre comment les appliquer.
>

### Profil Standard

Ce profil s'applique aux typologies d'accès suivantes :

* Accès ADSL/VDSL (Cuivre) et FTTH (Fibre) Covage
* Accès ADSL/VDSL (Cuivre) et FTTH (Fibre) en collecte SFR
* Accès ADSL/VDSL (Cuivre) et FTTH (Fibre) en collecte AXIONE
* Accès ADSL (Cuivre) en collecte ORANGE

Les paramètres à configurer sont :

* **Mode de connexion**: PPPoE
* **Nom d'utilisateur PPPoE**: Le login reçu par email (ex: 0320xxyyzz_1@ovh.kosc)
* **Mot de passe PPPoE**: Le mot de passe reçu par email
* **MTU**: 1432 ou 1456 ou **1492** (recommandé)
* **VLAN**: Aucun VLAN
* **IPv6**: IPv4/IPv6 DualStack, IPCPv6 activé
* **Pour l'ADSL**:
    - **Type**: ADSL over ATM
    - **VPI**: 8
    - **VCI**: 35
    - **Encapsulation**: LLC/SNAP-BRIDGING
    - **Service Category**: UBR without PCR
* **Pour le VDSL**:
    - **Type**: VDSL over PTM
* **Pour le FTTH**:
    - **Type**: Ethernet

### Profil Orange

> [!primary]
> La différence avec le profil Standard est l'activation du VLAN 835.
>

Ce profil s'applique aux typologies d'accès suivantes :

* Accès VDSL (Cuivre) et FTTH (Fibre) en collecte Orange

Les paramètres à configurer sont :

* **Mode de connexion**: PPPoE
* **Nom d'utilisateur PPPoE**: Le login reçu par email (ex: 0320xxyyzz_1@adsl.ovh)
* **Mot de passe PPPoE**: Le mot de passe reçu par email
* **MTU**: 1432 ou 1456 ou **1492** (recommandé)
* **VLAN**: 835 (802.1p : 0 , 802.1q: 835)
* **IPv6**: IPv4/IPv6 DualStack, IPCPv6 activé
* **Pour le VDSL**:
    - **Type**: VDSL over PTM
* **Pour le FTTH**:
    - **Type**: Ethernet

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
