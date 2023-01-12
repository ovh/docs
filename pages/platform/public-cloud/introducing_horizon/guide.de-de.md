---
title: Einführung in das Horizon Interface
slug: horizon
excerpt: Erfahren Sie hier, wie Sie das Horizon Interface verwenden
section: Horizon
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 16.03.2022**

## Ziel

Das mit OpenStack ausgelieferte Horizon Interface wurde von OVHcloud angepasst, um die über das OVHcloud Kundencenter verfügbaren Optionen um zusätzliche Funktionen zu erweitern.

**Diese Anleitung erklärt die wichtigsten Bereiche des Horizon Interface.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/create_a_public_cloud_project/) in Ihrem Kunden-Account.
- Sie haben einen [OpenStack Benutzer](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/) in Ihrem Projekt erstellt.

## In der praktischen Anwendung

### In OpenStack Horizon einloggen

Öffnen Sie die [Horizon Login Seite](https://horizon.cloud.ovh.net/auth/login/). Geben Sie die zuvor erstellten Login-Daten des [OpenStack Users](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/) ein und klicken Sie auf `Connect`{.action}.

Sie können hierzu auch auf `Horizon`{.action} im linken Menü unter "Management Interfaces" klicken, wenn Sie Ihr `Public Cloud`{.action} Projekt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) geöffnet haben.

### Auswahl der Region (Rechenzentrum)

Anders als im OVHcloud Kundencenter unterteilt Horizon Ihre Dienste nach "Region". Sie können die Region im Menü oben links auswählen.

![public-cloud](images/region2021.png){.thumbnail}

### Seitenmenü links

Dieses Menü erlaubt es Ihnen, schnell durch das Projekt und die verschiedenen zugehörigen Funktionen zu navigieren.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Übersicht (*Overview*)**

- **Zusammenfassung der Quotas (*Limit Summary*)**

Horizon zeigt eine Zusammenfassung der Quotas an, damit Sie die für Ihre Projekte genutzten und verfügbaren Ressourcen sehen können:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Nutzungsübersicht (*Usage Summary*)**

Hier finden Sie eine Zusammenfassung der Verwendung der Instanzen Ihres Projekts. Der Suchzeitraum kann angepasst werden, um die Ansicht einzuschränken.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Nutzung (*Usage*)**

Eine Zusammenfassung Ihrer "Einsatzzwecke" ist ebenfalls verfügbar. Es handelt sich dabei um eine Zusammenfassung der verschiedenen Dienste, die mit dem Projekt verbunden sind, wie zum Beispiel die Liste der Instanzen.

![public-cloud](images/usage2021.png){.thumbnail}

Die Zusammenfassung kann im CSV-Format heruntergeladen werden, um die Informationen zu extrahieren und über andere Tools analysieren zu können. Klicken Sie dazu auf `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Auf dieser Seite können Sie die Instanzen auflisten und verwalten. Sie können etwa neue Instanzen erstellen, Instanzen pausieren oder auf die Konsole der Instanz zugreifen.

- **Images**

Verwalten Sie über dieses Menü die Images, d.h. die Templates und Snapshots Ihres Projekts.

- **Key Pairs**

Hier können Sie Ihre SSH-Schlüssel für die Verbindung zu Ihren Instanzen auflisten und erstellen.

##### **Volumes**

Dieses Menü erlaubt es Ihnen, die Volumes sowie Backups und Volume-Snapshots aufzulisten und zu verwalten.

![Volumen](images/volumes2021.png){.thumbnail}

##### **Network**

Verwalten Sie hier Ihre Netzwerke und die verschiedenen Sicherheitsgruppen. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

Dieses Menü erlaubt es Ihnen, mehrere Cloud-Anwendungen zu orchestrieren.<br>
Weitere Informationen finden Sie in der [OpenStack Dokumentation](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orchestrierung](images/orchestration2021.png){.thumbnail}

#### Identity

In diesem Menü finden Sie die Informationen zu Ihren Projekten.

### Benutzermenü

Oben rechts im Horizon Interface haben Sie folgende Optionen im Benutzermenü: 

- Die Einstellungen der Anzeige ändern.
- Eine OpenRC-Datei mit Ihren Benutzerkennungen herunterladen.
- Vom Horizon Interface abmelden.

![public-cloud](images/username2021.png){.thumbnail}

## Weiterführende Informationen

[Einführung in das Public Cloud Interface](https://docs.ovh.com/de/public-cloud/public-cloud-interface/)
 
Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
