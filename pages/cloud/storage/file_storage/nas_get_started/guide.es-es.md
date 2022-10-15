---
title: Primeros pasos con un NAS-HA
slug: nas/get-started
excerpt: Cómo gestionar un NAS-HA desde el área de cliente de OVHcloud
section: NAS
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 16/09/2021**

## Objetivo

El NAS (Network Attached Storage) es un servidor de archivos conectado a una red cuya principal función es el almacenamiento de datos en un volumen centralizado para clientes de red heterogéneos.

## Requisitos

- Disponer de una dirección IP asociada a un servicio de OVHcloud (Hosted Private Cloud, Servidor Dedicado, VPS, Instancia Public Cloud, etc.).
- Tener un [NAS-HA](https://www.ovh.es/nas/)
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

El NAS-HA se gestiona desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Una vez que se haya conectado, haga clic en `Bare Metal Cloud`{.action} y, seguidamente, en `NAS y CDN`{.action} en el menú de la izquierda. Haga clic en su servicio para acceder al menú de administración.

![acceso al NAS](images/nas2021-01.png){.thumbnail}

### Crear una partición

Para añadir una nueva partición, haga clic en `Crear una partición`{.action}.

![crear una partición](images/nas2021-02.png){.thumbnail}

Introduzca el **nombre de la partición**, el **tamaño** de la partición y el **protocolo autorizado** (NFS o CIFS).

![atributos de la partición](images/nas2021-03.png){.thumbnail}

### Cambiar el tamaño de una partición

Para cambiar el tamaño de una partición, haga clic en el botón `(...)`{.action} situado a la derecha de la partición correspondiente y seleccione `Cambiar el tamaño`{.action}.

![cambiar el tamaño de una partición](images/nas2021-04.png){.thumbnail}

Indique el nuevo tamaño y acepte.

### Modificar la frecuencia de los snapshots

Por defecto, cada hora se realiza un snapshot del contenido de su NAS y se registra en su NAS.

No obstante, puede crear hasta 3 snapshots adicionales a frecuencias diferentes si lo desea, que también se guardarán en su NAS.

Para ello, haga clic en el botón `(...)`{.action} situado a la derecha de la partición correspondiente y, seguidamente, en `Frecuencia de los snapshots`{.action}.

![cambiar la frecuencia de los snapshots](images/nas2021-05.png){.thumbnail}

Seleccione la nueva frecuencia y acepte.

### Crear un snapshot instantáneo

Fuera de los snapshots realizados automáticamente, en cualquier momento puede crear un snapshot instantáneo de una partición haciendo clic en el botón `(...)`{.action} situado a la derecha de la partición y, a continuación, en `Snapshot instantáneo`{.action}.

![snapshot](images/nas2021-10.png){.thumbnail}

Asigne un nombre al snapshot y haga clic en `Añadir.`{.action}

### Añadir un acceso

Para poder acceder a la partición que ha creado anteriormente, es necesario configurar un acceso.

> [!primary]
>
> Solo las direcciones IP de servicios de OVHcloud pueden acceder a su NAS (p. ej.: un servidor dedicado, un VPS, una instancia de Public Cloud, etc.)
>

Para autorizar a una IP a acceder al NAS, haga clic en el botón `(...)`{.action} situado a la derecha de la partición existente y seleccione `Gestionar los accesos`{.action}.

![gestionar los accesos](images/nas2021-06.png){.thumbnail}

Haga clic en `Añadir un acceso`{.action} y seleccione la dirección IP de su producto de OVHcloud.
<br>También es necesario indicar si el acceso autorizado para esta dirección IP es de solo lectura (*Read-only*) o de lectura-escritura (*Read/Write*).

![añadir un acceso](images/nas2021-07.png){.thumbnail}

#### Eliminar un acceso

Para eliminar un acceso a una partición, haga clic en el botón `(...)`{.action} situado a la derecha de la dirección IP correspondiente y luego en `Eliminar`{.action}.

![createaccess](images/nas2021-09.png){.thumbnail}

### Configuración Z File System (ZFS)

> [!warning]
>
> Se optimizan todos los parámetros ZFS por defecto. Aunque no recomendamos modificar estos parámetros, este menú permite ajustar el ZFS utilizado por el NAS-HA.
>

Para modificar los parámetros ZFS de una partición, haga clic en el botón `(...)`{.action} a la derecha de la partición correspondiente y, seguidamente, en `Configuración Z File System (ZFS)`{.action}.

![zfs](images/nas2021-13.png){.thumbnail}

- **Desactivar la actualización de los tiempos de acceso (*atime*)** : Desactivar el *atime* significa que el núcleo no actualizará la marca de tiempo del sistema de archivos cada vez que acceda a un archivo. Esto puede ser útil para acelerar las operaciones de lectura frecuentes, por ejemplo en páginas web estáticas. Sin embargo, esta desactivación no es recomendable para aplicaciones que sean críticas en cuanto a coherencia, como las bases de datos.
- **ZFS recordsize**: Esta propiedad modifica el tamaño máximo del bloque en el sistema de archivos ZFS. Tenga en cuenta que ZFS siempre usará un tamaño de bloque inferior si el archivo es inferior al tamaño máximo. Por ejemplo, un archivo de 16 KB utilizará un bloque de 16 KB (junto con los metadatos) para no desperdiciar espacio de almacenamiento. Por lo tanto, le recomendamos que no modifique el ZFS *recordsize* en general.
- **Sync** : Este parámetro modifica el comportamiento de las transacciones del sistema de ficheros ZFS en lo que respecta al almacenamiento de memoria intermedia de los datos RAM y a la escritura de los datos en el disco. Salvo que existan razones específicas, le recomendamos que no modifique esta propiedad.

### Eliminar una partición

> [!alert]
>
> La eliminación de una partición conlleva la eliminación total y definitiva de todos los datos que contiene.
>

Para eliminar una partición, haga clic en el botón `(...)`{.action} situado a la derecha de la partición existente y luego en `Eliminar`{.action}.

![eliminar una partición](images/nas2021-08.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
