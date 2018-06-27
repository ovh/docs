---
title: Modificare la password di root su un VPS
slug: root-password
excerpt: Come modificare la password dell’utente root sui VPS OVH
section: Diagnostica e modalità Rescue
---

**Ultimo aggiornamento: 27/06/2018**

## Obiettivo

Durante l’installazione o la reinstallazione di una distribuzione, viene fornita una password per accedere con i privilegi di root. Per motivi di sicurezza ti consigliamo di modificarla seguendo la procedura descritta in [questa guida](https://docs.ovh.com/it/vps/consigli-sicurezza-vps/){.external}, valida anche in caso di perdita della password.  

**Questa guida ti mostra come effettuare l’operazione in queste due situazioni**.

## Prerequisiti

- Avere accesso in SSH al VPS (root)
- [Attivare la modalità Rescue sui VPS](https://docs.ovh.com/it/vps/rescue/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Procedura

### Modifica la password accedendo con l’utente root

Se disponi della tua password, la procedura è molto semplice. Accedi al tuo server e digita il comando:

```sh
passwd
```

Inserisci la nuova password e confermala. Visualizzerai questi messaggi:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Su una distribuzione Linux, la password impostata **non verrà mostrata sullo schermo**.
> 

### Modifica la password in caso di perdita

#### Step 1: identifica il punto di mount

Sui VPS 2016 l’operazione di mount è automatica. Per identificare dove è montata la partizione, è possibile utilizzare 2 comandi: 

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Nel nostro esempio, la partizione di sistema è montata su **/mnt/vdb1**.

#### Step 2: permessi CHROOT

A questo punto, affinché le modifiche vengano applicate sul tuo sistema, è necessario modificare la directory di root con il comando `chroot`.  

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Per verificare di aver effettuato correttamente l’operazione utilizza il comando `ls -l`, che restituirà l’elenco del contenuto della root del tuo sistema:

```sh
root@rescue-pro:/# ls -l
```

#### Step 3: modifica la password di root

Per modificare la password di root, utilizza il comando`passwd`:

```sh
passwd
```

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Riavvia il tuo VPS sul suo disco dallo Spazio Cliente OVH.

## Per saperne di più

[Introduzione a SSH](https://docs.ovh.com/it/dedicated/introduzione-ssh/){.external}

[Attivare la modalità Rescue sui VPS](https://docs.ovh.com/it/vps/rescue/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.