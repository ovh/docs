---
title: 'Elegir un conjunto de discos para instalar un sistema operativo'
slug: elegir-conjunto-discos-para-instalar-sistema-operativo
excerpt: 'Cómo elegir un conjunto específico de discos para instalar el sistema operativo'
section: 'RAID y discos'
---

**Última actualización: 13/11/2018**

## Objetivo

OVH le ofrece la posibilidad de contratar [servidores dedicados](https://www.ovh.es/servidores_dedicados/){.external} con un conjunto de discos SATA y un conjunto de discos SSD. Estos servidores se conocen como **servidores híbridos**.

**Esta guía explica cómo especificar el conjunto de discos en el que queremos instalar el sistema operativo.**

> [!warning]
> 
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

* Tener un [servidor híbrido de OVH](https://www.ovh.es/servidores_dedicados/){.external}.
* Tener acceso a la [API de OVH](https://api.ovh.com/console/){.external}.
* Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Este procedimiento solo funciona en los sistemas Linux (excepto sistemas ESXi y XenServer) y en configuraciones SoftRAID, NoRAID o HardRAID (configuración por defecto).
> 

## Procedimiento

### 1. Obtener el nombre del servidor desde la API de OVH

Una vez conectado a la [API de OVH](https://api.ovh.com/console/){.external}, descienda hasta la siguiente llamada:

> [!api]
>
> @api {GET} /dedicated/server
> 

Haga clic en `Execute`{.action} e identifique el nombre del servidor híbrido.

![Servicios disponibles](images/services-01.png){.thumbnail}

### Obtener el diskGroupId

El **diskGroupId** le permitirá indicar el conjunto de discos en el que se instalará el sistema operativo. 

Para obtenerlo, vaya a la siguiente llamada a la API:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Introduzca en el campo **serviceName** el nombre del servidor obtenido anteriormente y haga clic en el botón `Execute`{.action}. Se mostrará la información relativa al hardware del servidor. Localice el **diskGroupId** en el apartado **diskGroups**.

El sistema operativo se instalará por defecto en el **diskGroupId 1**.

![Híbrido](images/hybrid-01.png){.thumbnail}

### Lanzar la instalación del sistema operativo

Una vez que conozca el **diskGroupId**, ya puede instalar el sistema operativo.

Realice la siguiente llamada a la API para ver la lista de sistemas operativos compatibles:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Plantillas compatibles](images/templates-01.png){.thumbnail}

Anote el nombre de la plantilla correspondiente al sistema operativo que haya elegido y realice la siguiente llamada a la API:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Introduzca la referencia del servidor en el campo **serviceName**, el diskGroupId (1) en el campo **diskGroupId** y, por último, el nombre de la plantilla en el campo **templateName**.

Los otros campos son opcionales. Cumplimente los que desee y haga clic en el botón `Execute`{.action}.

![Instalación](images/install-01.png){.thumbnail}

El sistema operativo se instalará. Puede consultar el progreso de la operación actualizando la página del servidor en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} o con la siguiente llamada a la API, introduciendo el nombre del servidor en el campo **serviceName** y haciendo clic en el botón `Execute`{.action}:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
> 

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.