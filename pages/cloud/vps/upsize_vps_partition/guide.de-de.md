---
title: 'VPS-Partitionierung nach einem Upgrade'
slug: vps-partitionierung-nach-einem-upgrade
section: 'Erste Schritte'
---

**Stand 13.12.2018**

## Einleitung

Nach einem Upgrade Ihres Virtual Private Server (VPS) kann eine erneute Partitionierung Ihres Speicherplatzes erforderlich sein. Im Folgenden wird die Vorgehensweise hierzu beschrieben.

> [!warning]
>
> Die Partitionierung kann Ihre Daten dauerhaft beschädigen. OVH übernimmt keine Haftung für Verlust oder Beschädigung Ihrer Daten. Vergessen Sie nicht, Ihre Daten zu speichern, bevor Sie die nächsten Schritte einleiten.
>

## Voraussetzungen

- SSH-Zugang zum VPS (Root-Zugriff)
- Serverstart im [Rescue-Modus](https://docs.ovh.com/de/vps/rescue/)

## Beschreibung

Nach einem Upgrade werden RAM und Prozessor (CPU) automatisch angepasst. Für den Speicherplatz erfolgt dagegen keine systematische Anpassung.

**In dieser Anleitung wird Ihnen Schritt für Schritt erklärt, wie Sie Ihren Speicherplatz vergrößern**.

### Sichern Ihrer Daten

Da eine Partitionierung zum Verlust von Daten führen kann, wird **dringend empfohlen**, vorab die Daten, die sich auf Ihrem VPS befinden, zu sichern.

### Aushängen der Partition

Wenn Sie mit Ihrem VPS im [Rescue-Modus](https://docs.ovh.com/de/vps/rescue/) verbunden sind, wird Ihre Partition automatisch erstellt. Um die Größe neu einzustellen, müssen Sie die Partition aushängen. Wenn Sie den Namen Ihrer Partition kennen, können Sie den folgenden Schritt überspringen. Wenn Sie den Namen nicht kennen, verwenden Sie den folgenden Befehl:

```sh
lsblk
```

Die dem Rescue-Modus entsprechende Partition ist die im Verzeichnis / erstellte, die in Wirklichkeit das Wurzelverzeichnis darstellt. Die Partition Ihres VPS wurde wahrscheinlich in einem /mnt zugeordneten Verzeichnis erstellt bzw. gar nicht eingehängt.

```sh
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Verwenden Sie den folgenden Befehl, um Ihre Partition auszuhängen:

```sh
umount /dev/sdb1
```

### Überprüfung des Dateisystems

Nachdem die Partition ausgehängt ist, sollte das Dateisystem (`filesystem check`) auf mögliche Fehler in der Partition überprüft werden. Der Befehl lautet wie folgt:

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

Wenn Sie Fehler feststellen, sollten Sie in jedem Fall entsprechende Maßnahmen ergreifen. Im Folgenden finden Sie einige der häufigsten Fehler:

- `bad magic number in superblock`: Fahren Sie nicht fort. Um dieses Problem zu beheben, befolgen Sie in der vorliegenden Anleitung die Anweisungen im Abschnitt „[Wie wird der Fehler *bad magic number in superblock* behoben?](https://docs.ovh.com/de/vps/vps-partitionierung-nach-einem-upgrade/#wie-wird-der-fehler-bad-magic-number-in-superblock-behoben)“.

- `/dev/vdb1 has unsupported feature(s): metadata_csum` gefolgt von `e2fsck: Get a newer version of e2fsck!`: Aktualisieren Sie e2fsck. Wenn die neueste Version nicht über `apt` (oder einen anderen Paketmanager) verfügbar ist, muss diese aus dem Quellcode kompiliert werden.

Die obenstehende Liste ist nicht vollständig.

### Öffnen der Anwendung fdisk

Wenn die Überprüfung des Dateisystems fehlerfrei beendet wird, öffnen Sie die Anwendung `fdisk`. Hier müssen Sie den Namen des Laufwerks und nicht den der Partition als Parameter angeben. Ist Ihre Partition zum Beispiel`sdb1` statt `vdb1`, dann lautet der Name des Laufwerks /dev/sdb.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Diese Anwendung verfügt über mehrere Unterbefehle, die Sie mit dem Befehl `m` auflisten können.
>

### Löschen der alten Partition

Es wird empfohlen, vor dem Löschen der vorherigen Partition die dem ersten Sektor entsprechende Zahl der Partition aufzubewahren. Diese Information erhalten Sie über den Befehl `p`{.action}. Sie steht unter dem Feld `Start`. Bewahren Sie diese Angabe für später auf.

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
> Ab diesem Punkt gibt es kein Zurück mehr, wenn Sie keine Datensicherung durchgeführt haben.
>

Löschen Sie anschließend die Partition mit dem Befehl `d`{.action}.

```sh
Command (m for help): d
Selected partition 1
```

Die einzige Partition wird automatisch gelöscht.

### Erstellung einer neuen Partition

Jetzt muss über den Befehl `n`{.action} eine neue Partition erstellt werden. Die Verwendung von Standardwerten wird empfohlen.

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

Vergewissern Sie sich, dass der Standardwert in der Zeile `First sector` mit dem Wert übereinstimmt, den Sie zuvor notiert haben. Stimmt er nicht überein, verwenden Sie den von Ihnen aufgeschriebenen Wert.

### Die Partition bootfähig machen

Jetzt muss sichergestellt werden, dass die Partition bootfähig ist. Das ist über den Befehl `a`{.action} möglich.

```sh
Command (m for help): a
 
Partition number (1-4): 1
```

Speichern Sie Ihre Änderungen und verlassen Sie die Anwendung über den Befehl `w`{.action}:

```sh
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Erweitern des Dateisystems auf der Partition

Die Partition wurde erweitert, das Dateisystem (filesystem) belegt allerdings immer noch so viel Platz wie zuvor. Geben Sie zum Erweitern den folgenden Befehl ein:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Überprüfung der Ergebnisse

Um zu überprüfen, ob das Erweitern funktioniert hat, können Sie die neu erstellte Partition einhängen und sich die Größe ansehen.

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

Die neue Größe der Partition finden Sie unter `size`.

### Wie wird der Fehler *bad magic number in superblock* behoben?

Wenn nach Eingabe des Befehls `e2fsck`{.action} die Fehlermeldung `bad magic number in superblock` erscheint, müssen Sie mithilfe eines Backup-Superblocks das Dateisystem überprüfen und reparieren. Um die verfügbaren Backup-Superblöcke zu sehen, geben Sie folgenden Befehl ein:

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

Verwenden Sie zum Überprüfen und Reparieren des Dateisystems den ersten Backup-Superblock:

```sh
fsck -b 32768 /dev/sdb1
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.