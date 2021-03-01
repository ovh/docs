---
title: 5. Conectarse a un escritorio virtual
slug: conectarse-escritorio-virtual
excerpt: Cómo conectarse a un escritorio virtual
section: Primera configuración
order: 5
---

**Última actualización: 19/02/2018**

## Objetivo

Una vez que el [pool está creado](https://docs.ovh.com/es/cloud-desktop-infrastructure/crear-pool/){.external} y que los [usuarios tienen acceso a los escritorios virtuales](https://docs.ovh.com/es/cloud-desktop-infrastructure/asignar-escritorios-virtuales/){.external}, solo queda conectarse a ellos.

**Esta guía explica cómo conectarse a un escritorio virtual.**

## Requisitos

- Abrir el cliente VMware Horizon o un navegador.
- Conocer la dirección (URL) del punto de acceso, que puede consultarse en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- [Haber autorizado al usuario en el pool](https://docs.ovh.com/es/cloud-desktop-infrastructure/asignar-escritorios-virtuales/){.external}.


## Procedimiento

### Desde el cliente web

> [!primary]
>
> Asegúrese de haber activado esta funcionalidad al crear el pool. En el [paso 3](https://docs.ovh.com/es/cloud-desktop-infrastructure/crear-pool/){.external} de esta serie de guías explicamos cómo hacerlo.
> 

**Puede acceder a su escritorio virtual desde su navegador.**

Para ello, acceda a la dirección indicada en el email de notificación de la entrega de su [Cloud Desktop Infrastructure](https://www.ovh.es/cloud/cloud-desktop/infrastructure/){.external} (en **Acceso al escritorio**). Su navegador predeterminado se abrirá y mostrará una ventana en la que podrá elegir entre instalar **VMware Horizon Client** o **VMware Horizon HTML Access**.

![Inicio de Horizon](images/1200.png){.thumbnail}

Haga clic en `VMware Horizon HTML Access`{.action}.

En la siguiente ventana, introduzca sus claves de conexión, que se le habrán comunicado en el email de entrega de su Cloud Desktop Infrastructure.

Por último, haga clic en el icono de su escritorio virtual y espere el tiempo que sea necesario para que este último se inicie.


### Desde el cliente VMware Horizon

**Para ampliar las funcionalidades disponibles entre el equipo físico y el escritorio virtual, es posible instalar un cliente de software.**

Puede descargarlo en la siguiente dirección: [VMware Horizon Client](https://my.vmware.com/en/web/vmware/info/slug/desktop_end_user_computing/vmware_horizon_clients/4_0){.external}.

Abra el cliente y haga clic en el botón `+`{.action} o `Add Server`{.action}.

Introduzca la dirección de conexión a su escritorio virtual, que se indica en el email de notificación de la entrega de su [Cloud Desktop Infrastructure](https://www.ovh.es/cloud/cloud-desktop/infrastructure/){.external} (en **Acceso al escritorio**).

Haga clic en el servidor creado en el paso anterior.

Introduzca sus claves de conexión y haga clic en `Login`{.action}.

Espere a que se inicie el escritorio.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.

