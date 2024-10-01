---
title: Cloud Archive Swift - Creación de un contenedor Public Cloud Archive
excerpt: Cómo crear sus contenedores de Public Cloud Archive desde el área de cliente de OVHcloud
updated: 2021-10-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Public Cloud Archive es una solución de almacenamiento ilimitado con una facturación sencilla y adaptada a sus necesidades. Hay muchos tipos de contenedores de objetos:

- para alojamiento estático (sitio web estático);
- para el alojamiento privado (p. ej.: almacenamiento de datos personales);
- para alojamiento público (para almacenar todo lo que sea accesible al público);
- para almacenamiento en frío (archivado).

El primer paso es crear un contenedor que agrupe sus archivos. 

**Esta guía explica cómo crear un contenedor desde el área de cliente de OVHcloud.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

### Creación de un contenedor de Public Cloud Archive desde el área de cliente de OVHcloud

Conéctese al [área de cliente](/links/manager){.external}, acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente. En la barra de navegación izquierda, haga clic en `Cloud Archive`{.action} en la sección `Storage`.

Si se trata de su primer contenedor:

![pca dashboard](images/create-container-20211006094158312.png)

Si ya ha creado uno o más contenedores:

![pca dashboard](images/create-container-20211006094851682.png)

Seleccione la región del contenedor y haga clic en `Siguiente`{.action}.

![select a region](images/create-container-20211006094448923.png)

Asigne un nombre al contenedor y haga clic en `Añadir el contenedor`{.action}.

> [!warning]
>
> Si quiere asociar su contenedor a un dominio, el nombre del contenedor no debe contener los siguientes caracteres:
>
> - [ . ]
> - [ _ ]
> - y no debe utilizar mayúsculas.
>
> Para más información, consulte nuestra guía "[Asociar un contenedor a un dominio](/pages/storage_and_backup/object_storage/pcs_link_domain)".
>

![container name](images/create-container-20211006094550334.png)

Su contenedor está creado:

![container created](images/create-container-20211006094630754.png)

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
