---
title: Utiliser le Hosted Private Cloud au sein d’un vRack
slug: hosted-private-cloud-vrack
excerpt: Découvrez comment utilisez le vRack avec votre offre Hosted Private Cloud
section: Services et options OVHcloud
order: 02
---

**Dernière mise à jour le 31/12/2021**

## Objectif

Le vRack, c’est la possibilité de connecter différents services cloud de OVHcloud entre eux, au sein d’un ou plusieurs réseaux privés sécurisés (VLAN).

**Ce guide explique comment le mettre en place**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))

## En pratique

### Espace client

Lors de la livraison de votre service [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), la partie *datacenter* est déjà à l'intérieur d'un vRack.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Il est possible de déplacer le *datacenter* de votre Hosted Private Cloud dans un autre vRack en cliquant sur le bouton `Déplacer`{.action}

### Client vSphere

Dans le client vSphere, vous pouvez retrouver les *VLANs* compatibles vRack dans le switch virtuel distribué (vds), lui-même situé dans le dossier **vrack**.

> [!success]
>
> Par défaut, OVHcloud vous livre une infrastructure avec 11 VLANs (VLAN10 à VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Il est possible de modifier leurs paramètres, ou d'en créer de nouveau en suivant le guide de [création de VxLAN](../creation-vlan-vxlan/).

Vous pourrez ensuite assigner ces *portgroup* sur les interfaces réseaux de vos machines virtuelles.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
