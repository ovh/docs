---
title: 'Cas de migration VMware Cloud Director on OVHcloud'
excerpt: 'Découvrez comment effectuer votre migration VMware Cloud Director on OVHcloud ainsi que ces cas particuliers et complexes afin de garantir la sécurité de vos données'
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
> VCD on OVHcloud est actuellement en phase alpha. Ce guide peut donc être incomplet. Notre équipe reste disponible sur notre canal Discord dédié: <https://discord.gg/ovhcloud>.
>

## Objectif

**Découvrez comment effectuer la migration d'un service vSphere managé au sein de VMware Cloud Director on OVHcloud, ainsi que les cas particuliers à mettre au jour.**

## Prérequis

- Un navigateur Web (avec de préférence une base Chromium et la traduction activée en français).
- Avoir souscrit à une offre et être contact administrateur ou technique de l'infrastructure [Hosted Private Cloud VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).
- Avoir un compte VMware Cloud Director avec des droits utilisateurs admin (vérifiez que votre compte utilisateur dispose des droits suffisants).
- Avoir suivi les guides : 
  - « [VMware Cloud Director - Les concepts fondamentaux de VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts) ».
  - « [VMware Cloud Director - Network - Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts) ».
- Avoir une bonne connaissance du réseau au sein de l'univers OVHcloud, vous pouvez consulter la page: <https://www.ovhcloud.com/fr/network/>.
- Être administrateur d'au moins une ou deux organisations VCD sur la plateforme VCF on OVHcloud et les services vSphere managé (Hosted Private Cloud VMware on OVHcloud ou PCC) afin d'avoir les droits suffisant pour effectuer la migration des données (déchiffrement, etc..). 

## En pratique

/// details | Introduction

Bienvenue dans le guide complet sur la migration vers VMware Cloud Director au sein de l'écosystème VMware on OVHcloud. 

Ce guide vise à aborder les cas d'utilisations les plus difficiles et les plus nuancés que vous pouvez rencontrer au cours d'un processus de migration à chaud. 

Les charges de travail migrées ici sont des environnements vSphere managé on OVHcloud (Hosted Private Cloud VMware on OVHcloud -> PCC) à faire migrer sur une infrastructure VMware Cloud Director (VCF). Ce guide vous détails étapes par étapes la création d'un vMotion de vos machines virtuelles à chaud entre les réseaux publiques et privées sans perte de connectivités.

Notre objectif est aussi de nous attaquer à ce cas de migration et aux scénarios difficiles qui compliquent souvent les migrations à chaud, en offrant des perspectives et des stratégies tirées d'expériences réelles. 

Vous serez ainsi équipé pour naviguer dans les complexités des migrations de VMware Cloud Director on OVHcloud en toute confiance et avec efficacité.

///

## Étape 1 - Migration hybride vSphere/vCenter managé vers du VCD managé (OVHcloud)

/// details | Comment va s'effectuer la migration vSphere/vCenter vers VCD ?

Le but est de migrer toutes les instances vSphere managé on OVHcloud existantes qui sont marqués avec le tag **"VCDMigrationPath"**.

Ces instances clientes proviennent principalement des offres **Essential** et **SDDC** mais nous pouvons avoir des références **PRE/NSX/vSphere** et même vSAN pour les premiers hosts vSAN.

Voici ici l'exemple d'une migration de machines virtuelles vSphere vers VCD.

### Depuis le control panel OVHcloud

Pour accéder au vSphere managé (Hosted Private Cloud VMware on OVHcloud) web interface.

Connectez-vous à votre [espace client OVHcloud](/links/manager) avec un compte administrateur et cliquez sur l'onglet `Hosted Private Cloud`{.action}.

Sélectionnez votre infrastructure: `VMware > ... > Informations générales`{.action}.

Puis cliquez sur le lien de redirection: `Interface web`{.action}.

Une fois connecté sur l'interface web vSphere/vCenter. Nous pouvons commencer les réglages nécessaires à la migration de nos VM d'un point A (vSphere/vCenter managé pcc) à un point B (vSphere/vCenter managé VCD).

#### Politique de stockage (non vMotion)

Pour que la politique de stockage puisse taguer les disques souhaités, il faut l'avoir configuré au préalable.

#### Politique de stockage (vMotion)


#### La migration de VM

![VCD Migration](images/manager_web-interface.png){.thumbnail}

Vous pouvez vous connecter avec IAM ou en utilisateur local.

![VCD Migration](images/manager_web-interface_iam.png){.thumbnail}

Nous vous invitons parallèlement à lancer des: `ping`{.action} depuis des invites de commandes (avec **openssh** par exemple), afin de verifier que vous n'avez pas de perte de connexion entre vos VM et internet.

![VCD Migration](images/manager_web-interface_iam_2.png){.thumbnail}

Vous devez ensuite choisir les machines virtuelles que vous voulez migrer. Sélectionnez votre cluster vSphere/vCenter, allez dans `VM`{.action}.

Cochez (sélectionnez) les machines virtuelles que vous souhaitez migrer.

![VCD Migration](images/vcd_migration.png){.thumbnail}

Puis, faites un clic droit sur les VM sélectionnnés et cliquez sur `Migrer...`{.action}

![VCD Migration 02](images/vcd_migration_2.png){.thumbnail}

Une fois que vous avez cliquez sur: `Migrer...`{.action}

![VCD Migration 03](images/vcd_migration_3.png){.thumbnail}

Une fenêtre vous demande si vous voulez migrer toutes les VM selectionnées.

Cliquez sur: `Oui`{.action}

![VCD Migration 04](images/vcd_migration_4.png){.thumbnail}

Vous arrivez à l'interface de migration vSphere/vCenter. Dans le cas actuel, nous voulons migrer les machines virtuelles vers un serveur vCenter Server non lié au domaine SSO actuel.

Choisissez donc: `Exportation entre vCenter Server`{.action}

Puis cliquez sur: `SUIVANT`{.action}

![VCD Migration Etape 01](images/vcd_migration_5.png){.thumbnail}

La configuration vCenter à utiliser pour VCD est:

- **Vcenter Server adresse:** exemple (**vcenter-gra.vcd.priv.ovhcloud.beta**).
- **Nom d'utilisateur: exemple (**admin@domain.local) -> si vous utilisez IAM (IAM.OVHCLOUD.COM\user123.il1234-ovh)
- **Mot de passe:** XXX -> Avec IAM, le mot de passe doit être celui du control panel manager OVHcloud.

![VCD Migration Etape 01](images/vcd_migration_step_1_5.png){.thumbnail}

Vous devez ici, choisir le centre de données de destination.

![VCD Migration Etape 02](images/vcd_migration_step_2_6.png){.thumbnail}

A l'étape 4, vous devez choisir le 

![VCD Migration Etape 02](images/vcd_migration_step_2_7.png){.thumbnail}

![VCD Migration Etape 03](images/vcd_migration_step_3_8.png){.thumbnail}

![VCD Migration Etape 04](images/vcd_migration_step_4_9.png){.thumbnail}

![VCD Migration Etape 06](images/vcd_migration_step_5_10.png){.thumbnail}

![VCD Migration Etape 06](images/vcd_migration_step_5_11.png){.thumbnail}

#### Import des VM vSphere dans VCD

Depuis le control panel VCD, allez dans: `Centre de données`{.action}, puis dans `Calculer > vApp`{.action}

Cliquez sur `NOUVEAU`{.action}, `Import depuis vCenter`{.action}



**Tableau de migration - Tous les cas d'utilisations:**

| Étapes             | Type de migration | Stockage | Check                                                                            | Actions manuel à lancer                                                                                                                                                                                                                      |  | Actions client | Actions OVHcloud | Commentaires                                                                                  | Référence à une documentation technique | Critères d'acceptations VCD                                                                                                                                                                   | Critères d'acceptations vSphere (PCC)                                                                                                                |
|--------------------|-------------------|----------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------|------------------|-----------------------------------------------------------------------------------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Avant la migration |                   | NFS ?    | - CARP (Common address redundancy protocol) to be coded.                         | - Detection + Implementation coté VCD.                                                                                                                                                                                                       | ?     | None           | Oui              |                                                                                               |                                         | - VCD endpoint available to ask for a tenant creation with the following parameters. <br/> - Pcc name <br/> - Zone <br/> Json containing all the subscription details (each line + nic) <br/> | - Calls an endpoint available on VCD side with. <br/> - PCC name <br/> - Zone <br/> - Json containing all the subscription details (each line + nic) |
| Avant la migration |                   | ?        | 	- Scale0 on PCC (NSX-T 4.0.1) → ✅                                               | 	- Ignorer ce profile et les enlever.                                                                                                                                                                                                        | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Avant la migration |                   |          | 	- Edge, Backup infra, zerto infra, private GW... (OVH vms) Virtual Machines → ✅ | 	- Ne pas migrer.                                                                                                                                                                                                                            | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | - Multi vDC (avertissement)                                                      | 	- Public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                          | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | - FT  ✅                                                                          | - Detection + error + E-Mail or detection + E-Mail + Disable FT on PCC side + Migration                                                                                                                                                      | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | - DRS Affinity/Anti affinity rules (avertissement)                               | - Partial only VMs, distinction between required and preferred in VCD, what do we take by default → detection + VCD implementation side → (avertissement) public documentation VM ↔ host won't be migrated and migrate VMs affinity rules.   | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Check special devices (CD...) → ✅                                             | - Public documentation <br/> Notify customer + E-Mail.                                                                                                                                                                                       | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | - Datastores cluster → ✅                                                         | - Public documentation                                                                                                                                                                                                                       | ?     | None           | Oui              | Notifier client et ignorer.                                                                   |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | - Memory over-commitment (avertissement)                                         | - Public documentation                                                                                                                                                                                                                       | ?     | None           | Oui              | Détecter + Erreurs + E-Mail <br/>  Demander au client pour ajouter ou libérer les ressources. |                                       
| Pre-check          |                   |          | 	- Resource pools → 2 use cases, (avertissement)                                 | - Public documentation                                                                                                                                                                                                                       | ?     | None           | Oui              | Pas de notion sur VCD <br/> Enlever et documenter.                                            |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Security option (erreur)                                                      | 	- Public documentation and detect security option linked to certification and block.                                                                                                                                                        | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Encrypted VM disks 	                                                          | - Public documentation, detection and block.                                                                                                                                                                                                 | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Zerto (erreur) → list block (avertissement)                                   | 	- 8 PCCs (avertissement) public documentation.                                                                                                                                                                                              | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Hosts freespare and hourly                                                    | - Prévenir le client et retenter la maintenance 01h24, passe in error state CCO to contact client.                                                                                                                                           | 01h24 | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Check NSX-v usage                                                             | 	- La documentation publique ne peut pas être migrée si Edge et DFW, pour l'instant blocage de la migration, sont traités dans une autre vague (nous allons vérifier si elle peut être gérée manuellement → 15 occurrences avec utilisation) | ?     | None           | Oui              |                                                                                               |                                         |                                                                                                                                                                                               |                                                                                                                                                      |
| Pre-check          |                   |          | 	- Check HCX usage (erreur)                                                      | 	                                                                                                                                                                                                                                            | ?     | None           | Oui              |  - Impossible de migrer la documentation publique. La fonctionnalité doit être désactivée avant la migration.                                                                                             |                                         |                                                                                                                                                                                               |                                                                                                                                                      |

## Étape 2 - Les cas particuliers

/// details | Quelles sont les cas particuliers de migration ?

### Multi vDC

Dans le cas d'une migration multi-vDC, 

### Le chiffrement/déchiffrement de VM avant/après migration

Si vos données sont chiffrées, vous devez les déchiffrer avant la migration. Voici la procédure de déchiffrement des machines virtuelles avant migration:

Le même service vSphere Trust Authority doit être configuré sur l'hôte de destination ?

### DRS Affinity/Anti affinity rules

DRS Affinity/Anti affinity rules ?

### Zerto 

Car Zerto (erreur) → list block  ?


### Resource pools 

→ 2 use cases ?

### Memory over-commitment (avertissement)

///
## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [channel Discord dédié](<https://discord.gg/ovhcloud>){.external}.

Rejoindre et échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
