---
title: 'Sustituir un disco'
slug: sustitucion-disco
excerpt: 'Cómo saber si falla un disco y solicitar su sustitución'
section: 'RAID y discos'
---

**Última actualización: 26/06/2018**

## Objetivo

Si detecta un fallo en un disco o nuestro sistema le ha enviado una notificación por correo electrónico informándole del fallo de un disco, debe adoptar las medidas necesarias para sustituirlo lo antes posible.

**Esta guía explica cómo saber si falla un disco y cómo solicitar su sustitución a OVH.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 


## Requisitos

- Estar conectado al [servidor dedicado de OVHcloud](https://www.ovh.com/world/es/servidores_dedicados/){.external} por SSH con acceso root (Linux).


## Procedimiento

### Realizar una copia de seguridad de los datos

En primer lugar, **es fundamental realizar una copia de seguridad de sus datos**. El único propósito de un RAID (excepto el RAID 0) es proteger sus datos frente a los fallos de los discos. Una vez que un disco queda inutilizado, todos los datos dependen del buen funcionamiento del disco o discos restantes. Es poco probable que fallen dos discos al mismo tiempo, pero no es imposible.

Antes de realizar cualquier sustitución de discos, OVHcloud requiere:

-	una confirmación por su parte de que ha realizado una copia de seguridad de los datos;
-	una confirmación de que, conociendo los riesgos de pérdida de los datos, acepta la sustitución del disco.


### Detectar el fallo de un disco

Ante cualquier notificación por correo electrónico o verificación por su parte que revele un fallo, es indispensable comprobar el estado de todos los discos, ya que, si fallan dos discos de un mismo conjunto RAID, sustituiremos primero aquel que tenga más errores.

#### Servidor con RAID por software

Si tiene un servidor con RAID por software, consulte la guía [RAID por software](../raid-software/){.external} para identificar los discos instalados en su servidor.

Una vez que conozca la ruta de los discos, puede probarlos usando el comando `smartctl` del siguiente modo:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> No olvide sustituir **/dev/sdX** por la ruta de acceso al disco, siendo **sdX** el disco afectado: sdA, sdB, etc.
> 

Esto también le permitirá obtener el número de serie (*serial number*) del disco o discos que quiera sustituir para poder comunicárselos al técnico.

A continuación mostramos un ejemplo del resultado que devuelve el comando:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

En este caso, el número de serie se indica en la siguiente línea:

`Serial Number:    5329T58N`

#### Servidor con RAID por hardware

Si tiene un servidor con RAID por hardware, consulte la guía [RAID por hardware](../raid-hardware/){.external} y siga el procedimiento correspondiente a su tipo de controlador RAID para conocer la ruta de acceso a los discos.

Una vez que conozca la ruta de los discos, puede probarlos usando el comando `smartctl` del siguiente modo:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> No olvide sustituir **/dev/sdX** por la ruta de acceso al disco, siendo **sdX** el disco afectado: sdA, sdB, etc.
> 


> [!warning]
>
> En algunos casos, puede aparecer el siguiente mensaje: «/dev/sda \[megaraid_disk_00]\[SAT]: Device open changed type from 'megaraid' to 'sat'».
> 
> En ese caso, deberá sustituir **megaraid** por **sat+megaraid** de la siguiente manera:
> ```sh
> smartctl -d sat+megaraid,N -a /dev/sdX
> ```
> 

Para una tarjeta RAID LSI, puede probar los discos utilizando el comando `smartctl` del siguiente modo:

```sh
smartctl -a /dev/sgY
```

> [!primary]
>
> No olvide especificar el número de RAID (/dev/sg0 para el primer RAID; /dev/sg1 para el segundo RAID...).
> 


#### Servidor con disco NVMe

Si se trata de un disco NVMe, será necesario poner el servidor en modo [rescue-pro](../modo_de_rescate/){.external}, que tiene la herramienta **nvme-cli** instalada por defecto.

A continuación, utilice el comando `nvme list` para obtener el número de serie de los discos:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Solicitar la sustitución del disco

#### Sustituir el disco en frío (requiere una interrupción del servidor)

Si desea solicitar la sustitución de un disco, solo tiene que crear un tíquet a nuestro soporte desde el [área de cliente de OVHcloud](https://ca.ovh.com/manager/dedicated/index.html#/ticket){.external}. Para acelerar el proceso, deberá proporcionar la información obtenida en las pruebas anteriores. Son necesarios los siguientes datos:

- **Número de serie del disco que quiera sustituir, así como de todos los demás discos**: Para obtener el número de serie del disco, consulte [esta guía](../obtener-numero-de-serie-disco/){.external}. Si por alguna razón no fuera posible obtener el número de serie del disco, indíquelo en el tíquet y comunique el número de serie del disco o discos que no haya que sustituir. Como ya hemos dicho, es importante indicar el número de serie de todos los discos para evitar errores durante la operación.

- **Fecha y hora de inicio de la intervención**: Deberá prever una breve interrupción del servicio, pero puede programar la intervención a cualquier hora del día o de la noche, los siete días de la semana.

- **Confirmación de que ha realizado el backup de sus datos o de que acepta la posible pérdida de los mismos.**


#### Sustituir el disco en caliente (sin interrupción del servidor)

> [!primary]
>
> Este tipo de sustitución solo es posible en los servidores [FS-MAX](https://www.ovh.com/world/es/servidores_dedicados/fs/){.external} y los servidores [Big-HG](https://www.ovh.com/world/es/servidores_dedicados/hg/){.external} con tarjeta RAID.
> 

Para la sustitución en caliente en un servidor con tarjeta MegaRAID, una vez que la intervención esté programada deberá hacer parpadear el LED del disco que quiera sustituir para facilitar su identificación por los técnicos.

Si su servidor dispone de tarjeta MegaRAID, utilice los comandos que se indican a continuación:

- Para hacer parpadear el LED:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- Para detener el parpadeo del LED:

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Equivalencias con el comando `storcli`:
>
> - Para hacer parpadear el LED:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - Para detener el parpadeo del LED:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>


> [!primary]
>
> Aunque haga parpadear el LED, no olvide especificar en el tíquet de soporte el número de serie y el slot del disco.
> 

### Después de la sustitución

Si tiene un servidor con RAID por hardware, el RAID se reconstruirá por sí mismo si el **auto-rebuild** está activado (por defecto está activado). Tenga en cuenta que la resincronización puede tardar unos minutos y afectar al rendimiento de lectura-escritura del RAID.

Si tiene un servidor con RAID por software, deberá reconstruir el RAID usted mismo. Para ello, no dude en consultar la guía [RAID por software](../raid-software/){.external}.


## Más información

[RAID por software](../raid-software/){.external}

[RAID por hardware](../raid-hardware/){.external}

[Modo de rescate](../modo_de_rescate/){.external}


Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com/){.external}.
