---
title: "Politique de réversibilité du produit AI Managed Container "
updated: 2025-07-10
---

## Objectif

Ce document est la politique de réversibilité du produit AI Managed Container couvrant l’offre commerciale d’OVHcloud AI Deploy et AI Training.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Déploiement et gestion de containers OCI | Déploiement de modèles d’IA ou workloads via des images Docker/OCI standards, orchestrés sur un cluster Kubernetes natif ou API compatible | OCI, Docker, YAML, JSON | **Entrante** : import direct d’images OCI/Docker via API, CLI (docker, kubectl, helm, etc.), ou via pipeline CI/CD. <br>**Sortante** : export des images OCI/Docker, manifests YAML/JSON, et configurations, utilisables sur tout cluster Kubernetes ou plateforme OCI. | [Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image) |
| Utilisation standard d’API | Gestion des workloads, services, configurations et monitoring via API Kubernetes (kubectl, Helm, etc.) | YAML, JSON, OCI | **Entrante** : déploiement direct de manifests, charts, modèles IA via API standard. <br>**Sortante** : export des manifests, charts et configurations via kubectl utilisables sur tout cluster Kubernetes compatible. | [Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image) |
| Registry d’images OCI/Docker | Utilisation de registries publics/privés pour des images de containers et des modèles IA | OCI, Docker | **Entrante** : pull/extraction d’images depuis tout registry compatible. <br>**Sortante** : push/export des images vers tout autre registry compatible. | [Portfolio of AI apps and models](/pages/public_cloud/ai_machine_learning/deploy_guide_05_app_portfolio) |
| Utilisation d’API, CLI et Infrastructure as Code | Déploiement, gestion et automatisation via l'API OVHcloud, CLI ou Infrastructure as Code (Terraform) | YAML, JSON, HCL | **Entrante** : configurations, scripts et templates. <br>**Sortante** : export des scripts, templates et configurations qui sont réutilisables sur d’autres environnements cibles | [Caractéristiques, capacités et limites](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Gestion des accès et secrets | Modèle RBAC et gestion des secrets de Kubernetes ou utilisation  des solutions OVHcloud | YAML, JSON | **Entrante** : adaptation des rôles, secrets et permissions à l’environnement  <br>**Sortante** : export des configurations, adaptation nécessaire selon l’environnement cible | [AI Training - Premiers pas](/pages/public_cloud/ai_machine_learning/training_guide_02_howto_submit_job) |
| Auto-scaling et load balancing managés | Auto-scaling horizontal/vertical, load balancing OVHcloud intégré | YAML, JSON | **Entrante** : adaptation des paramètres d’auto-scaling et loadbalancing dans l’environnement  <br>**Sortante** : export des configurations, adaptation à l’auto-scaling et loadbalancing dans l’environnement cible | [AI Deploy - Stratégies de mise à l'échelle (EN)](/pages/public_cloud/ai_machine_learning/deploy_guide_04_scaling_strategies) |
| Monitoring et logging intégrés | Supervision intégrée (Prometheus, Grafana, Loki, etc.) via services managés OVHcloud | Prometheus metrics, logs, JSON | **Entrante** : adaptation des dashboards et des agents  <br>**Sortante** : export des métriques/logs et reconfiguration dans le nouvel environnement | [AI Deploy - Caractéristiques, capacités et limites (EN)](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities) <br><br>[AI Training - Caractéristiques, capacités et limites (EN](/pages/public_cloud/ai_machine_learning/training_guide_01_capabilities/) |
| Stockage persistant managé | Intégration Block storage,Object Storage OVHcloud, classes de stockage spécifiques | PVC, YAML, JSON | **Entrante** : adaptation des PersistentVolumeClaims à l'environnement. <br>**Sortante** : export des données via snapshot. Export, adaptation des volumes à la cible (ex : migration via CSI driver ou rsync)  | [AI Deploy - Caractéristiques, capacités et limites (EN)](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Infrastructure as a code | Déploiement automatisé via modules Terraform spécifiques à OVHcloud | NA | **Entrante** : adaptation des scripts <br>**Sortante** : réécriture nécessaire des configurations Terraform dans le nouvel environnement. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrante** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortante** : commande et configuration un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Le produit s’appuie sur des clusters Kubernetes managés, avec orchestration complète des workloads IA (déploiement, scaling, monitoring). Les architectures supportent l’auto-scaling horizontal et vertical, le load balacing intégré, la haute disponibilité, l’intégration GPU/CPU pour l’entraînement et l’inférence et l’accès à des services de stockage persistant (Block storage/Object Storage). L’intégration CI/CD, la gestion multi-modèles et la gouvernance des accès sont natives.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

La facturation est à l'usage et sans engagement. Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation immédiatement. Les crédits OVHcloud associés ne sont pas transférables. Une fois le service résilié, OVHcloud libère ses ressources, rendant impossible la récupération des données. Il incombe au client d’exporter ses configurations, manifests et images avant suppression, car leur effacement est irréversible.

## Conservation des données après résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud supprime définitivement toutes les images, modèles, logs, métriques et configurations stockés sur son environnement. Les sauvegardes automatiques et logs sont également supprimés. Il est donc impératif d’exporter toutes les données nécessaires avant suppression, aucune restauration n’étant possible après ces actions.

