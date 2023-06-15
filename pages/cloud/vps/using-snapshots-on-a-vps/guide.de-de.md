---
title: 'Snapshots auf einem VPS verwenden'
excerpt: 'Erfahren Sie hier, wie Sie im OVHcloud Kundencenter die Snapshot-Option aktivieren und verwenden'
slug: verwendung-snapshots-vps
section: 'Backup Optionen'
order: 1
updated: 2023-04-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


## Ziel

Mithilfe eines Snapshots haben Sie die Möglichkeit, schnell und einfach ein laufendes System zu sichern, etwa bevor Änderungen vorgenommen werden, die unerwünschte oder unvorhergesehene Folgen haben können (z.B. Testen einer neuen Konfiguration oder Software). Es handelt sich jedoch nicht um eine vollständige Backup-Strategie.

**Diese Anleitung erläutert die Verwendung von Snapshots für Ihren OVHcloud VPS.**

> [!primary]
>
Bevor Sie Backup-Optionen anwenden, empfehlen wir, die [Produktseiten und FAQ](https://www.ovhcloud.com/de/vps/options/) zu Preisvergleichen und weiteren Details zu konsultieren.
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.


## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie unter `Virtual Private Server`{.action} Ihren Server aus.

### Schritt 1: Snapshot-Option aktivieren

Scrollen Sie im Tab `Start`{.action} nach unten zum Feld mit der Bezeichnung **Zusammenfassung der Optionen**. Klicken Sie auf `...`{.action} neben der Option “Snapshot”. Im Kontextmenü klicken Sie auf `Bestellen`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Beachten Sie im nächsten Schritt die Kosteninformation und klicken Sie dann auf `Bestellen`{.action}. Sie werden durch den Bestellvorgang geführt und erhalten eine Bestätigungsmail.

### Schritt 2: Einen Snapshot erstellen

Sobald die Option aktiviert ist, klicken Sie auf `...`{.action} neben der Option “Snapshot”. Im Kontextmenü klicken Sie auf `Snapshot erstellen`{.action}. Die Dauer der Erstellung des Snapshots hängt vom verwendeten Speicherplatz ab. Anschließend wird der Zeitstempel der Erstellung im Bereich **Zusammenfassung der Optionen** angezeigt.

### Schritt 3: Einen Snapshot löschen/wiederherstellen

Da immer nur ein Snapshot aktiviert sein kann, muss der vorhandene Snapshot gelöscht werden, bevor ein neuer erstellt wird. Wählen Sie dazu einfach `Snapshot löschen`{.action} aus dem Kontextmenü.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Wenn Sie sicher sind, dass Sie Ihren VPS auf den Stand des Snapshots zurücksetzen möchten, klicken Sie auf `Snapshot wiederherstellen`{.action} und bestätigen Sie die Aktion im Popup-Fenster. 

> [!alert]
>
> Dabei ist zu beachten, dass der Snapshot im Zuge der Wiederherstellung gelöscht wird. Wenn Sie einen identischen Snapshot behalten möchten, ist es notwendig, einen neuen Snapshot zu erzeugen, bevor Sie Änderungen am wiederhergestellten System vornehmen.
>

### Snapshot herunterladen

Der aktuelle Snapshot kann über einen Download-Link abgerufen werden. Klicken Sie auf `...`{.action} neben der Option "Snapshot" und wählen Sie `Snapshot herunterladen`{.action} aus dem Kontextmenü.

![snapshotvps](images/snapshot_vps03.png){.thumbnail}

> [!primary]
>
> Wenn Ihr VPS aus einer älteren Produktreihe stammt, erhalten Sie möglicherweise eine Fehlermeldung, da die Option für einen Legacy VPS nicht verfügbar ist. Diese älteren Dienste erkennen Sie am folgenden Namensschema: *vpsXXXX.ovh.net* (wobei *X* für eine Zahl steht). Sie können diese Server-Referenz im Tab `Start`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) überprüfen.
>

Klicken Sie im Popup-Fenster auf `Download-Link erstellen`{.action}. 

![snapshotvps](images/snapshot_vps04.png){.thumbnail}

Nach einigen Sekunden wird eine Erfolgsmeldung angezeigt. Unten können Sie den vollständigen Download-Befehl mit einem Klick kopieren.

![snapshotvps](images/snapshot_vps05.png){.thumbnail}

Die Größe des Snapshots und das Ablaufdatum des Links werden ebenfalls angezeigt.

Beachten Sie, dass der Download-Link nach **24 Stunden** abläuft.

Der Download-Befehl verwendet `curl` in folgendem Format:

```bash
curl "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211dddf3f81130e935f0e4&temp_url_expres=1678247579" --output vps-x11x11xyy.vps.ovh.net --fail
```

Er sollte von jedem Befehlszeilen-Terminal aus funktionieren.

Wenn Sie jedoch Windows *PowerShell* verwenden, muss der Befehl wie folgt angepasst werden:

```powershell
curl -uri "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211dddf3f81130e935f0e4&temp_url_expres=1678247579" -OutFile vps-x11x11xyy.vps.ovh.net
```

![snapshotvps](images/snapshot_vps06.png){.thumbnail}

> [!primary]
>
Wir empfehlen, Snapshots nicht direkt auf den VPS herunterzuladen, um die Auslastung des Speicherplatzes zu vermeiden.
>

### Optimale Vorgehensweise zur Snapshot-Erstellung

#### Konfiguration des QEMU-Agents auf einem VPS

Snapshots sind Momentaufnahmen Ihres Systems bei der Ausführung (“live snapshot”). Um die Verfügbarkeit Ihres Systems während der Erstellung des Snapshots zu gewährleisten, wird der QEMU-Agent verwendet, um das Dateisystem für diesen Vorgang vorzubereiten.

Der hierzu benötigte *qemu-guest-agent* ist bei den meisten Distributionen nicht standardmäßig installiert. Auch können lizenzbedingte Einschränkungen OVHcloud daran hindern, diese Bedingung in die Images der verfügbaren Betriebssysteme einzubeziehen. Es wird daher geraten, dies zu überprüfen, und den Agent zu installieren, falls er nicht auf Ihrem VPS aktiviert ist. Verbinden Sie sich per SSH mit Ihrem VPS und folgen Sie je nach Betriebssystem den unten stehenden Anleitungen. 

##### **Debian Distributionen (Debian, Ubuntu)**

Überprüfen Sie mit folgendem Befehl, ob das System richtig für Snapshots konfiguriert ist.

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Erscheint ein anderes Ergebnis (“No such file or directory”), dann installieren Sie das aktuelle Paket:

```bash
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Starten Sie den VPS neu:

```bash
$ sudo reboot
```

Überprüfen Sie, ob der Dienst ausgeführt wird:

```bash
$ sudo service qemu-guest-agent status
```

##### **Redhat Distributionen (CentOS, Fedora)**

Überprüfen Sie mit folgendem Befehl, ob das System richtig für Snapshots konfiguriert ist.

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Erscheint ein anderes Ergebnis (“No such file or directory”), dann installieren und aktivieren Sie den Agent:

```bash
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Starten Sie den VPS neu:

```bash
$ sudo reboot
```

Überprüfen Sie, ob der Dienst ausgeführt wird:

```bash
$ sudo service qemu-guest-agent status
```

##### **Windows**

Sie können den QEMU Guest Agent über eine MSI-Datei installieren. Diese ist auf der Webseite des *Fedora project* verfügbar: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>.

Überprüfen Sie, ob der Dienst ausgeführt wird. Verwenden Sie dazu folgenden *PowerShell*-Befehl:

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```


## Weiterführende Informationen

[Automatische Backups auf einem VPS verwenden](../verwendung-automatische-backups-vps)


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
