---
title: "Cómo activar el modo de rescate en una instancia Public Cloud"
excerpt: "Cómo activar y utilizar el modo de rescate de OVHcloud para una instancia de Public Cloud"
updated: 2024-06-03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Si su instancia no se ha configurado correctamente o si ha perdido su clave SSH, es posible que no pueda acceder a su instancia.

En esos casos, puede utilizar el modo de rescate para reconfigurar su instancia o recuperar sus datos. 

**Esta guía explica cómo reiniciar una instancia de Public Cloud de OVHcloud en modo de rescate y cómo acceder a los archivos.**

## Requisitos

- Tener una [instancia de Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- Tener acceso al [área de cliente de OVHcloud](/links/manager)

## Procedimiento

> [!alert]
>
> Hasta la fecha, el modo de rescate para las instancias Metal no está accesible desde el área de cliente de OVHcloud. Para más información, consulte nuestra guía sobre el [modo de rescate para las instancias Metal](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Activar el modo de rescate

En primer lugar, inicie sesión en el [área de cliente de OVHcloud](/links/manager) para acceder al panel de control y, seguidamente, haga clic en el menú `Public Cloud`{.action}.

A continuación, seleccione su proyecto de Public Cloud en el menú lateral a la izquierda de la pantalla y acceda a «Instancias».

A continuación, haga clic en los 3 puntos a la derecha de la instancia y seleccione `Reiniciar en modo de rescate`{.action}.

![control panel](images/rescue2022.png){.thumbnail}

Entonces verá el cuadro de diálogo «Reiniciar en modo de rescate». Haga clic en la lista desplegable para seleccionar la distribución de Linux que desea utilizar en el modo de rescate y, a continuación, en el botón `Reiniciar`{.action}.

![control panel](images/rescue2.png){.thumbnail}

Una vez que la instancia se haya reiniciado en modo de rescate, se mostrará un panel informativo con los métodos de acceso disponibles.

![control panel](images/rescuedata.png){.thumbnail}

La **contraseña del modo de rescate** temporal solo se mostrará en la consola VNC. Haga clic en su instancia en la tabla y acceda a la pestaña `Consola VNC`{.action} para consultarla.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Acceso a sus datos

Una vez activado el modo de rescate, los datos de su instancia se adjuntarán como un disco adicional. Ahora, deberá instalarlo realizando los pasos siguientes.

En primer lugar, cree una [conexión SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) a su instancia. Una vez conectado, verifique los discos disponibles con este comando:

```bash
lsblk
```

El resultado será similar al siguiente ejemplo de salida:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

En modo rescue, `sda` es el disco en modo rescue y `sda1` es la partición de seguridad principal montada en `/`.

En este ejemplo, el disco principal es `sdb` y la partición del sistema es `sdb1` (indicada por el tamaño).

Monte esta partición con el siguiente comando:

```bash
mount /dev/sdb1 /mnt/
```

Podrá acceder a sus datos desde la carpeta `/mnt`.

### Desactivar el modo de rescate

Una vez que haya completado sus tareas, puede desactivar el modo de rescate reiniciando normalmente su instancia. Para hacerlo, haga clic en la flecha desplegable de su instancia y seleccione `Salir del modo de rescate`{.action}.

![control panel](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Si el botón `Salir del modo de rescate`{.action} no aparece una vez que la instancia esté en modo de rescate, le recomendamos que actualice la pestaña.
>

### Activar el modo rescate utilizando la API de OpenStack

También puede activar el modo de rescate a través de la API OpenStack utilizando el siguiente comando:

```bash
nova rescue INSTANCE_ID
```

Para salir del modo de rescate, utilice el siguiente comando:

```bash
nova unrescue INSTANCE_ID
```

## Más información

[Cómo sustituir un par de claves SSH en una instancia](/pages/public_cloud/compute/replacing_lost_ssh_key)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.