---
title: Utiliser votre infrastructure Managed Bare Metal au sein d’un vRack
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack'
excerpt: Découvrez comment utiliser le vRack avec votre offre Managed Bare Metal
updated: 2020-11-23
---

**Dernière mise à jour le 23/11/2020**

## Objectif

Le vRack, c’est la possibilité de connecter différents services cloud de OVHcloud entre eux, au sein d’un ou plusieurs réseaux privés sécurisés (VLAN).

**Ce guide explique comment le mettre en place**

## En pratique

### Espace client

Lors de la livraison de votre service [Managed Bare Metal](https://www.ovhcloud.com/fr-ca/managed-bare-metal/), la partie *datacenter* est déjà à l'intérieur d'un vRack.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Il est possible de déplacer le *datacenter* de votre infrastructure Managed Bare Metal dans un autre vRack en cliquant sur le bouton `Déplacer`{.action}

### Client vSphere

Dans le client vSphere, vous pouvez retrouver les *VLANs* compatibles vRack dans le switch virtuel distribué (vds), lui-même situé dans le dossier **vrack**.

> [!success]
>
> Par défaut, OVHcloud vous livre une infrastructure avec 11 VLANs (VLAN10 à VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Il est possible de modifier leurs paramètres, ou d'en créer de nouveau en suivant le guide de [création de VLAN](/pages/bare_metal_cloud/managed_bare_metal/vlan-creation).

Vous pourrez ensuite assigner ces *portgroup* sur les interfaces réseaux de vos machines virtuelles.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
