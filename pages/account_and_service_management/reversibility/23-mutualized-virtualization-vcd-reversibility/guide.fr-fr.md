---
title: "Politique de réversibilité du produit Managed Mutualized Virtualization "
updated: 2025-07-15
---

## Objectif

Ce document décrit la politique de réversibilité du produit Managed Mutualized Virtualization correspondant à l’offre commerciale d’OVHcloud Public VCF-as-a-Service.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Images VM standards  | Import et export d’images VM aux formats standards pris en charge par l’hyperviseur OVF | OVF | **Entrante** : import d’images via l’API ou l’interface utilisateur <br>**Sortante** : export des images VM, réutilisables sur tout environnement compatible | [Les concepts fondamentaux de Public VCF-as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) <br><br>[Public VCF-as-a-Service - Migration depuis VMware vSphere on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) <br><br>[OVF Tool](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_tool) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Gestion avec l’API OVHcloud | Gestion des VM via API | JSON, YAML, scripts | **Entrante** : déploiement, gestion et import automatisés <br>**Sortante** : export des configurations, scripts et automatisations utilisables sur d'autres plateformes | [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) |
| Sauvegarde et restauration manuelle | Snapshots, sauvegardes et restaurations à la demande via interface utilisateur ou API | Snapshots, images disques | **Entrante** : import d’image VM standard <br>**Sortante** :  Pas d’accès aux fichiers natifs de sauvegarde. L’export n’est pas possible dans un nouvel environnement d’hébergement | [Sauvegardes avec Veeam et restaurations](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Gestion des réseaux virtuels | Configuration réseaux (subnets) spécifique à OVHcloud | NA | **Entrante** : adaptation des configurations réseau à l’environnement OVHcloud <br>**Sortante** : pas d'export possible des configurations. Prendre note de l’architecture et la reproduire dans l’environnement cible | [Public VCF-as-a-Service - Concepts réseaux et bonnes pratiques](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts) <br><br>[Public VCF-as-a-Service - Création de composants réseaux via Public VCF as-a-Service]() |
| Administration et monitoring | Gestion des règles de sécurité, des utilisateurs, des groupes et surveillance de l’infrastructure| NA | **Entrante** : interfaces et fonctionnalités disponible par défaut <br> **Sortante** : l’export des règles n’est pas possible. Commande et configuration des outils dans l’environnement cible | [Les concepts fondamentaux de Public VCF-as-a-Service ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)<br><br>[Public VCF-as-a-Service - Découvrez comment utiliser l'interface utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud | N/A | **Entrante** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise <br> **Sortante** : Commande et configuration d'une solution anti-DDoS auprès du nouveau fournisseur | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Le produit s’appuie sur un hyperviseur VMware, permettant l’exécution de VM isolées sur des hôtes physiques mutualisés. L’architecture supporte la virtualisation complète, la migration à chaud des VM, l’allocation dynamique des ressources (CPU, RAM, stockage), la gestion avancée du réseau (segment GENEVE) et la sauvegarde de snapshots à la demande. Les VM peuvent exécuter divers OS (Linux, Windows et BSD). 

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

La facturation est mensuelle et sans engagement de durée. Aucun frais de résiliation spécifique n’est appliqué. La suppression du service arrête la facturation à la fin de la fin de la période en cours. Les crédits OVHcloud éventuellement associés ne sont pas transférables. Il incombe au client d’exporter ses données, images, snapshots et configurations avant suppression, car la suppression est irréversible.

## Conservation des données après résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud supprime définitivement toutes les données, images, snapshots et configurations des VM mutualisées. Les sauvegardes automatiques sont également supprimées. Il est donc impératif d’exporter toutes les données nécessaires avant suppression. Aucune restauration n’étant possible après coup.

