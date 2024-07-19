---
title: "IAM pour VMware on OVHcloud - Désactiver l'accès au control panel OVHcloud"
excerpt: "Découvrez comment désactiver l'accès à un utilisateur au control panel OVHcloud grace à une stratégie IAM"
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

**Ce quide vous détaille comment désactiver l'accès au control panel OVHcloud pour un rôle IAM vSphere grace aux stratégies IAM.**

## Prérequis

- Disposer d'un [compte OVHcloud.](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware).
- Avoir activé IAM pour votre service Hosted Private Cloud - VMware on OVHcloud. Suivez les étapes du guide [« IAM pour VMware on OVHcloud - Comment activer IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Avoir lu les guides **IAM pour VMware on OVHcloud** :

  - [« IAM pour VMware on OVHcloud - Présentation et FAQ »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
  - [« IAM pour VMware on OVHcloud - Comment activer IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
  - [« IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
  - [« IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy) »

## En pratique

/// details | Comment associer un utilisateur à une politique IAM globale ?

Connectez-vous à votre [espace client OVHcloud](/links/manager). 

Cliquez sur votre nom en haut à droite de l'espace client puis cliquez sur vos initiales pour accéder à la rubrique `Mon compte`{.action}.

Récapitulation des étapes :

1. Activation d'IAM
2. Création de la politique IAM.
3. Création du HPC rôle (vSphere).
4. Création de l'IAM rôle.
5. Créer un groupe depuis le control panel IAM OVHcloud (sans droits : privilèges "aucun").
6. Créer un utilisateur depuis le control panel OVHcloud puis associer l'utilisateur au groupe supprimant les accès "No_access").
7. Associer l'utilisateur local à la politique IAM (No user_access).
8. Confirmation av une connexion au control panel OVHcloud et avoir le message d'erreur + une connexion à vSphere OK.

Depuis `Mon compte`{.action}, cliquez sur `Identités et accès (IAM)`{.action} et restez dans l'onglet `Politiques.`{.action}.

Cliquez sur: `Créer une politique`{.action}

![IAM No User Access 01](images/){.thumbnail}

![IAM No User Access 02](images/){.thumbnail}

![IAM No User Access 03](images/){.thumbnail}

![IAM No User Access 04](images/){.thumbnail}

![IAM No User Access 05](images/){.thumbnail}

![IAM No User Access 06](images/){.thumbnail}

![IAM No User Access 07](images/){.thumbnail}

///

## Aller plus loin

**IAM pour VMware on OVHcloud - Index des guides :**

- « [Guide 1 : IAM pour VMware on OVHcloud - Présentation et FAQ »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started) 
- « [Guide 2 : IAM pour VMware on OVHcloud - Comment activer IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- « [Guide 3 : IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- « [Guide 4 : IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM ? »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- « Guide 5 : IAM pour VMware on OVHcloud - Désactiver l'accès au control panel OVHcloud »

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou [cliquez ici](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).