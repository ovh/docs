---
title: Presentación de Horizon
excerpt: Descubra las secciones principales de la interfaz de Horizon
slug: horizon
section: Horizon
order: 1
---

Última actualización 10/11/2021

## Objetivo

La interfaz Horizon, que nativamente se ofrece con OpenStack, ha sido adaptada por OVHcloud para ofrecer características adicionales a las disponibles en el Panel de control OVHcloud.

**Descubra las secciones principales de la interfaz Horizon.**

## Requisitos

- Un [proyecto Public Cloud](https://docs.ovh.com/es/public-cloud/crear_tu_primer_proyecto_de_public_cloud/) en su cuenta de OVHcloud
- [Crea un acceso a horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/)

## Procedimiento

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

- **Modo de utilización (*Usage*)** 

También está disponible un resumen de su uso. Este es un resumen de los diversos servicios asociados con el proyecto, como la lista de instancias.

![public-cloud](images/usage2021.png){.thumbnail}

El resumen se puede descargar en formato CSV, lo que le permite extraer la información para que pueda analizarla a través de otras herramientas. Simplemente haga clic en `Download CSV Summary`{.action} CSV.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Utilice esta página para mostrar y administrar instancias. Aquí, por ejemplo, puede crear nuevas instancias, pausarlas, tener acceso a la consola de instancias y mucho más.

- **Images**

Utilice este menú para mostrar y administrar imágenes, es decir, plantillas e instantáneas asociadas al proyecto.

- **Key Pairs**

Aquí puede enumerar y crear las claves SSH para conectarse a sus instancias.

##### **Volumes**

Utilice este menú para listar y administrar volúmenes, así como copias de seguridad de volúmenes e instantáneas.

![volumen](images/volumes2021.png){.thumbnail}

##### **Network**

Enumere y administre sus redes y grupos de seguridad aquí. 

![red](images/network2021.png){.thumbnail}

##### **Orchestration**

Este menú le permite orquestar varias aplicaciones de nube compuesta.<br>
Para obtener más información, [consulte la documentación de OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orquestación](images/orchestration2021.png){.thumbnail}

#### Identity

Utilice este menú para mostrar información sobre sus proyectos.

### Menú de usuario

En la esquina superior derecha de la interfaz Horizon, un menú de usuario permite: 

- Cambiar la configuración de la pantalla de la interfaz.
- Descargue un archivo OpenRC que contenga sus ID de usuario.
- Cerrar sesión de la interfaz de Horizonte.

![public-cloud](images/username2021.png){.thumbnail}

## Más información

[Familiarizarse con la interfaz de nube pública](https://docs.ovh.com/es/public-cloud/interfaz-de-public-cloud/)
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.