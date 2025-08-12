---
title: "Capacités techniques et limites de Public VCF as-a-Service"
excerpt: "Découvrez les capacités techniques et les limites de Public VCF aaS (alias Public VCF as-a-Service)"
updated: 2025-05-13
---

## Objectif

**Ce guide explique les capacités techniques et les limites de Public VCF aaS (alias Public VCF as-a-Service), y compris les contraintes de ressources et les restrictions de configuration.**

## Prérequis

Avant de commencer, consultez les guides suivants pour mieux comprendre Public VCF as-a-Service :

- [Public VCF as-a-Service - Concepts fondamentaux](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [Public VCF as-a-Service - Concepts réseau](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [Création d'une VM sur Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-first-vm-creation)
- [Création de composants réseau via Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)

## En pratique

### Limitations générales

| Ressource | Standard | Advanced | Premium | Commentaires |
|-----------|---------|----------|---------|--------------|
| vCPU (par VM) | 32 | 32 | 32 | Nombre de vCPUs disponibles par VM. |
| RAM (par VM) | 128 Go | 128 Go | 128 Go | Quantité maximale de RAM par VM (min. 0,5 Go). |
| Cartes réseau (par VM) | 10 | 10 | 10 | Nombre maximal d'adaptateurs réseau par VM. |
| Edge Gateway (par organisation) | N/A | 5 | 5 | Nombre maximal d'Edge Gateways par organisation. |
| IP publiques (par vDC) | N/A | 2 | 2 | Nombre d’IP publiques disponibles par vDC. |
| Snapshots (par VM) | 1 | 1 | 1 | Nombre maximal de snapshots par VM. |
| VMs (par vApp) | 128 | 128 | 128 | Nombre maximal de VMs autorisées par vApp. |
| VMs (par organisation) | 2000 | 4000 | 4000 | Nombre maximal de VMs par organisation. |
| vApps (par organisation) | 10 000 | 10 000 | 10 000 | Nombre maximal de vApps par organisation. |

> **Remarque** : Lorsqu’un snapshot inclut la mémoire de la machine virtuelle, l’utilisation du stockage peut rapidement augmenter.
> Par exemple, si vous avez une VM avec 1 Go de RAM et un disque de 10 Go, et que vous créez un snapshot incluant la mémoire, l’espace de stockage utilisé sera le suivant :
> 10 Go (disque) + 1 Go (swap de la VM) + jusqu’à 10 Go (snapshot du disque) + 1 Go (snapshot de la mémoire) = **22 Go au total**.

### Limitations matérielles

| Ressource | Standard | Advanced | Premium | Commentaires |
|-----------|---------|----------|---------|--------------|
| Fréquence vCPU Min | 1 GHz | 1 GHz | 1 GHz | In Roadmap. |
| Fréquence vCPU Max | 3 GHz | 3 GHz | 3 GHz | Par défaut. |
| Stockage par VM (VMDK) | 1,5 To | 1,5 To | 1,5 To | Limite de stockage sur VMDK. |

## Limitations d’intégration avec des applications externes

### Solution de Backup

Avec Public VCF as-a-Service, vous ne pouvez pas utiliser d’outil de backup autre que notre outil managed Veeam for VCD. Référez-vous au guide suivant pour plus d'informations : [Public VCF as-a-Service - Sauvegarde avec Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).

### API VMware

Les produits tiers s'appuyant sur les API vSphere pour fonctionner (comme Naviko, Rubrik ou Zerto (liste non exhaustive)) ne sont actuellement pas utilisables dans le cadre du produit Public VCF as-a-Service.

### Certifications

Lors du lancement du service, aucune certification spécifique ne sera applicable au service Public VCF as-a-Service par OVHcloud.
Cependant, la prise en charge des certifications HDS, ISO27001, SOC2 ou PCI-DSS est un des objectifs de notre feuille de route.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez vos questions, donnez votre avis et échangez directement avec l’équipe en charge des services Hosted Private Cloud sur notre canal [Discord](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d'utilisateurs](/links/community).