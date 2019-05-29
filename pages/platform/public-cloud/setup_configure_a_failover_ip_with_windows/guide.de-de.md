---
title: Konfiguration einer Failover-IP in Windows
excerpt: Konfiguration einer Failover-IP in Windows
slug: konfiguration_einer_failover-ip_in_windows
legacy_guide_number: g2046
---


## 
Sie möchten eine Failover-IP-Adresse auf einer Ihrer Instanzen konfigurieren, weil Sie zum Beispiel:


- Mehrere Websites auf Ihrer Instanz betreiben oder
- Internationale Projekte hosten möchten


Sie können dann eine neue Failover-IP bestellen oder eine Vorhandene importieren und mit Ihren Public Cloud Instanzen nutzen.

Die Failover-IPs werden jedoch nicht automatisch auf Ihrer Instanz konfiguriert. 

In dieser Anleitung wird die Konfiguration des Netzwerk-Interfaces zum Hinzufügen der Failover-IP-Adresse zu Ihrer Instanz beschrieben.


## Voraussetzungen

- [Eine erstellte Instanz im OVH Kundencenter]({legacy}1775)
- Eine Failover-IP-Adresse




## Konfiguration des Interfaces
Windows erlaubt im DHCP Modus nicht die Konfiguration einer Failover-IP als Ergänzung der Konfiguration der Haupt-IP.
Sie müssen deshalb Ihre Netzwerkkarte von Hand konfigurieren.


- Abruf der Informationen mit dem Befehl "ipconfig":



![](images/img_3609.jpg){.thumbnail}

- Begeben Sie sich in die Systemsteuerung und rufen Sie das Netzwerk- und Freigabecenter auf:



![](images/img_3602.jpg){.thumbnail}

- Die Einstellungen der Karte ändern:



![](images/img_3603.jpg){.thumbnail}

- Zugriff auf die Eigenschaften Ihres Interfaces:



![](images/img_3604.jpg){.thumbnail}

- Konfiguration des TCP/IPv4 Protokolls



![](images/img_3605.jpg){.thumbnail}

- Stellen Sie auf die manuelle Konfiguration um und tragen Sie eine an den unten aufgeführten Screenshot angepasste Konfiguration ein. Passen Sie die IP-Adressen anhand der von Ihnen mit dem Befehl "ipconfig" gewonnenen Informationen an und klicken Sie dann auf "Fortgeschritten:



![](images/img_3606.jpg){.thumbnail}

- Fügen Sie Ihre Failover-IP wie folgt hinzu:



![](images/img_3607.jpg){.thumbnail}


## 

- [Umzug einer Failover-IP]({legacy}1890)




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

