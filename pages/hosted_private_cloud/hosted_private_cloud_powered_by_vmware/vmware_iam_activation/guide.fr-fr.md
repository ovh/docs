---
title: "Guides premiers pas avec IAM dans mon cloud privée VMware managé par OVHcloud"
excerpt: "Comment activer avec IAM dans une infrastructure VMware managé par OVHcloud"
updated: 2024-05-24
---

# Table des matières
1. [Objectif](#Objectif)
2. [Prérequis pour commencer](#Prérequis)
3. [Instruction - Activer IAM](#Instruction)
4. [A suivre - Comment créer un rôle IAM Vsphere](#Asuivre)
5. [Aller plus loin](#Aller plus loin)

---
## Objectif
**Ce guide vous détaille comment activer IAM dans un Cloud Privée VMware par OVHcloud**

---
## Prérequis

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

---
## Instruction

## Activer IAM dans un PCC
> [!CAUTION]
> Cette opération peut prendre jusqu’à 30 minutes.

### Pour activer IAM via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](https://www.ovh.com/manager) et Connectez vous avec vos identifiants.

2. Dans la section **Utilisateurs** de votre service > Accédez à **IAM OVHcloud beta** puis > Cliquez sur **Activer l'IAM OVHcloud**.

Si vous ne trouvez pas, utilisez cette "url" en la remplaçant par le nom de votre service privé + **/users** : 
- https://www.ovh.com/manager/#/dedicated/dedicated_cloud/... -> **pcc-X-X-X-X/users**

![Activer IAM](images/iam_enable_2.png){.thumbnail }

Si IAM est activé, vous pouvez constatez le status **Activé** en vert (Enabled).

![Activer IAM](images/iam_enable_3.png){.thumbnail }

### Comment activer IAM dans un PCC depuis l'API OVHcloud ?

> [!CAUTION]
> Cette opération pourra prendre jusqu’à 30 minutes.

### Pour activer IAM via l'API :
> [!IMPORTANT]
> Pensez bien à remplacer le **serviceName** par le vôtre.

Activer l'option IAM sur votre infrastructure depuis l'API OVHcloud :

> [!api]
>
> @api {v1} POST /dedicatedCloud/{serviceName}/iam/enable
>

> **Parameters:**
>
> serviceName: La référence de votre service pcc, `pcc-XX-XX-XX-XX`.

### Pour verifier si IAM est activé via l'API

Vous pouvez contrôler l'activation avec l'appel API suivant :

> [!api]
>
> @api {v1} GET /dedicatedCloud/{serviceName}/iam
>

> **Parameters:**
>
> serviceName: La référence de votre service pcc, `pcc-XX-XX-XX-XX`.

RETOUR :
```Shell
{
  "state": "enabled",
  "identityProviderId": 275
}
```

### Pour verifier si IAM peut être activé via l'API

> [!api]
>
> @api {v1} GET /dedicatedCloud/{serviceName}/iam/canBeEnabled
>

> **Parameters:**
>
> serviceName: La référence de votre service pcc, `pcc-XX-XX-XX-XX`.

RETOUR :
```Shell
{
  "message": "This option is already enabled"
}
```

---
## A suivre  

### Créer un rôle IAM Vsphere

Je vous invite maintenant à suivre le guide 3 : [Comment créer un rôle IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)

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

