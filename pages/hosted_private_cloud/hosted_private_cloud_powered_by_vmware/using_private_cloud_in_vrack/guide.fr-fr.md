---
title: Utiliser le Hosted Private Cloud au sein d’un vRack
excerpt: Découvrez comment utilisez le vRack avec votre offre Hosted Private Cloud
updated: 2022-03-28
---

## Objectif

Le vRack, c’est la possibilité de connecter différents services cloud de OVHcloud entre eux, au sein d’un ou plusieurs réseaux privés sécurisés (VLAN).

**Ce guide explique comment mettre en place cette solution**

## Prérequis

- Avoir un service [vRack](https://www.ovh.com/fr/solutions/vrack/) dans votre compte ou en commander un si besoin
- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](/links/manager))

## En pratique

### Espace client

Lors de la livraison de votre service [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), la partie *datacenter* est déjà à l'intérieur d'un vRack. Pour accéder à la section vrack, allez dans la section `Bare Metal Cloud`{.action}, cliquez sur `Network`{.action}, puis sur `vRack`{.action}. Sélectionnez votre vRack dans la liste pour visualiser le contenu.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Il est possible de déplacer le *datacenter* de votre Hosted Private Cloud dans un autre vRack en cliquant sur le bouton `Déplacer`{.action}.

### Client vSphere

Dans le client vSphere, vous pouvez retrouver les *VLANs* compatibles vRack dans le switch virtuel distribué (vds), lui-même situé dans le dossier **vrack**.

> [!success]
>
> Par défaut, OVHcloud vous livre une infrastructure avec 11 VLANs (VLAN10 à VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Il est possible de modifier leurs paramètres, ou d'en créer de nouveau en suivant le guide de [création de VLAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan).

Vous pourrez ensuite assigner ces *portgroup* sur les interfaces réseaux de vos machines virtuelles.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
