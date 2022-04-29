---
title: 'Uso de instantáneas Snapshots en un servidor virtual privado (VPS)'
slug: usar-instantaneas-en-un-vps
excerpt: 'Cómo activar y usar la opción Instantáneas  en el panel de control de OVHcloud'
section: 'Opciones de copia de seguridad'
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 10/9/2021**


## Objetivo

Crear una instantánea (<i>snapshot</i>) es una forma simple y rápida de proteger un sistema en funciones antes de realizar cambios (p. ej., probar una nueva configuración o <i>software</i>) que puedan tener consecuencias indeseadas o imprevistas. Sin embargo, no constituye una estrategia completa de copia de seguridad del sistema.

**En esta guía, se explica cómo usar las instantáneas en su servidor virtual privado (VPS) de OVHcloud.**

> [!primary]
>
Antes de aplicar las opciones de copia de seguridad, le recomendamos que consulte las [preguntas frecuentes y demás páginas del producto](https://www.ovhcloud.com/es-es/vps/options/) para acceder a una comparativa de los precios y otras informaciones.
>

## Requisitos

- Tener acceso al [panel de control de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Tener un [servicio de servidor virtual privado (VPS)](https://www.ovhcloud.com/es-es/vps/) de OVHcloud configurado.


## Procedimiento

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores Privados Virtuales`{.action}.

### Paso 1: Suscribirse a la opción «Instantáneas»

Acceda a la pestaña `«Inicio»`{.action} y desplácese hacia abajo hasta el cuadro «Resumen de opciones». Haga clic en `...`{.action} junto a la opción «Instantáneas» y, seguidamente, en `Contratar`{.action} (en el menú contextual).

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

En el siguiente paso, preste atención a la información sobre los precios y, a continuación, haga clic en `Contratar`{.action}. Se le guiará por el proceso de contratación y recibirá un mensaje de correo electrónico de confirmación.

### Paso 2: Tomar una instantánea

Una vez activada la opción, haga clic en `...`{.action} junto a la opción «Instantáneas» y, seguidamente, en «Tomar una instantánea» (en el menú contextual). La instantánea puede tardar unos minutos en crearse. Después, aparecerá la fecha y hora de su creación en el cuadro «Resumen de opciones».

### Paso 3: Eliminar o restaurar una instantánea

Puesto que las instantáneas solo se pueden activar de una en una, se debe eliminar la instantánea existente antes de crear una nueva. En el menú contextual, seleccione `Eliminar la instantánea`{.action}.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Si está seguro de que desea restablecer su servidor virtual privado (VPS) al estado de la instantánea, haga clic en `Restaurar la instantánea`{.action} y confirme la acción de restauración en la ventana emergente.

> [!alert]
> 
> Tenga en cuenta que, al restaurar un VPS a partir de un snapshot, el snapshot se eliminará. Si desea conservar la misma instantánea, debe tomar una nueva antes de realizar cambios en el sistema restaurado.
>

### Buenas prácticas para la creación de un snapshot

#### Configuración del software QEMU en un VPS

Los snapshots son imágenes instantáneas de su sistema en ejecución (« live snapshots »). Para garantizar la disponibilidad de su sistema durante la creación del snapshot, el software QEMO permite preparar el sistema de archivos para este proceso.

El *qemu-guest-agent* necesario no está instalado por defecto en la mayoría de distribuciones. Además, las restricciones de licencia pueden impedir que OVHcloud lo incluya en las imágenes de los SO disponibles. Por lo tanto, le recomendamos que compruebe si este agente está activado en su VPS y, en caso negativo, que lo instale. Para ello, conéctese a su VPS por SSH y siga las instrucciones que se indican en función de su sistema operativo.

##### **Distribuciones Debian (Debian, Ubuntu)**

Utilice el siguiente comando para comprobar si el sistema está configurado correctamente para los snapshots:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si el resultado es diferente (« No such file or directory »), instale la última versión del paquete:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Reiniciar el VPS:

```
$ sudo reboot
```


Verifique  el servicio para garantizar que está en ejecución:

```
$ sudo service qemu-guest-agent status
```

##### **Distribuciones Red Hat (CentOS, Fedora)**

Utilice el siguiente comando para comprobar si el sistema está configurado correctamente para los snapshots:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si el resultado es diferente (« No such file or directory »), instale y active el software:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Reiniciar el VPS:

```
$ sudo reboot
```

Verifique el software y compruebe que está en ejecución:

```
$ sudo service qemu-guest-agent status
```

##### **Windows**

Puede instalar el software mediante un archivo MSI disponible en el sitio web del proyecto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Compruebe que el servicio está en ejecución con el siguiente comando PowerShell:

```
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Más información

[Usar copias de seguridad automatizadas en un servidor virtual privado (VPS)](../usar-copias-de-seguridad-automatizadas-en-un-vps/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
