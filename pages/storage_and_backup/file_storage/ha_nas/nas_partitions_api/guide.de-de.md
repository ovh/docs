---
title: HA-NAS - Partitionsverwaltung über API
excerpt: "Erfahren Sie hier, wie Sie HA-NAS-Partitionen mithilfe der OVHcloud API verwalten"
updated: 2022-07-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

OVHcloud HA-NAS Dienste ermöglichen Ihnen die Verwaltung zentral gespeicherter Dateien, die über ein Netzwerk zugänglich sind.

**Diese Anleitung erklärt, wie Sie die Partitionen Ihres HA-NAS über die OVHcloud API verwalten.**

## Voraussetzungen

- Sie haben ein [OVHcloud HA-NAS](https://www.ovh.com/de/nas/) in Ihrem Kunden-Account.
- Sie haben sich anhand der [Anleitung zu den ersten Schritten mit der OVHcloud API](/pages/manage_and_operate/api/first-steps) mit der Verwendung der OVHcloud APIv6 vertraut gemacht.

## In der praktischen Anwendung

Alle API-Routen in dieser Anleitung sind im Bereich */dedicated/nasha* verfügbar: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Bei der Verwendung der API sind alle mit einem Stern (\*) gekennzeichneten Felder Pflichtfelder.
>

### Informationen zu Ihrer Dienstleistung abrufen

Alle Ihre aktiven Dienste können über folgende Route abgerufen werden:

> [!api]
>
> @api {v1} /dedicated/nasha GET /dedicated/nasha
>

### Liste aller Partitionen

Verwenden Sie die folgende Route, um die Partitionen eines Dienstes abzurufen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>

### Die Eigenschaften einer Partition abrufen

Um die Details einer Partition anzuzeigen, verwenden Sie die folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>

### Abruf der Statistiken einer Partition

Verwenden Sie die folgende Route, um die Nutzungsinformationen einer Partition abzurufen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>> >
>> > **Typ** *
>> >
>> >> Der Typ der zu übernehmenden Statistiken: *size*, *used* oder *usedbysnapshots*
>

### Erstellung einer Partition

Verwenden Sie die folgende Route, um eine neue Partition zu erstellen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionDescription**
>> >
>> >> Optionale Beschreibung
>> >
>> > **partitionName** *
>> >
>> >> Ein Name für die Partition
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* oder *NFS_CIFS* für beide
>> >
>> > **size** *
>> >
>> >> Größe der Partition
>

Wählen Sie beispielsweise `NFS` als Protokoll mit einer Größe von `10` Gigabyte aus.

### Die Eigenschaften einer Partition ändern

Verwenden Sie die folgende Route zur Änderung einer Partition:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>> >
>> > **partitionDescription**
>> >
>> >> Die neue Beschreibung
>> >
>> > **size**
>> >
>> >> Die neue Größe der Partition
>

### ZFS-Einstellungen einer Partition abrufen

Verwenden Sie die folgende Route, um die ZFS-Einstellungen abzurufen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>

### Änderung der ZFS-Einstellungen einer Partition

> [!warning]
>
> Alle ZFS-Einstellungen sind bereits standardmäßig optimiert. Es wird nicht empfohlen, diese Einstellungen zu ändern.
>

Verwenden Sie die folgende Route zur Änderung der ZFS-Einstellungen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>> >
>> > **atime**
>> >
>> >> Parameter für die Aktualisierung der Zugriffszeit: *on* (Standardwert) oder *off*
>> >
>> > **recordsize**
>> >
>> >> Maximale Blockgröße: *131072* (Standard), *16384*, *32768*, *4096*, *65536* oder *8129*
>> >
>> > **sync**
>> >
>> >> Datei-Synchronisierungsparameter: *always*, *disabled* oder *standard* (Standardwert)
>

### Löschung einer Partition

Verwenden Sie die folgende Route, um eine Partition zu löschen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>

## Weiterführende Informationen

[NAS via NFS-Freigabe mounten](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[NAS auf Windows Server über CIFS mounten](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
