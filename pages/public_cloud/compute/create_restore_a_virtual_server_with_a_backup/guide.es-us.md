---
title: 'Crear o restaurar un servidor virtual a partir de un snapshot'
excerpt: 'Descubra cómo crear o restaurar la copia de seguridad de una instancia'
updated: 2025-10-15
---

## Objetivo

Desde el área de cliente de OVHcloud podrá crear [copias de seguridad de sus instancias](/pages/public_cloud/compute/save_an_instance) en pocos clics y automatizar el proceso.
Quizá necesite, en algún momento, restaurar su instancia utilizando un snapshot, por ejemplo, por haber configurado de manera incorrecta su instancia. Existen dos razones principales por las que puede utilizar estas copias de seguridad de instancias:

- Crear una instancia basada en la copia de seguridad para duplicar la instancia de origen. Por ejemplo, si configura una infraestructura de balanceo de carga (load balancing).
- Restaurar una instancia a partir de un snapshot. Por ejemplo, si recientes modificaciones han roto configuraciones críticas en la instancia.

**Esta guía explica cómo utilizar las copias de seguridad para duplicar o restaurar sus instancias.**

## Requisitos

- Disponer de un snapshot de una [instancia de Public Cloud](/links/public-cloud/instance-backup). Para ello, consulte [la guía dedicada a la creación de un snapshot](/pages/public_cloud/compute/save_an_instance).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Crear una instancia a partir de un snapshot

> [!tabs]
> A través del área de cliente de OVHcloud
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), vaya a la sección `Public Cloud`{.action} y seleccione el proyecto Public Cloud correspondiente.<br>
>> Haga clic en `Instance backup`{.action} en la barra de navegación izquierda bajo **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Haga clic en los `...`{.action} a la derecha de la copia de seguridad seleccionada y finalmente en `Crear una instancia`{.action}.
>>
>> Se mostrará una versión simplificada de la página de creación de instancias, permitiéndole personalizar ciertas opciones.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Algunos elementos están predefinidos:
>>
>> - **Localización**: Su instancia se creará en el mismo centro de datos que su copia de seguridad.
>> - **Imagen**: La imagen corresponderá a su copia de seguridad.
>> - **Modelo**: Solo estarán disponibles los modelos que puedan alojar su imagen, según su cuota.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Defina el nombre de la nueva instancia, la clave SSH, el vRack y el período de facturación, y luego haga clic en el botón `Crear la instancia`{.action}.
>>
>> Para obtener más información sobre la creación de una instancia, consulte [este guía](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > Para crear una instancia en un centro de datos diferente al de la copia de seguridad, deberá transferirla a la zona correspondiente. Consulte entonces el [guía sobre la copia de seguridad de una instancia entre centros de datos](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> A través de la CLI de OpenStack
>>
>> Para crear una instancia a partir de su copia de seguridad, utilice el ID de la copia de seguridad como imagen con este comando:
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> A través de Horizon
>> En la interfaz de Horizon, haga clic en `Compute`{.action} en el menú izquierdo, luego en `Images`{.action}. Busque la imagen deseada y haga clic en el botón `Launch`{.action} a la derecha de la fila de su imagen.
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Asigne un nombre a su instancia en el campo correspondiente y determine el número de instancias a crear. Luego haga clic en la pestaña `Flavor`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Elija el modelo de instancia deseado y haga clic en la pestaña `Networks`{.action}.
>>
>> > [!warning]
>> >
>> > Si su instancia es un servidor Windows, debe seleccionar un sabor del tipo win-xx-xx (por ejemplo, win-b2-15) y tener una interfaz pública en la red Ext-Net. Sin estas condiciones, no será posible la autenticación con el KMS de OVHcloud, y su servidor permanecerá con una [licencia no activada](/pages/public_cloud/compute/activate-windows-license-private-mode). Esto podría provocar limitaciones, especialmente la falta de actualizaciones. Tenga en cuenta que no se puede escalar una instancia Linux (por ejemplo, b2-15) a una instancia Windows (como win-b2-15). Para realizar esta transición, es necesario crear una nueva instancia.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Elija la red que desea asignar y haga clic en el botón `Launch Instance`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> Puede ver el estado de su nueva instancia en `Compute`{.action} en el menú izquierdo, luego en `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> A través de la API de OVHcloud <a name="createinstanceviaapi"></a>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Rellene las variables:
>>
>> - **serviceName** : El ID del proyecto de OVHcloud.
>> - **regionName** : El nombre de la región donde se creará la instancia.
>>
>> Ejemplo de cuerpo de la solicitud:
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Restaurar una instancia a partir de un snapshot

> [!tabs]
> A través del área de cliente de OVHcloud
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), vaya a la sección `Public Cloud`{.action} y seleccione el proyecto Public Cloud correspondiente.<br>
>> Haga clic en `Instancias`{.action} en la barra de navegación izquierda bajo **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Haga clic en el botón `...`{.action} a la derecha de la instancia que desee restaurar y haga clic en `Editar`{.action}.
>>
>> Se mostrará la página de edición de la instancia. Allí podrá modificar:
>>
>> - el nombre de la instancia;
>> - la imagen de la instancia;
>> - el modelo de la instancia;
>> - la facturación de la instancia (solo desde el modelo "Por hora" al modelo "Mensual").
>>
>> Realice los cambios necesarios y seleccione la pestaña `Backups`{.action} en la sección "Imagen".
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Seleccione una copia de seguridad en la lista de copias de seguridad disponibles. Haga clic en `Modificar la imagen`{.action} si está seguro de querer reemplazar la imagen actual por la copia de seguridad.
>>
>> La instancia tendrá el estado `Reinstalación` hasta que el proceso se complete. Puede ser necesario actualizar la página en el navegador para ver el estado actual.
>>
>> > [!warning]
>> >
>> > Como se indica en el recuadro amarillo que se muestra, no se podrán recuperar los datos añadidos después de la creación de esta copia de seguridad.
>> >
>>
> A través de la API de OVHcloud
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Rellene las variables:
>>
>> - **serviceName** : El ID del proyecto de OVHcloud.
>> - **regionName** : El nombre de la región donde se encuentra la instancia de origen.
>> - **instanceId** : El ID único de la instancia.
>>
>> Ejemplo de cuerpo de la solicitud:
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Más información

[Creación y conexión a una primera instancia de Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Guardar una copia de seguridad de una instancia](/pages/public_cloud/compute/save_an_instance)

Interactúe con nuestra [comunidad de usuarios](/links/community).