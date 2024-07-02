---
title: 'Guardar una instancia'
excerpt: 'Cómo realizar el backup de una instancia de Public Cloud desde el área de cliente de OVHcloud'
updated: 2024-05-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Puede crear una copia de seguridad única de una instancia o configurar una planificación para automatizar las copias de seguridad de sus instancias. Las copias de seguridad pueden utilizarse para restaurar su instancia a un estado anterior o para crear una nueva instancia idéntica.

**Esta guía explica cómo crear copias de seguridad manuales y automáticas de una instancia de Public Cloud.**

## Requisitos

- Tener una instancia de [Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud.
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Crear una copia de seguridad de una instancia

> [!warning]
> Esta opción solo está disponible a través de un **Cold Snapshot** para las instancias Metal. La instancia Metal pasará a modo de rescate y, una vez realizada la copia de seguridad, la instancia se reiniciará en modo normal.
>

Conéctese al [área de cliente de OVHcloud](/links/manager) y abra su proyecto de `Public Cloud`{.action}. En el menú de la izquierda, haga clic en `Instances`{.action}.

Haga clic en el botón `...`{.action} a la derecha de la instancia y seleccione `Crear un backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Introduzca un nombre para la copia de seguridad en la página siguiente. Lea la información sobre los precios y haga clic en `Confirmar`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

No es posible seguir el progreso de la copia de seguridad en tiempo real, sin embargo, en la sección `Instance Backup`{.action} de la sección `Storage`{.action} del menú de la izquierda, el estado se mostrará como "Realizando el backup..." durante el proceso.

![public-cloud-instance-backup](images/backup_in_progress.png){.thumbnail}

Una vez terminada la copia de seguridad, estará disponible en la sección `Instance Backup`{.action} en la sección `Storage`{.action} del menú de la izquierda.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Crear una copia de seguridad automatizada de una instancia

Haga clic en el botón `...`{.action} a la derecha de la instancia y seleccione `Crear una copia de seguridad automatizada`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Podrá configurar los siguientes parámetros de backup:

#### **El workflow (flujo de trabajo)** 

Actualmente solo existe un flujo de trabajo. Creará una copia de seguridad para la instancia y su volumen principal.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **El recurso** 

Puede seleccionar la instancia a la que quiere realizar el backup.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Planificación** 

Puede definir una planificación de backup personalizada o elegir una de las frecuencias predeterminadas:

- Backup diario con retención de las 7 últimas copias de seguridad
- Backup diario con retención de las 14 últimas copias de seguridad

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **El nombre** 

Escriba un nombre para la planificación de la copia de seguridad automática. Lea la información sobre los precios y cree la planificación haciendo clic en el botón `Crear`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Gestión de las copias de seguridad y los planes

Las planificaciones se pueden crear y eliminar en la sección `Workflow Management`{.action}, que se encuentra bajo `Storage`{.action} en el menú de la izquierda.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Las copias de seguridad de sus instancias se gestionan en la sección `Instance Backup`{.action} de la sección `Storage`{.action} del menú de la izquierda.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> La opción de copia de seguridad de la instancia debe eliminarse por separado si ya no desea que se le facture por ella. La eliminación de una instancia no elimina las opciones asociadas a ella.
>

> [!warning]
> **Tenga en cuenta que no puede eliminar una copia de seguridad de instancia si una instancia que se ha generado a partir de esta copia de seguridad se está ejecutando en el momento de la acción de eliminación.**

Esta guía explica cómo utilizar las copias de seguridad para clonar o restaurar instancias en [esta guía](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Más información

[Crear o restaurar un servidor virtual a partir de un snapshot](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
