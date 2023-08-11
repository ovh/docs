---
title: Evitare la modalità di sola lettura sui dischi delle VM Linux
excerpt: Come evitare l’attivazione della modalità di sola lettura sui dischi delle VM Linux
updated: 2020-06-25
---

**Ultimo aggiornamento: 25/06/2020**

## Obiettivo

In seguito a eventi legati all’utilizzo dello storage, è possibile che su alcune partizioni di una macchina Linux si attivi la modalità di sola lettura.

**Questa guida ti mostra come correggere questo stato e ridurre questo rischio.**


## Procedura

Quando la modalità di sola lettura è attiva su una o più partizioni, non è possibile effettuare operazioni di scrittura sul filesystem.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

Per verificare lo stato del filesystem, utilizza il comando  `mount`:

```sh
> $ mount
>
> **/dev/sda1 on / type ext3 (ro,errors=remount-ro)**
> tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
> proc on /proc type proc (rw,noexec,nosuid,nodev)
> sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
> procbususb on /proc/bus/usb type usbfs (rw)
> udev on /dev type tmpfs (rw,mode=0755)
> tmpfs on /dev/shm type tmpfs  (rw,nosuid,nodev)
> devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
```

Per ripristinare `/` in modalità *lettura-scrittura*, è necessario riavviare la macchina virtuale.

### Risoluzione temporanea

Di default, su Linux il *timeout* delle periferiche SCSI è pari a 30 secondi.

Nei VMware Tools questa durata è aumentata a 180 secondi, ma consigliamo di incrementarla ulteriormente a 3600 secondi. 

Il comando seguente permette di eseguire questa operazione per la sessione corrente:

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Per impostare questo valore all’avvio della macchina:

```sh
>   $ nano /etc/rc.local 
	
	#!/bin/sh -e
	#
	# rc.local
	#
	# This script is executed at the end of each multiuser runlevel.
	#
	# Make sure that the script will "exit 0" on success or any other value on error.
	#
	# In order to enable or disable this script just change the execution
	bit
	#
	# By default this script does nothing.

	echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
	exit 0
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
