---
title: Konfiguration einer Failover-IP in Debian
excerpt: Konfiguration einer Failover-IP in Debian
slug: konfiguration_einer_failover-ip_in_debian
legacy_guide_number: g2042
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

- Editieren Sie die Konfigurationsdatei mit dem Befehl:

```
vi /etc/network/interfaces
```


- Fügen Sie am Ende der Datei folgenden Abschnitt ein, nachdem Sie ihn wie unten beschrieben angepasst haben:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parameter|Werte|
|---|---|
|X|Nummer des Haupt-Interfaces (üblicherweise eth0)|
|xxx.xxx.xxx.xxx|Zu konfigurierende Failover-IP|
|Y|Nummer des Alias (mit 0 beginnen, dann 1, 2 usw. abhängig von der Anzahl der zu konfigurierenden IPs)|


Wenn mehrere IP-Adressen hinzugefügt werden sollen, müssen immer die gleichen Zeilen hinzugefügt werden, wobei jeweils der Wert von Y (der Nummer des Alias) um 1 erhöht wird.


## Neustart des Netzwerkdiensts

- Starten Sie die Networking-Dienste neu:

```
service networking restart
```





## 

- [Umzug einer Failover-IP]({legacy}1890)




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

