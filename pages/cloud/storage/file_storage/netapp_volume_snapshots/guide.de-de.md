---
title: Enterprise File Storage - Volume Snapshots verwalten
slug: netapp/volume-snapshots
excerpt: Erfahren Sie hier, wie Sie Snapshots eines Enterprise File Storage Volumes mit der OVHcloud API verwalten
section: Enterprise File Storage
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

In diesem Tutorial geben wir einen Überblick über die Verwaltung von Volume Snapshots für OVHcloud Enterprise File Storage über die OVHcloud API.

**Diese Anleitung erklärt, wie Sie bestehende Snapshots abrufen, einen neuen Snapshot erstellen, detaillierte Informationen aus einem Snapshot abrufen und einen Snapshot löschen.**

## Voraussetzungen

- Sie verfügen über einen OVHcloud Enterprise File Storage.
- Sie sind zur Verwendung der [OVHcloud API](https://api.ovh.com/) eingeloggt.

## Grundlagen

Ein Volume-Snapshot ist eine schreibgeschützte Kopie eines Volumes zu einem bestimmten Zeitpunkt.

Die Snapshots werden auf Basis eines laufenden Volumes erstellt.

> [!warning]
>
> Die Snapshots sind an ein Volume gebunden und können ohne dieses nicht existieren.
>

## In der praktischen Anwendung

Alle für diese Anleitung verwendeten API-Routen sind im Bereich `/storage` verfügbar: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Bei der Verwendung der API sind alle mit einem Stern (\*) gekennzeichneten Felder Pflichtfelder.
>

### Snapshots auflisten

Alle vorhandenen Snapshots eines Volumes können über folgende Route abgerufen werden:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes und `shareId` mit der Volume-ID.

Standardmäßig sollte kein Snapshot für ein neues Volume zurückgegeben werden.

### Snapshot eines Volumes erstellen

Um einen Snapshot zu erstellen, verwenden Sie die folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **NetAppShareSnapshot** *
>> >
>> >> **description**
>> >> >
>> >> > Snapshot Beschreibung
>> >>
>> >> **name**
>> >> >
>> >> > Snapshot Name
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes und `shareId` mit der Volume-ID.

Name und Beschreibung sind optional.

### Die Informationen eines Snapshots abrufen

Um Informationen eines Snapshots abzurufen, verwenden Sie die folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **snapshotId** *
>> >
>> >> Snapshot ID
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes, `shareId` mit der Volume-ID und `snapshotId` mit der Snapshot-ID.

### Snapshot löschen

Um einen Snapshot zu löschen, verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **shareId** *
>> >
>> >> Volume ID
>> >
>> > **snapshotId**
>> >
>> >> Snapshot ID
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes, `shareId` mit der Volume-ID und `snapshotId` mit der ID des zu löschenden Snapshots.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
