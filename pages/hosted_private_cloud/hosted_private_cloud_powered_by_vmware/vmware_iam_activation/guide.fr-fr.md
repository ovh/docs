---
title: "Guides premiers pas avec IAM dans Hosted Private Cloud - VMware on OVHcloud"
excerpt: "Comment activer avec IAM dans Hosted Private Cloud - VMware on OVHcloud"
updated: 2024-05-17
---


## Objectif

**Ce guide vous détaille comment activer IAM dans un Cloud Privée VMware par OVHcloud**

## Prérequis

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

## En pratique

### Activer IAM dans un PCC
> [!warning]
> Cette opération peut prendre jusqu’à 30 minutes.

### Pour activer IAM via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](/links/manager) et connecter vous avec vos identifiants.

2. Ensuite, allez dans la section de votre Hosted Private Cloud - VMware on OVHcloud : `Hosted Private Cloud > VMWARE > PCC-XX > Utilisateurs > IAM OVHcloud`{.action}

Pour vous aider la section correspond au lien OVHcloud manager suivant :
- https://www.ovh.com/manager/#/dedicated/dedicated_cloud/... -> **pcc-X-X-X-X/users**

3. Pour finir, cliquer sur : `Activer l'IAM OVHcloud.`{.action}

![Activer IAM](images/iam_enable_2.png){.thumbnail }

> [!TIP]
> Quand IAM est activé, vous pouvez constater le status **Activé** en vert (Enabled).

![Activer IAM](images/iam_enable_3.png){.thumbnail }

### Comment activer IAM dans un PCC depuis l'API OVHcloud ?
> [!warning]
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

## A suivre  

### Créer un rôle IAM Vsphere
Vous pouvez maintenant suivre : [Comment créer un rôle IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

