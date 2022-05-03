---
title: Umstellung der Festplatte Ihrer VM unter Linux auf ausschließliche Leseberechtigung verhindern
slug: umstellung-der-festplatte-auf-nur-lesen-unter-linux-verhindern
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/umstellung-der-festplatte-auf-nur-lesen-unter-linux-verhindern/'
excerpt: Umstellung der Festplatte Ihrer VM unter Linux auf ausschließliche Leseberechtigung verhindern
section: Verwaltung virtueller Maschinen
order: 10
---

**Stand 18.11.2020**

## Einleitung

Bei Vorgängen mit Bezug zu Datenspeichern kommt es vor, dass einige Partitionen einer Linux-Maschine nur gelesen werden können (“read only”).

**Diese Anleitung erklärt, wie dieser Modus korrigiert und dieses Risiko minimiert werden kann**


## Praktische Anwendung

Wenn die Partitionen nur gelesen werden können, ist kein Schreibvorgang im Dateisystem mehr möglich.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

Der Status des Dateisystems kann mit dem Befehl `mount` festgestellt werden. 

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

Um `/` wieder in den Modus *Lesen-Schreiben* zu versetzen, muss die virtuelle Maschine neu gestartet werden.

### Alternativlösung

Standardmäßig beträgt der *Timeout* für SCSI-Geräte unter Linux 30 Sekunden.

Die VMware Tools steigern diese Frist auf 180 Sekunden.

Es wird empfohlen, diese Frist auf 3600 Sekunden anzuheben. Mit diesem Befehl kann der Timeout in der laufenden Sitzung auf 3600 Sekunden erhöht werden.

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Damit dieser Wert bei Start der Maschine übernommen wird:

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
	# bits.
	#
	# By default this script does nothing.

	echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
	exit 0
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
