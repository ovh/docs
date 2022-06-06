---
title: "Volume Snapshot erstellen"
slug: volume-snapshot-erstellung
excerpt: 'Erfahren Sie hier, wie Sie einen Snapshot einer Public Cloud Disk erstellen'
section: Storage
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.01.2022**

## Ziel

Ein Snapshot eines zusätzlichen Volumes dient zwei allgemeinen Zwecken:

- Sie können mit wenigen Klicks Backups erzeugen und so lange wie nötig beibehalten.
- Sie können einen Snapshot als Template für identische Volumes verwenden.

**Diese Anleitung erklärt, wie Sie im OVHcloud Kundencenter einen Volume Snapshot erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein [Block Storage](../erstellen_zustzliche_festplatte_public_cloud/)-Volume in Ihrem [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) erstellt.

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie Ihr Projekt aus. Öffnen Sie dann `Block Storage`{.action} im linken Menü unter **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

Klicken Sie rechts neben dem betreffenden Volume auf `...`{.action} und dann auf `Snapshot erstellen`{.action}. (Es ist nicht notwendig, das Volume zuerst von seiner Instanz zu trennen.)

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Im Popup-Fenster können Sie dem Snapshot einen anderen Namen geben. Nehmen Sie die Abrechnungsinformation zur Kenntnis und klicken Sie dann auf `Snapshot erstellen`{.action}.

Die Erstellungsdauer des Snapshots hängt von der Menge der auf dem Volume vorhandenen Daten ab.

Da ein Volume Snapshot ein Klon der gesamten Disk ist, hat er unabhängig von der Speicherplatzbelegung die maximale Größe des ursprünglichen Volumes.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Öffnen Sie den Bereich `Volume Snapshot`{.action} im linken Menü. Sobald der Snapshot erstellt wurde, wird er zu dieser Tabelle hinzugefügt.

Klicken Sie auf den Button `...`{.action} um einen Snapshot zu löschen oder ein neues Volume aus dem entsprechenden Snapshot zu erzeugen. Weitere Informationen dazu finden Sie in [dieser Anleitung](../create-volume-from-backup/).

## Weiterführende Informationen

[Zusätzliche Festplatten aus einem Backup erstellen](../create-volume-from-backup/)

[Zusätzliches Volume auf einer Instanz erstellen und konfigurieren](../erstellen_zustzliche_festplatte_public_cloud/)

[Die Größe einer zusätzlichen Disk erweitern](../ihre_zusatzliche_festplatte_vergroern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.