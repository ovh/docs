---
title: "VMware Cloud Director - Audit des cas complexes de migration"
excerpt: "Découvrez les méthodes d'examen des scénarios les plus complexes au sein de vos services VMware on OVHcloud dans le but de vous préparer à migrer vers VCD"
updated: 2024-08-15
---


> [!primary]
>
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet et mis à jour à l'avenir.
>

## Objectif

**L’objectif est de fournir une liste des cas d’utilisation difficiles et des actions à mener pour une possible migration vers VCD.**

## Prérequis

- Posséder un produit Hosted Private Cloud managé on OVHcloud.
- Access au [control panel](/links/manager) OVHcloud.
- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.
- Ne pas utiliser les solutions de replication Zerto.
- Ne pas nécessiter une certification PCI-DSS, SNC, HDS.
- Ne pas avoir de données (VM, vApp) à migrer vers VCD sur plusieurs datacenters (cas multi-vDC, solution ci-dessous) avec votre offre de produit VMware on OVHcloud.

## En pratique

> [!warning]
>
> Attention cet audit est obligatoire avant toute migration possible vers VCD on OVHcloud.
>

Ce guide pratique a pour but de vous fournir des informations et des solutions sur le processus de migration de vos services VMware vSphere managé on OVHcloud vers un écosystème managé VMware Cloud Director on OVHcloud.

Ce document détaille également les prérequis pour chaque cas d'utilisation et le cas échéant, vous explique comment vous conformer à ceux-ci.

### Étape 1 - Prérequis et cas particuliers (obligatoire)

Une fois que vous aurez rempli ces exigences, les équipes d'OVHcloud migreront les VMs du datacenter vSphere principal en utilisant un chemin de migration à chaud.

Ce déplacement à chaud permettra de limiter au minimum les coupures de vos réseaux publics ou privés. Les réseaux privés sont les plus susceptibles d'être impactés, de l'ordre de quelques minutes de coupure.

##### Tableau - Cas particuliers

Le tableau ci-dessous vous présente chacun des points bloquants à la migration, ainsi que leur niveau de criticité, qu'il convient de mettre en conformité avant que la migration ne puisse débuter.

| **Étapes**&nbsp;  |  **Blocker**   |              **Cas d'utilisation**              | **Solutions**                                                                                                                                                         | **Informations complémentaires**                                                                                                                                                                                                        | **Aides et références**                                                                                                                                                                                                      |
|:-----------------:|:--------------:|:-----------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    **Étape 1**    |       ❌        |                  **Multi-vDC**                  | Migrer les VMs, vApp vers un seul datacenter.                                                                                                                         | - Ne peut être migré que s'il n'a qu'un seul datacenter. <br/> Si ce n’est pas le cas, assurez-vous avant, de transférer toutes vos données (VMs, vApp) dans le datacenter qui sera utilisé pour la migration par les équipes OVHcloud. | [Migration d'une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                                                               |
|    **Étape 2**    |                | 🚫 **VMware vSphere FT (tolérance aux pannes)** | Désactiver la FT VMware vSphere des VMs.                                                                                                                              |                                                                                                                                                                                                                                         | [Tolerance aux pannes VMware](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                                             |
|    **Étape 3**    |                |   ⚠️  **Règles d'affinité/anti-affinité DRS**   | Reconstitution des règles d’affinités/anti-affinités dans VCD.                                                                                                        | - Pour être conservé, les règles d’affinité/anti-affinité DRS devront être recrées manuellement par vos soins dans VCD après migration.                                                                                                 | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                                                                            |
|    **Étape 4**    |                | 📀 **Périphériques spéciaux (CD, DVD, etc..)**  | Débrancher tous les équipements spéciaux.                                                                                                                             | - Tous les périphériques spéciaux (CD, DVD, etc.) doivent être retirés avant la migration, sinon ils seront retirés de force par le processus de migration et perdus.                                                                   |                                                                                                                                                                                                                              |
|    **Étape 5**    |                |          🧹 **Clusters de datastore**           | Supprimer toutes les règles de clustering.                                                                                                                            | - Les règles de clustering devront être supprimés avant la migration car cette notion n'existe pas côté VCD.                                                                                                                            |                                                                                                                                                                                                                              |
|    **Étape 6**    |                |          🔄 **Sur-engagement mémoire**          | Prévoyez ou faites évoluer vos besoins en ressources dans VCD (côté control panel VCD). <br/> Ou optimisez vos besoins avant de migrer (côté control panel vSphere).  | - Car vous ne pourrez pas sur-engager (over commit) de ressources au sein de VCD, ce concept n'existe pas.                                                                                                                              | [Modification des ressources de la machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                                                |
|    **Étape 7**    |                |      🔗 **Pools de ressources (partage)**       | Pas de solution à ce jour.                                                                                                                                            | - Les pools de ressources seront perdus après la migration car cette notion n'existe plus côté VCD. Nous recommandons à la place l'utilisation des concepts de vApp au sein du control panel VCD on OVHcloud.                           | [Utilisation de vApps dans le control panel VCD on OVHcloud](https://docs.vmware.com/en/VMware-Cloud-Director/10.6/VMware-Cloud-Director-Tenant-Guide/GUID-AC48FB5E-4ADC-4835-AACE-B949B297A147.html)                        |
|    **Étape 8**    |       ❌        |        **Si certifié PCI-DSS, HDS, SNC**        | Certifier VCD.                                                                                                                                                        | - Ne peut pas être migré si vos charges de travail sont certifié PCI-DSS, HDS, SNC (options de sécurité).                                                                                                                               |                                                                                                                                                                                                                              |
|    **Étape 9**    |       ❌        |                **Encrypted VMs**                | Déchiffrer ou désactiver la politique de chiffrement pour les VMs.                                                                                                    | - Impossible d'effectuer la migration avec des VMs, vApp chiffrées.                                                                                                                                                                     | [Activation du chiffrement des machines virtuelles (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)                                                                           |
|   **Étape 10**    |       ❌        |       **Zerto (reprise après sinistre)**        | Pas de solution à ce jour.                                                                                                                                            | - Si vous utilisez Zerto (solution de replication de données pour la reprise d'activé en cas de désastre), vous ne pouvez pas migrer vers VCD pour le moment.                                                                           | [Mise en place de Zerto Virtual Replication entre deux centres de données OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)                               |
|   **Étape 11**    |                |            🆓 **Hosts + Datastore**             | Libération des ressources (hôtes + datastore).                                                                                                                        | - Les ressources (hôtes + datastore) gratuites "Freespare" et à l'heure "Hourly" doivent être libérées avant la migration. <br/> Ou convertit en ressources mensuelles ("Monthly").                                                     | [Informations de facturation du Hosted Private Cloud](/pages/account_and_service_management/manage_billing_payment_and_services/facturation_private_cloud)                                                                   |

- **Blocker** : Bloque toute migration possible vers VCD on OVHcloud.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](<https://discord.gg/ovhcloud>) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).
