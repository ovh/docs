---
title: 'Die ersten Schritte mit Ihrer Public Cloud Instanz'
excerpt: 'Erfahren Sie hier, wie Sie mit einer Public Cloud Instanz starten'
slug: die_ersten_schritte_mit_ihrer_public_cloud_instanz
section: 'Erste Schritte'
legacy_guide_number: g2018
---

**Letzte Aktualisierung am 04.12.2019**

## Ziel

Sie können die OVHcloud Public Cloud einfach über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) verwalten. Dort finden Sie Ihre gesamte Infrastruktur (Instanzen, Backups, Festplatten, SSH-Schlüssel usw.) und Storage-Projekte (einschließlich der Liste Ihrer Container).

**Diese Anleitung erläutert die Grundlagen der Verwaltung von Public Cloud Instanzen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben im OVHcloud Kundencenter einen [SSH-Schlüssel hinzugefügt](https://docs.ovh.com/de/public-cloud/create-ssh-keys/).

## In der praktischen Anwendung


### Zugriff auf die Verwaltungsschnittstelle der Instanz

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action}. Klicken Sie dann im folgenden Bereich auf die Pfeilschaltfläche neben Ihrem Standardprojektnamen in der oberen linken Ecke der Anzeige. Wählen Sie nun das gewünschte Projekt aus und klicken anschließend im linken Menü auf `Instances`{.action}.

Auf dieser Seite sehen Sie eine Zusammenfassung aller Ihrer Instanzen. Hier werden verschiedene Informationen angezeigt:

- das Modell Ihrer Instanz
- Name und Standort
- zugehörige Festplatten
- IP-Adresse der Instanz
- Status der Instanz

![public-cloud](images/compute.png){.thumbnail}

### Die Konfiguration einer Instanz bearbeiten

Klicken Sie in der Verwaltungsschnittstelle für die Instanz auf die 3 Punkte rechts neben der Instanz und wählen Sie `Bearbeiten`{.action}.

![public-cloud](images/edit.png){.thumbnail}

In dem Fenster, das sich öffnet, haben Sie folgende Möglichkeiten:

- die Instanz umbenennen
- das Instanzmodell ändern 
- die Instanz mit einem anderen Betriebssystem neu installieren (**bitte beachten Sie, dass in diesem Fall die Daten, die aktuell auf der Instanz gespeichert sind, gelöscht werden**)
- von der stündlichen Abrechnung zu einem festen monatlichen Tarif wechseln (Rechnungen werden dann anteilig erstellt, ausgehend von dem Tag des Monats, an dem Sie wechseln).

![public-cloud](images/edit1.png){.thumbnail}
![public-cloud](images/edit2.png){.thumbnail}
![public-cloud](images/edit3.png){.thumbnail}

### Ein Backup einer Instanz erstellen

Sie können auf ihrer Administrationsseite ein Backup einer Instanz erstellen. Hierzu klicken Sie auf die 3 Punkte rechts neben der Instanz und wählen `Backup erstellen`{.action}. Anschließend sehen Sie diese Seite mit allen notwendigen Informationen: ![public-cloud](images/backup.png){.thumbnail} .

Danach werden die folgenden Informationen angezeigt: ![public-cloud](images/backup1.png){.thumbnail}

Nach Ihrer Bestätigung werden die folgenden Informationen angezeigt: ![public-cloud](images/backup2.png){.thumbnail}

Sobald das Backup abgeschlossen ist, wird es im Abschnitt `Instance Backup`{.action} angezeigt: ![public-cloud](images/backup3.png){.thumbnail}

Sie können in unserer Anleitung [Backup einer Instanz erstellen](https://docs.ovh.com/de/public-cloud/ein_backup_einer_instanz_erstellen) nachlesen, wenn Sie Hilfe benötigen. 

### Ein automatisches Backup einer Instanz erstellen

Sie können auf Ihrer Administrationsseite ein automatisches Backup einer Instanz planen. Hierzu klicken Sie auf die 3 Punkte rechts daneben und wählen `Automatisches Backup erstellen`{.action}: ![public-cloud](images/backupauto.png){.thumbnail}

Danach wird die folgende Seite angezeigt: ![public-cloud](images/backupauto1.png){.thumbnail}

Sobald Sie die erforderlichen Informationen ausgewählt und auf `Erstellen`{.action} geklickt haben, werden Sie auf die folgende Seite weitergeleitet: ![public-cloud](images/backupauto2.png){.thumbnail}

Sie können jederzeit zum `Workflow Management`{.action} wechseln, um den aktuellen automatischen Backup-Prozess zu löschen: ![public-cloud](images/backupautodelete.png){.thumbnail}

Sie können in unserer Anleitung [Backup einer Instanz erstellen](https://docs.ovh.com/de/public-cloud/ein_backup_einer_instanz_erstellen) nachlesen, wenn Sie Hilfe benötigen. 

### Ihre Login-Informationen abrufen

Klicken Sie im Interface für die Instanzen auf `...`{.action} und `Instanz-Details `{.action} und überprüfen Sie die `Login-Informationen`{.action} unter „Netzwerke“. Dort können Sie die SSH-Befehle abrufen, die Sie zum Aufbauen einer Verbindung mit Ihrer Instanz benötigen.

![public-cloud](images/instancedetails1.png){.thumbnail}
![public-cloud](images/instancedetails.png){.thumbnail}

### Auf die VNC-Konsole zugreifen

Über die VNC-Konsole können Sie direkt auf Ihre Instanz zugreifen. Beachten Sie jedoch, dass Sie ein Passwort für den Root-Benutzer konfiguriert haben müssen.

Um auf diese Konsole zuzugreifen, klicken Sie im Instanz-Dashboard auf `VNC-Konsole`{.action}.

![public-cloud](images/vnc.png){.thumbnail}

Die Konsole ist dann verfügbar:

![public-cloud](images/vnc1.png){.thumbnail}

### Eine Instanz neu starten

Es gibt zwei Möglichkeiten, um eine Instanz neu zu starten:

- Hot Reboot (Software)
- Cold Reboot (Hardware)

Klicken Sie in der Verwaltungsschnittstelle für die Instanz auf die 3 Punkte rechts neben der Instanz und wählen Sie entweder `Hot Reboot durchführen`{.action} oder `Cold Reboot durchführen`{.action}.

Bestätigen Sie dann Ihre Anfrage in dem Fenster, das sich öffnet.

![public-cloud](images/reboot.png){.thumbnail}

### Eine Instanz neu installieren

Sie können eine Instanz neu installieren und das Betriebssystem beibehalten. **Bitte beachten Sie, dass bei einer Neuinstallation alle Daten, die derzeit auf Ihrer Instanz gespeichert sind, gelöscht werden.**
Klicken Sie in der Instanzenverwaltung auf die 3 Punkte rechts neben der Instanz und wählen Sie `Neu installieren`{.action}. Klicken Sie dann auf `Bestätigen`{.action}, um den Vorgang zu starten.

![public-cloud](images/reinstall.png){.thumbnail}

### Eine Instanz löschen

Sie können eine Instanz auch löschen. **Dadurch werden die Instanz sowie alle darauf gespeicherten Daten dauerhaft gelöscht.**

Klicken Sie in der Instanzenverwaltung auf auf `...`{.action} und wählen Sie `Löschen`{.action}. Klicken Sie dann auf `Bestätigen`{.action}, um den Vorgang zu starten. 

![public-cloud](images/delete.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf  <https://community.ovh.com/en/>.
