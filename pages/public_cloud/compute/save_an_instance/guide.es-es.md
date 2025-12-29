---
title: 'Guardar una instancia'
excerpt: 'Cómo realizar el backup de una instancia de Public Cloud desde el área de cliente de OVHcloud'
updated: 2025-10-14
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Puede crear una copia de seguridad única de una instancia o configurar una planificación para automatizar las copias de seguridad de sus instancias. Las copias de seguridad pueden utilizarse para restaurar su instancia a un estado anterior o para crear una nueva instancia idéntica.

**Esta guía explica cómo crear copias de seguridad manuales y automáticas de una instancia de Public Cloud.**

## Requisitos

- Tener una instancia de [Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud.
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).
- CLI OpenStack. Consulte nuestro guía "[Preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)". (opcional)

## Procedimiento

### Crear una copia de seguridad de una instancia

> [!warning]
> Esta opción solo está disponible a través de un **Cold Snapshot** para las instancias Metal. La instancia Metal pasará a modo de rescate y, una vez realizada la copia de seguridad, la instancia se reiniciará en modo normal.
>

> [!primary]
>
> Dos tipos de copias de seguridad están disponibles:
>
> - Local: Una copia de seguridad local se almacena en la misma región que su instancia.
> - Remota: Una copia de seguridad remota crea automáticamente una copia de la copia de seguridad local en otra región de su elección.
>
> Cada copia de seguridad se factura por separado. La copia de seguridad remota se facturará según la tarifa de almacenamiento de la región remota seleccionada.
>
> **Nota :** las Local Zones no son compatibles con copias de seguridad remotas.


> [!tabs]
> A través del área de cliente de OVHcloud
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), vaya a la sección `Public Cloud`{.action} y seleccione el proyecto Public Cloud correspondiente.<br>
>> Haga clic en `Instancias`{.action} en el menú de la izquierda.<br>
>> En la página de instancias, haga clic en el botón `...`{.action} a la derecha de la instancia y seleccione `Crear un backup`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}
>>
>> /// details | Backup local
>>
>> Asigne un nombre al backup, revise la información de precios y haga clic en `Confirmar`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup2bis.png){.thumbnail}
>>
>> ///
>>
>> /// details | Copia de seguridad remota
>>
>> Introduzca un nombre para la copia de seguridad y revise la información de precios. Haga clic en `Añadir una copia de seguridad remota (Opción)`{.action}, introduzca un nombre para la copia de seguridad remota, seleccione una región y haga clic en `Confirmar`{.action}.
>>
>> ![public-cloud-instance-backup](images/createdistantbackup.png){.thumbnail}
>>
>> ///
>>
>> No es posible seguir el progreso de la copia de seguridad en tiempo real. Sin embargo, puede consultar el estado de la copia de seguridad en la sección `Instance Backup`{.action} bajo la sección **Compute** del menú izquierdo, donde se mostrará el estado `Copia de seguridad en curso` durante el proceso.
>>
>> Una vez finalizado el backup, este estará disponible en la sección `Instance Backup`{.action} bajo la sección **Compute** en el menú de la izquierda.
>>
>> ![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}
>>
> A través de la API de OVHcloud <a name="createinstanceviaapi"></a>
>> Inicie sesión en [la API de OVHcloud](/links/console).
>>
>> Puede listar todas las regiones disponibles utilizando la siguiente llamada a la API:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET  /cloud/project/{serviceName}/region
>> >
>>
>> Utilice a continuación la siguiente llamada a la API:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/snapshot
>> >
>>
>> Rellene las variables:
>>
>> - **instanceId**: Identificador único de la instancia correspondiente.
>> - **regionName**: Nombre de la región donde se encuentra la instancia de origen.
>> - **serviceName**: Identificador del proyecto de OVHcloud.
>> - **distantRegionName (opcional)**: Nombre de la región remota donde se almacenará el backup.
>> - **distantSnapshotName (opcional)**: Nombre del backup remoto a crear en la región remota.
>> - **snapshotName**: Nombre del snapshot (backup local) a crear.
>>
>> > [!primary]
>> >
>> > Cree un backup remoto solo si se proporcionan los parámetros relacionados con la región remota (**distantRegionName** y **distantSnapshotName**).
>> >
>>
> A través de la CLI de OpenStack
>>
>> Ejecute el siguiente comando para mostrar la lista de instancias:
>>
>> ```bash
>> $ openstack server list
>>
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | ID | Name | Status | Networks | Image Name |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> ```
>>
>> Puede listar todas las regiones disponibles utilizando el siguiente comando:
>>
>> ```bash
>> $ openstack region list
>> ```
>>
>> /// details | Backup local
>>
>> Ejecute el siguiente comando para crear un backup de su instancia:
>>
>> ```bash
>> $ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
>> ```
>>
>> ///
>>
>> /// details | Backup remoto
>>
>> Ejecute el siguiente comando después de crear el backup local:
>>
>> ```bash
>> $ openstack workflow execution create ovh.glance.glance_download '{"src_image_id": "<image_id>", "src_region": "<current_region>", "dst_region": "<remote_region>"}'
>> ```
>>
>> ///
>>
> A través de Horizon
>>
>> Haga clic en el menú `Compute`{.action} a la izquierda y seleccione `Instancias`{.action}.<br>
>> Haga clic en el botón `Create Snapshot`{.action} a la derecha de la fila correspondiente a la instancia.
>>
>> ![public-cloud-instance-backup-horizon1](images/createbackuphorizon1.png){.thumbnail}
>>
>> Asigne un nombre al backup y haga clic en `Create Snapshot`{.action}.
>>
>> ![public-cloud-instance-backup-horizon2](images/createbackuphorizon2.png){.thumbnail}
>>

### Crear una copia de seguridad automatizada de una instancia

> [!primary]
>
> Si desea automatizar esta función directamente a través de OpenStack, puede crear un workflow Mistral asociado a un cron trigger.

Haga clic en el botón `...`{.action} a la derecha de la instancia y seleccione `Crear una copia de seguridad automatizada`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Podrá configurar los siguientes parámetros de backup:

#### **El workflow (flujo de trabajo)** 

Actualmente solo existe un flujo de trabajo. Creará una copia de seguridad para la instancia y su volumen principal.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **El recurso** 

Puede seleccionar la instancia a la que quiere realizar el backup.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **El nombre** 

Escriba un nombre para la planificación de la copia de seguridad automática. Lea la información sobre los precios y cree la planificación haciendo clic en el botón `Crear`{.action}.
 
![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Planificación** 

Puede definir una planificación de backup personalizada o elegir una de las frecuencias predeterminadas:

- Backup diario con retención de las 7 últimas copias de seguridad
- Backup diario con retención de las 14 últimas copias de seguridad

![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

/// details | **Adicionar um backup remoto**

Haga clic en el botón `Añadir un backup remoto`{.action}, seleccione una ubicación, consulte la información de precios y haga clic en el botón `Crear`{.action} 

![public-cloud-instance-Backup-distant](images/createbackup8distant.png){.thumbnail}

///

### Gestión de las copias de seguridad y los planes

Las planificaciones se pueden crear y eliminar en la sección `Workflow Management`{.action}, que se encuentra bajo **Compute** en el menú de la izquierda.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Las copias de seguridad de sus instancias se gestionan en la sección `Instance Backup`{.action} de la sección **Compute** del menú de la izquierda.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> La opción de copia de seguridad de la instancia debe eliminarse por separado si ya no desea que se le facture por ella. La eliminación de una instancia no elimina las opciones asociadas a ella.
>

> [!warning]
> **Tenga en cuenta que no puede eliminar una copia de seguridad de instancia si una instancia que se ha generado a partir de esta copia de seguridad se está ejecutando en el momento de la acción de eliminación.**

Esta guía explica cómo utilizar las copias de seguridad para clonar o restaurar instancias en [esta guía](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Más información

[Crear o restaurar un servidor virtual a partir de un snapshot](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.