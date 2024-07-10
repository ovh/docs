---
title: 'Cas de migration VMware Cloud Director on OVHcloud'
excerpt: 'Découvrez comment effectuer votre migration VMware Cloud Director on OVHcloud ainsi que ces cas particuliers et complexes afin de garantir la sécurité de vos données'
updated: 2024-07-09
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
**L'objectif de ce guide est de d'écrire les scénarios les plus difficiles qui puvent compliquer les migrations au sein de VCD on OVHcloud.**

## Prérequis


> [!primary]
>
> Si vous ne savez comment vous connecter au portail web de votre organisation, consultez d'abord le guide « [Comment se connecter à VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging) ».
>

- Un navigateur Web (avec de préférence une base Chromium et la traduction activée en Français).
- Avoir un compte VMware Cloud Director avec des droits utilisateurs admin (vérifiez que votre compte utilisateur dispose des droits suffisants).
- Avoir suivi le guide « [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) ».
- Etre administrateur d'au moins deux organisations VCD sur la plateforme VCD on OVHcloud.
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

### Étape 1 - Migrer PCC vers VCD

/// details | Comment migrer PCC au sein de VCD ?

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
 - [ ]zone
 - [ ]json containing all the subscription details (each line + nic)

///

### Étape 2 - Les cas particuliers de migration PCC vers VCD

/// details | Qu'elles sont les cas particuliers de migration PCC vers VCD ?

Tableau de migration selon les cas d'utilisations:**

| Étapes               | Check                                                                  | Actions                                                                                                                                                                                                                                      | Durée | Client | OVHcloud | Commentaires | Référence à une documentation technique |
|----------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|----------|--------------|-----------------------------------------|
| Durant la migration  | - CARP (Common address redundancy protocol) to be coded.               | - Detection + Implementation coté VCD.                                                                                                                                                                                                       | ?     | Non    | Oui      |              |                                         |
| Durant la migration  | 	- Scale0 on PCC (NSX-T 4.0.1) → ✅                                     | 	- Ignorer ce profile et les enlever.                                                                                                                                                                                                        | ?     | Non    | Oui      |              |                                         |
| Durant la migration  | 	- Edge, Backup infra, zerto infra, private GW... (OVH vms) Virtual Machines → ✅ | 	- Ne pas migrer.                                                                                                                                                                                                                            | ?     | Non    | Oui      |              |                                         |
| Pre-check            | - Multi vDC (avertissement)                                            | 	- Public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                          | ?     | Oui    | Oui      |              |                                         |
| Pre-check            | - FT  ✅                                                                | - Detection + error + E-Mail or detection + E-Mail + Disable FT on PCC side + Migration                                                                                                                                                      |       |        |          |              |                                         |
| Pre-check            | - DRS Affinity/Anti affinity rules (avertissement)                     | - Partial only VMs, distinction between required and preferred in VCD, what do we take by default → detection + VCD implementation side → (avertissement) public documentation VM ↔ host won't be migrated and migrate VMs affinity rules.   |       |        |          |              |                                         |
| Pre-check            | 	- Check special devices (CD...) → ✅                                   | - Public documentation <br/> Notify customer + E-Mail.                                                                                                                                                                                       |       |        |          |              |                                         |
| Pre-check            | - Datastores cluster → (coche)                                         | - Public documentation, notify customer and ignore.                                                                                                                                                                                          |       |        |          |              |                                         |
| Pre-check            | - Memory over-commitment (avertissement)                               | - Public documentation, detect + error + mail to ask customer to add resources or add free resources.                                                                                                                                        |       |        |          |              |                                         |
| Pre-check            | 	- Resource pools → 2 use cases, (avertissement)                       | - Public documentation, no notion on VCD, remove and document.                                                                                                                                                                               |       |        |          |              |                                         |
| Pre-check            | 	- Security option (erreur)                                            | 	- Public documentation and detect security option linked to certification and block.                                                                                                                                                        |       |        |          |              |                                         |
| Pre-check            | 	- Encrypted VM disks 	                                                | - Public documentation, detection and block.                                                                                                                                                                                                 |       |        |          |              |                                         |
| Pre-check            | 	- Zerto (erreur) → list block (avertissement)                         | 	- 8 PCCs (avertissement) public documentation.                                                                                                                                                                                              |       |        |          |              |                                         |
| Pre-check            | 	- Backup ✅	                                                           | - Detection + migration du scenario.                                                                                                                                                                                                         |       |        |          |              |                                         |
| Pre-check            | 	- VM with IDE disk → ???                                              |                                                                                                                                                                                                                                              |       |        |          |              |                                         |
| Pre-check            | 	- Hosts freespare and hourly                                          | - Documentation publique, prévenir le client et retenter la maintenance 01h24, passe in error state CCO to contact client.                                                                                                                   | 01h24 |        |          |              |                                         |
| Pre-check            | 	- SQLServer usage                                                     | 	- 99 % des chances que SQLServer ne soit pas prêt à la date de disponibilité générale.                                                                                                                                                      |       |        |          |              |                                         |
| Pre-check            | 	- Global zpools                                                       | 	- Verify only. Pas de blocage sauf dans le cas de plusieurs instances VCD.                                                                                                                                                                  |       |        |          |              |                                         |
| Pre-check            | 	- Check NSX-v usage                                                   | 	- La documentation publique ne peut pas être migrée si Edge et DFW, pour l'instant blocage de la migration, sont traités dans une autre vague (nous allons vérifier si elle peut être gérée manuellement → 15 occurrences avec utilisation) |       |        |          |              |                                         |
| Pre-check            | 	- Check HCX usage (erreur)                                            | 	- Impossible de migrer la documentation publique. La fonctionnalité doit être désactivée avant la migration.                                                                                                                                |       |        |          |              |                                         |


**Tableau de migration selon l'offre Hosted Private Cloud:**

|                            |                                                    |                             |                       |                        |                        |
|----------------------------|----------------------------------------------------|-----------------------------|-----------------------|------------------------|------------------------|
| Source site*               | 	Destination site                                  |
|                            | VMware Cloud Director site                         | 	On-premises vCenter Server | 	CDS-managed AVS SDDC | 	CDS-managed GCVE SDDC | 	CDS-managed OCVS SDDC |	CDS-managed on-premises pVDC |	CDS-managed VMC SDDC |
| VMware Cloud Director site | 	Yes                                               | 	Yes                        | 	Yes                  | 	Yes                   | 	Yes                   |	Yes                  |	Future           |
| On-premises vCenter Server | 	Yes                                               | 	Yes**                      | 	Yes                  | 	Yes                   | 	Yes                   |	Yes                 |	Future         |
| CDS-managed AVS SDDC       | 	Yes                                               | 	Yes                        | 	Yes                  | 	Yes                   | 	Yes                   |	Yes                   |	Future           |
| CDS-managed GCVE SDDC      | 	Yes                                               | 	Yes                        | 	Yes                  | 	Yes                   | 	Yes                   |	Yes                   |	Future           |
| CDS-managed OCVS SDDC      | 	Yes                                               | 	Yes                        | 	Yes                  | 	Yes                   | 	Yes                   |	Yes                   |	Future           |
| CDS-managed on-premises  pVDC           |	Yes  | 	Yes                        | 	Yes                  | 	Yes                   | 	Yes                   |	Yes             |	Future |
| CDS-managed VMC SDDC       | 	Future                                            | 	Future                     | 	Future               | 	Future                | 	Future                | 	Future |	Future |

## Étape 3 - Les cas particuliers

### Multi vDC

| Étapes               | Check                                                                                 | Actions                                                                                                                                                                                                                                     | Durée | Client | OVHcloud | Commentaires |
|----------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|----------|--------------|
| Pre-check            | Multi vDC (avertissement)                                                             | 	- Public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                         | ?     | Oui    | Oui      |              |


///

## Aller plus loin

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [Discord channel dédié](<https://discord.gg/ovhcloud>){.external}.

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
