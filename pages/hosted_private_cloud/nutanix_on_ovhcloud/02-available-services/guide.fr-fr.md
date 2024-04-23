---
title: Liste des licenses incluses
excerpt: "Présentation des licences incluses dans l'offre Nutanix on OVHcloud packagée"
updated: 2024-04-19
---

## Objectif

Cette page vous présente les licences incluses dans l'offre Nutanix on OVHcloud packagée.

## Périmètre des licences incluses dans l'offre Nutanix on OVHcloud packagée

Seules les licences détaillées dans ce guide sont disponibles dans l'offre Nutanix on OVHcloud packagée.
Si la licence ou le service que vous recherchez n'est pas disponible, nous vous invitons à consulter la [roadmap GitHub](https://github.com/orgs/ovh/projects/16/views/1?sliceBy%5Bvalue%5D=Nutanix+on+OVHcloud) pour connaître les disponibilités futures. Et dans le cas d'un besoin immédiat, nous vous recommandons de considérer l'offre Nutanix on OVHcloud BYOL.

Au sein de l'offre packagée, OVHcloud propose trois packs (Starter, Pro et Ultimate) qui contiennent les packs de licences de la Nutanix Cloud Platform (packs NCP Starter, NCP Pro ou NCP Ultimate), étudiés par Nutanix pour proposer un assemblage de fonctionnalités cohérentes pour les cas d'usage les plus courants.

Chaque pack NCP est la combinaison des licences :

- **Nutanix Cloud Infrastructure (NCI)**, en version Pro ou Ultimate : la suite logicielle en charge des ressources infrastructures du cluster (stockage, compute, virtualisation, résilience etc..)
- **Nutanix Cloud Management (NCM)**, en version Pro ou Ultimate : la plateforme de gestion de votre infrastructure (gestion des coûts, automatisation, monitoring, sécurité etc..)

Les trois packs OVHcloud intègrent donc ces trois packs de licences NCP de la manière suivante :

- **Pack Starter**, composé de NCP Starter (NCI Pro + NCM Pro) : ce pack est pensé pour le déploiement d’un nouveau site de production à grande échelle et l’utilisation simultanée de plusieurs applications. Il permet également une gestion avancée en terme de gouvernance des coûts.
- **Pack Pro**, composé de NCP Pro (NCI Ultimate + NCM Pro) : ce pack est conçu pour les déploiements multisites nécessitant une gestion avancée en terme de sécurité, de résilience des applications et de gouvernance des coûts.
- **Pack Ultimate**, composé de NCP Ultimate (NCI Ultimate + NCM Ultimate) : ce pack inclut le nécessaire pour les déploiements multisites de grandes Entreprises et les cas d'usage les plus complexes. Il offre des process de gouvernance intégrés, des fonctionnalités de gestion de la sécurité et de la résilience avancées, et des scénarios d'automatisation des déploiements d'applications multiserveurs.

Retrouvez également le détail des licences de la Nutanix Cloud Platform [ici](https://www.nutanix.com/products/cloud-platform/software-options).

### Quelques fonctionnalités clés et différences entre les packs

Nous listons ici quelques fonctionnalités fréquemment recherchées et le pack de licence à privilégier :

| Fonctionnalité               | Disponible dans le(s) pack(s)   |
|------------------|--------|
| Réplication asynchrone entre clusters (RPO >= 1h)  | Starter, Pro et Ultimate    |
| Réplication avancée entre clusters (Metro, Sync, NearSync) | Pro et Ultimate    |
| Nutanix Kubernetes Engine | Starter si < 3 clusters Kubernetes par cluster. NCI Pro et Ultimate sinon. |
| Microsegmentation réseau | Pro et Ultimate |
| Data-at-Rest encryption | Ultimate |
| Outils de compliance sécurité | Ultimate |
| Workflows de gouvernance | Ultimate |
| Catalogue de déploiement d'application multi-vm en service autonome | Ultimate |

### En résumé

Ci-dessous se trouve un tableau récapitulatif des licences incluses dans l'offre Nutanix on OVHcloud packagée :

![Resumé licences](images/recap.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
