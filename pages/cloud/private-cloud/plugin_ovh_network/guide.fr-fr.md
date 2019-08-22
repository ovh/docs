---
title: Utiliser le plugin OVH Network
slug: plugin-ovh-network
excerpt: Découvrez comment utiliser le plugin OVH Network sur votre offre Private Cloud
legacy_guide_number: '7766560'
section: Fonctionnalités OVH
order: 03
---

**Dernière mise à jour le 06/08/2018**

## Objectif

Le plugin OVH Network est développé par OVH. Son rôle est de vous offrir une gestion plus fine de l’ensemble des adresses IP associées à votre offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.

**Découvrez comment utiliser le plugin OVH Network sur votre offre Private Cloud.**

## Prérequis

* Posséder une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Posséder un bloc d'IP associé à votre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Accéder à l’interface de gestion vSphere.

## En pratique

Cliquez sur le menu `Host and Cluster`{.action}, puis choisissez un datacenter ou un cluster de l'infrastructure. Cliquez ensuite sur `Manage`{.action} et `OVH Network`{.action}.

![Plugin OVH Network](images/network_01.png){.thumbnail}

Vous arrivez dès lors dans la section `Summary`, qui récapitule les blocs d'IP possédés et les informations de base de chaque bloc.

![Informations sur les IP et les blocs](images/network_02.png){.thumbnail}

La partie **IP Blocks** liste l'ensemble des IP de votre bloc. Veillez à ne pas utiliser les **5 IP du bloc réservées** pour la configuration et la haute disponibilité de celui-ci, à savoir :

- la première IP, qui annonce votre bloc sur le routeur ;
- la dernière IP, qui est celle de **broadcast** ;
- l'avant-dernière, qui est votre **gateway** ;
- les deux IP avant la gateway, qui sont utilisées en tant que **HSRP** (Hot Standby Router Protocol) sur les routeurs.

![Blocs d'IP](images/network_03.png){.thumbnail}

Afin d'indiquer au plugin OVH que vos IP publiques sont déjà utilisées, il est nécessaire de réaliser une requête ARP (_arping_) depuis la ou les machines virtuelles utilisant ces adresses. Attention : certaines configurations avec un pare-feu virtuel ne permettent pas la remontée des adresses MAC si le protocole ARP n'est pas autorisé.

Vous pouvez ensuite configurer vos Reverse IP, par exemple pour un serveur e-mail. Ce paramétrage est aussi accessible depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et depuis les [API OVH](https://api.ovh.com/){.external}. Cliquez sur les trois points verticaux à gauche de l'IP, puis sur `Edit Reverse`{.action}.

![Bouton Edition Reverse](images/network_04.png){.thumbnail}

Saisissez le Reverse, puis validez avec `Confirm`{.action}.

![Édition du reverse](images/network_05.png){.thumbnail}

Celui-ci apparaît alors à droite de l'IP, dans la liste des IP du bloc.

![Édition des IP](images/network_06.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
