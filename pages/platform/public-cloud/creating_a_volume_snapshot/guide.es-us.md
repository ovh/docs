---
title: Crear un snapshot de un volumen
excerpt: 'Cómo crear un snapshot de un disco adicional Public Cloud'
updated: 2023-04-21
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 21/04/2023**

## Objetivo

Un **volumen Snapshot** es un punto de recuperación almacenado en el mismo cluster de almacenamiento que el volumen original. Las operaciones de creación y restauración son rápidas, pero en caso de incidencia en el cluster, el volumen y volumen Snapshot pueden no estar disponibles.<br>
No es necesario desvincular el volumen de la instancia para crear un volumen Snapshot.

Esto no debe confundirse con un **volumen Backup** es una imagen creada a partir de su volumen, que se almacena en el cluster Object Storage de la localización del volumen original.
Este nivel de resiliencia es ideal para reaccionar rápidamente ante cualquier incidencia en su volumen, creando otro volumen a partir del backup.<br>
Para crear una copia de seguridad, el volumen debe desvincularse de la instancia. Para más información sobre esta opción, consulte esta [guía](/pages/platform/public-cloud/volume-backup).

Crear un snapshot con un volumen adicional suele tener dos objetivos:

- realizar copias de seguridad en pocos clics y conservarlas en el tiempo necesario;
- utilizar el snapshot como modelo para volúmenes idénticos.

**Esta guía explica cómo crear un snapshot de un volumen desde el área de cliente de OVHcloud.**

## Requisitos

- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Un volumen de [Block Storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) creado en su proyecto de [Public Cloud](https://www.ovhcloud.com/es/public-cloud/).

## Procedimiento

Conéctese al [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente. En la barra de navegación izquierda, haga clic en `Block Storage`{.action} y seleccione **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

A la derecha del volumen correspondiente, haga clic en `...`{.action} y, seguidamente, en `Crear un snapshot`{.action} (no es necesario desvincular el volumen de su instancia). No obstante, si desea desvincular su volumen, puede consultar [esta sección](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance#en-linux_1) de la guía correspondiente para Linux y [esta sección](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance#en-windows_1) para Windows.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Se abrirá una ventana en la que podrá introducir un nombre diferente para el snapshot. Lea la información sobre los precios y haga clic en `Crear un snapshot`{.action}.

El tiempo de creación del snapshot depende de la cantidad de datos presentes en el volumen, del uso de los recursos de la instancia en el momento del snapshot y de otros factores específicos del host.

Le recomendamos que realice los snapshots fuera de su horario de producción.

Estas son algunas de las buenas prácticas:

- Evite crear snapshots en las horas punta (entre las 04:00 y las 22:00, hora de París).
- instale el agente qemu-guest si no lo ha hecho o intente desactivarlo si es necesario;
- intente no "solicitar" demasiado al servidor durante la fase de creación del snapshot (limitación de I/O, consumo de RAM, etc.).

Como un snapshot de volumen es un clon del conjunto del disco, tendrá el tamaño máximo del volumen original, independientemente de la asignación real del espacio en disco.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Abra la sección `Volumen Snapshot`{.action} en la columna izquierda. Una vez creado el snapshot, este se añadirá a la tabla.

Haga clic en el botón `...`{.action} para eliminar un snapshot o `Crear un volumen`{.action} a partir del snapshot correspondiente. Para más información, consulte [esta guía](/pages/platform/public-cloud/create-volume-from-snapshot).

## Más información

[Crear una copia de seguridad de un volumen](/pages/platform/public-cloud/volume-backup)

[Crear un volumen a partir de un snapshot](/pages/platform/public-cloud/create-volume-from-snapshot)

[Crear y configurar un disco adicional en una instancia](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance)

[Aumentar el tamaño de un disco adicional](/pages/platform/public-cloud/increase_the_size_of_an_additional_disk)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.