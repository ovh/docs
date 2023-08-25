---
title: Konfigurieren eines Software-Mirror (RAID) mit Windows
excerpt: "Erfahren Sie hier, wie Sie die Disk-Konfiguration Ihres Servers nach einem Austausch wiederherstellen"
updated: 2023-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


## Ziel

In einem Windows-System wird Datenredundanz durch Spiegelung des primären Laufwerks auf ein zweites erreicht. Dies ist vergleichbar mit einer RAID 1-Konfiguration, umfasst jedoch nur zwei Disks.

**Diese Anleitung erklärt, wie Sie die Spiegelung der Datenträger Ihres Windows-Systems neu konfigurieren, wenn sie aufgrund von Beschädigung oder Ausfall neu erstellt werden muss.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) mit Software-Mirror-Konfiguration.
- Sie haben administrativen Zugriff auf Ihren Server über RDP.

## In der praktischen Anwendung

Stellen Sie eine Remote Desktop (RDP) Verbindung zu Ihrem Server her.

Wenn Sie eingeloggt sind, klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie `Ausführen`{.action}.

![Software spiegelt Windows](images/raid-soft-windows-01.png){.thumbnail}

Geben Sie "cmd" ein und klicken Sie auf `OK`{.action}.

![Software spiegelt Windows](images/raid-soft-windows-02.png){.thumbnail}

Welche Methode zu verwenden ist, hängt vom Partitionstyp Ihrer Disks ab. Befolgen Sie die Anweisungen in [diesem Abschnitt](#mbr) für **MBR**, oder gehen Sie zum [nachfolgenden Abschnitt](#gpt) über, wenn **GPT** verwendet wird. Wenn Sie unsicher sind, führen Sie `diskpart` an der Eingabeaufforderung aus und geben Sie `list disk` ein. Überprüfen Sie die Spalte "Gpt" in der Ausgabe.

### Neuerstellen der Spiegelung (MBR-Partitionsschema) <a name="mbr"></a>

Öffnen Sie an der Eingabeaufforderung DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart führt Befehle aus, ohne Warnungen auszugeben oder eine Bestätigung anzufordern. Alle in DiskPart vorgenommenen Änderungen sind unwiderruflich. Die Eingabe von Befehlen bei Auswahl der falschen Disk oder des falschen Volumes kann daher einen sofortigen Datenverlust verursachen und/oder den Systemstart blockieren. Wir empfehlen daher äußerste Vorsicht bei der Ausführung jedes einzelnen Befehls.
>

#### Auflistung aller Disks und Volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```


In diesem Beispiel ist `Disk 1` ein Ersatzlaufwerk, das installiert wurde, um die fehlerhafte `Disk M0` zu ersetzen, die zuvor [physisch entfernt](/pages/bare_metal_cloud/dedicated_servers/disk_replacement) wurde.


> [!primary]
>
> Die folgenden Codeabschnitte dienen der Illustration und basieren auf der obigen Beispielausgabe. Sie müssen die Anweisungen an Ihre eigene Konfiguration anpassen, indem Sie die Werte in den Befehlen durch Ihre Disk- und Volume-Bezeichner ersetzen.
>


#### Entfernen der ausgetauschten Disk aus der Konfiguration


```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```
 
#### Initialisierung der Ersatz-Disk
 
```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```
 
#### Neuerstellen der Spiegelung zwischen der ersten und der zweiten Disk
 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
<===>
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB      0 B   *

```

Wiederholen Sie diesen Schritt für jedes vorhandene Volume von `Disk 0`, das Sie auf `Disk 1` spiegeln möchten. Verwenden Sie dazu den zugehörigen Laufwerkbuchstaben (i.e. *d*, *e*, *f* etc.).
 
Der Volume-Status ist `Rebuild` während dieses Vorgangs, der je nach den auf der Disk gespeicherten Daten mehrere Stunden dauern kann. Sie können den Status in DiskPart überprüfen:
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

Es ist empfehlenswert, den Server erst nach Abschluss der Wiederherstellung neu zu starten.

### Neuerstellen der Spiegelung (GPT-Partitionsschema) <a name="gpt"></a>

Öffnen Sie an der Eingabeaufforderung DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart führt Befehle aus, ohne Warnungen auszugeben oder eine Bestätigung anzufordern. Alle in DiskPart vorgenommenen Änderungen sind unwiderruflich. Die Eingabe von Befehlen bei Auswahl der falschen Disk oder des falschen Volumes kann daher einen sofortigen Datenverlust verursachen und/oder den Systemstart blockieren. Wir empfehlen daher äußerste Vorsicht bei der Ausführung jedes einzelnen Befehls.
>

#### Auflistung aller Disks und Volumes


```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

In diesem Beispiel ist `Disk 1` ein Ersatzlaufwerk, das installiert wurde, um die fehlerhafte `Disk M0` zu ersetzen, die zuvor [physisch entfernt](/pages/bare_metal_cloud/dedicated_servers/disk_replacement) wurde.

> [!primary]
>
> Die folgenden Codeabschnitte dienen der Illustration und basieren auf der obigen Beispielausgabe. Sie müssen die Anweisungen an Ihre eigene Konfiguration anpassen, indem Sie die Werte in den Befehlen durch Ihre Disk- und Volume-Bezeichner ersetzen.
>


#### Entfernen der ausgetauschten Disk aus der Konfiguration
 
```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Initialisierung der Ersatz-Disk

Erstellen Sie auf der neuen Disk die obligatorischen sowie die Standard-Partitionen, um die vorhandene Partitionierung der ersten Disk zu spiegeln:
 
```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```


#### Neuerstellen des Mirrors von der ersten zur zweiten Disk 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```

Wiederholen Sie diesen Schritt für jedes vorhandene Volume von `Disk 0`, das Sie auf `Disk 1` spiegeln möchten. Verwenden Sie dazu den zugehörigen Laufwerkbuchstaben (i.e. *d*, *e*, *f* etc.).

#### Neuerstellen der Boot-Umgebung und Konfigurieren der Boot-Optionen für die zweite Disk

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

Kopieren Sie an der Eingabeaufforderung die Startdateien von der Boot-Partition (EFI) der ersten Disk (`Disk 0`) auf die Boot-Partition der zweiten Disk (`Disk 1`).

Geben Sie die folgenden 3 Befehle ein und führen Sie sie jeweils mit `Enter` aus:
 
```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Starten Sie dann erneut DiskPart und führen Sie die folgenden Befehle aus:
 
```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

Der Volume-Status ist `Rebuild` während dieses Vorgangs, der je nach den auf der Disk gespeicherten Daten mehrere Stunden dauern kann. Sie können den Status in DiskPart überprüfen:

```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

Es ist empfehlenswert, den Server erst nach Abschluss der Wiederherstellung neu zu starten.


## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.