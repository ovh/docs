---
title: 'Usar copias de seguridad automáticas en un servidor virtual privado (VPS)'
slug: usar-copias-de-seguridad-automatizadas-en-un-vps
excerpt: 'Cómo activar y usar la opción «Copia de seguridad automatizada» en el panel de control de OVHcloud'
section: 'Opciones de copia de seguridad'
order: 2
---

**Última actualización: 22/4/2020**


## Objetivo

Esta opción —disponible en el panel de control de OVHcloud— ofrece una forma conveniente de disponer frecuentemente de copias de seguridad completas del servidor virtual privado (VPS) sin tener que conectarse al servidor para crearlas y restaurarlas manualmente. Otra ventaja es que también puede optar por montar una copia de seguridad y acceder a ella a través del protocolo/programa SSH.

**En esta guía, se explica cómo usar copias de seguridad automáticas en su servidor virtual privado (VPS) de OVHcloud.**

> [!primary]
>
Antes de aplicar las opciones de copia de seguridad, le recomendamos que consulte las [preguntas frecuentes y demás páginas del producto](https://www.ovhcloud.com/es-es/vps/options/) para acceder a una comparativa de los precios y otras informaciones.
>

## Requisitos

- Tener acceso al [panel de control de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Tener un [servicio de servidor virtual privado (VPS)](https://www.ovhcloud.com/es-es/vps/) de OVHcloud ya configurado.
- Tener acceso de administrador (raíz) a su servidor virtual privado (VPS) a través del protocolo/programa SSH (opcional).

## Procedimiento

Inicie sesión en el [área de cliente de OVHcloud para acceder al panel de control](https://www.ovh.com/auth/?action=gotomanager), navegue hasta la sección «Servidor» y seleccione su servidor en la barra lateral de la izquierda (debajo de `VPS)`{.action}.

### Paso 1: Suscribirse a la opción «Copias de seguridad automatizadas»

Después de seleccionar su servidor virtual privado (VPS), haga clic en la pestaña `Copia de seguridad automatizada`{.action} en el menú horizontal.

En el siguiente paso, tenga en cuenta la información sobre los precios y haga clic en `Contratar`{.action}. Se le guiará por el proceso de contratación y recibirá un mensaje de correo electrónico de confirmación. Las copias de seguridad se crearán ahora diariamente hasta que se vuelva a cancelar la opción.


### Paso 2: Restaurar una copia de seguridad desde el panel de control de OVHcloud

Después de seleccionar su servidor virtual privado (VPS), haga clic en la pestaña `Copia de seguridad automatizada`{.action} en el menú horizontal. Habrá un máximo de quince copias de seguridad diarias disponibles. Haga clic en `...`{.action} junto a la copia de seguridad que quiera restaurar y seleccione `Restauración`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Si recientemente ha cambiado su contraseña raíz, asegúrese de marcar la opción «Modificar la contraseña raíz al restaurar» en la ventana emergente para conservar su contraseña raíz actual y, seguidamente, haga clic en `Confirmar`{.action}. Recibirá un mensaje de correo electrónico tan pronto como se complete la tarea. En función del espacio en disco utilizado, la restauración puede tardar un rato en completarse.

> [!alert]
>
Tenga en cuenta que las copias de seguridad automatizadas no incluirán sus discos adicionales.
>

### Cómo montar una copia de seguridad y acceder a ella

No es necesario sobrescribir íntegramente el servicio existente con una restauración. La opción «Montaje» le permite acceder a los datos de la copia de seguridad para recuperar sus archivos. 

> [!warning]
>La configuración y la gestión de la serie de servicios que OVHcloud le ofrece recae sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
>El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un proveedor especializado y/o el editor del <i>software</i> del servicio si tiene alguna dificultad. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

#### Paso 1: Panel de control 

Haga clic en `...`{.action} junto a la copia de seguridad a la que necesite acceder y seleccione `Montaje`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Una vez completado el proceso, recibirá un mensaje de correo electrónico. Ahora, puede conectarse a su servidor virtual privado (VPS) y añadir la partición donde se encuentra su copia de seguridad.

#### Paso 2: Secure Shell

Primero, conéctese a su servidor virtual privado (VPS) a través del protocolo/programa Secure Shell (SSH).

Puede utilizar el comando siguiente para verificar el nombre del nuevo dispositivo conectado:

```
# lsblk
```

A continuación, un resultado de muestra de este comando:

```
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
sdc       8:32   0   50G  0 disk 
```
En este ejemplo, la partición que contiene el sistema de archivos de la copia de seguridad se denomina «sdb1».
A continuación, cree un directorio para esta partición y defínalo como el punto de montaje:

```
# mkdir -p /mnt/restore
# mount /dev/sdb1 /mnt/restore
```

Ahora, puede cambiar a esta carpeta y acceder a los datos de su copia de seguridad.


## Más información

[Usar instantáneas en un servidor virtual privado (VPS)](../usar-instantaneas-en-un-vps/)


Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
