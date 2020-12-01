---
title: 2. Crear el primer grupo de escritorios virtuales (pool)
slug: crear-modelo-pool
excerpt: Cómo crear modelos de pool desde VMware Horizon 7.1
section: Primera configuración
order: 2
---

**Última actualización: 20/02/2018**

## Objetivo

Pasamos ahora a utilizar la solución [Cloud Desktop Infrastructure](https://www.ovh.es/cloud/cloud-desktop/infrastructure/){.external}.

**Esta guía explica cómo desplegar un *pool* automático de máquinas Linked Clones.**


## Requisitos

- Tener un sistema operativo compatible: [sistemas operativos compatibles con Horizon Agent](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}. 
- Instalar los programas que se vayan a desplegar en el *pool*.
- Configurar el direccionamiento de la tarjeta de red en DHCP.
- Asociar el modelo de máquina virtual (MV) a la red de destino del *pool* (portgroup o VLAN).
- Haber finalizado la instalación del agente VMware Horizon 7.1.
- Haber creado un snapshot (máquina virtual apagada) que servirá como punto de referencia invariable.  
- Haber creado una plantilla de personalización (sysprep). 


## Procedimiento

### Importar un modelo de máquina virtual


Es posible crear o importar modelos de máquina virtual (MV), completa o parcialmente configurados en el Private Cloud asociado a la infraestructura VMware Horizon 7.1.


### Asociar el modelo a la red de destino del *pool*

Para que los escritorios virtuales se desplieguen correctamente y sus usuarios puedan acceder a ellos, es importante configurar el modelo de MV en la red virtual adecuada. Dicha red se comunica por correo electrónico al realizar la entrega del servicio (**Red DHCP**) y aparece representada con un **dvPortGroup** en la interfaz vSphere.

Para asociar el modelo de MV y la red del *pool*, realice las siguientes acciones:

- Haga clic derecho en la MV y seleccione `Edit Settings`{.action}.
- Seleccione el periférico correspondiente a la interfaz de red.
- En la sección **Network Connection**, seleccione el **Network label** indicado en el email de entrega del servicio, en **Red DHCP** (ver imagen).

![Red DHCP](images/1200.png){.thumbnail}

Si es necesario disponer de una red adicional aislada de la existente, es posible desplegar un nuevo punto de acceso con una red dedicada. 


### Instalar el agente VMware Horizon 7.1

> [!primary]
>
> Los archivos de instalación del agente Horizon están a su disposición en <https://files.horizonaas.com/>.
> 

Haga doble clic en el archivo del programa de instalación de Horizon Agent y siga el procedimiento de instalación.

- Acepte los términos de licencia de VMware.
- Seleccione `Install VMware Horizon Agent in 'desktop mode'`{.action}.
- Seleccione el protocolo IPv4.
- Elija las opciones de instalación (las opciones predeterminadas son un buen punto de partida).
- No active el RDP hasta que el programa se lo pida.
- Acepte o modifique la carpeta de instalación.
- Finalice la instalación.

Si desea más información sobre la instalación del agente Horizon 7.1 en una máquina virtual, consulte la documentación oficial: [Instalar Horizon Agent en una máquina virtual](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}.


### Crear el snapshot de referencia

Para poder basarse en un estado invariable de la máquina virtual que sirva como modelo para el *pool*, VMware Horizon utiliza un snapshot. De este modo, las operaciones que puedan realizarse después en el modelo no afectarán directamente al contenido de los escritorios virtuales.

En la interfaz del cliente vSphere (en la imagen, la versión web), seleccione el modelo de MV y haga clic en `Actions`{.action}. A continuación, haga clic en `Snapshots`{.action} y seleccione `Take Snapshot`{.action}.

![Crear un snapshot](images/1201.png){.thumbnail}

Introduzca un nombre para el snapshot (en el ejemplo, un número de versión) y una descripción.

![Nombre del snapshot](images/1202.png){.thumbnail}

Ahora que ya tenemos un modelo creado, pasemos a [crear un pool](../crear-pool/).

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.

