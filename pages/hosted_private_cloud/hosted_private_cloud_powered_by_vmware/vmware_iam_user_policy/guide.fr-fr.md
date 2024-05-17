---
title: "Premiers pas avec IAM dans Hosted Private Cloud - VMware on OVHcloud"
excerpt: "Comment associer une identité OVHcloud à une politique IAM"
updated: 2024-05-17
---

## Objectif
**Ce quide vous explique comment associer une identité (un utilisateur) OVHcloud à une politique IAM**

## Prérequis
- Avoir un compte OVHcloud, voir guide : [Comment créer un compte OVHcloud.](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023){.external}.
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud de type : **Hosted Private Cloud powered by VMware / Service Pack VMware**.
- Savoir [comment utiliser les politiques IAM depuis votre espace client.](/pages/hosted_private_cloud/){.external}.

## En pratique

### Comment associer un utilisateur à une politique IAM globale ?

#### Via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](/links/manager) et **connecter vous avec vos identifiants**.

2. Allez dans la section :`Identités et accès (IAM)`{.action} > `Politiques.`{.action}

Vous retrouverez vos politiques si vous en avez.

3. Cliquer sur : `...`{.action} > `Gérer les identités associées.`{.action}

Si vous n'avez pas de politique définie suivez ce guide pour en créer une : [Comment ajouter un rôle IAM à une politique globale](pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)

![IAM USER POLICY](images/iam_user_policy_2.png){.thumbnail}

Il vous reste plus qu'à choisir l'identité : **utilisateurs, NIC, e-mail, groupes d'utilisateurs...** :

4. Cliquer dans le cadre `Utilisateurs et sous-utilisateurs`{.action} 

Les utilisateurs disponibles apparaitront automatiquement s'ils existent.

5. Valider votre choix en Cliquant sur `Ajouter.`{.action}

![IAM user policy](images/iam_user_policy_3.png){.thumbnail}

## Fin

Voici la liste des guides Vsphere avec IAM : 
- Guide 1 : [Premiers pas avec IAM et VMware sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)
- Guide 2 : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation)
- Guide 3 : [Comment créer un rôle IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 4 : [Comment ajouter un rôle par defaut IAM manuellement à une politique globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


