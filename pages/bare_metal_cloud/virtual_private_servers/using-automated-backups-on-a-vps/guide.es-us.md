---
title: "Cómo utilizar los backups automatizados en un VPS"
excerpt: "Descubra cómo utilizar la opción de backup automatizado desde el área de cliente de OVHcloud para proteger los datos"
updated: 2025-08-07
---

## Objetivo

La opción backup automatizado para VPS es una forma cómoda de tener copias de seguridad completas del sistema disponibles desde el área de cliente de OVHcloud sin tener que conectarse al servidor para crearlas y restaurarlas manualmente. Otra ventaja es que también puede optar por montar una copia de seguridad y acceder a sus archivos de forma remota.

**Esta guía explica la opción de backup automatizado para su VPS OVHcloud.**

> [!primary]
> Antes de aplicar las opciones de copia de seguridad, le recomendamos que consulte las [preguntas frecuentes y demás páginas del producto](/links/bare-metal/vps-options) para acceder a una comparativa de los precios y otras informaciones.
>

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](/links/manager).
- Tener un [servidor privado virtual (VPS)](/links/bare-metal/vps) de OVHcloud ya configurado.
- Tener acceso de administrador (sudo) a su servidor virtual privado (VPS) a través del protocolo/programa SSH (opcional).

## Procedimiento

### Introducción al contenido

- [Cómo actualizar a backup automatizado Premium](#premium)
- [Configurar la hora del backup](#time)
- [Restaurar una copia de seguridad desde el área de cliente de OVHcloud](#restore)
- [Cómo montar y acceder a un backup](#mount)
    - [En Secure Shell](#shell)
    - [En Windows](#windows)
- [Buenas prácticas para utilizar el backup automatizado](#bestpractice)
    - [Configuración del agente QEMU en un VPS](#qemu)
        - [Distribuciones Debian](#deb)
        - [Distribuciones Redhat](#red)
        - [Windows](#win)


Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores Privados Virtuales`{.action}.

Al contratar un VPS, la opción de servicio gratuito incluye una única copia de seguridad automática diaria. Esta opción de backup estándar le permite:

- Montar y restaurar la copia de seguridad diaria.
- Establecer la hora de creación de esta copia de seguridad.

Para mayor flexibilidad en sus backups, puede activar la opción backup automatizado Premium.

<a name="premium"></a>

### Cómo actualizar a backup automatizado Premium

La actualización a backup automatizado Premium mejora su opción de backup automático a un backup diario continuo de 7 días. Esto le permite volver a versiones de backup más antiguas en comparación con la rotación de 24 horas de la opción estándar.

Una vez seleccionado el VPS, haga clic en la pestaña `Backup automatizado`{.action} del menú horizontal.

Haga clic en el enlace `Contratar un backup automatizado premium`{.action}.

![autobackupvps](images/backup_vps.png){.thumbnail}

<a name="time"></a>

### Configurar la hora del backup

Puede cambiar la hora en la que se realizará la copia de seguridad.

Una vez seleccionado el VPS, haga clic en la pestaña `Backup automatizado`{.action} del menú horizontal.

Haga clic en `...`{.action} encima de la tabla y, seguidamente, en `Editar`{.action}.

![autobackups](images/backup_vps_time01.png){.thumbnail}

Se abrirá una ventana en la que podrá cambiar la hora del día (UTC 24 horas). Haga clic en `Confirmar`{.action}.

![autobackups](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
> Una vez validado en el área de cliente, el cambio será efectivo en un plazo de 24 a 48 horas.
>

<a name="restore"></a>

### Restaurar una copia de seguridad desde el área de cliente de OVHcloud

Después de seleccionar su servidor virtual privado (VPS), haga clic en la pestaña `Backup automatizado`{.action} en el menú horizontal.  
Haga clic en `...`{.action} junto a la copia de seguridad que quiera restaurar y seleccione `Restauración`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Si recientemente ha cambiado su contraseña raíz, asegúrese de marcar la opción «Modificar la contraseña raíz al restaurar» en la ventana emergente para conservar su contraseña raíz actual y, seguidamente, haga clic en `Confirmar`{.action}. Recibirá un mensaje de correo electrónico tan pronto como se complete la tarea. En función del espacio en disco utilizado, la restauración puede tardar un rato en completarse.

> [!alert]
> Tenga en cuenta que las copias de seguridad automatizadas no incluirán sus discos adicionales.
>

<a name="mount"></a>

### Cómo montar y acceder a un backup

No es necesario sobrescribir íntegramente el servicio existente con una restauración. La opción «Montaje» le permite acceder a los datos de la copia de seguridad para recuperar sus archivos.

> [!warning]
>
> La configuración y la gestión de la serie de servicios que OVHcloud le ofrece recae sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
> El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un [proveedor especializado](/links/partner) y/o el editor del <i>software</i> del servicio si tiene alguna dificultad. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección [Más información](#go-further) de esta guía.
>

Haga clic en `...`{.action} junto a la copia de seguridad a la que necesite acceder y seleccione `Montaje`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Cuando se usa esta opción, se crea y monta una copia de seguridad de lectura y escritura. La copia de seguridad original seguirá estando disponible para futuras restauraciones.

Una vez completado el proceso, recibirá un mensaje de correo electrónico. Ahora, puede conectarse a su servidor virtual privado (VPS) y añadir la partición donde se encuentra su copia de seguridad.

<a name="shell"></a>

#### En Secure Shell

Primero, conéctese a su servidor virtual privado (VPS) a través del protocolo/programa Secure Shell (SSH).

Puede utilizar el comando siguiente para verificar el nombre del nuevo dispositivo conectado:

```bash
lsblk
```

A continuación, un resultado de muestra de este comando:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
```

En este ejemplo, la partición que contiene el sistema de archivos de la copia de seguridad se denomina «sdb1».
A continuación, cree un directorio para esta partición y defínalo como el punto de montaje:

```bash
sudo mkdir -p /mnt/restore
sudo mount /dev/sdb1 /mnt/restore
```

Ahora, puede cambiar a esta carpeta y acceder a los datos de su copia de seguridad.

Recuerde desmontar la copia de seguridad automática una vez que haya finalizado su uso. Haga clic en el botón `Desmontar el backup`{.action} en la pestaña `Backup automatizado`{.action} y acepte en la ventana que se abre.

![unmount](images/backup_vps_unmount.png){.thumbnail}

<a name="windows"></a>

#### En Windows

Establezca una conexión RDP (Remote Desktop) con su VPS.

Una vez que se haya conectado, haga clic derecho en el botón `Inicio`{.action} y abra el menú `Administración de discos`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

La copia de seguridad montada aparecerá como un disco básico con el mismo espacio de almacenamiento que el disco principal.

![mounted backup](images/windowsbackup2.png){.thumbnail}

El disco aparecerá como `Desactivada`, haga clic derecho en el disco y seleccione `En línea`{.action}.

![online backup](images/windowsbackup3.png){.thumbnail}

Más adelante podrá acceder a la copia de seguridad montada en `Explorador de archivos`.

![file explorer](images/windowsbackup4.png){.thumbnail}

Recuerde desmontar la copia de seguridad automática una vez que haya finalizado su uso. Haga clic en el botón `Desmontar el backup`{.action} en la pestaña `Backup automatizado`{.action} y acepte en la ventana que se abre.

![unmount](images/backup_vps_unmount.png){.thumbnail}

> [!warning]
>
> Tenga en cuenta que se reiniciará el servidor al desmontar la copia de seguridad.
>

<a name="bestpractice"></a>

### Buenas prácticas para utilizar la copia de seguridad automática

La función de backup automatizado está basada en los snapshots VPS. Le recomendamos que siga los pasos que se indican a continuación para evitar cualquier anomalía antes de utilizar esta opción.

<a name="qemu"></a>

#### Configuración del agente QEMU en un VPS

Los snapshots son imágenes instantáneas de su sistema en ejecución («live snapshots»). Para garantizar la disponibilidad de su sistema durante la creación del snapshot, el software QEMU permite preparar el sistema de archivos para este proceso.

El agente "**qemu-guest-agent**" no è installato di default sulla maggior parte delle distribuzioni. Además, las restricciones de licencia pueden impedir que OVHcloud lo incluya en las imágenes de los SO disponibles. Por lo tanto, le recomendamos que compruebe si este agente está activado en su VPS y, en caso negativo, que lo instale. Para ello, conéctese a su VPS por SSH y siga las instrucciones que se indican en función de su sistema operativo.

<a name="deb"></a>

##### **Distribuciones Debian (Debian, Ubuntu)**

Utilice el siguiente comando para comprobar si el sistema está configurado correctamente para los snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
```

El resultado esperado es el siguiente:

```console
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si el resultado es diferente, como «No such file or directory», instale la última versión del paquete:

```bash
sudo apt-get update
sudo apt-get install qemu-guest-agent
```

Reinicie el VPS:

```bash
sudo reboot
```

Inicie el servicio para garantizar que está en ejecución:

```bash
sudo service qemu-guest-agent start
```

<a name="red"></a>

##### **Distribuciones Redhat (CentOS, Fedora)**

Utilice el siguiente comando para comprobar si el sistema está configurado correctamente para los snapshots:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
```

El resultado esperado es el siguiente:

```console
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si el resultado es diferente, como «No such file or directory», instale y active el software:

```bash
sudo yum install qemu-guest-agent
sudo chkconfig qemu-guest-agent on
```

Reinicie el VPS:

```bash
sudo reboot
```

Inicie el software y compruebe que está en ejecución:

```bash
sudo service qemu-guest-agent start
sudo service qemu-guest-agent status
```

<a name="win"></a>

##### **Windows**

Puede instalar el agente a través de un archivo MSI, disponible en el sitio web del proyecto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Compruebe que el servicio está en ejecución con el siguiente comando PowerShell:

```console
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

<a name="go-further"></a>

## Más información

[Usar instantáneas en un servidor virtual privado (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using-snapshots-on-a-vps)

Interactúe con nuestra [comunidad de usuarios](/links/community).