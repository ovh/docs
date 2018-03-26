---
title: Sustituir un disco
slug: sustitucion-disco
excerpt: Procedimiento de sustitución de un disco
section: RAID y discos
---


## Introducción
Si detecta un fallo en un disco o nuestro sistema le ha enviado una notificación por correo electrónico informándole del fallo de un disco, debe adoptar las medidas necesarias para sustituirlo lo antes posible.


## Procedimiento

### 1. Realizar el backup
En primer lugar, **es fundamental realizar una copia de seguridad de sus datos**. El único objetivo de un RAID (excepto el RAID 0) es proteger sus datos contra los fallos de los discos; una vez que el disco está inutilizable, todos los datos dependen del buen funcionamiento del disco o discos restantes.

Es poco probable que fallen dos discos al mismo tiempo, pero no es imposible. Por lo tanto, le recomendamos encarecidamente que implemente una solución de backup.

Para solicitar la sustitución de un disco, es necesario confirmar que ha realizado copia de seguridad o bien declarar que conoce los riesgos y acepta su plena responsabilidad.


### 2. Detección
Independientemente de que haya encontrado el problema usted mismo o tras una notificación de nuestro sistema, es preferible comprobar el estado de todos los discos por una razón: si tiene dos discos que fallan en un mismo conjunto RAID, empezaremos por sustituir aquel que tenga más errores.


#### RAID por software
Si tiene un servidor con RAID por software, consulte la guía «[RAID por software](https://docs.ovh.com/es/dedicated/raid-software/){.external}» para identificar los discos instalados en su servidor.

Una vez conozca la ruta de acceso a sus discos, puede probarlos utilizando el comando smartctl del siguiente modo:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a -d ata /dev/sdX</span> </pre></div>

> [!primary]
>
> No olvide sustituir /dev/sdX por la ruta de acceso al disco.
> 

Esto también le permitirá obtener el número de serie (*Serial Number*) del disco o discos a sustituir para poder comunicárselos al técnico.

A continuación mostramos un ejemplo del resultado que devuelve el comando.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a -d ata /dev/sda</span> <span class="output">smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)</span> <span class="output">Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net</span> <span class="blank">&nbsp;</span> <span class="output">=== START OF INFORMATION SECTION ===</span> <span class="output">Device Model:     TOSHIBA DT01ACA050</span> <span class="output">Serial Number:    5329T58NS</span> <span class="output">LU WWN Device Id: 5 000039 ff6d28993</span> <span class="output">Firmware Version: MS1OA750</span> <span class="output">User Capacity:    500 107 862 016 bytes [500 GB]</span> <span class="output">Sector Sizes:     512 bytes logical, 4096 bytes physical</span> <span class="output">Device is:        Not in smartctl database [for details use: -P showall]</span> <span class="output">ATA Version is:   8</span> <span class="output">ATA Standard is:  ATA-8-ACS revision 4</span> <span class="output">Local Time is:    Thu Nov 24 15:51:25 2016 CET</span> <span class="output">SMART support is: Available - device has SMART capability.</span> <span class="output">SMART support is: Enabled</span> </pre></div>

#### RAID por hardware
Si tiene un servidor con RAID por hardware, consulte la guía «[RAID por hardware](https://docs.ovh.com/es/dedicated/raid-hardware/){.external}» y utilice el procedimiento relativo a su tipo de controlador RAID para conocer la ruta de acceso a los discos.

Una vez conozca la ruta de acceso a los discos, puede probarlos utilizando el comando smartctl del siguiente modo:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d megaraid,N -a /dev/sdX</span> </pre></div>
Device ID del disco

Número del disco (**/dev/sda** = primer disco, **/dev/sdb** = segundo disco, etc.)



> [!primary]
>
> No olvide sustituir /dev/sdX por la ruta de acceso al disco.
> 



> [!warning]
>
> En determinados casos, puede obtener el siguiente mensaje: «/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'». En ese caso, deberá sustituir megaraid por sat+megaraid como sigue:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -d sat+megaraid,N -a /dev/sdX</span> </pre></div>

Si tiene una tarjeta RAID LSI, puede probar los discos utilizando el comando smartctl del siguiente modo:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">smartctl -a /dev/sgY</span> </pre></div>
Número del RAID  (**/dev/sg0** = primer RAID, **/dev/sg1** = segundo RAID, etc.)


### 3. Sustitución del disco

#### Sustitución en frío (requiere una interrupción del servidor)
Si desea solicitar la sustitución de un disco, solo tiene que crear un tíquet a nuestro soporte desde el [área de cliente](https://www.ovh.com/manager/){.external}.

Para acelerar el proceso, deberá proporcionar la siguiente información:

1. Fecha y hora a la que quiere que realicemos la intervención (deberá prever una breve interrupción del servicio, pero puede planificar la intervención a cualquier hora del día o de la noche, los siete días de la semana).
1. Confirmación de que ha realizado el backup de sus datos o de que acepta la plena responsabilidad de una posible pérdida de los datos.
1. Número de serie del disco que quiera sustituir (para obtenerlo, consulte [esta guía](https://docs.ovh.com/es/dedicated/obtener-numero-de-serie-disco/){.external}).


> [!warning]
>
> Si por alguna razón no es posible obtener el número de serie del disco, indíquelo en el tíquet y comunique el número de serie del disco o discos que no haya que sustituir.
> 


#### Sustitución en caliente (sin necesidad de apagar el servidor, solo en servidores HG y Big HG)
En el caso de una sustitución en caliente en un servidor HG o Big HG con tarjeta MegaRaid, una vez que la intervención esté programada, deberá hacer parpadear el LED del disco a sustituir para facilitar su identificación por los técnicos.

Si su servidor dispone de tarjeta MegaRaid, utilice los comandos que se indican a continuación:

- Para hacer parpadear el LED:
<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PdLocate -start -physdrv[E0:S0] -a0</span> </pre></div>
- Para detener el parpadeo del LED:
<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">MegaCli -PdLocate -stop -physdrv[E0:S0] -a0</span> </pre></div>
**Enclosure ID** del disco

**Slot ID** del disco




> [!primary]
>
> Equivalencias con el comando storcli:
> - 
> Para hacer parpadear el LED:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">storcli /c0/e0/s0 start locate</span> </pre></div>
> - 
> Para detener el parpadeo del LED:
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">storcli /c0/e0/s0 stop locate</span> </pre></div>
> 


### 4. Despues de la sustitución
Si tiene un servidor con RAID por hardware, el RAID se reconstruirá por sí mismo si el **auto-rebuild** está activado (por defecto está activado). Tenga en cuenta que la resincronización puede tardar un tiempo y afectar al rendimiento de lectura-escritura del RAID.

No dude en consultar [esta guía](https://docs.ovh.com/es/dedicated/raid-hardware/){.external} para comprobar el estado del RAID.

Si tiene RAID por software, deberá reconstruir el RAID usted mismo. [Esta guía](https://docs.ovh.com/es/dedicated/raid-software/#resincronizar-un-raid-en-linux){.ref} explica cómo hacerlo.