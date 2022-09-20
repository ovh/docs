---
title: Liste des services et licences inclus
slug: available-services
excerpt: "Présentation des services et licences inclus dans l'offre Hosted Private Cloud powered by Nutanix"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 20/09/2022**

## Objectif

Cette page vous présente les licences et services Nutanix inclus dans l'offre Hosted Private Cloud powered by Nutanix

## Périmètre des licences et services Nutanix inclus dans l'offre Hosted Private Cloud powered by Nutanix

Seuls les licences et services Nutanix listés sur cette page sont disponibles dans l'offre Hosted Private Cloud powered by Nutanix.<br>
Si la licence ou le service que vous cherchez n'est pas disponible, nous vous invitons à consulter la [roadmap GitHub Hosted Private Cloud](https://github.com/ovh/hosted-private-cloud-roadmap/projects/3) en première intention.

Hosted Private Cloud powered by Nutanix propose deux pack de licences :

- **Nutanix Standard Pack**
- **Nutanix Advanced Pack** qui reprend les licences et services du **Nutanix Standard Pack** auxquelles viennent s'ajouter des licences et services supplémentaires pour supporter des usages plus avancés tels que la réplication plus performante, des sites multiples,des possibilités de chiffrement de données avancées et des options de plan de reprise d'activités. 

### Socle de licences et services communs aux deux packs de licences **Nutanix Standard** et **Nutanix Advanced**

Les licences et services communs aux deux packs de licences sont les suivants :

- **Nutanix Cloud Infrastructure (NCI)**, anciennement **Hybrid Cloud Infrastructure** 
    - **AHV Virtualization** : virtualisation intégrée dans NUTANIX ([présentation de Nutanix AHV](https://www.nutanix.com/products/ahv)).
    - **Nutanix Kubernetes Engine** : gestion des containers Kubernetes sous Nutanix, produit anciennement nommé **Karbon** ([présentation de Nutanix Kubernetes Engine](https://www.nutanix.com/products/karbon)).

- **Nutanix Cloud Manager(NCM)**, anciennement **Cloud Management** ([présentation de Nutanix Cloud Management](https://www.nutanix.com/products/cloud-manager/aiops)).
    - **Intelligent Operation**, anciennement **Prism Pro** : surveillance et prévision des besoins.
    - **Flow** : virtualisation et micro-segmentation du réseau ([présentation de FLOW](https://www.nutanix.com/products/flow)).

- **Nutanix Unified Storage**, anciennement **Unified Storage**.
    - **Volumes Block Storage** : stockage par bloc pour un accès en iSCSI, soit à l’intérieur d'un cluster Nutanix pour un usage particulier, soit à l'extérieur pour donner accès au stockage Nutanix à d'autres ordinateurs ou infrastructures virtualisées.

- **Framework utilities**
    + **X-ray** : ensemble d'outils de test et de benchmark sur les principales solutions d'hyperconvergences ([présentation Nutanix de X-Ray](https://www.nutanix.com/products/x-ray)).
    + **Move** :  outil de migration vers Nutanix ([présentation Nutanix de MOVE](https://www.nutanix.com/products/move)).
    + **LCM** : outil de mise à jour des clusters ([présentation de LCM](https://www.nutanix.com/products/life-cycle-manager)).

### Licences et services complémentaires disponibles avec le pack de licence **Nutanix Standard**

**Nutanix Standard** inclut la version **AOS Pro** de la brique **AOS Storage**, anciennement **AOS Distributed Storage**, qui permet de :

- gérer le stockage distribué;
- faire de l'orchestration avancée;
- de la réplication asynchrone avec un *RPO* (Recovery Point Objective) d'une heure.

### Licences et services supplémentaires disponibles avec le pack de licence **Nutanix Advanced**

**Nutanix Advanced** inclut la version **AOS Ultimate** de la brique **AOS Storage**, anciennement **AOS Distributed Storage**, qui ajoute, en plus de la version standard, les capacités suivantes :

- Une réplication avancée avec une meilleur résilience entre clusters :
    - **Nearsync Replication** avec un **RPO** à 20 secondes.
    - **Metro Availability** avec un **RPO** à 0 secondes et possible utilisation en continu.
    - **Sync Replication** avec un **RPO** à 0 secondes.
- et une meileure sécurité :
    - **Data-at-Rest Encryption** : chiffrement logiciel.
    - **Native KVM** : gestion des clés de chiffrement.

Pour plus d'informations sur les différentes versions d'**AOS**, consultez la page [Nutanix Options AOS](https://www.nutanix.com/products/software-options).

### En résumé

Ci-dessous se trouve un tableau récapitulatif des deux offres Nutanix OVHcloud :

| Nom de l'offre                | Catégorie du service                   | Fonctionnalité associée au service |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| **Nutanix Standard**          | **AOS Storage**                        | **AOS Pro**                       |               
|                               | **Nutanix Cloud Infrastructure (NCI)** | **AHV Virtualization**            |
|                               |                                        | **Nutanix Kubernetes Engine**     |   
|                               | **Nutanix Cloud Manager(NCM)**         | **Intelligent Operations**         | 
|                               |                                        | **Flow**                          |
|                               | **Nutanix Unified Storage**            | **Volumes Block Storage**         | 
|                               | **Framework Utilities**                | **X-ray**                         |
|                               |                                        | **Move**                          |
|                               |                                        | **Lcm**                           |
| **Nutanix Advanced**          | **AOS Storage**                        | **AOS Ultimate**                  |
|                               | **Nutanix Cloud Infrastructure (NCI)** | **AHV Virtualization**            |
|                               |                                        | **Nutanix Kubernetes Engine**     |   
|                               | **Nutanix Cloud Manager(NCM)**         | **Intelligent Operations**         | 
|                               |                                        | **Flow**                          |
|                               | **Nutanix Unified Storage**            | **Volumes Block Storage**         | 
|                               | **Framework Utilities**                | **X-ray**                         |
|                               |                                        | **Move**                          |
|                               |                                        | **Lcm**                           |

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
