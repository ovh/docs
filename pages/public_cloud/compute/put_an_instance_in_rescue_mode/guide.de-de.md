---
title: "Rescue-Modus auf einer Public Cloud Instanz aktivieren"
excerpt: "Erfahren Sie hier, wie Sie den OVHcloud Rescue-Modus für Ihre Public Cloud Instanzen aktivieren und verwenden"
updated: 2024-06-03
---

## Ziel

Ihre Instanz kann unter Umständen nicht mehr zugänglich sein, etwa aufgrund eines verlorenen SSH-Schlüssels oder einer Fehlkonfiguration.

In diesem Fall können Sie Ihre Instanz mithilfe des Rescue-Modus neu konfigurieren oder den Zugang zu Ihren Daten wiederherstellen. 

**Diese Anleitung erklärt, wie Sie Ihre OVHcloud Public Cloud Instanz in den Rescue-Modus neu starten und auf Ihre Dateien zugreifen.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!alert]
>
> Der Rescue-Modus für Metal Instanzen ist derzeit nicht über das OVHcloud Kundencenter verfügbar. Weitere Informationen finden Sie in unserer Anleitung zum [Rescue-Modus für Metal-Instanzen](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Schritt 1: Rescue-Modus aktivieren

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie im Interface für die Instanzen auf `...`{.action} rechts neben der Instanz und wählen Sie `Neustart im Rescue-Modus`{.action}.

![control panel](images/rescue2022.png){.thumbnail}

Sie sehen nun den Dialog "Neustart im Rescue-Modus". Klicken Sie auf die Dropdown-Liste, um die Distribution auszuwählen, die Sie im Rescue-Modus verwenden möchten, und klicken Sie dann auf `Neu starten`{.action}.

![control panel](images/rescue2.png){.thumbnail}

Nach dem Neustart Ihrer Instanz im Rescue-Modus zeigt ein Hinweisfeld die verfügbaren Zugriffsmöglichkeiten an. 

![control panel](images/rescuedata.png){.thumbnail}

Ihr temporäres **Passwort für den Rescue-Modus** wird nur in der VNC-Konsole angezeigt. Klicken Sie auf Ihre Instanz in der Tabelle und anschließend auf `VNC-Konsole`{.action}, um es abzurufen.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Schritt 2: Auf Ihre Daten zugreifen

Sobald der Rescue-Modus aktiviert wurde, werden die Daten Ihrer Instanz als zusätzliche Disk angehängt. Sie muss noch gemountet werden, indem Sie die folgenden Schritte ausführen.

Stellen Sie zuerst eine [SSH-Verbindung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) zu Ihrer Instanz her. Überprüfen Sie nun die verfügbaren Disks mit diesem Befehl:

```bash
lsblk
```

Das Ergebnis wird ähnlich der folgenden Beispielausgabe aussehen:

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

Im Rescue-Modus ist `sda` die Disk und `sda1` die primäre Partition des Rescue-Modus, gemountet unter `/`.

In diesem Beispiel ist die primäre Disk `sdb` und die Systempartition ist `sdb1` (an der Größe ersichtlich).

Mounten Sie diese Partition mit dem folgenden Befehl:

```bash
mount /dev/sdb1 /mnt/
```

Ihre Daten sind jetzt über den Ordner `/mnt` abrufbar.

### Schritt 3: Rescue-Modus deaktivieren

Wenn Sie Ihre Maßnahmen beendet haben, können Sie den Rescue-Modus deaktivieren, indem Sie Ihre Instanz in der Instanzenverwaltung neu starten. Klicken Sie dazu auf `...`{.action} und wählen Sie `Rescue-Modus verlassen`{.action}.

![control panel](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Falls die Option `Rescue-Modus verlassen`{.action} nicht im Menü angezeigt wird während die Instanz im Rescue-Modus ist, aktualisieren Sie den Tab über die entsprechende Browser-Funktion.
>

### Den Rescue-Modus mit der OpenStack API aktivieren

Sie können den Rescue-Modus auch über die OpenStack API mit dem folgenden Befehl aktivieren:

```bash
nova rescue INSTANCE_ID
```

Um den Rescue-Modus zu verlassen, verwenden Sie den folgenden Befehl:

```bash
nova unrescue INSTANCE_ID
```

## Weiterführende Informationen

[SSH-Schlüsselpaar einer Instanz ersetzen](/pages/public_cloud/compute/replacing_lost_ssh_key)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.