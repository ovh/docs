---
title: "Guides premiers pas avec IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Comment fonctionne IAM dans Hosted Private Cloud - VMware on OVHcloud"
updated: 2024-05-17
---

## Objectif
**Dans ce guide, nous allons vous expliquer comment démarrer avec IAM dans votre Cloud Privée VMware sur OVHcloud et voir quelques questions réponses dans la FAQ** 

## Prérequis
- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

## En pratique

### Premiers pas avec IAM et Hosted Private Cloud - VMware on OVHcloud

Pour utiliser IAM dans Hosted Private Cloud - VMware on OVHcloud il vous faut : 

1. Activer IAM.

2. Créer une politique IAM globale liée à mon identité OVHcloud.

Des étapes supplémentaires sont nécessaires, nous allons les détailler dans la suite de ce guide.

### Comment fonctionne IAM et Hosted Private Cloud - VMware on OVHcloud ?
> [!IMPORTANT]
>
> Un rôle IAM Vsphere ne peut (à ce jour) pas être ajouté grâce aux groupes de permissions managées.
> Mais uniquement manuellement, voir le guide : [Comment ajouter un rôle IAM manuellement à une politique globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)

Gérer les identités de vos utilisateurs et de vos applications, ainsi que leurs droits d’accès dans une interface unique pour tous vos services. OVHcloud IAM permet de gérer finement l’ensemble des autorisations des produits OVHcloud et d’obtenir un meilleur niveau de sécurité avec une vision centralisée de vos accès.

Pour simplifier, un rôle IAM remplace ainsi un utilisateur local Vsphere au sein de notre cloud privée. Et une politique permet d'associer votre identité OVHcloud à ce rôle.

Voici les éléments nécessaires à une politique globale :
- Produits : **Vsphere / VMware (hosted private cloud, service pack)**
- Ressources : **PCC-XXX**
- Actions : **Groupes de permissions, Ajoutées manuellement Rôle Vsphere/IAM**
- Utilisateurs : **Utilisateur 1/2/3**

Voir le diagramme du fonctionnement de IAM avec Hosted Private Cloud - VMware on OVHcloud :

![Schema IAM 1](images/iam_schema.png){.thumbnail}

![Schema IAM 2](images/iam_vmware_schema_2.png){.thumbnail}

![Schema IAM 3](images/iam_vmware_schema_3.png){.thumbnail}

## A suivre 
Vous pouvez maintenant suivre : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


