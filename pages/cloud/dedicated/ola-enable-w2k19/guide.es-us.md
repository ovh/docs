---
title: 'Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019'
slug: ola-w2k19
excerpt: 'Activar el servicio OVHcloud Link Aggregation en un servidor «Windows Server 2019»'
section: 'Uso avanzado'
order: 4
updated: 2021-03-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 25/03/2021**

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible.

**Esta guía explica cómo conectar sus NIC (Network Interface Controller) para utilizarlos con el servicio OLA en Windows Server 2019.**

## Requisitos

- [Configurar un NIC para el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](../ola-manager){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Nuestros NIC en OLA tienen una configuración privada-privada, por lo que no es posible acceder al servidor por SSH. Así pues, es necesario utilizar la herramienta IPMI para acceder al servidor.
<br>Para ello, en primer lugar, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). En la pestaña `Bare Metal Cloud`{.action}, haga clic en `Servidores dedicados`{.action} y seleccione el servidor. A continuación, abra la pestaña `IPMI`{.action} (1).

Haga clic en el botón `Desde un applet Java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Se descargará un programa JNLP. Abra el programa una vez descargado para acceder a IPMI  e introduzca las claves asociadas al servidor.

Una vez dentro del servidor, abra el gestor de servidor. Si no aparece abierto por defecto, lo podrá ver anclado al menú Inicio.

![server manager](images/local_server.png){.thumbnail}

Una vez haya abierto el gestor de servidor, haga clic en la pestaña **Servidor Local** en el menú de la izquierda. Haga clic en el botón **Deshabilitado** junto a «NIC Teaming.»

![local server](images/server_manager.png){.thumbnail}

En la ventana emergente de NIC Teaming, haga clic en el botón ««Nuevo Equipo»» del menú desplegable **TAREAS** en la sección «EQUIPOS».

![nic teaming](images/nic_teaming.png){.thumbnail}

Asigne un nombre a su equipo y compruebe los NIC que quiere usar con el servicio OLA. Haga clic en la flecha desplegable junto a «Propiedades adicionales» y cambie el «Modo Teaming» a LACP. Una vez que haya confirmado que la información es correcta, haga clic en **OK**.

![new team](images/new_team.png){.thumbnail}

El equipo NIC puede tardar unos minutos en aparecer en línea. Cuando ya figure en línea, haga clic en el icono de conexión de red en la esquina inferior derecha.  Después, haga clic en el botón **Configuración de red e internet**.  Haga clic en el botón **Ethernet** en el menú de la izquierda de la ventana emergente.

![network button](images/network_button.png){.thumbnail}

Haga clic en **Cambiar las opciones del adaptador**.

![ethernet](images/ethernet.png){.thumbnail}

A continuación, haga clic derecho sobre su equipo NIC y seleccione **Propiedades** en el menú desplegable.

![properties](images/properties.png){.thumbnail}

En la ventana emergente siguiente, haga doble clic en el botón **Protocolo de Internet versión 4 (TCP/IPv4)**.

![ipv4](images/ipv4.png){.thumbnail}

Haga clic en el botón junto a «Utilizar la siguiente dirección IP» y añada la IP privada y la subred que haya elegido. Haga clic en **OK** una vez haya confirmado que la configuración es correcta.

![ipv42](images/ipv42.png){.thumbnail}

Para comprobar que el equipo NIC funciona correctamente, haga ping en otro servidor en el mismo vRack.  Si funciona, la configuración se ha realizado correctamente. En caso contrario, compruebe que la configuración es correcta o reinicie el servidor.

## Más información

[Configurar el servicio OVHcloud Link Aggregation desde el área de cliente de OVHcloud](../ola-manager/)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9](../ola-debian9/)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en CentOS 7](../ola-centos7/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
