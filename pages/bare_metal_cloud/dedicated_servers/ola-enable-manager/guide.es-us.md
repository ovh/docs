---
title: "OVHcloud Link Aggregation desde el área de cliente (Dedicado)"
excerpt: "Active OVHcloud Link Aggregation (OLA) en su servidor dedicado directamente desde el área de cliente de OVHcloud"
updated: 2026-04-20
---

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible.<br>
La agregación se basa en la tecnología IEEE 802.3ad o Link Aggregation Control Protocol (LACP).

**Esta guía explica cómo configurar el servicio OLA en el área de cliente.**

## Requisitos

- Tener un [servidor dedicado OVHcloud](/links/bare-metal/bare-metal) de las gamas Advance, Scale o High Grade.
- Tener un sistema operativo/hipervisor que soporta el protocolo de agregación 802.3ad (LACP).

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Seleccione su servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedimiento

> [!warning]
>
> La configuración OLA se realiza en todas las interfaces de red. Formarán un agregado de tipo "agregación privada".
>
> Tras la implementación de OLA, la IP pública dejará de estar accesible.
>

### Configurar OLA en el área de cliente de OVHcloud

Para comenzar la configuración de OLA, abra la pestaña `Interfaces de red`{.action} en la página de administración de su servidor.

Haga clic en el botón `Agregación de redes`{.action} en la sección **Controladores de interfaz de red (NIC)**.

Se le mostrarán dos tablas:
- A la izquierda, la configuración actual de sus interfaces de red;
- A la derecha, la configuración simulada de sus interfaces de red agregadas.

En el campo situado debajo de las tablas, introduzca un nombre para su agregación de enlaces.

Una vez que haya verificado que la configuración de la agregación cumple con sus requisitos de red, haga clic en `Activar la agregación`{.action} para continuar.

La operación puede tardar unos minutos. Cuando haya terminado, el paso siguiente será configurar las interfaces de su sistema operativo con un vínculo NIC o un equipo NIC. Para saber cómo proceder, puede consultar las siguientes guías diseñadas para los sistemas operativos más populares:

- [Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Configurar un NIC para el servicio OVHcloud Link Aggregation en SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Verificar el estado de OLA

Puede verificar el estado de su agregación de enlaces (OLA) en la pestaña `Interfaces de red`{.action}. En la parte inferior de la sección **Tráfico**, localice la fila **OVHcloud Link Aggregation**.

Existen cuatro posibles etiquetas de estado:
- **No disponible**: OLA no es compatible con este modelo de servidor dedicado.
- **Disponible**: OLA es compatible pero no está configurado.
- **Activo - Totalmente privado**: OLA está activado; todas las interfaces físicas están agregadas en un único enlace privado para uso de vRack.
- **Activo - LAG doble**: OLA está preactivado; las interfaces físicas se dividen en dos agregados separados (uno público, uno privado).

> [!primary]
> **Nota:** El estado **Activo - LAG doble** es una configuración específica generalmente reservada para las gamas de servidores Scale y High-Grade, que cuentan con cuatro interfaces de red físicas.
>

### Restaurar OLA a los valores predeterminados

Para restablecer OLA a los valores predeterminados, haga clic en el botón `Desagregar redes`{.action} en la sección **Controladores de interfaz de red (NIC)**. Haga clic en `Confirmar`{.action} en el menú contextual.

La operación puede tardar unos minutos.

## Más información

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9 a través de ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

[Configurar un NIC para el servicio OVHcloud Link Aggregation en SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

Interactúe con nuestra [comunidad de usuarios](/links/community).
