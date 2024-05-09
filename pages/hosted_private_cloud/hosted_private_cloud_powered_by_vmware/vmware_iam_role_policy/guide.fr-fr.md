---
title: "Guide tutoriel IAM dans un cloud privée VMware managé par OVHcloud"
excerpt: "IAM et VMware dans OVHcloud"
updated: 2024-05-24
---

# Table des matières
1. [Liens des guides IAM](#Objectif)
2. [Prérequis](#Prérequis)
3. [Instruction](#Instruction)
4. [Etape 1](#Etape 1)
5. [Etape 2](#Etape 2)
6. [Aller plus loin](#Aller plus loin)

---
## Objectif

**Dans ce guide, nous allons vous expliquer les bases pour démarrer avec IAM dans votre Cloud Privée VMware on OVHcloud**

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

## Comment ajouter un rôle IAM à une politique globale (policy) ?

### Dans la console OVHcloud :
1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et **connectez vous avec vos identifiants**.
2. Ensuite allez dans la section **IAM > Politiques**, vous retrouverez vos politiques si vous en avez.

![IAM role add](images/iam_role_policy_8.png){.thumbnail}
![IAM role add](images/iam_role_policy_6.png){.thumbnail}
![IAM role add](images/iam_role_policy_7.png){.thumbnail}

### Dans les politiques :
3. Pour lier un rôle à une policy vous pouvez soit créer une politique ou alors modifiez en une. Si vous en créez une plusieurs parametres doivent être pris en compte :
    1. Nom de la politique : Choisissez ce que vous voulez.
    2. Description : Choisissez ce que vous voulez.
    3. Ressources : Ajoutez les ressources concernées par votre politique **pcc-XX-XX-XX-XX/servicepack, pcc-XX-XX-XX-XX** etc..
    3. Types de produit : **Hosted private cloud powered by VMware**.
    4. Actions : C'est ici que vous ajoutez votre role :
        1. Dans la section **Action ajoutées manuellement**, puis **Ajouter manuellement des actions**, copiez-collez ce paramètre avec le nom de votre rôle crée auparavant avec `pccVMware:vSphere:assumeRole?{{nom_du_rôle}}`

A Copiez-collez :
```Bash
pccVMware:vSphere:assumeRole?{{nom_du_rôle}}
```
![IAM role add](images/iam_role_2.png){.thumbnail}

4. Cliquer sur *Créer ou modifier** la politique pour finir.

Si vous modifiez juste une politique cliquez sur les `...` d'une politique et choisissez **modifier**. Vous retrouverez les même paramètres à ajouter que lors d'une création.

Pour les permissions, vous pouvez faire le choix d'être **Vsphere Admin** mais vous n'aurez pas la granularité espérer pour chaque environnement et les différents droits de chaque éléments VMware.

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

