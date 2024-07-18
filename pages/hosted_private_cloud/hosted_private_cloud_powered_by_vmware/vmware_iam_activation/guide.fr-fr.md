---
title: "IAM pour VMware on OVHcloud - Comment activer IAM"
excerpt: "Découvrez comment activer IAM pour votre offre VMware on OVHcloud via l'espace client OVHcloud ou par le biais de l'API OVHcloud"
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

> [!warning]
>
> Cette fonctionnalité IAM pour VMware on OVHcloud est actuellement en phase bêta. Ce guide peut donc être incomplet. Notre équipe reste disponible sur notre canal Discord dédié. N’hésitez pas à nous rejoindre et à nous contacter : <https://discord.gg/ovhcloud>. Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud.
>

## Objectif

**Ce guide vous détaille comment activer IAM avec Hosted Private Cloud - VMware on OVHcloud via l'espace client OVHcloud ou par le biais de l'API OVHcloud**.

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware).
- Avoir un vSphere managé OVHcloud compatible (sans les fonctionnalités NSX ou les options de sécurités PCi-DSS, HDS, SNC).

## En pratique

### Activer IAM

> [!primary]
> Cette opération peut prendre jusqu’à 30 minutes.

/// details | Comment activer IAM sur Hosted Private Cloud VMware on OVHcloud ?

### Via l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur l'onglet `Hosted Private Cloud`{.action}.

Cliquez sur la rubrique `VMware`{.action}, sélectionnez votre infrastructure puis rendez-vous dans l'onglet `Utilisateurs`{.action}.

Sous la section `IAM OVHcloud`{.action}, cliquez sur `Activer l'IAM OVHcloud`{.action}.

![Activer IAM](images/iam_enable_2.png){.thumbnail}

> [!success]
> Une fois IAM activé, son statut sera `Activé` (*Enabled*) et en vert.

![Activer IAM](images/iam_enable_3.png){.thumbnail}

### Via l'API OVHcloud

> [!success]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.
>

> [!warning]
> Veillez à remplacer le `serviceName` par la référence de votre service PCC, sous la forme `pcc-XXX-XXX-XXX-XXX`.
>

Pour activer l'option IAM, exécutez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/iam/enable
>
> **Paramètre** :
> 
> **serviceName :** le service de votre vSphere managé, exemple (pcc-XXX-XXX-XXX-XXX).
>

#### Pour vérifier si IAM est activé

Pour contrôler l'activation d'IAM, exécutez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/iam
>

Retour de l'API :

```shell
{
  "state": "enabled",
  "identityProviderId": 275
}
```
///

## Aller plus loin

Vous pouvez maintenant suivre le guide « [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role) ».

**IAM pour VMware on OVHcloud - Index des guides :**

- Guide 1 : [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : IAM pour VMware on OVHcloud - Comment activer IAM
- Guide 3 : [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [IAM pour VMware on OVHcloud - Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).