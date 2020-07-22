---
title: 'Snapshots auf einem VPS verwenden'
excerpt: 'Erfahren Sie hier, wie Sie im OVHcloud Kundencenter die Snapshot-Option aktivieren und verwenden'
slug: verwendung-snapshots-vps
section: 'Backup Optionen'
order: 1
---

**Letzte Aktualisierung am 20.07.2020**


## Ziel

Mithilfe eines Snapshots haben Sie die Möglichkeit, schnell und einfach ein laufendes System zu sichern, etwa bevor Änderungen vorgenommen werden, die unerwünschte oder unvorhergesehene Folgen haben können (z.B. Testen einer neuen Konfiguration oder Software). Es handelt sich jedoch nicht um eine vollständige Backup-Strategie.

**Diese Anleitung erläutert die Verwendung von Snapshots für Ihren OVHcloud VPS.**

> [!primary]
>
Bevor Sie Backup-Optionen anwenden, empfehlen wir, die [Produktseiten und FAQ](https://www.ovhcloud.com/de/vps/options/) zu Preisvergleichen und weiteren Details zu konsultieren.
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.


## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein, gehen Sie in den Bereich `Server`{.action} und wählen Sie links im Menü unter `VPS`{.action} Ihren Server aus.

### Schritt 1: Snapshot-Option aktivieren

Scrollen Sie im Tab `Start`{.action} nach unten zum Feld mit der Bezeichnung „Zusammenfassung der Optionen“. Klicken Sie auf `...`{.action} neben der Option „Snapshot“. Im Kontextmenü klicken Sie auf `Bestellen`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Beachten Sie im nächsten Schritt die Kosteninformation und klicken Sie dann auf `Bestellen`{.action}. Sie werden durch den Bestellvorgang geführt und erhalten eine Bestätigungsmail.

### Schritt 2: Einen Snapshot erstellen

Sobald die Option aktiviert ist, klicken Sie auf `...`{.action} neben der Option „Snapshot“. Im Kontextmenü klicken Sie auf `Snapshot erstellen`{.action}. Das Erstellen des Snapshot kann einige Minuten dauern. Anschließend wird der Zeitstempel der Erstellung im Bereich „Zusammenfassung der Optionen“ angezeigt.

### Schritt 3: Einen Snapshot löschen/wiederherstellen

Da immer nur ein Snapshot aktiviert sein kann, muss der vorhandene Snapshot gelöscht werden, bevor ein neuer erstellt wird. Wählen Sie dazu einfach `Snapshot löschen`{.action} aus dem Kontextmenü.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Wenn Sie sicher sind, dass Sie Ihren VPS auf den Stand des Snapshots zurücksetzen möchten, klicken Sie auf `Snapshot wiederherstellen`{.action} und bestätigen Sie die Aktion im Popup-Fenster. Dabei ist zu beachten, das der Snapshot im Zuge der Wiederherstellung gelöscht wird.


## Weiterführende Informationen

[Automatische Backups auf einem VPS verwenden](../verwendung-automatische-backups-vps)


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.