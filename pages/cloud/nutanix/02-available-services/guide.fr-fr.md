---
title: Consulter la liste des services et licences inclus
slug: available-services
excerpt: "Présentation des services et licences inclus"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 07/03/2022**

## Objectif

Présentation des licences et services Nutanix inclus dans l'offre Hosted Private Cloud powered by Nutanix

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Périmètre des licences et services Nutanix inclus dans l'offre Hosted Private Cloud powered by Nutanix

Seules les licences et services Nutanix listés sur cette page sont disponibles dans l'offre Hosted Private Cloud powered by Nutanix. Si la licence ou le service que vous cherchez n'est pas disponible, nous vous invitons à consulter la roadmap [GitHub Hoster Private Cloud](https://github.com/ovh/hosted-private-cloud-roadmap/projects/3) en première intention.

Hosted Private Cloud powered by Nutanix propose deux pack de licences :

* **Nutanix Standard Pack**
* **Nutanix Advanced Pack** qui reprend les licences et services du **Nutanix Standard Pack** auxquelles viennent s'ajouter des licences et services supplémentaires pour supporter des usages plus avancés tels que la réplication plus performante, des possibilités de cryptage de données avancées et des options de plan de reprises d'activités. 

### Socle de licences et services communs aux deux packs de licences **Nutanix Standard** et **Nutanix Advanced**

Les licences et services communs aux deux packs de licences sont les suivants :

- **Nutanix Cloud Infrastructure (NCI)** anciennement **Hybrid Cloud Infrastructure** 
    + **AHV Virtualization** : Virtualisation intégrée dans NUTANIX [Présentation de Nutanix AHV](https://www.nutanix.com/products/ahv)
    + **Nutanix Kubernetes Engine** : Gestion des containers Kubernetes sous Nutanix produit anciennement nommé **Karbon** [Présentation de Nutanix Kubernetes Engine](https://www.nutanix.com/products/karbon).

- **Nutanix Cloud Manager(NCM)** anciennement **Cloud Management** [Présentation de Nutanix Cloud Management](https://www.nutanix.com/products/cloud-manager/aiops).
    + **Intelligent operation** anciennement **Prism Pro** : Surveillance et prévision des besoins.
    + **Flow** : virtualisation et micro-segmentation du réseau [Présentation de FLOW](https://www.nutanix.com/products/flow).

- **Nutanix Unified Storage** Anciennement **Unified Storage**.
    + **Volumes block storage** : stockage par bloc pour un accès en iSCSI soit à l’intérieur d'un cluster Nutanix pour un usage particulier soit à l'extérieur pour donner accès au stockage Nutanix à d'autres ordinateurs ou infrastructures virtualisées.

- **Framework utilities**

    + **X-ray** : Ensemble d'outils de test et de benchmark sur les principales solutions d'hyperconvergences [Présentation Nutanix de X-Ray](https://www.nutanix.com/products/x-ray).
    + **Move** :  Outil de migration vers Nutanix [Présentation Nutanix de MOVE](https://www.nutanix.com/products/move).
    + **LCM** : Outil de mise à jour des clusters [Présentation de LCM](https://www.nutanix.com/products/life-cycle-manager).

### Licences et services complémentaires disponibles avec le pack de licence **Nutanix Standard**

**Nutanix Standard** inclut la version **AOS Pro** de la brique **AOS Storage** anciennement **AOS Distributed Storage**, qui permet de :
- Gérer le stockage distribué
- Faire de l'orchestration avancé
- De la réplication Asynchrone avec un *RPO* (Recovery Point Objective) d'une heure

### Licences et services supplémentaires disponibles avec le pack de licence **Nutanix Advanced**

**Nutanix Advanced** inclut la version **AOS Ultimate** de la brique **AOS Storage** anciennement **AOS Distributed Storage**, qui ajoute, en plus de la version standard, les capacités suivantes :
- Une réplication avancée avec une meilleur résilience entre cluster
    + **Nearsync replication** avec un **RPO** à 20 secondes
    + **Metro Availability** avec un **RPO** à 0 secondes et possible utilisation en continue
    + **Sync replication** avec un **RPO** à 0 secondes
- et une meileure sécurité
    + **Software encryption at rest** cryptage logiciel
    + **Native KVM** gestion des clés de cryptage

Pour plus d'informations sur les différentes versions d'**AOS** [Nutanix Options AOS](https://www.nutanix.com/products/software-options).

### En résumé

Ci dessous se trouve un petit tableau récapitulatif des deux offres Nutanix OVHcloud :

| Offre commerciale OVHcloud    | Gamme de produits                      | Fonctionnalité                  |
| ----------------------------- | -------------------------------------- | ------------------------------- |
| **OVHcloud Nutanix Standard** | **AOS Storage**                        | **AOS Pro**                     |               
|                               | **Nutanix Cloud Infrastructure (NCI)** | **AHV Virtualization**          |
|                               |                                        | **Nutanix Kubernetes Engine**   |   
|                               | **Nutanix Cloud Manager(NCM)**         | **Intelligent operation**       | 
|                               |                                        | **Flow**                        |
|                               | **Nutanix Unified Storage**            | **Volumes block storage**       | 
|                               | **Framework utilities**                | **X-ray**                       |
|                               |                                        | **Move**                        |
|                               |                                        | **Lcm**                         |
| **OVHcloud Nutanix Advanced** | **AOS Storage**                        | **AOS Ultimate**                |
|                               | **Nutanix Cloud Infrastructure (NCI)** | **AHV Virtualization**          |
|                               |                                        | **Nutanix Kubernetes Engine**   |   
|                               | **Nutanix Cloud Manager(NCM)**         | **Intelligent operation**       | 
|                               |                                        | **Flow**                        |
|                               | **Nutanix Unified Storage**            | **Volumes block storage**       | 
|                               | **Framework utilities**                | **X-ray**                       |
|                               |                                        | **Move**                        |
|                               |                                        | **Lcm**                         |

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
