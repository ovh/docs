---
title: "Configurar un script iPXE personalizado para arrancar el servidor a través de la API OVHcloud"
excerpt: "Descubra cómo la API OVHcloud le permite configurar un script de arranque personalizado PXE para iniciar su servidor"
updated: 2023-08-24
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

> [!warning]
>
> Este artículo está destinado a los usuarios con experiencia que al menos tienen conocimientos básicos sobre la [iniciación PXE](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) y la implementación de OVHcloud: [iPXE](https://ipxe.org/).
>

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) puede especificar un modo de arranque de una lista predefinida: disco principal o rescue.
A través de la [API de OVHcloud](https://api.ovh.com/), también puede definir scripts personalizados.

Utilizar un script personalizado puede ser interesante en los siguientes casos:

- Si utiliza un SO volátil que no desea instalar en el disco, este solo permanece en RAM.
- Usted hace multicloud y uno de los otros proveedores que utiliza no ofrece el SO que desea instalar en su catálogo, ni soluciones alternativas como [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). Deseando un método único y estandarizado de instalación, independientemente del proveedor, ha construido su propia imagen de rescue de instalación para gestionar la instalación completa de su servidor dedicado.

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/) **listo para ser booteado/reiniciado** en su cuenta de OVHcloud.
- Tener acceso a la [API de OVHcloud](https://api.ovh.com/).

> [!warning]
>
> El reinicio de un servidor dedicado puede conllevar la interrupción de servicios no redundantes que dependen únicamente del servidor reiniciado.
>

> [!warning]
>
> Esta funcionalidad solo está disponible en los servidores `UEFI`. Estamos trabajando para añadir esta funcionalidad a los servidores boot `LEGACY`.
>

## Procedimiento

### Gestionar un script iPXE para un servidor dedicado <a name="manageIpxeScript"></a>

#### Editar el script iPXE de un servidor <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Indique su script en el atributo `bootScript` directamente.

#### Obtener el script iPXE de un servidor <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Su script se encuentra en el atributo `bootScript`.

por ejemplo,

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

Ya puede reiniciar el servidor y este utilizará su script [iPXE](https://ipxe.org/) para iniciarlo.

### Otros modos de arranque <a name="leaveIpxeScript"></a>

En cualquier momento puede volver al disco o al modo de rescate desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) (consulte nuestra guía "[Activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)") o a través de la [API de OVHcloud](https://api.ovh.com/).

#### Cambiar a disco <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Especifique `1` en el atributo `bootId`.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Observará que el valor del atributo `bootScript` es ahora cero.

## Más información <a name="gofurther"></a>

[Reinicio del servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - open source boot firmware](https://ipxe.org/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.