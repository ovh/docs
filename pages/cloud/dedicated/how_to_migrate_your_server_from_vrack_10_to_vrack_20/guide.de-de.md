---
title: Wie migriere ich meine Server vom vRack 1.0 in das vRack 2.0?
excerpt: Wie migriere ich meine Server vom vRack 1.0 in das vRack 2.0?
slug: wie_migriere_ich_meine_server_vom_vrack_10_in_das_vrack_20
legacy_guide_number: g1994
---


## 
In dieser Hilfe wird die Migration von Servern vom vRack 1.0 in das vRack 2.0 beschrieben.


## 
Zur Durchführung dieser Operation benötigen Sie:

- Einen oder mehrere Server mit zwei Netzwerkkarten, die sich derzeit im vRack 1.0 befinden (Server der professionellen Angebotsreihen mit Ausnahme der Superplan Server-Reihe)
- Ein vRack 1.0




## 
Die Migration Ihrer Server vom vRack 1.0 in das vRack 2.0 läuft wie folgt ab:

- Überprüfung des zweiten Netzwerk-Interfaces der Server
- Erstellung eines vRack 2.0
- Temporäre Konfiguration einer IP-Adresse auf dem vRack 2.0 Interface
- Deaktivierung des vRack 1.0 Interfaces und Rekonfiguration des vRack 2.0 Interfaces




## Überprüfung des zweiten Netzwerk-Interfaces der Server

## Um einen Server zum vRack 2.0 hinzufügen zu können, muss dieser Server über zwei Netzwerk-Interfaces verfügen. Zuerst wird das vRack 2.0 Interface des Servers bestimmt:
Unter Linux oder im Rescue Pro Modus können Sie das zu konfigurierende Interface wie folgt bestimmen:

Listen Sie die Interfaces auf:


```
ifconfig -a | grep eth | awk '{print $1}'
```


Beispiel:


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```


eth0 ist bereits das Haupt-Interface, Sie können Ihre IP mit dem Befehl ifconfig anzeigen.

Geben Sie dann folgenden Befehl ein:


```
#ifconfig eth1 up
#ethtool eth1 | grep "Link detected"
Link detected: yes
```


Wenn Sie "no" als Ausgabe in der Zeile "Link detected" erhalten, ist es nicht das Richtige. Geben Sie dann folgenden Befehl ein:


```
#ifconfig eth1 down
```


und gehen Sie bei den Anderen ebenso vor.

In unserem Beispiel behalten wir eth1.


## Erstellung eines vRack 2.0
Die Vorgehensweise zur Erstellung eines vRack 2.0 wird in einer gesonderten Anleitung zu diesem Thema beschrieben.


## Hinzufügen Ihres vRack 1.0 zum vRack 2.0
Zur Durchführung der Migration wird das vRack 1.0 zum vRack 2.0 hinzugefügt.

Verbinden Sie sich dazu über folgenden Link mit Ihrem Kundencenter:

https://www.ovh.com/manager/

Wählen Sie in dem Menü auf der linken Seite das vRack 2.0 aus.

Sie sehen dann folgende Seite:

![](images/img_3295.jpg){.thumbnail}
Wählen Sie in der Spalte mit den verfügbaren Dienstleistungen auf der linken Seite ein vRack 1.0 aus.

Und klicken Sie auf "Hinzufügen".


## Hinzufügen der Server zum vRack 2.0
Nun werden die Server zum vRack 2.0 hinzugefügt.
Verbinden Sie sich dazu über folgenden Link mit Ihrem Kundencenter:
https://www.ovh.com/manager/dedicated

Wählen Sie in dem Menü auf der linken Seite das vRack 2.0 aus.

Sie sehen dann folgende Seite:

![](images/img_3297.jpg){.thumbnail}
Wählen Sie in der Spalte mit den verfügbaren Dienstleistungen auf der linken Seite einen Server aus

Und klicken Sie auf "Hinzufügen".


## Temporäre Konfiguration einer IP-Adresse auf dem vRack 2.0 Interface

## Es wird zuerst eine temporäre Konfiguration durchgeführt, um die Funktionsfähigkeit des vRack 2.0 zu überprüfen.
Fügen Sie dazu für jeden Ihrer Server eine private IP auf dem vRack-Interface hinzu:

Beispiel:

Auf einem Debian Server mit eth1 als vRack-Interface und dem Block 10.0.0.0/24

Fügen Sie dazu in der Konfigurationsdatei: /etc/network/interfaces

Folgende Zeilen hinzu:


```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Und starten Sie anschließend Ihr Netzwerk-Interface neu:


```
service networking restart
```


Die Angaben für weitere Distributionen finden Sie in folgender Hilfe jeweils im Abschnitt "Private IP": http://hilfe.ovh.de/VrackInfrastrukturServer

## Wichtig:
Überprüfen Sie im Anschluss, dass Sie jeden Ihrer Server über die soeben konfigurierten IP-Adressen anpingen können.
Wenn alle Server auf die Ping-Abfrage antworten, fahren Sie mit dem nächsten Schritt fort.

Wenn nicht, führen Sie folgenden Befehl aus:


```
arping -I INTERFACE_VRACK_2.0 1.1.1.1
```


INTERFACE_VRACK_2.0: ersetzen Sie dies durch Ihr vRack 2.0 Interface, in unserem Beispiel eth1.


## Deaktivierung des vRack 1.0 Interfaces und Rekonfiguration des vRack 2.0 Interfaces

## Wichtig:
In diesem Schritt kommt es zu einer Unterbrechung während des Zeitraums, in dem Sie die von Ihnen verwendete IP vom vRack 1.0 Interface auf das vRack 2.0 Interface umziehen.
Entfernen Sie die temporären Konfigurationen von Ihrem vRack 2.0 Interface und Ihrem vRack 1.0 Interface.

Starten Sie anschließend Ihre Interfaces neu.

Fügen Sie nun Ihre vRack 1.0 IP zu Ihrem vRack 2.0 Interface hinzu.

Beispiel unter Debian:

Auszug aus der Konfiguration vor der Änderung:


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX ;

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Auszug aus der Konfiguration nach der Änderung:


```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```


Starten Sie anschließend die Netzwerk-Interfaces neu.

Die Angaben für weitere Distributionen finden Sie in folgender Hilfe: http://hilfe.ovh.de/VrackInfrastrukturServer

Ihre Server sollten unmittelbar nach Abschluss der Konfiguration in der Lage sein, miteinander zu kommunizieren.


## Bei einem öffentlichen IP-Block

## Wichtig:
Führen Sie diesen Abschnitt nicht aus, wenn der öffentliche IP-Block zu einer ACE oder ASA Firewall gehört!

## Wenn Sie über einen öffentlichen IP-Block verfügen und alle Ihre Server mit dem vRack 2.0 kompatibel sind, können Sie Ihren öffentlichen IP-Block zum vRack 2.0 hinzufügen:
Verbinden Sie sich dazu über folgenden Link mit Ihrem Kundencenter:

https://www.ovh.com/manager/dedicated

Wählen Sie in dem Menü auf der linken Seite den öffentlichen IP-Block aus.

Sie sehen dann folgende Seite:

![](images/img_3297.jpg){.thumbnail}

## Wählen Sie in der Spalte mit den verfügbaren Dienstleistungen auf der linken Seite einen Server aus
Und klicken Sie auf "Hinzufügen".

## Wichtig:
Diese Operation zieht eine Unterbrechung von etwa 1 Minute nach sich.


## Anhalten des vRack 1.0

## Wichtig:
Setzen Sie diesen Abschnitt nur um, wenn Sie keine Hardware mehr im vRack 1.0 haben, die nur in diesem funktioniert. Dies ist der Fall für:


- Alte, mit dem vRack 1.0 kompatible Superplan Server
- Einen ACE Loadbalancer
- Eine ASA Firewall für das vRack


Sobald die Server im vRack 2.0 kommunizieren, können Sie diese aus dem vRack 1.0 entfernen.

Verbinden Sie sich dazu über folgenden Link mit Ihrem Kundencenter:

https://www.ovh.com/manager

Wählen Sie eines Ihrer vRack 1.0 aus und entfernen Sie einen Server aus dem Virtual Rack. Wählen Sie dazu die gewünschten Server im Abschnitt "Derzeitige Zusammensetzung Ihrer Infrastruktur" aus und klicken Sie auf ">>".

Sobald alle Ihre Server im vRack 2.0 funktionieren und Sie alle Server aus dem vRack 1.0 entfernt haben, kontaktieren Sie kurz unseren Support, damit das nicht mehr benötigte vRack 1.0 endgültig gelöscht wird.

