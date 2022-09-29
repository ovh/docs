---
title: Gestion des volumes permanents dans Tanzu Kubernetes Grid
slug: tanzu-tkgm-persistent-volumes
excerpt: Comment déployer une application dans Tanzu Kubernetes Grid avec des volumes permanents 
section: Tanzu
order: 05
---

**Dernière mise à jour le 21/09/2022**

## Objectif

**Ce guide vous permet de gérer les volumes persistants sur un cluster Tanzu Kubernetes Grid**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir un identifiant actif dans vSphere.
- Avoir déployé le cluster de **Workload** **TKG** à l'aide de ce guide [Administrer Tanzu Management Cluster Grid](https://docs.ovh.com/fr/private-cloud/tanzu-tkgm-management).
- Avoir un VLAN qui possède un accès à internet et un serveur DHCP.
    

### Présentation

Les volumes persistents servent à conserver des données de manière permanente sur un cluster Kubernetes, ces volumes sont stockés dans des fichier VMDK qui se trouvent dans le dossier FCD à la racine du VMFS ou a été déployé le cluster de *WorkLoad*.

-> Rajouter une copie d'écrans du dossier

Il est possible de créer des **Storage class** qui utilisent une autre dossier que le dossier par défaut.

## En pratique

### Affichage des storage class existant

### Création d'un storage class sur un autre VMFS

### Création d'une application utilisant un volume persistant



## Aller plus loin

[Présentation de Tanzu Kubernetes Grid au sein d'OVHcloud](https://docs.ovh.com/fr/private-cloud/tanzu-tkgm-installation)

[Installer Tanzu Kubernetes Grid](https://docs.ovh.com/fr/private-cloud/tanzu-tkgm-installation)

[Administrer Tanzu Management Cluster Grid](https://docs.ovh.com/fr/private-cloud/tanzu-tkgm-management)

[Présentation de VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

[Documentation de VMware Tanzu Kubenetes Grid](https://https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Installation manuelle de l'outil CLI pour le déploiement de Tanzu Kubernetes GRID](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

