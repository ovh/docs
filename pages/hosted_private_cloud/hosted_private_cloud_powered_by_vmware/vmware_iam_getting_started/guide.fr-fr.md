---
title: "Guides premiers pas avec IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Comment fonctionne IAM dans Hosted Private Cloud - VMware on OVHcloud"
updated: 2024-05-17
---

## Objectif
**Dans ce guide, nous allons vous expliquer comment démarrer avec IAM dans votre Cloud Privée VMware sur OVHcloud et voir quelques questions réponses dans la FAQ** 

## Prérequis
- Disposer d'un [compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir au préalable un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware)

## En pratique

### Premiers pas avec IAM et Hosted Private Cloud - VMware on OVHcloud

Pour utiliser IAM dans Hosted Private Cloud - VMware on OVHcloud il vous faut : 

1. Activer IAM dans un Hosted Private Cloud - VMware on OVHcloud.

2. Créer une politique IAM globale liée à une identité (un utilisateur) OVHcloud.

Des étapes supplémentaires sont nécessaires, nous allons les détailler dans la suite de ce guide.

### Comment fonctionne IAM et Hosted Private Cloud - VMware on OVHcloud ?
> [!primary]
>
> Un rôle IAM Vsphere ne peut (à ce jour) pas être ajouté grâce aux groupes de permissions managées. Mais uniquement manuellement, voir le guide : [Comment ajouter un rôle IAM manuellement à une politique globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)

L'activation de l'IAM OVHcloud délègue la gestion des accès au service IAM OVHcloud. La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis cette page. La gestion des politiques et accès s'effectue depuis l'IAM OVHcloud.

Pour simplifier, un rôle IAM remplace ainsi un utilisateur local Vsphere au sein du Hosted Private Cloud - VMware on OVHcloud. Et une politique permet d'associer votre identité OVHcloud à ce rôle.

Voici les éléments nécessaires à une politique globale :
- Produits : **Vsphere / VMware (hosted private cloud, service pack)**
- Ressources : **PCC-XXX**
- Actions : **Managées ou manuelles**
- Utilisateurs : **Utilisateur 1/2/3**

Voici le diagramme de la section IAM :

![Schema IAM 1](images/iam_schema.png){.thumbnail}


Voici les diagrammes du fonctionnement de IAM avec Hosted Private Cloud - VMware on OVHcloud :

![Schema IAM 2](images/iam_vmware_schema_2.png){.thumbnail}

![Schema IAM 3](images/iam_vmware_schema_3.png){.thumbnail}

## A suivre 
Vous pouvez maintenant suivre : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


