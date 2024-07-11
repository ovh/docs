---
title: 'Cas de migration VMware Cloud Director on OVHcloud'
excerpt: 'Découvrez comment effectuer votre migration VMware Cloud Director on OVHcloud ainsi que ces cas particuliers et complexes afin de garantir la sécurité de vos données'
updated: 2024-07-10
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
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet. Notre équipe reste disponible sur notre canal Discord dédié : <https://discord.gg/ovhcloud>.
>

## Objectif

**Découvrez comment effectuer votre migration au sein de VMware Cloud Director on OVHcloud ainsi que les cas particuliers à mettre au jour.**
or
**L'objectif de ce guide est de d'écrire les scénarios les plus difficiles qui peuvent compliquer les migrations au sein de VCD on OVHcloud.**

## Prérequis

- Un navigateur Web (avec de préférence une base Chromium et la traduction activée en français).
- Avoir un compte VMware Cloud Director avec des droits utilisateurs admin (vérifiez que votre compte utilisateur dispose des droits suffisants).
- Avoir suivi le guide « [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) ».
- Étre administrateur d'au moins deux organisations VCD sur la plateforme VCD on OVHcloud.
- Avoir réalisé l'appairage de ces deux organisations.

## En pratique

/// details | Introduction

Bienvenue dans le guide complet sur la migration vers VMware Cloud Director au sein de l'écosystème VMware on OVHcloud. 

Ce guide vise à aborder les cas d'utilisation les plus difficiles et les plus nuancés que les professionnels de l'informatique peuvent rencontrer au cours du processus de migration. 

Que vous déplaciez des charges de travail depuis des environnements Hosted Private Cloud on OVHcloud, d'autres fournisseurs de cloud ou que vous mettiez à niveau des systèmes existants. 

Ce guide fournit des solutions et des bonnes pratiques étape par étape pour assurer une transition en douceur et réussie. 

Notre objectif est de nous attaquer aux scénarios difficiles qui compliquent souvent les migrations, en offrant des perspectives et des stratégies tirées d'expériences réelles. 

Avec ce guide, vous serez équipé pour naviguer dans les complexités des migrations de VMware Cloud Director on OVHcloud en toute confiance et avec efficacité.

///

### Étape 1 - Critères de migrations

/// details | Quelles sont les critères d'acceptations pour migrer les services Hosted Private Cloud vSphere managé au sein de VMware Cloud Director on OVHcloud ?

**Schema PCC to VCD:**

![VCD Migration Schema](images/vcd_migration_schema.png){.thumbnail}

### Critères d'acceptations

En tant qu'administrateur VCD, je veux pouvoir étendre les vlan 1000 et 2000 de mon PCC à l'instance VCD vrack afin de pouvoir ensuite monter ESXi, zpools et utiliser des IP publiques sur VCD.

**PCC/VCD:**
- [ ] Obtenir json du service PCC (voir 3ReturnComputesubscribed).
- [ ] Créer un client.
- [ ] Sélectionnez l'instance correcte en fonction de l'emplacement pcc (pcczone) retourné dans le json.
- [ ] Sélectionner le pVDC correspondant à l'offre donnée en paramètres.
- [ ] Traduire les ressources de calcul PCC en ressources VCD et approvisionner ces ressources en VDC d'organisation.
- [ ] Après l'initialisation du client, les étapes suivantes de préconfiguration du réseau sont déclenchées.

**Côté VCD seulement:**
- [ ] Vhosts.
- [ ] Stockages.
- [ ] Frais complémentaires (Org vDC + Org).

**Réseau:**
- [ ] Bridge to map vlan 1xxx to VCD instance vRACK with vlan id 1xxx..
- [ ] Bridge to map vlan 2xxx to VCD instance vRACK with vlan id 2xxx.
- [ ] Robot côté PCC qui peut être déclenché depuis l'api avec l'id PCC + l'id vRACK VCD comme paramètres.

![VCD Migration Schema](images/vcd_migration_schema_2.png){.thumbnail}

- [ ] VCD : endpoint available to ask for a tenant creation with the following parameters
 - [ ] Pcc name
 - [ ] Zone
 - [ ] Json containing all the subscription details (each line + nic)
- [ ] PCC : calls an endpoint available on VCD side with 
 - [ ]pcc name
 - [ ] Zone
 - [ ] Json containing all the subscription details (each line + nic)

**Inputs**
Le paramètre à prendre: 

- "PCC name"

- [ ] Le robot vSphere va:
  - [ ] Ajouter la route sur ESXi et vSphere.
  - [ ] Ajouter la route sur vCenter.

**Acteurs de la migration:**
- [ ] L'équipe vSphere managé (Hosted Private Cloud on OVHcloud).
- [ ] L'équipe Hosted Private Cloud VMware Cloud Director on OVHcloud.

### Contraintes

Customer will need to order new datastores after the migrations.
Due to no storage solutions available, existing customers will continue to grow on PCC for datastores.
- [ ] Une commande de nouveaux datastores après les migrations sera nécessaire pour les offres clients.
- [ ] En raison de l’absence de solutions de stockage disponibles, les clients existants continueront à se développer sur Hosted Private Cloud vSphere managed on OVHcloud pour les datastores.

///

### Étape 2 - Les cas particuliers de migration

/// details | Qu'elles sont les cas particuliers de migration PCC vers VCD ?

Le but est de migrer toutes les instances Hosted Private Cloud VMware on OVHcloud existantes qui sont marqués avec le tag **"VCDMigrationPath"**.

Ces instances clientes proviennent principalement des offres **Essential** et **SDDC** mais nous pouvons avoir des références **PRE/NSX/vSphere** et même vSAN pour les premiers hosts vSAN.

Tableau de migration selon les cas d'utilisations:**

| Étapes               | Input                | Check                                                                            | Actions manuel à lancer                                                                                                                                                                                                                      | Durée | Actions client | Actions OVHcloud | Commentaires                                                                                  | Référence à une documentation technique | Critères d'acceptations VCD                                                                                                                                                                   | Critères d'acceptations vSphere (PCC)                                                                                                                |
|----------------------|----------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------|------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Durant la migration  | pcc-xxx-xxx-xxx-xxx  | - CARP (Common address redundancy protocol) to be coded.                         | - Detection + Implementation coté VCD.                                                                                                                                                                                                       | ?     | Non            | Oui              |                                                                                               |                                         | - VCD endpoint available to ask for a tenant creation with the following parameters. <br/> - Pcc name <br/> - Zone <br/> Json containing all the subscription details (each line + nic) <br/> | - Calls an endpoint available on VCD side with. <br/> - PCC name <br/> - Zone <br/> - Json containing all the subscription details (each line + nic) |
| Durant la migration  | pcc-xxx-xxx-xxx-xxx  | 	- Scale0 on PCC (NSX-T 4.0.1) → ✅                                               | 	- Ignorer ce profile et les enlever.                                                                                                                                                                                                        | ?     | Non            | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Durant la migration  |                      | 	- Edge, Backup infra, zerto infra, private GW... (OVH vms) Virtual Machines → ✅ | 	- Ne pas migrer.                                                                                                                                                                                                                            | ?     | Non            | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | - Multi vDC (avertissement)                                                      | 	- Public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                          | ?     | Oui            | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | - FT  ✅                                                                          | - Detection + error + E-Mail or detection + E-Mail + Disable FT on PCC side + Migration                                                                                                                                                      | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | - DRS Affinity/Anti affinity rules (avertissement)                               | - Partial only VMs, distinction between required and preferred in VCD, what do we take by default → detection + VCD implementation side → (avertissement) public documentation VM ↔ host won't be migrated and migrate VMs affinity rules.   | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Check special devices (CD...) → ✅                                             | - Public documentation <br/> Notify customer + E-Mail.                                                                                                                                                                                       | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | - Datastores cluster → ✅                                                         | - Public documentation                                                                                                                                                                                                                       | ?     | Oui            | Oui              | Notifier client et ignorer.                                                                   |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | - Memory over-commitment (avertissement)                                         | - Public documentation                                                                                                                                                                                                                       | ?     | Oui            | Oui              | Détecter + Erreurs + E-Mail <br/>  Demander au client pour ajouter ou libérer les ressources. |                                       
| Pre-check            |                      | 	- Resource pools → 2 use cases, (avertissement)                                 | - Public documentation                                                                                                                                                                                                                       | ?     |                |                  | Pas de notion sur VCD <br/> Enlever et documenter.                                            |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Security option (erreur)                                                      | 	- Public documentation and detect security option linked to certification and block.                                                                                                                                                        | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Encrypted VM disks 	                                                          | - Public documentation, detection and block.                                                                                                                                                                                                 | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Zerto (erreur) → list block (avertissement)                                   | 	- 8 PCCs (avertissement) public documentation.                                                                                                                                                                                              | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Hosts freespare and hourly                                                    | - Prévenir le client et retenter la maintenance 01h24, passe in error state CCO to contact client.                                                                                                                                           | 01h24 |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Check NSX-v usage                                                             | 	- La documentation publique ne peut pas être migrée si Edge et DFW, pour l'instant blocage de la migration, sont traités dans une autre vague (nous allons vérifier si elle peut être gérée manuellement → 15 occurrences avec utilisation) | ?     |                |                  |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check            |                      | 	- Check HCX usage (erreur)                                                      | 	                                                                                                                                                                                                                                            | ?     |                |                  |  - Impossible de migrer la documentation publique. La fonctionnalité doit être désactivée avant la migration.                                                                                             |                                         |                                                                                                                                                                                               |                                                                                                                                                      |

### Tableau de migration selon l'offre Hosted Private Cloud

|                              |                            |                             |             |                                     |                                     |
|------------------------------|----------------------------|-----------------------------|-------------|-------------------------------------|-------------------------------------|
| Source site*                 | 	Destination site          |
|                              | VMware Cloud Director site | 	On-premises vCenter Server | 	NSX + vSAN | 	CDS-managed GCVE SDDC (NSX + vSAN) | 	CDS-managed OCVS SDDC (NSX + vSAN) |	CDS-managed on-premises pVDC (NSX + vSAN) |	CDS-managed VMC SDDC (NSX + vSAN) |
| VMware Cloud Director site   | 	Yes                       | 	Yes                        | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future           |
| On-premises vCenter Server   | 	Yes                       | 	Yes**                      | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future           |
| CDS-managed AVS SDDC         | 	Yes                       | 	Yes                        | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future           |
| CDS-managed GCVE SDDC        | 	Yes                       | 	Yes                        | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future           |
| CDS-managed OCVS SDDC        | 	Yes                       | 	Yes                        | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future           |
| CDS-managed on-premises pVDC | 	Yes                       | 	Yes                        | 	Yes        | 	Yes                                | 	Yes                                |	Yes                   |	Future          |
| CDS-managed VMC SDDC         | 	Future                    | 	Future                     | 	Future     | 	Future                             | 	Future                             | 	Future                |       	Future          |


### Appels api v2 pour la migration:

| Action | Endpoint                                                                                                       | Description                                                                                             | Parameters                                                                                                                 | Request Class | Response Class                                                                                                     |
|-----|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------|
| GET | /vmwareCloudDirector/reference/region                                                                          | get regions                                                                                             |                                                                                                                            |               | [vmwareCloudDirector.Region](<https://eu.api.ovh.com/console/?section=%2FvmwareCloudDirector&branch=v2#get-/vmwareCloudDirector/reference/region>) |     
| GET | /vmwareCloudDirector/organization                                                                              | list organizations                                                                                      |                                                                                                                            |               |                                                                                                                    | 
| GET | /vmwareCloudDirector/organization/{organizationId}                                                             | get organization details                                                                                | organizationid: uuid                                                                                                       |               | vmwareCloudDirector.Organization                                                                                   |      
|  PUT   | /vmwareCloudDirector/organization/{organizationId}                                                             | update organization details                                                                             | organizationid: uuid <br/> Description: string <br/> FullName: string                                                      | vmwareCloudDirector.Organization.Update  | vmwareCloudDirector.Organization                                                                                   |      
| GET    | /vmwareCloudDirector/organization/{organizitionId}/event                                                       | list events                                                                                             | organizationId: uuid                                                                                                       |               | common.Event[]                                                                                                     |      
|  GET   | /vmwareCloudDirector/organization/{organizitionId}/task                                                        | list tasks                                                                                              | organizationId: uuid                                                                                                       |               | common.Task[]                                                                                                      |      
|  GET   | /vmwareCloudDirector/organization/{organizitionId}/task/{taskId}                                               | list tasks                                                                                              | organizationId: uuid <br/> taskId: uuid                                                                                    |               | common.Task                                                                                                        |      
|  GET   | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter                                           | list organization Virtual Data Center                                                                   | organizationId: uuid                                                                                                       |               | vmwareCloudDirector.VirtualDataCenter[]                                                                            |      
| GET    | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}                     | get organization Virtual Data Center details                                                            | organizationId: uuid <br/> virtualDataCenterId: uuid                                                                       |               |                                                                                                                    |
| PUT    | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}                     | update organization Virtual Data Center details                                                         | organizationId: uuid <br/> virtualDataCenterId: uuid <br/> name: string <br/> description: string <br/> vCPUSpeed: integer |               |                                                                                                                    |
| GET    | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}/compute             | list organization associated all <br/> compute resources, aggregate of organization Virtual Data Center | organizationId : uuid <br/> virtualDataCenterId : uuid                                                                     |               | vmwareCloudDirector.Compute[]                                                                                      |      
|  GET   | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId} | get organization compute resource                                                                                                        | organizationId: uuid <br/> virtualDataCenterId: uuid <br/> computeId: uuid                                                 |               | vmwareCloudDirector.Compute                                                                                        |      
| GET    | /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}/storage             |  list organization associated all storage resources, aggregate of organization Virtual Data Center | organizationId: uuid <br/> virtualDataCenterId: uuid                                                                       |               | vmwareCloudDirector.Storage[]                                                                                      |      
|  GET   |  /vmwareCloudDirector/organization/{organizitionId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}   | get organization storage resource         | organizationId: uuid <br/> virtualDataCenterId: uuid <br/> storageId: uuid                                                     |               |   vmwareCloudDirector.Storage                                                                                                                 |      

## Étape 3 - Les cas particuliers

### Cas multi-vDC

| Étapes               | Check                                                                                 | Actions                                                                                                                                                                                                                                     | Durée | Client | OVHcloud | Commentaires |
|----------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|----------|--------------|
| Pre-check            | Multi vDC (avertissement)                                                             | 	- Public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                         | ?     | Oui    | Oui      |              |
 
**Zones cas multi-vDC:**

| PCC | id     | Zone                                              | info |
|-----|--------|---------------------------------------------------|------|
| 63  | 	lim1c | - 2 vDC, 1 empty ✅                                |      |
| 144 | 	rbx2a | 	- 2 vDC, 1 empty ✅                               |      |
| 615 | 	rbx2a | 	- Migration in progress to NSX-T (avertissement) |      |
| 677 | 	rbx2a | 	- 2 vDC, 1 empty ✅                               |      |
| 530 | 	rbx2b | 	- 3 vDC, 2 empty ✅                               |      | 
| 675 | 	rbx2b | 	- 2 vDC without NSX (erreur)                     |      |
| 806 | 	rbx2b | 	- Migration in progress to NSX-T (avertissement) |      |

///

### Glossaire

- **Offres Essential** et **SDDC**:
- **PRE/NSX/vSphere**:

### Bibliography

- [VMware-NSX-Migration-for-VMware-Cloud-Director 1.4.2 user-guide GUID-index](<https://docs.vmware.com/en/VMware-NSX-Migration-for-VMware-Cloud-Director/1.4.2/user-guide/GUID-index.html>){.external}
- [Alternative solutions for unsupported features in vmware nsx migration for vmware cloud director](<https://blogs.vmware.com/cloudprovider/2023/09/alternative-solutions-for-unsupported-features-in-vmware-nsx-migration-for-vmware-cloud-director.html>){.external}
- [End of nsx migration for vmware cloud director what should i know](<https://blogs.vmware.com/cloudprovider/2023/09/end-of-nsx-migration-for-vmware-cloud-director-what-should-i-know.html>){.external}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [channel Discord dédié](<https://discord.gg/ovhcloud>){.external}.

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
