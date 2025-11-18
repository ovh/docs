---
title: "Cómo escalar los recursos de un VPS"
excerpt: "Cómo escalar la RAM, la vCPU o el almacenamiento desde el área de cliente"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Objetivo

Nuestros servicios VPS ofrecen flexibilidad, fiabilidad y rendimiento para una variedad de necesidades de alojamiento. Puede actualizar su RAM, vCPU o almacenamiento en el [área de cliente de OVHcloud](/links/manager).

**Descubra cómo añadir vCores, memoria y almacenamiento a su servicio VPS.**

## Requisitos

- Tener un [VPS](/links/bare-metal/vps) en el área de cliente de OVHcloud
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).

## Procedimiento

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidor privado virtual`{.action}.

> [!primary]
>
> Las opciones de actualización disponibles en el área de cliente dependen de la gama y el modelo del VPS seleccionado. Las siguientes capturas de pantalla se ofrecen a modo de ilustración y no hacen referencia a un escenario concreto de actualización del VPS.

A partir de ahí, podrá actualizar sus vCores (`1`), su memoria (`2`) o su almacenamiento (`3`).

![Actualizar recursos](images/vps_upgrade01.png){.thumbnail}

### 1. Para añadir **vCores**

En la pestaña **Inicio** del panel **Su configuración**, haga clic en `Añadir vCores pasando a la gama superior`{.action}.

Elija una nueva plantilla y haga clic en `Siguiente`{.action}.

![Actualizar recursos](images/vps_upgrade02.png){.thumbnail}

Elija las opciones de memoria y almacenamiento y haga clic en `Siguiente`{.action}.

![Actualizar recursos](images/vps_upgrade03.png){.thumbnail}

Acepte (`✓`{.action}) los **términos del contrato** y haga clic en `Siguiente`{.action}.

![Actualizar recursos](images/vps_upgrade04.png){.thumbnail}

Revise los cambios y haga clic en `Contratar`{.action}.

![Actualizar recursos](images/vps_upgrade05.png){.thumbnail}

### 2. Para actualizar **Memoria**

En la pestaña **Inicio** del panel **Su configuración**, haga clic en la cantidad de memoria que desea. Las opciones disponibles dependen de la gama de VPS que tenga actualmente.

En la ventana emergente, haga clic en `Confirmar y pagar`{.action} para finalizar el pedido.

![Actualizar recursos](images/vps_upgrade06.png){.thumbnail}

### 3 Para actualizar el **Almacenamiento**

En la pestaña **Inicio** del panel **Su configuración**, haga clic en la cantidad de almacenamiento que desea. Las opciones disponibles dependen de la gama de VPS que tenga actualmente.

En la ventana emergente, haga clic en `Confirmar y pagar`{.action} para finalizar el pedido.

![Actualizar recursos](images/vps_upgrade07.png){.thumbnail}

Consulte nuestra guía dedicada para: [Cómo reparticionar un VPS tras una actualización de almacenamiento](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | ¿Conservaré la misma dirección IP?

Sí, conservará la misma dirección IP tras la actualización de su VPS.

///

/// details | ¿Conservaré mis datos en el servidor?

Sí, después de una actualización, conservará los datos. Cuando actualice el disco, es posible que tenga que extender las particiones.

///

/// details | ¿Qué ocurre con la copia de seguridad o el snapshot? ¿Puedo utilizarlo en el nuevo VPS?

Sí. Tras las actualizaciones, seguirá teniendo acceso a sus copias de seguridad y snapshots.

///

/// details | ¿Qué ocurre con la licencia de software en el VPS antiguo? ¿Puedo moverla automáticamente al nuevo VPS?

Si tiene una licencia activa, permanecerá asociada al VPS. El precio puede cambiar en función del acuerdo de licencia o los requisitos del proveedor.  
Si se realizan cambios en la licencia, estos se explicarán antes de actualizar el VPS.

///

/// details | ¿La tasa de transferencia cambia?

En algunos casos, la tasa de transferencia puede cambiar, por ejemplo, al pasar de un VPS de nivel inferior al superior.

///

/// details | ¿Esta actualización sería inmediata o tendré tiempo para utilizar ambas al mismo tiempo (configurar, transferir datos, etc.)?

La actualización será efectiva inmediatamente, conservando todos sus datos. La actualización asignará más recursos a su VPS existente.

///


## Más información

[FAQ VPS](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Interactúe con nuestra [comunidad de usuarios](/links/community).
