---
title: Gérer les licences Windows de vos machines virtuelles
excerpt: Gérer les licences Windows de vos machines virtuelles
updated: 2024-05-23
---

## Objectif

Découvrez comment gérer les licences Windows de vos machines virtuelles hébergées sur votre infrastructure Hosted Private Cloud.

> [!warning]
>
> OVHcloud vous permet de faciliter la gestion et la facturation de vos licences Windows en vous offrant la possibilité de nous indiquer quelles machines virtuelles nécessitent l'usage d'une licence.
> 
> Vous conservez néanmoins la responsabilité de l'exactitude des données que vous nous fournissez, et OVHcloud ne pourra être tenu responsable en cas d'utilisation non autorisée d'un système Windows de votre part.

## Prérequis

- [Avoir activé les licences Windows](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/manager_ovh_private_cloud#licence-windows){.external} depuis votre [espace client OVHcloud](/links/manager){.external}

## En pratique

### Lister les machine virtuelles avec une licence

Vous pouvez vérifier rapidement quelles machines virtuelles de votre infrastructure possèdent une licence depuis l'API OVHcloud.

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vmLicensed
>

*Example de retour :*

```json
[
    {
        "vmId": 1074,
        "name": "my-win2019-vm",
        "guestOsFamily": "windows2019srv_64Guest",
        "license": "windows 2019 Standard Core"
    }
]
```

### Vérifier la licence d'une machine virtuelle

Vous pouvez vérifier la license actuellement associé à une de vos machines virtuelles depuis l'API OVHcloud.
Si aucune licence n'est attachée à celle-ci, le champ `license` aura la valeur `null`.

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

### Mettre à jour la licence d'une machine virtuelle

Vous pouvez mettre à jour la licence associée à une de vos machines virtuelles depuis l'API OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense
>

> [!primary]
>
> Les machines virtuelles déployées depuis les [bibliothèques de contenu OVHcloud (VMware content libraries)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_use_content_library) sont automatiquement attachées à une licence Windows correspondante.

> [!warning]
>
> Afin d'éviter l'attribution erronée d'une licence Windows sur une machine virtuelle, l'appel API ci-dessus retournera une erreur dans le cas où la machine virtuelle a été configurée pour un système d'exploitation différent depuis votre interface vSphere. 
>
> Vous pouvez résoudre ce problème en modifiant les réglages de la machine virtuelle ou vous pouvez choisir d'ignorer cette erreur en passant l'option `bypassGuestOsFamilyCheck`.

### Supprimer la licence d'une machine virtuelle

Vous pouvez supprimer la licence associée à une de vos machines virtuelles depuis l'API OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/removeLicense
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
