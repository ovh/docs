---
title: "Configurer un script iPXE personnalisé pour démarrer votre serveur via l'API OVHcloud"
excerpt: "Découvrez comment l'API OVHcloud vous permet de configurer un script d'amorçage personnalisé PXE pour booter votre serveur"
updated: 2023-08-24
---

## Objectif

> [!warning]
>
> Cet article est destiné aux utilisateurs expérimentés qui ont au minimum des connaissances de base sur l'[amorçage PXE](https://fr.wikipedia.org/wiki/Preboot_Execution_Environment) ainsi que sur l'implémentation utilisée chez OVHcloud : [iPXE](https://ipxe.org/).
>

Dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), il est possible de choisir un amorçage parmi une liste prédéfinie restreinte : disque ou rescue principalement.<br>
Via l’[API OVHcloud](https://ca.api.ovh.com/), vous pouvez aussi définir des scripts personnalisés.

Utiliser un script personnalisé peut-être intéressant dans les cas suivants :

- Vous utilisez un OS volatile que vous ne souhaitez pas installer sur le disque et qui reste uniquement en RAM.
- Vous faites du multicloud et l'un des autres fournisseurs que vous utilisez ne propose ni l'OS que vous souhaitez installer dans son catalogue, ni de solution alternative telle que [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). Souhaitant une méthode unique et standardisée d'installation quel que soit le fournisseur, vous avez construit votre propre image de rescue d'installation pour gérer l'installation complète de votre serveur dédié.

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) **prêt à être booté/rebooté** sur votre compte OVHcloud.
- Avoir accès à l'[API OVHcloud](https://ca.api.ovh.com/).

> [!warning]
>
> Le redémarrage d'un serveur dédié peut engendrer l'interruption de services non redondés qui dépendent uniquement du serveur redémarré.
>

> [!warning]
>
> Cette fonctionnalité n'est disponible que sur les serveurs `UEFI`. Nous travaillons actuellement à ajouter cette fonctionnalité sur les serveurs en boot `LEGACY`.
>

## En pratique

### Gérer un script iPXE pour un serveur dédié <a name="manageIpxeScript"></a>

#### Modifier le script iPXE d'un serveur <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Spécifiez votre script dans l'attribut `bootScript` directement.

#### Obtenir le script iPXE d'un serveur <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Votre script se situe dans l'attribut `bootScript`.

Par exemple :

```json
{
    "noIntervention": false,
    "name": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "rack": "SXXXBXX",
    "commercialRange": "fs",
    "os": "debian11_64",
    "rootDevice": null,
    "rescueMail": null,
    "linkSpeed": 1000,
    "bootScript": "#!ipxe\necho Boot first local hdd in LEGACY mode\nsanboot --no-describe --drive 0x80\nexit 1\n",
    "reverse": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "state": "ok",
    "ip": "XXX.XXX.XXX.XXX",
    "bootId": null,
    "newUpgradeSystem": false,
    "datacenter": "sbg3",
    "professionalUse": false,
    "supportLevel": "pro",
    "serverId": 123456,
    "powerState": "poweron",
    "monitoring": false
}
```

Vous pouvez maintenant redémarrer votre serveur et celui-ci utilisera votre script [iPXE](https://ipxe.org/) pour l'amorçage.

### Autres modes de boot <a name="leaveIpxeScript"></a>

Vous pouvez à tout moment basculer à nouveau sur le disque ou sur le mode rescue à partir de l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) (consultez notre guide « [Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) »), ou via l’[API OVHcloud](https://ca.api.ovh.com/).

#### Basculer sur disque <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Spécifiez `1` dans l'attribut `bootId`.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Vous observerez que la valeur de l'attribut `bootScript` est désormais nulle.

## Aller plus loin <a name="gofurther"></a>

[Redémarrage de votre serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - open source boot firmware [EN]](https://ipxe.org/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
