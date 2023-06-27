---
title: Configurar un espejo de software (RAID) en Windows
excerpt: Cómo reconstruir la configuración de los discos de un servidor tras la sustitución de un disco
updated: 2023-03-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 28/03/2023**

## Objetivo

En un sistema Windows, la redundancia de los datos se garantiza poniendo en espejo del disco principal en un segundo disco. Esta configuración es similar a una configuración en RAID 1, pero solo afecta a dos discos.

**Esta guía explica cómo reconfigurar el espejo de disco de su sistema Windows si debe reconstruirse debido a una corrupción o a un fallo del disco.**

## Requisitos

- Un [servidor dedicado Windows](https://www.ovhcloud.com/es/bare-metal/) con espejo de software
- Acceso administrativo al servidor a través de RDP

## Procedimiento

Establezca una conexión RDP (Remote Desktop) con su servidor.

Una vez que se haya conectado, haga clic derecho en el botón del menú `Iniciar`{.action} y abra `Ejecutar`{.action}.

![Software mirror Windows](images/raid-soft-windows-01.png){.thumbnail}

Introduzca `cmd` y haga clic en `OK`{.action}.

![Software mirror Windows](images/raid-soft-windows-02.png){.thumbnail}

El método depende del tipo de partición de los discos. Siga las instrucciones de [esta sección](#mbr) para **MBR** o pase a la [siguiente sección](#gpt) para **GPT**. Si no está seguro, ejecute el comando `diskpart` en la consola de comandos e introduzca `list disk`. Compruebe la columna "Gpt" en el resultado proporcionado.

### Reconstrucción del espejo (esquema de partición MBR) <a name="mbr"></a>

En el pedido, abra DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart ejecuta los comandos sin enviar advertencias o solicitar confirmación. Cualquier modificación efectuada en DiskPart es irreversible. Por lo tanto, al introducir comandos, si se selecciona un disco o volumen erróneo, puede producirse una pérdida inmediata de datos y/o impedir el inicio del sistema. Le recomendamos que proceda con cuidado y compruebe cada pedido.
>

#### Lista de todos los discos y volúmenes


```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```

En este ejemplo, el `Disk 1` es un disco sustitutivo que se ha instalado para sustituir el `Disk M0` defectuoso que había sido [físicamente retirado](/pages/cloud/dedicated/disk_replacement) anteriormente.


> [!primary]
>
> Las secciones de código siguientes se muestran únicamente a modo de ilustración, en función del ejemplo de salida anterior. Deberá ajustar las instrucciones en función de su configuración real, sustituyendo los valores de los comandos por sus claves de disco y volumen.
>

#### Eliminación del disco reemplazado de la configuración

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```

#### Iniciando el disco de sustitución

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```

#### Recreación del espejo entre el primer y el segundo disco

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
<===>
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB      0 B   *

``` 

Repita este paso para cada volumen existente a partir del `Disk 0` que quiera poner en espejo en el `Disk 1`, utilizando la letra de lector asociada (por ejemplo, *d*, *e*, *f*, etc.).

El estado del volumen será `Rebuild` durante el proceso, lo que puede tardar varias horas en función de los datos almacenados en el disco. Puede comprobar el estado en DiskPart :
 
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

Es preferible no reiniciar el servidor hasta que el proceso de reconstrucción no haya finalizado.

### Reconstrucción del espejo (esquema de partición GPT) <a name="gpt"></a>

En el pedido, abra DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart ejecuta los comandos sin enviar advertencias o solicitar confirmación. Cualquier modificación efectuada en DiskPart es irreversible. Por lo tanto, al introducir comandos, si se selecciona un disco o volumen erróneo, puede producirse una pérdida inmediata de datos y/o impedir el inicio del sistema. Le recomendamos que proceda con cuidado y compruebe cada pedido.
>

#### Lista de todos los discos y volúmenes


```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

En este ejemplo, el `Disk 1` es un disco sustitutivo que se ha instalado para sustituir el `Disk M0` defectuoso que había sido [físicamente retirado](/pages/cloud/dedicated/disk_replacement) anteriormente.

> [!primary]
>
> Las secciones de código siguientes se muestran únicamente a modo de ilustración, en función del ejemplo de salida anterior. Deberá ajustar las instrucciones en función de su configuración real sustituyendo los valores de los comandos por sus claves de disco y volumen.
>

#### Eliminación del disco reemplazado de la configuración

```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Iniciando el disco de sustitución

En el nuevo disco, cree las particiones por defecto y obligatorias, reflejando la partición existente del primer disco:

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```

#### Recreación del espejo entre el primer y el segundo disco 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```

Repita este paso para cada volumen existente a partir del `Disk 0` que quiera poner en espejo en el `Disk 1`, utilizando la letra de lector asociada (por ejemplo, *d*, *e*, *f*, etc.).

#### Restauración del entorno de inicialización y definición de las opciones de inicialización del segundo disco

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

Vuelva a la línea de comandos y copie los archivos de inicio de la partición de arranque (EFI) en el primer disco (`Disk 0`) a la partición de arranque en el segundo disco (`Disk 1`).

Introduzca los siguientes 3 comandos y ejecutarlos cada uno con la tecla `Entrar`:

```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Reinicie DiskPart y ejecute los siguientes comandos:

```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

El estado del volumen será `Rebuild` durante el proceso, lo que puede tardar varias horas en función de los datos almacenados en el disco. Puede comprobar el estado en DiskPart :


```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

Es preferible no reiniciar el servidor hasta que el proceso de reconstrucción no haya finalizado.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.