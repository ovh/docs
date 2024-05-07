---
title: "Activer NSX-T dans un Hosted private Cloud VMware sur OVH"
excerpt: "Ajouter les droits à un utilisateur et aux Datacentres pour NSX-T"
updated: 2023-04-24
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

Ce guide permet de vous expliquer comment ajouter les droits de lecture à un utilisateur pour accéder à la console Web NSX-T de votre Hosted Private Cloud - VMware On OVHcloud.

Ces droits sont données depuis la console [OVHcloud Manager](https://www.ovh.com/manager).


## Prérequis

- Avoir souscrit une offre [Hosted Private Cloud](https://www.ovhcloud.com/en/hosted-private-cloud/vmware/)
avec les options **"Network Security Virtualization"** ou **"Software-Defined Datacenter"** 
- Se connecter à votre compte OVHcloud (Si vous ne savez pas: suivez ce guide : [Se connecter à votre compte OVHcloud](https://help.ovhcloud.com/csm/en-account-log-in-ovhcloud-control-panel?id=kb_article_view&sysparm_article=KB0043032)</summary>
- Être contact administrateur de l'infrastructure VMware sur OVHcloud, celui-ci recevant les identifiants de connexion.
- Avoir lu ce guide : [Premiers pas avec NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-first-steps?id=kb_article_view&sysparm_article=KB0056837)

## Instructions

### Etape 1 : Accéder à votre Hosted Private Cloud - VMware sur OVHcloud
<details>

<summary>Comment accéder à votre Hosted Private Cloud - VMware On OVHcloud ?</summary>

1. Dans la console OVHcloud Manager allez dans la section du bandeau du haut central : `Hosted Private Cloud`
- <ins>Lien OVHcloud</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XXX -> Remplacez le par le nom de vôtre organization privée.
</summary>

![NSX catures](images/nsx_user_rights_7.png){.thumbnail}

</details>

### Etape 2 : Activer NSX-T
<details>

<summary>Comment activer l'interface NSX-T pour votre utilisateur ?</summary>

<summary>

2. Depuis la capture précedente, éditez l'utilisateur avec lequel vous souhaitez accéder à l'interface Web NSX-T : `"VMware" -> PCC-XX.. -> Utilisateur -> Modifier` puis activer le boutton `NSX Interface`</summary>

![NSX catures](images/nsx_user_rights_2.png){.thumbnail}

![NSX catures](images/nsx_user_rights_6.png){.thumbnail}

![NSX catures](images/nsx_user_rights_1.png){.thumbnail}

</details>

### Etape 3 : Ajouter les droits NSX-T
<details>
<summary>Comment ajouter les droits pour votre utilisateur ?</summary>

<summary>

3. Ensuite Cliquez sur : `VMware -> PCC-XX-XX-XX-XX -> Utilisateur -> Modifier`

</summary>

![NSX catures](images/nsx_user_rights_7.png){.thumbnail}

</details>


### Etape 4 : Ajouter les droits NSX-T aux Datacentres

<details>
<summary>Comment ajoutez les droits aux Datacentres ?</summary>

4. Il ne vous reste plus que à modifier les droits de chaque Datacenter souhaité en cliquant sur : `VMware -> PCC-XX-XX-XX-XX -> Utilisateur -> Voir / Modifier les droits par DC -> Modifier`


<summary>Comment activez l'accès au V(x)Lans ? </summary>

<summary>

4.1.  Une fenetre s'ouvre et choisissez les droits necessaires, vous avez 3 sections principales ->  `Accès Vsphere / Accès au vmNetwork / Accès aux V(x)Lans` 
   
   Avec comme droits : **Operateur / Administrateur / Aucun / Lecture seule**

   Pour accéder à l'interface NSX-T uniquement les droits vXlan sont necessaire en **Lecture seule**
   
   Choississez -> `Lecture seule`

</summary>

<summary>

4.1.2. Uniquement l'accès aux `V(x)Lans` en **Lecture seule** est necessaire pour accéder à l'interface Web NSX-T, si vous voulez faire des modifications dans l'interface. 

Des droits supplémentaire seront necessaires, tel que : **Opérateur ou Administrateur**

</summary>



![NSX catures](images/nsx_user_rights_8.png){.thumbnail}

</details>

### Etape 5 : Accéder à l'interface NSX-T
<details>
<summary>Comment accéder à l'interface Web NSX-T ?</summary>

<summary>

5. Toujours depuis votre arborescence Hosted Private Cloud, Cliquez sur : `VMware -> PCC-XX-XX-XX-XX`
-  <ins>Lien OVHcloud</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XX-XX-XX-XX -> Remplacez le par le nom de vôtre organization privée PCC.
</summary>

![NSX catures](images/nsx_user_rights_9.png){.thumbnail}

![NSX catures](images/nsx_user_rights_10.png){.thumbnail}

![NSX catures](images/nsx_user_rights_11.png){.thumbnail}

![NSX catures](images/nsx_user_rights_12.png){.thumbnail}

</details>

## Allez plus loin
Allez plus loin avec nos offres réseaux VMware managé par OVHcloud : ["Contactez Nous"](https://www.ovhcloud.com/fr/contact/)
- Vous pouvez poursuivre avec cette documentation : [Gestion des ségments dans NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-segment-management?id=kb_article_view&sysparm_article=KB0056848)
- Ainsi que la [FAQ NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-faq?id=kb_article_view&sysparm_article=KB0058413)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur le lien "Contactez nous"  ci-dessus pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Vous pouvez aussi vous joindre à notre communité d'utilisateurs OVHcloud sur :  <https://community.ovh.com/en/>.
