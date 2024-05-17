---
title: "Guides premiers pas IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Découvrez comment fonctionne IAM avec Vsphere"
updated: 2024-05-17
---

## Objectif
**Dans ce guide, nous allons vous expliquer comment démarrer avec IAM dans votre Cloud Privée VMware sur OVHcloud et voir quelques questions réponses dans la FAQ** 

## Prérequis
- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir au préalable un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)

## En pratique

## Etape 1 :

### Premiers pas avec IAM et Hosted Private Cloud - VMware on OVHcloud

Pour utiliser IAM dans Hosted Private Cloud - VMware on OVHcloud il vous faut : 

1. Activer IAM dans un Hosted Private Cloud - VMware on OVHcloud.

2. Créer une politique IAM globale liée à une identité (un utilisateur) OVHcloud.

Des étapes supplémentaires sont nécessaires, nous allons les détailler dans la suite de ces guides.

### Comment fonctionne IAM et Hosted Private Cloud - VMware on OVHcloud ?
> [!primary]
>
> Un rôle IAM Vsphere ne peut (à ce jour) pas être géré grâce aux groupes de permissions managées.

L'activation de l'IAM OVHcloud délègue la gestion des accès au service IAM OVHcloud. La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis cette page. La gestion des politiques et accès s'effectue depuis l'IAM OVHcloud.

Pour simplifier, un rôle IAM remplace ainsi un utilisateur local Vsphere au sein du Hosted Private Cloud - VMware on OVHcloud. Et une politique permet d'associer votre identité OVHcloud à ce rôle.

Voici les éléments nécessaires au bon fonctionnement d'IAM avec Hosted Private Cloud - VMware on OVHcloud :
- Produits : **Vsphere / VMware (hosted private cloud, service pack)**
- Ressources : **PCC-XXX**
- Actions : **Managées ou manuelles**
- Utilisateurs : **Utilisateur 1/2/3**

Je vous invite à regarder le diagramme de la documentation suivante pour comprendre comment fonctionne IAM avec l'ensemble des ressources OVHcloud : [Comment utiliser les politiques IAM depuis votre espace client](/pages/account_and_service_management/account_information/iam-policies-api/images/iam_policies.png)

Vous avez ici des diagrammes dédiés à l'utilisation avec Hosted Private Cloud - VMware on OVHcloud : 

![Schema IAM 2](images/iam_vmware_schema_2.png){.thumbnail}

![Schema IAM 3](images/iam_vmware_schema_3.png){.thumbnail}

## Etape 2

## Foire aux questions

### Quelles sont les limitations de IAM avec Hosted Private Cloud - VMware on OVHcloud ?

IAM est actuellement dans une version BETA sur la plateforme OVHcloud, les infrastructures bénéficiant d'options de sécurité renforcée ou d'un service certifié (HDS, PCI-DSS ou SNC) ne peuvent actuellement pas utiliser l'IAM OVHcloud.

**SNC : SecNumCloud**
**HDS : Hébergement de santé**
**PCI-DSS: Hébergement de données bancaires**

Un rôle IAM ne peut que être ajouté grâce aux actions manuelles dans une politique globale (action : assumrole -> role_iam), vous pouvez suivre le guide [Comment créer un rôle IAM das Vsphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy) pour plus de détails.

### Est-ce que je peux activer IAM facilement ?

Oui, je peux activer IAM en cliquant sur un seul bouton depuis mon cloud privé VMware (voir guide : [Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)).

### Est-ce que je peux choisir entre un utilisateur local et un utilisateur IAM lors de la connexion à Vsphere ?

Oui, lorsque IAM est activé, vous avez la possibilité de choisir entre IAM et un utilisateur local Vphere, grâce à la fenêtre qui s'affiche ci-dessous :

![IAM VS USER](images/iam_local_user_vs_iam.png){.thumbnail .h-250 .w-140}

![IAM VS USER 2](images/iam_local_user_vs_iam_2.png){.thumbnail}

### Comment est-ce que j'accède à la délégation des droits Vsphere avec IAM ?

La gestion des **Identités associées**, des **Ressources**, **Groupes de ressources** et leurs autorisations dans les politiques s'effectue depuis [l'espace client](https://www.ovh.com/manager/#/dedicated/useraccount/dashboard) OVHcloud dans **Mon Profil (Support standard) > Identités et accès (IAM)**. Alors que les rôles IAM et les utilisateurs Vsphere locaux s'effectue depuis la section **Hosted Private Cloud > VMware > PCC-XX > Utilisateurs/Rôles (IAM-OVHcloud)**.

### Combien de rôle sont disponibles par défaut ?

Vous disposez de 2 rôles par défaut actif lors de l'activation d'IAM dans votre Hosted Private Cloud - VMware on OVHcloud.

### Que représente un rôle IAM Vsphere lié à une politique ?

Chaque rôle IAM de votre Hosted Private Cloud - VMware on OVHcloud correspond à une action s'écrivant sous la forme `pccVMware:vSphere:assumeRole?nom_du_role`{.action} dans une politique IAM.

Par exemple, pour le rôle **iam-admin** d'un PCC, l'action est -> `pccVMware:vSphere:assumeRole?iam-admin.`{.action}

Un rôle peut être considéré comme un modèle (template) utilisateur avec lequel vous définissez des droits PCC (Vsphere) et vous appliquez ces droits (ce rôle) sur un utilisateur de votre espace client OVHcloud (IAM, si vous avez lié votre utilisateur à une politique).

## A suivre 
Vous pouvez maintenant suivre : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


