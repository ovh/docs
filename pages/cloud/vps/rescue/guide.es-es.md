---
title: Activar el modo de rescate en un VPS
slug: rescue
excerpt: Cómo reiniciar un VPS en modo de rescate.
section: Diagnóstico y modo de rescate
---

**Última actualización: 24 de noviembre de 2020**

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

**Esta guía explica cómo reiniciar un VPS en modo de rescate.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Tener ya configurado su [VPS de OVHcloud](https://www.ovhcloud.com/es/vps/){.external}.

> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Procedimiento

### Activación del modo de rescate

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Cloud`{.action} de la bare metal y seleccione el servidor de la lista de navegación de la izquierda con `VPS`{.action}.

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

Ahora puede conectarse a su VPS por SSH utilizando las claves de acceso del modo de rescate. Una vez que haya activado el modo de rescate, reinicie el VPS en modo "normal" desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Más información

[Cambiar la contraseña «root» de un VPS](../root-password/)

[Introducción al SSH](../../dedicated/introduccion-ssh/)

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
