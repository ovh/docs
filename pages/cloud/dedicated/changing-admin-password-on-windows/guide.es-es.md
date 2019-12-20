---
title: 'Cambiar la contraseña de administrador en un servidor dedicado Windows'
slug: "cambiar-contrasena-administrador-en-servidor-windows"
excerpt: 'Cómo cambiar la contraseña de administrador en un servidor dedicado Windows'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 07/09/2018**

## Objetivo

Al instalar o reinstalar un sistema operativo Windows, recibirá una contraseña para acceder como administrador. Como se explica en la guía [Proteger un servidor dedicado](https://docs.ovh.com/es/dedicated/seguridad-de-un-servidor-dedicado/){.external}, le aconsejamos encarecidamente que cambie esta contraseña. También es posible que necesite cambiarla porque la haya perdido.

**Esta guía explica cómo cambiar la contraseña de administrador en un servidor dedicado Windows.**


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external} con Windows instalado.
* Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

Reinicie el servidor en modo de rescate utilizando la herramienta WinRescue. Si necesita ayuda, consulte nuestra guía sobre el [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}. 

Una vez que haya reiniciado, abra la pestaña `IPMI`{.action} del servidor en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Para más información sobre la función IPMI, consulte la guía [Utilizar IPMI en un servidor dedicado](https://docs.ovh.com/es/dedicated/utilizar-ipmi-servidor-dedicado/){.external}.
>

Active el IPMI utilizando el applet Java o desde su navegador. Una vez que haya iniciado la sesión IPMI, haga doble clic en la herramienta NTPWEdit del servidor en el escritorio WinRescue.

![NTPWEdit](images/ntpwdi-tool-01.png){.thumbnail}

A continuación, haga clic en el botón `(Re)open`{.action} para ver las cuentas de usuario disponibles.

![NTPWEdit](images/ntpwdi-tool-02.png){.thumbnail}

Seleccione en la lista el usuario `root`{.action} y haga clic en el botón Change password.

![NTPWEdit](images/ntpwdi-tool-03.png){.thumbnail}

Por último, introduzca la nueva contraseña en los dos campos y haga clic en `OK`{.action}.

![NTPWEdit](images/ntpwdi-tool-04.png){.thumbnail}

La contraseña se habrá cambiado. Salga de esta herramienta, cierre la sesión IPMI y reinicie el servidor en modo normal.


## Más información

[Activar y utilizar el modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}

[Utilizar IPMI en un servidor dedicado](https://docs.ovh.com/es/dedicated/utilizar-ipmi-servidor-dedicado/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.