---
title: "IAM pour VMware on OVHcloud - Comment associer un utilisateur à une politique IAM globale"
excerpt: "Découvrez comment associer une identité à une politique IAM OVHcloud"
updated: 2024-11-05
---

> [!primary]
> La fonctionnalité IAM est actuellement en phase bêta. Ce guide peut donc être mis à jour à l'avenir avec les avancées de nos équipes en charge de ce produit.
>

## Objectif

**Ce quide vous détaille comment associer une identité (un utilisateur) OVHcloud à une politique IAM globale**.

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)
- Avoir activé IAM pour votre service Hosted Private Cloud - VMware on OVHcloud. Suivez les étapes du guide « [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation) »

## En pratique

### Comment associer un utilisateur à une politique IAM globale ?

Connectez-vous à votre [espace client OVHcloud](/links/manager). Cliquez sur votre nom en haut à droite de l'espace client puis cliquez sur vos initiales pour accéder à la rubrique `Mon compte`{.action}.

Sous `Mon compte`{.action}, cliquez sur `Identités et accès (IAM)`{.action} et restez dans l'onglet `Politiques`{.action}.

![IAM USER POLICY](images/iam_policies_resize.png){.thumbnail}

Vous retrouvez ici les politiques que vous avez déjà créés.

Cliquez sur votre politique ou sur le bouton `...`{.action} puis sur `Modifier la politique`{.action}.

![IAM USER POLICY](images/iam_policies_modify.png){.thumbnail}

Renseignez alors l'identité souhaitée dans les zones `Utilisateurs locaux` et `Groupes d'utilisateurs`, en cliquant sur `Ajouter des utilisateurs`{.action} ou `Ajouter des groupes d'utilisateurs`{.action}.

![IAM USER POLICY](images/iam_add_user.png){.thumbnail}

Uniquement les Groupes IAM (et non les groupes IAM vSphere) apparaissent automatiquement, attention à bien copier-coller votre choix sans fautes.

Validez l'ajout de votre utilisateur en cliquant sur `Ajouter`{.action}.

Puis, pour terminer votre politique, cliquez sur `Modifier la politique`{.action}.

> [!primary]
> Si votre identité n'est pas présente, vous devez l'ajouter auparavant dans votre espace client OVHcloud.

## Aller plus loin

**IAM pour VMware on OVHcloud - Index des guides :**

- Guide 1 : [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : IAM pour VMware on OVHcloud - Comment associer un utilisateur à une politique IAM globale

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Notre équipe reste disponible sur notre canal [Discord](https://discord.gg/ovhcloud) dédié. Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud.

Échangez avec notre [communauté d'utilisateurs](/links/community).
