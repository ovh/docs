---
title: Modificar un Volume Block Storage
excerpt: "Descubra cómo cambiar el tipo de un volume block storage utilizando OpenStack"
updated: 2023-08-08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

El objetivo de esta guía es mostrarle cómo cambiar un tipo de volumen Block Storage, de Classic o High Speed a High Speed gen2.

## Requisitos

- [Conectarse a Horizon](/pages/platform/public-cloud/introducing_horizon)
- Un volumen [Block Storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) creado en su proyecto [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/)

## Procedimiento

Al cambiar un tipo de volumen Block Storage a un volumen «High Speed gen2», la política de migración debe modificarse de `Never` a `On Demand`.

Por defecto, la política de migración se establece en `Never`, ya que el volumen permanece en el mismo cluster CEPH. Sin embargo, para el «High speed gen2», el volumen deberá migrarse a un nuevo cluster.

Esta modificación puede realizarse a través de Horizon o a través de la interfaz de línea de comandos OpenStack.

### Horizon

Conéctese a [Horizon](https://horizon.cloud.ovh.net/auth/login/) y asegúrese de estar en la zona correcta. Puede comprobarlo en la parte superior izquierda. 

![Selección de región](images/region2021.png){.thumbnail}

Haga clic en el menú `Volumes`{.action} a la izquierda y, a continuación, haga clic en `Volumes`{.action}.

Haga clic en la flecha desplegable situada junto a `Edit Volume`{.action} y seleccione `Change Volume Type`{.action}.

![Elección de la opción](images/selectoption.png){.thumbnail}

En la ventana que se abre, haga clic en el menú desplegable en `Type` y seleccione `high-speed-gen-2`{.action}. A continuación, haga clic en la flecha desplegable situada debajo de `Migration Policy` y seleccione `On Demand`{.action}.

Una vez realizadas estas acciones, haga clic en `Change Volume Type`{.action} para confirmar el cambio.

![Elección de la opción](images/changevolume.png){.thumbnail}

### Desde la CLI OpenStack

Antes de continuar, se recomienda consultar las siguientes guías:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Cargar las variables de entorno necesarias para OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)

En primer lugar, utilice el siguiente comando para ver los tipos de volúmenes disponibles en su región:

```bash
#~$ openstack image list
+--------------------------------------+-----------------------------------------------+----------+
| ID                                   | Name                                          | Is Public |
+--------------------------------------+-----------------------------------------------+----------+
| 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
| 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
| 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
----------------------------------------------------------------------------------------------------
```

> [!warning]
> Tenga en cuenta que si el tipo de volumen « high-speed-gen2 » no aparece en la lista, significa que no está disponible en esta región.
>

A continuación, cambie el tipo de volumen con el siguiente comando:

```bash
$ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.