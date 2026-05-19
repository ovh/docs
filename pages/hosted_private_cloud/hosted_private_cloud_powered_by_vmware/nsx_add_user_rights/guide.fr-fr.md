---
title: "Activer NSX-T dans un Hosted Private Cloud VMware on OVHcloud"
excerpt: "Découvrez comment ajouter les droits à un utilisateur et aux Datacentres pour NSX-T"
updated: 2024-05-22
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

## Prérequis

- Avoir souscrit une offre [Hosted Private Cloud](/links/hosted-private-cloud/vmware) avec les options **"Network Security Virtualization"** ou **"Software-Defined Datacenter"**
- Être contact administrateur de l'infrastructure VMware sur OVHcloud, celui-ci recevant les identifiants de connexion.
- Avoir suivi les étapes de cette documentation : [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Pour accéder à vos services :** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Sélectionnez votre service vSphere

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## En pratique

### Etape 1 - Activer NSX-T

<details>

<summary>Comment activer l'interface NSX-T pour votre utilisateur ?</summary>

Cliquez sur [ce lien](/links/control-panel/privatecloud-vmware-vsphere) pour accéder à la section `VMware vSphere`{.action}, puis sélectionnez votre service et accédez à `Utilisateur`{.action} > `Modifier`{.action}. Activez le bouton `NSX Interface`{.action}.

<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_3.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_13.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_1.png" loading="lazy"></p>

</details>

### Etape 2 - Ajouter les droits NSX-T

<details>
<summary>Comment ajouter les droits pour votre utilisateur ?</summary>

Cliquez sur [ce lien](/links/control-panel/privatecloud-vmware-vsphere) pour accéder à la section `VMware vSphere`{.action}, puis sélectionnez votre service et accédez à `Utilisateur`{.action} > `Modifier`{.action}.

<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_7.png" loading="lazy"></p>

</details>


### Etape 3 - Ajouter les droits NSX-T aux Datacentres

<details>
<summary>Comment ajoutez les droits aux Datacentres ?</summary>

Il ne vous reste plus qu'à modifier les droits de chaque Datacenter souhaité. Cliquez sur [ce lien](/links/control-panel/privatecloud-vmware-vsphere) pour accéder à la section `VMware vSphere`{.action}, puis sélectionnez votre service et accédez à `Utilisateur`{.action} > `Voir / Modifier les droits par DC`{.action} > `Modifier`{.action}.

Une fenetre s'ouvre alors. Choisissez les droits nécessaires parmi les 3 sections principales > <code class="action">Accès vSphere</code> / <code class="action">Accès au vmNetwork</code> / <code class="action">Accès aux V(x)Lans</code>.

<br><br>
Les droits suivants sont disponibles : <strong>Operateur</strong> / <strong>Administrateur</strong> / <strong>Aucun</strong> / <strong>Lecture seule</strong>
<br><br>
Uniquement l'accès aux <code class="action">V(x)Lans</code> en <strong>Lecture seule</strong> est nécessaire pour accéder à l'interface Web NSX-T.
<br><br>
Choisissez <code class="action">Lecture seule</code>.
<br><br>
Si vous voulez faire des modifications dans l'interface Web NSX-T, des droits supplémentaires seront alors nécessaires, tels que <strong>Opérateur</strong> ou <strong>Administrateur</strong>.

<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_8.png" loading="lazy"></p>

</details>

### Etape 4 - Accéder à l'interface NSX-T

<details>
<summary>Comment accéder à l'interface Web NSX-T ?</summary>

Cliquez sur [ce lien](/links/control-panel/privatecloud-vmware-vsphere) pour accéder à la section `VMware vSphere`{.action}, puis sélectionnez votre service.

<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_9.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_10.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_11.png" loading="lazy"></p>
<p><img alt="NSX screenshot" class="thumbnail" src="images/nsx_user_rights_12.png" loading="lazy"></p>

</details>

### Etape 5 - Informations utiles

Vous pouvez vérifier si NSX-T est activé sur votre Datacenter. Vous pouvez également retrouver votre URL NSX-T et sa version :

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/nsxt

> **Paramètres:**
>
> serviceName: La référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`.
>

Exemple de retour :

```shell
{
  "version": "4.1.1.0.0-22224312",
  "state": "enabled",
  "url": "https://nsxt.pcc-XX-X-X-X.ovh.X",
  "datacentersState": [
    {
      "id": 1542,
      "state": "disabled"
    },
    {
      "state": "enabled",
      "id": 1345
    }
  ]
}
```

> [!primary]
>
> Retrouvez plus d’informations sur l’API OVHcloud dans notre guide « [Premiers pas avec l’API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

## Aller plus loin

- [Gestion des segments dans NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-02-segment-management)
- [FAQ NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-11-faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
