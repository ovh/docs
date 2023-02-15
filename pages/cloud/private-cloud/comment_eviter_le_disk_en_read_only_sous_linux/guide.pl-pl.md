---
title: Jak zapobiec sytuacji, w której dysk maszyny wirtualnej z systemem Linux przechodzi w tryb tylko do odczytu
slug: jak-zapobiec-trybowi-tylko-do-odczytu-na-dysku-z-systemem-linux
excerpt: Jak zapobiec sytuacji, w której dysk maszyny wirtualnej z systemem Linux przechodzi w tryb tylko do odczytu
section: Zarządzanie wirtualnymi maszynami
order: 10
updated: 2020-06-25
---

**Ostatnia aktualizacja z dnia 02-09-2020**

## Wprowadzenie

Niekiedy zdarza się, że po wystąpieniu incydentu związanego z przestrzenią dyskową, niektóre partycje wirtualnej maszyny z systemem Linux są tylko do odczytu.

**Ten przewodnik wyjaśnia, jak przywrócić tryb odczytu-zapisu i zmniejszyć ryzyko wystąpienia problemu**


## W praktyce

Gdy partycje są tylko do odczytu, w systemie plików nie ma już możliwości zapisu.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

Możliwe jest potwierdzenie stanu systemu plików za pomocą polecenia `mount`

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

Aby przywrócić tryb *odczytu-zapisu*, należy zrestartować wirtualną maszynę.

### Rozwiązanie pozwalające uniknąć problemu

W systemie Linux *timeout* urządzeń SCSI wynosi domyślnie 30 sekund.

VMware Tools wydłuża ten czas do 180 sekund.

Zalecamy wydłużenie tego czasu do 3600 sekund. Poniższa komenda pozwoli wydłużyć czas do 3600 sekund w bieżącej sesji.

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Aby wartość ta została uwzględniona przy uruchomieniu maszyny, zastosuj komendę:

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

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
