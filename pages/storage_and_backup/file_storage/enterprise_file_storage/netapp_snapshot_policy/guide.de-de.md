---
title: Enterprise File Storage - Snapshot-Policy verwalten
excerpt: Erfahren Sie hier, wie Sie im OVHcloud Kundencenter Snapshot-Policys erstellen, auf Ihr Volume anwenden, modifizieren und löschen
updated: 2023-08-30
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung geben wir Ihnen einen Überblick über die Verwaltung Ihrer Snapshot-Policys für OVHcloud Enterprise File Storage Volumes.

**Diese Anleitung erklärt, wie Sie eine Snapshot-Policy erstellen, auf Ihr Volume anwenden, auf Ihr Volume anwenden, modifizieren und löschen.**

- Sie verfügen über einen OVHcloud Enterprise File Storage mit verfügbarem Volume.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## Grundlagen

Ein Volume Snapshot ist eine schreibgeschützte Point-in-Time-Kopie eines Volumes.<br>
Snapshots werden aus einem bestehenden, betriebsbereiten Volume erstellt. Sie können nicht separat davon existieren.

Eine Snapshot-Policy erlaubt es, die Erstellung von Snapshots anhand verschiedener Einstellungen zu automatisieren. Diese Regel kann bearbeitet und gelöscht werden, wenn Sie sie nicht mehr benötigen.

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und wählen Sie `Bare Metal Cloud`{.action} in der oberen Navigationsleiste aus. Öffnen Sie `Storage und Backup`{.action}, dann `Enterprise File Storage`{.action} im linken Menü und wählen Sie Ihre Dienstleistung in der Liste aus.

### Snapshot-Policy erstellen

Mit einer Snapshot-Policy können Sie Snapshots automatisieren, indem Sie das Erstellungsintervall in Minuten, Stunden, Tagen, Wochen oder Monaten festlegen.
Außerdem müssen Sie die Anzahl der Kopien angeben, die Sie aufbewahren möchten.

1\. Klicken Sie auf den Tab `Regeln für Snapshots`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Geben Sie in der neuen Ansicht einen Namen und eine Beschreibung für die Policy ein. Verwenden Sie anschließend den Button `+ Eine neue Regel erstellen`{.action}, um eine oder mehrere Regeln zur Policy hinzuzufügen.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Füllen Sie die Felder aus, um Uhrzeit, Tage des Monats, Wochentage und Monate für die Erstellung des Snapshots anzugeben. Geben Sie außerdem einen Präfix für die Snapshots ein, der für deren Benennung erforderlich ist.

Detailliertere Informationen zu jedem Wert erhalten Sie, indem Sie jeweils auf das Fragezeichen klicken. Wenn Sie den Bereich `Beispiel`{.action} erweitern, werden exemplarisch zwei Policy-Regelsätze mit Erläuterung ihrer Ergebnisse angezeigt.

Klicken Sie rechts auf den Haken, um die Regel hinzuzufügen. Wenn Sie alle Regeln hinzugefügt haben, klicken Sie unten auf `Eine neue Regel für Snapshots erstellen`{.action}.

> [!primary]
> Sie müssen ein Präfix und einen Wert für die Minuten angeben. Optional können Sie Stunden, Tage und Monate der Ausführung auswählen, um den Zeitplan zu präzisieren.
>

Sie können eine Snapshot-Policy nach der Erstellung nicht mehr ändern. Wenn Sie neue Einstellungen vornehmen müssen, löschen Sie die aktuelle Snapshot-Policy und erzeugen Sie eine neue. 

### Snapshot-Policy anwenden

Nachdem Sie die Snapshot-Policy erstellt haben, können Sie sie auf ein Volume anwenden.

1\. Gehen Sie zum Tab `Volumes`{.action} Ihres Kapazitätspools.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Wählen Sie aus der Liste das Volume aus, auf das die Snapshot-Policy angewendet werden soll.

3\. Gehen Sie in den Bereich `Snapshots`{.action} und wählen Sie im Bereich `Regeln für Snapshots`{.action} die gewünschte Policy aus.

4\. Klicken Sie auf den Button `Regel anwenden`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Snapshot-Policy löschen

> [!warning]
>
> Eine an ein Volume gebundene Snapshot-Policy kann nicht gelöscht werden. Wenn Sie eine Snapshot-Policy löschen möchten, die mit einem oder mehreren Volumes verknüpft ist, müssen Sie diese Policy zuerst aufheben, indem Sie diesen Volumes eine andere Snapshot-Policy zuordnen.
>

So löschen Sie eine Snapshot-Policy:

1\. Gehen Sie in den Tab `Regeln für Snapshots`{.action} Ihres Kapazitätspools.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Wählen Sie die zu löschende Policy aus.

3\. Klicken Sie auf das Abfalltonnensymbol.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
