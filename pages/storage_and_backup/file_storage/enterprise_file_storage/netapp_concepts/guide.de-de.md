---
title: Enterprise File Storage - Konzepte
excerpt: 'Erfahren Sie hier die Funktionsweise des Angebots Enterprise File Storage'
updated: 2024-09-24
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit Enterprise File Storage verfügen Sie über NFS-Speichervolumes, die vollständig von OVHcloud verwaltet werden. In dieser Schnellstartanleitung erfahren Sie alles über die Konzepte und Einschränkungen Ihres Enterprise File Storage-Dienstes.

**Diese Anleitung erklärt, wie Enterprise File Storage funktioniert.**

## In der praktischen Anwendung

### Was ist Enterprise File Storage?

Enterprise File Storage ist ein von OVHcloud verwalteter Dateiverwaltungsdienst, der auf NetApp&#174; ONTAP basiert.

Sie können einen oder mehrere Speicherplätze zwischen 1 TB und 58 TB in Ihrem Account bestellen, mit einer Granularität von 1 TB.

### Funktionsprinzip der Dienste

Wenn Sie über Ihren OVHcloud Kunden-Account einen Enterprise File Storage zwischen 1 und 58 TB bestellen, erhalten Sie einen NFS-Speicherplatz.

Der OVHcloud Kunden-Account ist standardmäßig der Admin-, Tech- und Rechnungskontakt des Dienstes. Weitere Informationen finden Sie in unserer Anleitung zur [Kontaktverwaltung Ihrer Dienste](/pages/account_and_service_management/account_information/managing_contacts).

![Enterprise File Storage 1](images/NetApp_Concept_1.png)

> [!primary]
>
> Jeder Dienst kann nur einem einzigen OVHcloud Account (NIC-Handle) gehören. Der technische und der Rechnungskontakt können jedoch zu Gunsten anderer Accounts geändert werden.
>

### Funktionsprinzip von Volumes

Sobald Sie Ihren Enterprise File Storage-Dienst bestellt haben, steht Ihnen ein Speicherkapazitätsdienst zur Verfügung. In diesem Dienst können Sie ein oder mehrere Volumes erstellen, wobei jedes Volume einer Partition entspricht.
<br>Diese Volumes ermöglichen es Ihnen, Dateien zu speichern, und sind über eine von OVHcloud bereitgestellte IP-Adresse im Netzwerk verfügbar.

![Enterprise File Storage 2](images/NetApp_Concept_2.png)

> [!primary]
>
> - Jedes Volume gehört zu einem Dienst, aber ein Dienst kann mehrere Volumes enthalten.
>
> - Die Größe eines Volumes darf die Gesamtgröße des Dienstes abzüglich des Speicherplatzes, der den darin enthaltenen Snapshots zugewiesen wurde, nicht überschreiten.
>
> - Die Größe eines Volumes kann nach oben und unten angepasst werden.
>

Weitere Informationen finden Sie in der Anleitung "[Volumes verwalten](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes)".

### Funktionsweise der ACL

Aus Sicherheitsgründen ist ein Volume nicht sofort über seinen Zugriffspfad erreichbar. Es ist notwendig, Regeln in der Zugriffskontrollliste (ACL) des Volumes zu erstellen, um Benutzern den Zugriff auf das Volume zu ermöglichen.

Diese Regeln bestehen aus einer Quell-IP-Adresse Ihres Netzwerks im Format x.x.x.x/x und einem Berechtigungstyp, entweder nur lesen (RO) oder lesen/schreiben (RW).

![Enterprise File Storage 3](images/NetApp_Concept_3.png)

> [!primary]
>
> Sie können eine oder mehrere Regeln pro Volume erstellen.
>

Weitere Informationen finden Sie in der Anleitung ["Volumes verwalten"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl).

### Funktionsweise von Snapshots

Enterprise File Storage Snapshots sind eine lokale Datensicherheitslösung zur Wiederherstellung einzelner Dateien auf derselben Hardware.

Ein Enterprise File Storage Snapshot ist ein Image eines Volumes zu einem bestimmten Datum und einer bestimmten Uhrzeit.

Die Erstellung dauert nur wenige Sekunden, unabhängig von der Größe des Volumes, der verwendeten Kapazität oder der Aktivitätsstufe des Volumes.

Der Snapshot ist eine Kopie der Volume-Metadaten zu einem bestimmten Zeitpunkt (Snapshot der Inode-Tabelle).

Der tägliche Verbrauch von Snapshots liegt für viele Anwendungen zwischen 1% und 5% der Gesamtkapazität. Deshalb reserviert OVHcloud bei jeder Volume-Erstellung 5% von dessen Kapazität für Snapshots.

![Enterprise File Storage 4](images/NetApp_Concept_4.png)

Weitere Informationen finden Sie in der Anleitung "[Snapshots eines Volumes verwalten](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots)".

### Einschränkungen von Enterprise File Storage

- Ein Dienst hat eine zugewiesene und dedizierte Größe zwischen 1 TB und 58 TB.
- Die Granularität eines Dienstes beträgt 1 TB.
- Die Anzahl der Volumes pro Dienst ist auf 10 Volumes pro TB beschränkt (z.B. 50 Volumes pro Dienst mit 5 TB).

#### Volume-Limits

- Ein Volume darf die Größe von 29 TB abzüglich der reservierten 5% für Snapshots (1.45 TB) oder 27,55 TB nicht überschreiten.
- Die Mindestgröße eines Volumes beträgt 100 GB.
    - Größengranularität für ein Volume: 1 GB
    - Maximale Dateigröße: 16 TB

### Beschränkungen für Snapshots

- Ein Volume kann nicht mehr als 200 Snapshots haben.
- Maximale Anzahl an Snapshot-Policies pro Volume: 1
- Maximale Anzahl an Regeln pro Snapshot-Policy: 4

#### Einschränkungen bei Zugriffssteuerungslisten

- Ein Volume hat eine IP-Adresse im internen Netzwerk in 10.x.x von OVHcloud.
- Maximale Anzahl der mit dem Dienst verbundenen vRacks: 0 (vRack Support ist noch nicht verfügbar.)
- Maximale Anzahl Access List: 1 pro Volume
- Maximale Anzahl IPs pro Access List: 16

#### Performance-Einschränkungen

- Minimale Bandbreite pro TB: Kein Minimum
- Maximale Bandbreite pro TB: 64 MB/s und 4000 IOPS

### Berechnen eines Volumes

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

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
