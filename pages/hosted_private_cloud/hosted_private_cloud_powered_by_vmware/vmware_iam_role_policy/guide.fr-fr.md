---
title: "Guides premiers pas avec IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Comment associer un rôle Vsphere à une politique IAM"
updated: 2024-05-24
---

# Table des matières
1. [Objectif - Liens des guides IAM](#Objectif)
2. [Prérequis pour commencer](#Prérequis)
3. [Etape 1 - Créer une politique (optionnel)](#Instruction)
4. [Etape 2 - Modifier une politique](#Etape2)
5. [Etape 3 - Ajouter un rôle à une politique](#Etape3)
4. [A suivre - Comment associer un utilisateur à une politique](#A suivre)
5. [Fin - Aller plus loin](#Aller plus loin)

---
## Objectif

**Dans ce guide, nous allons vous expliquer comment créer une politique globale et ajouter un rôle Vsphere**

## Prérequis

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Avoir une politique IAM [Comment créer une politiques IAM"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

## Instruction

## Etape 1

### Créer une politique ? (optionnel)

### Accéder à IAM 

1. Pour accéder au service IAM, suivez les indications de la capture suivante : `SUPPORT STANDARD > IDENTITES ET ACCES (IAM)`{.action}

![IAM] OVHCLOUD(images/iam_role_policy_9.png){.thumbnail}

2. Cliquer sur -> `CREER UNE POLITIQUE`{.action}.

![IAM POLICY](images/iam_role_policy_10.png){.thumbnail}

Vous retrouverez les mêmes paramètres à ajouter que lors d'une création :

1. **Nom de la politique** : Choisissez ce que vous voulez.
2. **Description** : Choisissez ce que vous voulez.
3. **Ressources** : Ajoutez les ressources concernées par votre politique **pcc-XX-XX-XX-XX/servicepack, pcc-XX-XX-XX-XX** etc..
4. **Types de produit** : Hosted private cloud powered by VMware, Service Pack.
5. **Actions** : C'est ici que vous ajoutez votre rôle.

3. Pour finir, Cliquer sur `CREER UNE POLITIQUE`{.action}

## Etape 2

### Modifier une politique

1. Pour accéder au service IAM, suivez les indications de la capture suivante : `SUPPORT STANDARD > IDENTITES ET ACCES (IAM)`{.action}

2. Modifiez juste une politique : Cliquez sur les `...` -> `MODIFIER.`{.action}

Vous retrouverez les mêmes paramètres à ajouter que lors d'une création :

1. **Nom de la politique** : Choisissez ce que vous voulez.
2. **Description** : Choisissez ce que vous voulez.
3. **Ressources** : Ajoutez les ressources concernées par votre politique **pcc-XX-XX-XX-XX/servicepack, pcc-XX-XX-XX-XX** etc..
4. **Types de produit** : Hosted private cloud powered by VMware, Service Pack.
5. **Actions** : C'est ici que vous ajoutez votre rôle.

3. Pour finir, Cliquer sur `MODIFIER`{.action}

![IAM POLICY](images/iam_role_policy_13.png){.thumbnail}

## Etape 3 : Ajouter un rôle à une politique

### Comment ajouter un rôle IAM à une politique globale (policy) ?

## Depuis l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et **connectez-vous avec vos identifiants**.

2. Allez dans la section -> `SUPPORT STANDARD > IDENTITES ET ACCES (IAM) > POLITIQUES`{.action},

![IAM OVHCLOUD](images/iam_role_policy_9.png){.thumbnail}

Vous retrouverez vos politiques si vous en avez créés.

Pour lier un rôle à une policy, une action est le paramètre qui permet d'ajouter le rôle IAM Vsphere :

5. **Actions manuelles** :
   1. Dans la section `Action Ajouter Manuellement > Ajouter Manuellement Des Actions.`{.action}
   2. Copiez-collez ce paramètre avec le nom de votre rôle crée auparavant avec `pccVMware:vSphere:assumeRole?{{nom_du_rôle}}`{.action}

Pour commencer, vous pouvez ajouter les 2 rôles IAM crée par défaut : `iam-admin, iam-auditor`{.action}

```Shell
pccVMware:vSphere:assumeRole?iam-admin
pccVMware:vSphere:assumeRole?iam-auditor
```
6. Cliquez sur `AJOUTER`

![IAM ACTION ADD](images/iam_role_policy_11.png){thumbnail="h-300 .w-200"}

6. Pour finir, Cliquer sur `CREER LA POLITIQUE`{.action} ou `MODIFIER`{.action}

![IAM POLICY ADD](images/iam_role_policy_12.png){.thumbnail}

![IAM POLICY](images/iam_role_policy_13.png){.thumbnail}


Vous avez dans le guide precedent le processus de création d'un rôle depuis l'espace client et l'API.

## A suivre :

Je vous invite maintenant à associer un utilisateur OVHcloud à une politique IAM globale en suivant les instructions du tutoriel suivant : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy).

---
## Aller plus loin
Pour aller plus loin avec IAM, vous pouvez lire ces guides :

- [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059){.external}
- [Liste des groupes de permissions OVHcloud](https://help.ovhcloud.com/csm/fr-customer-iam-permissionsgroup?id=kb_article_view&sysparm_article=KB0060254){.external}
- [Comment utiliser les politiques IAM depuis votre espace client](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730){.external}
- [Comment utiliser les politiques IAM via l’API OVHcloud](https://help.ovhcloud.com/csm/fr-customer-iam-policies-api?id=kb_article_view&sysparm_article=KB0056808){.external}
- [Gérer et exploiter - IAM](https://help.ovhcloud.com/csm/fr-documentation-manage-operate-iam?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=f9734072c014f990f0785f572a5744ed&spa=1){.external}
- [Comment analyser les résultats de politiques IAM](https://help.ovhcloud.com/csm/fr-iam-troubleshooting?id=kb_article_view&sysparm_article=KB0060455){.external}
  
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

