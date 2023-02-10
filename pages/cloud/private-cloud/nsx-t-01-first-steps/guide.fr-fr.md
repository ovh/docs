---
title: Premiers pas avec NSX-T
slug: nsx-t-first-steps
excerpt: Découvrez NSX-T
section: NSX-T
order: 01
---

**Dernière mise à jour le 10/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Ce guide est une introduction à NSX-T dans un cluster Hosted Private Cloud by VMware**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation

NSX-T est une solution de gestion de réseau logicielle **Sofware Defined networking (SDN)** fournie par VMware. OVHcloud propose ce service en remplacement de NSX-V dans son offre Hosted Private Cloud Powered by VMware. Deux hôtes sont déployés avec sur chacun une machine virtuelle dédiée à NSX-T ce qui permet une redondance en cas de défaillance d'un des hôtes.

Lorsqu'un client souscrit à l'offre NSX-T et quelle est activée une pré-configuration est appliquée avec ces deux passerelles :

* **ovh-T0-gw** : Cette passerelle est le point d'entrée réseau de votre cluster elle préconfiguré avec deux interfaces et une adresse IP virtuelle. Elle est de type **Tier-0 Gateways**.
* **ovh-T1-gw** : Cette passerelle de type **Tier-1 Gateways** il est possible de créer des segments (VLAN ou Overlay) qui lui seront connectés. Elle est reliée à **ovh-T0-gw** pour les liaisons exterieures aux cluster (Physique et Internet). 

Il est possible de créer de nouvelles passerelles de type **Tier-1 Gateways** et de les relier à la passerelle **ovh-T0-gw**. 


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

Le schéma ci-dessous représente la topologie réseau avec ces informations :

- Les deux interfaces physiques qui permettent une redondance de l'accès Internet en cas de défaillance (Ces deux interfaces utilisent des adresses IP publiques qui ne sont pas utilisables pour la configuration client).
- La passerelle Nord-Sud (**ovh-t0-gw**) qui assure la liaison entre Le réseau physique (Internet et VLAN sur vRack) et les réseaux internes (Overlays) de votre cluster.
- La liaison entre les passerelles **ovh-t0-gw** et **ovh-t1-gw** qui se fait au travers d'adresses IP réservées à cet usage.
- La passerelle Est-Ouest (**ovh-t1-gw**) qui gère les communications entre les réseaux internes (segments de type overlay) du cluster. Il est aussi possible d'effectuer des connexions avec des VLAN sur des vRacks.
- **ovh-segment-nsxpublic** qui est un segment réseau connecté au réseau public OVHcloud sur un VLAN, il contient le réseau des adresses publiques utilisables pour les configurations clients. Cliquez sur le `Rectangle`{.action} en dessous pour afficher ce segment. Vous trouverez plus d'informations concernant les segments dans ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management)


![02 Display network topology 03](images/02-display-network-topology03.png){.thumbnail}

Ce segment contient deux informations :

* L'adresse IP publique virtuelle **HA VIP**.
* Le numéro VLAN utilisé sur votre réseau public de votre cluster vSphere.

Les connexions au travers de VLAN sur la passerelle **ovh-t0-gw** n'apparaissent pas dans la topologie réseau de NSX-T, même si elle existe.

![02 Display network topology 04](images/02-display-network-topology04.png){.thumbnail}

### Affichage de l'adresse IP virtuelle **HA VIP**

Nous allons voir comment afficher les adresses IP virtuelles attachées à la passerelle **ovh-t0-gw**.

Une seule adresse IP virtuelle est affectée lors de la livraison de NSX-T, elle sert pour le SNAT sur les segments attachés à la passerelle **ovh-t0-gw**.

> ![Primary]
> Pour l'instant il n'est pas possible de créer de nouvelles adresses IP virtuelles sur la passerelle **ovh-t0-gw**, mais cette fonctionnalité devrait être bientôt disponible.
> 

Restez sur l'onglet `Networking`{.action} et cliquez à gauche sur `Tier-0 Gateways`{.action} dans la catégorie **Connectivity**.

![03 Display public vip 01](images/03-display-public-vip01.png){.thumbnail}

Cliquez sur le bouton de déroulement `>`{.action} à gauche de **Name** pour afficher la configuration.

![03 Display public vip 02](images/03-display-public-vip02.png){.thumbnail}

Cliquez sur le `Numéro`{.action} à droite de **HA VIP Configuration**.

![03 Display public vip 03](images/03-display-public-vip03.png){.thumbnail}

Vous voyez l'adresse IP virtuelle publique qui est utilisable dans vos configurations **NSX-T**, cliquez sur `Close`{.action} pour fermer cette fenêtre.

![03 Display public vip 03](images/03-display-public-vip04.png){.thumbnail}

### Information sur la configuration par défaut du NAT

Une configuration SNAT par défaut est appliquée, ce qui permet l'accès Internet à partir de tous les réseaux connectés à la passerelle **ovh-T0-gw**, ceux qui sont reliés au travers de segment de type VLAN et ceux qui sont en overlay. 

A partir de l'onglet `Networking`{.action} cliquez sur `NAT`{.action} pour afficher la configuration par défaut des règles de NAT.

La règle par défaut pour le **SNAT** montre que l'on utilise l'adresse IP virtuelle pour faire la translation depuis les réseaux internes vers Internet.

![04 Display default SNAT Configuration 01](images/04-display-default-nat-configuration01.png){.thumbnail}

Vous venez de voir la configuration par défaut. Vous pouvez consultez les autres guides OVHcloud concernant NSX-T pour créer des segments, gérer le DHCP, faire de la redirection de port en DNAT, du Load balancing, du VPN, etc...

## Aller plus loin

[Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
