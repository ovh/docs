---
title: 'Modificare la password di root su un server dedicato Linux'
slug: modificare-password-root-server-linux
excerpt: 'Come modificare la password dell’utente root su un server Linux'
section: 'Diagnostica e modalità Rescue'
---

**Ultimo aggiornamento: 05/12/2018**

## Obiettivo

Durante l’installazione o la reinstallazione di una distribuzione o di un sistema operativo, viene fornita una password per accedere con i privilegi di root. Per motivi di sicurezza ti consigliamo di modificarla seguendo la procedura descritta in questa [guida](https://docs.ovh.com/it/dedicated/mettere-in-sicurezza-un-server-dedicato/){.external}, valida anche in caso di perdita della password. 

**Questa guida ti mostra come effettuare l’operazione in queste due situazioni.**


## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external} con una distribuzione Linux
* Avere accesso in SSH (root)
* Essere connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}


## Procedura

### Modifica la password per l’accesso root

Se hai già effettuato una connessione con accesso root utilizzando la tua password attuale e vuoi semplicemente modificarla, connettiti al server in SSH e inserisci il seguente comando:

```sh
passwd
```

Successivamente, digita due volte la tua nuova password come indicato di seguito:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Sulle distribuzioni Linux, la password impostata **non verrà mostrata sullo schermo**.
>

### Modifica la password persa o dimenticata

#### Step 1: individua la partizione di sistema

Per eseguire questa operazione, dopo aver attivato la [modalità Rescue](https://docs.ovh.com/it/dedicated/rescue_mode/){.external} sul tuo server inserisci il seguente comando: 

```sh
fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Nell’esempio appena illustrato, la partizione di sistema è `/dev/hda1`. 

> [!primary]
>
> Se il tuo server è configurato con un RAID software, è necessario effettuare il mount del volume RAID (in generale `/dev/mdX`). 
>

#### Step 2: esegui il mount della partizione di sistema

Una volta individuata la partizione di sistema puoi effettuarne il mount attraverso il seguente comando:

```sh
mount /dev/hda1 /mnt/
```

#### Step 3: modifica la partizione di root

Di default, non è possibile apportare modifiche sulla partizione di sistema. Pertanto è necessario effettuare un accesso in scrittura utilizzando questo comando:

```sh
chroot /mnt
```

#### Step 4: modifica la password di root

L’ultimo step consiste nel modificare la password con il seguente comando:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Dopo aver aggiornato la password, modifica la modalità di avvio sul tuo server ed esegui il riavvio. 


## Per saperne di più

[Attivare e utilizzare la modalità rescue](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}

[Modificare la password amministratore su un server dedicato Windows](https://docs.ovh.com/it/dedicated/modificare-password-admin-su-server-windows/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.