---
title: Suspender o poner en pausa una instancia
slug: suspender_o_poner_en_pausa_una_instancia
legacy_guide_number: g1781
section: Gestión del proyecto
order: 03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 01/10/2021**

## Objetivo

 Como parte de la configuración de una infraestructura de alta disponibilidad, puede encontrarse con la necesidad de cortar el acceso a sus instancias para poder realizar distintas pruebas. OpenStack le permite suspender, detener o poner en pausa sus instancias. En cada caso, su IP se mantiene.


> [!warning]
> El nombre de estas opciones en el área de cliente de OVHcloud es diferente del nombre en OpenStack/Horizon. Si realiza la operación a través del área de cliente, asegúrese de seleccionar la opción correcta.
>

**Esta guía explica cómo suspender, detener o poner en pausa una instancia.**

## Requisitos

- Tener [una instancia de Public Cloud](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/) sobre la facturación por **horas**
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} o al [interfaz de Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/)
- Conocimiento de la [API de OpenStack](https://docs.ovh.com/es/public-cloud/prepare_the_environment_for_using_the_openstack_api/) y de las [variables OpenStack](https://docs.ovh.com/es/public-cloud/set-openstack-environment-variables/)

## Procedimiento

> [!alert]
>
> Estas operaciones no interrumpen la facturación de la instancia, que seguirá facturándose mientras no haya sido **terminada**.
>

En la siguiente tabla podrá diferenciar las opciones disponibles en sus instancias. Continúe leyendo esta guía en el apartado correspondiente a su opción.

|Término|Descripción|Facturación|
|---|---|---|
|[Suspender (*shelve*)](#shelve-instance)|Conserva los recursos y los datos de su disco creando un snapshot. Todos los demás recursos son liberados.|Solo se le facturará por la instantánea (snapshot).|
|[Detener (*suspend*)](#stop-suspend-instance)|Almacena el estado de la máquina virtual en el disco. Los recursos dedicados a la instancia están siempre reservados.|La instancia se facturará al mismo precio.|
|[Pausa](#pause-instance)|Almacena el estado de la máquina virtual en la RAM, una instancia en pausa se convierte en bloqueado.|La instancia se facturará al mismo precio.|

### Suspender (shelve) una instancia <a name="shelve-instance"></a>

Esta opción le permitirá liberar los recursos dedicados a su instancia de Public Cloud, pero la dirección IP permanecerá. Los datos de su disco local se almacenarán en un snapshot creado automáticamente una vez que la instancia se ponga en reserva. Los datos almacenados en la memoria y en otros sitios no se conservarán.

#### Desde al área de cliente de OVHcloud.

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instances`{.action} en el menú de la izquierda.

Haga clic en el botón `...`{.action} a la derecha de la instancia que desea suspender, y luego haga clic en`Suspender`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Una vez finalizado el proceso, su instancia se mostrará como *Suspendida*.

![suspended status](images/instance_suspended.png){.thumbnail}

Para ver el snapshot, acceda al menú de la izquierda y haga clic en `Instance Backup`{.action}. A partir de ahora será visible una instantánea llamada *xxxxx-shelved*:

![snapshot tab](images/shelved_backup.png){.thumbnail}

#### Desde la interfaz Horizon

Para continuar, debe [crear un acceso a Horizon](../horizon/) y [conectarse al panel Horizon](https://horizon.cloud.ovh.net/auth/login/).

Si ha desplegado instancias en diferentes regiones, asegúrese de que se encuentre en la región adecuada. Puede comprobarlo en la esquina superior izquierda de Horizon.

![horizon](images/firstaccesshorizon.png){.thumbnail}

Haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Shelve Instance`{.action} en la lista desplegable de la instancia correspondiente.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Una vez finalizado el proceso, su instancia aparecerá en forma de *Shelved Offloaded*.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Para ver la instantánea (snapshot), haga clic en `Images`{.action} en el menú `Compute`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Utilizando la API de OpenStack/Nova

Antes de continuar, se recomienda consultar las siguientes guías:

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Cargar las variables de entorno necesarias para OpenStack](https://docs.ovh.com/es/public-cloud/set-openstack-environment-variables/)

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

### Reactivar (unshelve) una instancia

Esta opción le permite reiniciar su instancia para poder seguir utilizándola. Tenga en cuenta que, una vez hecho esto, la facturación se reanudará con normalidad.

> [!alert] **Acciones sobre el snapshot**
>
> Cualquier acción en el snapshot que no sea la reactivación (*unshelve*) puede ser muy peligrosa para su infraestructura en caso de mal uso. Cuando se «reactiva» (*unshelved*) una instancia, la instantánea se eliminará automáticamente. No es recomendable desplegar una nueva instancia a través de una instantánea creada después de que una instancia haya sido suspendida (*shelve*).
>
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Si tiene problemas o dudas sobre  la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

#### Desde al área de cliente de OVHcloud.

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instances`{.action} en el menú de la izquierda.

Haga clic en el botón `...`{.action} a la derecha de la instancia, y luego haga clic en `Reactivar`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

Una vez finalizado el proceso, su instancia se mostrará como *Activa*.

#### Desde la interfaz de Horizon

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Unshelve Instance`{.action} en la lista desplegable de la instancia correspondiente.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Una vez finalizado el proceso, la instancia se mostrará como *Active*.

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Detener (stop) una instancia <a name="stop-suspend-instance"></a>

Esta opción le permitirá detener su instancia y almacenar el estado de la máquina virtual en el disco. La memoria también se escribirá en el disco.

#### Desde al área de cliente de OVHcloud.

Conéctese al área de cliente de OVHcloud, acceda a la sección Public Cloud y seleccione el proyecto correspondiente. Clic en `Instances`{.action} en el menú de la izquierda.

Haga clic en el botón `...`{.action} a la derecha de la instancia, y luego haga clic en `Detener`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

En la pantalla que aparece, tome nota del mensaje y haga clic en `Confirmar`{.action}.

Una vez finalizado el proceso, la instancia se mostrará como *Apagada*.

Para reanudar la instancia, siga los pasos que se indican más arriba. Haga clic en el botón `...`{.action} a la derecha de la instancia y seleccione `Iniciar`{.action}. En algunos casos, quizá necesite reiniciarse en frío.

#### Desde la interfaz de Horizon 

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Suspend Instance`{.action} en la lista desplegable de la instancia correspondiente.

![suspend instance horizon](images/suspendinstancehorizon.png){.thumbnail}

Se mostrará un mensaje de confirmación indicando que la instancia ha sido suspendida.

Para reactivar la instancia, siga los pasos que se indican más arriba. En la lista desplegable correspondiente, seleccione `Resume Instance`{.action}.

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Para reactivar la instancia, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Poner en pausa una instancia (*pause*) <a name="pause-instance"></a>

Esta operación sólo puede realizarse desde la interfaz Horizon o a través de la API OpenStack/Nova. Una instancia en pausa sigue funcionando en un estado bloqueado.

#### Desde la interfaz de Horizon

En Horizon, haga clic en el menú `Compute`{.action} en el lado izquierdo y seleccione `Instances`{.action}. Seleccione `Pause Instance`{.action} en la lista desplegable de la instancia correspondiente.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Aparecerá el mensaje de confirmación, indicando que la instancia ha sido pausada.

Para reactivar la instancia, siga los pasos que se indican más arriba. En la lista desplegable correspondiente, seleccione `Resume Instance`{.action}.

#### Utilizando la API de OpenStack/Nova

Una vez que el entorno esté listo, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Para reactivar la instancia, escriba lo siguiente en la línea de comandos:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Más información

[Documentación OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
