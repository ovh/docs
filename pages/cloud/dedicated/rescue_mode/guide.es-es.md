---
title: Modo de rescate
excerpt: Cómo utilizar el modo de rescate
slug: modo_de_rescate
legacy_guide_number: g920
section: Diagnóstico y modo de rescate
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 
En OVH hay dos modos de rescate: el modo «rescue-pro» y el modo «WinRescue». Están disponibles en el área de cliente dedicado.

El modo de rescate permite acceder a la máquina por SSH y comprobar el hardware. 

Algunos ejemplos de operaciones que pueden realizarse en modo de rescate:

## Modo rescue-pro (Linux):

- Ejecutar un fsck/e2fsck
- Consultar y analizar logs
- Corregir problemas de software
- Reconstruir/Verificar el RAID
- Guardar copia de los datos



## Interfaz de comprobación de hardware:

- memtest: para controlar la memoria (RAM)
- cpuburn: para verificar el procesador (CPU)
- fsck: para comprobar el sistema de archivos
- state: para verificar el disco
- explorer: para navegar en la estructura de archivos



## Modo WinRescue (Windows):

- Gestión de archivos: explorador de archivos, cliente FTP, archivado
- Gestión de las contraseñas: para cambiar o eliminar las contraseñas de las cuentas de usuario del sistema Windows
- Herramientas del servidor: consola, antivirus, lector virtual
- Navegador de internet
- Gestión de los discos: Testdisk, Diskpart, Bootsect


Si alguna de las pruebas no puede realizarse o da error, contacte con el soporte indicando el resultado de la prueba. Para ello, acceda al área de cliente, en el enlace «Soporte» de la barra superior.


## 1. Activar el modo rescue-pro
El modo rescue-pro es un sistema operativo basado en Linux (Debian) que se carga en el servidor desde la red. Este sistema operativo es totalmente independiente del que está instalado en el servidor.

## Atención:
No utilizar la interfaz web y el SSH a la vez. Si ejecuta el check de los discos desde la interfaz web y monta las particiones por SSH, puede provocar la pérdida de los datos.
Acceda al área de cliente dedicado y seleccione el servidor en la columna izquierda. En la pestaña «Estado del servidor», en «Información general» > «Boot», haga clic en «Editar», seleccione «Iniciar en modo rescue» y elija la configuración rescue-pro.

Tenga en cuenta que una vez seleccionado el modo rescue-pro, el servidor no reiniciará automáticamente para cargar el sistema de rescate en el servidor, sino que usted deberá reiniciarlo. Puede hacerlo por software conectándose al servidor, o por hardware solicitando el corte de la alimentación del servidor desde el área de cliente.

Se recomienda reiniciar la máquina por software (por SSH: reboot) cuando sea posible. No realizar el reinicio por hardware a menos que no tenga otra alternativa (botón «Reiniciar» del área de cliente).

## Atención:
El reinicio por hardware solo está recomendado en caso de que no tenga acceso al servidor. Existe riesgo de corrupción de datos, ya que es el equivalente a un reseteo eléctrico.
Enviaremos el enlace y la contraseña para acceder al servidor en modo de rescate por correo electrónico al administrador del servidor registrado en nuestras bases de datos.
Si ha recibido un mensaje de correo electrónico indicándole que su servidor está en modo de rescate y comunicándole la contraseña root, por lo general significa que se ha detectado un fallo en el servidor y que el técnico del centro de datos no ha tenido más opción que reiniciarlo en modo de rescate (fallo de software, por ejemplo con GRUB).


## 2. Comprobación del hardware
Una vez en modo rescue-pro, podrá ver la interfaz desde la que podrá realizar pruebas de hardware en su servidor:

![](images/img_953.jpg){.thumbnail}
Esta interfaz gráfica, que está disponible inmediatamente después de haber puesto el servidor en modo rescue-pro, le permitirá probar la CPU, la RAM, los discos y la red.

Está disponible en la siguiente dirección: http://ip.del.servidor:81/. Los parámetros de conexión son los mismos que los enviados por correo electrónico.

## Lista de las herramientas de diagnóstico:

- Hard Drives: Permite ver los discos instalados en el servidor y su estado de salud (SMART).
- Processors: Comprueba el procesador y la refrigeración. Es posible que el informe no se muestre y que el servidor se reinicie o se bloquee. Eso indicaría la existencia de un problema. Contacte con el soporte para planificar en el momento que más le convenga una comprobación de la refrigeración del procesador.
- Partitions State: Verifica los discos.
- Partitions File System: Comprueba el sistema de archivos. A menudo, una incoherencia en el sistema de archivos se confunde con el fallo de un disco duro. En este caso, suele ser suficiente reinstalar el sistema operativo para que todo vuelva a funcionar, especialmente cuando el servidor pone archivos en la carpeta lost+found. Atención: No olvide realizar copias de seguridad de sus datos antes de realizar una reinstalación.
- Partitions Explore: Permite explorar los archivos. No es posible editarlos a través de esta utilidad, pero podemos guardar una copia, por ejemplo. Importante: Es posible leer los logs de la máquina sin necesidad de hacerlo por SSH. Algunos sistemas de archivos podrían no ser compatibles con esta herramienta.
- Memory: Comprueba la RAM. Tenga en cuenta que un memtest consume mucha CPU. Si el test se queda bloqueado o se cuelga la máquina, es posible que la CPU esté mal refrigerada o rota. Si el fallo es de la RAM, un informe con los errores lo indicará al finalizar la prueba.


No todos los problemas pueden detectarse desde esta interfaz, como los reinicios irregulares, etc. Si las pruebas realizadas no muestran ningún problema en el servidor, pero tiene algún problema que cree que se debe al hardware, contacte con el soporte técnico, que analizará la situación y podrá planificar una comprobación del hardware del servidor por un técnico del centro de datos.

## Atención:
Hacia el 64% del test de la RAM puede aparecer el siguiente error: «Your server hasn't reacted for a least 20 seconds. it is probably down you can try to refresh the pageif the server crashed while doing a cpu test. it is possible that the cpu is faulty».
Puede aceptar, porque normalmente se debe a que la prueba que se ejecuta hacia el 64% es muy larga.


## 3. Rescue por SSH

## a. Conexión
Conéctese a la máquina por SSH como de costumbre.
Lo único que cambia es la contraseña, que deberá ser la contraseña «root» temporal que se envía por correo electrónico al poner la máquina en modo de rescate.

```
user:~$ ssh root@213.186.xx.yy
The authenticity of host '213.186.xx.yy (213.186.xx.yy)' can't be established.
RSA key fingerprint is 02:11:f2:db:ad:42:86:de:f3:10:9a:fa:41:2d:09:77.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '213.186.xx.yy' (RSA) to the list of known hosts.
Password:
rescue:~#
```


Ahora estará conectado, pero todavía no podrá acceder a los archivos. Es necesario montar previamente el sistema de archivos.

## b. Montaje de los discos
Normalmente, /dev/xda1 es la partición raíz (/) y /dev/xda2 corresponde a /home.

## Los discos serán de tipo:

- /dev/sd para SCSI, SATA, RAID Hard
- /dev/hd para los discos IDE
- /dev/md para los RAID Soft
- /dev/rd/c0d0p para los RAID Mylex
- /dev/ad4s1 para los sistemas FreeBSD


También puede utilizar las denominaciones devfs.

Si no sabe qué discos tiene ni cuál es su tabla de particiones, puede utilizar los comandos fdisk o parted. A continuación mostramos un ejemplo con el comando fdisk y lo que devuelve:


```
rescue:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```


En este caso, el servidor tiene dos dispositivos:

- /dev/hda: el asterisco (*) indica que es el disco de arranque. Tiene tres particiones: hda1, hda2 y hda3.
- /dev/sda: una memoria USB con una partición: sda1.


Para los discos duros que utilizan una tabla de particiones de tipo GPT, hay que utilizar la herramienta parted para ver las tablas de particiones de los discos.
Para montar la partición principal (/) del servidor, solo hay que ejecutar el comando mount seguido de la referencia del disco (/dev/hda1) y del lugar en el que se montará la partición en el sistema de archivos (/mnt/):


```
rescue:~# mount /dev/hda1 /mnt/
```


Normalmente, la partición /home está en el disco /dev/hda2. Se monta después de / con el comando: mount /dev/hda2 /mnt/home.

El /home no está necesariamente en /dev/hda2. También es posible que los datos estén en /var (para Plesk, por ejemplo). Para asegurarse de la configuración, puede montar la partición / y a continuación ejecutar el comando cat /mnt/etc/fstab. Este archivo contiene las particiones del servidor que se cargan al arrancar desde el disco duro.

A continuación mostramos un ejemplo:


```
rescue:# cat /mnt/etc/fstab
/dev/hda1 / ext3 errors=remount-ro 0 1
/dev/hda2 /var ext3 defaults,usrquota,grpquota 1 2
/dev/hda3 swap swap defaults 0 0
/dev/devpts /dev/pts devpts gid=5,mode=620 0 0
/dev/shm /dev/shm tmpfs defaults 0 0
/dev/proc /proc proc defaults 0 0
/dev/sys /sys sysfs defaults 0 0
```


En este ejemplo podemos ver que el /dev/hda2 es /var y no /home, por lo tanto, habrá que realizar el montaje con mount /dev/hda2 /mnt/var.
Si el servidor está configurado con RAID por software, se recomienda montar las particiones /dev/md[x].

## c. Chroot
Ahora podemos editar los archivos utilizando, por ejemplo, la ruta /mnt/var/[...], o /mnt/etc/lilo.conf. 

Sin embargo, para poder realizar determinadas operaciones es necesario estar en root en el sistema que haya instalado en el disco, ya que estas no pueden hacerse con el root del modo de rescate.

En esos casos, hay que utilizar el comando chroot:


```
rescue:~# chroot /mnt/
rescue:/#
```


Aquí podemos ver que después de hacer un chroot, nos coloca en la raíz del servidor.

Ahora podemos ejecutar comandos en el sistema.


## 4. Salir del modo de rescate
Para volver a arrancar el servidor desde sus discos duros, hay que volver a seleccionar el tipo de netboot en el área de cliente dedicado. Seleccione el servidor en la columna izquierda y, en la pestaña «Estado del servidor», en «Información general» > «Boot», haga clic en «Editar», seleccione «Iniciar en el disco duro» y acepte. 

A continuación, realice un reinicio por software (comando reboot desde el servidor) o hardware (botón «Reiniciar» del área de cliente).

Ejemplo de reinicio por software (desde el servidor):


```
rescue:~# reboot
Broadcast message from root (pts/0) (Tue Apr 12 15:56:17 2005):
The system is going down for reboot NOW!
```




## 1. Activar el modo WinRescue
Acceda al área de cliente dedicado y seleccione el servidor en la columna izquierda. En la pestaña «Estado del servidor», en «Información general» > «Boot», haga clic en «Editar», seleccione «Iniciar en modo rescue» y elija la configuración WinRescue.

Tenga en cuenta que una vez seleccionado el modo WinRescue, el servidor no reiniciará automáticamente para cargar el sistema de rescate en el servidor, sino que usted deberá reiniciarlo. Puede hacerlo por software conectándose al servidor, o por hardware solicitando el corte de la alimentación del servidor desde el área de cliente.

Se recomienda reiniciar la máquina por software (menú «Inicio» > «Reiniciar» o por SSH con shutdown /r /t 0) cuando sea posible. No realizar el reinicio por hardware a menos que no tenga otra alternativa (botón «Reiniciar» del área de cliente).

## Atención:
El reinicio por hardware solo está recomendado en caso de que no tenga acceso al servidor. Existe riesgo de corrupción de datos, ya que es el equivalente a un reseteo eléctrico.
Enviaremos el enlace y la contraseña para acceder al servidor en modo de rescate por correo electrónico al administrador del servidor registrado en nuestras bases de datos.
Si ha recibido un mensaje de correo electrónico indicándole que su servidor está en modo de rescate y comunicándole la contraseña root, por lo general significa que se ha detectado un fallo en el servidor y que el técnico del centro de datos no ha tenido más opción que reiniciarlo en modo de rescate (fallo de software, por ejemplo con GRUB).


## 2. Herramientas
Descubra las principales herramientas disponibles en WinPE.

a. Explorador de archivos

![](images/img_737.jpg){.thumbnail}
FreeCommander es un gestor de archivos con múltiples funcionalidades que permite diversas acciones sobre los datos:

- Explorar los archivos presentes en los dispositivos periféricos de almacenamiento conectados al servidor.
- Gestionar los datos: copiar, cortar, pegar, comprimir, descomprimir, renombrar, mover...

b. Gestor de contraseñas


![](images/img_738.jpg){.thumbnail}
NTPWEdit es un gestor de contraseñas fácil de utilizar. Permite reactivar una cuenta y/o cambiar su contraseña.
Esta herramienta es muy útil en caso de perder los identificadores o para reactivar una cuenta de seguridad.

c. Cliente FTP

![](images/img_739.jpg){.thumbnail}
FileZilla es un cliente FTP libre y fácil de utilizar. Soporta los protocolos SSH y SSL y dispone de una interfaz muy clara y fácil de utilizar.
Permite transferir datos copiándolos o arrastrándolos a un servidor FTP como el espacio de backup que se incluye gratuitamente con la mayoría de los modelos de servidores OVH.

d. Gestor de archivos

![](images/img_740.jpg){.thumbnail}
7-Zip es una herramienta de archivado gratuita, potente y fácil de utilizar. Permite leer archivos de los siguientes formatos: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR y Z.
Con 7-Zip también podrá crear sus propios archivos en los siguientes formatos: 7z, XZ, BZIP2, GZIP, TAR, ZIP y WIM.

e. Antivirus de emergencia

![](images/img_741.jpg){.thumbnail}
Avast Virus Cleaner permite escanear rápidamente los discos locales en búsqueda de infecciones.

f. Herramientas de servidor

![](images/img_743.jpg){.thumbnail}
ActivNIC permite reactivar una tarjeta de red del servidor que estaba desactivada.

![](images/img_742.jpg){.thumbnail}
SRVFirewall es un script que intenta activar o desactivar el firewall del servidor.

g. Herramientas del sistema Microsoft

![](images/img_745.jpg){.thumbnail}
SysInternals es una suite de software Microsoft formada por diversas herramientas para la red, la gestión de procesos y otras funciones.

![](images/img_744.jpg){.thumbnail}
Esta interfaz permite ejecutar comandos en línea de comandos.

h. Lector virtual

![](images/img_746.jpg){.thumbnail}
Virtual CloneDrive permite montar archivos ISO, BIN o CCD en un lector virtual.

i. Navegador de internet

![](images/img_747.jpg){.thumbnail}
Firefox.

j. Herramientas para discos

![](images/img_748.jpg){.thumbnail}
TestDisk es una utilidad de recuperación de datos realizada por Christophe Grenier. Permite recuperar o modificar una tabla de particiones corrupta, recuperar una partición eliminada, reparar un sector de arranque o reconstruir un MBR defectuoso.

![](images/img_749.jpg){.thumbnail}
DiskPart es una herramienta de Microsoft en línea de comandos que permite crear, modificar o gestionar las particiones de uno o varios discos. Es posible ampliar o reducir una partición, cambiar la letra asignada a un volumen, limpiar íntegramente un disco... También permite crear o eliminar un RAID Soft entre varios discos.

![](images/img_750.jpg){.thumbnail}
Bootsect es una herramienta extraída de la consola de recuperación de Windows. Permite reparar un sector de arranque defectuoso en la partición del sistema.


## 
En esta guía hemos descrito las tres formas de arrancar el servidor en modo de rescate.

