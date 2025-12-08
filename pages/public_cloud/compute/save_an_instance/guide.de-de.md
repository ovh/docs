---
title: Backup einer Instanz erstellen
excerpt: Erfahren Sie hier, wie Sie eine Public Cloud Instanz in Ihrem OVHcloud Kundencenter sichern
updated: 2025-11-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Sie können ein einzelnes Backup einer Instanz erstellen oder einen Zeitplan konfigurieren, um Backups Ihrer Instanzen zu automatisieren. Diese Backups können verwendet werden, um Ihre Instanz auf einen früheren Zustand wiederherzustellen oder um eine neue, identische Instanz zu erstellen.

**Diese Anleitung erklärt, wie Sie manuelle und automatische Backups einer Public Cloud Instanz erstellen.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben [OpenStack CLI auf Ihrem System installiert und konfiguriert](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).

## In der praktischen Anwendung

### Backup einer Instanz erstellen

> [!warning]
> Diese Option ist für Metal Instanzen nur über einen **Cold Snapshot** verfügbar. Die Metal-Instanz wird in den Rescue-Modus versetzt, und sobald das Backup abgeschlossen ist, wird die Instanz im normalen Modus neu gestartet.
>

> [!primary]
>
> Zwei Arten von Sicherungen sind verfügbar:
>
> - *Local*: Eine lokale Sicherung wird in derselben Region wie Ihre Instanz gespeichert.
> - *Distant*: Eine Distanz-Sicherung erstellt automatisch eine Kopie der lokalen Sicherung in einer anderen, von Ihnen ausgewählten Region.
>
> Jede Sicherung wird gesondert berechnet. Die Distanz-Sicherung wird gemäß der Speicherplatzkosten der ausgewählten Region berechnet.
>
> **Hinweis:** Local Zones sind für entfernte Backups nicht geeignet.

> [!tabs]
> Über das OVHcloud Kundencenter
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, öffnen Sie `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.  
>> Klicken Sie anschließend auf `Instanzen`{.action} im linken Menü.  
>> Auf der Instanzseite klicken Sie auf den Button `...`{.action} rechts neben der Instanz und wählen Sie `Backup erstellen`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}
>>
>> /// details | Lokale Sicherung
>>
>> Geben Sie einen Namen für die Sicherung an, prüfen Sie die Kosten-Information und klicken Sie auf `Bestätigen`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup2bis.png){.thumbnail}
>>
>> ///
>>
>> /// details | Entferntes Backup
>>
>> Geben Sie einen Namen für das Backup ein. Überprüfen Sie die Preisinformationen. Klicken Sie auf `Fern-Backup hinzufügen (Option)`{.action}, geben Sie einen Namen für das Backup ein, wählen Sie eine Region aus und klicken Sie auf `Bestätigen`{.action}
>>
>> ![public-cloud-instance-backup](images/createdistantbackup.png){.thumbnail}
>>
>> ///
>>
>> Der Fortschritt der Sicherung kann nicht in Echtzeit verfolgt werden. Allerdings wird im Bereich `Instance Backup`{.action} unter **Compute** im linken Menü während des Vorgangs der Status `Backup in Bearbeitung` angezeigt.
>>
>> Nach Abschluss der Sicherung wird diese im Bereich `Instance Backup`{.action} unter dem Menüpunkt **Compute** im linken Menü angezeigt.
>>
>> ![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}
>>
> Über die OVHcloud API <a name="createinstanceviaapi"></a>
>>
>> Loggen Sie sich in die [OVHcloud API-Konsole](/links/console).
>>
>> Sie können anschließend alle verfügbaren Regionen mit folgendem API-Aufruf anzeigen:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET  /cloud/project/{serviceName}/region
>> >
>>
>> Verwenden Sie anschließend folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/snapshot
>> >
>>
>> Füllen Sie die Felder für die Parameter aus:
>>
>> - **instanceId**: Eindeutige ID der betreffenden Instanz.
>> - **regionName**: Name der Region, in der sich die Quell-Instanz befindet.
>> - **serviceName**: ID des OVHcloud Projekts.
>> - **distantRegionName (optional)**: Name der Zielregion, in der die Sicherung gespeichert wird.
>> - **distantSnapshotName (optional)**: Name der Sicherung in der Zielregion.
>> - **snapshotName**: Name der lokalen Sicherung.
>>
>> > [!primary]
>> >
>> > Erstellen Sie eine Sicherung in einer Zielregion nur, wenn die Parameter **distantRegionName** und **distantSnapshotName** eingetragen sind.
>> >
>>
> Über die OpenStack-CLI
>>
>> Führen Sie den folgenden Befehl aus, um die Liste der Instanzen anzuzeigen:
>>
>> ```bash
>> $ openstack server list
>>
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | ID | Name | Status | Netzwerke | Image Name |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | AKTIV | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> ```
>>
>> Sie können alle verfügbaren Regionen mit folgendem Befehl auflisten:
>>
>> ```bash
>> $ openstack region list
>> ```
>>
>> /// details | Lokale Sicherung
>>
>> Führen Sie anschließend den folgenden Befehl aus, um eine Sicherung Ihrer Instanz zu erstellen:
>>
>> ```bash
>> $ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
>> ```
>>
>> ///
>>
>> /// details | Sicherung in einer Zielregion
>>
>> Führen Sie den folgenden Befehl nach Erstellung der lokalen Sicherung aus:
>>
>> ```bash
>> $ openstack workflow execution create ovh.glance.glance_download '{"src_image_id": "<image_id>", "src_region": "<current_region>", "dst_region": "<remote_region>"}'
>> ```
>>
>> ///
>>
> Über Horizon
>>
>> Klicken Sie auf das Menü `Compute`{.action} links und wählen Sie `Instanzen`{.action}.  
>> Klicken Sie anschließend auf den Button `Snapshot erstellen`{.action} rechts neben der Zeile der betreffenden Instanz.
>>
>> ![public-cloud-instance-backup-horizon1](images/createbackuphorizon1.png){.thumbnail}
>>
>> Geben Sie den Namen der Sicherung an und klicken Sie auf `Snapshot erstellen`{.action}.
>>
>> ![public-cloud-instance-backup-horizon2](images/createbackuphorizon2.png){.thumbnail}
>>

### Automatisches Backup einer Instanz erstellen

> [!primary]
>
> Wenn Sie diese Funktion direkt über OpenStack automatisieren möchten, können Sie einen Mistral-Workflow mit einem Cron-Trigger erstellen.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Automatisches Backup erstellen`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Sie können dann folgende Backup-Einstellungen konfigurieren:

#### **Workflow** 

Derzeit existiert nur ein Workflow. Er erstellt ein Backup für die Instanz und das primäre Volume.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Ressource** 

Sie können die zu sichernde Instanz auswählen.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Scheduling** 

Sie können eine personalisierte Backup-Planung festlegen oder eine der Standardrotationen auswählen:

- Tägliche Sicherung mit Speicherung der letzten 7 Backups
- Tägliche Sicherung mit Speicherung der letzten 14 Backups

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Name** 

Geben Sie einen Namen für die Planung des automatischen Backups ein. Nehmen Sie die Abrechnungsinformationen zur Kenntnis und erstellen Sie das Scheduling, indem Sie auf den Button `Erstellen`{.action} klicken.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Verwaltung der Backups und Zeitpläne

Zeitplanungen können im Bereich `Workflow Management`{.action} unter **Compute** im linken Menü erstellt und entfernt werden.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Die Backups Ihrer Instanzen werden im Bereich `Instance Backup`{.action} in Ihrem Public Cloud Kundencenter verwaltet, unter **Compute** im linken Menü.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> Die Option, die Instanz zu sichern, muss separat abgestellt werden, damit sie nicht mehr in Rechnung gestellt wird. Das Löschen einer Instanz entfernt nicht automatisch die mit ihr verbundenen Dienst-Optionen.
>


> [!warning]
> **Beachten Sie, dass Sie ein Instanz-Backup nicht löschen können, wenn eine Instanz, die aus diesem Backup erzeugt wurde, zum Zeitpunkt des Löschvorgangs ausgeführt wird.**

Erfahren Sie in [dieser Anleitung](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup), wie Sie Sicherungen verwenden, um Instanzen zu klonen oder wiederherzustellen.

## Weiterführende Informationen

[Verwenden von Backups zum Erzeugen oder Wiederherstellen von Instanzen](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
