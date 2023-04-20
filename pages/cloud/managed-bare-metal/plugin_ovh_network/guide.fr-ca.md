---
title: Utiliser le plugin OVH Network
routes:
    canonical: '/pages/cloud/private-cloud/plugin_ovh_network'
excerpt: Découvrez comment utiliser le plugin OVH Network sur votre offre Managed Bare Metal
legacy_guide_number: '7766560'
updated: 2020-11-18
---

**Dernière mise à jour le 18/11/2020**

## Objectif

Le plugin OVHcloud Network a été développé pour permettre une gestion plus ciblée des adresses IP associées à votre Managed Bare Metal.

**Ce guide explique comment utiliser le plugin OVHcloud Network sur votre Managed Bare Metal.**

## Prérequis

- Disposer d'une offre [Managed Bare Metal](https://www.ovhcloud.com/fr-ca/managed-bare-metal/){.external}.
- Être connecté à [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Un bloc d'adresse IP lié à votre Managed Bare Metal.
- Accès à l'interface vSphere.

## En pratique

Une fois connecté à l'interface vSphere, sélectionnez votre datacentre dans le menu de gauche. Dirigez-vous vers l'onglet `Configure`{.action} puis cliquez sur `Network`{.action} sous « OVHcloud » dans l'onglet de navigation de gauche pour afficher la section « Network summary ».

![Network summary](images/ovhcloudplugin_01.png){.thumbnail}

Vos blocs IP sont affichés ici ainsi que quelques informations de base les concernant. Cliquez sur un bloc IP pour voir toutes ses adresses IP répertoriées dans un tableau.

![Information about IPs and blocks](images/ovhcloudplugin_02.png){.thumbnail}

Vous pouvez vérifier le « reverse » de chaque adresse et sa cible. Certaines adresses seront marquées comme "Réservées". Veillez à ne pas utiliser ces **cinq adresses IP réservées à la configuration du bloc et à la haute disponibilité**, à savoir:

- la première IP, qui annonce votre bloc sur le routeur ;
- la dernière IP, qui est celle de **broadcast** ;
- l'avant-dernière, qui est votre **gateway** ;
- les deux IP avant la gateway, qui sont utilisées en tant que **HSRP** (Hot Standby Router Protocol) sur les routeurs.

> [!warning]
> Certaines configurations avec un pare-feu virtuel ne permettent pas de retracer les adresses MAC si le protocole ARP n'est pas autorisé.
>

Vous pouvez ensuite personnaliser le « reverse » de votre adresse IP dans ce tableau (lors de la configuration d'un serveur de messagerie, par exemple). Cliquez sur les trois points verticaux à gauche de l'adresse IP, puis sur `Edit Reverse`{.action}.

![Edit Reverse button](images/ovhcloudplugin_03.png){.thumbnail}

Entrez le « reverse » et cliquez sur `Confirm`{.action}.

Le nouveau  « reverse » sera alors affiché dans le tableau.

> [!primary]
>
> Ce processus de configuration est également accessible sur votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). 
> 

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
