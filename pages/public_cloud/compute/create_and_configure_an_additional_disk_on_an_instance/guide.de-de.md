---
title: Zusätzliches Volume auf einer Instanz erstellen und konfigurieren
excerpt: Erfahren Sie hier, wie Sie ein zusätzliches Block Storage Volume erstellen, an Ihre Public Cloud Instanz anhängen und unter Linux oder Windows konfigurieren
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

## Ziel

Sie können zusätzliche Disks für Ihre Public Cloud Instanzen erstellen.
Das kann in folgenden Fällen hilfreich sein:

- Sie möchten Ihre Speicherkapazität erhöhen, ohne das Instanzmodell zu verändern.
- Sie benötigen hochverfügbaren und leistungsfähigen Speicherplatz.
- Sie möchten sowohl Ihren Storage als auch Ihre Daten zu einer anderen Instanz verschieben.
- Sie bereiten eine Umgebung für die Verwendung von [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform) vor.

**Diese Anleitung erklärt, wie Sie eine zusätzliche Disk erstellen und auf Ihrer Instanz konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps).
- Sie haben administrativen Zugriff (sudo) auf Ihre Instanz über SSH (Linux) oder RDP (Windows).
- Vorbereitung der Umgebung für die Verwendung mit [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform).

<!-- CP-NAV-START:publiccloud-projects -->
---
### Zugriff auf das OVHcloud Kundencenter
- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus
---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
>
> Diese Funktion ist derzeit für Metal Instanzen nicht verfügbar.
>

## In der praktischen Anwendung

### Die verschiedenen Volume-Typen

OVHcloud bietet drei Arten von Block Storage Volumes, die jeweils an spezifische Leistungs-, Kapazitäts- und Kostenanforderungen angepasst sind. Diese Lösungen hängen persistente Speichervolumes mit hoher Zuverlässigkeit und Verfügbarkeit an Ihre Instanzen an. Wenn die Funktion verfügbar ist, kann Verschlüsselung bei der Erstellung eines Volumes für alle Volume-Typen außer Classic Multi-Attach Volumes in 3AZ-Regionen aktiviert werden.

/// details | **Classic - 500 IOPS garantiert**

Das Volume Classic ist eine zuverlässige und kostengünstige Speicherlösung, die ideal für Workloads ist, die eine moderate Leistung erfordern. Es bietet 500 IOPS und ist somit für folgende Anwendungen geeignet:

- Hosting klassischer Webanwendungen
- Speicherung kleiner bis mittlerer Datenbanken
- Datensicherung und -archivierung

In den 3AZ-Regionen sind Classic Volumes regionale Dienste, die *Distributed Erasure Coding* über mehrere Availability Zones verwenden. Dadurch wird sichergestellt, dass die Daten ohne Auswirkung oder Unterbrechung verfügbar sind, wenn eine Zone ausfällt, sofern die Anforderungen einer resilienten *Multi-Attach*-Architektur erfüllt werden. Weitere Informationen finden Sie in unserer Anleitung "[Proper Usage and Limitations of Classic Multi-Attach Block Storage in 3AZ Regions](/pages/public_cloud/compute/classic_block_multi_az_limitations)".

///

/// details | **High Speed Gen2 – 30 IOPS/GB und bis zu 20.000 IOPS**

High Speed Volumes der zweiten Generation sind für die anspruchsvollsten Workloads optimiert. Die Leistung skaliert mit der Volume-Größe:

- **IOPS**: 30 IOPS/GB (Basis 3.000 IOPS für 10–100 GB, bis zu 20.000 IOPS)
- **Durchsatz**: 0,5 MB/s/GB (Basis 50 MB/s für 10–100 GB, bis zu 512 MB/s)
- **Maximale Größe**: 12 TB

Dieser Volume-Typ wird für folgende Anwendungen empfohlen:

- Big Data und Analysen in Echtzeit
- Künstliche Intelligenz und Machine Learning
- Verarbeitung großer Datenbanken und High Performance Storage

///

> [!primary]
>
> **Sie können High Speed (Gen1) Volumes nicht mehr über das OVHcloud Kundencenter bestellen.** Sie wurden durch High Speed Gen2 Volumes zum gleichen Preis ersetzt, mit besserer Leistung für Volumes über 100 GB. High Speed Volumes bleiben über die API, Terraform und OpenStack verfügbar.
>
> Bestehende High Speed Volumes werden weiterhin unterstützt. Sie können auch [den Typ Ihres Block Storage Volumes ändern](/pages/public_cloud/compute/switch_volume_type), um diese auf Gen2 zu migrieren.
>

![standardvolumes](images/volume-types.png){.thumbnail}

> [!primary]
>
> Jeder Volume-Typ ist auch als verschlüsselte Version verfügbar (**LUKS**). Diese Volumes gewährleisten die Vertraulichkeit der Daten, ohne die Leistung zu beeinträchtigen. Sie sind über das OVHcloud Kundencenter sowie mit den im nächsten Abschnitt beschriebenen Tools verfügbar, indem Sie den `<volume_type>-luks`-Typ angeben.
>

### Ein neues Volume hinzufügen

> [!tabs]
> **Über das OVHcloud Kundencenter**
>>
>> Öffnen Sie `Block Storage`{.action} im linken Menü unter **Storage und Backups**.
>>
>> Klicken Sie auf `Volume erstellen`{.action}.
>>
>> ![Projekt auswählen](images/avolume01.png){.thumbnail}
>>
>> Wählen Sie den Standort, den Typ, die Verschlüsselung, die Kapazität und einen Namen aus. Klicken Sie auf `Volume erstellen`{.action}.
>>
>> > [!warning]
>> >
>> > Hinweis: Das Volume muss in derselben Region wie die Instanz erstellt werden, mit der es verbunden werden soll. Ein in einer anderen Region erstelltes Volume kann entfernt und in der richtigen Region neu erstellt werden.
>> >
>>
>> ![create disk](images/avolume02.png){.thumbnail}
>>
>> Die Disk wird nun im Kundencenter angezeigt.
>>
>> ![configure disk](images/avolume03.png){.thumbnail}
>>
>> Klicken Sie auf den Button `...`{.action} neben dem Volume und wählen Sie `Mit Instanz verbinden`{.action}.
>>
>> ![attach disk 01](images/avolume04.png){.thumbnail}
>>
>> Wählen Sie eine Instanz aus und klicken Sie auf `Bestätigen`{.action}.
>>
>> ![attach disk 02](images/avolume05.png){.thumbnail}
>>
>> Der Verbindungsvorgang beginnt. Dies kann einige Minuten dauern.
>>
>> > [!warning]
>> > Achten Sie darauf, die aktuelle Seite in Ihrem OVHcloud Kundencenter nicht zu verlassen, während die Disk angehängt wird. Andernfalls könnte der Vorgang unterbrochen werden.
>> >
>>
> **Via Terraform**
>> > [!warning]
>> >
>> > Bitte beachten Sie, dass die Volume-Typen `high-speed-gen2` oder `luks` möglicherweise nicht in allen Regionen verfügbar sind.
>> >
>>
>> Volume-Typen:
>>
>> - Classic
>> - High-speed
>> - High-speed-gen2
>> - Classic-luks
>> - High-speed-luks
>> - High-speed-gen2-luks
>>
>> Typen, die mit "-luks" enden, sind verschlüsselt (LUKS).
>>
>> > [!warning]
>> >
>> > Beim Erstellen eines **-luks** Datenträgers wird automatisch ein dedizierter Schlüssel erstellt.
>> >
>> > Dieser Schlüssel sollte nicht geändert oder gelöscht werden, wenn er mit einem Block Storage Volume verknüpft ist. Ansonsten können die Daten auf diesem Volume und alle zugehörigen Snapshots dauerhaft nicht wiederhergestellt werden.
>> >
>>
>> Um ein einfaches Block Storage Volume zu erstellen, benötigen Sie 3 Elemente:
>>
>> - Name des Volumes
>> - Region
>> - Größe des Volumes in GB
>>
>> In unserem Beispiel erstellen wir einen Block Storage in der Region **GRA11** mit einer Größe von **10 GB**. Fügen Sie der Datei *simple_blockstorage.tf* die folgenden Zeilen hinzu:
>>
>> ```python
>> # Erstellung eines Block Storage Volumes
>> resource "openstack_blockstorage_volume_v3" "terraform_blockstorage" {
>>   name   = "terraform_blockstorage" # Name des Block Storage-Volumes
>>   size   = 10                       # Volumegröße
>>   region = "GRA11"                  # Region
>>   volume_type = "volume_type"       # classic, high-speed, high-speed-gen2 oder equivalent `-luks`
>> }
>> ```
>> 
>> Anschließend binden wir es an die Zielinstanz.
>>
>> > [!warning]
>> > Die Instanz und das Volume müssen sich in derselben Region befinden.
>> >
>>
>> Fügen Sie unter den vorhergehenden Zeilen die folgenden Zeilen hinzu:
>> 
>> ```python
>> # Volume mit Instanz verbinden
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<ihre_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Erstellen Sie das Volume und verbinden Sie es mit folgendem Befehl:
>>
>> ```console
>> terraform apply
>> ```
>>
>> Die Ausgabe sollte wie folgt aussehen:
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
>>       + volume_type       = (known after apply)
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
> **Über das Horizon-Interface**
>> Gehen Sie im Dropdown-Menü auf `Volumes`{.action} und klicken Sie dann auf `Create Volume`{.action}.
>>
>> ![create volume block storage](images/horizon_create_volume.png){.thumbnail}
>>
>> Geben Sie den Volume-Namen ein, wählen Sie einen Typ aus und klicken Sie dann auf `Create Volume`{.action}.
>>
>> > [!warning]
>> >
>> > Bitte beachten Sie: Wenn der Volume-Typ `high-speed-gen2` oder `luks` nicht in der Liste erscheint, ist er in dieser Region nicht verfügbar.
>> >
>>
>> ![create volume block storage 02](images/horizon_create_volume_02.png){.thumbnail width="1000"}
>>
>> Klicken Sie auf das Pfeilsymbol am Ende der Zeile `Edit Volume` und dann auf `Manage Attachments`{.action}.
>>
>> ![Attach a block storage volume to an instance](images/horizon_manage_attachments.png){.thumbnail}
>>
>> Wählen Sie die Instanz aus und klicken Sie auf `Attach Volume`{.action}.
>>
>> ![Attach a block storage volume to an instance 02](images/horizon_manage_attachments_display.png){.thumbnail}
>>
> **Über die OpenStack CLI**
>> > [!warning]
>> >
>> > Bitte beachten Sie: Wenn der Volume-Typ `high-speed-gen2` oder `luks` nicht in der Liste erscheint, ist er in dieser Region nicht verfügbar.
>> >
>>
>> Volume-Typen:
>>
>> - Classic
>> - High-speed
>> - High-speed-gen2
>> - Classic-luks
>> - High-speed-luks
>> - High-speed-gen2-luks
>>
>> Typen, die mit "-luks" enden, sind verschlüsselt (LUKS).
>>
>> > [!warning]
>> >
>> > Beim Erstellen eines **-luks**-Volumes wird automatisch ein dedizierter Schlüssel erstellt.
>> >
>> > Dieser Schlüssel sollte nicht geändert oder gelöscht werden, wenn er mit einem Block Storage Volume verknüpft ist. Ansonsten können die Daten auf diesem Volume und alle zugehörigen Snapshots dauerhaft nicht wiederhergestellt werden.
>> >
>>
>> In der Region verfügbare Volume-Typen auflisten:
>>
>> ```bash
>> openstack volume type list
>> ```
>>
>> Erstellen Sie ein Volume mit mindestens einer Größe (in GB) und einem Typ. Optional können Sie einen Namen angeben.
>>
>> ```bash
>> openstack volume create --size 1 --type high-speed-gen2 volumeName # classic, high-speed, high-speed-gen2 or equivalent `-luks`
>> ```
>>
>> Verwenden Sie den folgenden Befehl, um ein Volume an eine in der Region verfügbare Instanz anzufügen:
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
> **Über die OVHcloud CLI**
>> > [!warning]
>> >
>> > Wenn der Volume-Typ `high-speed-gen2` oder `luks` nicht in der Liste erscheint, ist er in dieser Region nicht verfügbar.
>> >
>>
>> | Option | Beschreibung |
>> |--------|--------------|
>> | `<region>` | Region, in der das Volume erstellt wird (z. B. `GRA11`) |
>> | `--name` | Name des Volumes |
>> | `--size` | Größe des Volumes in GB |
>> | `--type` | Volume-Typ: `classic`, `high-speed`, `high-speed-gen2` oder entsprechende `-luks`-Variante |
>> | `--wait` | Warten, bis die Erstellung abgeschlossen ist, bevor das Programm beendet wird |
>>
>> Erstellen Sie ein Volume, indem Sie die Region, einen Namen, die Größe in GB und einen Typ angeben:
>>
>> ```bash
>> ovhcloud cloud storage-block create <region> --name <volume-name> --size <size-in-GB> --type <volume-type> --wait
>> ```
>>
>> Sobald das Volume erstellt ist, hängen Sie es an eine Instanz an:
>>
>> | Parameter | Beschreibung |
>> |-----------|--------------|
>> | `<volume_id>` | ID des anzuhängenden Volumes |
>> | `<instance_id>` | ID der Instanz, an die das Volume angehängt werden soll |
>>
>> ```bash
>> ovhcloud cloud storage-block attach <volume_id> <instance_id>
>> ```
>>

### Konfiguration des neuen Volumes

Diese Beispiele setzen voraus, dass Sie mit erhöhten Rechten angemeldet sind.

#### Unter Linux

Stellen Sie eine [SSH-Verbindung](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) zur Instanz her und verwenden Sie den folgenden Befehl, um die eingehängten Disks aufzulisten.

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
> In diesem Beispiel bezieht sich `vda` auf die originäre Disk der Instanz. Die zusätzliche Disk ist demzufolge als `vdb` benannt.
>

Erstellen Sie eine Partition auf der zusätzlichen Disk:

Wenn Ihre zusätzliche Festplatte weniger als 2 TB groß ist:

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

Wenn Ihre zusätzliche Festplatte größer als 2 TB ist:

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

Formatieren Sie die Partition `vdb1`:

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

Mounten Sie die Partition:

```bash
sudo mkdir /mnt/disk
```

```bash
sudo mount /dev/vdb1 /mnt/disk/
```

Überprüfen Sie den Mountpunkt:

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
> Das Mounten ist nach einem Neustart nicht persistent. Um den Mountvorgang zu automatisieren, muss die Datei `fstab` angepasst werden.
>

Ermitteln Sie die UUID des neuen Volumes:

```bash
sudo blkid
```

```console
/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Öffnen Sie `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Fügen Sie diese Zeile hinzu und ersetzen Sie die UUID durch Ihre eigene:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Speichern Sie und verlassen Sie den Editor. Die Disk wird nun nach jedem Neustart automatisch gemountet.

#### Unter Windows

Stellen Sie eine Remotedesktop-Verbindung (RDP) mit Ihrer Windows-Instanz her.

Klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie die `Datenträgerverwaltung`{.action}.

![disk management](images/start-menu.png){.thumbnail}

Die Disk wird als unbekanntes Volume mit nicht zugewiesenem Speicherplatz angezeigt.

![Volume](images/disk-management-01.png){.thumbnail}

Wenn die Disk offline ist, initialisieren Sie sie über die [Windows GUI](#initDiskManagement) oder mit [DISKPART](#initDiskpart). Andernfalls fahren Sie mit der [Formatierung](#formatDiskManagement) fort.

##### **Initialisierung der Disk in der Datenträgerverwaltung** <a name="initDiskManagement"></a>

Klicken Sie mit der rechten Maustaste auf die Disk und wählen Sie `Online`{.action}.

Wenn die Disk offline ist, klicken Sie mit der rechten Maustaste darauf und wählen Sie `Online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Klicken Sie erneut mit der rechten Maustaste darauf und wählen Sie `Festplatte initialisieren`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Wählen Sie als Nächstes `MBR`{.action}, wenn Ihre zusätzliche Disk weniger als 2 TB groß ist, oder `GPT`{.action}, wenn sie mehr als 2 TB groß ist, und klicken Sie dann auf `OK`{.action}.

![Disk-Initialisierung](images/initialize_disk.png){.thumbnail}

##### **Initialisierung der Disk mit DISKPART** <a name="initDiskpart"></a>

Klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie `Ausführen`{.action}.

![Disk-Initialisierung](images/diskpart.png){.thumbnail}

Geben Sie `cmd` ein und klicken Sie auf `OK`{.action}.

![Prompt](images/run-prompt.png){.thumbnail}

In der Eingabeaufforderung starten Sie DISKPART:

```console
C:\> diskpart
```

Führen Sie diese DISKPART-Befehle aus, um die Disk online zu schalten:

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

##### **Formatierung der Disk** <a name="formatDiskManagement"></a>

Klicken Sie in der `Datenträgerverwaltung`{.action} mit der rechten Maustaste auf die Disk und wählen Sie `Neues einfaches Volume...`{.action}.

![Disk Format](images/format-disk-01.png){.thumbnail}

Klicken Sie im Assistenten auf `Weiter`{.action}, um die Volumegröße zu bestätigen (standardmäßig auf das Maximum festgelegt), und dann erneut auf `Weiter`{.action}.

![Disk Format](images/format-disk-03.png){.thumbnail}

Akzeptieren Sie den Laufwerksbuchstaben oder wählen Sie einen anderen aus und klicken Sie dann auf `Weiter`{.action}.

![Disk Format](images/format-disk-04.png){.thumbnail}

Benennen Sie das Volume (optional) und klicken Sie auf `Weiter`{.action}.

![Disk Format](images/format-disk-05.png){.thumbnail}

Klicken Sie auf `Beenden`{.action}, um die Disk zu formatieren.

![Disk Format](images/format-disk-06.png){.thumbnail}

Die Disk wird im Datei-Explorer als Laufwerk angezeigt.

### Volume abtrennen

Bevor Sie ein Volume abtrennen, hängen Sie es im Betriebssystem aus.

> [!warning]
>
> Es kann eine Fehlermeldung angezeigt werden, wenn auf der zusätzlichen Disk Software oder Prozesse ausgeführt werden. In diesem Fall wird empfohlen, zunächst alle Prozesse zu beenden.
>

So **hängen Sie das Volume** im Betriebssystem aus, bevor Sie es von der Instanz trennen:

> [!tabs]
> **Unter Linux** <a name="linux"></a>
>>
>> [Verbinden Sie sich per SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) und listen Sie dann die angehängten Disks auf:
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
>> Hängen Sie die Partition aus:
>>
>> ```bash
>> sudo umount /dev/vdb1
>> ```
>>
>> Löschen Sie die zugehörige UUID aus der Datei `fstab`, andernfalls wird die Partition nach einem Neustart automatisch wieder gemountet.
>>
>> ```bash
>> sudo nano /etc/fstab
>> ```
>>
> **Unter Windows** <a name="windows"></a>
>>
>> Stellen Sie eine Remotedesktop-Verbindung (RDP) mit Ihrer Windows-Instanz her.
>>
>> Klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie die `Datenträgerverwaltung`{.action}.
>>
>> ![Datenträgerverwaltung](images/start-menu.png){.thumbnail}
>>
>> Klicken Sie mit der rechten Maustaste auf das Volume und wählen Sie `Laufwerkbuchstaben und -pfade ändern...`{.action}.
>>
>> ![unmount disk](images/unmountdisk.png){.thumbnail}
>>
>> Klicken Sie auf `Entfernen`{.action}.
>>
>> ![remove disk](images/changedriveletter.png){.thumbnail}
>>
>> Klicken Sie auf `Ja`{.action}, um zu bestätigen.
>>
>> ![remove disk](images/confirmunmounting.png){.thumbnail}
>>
>> Wenn Sie fertig sind, können Sie das Datenträgerverwaltungsfenster schließen.
>>

Zum Schluss trennen wir das Volume von der Instanz:

> [!tabs]
> **Über das OVHcloud Kundencenter**
>>
>> Öffnen Sie `Block Storage`{.action} im linken Menü unter **Storage und Backups**.
>>
>> Klicken Sie auf den Button `...`{.action} neben dem entsprechenden Volume und wählen Sie `Instanz trennen`{.action}.
>>
>> ![detach disk](images/detachinstance.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}.
>>
>> ![Disk Detach](images/confirminstancedetach.png){.thumbnail}
>>
> **Via Terraform**
>>
>> Löschen Sie diese Zeilen aus Ihrer Terraform-Datei:
>>
>> ```python
>> # Volume mit Instanz verbinden
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<ihre_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Führen Sie diesen Befehl aus, um die geplante Löschung zu überprüfen:
>>
>> ```console
>> terraform plan
>> ```
>>
>> Die Ausgabe sollte wie folgt aussehen:
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
>> Wenden Sie die Änderungen an:
>>
>> ```console
>> terraform apply
>> ```
>>
>> Die Ausgabe sollte wie folgt aussehen:
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
> **Über die OVHcloud CLI**
>>
>> | Parameter | Beschreibung |
>> |-----------|--------------|
>> | `<volume_id>` | ID des abzutrennenden Volumes |
>> | `<instance_id>` | ID der Instanz, von der das Volume abgetrennt werden soll |
>>
>> ```bash
>> ovhcloud cloud storage-block detach <volume_id> <instance_id>
>> ```
>>

## Weiterführende Informationen

[Die Größe einer zusätzlichen Disk erweitern](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Treten Sie unserer [User Community](/links/community) bei.
