---
title: 'Crear una instancia en Horizon'
slug: crear_una_instancia_en_horizon
excerpt: 'Cómo crear una instancia desde el panel Horizon'
section: Horizon
---

**Última actualización: 27/03/2018**

## Objetivo

Es posible crear instancias directamente en Horizon. Desde esta interfaz podrá, entre otras cosas, crear varias instancias simultáneamente y configurar un grupo de seguridad para sus instancias.

**Esta guía explica cómo crear una instancia en Horizon.**

## Requisitos

- Tener un proyecto de [Public Cloud]({ovh_www}/public-cloud/){.external} en su cuenta de OVH.
- [Estar conectado a Horizon](../crear_un_acceso_a_horizon/){.external}. 

## Procedimiento

En primer lugar, conéctese a Horizon. Si necesita ayuda, consulte nuestra guía [Conectarse a Horizon](../crear_un_acceso_a_horizon/){.external}.

A continuación, haga clic en `Compute`{.action} en la columna izquierda y seleccione `Instances`{.action}.

![Crear una instancia](images/create-instance-step1.png){.thumbnail}

En la nueva página podrá consultar las instancias lanzadas actualmente. Para iniciar una nueva instancia, haga clic en el botón `Launch Instance`{.action}.

![Crear una instancia](images/create-instance-step2.png){.thumbnail}

Introduzca la información solicitada. Si necesita ayuda para completar los distintos campos, consulte la siguiente tabla (la lista no es exhaustiva): 

|Campo|Detalles|
|---|---|
|Availability Zone|Deje «nova» (opción por defecto) como zona de disponibilidad.|
|Instance Name|Introduzca el nombre que quiera asignar a la nueva instancia.|
|Flavor|Seleccione el tipo de instancia que quiera crear.|
|Count|Indique el número de instancias que quiera crear.|
|Select Boot Source|Seleccione el origen desde el que se creará la instancia: una imagen, un snapshot de imagen...|
|Device Name|Asigne un nombre al dispositivo (solo en caso de haber seleccionado la opción de crear un nuevo volumen).|
|Instance Snapshot|Asigne un nombre al dispositivo (solo en caso de haber seleccionado la opción de crear un nuevo volumen).|
|Key Pair|Seleccione una llave SSH para conectarse a la instancia. Para crear una llave, haga clic en el botón «+ Create Key Pair».|
|Security Groups|Seleccione el grupo de seguridad en el que quiera crear la instancia (autorización de apertura de puertos).|
|Networks|Seleccione la red o redes de la lista que quiera asignar a la instancia.|
|Configuration|Cargue un archivo o introduzca un script para personalizar la instancia una vez instalada.|
|Customization Script|Introduzca el código del script en el área de texto (máx. 16 KB).|
|Load Customization Script from a file|Seleccione en su equipo el script de post-instalación.|
|Disk Partition|Elija entre automático o manual.|
|Configuration Drive|Configure OpenStack para escribir los metadatos en un disco de configuración específico que se asociará a la instancia al crearla.|

Una vez que haya terminado de configurar la instancia o instancias, haga clic en el botón `Launch Instance`{.action} para lanzarlas.

![Crear una instancia](images/create-instance-step3.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.