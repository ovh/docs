---
title: 'Backups von Daten und Datenbanken auf einem Storage Server erstellen'
slug: daten-datenbanken-backup-auf-storage-server
excerpt: 'Daten-Backup in 5 Schritten'
section: Tutorial
---

**Stand: 12.09.2018**

## Einleitung

Ihre elektronischen Daten sind äußerst wichtig: Verlust oder Beschädigung dieser Daten führen schnell zu echten Problemen für Ihr Business. Es besteht immer ein gewisses Risiko. Daher empfehlen wir, mindestens täglich Backups durchzuführen und diese idealerweise auf einer Storage-Lösung zu speichern, die von Ihren Produktionsinfrastrukturen getrennt ist.

OVHcloud bietet Ihnen hierfür eine spezielle [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/storage/){.external} Reihe, die für Ihre Speichervorgänge optimiert und mit mindestens vier Festplatten je Server ausgestattet ist. Sie können diese Server für Backups von bei OVHcloud gehosteten Infrastrukturen verwenden, sowie über das öffentliche Internetnetzwerk Infrastrukturen von Drittanbietern sichern.

In diesem Tutorial lernen Sie, wie Sie einen OVHcloud Storage Server nach Ihren Anforderungen konfigurieren, eine Ordnerstruktur zum Speichern der Backups erstellen und das Daten-Backup zweier Remote-Server via SCP automatisieren.


## Voraussetzungen

### Erforderliche Kenntnisse:

- Sie kennen die Grundlagen der Linux-Administration.
- Sie wissen, wie Sie sich via SSH verbinden. 
- Sie wissen, wie Sie sich mit einer Datenbank verbinden. 
- Sie wissen, wie Sie Datenbank-Backups erstellen.
- Sie wissen, wie Sie eine Distribution installieren (im vorliegenden Beispiel Debian 9.4).

### Sie benötigen:

- einen [OVHcloud Storage Server](https://www.ovhcloud.com/de/bare-metal/storage/){.external}
- eine Produktionsinfrastruktur ([VPS](https://www.ovhcloud.com/de/vps/){.external}, [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/){.external}, [Public Cloud](https://www.ovhcloud.com/de/public-cloud/){.external}, ...)
- eine SSH-Verbindung zwischen dem Storage Server und der Produktionsinfrastruktur
- empfohlen: ein privates Netzwerk zwischen Ihren Servern ([OVHcloud vRack](https://www.ovh.de/loesungen/vrack/){.external})



## Beschreibung

### Schritt 1: Passenden RAID-Modus auswählen

OVHcloud bietet eine [Storage Server](https://www.ovhcloud.com/de/bare-metal/storage/){.external} Reihe, deren Hardwarekonfigurationen mehrere Festplatten enthalten. In unserem Beispiel verwenden wir ein Software-RAID (oder _SoftRAID_) mit vier Festplatten mit einer Speicherkapazität von jeweils 6 TB.

Bei OVHcloud können Sie nun die Speicherkonfiguration selbst festlegen und aus RAID 0, 1, 5, 6 und 10 wählen. Jeder dieser Modi hat seine Vor- und Nachteile in Bezug auf Leistung und Fehlertoleranz. So können wir mit vier Festplatten effizient Daten in RAID 5, 6 oder 10 speichern (RAID 0 und 1 sind hier nicht relevant).

Im Folgenden finden Sie eine kurze Erklärung dieser RAID-Typen.

#### RAID 5

In diesem Modus werden Ihre Daten auf mindestens 3 Festplatten verteilt. Eine vierte Festplatte wird verwendet, um die anderen im Fall von Festplattenfehlern wiederherzustellen, indem auf dieser Paritätsinformationen gespeichert werden. So haben Sie Fehlertoleranz bei Ausfall einer Festplatte. Die Leseperformance wird verbessert, jedoch nicht die Schreibperformance (aufgrund des Paritätsbits).

In unserem Beispiel bleiben so 18 TB nutzbare Speicherkapazität.

#### RAID 6

RAID 6 ist eine verbesserte Version von RAID 5, für die mindestens 4 Festplatten benötigt werden. Die Paritätsinformationen werden nicht auf eine, sondern auf zwei Festplatten geschrieben, um die Redundanz zu erhöhen (d. h. Fehlertoleranz bei Ausfall von bis zu zwei Festplatten). Sowohl die Lese- als auch die Schreibperformance werden verbessert.

In unserem Beispiel bleiben so 12 TB nutzbare Speicherkapazität.

#### RAID 10

Dieser Modus ist eine Kombination aus zwei Prozessen. Der erste Prozess besteht darin, die Daten aufzuteilen und auf zwei Festplatten zu speichern (“Striping”). Hierdurch wird die Performance erhöht, da Anfragen gleichzeitig an beide Festplatten gesendet werden können. Beim zweiten Prozess werden die Daten im “Mirror”-Modus auf zwei Festplatten dupliziert. So erhalten Sie die Fehlertoleranz bei Ausfall zweier Festplatten in einem Cluster.

In unserem Beispiel bleiben so 12 TB nutzbare Speicherkapazität.

Kein RAID-Typ ist grundsätzlich besser als die anderen. Alle erfüllen bestimmte Anforderungen. In unserem Beispiel möchten wir eine möglichst hohe Fehlertoleranz erzielen und gleichzeitig bestmögliche Lese- und Schreibperformance erreichen. Deshalb verwenden wir eine RAID-6-Konfiguration.


### Schritt 2: Server installieren und konfigurieren

Gehen Sie in Ihr [OVHcloud Kundencenter ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und installieren Sie Ihren Server. Wie bereits erwähnt, verwenden wir Debian 9.4. Weitere Informationen finden Sie in unserer Anleitung [Erste Schritte mit einem Dedicated Server](https://docs.ovh.com/de/dedicated/erste-schritte-dedicated-server/#ihren-dedizierten-server-installieren-oder-reinstallieren_1){.external}.

Wenn Sie das Betriebssystem für die Installation ausgewählt haben, setzen Sie einen Haken in dem Feld `Konfiguration der Partitionen anpassen`{.action}.

![Konfiguration der Partitionen anpassen](images/partition_customization.png){.thumbnail}

An dieser Stelle wählen Sie den RAID-Typ von `/home` (1) und Sie können, wenn Sie möchten, die Partition erweitern (2).

![/home bearbeiten](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> Das RAID-Level für `/boot` kann nicht angepasst werden.
> 

### Schritt 3: Zielverzeichnisse anlegen

Um die Backups auf übersichtliche Art und Weise zu speichern, erstellen wir spezielle Zielverzeichnisse. Loggen Sie sich via SSH auf Ihrem Server ein und rufen Sie Ihre Partitionierung auf.

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Ihre Ordnerstruktur erstellen Sie mit dem Befehl `mkdir`. In unserem Beispiel empfängt der Server Backups von zwei laufenden Webservern. Wir erstellen also zwei Verzeichnisse: *server1* und *server2*. Beide enthalten jeweils einen Unterordner *dump* für die SQL-Backups und einen Unterordner *data* für die Web-Daten.

Mit dem Befehl `tree` können Sie sich die Ordnerstruktur eines Verzeichnisses anzeigen lassen. So erhalten Sie beispielsweise folgendes Ergebnis:

```sh
tree
.
└── backups
    ├── server1
    │   ├── data
    │   └── dump
    └── server2
        ├── data
        └── dump

7 directories, 0 files
```

### Schritt 4: Daten Ihrer Remote-Server auf Ihren Storage Server übertragen

Der Storage Server kann jetzt Ihre verschiedenen Backups empfangen.

> [!primary]
> 
> Wenn Ihre Produktionsinfrastrukturen bei OVHcloud gehostet sind und über unser privates vRack Netzwerk verfügen, passen Sie diese entsprechend an, damit Ihre Backups nicht über das öffentliche Netzwerk (Internet) versendet werden.
>

Verbinden Sie sich für diesen Schritt via SSH mit Ihren Produktionsservern, die sich wiederum via SCP mit Ihrem Storage Server verbinden. Hierzu müssen alle Ressourcen via SSH miteinander kommunizieren können.

Zuerst führen wir ein Backup der MySQL-Datenbank durch, allgemein als *dump* bezeichnet. Lesen Sie zur fortgeschrittenen Nutzung die offizielle Dokumentation Ihrer Datenbank.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Nachdem Ihr SSH-Dienst konfiguriert ist, können Sie auf Ihre Produktionsserver zugreifen und den `scp`-Befehl verwenden.

```sh
scp ihre_dump_datei user@IP_Storage:/home/backups/server1/dump

The authenticity of host 'IP_Storage (IP_Storage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)?
Warning: Permanently added 'IP_Storage' (ECDSA) to the list of known hosts.

user@IP_Storage's password: 
```

> [!primary]
> 
> Wenn Sie den SSH-Port Ihres Storage Servers angepasst haben, geben Sie außerdem das Argument `-P` ein.
>

Führen Sie den gleichen Vorgang für Ihre Dateien durch. Mit dem `scp`-Befehl können Sie auch ganze Ordner sichern.

```sh
scp -r zu_sicherndes_Verzeichnis user@IP_Storage:/home/backups/server1/data/2018_01_01
```

Sie können auch andere, effizientere Tools wie *rsync* kostenlos verwenden und erhalten so Zugriff auf erweiterte Funkionen, zum Beispiel das automatische Neuversenden, falls die erste Übertragung fehlgeschlagen ist.


### Schritt 5: Tägliches Basis-Backup via Cron einrichten

Sich täglich auf jedem Server einzuloggen, für den ein Backup erstellt werden soll, ist auf Dauer recht mühsam. Hierfür gibt es einfache Tools, um Tasks zu automatisieren; das bekannteste ist das Unix-Programm *Cron*. Mit diesem können Sie Befehle stündlich, täglich, monatlich oder jährlich einplanen. Jeder Unix-Benutzer verfügt über eine eigene Liste geplanter Tasks, der sogenannten *crontab*.

Für mehr Sicherheit empfehlen wir, ein zusätzliches Unix-Benutzerkonto anzulegen und diesem die geplanten Tasks zuzuweisen.

Um die crontab zu bearbeiteten, führen Sie folgenden Befehl aus:

```sh
crontab -e
```

Um den Versand Ihres SQL-Dumps zu automatisieren und für die nächsten zwei Jahre auf täglich um 2:00 Uhr morgens festzulegen, fügen Sie die folgende Zeile hinzu:

```sh
0 2 * * * scp ihre_dump_datei user@IP_Storage:/home/backups/server1/dump >/dev/null 2>&1
```

Die *crontab* verwendet eine bestimmte Syntax, auf die wir hier nicht näher eingehen werden. Es gibt jedoch mehrere Seiten, über die Sie ganz einfach die entsprechende Syntax generieren können (z. B. Crontab Generator).



## Zusammenfassung

Sie haben nun einen OVHcloud Storage Server gemäß Ihren Anforderungen eingerichtet und einen einfachen Plan für Backups der Daten dieses Servers automatisiert. Dies ist ein wichtiger Schritt, um Datenverlust zu vermeiden und Ihr Business zu schützen.

Wie bereits in diesem Tutorial erwähnt, gibt es auch andere kostenlose sowie kostenpflichtige Tools, um Ihre Backups weiter zu optimieren. Je nachdem, wie sensibel Ihre Daten sind, empfehlen wir Ihnen außerdem, diese zu verschlüsseln und ausschließlich über private Netzwerke wie das OVHcloud vRack zu übertragen.