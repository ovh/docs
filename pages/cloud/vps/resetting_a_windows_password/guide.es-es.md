---
title: 'Restaurar una contraseña Windows'
slug: restaurar-una-contrasena-windows
excerpt: Guía para restaurar una contraseña en Windows
section: Diagnóstico y modo de rescate
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 26/11/2020**

## Objetivo

Es posible que deba restaurar una contraseña en su VPS con Windows. Esta guía explica cómo restaurar la contraseña de un VPS con facilidad.

## Requisitos

- El VPS debe estar en modo de rescate (para más información, consulte [Activar el modo de rescate en un VPS](../rescue)).

## Procedimiento

Conéctese al VPS desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) con las claves de conexión que habrá recibido por correo electrónico.

Escriba los siguientes comandos para montar el sistema de archivos remoto:

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

A continuación, inicie el procedimiento de recuperación de la contraseña:

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

Verán una lista de usuarios. Por favor, tome nota de la cuenta de administrador (o de una cuenta cuya contraseña deba restaurar). En este ejemplo, vamos a utilizar la cuenta `Administrator`. Tenga en cuenta que los comandos son sensibles a mayúsculas y minúsculas.

```sh
chntpw -u Administrator SAM
```

Pulse `1`{.action} e `Intro`{.action} para borrar la contraseña. Pulse `q`{.action} para salir de la consola de órdenes de cambio de contraseña. A continuación, pulse `y`{.action} para escribir los cambios.

Ya puede sacar el VPS del modo de rescate. (para más información, consulte la guía [Activar el modo de rescate en un VPS](../rescue))

La próxima vez que se conecte, no tendrá que introducir una contraseña para la sesión en la que haya cambiado la contraseña.

> [!warning]
>
> Es extremadamente riesgoso dejar la cuenta de administrador (o cualquier cuenta con altos permisos) con una contraseña vacía. Conéctese inmediatamente a su instalación de Windows para restaurar su contraseña.
> 

Una vez que se haya conectado a su sesión, haga clic en `CTRL`{.action} + `ALT`{.action} + `DELETE`{.action} y, a continuación, haga clic en `Cambiar una contraseña`{.action}. Si utiliza VNC, haga clic en el botón de la esquina superior derecha `Send CtrlAltDel`{.action}.

Deje el campo `Contraseña` antigua en blanco y escriba su nueva contraseña dos veces. Compruebe que la contraseña es la misma.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
