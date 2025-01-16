---
title: 'Assigner une adresse MAC virtuelle à une Additional IP'
excerpt: 'Découvrez comment créer une adresse MAC virtuelle et comment l’associer à une Additional IP'
updated: 2024-12-13
---

## Objectif

OVHcloud vous permet d’associer une adresse MAC virtuelle à une adresse IP, afin de pouvoir mettre en place des machines virtuelles avec une configuration bridge sur votre serveur.

**Ce guide vous explique comment créer une adresse MAC virtuelle et comment l’associer à une adresse Additional IP.**

## Prérequis

- Posséder [un serveur dédié](/links/bare-metal/bare-metal).
- Disposer d'une [adresse Additional IP](/links/network/additional-ip) ou un bloc d’Additional IP (RIPE).
- Être connecté à l'[espace client OVHcloud](/links/manager) ou à [l'API OVHcloud](/links/api).
- Votre serveur doit supporter les MAC virtuelles. Consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) afin de le déterminer.

> [!warning]
> - Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about). Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.
>
> - Les serveurs Advance de troisième génération (équipés de processeurs EPYC 4004 Series) supportent 32 vMACs différentes.
>
> - Cette fonctionnalité sera disponible sur les gammes Scale et High Grade au cours de l'année 2025.

> [!primary]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

## En pratique

### Assigner une adresse MAC

> [!warning]
>
> Si un bloc IP a été déplacé dans le vRack, il n’est plus assigné à un serveur physique à ce titre, il n’est plus possible d’assigner une MAC virtuelle à une IP.
>

#### Via l'espace client OVHcloud

Une fois connecté dans l'[espace client OVHcloud](/links/manager), cliquez sur le menu `Bare Metal Cloud`{.action}, puis ouvrez la section `Network`{.action}. Cliquez ensuite sur `IP`{.action}.

Cliquez sur l'onglet `Additional IP`{.action}.

![IP](images/manageIPs2022.png){.thumbnail}

Localisez ensuite votre adresse Additional IP (ou votre bloc) dans la liste, puis cliquez sur le bouton `...`{.action} pour afficher la liste des options.

![IP](images/addvmac.png){.thumbnail}

Lorsque la boîte de dialogue « Ajouter une MAC virtuelle » apparaît, sélectionnez un type dans la liste déroulante, entrez un nom de machine virtuelle, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> **Type** : il s'agit du type d’adresse MAC virtuelle (« VMware » sera une adresse MAC faite pour le système VMware ESXi tandis qu'« ovh » conviendra à tous les autres types de systèmes de virtualisation).
>
> **Nom de la machine virtuelle** : il s'agit du nom souhaité pour l’adresse MAC virtuelle, pour retrouver ensuite plus facilement ce couple IP/MAC.
>

![IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> N’oubliez pas d’assigner l’adresse MAC virtuelle créée lors de la configuration de votre machine virtuelle.
> 

#### Via l'API OVHcloud

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Supprimer une adresse MAC

> [!warning]
>
> La suppression d'une adresse MAC est définitive, aucune récupération ultérieure ne sera possible.
> 

#### Via l'espace client OVHcloud

Pour supprimer une adresse MAC virtuelle associée à une Additional IP, connectez-vous dans un premier temps à votre [espace client](/links/manager), cliquez sur le menu `Bare Metal Cloud`{.action}, puis ouvrez la section `Network`{.action}. Cliquez ensuite sur `IP`{.action}. Sélectionnez le serveur concerné afin que l’Additional IP (ou le bloc d’IP) qui y sont attachées apparaissent.

Pour finir, cliquez sur le bouton `...`{.action} à droite puis cliquez sur `Supprimer la MAC virtuelle`{.action}.

#### Via l'API OVHcloud

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## FAQ

- **Que se passe-t-il si je déplace un bloc avec des vMACs sur un serveur Advance de troisième génération (équipé d'un processeur EPYC 4004 Series) possédant déjà 32 vMACs ?**

Le bloc ne sera pas déplacé.

Exemple : si vous tentez de déplacer un bloc de 4 IPs avec des vMACs différentes attachées sur un serveur ayant déjà 30 vMACs le bloc ne sera pas déplacé car le total de vMACs serait supérieur aux 32 vMACs autorisées.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).