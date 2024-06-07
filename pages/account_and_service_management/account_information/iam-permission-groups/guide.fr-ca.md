---
title: "Liste des groupes de permissions d'OVHcloud"
excerpt: "Détail des groupes de permissions mis à disposition par OVHcloud"
updated: 2023-12-06
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

OVHcloud met à disposition des groupes de permissions regroupant toutes les actions nécessaires pour des cas d'usage précis.
Ce guide liste l'ensemble de ces groupes de permissions et détaille les actions contenues dans chacun des groupes

## Prérequis

Pour utiliser les groupes de permissions, vous aurez besoin des éléments suivants :

- Un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Savoir [mettre en place des politiques IAM via l'espace client](/pages/account_and_service_management/account_information/iam-policy-ui)
- Savoir [mettre en place des politiques IAM via l'API](/pages/account_and_service_management/account_information/iam-policies-api)

## En pratique

Les groupes de permissions permettent de mettre en place des politiques d'accès clés en main sans avoir à connaitre la liste exhaustive des actions nécessaires.
Cette liste est amenée à évoluer avec le temps avec la création de nouveaux groupes de permissions.
En cas de mise à jour d'un groupe de permission, un nouveau sera créé et l'ancien sera déprécié pour ne pas impacter les politiques IAM existantes.

### Utiliser les groupes de permissions

#### Lister les groupes de permissions

Les groupes de permissions sont accessibles via l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|GET|/iam/permissionsGroup|Récupérer tous les groupes de permissions|

```json
{
    "id": "00000000-0000-0000-0001-000000000001",
    "urn": "urn:v1:eu:permissionsGroup:ovh:globalAdmin",
    "name": "globalAdmin",
    "owner": "ovh",
    "description": "Give global admin access across all OVHcloud products",
    "permissions": {
        "allow": [
        {
            "action": "*"
        }
        ]
    },
    "createdAt": "2023-03-14T09:10:57.40418Z",
    "updatedAt": null
},
```

#### Utiliser les groupes de permissions depuis l'espace client

Ces groupes de permissions peuvent ensuite être utilisés en complément ou à la place des actions unitaires dans les politiques d'accès :

![Permissions groups UI](images/permissions_groups_ui.png){.thumbnail}

#### Utiliser les groupes de permissions dans l'API

Ces groupes de permissions peuvent ensuite être utilisés en complément ou à la place des actions unitaires dans les politiques d'accès :

```json
{
  "description": "",
  "identities": [...],
  "name": "",
  "permissions": {
    "allow": [
      {
        "action": "..."
      },
    ]
  },
  "permissionsGroups": [
      {
        "urn": "urn:v1:eu:permissionsGroup:ovh:globalAdmin"
      }
  ],
  "resources": [...]
}
```

### Liste des groupes de permissions

#### Global admin

Donne l'ensemble des droits existants et à venir sur l'ensemble du compte OVHcloud

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "00000000-0000-0000-0001-000000000001",
"urn": "urn:v1:eu:permissionsGroup:ovh:globalAdmin",
"name": "globalAdmin",
"owner": "ovh",
"description": "All admin rights accross all OVHcloud account",
"permissions": {
    "allow": [
    {
        "action": "*"
    }
    ]
},
"createdAt": "2023-03-14T09:10:57.40418Z",
"updatedAt": null
}
```
</details>

#### Global read-write

Donne les droits en lecture et écriture existants et à venir sur l'ensemble des produits OVHcloud à l'exception des droits de gestion des utilisateurs.

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "00000000-0000-0000-0001-000000000002",
"urn": "urn:v1:eu:permissionsGroup:ovh:globalReadWrite",
"name": "globalReadWrite",
"owner": "ovh",
"description": "Read-write access accross all OVHcloud products",
"permissions": {
    "allow": [
    {
        "action": "*"
    }
    ],
    "except": [
    {
        "action": "account:apiovh:me/accessRestriction/ip/create"
    },
    {
        "action": "account:apiovh:me/accessRestriction/ip/edit"
    },
    {
        "action": "account:apiovh:me/accessRestriction/ip/delete"
    },
    {
        "action": "account:apiovh:me/accessRestriction/ipDefaultRule/edit"
    },
    {
        "action": "account:apiovh:me/identity/group/create"
    },
    {
        "action": "account:apiovh:me/identity/group/delete"
    },
    {
        "action": "account:apiovh:me/identity/group/edit"
    },
    {
        "action": "account:apiovh:me/identity/provider/delete"
    },
    {
        "action": "account:apiovh:me/identity/provider/create"
    },
    {
        "action": "account:apiovh:me/identity/provider/edit"
    },
    {
        "action": "account:apiovh:me/identity/user/create"
    },
    {
        "action": "account:apiovh:me/identity/user/delete"
    },
    {
        "action": "account:apiovh:me/identity/user/edit"
    },
    {
        "action": "account:apiovh:me/identity/user/disable"
    },
    {
        "action": "account:apiovh:me/identity/user/enable"
    }
    ]
},
"createdAt": "2023-03-14T09:10:57.40418Z",
"updatedAt": null
}
```
</details>

#### Global read-only

Donne les accès en lecture seule existants et à venir sur l'ensemble des produits OVHcloud

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "00000000-0000-0000-0001-000000000003",
"urn": "urn:v1:eu:permissionsGroup:ovh:globalReadOnly",
"name": "globalReadOnly",
"owner": "ovh",
"description": "Read-only access accross all OVHcloud products",
"permissions": {
    "allow": [
    {
        "action": "account:apiovh:me/accessRestriction/backupCode/*"
    },
    {
        "action": "account:apiovh:me/accessRestriction/sms/*"
    },
    {
        "action": "account:apiovh:me/accessRestriction/totp/*"
    },
    {
        "action": "account:apiovh:me/accessRestriction/u2f/*"
    },
    {
        "action": "account:apiovh:me/changePassword"
    },
    {
        "action": "*get"
    }
    ]
},
"createdAt": "2023-03-14T09:10:57.40418Z",
"updatedAt": null
}
```
</details>

#### Global technicalAccount

Donne tout les droits techniques sur l'ensemble des produits OVHcloud.
Ce groupe de permissions reprend les droits anciennement porté par le rôle nicTech

<details>
<summary>Politique détaillée</summary>

```json
{
    "id": "00000000-0000-0000-0000-000000000003",
    "urn": "urn:v1:eu:permissionsGroup:ovh:globalTechnicalAccount ",
    "name": "globalTechnicalAccount",
    "owner": "ovh",
    "description": "Technical actions accross all OVHcloud products",
    "permissions": {
      "allow": [
        {
          "action": "alldom:apiovh:*"
        },
        {
          "action": "cdn:apiovh:*"
        },
        {
          "action": "clusterHadoop:apiovh:*"
        },
        {
          "action": "cspReseller:apiovh:*"
        },
        {
          "action": "dedicatedCeph:apiovh:*"
        },
        {
          "action": "dedicatedHousing:apiovh:*"
        },
        {
          "action": "dedicatedNVMeoF:apiovh:*"
        },
        {
          "action": "dedicatedNas:apiovh:*"
        },
        {
          "action": "dedicatedServer:apiovh:*"
        },
        {
          "action": "dnsZone:apiovh:*"
        },
        {
          "action": "domain:apiovh:*"
        },
        {
          "action": "emailDomain:apiovh:*"
        },
        {
          "action": "emailExchange:apiovh:*"
        },
        {
          "action": "emailMxplan:apiovh:*"
        },
        {
          "action": "emailPro:apiovh:*"
        },
        {
          "action": "freefax:apiovh:*"
        },
        {
          "action": "horizonView:apiovh:*"
        },
        {
          "action": "ip:apiovh:service/changeContact"
        },
        {
          "action": "ip:apiovh:service/edit"
        },
        {
          "action": "ip:apiovh:service/get"
        },
        {
          "action": "ip:apiovh:service/serviceInfos/get"
        },
        {
          "action": "ldp:apiovh:*"
        },
        {
          "action": "licenseCloudLinux:apiovh:get"
        },
        {
          "action": "licenseCloudLinux:apiovh:serviceInfos/get"
        },
        {
          "action": "licenseCloudLinux:apiovh:tasks/get"
        },
        {
          "action": "licenseCpanel:apiovh:*"
        },
        {
          "action": "licenseDirectAdmin:apiovh:*"
        },
        {
          "action": "licenseOffice:apiovh:*"
        },
        {
          "action": "licenseOfficePrepaid:apiovh:*"
        },
        {
          "action": "licensePlesk:apiovh:*"
        },
        {
          "action": "licenseRedHat:apiovh:*"
        },
        {
          "action": "licenseSqlServer:apiovh:get"
        },
        {
          "action": "licenseSqlServer:apiovh:serviceInfos/get"
        },
        {
          "action": "licenseSqlServer:apiovh:tasks/get"
        },
        {
          "action": "licenseVirtuozzo:apiovh:*"
        },
        {
          "action": "licenseWindows:apiovh:*"
        },
        {
          "action": "licenseWorklight:apiovh:*"
        },
        {
          "action": "loadbalancer:apiovh:*"
        },
        {
          "action": "metrics:apiovh:*"
        },
        {
          "action": "microsoftServices:apiovh:*"
        },
        {
          "action": "nasHA:apiovh:*"
        },
        {
          "action": "networkDefense:apiovh:*"
        },
        {
          "action": "nutanix:apiovh:*"
        },
        {
          "action": "overTheBox:apiovh:*"
        },
        {
          "action": "overTheBoxHardware:apiovh:*"
        },
        {
          "action": "ovhCloudConnect:apiovh:*"
        },
        {
          "action": "packSipTrunk:apiovh:*"
        },
        {
          "action": "packXdsl:apiovh:*"
        },
        {
          "action": "partner:apiovh:*"
        },
        {
          "action": "pccVMware:apiovh:*"
        },
        {
          "action": "publicCloudProject:apiovh:*"
        },
        {
          "action": "sms:apiovh:*"
        },
        {
          "action": "smsVirtualNumbers:apiovh:*"
        },
        {
          "action": "ssl:apiovh:*"
        },
        {
          "action": "sslGateway:apiovh:*"
        },
        {
          "action": "storageNetApp:apiovh:*"
        },
        {
          "action": "veeamCloudConnect:apiovh:*"
        },
        {
          "action": "veeamEnterprise:apiovh:*"
        },
        {
          "action": "vip:apiovh:*"
        },
        {
          "action": "voip:apiovh:*"
        },
        {
          "action": "vps:apiovh:*"
        },
        {
          "action": "vrack:apiovh:*"
        },
        {
          "action": "vrackServices:apiovh:*"
        },
        {
          "action": "webCloudDatabases:apiovh:*"
        },
        {
          "action": "webHosting:apiovh:*"
        },
        {
          "action": "webPaaS:apiovh:*"
        },
        {
          "action": "xdsl:apiovh:*"
        },
        {
          "action": "xdslEmail:apiovh:*"
        },
        {
          "action": "xdslSpare:apiovh:*"
        }
      ],
      "except": [
        {
          "action": "alldom:apiovh:serviceInfos/edit"
        },
        {
          "action": "cdn:apiovh:serviceInfos/edit"
        },
        {
          "action": "clusterHadoop:apiovh:serviceInfos/edit"
        },
        {
          "action": "cspReseller:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedCeph:apiovh:confirmTermination"
        },
        {
          "action": "dedicatedCeph:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedCeph:apiovh:terminate"
        },
        {
          "action": "dedicatedHousing:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedNVMeoF:apiovh:confirmTermination"
        },
        {
          "action": "dedicatedNVMeoF:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedNVMeoF:apiovh:terminate"
        },
        {
          "action": "dedicatedNas:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedServer:apiovh:confirmTermination"
        },
        {
          "action": "dedicatedServer:apiovh:serviceInfos/edit"
        },
        {
          "action": "dedicatedServer:apiovh:terminate"
        },
        {
          "action": "dnsZone:apiovh:confirmTermination"
        },
        {
          "action": "dnsZone:apiovh:serviceInfos/edit"
        },
        {
          "action": "dnsZone:apiovh:terminate"
        },
        {
          "action": "domain:apiovh:serviceInfos/edit"
        },
        {
          "action": "emailDomain:apiovh:serviceInfos/edit"
        },
        {
          "action": "emailExchange:apiovh:service/serviceInfos/edit"
        },
        {
          "action": "emailPro:apiovh:serviceInfos/edit"
        },
        {
          "action": "freefax:apiovh:serviceInfos/edit"
        },
        {
          "action": "horizonView:apiovh:confirmTermination"
        },
        {
          "action": "horizonView:apiovh:serviceInfos/edit"
        },
        {
          "action": "horizonView:apiovh:terminate"
        },
        {
          "action": "ldp:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseCpanel:apiovh:confirmTermination"
        },
        {
          "action": "licenseCpanel:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseCpanel:apiovh:terminate"
        },
        {
          "action": "licenseDirectAdmin:apiovh:confirmTermination"
        },
        {
          "action": "licenseDirectAdmin:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseDirectAdmin:apiovh:terminate"
        },
        {
          "action": "licenseOffice:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseOfficePrepaid:apiovh:confirmTermination"
        },
        {
          "action": "licenseOfficePrepaid:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseOfficePrepaid:apiovh:terminate"
        },
        {
          "action": "licensePlesk:apiovh:confirmTermination"
        },
        {
          "action": "licensePlesk:apiovh:serviceInfos/edit"
        },
        {
          "action": "licensePlesk:apiovh:terminate"
        },
        {
          "action": "licenseRedHat:apiovh:confirmTermination"
        },
        {
          "action": "licenseRedHat:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseRedHat:apiovh:terminate"
        },
        {
          "action": "licenseVirtuozzo:apiovh:confirmTermination"
        },
        {
          "action": "licenseVirtuozzo:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseVirtuozzo:apiovh:terminate"
        },
        {
          "action": "licenseWindows:apiovh:confirmTermination"
        },
        {
          "action": "licenseWindows:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseWindows:apiovh:terminate"
        },
        {
          "action": "licenseWorklight:apiovh:confirmTermination"
        },
        {
          "action": "licenseWorklight:apiovh:serviceInfos/edit"
        },
        {
          "action": "licenseWorklight:apiovh:terminate"
        },
        {
          "action": "loadbalancer:apiovh:confirmTermination"
        },
        {
          "action": "loadbalancer:apiovh:serviceInfos/edit"
        },
        {
          "action": "loadbalancer:apiovh:terminate"
        },
        {
          "action": "metrics:apiovh:confirmTermination"
        },
        {
          "action": "metrics:apiovh:serviceInfos/edit"
        },
        {
          "action": "metrics:apiovh:terminate"
        },
        {
          "action": "nasHA:apiovh:confirmTermination"
        },
        {
          "action": "nasHA:apiovh:serviceInfos/edit"
        },
        {
          "action": "nasHA:apiovh:terminate"
        },
        {
          "action": "nutanix:apiovh:confirmTermination"
        },
        {
          "action": "nutanix:apiovh:serviceInfos/edit"
        },
        {
          "action": "nutanix:apiovh:terminate"
        },
        {
          "action": "overTheBox:apiovh:serviceInfos/edit"
        },
        {
          "action": "ovhCloudConnect:apiovh:confirmTermination"
        },
        {
          "action": "ovhCloudConnect:apiovh:serviceInfos/edit"
        },
        {
          "action": "ovhCloudConnect:apiovh:terminate"
        },
        {
          "action": "packSipTrunk:apiovh:serviceInfos/edit"
        },
        {
          "action": "packXdsl:apiovh:serviceInfos/edit"
        },
        {
          "action": "partner:apiovh:serviceInfos/edit"
        },
        {
          "action": "pccVMware:apiovh:confirmTermination"
        },
        {
          "action": "pccVMware:apiovh:serviceInfos/edit"
        },
        {
          "action": "pccVMware:apiovh:terminate"
        },
        {
          "action": "publicCloudProject:apiovh:confirmTermination"
        },
        {
          "action": "publicCloudProject:apiovh:serviceInfos/edit"
        },
        {
          "action": "publicCloudProject:apiovh:terminate"
        },
        {
          "action": "sms:apiovh:serviceInfos/edit"
        },
        {
          "action": "smsVirtualNumbers:apiovh:serviceInfos/edit"
        },
        {
          "action": "ssl:apiovh:serviceInfos/edit"
        },
        {
          "action": "sslGateway:apiovh:confirmTermination"
        },
        {
          "action": "sslGateway:apiovh:serviceInfos/edit"
        },
        {
          "action": "sslGateway:apiovh:terminate"
        },
        {
          "action": "storageNetApp:apiovh:confirmTermination"
        },
        {
          "action": "storageNetApp:apiovh:serviceInfos/edit"
        },
        {
          "action": "storageNetApp:apiovh:terminate"
        },
        {
          "action": "veeamCloudConnect:apiovh:serviceInfos/edit"
        },
        {
          "action": "veeamEnterprise:apiovh:confirmTermination"
        },
        {
          "action": "veeamEnterprise:apiovh:serviceInfos/edit"
        },
        {
          "action": "veeamEnterprise:apiovh:terminate"
        },
        {
          "action": "vip:apiovh:serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:aliases/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:lines/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:spare/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:trunks/serviceInfos/edit"
        },
        {
          "action": "vps:apiovh:confirmTermination"
        },
        {
          "action": "vps:apiovh:serviceInfos/edit"
        },
        {
          "action": "vps:apiovh:terminate"
        },
        {
          "action": "webCloudDatabases:apiovh:confirmTermination"
        },
        {
          "action": "webCloudDatabases:apiovh:serviceInfos/edit"
        },
        {
          "action": "webCloudDatabases:apiovh:terminate"
        },
        {
          "action": "webHosting:apiovh:confirmTermination"
        },
        {
          "action": "webHosting:apiovh:serviceInfos/edit"
        },
        {
          "action": "webHosting:apiovh:terminate"
        },
        {
          "action": "webPaaS:apiovh:subscription/confirmTermination"
        },
        {
          "action": "webPaaS:apiovh:subscription/serviceInfos/edit"
        },
        {
          "action": "webPaaS:apiovh:subscription/terminate"
        },
        {
          "action": "xdsl:apiovh:serviceInfos/edit"
        },
        {
          "action": "xdslSpare:apiovh:serviceInfos/edit"
        }
      ]
    },
    "createdAt": "2023-03-14T09:10:57.40418Z",
    "updatedAt": "2023-10-16T12:23:52.727652Z"
  }
```
</details>

#### Global billingAccount

Donne les droits liés à la facturation sur l'ensemble des produits OVHcloud
Ce groupe de permissions reprend les droits anciennement porté par le rôle nicBilling

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "00000000-0000-0000-0000-000000000002",
"urn": "urn:v1:eu:permissionsGroup:ovh:globalBillingAccoun",
"name": "globalBillingAccoun",
"owner": "ovh",
"description": "Billing actions accross all OVHcloud products",
"permissions": {
    "allow": [
    {
        "action": "alldom:apiovh:*"
    },
    {
        "action": "cdn:apiovh:changeContact"
    },
    {
        "action": "cdn:apiovh:domains/backends/get"
    },
    {
        "action": "cdn:apiovh:domains/cacheRules/get"
    },
    {
        "action": "cdn:apiovh:domains/cacheRules/tasks/get"
    },
    {
        "action": "cdn:apiovh:domains/get"
    },
    {
        "action": "cdn:apiovh:domains/statistics/get"
    },
    {
        "action": "cdn:apiovh:domains/tasks/get"
    },
    {
        "action": "cdn:apiovh:get"
    },
    {
        "action": "cdn:apiovh:quota/get"
    },
    {
        "action": "cdn:apiovh:serviceInfos/edit"
    },
    {
        "action": "cdn:apiovh:serviceInfos/get"
    },
    {
        "action": "cdn:apiovh:ssl/get"
    },
    {
        "action": "cdn:apiovh:ssl/tasks/get"
    },
    {
        "action": "cspReseller:apiovh:*"
    },
    {
        "action": "dedicatedCeph:apiovh:acl/get"
    },
    {
        "action": "dedicatedCeph:apiovh:cephfs/get"
    },
    {
        "action": "dedicatedCeph:apiovh:changeContact"
    },
    {
        "action": "dedicatedCeph:apiovh:get"
    },
    {
        "action": "dedicatedCeph:apiovh:health/get"
    },
    {
        "action": "dedicatedCeph:apiovh:pool/get"
    },
    {
        "action": "dedicatedCeph:apiovh:serviceInfos/edit"
    },
    {
        "action": "dedicatedCeph:apiovh:serviceInfos/get"
    },
    {
        "action": "dedicatedCeph:apiovh:task/get"
    },
    {
        "action": "dedicatedCeph:apiovh:user/get"
    },
    {
        "action": "dedicatedCeph:apiovh:user/pool/get"
    },
    {
        "action": "dedicatedHousing:apiovh:*"
    },
    {
        "action": "dedicatedNVMeoF:apiovh:*"
    },
    {
        "action": "dedicatedNas:apiovh:get"
    },
    {
        "action": "dedicatedNas:apiovh:partition/access/get"
    },
    {
        "action": "dedicatedNas:apiovh:partition/authorizableIps/get"
    },
    {
        "action": "dedicatedNas:apiovh:partition/get"
    },
    {
        "action": "dedicatedNas:apiovh:partition/quota/get"
    },
    {
        "action": "dedicatedNas:apiovh:serviceInfos/edit"
    },
    {
        "action": "dedicatedNas:apiovh:serviceInfos/get"
    },
    {
        "action": "dedicatedNas:apiovh:task/get"
    },
    {
        "action": "dedicatedServer:apiovh:*"
    },
    {
        "action": "dnsZone:apiovh:capabilities/get"
    },
    {
        "action": "dnsZone:apiovh:changeContact"
    },
    {
        "action": "dnsZone:apiovh:dnssec/get"
    },
    {
        "action": "dnsZone:apiovh:dynHost/login/get"
    },
    {
        "action": "dnsZone:apiovh:dynHost/record/get"
    },
    {
        "action": "dnsZone:apiovh:export/get"
    },
    {
        "action": "dnsZone:apiovh:get"
    },
    {
        "action": "dnsZone:apiovh:history/get"
    },
    {
        "action": "dnsZone:apiovh:option/get"
    },
    {
        "action": "dnsZone:apiovh:option/serviceInfos/get"
    },
    {
        "action": "dnsZone:apiovh:record/get"
    },
    {
        "action": "dnsZone:apiovh:redirection/get"
    },
    {
        "action": "dnsZone:apiovh:serviceInfos/edit"
    },
    {
        "action": "dnsZone:apiovh:serviceInfos/get"
    },
    {
        "action": "dnsZone:apiovh:soa/get"
    },
    {
        "action": "dnsZone:apiovh:status/get"
    },
    {
        "action": "dnsZone:apiovh:task/get"
    },
    {
        "action": "domain:apiovh:authInfo/get"
    },
    {
        "action": "domain:apiovh:changeContact"
    },
    {
        "action": "domain:apiovh:configuration/data/get"
    },
    {
        "action": "domain:apiovh:configuration/obfuscatedEmail/get"
    },
    {
        "action": "domain:apiovh:configuration/optin/get"
    },
    {
        "action": "domain:apiovh:dsRecord/get"
    },
    {
        "action": "domain:apiovh:get"
    },
    {
        "action": "domain:apiovh:glueRecord/get"
    },
    {
        "action": "domain:apiovh:nameServer/get"
    },
    {
        "action": "domain:apiovh:nameServer/status/get"
    },
    {
        "action": "domain:apiovh:option/get"
    },
    {
        "action": "domain:apiovh:options/get"
    },
    {
        "action": "domain:apiovh:owo/get"
    },
    {
        "action": "domain:apiovh:rule/emailsObfuscation/get"
    },
    {
        "action": "domain:apiovh:rule/optin/get"
    },
    {
        "action": "domain:apiovh:serviceInfos/edit"
    },
    {
        "action": "domain:apiovh:serviceInfos/get"
    },
    {
        "action": "domain:apiovh:task/get"
    },
    {
        "action": "domain:apiovh:ukRegistrar/get"
    },
    {
        "action": "emailDomain:apiovh:changeContact"
    },
    {
        "action": "emailDomain:apiovh:redirection/get"
    },
    {
        "action": "emailDomain:apiovh:task/redirection/get"
    },
    {
        "action": "emailPro:apiovh:account/alias/get"
    },
    {
        "action": "emailPro:apiovh:account/diagnostics/get"
    },
    {
        "action": "emailPro:apiovh:account/fullAccess/get"
    },
    {
        "action": "emailPro:apiovh:account/get"
    },
    {
        "action": "emailPro:apiovh:account/sendAs/get"
    },
    {
        "action": "emailPro:apiovh:account/sendOnBehalfTo/get"
    },
    {
        "action": "emailPro:apiovh:account/tasks/get"
    },
    {
        "action": "emailPro:apiovh:billingMigrated/get"
    },
    {
        "action": "emailPro:apiovh:billingPlan/get"
    },
    {
        "action": "emailPro:apiovh:changeContact"
    },
    {
        "action": "emailPro:apiovh:domain/disclaimer/get"
    },
    {
        "action": "emailPro:apiovh:domain/disclaimerAttribute/get"
    },
    {
        "action": "emailPro:apiovh:domain/dkim/get"
    },
    {
        "action": "emailPro:apiovh:domain/get"
    },
    {
        "action": "emailPro:apiovh:externalContact/get"
    },
    {
        "action": "emailPro:apiovh:get"
    },
    {
        "action": "emailPro:apiovh:server/get"
    },
    {
        "action": "emailPro:apiovh:task/get"
    },
    {
        "action": "ip:apiovh:service/changeContact"
    },
    {
        "action": "ldp:apiovh:changeContact"
    },
    {
        "action": "ldp:apiovh:cluster/get"
    },
    {
        "action": "ldp:apiovh:cluster/retention/get"
    },
    {
        "action": "ldp:apiovh:encryptionKey/get"
    },
    {
        "action": "ldp:apiovh:get"
    },
    {
        "action": "ldp:apiovh:input/action/get"
    },
    {
        "action": "ldp:apiovh:input/configtest/result/get"
    },
    {
        "action": "ldp:apiovh:input/configuration/flowgger/get"
    },
    {
        "action": "ldp:apiovh:input/configuration/logstash/get"
    },
    {
        "action": "ldp:apiovh:input/engine/get"
    },
    {
        "action": "ldp:apiovh:input/engine/helper/get"
    },
    {
        "action": "ldp:apiovh:input/get"
    },
    {
        "action": "ldp:apiovh:input/url/get"
    },
    {
        "action": "ldp:apiovh:metrics/get"
    },
    {
        "action": "ldp:apiovh:operation/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/dashboard/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/dashboard/url/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/alert/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/archive/encryptionKey/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/archive/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/rule/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/subscription/get"
    },
    {
        "action": "ldp:apiovh:output/graylog/stream/url/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/alias/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/alias/index/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/alias/stream/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/alias/url/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/index/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/index/url/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/osd/get"
    },
    {
        "action": "ldp:apiovh:output/opensearch/osd/url/get"
    },
    {
        "action": "ldp:apiovh:role/get"
    },
    {
        "action": "ldp:apiovh:role/member/get"
    },
    {
        "action": "ldp:apiovh:role/permission/get"
    },
    {
        "action": "ldp:apiovh:serviceInfos/edit"
    },
    {
        "action": "ldp:apiovh:serviceInfos/get"
    },
    {
        "action": "ldp:apiovh:token/get"
    },
    {
        "action": "ldp:apiovh:url/get"
    },
    {
        "action": "licenseOffice:apiovh:domain/get"
    },
    {
        "action": "licenseOffice:apiovh:get"
    },
    {
        "action": "licenseOffice:apiovh:pendingTask/get"
    },
    {
        "action": "licenseOffice:apiovh:usageStatistics/get"
    },
    {
        "action": "licenseOffice:apiovh:user/get"
    },
    {
        "action": "licenseOfficePrepaid:apiovh:get"
    },
    {
        "action": "licenseOfficePrepaid:apiovh:tenantPendingTask/get"
    },
    {
        "action": "licenseOfficePrepaid:apiovh:tenantUsageStatistics/get"
    },
    {
        "action": "loadbalancer:apiovh:availableFarmProbes/get"
    },
    {
        "action": "loadbalancer:apiovh:availableFarmType/get"
    },
    {
        "action": "loadbalancer:apiovh:availableFrontendType/get"
    },
    {
        "action": "loadbalancer:apiovh:availableRouteActions/get"
    },
    {
        "action": "loadbalancer:apiovh:availableRouteRules/get"
    },
    {
        "action": "loadbalancer:apiovh:changeContact"
    },
    {
        "action": "loadbalancer:apiovh:definedFarms/get"
    },
    {
        "action": "loadbalancer:apiovh:definedFrontends/get"
    },
    {
        "action": "loadbalancer:apiovh:definedRoutes/get"
    },
    {
        "action": "loadbalancer:apiovh:failover/get"
    },
    {
        "action": "loadbalancer:apiovh:get"
    },
    {
        "action": "loadbalancer:apiovh:http/farm/get"
    },
    {
        "action": "loadbalancer:apiovh:http/farm/server/get"
    },
    {
        "action": "loadbalancer:apiovh:http/farm/server/transparent/get"
    },
    {
        "action": "loadbalancer:apiovh:http/frontend/get"
    },
    {
        "action": "loadbalancer:apiovh:http/route/get"
    },
    {
        "action": "loadbalancer:apiovh:http/route/rule/get"
    },
    {
        "action": "loadbalancer:apiovh:instancesState/get"
    },
    {
        "action": "loadbalancer:apiovh:natIp/get"
    },
    {
        "action": "loadbalancer:apiovh:pendingChanges/get"
    },
    {
        "action": "loadbalancer:apiovh:quota/get"
    },
    {
        "action": "loadbalancer:apiovh:quotaHistory/get"
    },
    {
        "action": "loadbalancer:apiovh:serviceInfos/edit"
    },
    {
        "action": "loadbalancer:apiovh:serviceInfos/get"
    },
    {
        "action": "loadbalancer:apiovh:ssl/get"
    },
    {
        "action": "loadbalancer:apiovh:status/get"
    },
    {
        "action": "loadbalancer:apiovh:task/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/farm/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/farm/server/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/farm/server/transparent/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/frontend/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/route/get"
    },
    {
        "action": "loadbalancer:apiovh:tcp/route/rule/get"
    },
    {
        "action": "loadbalancer:apiovh:udp/farm/get"
    },
    {
        "action": "loadbalancer:apiovh:udp/farm/server/get"
    },
    {
        "action": "loadbalancer:apiovh:udp/frontend/get"
    },
    {
        "action": "loadbalancer:apiovh:vrack/network/get"
    },
    {
        "action": "loadbalancer:apiovh:vrack/networkCreationRules/get"
    },
    {
        "action": "loadbalancer:apiovh:vrack/status/get"
    },
    {
        "action": "loadbalancer:apiovh:vrack/transparent/gateways/get"
    },
    {
        "action": "loadbalancer:apiovh:zone/get"
    },
    {
        "action": "metrics:apiovh:changeContact"
    },
    {
        "action": "metrics:apiovh:consumption/get"
    },
    {
        "action": "metrics:apiovh:get"
    },
    {
        "action": "metrics:apiovh:serviceInfos/edit"
    },
    {
        "action": "metrics:apiovh:serviceInfos/get"
    },
    {
        "action": "metrics:apiovh:token/get"
    },
    {
        "action": "microsoftServices:apiovh:changeContact"
    },
    {
        "action": "nasHA:apiovh:changeContact"
    },
    {
        "action": "nasHA:apiovh:get"
    },
    {
        "action": "nasHA:apiovh:partition/access/get"
    },
    {
        "action": "nasHA:apiovh:partition/authorizableBlocks/get"
    },
    {
        "action": "nasHA:apiovh:partition/authorizableIps/get"
    },
    {
        "action": "nasHA:apiovh:partition/customSnapshot/get"
    },
    {
        "action": "nasHA:apiovh:partition/get"
    },
    {
        "action": "nasHA:apiovh:partition/options/get"
    },
    {
        "action": "nasHA:apiovh:partition/quota/get"
    },
    {
        "action": "nasHA:apiovh:partition/snapshot/get"
    },
    {
        "action": "nasHA:apiovh:partition/use/get"
    },
    {
        "action": "nasHA:apiovh:serviceInfos/edit"
    },
    {
        "action": "nasHA:apiovh:serviceInfos/get"
    },
    {
        "action": "nasHA:apiovh:task/get"
    },
    {
        "action": "nasHA:apiovh:use/get"
    },
    {
        "action": "nasHA:apiovh:vrack/get"
    },
    {
        "action": "networkDefense:apiovh:*"
    },
    {
        "action": "nutanix:apiovh:*"
    },
    {
        "action": "order:apiovh:*"
    },
    {
        "action": "overTheBox:apiovh:availableReleaseChannels/get"
    },
    {
        "action": "overTheBox:apiovh:backups/get"
    },
    {
        "action": "overTheBox:apiovh:changeContact"
    },
    {
        "action": "overTheBox:apiovh:configuration/dhcp/config/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/dhcp/staticLease/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/dns/localDomain/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/dns/nameserver/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/firewall/redirect/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/firewall/rule/get"
    },
    {
        "action": "overTheBox:apiovh:configuration/network/interface/get"
    },
    {
        "action": "overTheBox:apiovh:device/actions/get"
    },
    {
        "action": "overTheBox:apiovh:device/availableActions/get"
    },
    {
        "action": "overTheBox:apiovh:device/get"
    },
    {
        "action": "overTheBox:apiovh:get"
    },
    {
        "action": "overTheBox:apiovh:migration/offers/get"
    },
    {
        "action": "overTheBox:apiovh:remoteAccesses/get"
    },
    {
        "action": "overTheBox:apiovh:serviceInfos/edit"
    },
    {
        "action": "overTheBox:apiovh:serviceInfos/get"
    },
    {
        "action": "overTheBox:apiovh:statistics/get"
    },
    {
        "action": "overTheBox:apiovh:tasks/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:changeContact"
    },
    {
        "action": "ovhCloudConnect:apiovh:config/pop/datacenter/extra/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:config/pop/datacenter/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:config/pop/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:datacenter/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:diagnostic/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:get"
    },
    {
        "action": "ovhCloudConnect:apiovh:incident/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:interface/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:interface/statistics/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:order/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:serviceInfos/edit"
    },
    {
        "action": "ovhCloudConnect:apiovh:serviceInfos/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:serviceKey/get"
    },
    {
        "action": "ovhCloudConnect:apiovh:task/get"
    },
    {
        "action": "packSipTrunk:apiovh:*"
    },
    {
        "action": "packXdsl:apiovh:*"
    },
    {
        "action": "pccVMware:apiovh:allowedNetwork/get"
    },
    {
        "action": "pccVMware:apiovh:allowedNetwork/task/get"
    },
    {
        "action": "pccVMware:apiovh:autoscale/configuration/get"
    },
    {
        "action": "pccVMware:apiovh:autoscale/get"
    },
    {
        "action": "pccVMware:apiovh:backupRepository/get"
    },
    {
        "action": "pccVMware:apiovh:capabilities/get"
    },
    {
        "action": "pccVMware:apiovh:changeContact"
    },
    {
        "action": "pccVMware:apiovh:commercialRange/compliance/get"
    },
    {
        "action": "pccVMware:apiovh:commercialRange/orderable/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/backup/canOptimizeProxies/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/backup/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/backup/offerCapabilities/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/backupRepository/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/cluster/filerVsan/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/cluster/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/status/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/disasterRecovery/zerto/usageReport/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/defaultLocalVraNetwork/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/disasterRecovery/zertoSingle/remoteSites/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/filer/checkGlobalCompatible/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/filer/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/filer/hourlyConsumption/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/filer/location/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/filer/task/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/hourlyConsumption/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/location/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/resilience/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/resilience/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/host/task/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/orderableFilerProfiles/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/orderableHostProfiles/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/privateGateway/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/task/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/vm/backupJob/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/vm/backupJob/restorePoints/get"
    },
    {
        "action": "pccVMware:apiovh:datacenter/vm/get"
    },
    {
        "action": "pccVMware:apiovh:federation/activeDirectory/get"
    },
    {
        "action": "pccVMware:apiovh:federation/get"
    },
    {
        "action": "pccVMware:apiovh:filer/checkGlobalCompatible/get"
    },
    {
        "action": "pccVMware:apiovh:filer/get"
    },
    {
        "action": "pccVMware:apiovh:filer/hourlyConsumption/get"
    },
    {
        "action": "pccVMware:apiovh:filer/location/get"
    },
    {
        "action": "pccVMware:apiovh:filer/task/get"
    },
    {
        "action": "pccVMware:apiovh:get"
    },
    {
        "action": "pccVMware:apiovh:globalTasks/get"
    },
    {
        "action": "pccVMware:apiovh:hasEnoughStorageForNsxtEdges"
    },
    {
        "action": "pccVMware:apiovh:hcx/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:hcx/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:hcx/get"
    },
    {
        "action": "pccVMware:apiovh:hds/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:hds/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:hds/get"
    },
    {
        "action": "pccVMware:apiovh:hipaa/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:hipaa/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:hipaa/get"
    },
    {
        "action": "pccVMware:apiovh:iam/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:iam/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:iam/get"
    },
    {
        "action": "pccVMware:apiovh:ip/details/get"
    },
    {
        "action": "pccVMware:apiovh:ip/get"
    },
    {
        "action": "pccVMware:apiovh:ip/task/get"
    },
    {
        "action": "pccVMware:apiovh:newPrices/get"
    },
    {
        "action": "pccVMware:apiovh:nsx/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:nsx/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:nsx/get"
    },
    {
        "action": "pccVMware:apiovh:nsxt/get"
    },
    {
        "action": "pccVMware:apiovh:orderableIpCountries/get"
    },
    {
        "action": "pccVMware:apiovh:passwordPolicy/get"
    },
    {
        "action": "pccVMware:apiovh:pcidss/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:pcidss/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:pcidss/get"
    },
    {
        "action": "pccVMware:apiovh:robot/get"
    },
    {
        "action": "pccVMware:apiovh:securityOptions/compatibilityMatrix/get"
    },
    {
        "action": "pccVMware:apiovh:securityOptions/dependenciesTree/get"
    },
    {
        "action": "pccVMware:apiovh:securityOptions/get"
    },
    {
        "action": "pccVMware:apiovh:securityOptions/pendingOptions/get"
    },
    {
        "action": "pccVMware:apiovh:serviceInfos/edit"
    },
    {
        "action": "pccVMware:apiovh:serviceInfos/get"
    },
    {
        "action": "pccVMware:apiovh:servicePack/get"
    },
    {
        "action": "pccVMware:apiovh:servicePacks/get"
    },
    {
        "action": "pccVMware:apiovh:task/get"
    },
    {
        "action": "pccVMware:apiovh:twoFAWhitelist/get"
    },
    {
        "action": "pccVMware:apiovh:user/get"
    },
    {
        "action": "pccVMware:apiovh:user/objectRight/get"
    },
    {
        "action": "pccVMware:apiovh:user/right/get"
    },
    {
        "action": "pccVMware:apiovh:user/task/get"
    },
    {
        "action": "pccVMware:apiovh:vcenterVersion/get"
    },
    {
        "action": "pccVMware:apiovh:vendor/get"
    },
    {
        "action": "pccVMware:apiovh:vlan/get"
    },
    {
        "action": "pccVMware:apiovh:vmEncryption/get"
    },
    {
        "action": "pccVMware:apiovh:vmEncryption/kms/get"
    },
    {
        "action": "pccVMware:apiovh:vrack/get"
    },
    {
        "action": "pccVMware:apiovh:vrops/canBeDisabled/get"
    },
    {
        "action": "pccVMware:apiovh:vrops/canBeEnabled/get"
    },
    {
        "action": "pccVMware:apiovh:vrops/get"
    },
    {
        "action": "pccVMware:apiovh:vrops/outgoingFlow/get"
    },
    {
        "action": "publicCloudProject:apiovh:acl/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/floatingip/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/gateway/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/loadbalancer/flavor/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/loadbalancer/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/network/get"
    },
    {
        "action": "publicCloudProject:apiovh:aggregated/volumeBackup/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/app/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/app/log/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/authorization/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/feature/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/quota/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/app/image/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/data/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/flavor/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/job/image/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/notebook/editor/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/notebook/framework/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/capabilities/region/preset/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/data/region/alias/auth/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/data/region/alias/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/data/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/guides/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/job/capabilities/presetImage/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/job/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/job/log/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/notebook/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/notebook/capabilities/editor/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/notebook/capabilities/framework/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/notebook/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/notebook/log/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/partners/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/partners/region/partner/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/registry/get"
    },
    {
        "action": "publicCloudProject:apiovh:ai/token/get"
    },
    {
        "action": "publicCloudProject:apiovh:alerting/alert/get"
    },
    {
        "action": "publicCloudProject:apiovh:alerting/get"
    },
    {
        "action": "publicCloudProject:apiovh:applicationloadbalancer/configuration/get"
    },
    {
        "action": "publicCloudProject:apiovh:applicationloadbalancer/get"
    },
    {
        "action": "publicCloudProject:apiovh:applicationloadbalancer/stats/get"
    },
    {
        "action": "publicCloudProject:apiovh:bill/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/applicationloadbalancer/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/applicationloadbalancer/size/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/containerRegistry/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/kube/admissionplugins/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/kube/flavors/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/kube/regions/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/loadbalancer/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/loadbalancer/size/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/networkloadbalancer/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/networkloadbalancer/size/get"
    },
    {
        "action": "publicCloudProject:apiovh:capabilities/productAvailability/get"
    },
    {
        "action": "publicCloudProject:apiovh:certificate/get"
    },
    {
        "action": "publicCloudProject:apiovh:changeContact"
    },
    {
        "action": "publicCloudProject:apiovh:consumption/get"
    },
    {
        "action": "publicCloudProject:apiovh:containerRegistry/capabilities/plan/get"
    },
    {
        "action": "publicCloudProject:apiovh:containerRegistry/get"
    },
    {
        "action": "publicCloudProject:apiovh:containerRegistry/openIdConnect/get"
    },
    {
        "action": "publicCloudProject:apiovh:containerRegistry/plan/get"
    },
    {
        "action": "publicCloudProject:apiovh:containerRegistry/users/get"
    },
    {
        "action": "publicCloudProject:apiovh:credit/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/destinationConnectors/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/destinations/connection/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/destinations/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/sourceConnectors/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/sources/connection/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/sources/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/sources/metadata/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/workflows/capabilities/list"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/workflows/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataIntegration/workflows/jobs/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/authorization/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/capabilities/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/jobs/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/jobs/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/notebooks/capabilities/get"
    },
    {
        "action": "publicCloudProject:apiovh:dataProcessing/notebooks/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/availability/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/capabilities/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/certificates/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/cassandra/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/grafana/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/acl/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/certificates/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/permissions/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/schemaRegistryAcl/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/topic/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/topicAcl/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/user/access/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafka/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/capabilities/connector/configuration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/capabilities/connector/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/capabilities/connector/transforms/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/connector/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/connector/task/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaConnect/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/kafkaMirrorMaker/replication/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3aggregator/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/namespace/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/m3db/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/roles/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mongodb/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/certificates/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/currentQueries/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/database/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/queryStatistics/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/mysql/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/index/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/pattern/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/permissions/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/opensearch/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/certificates/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/connectionPool/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/currentQueries/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/database/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/queryStatistics/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/roles/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/postgresql/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/capabilities/advancedConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/capabilities/categories/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/capabilities/commands/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/capabilities/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/integration/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/ipRestriction/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/logs/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/maintenance/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/metric/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/redis/user/get"
    },
    {
        "action": "publicCloudProject:apiovh:database/service/get"
    },
    {
        "action": "publicCloudProject:apiovh:flavor/get"
    },
    {
        "action": "publicCloudProject:apiovh:get"
    },
    {
        "action": "publicCloudProject:apiovh:image/get"
    },
    {
        "action": "publicCloudProject:apiovh:instance/get"
    },
    {
        "action": "publicCloudProject:apiovh:instance/group/get"
    },
    {
        "action": "publicCloudProject:apiovh:instance/interface/get"
    },
    {
        "action": "publicCloudProject:apiovh:instance/monitoring/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/capabilities/stream/region/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/stream/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/stream/stats/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/stream/subscription/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/stream/subscription/stats/get"
    },
    {
        "action": "publicCloudProject:apiovh:io/stream/token/get"
    },
    {
        "action": "publicCloudProject:apiovh:ip/failover/get"
    },
    {
        "action": "publicCloudProject:apiovh:ip/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/customization/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/flavors/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/ipRestrictions/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/metrics/etcdUsage/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/node/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/nodepool/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/nodepool/nodes/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/openIdConnect/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/privateNetworkConfiguration/get"
    },
    {
        "action": "publicCloudProject:apiovh:kube/regions/get"
    },
    {
        "action": "publicCloudProject:apiovh:lab/agreement/get"
    },
    {
        "action": "publicCloudProject:apiovh:lab/get"
    },
    {
        "action": "publicCloudProject:apiovh:loadbalancer/configuration/get"
    },
    {
        "action": "publicCloudProject:apiovh:loadbalancer/get"
    },
    {
        "action": "publicCloudProject:apiovh:loadbalancer/stats/get"
    },
    {
        "action": "publicCloudProject:apiovh:migration/get"
    },
    {
        "action": "publicCloudProject:apiovh:network/private/get"
    },
    {
        "action": "publicCloudProject:apiovh:network/private/subnet/get"
    },
    {
        "action": "publicCloudProject:apiovh:network/public/get"
    },
    {
        "action": "publicCloudProject:apiovh:networkloadbalancer/configuration/get"
    },
    {
        "action": "publicCloudProject:apiovh:networkloadbalancer/get"
    },
    {
        "action": "publicCloudProject:apiovh:operation/get"
    },
    {
        "action": "publicCloudProject:apiovh:quota/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/coldArchive/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/floatingip/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/gateway/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/gateway/interface/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/instance/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/keymanager/certificate/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/keymanager/secret/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/flavor/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/healthMonitor/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/l7Policy/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/l7Policy/l7Rule/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/listener/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/loadbalancer/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/pool/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/loadbalancing/pool/member/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/network/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/network/subnet/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/quota/allowed/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/quota/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/quota/storage/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/storage/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/storageStandard/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/volumeBackup/get"
    },
    {
        "action": "publicCloudProject:apiovh:region/workflow/backup/get"
    },
    {
        "action": "publicCloudProject:apiovh:regionAvailable/get"
    },
    {
        "action": "publicCloudProject:apiovh:role/get"
    },
    {
        "action": "publicCloudProject:apiovh:serviceInfos/edit"
    },
    {
        "action": "publicCloudProject:apiovh:serviceInfos/get"
    },
    {
        "action": "publicCloudProject:apiovh:snapshot/get"
    },
    {
        "action": "publicCloudProject:apiovh:sshkey/get"
    },
    {
        "action": "publicCloudProject:apiovh:stack/get"
    },
    {
        "action": "publicCloudProject:apiovh:storage/access/get"
    },
    {
        "action": "publicCloudProject:apiovh:storage/get"
    },
    {
        "action": "publicCloudProject:apiovh:storage/quota/get"
    },
    {
        "action": "publicCloudProject:apiovh:usage/current/bills/get"
    },
    {
        "action": "publicCloudProject:apiovh:usage/current/get"
    },
    {
        "action": "publicCloudProject:apiovh:usage/forecast/get"
    },
    {
        "action": "publicCloudProject:apiovh:usage/history/bills/get"
    },
    {
        "action": "publicCloudProject:apiovh:usage/history/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/configuration/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/openrc/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/policy/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/rclone/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/role/get"
    },
    {
        "action": "publicCloudProject:apiovh:user/s3Credentials/get"
    },
    {
        "action": "publicCloudProject:apiovh:volume/get"
    },
    {
        "action": "publicCloudProject:apiovh:volume/snapshot/get"
    },
    {
        "action": "publicCloudProject:apiovh:vrack/get"
    },
    {
        "action": "sms:apiovh:batches/get"
    },
    {
        "action": "sms:apiovh:batches/statistics/get"
    },
    {
        "action": "sms:apiovh:outgoing/get"
    },
    {
        "action": "sms:apiovh:smpp/allowedIPs/get"
    },
    {
        "action": "sms:apiovh:smpp/settings/get"
    },
    {
        "action": "ssl:apiovh:get"
    },
    {
        "action": "ssl:apiovh:tasks/get"
    },
    {
        "action": "sslGateway:apiovh:changeContact"
    },
    {
        "action": "sslGateway:apiovh:domain/get"
    },
    {
        "action": "sslGateway:apiovh:get"
    },
    {
        "action": "sslGateway:apiovh:natIp/get"
    },
    {
        "action": "sslGateway:apiovh:server/get"
    },
    {
        "action": "sslGateway:apiovh:serviceInfos/edit"
    },
    {
        "action": "sslGateway:apiovh:serviceInfos/get"
    },
    {
        "action": "sslGateway:apiovh:task/get"
    },
    {
        "action": "stackMis:apiovh:*"
    },
    {
        "action": "storageNetApp:apiovh:changeContact"
    },
    {
        "action": "storageNetApp:apiovh:get"
    },
    {
        "action": "storageNetApp:apiovh:serviceInfos/edit"
    },
    {
        "action": "storageNetApp:apiovh:serviceInfos/get"
    },
    {
        "action": "storageNetApp:apiovh:share/accessPath/get"
    },
    {
        "action": "storageNetApp:apiovh:share/acl/get"
    },
    {
        "action": "storageNetApp:apiovh:share/get"
    },
    {
        "action": "storageNetApp:apiovh:share/snapshot/get"
    },
    {
        "action": "storageNetApp:apiovh:share/snapshotPolicy/get"
    },
    {
        "action": "storageNetApp:apiovh:share/snapshotReserve/get"
    },
    {
        "action": "storageNetApp:apiovh:snapshotPolicy/get"
    },
    {
        "action": "voip:apiovh:abbreviatedNumber/get"
    },
    {
        "action": "voip:apiovh:aliases/changeContact"
    },
    {
        "action": "voip:apiovh:aliases/get"
    },
    {
        "action": "voip:apiovh:aliases/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:aliases/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:allowedCreditThreshold/get"
    },
    {
        "action": "voip:apiovh:amountSecurityDeposit/get"
    },
    {
        "action": "voip:apiovh:billingAccountSite/get"
    },
    {
        "action": "voip:apiovh:carrierSip/cdrs/get"
    },
    {
        "action": "voip:apiovh:carrierSip/clusterDetails/get"
    },
    {
        "action": "voip:apiovh:carrierSip/endpoints/get"
    },
    {
        "action": "voip:apiovh:carrierSip/get"
    },
    {
        "action": "voip:apiovh:carrierSip/settings/get"
    },
    {
        "action": "voip:apiovh:carrierSip/vno/mandates/get"
    },
    {
        "action": "voip:apiovh:carrierSip/vno/ranges/get"
    },
    {
        "action": "voip:apiovh:changeContact"
    },
    {
        "action": "voip:apiovh:conference/get"
    },
    {
        "action": "voip:apiovh:conference/histories/get"
    },
    {
        "action": "voip:apiovh:conference/informations/get"
    },
    {
        "action": "voip:apiovh:conference/participants/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/histories/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/participants/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/webAccess/get"
    },
    {
        "action": "voip:apiovh:conference/roomsStats/get"
    },
    {
        "action": "voip:apiovh:conference/settings/get"
    },
    {
        "action": "voip:apiovh:conference/webAccess/get"
    },
    {
        "action": "voip:apiovh:ddi/get"
    },
    {
        "action": "voip:apiovh:easyHunting/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/bannerAccess/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/calls/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/eventToken/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/queue/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/queue/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/customStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/eventToken/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/agent/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/liveCalls/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/liveStatistics/get"
    },
    {
        "action": "voip:apiovh:easyHunting/records/get"
    },
    {
        "action": "voip:apiovh:easyHunting/screenListConditions/conditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/screenListConditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/sound/get"
    },
    {
        "action": "voip:apiovh:easyHunting/timeConditions/conditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/timeConditions/get"
    },
    {
        "action": "voip:apiovh:easyPabx/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/tones/get"
    },
    {
        "action": "voip:apiovh:eventToken/get"
    },
    {
        "action": "voip:apiovh:fax/campaigns/detail/get"
    },
    {
        "action": "voip:apiovh:fax/campaigns/get"
    },
    {
        "action": "voip:apiovh:fax/get"
    },
    {
        "action": "voip:apiovh:fax/screenLists/get"
    },
    {
        "action": "voip:apiovh:fax/settings/get"
    },
    {
        "action": "voip:apiovh:get"
    },
    {
        "action": "voip:apiovh:hasSpecialNumbers/get"
    },
    {
        "action": "voip:apiovh:historyConsumption/file/get"
    },
    {
        "action": "voip:apiovh:historyConsumption/get"
    },
    {
        "action": "voip:apiovh:historyRepaymentConsumption/document/get"
    },
    {
        "action": "voip:apiovh:historyRepaymentConsumption/get"
    },
    {
        "action": "voip:apiovh:historyTollfreeConsumption/document/get"
    },
    {
        "action": "voip:apiovh:historyTollfreeConsumption/get"
    },
    {
        "action": "voip:apiovh:line/abbreviatedNumber/get"
    },
    {
        "action": "voip:apiovh:line/activateNewPhone/get"
    },
    {
        "action": "voip:apiovh:line/antihack/get"
    },
    {
        "action": "voip:apiovh:line/automaticCall/get"
    },
    {
        "action": "voip:apiovh:line/availableSipDomains/get"
    },
    {
        "action": "voip:apiovh:line/calls/get"
    },
    {
        "action": "voip:apiovh:line/canChangePassword/get"
    },
    {
        "action": "voip:apiovh:line/click2CallUser/get"
    },
    {
        "action": "voip:apiovh:line/events/get"
    },
    {
        "action": "voip:apiovh:line/get"
    },
    {
        "action": "voip:apiovh:line/ips/get"
    },
    {
        "action": "voip:apiovh:line/lastRegistrations/get"
    },
    {
        "action": "voip:apiovh:line/listAssociablePhones/get"
    },
    {
        "action": "voip:apiovh:line/maximumAvailableSimultaneousLines/get"
    },
    {
        "action": "voip:apiovh:line/offer/get"
    },
    {
        "action": "voip:apiovh:line/options/availableCodecs/get"
    },
    {
        "action": "voip:apiovh:line/options/defaultCodecs/get"
    },
    {
        "action": "voip:apiovh:line/options/get"
    },
    {
        "action": "voip:apiovh:line/phone/adminCredentials/get"
    },
    {
        "action": "voip:apiovh:line/phone/functionKey/availableFunction/get"
    },
    {
        "action": "voip:apiovh:line/phone/functionKey/get"
    },
    {
        "action": "voip:apiovh:line/phone/get"
    },
    {
        "action": "voip:apiovh:line/phone/merchandiseAvailable/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/export/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/phonebookContact/get"
    },
    {
        "action": "voip:apiovh:line/phone/rma/get"
    },
    {
        "action": "voip:apiovh:line/phone/supportsPhonebook/get"
    },
    {
        "action": "voip:apiovh:line/phoneCanBeAssociable/get"
    },
    {
        "action": "voip:apiovh:line/records/get"
    },
    {
        "action": "voip:apiovh:line/simultaneousChannelsDetails/get"
    },
    {
        "action": "voip:apiovh:line/statistics/get"
    },
    {
        "action": "voip:apiovh:line/tones/get"
    },
    {
        "action": "voip:apiovh:line/trafficExtracts/get"
    },
    {
        "action": "voip:apiovh:lines/changeContact"
    },
    {
        "action": "voip:apiovh:lines/get"
    },
    {
        "action": "voip:apiovh:lines/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:lines/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:miniPabx/get"
    },
    {
        "action": "voip:apiovh:miniPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:miniPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:miniPabx/tones/get"
    },
    {
        "action": "voip:apiovh:number/convertToLineAvailableOffers/get"
    },
    {
        "action": "voip:apiovh:number/get"
    },
    {
        "action": "voip:apiovh:offerTask/get"
    },
    {
        "action": "voip:apiovh:oldPhone/get"
    },
    {
        "action": "voip:apiovh:outplanNotification/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/conditionScreenList/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/conditionTime/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/rule/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/bannerAccess/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/calls/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/eventToken/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/queue/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/queue/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/customStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/eventToken/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/agent/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/liveCalls/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/liveStatistics/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/menu/entry/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/menu/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/records/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/sound/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/tts/get"
    },
    {
        "action": "voip:apiovh:phonebook/export/get"
    },
    {
        "action": "voip:apiovh:phonebook/get"
    },
    {
        "action": "voip:apiovh:phonebook/phonebookContact/get"
    },
    {
        "action": "voip:apiovh:portability/canBeCancelled/get"
    },
    {
        "action": "voip:apiovh:portability/canBeExecuted/get"
    },
    {
        "action": "voip:apiovh:portability/dateCanBeChanged/get"
    },
    {
        "action": "voip:apiovh:portability/document/get"
    },
    {
        "action": "voip:apiovh:portability/get"
    },
    {
        "action": "voip:apiovh:portability/relaunch/get"
    },
    {
        "action": "voip:apiovh:portability/status/get"
    },
    {
        "action": "voip:apiovh:redirect/get"
    },
    {
        "action": "voip:apiovh:rsva/allowedRateCodes/get"
    },
    {
        "action": "voip:apiovh:rsva/currentRateCode/get"
    },
    {
        "action": "voip:apiovh:rsva/get"
    },
    {
        "action": "voip:apiovh:rsva/scheduledRateCode/get"
    },
    {
        "action": "voip:apiovh:scheduler/events/get"
    },
    {
        "action": "voip:apiovh:scheduler/get"
    },
    {
        "action": "voip:apiovh:screen/get"
    },
    {
        "action": "voip:apiovh:screen/screenLists/get"
    },
    {
        "action": "voip:apiovh:service/diagnosticReports/get"
    },
    {
        "action": "voip:apiovh:service/directory/get"
    },
    {
        "action": "voip:apiovh:service/directory/getDirectoryServiceCode/get"
    },
    {
        "action": "voip:apiovh:service/directory/getWayTypes/get"
    },
    {
        "action": "voip:apiovh:service/eventCallback/get"
    },
    {
        "action": "voip:apiovh:service/eventToken/get"
    },
    {
        "action": "voip:apiovh:service/faxConsumption/get"
    },
    {
        "action": "voip:apiovh:service/get"
    },
    {
        "action": "voip:apiovh:service/offerChange/get"
    },
    {
        "action": "voip:apiovh:service/offerChanges/get"
    },
    {
        "action": "voip:apiovh:service/offerTask/get"
    },
    {
        "action": "voip:apiovh:service/previousVoiceConsumption/get"
    },
    {
        "action": "voip:apiovh:service/repaymentConsumption/get"
    },
    {
        "action": "voip:apiovh:service/task/get"
    },
    {
        "action": "voip:apiovh:service/voiceConsumption/callDiagnostics/get"
    },
    {
        "action": "voip:apiovh:service/voiceConsumption/get"
    },
    {
        "action": "voip:apiovh:serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:serviceInfos/get"
    },
    {
        "action": "voip:apiovh:spare/compatibleReplacement/get"
    },
    {
        "action": "voip:apiovh:spare/get"
    },
    {
        "action": "voip:apiovh:spare/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:spare/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:task/get"
    },
    {
        "action": "voip:apiovh:timeCondition/condition/get"
    },
    {
        "action": "voip:apiovh:timeCondition/get"
    },
    {
        "action": "voip:apiovh:timeCondition/options/get"
    },
    {
        "action": "voip:apiovh:trunk/channelsPacksRepartition/get"
    },
    {
        "action": "voip:apiovh:trunk/externalDisplayedNumber/get"
    },
    {
        "action": "voip:apiovh:trunk/get"
    },
    {
        "action": "voip:apiovh:trunks/changeContact"
    },
    {
        "action": "voip:apiovh:trunks/get"
    },
    {
        "action": "voip:apiovh:trunks/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:trunks/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:voicemail/directories/download/get"
    },
    {
        "action": "voip:apiovh:voicemail/directories/get"
    },
    {
        "action": "voip:apiovh:voicemail/get"
    },
    {
        "action": "voip:apiovh:voicemail/greetings/download/get"
    },
    {
        "action": "voip:apiovh:voicemail/greetings/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/routing/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/voicemailNumbers/get"
    },
    {
        "action": "voip:apiovh:vxml/get"
    },
    {
        "action": "voip:apiovh:vxml/settings/get"
    },
    {
        "action": "vps:apiovh:*"
    },
    {
        "action": "vrack:apiovh:changeContact"
    },
    {
        "action": "vrack:apiovh:eligibleServices/get"
    },
    {
        "action": "vrackServices:apiovh:*"
    },
    {
        "action": "webCloudDatabases:apiovh:availableVersions/get"
    },
    {
        "action": "webCloudDatabases:apiovh:changeContact"
    },
    {
        "action": "webCloudDatabases:apiovh:config/get"
    },
    {
        "action": "webCloudDatabases:apiovh:cpuThrottle/get"
    },
    {
        "action": "webCloudDatabases:apiovh:database/copy/get"
    },
    {
        "action": "webCloudDatabases:apiovh:database/dump/get"
    },
    {
        "action": "webCloudDatabases:apiovh:database/extension/get"
    },
    {
        "action": "webCloudDatabases:apiovh:database/get"
    },
    {
        "action": "webCloudDatabases:apiovh:dump/get"
    },
    {
        "action": "webCloudDatabases:apiovh:get"
    },
    {
        "action": "webCloudDatabases:apiovh:oom/get"
    },
    {
        "action": "webCloudDatabases:apiovh:serviceInfos/edit"
    },
    {
        "action": "webCloudDatabases:apiovh:serviceInfos/get"
    },
    {
        "action": "webCloudDatabases:apiovh:tasks/get"
    },
    {
        "action": "webCloudDatabases:apiovh:user/get"
    },
    {
        "action": "webCloudDatabases:apiovh:user/grant/get"
    },
    {
        "action": "webCloudDatabases:apiovh:webhostingNetwork/get"
    },
    {
        "action": "webCloudDatabases:apiovh:webs/get"
    },
    {
        "action": "webCloudDatabases:apiovh:whitelist/get"
    },
    {
        "action": "webHosting:apiovh:attachedDomain/get"
    },
    {
        "action": "webHosting:apiovh:availableConfigurations/get"
    },
    {
        "action": "webHosting:apiovh:boostHistory/get"
    },
    {
        "action": "webHosting:apiovh:cdn/availableOptions/get"
    },
    {
        "action": "webHosting:apiovh:cdn/domain/get"
    },
    {
        "action": "webHosting:apiovh:cdn/domain/logs/get"
    },
    {
        "action": "webHosting:apiovh:cdn/domain/option/get"
    },
    {
        "action": "webHosting:apiovh:cdn/domain/statistics/get"
    },
    {
        "action": "webHosting:apiovh:cdn/get"
    },
    {
        "action": "webHosting:apiovh:cdn/operation/get"
    },
    {
        "action": "webHosting:apiovh:cdn/serviceInfos/get"
    },
    {
        "action": "webHosting:apiovh:changeContact"
    },
    {
        "action": "webHosting:apiovh:configuration/get"
    },
    {
        "action": "webHosting:apiovh:cron/get"
    },
    {
        "action": "webHosting:apiovh:cronAvailableLanguage/get"
    },
    {
        "action": "webHosting:apiovh:cronAvailableLanguages/get"
    },
    {
        "action": "webHosting:apiovh:database/capabilities/get"
    },
    {
        "action": "webHosting:apiovh:database/copy/get"
    },
    {
        "action": "webHosting:apiovh:database/dump/get"
    },
    {
        "action": "webHosting:apiovh:database/get"
    },
    {
        "action": "webHosting:apiovh:database/statistics/get"
    },
    {
        "action": "webHosting:apiovh:databaseAvailableType/get"
    },
    {
        "action": "webHosting:apiovh:databaseAvailableVersion/get"
    },
    {
        "action": "webHosting:apiovh:databaseCreationCapabilities/get"
    },
    {
        "action": "webHosting:apiovh:dump/get"
    },
    {
        "action": "webHosting:apiovh:email/bounces/get"
    },
    {
        "action": "webHosting:apiovh:email/get"
    },
    {
        "action": "webHosting:apiovh:email/volumes/get"
    },
    {
        "action": "webHosting:apiovh:emailOption/get"
    },
    {
        "action": "webHosting:apiovh:emailOption/serviceInfos/get"
    },
    {
        "action": "webHosting:apiovh:envVar/get"
    },
    {
        "action": "webHosting:apiovh:extraSqlPerso/databases/get"
    },
    {
        "action": "webHosting:apiovh:extraSqlPerso/get"
    },
    {
        "action": "webHosting:apiovh:extraSqlPerso/serviceInfos/get"
    },
    {
        "action": "webHosting:apiovh:freedom/get"
    },
    {
        "action": "webHosting:apiovh:get"
    },
    {
        "action": "webHosting:apiovh:indy/get"
    },
    {
        "action": "webHosting:apiovh:localSeo/account/get"
    },
    {
        "action": "webHosting:apiovh:localSeo/emailAvailability/get"
    },
    {
        "action": "webHosting:apiovh:localSeo/location/get"
    },
    {
        "action": "webHosting:apiovh:localSeo/location/serviceInfos/get"
    },
    {
        "action": "webHosting:apiovh:module/get"
    },
    {
        "action": "webHosting:apiovh:ovhConfig/get"
    },
    {
        "action": "webHosting:apiovh:ovhConfigCapabilities/get"
    },
    {
        "action": "webHosting:apiovh:ovhConfigRecommendedValues/get"
    },
    {
        "action": "webHosting:apiovh:ownLogs/get"
    },
    {
        "action": "webHosting:apiovh:ownLogs/userLogs/get"
    },
    {
        "action": "webHosting:apiovh:privateDatabaseCreationCapabilities/get"
    },
    {
        "action": "webHosting:apiovh:privateDatabases/get"
    },
    {
        "action": "webHosting:apiovh:runtime/attachedDomains/get"
    },
    {
        "action": "webHosting:apiovh:runtime/get"
    },
    {
        "action": "webHosting:apiovh:runtimeAvailableTypes/get"
    },
    {
        "action": "webHosting:apiovh:serviceInfos/edit"
    },
    {
        "action": "webHosting:apiovh:serviceInfos/get"
    },
    {
        "action": "webHosting:apiovh:ssl/domains/get"
    },
    {
        "action": "webHosting:apiovh:ssl/get"
    },
    {
        "action": "webHosting:apiovh:ssl/report/get"
    },
    {
        "action": "webHosting:apiovh:statistics/get"
    },
    {
        "action": "webHosting:apiovh:tasks/get"
    },
    {
        "action": "webHosting:apiovh:token/get"
    },
    {
        "action": "webHosting:apiovh:user/get"
    },
    {
        "action": "webHosting:apiovh:userLogs/get"
    },
    {
        "action": "webHosting:apiovh:userLogsToken/get"
    },
    {
        "action": "webPaaS:apiovh:*"
    },
    {
        "action": "xdsl:apiovh:addressMove/extraIpRange/get"
    },
    {
        "action": "xdsl:apiovh:antiSpams/evidences/get"
    },
    {
        "action": "xdsl:apiovh:antiSpams/get"
    },
    {
        "action": "xdsl:apiovh:canCancelResiliation/get"
    },
    {
        "action": "xdsl:apiovh:changeContact"
    },
    {
        "action": "xdsl:apiovh:diagnostic/get"
    },
    {
        "action": "xdsl:apiovh:fiberEligibilities/get"
    },
    {
        "action": "xdsl:apiovh:get"
    },
    {
        "action": "xdsl:apiovh:incident/get"
    },
    {
        "action": "xdsl:apiovh:ips/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/availableProfiles/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/logs/get"
    },
    {
        "action": "xdsl:apiovh:lines/get"
    },
    {
        "action": "xdsl:apiovh:lines/statistics/get"
    },
    {
        "action": "xdsl:apiovh:modem/availableACSBackend/get"
    },
    {
        "action": "xdsl:apiovh:modem/availableWLANChannel/get"
    },
    {
        "action": "xdsl:apiovh:modem/blocIp/get"
    },
    {
        "action": "xdsl:apiovh:modem/callWaiting/get"
    },
    {
        "action": "xdsl:apiovh:modem/comfortExchange/get"
    },
    {
        "action": "xdsl:apiovh:modem/connectedDevices/get"
    },
    {
        "action": "xdsl:apiovh:modem/contentSharing/get"
    },
    {
        "action": "xdsl:apiovh:modem/firmware/get"
    },
    {
        "action": "xdsl:apiovh:modem/firmwareAvailable/get"
    },
    {
        "action": "xdsl:apiovh:modem/ftp/get"
    },
    {
        "action": "xdsl:apiovh:modem/get"
    },
    {
        "action": "xdsl:apiovh:modem/ipsecAlg/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/dhcp/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/get"
    },
    {
        "action": "xdsl:apiovh:modem/portMappings/get"
    },
    {
        "action": "xdsl:apiovh:modem/sipAlg/get"
    },
    {
        "action": "xdsl:apiovh:modem/upnp/get"
    },
    {
        "action": "xdsl:apiovh:modem/wifi/get"
    },
    {
        "action": "xdsl:apiovh:monitoringNotifications/get"
    },
    {
        "action": "xdsl:apiovh:orderFollowup/get"
    },
    {
        "action": "xdsl:apiovh:pendingAction/get"
    },
    {
        "action": "xdsl:apiovh:radiusConnectionLogs/get"
    },
    {
        "action": "xdsl:apiovh:resiliationFollowup/get"
    },
    {
        "action": "xdsl:apiovh:resiliationTerms/get"
    },
    {
        "action": "xdsl:apiovh:rma/get"
    },
    {
        "action": "xdsl:apiovh:serviceInfos/edit"
    },
    {
        "action": "xdsl:apiovh:serviceInfos/get"
    },
    {
        "action": "xdsl:apiovh:statistics/get"
    },
    {
        "action": "xdsl:apiovh:tasks/get"
    },
    {
        "action": "xdsl:apiovh:totalDeconsolidationTerms/get"
    },
    {
        "action": "xdslEmail:apiovh:get"
    }
    ],
    "except": [
    {
        "action": "cspReseller:apiovh:put"
    },
    {
        "action": "cspReseller:apiovh:serviceInfos/edit"
    },
    {
        "action": "cspReseller:apiovh:serviceInfos/get"
    },
    {
        "action": "cspReseller:apiovh:subscription/changeQuantity"
    },
    {
        "action": "cspReseller:apiovh:subscription/create"
    },
    {
        "action": "cspReseller:apiovh:subscription/delete"
    },
    {
        "action": "cspReseller:apiovh:subscription/orderAddon"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/access/create"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/access/delete"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/access/edit"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/create"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/delete"
    },
    {
        "action": "dedicatedHousing:apiovh:features/backupFTP/password/create"
    },
    {
        "action": "dedicatedHousing:apiovh:task/cancel"
    },
    {
        "action": "dedicatedNVMeoF:apiovh:acl/data/create"
    },
    {
        "action": "dedicatedNVMeoF:apiovh:acl/management/create"
    },
    {
        "action": "dedicatedNVMeoF:apiovh:confirmTermination"
    },
    {
        "action": "dedicatedNVMeoF:apiovh:terminate"
    },
    {
        "action": "dedicatedServer:apiovh:antiDDosGame/activate"
    },
    {
        "action": "dedicatedServer:apiovh:authenticationSecret/create"
    },
    {
        "action": "dedicatedServer:apiovh:biosSettings/sgx/configure"
    },
    {
        "action": "dedicatedServer:apiovh:bringYourOwnImage/create"
    },
    {
        "action": "dedicatedServer:apiovh:bringYourOwnImage/delete"
    },
    {
        "action": "dedicatedServer:apiovh:burst/edit"
    },
    {
        "action": "dedicatedServer:apiovh:confirmTermination"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupCloud/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupCloud/delete"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupCloud/password/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/access/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/access/delete"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/access/edit"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/delete"
    },
    {
        "action": "dedicatedServer:apiovh:features/backupFTP/password/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/javaKvm/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/restart"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/revokeSessions"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/sshSol/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/test/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/webKvm/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/bmc/webSol/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/firewall/edit"
    },
    {
        "action": "dedicatedServer:apiovh:features/ipmi/access/create"
    },
    {
        "action": "dedicatedServer:apiovh:features/ipmi/resetInterface"
    },
    {
        "action": "dedicatedServer:apiovh:features/ipmi/resetSessions"
    },
    {
        "action": "dedicatedServer:apiovh:features/ipmi/test/create"
    },
    {
        "action": "dedicatedServer:apiovh:install/start"
    },
    {
        "action": "dedicatedServer:apiovh:ipBlockMerge"
    },
    {
        "action": "dedicatedServer:apiovh:ipMove"
    },
    {
        "action": "dedicatedServer:apiovh:license/windows/create"
    },
    {
        "action": "dedicatedServer:apiovh:networking/create"
    },
    {
        "action": "dedicatedServer:apiovh:networking/delete"
    },
    {
        "action": "dedicatedServer:apiovh:ola/aggregation/create"
    },
    {
        "action": "dedicatedServer:apiovh:ola/group/create"
    },
    {
        "action": "dedicatedServer:apiovh:ola/reset"
    },
    {
        "action": "dedicatedServer:apiovh:ola/ungroup"
    },
    {
        "action": "dedicatedServer:apiovh:option/delete"
    },
    {
        "action": "dedicatedServer:apiovh:put"
    },
    {
        "action": "dedicatedServer:apiovh:reboot"
    },
    {
        "action": "dedicatedServer:apiovh:secondaryDnsDomains/create"
    },
    {
        "action": "dedicatedServer:apiovh:secondaryDnsDomains/delete"
    },
    {
        "action": "dedicatedServer:apiovh:secondaryDnsDomains/edit"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/email/create"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/email/delete"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/email/edit"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/sms/create"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/sms/delete"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/alert/sms/edit"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/create"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/delete"
    },
    {
        "action": "dedicatedServer:apiovh:serviceMonitoring/edit"
    },
    {
        "action": "dedicatedServer:apiovh:spla/create"
    },
    {
        "action": "dedicatedServer:apiovh:spla/edit"
    },
    {
        "action": "dedicatedServer:apiovh:spla/revoke"
    },
    {
        "action": "dedicatedServer:apiovh:support/replace/cooling/create"
    },
    {
        "action": "dedicatedServer:apiovh:support/replace/hardDiskDrive/create"
    },
    {
        "action": "dedicatedServer:apiovh:support/replace/memory/create"
    },
    {
        "action": "dedicatedServer:apiovh:task/cancel"
    },
    {
        "action": "dedicatedServer:apiovh:task/schedule"
    },
    {
        "action": "dedicatedServer:apiovh:terminate"
    },
    {
        "action": "dedicatedServer:apiovh:virtualMac/create"
    },
    {
        "action": "dedicatedServer:apiovh:virtualMac/virtualAddress/create"
    },
    {
        "action": "dedicatedServer:apiovh:virtualMac/virtualAddress/delete"
    },
    {
        "action": "dedicatedServer:apiovh:virtualNetworkInterface/disable"
    },
    {
        "action": "dedicatedServer:apiovh:virtualNetworkInterface/edit"
    },
    {
        "action": "dedicatedServer:apiovh:virtualNetworkInterface/enable"
    },
    {
        "action": "dedicatedServer:apiovh:vrack/delete"
    },
    {
        "action": "nutanix:apiovh:confirmTermination"
    },
    {
        "action": "nutanix:apiovh:edit"
    },
    {
        "action": "nutanix:apiovh:terminate"
    },
    {
        "action": "packXdsl:apiovh:addressMove/moveOffer"
    },
    {
        "action": "packXdsl:apiovh:addressMove/offers/create"
    },
    {
        "action": "packXdsl:apiovh:addressMove/servicesToDeleteUnpackTerms/create"
    },
    {
        "action": "packXdsl:apiovh:cancelResiliation/create"
    },
    {
        "action": "packXdsl:apiovh:domain/services/create"
    },
    {
        "action": "packXdsl:apiovh:emailPro/services/create"
    },
    {
        "action": "packXdsl:apiovh:hostedEmail/services/changePassword"
    },
    {
        "action": "packXdsl:apiovh:hostedEmail/services/create"
    },
    {
        "action": "packXdsl:apiovh:hostedEmail/services/delete"
    },
    {
        "action": "packXdsl:apiovh:migration/migrate"
    },
    {
        "action": "packXdsl:apiovh:migration/offers/create"
    },
    {
        "action": "packXdsl:apiovh:migration/servicesToDeleteUnpackTerms/create"
    },
    {
        "action": "packXdsl:apiovh:promotionCode/generate"
    },
    {
        "action": "packXdsl:apiovh:put"
    },
    {
        "action": "packXdsl:apiovh:resiliate"
    },
    {
        "action": "packXdsl:apiovh:voipEcofax/services/create"
    },
    {
        "action": "packXdsl:apiovh:voipLine/options/customShippingAddress/create"
    },
    {
        "action": "packXdsl:apiovh:voipLine/services/create"
    },
    {
        "action": "vps:apiovh:abortSnapshot"
    },
    {
        "action": "vps:apiovh:automatedBackup/detachBackup"
    },
    {
        "action": "vps:apiovh:automatedBackup/reschedule"
    },
    {
        "action": "vps:apiovh:automatedBackup/restore"
    },
    {
        "action": "vps:apiovh:backupftp/access/create"
    },
    {
        "action": "vps:apiovh:backupftp/access/delete"
    },
    {
        "action": "vps:apiovh:backupftp/access/edit"
    },
    {
        "action": "vps:apiovh:backupftp/password/set"
    },
    {
        "action": "vps:apiovh:confirmTermination"
    },
    {
        "action": "vps:apiovh:disks/edit"
    },
    {
        "action": "vps:apiovh:getConsoleUrl"
    },
    {
        "action": "vps:apiovh:ips/delete"
    },
    {
        "action": "vps:apiovh:ips/edit"
    },
    {
        "action": "vps:apiovh:migration/edit"
    },
    {
        "action": "vps:apiovh:migration2016/create"
    },
    {
        "action": "vps:apiovh:migration2018/create"
    },
    {
        "action": "vps:apiovh:openConsoleAccess"
    },
    {
        "action": "vps:apiovh:option/delete"
    },
    {
        "action": "vps:apiovh:put"
    },
    {
        "action": "vps:apiovh:reboot"
    },
    {
        "action": "vps:apiovh:rebuild"
    },
    {
        "action": "vps:apiovh:reinstall"
    },
    {
        "action": "vps:apiovh:secondaryDnsDomains/create"
    },
    {
        "action": "vps:apiovh:secondaryDnsDomains/delete"
    },
    {
        "action": "vps:apiovh:secondaryDnsDomains/edit"
    },
    {
        "action": "vps:apiovh:setPassword"
    },
    {
        "action": "vps:apiovh:snapshot/create"
    },
    {
        "action": "vps:apiovh:snapshot/delete"
    },
    {
        "action": "vps:apiovh:snapshot/edit"
    },
    {
        "action": "vps:apiovh:snapshot/revert"
    },
    {
        "action": "vps:apiovh:start"
    },
    {
        "action": "vps:apiovh:stop"
    },
    {
        "action": "vps:apiovh:terminate"
    },
    {
        "action": "vps:apiovh:veeam/restorePoints/restore"
    },
    {
        "action": "vps:apiovh:veeam/restoredBackup/delete"
    },
    {
        "action": "vrackServices:apiovh:resource/edit"
    },
    {
        "action": "webPaaS:apiovh:subscription/confirmTermination"
    },
    {
        "action": "webPaaS:apiovh:subscription/customer/create"
    },
    {
        "action": "webPaaS:apiovh:subscription/customer/delete"
    },
    {
        "action": "webPaaS:apiovh:subscription/terminate"
    }
    ]
},
"createdAt": "2023-03-14T09:10:57.40418Z",
"updatedAt": "2023-10-16T12:23:52.788274Z"
},
```
</details>

#### Control Panel Access

Donne les droits minimums pour accéder à l'espace client OVHcloud.


<details>
<summary>Politique détaillée</summary>

```json
  {
    "id": "9a759352-15fa-4d67-9625-e95f093809bf",
    "urn": "urn:v1:eu:permissionsGroup:ovh:controlPanelAccess",
    "name": "controlPanelAccess",
    "owner": "ovh",
    "description": "Basic rights mandatory to access to the Control Panel",
    "permissions": {
      "allow": [
        {
          "action": "account:apiovh:me/certificates/get"
        },
        {
          "action": "account:apiovh:me/get"
        },
        {
          "action": "account:apiovh:me/supportLevel/get"
        },
        {
          "action": "account:apiovh:me/tag/get"
        }
      ]
    },
    "createdAt": "2023-10-17T09:03:53.269511Z",
    "updatedAt": null
  }
```
</details>

#### Pack ADSL technical

Donne tous les droits techniques sur un pack ADSL

<details>
<summary>Politique détaillée</summary>

```json
  {
    "id": "00000000-0000-0000-0000-000000000016",
    "urn": "urn:v1:eu:permissionsGroup:ovh:packADSLTechnical",
    "name": "packADSLTechnical",
    "owner": "ovh",
    "description": "Technical actions on a ADSL pack",
    "permissions": {
      "allow": [
        {
          "action": "emailExchange:apiovh:*"
        },
        {
          "action": "emailPro:apiovh:*"
        },
        {
          "action": "freefax:apiovh:*"
        },
        {
          "action": "microsoftServices:apiovh:*"
        },
        {
          "action": "overTheBox:apiovh:autoMTU/edit"
        },
        {
          "action": "overTheBox:apiovh:availableReleaseChannels/get"
        },
        {
          "action": "overTheBox:apiovh:backups/delete"
        },
        {
          "action": "overTheBox:apiovh:backups/get"
        },
        {
          "action": "overTheBox:apiovh:cancelResiliation"
        },
        {
          "action": "overTheBox:apiovh:delete"
        },
        {
          "action": "overTheBox:apiovh:device/actions/create"
        },
        {
          "action": "overTheBox:apiovh:device/actions/get"
        },
        {
          "action": "overTheBox:apiovh:device/availableActions/get"
        },
        {
          "action": "overTheBox:apiovh:device/backup/create"
        },
        {
          "action": "overTheBox:apiovh:device/delete"
        },
        {
          "action": "overTheBox:apiovh:device/get"
        },
        {
          "action": "overTheBox:apiovh:device/logs/create"
        },
        {
          "action": "overTheBox:apiovh:device/restoreBackup"
        },
        {
          "action": "overTheBox:apiovh:get"
        },
        {
          "action": "overTheBox:apiovh:linkDevice"
        },
        {
          "action": "overTheBox:apiovh:linkHardware"
        },
        {
          "action": "overTheBox:apiovh:migration/offers/get"
        },
        {
          "action": "overTheBox:apiovh:put"
        },
        {
          "action": "overTheBox:apiovh:remoteAccesses/authorize"
        },
        {
          "action": "overTheBox:apiovh:remoteAccesses/create"
        },
        {
          "action": "overTheBox:apiovh:remoteAccesses/delete"
        },
        {
          "action": "overTheBox:apiovh:remoteAccesses/get"
        },
        {
          "action": "overTheBox:apiovh:serviceInfos/get"
        },
        {
          "action": "overTheBox:apiovh:statistics/get"
        },
        {
          "action": "overTheBox:apiovh:tasks/get"
        },
        {
          "action": "voip:apiovh:*"
        },
        {
          "action": "xdsl:apiovh:*"
        },
        {
          "action": "xdslEmail:apiovh:*"
        }
      ],
      "except": [
        {
          "action": "emailExchange:apiovh:service/serviceInfos/edit"
        },
        {
          "action": "emailPro:apiovh:account/alias/get"
        },
        {
          "action": "emailPro:apiovh:account/diagnostics/get"
        },
        {
          "action": "emailPro:apiovh:account/fullAccess/get"
        },
        {
          "action": "emailPro:apiovh:account/get"
        },
        {
          "action": "emailPro:apiovh:account/sendAs/get"
        },
        {
          "action": "emailPro:apiovh:account/sendOnBehalfTo/get"
        },
        {
          "action": "emailPro:apiovh:account/tasks/get"
        },
        {
          "action": "emailPro:apiovh:billingMigrated/get"
        },
        {
          "action": "emailPro:apiovh:billingPlan/get"
        },
        {
          "action": "emailPro:apiovh:changeContact"
        },
        {
          "action": "emailPro:apiovh:domain/disclaimer/get"
        },
        {
          "action": "emailPro:apiovh:domain/disclaimerAttribute/get"
        },
        {
          "action": "emailPro:apiovh:domain/dkim/get"
        },
        {
          "action": "emailPro:apiovh:domain/get"
        },
        {
          "action": "emailPro:apiovh:externalContact/get"
        },
        {
          "action": "emailPro:apiovh:get"
        },
        {
          "action": "emailPro:apiovh:server/get"
        },
        {
          "action": "emailPro:apiovh:serviceInfos/edit"
        },
        {
          "action": "emailPro:apiovh:task/get"
        },
        {
          "action": "freefax:apiovh:serviceInfos/edit"
        },
        {
          "action": "microsoftServices:apiovh:changeContact"
        },
        {
          "action": "voip:apiovh:aliases/changeContact"
        },
        {
          "action": "voip:apiovh:aliases/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:changeContact"
        },
        {
          "action": "voip:apiovh:lines/changeContact"
        },
        {
          "action": "voip:apiovh:lines/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:spare/serviceInfos/edit"
        },
        {
          "action": "voip:apiovh:trunks/changeContact"
        },
        {
          "action": "voip:apiovh:trunks/serviceInfos/edit"
        },
        {
          "action": "xdsl:apiovh:changeContact"
        },
        {
          "action": "xdsl:apiovh:serviceInfos/edit"
        }
      ]
    },
    "createdAt": "2023-03-14T09:10:57.40418Z",
    "updatedAt": "2023-10-16T12:23:53.086323Z"
  }
```
</details>

#### Pack ADSL billing

Donne tous les droits liés à la facturation sur un pack ADSL

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "00000000-0000-0000-0000-000000000026",
"urn": "urn:v1:eu:permissionsGroup:ovh:packADSLBilling",
"name": "packADSLBilling",
"owner": "ovh",
"description": "Billing actions on a ADSL pack",
"permissions": {
    "allow": [
    {
        "action": "order:apiovh:*"
    },
    {
        "action": "overTheBox:apiovh:availableReleaseChannels/get"
    },
    {
        "action": "overTheBox:apiovh:backups/get"
    },
    {
        "action": "overTheBox:apiovh:device/actions/get"
    },
    {
        "action": "overTheBox:apiovh:device/availableActions/get"
    },
    {
        "action": "overTheBox:apiovh:device/get"
    },
    {
        "action": "overTheBox:apiovh:get"
    },
    {
        "action": "overTheBox:apiovh:migration/offers/get"
    },
    {
        "action": "overTheBox:apiovh:remoteAccesses/get"
    },
    {
        "action": "overTheBox:apiovh:serviceInfos/edit"
    },
    {
        "action": "overTheBox:apiovh:serviceInfos/get"
    },
    {
        "action": "overTheBox:apiovh:statistics/get"
    },
    {
        "action": "overTheBox:apiovh:tasks/get"
    },
    {
        "action": "voip:apiovh:abbreviatedNumber/get"
    },
    {
        "action": "voip:apiovh:aliases/get"
    },
    {
        "action": "voip:apiovh:aliases/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:aliases/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:allowedCreditThreshold/get"
    },
    {
        "action": "voip:apiovh:amountSecurityDeposit/get"
    },
    {
        "action": "voip:apiovh:billingAccountSite/get"
    },
    {
        "action": "voip:apiovh:carrierSip/cdrs/get"
    },
    {
        "action": "voip:apiovh:carrierSip/clusterDetails/get"
    },
    {
        "action": "voip:apiovh:carrierSip/endpoints/get"
    },
    {
        "action": "voip:apiovh:carrierSip/get"
    },
    {
        "action": "voip:apiovh:carrierSip/settings/get"
    },
    {
        "action": "voip:apiovh:carrierSip/vno/mandates/get"
    },
    {
        "action": "voip:apiovh:carrierSip/vno/ranges/get"
    },
    {
        "action": "voip:apiovh:conference/get"
    },
    {
        "action": "voip:apiovh:conference/histories/get"
    },
    {
        "action": "voip:apiovh:conference/informations/get"
    },
    {
        "action": "voip:apiovh:conference/participants/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/histories/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/participants/get"
    },
    {
        "action": "voip:apiovh:conference/rooms/webAccess/get"
    },
    {
        "action": "voip:apiovh:conference/roomsStats/get"
    },
    {
        "action": "voip:apiovh:conference/settings/get"
    },
    {
        "action": "voip:apiovh:conference/webAccess/get"
    },
    {
        "action": "voip:apiovh:ddi/get"
    },
    {
        "action": "voip:apiovh:easyHunting/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/bannerAccess/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/calls/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/eventToken/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/queue/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/agent/queue/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/customStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/eventToken/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/agent/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/liveCalls/get"
    },
    {
        "action": "voip:apiovh:easyHunting/hunting/queue/liveStatistics/get"
    },
    {
        "action": "voip:apiovh:easyHunting/records/get"
    },
    {
        "action": "voip:apiovh:easyHunting/screenListConditions/conditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/screenListConditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/sound/get"
    },
    {
        "action": "voip:apiovh:easyHunting/timeConditions/conditions/get"
    },
    {
        "action": "voip:apiovh:easyHunting/timeConditions/get"
    },
    {
        "action": "voip:apiovh:easyPabx/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:easyPabx/hunting/tones/get"
    },
    {
        "action": "voip:apiovh:eventToken/get"
    },
    {
        "action": "voip:apiovh:fax/campaigns/detail/get"
    },
    {
        "action": "voip:apiovh:fax/campaigns/get"
    },
    {
        "action": "voip:apiovh:fax/get"
    },
    {
        "action": "voip:apiovh:fax/screenLists/get"
    },
    {
        "action": "voip:apiovh:fax/settings/get"
    },
    {
        "action": "voip:apiovh:get"
    },
    {
        "action": "voip:apiovh:hasSpecialNumbers/get"
    },
    {
        "action": "voip:apiovh:historyConsumption/file/get"
    },
    {
        "action": "voip:apiovh:historyConsumption/get"
    },
    {
        "action": "voip:apiovh:historyRepaymentConsumption/document/get"
    },
    {
        "action": "voip:apiovh:historyRepaymentConsumption/get"
    },
    {
        "action": "voip:apiovh:historyTollfreeConsumption/document/get"
    },
    {
        "action": "voip:apiovh:historyTollfreeConsumption/get"
    },
    {
        "action": "voip:apiovh:line/abbreviatedNumber/get"
    },
    {
        "action": "voip:apiovh:line/activateNewPhone/get"
    },
    {
        "action": "voip:apiovh:line/antihack/get"
    },
    {
        "action": "voip:apiovh:line/automaticCall/get"
    },
    {
        "action": "voip:apiovh:line/availableSipDomains/get"
    },
    {
        "action": "voip:apiovh:line/calls/get"
    },
    {
        "action": "voip:apiovh:line/canChangePassword/get"
    },
    {
        "action": "voip:apiovh:line/click2CallUser/get"
    },
    {
        "action": "voip:apiovh:line/events/get"
    },
    {
        "action": "voip:apiovh:line/get"
    },
    {
        "action": "voip:apiovh:line/ips/get"
    },
    {
        "action": "voip:apiovh:line/lastRegistrations/get"
    },
    {
        "action": "voip:apiovh:line/listAssociablePhones/get"
    },
    {
        "action": "voip:apiovh:line/maximumAvailableSimultaneousLines/get"
    },
    {
        "action": "voip:apiovh:line/offer/get"
    },
    {
        "action": "voip:apiovh:line/options/availableCodecs/get"
    },
    {
        "action": "voip:apiovh:line/options/defaultCodecs/get"
    },
    {
        "action": "voip:apiovh:line/options/get"
    },
    {
        "action": "voip:apiovh:line/phone/adminCredentials/get"
    },
    {
        "action": "voip:apiovh:line/phone/functionKey/availableFunction/get"
    },
    {
        "action": "voip:apiovh:line/phone/functionKey/get"
    },
    {
        "action": "voip:apiovh:line/phone/get"
    },
    {
        "action": "voip:apiovh:line/phone/merchandiseAvailable/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/export/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/get"
    },
    {
        "action": "voip:apiovh:line/phone/phonebook/phonebookContact/get"
    },
    {
        "action": "voip:apiovh:line/phone/rma/get"
    },
    {
        "action": "voip:apiovh:line/phone/supportsPhonebook/get"
    },
    {
        "action": "voip:apiovh:line/phoneCanBeAssociable/get"
    },
    {
        "action": "voip:apiovh:line/records/get"
    },
    {
        "action": "voip:apiovh:line/simultaneousChannelsDetails/get"
    },
    {
        "action": "voip:apiovh:line/statistics/get"
    },
    {
        "action": "voip:apiovh:line/tones/get"
    },
    {
        "action": "voip:apiovh:line/trafficExtracts/get"
    },
    {
        "action": "voip:apiovh:lines/get"
    },
    {
        "action": "voip:apiovh:lines/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:lines/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:miniPabx/get"
    },
    {
        "action": "voip:apiovh:miniPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:miniPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:miniPabx/tones/get"
    },
    {
        "action": "voip:apiovh:number/convertToLineAvailableOffers/get"
    },
    {
        "action": "voip:apiovh:number/get"
    },
    {
        "action": "voip:apiovh:offerTask/get"
    },
    {
        "action": "voip:apiovh:oldPhone/get"
    },
    {
        "action": "voip:apiovh:outplanNotification/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/conditionScreenList/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/conditionTime/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/extension/rule/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/dialplan/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/bannerAccess/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/calls/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/eventToken/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/queue/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/agent/queue/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/customStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/eventToken/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/agent/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/agent/liveStatus/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/liveCalls/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/hunting/queue/liveStatistics/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/menu/entry/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/menu/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/records/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/sound/get"
    },
    {
        "action": "voip:apiovh:ovhPabx/tts/get"
    },
    {
        "action": "voip:apiovh:phonebook/export/get"
    },
    {
        "action": "voip:apiovh:phonebook/get"
    },
    {
        "action": "voip:apiovh:phonebook/phonebookContact/get"
    },
    {
        "action": "voip:apiovh:portability/canBeCancelled/get"
    },
    {
        "action": "voip:apiovh:portability/canBeExecuted/get"
    },
    {
        "action": "voip:apiovh:portability/dateCanBeChanged/get"
    },
    {
        "action": "voip:apiovh:portability/document/get"
    },
    {
        "action": "voip:apiovh:portability/get"
    },
    {
        "action": "voip:apiovh:portability/relaunch/get"
    },
    {
        "action": "voip:apiovh:portability/status/get"
    },
    {
        "action": "voip:apiovh:redirect/get"
    },
    {
        "action": "voip:apiovh:rsva/allowedRateCodes/get"
    },
    {
        "action": "voip:apiovh:rsva/currentRateCode/get"
    },
    {
        "action": "voip:apiovh:rsva/get"
    },
    {
        "action": "voip:apiovh:rsva/scheduledRateCode/get"
    },
    {
        "action": "voip:apiovh:scheduler/events/get"
    },
    {
        "action": "voip:apiovh:scheduler/get"
    },
    {
        "action": "voip:apiovh:screen/get"
    },
    {
        "action": "voip:apiovh:screen/screenLists/get"
    },
    {
        "action": "voip:apiovh:service/diagnosticReports/get"
    },
    {
        "action": "voip:apiovh:service/directory/get"
    },
    {
        "action": "voip:apiovh:service/directory/getDirectoryServiceCode/get"
    },
    {
        "action": "voip:apiovh:service/directory/getWayTypes/get"
    },
    {
        "action": "voip:apiovh:service/eventCallback/get"
    },
    {
        "action": "voip:apiovh:service/eventToken/get"
    },
    {
        "action": "voip:apiovh:service/faxConsumption/get"
    },
    {
        "action": "voip:apiovh:service/get"
    },
    {
        "action": "voip:apiovh:service/offerChange/get"
    },
    {
        "action": "voip:apiovh:service/offerChanges/get"
    },
    {
        "action": "voip:apiovh:service/offerTask/get"
    },
    {
        "action": "voip:apiovh:service/previousVoiceConsumption/get"
    },
    {
        "action": "voip:apiovh:service/repaymentConsumption/get"
    },
    {
        "action": "voip:apiovh:service/task/get"
    },
    {
        "action": "voip:apiovh:service/voiceConsumption/callDiagnostics/get"
    },
    {
        "action": "voip:apiovh:service/voiceConsumption/get"
    },
    {
        "action": "voip:apiovh:serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:serviceInfos/get"
    },
    {
        "action": "voip:apiovh:spare/compatibleReplacement/get"
    },
    {
        "action": "voip:apiovh:spare/get"
    },
    {
        "action": "voip:apiovh:spare/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:spare/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:task/get"
    },
    {
        "action": "voip:apiovh:timeCondition/condition/get"
    },
    {
        "action": "voip:apiovh:timeCondition/get"
    },
    {
        "action": "voip:apiovh:timeCondition/options/get"
    },
    {
        "action": "voip:apiovh:trunk/channelsPacksRepartition/get"
    },
    {
        "action": "voip:apiovh:trunk/externalDisplayedNumber/get"
    },
    {
        "action": "voip:apiovh:trunk/get"
    },
    {
        "action": "voip:apiovh:trunks/get"
    },
    {
        "action": "voip:apiovh:trunks/serviceInfos/edit"
    },
    {
        "action": "voip:apiovh:trunks/serviceInfos/get"
    },
    {
        "action": "voip:apiovh:voicemail/directories/download/get"
    },
    {
        "action": "voip:apiovh:voicemail/directories/get"
    },
    {
        "action": "voip:apiovh:voicemail/get"
    },
    {
        "action": "voip:apiovh:voicemail/greetings/download/get"
    },
    {
        "action": "voip:apiovh:voicemail/greetings/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/routing/get"
    },
    {
        "action": "voip:apiovh:voicemail/settings/voicemailNumbers/get"
    },
    {
        "action": "voip:apiovh:vxml/get"
    },
    {
        "action": "voip:apiovh:vxml/settings/get"
    },
    {
        "action": "xdsl:apiovh:addressMove/extraIpRange/get"
    },
    {
        "action": "xdsl:apiovh:antiSpams/evidences/get"
    },
    {
        "action": "xdsl:apiovh:antiSpams/get"
    },
    {
        "action": "xdsl:apiovh:canCancelResiliation/get"
    },
    {
        "action": "xdsl:apiovh:diagnostic/get"
    },
    {
        "action": "xdsl:apiovh:fiberEligibilities/get"
    },
    {
        "action": "xdsl:apiovh:get"
    },
    {
        "action": "xdsl:apiovh:incident/get"
    },
    {
        "action": "xdsl:apiovh:ips/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/availableProfiles/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/get"
    },
    {
        "action": "xdsl:apiovh:lines/dslamPort/logs/get"
    },
    {
        "action": "xdsl:apiovh:lines/get"
    },
    {
        "action": "xdsl:apiovh:lines/statistics/get"
    },
    {
        "action": "xdsl:apiovh:modem/availableACSBackend/get"
    },
    {
        "action": "xdsl:apiovh:modem/availableWLANChannel/get"
    },
    {
        "action": "xdsl:apiovh:modem/blocIp/get"
    },
    {
        "action": "xdsl:apiovh:modem/callWaiting/get"
    },
    {
        "action": "xdsl:apiovh:modem/comfortExchange/get"
    },
    {
        "action": "xdsl:apiovh:modem/connectedDevices/get"
    },
    {
        "action": "xdsl:apiovh:modem/contentSharing/get"
    },
    {
        "action": "xdsl:apiovh:modem/firmware/get"
    },
    {
        "action": "xdsl:apiovh:modem/firmwareAvailable/get"
    },
    {
        "action": "xdsl:apiovh:modem/ftp/get"
    },
    {
        "action": "xdsl:apiovh:modem/get"
    },
    {
        "action": "xdsl:apiovh:modem/ipsecAlg/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/dhcp/DHCPStaticAddresses/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/dhcp/get"
    },
    {
        "action": "xdsl:apiovh:modem/lan/get"
    },
    {
        "action": "xdsl:apiovh:modem/portMappings/get"
    },
    {
        "action": "xdsl:apiovh:modem/sipAlg/get"
    },
    {
        "action": "xdsl:apiovh:modem/upnp/get"
    },
    {
        "action": "xdsl:apiovh:modem/wifi/get"
    },
    {
        "action": "xdsl:apiovh:monitoringNotifications/get"
    },
    {
        "action": "xdsl:apiovh:orderFollowup/get"
    },
    {
        "action": "xdsl:apiovh:pendingAction/get"
    },
    {
        "action": "xdsl:apiovh:radiusConnectionLogs/get"
    },
    {
        "action": "xdsl:apiovh:resiliationFollowup/get"
    },
    {
        "action": "xdsl:apiovh:resiliationTerms/get"
    },
    {
        "action": "xdsl:apiovh:rma/get"
    },
    {
        "action": "xdsl:apiovh:serviceInfos/edit"
    },
    {
        "action": "xdsl:apiovh:serviceInfos/get"
    },
    {
        "action": "xdsl:apiovh:statistics/get"
    },
    {
        "action": "xdsl:apiovh:tasks/get"
    },
    {
        "action": "xdsl:apiovh:totalDeconsolidationTerms/get"
    },
    {
        "action": "xdslEmail:apiovh:get"
    }
    ]
},
"createdAt": "2023-03-14T09:10:57.40418Z",
"updatedAt": "2023-10-16T12:23:52.97528Z"
}
```
</details>

#### vRack management

Permet de rattacher de n'importe quel produit du compte client à un vrack

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "1a4ef121-b350-440c-becd-012ad73020bb",
"urn": "urn:v1:eu:permissionsGroup:ovh:vrackManagement",
"name": "vrackManagement",
"owner": "ovh",
"description": "Attach a product to a vRack",
"permissions": {
    "allow": [
    {
        "action": "*:vrack:attach"
    }
    ]
},
"createdAt": "2023-09-26T16:09:19.975237Z",
"updatedAt": null
}
```
</details>

#### vSphere Admin

Donne accès à la console d'administration de vSphere.
Ce groupe de permissions ne couvre pas l'administration d'un environnement private cloud dans l'espace client.

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "52237b8c-b06c-4368-b0b8-93941211b4e1",
"urn": "urn:v1:eu:permissionsGroup:ovh:vSphereAdmin",
"name": "vSphereAdmin",
"owner": "ovh",
"description": "Access to vSphere administration console as an administrator",
"permissions": {
    "allow": [
    {
        "action": "pccVMware:vSphere:assumeRole?*"
    }
    ]
},
"createdAt": "2023-09-25T09:28:43.818361Z",
"updatedAt": null
}
```
</details>

#### Openstack Admin

Donne accès à la console d'administration d'Openstack.
Ce groupe de permissions ne couvre pas l'administration d'un projet public cloud dans l'espace client.

<details>
<summary>Politique détaillée</summary>

```json
{
"id": "e7050292-97e7-4014-88e2-b05a1fc9aafc",
"urn": "urn:v1:eu:permissionsGroup:ovh:openstackAdmin",
"name": "openstackAdmin",
"owner": "ovh",
"description": "Access to openstack administration console as an administrator",
"permissions": {
    "allow": [
    {
        "action": "publicCloudProject:openstack:*"
    }
    ]
},
"createdAt": "2023-09-25T09:28:43.818361Z",
"updatedAt": null
}
```
</details>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
