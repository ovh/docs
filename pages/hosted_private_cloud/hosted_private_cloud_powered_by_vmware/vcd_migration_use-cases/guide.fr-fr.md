---
title: 'VMware Cloud Director - Audit des cas particuliers de migration vers VCD'
excerpt: 'Découvrez les méthodes d'examen des scénarios difficiles au sein de vos services vSphere/vCenter managé OVHcloud, en préparation à une migration vers VCD'
updated: 2024-07-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet et mis à jour à l'avenir.
> 

## Objectif

**L'objectif de ce guide est d'auditer les cas particuliers vSphere managé on OVHcloud qui peuvent poser problèmes pour une migration vers VCD.**

## Prérequis

- Posséder un produit Hosted Private Cloud managé on OVHcloud.
- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.
- Ne pas utiliser les solutions de sauvegarde Zerto.
- Ne pas nécessiter une certification PCI-DSS, SNC, HDS.
- Avoir accès à votre vSphere managé on OVHcloud [interface web](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion) pour lancer les solutions si besoin.
- Ne pas avoir plusieurs datacentres avec votre offre vSphere managé on OVHcloud.

## En pratique

> [!warning]
> 
> Attention cet audit est obligatoire avant toute migration possible vers VCD on OVHcloud.
>

Ce guide pratique a pour but de vous fournir des informations sur le processus de la migration de vos services Hosted Private Cloud vSphere/vCenter managé on OVHcloud vers un écosystème VMware Cloud Director on OVHcloud.

Ce document détaille également les prérequis à la migration et le cas échéant, vous explique comment vous conformer à ceux-ci.

### Étape 1 - Les prérequis et cas particuliers (obligatoire)

Quels sont les cas d’usages spéciaux et solutions à vos usages vSphere managé on OVHcloud pour migrer vers VCD ?

Suite à la vérification de ces prérequis, la migration de vos VMs sera effectuée à chaud et entièrement opérée par les équipes OVHcloud.

Ce déplacement à chaud permettra de limiter au minimum les coupures de vos réseaux publics ou privés. Les réseaux privés sont les plus susceptibles d'être impactés, de l'ordre de quelques minutes de coupure.

#### Tableau - Cas particuliers

Le tableau ci-dessous vous présente chacun des points bloquants à la migration, ainsi que leur niveau de criticité, qu'il convient de mettre en conformité avant que la migration ne puisse débuter.

| **Étapes**   | **Avertissement** | **Cas d’usages spéciaux**                   | **Solutions**                                                      | **Commentaires**                                                                                                                                                                                                | **Référence à une documentation interne**                                                                                                                                                  |
|--------------|-------------------|---------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Étape 1**  | ❌                 | **Multi-vDC**                               | **Migrer les données vers un seul datacenter.**                    | - Ne peut être migré que s'il n'a qu'un seul datacenter dans un vSphere géré sur OVHcloud. Si ce n’est pas le cas, assurez-vous de migrer vos données dans le datacentre qui sera migré.                        | [Migration d'une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                             |
| **Étape 2**  | ❎                 | **FT (tolérance aux pannes)**               | **Désactiver la FT des VMs vSphere on OVHcloud.**                  |                                                                                                                       | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                |
| **Étape 3**  | ❎                 | **Rêgles d'affinité/anti-affinité DRS**     | **Reconstitution des règles d’affinités/anti-affinités dans VCD.** | - Pour être conservé, les règles d’affinité/anti-affinité DRS devront être recrées manuellement par vos soins dans VCD après migration. Si vous n'avez pas la necessité de les garder, vous pouvez les supprimer. | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                                          |
| **Étape 4**  | ❎                 | **Périphériques spéciaux (CD, DVD, etc..)** | **Débrancher tous les équipements spéciaux.**                      | - Tous les périphériques spéciaux (CD, DVD, etc.) doivent être retirés avant la migration, sinon ils seront retirés de force par le processus de migration et perdus.                                           |                                                                                                                                                                                            |
| **Étape 5**  | ❎                 | **Clusters de datastores**                  | **Supprimer les règles de clustering.**                            | - Les règles de clustering devront être supprimés avant la migration car cette notion n'existe pas côté VCD.                                                                                                    |                                                                                                                                                                                            |
| **Étape 6**  | ❎                 | **Sur-engagement mémoire**                  | **Revoir à la hauteur les ressources VCD.**                        | - Prévoyez plus de ressources côté VCD ou redimensionnez/optimisez les VMs avant la migration côté vSphere on OVHcloud. Car vous ne pourrez pas sur-engager (over commit) de ressources.                        | [Modification des ressources de la machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                              |
| **Étape 7**  | ❎                 | **Pools de ressources** (partage)           |                                                                    | - Les pools de ressources seront perdus après la migration car cette notion n'existe plus côté VCD.                                                                                                             |                                                                                                                                                                                            |
| **Étape 8**  | ❎                 | **Options de sécurité (PCI-DSS, HDS, SNC)** |                                                                    | - Ne peut pas être migré si le vSphere managé on OVHcloud est certifié PCI-DSS, HDS, SNC (vSphere on OVHcloud avec options de sécurité).                                                                        |                                                                                                                                                                                            |
| **Étape 9**  | ❌                 | **Encrypted VMs**                           | **Déchiffrer les VMs dans vSphere managé on OVHcloud.**            | - Impossible de migrer avec des données (VMs, vApp) chiffrées vSphere managé on OVHcloud.                                                                                                                       |                                                                                                                                                                                            |
| **Étape 10** | ❌                 | **Solutions de sauvegarde Zerto**           |                                                                    | - Si vous utilisez Zerto, vous ne pouvez pas migrer vers VCD pour le moment.                                                                                                                                    | [Mise en place de Zerto Virtual Replication entre deux centres de données OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service) |
| **Étape 11** | ❎                 | **Hosts / ZP (ZFS pool)**                   | **Libération des ressources (hôtes + ZP).**                        | - Les ressources (hôtes + ZP zpool) gratuites "Freespare" et à l'heure "Hourly" doivent être libérées avant la migration. <br/> Ou convertit en ressources mensuelles ("Monthly").                              | [Informations de facturation du Hosted Private Cloud](/pages/account_and_service_management/manage_billing_payment_and_services/facturation_private_cloud)                                 |
| **Étape 12** | ❌                 | **HCX**                                     |                                                                    | - Si tel est le cas, impossible de migrer vers VCD.                                                                                                                                                             |                                                                                                                                                                                            |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).
