---
title: Activar y utilizar el modo de rescate en un VPS
excerpt: Descubra cómo utilizar el modo de rescate de OVHcloud para solucionar los problemas de su VPS y realizar comprobaciones del sistema
updated: 2025-01-12
---

## Objetivo

El modo de rescate (*rescue*) es una herramienta proporcionada por OVHcloud para arrancar su VPS en un sistema operativo temporal. A continuación, puede acceder al sistema para realizar tareas de diagnóstico y solucionar problemas como los siguientes:

- [Restablecimiento de la contraseña del usuario para recuperar el acceso](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnóstico de problemas de red
- Reparar un sistema operativo defectuoso
- Reparar un firewall de software mal configurado
- Prueba de rendimiento del disco

Si experimenta algún problema con el sistema, la realización de comprobaciones en modo de rescate le permitirá determinar si está relacionado con un programa instalado en el VPS o si existe una causa más profunda. Antes de ponerse en contacto con nuestro equipo de soporte, le recomendamos que utilice el modo de rescate para recopilar los resultados de las pruebas y excluir los errores de software.

> [!warning]
>
> Si algunos de sus servicios siguen en línea, el modo de rescate los interrumpirá en el momento en que el servidor se reinicie en el entorno de respaldo auxiliar.
>

**Esta guía explica cómo activar el modo de rescate desde el área de cliente de OVHcloud y cómo utilizarlo para acceder a su sistema de archivos VPS.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Tener ya configurado su [VPS de OVHcloud](/links/bare-metal/vps).

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, es su responsabilidad asegurarse de que funcionen correctamente.
>
> Esta guía está diseñada para ayudarle en las tareas comunes tanto como sea posible. No obstante, le recomendamos que se ponga en contacto con un [proveedor de servicios especializados](/links/partner) o con [nuestra comunidad](/links/community) si tiene algún problema.
>

## Procedimiento

### Activación del modo de rescate

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidores privados virtuales`{.action}.

En la pestaña `Inicio`{.action}, haga clic en `...`{.action} junto al botón derecho en la zona **Su VPS**.

![Rescue](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_rescue.png){.thumbnail}

Seleccione `Reiniciar en modo de rescate`{.action} en el menú.

### Uso del modo de rescate

Una vez iniciado el reinicio, aparecerá una barra de progreso que le indicará la duración de la tarea. Tenga en cuenta que esto puede tardar varios minutos.

> [!primary]
>
> Recibirá un mensaje de correo electrónico automático con las claves SSH para acceder al modo de rescate. Por favor, espere la recepción del email antes de continuar con cualquier acción. Este mensaje de correo electrónico también puede consultarse en el [área de cliente de OVHcloud](/links/manager). Para localizarlo, haga clic en el nombre asociado a su identificador de OVHcloud en la barra de menús situada en la esquina superior derecha y seleccione `Correo electrónico del servicio`{.action}.
>

> [!warning]
> Tenga en cuenta que si ya no es el contacto técnico del servidor, no recibirá el correo electrónico. Para obtener más información, consulte nuestra guía: «[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)».
>

A continuación, deberá [acceder al servidor por SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), utilizando la contraseña temporal generada para el modo de rescate.

Ejemplo:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!primary]
>
> Su cliente SSH bloqueará normalmente la conexión al principio debido a una incompatibilidad de la huella digital ECDSA. Esto es normal porque el modo de rescate utiliza su propio servidor SSH temporal. Para resolver este problema, edite el archivo `known_hosts` de su carpeta local `.ssh`.  
> Existen dos posibilidades:
>
> - **Eliminar la huella digital del archivo.** El cliente SSH añadirá una nueva huella digital al servidor cuando deje de utilizar el modo de rescate. Para más información, consulte «Login y fingerprint» en nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Desactivar temporalmente la huella digital.** Abra el archivo `known_hosts` con un editor de texto e identifique la cadena de huella digital de su servidor por su dirección IP. Agregue el carácter `#` al principio de la línea. Por lo tanto, esta línea ahora es un "comentario" y será ignorada por las aplicaciones que leen el archivo. No olvide deshacer este cambio antes de reiniciar el VPS.
>

Para realizar la mayoría de los cambios en el servidor por SSH en modo de rescate, deberá montar la partición del sistema.

Una vez conectado, compruebe los discos asociados con este comando:

```bash
lsblk
```

El resultado será similar al siguiente ejemplo de salida:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

En modo rescue, `sda` es el disco en modo rescue y `sda1` es la partición de seguridad principal montada en `/`.

En este ejemplo, el disco principal del VPS es `sdb` y la partición del sistema es `sdb1` (indicada por el tamaño).

Monte esta partición con el siguiente comando:


```bash
mount /dev/sdb1 /mnt/
```

Ya puede acceder a sus archivos desde el punto de montaje `/mnt`:


```bash
cd /mnt
```

```bash
ls
```

Verá su sistema de archivos:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Sin embargo, antes de poder manipular esta partición, debe abrirla para acceso de escritura, lo que puede hacer con el siguiente comando:

```bash
chroot /mnt
```

Ahora puede aplicar cambios al sistema, por ejemplo, [restablecer contraseñas de usuario y claves SSH](#gofurther).

Una vez que haya completado las acciones en modo de rescate, reinicie el VPS en modo normal desde el área de cliente.

![rescue modo control panel](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

### Resolver problemas de inicio

Si se produce un error al reiniciar un VPS, siga estos pasos:

- Compruebe el KVM en el área de cliente para obtener información sobre los motivos por los que el VPS no puede iniciarse. Para más información, consulte nuestra [guía KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
- Si el KVM indica que el VPS está bloqueado al inicio o no puede encontrar el disco, asegúrese de que [los logs de inicio están activados](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Envíe los logs pertinentes a nuestro equipo de soporte para más investigaciones [creando una solicitud de asistencia](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Más información

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Recuperar el acceso al servidor en caso de pérdida de la contraseña de usuario](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Sustituir un par de claves SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Comprobar el sistema de archivos en un VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
