---
title: 'VMware Cloud Director - Audit des cas particuliers de migration vers VCD'
excerpt: 'Découvrez les méthodes d'examen des scénarios difficiles au sein de vos services vSphere/vCenter managé OVHcloud, en préparation à une migration vers VCD'
updated: 2024-07-22
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

- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.

## En pratique

> [!warning]
> 
> Attention cet audit est obligatoire avant toute migration possible vers VCD on OVHcloud.
>

Ce guide pratique a pour but de vous fournir des informations sur le processus de la migration de vos services Hosted Private Cloud vSphere/vCenter managé vers un écosystème VMware Cloud Director on OVHcloud.

Ce document détaille également les prérequis à la migration et le cas échéant, vous explique comment vous conformer à ceux-ci.

### Étape 1 - Les prérequis et cas particuliers (obligatoire)

/// details | Quels sont les prérequis et étapes de vérification pour vos usages HPC avant de pouvoir migrer vers VCD ?

Suite à la vérification de ces prérequis, la migration de vos machines virtuelles sera effectuée à chaud et entièrement opérée par les équipes OVHcloud.

Ce déplacement à chaud permettra de limiter au minimum les coupures de vos réseaux publics ou privés. Les réseaux privés sont les plus susceptibles d'être impactés, de l'ordre de quelques minutes de coupure.

#### Tableau - Cas particuliers

Le tableau ci-dessous vous présente chacun des points bloquants à la migration, ainsi que leur niveau de criticité, qu'il convient de mettre en conformité avant que la migration ne puisse débuter.

| **Étapes**   | **Terminé** | **Avertissement** | **Cas d’usages spéciaux**                   | **Prérequis**                                                                                  | **Commentaires**                                                                                                                                                                                 | **Référence à une documentation interne**                                                                                                                                                       |
|--------------|-------------|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Étape 1**  | ?           | ❌                 | **Multi-vDC**                               | **Pas de multi-vDC (plusieurs datacenters, un seul possible).**                                | - Ne peut être migré que s'il n'a qu'un seul datacenter dans un vSphere géré sur OVHcloud. <br/> - Si ce n’est pas le cas, assurez-vous de migrer vos données dans le datacentre qui sera migré. | [Migration d'une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).                                                 |
| **Étape 2**  | ?           | ❎                 | **FT (tolérance aux pannes)**               | **Pas de tolérance aux pannes.**                                                               | - Mon service vSphere managé chez OVHcloud a-t-il des VM avec FT (Fault Tolerance) activé ?                                                                                                      | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance).                                                                                                    |
| **Étape 3**  | ?           | ❎                 | **Affinité/anti-affinité DRS**              | **Aucune règle d’affinité/anti-affinité DRS.**                                                 | - La migration de VM à VM est possible vers VCD, mais pas de VM à hôtes.                                                                                                                         | [VMware DRS (Distributed resource Scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler).                                                             |
| **Étape 4**  | ?           | ❎                 | **Périphériques spéciaux (CD, DVD, etc.)**  | **Aucun équipement spécial ne doit être branché au datacenter géré par vSphere migré.**        | - Tous les périphériques spéciaux (CD, DVD, etc.) doivent être retirés avant la migration, sinon ils seront retirés de force par le processus de migration et perdus.                            |                                                                                                                                                                                                 |
| **Étape 5**  | ?           | ❎                 | **Clusters de datastores**                  | **Assurez-vous que toutes les règles de clustering sont supprimées dans vSphere on OVHcloud.** | - Les règles de clustering devront être supprimés avant la migration car cette notion n'existe pas côté VCD.                                                                                     |                                                                                                                                                                                                 |
| **Étape 6**  | ?           | ❎                 | **Sur-engagement mémoire**                  | **Scale up VCD.**                                                                              | - Prévoyez plus de ressources côté VCD ou redimensionnez/optimisez les VM avant la migration côté vSphere on OVHcloud. Car vous ne pourrez pas sur-engager (over commit) de ressources.          | [Modification des ressources de la machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm).                                  |
| **Étape 7**  | ?           | ❎                 | **Pools de ressources** (partage)           | **Pas besoin de pools de ressources.**                                                         | - Les pools de ressources seront perdus après la migration car cette notion n'existe plus côté VCD.                                                                                              |                                                                                                                                                                                                 |
| **Étape 8**  | ?           | ❎                 | **Options de sécurité (PCI-DSS, HDS, SNC)** | **Ne pas avoir de vSphere on OVHcloud certifiés PCI-DSS, HDS, SNC.**                           | - Ne peut pas être migré si le vSphere managé on OVHcloud est certifié PCI-DSS, HDS, SNC (vSphere on OVHcloud avec options de sécurité).                                                         |                                                                                                                                                                                                 |
| **Étape 9**  | ?           | ❌                 | **Encrypted VMs**                           | **Déchiffrer les VM dans vSphere on OVHcloud.**                                                | - Impossible de migrer avec des données (VMs, vApp) chiffrées vSphere managé on OVHcloud.                                                                                                        |                                                                                                                                                                                                 |
| **Étape 10** | ?           | ❌                 | **Zerto**                                   | **No Zerto.**                                                                                  | - Si vous utilisez Zerto, vous ne pouvez pas migrer vers VCD pour le moment.                                                                                                                     | [Mise en place de Zerto Virtual Replication entre deux centres de données OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered by_vmware/zerto_virtual_replication_as_a_service). |
| **Étape 11** | ?           | ❎                 | **Hosts / ZP (ZFS pool)**                   | **Libérez les ressources (hôtes + ZP).**                                                       | - Les ressources (hôtes + ZP zpool) gratuites "Freespare" et à l'heure "Hourly" doivent être libérées avant la migration. <br/> Ou convertit en ressources mensuelles ("Monthly").               | [Informations de facturation du Hosted Private Cloud](/pages/account_and_service_management/manage_billing_payment_and_services/facturation_private_cloud).                                     |
| **Étape 12** | ?           | ❌                 | **HCX**                                     | **Pas d’utilisation HCX dans vSphere sur OVHcloud.**                                           | - Si tel est le cas, impossible de migrer vers VCD.                                                                                                                                              |                                                                                                                                                                                                 |

///

### FAQ - Foire aux questions

#### Dans quel ordre dois-je effectuer mes vérifications pour migrer vers VCD ?

En regardant le tableau ci-dessus, vous remarquez qu'un bon nombre de vérifications doivent être effectuées par vos soins avant d'envisager un passage vers VCD. Nous vous conseillons de lancer ces vérifications pour votre infrastructure vSPhere managé on OVHcloud de haut en bas comme le suggère la colonne étape. Vous pouvez imprimer ce guide et cocher la case *done* « (effectué) pour les étapes réalisées.

Nous vous invitons à vous poser un certain nombre de questions, par exemple :

- Est-ce que mon infrastructure vSphere managé Hosted Private Cloud VMware on OVHcloud utilise du multi-vDC (plusieurs datacenters) ? 
    - Oui, je dois migrer toutes mes données dans un seul datacenter afin de pouvoir migrer vers VCD.
    - Non, je passe à l'étape suivante.

- Est-ce que les machines virtuelles utilisent de la FT (fault-tolerance) ? 
    - Oui, je dois donc la désactiver avant la migration sinon je ne pourrai pas migrer vers VCD.
    - Non, je passe à l'étape suivante.

- Et ainsi de suite...

#### Est-ce que VCD est compatible avec les certifications PCI-DSS, SNC, HDS ?

Non, VCD on OVHcloud n'est pas encore compatible avec les options de sécurité PCI-DSS, SNC, HDS. Vous ne pourrez donc pas conserver vos certifications de sécurité à ce jour au sein de VCD.

#### Quel type de migration sera utilisé lors de la bascule vers VCD on OVHcloud ?

Il s'agit d'une migration à chaud en cross vCenter dans la plupart des cas.

#### Est-ce que les datacenters HPC seront conservés après la migration ?

Non, toutes les configurations et infrastructures vSphere managés on OVHcloud seront supprimées après la migration. Vous n'aurez plus accès à vos datacenters, uniquement au control panel VCD avec vos données migrées.

#### Est-ce que j'ai accès à la console VCD après la migration ?

Oui, l'action est effectué par OVHcloud et vous permet d'avoir accès aux données après la migration depuis la console VCD on OVHcloud dans des VM par exemple.

#### Par qui est réalisée la migration VCD ?

La migration est réalisée par OVHcloud dans son intégralité, mais les étapes nécessaires avant la migration doivent être réalisées par vos soins. Ces étapes évolueront en fonction des avancées du produit VCD et permettront d'alléger les prérequis nécessaires.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).
