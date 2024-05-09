---
title: "Guide tutoriel IAM dans un cloud privée VMware managé par OVHcloud"
excerpt: "Associer les identités IAM dans une infrastructure VMware managé par OVHcloud"
updated: 2024-05-24
---

# Table des matières
1. [Liens des guides IAM](#Objectif)
2. [Prérequis](#Prérequis)
3. [Instruction](#Instruction)
4. [Aller plus loin](#Aller plus loin)

---
## Objectif

**Ce quide vous explique comment associer une identités à une politique IAM**

Voici les liens des autres guides IAM private cloud :

- Guide 1 : [Premiers pas avec IAM et VMware sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [Comment créer un rôles IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
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

## Comment associer un utilisateur à une politique IAM globale ?

### Via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et **connectez vous avec vos identifiants**.
2. Ensuite allez dans la section **IAM > Politiques**, vous retrouverez vos politiques si vous en avez.
3. Et puis Cliquez sur les `...` > **Gérer les identités associées**. Si vous n'avez pas de politique definis suivez ce guide pour en créer une : [Comment ajouter un rôle IAM à une politique globale](pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)

![IAM user policy](images/iam_user_policy_2.png){.thumbnail}

4. Il vous reste plus qu'à choisir l'identité (utilisateurs, NIC, e-mail, groupes d'utilisateurs..) dans l'unique case **Utilisateurs et sous-utilisateurs** , les choix disponibles apparaitront.
5. Validez en cliquant sur **Ajouter**

![IAM user policy](images/iam_user_policy_3.png){.thumbnail}

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


