---
title: "VMware Cloud Director - Migration depuis VMware vSphere on OVHcloud"
excerpt: "Découvrez comment vous préparez-vous à migrer depuis VMware vSphere on OVHcloud (Hosted Private Cloud) vers l'offre basée sur VMware Cloud Director (VCD) on OVHcloud"
updated: 2024-09-09
---


> [!primary]
>
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet et mis à jour à l'avenir avec les avancées des équipes de recherche.
>

## Objectif

**L’objectif est de fournir des étapes de verifications (checklists) ainsi que les éxigences de migration afin de pouvoir passer vers des environnements managés Hosted Private Cloud - VMware Cloud Director.**

## Prérequis

- Posséder une offre de produits [Hosted Private Cloud VMware](/links/hosted-private-cloud/vmware) managé on OVHcloud.
- Accès à [l'espace client OVHcloud](/links/manager) OVHcloud.
- Avoir effectué les étapes de vérifications (checklist) dans ce guide avant le lancement d'une migration vers VCD on OVHcloud.
- Ne pas nécessiter une certification PCI-DSS, SNC, HDS ou une qualification SecNumCloud.
- Ne pas avoir de données (VM, vApp) à migrer vers VCD sur plusieurs datacenters (cas multi-vDC, solution ci-dessous) avec votre offre de produit VMware on OVHcloud.
- Ne pas utiliser les solutions de replication Zerto.

## En pratique

Ce guide pratique a pour but de vous fournir des informations et des solutions sur le processus de migration de vos services VMware vSphere managé par OVHcloud vers un environnement managé "VMware Cloud Director on OVHcloud".

Ce document détaille également les prérequis pour chaque cas d'utilisation et le cas échéant, vous explique les solutions à mettre en place pour migrer vers VCD.

1. Il est important de vérifier la checklist des cas particuliers ci-dessous avant toutes migrations et vous conformer aux recommandations associées.
2. Une fois que vous aurez rempli ces exigences en suivant les étapes de la checklist, vous pouvez vous connecter à l'espace client OVHcloud afin de signer les conditions particulières depuis l'environnement prévu à migrer (T&C). Un bloc affiche le document des conditions particulières et vous permet d'accepter ces conditions en suivant les étapes pour valider la migration et signer les conditions particulières du service (voir capture ci-dessous).
3. Les équipes d'OVHcloud migreront les VMs du datacenter vSphere principal en utilisant un chemin de migration à chaud.

![VCD Migration](images/vcd_migration.png){.thumbnail}

Ce déplacement à chaud permettra de limiter au minimum les coupures de vos réseaux publics ou privés. Les réseaux privés sont les plus susceptibles d'être impactés, de l'ordre de quelques minutes de coupure.

Vos machines virtuelles resteront opérationnelles pendant la migration, sans temps d'arrêt. Néanmoins, il existe un risque de perte de certains paquets réseau lors du vMotion.

Cette migration doit s’effectuer sans impact notable pour la plupart des applications, mais nous vous recommandons de les surveiller étroitement tout au long du processus.

### Étape 1 - Avant migration 

**Migration des environnements Hosted Private Cloud - VMware**

#### Demandes de migration faite avant le 1er septembre 2024

Vous avez demandé à migrer votre environnement actuel VMware chez OVHcloud vers la nouvelle solution managée VCD (VMware Cloud Director).

Nous vous invitons à revoir la démonstration du produit et le webinaire pour vous familiariser avec cette nouvelle offre. 

Retrouvez également toutes les informations nécessaires sur nos pages dédiées à VCD :

- [Webinar - Managed VMware Cloud Director by OVHcloud (EN)](https://vimeo.com/936590009/b52b3ba8ce)
- [Webinar - VMware by Broadcom New Offerings and Opportunities (Video EN)](https://www.youtube.com/watch?v=aS2A9AhjnMg)
- [Product - VMware Cloud Director On OVHcloud Evolution (FR)](https://www.ovhcloud.com/fr/lp/vmware-vcd-evolution/)
- [OVHcloud Labs - VMware Cloud Director On OVHcloud (EN)](https://labs.ovhcloud.com/en/vmware-cloud-director/)

**Important** : La signature des conditions particulières disponibles depuis début septembre 2024 dans le manager doivent être signé pour que la migration soit réalisée par les équipes OVHcloud.

Les migrations seront effectuées en quatre vagues, à partir du mois d'octobre, selon les services actifs dans votre environnement.

**Le calendrier de migration est prévu comme suit** :

| **Vague** | **Mois de migration** | **Environnements compatibles avec la migration**                                                                 |                                                                                                                 
|:---------:|:---------------------:|:-----------------------------------------------------------------------------------------------------------------|
|     1     |     Octobre 2024      | - Environnements sans licence Microsoft Windows, réseau privé OVHcloud vRack ou stockage VMware vSAN ;           |
|     2     |     Novembre 2024     | - Environnements avec licence Microsoft Windows, mais sans réseau privé OVHcloud vRack ni stockage VMware vSAN ; |
|     3     |     Décembre 2024     | - Environnements avec réseau privé OVHcloud vRack, mais sans stockage VMware vSAN ;                              |
|     4     |     Janvier 2024      | - Environnements avec stockage VMware vSAN.                                                                      |

Au cours de ce processus, vos données resteront dans le même stockage, à l'exception du stockage vSAN. Vos adresses IP resteront inchangées également.

Un email précisant la date de migration vous sera communiquer au minimum 15 jours avant la migration.

#### Demande de migration après le 1er novembre 2024

La migration de vos environnements actuels VMware chez OVHcloud peuvent être réalisées à votre demande. Cette migration a les mêmes pré-requis que pour toutes les autres migrations évoquées dans ce guide.

Il faudra faire la demande à travers un ticket au support vous permettant d'avoir toutes les informations et de signer les T&C.

Ensuite, nous vous informerons de la date de migration et réaliserons la migration.

**Checklist des cas particuliers de migration**

/// details | Le tableau ci-dessous vous présente chacun des points bloquants à la migration, ainsi que leur niveau de criticité, qu'il convient de mettre en conformité avant que la migration ne puisse débuter.

| **Cas particuliers**&nbsp; | **Blocage** |              **Cas d'utilisation**              | **Solutions**                                                                                                                                                        | **Informations complémentaires**                                                                                                                                                                                                                                 | **Aides et références**                                                                                                                                                                                |
|:--------------------------:|:-----------:|:-----------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           **#1**           |      ❌      |               🏢🏢 **Multi-vDC**                | Migrer les VMs, vApp vers un seul vDC.                                                                                                                               | - Ne peut être migré que si votre architecture ne dispose que d'un seul vDC (à ce jour). <br/> Si ce n’est pas le cas, assurez-vous avant, de transférer toutes vos données (VMs, vApp) dans le vDC qui sera utilisé pour la migration par les équipes OVHcloud. | [Migration d'une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                                         |
|           **#2**           |             |            🚫 **VMware vSphere FT**             | Désactiver la tolérance aux pannes (FT) des VMs.                                                                                                                     |                                                                                                                                                                                                                                                                  | [Tolerance aux pannes VMware](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                       |
|           **#3**           |             |   ⚠️ **Règles d'affinité/anti-affinité DRS**    | Reconstitution des règles d’affinités/anti-affinités dans VCD.                                                                                                       | - Pour être conservé, les règles d’affinité/anti-affinité DRS devront être recrées manuellement par vos soins dans VCD après migration (à ce jour).                                                                                                              | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                                                      |
|           **#4**           |             | 📀 **Périphériques spéciaux (CD, DVD, etc..)**  | Débrancher tous les équipements spéciaux.                                                                                                                            | - Tous les périphériques spéciaux (CD, DVD, etc.) doivent être retirés avant la migration, sinon ils seront enlevés par le processus de migration (à ce jour).                                                                                                   | [Modifier les ressources d’une machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                              |
|           **#5**           |             |          🛢 **Clusters de datastore**           | Suppression de toutes les règles de clustering.                                                                                                                      | - Les règles de clustering devront être enlevés avant la migration car cette notion n'existe plus avec VCD.                                                                                                                                                      | [Création de cluster et activation EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)                                                                  |
|           **#6**           |             |        🔄 **Sur-allocation de mémoire**         | Prévoyez ou faites évoluer vos besoins en ressources dans VCD (côté control panel VCD). <br/> Ou optimisez vos besoins avant de migrer (côté control panel vSphere). | - Car vous ne pourrez pas sur-engager (over commit) de ressources au sein de VCD, ce concept n'existe pas.                                                                                                                                                       | [Modification des ressources d'une machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                          |
|           **#7**           |             |      🔗 **Pools de ressources (partage)**       |                                                                                                                                                                      | - Les pools de ressources seront perdus après la migration car cette notion n'existe plus côté VCD. Nous recommandons à la place l'utilisation des concepts de vApp au sein du control panel VCD on OVHcloud.                                                    | [Utilisation de vApps dans le control panel VCD on OVHcloud](https://docs.vmware.com/en/VMware-Cloud-Director/10.6/VMware-Cloud-Director-Tenant-Guide/GUID-AC48FB5E-4ADC-4835-AACE-B949B297A147.html)  |
|           **#8**           |      ❌      | 📜 **Si certifié PCI-DSS, HDS ou qualifié SNC** |                                                                                                                                                                      | - Ne peut pas être migré si vos charges de travail sont certifié PCI-DSS, HDS, SecNumCloud (options de sécurité) à ce jour.                                                                                                                                      | [Enterprise > Compliance and certification](/links/compliance-and-certification)                                                                                                                       |
|           **#9**           |      ❌      |              🔐 **Encrypted VMs**               | Déchiffrer ou désactiver la politique de chiffrement pour les VMs.                                                                                                   | - Il n'est pas possible à ce jour d'effectuer la migration avec des VMs, vApp chiffrées.                                                                                                                                                                         | [Activation du chiffrement des machines virtuelles (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)                                                     |
|          **#10**           |      ❌      |      💾 **Zerto (reprise après sinistre)**      |                                                                                                                                                                      | - Si vous utilisez les solutions Zerto (Replication de données pour la reprise d'activé en cas de désastre), vous ne pouvez pas faire fonctionner cette technologie avec VCD (à ce jour).                                                                        | [Mise en place de Zerto Virtual Replication entre deux centres de données OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)         |
|          **#11**           |             |            🆓 **Hosts + Datastore**             | Libération des ressources (hôtes + datastore).                                                                                                                       | - Les ressources (hôtes + datastore) gratuites "Freespare" et à l'heure "Hourly" doivent être libérées avant la migration. <br/> Ou convertit en ressources mensuelles ("Monthly").                                                                              | [Informations de facturation du Hosted Private Cloud](/pages/account_and_service_management/manage_billing_payment_and_services/facturation_private_cloud)                                             |

**Blocage** Empêche toute migration possible vers VCD on OVHcloud.

///

### Étape 2 - Après la migration 

**Tâches à effectuer après migration pour cas particuliers**

| **Cas particuliers**&nbsp; | **Blocage** |              **Cas d'utilisation**              | **Solutions**                                                                                                                                                        | **Informations complémentaires**                                                                                                                                                                                                                                 | **Aides et références**                                                                                                                                                                                |
|:--------------------------:|:-----------:|:-----------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           **#1**           |      ❌      |               🏢🏢 **Multi-vDC**                | Migrer les VMs, vApp vers un seul vDC.                                                                                                                               | - Ne peut être migré que si votre architecture ne dispose que d'un seul vDC (à ce jour). <br/> Si ce n’est pas le cas, assurez-vous avant, de transférer toutes vos données (VMs, vApp) dans le vDC qui sera utilisé pour la migration par les équipes OVHcloud. | [Migration d'une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc)                                                         |
|           **#2**           |             |            🚫 **VMware vSphere FT**             | Désactiver la tolérance aux pannes (FT) des VMs.                                                                                                                     |                                                                                                                                                                                                                                                                  | [Tolerance aux pannes VMware](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance)                                                                                                       |
|           **#3**           |             |   ⚠️ **Règles d'affinité/anti-affinité DRS**    | Reconstitution des règles d’affinités/anti-affinités dans VCD.                                                                                                       | - Pour être conservé, les règles d’affinité/anti-affinité DRS devront être recrées manuellement par vos soins dans VCD après migration (à ce jour).                                                                                                              | [VMware DRS distributed resource scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_resource_scheduler)                                                                      |
|           **#4**           |             | 📀 **Périphériques spéciaux (CD, DVD, etc..)**  | Débrancher tous les équipements spéciaux.                                                                                                                            | - Tous les périphériques spéciaux (CD, DVD, etc.) doivent être retirés avant la migration, sinon ils seront enlevés par le processus de migration (à ce jour).                                                                                                   | [Modifier les ressources d’une machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                              |
|           **#5**           |             |          🛢 **Clusters de datastore**           | Suppression de toutes les règles de clustering.                                                                                                                      | - Les règles de clustering devront être enlevés avant la migration car cette notion n'existe plus avec VCD.                                                                                                                                                      | [Création de cluster et activation EVC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/create_cluster_enable_evc)                                                                  |
|           **#6**           |             |        🔄 **Sur-allocation de mémoire**         | Prévoyez ou faites évoluer vos besoins en ressources dans VCD (côté control panel VCD). <br/> Ou optimisez vos besoins avant de migrer (côté control panel vSphere). | - Car vous ne pourrez pas sur-engager (over commit) de ressources au sein de VCD, ce concept n'existe pas.                                                                                                                                                       | [Modification des ressources d'une machine virtuelle](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm)                                          |
|           **#7**           |             |      🔗 **Pools de ressources (partage)**       |                                                                                                                                                                      | - Les pools de ressources seront perdus après la migration car cette notion n'existe plus côté VCD. Nous recommandons à la place l'utilisation des concepts de vApp au sein du control panel VCD on OVHcloud.                                                    | [Utilisation de vApps dans le control panel VCD on OVHcloud](https://docs.vmware.com/en/VMware-Cloud-Director/10.6/VMware-Cloud-Director-Tenant-Guide/GUID-AC48FB5E-4ADC-4835-AACE-B949B297A147.html)  |
|           **#9**           |      ❌      |              🔐 **Encrypted VMs**               | Déchiffrer ou désactiver la politique de chiffrement pour les VMs.                                                                                                   | - Il n'est pas possible à ce jour d'effectuer la migration avec des VMs, vApp chiffrées.                                                                                                                                                                         | [Activation du chiffrement des machines virtuelles (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)                                                     |
|          **#10**           |      ❌      |      💾 **Zerto (reprise après sinistre)**      |                                                                                                                                                                      | - Si vous utilisez les solutions Zerto (Replication de données pour la reprise d'activé en cas de désastre), vous ne pouvez pas faire fonctionner cette technologie avec VCD (à ce jour).                                                                        | [Mise en place de Zerto Virtual Replication entre deux centres de données OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)         |
|          **#11**           |             |            🆓 **Hosts + Datastore**             | Libération des ressources (hôtes + datastore).                                                                                                                       | - Les ressources (hôtes + datastore) gratuites "Freespare" et à l'heure "Hourly" doivent être libérées avant la migration. <br/> Ou convertit en ressources mensuelles ("Monthly").                                                                              | [Informations de facturation du Hosted Private Cloud](/pages/account_and_service_management/manage_billing_payment_and_services/facturation_private_cloud)                                             |


**Configuration du stockage (Repository)**

Après la migration, vous devrez configurer votre nouvelle solution Veeam Backup & Replication selon votre politique de sauvegarde préférée, qui pourra être personnalisée en fonction des niveaux de service suivants :

- `Bronze Repository` : Standard Object Storage (100 To).
- `Silver Repository` : Standard Object Storage avec copie de sauvegarde hors site (100 To).
- `Gold Repository` : High Performance Object Storage avec copie de sauvegarde hors site et 14 points d’immuabilités (100 To).

Tous ces repositories ont un quota de stockage de 100 To. Vous pouvez contacter les équipes de support pour augmenter ce quota.

Pour plus d'information, consultez le guide : [VMware Cloud Director - Sauvegarde avec Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

## Aller plus loin

Vous pouvez aller plus loin en lisant ces guides, afin mieux connaitre les avantages de **VMware Cloud Director** dans la gestion de votre architecture privée **Hosted Private Cloud** :

- [VMware Cloud Director - Premiers pas](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [VMware Cloud Director - Foire aux questions](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-faq)
- [VMware Cloud Director - Se connecter depuis le control panel VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging)
- [VMware Cloud Director - Sauvegarde avec Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).
