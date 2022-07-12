---
title: 'Crear, lanzar y eliminar imágenes en Horizon'
excerpt: 'Crear, lanzar y eliminar imágenes en Horizon'
slug: crear_lanzar_y_eliminar_imagenes_en_horizon
legacy_guide_number: g1784
section: Gestión desde Horizon
order: 7
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 30/12/2021**

## Objetivo

Es posible añadir imágenes personalizadas en OpenStack Horizon. Esto le permitirá, por ejemplo, importar imágenes de sus antiguas máquinas virtuales al Public Cloud, siempre y cuando tengan un formato compatible. 

**Esta guía explica los distintos pasos para crear, lanzar y eliminar imágenes en Horizon, desde la que puede gestionar sus servicios de OVHcloud.**

## Requisitos

- [Crear un acceso a Horizon](../horizon/)
- Diríjase al menú «Imágenes» de OpenStack Horizon.

![](images/horizon_menu.png){.thumbnail}

## Gestión de imágenes

Si no se ha creado ninguna imagen, aparece por defecto la lista de imágenes públicas.

![](images/horizon_images.png){.thumbnail}

Puede lanzar una imagen desde una URL o crear una personal haciendo clic en el botón `Create Image`{.action}, en cuyo caso se abrirá el menú de la imagen.

![](images/horizon_create_image.png){.thumbnail}

Cumplimente el formulario. Los campos marcados con asterisco (*) son obligatorios:

- Image name (Nombre de la imagen) (\*) 
- Image description (Descripción de la image)
- Image file (Fichero de imagen: seleccione el archivo en el equipo local)
- Image format (Formato de la imagen) (\*):

|||
|--|--|
|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|QEMU Emulator|
|RAW|Raw Disk Image|
|VDI|VirtualBox format|
|VHD|Microsoft format|
|VMDK|VMware format|

- Arquitectura (Architecture): x86_64
- Disco mínimo (GB): si no indica nada, el valor por defecto es 0.
- Memoria RAM mínima (MB): si no indica nada, el valor por defecto es 0.

También puede indicar si la imagen será pública y si su eliminación estará protegida. Una vez validada la imagen, se coloca en cola de creación:

![](images/horizon_image_saving.png){.thumbnail}

Haciendo clic en el nombre de la imagen, se muestra el detalle.

![](images/horizon_image_details.png){.thumbnail}

Utilizando el menú desplegable de la columna **Actions** es posible:

- lanzar la imagen seleccionada para crear una instancia, en cuyo caso se abrirá el formulario de la siguiente imagen:

![](images/horizon_launch_image.png){.thumbnail}

- editar los detalles de la imagen (solo para las imágenes que haya creado usted);
- eliminar la imagen (solo para las imágenes que haya creado usted), en cuyo caso deberá confirmar la acción haciendo clic en el botón `Delete Image`{.action}.

![](images/horizon_delete_image.png){.thumbnail}

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.