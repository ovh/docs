---
title: 'Comprehensive Guide to OVH Rancher'
excerpt: 'A complete guide including release calendar, supported versions, responsibility model, and lifecycle policies for OVH Rancher.'
updated: 2023-12-08
---

## Objectif

**Découvrez comment utiliser et gérer OVH Rancher avec notre documentation complète.**

## En pratique

### Étape 1 : Rancher Release Calendar

Le calendrier de publication des versions de Rancher est le suivant :

| Kubernetes version | Upstream release date | MKS release date | End of support | End of life |
|--------------------|-----------------------|------------------|----------------|-------------|
| 1.30               | 2024-04-17            | Q4-2024          | TBD            | TBD         |
| 1.29               | 2023-12-13            | 2024-03-25       | TBD            | TBD         |
| 1.28               | 2023-08-15            | 2023-12-06       | TBD            | TBD         |
| 1.27               | 2023-04-11            | 2023-08-31       | TBD            | TBD         |
| 1.26               | 2022-12-06            | 2023-05-09       | Q4-2024        | Q1-2025     |
| 1.25               | 2022-08-23            | 2022-12-08       | Q4-2024        | Q1-2025     |
| 1.24               | 2022-05-03            | 2023-08-19       | 2023-12-06     | 2024-06-19  |

*MKS release date :* Estimated date when this Kubernetes version is available for OVHcloud Managed Kubernetes Service.

*End of support :* For clusters running minor versions that have reached End of Support, OVHcloud will not provide any technical assistance and will advise you to upgrade your cluster to a supported version. Please note that versions that have reached their End of Support date are not available for MKS Cluster creation.

*End of life :* When a cluster is running a minor version that has reached its End of Life date, OVHcloud will auto-upgrade the cluster to the next minor version (n+1). For more information, see the MKS minor version lifecycle [link-to-put].

**Notes:**

The **Date format** follows the [international standard for numeric dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates). The dates listed by [quarter year](https://en.wikipedia.org/wiki/Calendar_year#Quarter_year) are estimates and will be updated once a specific date is known.

**TBD** abbreviation is used when a date is to be determined.

### Étape 2 : MKS Supported Version Matrix

Voici la matrice des versions supportées de MKS :

- Rancher 2.7.9 -> MKS 1.26
- Rancher 2.8.5 -> MKS 1.27 to 1.28

Pour plus de détails, consultez le [support matrix de SUSE](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-8-5/).

### Étape 3 : Responsibility Model

Le modèle de responsabilité pour le service Managed Kubernetes d'OVHcloud détaille les responsabilités partagées entre OVHcloud et le client. Ce modèle aide à alléger le fardeau opérationnel du client en clarifiant les rôles et les responsabilités pour diverses activités liées à l'installation, la gestion et la maintenance des clusters Kubernetes.

The RACI below details shared responsibilities between OVHcloud and the customer for the Managed Kubernetes service. This shared model can help relieve the customer’s operational burden.

#### RACI Definition

- **R**: Responsible for carrying out the process
- **A**: Accountable for the successful completion of the process
- **C**: Consulted during the process
- **I**: Informed of the results of the process

Pour plus de détails, consultez le modèle de responsabilité complet [ici](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-responsibility-model?id=kb_article_view&sysparm_article=KB0058760).

### Étape 4 : MRS Lifecycle Policies

OVHcloud Managed Kubernetes Service expose un Kubernetes conforme aux standards logiciels, tel que certifié par la CNCF. Les nouvelles versions stables sont régulièrement fournies par la CNCF. Les versions antérieures proposées par OVHcloud peuvent atteindre leur End-of-Sale (EoS) ou End-of-Life (EoL) en raison principalement du cycle de vie du support sous-jacent de la communauté Kubernetes. Cette politique aide les clients à comprendre le cycle de vie du service OVHcloud Managed Kubernetes, à anticiper et à préparer la transition vers les nouvelles versions.

Pour plus de détails, consultez les politiques de cycle de vie MRS [ici](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-eos-eol-policies?id=kb_article_view&sysparm_article=KB0049743).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
