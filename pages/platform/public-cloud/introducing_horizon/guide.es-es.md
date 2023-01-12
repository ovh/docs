---
title: Presentación de Horizon
excerpt: Descubra las secciones principales de la interfaz de Horizon
slug: horizon
section: Gestión desde Horizon
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización 16/03/2022**

## Objetivo

La interfaz Horizon, que nativamente se ofrece con OpenStack, ha sido adaptada por OVHcloud para ofrecer características adicionales a las disponibles en el área de cliente de OVHcloud.

**Descubra las secciones principales de la interfaz de Horizon.**

## Requisitos

- Un [proyecto Public Cloud](https://docs.ovh.com/es/public-cloud/create_a_public_cloud_project/) en su cuenta de OVHcloud
- Un usuario [OpenStack](../crear-y-eliminar-un-usuario-de-openstack/) creado en su proyecto.

## Procedimiento

### Conectarse a OpenStack Horizon

Abra la página de conexión a [Horizon](https://horizon.cloud.ovh.net/auth/login/) e introduzca las [claves de OpenStack](../crear-y-eliminar-un-usuario-de-openstack/) creadas anteriormente y haga clic en `Connect`{.action}.

También puede hacer clic en `Horizon`{.action} en el menú de la izquierda, bajo "Management Interfaces", después de haber abierto su proyecto de `Public Cloud`{.action} en el [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

### Selección de área del centro de datos

A diferencia del área de cliente de OVHcloud, Horizon separa sus servicios según su región. Puede elegir la región en el menú de la esquina superior izquierda:

![public-cloud](images/region2021.png){.thumbnail}

### Menú lateral izquierdo

Este menú le permite navegar rápidamente por el proyecto y sus diversas funciones.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Resumen (*Overview*)**

- **Resumen de cuotas (*Limit Summary*)**

Horizon proporciona un resumen de las cuotas, que le permite ver los recursos utilizados y disponibles para sus proyectos:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Resumen de uso (*Usage Summary*)**

A continuación se muestra un resumen del uso de las instancias del proyecto. El período de búsqueda se puede personalizar para restringir este resumen a un período deseado.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Uso (*Usage*)** 

También está disponible un resumen de su uso. Este es un resumen de los diversos servicios asociados con el proyecto, como la lista de instancias.

![public-cloud](images/usage2021.png){.thumbnail}

El resumen se puede descargar en formato CSV, lo que le permite extraer la información para que pueda analizarla a través de otras herramientas. Simplemente haga clic en `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Utilice esta página para mostrar y administrar instancias. Aquí, por ejemplo, puede crear nuevas instancias, pausarlas, tener acceso a la consola de instancias y mucho más.

- **Images**

Utilice este menú para mostrar y administrar imágenes, es decir, plantillas e instantáneas (*snapshots*) asociadas al proyecto.

- **Key Pairs**

Aquí puede enumerar y crear las claves SSH para conectarse a sus instancias.

##### **Volumes**

Utilice este menú para listar y administrar volúmenes, así como copias de seguridad de volúmenes e instantáneas (*snapshots*).

![volumen](images/volumes2021.png){.thumbnail}

##### **Network**

Enumere y administre sus redes y grupos de seguridad aquí. 

![red](images/network2021.png){.thumbnail}

##### **Orchestration**

Este menú le permite orquestar varias aplicaciones de cloud compuesta.<br>
Para obtener más información, consulte la [documentación de OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orquestación](images/orchestration2021.png){.thumbnail}

#### Identity

Utilice este menú para mostrar información sobre sus proyectos.

### Menú de usuario

En la esquina superior derecha de la interfaz de Horizon, un menú de usuario permite: 

- Cambiar la configuración de la pantalla de la interfaz.
- Descargue un archivo « OpenRC » que contenga sus ID de usuario.
- Cerrar sesión de la interfaz de Horizon.

![public-cloud](images/username2021.png){.thumbnail}

## Más información

[Conocer la interfaz de Public Cloud](https://docs.ovh.com/es/public-cloud/interfaz-de-public-cloud/)
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.