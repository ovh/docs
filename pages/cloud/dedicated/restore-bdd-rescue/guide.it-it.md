---
title: "Recupero dei database in modalità Rescue"
excerpt: "Scopri come accedere ai tuoi database e registrarli in modalità Rescue"
updated: 2023-04-13
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La modalità Rescue permette di accedere ai tuoi dati in modo permanente, anche se il sistema operativo del server o i software ospitati non funzionano più.

**Questa guida ti mostra come accedere al tuo sistema operativo in modalità Rescue e recuperare i file di database.**

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/), un [VPS](https://www.ovhcloud.com/it/vps/) o un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud (Windows escluso)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)


> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti mostra come eseguire le operazioni necessarie alla gestione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla creazione di servizi su un server, ti consigliamo di rivolgerti a un [fornitore specializzato](https://partner.ovhcloud.com/it/directory/) o di contattare la [nostra community](https://community.ovh.com/en/).
>


## Procedura

### Riavvia il tuo server in modalità Rescue

Per attivare la modalità Rescue sul tuo servizio, segui la guida corrispondente:

- [Server dedicati](/pages/cloud/dedicated/rescue_mode)
- [VPS](/pages/cloud/vps/rescue)
- [Instance Public Cloud](/pages/platform/public-cloud/put_an_instance_in_rescue_mode)

Segui le istruzioni di [questa sezione](#pci) per un **VPS** o un'istanza **Public Cloud**. Passa alla [sezione seguente](#dedicated) per un server **dedicato**. 

### Accedi ai tuoi dati su un VPS o un'istanza Public Cloud <a name="pci"></a>

Dobbiamo prima identificare il punto di mount che contiene `/` il nostro sistema.

Utilizzando i comandi `lsblk` e `fdisk -l`.

- Esempio di uscita **lsblk**:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- Esempio di uscita **fdisk -l**:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> Le seguenti sezioni di codice sono fornite a titolo illustrativo in relazione all'esempio di uscita di cui sopra. È necessario adattare le istruzioni alla configurazione effettiva e sostituire i valori nei comandi con le credenziali di disco e di volume.
>

In questo esempio, il disco principale (10 GB) è chiamato "sdb". I nostri dati in `/` sono quindi sulla partizione `/dev/sdb1`. (Mentre "sda" è in modalità Rescue e "sda1" la partizione principale in modalità Rescue è montata su `/`.)

Salviamo la partizione di sistema nella cartella `/mnt` e ne verifichiamo il contenuto:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#

Per avviare servizi sul sistema a partire dalla modalità Rescue, è necessario eseguire il mount di queste partizioni:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)

Continua con la sezione di recupero del [database qui sotto](#databases).
 
### Accedi ai tuoi dati su un server dedicato (configurazione RAID software) <a name="dedicated"></a>

Dobbiamo prima identificare il punto di mount che contiene `/` il nostro sistema.

utilizzando i comandi `lsblk` e `fdisk -l`.

Esempio di uscita:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> Le seguenti sezioni di codice sono fornite a titolo illustrativo in relazione all'esempio di uscita di cui sopra. È necessario adattare le istruzioni alla configurazione effettiva e sostituire i valori nei comandi con le credenziali di disco e di volume.
>

In questo esempio, i nostri dati in `/` si trovano sul volume `/dev/md3`.

Salviamo la partizione di sistema nella cartella `/mnt` e ne verifichiamo il contenuto:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Per avviare servizi sul sistema a partire dalla modalità Rescue, è necessario eseguire il mount di queste partizioni:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Recupero dei database <a name="databases"></a>

Una volta salite tutte le partizioni necessarie, dobbiamo poter eseguire ordini sul sistema stesso. Per farlo, utilizza il comando `chroot`:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
Tutti i comandi che stai per effettuare saranno applicati al tuo sistema invece dell'ambiente temporaneo della modalità Rescue.

A questo punto possiamo avviare il servizio `mysql`:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Utilizza il comando `mysqldump` per salvare il database in un file:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

In questo caso, l'utente `mysql` che si connette al database è `root`. L'opzione `-p` ti permette di inserire la password di `root` e il database recuperato è chiamato `scarif`.

Il file di database viene quindi registrato nella directory `/home` con il nome `dump.sql`.

Puoi anche salvare tutti i database in una sola volta:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

La lista del contenuto di `/home` mostra i due file di database creati dai comandi precedenti:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

Nel caso di tavole corrotte, questo comando può essere utilizzato per la riparazione:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

A partire dalla cartella `/home`, potrai inviare i tuoi file di backup verso un server remoto. In questo esempio utilizziamo lo strumento di trasferimento dei file `scp`:

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.