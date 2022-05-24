---
title: Synology NAS mit Object Storage synchronisieren
slug: pcs/pcs-syno
excerpt: Hier erfahren Sie, wie Sie einen Synology NAS mit einem Container synchronisieren.
section: Object Storage Standard (Swift)
order: 150
---

**Stand 27.10.2021**

## Ziel

[DiskStation Manager 6.00](https://www.synology.com/en-global/dsm/6.0beta){.external} aus Synology bietet ein Synchronisierungswerkzeug mit verschiedenen Cloud Lösungen an.

Dieser ist mit dem Object Storage der OVHcloud Public Cloud kompatibel und erlaubt es Ihnen so, ein Backup Ihrer Daten durchzuführen und diese von überall aus verfügbar zu machen.

**In dieser Anleitung erfahren Sie, wie Sie DiskStation Manager 6.0 konfigurieren, um die Dateien auf Ihrem NAS mit Ihrem Object Storage zu synchronisieren.**

## Voraussetzungen

- [Object Storage Containern erstellen](https://docs.ovh.com/de/storage/pcs/container-erstellen/)
- [Einen Zugang zu Horizon erstellen](../../../public-cloud/openstack-user-erstellen-loeschen/#erstellung-eines-openstack-benutzers)

## In der praktischen Anwendung

### Konfiguration von DiskStation Manager 6.0

> [!warning]
>
> Synology-Lösungen wie DiskStation oder Hyperbackup sind mit dem Public Cloud Archive Angebot nicht kompatibel
>

#### Wiederherstellung Ihrer OpenStack-Kennungen

Um die Synchronisierung Ihres Synology NAS zu konfigurieren müssen Sie über die Zugangsdaten Ihres OpenStack-Benutzers verfügen.

Diese können Sie über den ersten Teil der folgenden Anleitung herunterladen:

- [Die OpenStack Umgebungsvariablen laden](../../..//public-cloud/die-variablen-der-umgebung-openstack-laden/#schritt-nr-1-die-variablen-abrufen){.ref}

#### Konfiguration des Synchronisationspunkts mit Cloud Sync

Sobald Sie Ihre Zugangsdaten haben, können Sie sich mit Ihrem NAS verbinden und die folgenden Aktionen ausführen:

- Cloud Sync Anwendung starten:

![public-cloud](images/3791.png){.thumbnail}

- OpenStack Swift als Cloud Provider auswählen

![public-cloud](images/3788.png){.thumbnail}

- Die Informationen Ihres OpenStack-Benutzers eingeben:

![public-cloud](images/3792.png){.thumbnail}

Alle diese Informationen finden Sie in der OpenRC-Datei, die Sie im vorherigen Schritt abgerufen haben.

- Ihren Ordner synchronisieren

![public-cloud](images/3790.png){.thumbnail}

> [!alert]
>
> Diese Anleitung basiert auf der beta-Version der DiskStation Manager 6.0. Der Konfigurationsvorgang kann daher geändert werden.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.