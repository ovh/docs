---
title: Restablecer una contraseña de Windows caducada.
excerpt: Esta guía le mostrará cómo restablecer su contraseña caducada.
slug: windows-caducada-contraseña-restablecer
section: Diagnóstico y modo de rescate
order: 5
---

## Objectivo

Cuando instala o reinstala un sistema operativo Windows, todas las cuentas tienen una fecha de vencimiento predeterminada de 42 días. Cuando una contraseña caduca, el acceso RDP a esa cuenta se deshabilita. Deberá cambiar la contraseña para recuperar los accesos.

**Esta guía lo llevará a través del proceso de restablecimiento de la contraseña.**

## Requerimientos

- Un [servidor dedicado](https://www.ovh.com/world/es/servidores-dedicados/){.external} con Windows instalado.
- Acceso al [panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}

## Instrucciones

### Usando el IPMI

Primero, inicie sesión en la página de su servidor en su [Panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Una vez allí, seleccione la pestaña `IPMI`{.action}. 

>[!primary]
>
>Para obtener información detallada sobre cómo usar la función IPMI, consulte nuestra [guía IPMI](../utilizar-ipmi-servidor-dedicado/) .external}.
>

A continuación, active la función IPMI utilizando el applet de Java o su navegador. Una vez iniciada la sesión de IPMI, inicie sesión en su cuenta de administrador con sus credenciales actuales.

![IPMI](images/ipmi.png){.thumbnail}

Ahora debería recibir un mensaje indicado que su contraseña ha caducado y debe cambiarse. Haga clic en `Aceptar` {.action}.

![IPMI](images/expiredpassword.png){.thumbnail}

Ahora ingrese una nueva contraseña y confírmela con los campos otorgados.

![IPMI](images/changepassword.png){.thumbnail}

Su contraseña ahora ha sido cambiada. Ahora puede acceder una vez más al servidor utilizando RDP.

### Usando el modo rescate

Primero, inicie su servidor en [modo de rescate](../modo_de_rescate) {.external} utilizando el entorno de arranque WinRescue. Una vez que el servidor se haya reiniciado, inicie sesión con un visor VNC o seleccione la pestaña `IPMI` {.action} en la página de su servidor en su {Panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

A continuación, abra la herramienta NTPWdi. Si no aparece allí, puede descargarlo [aquí](http://cdslow.org.ru/files/ntpwedit/ntpwed07.zip){.external}.

![NTPWedit](images/ntpwedit-1.png){.thumbnail}

A continuación, haga clic en el botón `Open` {.action} para mostrar una lista de cuentas de usuario
disponibles.

![NTPWedit](images/ntpwedit-2.png){.thumbnail}

Ahora seleccione la cuenta de administrador de la lista y haga clic en el botón `Change Password` {.action}

![NTPWedit](images/ntpwedit-3.png){.thumbnail}

Ingrese la nueva contraseña dos veces y haga clic en `OK` {.action}

![NTPWedit](images/ntpwedit-4.png){.thumbnail}

Finalmente, haga clic en el botón `Unblock` {.action}.

![NTPWedit](images/ntpwedit-5.png){.thumbnail}

Su contraseña ahora ha sido cambiada. Salga de la herramienta, cierre la sesión y reinicie su servidor en modo normal.

## Mas Infomacions
[Modo de rescate](../modo_de_rescate)

[guía IPMI](../utilizar-ipmi-servidor-dedicado/)


