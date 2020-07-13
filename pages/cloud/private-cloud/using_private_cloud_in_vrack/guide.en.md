---
title: Using Private Cloud within a vRack
slug: using-private-cloud-with-vrack
excerpt: Find out how to use vRack with an SDDC solution
legacy_guide_number: '7766915'
section: OVH Features
order: 2
---

**Last updated 13th July 2020**

## Objective

Le vRack, c’est la possibilité de connecter différents services cloud de OVHcloud entre eux, au sein d’un ou plusieurs réseaux privés sécurisés (VLAN).

**Ce guide explique comment le mettre en place**

## Instructions

### OVHcloud Control Panel

Lors de la livraison de votre service [Hosted Private Cloud], la partie *datacenter* est déjà à l'intérieur d'un vRack.

![Data centre](images/vRackDatacenter.PNG){.thumbnail}

Il est possible de déplacer le *datacenter* de votre Private Cloud dans un autre vRack en cliquant sur le bouton `Déplacer`{.action}

### vSphere Client

Dans le client vSphere, vous pouvez retrouver les *VLANs* compatibles vRack dans le switch virtuel distribué (vds), lui-même situé dans le dossier **vrack**.

> [!success]
>
> Par défaut, OVHcloud vous livre une infrastructure avec 11 VLANs (VLAN10 à VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Il est possible de modifier leurs paramètres, ou d'en créer de nouveau en suivant le guide de [création de VxLAN](../creation-vlan/).

Vous pourrez ensuite assigner ces *portgroup* sur les interfaces réseaux de vos machines virtuelles.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
