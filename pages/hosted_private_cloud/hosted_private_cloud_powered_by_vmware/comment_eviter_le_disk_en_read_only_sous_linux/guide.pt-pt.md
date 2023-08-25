---
title: Como evitar a passagem para o modo leitura apenas do disco da sua VM em Linux
excerpt: Evitar a passagem em apenas leitura do disco da sua VM em Linux
updated: 2020-06-25
---


## Objetivo

É possível que, no seguimento de um evento ligado ao armazenamento, certas partições de uma máquina Linux fiquem disponíveis em modo leitura apenas.

**Este manual explica como corrigir este estado e reduzir esse risco**


## Instruções

Quando as partições estão em modo de leitura apenas, não é possível realizar qualquer escrita no sistema de ficheiros.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

É possível confirmar o estado do sistema de ficheiros com o comando `mount`

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

Para restaurar a `/` em *leitura apenas*, é necessário reiniciar a máquina virtual.

### Solução alternativa

Por predefinição em Linux, a *timeout* dos periféricos SCSI é de 30 segundos.

As VMware Tools podem aumentar essa duração para 180 segundos.

Recomenda-se que aumente esta duração para 3600 segundos. Este comando permitirá aumentar o timeout para 3600 na sessão atual.

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Para que este valor seja considerado aquando da reinicialização da máquina:

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

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
