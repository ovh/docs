---
title: 'Configurar un DNS secundario de OVHcloud en un VPS'
slug: dns-secundario-vps
excerpt: Cómo añadir un servidor DNS secundario a un dominio
section: Uso avanzado
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/01/2022**

## Objetivo

Si configura su VPS como servidor DNS, puede utilizar el servicio DNS secundario de OVHcloud para alojar una zona DNS secundaria. De este modo, los servidores DNS de su dominio estarán disponibles aunque el servidor DNS primario no responda.

**Esta guía explica cómo añadir un dominio al área de cliente para utilizar un servidor DNS secundario de OVHcloud.**

## Requisitos

- Un dominio al que puede acceder como administrador
- Un servidor [VPS](https://www.ovhcloud.com/es-es/vps/) desde el área de cliente de OVHcloud
- Haber iniciado sesión en el [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!warning]
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la instalación de un servicio en un servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

## Procedimiento

### Paso 1: recuperación del código de verificación <a name="retrievecode"></a>

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores Privados Virtuales`{.action}.

Abra la pestaña `DNS secundario`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

![DNS secundario](images/sec-01.png){.thumbnail}

Introduzca el dominio que quiera añadir y haga clic en `Aceptar`{.action}.

![DNS secundario](images/sec-02.png){.thumbnail}

Aparecerá un mensaje relativo al proceso de verificación en el área de cliente.

![DNS secundario](images/sec-03.png){.thumbnail}

Es necesario validar la autorización de gestión del dominio antes de poder añadirlo a los DNS secundario de OVHcloud. Esto se realiza mediante una búsqueda DNS automatizada en el subdominio *ownercheck.sudominio*. Para ello, se genera una cadena de caracteres individual que se muestra en la zona de notificación roja. Copie este código de verificación para utilizarlo en la siguiente etapa.

### Paso 2: verificación de la autorización del dominio <a name="verifyingdomain"></a>

La acción a realizar es diferente en función del lugar en el que se gestionen los DNS del dominio.

- Si el dominio es gestionado por un agente registrador externo **o** utiliza en esta fase servidores DNS externos, conéctese al área de cliente de su proveedor DNS y añada, en la zona DNS, un registro de tipo TXT con el subdominio "ownercheck", así como el valor proporcionado ejecutando el [paso 1](#retrievecode).

- Si el dominio es gestionado por OVHcloud como agente registrador **y** utiliza los servidores DNS de OVHcloud, añada el registro TXT en la sección `Web Cloud`{.action} de su [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Siga las indicaciones que le indicamos en la guía [Editar una zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/) si no está familiarizado con este proceso.

![DNS secundario](images/sec-04.png){.thumbnail}

### Paso 3: adición del dominio

Una vez que el registro TXT esté presente en la zona DNS del dominio, repita los [pasos descritos en la primera parte de esta guía](#retrievecode) para añadir el dominio al servidor DNS secundario de OVHcloud.

Haga clic en `Confirmar`{.action} para iniciar la verificación automática del propietario, introduciendo el campo TXT. Un mensaje en el área de cliente le confirmará la correcta validación DNS. Ahora puede eliminar el registro TXT.

Los dominios añadidos aparecen en esta pestaña con el **nombre correspondiente al servidor DNS secundario**. Actualice la página en su navegador después de añadir un dominio.

![DNS secundario](images/sec-05.png){.thumbnail}

Es posible eliminar un dominio haciendo clic en el botón `...`{.action} de la tabla.

> [!primary]
>
> Puede ser necesario realizar otras acciones para configurar el servidor DNS en los dominios:
>
> - la configuración de un servicio DNS (como *BIND*)
> - la configuración de los registros GLUE
> - autorización de transferencias de zona DNS
>
> Si necesita más información sobre estas tareas administrativas, consulte la documentación externa.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
