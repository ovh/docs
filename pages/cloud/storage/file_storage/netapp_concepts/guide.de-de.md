---
title: Enterprise File Storage - Konzepte
slug: netapp/concepts
excerpt: 'Erfahren Sie hier die Funktionsweise des Angebots Enterprise File Storage'
section: Enterprise File Storage
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2021**

## Ziel

OVHcloud Enterprise File Storage erlaubt es Ihnen, Kapazitätenpools (Capacity Pool) zu bestellen und so Daten-Volumes zu verwalten, die über Netzwerk zugänglich sind.
In dieser Schnellstart-Anleitung erfahren Sie die grundlegenden Konzepte des Enterprise File Storage sowie die Limitierungen des Angebots.

**Diese Anleitung erklärt, wie Enterprise File Storage funktioniert.**

## In der praktischen Anwendung

### Was ist Enterprise File Storage?

Enterprise File Storage ist ein von OVHcloud verwalteter Dateiverwaltungsdienst, der auf der Software-Defined-Storage-Lösung NetApp&#174; ONTAP basiert.

Sie können für Ihren Kunden-Account einen oder mehrere Storage-Einheiten zwischen 1TiB und 29TiB bestellen.

> [!primary]
>
> Was ist der Unterschied zwischen Terabyte (TB) und Tebibyte (TiB)?
>
> - T, das Präfix "Tera-", ist ein Standard, der Base-10 verwendet: 1 TB = 10^12=1000000000000 bytes = 1000 GB.
>
> - Ti, das Präfix "Tebi-", wurde später als eines der binären Präfixe standardisiert (IEC/ISO Norm) und verwendet Base-2. Das bedeutet: 1024^4=2^40; 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - Computer verwenden Base-2, deshalb wird der Speicherplatz in Betriebssystemen in TiB ausgedrückt. Anbieter von Storage-Diensten verwenden tendenziell TB, da es sich um eine größere Zahl handelt als mit TiB.
>
> - Problematisch ist dabei, dass Größenangaben im Kilobyte-Bereich noch annähernd sind (2,4%), aber bei TB beträgt dieser Unterschied bereits 10% und der Anstieg ist exponentiell.
>
> - Aus Transparenzgründen wird Enterprise File Storage in TiB ausgeliefert. Sie werden dennoch TB-Größen sehen, weil es die gemeinhin bekanntere Einheit ist.
>
> - Wenn Sie also beispielsweise einen Enterprise File Storage mit 1 TB bestellen, verfügen Sie realiter über 1 TiB = 1,09951 TB.
>

### Funktionsprinzip von Capacity Pools

Wenn Sie über Ihren OVHcloud Kunden-Account einen Enterprise File Storage zwischen 1 und 29 TiB bestellen, erhalten Sie einen NetApp&#174; Capacity Pool.

Ihr Kunden-Account ist standardmäßig der Admin-, Tech- und Rechnungskontakt des Dienstes. Weitere Informationen finden Sie in unserer Anleitung zur [Kontaktverwaltung Ihrer Dienste](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/).

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Jeder Capacity Pool kann nur einem OVHcloud Kunden-Account angehören (Kundenkennung). Der technische Kontakt und die Abrechnung können jedoch zugunsten anderer Accounts geändert werden.
>

### Funktionsweise von Volumes

Sobald Ihr Enterprise File Storage in Betrieb ist, können Sie ein oder mehrere Volumes in Ihrem Capacity Pool erstellen.
<br>Diese Volumes erlauben es Ihnen, Dateien zu speichern, und sind über eine von OVHcloud bereitgestellte IP-Adresse im Netzwerk verfügbar.
<br>Bei der Erstellung eines Volumes werden automatisch ein Hauptzugriffspfad sowie drei Nebenzugriffspfade erstellt.

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Jedes Volume gehört einem einzigen Capacity Pool, aber ein Capacity Pool kann mehrere Volumes enthalten.
>
> - Die Größe eines Volumes darf die Gesamtgröße des Capacity Pools abzüglich des Speicherplatzes für die darin enthaltenen Snapshots nicht überschreiten.
>
> - Die Größe eines Volumes kann sowohl nach oben und nach unten angepasst werden.
>

Weitere Informationen finden Sie in der Anleitung ["Volumes verwalten"](https://docs.ovh.com/de/storage/file-storage/netapp/volumes/).

### Funktionsweise der ACL

Aus Sicherheitsgründen ist ein Volume nicht sofort über seinen Zugriffspfad erreichbar. Es ist notwendig, Regeln in der Zugriffskontrollliste (ACL) des Volumes zu erstellen, um Benutzern den Zugriff zu ermöglichen.

Diese Regeln bestehen aus einer Quell-IP Ihres Netzwerks im x.x.x.x/x Format und der Berechtigung, entweder nur lesen (RO) oder lesen/schreiben (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Sie können eine oder mehrere Regeln pro Volume erstellen.
>

Weitere Informationen finden Sie in der Anleitung ["Volume ACLs verwalten"](https://docs.ovh.com/de/storage/file-storage/netapp/volume-acl/).

### Funktionsprinzip von Snapshots

Die Enterprise File Storage Snapshots sind eine Datensicherheitslösung am selben Speicherort wie die Produktivdaten. Dank der Snapshots können wir eine schnelle Wiederherstellung durchführen.

Ein Enterprise File Storage Snapshot ist ein Image eines Volumes zu einem bestimmten Datum und einer bestimmten Uhrzeit.

Die Erstellung dauert nur wenige Sekunden, unabhängig von der Größe des Volumes, der verwendeten Kapazität oder dem Aktivitätslevel des Volumes.

Der Snapshot ist eine Kopie der Metadaten des Volumes zu einem bestimmten Zeitpunkt (ein Snapshot der Inodes-Tabelle).

Der festgestellte tägliche Verbrauch der Snapshots liegt für viele Anwendungen zwischen 1% und 5% der Gesamtkapazität. Deshalb reserviert OVHcloud bei jeder Volume-Erstellung 5% von dessen Kapazität für Snapshots.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Weitere Informationen finden Sie in der Anleitung ["Volume Snapshots verwalten"](https://docs.ovh.com/de/storage/file-storage/netapp/volume-snapshots/).

### Begrenzung des Dienstes für die externe Testphase (Beta)

Capacity Pools des Enterprise File Storage sind wie folgt eingeschränkt:

- Ein Capacity Pool hat eine zugewiesene und dedizierte Größe zwischen 1TiB und 29TiB.
- Ein Capacity Pool ist auf 20 Volumes nach TiB begrenzt.

Nachfolgend die Begrenzungen der Volumes:

- Ein Volume darf die Größe von 29 TiB nicht überschreiten, abzüglich der 5% für Snapshots (1.45 TiB), also 27,55 TiB.
- Die Mindestgröße eines Volumes beträgt 1 GiB.
- Ein Volume kann nicht mehr als 255 Snapshots enthalten.
- Ein Volume hat nur eine IP-Adresse im internen Netzwerk von OVHcloud, im Bereich 10.x.x.x.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
