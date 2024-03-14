---
title: Gérer les licenses Windows de vos machines virtuelles
excerpt: Gérer les licenses Windows de vos machines virtuelles
updated: 2024-03-14
---

## Objectif

Découvrez comment gérer les licenses Windows de vos machines virtuelles hébergées sur votre infrastructure Hosted Private Cloud.

> [!warning]
>
> OVHcloud vous permet de faciliter la gestion et la facturation de vos licenses Windows en vous offrant la possibilité de nous indiquer quelles machines virtuelles nécessitent l'usage d'une license.
> 
> Vous conservez néanmoins la responsabilité de l'exactitude des données que vous nous fournissez, et OVHcloud ne pourra être tenu responsable en cas d'utilisation non autorisée d'un système Windows de votre part.

## Prérequis

- [Avoir activé les licences Windows](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/manager_ovh_private_cloud#licence-windows){.external} depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

### Lister les machine virtuelles avec une license

Vous pouvez vérifier rapidement quelles machines virtuelles de votre infrastructure possèdent une license depuis l'API OVHcloud.

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/Licensed
>

*Example de retour :*
```json
//
```

### Vérifier la license d'une machine virtuelle

Vous pouvez vérifier la license actuellement associé à une de vos machines virtuelles depuis l'API OVHcloud.
Si aucune license n'est attachée à celle-ci, le champ `license` aura la valeur `null`.

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

*Example de retour :*
```json
{
    // ...
    "guestOsFamily": "windows2019srv_64Guest",
    "license": "windows 2019 Standard"
}
```

### Mettre à jour la license d'une machine virtuelle

Vous pouvez mettre à jour la license associé à une de vos machines virtuelles depuis l'API OVHcloud.

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense
>

> [!primary]
>
> Les machines virtuelles déployées depuis les [bibliothèques de contenu OVHcloud (VMware content libraries)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library) sont automatiquement attachées d'une license Windows correspondante.

> [!warning]
>
> Afin d'éviter l'attribution erronée d'une license Windows sur une machine virtuelle, l'appel API ci-dessus retournera une erreur dans le cas où la machine virtuelle a été configurée pour un système d'exploitation différent depuis votre interface vSphere. 
>
> Vous pouvez résoudre ce problème en modifiant les réglages de la machine virtuelle ou vous pouvez choisir d'ignorer cette erreur en passant l'option `bypassGuestOsFamilyCheck`.

### Supprimer la license d'une machine virtuelle

Vous pouvez supprimer la license associé à une de vos machines virtuelles depuis l'API OVHcloud.

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/removeLicense
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
