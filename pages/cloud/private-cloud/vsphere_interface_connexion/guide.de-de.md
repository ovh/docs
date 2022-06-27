---
title: Verbindung mit dem vSphere Interface
excerpt: Erfahren Sie hier, wie Sie sich mit vSphere verbinden können
slug: den_vsphere_client_installieren
section: Erste Schritte
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 24.06.2022**

## Ziel

**Diese Anleitung erklärt, wie Sie sich mit vSphere verbinden.**

## Voraussetzungen

- Sie sind Administrator-Kontakt für Ihre [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/), um Login-Daten zu erhalten.
- Sie haben IP-Adressen im Bereich `Sicherheit`{.action} in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) hinzugefügt. Weitere Informationen finden Sie in unserer Anleitung [IP-Autorisierung für vCenter](https://docs.ovh.com/de/private-cloud/verbindung-von-ip-zum-vcenter-erlauben/).

## In der praktischen Anwendung

### Login-Daten abrufen

Login-Daten werden per E-Mail gesendet, bei der Erstellung der Hosted Private Cloud, wenn ein Passwort geändert oder ein Nutzer erstellt wird:

```
IP-Adresse/Name: pcc-xxx-xxx-xxx-xxx.ovh.com Nutzername: admin Passwort: xxxxxx
```

Diese Dokumentation von VMware führt die verschiedenen Ports auf, die Sie in Ihrer Firewall öffnen müssen, um etwa Zugriff auf die Konsole zu haben: [Zugang zur Konsole](https://kb.vmware.com/s/article/1012382?lang=de){.external-link}

### Verwendung des HTML5 Webclients 

Der HTML5 Webclient ist im Web-Interface Ihrer Hosted Private Cloud unter der Adresse: <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> verfügbar (ersetzen Sie pcc-xxx-xx-xx-xxx.ovh.com durch die Adresse Ihrer Hosted Private Cloud).

![Verbindung mit dem Interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Sie gelangen dann zu diesem Interface:

![Verbindung mit dem Interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

Auf der Seite `Home`{.action} finden Sie die wichtigsten Rubriken Ihres vCenters.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
