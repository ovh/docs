---
title: Verbindung mit dem vSphere Interface
excerpt: Sehen Sie hier, wie Sie sich mit vSphere verbinden können
slug: den_vsphere_client_installieren
section: Erste Schritte
order: 2
---

**Stand 28.12.2021**

## Einleitung

**Diese Anleitung zeigt Ihnen die verschiedenen Möglichkeiten, sich mit vSphere zu verbinden.**

## Voraussetzungen

- Sie sind Administrator-Kontakt für die Infrastruktur [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/), um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## Praktische Anwendung

### Kennungen abrufen

Die Kennungen werden während der Erstellung der Public Cloud per E-Mail versandt, wenn ein Passwort oder ein Nutzer erstellt wird:

```
IP-Adresse/Name: pcc-xxx-xxx-xxx-xxx.ovh.com Nutzername: admin Passwort: xxxxxx
```

Dieses Dokument von VMware führt die verschiedenen Ports auf, die Sie in Ihrer Firewall öffnen müssen, um z.B. Zugriff auf die Konsole zu haben: [Zugang zur Konsole](https://kb.vmware.com/s/article/1012382?lang=de){.external-link}

### Verwendung des Webclients HTML5

Der Webclient HTML5 ist im Web-Interface Ihrer Private Cloud unter der Adresse: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> verfügbar (ersetzen Sie pcc-xxx-xx-xx-xxx.ovh.com durch die Adresse Ihrer Private Cloud).

![Verbindung mit dem Interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Sie gelangen dann zu diesem Interface:

![Verbindung mit dem Interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

Auf der Seite `Home`{.action} finden Sie die wichtigsten Rubriken Ihres vCenters.

### Verwendung von Webclient Flash 

Der Webclient Flash ist im Web-Interface Ihrer Private Cloud unter der Adresse: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> verfügbar (ersetzen Sie pcc-xxx-xx-xx-xxx.ovh.com durch die Adresse Ihrer Private Cloud).

Verbinden Sie sich mit den Zugangsdaten, die Sie erhalten haben:

![vSphere Client](images/vsphere-client.png){.thumbnail}

Sie gelangen dann zu diesem Interface:

![Verbindung mit dem vSphere Interface ](images/connection_interface_w.png){.thumbnail}

Auf der Seite `Home`{.action} finden Sie die wichtigsten Rubriken Ihres vCenters.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
