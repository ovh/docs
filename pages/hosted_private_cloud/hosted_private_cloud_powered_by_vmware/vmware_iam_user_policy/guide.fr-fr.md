---
title: "IAM pour VMware on OVHcloud - Comment associer un utilisateur à une politique IAM globale"
excerpt: "Découvrez comment associer une identité OVHcloud à une politique IAM"
updated: 2024-07-19
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
> Cette fonctionnalité IAM pour VMware on OVHcloud est actuellement en phase bêta. Ce guide peut donc être incomplet et mise à jour. L'activation d'IAM est gratuite.
>
> Les infrastructures bénéficiant d'options de réseau NSX et sécurité renforcée ou d'un service certifié ([HDS](/links/conformity-and-certifications/hds), [PCI-DSS](/links/conformity-and-certifications/pci-dss) ou [SNC](/links/conformity-and-certifications/secnumcloud)) ne peuvent actuellement pas utiliser l'IAM OVHcloud.
>

## Objectif

**Ce quide vous détaille comment associer une identité (un utilisateur) OVHcloud à une politique IAM globale**.

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)
- Avoir activé IAM pour votre service Hosted Private Cloud - VMware on OVHcloud. Suivez les étapes du guide « [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation) »

## En pratique

Vous avez la possibilité de créer ou modifier une politique éxistante.

/// details | Comment associer un utilisateur local à une politique IAM globale ?

Connectez-vous à votre [espace client OVHcloud](/links/manager). Cliquez sur votre nom en haut à droite de l'espace client puis cliquez sur vos initiales pour accéder à la rubrique `Mon compte`{.action}.<br>
Sous `Mon compte`{.action}, cliquez sur `Identités et accès (IAM)`{.action} et restez dans l'onglet `Politiques.`{.action}.

![IAM USER POLICY](../vmware_iam_role_policy/images/iam_user_policy_4.png){.thumbnail}

Vous retrouverez vos politiques que vous avez déjà créées.

Cliquez sur:`Modifier la politique`{.action}.

Renseignez alors l'identité souhaitée. Il peut s'agir d'utilisateurs, d'un NIC, d'une adresse e-mail, de groupes d'utilisateurs.

Vous devez cliquer sur `Ajouter des utilisateurs`{.action}.

Dans le champ: **utilisateurs local**. Les utilisateurs apparaissent automatiquement, dans la liste déroulante. Vous retrouverez la même modale pour les groupes locaux.

Validez votre choix en cliquant sur: `Ajouter`{.action}.

![IAM user policy](../vmware_iam_role_policy/images/iam_user_policy_3.png){.thumbnail}

![IAM user policy](../vmware_iam_role_policy/images/iam_user_policy_2.png){.thumbnail}

Et pour finir, cliquez sur: `Créer`{.action, ou alors: `Modifier`{.action} votre politique.

///

## Aller plus loin

**IAM pour VMware on OVHcloud - Index des guides :**

- Guide 1 : [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [IAM pour VMware on OVHcloud - Comment activer IAM ?](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM ?](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM ?](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [IAM pour VMware on OVHcloud - Désactiver l'accès au control panel OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_no-access)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou [cliquez ici](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).