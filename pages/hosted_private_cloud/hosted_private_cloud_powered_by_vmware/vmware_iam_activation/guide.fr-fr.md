---
title: "Guides premiers pas avec IAM dans Hosted Private Cloud - VMware on OVHcloud"
excerpt: "Découvrez comment activer IAM dans Vsphere"
updated: 2024-05-17
---

## Objectif
**Ce guide vous détaille comment activer IAM avec Hosted Private Cloud - VMware on OVHcloud**.

## Prérequis
- Disposer d'un [compte OVHcloud.](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Avoir au préalable un ou plusieurs produits Hosted Private Cloud - VMware on OVHcloud liés à ce compte (Hosted Private Cloud powered by VMware, Service Pack VMware).

## En pratique

### Activer IAM
> [!warning]
> Cette opération peut prendre jusqu’à 30 minutes.

### Via l'espace client :

1. Accéder à la console OVHcloud, en suivant [le lien de l'espace client](/links/manager) et connecter vous avec vos identifiants.

2. Ensuite, aller dans la section utilisateur de votre Hosted Private Cloud - VMware on OVHcloud : `Hosted Private Cloud > VMWARE > PCC-XX > Utilisateurs > IAM OVHcloud.`{.action}

Pour vous aider la section correspond au lien OVHcloud manager suivant :
- https://www.ovh.com/manager/#/dedicated/dedicated_cloud/... -> **pcc-X-X-X-X/users**.

3. Pour activer le service Enabler IAM dans votre PCC, cliquer sur : `Activer l'IAM OVHcloud.`{.action}

![Activer IAM](images/iam_enable_2.png){.thumbnail }

> [!success]
> Quand IAM est activé, vous pouvez voir le status **Activé** en vert (Enabled).

![Activer IAM](images/iam_enable_3.png){.thumbnail }

### Via l'API :
> [!warning]
> Pensez bien à remplacer le **serviceName** par le vôtre.

Pour activer l'option IAM lancer l'appel API suivant :

> [!api]
>
> @api {v1} POST /dedicatedCloud/{serviceName}/iam/enable
>

> **Parameters:**
>
> serviceName: La référence de votre service pcc, `pcc-XX-XX-XX-XX`.

### Pour verifier si IAM est activé via l'API

Pour contrôler l'activation d'IAM, lancer l'appel API suivant :

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

## A suivre

Vous pouvez maintenant suivre : ["Comment créer un rôle Vsphere".](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

