---
title: Configurar  MegaRAID para RAID nivel 0
excerpt: Esta guía le ayudará a configurar los discos de su servidor en RAID 0, lo que le permitirá usar el espacio útil de todos sus discos.
slug: Usar-la-cantidad-maxima-de-espacio-en-el-disco
section: RAID y discos
---

## Objetivo

Un grupo/matriz redundante de discos independientes (RAID) es una utilidad que mitiga la pérdida de datos en un servidor mediante la replicación de datos en dos o más discos.

El nivel de RAID predeterminado para las instalaciones del servidor OVHcloud es RAID 1, que duplica el espacio ocupado por sus datos, reduciendo a la mitad el espacio de disco utilizable.

**Esta guía le ayudará a configurar los discos de su servidor con RAID 0, lo que le permitirá usar el espacio útil de todos sus discos.**

>[!warning]
>
> Tenga en cuenta: RAID 0 no proporciona TOLERANCIA SIN FALLOS ni REDUNDANCIA DE DATOS, lo que hace muy probable la pérdida de datos en caso de fallo del disco.
>

## Requisitos

* Un [servidor dedicado](https://www.ovh.com/world/es/servidores-dedicados/){.external} conhardware RAID 
* Acceso administrativo (root) al servidor a través de SSH

## Instrucciones

### Usando el panel de control de OVHcloud

En el [Panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager) .external}, haga clic en el menú `Dedicado` {.action} y seleccione su servidor.

A continuación, en la pestaña `Información general`{.action}, haga clic en el botón `Reinstalar` {.action} para instalar un nuevo sistema operativo con su configuración RAID 0 personalizada.

Ahora seleccione  **Instalar desde una plantilla de OVHcloud** y luego haga clic en Siguiente {.action}. 

![megaraid](images/server_installation_raid0_01.png){.thumbnail}

Seleccione el sistema operativo que desea instalar y luego haga clic en `Siguiente`{.action}.

Marque las casillas para **Personalizar la configuración de hardware RAID** y **Personalizar la configuración de la partición**, luego haga clic en Siguiente {.action}.

![megaraid](images/server_installation_raid0_02.png){.thumbnail}

Seleccione RAID 0 de la lista desplegable y haga clic en `Siguiente`{.action}. 

![megaraid](images/server_installation_raid0_03.png){.thumbnail}

Configure las particiones como sea requeridoy luego haga clic en `Siguiente`{.action}.

![megaraid](images/server_installation_raid0_04.png){.thumbnail}

Finalmente, haga click en `Confirmar`{.action}

![megaraid](images/server_installation_raid0_05.png){.thumbnail}

Después de instalar su servidor, verifique los tamaños de partición iniciando sesión en el servidor a través de SSH y ejecutando el siguiente comando:

```sh
df -h
```

### Usando el modo de rescate

En el [Panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, haga clic en el menú `Dedicado`{.action} y seleccione su servidor.

En la pestaña `Información general` {.action}, haga clic en el botón `Modificar` {.action} para cambiar el sistema de boot.

![megaraid](images/rescue_mode_raid0_01_2020.png){.thumbnail}

A continuación, seleccione `Boot en modo de rescate` {.action} luego seleccione `rescue64-pro` {.action} de la lista desplegable.

Ahora, escriba su dirección de correo electrónico en el campo `Obtener su nombre de usuario actualizado` {.action}.

![megaraid](images/rescue_mode_raid0_02.png){.thumbnail}

Haga clic en `Siguiente`{.action} y luego haga clic en `Confirmar`{.action} en la siguiente pantalla.

![megaraid](images/rescue_mode_raid0_03.png){.thumbnail}

Haga clic en el botón `Reboot`{.action} en el [Panel de control](https://ca.ovh.com/auth/?action=gotomanager){.external}. 

![megaraid](images/server_installation_raid0_06_2020.png){.thumbnail}

Cuando su servidor se reinicie, inicie sesión a través de SSH utilizando las credenciales del modo de rescate que le enviamos por correo electrónico.

Desde la línea de comandos, escriba los siguientes comandos para eliminar la configuración RAID existente. Todos los datos en el RAID serán eliminados:

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Escriba el siguiente comando para recuperar las ID de dispositivo de ranura de sus discos:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Escriba los siguientes comandos para configurar el nivel RAID 0:

```sh
MegaCli -CfgLDAdd -R0 [252: 0,252: 1] -a0
```

En este ejemplo, 252 es la ID del gabinete del disco.

Después de configurar el nuevo nivel RAID, puede verificar la configuración con el siguiente comando:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Mas Infomacions

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>
