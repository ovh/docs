---
title: 'Utiliser le plugin OVHcloud dans vSphere'
slug: plugin-private-cloud-ovh
excerpt: "Découvrez comment utiliser le plugin OVHcloud afin d'ajouter des ressources dédiées à votre infrastructure"
section: 'Fonctionnalités OVHcloud'
---

**Dernière mise à jour le 15/11/2021**

## Objectif

Le plugin OVHcloud vous permet d'ajouter, en quelques minutes, des ressources dédiées à votre infrastructure.

**Découvrez comment utiliser le plugin OVHcloud.**

## Prérequis

- Posséder une offre [Hosted Private Cloud OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Accéder à l’interface de gestion vSphere.

## En pratique

Deux ressources dédiées sont proposées en facturation horaire :

- les serveurs hôtes ;
- les datastores.

Depuis le client web vSphere, il suffit de vous rendre dans la partie "Host and Cluster" et de développer l'arborescence de gauche. Vous accédez alors aux menus du plugin via l'onglet `Configure`{.action} du datacenter ou du cluster.

Le menu `Add Host`{.action} est consacré aux serveurs hôtes. Il affiche leurs détails techniques et permet de les commander.

![OVHcloud Plugin - ajouter des hôtes](images/Plugin01.jpg){.thumbnail}

La commande de datastores supplémentaires s'effectue, elle, dans le menu `Add Storage`{.action}.

![OVHcloud Plugin - ajouter des datastores](images/Plugin02.jpg){.thumbnail}

À noter qu'il existe une alternative pour accéder à ces menus. En effet, vous pouvez aussi effectuer un clic droit sur le datacenter ou le cluster de l'infrastructure, puis choisir `OVHcloud`{.action}.

![Option OVH Hosted Private Cloud](images/Plugin03.jpg){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
