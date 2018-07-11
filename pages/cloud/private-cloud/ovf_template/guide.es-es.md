---
title: 'Desplegar una plantilla OVF Windows y SQL Server'
slug: desplegar-plantilla-ovf
excerpt: 'Cómo desplegar una plantilla OVF Windows y SQL Server'
section: 'Servicios y opciones de OVH'
---

**Última actualización: 11/07/2018**

## Objetivo

OVH pone a su disposición plantillas Windows y SQL Server (en formato OVF) que nuestros clientes puede desplegar directamente desde su cliente de escritorio vSphere (versiones 5.5 y 6.0) y desde el cliente web (Flash y HTML5 en versión 6.5).

**Esta guía explica dónde encontrar las plantillas y cómo desplegarlas.**

> [!primary]
> 
> En [esta página](https://www.ovh.es/private-cloud/opciones/imagenes-licencias.xml){.external} puede consultar el precio de las imágenes que OVH pone a su disposición.
>

## Requisitos

- Tener acceso al cliente web o al cliente de escritorio, según la versión utilizada.
- Haber activado las [licencias de Windows](https://www.ovh.es/private-cloud/opciones/imagenes-licencias.xml){.external} desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (pestaña `Licencia Widows`{.action} del datacenter). 


## Procedimiento

### Obtener la URL de la plantilla OVF

Desde un navegador de internet, vaya a la página de inicio de su Private Cloud y haga clic en `OVH Templates`{.action}.

![OVH Templates](images/gatewayssl.png){.thumbnail}

En la nueva página puede consultar los detalles de las plantillas Windows y SQL. 

Al seleccionar la plantilla, se abrirá una ventana con los enlaces necesarios para desplegarla, según la versión de vSphere que utilice.

![Enlaces a las plantillas](images/copylink.png){.thumbnail}


### Desplegar la plantilla OVF

Una vez conectado al cliente web vSphere, vaya a la página `Hosts y clusters`{.action} y, a continuación, haga clic derecho en su datacenter y seleccione `Deploy OVF Template...`{.action}.

![Desplegar la plantilla](images/selectdeploy.png){.thumbnail}

Se abrirá el menú contextual, donde podrá configurar el despliegue. En primer lugar, introduzca la URL obtenida como se explica más arriba.

![Seleccionar la plantilla](images/puturl.png){.thumbnail}

En la siguiente etapa, elija el datacenter.

![Elección del datacenter](images/selectdatacenter.png){.thumbnail}

Seleccione a continuación el cluster en el que quiera desplegar la máquina virtual.

![Elección del cluster](images/selectcluster.png){.thumbnail}

Encontrará todos los detalles de la plantilla, incluyendo la contraseña predeterminada. Por seguridad, es importante que la cambie la primera vez que se conecte.

![Detalles de la plantilla](images/detailstemplate.png){.thumbnail}

Elija el datastore en el que quiera que se almacene la máquina virtual, así como el formato del disco.

![Elección del datastore](images/selectdatastore.png){.thumbnail}

Ahora elija la red que quiera utilizar.

![Elección de la red](images/selectnetwork.png){.thumbnail}

La configuración ya está casi terminada. Se mostrará un resumen de la configuración elegida.

![Resumen de la configuración](images/resume.png){.thumbnail}

Cuando haga clic en `Finish`{.action}, se creará una tarea y se indicará el progreso del despliegue.

![Consultar el progreso del despliegue](images/startdeploy.png){.thumbnail}

Una vez finalizado el despliegue, puede cerrar esta ventana.

La máquina virtual desplegada ya aparecerá en el inventario.

![Inventario](images/inventory.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.