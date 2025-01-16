---
title: Enterprise File Storage - Volume klonen
excerpt: "Erfahren Sie hier, wie Sie ein Volume Ihres Enterprise File Storage mithilfe der OVHcloud API klonen"
updated: 2024-12-09
---

## Ziel

Ein geklontes Volume enthält alle Daten des übergeordneten Volumes zu einem bestimmten Zeitpunkt. Es verfügt über alle Funktionen eines Volumes und kann daher wie ein klassisches Volume verwendet werden.

Ein geklontes Volume wird aus einem Snapshot eines aktiven Volumes erstellt. Nach der Erstellung werden Änderungen am übergeordneten Volume nicht mehr im Klon wiedergegeben.

> [!primary]
> In dieser Anleitung wird ein Volume wie in der OVHcloud API auch als *share* bezeichnet.

**Erfahren Sie mehr über die Volume-Cloning-Funktion und erfahren Sie, wie Sie ein Volume Ihrer Enterprise File Storage-Lösung über die OVHcloud API klonen.**

## Anwendungsfälle

Es gibt mehrere Szenarien für die Verwendung eines geklonten Volumes. Nachfolgend finden Sie einige Beispiele.

Schulungen, Qualitäts- oder auch Testsysteme müssen möglicherweise regelmäßig mit Daten aus der Produktionsumgebung aktualisiert werden.

Mithilfe des Klonens von Datenträgern können Automatisierungsvorgänge eingerichtet werden, um schnell und ohne Zugriff auf Produktionsdaten aktuelle datenbasierte Datensätze zu erstellen.
 
![CloneVolumeUseCaseEnvironmentSync](images/clone_volume_use_case_1.png){.thumbnail}

### Bekämpfung von Datenkorruption

Eine logische Datenbeschädigung kann durch Softwarefehler, menschliche Fehler oder mutwillige Handlungen verursacht werden.

Durch die Erstellung regelmäßiger Backup-Punkte mithilfe einer [Snapshot-Policy](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_snapshot_policy) und der Funktion zum Klonen von Volumes können Sie die Ursachen von Datenbeschädigungen einfach analysieren, indem Sie ein neues Volume aus vorhandenen Daten erstellen.

![CloneVolumeUseCaseDataCorruption](images/clone_volume_use_case_2.png){.thumbnail}

## Voraussetzungen

- Sie verfügen über einen OVHcloud [Enterprise File Storage](/links/storage/enterprise-file-storage).
- Sie können sich in die [OVHcloud API-Oberfläche](/links/api) einloggen.
- Sie verfügen über ein Enterprise File Storage Volume mit einem `manuellen` Snapshot.

> [!primary]
>
> Sie können ein Volume und einen Snapshot vom Typ `Manual` über die [OVHcloud API](/links/api) oder über Ihr [OVHcloud Kundencenter](/links/manager) erstellen.

> [!success]
> Wenn Sie mit der Verwendung der OVHcloud API nicht vertraut sind, lesen Sie unsere Anleitung zu den [Ersten Schritten mit der OVHcloud API](/pages/manage_and_operate/api/first-steps)“.

## Grenzen der Funktionalität

- Zum Klonen eines Volumes können nur Snapshots vom Typ `manual` verwendet werden.  
  Wenn Sie jedoch ein Volume mit einem Snapshot vom Typ `automatic` klonen möchten, können Sie diesen Snapshot beibehalten und in einen Snapshot vom Typ `manual` umwandeln.  
  Weitere Informationen finden Sie in der [Anleitung zur Aufbewahrung automatischer Snapshots](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_hold_automatic_snapshot).

- Die Erstellung eines geklonten Volumes aus einem Snapshot vom Typ `system` wird nicht unterstützt.

- Die Größe des geklonten Volumes muss **größer oder gleich** der Größe des Snapshots sein, der für den Clone-Vorgang verwendet wird.

## ## In der praktischen Anwendung

1\. Identifizieren Sie die zu verwendende `Snapshot-ID` mithilfe des folgenden API-Aufrufs:

> [!api]
>
> @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

**Parameter:**

- `serviceName`: Die eindeutige Kennung des Dienstes.
- `shareId`: Die Kennung des Volumes, zu dem der Snapshot gehört.

![CloneVolume](images/clone_volume_step_1.png){.thumbnail}

2\. Erstellen Sie das Volume aus dem Snapshot mithilfe des folgenden API-Aufrufs:

> [!api]
>
> @api {POST} /storage/netapp/{serviceName}/share
>

**Parameter:**

- `serviceName`: Die eindeutige Kennung des Dienstes.
- `size`: Die Größe des Volumes, größer oder gleich der Größe des Snapshots.
- `protocol`: Das Protokoll des Volumes. Es wird nur das Protokoll NFS unterstützt.
- `snapshotID`: Die Snapshot-ID, die zur Erstellung des Volumes verwendet wird.
- `name`: Der Name des Volumes (optional).
- `description`: Die Beschreibung des Volumes (optional).

![CloneVolume](images/clone_volume_step_2.png){.thumbnail}

Die OVHcloud API gibt den HTTP Code 201 sowie die dem erstellten Volume entsprechenden Informationen zurück.

Der Status des Volumes wird auf `creating_from_snapshot` gesetzt und ändert sich dann in `available`, sobald die Erstellung des Volumes abgeschlossen ist.  
Je nach Größe des verwendeten Snapshots kann die Erstellung des Volumes einige Zeit in Anspruch nehmen.

**Ein neues Volume wird jetzt aus dem Snapshot des übergeordneten Volumes erstellt.**

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.