---
title: "Activer NSX-T dans un Hosted Private Cloud VMware on OVHcloud"
excerpt: "Découvrez comment ajouter les droits à un utilisateur et aux Datacentres pour NSX-T"
updated: 2024-05-07
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

Une fois connecté à l'espace client OVHcloud, cliquez sur l'onglet <code class="action">Hosted Private Cloud</code>.
</br></br>
- Lien OVHcloud : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XXX > Remplacez le par le nom de vôtre organization privée.

<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_7.png" loading="lazy"></p>

</details>

### Etape 2 - Activer NSX-T

<details>

<summary>Comment activer l'interface NSX-T pour votre utilisateur ?</summary>

Depuis la page précedente, éditez l'utilisateur avec lequel vous souhaitez accéder à l'interface Web NSX-T : 
</br></br>
<code class="action">VMware</code> > <code class="action">PCC-XX..</code> > <code class="action">Utilisateur</code> > <code class="action">Modifier</code> puis activez le bouton <code class="action">NSX Interface</code>.

<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_3.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_6.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_1.png" loading="lazy"></p>

</details>

### Etape 3 - Ajouter les droits NSX-T

<details>
<summary>Comment ajouter les droits pour votre utilisateur ?</summary>

Cliquez sur : <code class="action">VMware</code> > <code class="action">PCC-XX-XX-XX-XX</code> > <code class="action">Utilisateur</code> > <code class="action">Modifier</code>.

<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_7.png" loading="lazy"></p>

</details>


### Etape 4 - Ajouter les droits NSX-T aux Datacentres

<details>
<summary>Comment ajoutez les droits aux Datacentres ?</summary>

Il ne vous reste plus que à modifier les droits de chaque Datacenter souhaité en cliquant sur : <code class="action">VMware</code> > <code class="action">PCC-XX-XX-XX-XX</code> > <code class="action">Utilisateur</code> > <code class="action">Voir / Modifier les droits par DC</code> > <code class="action">Modifier</code>.
</br></br>
Une fenetre s'ouvre alors. Choisissez les droits nécessaires parmi les 3 sections principales > <code class="action">Accès Vsphere</code> / <code class="action">Accès au vmNetwork</code> / <code class="action">Accès aux V(x)Lans</code>.
</br></br>
Les droits suivants sont disponibles : <strong>Operateur</strong> / <strong>Administrateur</strong> / <strong>Aucun</strong> / <strong>Lecture seule</strong>
</br></br>
Uniquement l'accès aux <code class="action">V(x)Lans</code> en <strong>Lecture seule</strong> est necessaire pour accéder à l'interface Web NSX-T.
</br></br>
Choississez <code class="action">Lecture seule</code>.
</br></br>
Si vous voulez faire des modifications dans l'interface Web NSX-T, des droits supplémentaire seront alors nécessaires, tels que <strong>Opérateur</strong> ou <strong>Administrateur</strong>.

<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_8.png" loading="lazy"></p>

</details>

### Etape 5 - Accéder à l'interface NSX-T

<details>
<summary>Comment accéder à l'interface Web NSX-T ?</summary>

Toujours depuis votre arborescence Hosted Private Cloud, cliquez sur <code class="action">VMware</code> > <code class="action">PCC-XX-XX-XX-XX</code>.
</br></br>
- Lien OVHcloud : https://www.ovh.com/manager/#/dedicated/dedicated_cloud/PCC-XX-XX-XX-XX > Remplacez le par le nom de vôtre organization privée PCC.

<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_9.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_10.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_11.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="/images/nsx_user_rights_12.png" loading="lazy"></p>

</details>

## Aller plus loin

- [Gestion des segments dans NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-02-segment-management)

- [FAQ NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-11-faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
