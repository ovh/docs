---
title: Object Storage Swift - Synology NAS mit Object Storage synchronisieren
slug: pcs/pcs-syno
excerpt: Erfahren Sie hier, wie Sie ein Synology NAS mit einem Container synchronisieren
section: OpenStack Swift Storage Class Specifics
order: 150
updated: 2023-05-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 22.05.2023**

## Ziel

Synology DiskStation Manager 7.0 von bietet ein Synchronisierungswerkzeug für verschiedene Cloud Lösungen an.

Dieser ist mit dem Object Storage der OVHcloud Public Cloud kompatibel und erlaubt es Ihnen so, ein Backup Ihrer Daten durchzuführen und diese von überall aus verfügbar zu machen.

> [!primary]
>
> DiskStation Manager 6 ist nicht mit OVHcloud Public Cloud Object Storage kompatibel.
>

**Diese Anleitung erklärt, wie Sie DiskStation Manager 7.0 konfigurieren, um die Dateien auf Ihrem NAS mit Ihrem Object Storage zu synchronisieren.**

## Voraussetzungen

- [Erstellung von Object Storage Containern](https://docs.ovh.com/de/storage/object-storage/pcs/create-container/)
- [Einen Zugang zu Horizon erstellen](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/#erstellung-eines-openstack-benutzers)

## In der praktischen Anwendung

### Konfiguration von DiskStation Manager 7.0

> [!warning]
>
> Synology-Lösungen wie DiskStation oder Hyperbackup sind mit Public Cloud Archive nicht kompatibel.
>

#### Zugangsdaten für OpenStack abrufen

Um die Synchronisierung Ihres Synology NAS zu konfigurieren müssen Sie über die Zugangsdaten Ihres OpenStack Benutzers verfügen.

Diese können Sie anhand der folgenden Anleitung im Kundencenter herunterladen:

- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/set-openstack-environment-variables/)

#### Konfiguration des Synchronisationspunkts mit Cloud Sync

Sobald Sie Ihre Zugangsdaten haben, können Sie sich mit Ihrem NAS verbinden und die folgenden Aktionen ausführen:

- Cloud Sync Anwendung starten:

- OpenStack Swift als Cloud Provider auswählen:

![public-cloud](images/DSM7_1.png){.thumbnail}

- Die Informationen Ihres OpenStack-Benutzers eingeben:

![public-cloud](images/DSM7_2.png){.thumbnail}

Alle diese Informationen finden Sie in der OpenRC-Datei, die Sie im vorherigen Schritt abgerufen haben.

- Wählen Sie den Standort und Namen des Containers aus:

![public-cloud](images/DSM7_3.png){.thumbnail}

- Den zu synchronisierenden Ordner konfigurieren:

![public-cloud](images/DSM7_4.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
