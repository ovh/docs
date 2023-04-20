---
title: OVHcloud Snapshots
routes:
    canonical: '/pages/cloud/private-cloud/snapshots_horaires_ovh'
excerpt: Erfahren Sie hier die Funktionsweise der stündlichen Sicherungen
updated: 2020-11-30
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30.11.2020**

## Ziel

Um die durchgehende Verfügbarkeit des Dienstes sicherzustellen und Datenverluste zu vermeiden, erstellt OVHcloud stündlich automatisch Snapshots Ihrer Datastores.

**In dieser Anleitung wird erläutert, wie diese Funktion ausgeführt wird.**

## Voraussetzungen

- Sie verfügen über eine [Managed Bare Metal Infrastruktur](https://www.ovhcloud.com/de/managed-bare-metal/) in Ihrem OVHcloud Account.
- Sie haben Zugang zum vSphere Web Client Verwaltungsinterface.

## In der praktischen Anwendung

### Technische Grundlagen

Ein Dateisystem besteht aus Blöcken, die Daten aufnehmen. Am Anfang des Dateisystems gibt es einen Index, der Pointer enthält. Diese ermöglichen es, den Standort der verschiedenen Blöcke zu finden.

Eine Datei wird häufig in mehrere Blöcke aufgeteilt, sodass der Index die Zugriffszeit auf eine Datei optimieren kann. Der Index ist wie das Inhaltsverzeichnis eines Buches und ermöglicht es, die Seite des Kapitels zu erfahren, das Sie lesen möchten.
 
Ein ZFS Snapshot ist gleichsam ein Abbild des Dateisystems zu einem Zeitpunkt *T*. Er dient in der Regel als Grundlage für ein Backup.
 
Bei der Erstellung des Snapshots muss ZFS die gesamte Festplatte nicht neu auswählen, da alle Dateien bereits vorhanden sind. Der Snapshot speichert den Index mit den Pointern für die freien Blöcke und verwendeten Blöcke. Insgesamt speichert es die Positionierung der Blöcke, und ZFS kann je nach Datenänderung Blöcke hinzufügen. Der Snapshot erfordert nur sehr wenig Platz, solange keine Daten geändert werden, und er ist sehr schnell zu erstellen.
 
Nachdem der Snapshot erstellt wurde, wird ZFS die Schreib-Anfragen abfangen. Es werden folgende Operationen durchgeführt, wenn der Pointer verweist auf
 
- einen verwendeten Block: Er kopiert den Block in den Snapshot und aktualisiert den Index, damit er auf diesen neuen Block zeigt und nicht auf den alten Block.
- einen freien Block: Er kopiert den Block in das Dateisystem und ZFS aktualisiert den Gesamtindex des Dateisystem.
 
Das Hinzufügen von Dateien vergrößert den Snapshot nicht, da dieser sich nicht mit den freien Blöcken befasst. Ebenso haben mehrfache Rewrites von Blöcken keine Auswirkungen auf die Größe des Snapshots, da dieser nur eine Version für jeden Block speichert: die vom Zeitpunkt *T*.
 
Die Größe eines Snapshots ist also ungefähr gleich der Größe der Blöcke, die bei der Erstellung verwendet und seitdem geändert wurden. Vor allem ist jedoch festzuhalten, dass die Größe eines Snapshots von der Nutzung seines Dateisystems und der Lebensdauer des Snapshots abhängt.
 
In der Praxis wird ein zum Zeitpunkt *T* erstellter Snapshot nur wenige Kilobyte ausmachen. Die Größe des Snapshots wird abhängig von den bis zum nächsten Snapshot vorgenommenen Änderungen angepasst. Wenn Sie Ihre Daten löschen, wird der Speicherplatz erst freigegeben, wenn der Snapshot gelöscht wurde.

### Snapshot zum Zeitpunkt H-1

Sie können den ZFS-Snapshot der letzten Stunde (H-1) über den vSphere Web Client abrufen, da dieser direkt in Ihren Datastores gespeichert ist. 

#### Snapshot zum Zeitpunkt H-1 abrufen

Gehen Sie von Ihrem vSphere Web Client in die Ansicht der Datastores und klicken Sie anschließend auf den `Shared Storages` Ordner auf dem Datastore mit der wiederherzustellenden virtuellen Maschine.

Öffnen Sie die Datastore-Dateiansicht, indem Sie auf `Browse Files` klicken.

![data store](images/snapshot01.png){.thumbnail}

Erstellen Sie einen Ordner, in den Sie später die wiederherzustellenden Dateien kopieren.

![destination folder](images/snapshot02.png){.thumbnail}

Gehen Sie zum Ordner `.zfs` und bearbeiten Sie die Ordnerstruktur bis zum Ordner der VM, die Sie wiederherstellen möchten. Kopieren Sie anschließend alle in diesem Ordner enthaltenen Dateien auf den im vorherigen Schritt erstellten neuen Ordner.

![copy files](images/snapshot03.png){.thumbnail}

Sobald die Dateien kopier twurden, fügen Sie diese VM einfach in Ihr **Inventory** ein, indem Sie auf die Datei `.vmx` und dann auf `Register VM`{.action}  klicken.

![register vm](images/snapshot04.png){.thumbnail}

Folgen Sie nun dem VM Creation Wizard, um den Vorgang abzuschließen.

### Zugang zu Snapshots älter als H-1 

> [!warning]
>Die stündlichen Snapshots sind **kein** Backup-System und **nicht** garantiert.
>

OVHcloud bewahrt die 23 weiteren Snapshots (bis H-24) auf einem Datastore auf, zu dem Sie keinen direkten Zugriff haben. Es ist jedoch möglich, über eine Anfrage beim technischen Support (Ticket) die Wiederherstellung eines Snapshots älter als H-1 für eine bestimmte VM als **kostenpflichtigen Eingriff** zu beantragen. Wir können den angeforderten Snapshot nur auf demselben Datastore wiederherstellen, und diese Wiederherstellung kann keinesfalls garantiert werden.

Beachten Sie, dass stündliche Snapshots als zusätzliche Sicherheitsmaßnahme für interne Zwecke dienen und nur als letztes Mittel eingesetzt werden sollten, um einen möglichen Datenverlust zu vermeiden.

Wir empfehlen Ihnen die Verwendung einer vollständigen Backup-Lösung wie zum Beispiel unseres [Veeam Backup](/pages/cloud/private-cloud/veeam_backup_as_a_service)-Dienstes oder eines anderen Systems, das ein vollständiges Backup Ihrer virtuellen Maschinen erstellt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
