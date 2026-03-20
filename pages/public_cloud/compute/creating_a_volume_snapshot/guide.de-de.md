---
title: "Volume Snapshot erstellen"
excerpt: Erfahren Sie hier, wie Sie einen Snapshot einer Public Cloud Disk erstellen
updated: 2025-04-28
---

## Ziel

Ein **Volume Snapshot** ist ein Wiederherstellungspunkt, der im selben Speichercluster gespeichert ist wie das ursprüngliche Volume. Die Erstellung und Wiederherstellung sind schnell, aber im Falle einer Störung des Clusters können Volume und Snapshot nicht verfügbar sein.<br>
Die Erstellung eines Volume Snapshots erfordert nicht, dass das Volume von der Instanz getrennt wird.

Sie sind zu unterscheiden von **Volume Backups**, wobei ein Image auf Ihrem Volume basierend erstellt wird. Dieses wird im Object Storage Cluster des ursprünglichen Volumes gespeichert.
Dieses Maß an Resilienz ist ideal und erlaubt es Ihnen, schnell auf das Volume betreffende Störungen zu reagieren, indem Sie aus dem Backup ein neues Volume erstellen.<br>
Um ein Volume Backup anzulegen, muss das Volume von der Instanz getrennt werden. Weitere Informationen zu dieser Option finden Sie in [dieser Anleitung](/pages/public_cloud/compute/volume-backup).

Ein Snapshot eines zusätzlichen Volumes dient zwei allgemeinen Zwecken:

- Sie können mit wenigen Klicks Backups erzeugen und so lange wie nötig beibehalten.
- Sie können einen Snapshot als Template für identische Volumes verwenden.

**Diese Anleitung erklärt, wie Sie im OVHcloud Kundencenter einen Volume Snapshot erstellen.**

## Voraussetzungen

- Sie haben ein [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)-Volume in Ihrem [Public Cloud Projekt](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) erstellt.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

## In der praktischen Anwendung

Öffnen Sie `Block Storage`{.action} im linken Menü unter **Storage und Backups**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

Rechts neben dem betreffenden Volume klicken Sie auf den Button `...`{.action} und dann auf `Backup erstellen`{.action}. (Sie müssen das Volume nicht zuerst von seiner Instanz trennen.) Wenn Sie Ihr Volume jedoch trennen möchten, folgen Sie dem Abschnitt "Volume abtrennen" in [dieser Anleitung](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance).

Wählen Sie anschließend `Volume Snapshot`{.action} aus, benennen Sie ihn und klicken Sie auf `Backup erstellen`{.action}.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Im Popup-Fenster können Sie dem Snapshot einen anderen Namen geben. Nehmen Sie die Abrechnungsinformation zur Kenntnis und klicken Sie dann auf `Snapshot erstellen`{.action}.

Die Dauer der Erstellung des Snapshots hängt von der Menge der auf dem Volume vorhandenen Daten, der Verwendung der Ressourcen der Instanz zum Zeitpunkt des Snapshots und anderen hostspezifischen Faktoren ab.

Wir empfehlen Ihnen, Ihre Snapshots außerhalb Ihrer produktiven Zeiten durchzuführen.

Hier einige weitere bewährte Praktiken:

- Vermeiden Sie die Erstellung von Snapshots zu Spitzenzeiten (04:00 - 22:00 Uhr Pariser Zeit).
- Installieren Sie "qemu-guest", sofern nicht bereits geschehen, oder versuchen Sie es gegebenenfalls zu deaktivieren.
- Versuchen Sie, den Server während der Erstellung des Snapshots nicht zu beanspruchen (Begrenzung der I/O-Werte, RAM-Verbrauch etc.).

Da ein Volume Snapshot ein Klon der gesamten Disk ist, hat er unabhängig von der Speicherplatzbelegung die maximale Größe des ursprünglichen Volumes.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Öffnen Sie den Bereich `Volume Snapshot`{.action} im linken Menü. Sobald der Snapshot erstellt wurde, wird er zu dieser Tabelle hinzugefügt.

Klicken Sie auf den Button `...`{.action} um einen Snapshot zu löschen oder ein neues Volume aus dem entsprechenden Snapshot zu erzeugen. Weitere Informationen dazu finden Sie in [dieser Anleitung](/pages/public_cloud/compute/create-volume-from-snapshot).

## Weiterführende Informationen

[Volume Backup erstellen](/pages/public_cloud/compute/volume-backup)

[Zusätzliche Festplatten aus einem Backup erstellen](/pages/public_cloud/compute/create-volume-from-snapshot)

[Zusätzliches Volume auf einer Instanz erstellen und konfigurieren](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Die Größe einer zusätzlichen Disk erweitern](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Treten Sie unserer [User Community](/links/community) bei.
