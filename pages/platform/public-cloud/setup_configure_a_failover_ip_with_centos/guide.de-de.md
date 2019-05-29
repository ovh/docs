---
title: Konfiguration einer Failover-IP in CentOS
excerpt: Konfiguration einer Failover-IP in CentOS
slug: konfiguration_einer_failover-ip_in_centos
legacy_guide_number: g2044
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
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parameter|Werte|
|---|---|
|X|Nummer des Haupt-Interfaces (üblicherweise eth0)|
|Y|Nummer des Alias (mit 0 beginnen, dann 1, 2 usw. abhängig von der Anzahl der zu konfigurierenden IPs|



- Fügen Sie am Ende der Datei folgenden Abschnitt ein, nachdem Sie ihn wie oben beschrieben angepasst haben:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Neustart des Netzwerkdiensts

- Starten Sie die Networking-Dienste neu:

```
ifup ethX:Y
```





## 

- [Umzug einer Failover-IP]({legacy}1890)




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

