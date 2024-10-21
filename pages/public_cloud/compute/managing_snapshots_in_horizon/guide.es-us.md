---
title: Gestionar las instantáneas de una instancia
excerpt: Cómo gestionar una instantánea de una instancia en Horizon.
updated: 2022-01-31
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

En algunos casos, será necesario realizar una copia de seguridad de sus datos, de sus configuraciones o incluso de sus instancias al completo.<br> 
Para ello, puede crear instantáneas (snapshot) de sus instancias, que podrá utilizar para restaurar una configuración posterior en su instancia o incluso para crear una copia exacta de la misma. 

**Esta guía explica cómo gestionar una instantánea en OpenStack Horizon.**

## Requisitos

- Haber [creado una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#3-crear-una-instancia) en su cuenta de OVHcloud
- [Conectarse a Horizon](/pages/public_cloud/compute/introducing_horizon)

## Procedimiento

### Creación del snapshot

Conéctese a la interfaz Horizon y asegúrese de estar en la zona adecuada. Puede comprobarlo en la parte superior izquierda. 

![Selección de región](images/region2021.png){.thumbnail}

En el menú `Compute`{.action}, haga clic en el botón `Instances`{.action}. Haga clic en `Create Snapshot`{.action} en la línea de la instancia correspondiente.

![Create snapshot](images/createsnapshot.png){.thumbnail}

Se abrirá una ventana en la que deberá introducir la siguiente información:

* Snapshot Name: asigne un nombre al snapshot y haga clic en `Create Snapshot`{.action}.

![Create snapshot](images/createsnapshot2.png){.thumbnail}

El snapshot se mostrará en la sección `Images`{.action}. Es recomendable asignar un nombre explícito a cada snapshot. 

### Eliminación de un snapshot

En el menú `Compute`{.action}, haga clic en el botón `Images`{.action} y seleccione Compute.

Haga clic en la flecha desplegable situada junto al snapshot que desea eliminar y seleccione `Delete Image`{.action}. Confirme la eliminación del snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.