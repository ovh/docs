---
title: Suspender o poner en pausa una instancia
updated: 2025-10-30
---

## Objetivo

Como parte de la configuración de una infraestructura de alta disponibilidad, puede encontrarse con la necesidad de cortar el acceso a sus instancias para poder realizar distintas pruebas. OpenStack le permite suspender, detener o poner en pausa sus instancias. En cada caso, su IP se mantiene.

> [!warning]
> El nombre de estas opciones en el área de cliente de OVHcloud es diferente del nombre en OpenStack/Horizon. Si realiza la operación a través del área de cliente, asegúrese de seleccionar la opción correcta.
>

**Esta guía explica cómo suspender, detener o poner en pausa una instancia.**

## Requisitos

- Tener [una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) sobre la facturación por **horas**
- Tener acceso al [área de cliente de OVHcloud](/links/manager) o al [interfaz de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)
- Conocimiento de la [API de OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) y de las [variables OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

## Procedimiento

> [!alert]
>
> Esta guía solo se aplica a las instancias con **facturación por horas**. Si sus instancias tienen una **facturación mensual**, la facturación clásica seguirá aplicándose independientemente del estado del servicio.
>
> Estas operaciones no interrumpen la facturación de la instancia, que seguirá facturándose mientras no haya sido **terminada**.
>

En la siguiente tabla podrá diferenciar las opciones disponibles en sus instancias. Continúe leyendo esta guía en el apartado correspondiente a su opción. Ponemos entre paréntesis la terminología utilizada en la **interfaz Horizon**.

|Término|Descripción|Facturación|
|---|---|---|
|[Suspender (*shelve*)](#shelve-instance)|Conserve su IP, así como los recursos y los datos de su disco creando un snapshot, liberando todos los demás recursos.|Solo se factura el snapshot.|Solo se le facturará por la instantánea (snapshot).|
|[Apagar (*suspend*)](#stop-suspend-instance)|Almacena el estado de la máquina virtual en el disco. Los recursos dedicados a la instancia están siempre reservados.|La instancia se facturará al mismo precio.|
|[Pausa](#pause-instance)|Almacena el estado de la máquina virtual en la RAM, una instancia en pausa se convierte en bloqueado.|La instancia se facturará al mismo precio.|

### Contenido

- [Suspender (shelve) una instancia](#shelve-instance)
    - [Desde al área de cliente de OVHcloud](#control-panel)
    - [Desde la interfaz Horizon](#horizon)
    - [Utilizando la API de OpenStack/Nova](#openstack-nova)
- [Reactivar (unshelve) una instancia](#unshelve-instance)
    - [Desde al área de cliente de OVHcloud](#control-panel-unshelve)
    - [Desde la interfaz Horizon](#horizon-unshelve)
    - [Utilizando la API de OpenStack/Nova](#openstack-nova-unshelve)
- [Apagar (suspend) una instancia](#stop-suspend-instance)
    - [Desde al área de cliente de OVHcloud](#stop-control-panel)
    - [Desde la interfaz Horizon](#stop-horizon)
    - [Utilizando la API de OpenStack/Nova](#stop-openstack-nova)
- [Poner en pausa una instancia (*pause*)](#pause-instance)
    - [Desde la interfaz Horizon](#pause-horizon)
    - [Utilizando la API de OpenStack/Nova](#pause-openstack-nova)


<a name="shelve-instance"></a>

### Suspender (shelve) una instancia

> [!alert]
> Tenga en cuenta que la suspensión de una instancia IOPS o T1/T2-180 provocará la pérdida de datos en los discos NVMe passthrough.
>
> La suspensión de este tipo de instancia conlleva su desinstalación del host y, por tanto, de los discos en passthrough.
>

Esta opción le permitirá liberar los recursos dedicados a su instancia de Public Cloud, pero la dirección IP permanecerá. Los datos de su disco local se almacenarán en un snapshot creado automáticamente una vez que la instancia se ponga en reserva. Los datos almacenados en la memoria y en otros sitios no se conservarán.

<a name="control-panel"></a>

#### Desde al área de cliente de OVHcloud

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instancias`{.action} en el menú de la izquierda.

Haga clic en el botón `⋮`{.action} a la derecha de la instancia que desea suspender, y luego haga clic en `Suspender`{.action}.

![suspend instance](images/suspend_instance_2025.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

![confirm suspension](images/confirm_suspension_2025.png){.thumbnail}

Durante la operación se muestra un mensaje:

![](images/suspension_message_2025.png){.thumbnail}

Una vez finalizado el proceso, su instancia se mostrará como *Suspendida*.

![suspended status](images/instance_suspended_2025.png){.thumbnail}

El snapshot estará entonces disponible en la sección `Instance Backup`{.action} del menú **Compute** a la izquierda del espacio Public Cloud. Aparecerá un snapshot llamado *xxxxx-shelved*:

![snapshot tab](images/shelved_backup_2025.png){.thumbnail}

<a name="horizon"></a>

#### Desde la interfaz Horizon

Para utilizar este método, conéctese [a Horizon](https://horizon.cloud.ovh.net/auth/login/):

- Para conectarse con el inicio de sesión único de OVHcloud, utilice el enlace `Horizon`{.action} del menú de la izquierda, en «Management Interfaces», tras abrir su proyecto `Public Cloud`{.action} en su [área de cliente de OVHcloud](/links/manager).

- Para conectarse con un usuario específico de OpenStack: abra la página de conexión a [Horizon](https://horizon.cloud.ovh.net/auth/login/) e introduzca las [claves OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) previamente creadas y haga clic en `Connect`{.action}.

Si ha desplegado instancias en diferentes regiones, asegúrese de que se encuentre en la región adecuada. Puede comprobarlo en la esquina superior izquierda de Horizon.

![horizon](images/firstaccesshorizon.png){.thumbnail}

Haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Shelve Instance`{.action} en la lista desplegable de la instancia correspondiente.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Una vez finalizado el proceso, su instancia aparecerá en forma de *Shelved Offloaded*.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Para ver la instantánea (snapshot), haga clic en `Images`{.action} en el menú `Compute`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

<a name="openstack-nova"></a>

#### Utilizando la API de OpenStack/Nova

Antes de continuar, se recomienda consultar las siguientes guías:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server shelve <UUID server>

=====================================

~$ nova shelve <UUID server> 
```

<a name="unshelve-instance"></a>

### Reactivar (unshelve) una instancia

Esta opción le permite reiniciar su instancia para poder seguir utilizándola. Tenga en cuenta que, una vez hecho esto, la facturación se reanudará con normalidad.

> [!alert] **Acciones sobre el snapshot**
>
> Cualquier acción en el snapshot que no sea la reactivación (*unshelve*) puede ser muy peligrosa para su infraestructura en caso de mal uso. Cuando se «reactiva» (*unshelved*) una instancia, la instantánea se eliminará automáticamente. No es recomendable desplegar una nueva instancia a través de una instantánea creada después de que una instancia haya sido suspendida (*shelve*).
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Si tiene problemas o dudas sobre  la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de [servicios especializado](/links/partner). Para más información, consulte el apartado «Más información» de esta guía.
>

<a name="control-panel-unshelve"></a>

#### Desde al área de cliente de OVHcloud

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instancias`{.action} en el menú de la izquierda.

Haga clic en el botón `⋮`{.action} a la derecha de la instancia, y luego haga clic en `Reactivar`{.action}.

![reactivate instance](images/reactivate_instance_2025.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

Una vez finalizado el proceso, su instancia se mostrará como *Activa*.

<a name="horizon-unshelve"></a>

#### Desde la interfaz de Horizon

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Unshelve Instance`{.action} en la lista desplegable de la instancia correspondiente.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Una vez finalizado el proceso, la instancia se mostrará como *Active*.

<a name="openstack-nova-unshelve"></a>

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

<a name="stop-suspend-instance"></a>

### Apagar (suspend) una instancia

Esta opción le permitirá detener su instancia y almacenar el estado de la máquina virtual en el disco. La memoria también se escribirá en el disco.

<a name="stop-control-panel"></a>

#### Desde al área de cliente de OVHcloud

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instancias`{.action} en el menú de la izquierda.

Haga clic en el botón `⋮`{.action} a la derecha de la instancia, y luego haga clic en `Apagar`{.action}.

![stop instance](images/turn_off_instance_2025.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

![stop instance](images/confirm_turn_off.png){.thumbnail}

Una vez finalizado el proceso, la instancia se mostrará como *Apagada*.

Para **reactivar** la instancia, siga los pasos que se indican más arriba. Haga clic en el botón `⋮`{.action} a la derecha de la instancia y seleccione `Iniciar`{.action}. En algunos casos, quizá necesite reiniciarse en frío.

<a name="stop-horizon"></a>

#### Desde la interfaz de Horizon 

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Suspend Instance`{.action} en la lista desplegable de la instancia correspondiente.

![suspend instance horizon](images/suspendinstancehorizon.png){.thumbnail}

Se mostrará un mensaje de confirmación indicando que la instancia ha sido suspendida.

Para **reactivar** la instancia, siga los pasos que se indican más arriba. En la lista desplegable correspondiente, seleccione `Resume Instance`{.action}.

<a name="stop-openstack-nova"></a>

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Para **reactivar** la instancia, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

<a name="pause-instance"></a>

### Poner en pausa una instancia (*pause*)

Esta operación sólo puede realizarse desde la interfaz Horizon o a través de la API OpenStack/Nova. Una instancia en pausa sigue funcionando en un estado bloqueado.

<a name="pause-horizon"></a>

#### Desde la interfaz de Horizon

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Pause Instance`{.action} en la lista desplegable de la instancia correspondiente.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Aparecerá el mensaje de confirmación, indicando que la instancia ha sido pausada.

Para **reactivar** la instancia, siga los pasos que se indican más arriba. En la lista desplegable correspondiente, seleccione `Resume Instance`{.action}.

<a name="pause-openstack-nova"></a>

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Para **reactivar** la instancia, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Más información

[Documentación OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html).

Interactúe con nuestra [comunidad de usuarios](/links/community).