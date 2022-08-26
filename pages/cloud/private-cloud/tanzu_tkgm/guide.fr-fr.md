---
title: Installer Tanzu Kubernetes Grid
slug: tanzu-ce-install
excerpt: Intégrer Tanzu Kubernetes Grid à votre infrastructure OVHcloud
section: Tanzu
order: 02
---

**Dernière mise à jour le 26/08/2022**

## Objectif


Vous pouvez déployer ce produit sur votre infrastructure OVHcloud pour profiter de ses fonctionnalités et de son évolutivité.

VMware Tanzu Kubernetes Grid est est une plate-forme Kubernetes maintenu dans le cadre du support **Hosted Private Cloud Powered by VMware**
Vous pouvez déployer ce produit sur votre infrastructure OVHcloud pour profiter de ses fonctionnalités et de son évolutivité.

**Ce guide vous permet d'installer Tanzu Kubernetes Grid sur votre cluster Hosted Private Cloud Powered by VMware**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir un identifiant actif dans vSphere
- Avoir un Vlan qui possède un accès à internet et un serveur DHCP.

## En pratique

Nous allons installer VMware Tanzu Kubernetes Grid sur un cluster PCC sur le VLAN10 qui a ces paramètres:

* **Lan** : `192.168.0.0/24`
* **Etendue DHCP** : `192.168.0.50 -> 192.168.0.100`
* **Passerelle** : `192.168.0.254`

### Intégration du modèle OVA contenant le modèle de machine virtuelle **Tanzu KUBERNETES Grid** sous **Photon OS**

### Déployement de la machine virtuelle **Bootstrap** fourni par OVHcloud

### Déploiement du cluster TANZU sur votre infrastructure 


## Aller plus loin

[Présentation de VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
