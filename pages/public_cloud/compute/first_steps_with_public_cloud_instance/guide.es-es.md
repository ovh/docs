---
title: 'Gestionar las instancias de Public Cloud'
excerpt: 'Cómo gestionar las instancias de Public Cloud desde el Panel de configuración de OVHcloud'
updated: 2024-02-20
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Puede gestionar sus instancias de Public Cloud desde el [Panel de configuración](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

**Esta guía explica las acciones disponibles en el área de cliente de OVHcloud para una instancia de Public Cloud.**

## Requisitos

- Un [proyecto de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud
- Una [instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) en su proyecto
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Procedimiento

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y abra su proyecto de `Public Cloud`{.action}. 

### Utilizar la interfaz de gestión de instancias

En el menú de la izquierda, haga clic en `Instances`{.action}. 

![public-cloud](images/compute-2024.png){.thumbnail}

Esta página lista todas sus instancias de Public Cloud y algunas de sus propiedades:

- el ID de la instancia, necesario para determinadas llamadas a la API;
- la localización del datacenter, es decir, la región de la instancia;
- el modelo de la instancia;
- la imagen, es decir, el SO instalado en la instancia;
- la dirección IPv4 de la instancia;
- la dirección privada actualmente asociada a la instancia;
- volúmenes (discos) adicionales actualmente asociados a la instancia;
- Estado de la instancia, indicando si está en estado `Activado`.

### Opciones de gestión en el panel de control de la instancia

En la página de gestión de las instancias, haga clic en el nombre de una instancia.

Seleccione la opción que desee en el recuadro izquierdo "Gestión".

![public-cloud](images/management.png){.thumbnail}

Estas acciones también están disponibles en la página de gestión de las instancias si hace clic en el botón `...`{.action} de la tabla.

#### Editar la configuración de una instancia

Haga clic en `Editar`{.action}.

Se abrirá una nueva página en la que podrá modificar las opciones de [creación de instancias](/pages/public_cloud/compute/public-cloud-first-steps):

- **Cambiar el nombre**: puede asignar un nombre a la instancia para facilitar la identificación.
- **Modificar la imagen**: puede elegir otro sistema operativo para la instancia (tenga en cuenta que la reinstalación de una instancia eliminará todos los datos que contiene).
- **Modificar el modelo**: puede cambiar el modelo de instancia. Para más información sobre las opciones, consulte [esta guía](/pages/public_cloud/compute/public-cloud-first-steps#3-crear-una-instancia).
- **Modificar el período de facturación**: puede cambiar el período de facturación de la instancia desde una facturación mensual por horas. Para más información, consulte [esta guía](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

#### Crear un backup de una instancia

Haga clic en `Crear un backup`{.action}.

Para más información, consulte la guía [Guardar una instancia](/pages/public_cloud/compute/save_an_instance). 

#### Crear un backup automático de una instancia

Haga clic en `Crear una copia de seguridad automatizada`{.action}.

Para más información, consulte la guía [Guardar una instancia](/pages/public_cloud/compute/save_an_instance#crear-una-copia-de-seguridad-automatizada-de-una-instancia).

#### Detener una instancia

Haga clic en `Detener`{.action}.

Esto pondrá la instancia en el estado `Apagada`, pero se le seguirá cobrando el mismo precio por su instancia. Para más información, consulte nuestra guía [Suspender o poner en pausa una instancia](/pages/public_cloud/compute/suspend_or_pause_an_instance#detener-stop-una-instancia).

Haga clic en `Iniciar`{.action} para reactivar la instancia.

#### Utilizar el modo de rescate

Haga clic en `Reiniciar en modo de rescate`{.action}.

Esto activará el modo de rescate de la instancia. Para más información, consulte nuestra guía [Cómo activar el modo de rescate en una instancia Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

#### Reiniciar una instancia

> [!warning]
> La opción de reiniciar en caliente (soft) no está actualmente disponible para las instancias Metal.
>

- Haga clic en `Reiniciar en caliente (soft)`{.action} para reiniciar a nivel de software.
- Haga clic en `Reiniciar en frío (hard)`{.action} para iniciar un reinicio a nivel de hardware.

Confirme la solicitud de reinicio en la nueva ventana.

#### Suspender (*shelve*) una instancia

Haga clic en `Suspender`{.action}.

Esto hará que la instancia se convierta en "*shelved*", que se muestra aquí como `Suspendida`. Para más información sobre el estado de suspensión de una instancia, consulte nuestra guía [Suspender o poner en pausa una instancia](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspender-shelve-una-instancia).

Haga clic en `Reactivar`{.action} para restaurar el estado `Activado` de la instancia.

#### Reinstalar una instancia

Haga clic en `Reinstalar`{.action}.

Esta acción reinstalará la instancia con el mismo sistema operativo, siempre que la imagen siga soportada.

Tenga en cuenta que la reinstalación **elimina todos los datos** almacenados actualmente en su instancia.

#### Eliminar una instancia

Haga clic en `Eliminar`{.action}.

Esta acción eliminará definitivamente la instancia y todos sus datos.

Confirme la solicitud de eliminación en la nueva ventana.

> [!warning]
> La eliminación de una instancia no elimina automáticamente todas las opciones asociadas a ella (almacenamiento, snapshot, backup, etc.). Asegúrese de que todas las demás opciones asociadas a la instancia también se eliminan para dejar de facturarse.
>

### Acceder a la consola VNC <a name="accessvnc"></a>

En el menú de la izquierda, haga clic en `Instances`{.action}. En la página de gestión de las instancias, haga clic en el nombre de la instancia en la tabla.

A continuación, abra la pestaña `Consola VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La consola VNC proporciona acceso directo a su instancia. Para que este acceso funcione, es necesario configurar primero un nombre de usuario y una contraseña en la instancia. 

Consulte nuestra guía [Crear y conectarse a una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#4-conectarse-a-una-instancia) para obtener más información.

## Más información

[Crear y conectarse a una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Presentación de Horizon](/pages/public_cloud/compute/introducing_horizon)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.