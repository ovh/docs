---
title: "Guides premiers pas avec IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Utiliser les roles IAM dans une infrastructure VMware managé par OVHcloud"
updated: 2024-05-24
---

# Table des matières
1. [Objectif](#Objectif)
2. [Prérequis pour commencer](#Prérequis)
3. [Instruction - Comment créer un rôle](#Instruction)
4. [A suivre - Les politiques](#Asuivre)
6. [Aller plus loin](#Aller plus loin)

---
## Objectif

**Dans ce guide, nous allons vous expliquer comment créer un role IAM dans votre cloud privée VMware sur OVHcloud**

## Prérequis

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

## Instruction

Vous disposez de 2 rôles IAM Vsphere par default, malgré ça nous allons vous expliquer comment créer un rôle.

## Comment créer un rôle IAM dans mon PCC ?

## Via l'accès client :
> [!TIP]
> Les rôles IAM sont préfixés par : {{iam-}}

Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et **Connectez-vous avec vos identifiants**.

Pour créer votre rôle IAM dans le PCC : 

1. Allez dans la section de votre cloud privée -> `Hosted Private Cloud > PCC-XX > Utilisateurs`

2. Cliquez sur -> `Créer un rôle IAM`
      
Ensuite quand la fenêtre s'affiche et Choisissez le nom de votre rôle puis,

3. Cliquez sur -> `Confirmer`

Vous pouvez après éditer les droits du groupe de la même manière qu'avec un utilisateur local Vsphere. Vous pouvez aussi faire le choix d'être **Vsphere Admin** dans les permissions managées de la politique IAM.

![IAM role add](images/iam_role_8.png){.thumbnail}

![IAM role add](images/iam_role_9.png){.thumbnail}

## Via l'API OVHcloud : 

> [!TIP]
> Les rôles IAM sont préfixés par "iam-"

> [!api]
>
> @api {v1} POST /dedicatedCloud/{serviceName}/iam/addRole
>

RETOUR:
```Shell
{
  "userId": null,
  "maintenanceDateTo": null,
  "parentTaskId": null,
  "datacenterId": null,
  "network": null,
  "createdBy": null,
  "state": "todo",
  "hostId": null,
  "endDate": null,
  "networkAccessId": null,
  "maintenanceDateFrom": null,
  "name": "addUser",
  "vlanId": null,
  "description": null,
  "filerId": null,
  "executionDate": "2024-05-15T14:21:17+02:00",
  "createdFrom": null,
  "taskId": 56446627,
  "orderId": null,
  "type": "generic",
  "progress": 0,
  "lastModificationDate": "2024-05-15T14:21:17+02:00"
}
```

### Via l'API OVHcloud avec Curl :

```Shell
curl -X POST "https://eu.api.ovh.com/v1/dedicatedCloud/pcc-XX-XX-XX-XX/iam/addRole" \
 -H "accept: application/json"\
 -H "authorization: Bearer eyJhbGciOiJFZERTQSIsImtpZCI6IkVGNThFMkUxMTFBODNCREFEMDE4OUUzMzZERTk3MDhFNjRDMDA4MDEiLCJraW5kIjoib2F1dGgyIiwidHlwIjoiSldUIn0.eyJBY2Nlc3NUb2tlbiI6Ijc3NTMzZTUwYTkyZTI1MTNiYzFmOGUyNGNmMjM4MmRiMjk5Y2RiZDcyMTJjNjlhYTMxMzMzOTY3MmYzM2I5ZWQiLCJpYXQiOjE3MTU3NzAwMzF9.L2nG4wZq43s06Gbq3JL5tjQ3pNLUBZUNwv-tOs__G1ZCHhUHdb63WNqpT7b_3cf7JiG7PqxtW7FOu2l5VdHRCQ"\
 -H "content-type: application/json" \
 -d '{"name":"iam-role-name"}' \
```

## A suivre : Associer un utilisateur à une politique IAM globale

Je vous invite maintenant à suivre le guide suivant : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_user_policy)

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

