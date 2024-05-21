---
title: "Guides premiers pas avec IAM dans Hosted Private Cloud - VMware on OVHcloud"
excerpt: "Découvrez comment associer une identité OVHcloud à une politique IAM"
updated: 2024-05-17
---

## Objectif
**Ce quide vous explique comment associer une identité (un utilisateur) OVHcloud à une politique IAM globale**.

## Prérequis
- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir au préalable un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)
- Avoir IAM activé dans Hosted Private Cloud - VMware on OVHcloud : Guide 2 - [Comment activer IAM dans Hosted Private Cloud - VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)

## En pratique

### Comment associer un utilisateur à une politique IAM globale ?

#### Via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](/links/manager) et **connecter vous avec vos identifiants**.

2. Aller dans la section :`Identités et accès (IAM)`{.action} > `Politiques.`{.action}

![IAM USER POLICY](images/iam_user_policy_4.png){.thumbnail}

Vous retrouverez vos politiques si vous en avez.

3. Cliquer sur : `...`{.action} > `Gérer les identités associées.`{.action}

Il vous reste plus qu'à choisir l'identité : **utilisateurs, NIC, e-mail, groupes d'utilisateurs...** :

4. Cliquer dans le cadre `Utilisateurs et sous-utilisateurs`{.action} 

Les utilisateurs disponibles apparaitront automatiquement s'ils existent.

5. Valider votre choix en cliquant sur `Ajouter.`{.action}

![IAM user policy](images/iam_user_policy_3.png){.thumbnail}

## Fin

Voici la liste des guides IAM dans Hosted Private Cloud - VMware on OVHcloud : 
- Guide 1 : [Premiers pas avec IAM et VMware dans Hosted Private Cloud - VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [Comment activer IAM dans Hosted Private Cloud - VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [Comment créer un rôle Vsphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [Comment ajouter un rôle Vsphere par défaut à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


