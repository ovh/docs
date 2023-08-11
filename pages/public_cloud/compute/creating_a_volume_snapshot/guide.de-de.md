---
title: "Volume Snapshot erstellen"
excerpt: 'Erfahren Sie hier, wie Sie einen Snapshot einer Public Cloud Disk erstellen'
updated: 2023-04-21
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 21.04.2023**

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

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)-Volume in Ihrem [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) erstellt.

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie Ihr Projekt aus. Öffnen Sie dann `Block Storage`{.action} im linken Menü unter **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

Klicken Sie rechts neben dem betreffenden Volume auf `...`{.action} und dann auf `Snapshot erstellen`{.action}. (Es ist nicht notwendig, das Volume zuerst von seiner Instanz zu trennen.) Wenn Sie Ihr Volume jedoch abtrennen möchten, lesen Sie [diesen Abschnitt](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#linux) der entsprechenden Anleitung für Linux und [diesen Abschnitt](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#windows) für Windows.

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

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
