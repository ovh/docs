---
title: "IAM pour VMware on OVHcloud - Présentation et FAQ"
excerpt: "Découvrez comment fonctionne IAM avec vSphere"
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

**Ce guide vous présente les principes de fonctionnement de IAM au sein de votre Hosted Private Cloud - VMware on OVHcloud**.

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)

## En pratique

/// details | Introduction, concepts IAM au sein de HPC VMware on OVHcloud.

Index des guides IAM globaux au sein de l'univers OVHcloud:
- [« IAM - Présentation des identités pouvant interagir au sein d'un compte OVHcloud »](/pages/manage_and_operate/iam/identities-management). 
- [« IAM - Comment utiliser les politiques IAM depuis votre espace client »](/pages/account_and_service_management/account_information/iam-control-panel-access).
- [« IAM - Liste des groupes de permissions d'OVHcloud »](/pages/account_and_service_management/account_information/iam-permission-groups).
- [« IAM - Comment créer une politique IAM pour permettre à un utilisateur de se connecter à l'espace client OVHcloud »](/pages/account_and_service_management/account_information/iam-policy-ui).

### Introduction

[IAM (Identity and Access Management)](/links/identity-security/iam) for Hosted Private Cloud VMware on OVHcloud est une solution de sécurité robuste et complète conçue pour rationaliser la gestion des identités des utilisateurs et leur accès aux ressources au sein de l’environnement vSphere/vCenter. 

Ce produit fournit une plateforme centralisée pour définir et appliquer des stratégies, s'assurer que seuls les utilisateurs autorisés ont accès à des **ressources/actions** spécifiques et simplifier le processus de gestion des utilisateurs (federation/groupes). 

En intégrant IAM à votre environnement HPC VMware on OVHcloud, vous pouvez améliorer la sécurité, la conformité et l'efficacité opérationnelle, tout en conservant la flexibilité et l'évolutivité inhérentes du cloud OVH.

### Concepts 

L'activation de l'IAM OVHcloud délègue la gestion des accès au service IAM OVHcloud. La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis cette page. La gestion des politiques et accès s'effectue depuis l'IAM OVHcloud.

#### Roles

Le concept d'IAM rôle au sein de HPC est très important. Pour simplifier :
- Un rôle IAM remplace un utilisateur local vSphere au sein du Hosted Private Cloud VMware on OVHcloud.
- Une politique permet d'associer votre identité OVHcloud à ce rôle.

Voici les éléments nécessaires au bon fonctionnement d'IAM avec Hosted Private Cloud VMware on OVHcloud :

- **Produits** : vSphere / VMware (Hosted Private Cloud, service pack).
- **Ressources** : PCC-XXX.
- **Actions** : Managées ou manuelles.
- **Utilisateurs** : Utilisateur local OVHcloud.

Pour les actions, vous avez le choix d'autoriser toutes les actions (all actions) ou alors de cocher chaque action nécessaire à votre stratégie.

Les actions sont au centre du fonctionnement de IAM dans l'univers OVHcloud.

**Exemple de tableau avec des actions et ressources Hosted Private Cloud:**

| Produits                                 | Ressources            | Actions/Role                                        | Roles                          | Utilisateur         |
|------------------------------------------|-----------------------|-----------------------------------------------------|--------------------------------|---------------------|
| - Hosted Private Cloud powered by VMware | - pcc-XXX-XXX-XXX-XXX | - vSphereAdmin <br/> - pccVMware:vSphere:assumeRole | - pccVMware:vSphere:assumeRole | - Utilisateur 1/2/3 |
| - VMware service Pack                    | - pcc-XXX-XXX-XXX-XXX |                                                     |                                |                     |

Le diagramme ci-dessous permet de comprendre comment fonctionne IAM avec l'ensemble des ressources OVHcloud :

![IAM Policies](images/iam_policies.png){.thumbnail}

#### Roles IAM-ADMIN et IAM-AUDITOR

Lors de l'activation d'IAM au sein du vSphere managé OVHcloud, 2 roles IAM sont créés par défaut :

Les roles : `iam-admin`{.action} et `iam-auditor`{.action}

Ces roles ont les droits suivants et permettent donc de gérer les droits dans vSphere directement :

|                        | iam-admin | iam-auditor |
|------------------------|-----------|-------------|
| IP                     | ✅         | ✅           |
| IP Failover            | ✅         | ❌           |
| Gestion du chiffrement | ✅         | ❌           |
| Token validator        | ❌         | ❌           |

Vous pouvez utiliser ces roles avec une politique IAM, ou en créer d'autre et modifier les permissions depuis le control panel vSphere managé OVHcloud.

## Foire aux questions (FAQ)

### Quelles sont les limitations de IAM avec Hosted Private Cloud - VMware on OVHcloud ?

IAM est actuellement dans une version BETA sur la plateforme OVHcloud, les infrastructures bénéficiant d'options de sécurité renforcée ou d'un service certifié (Hébergement de Données de Santé (HDS), Hébergement de données bancaires (PCI-DSS) ou SecNumCloud (SNC)) ne peuvent actuellement pas utiliser l'IAM OVHcloud.

Un rôle IAM ne peut être ajouté que grâce aux actions manuelles dans une politique globale (action : assumerole -> role_iam). Pour plus d'informations, consultez le guide « [Comment créer un rôle IAM das Vsphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy) ».

### Est-ce que IAM fonctionne avec NSX ?

IAM n'est pas sécurisé pour fonctionner et se connecter sur des instances NSX-T.

> [!primary]
>
> À date, un rôle IAM vSphere ne peut pas être géré grâce aux groupes de permissions managées.

### Est-ce que je peux activer IAM facilement ?

Oui, vous pouvez activer IAM via un seul bouton dans l'espace client OVHcloud. Pour plus d'informations, consultez le guide « [Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation) ».

### Est-ce que je peux choisir entre un utilisateur local et un utilisateur IAM lors de la connexion à vSphere ?

Oui, lorsque IAM est activé, vous avez la possibilité de choisir entre IAM et un utilisateur local Vphere, grâce à la fenêtre qui s'affiche ci-dessous :

![IAM VS USER](images/iam_local_user_vs_iam.png){.thumbnail}

![IAM VS USER 2](images/iam_local_user_vs_iam_2.png){.thumbnail}

### Comment est-ce que j'accède à la délégation des droits vSphere avec IAM ?

La gestion des **Identités associées**, des **Ressources**, **Groupes de ressources** et leurs autorisations dans les politiques s'effectue depuis [l'espace client OVHcloud](/links/manager).<br>
Cliquez sur votre nom en haut à droite de l'espace client puis cliquez sur vos initiales pour accéder à la rubrique `Mon compte`{.action}.<br>
Sous `Mon compte`{.action}, cliquez sur `Identités et accès (IAM)`{.action].

Quant à la gestion des rôles IAM et des utilisateurs vSphere locaux, elle s'effectue depuis la section `Hosted Private Cloud`{.action} de [l'espace client OVHcloud](/links/manager).
Cliquez sur la rubrique `VMware`{.action}, sélectionnez votre infrastructure puis rendez-vous dans l'onglet `Utilisateurs`{.action}.

### Combien de rôles sont disponibles par défaut ?

Vous disposez de 2 rôles par défaut actifs lors de l'activation d'IAM dans votre Hosted Private Cloud - VMware on OVHcloud.

### Que représente un rôle IAM vSphere lié à une politique ?

Chaque rôle IAM de votre Hosted Private Cloud - VMware on OVHcloud correspond à une action s'écrivant sous la forme `pccVMware:vSphere:assumeRole?nom_du_role` dans une politique IAM.

Par exemple, pour le rôle **iam-admin** d'un PCC, l'action est : `pccVMware:vSphere:assumeRole?iam-admin.`.

Un rôle peut être considéré comme un modèle (*template*) utilisateur avec lequel vous définissez des droits PCC (vSphere) et vous appliquez ces droits (ce rôle) sur un utilisateur de votre espace client OVHcloud (IAM, si vous avez lié votre utilisateur à une politique).

///

## Aller plus loin

Vous pouvez maintenant suivre les étapes du guide « [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation) ».

**IAM pour VMware on OVHcloud - Index des guides :**

- Guide 1 : IAM pour VMware on OVHcloud - Présentation et FAQ
- Guide 2 : [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [IAM pour VMware on OVHcloud - Comment associer un rôle vSphere à une politique IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [IAM pour VMware on OVHcloud - Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).