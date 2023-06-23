---
title: Cambiar la contraseña «root» de un VPS
slug: root-password
excerpt: Cómo cambiar la contraseña «root» de un VPS
section: Diagnóstico y modo de rescate
updated: 2023-06-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Si necesita cambiar la contraseña root en su sistema operativo Linux, Existen dos posibles escenarios:

- Todavía puede conectarse por SSH.
- No puede conectarse por SSH porque ha perdido la contraseña.

**Esta guía explica cómo cambiar la contraseña de administrador en función de estas dos situaciones.**

## Requisitos

- Tener su [VPS OVHcloud](https://www.ovhcloud.com/es/vps/){.external} ya configurado.
- Disponer de las claves de acceso recibidas por correo electrónico después de la instalación (si siguen siendo válidas).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} (para utilizar el modo de rescate).

> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Procedimiento

### Modificación de la contraseña si siempre tiene acceso (sudo o root)

> [!primary]
>
> Para más información sobre la conexión a su VPS, consulte nuestra guía [Primeros pasos con un VPS](../primeros-pasos-con-vps/).
>

Conéctese a su VPS por SSH. Cambie al usuario root si fuera necesario:

```bash
sudo su -
#
```

Cambie la contraseña del usuario actual:

```bash
passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> En una distribución Linux, la contraseña que introduzca **no aparecerá**.
>

Si desea autorizar la conexión como usuario root, siga los pasos de [esta sección](./#activar-la-contrasena-root).

### Modificación de la contraseña si la ha perdido

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Etapa 1: Reinicie el VPS en modo de rescate.

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y reinicie el VPS en modo de rescate. Si necesita instrucciones adicionales sobre el uso del modo de rescate con un VPS, consulte la [guía del modo de rescate](../rescue/).

#### Etapa 2: Identificar el punto de montaje

En las antiguas gamas de VPS, las particiones se montarán automáticamente en modo de rescate. Puede utilizar los siguientes comandos para identificar el punto de montaje de la partición:

##### **df -h**

```bash
df -h
```

```console
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### **lsblk**

```bash
lsblk
```

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

El ejemplo anterior muestra que la partición del sistema está montada en **/mnt/sdb1**.

Si su VPS es reciente, la columna `MOUNTPOINT` debería estar vacía. En ese caso, monte primero la partición:

```bash
mkdir -p /mnt/sdb1
mount /dev/sdb1 /mnt/sdb1
```

#### Etapa 3: autorizaciones CHROOT

Ahora debe modificar el directorio raíz para aplicar los cambios al sistema. Para ello, utilice el comando `chroot`:

```bash
chroot /mnt/sdb1/
```

Puede realizar una comprobación introduciendo el comando `ls -l`, que muestra el contenido almacenado en el directorio actual del sistema:

```bash
ls -l
```

#### Etapa 4: Cambiar la contraseña (root)

En el último paso, cambie la contraseña utilizando el comando `passwd`.

```bash
passwd

New password:
Retype new password:
passwd: password updated successfully
```

Si su VPS es de última generación (su nombre es: *vps-XXXXXXX.vps.ovh.net*), ha recibido inicialmente las claves de acceso para un usuario con permisos importantes, en lugar de la cuenta "root" por defecto. Además, el servicio SSH no acepta las solicitudes de conexión como root.

Introduzca el nombre de usuario que utilice para conectarse después de `passwd`:

```bash
passwd username
New password:
Retype new password:
passwd: password updated successfully
```

De este modo, podrá volver a conectarse con el nombre de usuario después del reinicio, en caso de que la conexión root esté desactivada.

Por último, reinicie su VPS en su disco desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).


### Activar la contraseña root <a name="enableroot"></a>

Si su VPS es de última generación (su nombre es: *vps-XXXXXXX.vps.ovh.net*), ha recibido unas claves de conexión para un usuario con permisos importantes, en lugar de la cuenta "root" por defecto. Además, el servicio SSH no acepta las solicitudes de conexión como root.

> [!warning]
>
> La activación de la contraseña root se considera generalmente una vulnerabilidad a la seguridad, por lo que no se recomienda.
>
> Le recomendamos que primero tome medidas para proteger su VPS. Para más información, consulte nuestra guía sobre la [seguridad de un VPS](../consejos-proteccion-vps/).
>

#### Etapa 1: Editar el archivo sshd_config

Utilice un editor de texto como vim o nano para modificar este archivo de configuración:

```bash
sudo nano /etc/ssh/sshd_config
```

Añada la siguiente línea.

```bash
~$ PermitRootLogin yes
```

Busque esta línea y asegúrese de que se comenta:

```text
#PermitRootLogin prohibit-password
```

Guarde el archivo y salga del editor.

#### Etapa 2: Reiniciar el servicio SSH

Reinicie el servicio SSH con uno de los siguientes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Esto debería ser suficiente para aplicar los cambios. También puede reiniciar el VPS (`~$ sudo reboot`).

### Disfuncionamiento

Si tiene problemas de inicio después de cambiar la contraseña e iniciar el reinicio:

- Consulte el KVM para saber por qué el VPS no puede empezar. Para más información sobre el uso de esta funcionalidad, consulte la [guía KVM](../utilizar_el_kvm_para_los_vps/) del área de cliente de OVHcloud.
- Si el KVM muestra el inicio del VPS o no consigue encontrar el disco, asegúrese de que el [bootlog esté activado](../boot-log/). Transmita los logs pertinentes a nuestro equipo de soporte creando una solicitud de soporte en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para más información.

## Más información

[Introducción al SSH](../../dedicated/introduccion-ssh/)

[Proteger un VPS](../consejos-proteccion-vps/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
