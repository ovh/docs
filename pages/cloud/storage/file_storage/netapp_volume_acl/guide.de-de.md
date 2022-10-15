---
title: Enterprise File Storage - Volume ACLs verwalten
slug: netapp/volume-acl
excerpt: Erfahren Sie hier, wie Sie die ACL eines Enterprise File Storage Volumes mit der OVHcloud API verwalten
section: Enterprise File Storage
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

In diesem Tutorial geben wir einen Überblick über die Verwaltung von ACLs eines Volumes für OVHcloud Enterprise File Storage über die OVHcloud API.

**Diese Anleitung erklärt, wie Sie die ACL (Access Control List) eines Volumes abrufen, eine neue ACL erstellen und eine bestehende ACL entfernen.**

## Voraussetzungen

- Sie verfügen über einen OVHcloud Enterprise File Storage
- Sie sind zur Verwendung der [OVHcloud API](https://api.ovh.com/) eingeloggt

## Grundlagen

Volume ACLs erlauben den Zugriff auf ein Volume oder beschränken ihn.

> [!warning]
>
> Standardmäßig ist der Zugang zu einem neu erstellten Volume beschränkt. Für den Zugriff muss eine ACL eingerichtet werden.
>

Mit ACLs können Sie einer IP-Adresse oder einem IP-Adressbereich (CIDR-Notation) den Zugriff auf Ihr Volume erlauben.

## In der praktischen Anwendung

Alle für diese Anleitung verwendeten API-Routen sind im Bereich `/storage` verfügbar: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Bei der Verwendung der API sind alle mit einem Stern (\*) gekennzeichneten Felder Pflichtfelder.
>

### ACL auflisten

Alle vorhandenen ACL eines Volumes können über folgende Route abgerufen werden:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
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

Wenn Sie diesen API-Aufruf für ein neues Volume verwenden, wird nichts zurückgegeben.   

### Zugriff auf ein Volume mit einer ACL erlauben

Um eine neue ACL zu erstellen, verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
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
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >> >
>> >> > ACL Zugriff. Kann **rw** (Lesen und Schreiben) oder **ro** (nur Lesen) sein.
>> >>
>> >> **accessTo** *
>> >> >
>> >> > IP-Adresse oder IP-Adressbereich mit CIDR-Notation.
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes und `shareId` mit der Volume-ID.

Wählen Sie den `accessLevel` aus, den Sie erlauben möchten: entweder `rw` (Lesen und Schreiben) oder `ro` (nur Lesen).

Ersetzen Sie schließlich `accessTo` durch die IP-Adresse, über die Sie Verbindungen erlauben möchten.

### ACL löschen

Die Löschung einer ACL verhindert den Zugriff auf die darin angegebenen IP-Adressen.

Um eine ACL zu löschen, verwenden Sie folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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
>> > **aclRuleId** *
>> >
>> >> ACL ID
>

Ersetzen Sie `serviceName` mit der ID Ihres Dienstes und `shareId` mit der Volume-ID.

Sie erhalten `aclRuleId` bei Erstellung der ACL oder indem Sie bestehende ACLs Ihres Volumes auflisten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
