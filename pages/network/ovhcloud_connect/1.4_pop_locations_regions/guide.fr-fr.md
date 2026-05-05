---
title: 'OVHcloud Connect - PoPs et régions'
excerpt: 'Comprenez le fonctionnement d''OCC avec les PoPs et les régions, et identifiez ceux qui correspondent le mieux à votre infrastructure'
updated: 2026-02-18
---

## Introduction

Lorsque vous mettez en place OVHcloud Connect, vous choisissez un ou plusieurs **Points de présence (PoP)** comme point de raccordement entre votre réseau (ou celui de votre provider) et OVHcloud. Chaque PoP est rattaché à une zone géographique spécifique ; par conséquent, il ne peut accéder qu'aux régions OVHcloud situées dans cette même zone.

Ce guide explique comment les PoPs et les régions OVHcloud interagissent avec OVHcloud Connect, et fournit un cadre pour sélectionner le PoP le plus adapté aux besoins spécifiques de votre infrastructure.

## Comprendre les régions et les PoPs

### Régions

OVHcloud organise son infrastructure en **régions** — des zones géographiques où sont hébergés les datacenters et les services. Chaque région peut contenir un ou plusieurs PoPs où OVHcloud Connect est disponible.

### Points de présence (PoP)

Les PoPs OVHcloud sont situés dans des datacenters majeurs, neutres vis-à-vis des opérateurs, gérés par nos partenaires. Si vous commandez une connexion **Direct**, vous devez être présent (ou organiser un circuit) dans le même datacenter pour installer un cross-connect.

Si vous utilisez un **Provider**, ce dernier prend en charge la connectivité physique et peut atteindre le PoP depuis un autre site.

> [!primary]
> OVHcloud ajoute régulièrement de nouveaux emplacements. Consultez toujours la [page web OVHcloud Connect](https://www.ovhcloud.com/en-gb/network/ovhcloud-connect/) pour disposer de la liste la plus à jour.
>

## Comment choisir un PoP

Lors de la sélection d'un PoP pour votre service OVHcloud Connect, prenez en compte les éléments suivants :

### 1. Proximité (latence)

Choisissez le PoP géographiquement le plus proche de votre infrastructure pour minimiser le délai réseau. Par exemple, si votre datacenter est à Paris, un PoP français offrira la latence la plus faible.

### 2. Disponibilité du provider

Si vous utilisez OVHcloud Connect Provider, vérifiez que le provider choisi est présent au PoP. Tous les providers ne sont pas disponibles dans chaque PoP.

### 3. Redondance

Pour les architectures à haute disponibilité, sélectionnez **deux PoPs situés à des emplacements distincts** afin qu'une défaillance d'un site unique ne mette pas votre connexion hors service. Suivez l'un des tutoriels d'architecture résiliente pour plus de détails :
- [On-prem](../4.2_resilient/4.1.2_onprem_resilient/guide.fr-fr.md)
- [WAN](../4.2_resilient/4.2.2_wan_resilient/guide.fr-fr.md)
- [AWS](../4.2_resilient/4.3.2_aws_resilient/guide.fr-fr.md)
- [Azure](../4.2_resilient/4.4.2_azure_resilient/guide.fr-fr.md)
- [GCP](../4.2_resilient/4.5.2_gcp_resilient/guide.fr-fr.md)

### 4. Exigences réglementaires / résidence des données

Certains secteurs ou pays exigent que les données restent dans une zone géographique spécifique. Choisissez un PoP et une région conformes à vos obligations de résidence des données.

### 5. Région OVHcloud cible

Pour garantir les meilleures performances, votre service OVHcloud Connect doit aboutir dans la région où s'exécutent (ou s'exécuteront) vos workloads OVHcloud. Vérifiez que le PoP dessert la région dont vous avez besoin.

## Tableaux de correspondance PoP / région

Les tableaux suivants listent les régions accessibles depuis chaque PoP, la région OVHcloud à faible latence correspondante, ainsi que la bande passante OCC Direct disponible, par zone géographique :

> [!tabs]
> Europe
>>
>> | Liste des régions accessibles |
>> | :--- |
>> | Allemagne - Limburg (`eu-west-lim`) |
>> | Angleterre - Erith (`eu-west-eri`) |
>> | France - Gravelines (`eu-west-gra`) |
>> | France - Paris (`eu-west-par`) |
>> | France - Roubaix (`eu-west-rbx`) |
>> | France - Strasbourg (`eu-west-sbg`) |
>> | Pologne - Varsovie (`eu-central-waw`) |
>> 
>> Tableau de correspondance PoP / région à faible latence
>> 
>> | Ville | PoP | Région OVHcloud à faible latence | 1 Gbps | 10 Gbps | 100 Gbps |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Francfort** | Equinix - FR5 | Limburg (`eu-west-lim`) | X | X | X |
>> | **Lille** | ETIX - ETX2 | Roubaix (`eu-west-rbx`) | X | X | |
>> | **Londres** | Equinix - LD5 | Erith (`eu-west-eri`) | X | X | |
>> | **Londres** | Telehouse - West | Erith (`eu-west-eri`) | X | X | |
>> | **Madrid** | Digital Realty - MAD2 | - | X | X | |
>> | **Paris** | Equinix - PA3 | Paris (`eu-west-par`) | X | X | X |
>> | **Paris** | GlobalSwitch | Paris (`eu-west-par`) | X | X | |
>> | **Paris** | Telehouse - TH2 | Paris (`eu-west-par`) | X | X | X |
>> | **Varsovie** | Equinix - WA2 | Varsovie (`eu-central-waw`) | X | X | |
>>
> Amérique du Nord
>>
>> | Liste des régions accessibles |
>> | :--- |
>> | Canada - Beauharnois (`ca-east-bhs`) |
>> | Canada - Toronto (`ca-east-tor`) |
>> 
>> Tableau de correspondance PoP / région à faible latence
>> 
>> | Ville | PoP | Région OVHcloud à faible latence | Bande passante OCC Direct (Gbps) |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Montréal** | Cologix - MTL3 | Beauharnois (`ca-east-bhs`) | X | X | |
>> | **Toronto** | Equinix - TR1 | Toronto (`ca-east-tor`) | X | X | |
>>
> Asie-Pacifique
>>
>> | Liste des régions accessibles |
>> | :--- |
>> | Singapour - Singapour (`ap-southeast-sgp`) |
>> | Inde - Mumbai (`ap-south-mum`) |
>> 
>> Tableau de correspondance PoP / région à faible latence
>> 
>> | Ville | PoP | Région OVHcloud à faible latence | Bande passante OCC Direct (Gbps) |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Mumbai** | Equinix - MB2 | Mumbai (`ap-south-mum`) | X | X | |
>> | **Singapour** | Equinix - SG1 | Singapour (`ap-southeast-sgp`) | X | X | |

## Et ensuite ?

- Comprenez le [Multi-AZ](../1.5_multi_az/guide.fr-fr.md) pour les architectures résilientes
- Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md) pour la mise en place technique

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
