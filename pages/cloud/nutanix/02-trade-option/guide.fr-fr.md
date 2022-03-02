---
title: Options Commerciales Nutanix OVHcloud
slug: trade-option
excerpt: "Présentation de l'offre commerciale de Nutanix"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 01/03/2022**

## Objectif

Présentation de l'offre commerciale d'OVHcloud.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation de l'offre commerciale Nutanix OVHcloud

OVHCloud propose deux formules pour les Offres HOSTED Private Cloud Nutanix :

* **Nutanix Standard Pack**
* **Nutanix Advanced Pack** avec les mêmes options que **Nutanix Standard Pack** avec d'autre options supplémentaire comme un réplication plus performantes, des possibilités de cryptage des données avancées et des options de plan de reprises d'activités. 

### détail de la partie commune aux deux offres

Les options qui sont communes aux deux offres OVHcloud sont les suivantes :

Produits faisant partie **Nutanix Cloud Infrastructure (NCI)** anciennement **Hybrid Cloud Infrastructure** 

- **AHV Virtualization** : Virtualisation intégrée dans NUTANIX [Présentation Nutanix AHV](https://www.nutanix.com/products/ahv)
- **Nutanix Kubernetes Engine** : Gestion des containers Kubernetes sous Nutanix produit anciennement nommé **Karbon** [Présentation Nutanix Kubernetes Engine](https://www.nutanix.com/fr/products/karbon)

Produits de la famille **Nutanix Cloud Manager(NCM)** anciennement **Cloud Management** [Présentation de Nutanix Cloud Management](https://www.nutanix.com/fr/products/cloud-manager/aiops)

- **Intelligent operation** anciennement **Prism Pro** : Surveillance et prévision des besoins
- **Flow** : virtualisation du réseau et micro-segmentation du réseau [Présentation de FLOW](https://www.nutanix.com/products/flow)

Produits Membre de **Nutanix Unified Storage** Anciennement **Unified Storage**

- **Volumes block storage** : stockage par bloc pour un accès en iSCSI soit à l'interieur d'un cluster Nutanix pour un usage particulier soit à l'extérieur pour donner accès au stockage à d'autres ordinateurs ou infrastructures virtualisées.

Produit Membre des **Framework utilities**

- **X-ray** : Ensemble d'outils de test et de benchmark des principales solutions d'hyperconvergences [Présentation Nutanix de X-Ray](https://www.nutanix.com/products/x-ray)
- **Move** :  Outil de migration vers Nutanix [Présentation Nutanix de MOVE](https://www.nutanix.com/products/move)
- **Lcm** : Outil de mise à jour des clusters [Présentation de LCM](https://www.nutanix.com/products/life-cycle-manager)

### Divergences entre la version **Nutanix Standard** et **Nutanix Advanced**

Les differences se situe au niveau d'**AOS Storage** anciennement **AOS Distributed Storage**

**Nutanix Standard** utiliser la version **AOS Pro** qui permet de :
- Gérer le stockage distribué
- Faire de l'orchestration avancé
- De la réplication Asynchrone avec un RPO (Recovery Point Objective) d'une heure

**Nutanix Advanced** utilise la version **AOS Ultimate** qui permet en plus des options standard de :
- Permettre une réplication avancée avec une meilleur resilience entre cluster
    + **Nearsync replication** avec un RPO à 20 secondes
    + **Metrosync replication** avec un RPO à 1 seconde
- d'avoir Une meileure sécurité
    + **Software encryption at rest** cryptage logiciel
    + **Native KVM** gestion des clé de cryptage   

Pour plus d'informations sur les différentes versions d'**AOS** [Nutanix Options AOS](https://www.nutanix.com/fr/products/software-options)


## Aller plus loin


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
