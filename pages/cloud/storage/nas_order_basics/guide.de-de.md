---
title: Erste Schritte mit OVHcloud HA-NAS
slug: nas/erste-schritte
excerpt: Erfahren Sie hier, wie Sie Ihr High Availability NAS über das OVHcloud Kundencenter verwalten
section: NAS
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 22.08.2022**

## Ziel

Ein NAS (Network Attached Storage) ist ein Dateiserver, der mit einem Netzwerk verbunden ist und dessen Hauptfunktion darin besteht, Daten auf einem zentralisierten Volume für heterogene Netzwerk-Clients zu speichern.

Sie können Ihren HA-NAS über die [OVHcloud API](https://docs.ovh.com/de/storage/nas/nas-quickapi/) oder über Ihr Kundencenter verwalten.

**Diese Anleitung erklärt, wie Sie HA-NAS-Partitionen und Snapshots im OVHcloud Kundencenter verwalten.**

## Voraussetzungen

- Sie haben ein [OVHcloud HA-NAS](https://www.ovh.com/de/nas/) in Ihrem Kunden-Account.
- Sie verfügen über einen OVHcloud Dienst an den eine öffentliche IP-Adresse angebunden ist (Hosted Private Cloud, Dedicated Server, VPS, Public Cloud Instanz, etc.).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie zum Bereich `Bare Metal Cloud`{.action}. Öffnen Sie im linken Menü `NAS und CDN`{.action} und klicken Sie auf Ihren Dienst, um zum Tab `Allgemeine Informationen`{.action} zu gelangen.

![Allgemeine Informationen](images/nas-ha01.png){.thumbnail}

Im Tab `Allgemeine Informationen`{.action} werden technische Informationen, die `Quota` des Dienstes und die Details des Abonnements angezeigt. Sie finden auch einen Direktlink zur [Erstellung einer Partition](#create_partition).

> [!primary]
> In den [FAQ](https://docs.ovh.com/de/storage/faq-nas/) finden Sie Details zu den technischen Eigenschaften der HA-NAS Dienstleistung.
>

### Verwaltung der Partitionen <a name="manage_partition"></a>

Wechseln Sie zum Tab `Partitionen`{.action}. Die Tabelle listet alle Partitionen auf, die Sie für den ausgewählten Dienst erstellt haben. Klicken Sie auf den Namen einer Partition, um dessen Verwaltungsseite zu öffnen. 

![Partitionen](images/nas-ha02.png){.thumbnail}

Der Bereich **Allgemeine Metriken** zeigt an, wie viel des verfügbaren Speicherplatz (`Gesamtkapazität`) von Daten und Snapshots belegt ist. Der prozentuale Speicherplatz, den die Snapshots derzeit nutzen, ist in gelb angegeben. In der Standardkonfiguration wird stündlich ein Snapshot erzeugt.

Ihrem HA-NAS wird zusätzlicher Speicherplatz zugewiesen, um die Snapshots abzulegen. Dieser Speicherplatz entspricht 20% des ursprünglichen Größe des Volumes. Wenn Sie diese Grenze überschreiten, werden nachfolgende Snapshots den primären Speicherplatz verwenden.

Sie können die Option `Gebrauchsmeldungen`{.action} aktivieren, um Warnungen per E-Mail zu erhalten, sollte die Quota der Nutzung 90% erreichen.

Sie können einige Aktionen durchführen, indem Sie auf den Button `...`{.action} in einer Tabellenzeile klicken.

- **Bearbeiten / anzeigen**: Öffnet den Bereich "Allgemeine Informationen" der Partition.
- **Die Snapshots verwalten**: Öffnet den Policy-Bereich um [Snapshot-Regeln](#snapshots) der Partition zu verwalten.
- **Zugriff verwalten**: Öffnet den Abschnitt "[Zugriffskontrolle (ACL)](#access_control)", in dem Sie die Zugriffsrechte von IP-Adressen für die Partition verwalten können.
- **Die Größe ändern**: Öffnet ein Fenster, um die [Größe der Partition zu ändern](#modify_partition).
- **Einstellungen Z File System (ZFS)**: Öffnet ein Fenster, um die [Einstellungen des Dateisystems zu ändern](#zfs).
- **Löschen**: Öffnet ein Fenster, um [diese Partition zu löschen](#deletion).

#### Erstellung einer Partition <a name="create_partition"></a>

Um eine neue Partition hinzuzufügen, klicken Sie auf den Button `+ Eine Partition erstellen`{.action} oberhalb der Tabelle.

![Partitionen](images/nas-ha03.png){.thumbnail}

Geben Sie einen **Namen** für die Partition ein, legen Sie die **Größe** in GB fest und wählen Sie das zu autorisierende **Zugriffsprotokoll** (NFS, CIFS oder beides) aus.

Geben Sie bei Bedarf eine Beschreibung ein und klicken Sie dann auf `Eine Partition erstellen`{.action}.

#### Größe einer Partition ändern <a name="modify_partition"></a>

Um die Größe einer Partition zu ändern, klicken Sie rechts neben der betreffenden Partition auf `...`{.action} und wählen Sie `Die Größe ändern`{.action}.

![Partitionen](images/nas-ha04.png){.thumbnail}

Geben Sie die neue Kapazität ein und klicken Sie auf `Die Größe ändern`{.action}.

#### Erstellung und Verwaltung von Snapshots <a name="snapshots"></a>

Klicken Sie auf den Button `...`{.action} rechts neben der betreffenden Partition und wählen Sie `Die Snapshots verwalten`{.action}.

In der Standardkonfiguration wird stündlich ein Snapshot Ihrer Daten angelegt und auf Ihrem HA-NAS gespeichert. Diese Voreinstellung wird auch im Tab `Regeln für Snapshots`{.action} angezeigt.

![Snapshots](images/nas-ha05.png){.thumbnail}

Sie können zusätzliche Snapshot-Regeln aktivieren, die Snapshots nach vorgegebenen Frequenzen erstellen: Klicken Sie auf den Dropdown-Button unter `Optionen`. Wählen Sie die gewünschten Frequenzen aus und klicken Sie rechts auf den Button mit dem `Haken-Symbol`{.action}.

![Snapshots](images/nas-ha06.png){.thumbnail}

Warten Sie im neu angezeigten Fenster, bis der Vorgang abgeschlossen ist, und klicken Sie dann auf `Schließen`{.action}. Die zusätzlichen Snapshots werden ebenfalls auf Ihrem HA-NAS gespeichert.

##### **Manuellen Snapshot erstellen**

Neben den automatisch durchgeführten Snapshots kann jederzeit ein manueller Snapshot einer Partition erstellt werden. Klicken Sie oberhalb der Tabelle auf den Button `+ Manuell einen Snapshot erstellen`{.action}.

![Snapshots](images/nas-ha07.png){.thumbnail}

Der Snapshot wird der Tabelle hinzugefügt. Geben Sie nach dem Präfix einen Namen für den Snapshot ein und klicken Sie rechts auf das `Haken-Symbol`{.action}.

##### **Wiederherstellung von Snapshots**

Das Kundencenter enthält keine Funktionen für den Zugriff auf Ihre Snapshots und deren Wiederherstellung. Die Snapshots werden als "read-only" auf der Partition gespeichert.

Um von Ihrem Mountpunkt aus auf die Snapshots zuzugreifen, müssen Sie das Verzeichnis `.zfs/snapshot` Ihrer Partition öffnen.

Zum Beispiel: Auf einem Dienst mit der ID `zpool-123456` existiert eine Partition `partition1`, für die ein Snapshot namens `snap-snapshot01` erstellt wurde. Sie finden dann den Snapshot mit folgendem Befehl:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Um Ihren Snapshot wiederherzustellen, kopieren Sie diesen aus dem Dateipfad unter `.zfs` in ein neues Verzeichnis, in dem Sie den Snapshot wiederherstellen möchten. Sie können dazu ein Tool wie "rsync" verwenden, das Wiederherstellungen durchführen kann.

Zusätzliche Hilfe finden Sie unter "[Weiterführende Informationen](#gofurther)".

#### Verwaltung der ACL der Partition <a name="access_control"></a>

Die Zugriffskontrolle auf die Partitionen funktioniert über IP-Adressbeschränkungen. Da keine Regeln vordefiniert sind, ist der erste Konfigurationsschritt für jede Partition die Festlegung von IP-Adressen oder Adressbereichen, für die der Zugriff autorisiert werden soll.

> [!primary]
>
> Es können nur IP-Adressen hinzugefügt werden, die mit Ihren OVHcloud Diensten verbunden sind (Dedicated Server, VPS, Public Cloud Instanz, etc.).
>

##### **Zugang hinzufügen**

Klicken Sie auf die Schaltfläche `+ Einen neuen Zugang hinzufügen`{.action}.

![Access](images/nas-ha08.png){.thumbnail}

Dies fügt eine neue Zeile in der Tabelle hinzu, in der Sie eine IP-Adresse oder einen Adressblock (CIDR) auswählen können. Wählen Sie `Lesen` (RO) oder `Lesen / Schreiben` (RW) als Zugriffstyp im Drop-down-Menü aus und klicken Sie auf das `Haken-Symbol`{.action}, um diesen Eintrag zur ACL hinzuzufügen.

Warten Sie im neu angezeigten Fenster, bis der Vorgang abgeschlossen ist und klicken Sie dann auf `Schließen`{.action}.

##### **Löschen eines Zugangs**

Um einen Zugang zu einer Partition zu löschen, klicken Sie auf das entsprechende `Papierkorbsymbol`{.action} in der Tabelle.

![Access](images/nas-ha09.png){.thumbnail}

Bestätigen Sie im neu angezeigten Fenster, indem Sie auf `Zugang löschen`{.action} klicken und warten Sie, bis der Vorgang abgeschlossen ist. Klicken Sie auf `Schließen`{.action}.

### ZFS Einstellungen <a name="zfs"></a>

> [!warning]
>
> Alle ZFS-Einstellungen sind bereits optimiert. Obgleich wir von einer Änderung dieser Einstellungen abraten, erlaubt dieses Menü die Anpassung des vom HA-NAS verwendeten ZFS.
>

Um die ZFS-Einstellungen einer Partition zu ändern, klicken Sie auf den Button `...`{.action} rechts neben der betreffenden Partition und wählen Sie dann `Einstellungen Z File System (ZFS)`{.action}. 

![zfs](images/nas-ha10.png){.thumbnail}

- **Access time update (atime)** deaktivieren: Die Deaktivierung von *atime* (Zugriffszeit) bedeutet, dass der Kernel den Zeitstempel des Dateisystems nicht mehr bei jedem Zugriff auf eine Datei aktualisiert. Dies kann nützlich sein, um häufige Lesevorgänge zu beschleunigen, zum Beispiel bei statischen Webseiten. Es sollte jedoch nicht für konsistenzkritische Anwendungen wie Datenbanken angewendet werden.
- **ZFS recordsize**: Diese Eigenschaft ändert die maximale Blockgröße im ZFS-Dateisystem. Bitte beachten Sie, dass ZFS auch dann eine kleinere Blockgröße verwendet, wenn die Datei kleiner als das Maximum ist. Zum Beispiel wird eine 16 KB große Datei einen 16 KB großen Block (plus Metadaten) verwenden, um keinen Speicherplatz zu verschwenden. Aus diesem Grund raten wir generell davon ab, ZFS *recordsize* zu ändern.
- **Sync**: Diese Einstellung verändert das Verhalten von Transaktionen des ZFS-Dateisystems in Bezug auf die Daten-Pufferung im RAM und das Schreiben der Daten auf die Disk. Wenn keine besonderen Gründe vorliegen, empfehlen wir Ihnen, diese Eigenschaft nicht zu ändern.

### Löschung einer Partition <a name="deletion"></a>

> [!warning]
>
> Beim Löschen einer Partition werden alle darin enthaltenen Daten endgültig gelöscht.
>

Um eine Partition zu löschen, klicken Sie rechts neben der betreffenden Partition auf `...`{.action} und wählen Sie `Löschen`{.action}.

![Löschen](images/nas-ha11.png){.thumbnail}

Bestätigen Sie die Aktion im neu angezeigten Fenster, indem Sie auf `Partition löschen`{.action} klicken. Warten Sie, bis der Vorgang abgeschlossen ist, und klicken Sie auf `Schließen`{.action}.

## Weiterführende Informationen <a name="gofurther"></a>

[Verwaltung von Partitionen via API](https://docs.ovh.com/de/storage/nas/nas-partitions-api/)

[Verwaltung der ACL über API](https://docs.ovh.com/de/storage/nas/nas-manage-acls/)

[Verwaltung von Snapshots über API](https://docs.ovh.com/de/storage/nas/nas-snapshots-api/)

[HA-NAS via NFS-Freigabe mounten](https://docs.ovh.com/de/storage/nas-nfs/)

[NAS auf Windows Server über CIFS mounten](../nas-cifs/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.