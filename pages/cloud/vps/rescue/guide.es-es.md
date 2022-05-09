---
title: Activar y utilizar el modo de rescate en un VPS
slug: rescue
excerpt: Cómo reiniciar un VPS en modo de rescate.
section: Diagnóstico y modo de rescate
---

**Última actualización: 02/05/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

El modo de rescate es una herramienta de su VPS. que permite arrancar el servidor en un sistema operativo temporal. Así podrá diagnosticar y resolver problemas en su sistema operativo principal. 

En modo de rescate, podrá:

  - cambiar la contraseña root;
  - diagnosticar problemas de red;
  - reparar un sistema operativo defectuoso;
  - corregir una configuración incorrecta del cortafuegos de software;
  - probar el rendimiento del disco.

Realizar comprobaciones en modo de rescate también le ayudará a determinar si un problema está relacionado con el software o el hardware. Le recomendamos que lo haga antes de ponerse en contacto con nuestro equipo de soporte.

> [!warning]
>
> Si tiene servicios en producción en su VPS, el modo de rescate los interrumpe mientras la máquina no se haya reiniciado en modo normal.
> 

**Esta guía explica cómo activar y utilizar el modo de rescate en un VPS.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Tener ya configurado su [VPS de OVHcloud](https://www.ovhcloud.com/es/vps/){.external}.

> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Procedimiento

### Activación del modo de rescate

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores Privados Virtuales`{.action}.

#### Con una solución VPS actual

En la pestaña `Inicio`{.action}, haga clic en `...`{.action} junto al botón derecho en la zona **Su VPS**.

![configuración del modo de rescate](images/rescue_new.png){.thumbnail}

Seleccione `Reiniciar en modo de rescate`{.action} en el menú.

#### Con una antigua solución de VPS

En la pestaña `Inicio`{.action}, haga clic en el enlace de acceso rápido `Reiniciar en modo de rescate`{.action}.

![configuración del modo de rescate](images/rescue_legacy.png){.thumbnail}

Se abrirá una ventana en la que deberá hacer clic en `Confirmar`{.action} para iniciar el reinicio en modo de rescate.

### Uso del modo de rescate

Una vez que haya iniciado el reinicio, una barra de progreso mostrará el progreso de la tarea. Tenga en cuenta que puede tardar varios minutos.

> [!primary]
>
> Recibirá un email automatizado con las claves de acceso SSH para acceder al modo de rescate. Espere a que se reciba el mensaje de correo antes de tomar cualquier otra medida. Este mensaje de correo electrónico también está disponible en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Para ello, haga clic en el nombre asociado a su ID de cliente de OVHcloud en la esquina superior derecha y seleccione `Correo electrónico del servicio`{.action}.
>

A continuación, acceda al servidor en línea de comandos o a través de una herramienta SSH, utilizando la contraseña root generada para el modo de rescate.

Por ejemplo:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> Es probable que su cliente SSH bloquee la conexión en primer lugar, debido a la incompatibilidad de la huella ECDSA. Esto es normal, ya que el modo de rescate utiliza su propio servidor SSH temporal.
>
> Para evitar este problema, puede comentar la huella de su sistema habitual añadiendo una `#` delante de su línea en el archivo *known_hosts*. Elimine este carácter antes de reiniciar el servidor en modo normal.
>
Para realizar la mayoría de los cambios en el servidor por SSH en modo de rescate, es necesario montar una partición. Este modo tiene su propio sistema de archivos temporales. Por lo tanto, los cambios realizados en el sistema de archivos en modo de rescate se perderán al reiniciar el servidor en modo normal.

Una vez que se haya conectado, compruebe los discos disponibles con el siguiente comando:

```bash
[RESCUE] root@vps-111111d:~ $ lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 2.5G 0 disk
└─sda1 8:1 0 2.5G 0 part /
sdb 8:16 0 80G 0 disk
└─sdb1 8:17 0 80G 0 part
```

A continuación, monte la partición:

```bash
[RESCUE] root@vps-111111d:~ $ mount /dev/sdb1 /mnt
```

Sus datos serán ahora accesibles desde la carpeta `/mnt`.

Una vez que haya completado sus acciones en el modo de rescate, reinicie el VPS en modo "normal" desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

## Más información

[Cambiar la contraseña «root» de un VPS](../root-password/)

[Introducción al SSH](../../dedicated/introduccion-ssh/)

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
