---
title: "Volume Backup erstellen"
slug: volume-backup
excerpt: "Erfahren Sie hier, wie Sie über Ihr Kundencenter ein Backup Ihres Block Storage Volumes erstellen"
section: Storage
order: 3
updated: 2023-03-21
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.03.2023**

## Ziel

Für Ihre auf Block Storage Volumes liegenden wichtigen Daten ist es sinnvoll, Backups zu organisieren. Damit verhindern Sie Datenverluste, etwa aufgrund menschlicher Fehler oder Störungen auf Cluster-Ebene.

Ein **Volume Snapshot** ist ein Wiederherstellungspunkt, der im selben Speichercluster gespeichert ist wie das ursprüngliche Volume. Die Erstellung und Wiederherstellung sind schnell, aber im Falle einer Störung des Clusters können Volume und Snapshot nicht verfügbar sein.<br>
Die Erstellung eines Volume Snapshots erfordert nicht, dass das Volume von der Instanz getrennt wird.

Ein **Volume Backup** ist ein Image, das auf Ihrem Volume basierend erstellt wird. Dieses wird im Object Storage Cluster des ursprünglichen Volumes gespeichert.
Dieses Maß an Resilienz ist ideal und erlaubt es Ihnen, schnell auf das Volume betreffende Störungen zu reagieren, indem Sie aus dem Backup ein neues Volume erstellen.<br>
Um ein Volume Backup anzulegen, muss das Volume von der Instanz getrennt werden.

Volume Snapshot und Volume Backup ermöglichen:

- Backups Ihres Volumes mit nur wenigen Klicks zu erstellen und so lange wie nötig aufbewahren.
- Mit Backups den früheren Zustand Ihres Volumes wiederherzustellen.
- Backups als Vorlage zu verwenden, um identische Volumes zu erstellen.

**Diese Anleitung erklärt, wie Sie ein Backup Ihres Block Storage Volumes über Ihr OVHcloud Kundencenter erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein [Block Storage Volume](https://docs.ovh.com/de/public-cloud/erstellen_zustzliche_festplatte_public_cloud/) in Ihrem [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) erstellt.

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das Public Cloud Projekt aus.

Öffnen Sie anschließend das Menü `Block Storage`{.action} im linken Menü unter **Storage**.

Klicken Sie rechts neben dem betreffenden Volume auf den Button `...`{.action} und dann auf `Backup erstellen`{.action}. Es ist nicht notwendig, zuerst das Volume von seiner Instanz zu trennen. Wenn Sie Ihr Volume jedoch von Ihrer Instanz trennen möchten, lesen Sie [diesen Abschnitt für Linux](https://docs.ovh.com/de/public-cloud/erstellen_zustzliche_festplatte_public_cloud/#unter-linux) und [diesen Abschnitt für Windows](https://docs.ovh.com/de/public-cloud/erstellen_zustzliche_festplatte_public_cloud/#unter-windows).

![Volume Backup - Erstellung](images/volumebackup01.png){.thumbnail}

Wählen Sie das betreffende Volume aus, falls notwendig.

Wählen Sie dann den Backup-Typ aus, den Sie erstellen möchten: **Volume Snapshot** oder **Volume Backup**.

- Wenn Sie **Volume Snapshot** auswählen, können Sie den Namen des zu erstellenden Volume Snapshots ändern, bevor Sie über den Button `Backup erstellen`{.action} bestätigen.
- Wenn Sie **Volume Backup** auswählen, werden Sie aufgefordert, Ihr Volume von der Instanz zu trennen, um fortfahren zu können. Sie können dann den Namen des zu erstellenden Volume Backup ändern, bevor Sie die Sicherung erstellen.

![Backup oder Snapshot Volume - Erstellung](images/volumebackup02.png){.thumbnail}

Die Zeit zur Erstellung des Backups, ob Volume Snapshot oder Volume Backup, kann abhängig von der Datenmenge auf dem Volume, der Verwendung der Ressourcen der Instanz sowie anderen hostspezifischen Faktoren mehrere Stunden in Anspruch nehmen.

> [!primary]
> **Best Practices:**
>
> - Führen Sie Volume Backups außerhalb Ihrer Produktionsstunden durch.
> - Vermeiden Sie die Erstellung von Snapshots zu Spitzenzeiten (04:00 - 22:00 Uhr Pariser Zeit).
> - Installieren Sie "qemu-guest", falls nicht schon erfolgt oder versuchen Sie es gegebenenfalls zu deaktivieren.
> - Versuchen Sie, den Server während der Erstellung des Snapshots (Begrenzung von I/O, RAM-Verbrauch usw.) nicht zu beanspruchen.
> - Auch wenn dies nicht zwingend notwendig ist, ist es besser, Ihr Volume vor Erstellung eines Snapshots abzutrennen.
> - Überprüfen Sie regelmäßig, ob Ihre Daten auf dem Volume Snapshot oder Volume Backup intakt sind.
>

Da ein Volume Snapshot oder ein Volume Backup ein Klon der gesamten Disk ist, hat es unabhängig vom tatsächlichen zugewiesenen Speicherplatz die maximale Größe des ursprünglichen Volumes.

Die Liste Ihrer Snapshots finden Sie im Bereich `Volume Snapshot`{.action} im linken Menü.
Sobald der Volume Snapshot erstellt wurde, erscheint es in dieser Liste.

![Volume Snapshot - Liste](images/volumebackup03.png){.thumbnail}

Die Liste Ihrer Backups finden Sie im Bereich `Volume Backup`{.action} im linken Menü.
Sobald die Erstellung angefordert wurde, wird das Backup zur Liste hinzugefügt.

![Backup Volume - Liste](images/volumebackup04.png){.thumbnail}

Klicken Sie auf den Button `...`{.action}, und dann auf `Löschen`{.action} um ein Volume Backup zu entfernen. Wählen Sie `Volume erstellen`{.action} aus, um ein Volume basierend auf der gewünschten Volume-Sicherung neu zu erstellen.

Weitere Informationen zu diesem Thema finden Sie in unserer [Anleitung zur Erstellung eines Volumes aus einem Backup](https://docs.ovh.com/de/public-cloud/create-volume-from-backup/).

![Volume über ein Backup erstellen](images/volumebackup05.png){.thumbnail}

## Weiterführende Informationen

[Volume von einem Backup aus erstellen](https://docs.ovh.com/de/public-cloud/create-volume-from-backup/)

[Zusätzliches Volume auf einer Instanz erstellen und konfigurieren](https://docs.ovh.com/de/public-cloud/erstellen_zustzliche_festplatte_public_cloud/)

[Die Größe einer zusätzlichen Disk erweitern](https://docs.ovh.com/de/public-cloud/ihre_zusatzliche_festplatte_vergroern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
