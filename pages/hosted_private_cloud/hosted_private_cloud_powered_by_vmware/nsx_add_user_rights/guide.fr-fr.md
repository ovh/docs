---
title: "Droits utilisateur NSX"
excerpt: "Ajouter les droits à un utilisateur pour accéder à la console NSX"
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

## Objective

Ce guide permet de vous expliquer comment ajouter les droits à un utilisateur de votre organisation "Hosted Private Cloud" OVH pour accéder à la console Web NSX-T.

Ces droits sont données depuis la console [OVH Manager](https://www.ovh.com/manager).


## Requirements

- Avoir souscrit une offre [Hosted Private Cloud](https://www.ovhcloud.com/en/hosted-private-cloud/vmware/)
avec les options **"Network Security Virtualization"** ou **"Software-Defined Datacenter"** 
- Se connecter à votre compte OVH (Si vous ne savez pas: suivez cette documentation : [Se connecter à votre compte OVH](https://help.ovhcloud.com/csm/en-account-log-in-ovhcloud-control-panel?id=kb_article_view&sysparm_article=KB0043032)</summary>
- Être contact administrateur de l'infrastructure VMware on OVHcloud, celui-ci recevant les identifiants de connexion.
- Avoir lu cette documentation : [Premiers pas avec NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-first-steps?id=kb_article_view&sysparm_article=KB0056837)

## Instructions

### Etape 1 : Accéder à votre Organisation privée
<details>

<summary>Comment accéder à votre organisation privée ?</summary>

1. Dans la console OVH Manager allez dans la section du bandeau central : `Hosted Private Cloud`
- <ins>Lien OVH</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XXX -> Remplacez le par le nom de vôtre organization privée.
</summary>

![NSX catures](images/nsx_user_rights_7.png){.thumbnail}

</details>

### Etape 2 : Activer NSX-T
<details>

<summary>Comment activer l'interface NSX-T pour votre utilisateur ?</summary>

<summary>

2. Depuis la capture précedente, éditez l'utilisateur avec lequel vous souhaitez accéder à l'interface Web NSX-T : `"VMware" -> PCC-XX.. -> Users -> Edit` puis activer le boutton `NSX Interface`</summary>

![NSX catures](images/nsx_user_rights_2.png){.thumbnail}

![NSX catures](images/nsx_user_rights_6.png){.thumbnail}

![NSX catures](images/nsx_user_rights_1.png){.thumbnail}

</details>

### Etape 3 : Ajouter les droits NSX-T
<details>
<summary>Comment ajouter les droits pour votre utilisateur ?</summary>

<summary>

3. Ensuite Cliquez sur : `"VMware" -> PCC... -> Users -> View-Edit the right for each DC`

</summary>

![NSX catures](images/nsx_user_rights_7.png){.thumbnail}

</details>


### Etape 4 : Ajouter les droits au Datacenters

<details>
<summary>Comment ajoutez les droits aux Datacenters ?</summary>

4. Il ne vous reste plus que à modifier les droits de chaque Datacenter souhaité en cliquant sur : `Modify rights`


<summary>Comment activez l'accès au V(x)Lans ? </summary>

<summary>

4.1.  Une fenetre s'ouvre et choisissez les droits necessaires, vous avez 3 sections : 
   
   - `Vsphere access, Acess to the VM Network, Access to the V(X)Lans` 
   
   Vous avez le choix entre : ` Operator / Administrator / None / Read-Only`

</summary>

<summary>

4.1.2. Uniquement l'option `V(x)LANs` est necessaire pour accéder à NSX

</summary>



![NSX catures](images/nsx_user_rights_8.png){.thumbnail}

</details>

### Etape 5 : Accéder à l'interface NSX-T
<details>
<summary>Comment accéder à l'interface Web NSX-T ?</summary>

<summary>

5. Toujours depuis votre arborescence Hosted Private Cloud, Cliquez sur : `"VMware" -> XXX-XXX..`
-  <ins>Lien OVH</ins> : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XXX -> Remplacez le par le nom de vôtre organization privée.
</summary>

![NSX catures](images/nsx_user_rights_9.png){.thumbnail}

![NSX catures](images/nsx_user_rights_10.png){.thumbnail}

![NSX catures](images/nsx_user_rights_11.png){.thumbnail}

![NSX catures](images/nsx_user_rights_12.png){.thumbnail}

</details>

## Go further
Allez plus loin avec nos offres réseaux VMware managé par OVH : ["Contactez Nous"](https://www.ovhcloud.com/fr/contact/)
- Vous pouvez poursuivre avec cette documentation : [Gestion des ségments dans NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-segment-management?id=kb_article_view&sysparm_article=KB0056848)
- Ainsi que la [FAQ NSX](https://help.ovhcloud.com/csm/fr-vmware-nsx-faq?id=kb_article_view&sysparm_article=KB0058413)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur le lien "Contactez nous"  ci-dessus pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Vous pouvez aussi vous joindre à notre communité d'utilisateurs OVH sur :  <https://community.ovh.com/en/>.
