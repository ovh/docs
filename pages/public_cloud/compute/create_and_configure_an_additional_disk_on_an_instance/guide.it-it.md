---
title: 'Crea e configura un disco aggiuntivo sulla tua istanza'
excerpt: "Scopri come creare un volume Block Storage aggiuntivo, associarlo alla tua istanza Public Cloud e configurarlo su Linux o Windows"
updated: 2026-05-05
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Crea dischi supplementari per le tue istanze Public Cloud.
Ciò può essere utile nei seguenti casi:

- Per aumentare la capacità di storage senza modificare il modello di istanza
- Per avere uno spazio di storage high availability e performante
- Spostare lo storage e i dati verso un'altra istanza
- Se desideri utilizzare [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform), prepara l'ambiente.

**Questa guida ti mostra come creare un disco aggiuntivo e configurarlo sulla tua istanza.**

## Prerequisiti

- Disporre di un'istanza [Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) nel proprio account OVHcloud
- Avere un accesso amministratore (sudo) alla tua istanza via SSH
- Prepara l'ambiente per utilizzare [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform)

<!-- CP-NAV-START:publiccloud-projects -->
---
### Accesso allo Spazio Cliente OVHcloud
- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project
---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
>
> Questa funzionalità al momento non è disponibile per le istanze Metal.
>

## Procedura

### I diversi tipi di volumi

OVHcloud propone tre tipi di volumi Block Storage, ognuno dei quali risponde a esigenze specifiche in termini di performance, capacità e costi. Queste soluzioni ti permettono di associare volumi di storage persistenti alle tue istanze, garantendo un alto livello di affidabilità e disponibilità. Se la funzionalità è disponibile, è possibile attivare la crittografia durante la creazione di un volume per tutti i tipi di volume, ad eccezione dei volumi Classic Multi-Attach nelle aree 3AZ.

/// details | **Classic - 500 IOPS garantiti**

Il volume Classic è una soluzione di storage affidabile ed economica, ideale per carichi di lavoro che richiedono performance moderate. Offre 500 IOPS garantiti, che lo rendono adatto per i seguenti utilizzi:

- Hosting di applicazioni Web classiche
- Storage di database di piccole e medie dimensioni
- Backup e archiviazione dei dati

Nelle aree 3AZ, i volumi Classic sono servizi locali che utilizzano un Erasure Coding distribuito tra più zone di disponibilità. In questo modo è garantita la disponibilità dei dati senza impatto né interruzioni in caso di guasto di una zona, a condizione che siano rispettati i requisiti dell'architettura resiliente con collegamento multiplo. Per maggiori informazioni, consulta la nostra guida "[Utilizzo corretto e limitazioni dello storage Classic Multi-Attach nelle Region 3AZ](/pages/public_cloud/compute/classic_block_multi_az_limitations)".

///

/// details | **High Speed Gen2 – 30 IOPS/GB e fino a 20.000 IOPS**

La generazione 2 dei volumi High Speed è ottimizzata per i workload più esigenti. Le prestazioni si adattano alla dimensione del volume:

- **IOPS**: 30 IOPS/GB (base 3.000 IOPS per 10–100 GB, fino a 20.000 IOPS)
- **Throughput**: 0,5 MB/s/GB (base 50 MB/s per 10–100 GB, fino a 512 MB/s)
- **Dimensione massima**: 12 TB

Questo tipo di volume è consigliato per i seguenti utilizzi:

- Big Data e analisi in tempo reale
- Intelligenza artificiale e Machine Learning
- Elaborazione di grandi database e storage ad alte prestazioni

///

> [!primary]
>
> **Non è più possibile ordinare volumi High Speed (Gen1) dallo Spazio Cliente OVHcloud.** Sono stati sostituiti dai volumi High Speed Gen2 allo stesso prezzo, con prestazioni migliori per i volumi superiori a 100 GB. I volumi High Speed restano disponibili tramite API, Terraform e OpenStack.
>
> I volumi High Speed esistenti continuano a essere supportati. È inoltre possibile [modificare il tipo del volume Block Storage](/pages/public_cloud/compute/switch_volume_type) per migrarli al tipo High Speed Gen2.
>

![volume_types](images/volume-types.png){.thumbnail}

> [!primary]
>
> Ogni tipo di volume è disponibile anche in versione cifrata (**LUKS**). Questi volumi garantiscono la confidenzialità dei dati senza impatto sulle performance. Sono disponibili nello Spazio Cliente OVHcloud e con gli strumenti indicati nella sezione seguente, specificando il tipo `<volume_type>-luks`.
>

### Associa un nuovo volume

> [!tabs]
> **Dallo Spazio Cliente OVHcloud**
>>
>> Apri `Block Storage`{.action} nel menu a sinistra sotto **Storage e backup**.
>>
>> In questa sezione, clicca sul pulsante `Crea un volume`{.action}.
>>
>> ![seleziona il progetto](images/avolume01.png){.thumbnail}
>>
>> Seleziona la posizione, il tipo, la crittografia e la capacità. Inserisci un nome e clicca su `Crea il volume`{.action}.
>>
>> > [!warning]
>> >
>> > Nota: il volume deve essere creato nella stessa regione dell'istanza a cui si desidera associarlo. Se lo crei in un'altra Region, puoi eliminarlo e ricrearlo nella Region corretta.
>> >
>>
>> ![create disk](images/avolume02.png){.thumbnail}
>>
>> Il disco appare nello Spazio Cliente.
>>
>> ![configure disk](images/avolume03.png){.thumbnail}
>>
>> Clicca su `...`{.action} accanto al volume, poi seleziona `Associa all’istanza`{.action}.
>>
>> ![attach disk 01](images/avolume04.png){.thumbnail}
>>
>> Scegli un'istanza e clicca su `Conferma`{.action}.
>>
>> ![attach disk 02](images/avolume05.png){.thumbnail}
>>
>> L'associazione inizia. L'operazione può richiedere alcuni minuti.
>>
>> > [!warning]
>> > Ricordati di non uscire dalla pagina corrente dello Spazio Cliente OVHcloud mentre il disco è in corso di connessione. Questo potrebbe interrompere il processo.
>> >
>>
> **Via Terraform**
>> > [!warning]
>> >
>> > Ti ricordiamo che i tipi di volume `high-speed-gen2` o `luks` potrebbero non essere disponibili in tutte le regioni.
>> >
>>
>> Tipi di volumi:
>>
>> - Classic
>> - High-speed
>> - High-speed-gen2
>> - Classic-luks
>> - High-speed-luks
>> - High-speed-gen2-luks
>>
>> I tipi che terminano con -luks sono crittografati (LUKS).
>>
>> > [!warning]
>> >
>> > La creazione di un volume **-luks** genera automaticamente una chiave dedicata.
>> >
>> > Non modificare o eliminare questa chiave se è associata a un volume Block Storage. Questo renderebbe i dati di questo volume e tutti gli Snapshot definitivamente irrecuperabili.
>> >
>>
>> Per creare un volume block storage semplice, sono necessari 3 elementi:
>>
>> - Il nome del volume
>> - Regione
>> - Dimensione del volume in GB
>>
>> Nel nostro esempio, creeremo un block storage nella Region **GRA11** con una dimensione di **10 GB**. Aggiungere le righe seguenti a un file denominato *simple_blockstorage.tf*:
>>
>> ```python
>> # Creation of a block storage volume
>> resource "openstack_blockstorage_volume_v3" "terraform_blockstorage" {
>>   name   = "terraform_blockstorage" # Name of the block storage volume
>>   size   = 10                       # Volume size
>>   region = "GRA11"                  # Region where the volume must be created
>>   volume_type = "volume_type"       # classic, high-speed, high-speed-gen2 or equivalent `-luks`
>> }
>> ```
>>
>> Poi lo collegheremo all'istanza di destinazione.
>>
>> > [!warning]
>> > Istanza e volume devono trovarsi nella stessa area geografica.
>> >
>>
>> Aggiungere le seguenti righe sotto le righe precedenti:
>>
>> ```python
>> # Attach the volume to the instance
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<your_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Crea e associa il volume con il seguente comando:
>>
>> ```console
>> terraform apply
>> ```
>>
>> L'output dovrebbe essere simile al seguente:
>>
>> ```console
>> $ terraform apply
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   + create
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_blockstorage_volume_v3.terraform_blockstorage will be created
>>   + resource "openstack_blockstorage_volume_v3" "terraform_blockstorage" {
>>       + attachment        = (known after apply)
>>       + availability_zone = (known after apply)
>>       + id                = (known after apply)
>>       + metadata          = (known after apply)
>>       + name              = "terraform_blockstorage"
>>       + region            = "GRA11"
>>       + size              = 10
>>       + volume_type       = "high-speed-gen2"
>>     }
>>
>>   # openstack_compute_volume_attach_v2.volume_attach will be created
>>   + resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>       + device      = (known after apply)
>>       + id          = (known after apply)
>>       + instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780"
>>       + region      = (known after apply)
>>       + volume_id   = (known after apply)
>>     }
>>
>> Plan: 2 to add, 0 to change, 0 to destroy.
>>
>> Do you want to perform these actions in workspace "test_terraform"?
>>   Terraform will perform the actions described above.
>>   Only 'yes' will be accepted to approve.
>>
>>   Enter a value: yes
>>
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Creating...
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Still creating... [10s elapsed]
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Creation complete after 12s [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_compute_volume_attach_v2.volume_attach: Creating...
>> openstack_compute_volume_attach_v2.volume_attach: Still creating... [10s elapsed]
>> openstack_compute_volume_attach_v2.volume_attach: Creation complete after 14s [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
>> ```
>>
> **Tramite l'interfaccia Horizon**
>> Accedi alla sezione a tendina `Volumes`{.action}, clicca su `Volumes`{.action} e poi su `Create Volume`{.action}.
>>
>> ![create volume block storage](images/horizon_create_volume.png){.thumbnail}
>>
>> Inserisci il campo `Volume Name`{.action} e seleziona il tipo di volume che desideri. Clicca su `Create Volume`{.action}.
>>
>> > [!warning]
>> >
>> > Nota che se il tipo di volume `high-speed-gen2` o `luks` non è presente nell'elenco, significa che non è disponibile in questa area.
>> >
>>
>> ![create volume block storage 02](images/horizon_create_volume_02.png){.thumbnail width="1000"}
>>
>> Per associare questo volume a un'istanza, sulla linea del volume, clicca su la freccia accanto a `Edit Volume`{.action}. Clicca su `Manage Attachments`{.action}
>>
>> ![Attach a block storage volume to an instance](images/horizon_manage_attachments.png){.thumbnail}
>>
>> Seleziona l’istanza a cui vuoi associare il tuo volume e clicca su `Attach Volume`{.action}.
>>
>> ![Attach a block storage volume to an instance 02](images/horizon_manage_attachments_display.png){.thumbnail}
>>
> **Tramite la CLI OpenStack**
>> > [!warning]
>> >
>> > Nota che se il tipo di volume `high-speed-gen2` o `luks` non è presente nell'elenco, significa che non è disponibile in questa area.
>> >
>>
>> Tipi di volumi:
>>
>> - Classic
>> - High-speed
>> - High-speed-gen2
>> - Classic-luks
>> - High-speed-luks
>> - High-speed-gen2-luks
>>
>> I tipi che terminano con -luks sono crittografati (LUKS).
>>
>> > [!warning]
>> >
>> > La creazione di un volume **-luks** genera automaticamente una chiave dedicata.
>> >
>> > Non modificare o eliminare questa chiave se è associata a un volume Block Storage. Questo renderebbe i dati di questo volume e tutti gli Snapshot definitivamente irrecuperabili.
>> >
>>
>> Elencare i tipi di volumi disponibili nell'area:
>>
>> ```bash
>> openstack volume type list
>> ```
>>
>> Create un volume specificandone almeno le dimensioni (in GB) e un tipo tra quelli elencati in precedenza. È inoltre possibile specificare un nome per il volume al termine dell'ordine.
>>
>> ```bash
>> openstack volume create --size 1 --type high-speed-gen2 volumeName # classic, high-speed, high-speed-gen2 or equivalent `-luks`
>> ```
>>
>> Per associare un volume a un'istanza disponibile nella Region, esegui il comando:
>>
>> ```bash
>> openstack server add volume <server-id|server-name> <volume-id|volume-name>
>>
>> +-----------+-------------------------------------+
>> | Field | Value |
>> +-----------+-------------------------------------+
>> | ID | 7d3d670f- ****-****-****-60dd1e6**** |
>> | Server ID | 74317f97-****-****-80cf2d4**** |
>> | Volume ID | 7d3d670f-****-****-****-60dd1e6**** |
>> | Device | /dev/sdb |
>> | Tag | None |
>> +-----------+-------------------------------------+
>> ```
>>
> **Tramite la CLI OVHcloud**
>> > [!warning]
>> >
>> > Se il tipo di volume `high-speed-gen2` o `luks` non è presente nell'elenco, significa che non è disponibile in questa area.
>> >
>>
>> | Opzione | Descrizione |
>> |---------|-------------|
>> | `<region>` | Region in cui sarà creato il volume (es.: `GRA11`) |
>> | `--name` | Nome del volume |
>> | `--size` | Dimensione del volume in GB |
>> | `--type` | Tipo di volume: `classic`, `high-speed`, `high-speed-gen2`, o la variante `-luks` corrispondente |
>> | `--wait` | Attende il termine della creazione prima di uscire |
>>
>> Crea un volume specificando la Region, un nome, la dimensione in GB e un tipo:
>>
>> ```bash
>> ovhcloud cloud storage-block create <region> --name <volume-name> --size <size-in-GB> --type <volume-type> --wait
>> ```
>>
>> Una volta creato il volume, associalo a un'istanza:
>>
>> | Parametro | Descrizione |
>> |-----------|-------------|
>> | `<volume_id>` | ID del volume da associare |
>> | `<instance_id>` | ID dell'istanza a cui associare il volume |
>>
>> ```bash
>> ovhcloud cloud storage-block attach <volume_id> <instance_id>
>> ```
>>

### Configurazione del nuovo disco

Gli esempi che seguono presuppongono che tu sia connesso come utente con autorizzazioni sufficienti.

#### Con Linux

Apri una [connessione SSH alla tua istanza](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e utilizza il comando qui sotto per visualizzare i dischi associati.

```bash
lsblk
```

```console
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> In questo esempio, `vda` si riferisce al disco predefinito dell'istanza. Il disco aggiuntivo verrà chiamato `vdb`.
>

Crea una partizione sul disco aggiuntivo:

Se il disco aggiuntivo è inferiore a 2 TB:

```bash
sudo fdisk /dev/vdb
```

```console
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.

Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Se il disco aggiuntivo è più grande di 2 TB:

```bash
sudo parted /dev/vdb
```

```console
GNU Parted 3.5
Using /dev/vdb
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) help                                                             
  align-check TYPE N                       check partition N for TYPE(min|opt) alignment
  help [COMMAND]                           print general help, or help on COMMAND
  mklabel,mktable LABEL-TYPE               create a new disklabel (partition table)
  mkpart PART-TYPE [FS-TYPE] START END     make a partition
  name NUMBER NAME                         name partition NUMBER as NAME
  print [devices|free|list,all]            display the partition table, or available devices, or free space, or all found partitions
  quit                                     exit program
  rescue START END                         rescue a lost partition near START and END
  resizepart NUMBER END                    resize partition NUMBER
  rm NUMBER                                delete partition NUMBER
  select DEVICE                            choose the device to edit
  disk_set FLAG STATE                      change the FLAG on selected device
  disk_toggle [FLAG]                       toggle the state of FLAG on selected device
  set NUMBER FLAG STATE                    change the FLAG on partition NUMBER
  toggle [NUMBER [FLAG]]                   toggle the state of FLAG on partition NUMBER
  unit UNIT                                set the default unit to UNIT
  version                                  display the version number and copyright information of GNU Parted
(parted) mklabel gpt                                                      
(parted) mkpart primary 0 3750G                                           
Warning: The resulting partition is not properly aligned for best performance: 34s % 2048s != 0s
Ignore/Cancel? I                                                          
(parted) quit
```

Formatta la nuova partizione `vdb1`:

```bash
sudo mkfs.ext4 /dev/vdb1
```

```console
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Monta la partizione:

```bash
sudo mkdir /mnt/disk
sudo mount /dev/vdb1 /mnt/disk/
```

Verifica il punto di mount:

```bash
df -h
```

```console
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> Il mount non è persistente: il disco verrà scollegato al riavvio. Per automatizzare il mount, modifica il file `fstab`.
>

Recupera l'UUID del nuovo volume:

```bash
sudo blkid
```

```console
/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Apri `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Aggiungi questa riga sostituendo l'UUID con il tuo:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Salva ed esci. Il disco viene montato automaticamente a ogni riavvio.

#### Con Windows

Stabilisci una connessione RDP (Remote Desktop) con la tua istanza Windows.

Una volta connesso, clicca con il tasto destro sul pulsante `Inizia`{.action} e apri la `Gestisci i dischi`{.action}.

![disk management](images/start-menu.png){.thumbnail}

Il disco appare come volume sconosciuto con spazio non allocato.

![volume sconosciuto](images/disk-management-01.png){.thumbnail}

Se è offline, inizializzalo tramite l'[interfaccia utente Windows](#initDiskManagement) o l'[utility DISKPART](#initDiskpart). Altrimenti, passa alla [formattazione](#formatDiskManagement).

##### **Iniziare il disco nella gestione dei dischi** <a name="initDiskManagement"></a>

Clicca con il tasto destro sul disco e seleziona `online`{.action}.

Se il disco è indicato come offline, è probabile che sia dovuto alla politica applicata all'istanza. Per risolvere il problema clicca con il tasto destro sul disco e seleziona `online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Clicca di nuovo sul tasto destro e seleziona questa volta `Inizia il disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Quindi, selezionare `MBR`{.action} se il disco aggiuntivo è inferiore a 2TB, o `GPT`{.action} se è superiore a 2TB, quindi fare clic su `OK`{.action}.

![inizializza il disco](images/initialize_disk.png){.thumbnail}

##### **Iniziare il disco con DISKPART** <a name="initDiskpart"></a>

Fai un click con il tasto destro sul pulsante `Inizia`{.action} e apri `Esegui`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Clicca su `cmd` e clicca su `OK`{.action} per aprire l'applicazione della riga di comando.

![run prompt](images/run-prompt.png){.thumbnail}

Dal prompt dei comandi, apri DISKPART:

```console
C:\> diskpart
```

Esegui questi comandi DISKPART per mettere il disco online:

```console
DISKPART> san

SAN Policy : Offline Shared

DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

- Implementation of the strategy on the extra disk:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB

DISKPART> select disk 1

Disk 1 is now the selected disk.

DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.

DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No

DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

##### **Formatura del disco** <a name="formatDiskManagement"></a>

Nello strumento `Gestione disco`{.action}, clicca con il tasto destro sul nuovo disco e seleziona `Nuovo volume semplice...`{.action}.

![formato disk](images/format-disk-01.png){.thumbnail}

Nell'assistente, clicca su `Avanti`{.action} per confermare la dimensione del volume (massimo per impostazione predefinita), quindi di nuovo su `Avanti`{.action}.

![formato disk](images/format-disk-03.png){.thumbnail}

Accetta la lettera di unità o selezionane un'altra, poi clicca su `Avanti`{.action}.

![formato disk](images/format-disk-04.png){.thumbnail}

Assegna un nome al volume (facoltativo) e clicca su `Avanti`{.action}.

![formato disk](images/format-disk-05.png){.thumbnail}

Clicca su `Fine`{.action} per formattare il disco.

![formato disk](images/format-disk-06.png){.thumbnail}

Il disco è disponibile in Esplora file.

### Scollega un volume

Prima di scollegare un volume, smontalo dal sistema operativo.

> [!warning]
>
> Un messaggio di errore può essere visualizzato se sul disco aggiuntivo sono in corso processi o software. In questo caso, si raccomanda di interrompere tutti i processi prima di continuare.
>

**Smonta il volume** dal sistema operativo prima di scollegarlo dall'istanza:

> [!tabs]
> **Con Linux**
>>
>> Apri una [connessione SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) e visualizza i dischi associati:
>>
>> ```bash
>> lsblk
>> ```
>>
>> ```console
>> NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
>> vda 254:0 0 10G 0 disk
>> └─vda1 254:1 0 10G 0 part /
>> vdb       8:0    0   10G  0 disk
>> └─vdb1    8:1    0   10G  0 part /mnt/disk
>> ```
>>
>> Smonta la partizione:
>>
>> ```bash
>> sudo umount /dev/vdb1
>> ```
>>
>> Rimuovi la voce dal fstab; altrimenti la partizione verrà rimontata dopo il riavvio.
>>
>> ```bash
>> sudo nano /etc/fstab
>> ```
>>
>> Salva e lascia l'editor.
>>
> **Con Windows**
>>
>> Stabilisci una connessione RDP (Remote Desktop) con la tua istanza Windows.
>>
>> Una volta connesso, clicca con il tasto destro sul menu `Avviare`{.action} e apri `Gestione disco`{.action}.
>>
>> ![gestione dei dischi](images/start-menu.png){.thumbnail}
>>
>> Fai click con il tasto destro sul volume che vuoi smontare e selezionare `Cambia lettera e percorso di unità...`{.action}.
>>
>> ![unmount disk](images/unmountdisk.png){.thumbnail}
>>
>> Clicca su `Rimuovi`{.action} per rimuovere il disco.
>>
>> ![remove disk](images/changedriveletter.png){.thumbnail}
>>
>> Clicca su `Sì`{.action} per confermare l'eliminazione della lettera del disco.
>>
>> ![confirm remove disk](images/confirmunmounting.png){.thumbnail}
>>
>> Una volta terminata, è possibile chiudere la finestra di gestione del disco.
>>

Infine, scollegheremo il volume dell’istanza:

> [!tabs]
> **Dallo Spazio Cliente OVHcloud**
>>
>> Apri `Block Storage`{.action} nel menu a sinistra sotto **Storage e backup**.
>>
>> Clicca sui `...`{.action} in corrispondenza del volume corrispondente e seleziona `Scollega dall'istanza`{.action}.
>>
>> ![detach disk](images/detachinstance.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action}.
>>
>> ![confirm disk detach](images/confirminstancedetach.png){.thumbnail}
>>
> **Via Terraform**
>> 
>> Elimina queste righe dal tuo file Terraform:
>>
>> ```python
>> # Associa il volume all'istanza
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<tua_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Esegui questo comando per verificare che la risorsa corretta venga eliminata:
>>
>> ```console
>> terraform plan
>> ```
>>
>> L'output dovrebbe essere simile al seguente:
>>
>> ```console
>> $ terraform plan
>> openstack_compute_volume_attach_v2.va_1: Refreshing state... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_blockstorage_volume_v3.terraform_volume: Refreshing state... [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   - destroy
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_compute_volume_attach_v2.va_1 will be destroyed
>>   # (because openstack_compute_volume_attach_v2.va_1 is not in configuration)
>>   - resource "openstack_compute_volume_attach_v2" "va_1" {
>>       - device      = "/dev/sdb" -> null
>>       - id          = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>       - instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780" -> null
>>       - region      = "GRA11" -> null
>>       - volume_id   = "daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>     }
>> 
>> Plan: 0 to add, 0 to change, 1 to destroy.
>> ```
>>
>> Applica le modifiche:
>> 
>> ```console
>> terraform apply
>> ```
>>
>> L'output dovrebbe essere simile al seguente:
>>
>> ```console
>> $ terraform apply
>> openstack_compute_volume_attach_v2.va_1: Refreshing state... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_blockstorage_volume_v3.terraform_volume: Refreshing state... [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   - destroy
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_compute_volume_attach_v2.va_1 will be destroyed
>>   # (because openstack_compute_volume_attach_v2.va_1 is not in configuration)
>>   - resource "openstack_compute_volume_attach_v2" "va_1" {
>>       - device      = "/dev/sdb" -> null
>>       - id          = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>       - instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780" -> null
>>       - region      = "GRA11" -> null
>>       - volume_id   = "daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>     }
>>
>> Plan: 0 to add, 0 to change, 1 to destroy.
>> 
>> Do you want to perform these actions in workspace "test_terraform"?
>>   Terraform will perform the actions described above.
>>   Only 'yes' will be accepted to approve.
>>
>>   Enter a value: yes
>>
>> openstack_compute_volume_attach_v2.va_1: Destroying... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_compute_volume_attach_v2.va_1: Still destroying... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806, 10s elapsed]
>> openstack_compute_volume_attach_v2.va_1: Destruction complete after 17s
>>
>> Apply complete! Resources: 0 added, 0 changed, 1 destroyed.
>> ```
>>
> **Tramite la CLI OVHcloud**
>>
>> | Parametro | Descrizione |
>> |-----------|-------------|
>> | `<volume_id>` | ID del volume da scollegare |
>> | `<instance_id>` | ID dell'istanza da cui scollegare il volume |
>>
>> ```bash
>> ovhcloud cloud storage-block detach <volume_id> <instance_id>
>> ```
>>

## Per saperne di più

[Aumenta la dimensione di un disco aggiuntivo](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Contatta la nostra [Community di utenti](/links/community).
