---
title: Verbindung mit dem vSphere Interface
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion'
excerpt: Sehen Sie hier, wie Sie sich mit vSphere verbinden können
updated: 2020-11-18
---


## Einleitung

**Diese Anleitung zeigt Ihnen die verschiedenen Möglichkeiten, sich mit vSphere zu verbinden.**

## Voraussetzungen

- Sie sind der Administrator-Kontakt der Managed Bare Metal und erhalten als solcher die Kennungen der Verbindung.
- Sie haben einen aktiven Nutzer im Kundencenter erstellt.


## Praktische Anwendung

### Kennungen abrufen

Die Kennungen werden während der Erstellung der Public Cloud per E-Mail versandt, wenn ein Passwort oder ein Nutzer erstellt wird:

```
IP-Adresse/Name: pcc-xxx-xxx-xxx-xxx.ovh.com Nutzername: admin Passwort: xxxxxx
```

Dieses Dokument von VMware führt die verschiedenen Ports auf, die Sie in Ihrer Firewall öffnen müssen, um z.B. Zugriff auf die Konsole zu haben: [Zugang zur Konsole](https://kb.vmware.com/s/article/1012382?lang=de){.external-link}

### Verwendung des Webclients HTML5

Der Webclient HTML5 ist im Web-Interface Ihrer Managed Bare Metal unter der Adresse: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui` verfügbar (ersetzen Sie pcc-xxx-xx-xx-xxx.ovh.com durch die Adresse Ihrer Managed Bare Metal).

![Verbindung mit dem Interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Sie gelangen dann zu diesem Interface:

![Verbindung mit dem Interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

Auf der Seite `Home`{.action} finden Sie die wichtigsten Rubriken Ihres vCenters. Sie können verschiedene Aktionen durchführen, zum Beispiel:

- Eine virtuelle Maschine einsetzen, indem Sie in `Hosts and Clusters`{.action} gehen;
- Ihre Datenspeicher durchsuchen.

### Verwendung von Webclient Flash 

Der Webclient Flash ist im Web-Interface Ihrer Managed Bare Metal unter der Adresse: `https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client` verfügbar (ersetzen Sie pcc-xxx-xx-xx-xxx.ovh.com durch die Adresse Ihrer Managed Bare Metal).

Verbinden Sie sich mit den Zugangsdaten, die Sie erhalten haben:

![vSphere Client](images/vsphere-client.png){.thumbnail}

Sie gelangen dann zu diesem Interface:

![Verbindung mit dem vSphere Interface ](images/connection_interface_w.png){.thumbnail}

Auf der Seite `Home`{.action} finden Sie die wichtigsten Rubriken Ihres vCenters. Sie können verschiedene Aktionen durchführen, zum Beispiel:

- Eine virtuelle Maschine einsetzen, indem Sie in `Hosts and Clusters`{.action} gehen;
- Ihre Datenspeicher durchsuchen.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
