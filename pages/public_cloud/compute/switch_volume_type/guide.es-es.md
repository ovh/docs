---
title: Modificar un Volume Block Storage
excerpt: "Descubra cómo cambiar el tipo de un volume block storage utilizando OpenStack"
updated: 2026-01-13
---

## Objetivo

El objetivo de esta guía es mostrarle cómo cambiar un tipo de volumen Block Storage, de Classic o High Speed a High Speed gen2.

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](/links/manager) o a la [interfaz Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Un volumen [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) creado en su proyecto [Public Cloud](/links/public-cloud/public-cloud).

## Procedimiento

Al cambiar un tipo de volumen Block Storage a un volumen "High Speed gen2", la política de migración debe modificarse de `Never` a `On Demand`.

Por defecto, la política de migración se establece en `Never`, ya que el volumen permanece en el mismo cluster CEPH. Sin embargo, para el "High speed gen2", el volumen deberá migrarse a un nuevo cluster.

Esta modificación puede realizarse a través de Horizon o a través de la interfaz de línea de comandos OpenStack.

> [!warning]
>
> Si el volumen Block Storage está conectado a una instancia, debe desconectarlo antes de continuar. Para más información, consulte la sección **Desvincular un volumen** de la guía "[Crear y configurar un disco adicional en una instancia](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> El cambio de tipo de volumen (retyping) a través del área de cliente de OVHcloud o la API OVHcloud solo está disponible para volúmenes no cifrados. No es posible modificar el tipo de volúmenes cifrados de tipo **-LUKS** a través de estas interfaces.
>
> El retyping es posible a través de OpenStack / Horizon solo para volúmenes **-LUKS** a **-LUKS**. En este caso, la restauración del volumen después del retyping no es posible.
> 
> Las conversiones **-LUKS** a **no -LUKS** no están soportadas, incluso a través de OpenStack / Horizon.
>

> [!tabs]
> Desde el área de cliente de OVHcloud
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), vaya a la sección `Public Cloud`{.action} y seleccione el proyecto Public Cloud correspondiente. A continuación, haga clic en `Block Storage`{.action} en el menú de la izquierda bajo **Backup Storage**.
>>
>> Localice el volumen correspondiente en la lista y haga clic en el botón `...`{.action} situado a su derecha. A continuación, elija `Modificar el tipo de volumen`{.action}.
>>
>> Se abre una ventana que le permite consultar los diferentes tipos de volúmenes disponibles. Seleccione el tipo deseado y confirme su elección pulsando `Modificar`{.action}.
>>
>> > [!primary]
>> >
>> > La actualización del tipo de volumen (retyping) puede tardar varios minutos.
>> >
>>
> Desde la interfaz Horizon
>>
>> Inicie sesión en la [interfaz Horizon](https://horizon.cloud.ovh.net/auth/login/) y asegúrese de estar en la región correcta. Puede comprobarlo en la esquina superior izquierda. 
>>
>> ![Selección de región](images/region2021.png){.thumbnail}
>>
>> Haga clic en el menú `Volumes`{.action} a la izquierda y luego en `Volumes`{.action}.
>>
>> Haga clic en la flecha desplegable junto a `Edit Volume`{.action} y seleccione `Change Volume Type`{.action}.
>>
>> ![Selección de la opción](images/selectoption.png){.thumbnail}
>>
>> En la ventana que aparece, haga clic en el menú desplegable bajo `Type` y seleccione `high-speed-gen-2`{.action}. A continuación, haga clic en la flecha desplegable bajo `Migration Policy` y seleccione `On Demand`{.action}.
>>
>> Una vez realizadas estas acciones, haga clic en `Change Volume Type`{.action} para confirmar el cambio.
>>
>> ![Selección de la opción](images/changevolume.png){.thumbnail}
>>
> Desde la CLI OpenStack
>>
>> Antes de comenzar, consulte la siguiente guía:
>>
>> - [Preparar el entorno para utilizar la API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> En primer lugar, liste los tipos de volúmenes disponibles en su región con el siguiente comando:
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> > Tenga en cuenta que si los tipos de volúmenes "high-speed-gen2" o **-LUKS** no aparecen en la lista, significa que no están disponibles en esta región.
>> >
>> > Los tipos de volúmenes **-LUKS** solo se muestran cuando están soportados en la región y compatibles con el tipo de cifrado del volumen.
>> >
>>
>> A continuación, modifique el tipo de volumen con el siguiente comando:
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Más información

Para saber cómo migrar un volumen Block Storage hacia un volumen cifrado LUKS, consulte nuestra guía dedicada [Migrating a Block Storage volume to an encrypted LUKS volume](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume) (EN).

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).