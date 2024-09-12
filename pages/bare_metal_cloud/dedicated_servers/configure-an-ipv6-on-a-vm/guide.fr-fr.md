---
title: "Configurer une IPv6 sur une machine virtuelle"
excerpt: "Découvrez comment configurer une adresse IPv6 sur une machine virtuelle"
updated: 2024-09-11
---

## Objectif

Internet Protocol version 6 (IPv6) est le successeur d'Internet Protocol version 4 (IPv4). Mis en place pour résoudre l’épuisement des adresses IPv4, IPv6 utilise des adresses de 128 bits au lieu d’adresses de 32 bits. Les serveurs des gammes High Grade, Scale et Advance (depuis juillet 2024) sont livrés avec un bloc /56 IPv6. Les anciens serveurs sont quant à eux livrés avec un bloc/64 IPv6. Un serveur livré avec un bloc /56 IPv6 permet de disposer jusqu'à 18 quintillions d’adresses IP.

Notre infrastructure vous permet également de configurer l'IPv6 sur vos machines virtuelles.

**Ce guide vous explique comment configurer des adresses IPv6 sur votre machine virtuelle.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](links/directory) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](/links/bare-metal/bare-metal) disposant d'un bloc IPv6 (/64) ou (/56) dans votre compte OVHcloud.
- Avoir installez un système d'exploitation permettant la virtualisation (Proxmox, ESXi, Hyper-V etc..).
- Avoir toutes les informations relatives à votre IPv6 (préfix, passerelle...).
- Avoir des connaissances de base en SSH et en réseau.

## En pratique

Les sections suivantes contiennent les configurations des distributions que nous proposons actuellement et les distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou via une session de connexion GUI (RDP pour un serveur Windows).

Sur les serveurs dédiés, la première IPv6 est déclarée comme 2607:5300:xxxx:xxxx::/64. Par exemple, si nous avons attribué à votre serveur la plage IPv6 : `2607:5300:abcd:efgh::/64`, la première IPv6 de votre serveur est : `2607:5300:abcd:efgh::/64`.

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit d'une adresse IPv6 du bloc IPv6 attribué à votre serveur|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6, généralement de 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Il s'agit de la passerelle (ou *gateway*) de votre bloc IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff ou fe80::1|

Dans nos exemples, nous utiliserons l'éditeur de texte `nano`. Vous pouvez bien entendu utiliser l'éditeur de texte de votre choix.

### Passerelle par défaut (Gateway)

La première étape consiste à récupérer la passerelle (gateway) IPv6 assignée à votre serveur. Deux méthodes sont possibles, poursuivez vers celle que vous souhaitez utiliser.

- [Obtenir les informations réseau via l'espace client](#viacontrolpanel).
- [Obtenir les informations réseau via les API](#viaapi).

#### Via votre espace client <a name="viacontrolpanel"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur dédiés`{.action}.

La passerelle IPv6 assignée à votre serveur est affichée dans la section `Réseau` de l'onglet `Informations générales`{.action}.

![configureipv6](images/ipv6_information.png){.thumbnail}

#### Via les API OVHcloud <a name="viaapi"></a>

Une autre façon de récupérer les informations réseau de votre serveur est d'[utiliser l'API OVHcloud](/pages/manage_and_operate/api/first-steps).

Exécutez l'appel API suivant, en indiquant le nom interne du serveur (exemple : `ns3956771.ip-169-254-10.eu`) :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Veuillez noter que les "0" de tête peuvent être supprimés dans une passerelle IPv6.

Exemple :

IPv6_GATEWAY : `2607:5300:60:62FF:00FF:00FF:00FF:00FF` peut aussi être écrit comme `2607:5300:60:62FF:FF:FF:FF:FF`.

### Présentation du contenu

- [**1** Configuration sur ESXi](#configuration-esxi)
    - [**1.1** Configuration sur l'hote](#host)
    - [**1.2** Mise en place de la machine virtuelle](#virtualmachine)
    - [**1.3** Sélection d'une image](#image)
- [**2** Configuration sur Proxmox](#configuration-proxmox)
    - [**2.1** Configuration sur l'hote](#host)
    - [**2.2** Mise en place d'un conteneur](#container)
    - [**2.3** Mise en place de la machine virtuelle](#virtualmachine)
- [**3** Configuration sur Hyper-V](#configuration-hyperv)
    - [**3.1** Mise en place de la machine virtuelle](#configuration)
    - [**4.5** Configurer votre réseau](#network)
    - [**4.6** Sélectionner une période de facturation](#billing)


<a name="configuration-esxi"></a>

### Configuration sur ESXi

The first step is to create the virtual machine in Esxi.

Once you are connected to the ESXi dashboard, go to