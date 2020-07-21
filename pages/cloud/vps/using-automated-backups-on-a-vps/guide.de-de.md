---
title: 'Automatische Backups auf einem VPS verwenden'
excerpt: 'Erfahren Sie hier, wie Sie im OVHcloud Kundencenter die Option „Automatisches Backup“ aktivieren und verwenden'
slug: verwendung-automatische-backups-vps
section: 'Backup Optionen'
order: 2
---

**Letzte Aktualisierung am 20.07.2020**

## Ziel

Diese Option bietet eine komfortable Möglichkeit, vollständige VPS Backups regulär in Ihrem OVHcloud Kundencenter verfügbar zu halten, ohne eine Verbindung zum Server herstellen zu müssen, um sie manuell anzulegen und wiederherzustellen. Ein weiterer Vorteil ist, dass Sie auch wahlweise ein Backup erzeugen und dann über SSH darauf zugreifen können.

**Diese Anleitung erläutert die Verwendung von automatischen Backups für Ihren OVHcloud VPS.**

> [!primary]
>
Bevor Sie Backup-Optionen anwenden, empfehlen wir, die [Produktseiten und FAQ](https://www.ovhcloud.com/de/vps/options/) zu Preisvergleichen und weiteren Details zu konsultieren.
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Administratorzugang (Root) über SSH auf Ihren VPS (optional)

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein, gehen Sie in den Bereich `Server`{.action} und wählen Sie links im Menü unter `VPS`{.action} Ihren Server aus.

### Schritt 1: Die Option „Automatisches Backup“ aktivieren

Nach der Auswahl Ihres VPS klicken Sie auf den Tab `Automatisches Backup`{.action} im horizontalen Menü.

Beachten Sie im nächsten Schritt die Kosteninformation und klicken Sie dann auf `Bestellen`{.action}. Sie werden durch den Bestellvorgang geführt und erhalten eine Bestätigungsmail. Backups werden nun täglich erstellt, bis die Option wieder gekündigt wird.


### Schritt 2: Eine Sicherung über das OVHcloud Kundencenter wiederherstellen

Nach der Auswahl Ihres VPS klicken Sie auf den Tab `Automatisches Backup`{.action} im horizontalen Menü. Es sind maximal 7 Backups verfügbar (15 bei älteren Produktreihen). Klicken Sie auf `...`{.action} neben dem Backup, das Sie wiederherstellen möchten, und wählen Sie `Wiederherstellung`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Wenn Sie kürzlich Ihr Root-Passwort geändert haben, aktivieren Sie im Popup-Fenster die Option „Root-Passwort im Zuge der Wiederherstellung ändern“, damit Ihr aktuelles Passwort beibehalten wird, und klicken Sie auf `Bestätigen`{.action}. Sie erhalten eine E-Mail, sobald der Task abgeschlossen ist. Die Wiederherstellung kann je nach verwendetem Speicherplatz eine Weile dauern.

> \[!alert]
>
Bitte beachten Sie, dass die automatisierten Backups nicht Ihre zusätzlichen Festplatten umfassen.
>

### Ein Backup mounten und darauf zugreifen

Es ist nicht erforderlich, Ihren laufenden Dienst mit einer Wiederherstellung vollständig zu überschreiben. Mit der Option „Mounten“ können Sie auf die Backup-Partition zugreifen, um Ihre Dateien abzurufen. 

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

#### Schritt 1: Kundencenter 

Klicken Sie auf `...`{.action} neben dem Backup, auf das Sie zugreifen müssen, und wählen Sie `Mounten`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Nach Abschluss des Vorgangs erhalten Sie eine E-Mail. Sie können jetzt eine Verbindung zu Ihrem VPS herstellen und die Partition hinzufügen, auf der sich Ihr Backup befindet.

#### Schritt 2: Secure Shell

Stellen Sie zunächst über SSH eine Verbindung zu Ihrem VPS her.

Mit dem folgenden Befehl können Sie den Namen des neu angehängten Volumes überprüfen:

```
# lsblk
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
sdc       8:32   0   50G  0 disk 
```
In diesem Beispiel heißt die Partition, in der Ihr Backup-Dateisystem enthalten ist, „sdb1“.
Erstellen Sie als Nächstes ein Verzeichnis für diese Partition und definieren Sie es als Mountpunkt:

```
# mkdir -p /mnt/restore
# mount /dev/sdb1 /mnt/restore
```

Sie können jetzt zu diesem Ordner wechseln und auf Ihre Backup-Daten zugreifen.


## Weiterführende Informationen

[Snapshots auf einem VPS verwenden](../verwendung-snapshots-vps)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
