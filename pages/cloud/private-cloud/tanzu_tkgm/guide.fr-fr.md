---
title: Installer Tanzu Kubernetes Grid
slug: tanzu-ce-install
excerpt: Intégrer Tanzu Kubernetes Grid à votre infrastructure OVHcloud
section: Tanzu
order: 02
---

**Dernière mise à jour le 26/08/2022**

## Objectif

**Ce guide vous permet d'installer Tanzu Kubernetes Grid sur votre cluster Hosted Private Cloud Powered by VMware**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation

VMware Tanzu Kubernetes Grid est est une plate-forme Kubernetes maintenu dans le cadre du support **Hosted Private Cloud Powered by VMware**.

Vous pouvez déployer ce produit sur votre infrastructure OVHcloud pour profiter de ses fonctionnalités et de son évolutivité.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir un identifiant actif dans vSphere
- Avoir un VLAN qui possède un accès à internet et un serveur DHCP.

## En pratique

Nous allons installer **VMware Tanzu Kubernetes Grid** dans un cluster PCC sur le VLAN10 qui a ces paramètres:

* **Lan** : `192.168.0.0/24`.
* **Etendue DHCP** : `192.168.0.50 -> 192.168.0.100`.
* **Passerelle** : `192.168.0.254`.

### Intégration du modèle OVA contenant le modèle de machine virtuelle **Tanzu KUBERNETES Grid** sous **Photon OS**

VMware fourni une machine virtuelle sous forme de modèle OVA qui contient tout les éléments pour faire fonctionner un noeud du cluster **Tanzu Kubernetes Grid**. 

Télécharger le fichier sur ce lien [TKGm 1.5.4](https://plik.fromsync.net/file/yMsZyou6CyYCqlQn/Es4foCOnmvvWBMsq/photon-3-kube-v1.22.9+vmware.1-tkg.1-06852a87cc9526f5368519a709525c68.ova), ensuite suivez ces instructions


Connectez-vous à votre console vSphere, faites un clic droit sur votre `cluster`{.action}, ensuite choisissez sur `Déployer un modèle OVF`{.action}.

![01 integrate TKGM OVA 01](images/01-integrate-tkgm-ova01.png){.thumbnail}

Sélectionnez `Fichier local`{.action} ensuite cliquez sur `TÉLÉCHARGER DES FICHIERS`{.action}.

![01 integrate TKGM OVA 02](images/01-integrate-tkgm-ova02.png){.thumbnail}

Choisissez le `fichier`{.action}, ensuite cliquez sur `Ouvrir`{.action}.

![01 integrate TKGM OVA 03](images/01-integrate-tkgm-ova03.png){.thumbnail}

Cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 04](images/01-integrate-tkgm-ova04.png){.thumbnail}

Laissez l'emplacement par défaut et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 05](images/01-integrate-tkgm-ova05.png){.thumbnail}

Choisissez le cluster et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 06](images/01-integrate-tkgm-ova06.png){.thumbnail}

Vérifiez vos informations et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 07](images/01-integrate-tkgm-ova07.png){.thumbnail}

Cochez `J'accepte tous les contrats de license`{.action} et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 08](images/01-integrate-tkgm-ova08.png){.thumbnail}

Sélectionnez un `Stockage partagé en NFS v3`{.action} et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 09](images/01-integrate-tkgm-ova09.png){.thumbnail}

Choisissez le réseau de destination sur `VLAN 10`{.action} ensuite cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 10](images/01-integrate-tkgm-ova10.png){.thumbnail}

Cliquez sur `TERMINER`{.action}.

![01 integrate TKGM OVA 11](images/01-integrate-tkgm-ova11.png){.thumbnail}

Allez sur l'onglet `Surveiller`{.action} et cliquez sur `Tâches`{.action}.

![01 integrate TKGM OVA 12](images/01-integrate-tkgm-ova12.png){.thumbnail}

attendez que Les tâches `Déployer un modèle OVF` et `Importer un modèle OVF` soient terminées.

![01 integrate TKGM OVA 13](images/01-integrate-tkgm-ova13.png){.thumbnail}

Faites un clic droit sur la `Machine virtuelle déployée`{.action} et choisissez l'option `Convertir au modèle`{.action} depuis le menu `Modèle`{.action}.

![01 integrate TKGM OVA 14](images/01-integrate-tkgm-ova14.png){.thumbnail}

Répondez `OUI`{.action}.

![01 integrate TKGM OVA 15](images/01-integrate-tkgm-ova15.png){.thumbnail}

Allez dans les `Modèles`{.action} pour voir le modèle créé. Ce modèle sera utilisé lors du déploiement du cluster **Tanzu Kubernetes Grid**.

![01 integrate TKGM OVA 16](images/01-integrate-tkgm-ova16.png){.thumbnail}


### Installation de la machine virtuelle **Bootstrap** fourni par OVHcloud


### Déploiement du cluster **Tanzu Kubernetes Grid** sur votre infrastructure 



## Aller plus loin

[Présentation de VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

[Documentation de VMware Tanzu Kubenetes Grid](https://https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Installation manuelle des outils de la machine virtuelle BOOTSTRAP](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

