---
title: 'Migración de instancias entre zonas de disponibilidad (AZ)'
excerpt: 'Este guía describe cómo migrar una instancia de Public Cloud de OVHcloud entre dos zonas de disponibilidad (AZ), 1AZ y 3AZ. Cubre los pasos de backup, transferencia y recreación, con instrucciones a través del Manager, Horizon o la CLI OpenStack.'
updated: 2025-11-04
---

## Objetivo

Este guía explica cómo migrar una instancia de Public Cloud de una zona de disponibilidad (AZ) a otra, de 1AZ a 3AZ o viceversa. Centraliza los pasos clave (backup, transferencia y recreación) y redirige a los guías detallados para cada elemento.

## Requisitos

- Tener una [instancia Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!primary]
>
> Antes de realizar una migración de una instancia, es importante comprender bien las diferencias entre los tipos de despliegue ofrecidos en el Public Cloud de OVHcloud. Cada modo (1AZ, 3AZ o Local Zones) tiene un impacto directo en la resiliencia, disponibilidad y diseño de su infraestructura.
>
> Para obtener más información, consulte la documentación: [Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones (EN)](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Paso 1. Backup de la instancia

Empiece creando un backup de la instancia a migrar, o utilice un backup existente si aún es válido.

OVHcloud ofrece dos tipos de backups, con comportamientos diferentes según el tipo de migración que desee:

- Backup local: Requiere un traslado manual si migra a otra región o AZ.
- Backup remoto (backup distante) (**recomendado**): Gestionado automáticamente por OVHcloud, el backup local se replica en la región elegida. No se requiere traslado manual.

> [!primary]
>
> Si su backup local se realizó en una región 3AZ y desea recrear la instancia en otra AZ de la misma región, no se requiere traslado.
>
> Los backups locales están disponibles desde todas las zonas de disponibilidad de una región 3AZ. Puede pasar directamente al paso de recreación de la instancia.
>

El backup de una instancia puede realizarse:

- a través del área de cliente de OVHcloud.
- a través de la API de OVHcloud.
- a través de la CLI OpenStack.
- a través de Horizon.

Encuentre toda la información detallada en la sección **Crear una copia de seguridad de una instancia** de nuestro guía "[Guardar una instancia](/pages/public_cloud/compute/save_an_instance)".

### Paso 2. Migrar el backup a otra región

> [!primary]
>
> Si ha utilizado un backup remoto, puede pasar directamente a [paso 3. Restaurar la instancia en la nueva región](#step3recreateinstance).
>

> [!tabs]
> A través de la CLI OpenStack
>> Para transferir su backup de una AZ a otra a través de la CLI OpenStack, consulte nuestro guía "[Descargar y transferir la copia de seguridad de una instancia de una región de OpenStack a otra](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another)".
>>

### Paso 3. Restaurar la instancia en la nueva región <a name="step3recreateinstance"></a>

La restauración de la instancia en la nueva región puede realizarse:

- a través del área de cliente de OVHcloud.
- a través de la API de OVHcloud.
- a través de la CLI OpenStack.
- a través de Horizon.

Encuentre toda la información detallada en la sección **Crear o restaurar un servidor virtual a partir de un snapshot** de nuestro guía "[Restaurar una instancia desde una copia de seguridad](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)".

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).