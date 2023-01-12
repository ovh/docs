---
title: Verwaltung von Snapshots einer Instanz in Horizon
excerpt: Verwaltung von Snapshots einer Instanz in Horizon
slug: verwaltung_der_speicherauszuge_snapshots_einer_instanz_in_horizon
section: 'Horizon'
legacy_guide_number: g1770
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.02.2022**

## Ziel

Während des Betriebs können Sie jederzeit eine Sicherung Ihrer Daten, der Konfigurationen oder auch vollständiger Instanzen durchzuführen. Zu diesem Zweck können Sie Snapshots Ihrer Instanzen erstellen. Somit können Sie eine vorherige Konfiguration Ihrer Instanz wiederherstellen oder eine exakte Kopie einer Instanz erzeugen.

**In dieser Anleitung erfahren Sie, wie Sie Snapshots über das OpenStack-Horizon-Interface verwalten.**


## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) in Ihrem Kunden-Account.
- Sie haben Zugriff auf das [Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/).

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

### Snapshot löschen

Klicken Sie im Horizon-Interface links auf `Compute`{.action} und dann auf `Images`{.action}.

Klicken Sie anschließend auf den Dropdown-Pfeil neben dem zu löschenden Snapshot und auf `Delete Image`{.action}. Bestätigen Sie die Löschung des Snapshots.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
