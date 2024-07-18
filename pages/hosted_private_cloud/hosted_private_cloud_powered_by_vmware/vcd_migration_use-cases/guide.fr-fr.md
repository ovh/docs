---
title: 'Audit des cas spéciaux de migration vers VCD'
excerpt: 'Découvrez comment effectuer les étapes d'analyses et de vérifications avant une migration vSphere managé on OVHcloud vers VCD ainsi que les cas particuliers difficiles'
updated: 2024-07-18
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
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet et mise à jour à l'avenir.
> 

## Objectif

**L'objectif de ce guide est d'auditer les cas particuliers vSphere managé on OVHcloud qui peuvent poser problèmes pour une migration vers VCD.**

## Prérequis

- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.

## En pratique

> [!warning]
> 
> Attention cet audit est obligatoires avant toute migration possible vers VCD on OVHcloud.
>

Bienvenue dans ce guide pratique dont le but est de vous fournir des informations sur le processus de la migration de vos services Hosted Private Cloud vSphere/vCenter managé vers un écosystème VMware Cloud Director on OVHcloud.

Ce document détaille également les prérequis à la migration et le cas échéant, vous explique comment vous conformer à ceux-ci.

## Étape 1 - Les prérequis et cas particuliers (obligatoire)

/// details | Quelles sont les prérequis et étapes de vérification pour vos usages HPC avant de pouvoir migrer vers VCD ?

Suite à la vérification de ces prérequis, la migration de vos machines virtuelles sera effectuée à chaud et entièrement opérée par les équipes OVHcloud.

Ce déplacement à chaud permettra de limiter au minimum les coupures de vos réseaux publiques ou privées. Les réseaux privés sont les plus susceptibles d'être impactés, de l'ordre de quelques minutes de coupure.

### Tableau - Cas particuliers

Le tableau ci-dessous vous présente chacun des points bloquants à la migration, ainsi que leur niveau de criticité, qu'il convient de mettre en conformité avant que la migration ne puisse débuter.

| **Steps**   | **Done** | **Warning** | **Use-cases**                                           | **Requirements**                                                                                                         | **Comments**                                                                                                                                                                                                                                                                                    | **Référence to external documentation**                                                                                                                                      |
|-------------|----------|-------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Step 1**  | ?        | ❌           | **Multi-vDC**                                           | **No multi-vDC (multiple datacenters, only one).**                                                                       | - Can only be migrated if it has only one datacentre in a vSphere managed on OVHcloud. <br/> - If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                   | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).                                   |                                                                                                                                                                                                                                                                                                                                                  
| **Step 2**  | ?        | ❎           | **FT (fault-tolerance)**                                | **No fault tolerance.**                                                                                                  | - Does my vSphere managed on OVHcloud service have VMs with FT (fault tolerance) activated ?                                                                                                                                                                                                                    | [VMware Fault Tolerance](/pages/bare_metal_cloud/managed_bare_metal/vmware_fault_tolerance).                                                                                 |                                                                                                                                                                                                                                                                                                                                                            
| **Step 3**  | ️?       | ❎           | **DRS affinity/anti-affinity**                          | **No DRS Affinity/Anti affinity rules.**                                                                                 | - Between VMs migration (pcc to vcd) can be migrated to VCD, but between VMs and hosts cannot be migrated. <br/> - Make shur to adapt or remove them for this use case for VCD.                                                                                                                 | [VMware DRS (Distributed Ressource Scheduler](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_ressource_scheduler).                                        |                                                                                                                                                                                                                                                                                                                                               
| **Step 4**  | ?        | ❎           | **Special devices (CD, DVD etc..)**                     | **No special devices must be plugged into to migrated vSphere managed datacenter.**                                      | - All special devices (CD, DVD etc..) must be removed before migration, otherwise they will be forcely removed (lost) by the process migration and lost.                                                                                                                                        |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 5**  | ?        | ❎           | **Datastore  clusters**                                 | **Make shur all clustering rules are deleted in vSphere on OVHcloud.**                                                   | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                                   |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 6**  | ?        | ❎           | **Memory over-commitment**                              | **Scale up VCD.**                                                                                                        | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. <br/> Because this notion is not usable on VCD. VCD consume more ressources and so it won't be acceptable.                                                                            | [Modifying virtual machine resources](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/modify_hardware_configuration_of_vm).                               |                                                                                                                                                
| **Step 7**  | ?        | ❎           | **Ressource pools** (sharing)                           | **Do not need ressource pools.**                                                                                         | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                                            |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 8**  | ?        | ❎           | **Security options (certifications PCI-DSS, HDS, SNC)** | **Do not need security options in VCD.**                                                                                 | - Cannot be migrated with certified PCIDSS, HDS, SNC vSphere managed on OVHcloud. <br/>- If migrated certifications will be lost on VCD side instances.                                                                                                                                         |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
| **Step 9**  | ?        | ❌           | **KMS (Encrypted data)**                                | **Decipher VM in vSphere on OVHcloud.**                                                                                  | - Not possible to migrate with vSphere encrypted KMS related data. <br/>- It depend what kind of KMS you are using (vNKP, OKMS, external KMS). <br/> Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 10** | ?        | ❌           | **Zerto**                                               | **No Zerto.**                                                                                                            | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                                         | [Setting up Zerto Virtual Replication between two OVHcloud datacenters](hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service). |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 11** | ?        | ❎           | **Hosts / Zpool**                                       | **Release ressources (hosts + Zpool) freespare and hourly before migration. <br/> Or convert it in monthly ressources.** |                                                                                                                                                                                                                                                                                                 | [Hosted Private Cloud billing information](account_and_service_management/managing_billing_payments_and_services/facturation_private_cloud).                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
| **Step 12** | ?        | ❌           | **HCX**                                                 | **No HCX usage in vSphere  on OVHcloud.**                                                                                | - If so it can not be migrated to VCD.                                                                                                                                                                                                                                                          |                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

///

### FAQ - Foire aux questions

#### Dans quel ordre dois-je effectuer mes verifications pour migrer vers VCD ?

En regardant le tableau ci-dessus, vous remarquez qu'un bon nombre de verifications doivent être effectués par vos soins avant d'envisager un passage vers VCD. Nous vous conseillons de lancer ces pre-check pour votre infrastructure vSPhere managé on OVHcloud de haut en bas comme le suggère la colonne étape. Vous pouvez imprimer ce guide et cocher la case effectué (done) pour les étapes réalisées.

Nous vous invitons à vous poser les questions, par exemple:

1. Est-ce que mon infrastructure vSphere managé Hosted Private Cloud VMware on OVHcloud utilise du multi-vDC (plusieurs datacenters) ? 

Oui, je dois migrer toutes mes données dans un seul datacenter afin de pouvoir migrer vers VCD.
Non, je passe à l'étape suivante.

2. Est-ce que les machines virtuelles utilisent de la FT (fault-tolerance) ? 

Oui, je dois donc la désactiver avant migration sinon je ne pourrais pas migrer vers VCD.
Non, je passe à l'étape suivante.

3. Et ainsi de suite...

#### Est-ce que VCD est compatible avec les certifications PCI-DSS, SNC, HDS ?

Non VCD on OVHcloud n'est pas encore compatible avec les options de sécurités PCI-DSS, SNC, HDS. Vous ne pourrez donc pas conserver vos certifications de sécurité à ce jour au sein de VCD.

#### Qu'elle type de migration sera utilisé lors de la bascule vers VCD on OVHcloud ? ?

Il s'agit d'une migration à chaud en cross vCenter dans la plupart des cas.

#### Est-ce que les datacenters HPC seront conservés après la migration ?

Non, toutes les configurations et infrastructures vSphere managés on OVHcloud seront supprimées après la migration. Vous n'aurez plus accès à vos datacenters, uniquement au control panel VCD avec vos données migré.

#### Est-ce que j'ai accès à la console VCD après la migration ?

Oui, l'action est effectué par OVHcloud et vous permet d'avoir accès aux données après la migration depuis la console VCD on OVHcloud dans des VM par exemple.

#### Par qui est réalisée la migration VCD ?

La migration est réalisée par OVHcloud dans son intégralité, mais les étapes nécessaires avant la migration doivent être réalisées par vos soins. Ces étapes évolueront en fonction des avancées du produit VCD et permettront d'alléger les prérequis nécessaires

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [Discord](<https://discord.gg/ovhcloud>) dédié.

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
