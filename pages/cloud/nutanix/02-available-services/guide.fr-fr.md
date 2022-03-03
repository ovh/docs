---
title: Consulter la liste des services et licences inclus
slug: available-services
excerpt: "Présentation des services et licences inclus"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 03/03/2022**

## Objectif

Présentation de l'offre commerciale d'OVHcloud.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation de l'offre commerciale Nutanix OVHcloud

La solution de Nutanix OVHcloud n'inclut pas tous les produits des Offres Nutanix classiques (Pro et Ultimate). Seules celles qui apparaissent sur cette page sont disponibles.

OVHcloud propose deux choix de licences :

* **Nutanix Standard Pack**.
* **Nutanix Advanced Pack** avec les mêmes options que **Nutanix Standard Pack** et d'autres options supplémentaires comme une réplication plus performante, des possibilités de cryptage de données avancées et des options de plan de reprises d'activités. 

### Options communes aux deux offres

Les options qui sont communes aux deux offres OVHcloud sont les suivantes :

- **Nutanix Cloud Infrastructure (NCI)** anciennement **Hybrid Cloud Infrastructure** 
    + **AHV Virtualization** : Virtualisation intégrée dans NUTANIX [Présentation de Nutanix AHV](https://www.nutanix.com/products/ahv)
    + **Nutanix Kubernetes Engine** : Gestion des containers Kubernetes sous Nutanix produit anciennement nommé **Karbon** [Présentation de Nutanix Kubernetes Engine](https://www.nutanix.com/products/karbon).

- **Nutanix Cloud Manager(NCM)** anciennement **Cloud Management** [Présentation de Nutanix Cloud Management](https://www.nutanix.com/products/cloud-manager/aiops).
    + **Intelligent operation** anciennement **Prism Pro** : Surveillance et prévision des besoins.
    + **Flow** : virtualisation et micro-segmentation du réseau [Présentation de FLOW](https://www.nutanix.com/products/flow).

- **Nutanix Unified Storage** Anciennement **Unified Storage**.
    + **Volumes block storage** : stockage par bloc pour un accès en iSCSI soit à l'interieur d'un cluster Nutanix pour un usage particulier soit à l'extérieur pour donner accès au stockage Nutanix à d'autres ordinateurs ou infrastructures virtualisées.

- **Framework utilities**

    + **X-ray** : Ensemble d'outils de test et de benchmark sur les principales solutions d'hyperconvergences [Présentation Nutanix de X-Ray](https://www.nutanix.com/products/x-ray).
    + **Move** :  Outil de migration vers Nutanix [Présentation Nutanix de MOVE](https://www.nutanix.com/products/move).
    + **Lcm** : Outil de mise à jour des clusters [Présentation de LCM](https://www.nutanix.com/products/life-cycle-manager).

### Divergences entre la version **Nutanix Standard** et **Nutanix Advanced**

Les différences se situent au niveau d'**AOS Storage** anciennement **AOS Distributed Storage**.

**Nutanix Standard** utilise la version **AOS Pro** qui permet de :
- Gérer le stockage distribué.
- Faire de l'orchestration avancé.
- De la réplication Asynchrone avec un *RPO* (Recovery Point Objective) d'une heure.

**Nutanix Advanced** utilise la version **AOS Ultimate** qui permet en plus des options standards :
- Une réplication avancée avec une meilleur résilience entre cluster.
    + **Nearsync replication** avec un **RPO** à 20 secondes.
    + **Metro Availability** avec un **RPO** à 0 secondes et possible utilisation en continue.
    + **Sync replication** avec un **RPO** à 0 secondes.
- et une meileure sécurité
    + **Software encryption at rest** cryptage logiciel.
    + **Native KVM** gestion des clés de cryptage.   

Pour plus d'informations sur les différentes versions d'**AOS** [Nutanix Options AOS](https://www.nutanix.com/products/software-options).


## Aller plus loin


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
