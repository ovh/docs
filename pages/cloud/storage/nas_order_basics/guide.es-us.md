---
title: Primeros pasos con un NAS-HA OVHcloud
slug: nas/primeros-pasos
excerpt: Cómo gestionar un NAS-HA desde el área de cliente de OVHcloud
section: NAS
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/08/2022**

## Objetivo

El Network Attached Storage (NAS) es un servidor de archivos conectado a una red cuya función principal es el almacenamiento de datos en un volumen centralizado para clientes de red heterogéneos.
Puede gestionar su servicio NAS-HA a través de la [API de OVHcloud](https://docs.ovh.com/us/es/storage/nas/nas-quickapi/) o desde el área de cliente.

**Esta guía explica cómo gestionar las particiones y los snapshots NAS-HA desde el área de cliente de OVHcloud.**

## Requisitos

- Tener una solución [NAS-HA de OVHcloud](https://www.ovh.com/world/es/nas/)
- Tener contratado un servicio de OVHcloud al que esté asociada una dirección IP pública (Hosted Private Cloud, Servidor Dedicado, VPS, instancia de Public Cloud, etc.).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), haga clic en `Bare Metal Cloud`{.action} y, seguidamente, en `NAS y CDN`{.action}.<br>
Haga clic en su servicio para acceder a la pestaña `Información general`{.action}.

![Información general](images/nas-ha01.png){.thumbnail}

La pestaña `Información general`{.action} muestra información técnica, la `capacidad` del servicio, los detalles de la suscripción y un acceso rápido para [crear una partición](#create_partition).

> [!primary]
> Acceda a la página [FAQ](../faq-nas/) para conocer las propiedades técnicas del servicio NAS-HA.
>

### Gestión de particiones <a name="manage_partition"></a>

Vaya a la pestaña `Particiones`{.action}. La tabla muestra todas las particiones creadas para el servicio seleccionado. Para abrir la página de gestión, haga clic en el nombre de una partición.

![Particiones](images/nas-ha02.png){.thumbnail}

La sección **Métricas generales** indica la cantidad de espacio en disco disponible utilizado por los datos y los snapshots (`Capacidad total`). El porcentaje de espacio ocupado actualmente por los snapshots se indica en amarillo. Cada hora se realiza un snapshot por defecto.

Su servicio NAS-HA dispone de espacio suficiente para almacenar los snapshots. Este espacio corresponde al 20% del tamaño inicial del volumen. Si supera este límite, los siguientes snapshots utilizarán su espacio de almacenamiento principal.

Puede activar la opción `Aviso de uso`{.action} para recibir advertencias por correo electrónico cuando se alcance un límite de uso del 90%.

Puede realizar algunas acciones haciendo clic en el botón `...`{.action} en cada línea de la tabla.

- **Editar/Ver**: Abre la sección "Información general" de la partición.
- **Gestionar los snapshots**: Abre la sección "[Políticas de snapshots](#snapshots)" de la partición.
- **Gestionar los accesos**: Abre la sección "[Control de acceso (ACL)](#access_control)", en la que puede administrar los permisos de acceso de las direcciones IP a la partición.
- **Cambiar el tamaño**: Abre una ventana para [cambiar el tamaño](#modify_partition) de la partición.
- **Configuración Z File System (ZFS)**: Abre una ventana que permite [cambiar la configuración del sistema ZFS](#zfs).
- **Eliminar**: Abre una ventana para [eliminar esta partición](#deletion).

#### Creación de una partición <a name="create_partition"></a>

Para añadir una nueva partición, haga clic en el botón `+ Crear una partición`{.action} encima de la tabla.

![Particiones](images/nas-ha03.png){.thumbnail}

Introduzca un **nombre** para la partición, determine su **tamaño** en GB y seleccione los **protocolos** de acceso (NFS, CIFS o ambos) que quiera autorizar.

Introduzca una descripción, y haga clic en `Crear una partición`{.action}.

#### Cambiar el tamaño de una partición <a name="modify_partition"></a>

Para cambiar el tamaño de una partición, haga clic en el botón `...`{.action} a la derecha de la partición correspondiente y seleccione `Cambiar el tamaño`{.action}.

![Particiones](images/nas-ha04.png){.thumbnail}

Introduzca el nuevo tamaño y haga clic en `Cambiar el tamaño`{.action}.

#### Creación y gestión de snapshots <a name="snapshots"></a>

Haga clic en el botón `...`{.action} a la derecha de la partición correspondiente y seleccione `Gestionar los snapshots`{.action}.

Por defecto, cada hora se realiza un snapshot de los datos que se guarda en el NAS-HA. Esta regla se muestra en la pestaña `Políticas de snapshots`{.action}.

![Snapshots](images/nas-ha05.png){.thumbnail}

Puede activar otras reglas de snapshots que crearán snapshots a frecuencias predefinidas haciendo clic en el botón desplegable bajo `Opciones`. Seleccione la frecuencia y haga clic en el botón `Marcar`{.action} a la derecha.

![Snapshots](images/nas-ha06.png){.thumbnail}

En la nueva ventana, espere a que el proceso haya finalizado y haga clic en `Cerrar`{.action}. Los snapshots adicionales también se conservarán en su NAS-HA.

##### **Crear un snapshot manual**

Fuera de los snapshots efectuados automáticamente, es posible crear en cualquier momento un snapshot manual de una partición. Haga clic en el botón `+ Crear un snapshot manual`{.action} sobre la tabla.

![Snapshots](images/nas-ha07.png){.thumbnail}

El snapshot va a añadirse a la tabla. Introduzca un nombre de snapshot después del prefijo y haga clic en el botón `Marcar`{.action} a la derecha.

##### **Listado y restauración de snapshots**

El área de cliente no incluye las funcionalidades de acceso y restauración de los snapshots. Se almacenan en modo de solo lectura en la partición.

Para acceder a los snapshots desde su punto de montaje, debe acceder al directorio `.zfs/snapshot` de su partición.

Por ejemplo, en el servicio con el ID `zpool-123456`, hay una partición llamada `partition1` que ha creado un snapshot llamado `snap-snapshot01`. Para consultar el snapshot, utilice el siguiente comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Para restaurar el snapshot, cópielo desde la ruta de acceso del archivo `.zfs` al nuevo directorio en el que quiere restaurar el snapshot. Puede utilizar una herramienta como *rsync*, que le permite realizar restauraciones.

Para más información, consulte el apartado [Más información](#gofurther) sobre esta guía.

#### Gestión de ACL de partición <a name="access_control"></a>

El control de acceso a las particiones funciona mediante restricciones de direcciones IP. Como no hay ninguna restricción configurada por defecto, el primer paso de configuración para cada partición es definir las direcciones IP o los rangos desde los que se autorizará el acceso.

> [!primary]
>
> Solo las direcciones IP asociadas a los servicios de OVHcloud pueden acceder a su NAS-HA (p. ej.: Servidor dedicado, VPS, instancia de Public Cloud, etc.).
>

##### **Añadir acceso**

Haga clic en el botón `+ Añadir un nuevo acceso`{.action}.

![Access](images/nas-ha08.png){.thumbnail}

Esto crea una nueva línea en la tabla en la que se puede seleccionar una dirección IP o un bloque de dirección (CIDR). Seleccione `Lectura` (RO) o `Lectura-escritura` (RW) como tipo de acceso en el menú desplegable y haga clic en el botón `Marcar`{.action} para añadir esta entrada al ACL.

En la nueva ventana, espere a que el proceso haya finalizado y haga clic en `Cerrar`{.action}.

##### **Eliminación de un acceso**

Para eliminar un acceso a una partición, haga clic en el icono de la `papelera`{.action} correspondiente de la tabla.

![Access](images/nas-ha09.png){.thumbnail}

En la nueva ventana, acepte haciendo clic en `Eliminar acceso`{.action} y espere hasta que el proceso haya finalizado. Haga clic en `Cerrar`{.action}.

### Parámetros ZFS <a name="zfs"></a>

> [!warning]
>
> Todas las opciones predeterminadas del sistema de archivos Z están optimizadas. Aunque no recomendamos modificar estos parámetros, este menú le permite ajustar el ZFS utilizado por el NAS-HA.
>

Para modificar los parámetros ZFS de una partición, haga clic en el botón `..`{.action} a la derecha de la partición correspondiente y seleccione `Configuración Z File System (ZFS)`{.action}. 

![zfs](images/nas-ha10.png){.thumbnail}

- **Desactivar la actualización de los tiempos de acceso (*atime*)** : Desactivar el *atime* significa que el núcleo no actualizará la marca de tiempo del sistema de archivos cada vez que acceda a un archivo. Esto puede ser útil para acelerar las operaciones de lectura frecuentes, por ejemplo en páginas web estáticas. Sin embargo, esta desactivación no es recomendable para aplicaciones que sean críticas en cuanto a coherencia, como las bases de datos.
- **ZFS recordsize**: Esta propiedad modifica el tamaño máximo del bloque en el sistema de archivos ZFS. Tenga en cuenta que ZFS siempre usará un tamaño de bloque inferior si el archivo es inferior al tamaño máximo. Por ejemplo, un archivo de 16 KB utilizará un bloque de 16 KB (junto con los metadatos) para no desperdiciar espacio de almacenamiento. Por lo tanto, le recomendamos que no modifique el ZFS *recordsize* en general.
- **Sync** : Este parámetro modifica el comportamiento de las transacciones del sistema de ficheros ZFS en lo que respecta al almacenamiento de memoria intermedia de los datos RAM y a la escritura de los datos en el disco. Salvo que existan razones específicas, le recomendamos que no modifique esta propiedad.

### Eliminación de una partición <a name="deletion"></a>

> [!warning]
>
> La eliminación de una partición eliminará de forma definitiva todos los datos que contiene.
>

Para eliminar una partición, haga clic en el botón `...`{.action} a la derecha de la partición correspondiente y seleccione `Eliminar`{.action}.

![Eliminación](images/nas-ha11.png){.thumbnail}

Confirme la acción en la ventana que aparece haciendo clic en `Eliminar la partición`{.action}. Espere hasta que finalice el proceso y haga clic en `Cerrar`{.action}.

## Más información

[Gestión de particiones a través de la API](https://docs.ovh.com/us/es/storage/nas/nas-partitions-api/)

[Gestión de ACL a través de la API](https://docs.ovh.com/us/es/storage/nas/nas-manage-acls/)

[Gestión de snapshots a través de la API](https://docs.ovh.com/us/es/storage/nas/nas-snapshots-api/)

[Montar un NAS mediante NFS](../nas-nfs/)

[Montar un NAS en Windows Server a través de CIFS](../nas-cifs/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
