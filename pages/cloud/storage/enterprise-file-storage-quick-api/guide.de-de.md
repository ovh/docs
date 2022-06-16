---
title: Enterprise File Storage - API verwenden
slug: netapp-quickstart
excerpt: Erfahren Sie hier die ersten Schritte mit Ihrem Enterprise File Storage und der OVHcloud API
section: Enterprise File Storage
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

In dieser Schnellstart-Anleitung geben wir einen Überblick über die Verwendung von OVHcloud Enterprise File Storage über die OVHcloud API.

**Diese Anleitung erklärt, wie Sie Informationen zu Ihrem Dienst abrufen, Ihr erstes Volume erstellen und darauf zugreifen.**

## Voraussetzungen

- Sie verfügen über einen OVHcloud Enterprise File Storage
- Sie sind zur Verwendung der [OVHcloud API](https://api.ovh.com/) eingeloggt
- Grundlegendes Verständnis der [NFS-Freigabe](https://docs.ovh.com/de/storage/nas-nfs/)

## Grundlagen

OVHcloud Enterprise File Storage erlaubt es Ihnen, Daten-Volumes zu verwalten, die über Netzwerk zugänglich sind.

Sie können die Größe des Volumes bestimmen, den Zugriffe über ACLs verwalten und Snapshots erstellen.

## In der praktischen Anwendung

Alle für diese Anleitung verwendeten API-Routen sind im Bereich `/storage` verfügbar: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Bei der Verwendung der API sind alle mit einem Stern (\*) gekennzeichneten Felder Pflichtfelder.
>

### Informationen über den Dienst abrufen

Alle Ihre aktiven Dienste können über folgende Route abgerufen werden:

> [!api]
>
> @api {GET} /storage/netapp
>

### Ein neues Volume erstellen

Ein Volume ist eine Speichereinheit, die eine Kapazität und ein Protokoll als Eigenschaften besitzt.

Um ein Volume zu erstellen, verwenden Sie die folgende Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parameter:
>
>> > **serviceName** *
>> >
>> >> Service ID
>> >
>> > **NetAppShare** *
>> >
>> >> **description**
>> >> >
>> >> > Volume Beschreibung
>> >>
>> >> **name**
>> >>
>> >> > Volume Name
>> >>
>> >> **protocol** *
>> >>
>> >> > Volume Protokoll
>> >>
>> >> **size** *
>> >>
>> >> > Volume Größe in Gigabytes
>

Wählen Sie als Protokoll `NFS` aus und bestimmen Sie die Größe, beispielsweise `10 GB`.

### ACL zum Volume hinzufügen

ACLs erlauben es, den Zugang zu einem Volume zu genehmigen oder abzulehnen.

> [!warning]
>
> Der Zugang zu einem neuen Volume wird zunächst immer verweigert.
>

Nachdem Sie ein Volume erstellt haben, muss der Zugriff darauf gewährt werden.

Um eine neue ACL zu erstellen, verwenden Sie die folgende Route:

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

> [!primary]
>
> Mit CIDR können Sie den Zugriff auf das Volume über den IP-Adressbereich x.x.x.x/x erlauben.
> Zum Beispiel: 192.0.2.0/24
>

### Volume mounten

Überprüfen Sie den Erstellungsstatus der ACL mithilfe der folgenden Route:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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

Ersetzen Sie `aclRuleId` mit der ID der ACL des Volumes.

> [!primary]
>
> Der ACL-Status muss `active` sein.
>

Sobald die ACL aktiviert ist, rufen Sie die Zugriffspfade des Volumes über folgende Route ab:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/accessPath
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

Für Ihr Volume werden Ihnen ein oder mehrere Zugriffspfade zurückgegeben.

Sie können das Volume nun mit folgendem Befehl mounten:

```sh
mount -t nfs accessPath
```

> [!primary]
>
> Wenn Sie Linux verwenden, muss das Paket `nfs-utils` installiert sein.
>

Nach dem Mount kann Ihr Volume nun für die Speicherung Ihrer Dateien verwendet werden.

### Löschung des Volumes

Sie können Ihr Volume mit folgender Route löschen:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
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

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
