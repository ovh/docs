---
title: 'Cas de migration vers VCD on OVHcloud'
excerpt: 'Découvrez comment effectuer une migration vers VMware Cloud Director on OVHcloud ainsi que ces cas particuliers et complexes afin de garantir la sécurité de vos données'
updated: 2024-07-15
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
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet. Notre équipe reste disponible sur notre canal [Discord](https://discord.gg/ovhcloud) dédié.
>

## Objectif

**Découvrez comment effectuer les étapes de verification pour migrer un service vSphere managé (HPC ou PCC) au sein de VMware Cloud Director on OVHcloud, ainsi que les cas particuliers à mettre au jour.**

## Prérequis

- Avoir effectué les étapes de verifications du guide suivant avant le lancement d'une migration vers VCD.

## En pratique

> [!primary]
> 
> Attention les étapes de verification sont nécessaires avant toute migration possible vers VCD. 
> 

Bienvenue dans le guide complet sur la migration vers VMware Cloud Director au sein de l'écosystème VMware on OVHcloud. 

Ce guide vise à aborder les cas d'utilisations les plus difficiles et les plus nuancés que vous pouvez rencontrer au cours d'un processus de migration à chaud. 

Les charges de travail migrées ici sont des environnements vSphere managé on OVHcloud (Hosted Private Cloud VMware on OVHcloud -> PCC) à faire migrer sur une infrastructure VMware Cloud Director (VCF). Ce guide vous détails étapes par étapes la création d'un vMotion de vos machines virtuelles à chaud entre les réseaux publiques et privées sans perte de connectivités.

Notre objectif est aussi de nous attaquer à ce cas de migration et aux scénarios difficiles qui compliquent souvent les migrations à chaud, en offrant des perspectives et des stratégies tirées d'expériences réelles. 

Vous serez ainsi équipé pour naviguer dans les complexités des migrations de VMware Cloud Director on OVHcloud en toute confiance et avec efficacité.

## Étape 1 - Les prérequis de migration vers VCD

/// details | Quelles sont les étapes de vérification avant de migrer vers VCD ?

Avant de pouvoir migrer vers VCD, des étapes et des prérequis sont nécessaires. En effet beaucoup de notions et cas d'utilisations PCC ne sont pas disponible avec VCD et doivent être prise en compte.

### Schémas de migration avant/après

**ÉTAPE 1**
![Schema 1](images/shema_1.png){.thumbnail}

**Étape 2**
![Schema 2](images/shema_2.png){.thumbnail}

**Étape 3**
![Schema 3](images/shema_3.png){.thumbnail}

En tant que propriétaire de la migration VCD, nous souhaitons configurer vCenter et ESXi sur le vSphere managé OVHcloud et le routeur sur le VCD afin de pouvoir ensuite effectuer une migration vCenter croisée (cross vCenter).

### Tableau de migration - Tous les cas d'utilisations

Vérifiez bien avant migration que chaque pre-check pour chaque cas ci-dessous ont bien été effectués pour tout ces usages.

| Steps   | Done   | Warning | Migration use case with                                 | Requirements checks                                                                                                                                                                                                                                                                | Comments during checks | Référence to external documentation                                                                                                        |
|---------|--------|----|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Step 1  | - [x]  | ✅  | **Multi vDC**                                           | - Can only be migrated if it has only one datacentre in a PCC. If not make shur to migrate your data in the datacenter that will be migrated.                                                                                                                                      |                        | [Migrer une infrastructure vers un nouveau vDC](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc). |                                                                                                                                                                                                                                                                                                                                                 
| Step 2  | - [x]  | ✅  | **FT (fault tolerance)**                                | - Can only be migrated if disabled on PCC side.                                                                                                                                                                                                                                    |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                 
| Step 3  | - [x]  | ✅  | **DRS Affinity/Anti affinity**                          | - Between VMs can be migrated, but between VM and host cannot be migrated (warning, be carefull with migration). Make shur to adapt or remove them for this use case for VCD.                                                                                                      |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 4  | - [x]  | ✅  | **Special devices (CD, DVD etc..)**                     | - All special devices (CD, DVD etc..) must be deleted or removed before migration, otherwise they will be deleted (lost) after migration.                                                                                                                                          |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 5  | - [x]  | ✅  | **Datastores clusters**                                 | - Clustering rules will be lost after migration because this notion do not exist on VCD side.                                                                                                                                                                                      |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 6  | - [x]  | ✅  | **Memory over-commitment**                              | - Foresee more resources on the VCD side or resize/optimize the VMs before migration on the vSphere side. Because this notion is not usable with VCD, it consume more ressources.                                                                                                  |                        |                                                                                                                                            |    
| Step 7  | - [x]  | ✅  | **Ressource pools** (sharing)                           | - Ressource pools will be lost after migration because this notion no longer exists on the VCD side.                                                                                                                                                                               |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 8  | - [x]  | ✅  | **Security options (certifications PCI-DSS, HDS, SNC)** | - Cannot be migrated with certified PCIDSS, HDS, SNC PCC. If migrated certifications will be lost on VCD side instances.                                                                                                                                                           |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                    
| Step 9  | - [x]  | ✅  | **KMS (Encrypted data)**                                | - Not possible to migrate with vSphere encrypted KMS related data. It depend what kind of KMS you are using (vNKP, OKMS, external KMS). Each cases can be problematic. So for now we recommend you decipher data before migration in order to make shur it can be migrated to VCD. |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 10 | - [x]  | ✅  | **Zerto**                                               | - Errors with Zerto use cases, if you use Zerto, you cannot be migrated to VCD for now.                                                                                                                                                                                            |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 11 | - [x]  | ✅  | **Hosts / Zpool**                                       | - Release ressources (hosts + zpool) freespare and hourly before migration. Or convert it in monthly ressources.                                                                                                                                                                   |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                   
| Step 12 | - [x]  | ✅  | **HCX**                                                 | - If HCX usage on PCC, it can not be migrated to VCD.                                                                                                                                                                                                                              |                        |                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                

### Foire aux questions

#### Dans quel ordre dois-je effectuer mes verifications pour migrer vers VCD ?

En regardant le tableau ci-dessus, vous remarquez qu'un bon nombre de verification doivent être effectués. Nous vous conseillons de lancer ces pre-check pour votre PCC.

Déroulez le tableau en vous posant la question, par exemple:

1. Est-ce que mon infrastructure VMware on OVHcloud utilise du Multi-VDC ? 

Oui, je dois migrer toutes mes données dans un seul datacenter afin de migrer vers VCD.

Non, je passe à l'étape suivante.

2. Est-ce que mon infrastructure VMware on OVHcloud utilise de la fault-tolerance ? Oui, je doit donc la désactiver avant migration sinon je ne pourrait pas migrer vers VCD. / Non, je passe à l'étape suivant.

3. Ainsi de suite...

#### Est-ce que VCD est compatible avec les certifications PCI-DSS, SHC, HDS ?

Non VCD on OVHcloud n'est pas encore compatible avec les options de sécurités PCI-DSS, SHC, HDS.

#### Qu'elle type de migration sera utilisé ?

Le type de migration utilisé est à chaud en cross vCenter.

#### Est-ce que les PCC seront conservés après la migration ?

Non, toutes les configurations, données PCC seront supprimées après la migration.

#### Est-ce que j'ai accès à la console VCD après la migration ?

Oui, l'action est effectué par OVHcloud et vous permet d'avoir accès aux données après la migration depuis la console VCD on OVHcloud.

///
## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [channel Discord](<https://discord.gg/ovhcloud>) dédié.

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
