---
title: "Activer NSX-T dans un Hosted Private Cloud VMware on OVHcloud"
excerpt: "Découvrez comment ajouter les droits à un utilisateur et aux Datacentres pour NSX-T"
updated: 2024-05-07
flag: hidden
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

## Objectif

Ce guide vous détaille comment ajouter les droits de lecture à un utilisateur pour accéder à la console Web NSX-T de votre Hosted Private Cloud - VMware on OVHcloud.

Ces droits sont accordés depuis l'[espace client OVHcloud](/links/manager).

## Prérequis

- Avoir souscrit une offre [Hosted Private Cloud](https://www.ovhcloud.com/fr/hosted-private-cloud/vmware/) avec les options **"Network Security Virtualization"** ou **"Software-Defined Datacenter"** 
- Etre connecté à l'[espace client OVHcloud](/links/manager)
- Être contact administrateur de l'infrastructure VMware sur OVHcloud, celui-ci recevant les identifiants de connexion.
- Avoir suivi les étapes de cette documentation : [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

## Instructions

### Etape 1 - Accéder à votre Hosted Private Cloud

<details>

<summary>Comment accéder à votre Hosted Private Cloud - VMware On OVHcloud ?</summary>

Une fois connecté à l'espace client OVHcloud, cliquez sur l'onglet `Hosted Private Cloud`{.action}.

- <ins>Lien OVHcloud</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XXX > Remplacez le par le nom de vôtre organization privée.

![NSX screenshot](images/nsx_user_rights_7.png){.thumbnail}

</details>

### Etape 2 - Activer NSX-T

<details>

<summary>Comment activer l'interface NSX-T pour votre utilisateur ?</summary>

Depuis la page précedente, éditez l'utilisateur avec lequel vous souhaitez accéder à l'interface Web NSX-T : `VMware`{.action} > `PCC-XX..`{.action} > `Utilisateur`{.action} > `Modifier`{.action} puis activez le bouton `NSX Interface`{.action}.

![NSX screenshot](images/nsx_user_rights_2.png){.thumbnail}

![NSX screenshot](images/nsx_user_rights_6.png){.thumbnail}

![NSX screenshot](images/nsx_user_rights_1.png){.thumbnail}

</details>

### Etape 3 - Ajouter les droits NSX-T

<details>
<summary>Comment ajouter les droits pour votre utilisateur ?</summary>

Cliquez sur : `VMware`{.action} > `PCC-XX-XX-XX-XX`{.action} > `Utilisateur`{.action} > `Modifier`{.action}.

![NSX screenshot](images/nsx_user_rights_7.png){.thumbnail}

</details>


### Etape 4 - Ajouter les droits NSX-T aux Datacentres

<details>
<summary>Comment ajoutez les droits aux Datacentres ?</summary>

Il ne vous reste plus que à modifier les droits de chaque Datacenter souhaité en cliquant sur : `VMware > PCC-XX-XX-XX-XX > Utilisateur > Voir / Modifier les droits par DC > Modifier`

Une fenetre s'ouvre alors. Choisissez les droits nécessaires parmi les 3 sections principales >  `Accès Vsphere` / `Accès au vmNetwork` / `Accès aux V(x)Lans`.

Les droits suivants sont disponibles : **Operateur / Administrateur / Aucun / Lecture seule**

Uniquement l'accès aux `V(x)Lans` en **Lecture seule** est necessaire pour accéder à l'interface Web NSX-T.

Choississez `Lecture seule`

Si vous voulez faire des modifications dans l'interface Web NSX-T, des droits supplémentaire seront alors nécessaires, tels que **Opérateur ou Administrateur**

![NSX screenshot](images/nsx_user_rights_8.png){.thumbnail}

</details>

### Etape 5 - Accéder à l'interface NSX-T

<details>
<summary>Comment accéder à l'interface Web NSX-T ?</summary>


Toujours depuis votre arborescence Hosted Private Cloud, cliquez sur  `VMware > PCC-XX-XX-XX-XX`{.action}

-  <ins>Lien OVHcloud</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XX-XX-XX-XX > Remplacez le par le nom de vôtre organization privée PCC.

![NSX screenshot](images/nsx_user_rights_9.png){.thumbnail}

![NSX screenshot](images/nsx_user_rights_10.png){.thumbnail}

![NSX screenshot](images/nsx_user_rights_11.png){.thumbnail}

![NSX screenshot](images/nsx_user_rights_12.png){.thumbnail}

</details>

## Aller plus loin

- [Gestion des segments dans NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-02-segment-management)

- [FAQ NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-11-faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
