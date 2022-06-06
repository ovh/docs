---
title: 'Crear o restaurar un servidor virtual a partir de un snapshot'
excerpt: 'Crear o restaurar un servidor virtual a partir de un snapshot'
slug: crear_o_restaurar_un_servidor_virtual_a_partir_de_un_snapshot
legacy_guide_number: g1882
section: 'Gestión de las instancias desde el área de cliente'
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 19/03/2021**

## Objetivo

Desde el área de cliente de OVHcloud podrá crear [copias de seguridad de sus instancias](../guardar_copia_de_seguridad_de_una_instancia/) en pocos clics y automatizar el proceso.
Quizá necesite, en algún momento, restaurar su instancia utilizando un snapshot, por ejemplo, por haber configurado de manera incorrecta su instancia. Existen dos razones principales por las que puede utilizar estas copias de seguridad de instancias:

- Crear una instancia basada en la copia de seguridad para duplicar la instancia de origen. Por ejemplo, si configura una infraestructura de balanceo de carga (load balancing).
- Restaurar una instancia a partir de un snapshot. Por ejemplo, si recientes modificaciones han roto configuraciones críticas en la instancia.

**Esta guía explica cómo utilizar las copias de seguridad para duplicar o restaurar sus instancias.**

## Requisitos

- Disponer de un snapshot de una instancia de Public Cloud. Para ello, consulte [la guía dedicada a la creación de un snapshot](../guardar_copia_de_seguridad_de_una_instancia/).
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Crear una instancia a partir de un snapshot

Conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Public Cloud`{.action}. Luego, seleccione la sección `Instancia de backup`{.action}.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

Haga clic en los `...`{.action} a la derecha del snapshot seleccionado y por último, en `Crear una instancia`{.action}.

Se mostrará una versión abreviada de la página de creación de la instancia, en la que podrá modificar algunas opciones.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Algunos elementos están predefinidos:

- **Localización**: su instancia se creará en el mismo centro de datos que el snapshot.
- **Imagen**: corresponderá a la copia de seguridad.
- **Modelo**: solo estarán disponibles los que puedan alojar su imagen, en función de su cuota.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Asigne un nombre a la nueva instancia, la llave SSH, el vRack y el período de facturación y haga clic en el botón `Crear la instancia`{.action}.

Para más información sobre la creación de una instancia, consulte [la presente guía](../crear_una_instancia_desde_el_area_de_cliente_de_ovh/).

> [!primary]
>
> Para crear una instancia en un datacenter diferente al del snapshot, habrá que transferirla a la zona correspondiente. Remítase entonces a la guía que explica sobre cómo [transferir un snapshot de una instancia entre datacenters](../transferir-backup-de-instancia-entre-datacenters/).
>

### Restaurar una instancia a partir de un snapshot

Conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Public Cloud`{.action}. En el menú de la izquierda, haga clic en `Instancias`{.action}.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Haga clic en el botón `...`{.action} a la derecha de la instancia que quiera restaurar y haga clic en `Editar`{.action}.

Se abrirá la página de edición de instancia. Allí, podrá modificar:

* El nombre de la instancia
* La imagen de la instancia
* El modelo de la instancia
* La facturación de la instancia (solo desde el modelo «Horario» y el modelo «Mensual»).

Realice los cambios necesarios y seleccione la pestaña `Backup`{.action} en el apartado Imagen.

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Seleccione una copia de seguridad de la lista de copias de seguridad disponibles. Haga clic en `Editar imagen`{.action} si está seguro de querer sustituir la imagen actual por la copia de seguridad.

La instancia tendrá estado de `Reinstalación` hasta que el proceso haya finalizado. Puede ser necesario actualizar la página del navegador para ver el estado actual.

> [!warning]
>
> Tal como se indica en el recuadro amarillo, no podrá recuperarse ningún dato que se haya añadido después de la creación de este snapshot.
>

[Creación y conexión a una primera instancia de Public Cloud](../empezar-con-una-instancia-public-cloud/)

[Guardar una copia de seguridad de una instancia](../guardar_copia_de_seguridad_de_una_instancia/)

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
