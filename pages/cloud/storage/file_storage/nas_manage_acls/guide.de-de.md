---
title: HA-NAS - ACLs verwalten
slug: nas/manage-acls
excerpt: Erfahren Sie hier, wie Sie den Zugriff auf ein HA-NAS mit der OVHcloud API verwalten
section: NAS
order: 07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.07.2022**

## Ziel

OVHcloud HA-NAS Dienste ermöglichen Ihnen die Verwaltung zentral gespeicherter Dateien, die über ein Netzwerk zugänglich sind.

**Diese Anleitung erklärt, wie Sie die ACL einer HA-NAS Partition über die OVHcloud API verwalten.**

## Voraussetzungen

- Sie haben ein [OVHcloud HA-NAS](https://www.ovh.com/de/nas/) in Ihrem Kunden-Account.
- Sie haben sich anhand der [Anleitung zu den ersten Schritten mit der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/) mit der Verwendung der OVHcloud APIv6 vertraut gemacht.

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
> @api {GET} /dedicated/nasha
>

> [!warning]
>
> Der Zugriff ist gesperrt, solange er nicht über die ACL gewährt wird. Es können nur IP-Adressen hinzugefügt werden, die mit Ihren OVHcloud Diensten verbunden sind.
>

### ACL einer Partition abrufen

Um die IP-Adressen abzurufen, die aktuell auf die Partition zugreifen können, verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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

### Abruf aller kompatiblen IP-Adressen

Sie können die IP-Adressen, für die der Zugang erlaubt werden kann, über folgende Aufrufe überprüfen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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

### Hinzufügen eines ACL Eintrags

Um einen neuen ACL Eintrag zu erstellen, über den Sie auf die Partition zugreifen können, verwenden Sie folgenden Aufruf:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> >> Die IP-Adresse oder der Bereich, für den der Zugang gewährt werden soll
>> >
>> > **type** *
>> >
>> >> Typ des ACL Zugangs für diesen Eintrag: *readonly* oder *readwrite*
>

> [!primary]
>
> Verwenden Sie die CIDR-Notation für IP-Bereiche, zum Beispiel: 192.0.2.0/24.
>

### Löschung eines ACL Eintrags

Um eine IP-Adresse oder einen Adressbereich aus der ACL zu löschen, verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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
>> >> Die IP-Adresse oder der Bereich, dem der Zugriff verweigert werden soll
>

## Weiterführende Informationen

[NAS via NFS-Freigabe mounten](https://docs.ovh.com/de/storage/file-storage/nas/nfs/)

[NAS auf Windows Server über CIFS mounten](https://docs.ovh.com/de/storage/file-storage/nas/cifs/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
