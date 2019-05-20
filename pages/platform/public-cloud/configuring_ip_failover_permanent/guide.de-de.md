---
title: Persistente Konfiguration der Failover-IP
excerpt: Persistente Konfiguration der Failover-IP
slug: persistente_konfiguration_der_failover-ip
legacy_guide_number: g1885
---


## 
Um Ihre Instanz langfristig abzusichern, ist eine persistente Konfiguration Ihrer Failover-IP sinnvoll, damit Sie diese nicht nach jedem Neustart neu konfigurieren müssen.
In dieser Anleitung erfahren Sie alles über diese persistente Konfiguration der Failover-IP für Ihre Instanz.


## Voraussetzungen

- Eine Public Cloud Instanz.
- Eine Failover-IP wurde bereits auf das Public Cloud Projekt importiert.
- Server-Verbindung via SSH.




## Debian/Ubuntu

- Konfigurationsdatei mit folgendem Befehl bearbeiten:

```
vi /etc/network/interfaces
```


- Am Ende der Datei hinzufügen:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parameter|Werte|
|---|---|
|X|Nummer des Haupt-Interface (normalerweise eth0)|
|xxx.xxx.xxx.xxx|zu konfigurierende Failover-IP|
|Y|Nummer des Alias (anfangen bei 0, dann 1, ... je nach Anzahl der zu konfigurierenden IPs)|


Um mehrere IPs hinzuzufügen, müssen immer dieselben Zeilen ergänzt und der Wert Y (Nummer des Alias) entsprechend erhöht werden.

- Neustart der Netzwerk-Dienste mit folgendem Befehl:

```
service networking restart
```





## CentOS/Fedora

- Konfigurationsdatei mit folgendem Befehl bearbeiten:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parameter|Werte|
|---|---|
|X|Nummer des Haupt-Interface (normalerweise eth0)|
|Y|Nummer des Alias (anfangen bei 0, dann 1, ... je nach Anzahl der zu konfigurierenden IPs)|



- In der Datei hinzufügen:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


- Neustart der Netzwerk-Dienste mit folgendem Befehl:

```
ifup ethX:Y
```





## Windows
Im DHCP-Modus lässt Windows die Konfiguration einer Failover-IP als Ergänzung der Konfiguration der Haupt-IP nicht zu.
Sie müssen deshalb Ihre Netzwerkkarte manuell konfigurieren.


- Abruf der Netzwerk-Informationen mit dem Befehl "ipconfig":



![](images/img_3545.jpg){.thumbnail}

- Begeben Sie sich in die Systemsteuerung und rufen Sie das Netzwerk- und Freigabecenter auf:



![](images/img_3543.jpg){.thumbnail}

- Bearbeiten Sie die Einstellungen der Netzwerkkarte:



![](images/img_3544.jpg){.thumbnail}

- Zugriff auf die Eigenschaften Ihres Interface:



![](images/img_3546.jpg){.thumbnail}

- Konfiguration des TCP/IPv4-Protokolls:



![](images/img_3547.jpg){.thumbnail}

- Stellen Sie auf die manuelle Konfiguration um. Dann können Sie sich an untenstehendem Screenshot orientieren. Passen Sie die IP-Adressen anhand der von Ihnen mit dem Befehl "ipconfig" gewonnenen Informationen an und klicken Sie dann auf "Fortgeschritten":



![](images/img_3548.jpg){.thumbnail}

- Hinzufügen der Failover-IP:



![](images/img_3551.jpg){.thumbnail}


## 

- [Umzug einer Failover-IP]({legacy}1890)




## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

