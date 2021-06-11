---
title: Konfiguration einer Failover-IP in Windows
excerpt: Erfahren Sie hier, wie Sie eine Failover-IP in Windows hinzufügen
slug: konfiguration_einer_failover-ip_in_windows
section: 'Netzwerk und IP'
legacy_guide_number: g2046
hidden: true
---

**Letzte Aktualisierung am 15.10.2020**

## Ziel

Sie möchten eine Failover-IP-Adresse auf einer Ihrer Instanzen konfigurieren, weil Sie zum Beispiel

- mehrere Webseiten auf Ihrer Instanz betreiben.
- internationale Projekte hosten möchten.

Sie können dann eine neue Failover-IP bestellen oder eine vorhandene IP-Adresse importieren und mit Ihren Public Cloud Instanzen nutzen. Die Failover-IPs werden jedoch nicht automatisch auf Ihrer Instanz konfiguriert. 

**In dieser Anleitung wird die Konfiguration des Netzwerk-Interfaces zum Hinzufügen der Failover-IP-Adresse zu Ihrer Instanz beschrieben.**


## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie verfügen über eine Failover-IP-Adresse.

## In der praktischen Anwendung

Windows erlaubt im DHCP Modus nicht die Konfiguration einer Failover-IP als Ergänzung der Konfiguration der Haupt-IP. Sie müssen deshalb Ihre Netzwerkkarte von Hand konfigurieren.

### Konfiguration des Interfaces


- Abruf der Informationen mit dem Befehl „ipconfig“:

![ipconfig](images/img_3609.jpg){.thumbnail}


- Öffnen Sie die Systemsteuerung und rufen Sie das Netzwerk- und Freigabecenter auf:

![Systemsteuerung](images/img_3602.jpg){.thumbnail}


- Die Einstellungen der Karte ändern:

![NIC](images/img_3603.jpg){.thumbnail}


- Zugriff auf die Eigenschaften Ihres Interfaces:

![Eigenschaften](images/img_3604.jpg){.thumbnail}


- Konfiguration des TCP/IPv4 Protokolls:

![TCPIPv4](images/img_3605.jpg){.thumbnail}


- Stellen Sie auf die manuelle Konfiguration um und tragen Sie eine an den unten aufgeführten Screenshot angepasste Konfiguration ein. Passen Sie die IP-Adressen anhand der von Ihnen mit dem Befehl „ipconfig“ gewonnenen Informationen an und klicken Sie dann auf „Fortgeschritten“:

![Konfiguration](images/img_3606.jpg){.thumbnail}


- Fügen Sie Ihre Failover-IP wie folgt hinzu:

![Failover](images/img_3607.jpg){.thumbnail}



## Weiterführende Informationen

[Failover-IP migrieren](../umzug_einer_failover-ip/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.

