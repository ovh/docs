---
title: Cambiar de una instancia flex a una instancia clásica
excerpt: Cómo cambiar una instancia flex desde el panel de control de OpenStack Horizon
updated: 2024-07-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Una instancia *flex* es una instancia de disco único (50 GB) que ofrece un proceso más rápido para los snapshots. Permite redimensionar a los modelos superior o inferior con un espacio de almacenamiento fijo, mientras que los modelos clásicos solo pueden redimensionarse hacia los modelos superiores.</br> Con una infraestructura en constante evolución, puede necesitar aumentar el espacio de almacenamiento de su instancia. En ese caso, deberá cambiar su instancia *flex* a un modelo clásico. Esta acción solo es posible desde Horizon.

</br>**Esta guía explica cómo cambiar de un modelo *flex* a un modelo clásico y redimensionar su instancia *flex* desde la interfaz OpenStack Horizon.**

## Requisitos

- Tener una [instancia de Public Cloud de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#configuration) de tipo *flex*.
- [Crear un acceso a Horizon](/pages/public_cloud/compute/introducing_horizon).

## Procedimiento

> [!warning] 
> - Si actualiza de una instancia flex a una instancia clásica con más recursos, esto se considera una actualización. En este caso, se le facturará la diferencia. Al final del periodo de facturación, recibirá dos facturas.
>
> Si pasa de una instancia flexible a una instancia clásica con menos recursos, se considera un downgrade. En este caso, no se le facturará.
>
> - Si cambia de una instancia flexible a una instancia clásica con los mismos recursos, no se le facturará.
>

Conéctese a la [interfaz Horizon](https://horizon.cloud.ovh.net/auth/login/) y asegúrese de estar en la zona adecuada. Puede comprobarlo en la parte superior izquierda. 

![Selección de región](images/region2021.png){.thumbnail}

En el menú `Compute`{.action}, haga clic en el botón `Instances`{.action}. Seleccione `Resize Instance`{.action} en el menú desplegable situado a la derecha de la instancia correspondiente.

![Redimensionar instancia](images/resizeinstance2021.png){.thumbnail}

**Elección del plantilla (*Flavor Choice*)** <a name="flavorchoice"></a>

Esta sección explica la plantilla actual (*old flavor*) y le permite seleccionar una nueva plantilla (*new flavor*) para el recurso de la instancia.

En nuestro ejemplo, la plantilla es « b2-15-flex ». Podemos volver a una plantilla clásica « b2-15 » o actualizar la instancia hacia la plantilla « b2-30 » para tener más espacio de almacenamiento. En nuestro caso, queremos actualizar nuestra instancia hacia el modelo clásico « b2-30 » para aumentar nuestro espacio de almacenamiento.

![Elegir un nuevo flavor](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Sólo puede pasar de un modelo Linux a otro Linux y de un modelo Windows a otro Windows.
>
> - La opción *flex* no está disponible para todos los modelos.
>

**Opciones avanzadas (*Advanced Options*)**

Esta sección permite gestionar la partición del disco (*Disk Partition*) y el grupo de servidores (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Para continuar, haga clic en el botón `Resize`{.action}.

Una vez finalizado el proceso, su instancia se migrará a un modelo clásico, con más espacio de almacenamiento.

![Nuevo flavor aplicado](images/newflavor.png){.thumbnail}

Si quiere cambiar a un modelo *flex*, puede hacerlo realizando los mismos pasos [anteriores](#flavorchoice) seleccionando una plantilla *flex* en lugar de la clásica. 

También puede [editar la configuración de una instancia](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#editar-la-configuracion-de-una-instancia) desde el área de cliente.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.