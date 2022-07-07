---
title: Snapshots erstellen
slug: snapshot-erstellen
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/snapshot-erstellen/'
excerpt: So kehren Sie mithilfe von Snapshots zu einem früheren Zustand Ihrer VMs zurück
legacy_guide_number: '7766547'
section: Verwaltung virtueller Maschinen
order: 8
---

**Letzte Aktualisierung am 18.11.2020**

## Ziel

Sie können jederzeit einen Snapshot einer virtuellen Maschine erstellen. Wenn Sie einen Snapshot aufgenommen haben, können Sie alle im neuesten Snapshot enthaltenen virtuellen Maschinen wiederherstellen oder den Snapshot löschen.

**Diese Anleitung erklärt die Funktionsweise der Snapshots.**

## Voraussetzungen

- Sie verfügen über ein [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/){.external} Produkt.
- Sie haben Zugriff zum vSphere HTML Client.

## In der praktischen Anwendung

Snapshots sind nützlich, wenn Sie mehrmals zum selben Zustand zurückkehren möchten, ohne mehrere virtuelle Maschinen zu erstellen. Mit Snapshots werden Wiederherstellungspunkte erstellt. 

Auf diese Weise können Sie den Basis-Zustand einer VM sichern, bevor Sie diese auf einen anderen Funktionstyp migrieren. 

Snapshots liefern nützliche “Momentaufnahmen” einer Festplatte. Dennoch empfehlen wir, die vorhandenen Snapshots regelmäßig zu löschen. Wenn Sie eine große Anzahl an Snapshots haben, belegt dies sehr viel Speicherplatz und beeinträchtigt die Leistung Ihrer VM.

> [!primary]
> 
> Es wird davon abgeraten, Snapshots als Backup-Methode für virtuelle Maschinen zu verwenden.
> 

Mit einem Snapshot können Sie den Zustand Ihrer VM in genau dem Moment einfangen, in dem Sie den Snapshot erstellen. Dieser Snapshot enthält wahlweise:

- den Zustand aller Festplatten der virtuellen Maschine
- den Inhalt des Arbeitsspeichers der virtuellen Maschine

> [!warning]
> 
> Es ist nicht möglich, die Festplattengröße zu ändern, wenn ein Snapshot auf einer virtuellen Maschine aufgenommen wird.
> 

### Snapshot erstellen

Klicken Sie mit der rechten Maustaste auf Ihre VM und wählen Sie dann `Snapshots`{.action} und `Take Snapshot...`{.action} aus.

![Snapshot erstellen](images/snapshot01.png){.thumbnail}

Bestimmen Sie nun den Namen des Snapshots, dessen Beschreibung und ob Sie den Arbeitsspeicher der VM ebenfalls im Snapshot einschließen möchten.

An dieser Stelle haben Sie die Wahl, einen Snapshot mit oder ohne dem von der VM verwendeten RAM zu erstellen. Wenn Sie den Arbeitsspeicher im Snapshot einschließen, wird die Ausführung des Tasks länger dauern. Dafür ist jedoch zur Wiederherstellung des Snapshots kein Neustart der virtuellen Maschine erforderlich. 

Wenn der RAM nicht gespeichert wird, wird der Task schneller abgeschlossen, allerdings muss im Falle einer Wiederherstellung die VM neu gestartet werden.

![Snapshot konfigurieren](images/snapshot02.png){.thumbnail}

### Snapshots verwalten

Sie finden alle Snapshots einer VM in der Snapshot-Verwaltung. Klicken Sie hierzu mit der rechten Maustaste auf die VM und wählen Sie dann `Snapshots`{.action} und `Manage Snapshots`{.action} aus.

![Snapshots verwalten](images/snapshot03.png){.thumbnail}

### Snapshot löschen

Wählen Sie in der Snapshot-Verwaltung den zu entfernenden Snapshot aus und klicken Sie auf `Delete`{.action}.

Sie können auch alle Snapshots einer VM mit nur einer Aktion löschen, indem Sie auf `Delete All`{.action} klicken.

### Snapshot wiederherstellen

Wählen Sie in der Snapshot-Verwaltung den wiederherzustellenden Snapshot aus und klicken Sie auf `Restore`{.action}.

### Snapshots konsolidieren

Sind redundante Festplatten vorhanden, kann dies die Leistung der virtuellen Maschinen beeinträchtigen.

Die Snapshot-Konsolidierung ist dann von Nutzen, wenn Snapshot-Festplatten nach einem Löschvorgang nicht komprimiert werden können. Nach erfolgreicher Konsolidierung werden die redundanten Festplatten gelöscht, was die Leistung der virtuellen Maschinen verbessert und Speicherplatz spart.

Um eine Konsolidierung auszuführen, klicken Sie mit der rechten Maustaste auf die VM und wählen Sie dann `Snapshots`{.action} und `Consolidate`{.action} aus.

![Snapshots konsolidieren](images/consolidate.png){.thumbnail}

Weitere Informationen finden Sie in der [VMware-Dokumentation](https://docs.vmware.com/de/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
