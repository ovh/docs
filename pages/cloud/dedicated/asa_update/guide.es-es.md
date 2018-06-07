---
title: 'Actualizar el firewall Cisco ASA'
slug: actualizar-firewall-cisco-asa
excerpt: 'Cómo actualizar el firewall Cisco ASA'
section: 'Uso avanzado'
---

**Última actualización: 05/06/2018**

## Objetivo

Para proteger su sistema de manera óptima, el firewall Cisco Adaptive Security Appliance (ASA) debe disponer de los últimos parches actualizados para corregir posibles fallos de seguridad.

**Esta guía explica cómo actualizar el firewall Cisco ASA.**

## Requisitos

- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

### Desactivar el ASA desde el área de cliente

Al actualizar el firewall será necesario reiniciarlo varias veces. Por lo tanto, para evitar que el servidor deje de estar disponible durante la actualización, le recomendamos que desactive el ASA.

Para desactivar el ASA, acceda al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}. Seleccione el servidor dedicado en la columna izquierda y abra la pestaña `Firewall Cisco ASA`{.action}. Haga clic en el botón `Desactivar el firewall Cisco ASA`{.action}, situado a la derecha.

![Desactivación del ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Guardar la configuración

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager (ASDM), haga clic en `File`{.action} y seleccione `Save Running Configuration to Flash`{.action}.

![Guardar la configuración a través del ASDM](images/asa1.jpg){.thumbnail}

#### Por SSH

Conéctese al ASA por SSH:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

A continuación, introduzca el siguiente comando:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Guardar la configuración

Cree un archivo local (por ejemplo, **backupAsa.txt**). Una vez conectado al ASDM, haga clic en `Tools`{.action} y seleccione `Backup Configurations`{.action}.

![Guardar la configuración a través de ASDM 1](images/asa2.jpg){.thumbnail}

En el cuadro de diálogo, haga clic en `Browse Local...`{.action} y seleccione el archivo local que ha creado anteriormente. A continuación, haga clic en `Backup`{.action} para guardar la configuración.

![Guardar la configuración a través de ASDM 2](images/asa3.jpg){.thumbnail}


### Reiniciar el ASA

Este paso es importante, ya que le permitirá comprobar que el ASA funciona correctamente y que es posible acceder a él tras un simple reinicio.

#### Mediante el ASDM

Una vez conectado al Cisco Adaptive Security Device Manager, haga clic en `Tools`{.action} y seleccione `System Reload...`{.action}.

![Reiniciar el ASA a través del ASDM 1](images/asa5.jpg){.thumbnail}

Para un reinicio inmediato, en **Reload Start Time**, seleccione la opción `Now`{.action} y haga clic en `Schedule Reload`{.action}.

![Reiniciar el ASA a través del ASDM 2](images/asa6.jpg){.thumbnail}

![Reiniciar el ASA a través del ASDM 3](images/asa7.jpg){.thumbnail}


#### Por SSH

Conéctese al ASA por SSH e introduzca el comando `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

El reinicio para actualizar la configuración podría tardar unos minutos.


### Reactivar el ASA desde el área de cliente

Para reactivar el ASA, vaya al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}. Seleccione el servidor dedicado en la columna izquierda y abra la pestaña `Firewall Cisco ASA`{.action}. Haga clic en el botón `Activar el firewall Cisco ASA`{.action}, situado a la derecha.

![Activación del ASA](images/customer_panel_asa_enable.png){.thumbnail}


Tras el reinicio, una vez que el ASA vuelva a estar activado, compruebe que todos los servicios funcionen correctamente. Si el funcionamiento es correcto, puede continuar en el siguiente paso. De lo contrario, realice las comprobaciones pertinentes para solucionar los posibles fallos antes de seguir.


### Volver a desactivar el ASA desde el área de cliente

En este punto, deberá volver a desactivar el ASA.

Para ello, vaya al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}. Seleccione el servidor dedicado en la columna izquierda y abra la pestaña `Firewall Cisco ASA`{.action}. Haga clic en el botón `Desactivar el firewall Cisco ASA`{.action}.

![Desactivación del ASA](images/customer_panel_asa_disable.png){.thumbnail}


### Comprobar el archivo binario utilizado

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager y acceda a `Device Information`{.action}. En la pestaña `General`{.action} podrá consultar su versión de ASA y de ASDM. Le recomendamos que anote y conserve esta información.

![Comprobar los archivos binarios a través del ASDM](images/asa9.jpg){.thumbnail}


#### Por SSH

Conéctese al ASA por SSH e introduzca los siguientes comandos:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- **boot system**: versión del ASA
- **asdm image**: versión del ASDM


### Comprobar qué archivo binario debe utilizar

Puede consultar qué archivo binario debe utilizar en la siguiente tabla:

|Versión actual de ASA|Actualizar primero a la versión...|Actualizar luego a la versión...|
|---|---|---|
|8.2(x) y anteriores|8.4(6)|9.1(3) y posteriores|
|8.3(x)|8.4(6)|9.1(3) y posteriores|
|8.4(1) hasta 8.4(4)|8.4(6) o 9.0(2+)|9.1(3) y posteriores|
|8.4(5+)|Ninguna|9.1(3) y posteriores|
|8.5(1)|9.0(2+)|9.1(3) y posteriores|
|8.6(1)|9.0(2+)|9.1(3) y posteriores|
|9.0(1)|9.0(2+)|9.1(3) y posteriores|
|9.0(2+)|Ninguna|9.1(3) y posteriores|
|9.1(1)|9.1(2)|9.1(3) y posteriores|
|9.1(2+)|Ninguna|9.1(3) y posteriores|
|9.2(x)|Ninguna|9.2(2) y posteriores|

Por ejemplo, si su ASA tiene la versión 8.4(2), primero deberá actualizar el sistema a la versión 8.4(6) y, a continuación, a la versión 8.4(7+) o 9.2+.


Para más información, consulte la [documentación de Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> Para los firewall Cisco ASA con 256 MB de memoria, le recomendamos que solo actualice a la versión 8.4(x), ya que las versiones 9.1(x) y 9.2(x) utilizarán la práctica totalidad de los 256 MB sin estar en producción.
>

Puede consultar la versión actual utilizando uno de los siguientes métodos:

- Por SSH, introduzca el siguiente comando:

```sh
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU Geode 500 MHz
```

- En el ASDM, haga clic en `Tools`{.action} y seleccione `Command Line Interface...`{.action}.

![Comprobar la versión del binario en el ASDM 1](images/asa10.jpg){.thumbnail}

![Comprobar la versión del binario en el ASDM 2](images/asa11.jpg){.thumbnail}


### Eliminar los archivos binarios no utilizados

Antes de añadir los nuevos archivos binarios, es conveniente eliminar los antiguos.

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager. Haga clic en `Tools`{.action} y seleccione `File Management...`{.action}.

![Eliminar los archivos binarios no utilizados en el ASDM 1](images/asa12.jpg){.thumbnail}

A continuación, elimine los archivos binarios (**.bin**) no utilizados. Solo deberá quedar en el disco un archivo para el ASA y otro para el ASDM.

![Eliminar los archivos binarios no utilizados en el ASDM 2](images/asa13.jpg){.thumbnail}


#### Por SSH

Conéctese al ASA por SSH, muestre la lista de los archivos y elimínelos utilizando los siguientes comandos:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Añadir e instalar los archivos binarios ASDM

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager. Haga clic en `Tools`{.action} y seleccione `Upgrade Software from Local Computer...`{.action}.

![Añadir e instalar los archivos binarios ASDM a través del ASDM 1](images/asa14.jpg){.thumbnail}

A continuación, elija las siguientes opciones:

- **Image to Upload**: ASDM.
- **Local File Path**: Haga clic en `Browse Local Files`{.action} y seleccione su versión del archivo binario del ASDM.

A continuación, haga clic en `Upload Image`{.action}, y luego en `Yes`{.action} para confirmar que esa debe ser la imagen de arranque:

![Añadir e instalar los archivos binarios ASDM a través del ASDM 2](images/asa15.jpg){.thumbnail}

![Añadir e instalar los archivos binarios ASDM a través del ASDM 3](images/asa16.jpg){.thumbnail}


#### Por SSH

El archivo binario debe estar previamente ubicado en un servidor FTP. Deberá configurar el ASA por SSH para poder utilizarlo y guardar la configuración:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Añadir e instalar los nuevos archivos binarios ASA

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager. Haga clic en `Tools`{.action} y seleccione `Upgrade Software from Local Computer...`{.action}.

![Añadir e instalar los archivos binarios ASA a través del ASDM 1](images/asa14.jpg){.thumbnail}

A continuación, elija las siguientes opciones:

- **Image to Upload**: ASA.
- **Local File Path**: Haga clic en `Browse Local Files`{.action} y seleccione su versión del archivo binario del ASA.

 
A continuación, haga clic en `Upload Image`{.action}, y luego en `Yes`{.action} para confirmar que esa debe ser la imagen de arranque:

![Añadir e instalar los archivos binarios ASA a través del ASDM 2](images/asa18.jpg){.thumbnail}

![Añadir e instalar los archivos binarios ASA a través del ASDM 3](images/asa20.jpg){.thumbnail}


#### Por SSH

Conéctese por SSH e introduzca los siguientes comandos:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Reiniciar el ASA

Este paso es importante, ya que le permitirá comprobar que el ASA funciona correctamente y que es posible acceder a él tras un simple reinicio.

#### Mediante el ASDM

Conéctese al Cisco Adaptive Security Device Manager. Haga clic en `Tools`{.action} y seleccione `System Reload...`{.action}.

![Reiniciar el ASA a través del ASDM 1](images/asa5.jpg){.thumbnail}

Para un reinicio inmediato, en **Reload Start Time**, seleccione la opción `Now`{.action} y haga clic en `Schedule Reload`{.action}. A continuación, haga clic `Yes`{.action} para confirmar.

![Reiniciar el ASA a través del ASDM 2](images/asa6.jpg){.thumbnail}

![Reiniciar el ASA a través del ASDM 3](images/asa7.jpg){.thumbnail}


#### Por SSH

Conéctese al ASA por SSH e introduzca el comando `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

El reinicio para actualizar la configuración podría tardar unos minutos.

 

> [!warning]
>
> Si no puede añadir el archivo binario del ASA, reinicie para actualizar el ASDM y elimine el archivo binario ASDM que no utiliza para liberar espacio.
> 
> A continuación actualice el archivo binario ASA siguiendo el procedimiento que se detalla a continuación.
>

 

### Corregir la configuración

Durante la actualización del ASA desde las versiones anteriores a la 8.4.6, esta será la nueva configuración tras el reinicio:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


Corrija la configuración de la siguiente manera:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Firewall Cisco ASA actualizado](images/asa10.jpg){.thumbnail}

![Firewall Cisco ASA actualizado](images/asa23.jpg){.thumbnail}



### Reactivar el ASA desde el área de cliente

Para reactivar el ASA, vaya al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}. Seleccione el servidor dedicado en la columna izquierda y abra la pestaña `Firewall Cisco ASA`{.action}. Haga clic en el botón `Activar el firewall Cisco ASA`{.action}, situado a la derecha.

![Activación del ASA](images/customer_panel_asa_enable.png){.thumbnail}


Su ASA ya estará actualizado.

![Firewall Cisco ASA actualizado](images/asa22.jpg){.thumbnail}



## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.