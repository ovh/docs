---
title: Utiliser le Private Cloud au sein d’un vRack
slug: utiliser-le-private-cloud-au-sein-d-un-vrack
excerpt: Découvrez comment utilisez le vRack avec votre offre SDDC
legacy_guide_number: '7766915'
section: Services et options OVH
order: 02
---

**Dernière mise à jour le 31/01/2019**

## Objectif

Le vRack, c’est la possibilité de connecter différents services cloud d'[OVH.com](http://ovh.com/){.external-link}([Serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/){.external-link}[Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external-link}[Private Cloud - SDDC](https://www.ovh.com/fr/sddc/){.external-link}) entre eux, au sein d’un ou plusieurs réseaux privés sécurisés (VLAN).

**Ce guide explique comment le mettre en place**

## En pratique

### Espace client

Lors de la livraison de votre SDDC, la partie *datacenter* est déjà à l'intérieur d'un vrack.

![](images/vRackDatacenter.png){.thumbnail}

Il est possible de déplacer le *datacenter* de votre Private Cloud dans un autre vRack en cliquant sur le bouton `Déplacer`{.action}

### Client vSphere

Dans le client vSphere, vous pouvez retrouver les *VLANs* compatibles vRack dans le switch virtuel distribué (vds), lui-même situé dans le dossier **vrack**.

> [!success]
>
> Par défaut, OVH vous livre une infrastructure SDDC avec 11 VLANs (VLAN10 à VLAN20).
>

![](images/vRackVsphere.png){.thumbnail}

Il est possible de modifier leurs paramètres, ou d'en créer de nouveau en suivant le guide de [création de VxLAN](https://docs.ovh.com/fr/private-cloud/creation-vlan/){.external-link}.

Vous pourrez ensuite assigner ces *portgroup* sur les interfaces réseaux de vos machines virtuelles.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.