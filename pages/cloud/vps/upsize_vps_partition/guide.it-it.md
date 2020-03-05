---
title: 'Partizionare un VPS in seguito a un upgrade'
slug: partizionare-vps-in-seguito-a-un-upgrade
section: 'Per iniziare'
---

**Ultimo aggiornamento: 12/12/2018**

## Obiettivo

È possibile che, dopo un upgrade del tuo VPS, sia necessario effettuare un nuovo partizionamento dello spazio di storage. Questa guida ti mostra come eseguire questa operazione.

> [!warning]
>
> Il partizionamento potrebbe danneggiare i tuoi dati in modo irreversibile. OVH non è responsabile del loro eventuale deterioramento o perdita, ti consigliamo pertanto di realizzarne una copia prima di qualsiasi operazione. 
>

## Prerequisiti

- Avere accesso in SSH al VPS (root)
- Aver riavviato il server in [Rescue mode](https://docs.ovh.com/it/vps/rescue/)

## Procedura

In seguito a un upgrade, RAM e processore (CPU) vengono ridimensionati automaticamente. Lo spazio di storage disponibile resta invece invariato.

**Per aumentarlo, segui gli step descritti in questa guida**.

### Effettua il backup dei dati

Estendere una partizione può comportare la perdita dei dati presenti sul tuo VPS, motivo per il quale è **fortemente consigliato** realizzarne una copia.

### Smonta la partizione

L’accesso al tuo VPS in [modalità Rescue](https://docs.ovh.com/it/vps/rescue/) implica il mount automatico della tua partizione. Per ridimensionarla, è necessario smontarla. Se conosci il nome della tua partizione, salta questo step. In caso contrario, esegui il comando:

```sh
lsblk
```

La partizione corrispondente al Rescue mode sarà quella montata sulla directory /, utilizzata come root di sistema. La partizione del tuo VPS, invece, potrebbe non essere montata oppure essere localizzata in una cartella associata a /mnt.

```sh
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Per smontare la partizione, esegui il comando:

```sh
umount /dev/sdb1
```

### Verifica il filesystem

Una volta effettuata questa operazione, è opportuno assicurarsi che non siano presenti errori sulla partizione verificando il filesystem (`filesystem check`) con il comando: 

```sh
e2fsck -yf /dev/sdb1
 
e2fsck 1.42.9 (4-Feb-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb1: 37870/1310720 files (0.2% non-contiguous), 313949/5242462 blocks
```

In caso di errore, è necessario agire nel modo più adeguato a seconda dei casi. Di seguito alcuni tra gli errori più ricorrenti:

- `bad magic number in superblock`: non continuare. Segui la procedura descritta alla fine di questa guida per risolvere il problema.

- `/dev/vdb1 has unsupported feature(s): metadata_csum` seguito da `e2fsck: Get a newer version of e2fsck!`: aggiorna e2fsck. Se l’ultima versione non è disponibile via `apt` (o altri gestori di pacchetti), sarà necessario compilarla partendo dal codice sorgente.

Questa lista non è esaustiva.

### Apri l’applicazione fdisk

Se la verifica del filesystem avviene correttamente, esegui l’applicazione `fdisk`. Come parametro sarà necessario inserire il nome del disco, non quello della partizione. Ad esempio, se la tua partizione è `sdb1` invece di `vdb1`, il nome del disco sarà /dev/sdb.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Questa applicazione contiene numerosi sottocomandi. Per visualizzarli, digita `m`.
>

### Elimina la partizione precedente

Prima di eliminare la vecchia partizione, ti consigliamo di conservare il numero corrispondente al primo settore. Puoi ottenere questa informazione utilizzando il comando `p`{.action}. Il valore corrispondente è indicato sotto il campo `Start`. Conserva questo dato per gli step successivi.

```sh
Command (m for help): p
 
Disk /dev/sdb: 21.5 GB, 21474836480 bytes
54 heads, 49 sectors/track, 15851 cylinders, total 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000132ff
 
Device Boot Start End Blocks Id System
/dev/sdb1 * *2048* 41941745 20969849 83 Linux
```

> [!warning]
>
> Questo è un punto di non ritorno: assicurati di aver realizzato correttamente una copia dei tuoi dati.
>

Elimina la partizione eseguendo il comando `d`{.action}.

```sh
Command (m for help): d
Selected partition 1
```

La rimozione verrà effettuata automaticamente.

### Crea una nuova partizione

A questo punto, è necessario creare una nuova partizione con il comando `n`{.action}.  Ti consigliamo di utilizzare i valori predefiniti.

```sh
Command (m for help): n
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Assicurati che il valore predefinito indicato nella riga `First sector` corrisponda a quello annotato precedentemente (se differente, utilizza quest’ultimo). 

### Rendi la partizione avviabile (bootable)

Per assicurarti che la partizione sia avviabile, esegui il comando `a`{.action}. 

```sh
Command (m for help): a
 
Partition number (1-4): 1
```

Salva le modifiche ed esci dall’applicazione utilizzando il comando `w`{.action}:

```sh
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Estendi il filesystem

Hai aumentato la partizione ma il suo filesystem occupa ancora lo stesso spazio. Per estenderlo, inserisci questo comando:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Verifica i risultati

Per verificare che l’operazione sia andata a buon fine, esegui il mount della partizione appena creata e controlla la sua dimensione.

```sh
mount /dev/sdb1 /mnt
```
```sh
df -h
 
Filesystem Size Used Avail Use% Mounted on
/dev/sda1 991M 793M 132M 86% /
none 4.0K 0 4.0K 0% /sys/fs/cgroup
udev 1.9G 12K 1.9G 1% /dev
tmpfs 386M 360K 386M 1% /run
none 5.0M 0 5.0M 0% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

La nuova dimensione della partizione è indicata sotto il campo `Size`.

### Come risolvere gli errori *bad magic number in superblock*

Se il comando `e2fsck`{.action} restituisce il messaggio di errore `bad magic number in superblock`, verifica e correggi il filesystem utilizzando un superblock di backup. Per visualizzare i superblock disponibili, esegui questo comando:

```sh
dumpe2fs /dev/sdb1 | grep superblock
 
Primary superblock at 0, Group descriptors at 1-6
Backup superblock at 32768, Group descriptors at 32769-32774
Backup superblock at 98304, Group descriptors at 98305-98310
Backup superblock at 163840, Group descriptors at 163841-163846
Backup superblock at 229376, Group descriptors at 229377-229382
Backup superblock at 294912, Group descriptors at 294913-294918
Backup superblock at 819200, Group descriptors at 819201-819206
Backup superblock at 884736, Group descriptors at 884737-884742
Backup superblock at 1605632, Group descriptors at 1605633-1605638
Backup superblock at 2654208, Group descriptors at 2654209-2654214
Backup superblock at 4096000, Group descriptors at 4096001-4096006
Backup superblock at 7962624, Group descriptors at 7962625-7962630
Backup superblock at 11239424, Group descriptors at 11239425-11239430
Backup superblock at 20480000, Group descriptors at 20480001-20480006
Backup superblock at 23887872, Group descriptors at 23887873-23887878
```

Per controllare e riparare il filesystem, utilizza il primo superblock di backup disponibile.

```sh
fsck -b 32768 /dev/sdb1
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.