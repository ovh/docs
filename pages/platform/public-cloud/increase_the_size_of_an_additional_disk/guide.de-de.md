---
title: 'Die Größe einer zusätzlichen Festplatte erweitern'
excerpt: 'Erfahren Sie, wie Sie die Kapazität einer zusätzlichen Festplatte erhöhen und deren Hauptpartition vergrößern können'
slug: ihre_zusatzliche_festplatte_vergroern
legacy_guide_number: g1865
---

**Letzte Aktualisierung am 14.11.2019**

## Ziel

Wenn Sie die maximale Speicherkapazität auf Ihrer zusätzlichen Festplatte erreicht haben, können Sie diese trotzdem noch vergrößern.

**In dieser Anleitung erfahren Sie, wie Sie die Größe einer zusätzlichen Festplatte erweitern und deren Hauptpartition vergrößern können.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben eine [zusätzliche Festplatte](https://www.ovhcloud.com/de/public-cloud/block-storage) mit Ihrer Instanz verbunden.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben administrativen Zugang (Root) zu Ihrer Instanz über SSH (nur Linux).
- Sie haben Administratorzugriff auf Ihre Instanz über RDP (nur Windows).

## In der praktischen Anwendung

### Vorgehensweise im OVHcloud Kundencenter

Um eine Public Cloud Instanz bereitzustellen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action}. Klicken Sie dann im folgenden Bereich auf die Pfeilschaltfläche neben Ihrem Standardprojektnamen in der oberen linken Ecke der Anzeige. Wählen Sie nun das Projekt aus, in dem Sie die Größe der zusätzlichen Festplatte bearbeiten möchten.

![control panel](images/select_project.png){.thumbnail}

Suchen Sie Ihre _Block Storage_-Festplatte im Abschnitt "Storage" auf der linken Seitenleiste.

![control panel](images/increase-disk-02.png){.thumbnail}

Klicken Sie anschließend auf `...`{.action} rechts von der Festplatte und danach auf `Bearbeiten`{.action}. Sie werden auf diese Seite weitergeleitet, auf der Sie die Volume-Kapazität ändern können:

![control panel](images/increase-disk-03.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, klicken Sie auf die Schaltfläche `Volume bearbeiten`{.action}.


### Vorgehensweise über Linux

Entfernen Sie zuerst die Festplatte mithilfe dieses Befehls:

```
admin@server-1:~$ sudo unmount /mnt/disk
```

Erstellen Sie dann die Partition neu:

```
admin@server-1:~$ sudo fdisk /dev/vdb
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```

```
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```

```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Fehlerprüfung und Anpassen der Partitionierung:

```
#admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```
#admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Zum Schluss mounten und überprüfen Sie die Festplatte:

```
#admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```
#admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```


### Vorgehensweise über Windows

Stellen Sie eine RDP-Verbindung zu Ihrer Instanz her. Wenn Sie sich angemeldet haben, öffnen Sie mit einem Rechtsklick auf das Windows-Symbol das Kontextmenü und wählen Sie dann `Datenträgerverwaltung`{.action}.

![windows](images/increase-disk-04.png){.thumbnail}

Im Datenträgerverwaltungstool wird Ihre neue Festplatte wie im Bild zu sehen als unbekanntes Volume mit nicht zugewiesenem Speicherplatz angezeigt.

![windows](images/increase-disk-05.png){.thumbnail}

Wenn die Festplatte als "Offline" angezeigt wird, liegt das wahrscheinlich an einer die Instanz betreffenden Richtlinie. In diesem Fall klicken Sie mit der rechten Maustaste auf die Festplatte und wählen Sie "Online".

![windows](images/increase-disk-06.png){.thumbnail}

> [!primary]
>
In Abhängigkeit von Ihrer Windows-Version müssen Sie möglicherweise Ihre zusätzliche Festplatte initialisieren, bevor Sie sie verwenden können. Um Ihre Festplatte zu initialisieren, klicken Sie sie erneut mit der rechten Maustaste an und wählen Sie diesmal `Datenträgerinitialisierung`{.action}.
>

Wenn das Hauptvolume auf Ihrer Festplatte kleiner als die gesamte Festplattenkapazität ist, öffnen Sie mit der rechten Maustaste dessen Kontextmenü und klicken dann auf `Volume erweitern`{.action}.

![windows](images/increase-disk-07.png){.thumbnail}

Der Assistent zum Erweitern des Volumes wird nun angezeigt. Klicken Sie auf`Weiter`{.action}, um den Assistenten zu starten.

![windows](images/increase-disk-08.png){.thumbnail}

Erweitern Sie nun das Volume auf die gewünschte Größe und klicken Sie auf `Weiter`{.action}.

![windows](images/increase-disk-09.png){.thumbnail}

Klicken Sie auf `Fertig stellen`{.action}, um den Vorgang abzuschließen.

![windows](images/increase-disk-10.png){.thumbnail}


## Weiterführende Informationen

[Eine zusätzliche Festplatte auf einer Instanz erstellen und konfigurieren](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance)

Für den Austausch mit unserer User Community gehen Sie auf  <https://community.ovh.com/en/>.