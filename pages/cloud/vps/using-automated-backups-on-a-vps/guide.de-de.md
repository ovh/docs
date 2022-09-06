---
title: 'Automatische Backups auf einem VPS verwenden'
excerpt: 'Erfahren Sie hier, wie Sie im OVHcloud Kundencenter die Option “Automatisches Backup” aktivieren und verwenden'
slug: verwendung-automatische-backups-vps
section: 'Backup Optionen'
order: 2
---

**Letzte Aktualisierung am 31.08.2022**

## Ziel

Diese Option bietet eine komfortable Möglichkeit, vollständige VPS Backups regulär in Ihrem OVHcloud Kundencenter verfügbar zu halten, ohne eine Verbindung zum Server herstellen zu müssen, um sie manuell anzulegen und wiederherzustellen. Ein weiterer Vorteil ist, dass Sie auch wahlweise ein Backup erzeugen und dann über SSH darauf zugreifen können.

**Diese Anleitung erläutert die Verwendung von automatischen Backups für Ihren OVHcloud VPS.**

> [!primary]
>
Bevor Sie Backup-Optionen anwenden, empfehlen wir, die [Produktseiten und FAQ](https://www.ovhcloud.com/de/vps/options/) zu Preisvergleichen und weiteren Details zu konsultieren.
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Administratorzugang (Root) über SSH auf Ihren VPS (optional)

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie unter `Virtual Private Server`{.action} Ihren Server aus.

### Schritt 1: Die Option “Automatisches Backup” aktivieren

Nach der Auswahl Ihres VPS klicken Sie auf den Tab `Automatisches Backup`{.action} im horizontalen Menü.

Beachten Sie im nächsten Schritt die Kosteninformation und klicken Sie dann auf `Bestellen`{.action}. Sie werden durch den Bestellvorgang geführt und erhalten eine Bestätigungsmail. Backups werden nun täglich erstellt, bis die Option wieder gekündigt wird.

#### Backup-Zeit konfigurieren

Sie können den Zeitpunkt ändern, zu dem das Backup durchgeführt wird. 

Klicken Sie auf `...`{.action} über der Tabelle und dann auf `Bearbeiten`{.action}.

![autobackupvps](images/backup_vps_time01.png){.thumbnail}

Tragen Sie im neu angezeigten Fenster die Tageszeit ein (Zeitstandard UTC 24 Stunden). Klicken Sie auf `Bestätigen`{.action}.

![autobackupvps](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
> Sobald die Änderung im Kundencenter bestätigt wurde, wird sie innerhalb von 24 bis 48 Stunden wirksam.
>

### Schritt 2: Eine Sicherung über das OVHcloud Kundencenter wiederherstellen

Nach der Auswahl Ihres VPS klicken Sie auf den Tab `Automatisches Backup`{.action} im horizontalen Menü. Es sind maximal 7 Backups verfügbar (15 bei älteren Produktreihen). Klicken Sie auf `...`{.action} neben dem Backup, das Sie wiederherstellen möchten, und wählen Sie `Wiederherstellung`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Wenn Sie kürzlich Ihr Root-Passwort geändert haben, aktivieren Sie im Popup-Fenster die Option “Root-Passwort im Zuge der Wiederherstellung ändern”, damit Ihr aktuelles Passwort beibehalten wird, und klicken Sie auf `Bestätigen`{.action}. Sie erhalten eine E-Mail, sobald der Task abgeschlossen ist. Die Wiederherstellung kann je nach verwendetem Speicherplatz eine Weile dauern.

> [!alert]
>
Bitte beachten Sie, dass die automatisierten Backups nicht Ihre zusätzlichen Festplatten umfassen.
>

### Ein Backup mounten und darauf zugreifen

Es ist nicht erforderlich, Ihren laufenden Dienst mit einer Wiederherstellung vollständig zu überschreiben. Mit der Option “Mounte” können Sie auf die Backup-Partition zugreifen, um Ihre Dateien abzurufen. 

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Weitere Hinweise finden Sie im Teil “Weiterführende Informationen” dieser Anleitung.
>

Klicken Sie auf `...`{.action} neben dem Backup, auf das Sie zugreifen müssen, und wählen Sie `Mounten`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Nach Abschluss des Vorgangs erhalten Sie eine E-Mail. Sie können jetzt eine Verbindung zu Ihrem VPS herstellen und die Partition hinzufügen, auf der sich Ihr Backup befindet.

#### Über Secure Shell

Stellen Sie zunächst über SSH eine Verbindung zu Ihrem VPS her.

Mit dem folgenden Befehl können Sie den Namen des neu angehängten Volumes überprüfen:

```
$ lsblk
```

Hier sehen Sie eine Beispielausgabe dieses Befehls:

```
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
```
In diesem Beispiel heißt die Partition, in der Ihr Backup-Dateisystem enthalten ist, “sdb1”.
Erstellen Sie als Nächstes ein Verzeichnis für diese Partition und definieren Sie es als Mountpunkt:

```
$ mkdir -p /mnt/restore
$ mount /dev/sdb1 /mnt/restore
```

Sie können jetzt zu diesem Ordner wechseln und auf Ihre Backup-Daten zugreifen.

#### Mit Windows

Stellen Sie eine RDP-Verbindung (Remote Desktop) mit Ihrem VPS her.

Wenn Sie eingeloggt sind, klicken Sie mit der rechten Maustaste auf den Button `Start`{.action} und öffnen Sie die `Datenträgerverwaltung`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

Ihr Backup erscheint als "Basic" Datenträger mit demselben Speicherplatz wie Ihre Haupt-Disk.

![mounted backup](images/windowsbackup2.png){.thumbnail}

Die Disk wird als `Offline` angezeigt. Klicken Sie mit der rechten Maustaste auf die Disk und wählen Sie `Online`{.action} aus.

![online backup](images/windowsbackup3.png){.thumbnail}

Anschließend können Sie auf Ihr gemountetes Backup als Laufwerk über den `Datei-Explorer` zugreifen.

![file explorer](images/windowsbackup4.png){.thumbnail}

> [!warning]
> Bitte beachten Sie, dass beim Aushängen des Backups ein Neustart des Servers erfolgt.
>


### Optimale Vorgehensweise zur Backup-Erstellung

Die Funktion “Automatisches Backup” basiert auf VPS Snapshots. Es wird empfohlen, die folgenden Schritte zu befolgen, um Probleme zu vermeiden, bevor Sie diese Option verwenden.

#### Konfiguration des QEMU-Agents auf einem VPS

Snapshots sind Momentaufnahmen Ihres Systems bei der Ausführung (“live snapshot”). Um die Verfügbarkeit Ihres Systems während der Erstellung des Snapshots zu gewährleisten, wird der QEMU-Agent verwendet, um das Dateisystem für diesen Vorgang vorzubereiten.

Der hierzu benötigte *qemu-guest-agent* ist bei den meisten Distributionen nicht standardmäßig installiert. Auch können lizenzbedingte Einschränkungen OVHcloud daran hindern, diese Bedingung in die Images der verfügbaren Betriebssysteme einzubeziehen. Es wird daher geraten, dies zu überprüfen, und den Agent zu installieren, falls er nicht auf Ihrem VPS aktiviert ist. Verbinden Sie sich per SSH mit Ihrem VPS und folgen Sie je nach Betriebssystem den unten stehenden Anleitungen. 

##### **Debian Distributionen (Debian, Ubuntu)**

Überprüfen Sie mit folgendem Befehl, ob das System richtig für Snapshots konfiguriert ist.

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Erscheint ein anderes Ergebnis (“No such file or directory”), dann installieren Sie das aktuelle Paket:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Starten Sie den VPS neu:

```
$ sudo reboot
```

Überprüfen Sie, ob der Dienst ausgeführt wird:

```
$ sudo service qemu-guest-agent status
```

##### **Redhat Distributionen (CentOS, Fedora)**

Überprüfen Sie mit folgendem Befehl, ob das System richtig für Snapshots konfiguriert ist.

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Erscheint ein anderes Ergebnis (“No such file or director”), dann installieren und aktivieren Sie den Agent:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Starten Sie den VPS neu:

```
$ sudo reboot
```

Überprüfen Sie, ob der Dienst ausgeführt wird:

```
$ sudo service qemu-guest-agent status
```

##### **Windows**

Sie können den QEMU Guest Agent über eine MSI-Datei installieren. Diese ist auf der Webseite des *Fedora project* verfügbar: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Überprüfen Sie, ob der Dienst ausgeführt wird. Verwenden Sie dazu folgenden Powershell-Befehl:

```
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Weiterführende Informationen

[Snapshots auf einem VPS verwenden](../verwendung-snapshots-vps)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
