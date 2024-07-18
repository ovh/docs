---
title: 'Audit des cas spéciaux de migration vers VCD'
excerpt: 'Découvrez comment effectuer les étapes d'analyse avant une migration vers VCD ainsi que les précautions à prendre pour les cas particuliers et complexes vSphere managé'
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

**L'objectif de ce guide est d'auditer les cas particuliers vSphere managé HPC qui peuvent poser problèmes pour une migration vers VCD on OVHcloud.**

## Prérequis

- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.

## En pratique

> [!primary]
> 
> Attention cet audit est obligatoires avant toute migration possible vers VCD on OVHcloud.
> 

Bienvenue dans le guide complet sur la migration vers VMware Cloud Director au sein de l'écosystème VMware on OVHcloud. 

Ce guide vise à aborder les cas d'utilisations les plus difficiles et les plus nuancés que vous pouvez rencontrer au cours d'un processus de migration à chaud. 

Les charges de travail migrées ici sont des environnements vSphere managé on OVHcloud à faire migrer sur une infrastructure VMware Cloud Director. Ce guide vous détails étapes par étapes la création d'un vMotion de vos machines virtuelles à chaud entre les réseaux publiques et privées sans perte de connectivités.

Notre objectif est aussi de nous attaquer à ce cas de migration et aux scénarios difficiles qui compliquent souvent les migrations à chaud, en offrant des perspectives et des stratégies tirées d'expériences réelles. 

Vous serez ainsi équipé pour naviguer dans les complexités des migrations de VMware Cloud Director on OVHcloud en toute confiance et avec efficacité.

## Étape 1 - Les prérequis de migration vers VCD (obligatoire)

/// details | Quelles sont les étapes de vérification avant de pouvoir migrer vers VCD ?

Avant de pouvoir migrer vers VCD, des étapes et des prérequis sont nécessaires. En effet, beaucoup de notions et cas d'utilisations vSphere managé on OVHcloud ne sont pas disponible avec VCD pour l'instant et doivent être pris en compte avant une migration possible.

En tant que propriétaire de la migration VCD, nous souhaitons configurer vCenter et ESXi sur le vSphere managé OVHcloud et le routeur sur le VCD afin de pouvoir ensuite effectuer une migration vCenter croisée (cross vCenter).

### Tableau de migration - Tous les cas d'utilisations

Vérifiez bien avant migration que chaque les 12 étapes (pre-check) ci-dessous ont bien été effectués avant de pouvoir migrer.

| **Steps**   | **Done** | **Warning** | **Use-cases**                                           | **Requirements**                                                                                                         | **Comments**                                                                                                                                                                                                                                                                                    | **Référence to external documentation**                                                                                                    |
|-------------|----------|-------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **Step 1**  | ?        | ❌           | **Multi-vDC**                                           | **No multi-vDC (multiple datacenters, only one).**                                                                       | - Can only be migrated if it has only one datacentre in a vSphere managed on OVHcloud. <br/> - If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                   | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc). |                                                                                                                                                                                                                                                                                                                                                  
| **Step 2**  | ?        | ❎           | **FT (fault-tolerance)**                                | **No fault tolerance.**                                                                                                  | - Does my vSPhere managed on OVHcloud instances have FT (fault tolerance) ?                                                                                                                                                                                                                     |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                            
| **Step 3**  | ️?       | ❎           | **DRS affinity/anti-affinity**                          | **No DRS Affinity/Anti affinity rules.**                                                                                 | - Between VMs migration (pcc to vcd) can be migrated to VCD, but between VMs and hosts cannot be migrated. <br/> - Make shur to adapt or remove them for this use case for VCD.                                                                                                                 |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                               
| **Step 4**  | ?        | ❎           | **Special devices (CD, DVD etc..)**                     | **No special devices must be plugged into to migrated vSphere managed datacenter.**                                      | - All special devices (CD, DVD etc..) must be removed before migration, otherwise they will be forcely removed (lost) by the process migration and lost.                                                                                                                                        |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 5**  | ?        | ❎           | **Datastore  clusters**                                 | **Make shur all clustering rules are deleted in vSphere on OVHcloud.**                                                   | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                                   |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 6**  | ?        | ❎           | **Memory over-commitment**                              | **Scale up VCD.**                                                                                                        | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. <br/> Because this notion is not usable on VCD. VCD consume more ressources and so it won't be acceptable.                                                                            |                                                                                                                                            |                                                                                                                                            |    
| **Step 7**  | ?        | ❎           | **Ressource pools** (sharing)                           | **Do not need ressource pools.**                                                                                         | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                                            |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 8**  | ?        | ❎           | **Security options (certifications PCI-DSS, HDS, SNC)** | **Do not need security options in VCD.**                                                                                 | - Cannot be migrated with certified PCIDSS, HDS, SNC vSphere managed on OVHcloud. <br/>- If migrated certifications will be lost on VCD side instances.                                                                                                                                         |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                    
| **Step 9**  | ?        | ❌           | **KMS (Encrypted data)**                                | **Decipher VM in vSphere on OVHcloud.**                                                                                  | - Not possible to migrate with vSphere encrypted KMS related data. <br/>- It depend what kind of KMS you are using (vNKP, OKMS, external KMS). <br/> Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 10** | ?        | ❌           | **Zerto**                                               | **No Zerto.**                                                                                                            | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                                         |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 11** | ?        | ❎           | **Hosts / Zpool**                                       | **Release ressources (hosts + zpool) freespare and hourly before migration. <br/> Or convert it in monthly ressources.** |                                                                                                                                                                                                                                                                                                 |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| **Step 12** | ?        | ❌           | **HCX**                                                 | **No HCX usage in vSphere  on OVHcloud.**                                                                                | - If so it can not be migrated to VCD.                                                                                                                                                                                                                                                          |                                                                                                                                            |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                

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

#### Qu'elle type de vMotion sera utilisé lors de la migration vers VCD on OVHcloud ?

Il s'agit d'une migration à chaud en cross vCenter vMotion dans la plupart des cas.

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
