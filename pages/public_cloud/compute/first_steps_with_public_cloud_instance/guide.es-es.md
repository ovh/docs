---
title: 'Gestionar sus instancias Public Cloud'
excerpt: 'Descubra cómo gestionar sus instancias Public Cloud en el área de cliente de OVHcloud'
updated: 2026-02-24
---

## Objetivo

Puede gestionar sus instancias Public Cloud en su [área de cliente de OVHcloud](/links/manager).

**Esta guía detalla las acciones disponibles en el área de cliente de OVHcloud para una instancia Public Cloud.**

## Requisitos

- Un [proyecto Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- Una [instancia Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) en su proyecto

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedimiento

### Utilizar la interfaz de gestión de instancias

Haga clic en `Instancias`{.action} en el menú de la izquierda.

Esta página lista el conjunto de sus instancias Public Cloud y algunas de sus propiedades:

- el ID de la instancia, necesario para determinadas llamadas a la API;
- la localización del datacenter, es decir, la región de la instancia;
- el modelo de la instancia;
- la imagen, es decir, el SO instalado en la instancia;
- la dirección IPv4 de la instancia;
- la dirección privada actualmente asociada a la instancia;
- los volúmenes (discos) adicionales actualmente asociados a la instancia;
- el estado de la instancia, indicando si está en estado `Activado`.

### Opciones de gestión en el panel de control de la instancia

Desde la página de gestión de las instancias, haga clic en el nombre de la instancia en cuestión.

Accederá a la página `Información general`, que centraliza los principales detalles y el estado de funcionamiento de su instancia (estado, recursos, red, acceso y metadatos).

Algunas de estas operaciones también están disponibles desde la página de gestión de las instancias, a través del botón `...`{.action} de la tabla.

#### Editar la configuración de una instancia

Haga clic en `Modificar la imagen`{.action} o `Editar la plantilla`{.action}.

También puede abrir `Acciones adicionales`{.action} y seleccionar `Editar`{.action}.

La nueva página presenta una versión modificada de las opciones [de creación de instancias](/pages/public_cloud/compute/public-cloud-first-steps), en la que puede modificar los siguientes elementos:

- **Modificar el nombre**: puede asignar un nombre a la instancia para facilitar su identificación.
- **Modificar la imagen**: puede elegir otro sistema operativo para la instancia (tenga en cuenta que la reinstalación de una instancia eliminará todos los datos que contiene).
- **Modificar el modelo**: puede cambiar el modelo de instancia. Consulte [esta guía](/pages/public_cloud/compute/public-cloud-first-steps#model) para más información sobre las opciones.
- **Modificar el período de facturación**: puede cambiar el período de facturación de la instancia de una facturación por horas a mensual. Consulte [esta guía](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) para más información.

#### Crear un backup de una instancia

Haga clic en `Crear un backup`{.action}.

Consulte la guía [Guardar una instancia](/pages/public_cloud/compute/save_an_instance) para más información.

#### Eliminar una instancia

Haga clic en `Eliminar`{.action}.

Esta acción eliminará definitivamente la instancia y todos sus datos.

Confirme la solicitud de eliminación en la ventana que aparece.

> [!warning]
> La eliminación de una instancia no elimina automáticamente todas las opciones asociadas a ella (almacenamiento, snapshot, backup, etc...). Asegúrese de que todas las demás opciones asociadas a la instancia también se eliminan para dejar de ser facturado.
>

#### Asociar un volumen

Haga clic en `Asociar un volumen`{.action}.

Seleccione el volumen que desea asociar a la instancia y haga clic en `Confirmar`{.action}. Una vez asociado, el volumen estará disponible inmediatamente y podrá montarse desde el sistema operativo de la instancia.

#### Cambiar el registro DNS inverso

Haga clic en `⋮`{.action} y luego en `Cambiar el registro DNS inverso`{.action}.

Consulte la guía [Configurar el DNS inverso de una instancia Public Cloud](/pages/public_cloud/compute/setup_instance_reverse) para más información.

#### Configurar el firewall

Haga clic en `⋮`{.action} y luego en `Configurar el firewall`{.action}.

Consulte la guía [Activar y configurar el Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) para más información.

#### Gestionar las redes privadas

Haga clic en `⋮`{.action} y luego en `Gestionar las redes privadas`{.action}.

Consulte la guía [Crear una red privada con Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) para más información.

#### Asociar una red

Haga clic en `⋮`{.action} y luego en `Asociar una red`{.action}.

Seleccione la red deseada en la lista desplegable y haga clic en `Confirmar`{.action}.

#### Acciones adicionales

Haga clic en `Acciones adicionales`{.action}

##### Crear un backup automático de una instancia

Haga clic en `Crear una copia de seguridad automatizada`{.action}.

Consulte la guía [Guardar una instancia](/pages/public_cloud/compute/save_an_instance#crear-una-copia-de-seguridad-automatizada-de-una-instancia) para más información.

##### Detener una instancia

Haga clic en `Detener`{.action}.

Esto pondrá la instancia en el estado `Apagada`, pero se le seguirá cobrando el mismo precio por su instancia. Consulte nuestra guía [Suspender o poner en pausa una instancia](/pages/public_cloud/compute/suspend_or_pause_an_instance#detener-suspend-una-instancia) para más información.

Haga clic en `Iniciar`{.action} para reactivar la instancia.

##### Utilizar el modo de rescate

Haga clic en `Reiniciar en modo de rescate`{.action}.

Esto activará el modo de rescate de la instancia. Consulte nuestra guía [Cómo activar el modo de rescate en una instancia Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) para obtener información detallada.

##### Reiniciar una instancia

> [!warning]
> La opción de reinicio en caliente (soft) no está actualmente disponible para las instancias Metal.
>

- Haga clic en `Reiniciar en caliente (soft)`{.action} para realizar un reinicio a nivel de software.
- Haga clic en `Reiniciar en frío (hard)`{.action} para iniciar un reinicio a nivel de hardware.

Confirme la solicitud de reinicio en la ventana que aparece.

##### Suspender (*shelve*) una instancia

Haga clic en `Suspender`{.action}.

Esto colocará la instancia en el estado « *shelved* », que se muestra aquí como `Suspendida`. Consulte nuestra guía [Suspender o poner en pausa una instancia](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspender-shelve-una-instancia) para más información sobre los diferentes estados de suspensión de una instancia.

Haga clic en `Reactivar`{.action} para restaurar el estado `Activado` de la instancia.

##### Reinstalar una instancia

Haga clic en `Reinstalar`{.action}.

Esta acción reinstalará la instancia con el mismo sistema operativo, siempre que la imagen siga siendo compatible.

Tenga en cuenta que la reinstalación **elimina todos los datos** almacenados actualmente en su instancia.

### Acceder a la consola VNC <a name="accessvnc"></a>

Haga clic en `Instancias`{.action} en el menú de la izquierda. En la página de gestión de las instancias, haga clic en el nombre de la instancia en la tabla.

Haga clic en la pestaña `Consola VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La consola VNC proporciona acceso directo a su instancia. Para que este acceso funcione, primero debe configurar un nombre de usuario y una contraseña en la instancia.

Consulte nuestra guía [Crear una primera instancia de Public Cloud y conectarse a ella](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console) para más información.

## Más información

[Crear una primera instancia de Public Cloud y conectarse a ella](/pages/public_cloud/compute/public-cloud-first-steps)

[Presentación de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Si necesita formación o asistencia técnica para implementar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
