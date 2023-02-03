---
title: Premiers pas avec NSX-T
slug: nsx-t-first-steps
excerpt: Découvrez NSX-T
section: NSX-T
order: 01
---

**Dernière mise à jour le 03/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Ce guide est une introduction à NSX-T dans un cluster Hosted Private Cloud by VMware**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des dificultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation

NSX-T est une solution de gestion de réseau logicielle **Sofware Defined networking (SDN)** fournie par VMware. OVHcloud propose ce service en remplacement de NSX-V dans son offre Hosted Private Cloud Powered by VMware. Pour le fonctionnement de NSX-T en version ALPHA deux hôtes sont déployés avec sur chacun une machine virtuelle dédiée à NSX-T ce qui permet une redondance en cas de défaillance d'un des hôtes.

Lorsqu'un client souscrit à l'offre NSX-T et quelle est activée une pré-configuration est appliquée avec deux passerelles :

* **Tier-0 Gateway** : Pour les connexions entre le cluster et le réseau physique (VLAN et Internet), que l'on nomme trafic nord-sud.
* **Tier-1 Gateway** : Pour les communications entre segments virtuels (overlays) du cluster. Ce type de connexion s'appelle trafic est-ouest.

Les deux passerelles sont reliées entre elles afin d'autoriser les réseaux internes à communiquer à l'extérieur du cluster.

OVHcloud fourni un bloc de 8 adresses IP publiques, certaines sont réservées. L'adresse **HA VIP** est préconfigurée, elle est utilisée pour le SNAT par défaut sur les futurs segments internes.

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))

## En pratique

### Connexion à l'interface d'administration de NSX-T

La connexion à NSX-T se fait à partir de l'URL de votre cluster fourni par OVHcloud de la forme **https://pcc-xxxxx.ovh.xx**.

A partir de la page d'accueil de votre cluster cliquez sur l'icône `NSX NSX-T`{.action}.

![01 NSX-T Connection 01](images/01-nsxt-connection01.png){.thumbnail}

Saisissez vos informations d'identifications et cliquez sur `LOG IN`{.action}.

> [!warning]
> Pour s'authentifier sur l'interface NSX-T, il faut utiliser un compte fourni par OVHcloud suivi du nom FQDN de votre cluster comme **admin@pcc-xxxxx.ovh.xx**. 
>

![01 NSX-T Connection 02](images/01-nsxt-connection02.png){.thumbnail}

L'interface NSX-T s'affiche.

![01 NSX-T Connection 03](images/01-nsxt-connection03.png){.thumbnail}

### Affichage de la configuration par défaut

Nous allons voir la topologie du réseau configurée par défaut lors du déploiement du service **NSX-T**.

Au travers de l'interface **NSX-T** cliquez sur l'onglet `Networking`{.action}.

![02 Display network topology 01](images/02-display-network-topology01.png){.thumbnail}

Une vue de l'ensemble des éléments du réseau est affichée.

Cliquez à gauche sur `Network Topology`{.action}.

![02 Display network topology 02](images/02-display-network-topology02.png){.thumbnail}

Le schéma ci-dessous représente la topologie réseau avec ces informations  :

- Les deux interfaces physiques qui permettent une redondance de l'accès Internet en cas de défaillance (Ces deux interfaces utilisent des adresses IP publiques qui ne sont pas utilisables pour la configuration client).
- La passerelle Nord-Sud qui assurent la liaison entre Le réseau physique (Internet et VLAN sur vRack) et les réseaux internes (Overlays) de votre cluster.
- La liaison entre les passerelles **ovh-t0-gw** et **ovh-t1-gw** qui se fait au travers d'adresses IP réservées à cet usage.
- La passerelle Est-Ouest pour assurer les communications entre les réseaux internes (overlay) du cluster.
- **ovh-segment-nsxpublic** qui est un segment réseau connecté au réseau public OVHcloud sur un VLAN, il contient le réseau des adresses publiques utilisables pour les configurations clients. Cliquez sur le `Rectangle`{.action} en dessous pour afficher ce réseau.

![02 Display network topology 03](images/02-display-network-topology03.png){.thumbnail}

Sur le volet de droite vous avez la passerelle du sous-réseau utilisé par NSX-T sur le réseau public. Par défaut cette passerelle est l'adresse IP virtuelle et son masque de sous-réseau.

![02 Display network topology 04](images/02-display-network-topology04.png){.thumbnail}

### Affichage de l'adresse IP virtuelle **HA VIP**

Lors du déploiement de NSX-T une adresse IP virtuelle est affectée elle sert aussi pour le SNAT des futurs segments sur le réseau interne du cluster. Nous allons voir comment récupérer cette information. 

Restez sur l'onglet `Networking`{.action} et cliquez à gauche sur `Tier-0 Gateways`{.action}. dans la catégorie **Connectivity**.

![03 Display public vip 01](images/03-display-public-vip01.png){.thumbnail}

Cliquez sur le bouton de déroulement `>`{.action} à gauche de **Name** pour afficher la configuration.

![03 Display public vip 02](images/03-display-public-vip02.png){.thumbnail}

Cliquez sur le `Numéro`{.action} à droite de **HA VIP Configuration**.

![03 Display public vip 03](images/03-display-public-vip03.png){.thumbnail}

Vous voyez l'adresse IP virtuelle publique qui est utilisable dans vos configurations **NSX-T**, cliquez sur `Close`{.action} pour fermer cette fenêtre.

![03 Display public vip 03](images/03-display-public-vip04.png){.thumbnail}

### Information sur la configuration par défaut du NAT

Une configuration SNAT par défaut est appliquée, ce qui permet l'accès Internet à partir de tout les réseaux connectés à la passerelle **Tier-0 Gateways** (Ceux en Overlays à partir de la passerelle **Tier-1-Gateways** et ceux qui utilisent un VLAN)

A partir de l'onglet `Networking`{.action} cliquez sur `NAT`{.action} pour afficher la configuration par défaut des règles de NAT.

La règle par défaut pour le **SNAT** montre que l'on utiise l'adresse IP virtuelle pour faire la translation pour tous les réseaux.

![04 Display default SNAT Configuration 01](images/04-display-default-nat-configuration01.png){.thumbnail}

Vous venez de voir la configuration par défaut. Vous pouvez consultez les autres guides OVHcloud concernant NSX-T pour créer des segments, gérer le DHCP, faire de la redirection de port en DNAT, du Load balancing, du VPN, etc...

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
