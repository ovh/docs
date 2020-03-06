---
title: 'Crear una instancia desde el área de cliente de OVHcloud'
excerpt: 'Aprenda a crear una instancia desde el área de cliente Public Cloud de OVHcloud'
slug: crear_una_instancia_desde_el_area_de_cliente_de_ovh
legacy_guide_number: g1775
section: 'Primeros pasos'
---

**Última actualización: 3 de diciembre de 2019**

## Objetivo

[Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external} le permite crear rápida y fácilmente instancias (por ejemplo: servidores virtuales) en tan solo unos clics.

**Aprenda a crear una instancia desde el área de cliente Public Cloud de OVHcloud.**

## Requisitos

* acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* un proyecto [Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external} creado en su cuenta de OVHcloud
* una llave SSH creada en el área de cliente de OVHcloud

### Desplegar una instancia de Public Cloud

Para desplegar una instancia public cloud, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Haga clic en `Public Cloud`{.action} en la esquina superior izquierda. En la pantalla siguiente, haga clic en la flecha junto al nombre por defecto del proyecto en la esquina superior izquierda de la pantalla. Seleccione el proyecto en el que quiere crear una nueva instancia.

![select_project](images/select_project.png){.thumbnail}

Una vez haya seleccionado el proyecto deseado, haga clic en el botón `{.action}Instancias` de la sección «Compute» del menú de la izquierda.

![create_instance](images/create_instance.png){.thumbnail}

A continuación, haga clic en `Crear una instancia`{.action}. Será redirigido al siguiente menú donde tendrá que seleccionar la instancia que desea crear.

![create_instance1](images/create_instance1.png){.thumbnail}

La siguiente tabla muestra un resumen de las características de cada tipo de instancia:

| Tipo de servidor | Recursos garantizados | Modo de utilización |
| :---         |     :---:      |          ---: |
| General Use   | ✓     | Servidores de desarrollo, aplicaciones web o comerciales    |
| CPU     | ✓       | Codificación de vídeo o alta computación.      |
| RAM   | ✓     | Bases de datos, análisis y cálculos en memoria.    |
| Shared Resources    | -       | Entornos de prueba y de desarrollo      |

> [!primary]
>
Tendrá un límite inicial de 20 instancias, 20 vCores y 40GB de RAM en un proyecto dado. Si desea aumentar el límite de recursos, deberá [generar un tíquet](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external} dirigido a nuestro equipo de soporte.
>

Siga el menú para seleccionar la región en la que quiere que se ubique su instancia public cloud. La tercera opción permite seleccionar el sistema operativo.

> [!primary]
>
Si selecciona un sistema operativo Windows, se le proporcionará automáticamente una licencia que se le cobrará mensualmente.
>

![install](images/os_install.png){.thumbnail}

> [!primary]
>
Las instancias que se ejecutan en un sistema operativo basado en Unix requieren que se añada una clave SSH al servidor. Para más información sobre la creación de una clave SSH, consulte nuestra guía [Crear claves SSH](https://docs.ovh.com/gb/en/public-cloud/create-ssh-keys/){.external}.
>

En el cuarto paso puede elegir el número de instancias que desea crear, asignarle un nombre, y añadir una red privada o un script de post-instalación, si así lo desea.

![add an instance](images/configure_instance.png){.thumbnail}

Por último, debe elegir si desea una facturación mensual o por horas.

> [!warning]
>
>Si elige una facturación por horas, la facturación se mantendrá hasta que se elimine la instancia. Por tanto, tenga en cuenta que se le facturará aunque la instancia no se esté utilizando.
>


Una vez haya confirmado que todos los datos introducidos son correctos, haga clic en `Crear una instancia`{.action} para finalizar el proceso. Su instancia puede tardar unos minutos en estar disponible.

## Conclusiones

Después de leer esta guía debe ser capaz de crear una instancia en su proyecto de public cloud a través del área de cliente de OVHcloud. Si desea más información sobre lo que puede hacer con su instancia, consulte nuestras guías en la página de soporte de los [Servicios Public Cloud](https://docs.ovh.com/es/public-cloud/){.external}.

## Más información

[Primeros pasos con Public Cloud](https://docs.ovh.com/es/public-cloud/empezar_con_public_cloud_identificarse_y_crear_un_proyecto/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.