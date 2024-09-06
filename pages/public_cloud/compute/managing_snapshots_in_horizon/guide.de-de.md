---
title: Verwaltung von Snapshots einer Instanz in Horizon
excerpt: Verwaltung von Snapshots einer Instanz in Horizon
updated: 2024-09-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Während des Betriebs können Sie jederzeit eine Sicherung Ihrer Daten, der Konfigurationen oder auch vollständiger Instanzen durchzuführen. Zu diesem Zweck können Sie Snapshots Ihrer Instanzen erstellen. Somit können Sie eine vorherige Konfiguration Ihrer Instanz wiederherstellen oder eine exakte Kopie einer Instanz erzeugen.

**In dieser Anleitung erfahren Sie, wie Sie Snapshots über das OpenStack-Horizon-Interface verwalten.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) in Ihrem Kunden-Account.
- Sie haben Zugriff auf das [Horizon Interface](/pages/public_cloud/compute/introducing_horizon).

## In der praktischen Anwendung

### Snapshot erstellen

Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein wählen Sie oben links die korrekte Region aus.

![Region](images/region2021.png){.thumbnail}

Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Wählen Sie neben der entsprechenden Instanz die Option `Create Snapshot`{.action}.

![Snapshot Create](images/createsnapshot.png){.thumbnail}

Geben Sie im angezeigten Fenster die erforderlichen Informationen ein:

Snapshot Name: Geben Sie einen Namen für den Snapshot ein und klicken Sie auf `Create Snapshot`{.action}.

![Create snapshot](images/createsnapshot2.png){.thumbnail}

Der Snapshot wird dann im Bereich `Images`{.action} angezeigt. Es wird daher empfohlen, jedem Snapshot einen expliziten Namen zuzuweisen.

### Wiederherstellung eines Snapshots

Wenn Sie einen Snapshot erstellen möchten, erstellen Sie eine neue Instanz auf der Disk.

Klicken Sie auf das Menü `Compute`{.action} bei `Images`{.action}.

Klicken Sie auf `Launch`{.action} neben der Auswahl.

![restaurer le snapshot](images/restoresnapshot.png){.thumbnail}

Verwenden Sie die Optionen-Auswahl, um Konditionen für die Erstellung des Snapshots festzulegen.

> [!tab]
> **Details**
>>
>> **Name der Instanz (*Instance name*):** Geben Sie den gewünschten Instanznamen an.<br>
>> **Count:** Wählen Sie die Anzahl der Instanzen aus, die vom Snapshot gestartet werden sollen.<br><br>
>>![Snapshot](images/restoresnapshot1.png){.thumbnail}<br>
>>
> **Flavor**
>>
>> Wählen Sie das gewünschte *flavor* aus. Stellen Sie sicher, dass Sie eine Version auswählen, deren Ressourcen mindestens der Image-Größe (Snapshot) entsprechen.<br><br>
>>![network](images/restoresnapshot2.png){.thumbnail}<br>
>>
> **Netzwerk (*Network*)**
>>
>> Wählen Sie ein öffentliches Netzwerk (Ext-Net) aus, das mit der Instanz verbunden werden soll.<br><br>
>>![network](images/restoresnapshot3.png){.thumbnail}<br>
>>
> **Keypair**
>>
>> Schlüsselpaar auswählen (3), erstellen (1) oder importieren (2).<br><br>
>>![network](images/restoresnapshot4.png){.thumbnail}<br>
>>

Klicken Sie auf `Launch Instance`{.action} zum Start Ihrer Instanz-Erstellung.

### Snapshot löschen

Klicken Sie im Horizon-Interface links auf `Compute`{.action} und dann auf `Images`{.action}.

Klicken Sie anschließend auf den Dropdown-Pfeil neben dem zu löschenden Snapshot und auf `Delete Image`{.action}. Bestätigen Sie die Löschung des Snapshots.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
