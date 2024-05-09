---
title: "Guide tutoriel IAM dans un cloud privée VMware managé par OVHcloud"
excerpt: "Comment activer avec IAM dans une infrastructure VMware managé par OVHcloud"
updated: 2024-05-24
---

# Table des matières
1. [Objectif](#Objectif)
2. [Prérequis](#Prérequis)
3. [En pratique](#En pratique)
4. [Instruction](#Instruction)
5. [Aller plus loin](#Aller plus loin)

---
## Objectif
**Ce guide vous détaille comment activer IAM dans votre Cloud Privée VMware on OVHcloud**

Voici les liens des autres guides IAM private cloud :

- Guide 1 : [Premiers pas avec IAM et VMware sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [Comment créer un rôle IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [Comment ajouter un rôle IAM manuellement à une politique globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

## Prérequis
Pour activer IAM, vous aurez besoin des éléments suivants :

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).


## Instruction

## Etape 1

> [!CAUTION]
> Cette opération pourra prendre jusqu’à 30 minutes.

### Pour activer IAM via l'espace client :


1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et Connectez vous avec vos identifiants.

2. Dans la section **Utilisateurs** de votre service > Accédez à **IAM OVHcloud beta** puis > Cliquez sur **Activer l'IAM OVHcloud**.

Si vous ne trouvez pas, utilisez cette "url" en la remplaçant par le nom de votre service privé + **/users** : 
- https://www.ovh.com/manager/#/dedicated/dedicated_cloud/... -> **pcc-X-X-X-X/users**

![Activer IAM](images/iam_enable_2.png){.thumbnail }

![Activer IAM](images/iam_enable.png){.thumbnail }

### Comment activer IAM dans un PCC depuis l'API OVHcloud ?

> [!CAUTION]
> Cette opération pourra prendre jusqu’à 30 minutes.

### Pour activer IAM via l'API :

1. Activer l'option IAM sur votre infrastructure depuis l'API OVHcloud :

**Attention** : Pensez bien à remplacer le **serviceName** par le vôtre.

> [!tabs]
> 1st tab title
>> > [!api]
>> >
>> > @api {v1} POST /dedicatedCloud/{serviceName}/iam/enable
>> >

---
## Aller plus loin

Pour aller plus loin avec IAM, vous pouvez lire ces guides :

- [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059)
- [Liste des groupes de permissions OVHcloud](https://help.ovhcloud.com/csm/fr-customer-iam-permissionsgroup?id=kb_article_view&sysparm_article=KB0060254)
- [Comment utiliser les politiques IAM depuis votre espace client](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730)
- [Comment utiliser les politiques IAM via l’API OVHcloud](https://help.ovhcloud.com/csm/fr-customer-iam-policies-api?id=kb_article_view&sysparm_article=KB0056808)
- [Gérer et exploiter - IAM](https://help.ovhcloud.com/csm/fr-documentation-manage-operate-iam?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=f9734072c014f990f0785f572a5744ed&spa=1)
- [Comment analyser les résultats de politiques IAM](https://help.ovhcloud.com/csm/fr-iam-troubleshooting?id=kb_article_view&sysparm_article=KB0060455)
  Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

