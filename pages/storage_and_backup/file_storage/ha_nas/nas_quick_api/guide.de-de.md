---
title: HA-NAS - Erste Schritte mit API
excerpt: "Erfahren Sie hier die ersten Schritte mit HA-NAS unter Verwendung der OVHcloud API"
updated: 2022-07-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

OVHcloud HA-NAS Dienste ermöglichen Ihnen die Verwaltung zentral gespeicherter Dateien, die über ein Netzwerk zugänglich sind.

**Diese Anleitung erklärt, wie Sie Ihren HA-NAS über die OVHcloud API verwenden.**

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

### Hinzufügen eines ACL Eintrags zum Zugriff auf die Partition

> [!warning]
>
> Der Zugriff ist gesperrt, solange er nicht über die ACL gewährt wird. Es können nur IP-Adressen hinzugefügt werden, die mit Ihren OVHcloud Diensten verbunden sind.
>

Sie können die IP-Adressen, für die der Zugang erlaubt werden kann, über folgende Aufrufe überprüfen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Der interne Name Ihres HA-NAS Dienstes
>> >
>> > **partitionName** *
>> >
>> >> Partitionsname
>

Um einen neuen ACL Eintrag zu erstellen, über den Sie auf die Partition zugreifen können, verwenden Sie folgenden Aufruf:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > **ip** *
>> >
>> >> Die IP-Adresse oder der Adressbereich für den Zugriff
>> >
>> >**type** *
>> >
>> >> Typ des ACL Zugangs für diesen Eintrag: *readonly* oder *readwrite*
>

> [!primary]
>
> Verwenden Sie die CIDR-Notation für IP-Bereiche, zum Beispiel: 192.0.2.0/24.
>

### Manuellen Snapshot erstellen

Um einen manuellen Snapshot hinzuzufügen verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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
>> > **expiration**
>> >
>> >> Ein optionales Ablaufdatum, zum Beispiel: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Name des Snapshots
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
