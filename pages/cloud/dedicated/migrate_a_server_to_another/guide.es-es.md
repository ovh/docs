---
title: Migración de los datos de un servidor a otro
slug: migrar-datos-de-un-servidor-a-otro
excerpt: Cómo migrar los datos de un servidor a otro
section: Primeros pasos
order: 5
---

> [!primary]
>
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 16/09/2021**

## Objetivo

Como sus necesidades y las gamas de OVHcloud evolucionan constantemente, es necesario a veces modificar los servidores y migrar los datos en consecuencia.

**Esta guía centraliza los pasos para migrar los datos de un servidor a otro.**

> [!warning]
>
> OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
> Esta guía le ayudará en la mayor medida posible a realizar las tareas habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la ejecución de los servicios en un servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

## Requisitos

- Dos servidores dedicados (uno antiguo y otro nuevo) con el sistema operativo instalado
- Acceso administrativo a sus servidores
- Competencias de administración del sistema

## Procedimiento

> [!warning]
>
> Algunas de las opciones que ofrece esta guía pueden no estar disponibles en su gama de servidores o pueden encontrarse en otra sección del panel de configuración. (Kimsufi, So you Start).
>

### Preparar el entorno

Una vez que haya entregado el nuevo servidor a su cuenta, el primer paso será crear un entorno (OS, software, seguridad...) idéntico al entorno anterior, o al menos en la medida de lo posible.

Si es necesario cambiar la versión del sistema operativo o del programa, asegúrese de que las ubicaciones de los archivos sean las mismas y de que los datos sean compatibles entre las versiones.

### Migración de datos

La migración de los datos suele implicar copiar archivos de un servidor a otro. Existen diversas soluciones para ello:

- La forma más sencilla es utilizar un programa adecuado como [SFTP](https://docs.ovh.com/es/dedicated/subir-y-descargar-datos-por-sftp/).
- La otra opción es [sincronizar los dos servidores entre sí](https://docs.ovh.com/es/dedicated/copiar-datos-servidor-rsync/).

### Uso del Backup Storage (disponible únicamente en OVHcloud y So you Start)

Con la opción [Backup Storage](https://www.ovhcloud.com/es-es/bare-metal/backup-storage/) de backup, puede almacenar datos en un servicio externo al servidor. Solo está relacionado con el servicio que le ha contratado.

> [!warning]
>
> Sólo se puede acceder al Backup Storage desde los servidores OVHcloud y las IPs situadas en la misma zona
>
> Por ejemplo, si al Backup Storage está activado en un servidor situado en el datacenter SBG, los servidores situados en los datacenters GRA o RBX pueden acceder a él. No obstante, los servidores situados en los centros de datos BHS o WAW no tendrán acceso a este almacenamiento.
>

Puedes autorizar el acceso al Backup Storage desde tu nuevo servidor. De este modo, dispondrá de una pasarela para transferir sus datos.

Para más información, consulte nuestra guía sobre [utilizar Backup Storage en un servidor dedicado](https://docs.ovh.com/es/dedicated/servicio-backup-storage/).

### Migración de una dirección Additional IP (disponible únicamente en OVHcloud y So you Start)

> [!warning]
>
> - La dirección IP principal de un servidor no puede migrarse a otro servidor.
>
> - Es posible migrar una Additional IP desde una cuenta de So you Start a una cuenta de OVHcloud. Esta operación se factura al igual que la creación de una nueva IP.
>
> - No es posible migrar una IP desde una cuenta de OVHcloud a una cuenta de So you Start.
>

Si la reputación de sus direcciones IP es importante, le recomendamos encarecidamente que utilice las direcciones [Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/), ya que pueden conservarse si se migra.

Una vez que disponga de estas direcciones Additional IP, solo tiene que moverlas al nuevo servidor.
Para ello, consulte nuestra guía: [Mover una Additional IP](https://docs.ovh.com/es/dedicated/ip-fo-move/).

> [!alert]
>
> La eliminación del servidor de origen, en el que se han contratado una o más opciones (Backup storage, dirección Additional IP), eliminará definitivamente estas opciones.
>
> Es necesario realizar todos los cambios antes de eliminar el servicio.
>

Una vez que los datos estén disponibles en el nuevo servidor, es posible que deba modificar su configuración DNS, por ejemplo, si ha utilizado la dirección IP principal.

Para más información, consulte nuestra documentación sobre los [dominios y DNS](https://docs.ovh.com/es/domains/).

## Más información

Si desea obtener ayuda para migrar su servidor, póngase en contacto con [nuestra red de partners](https://partner.ovhcloud.com/es-es/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
