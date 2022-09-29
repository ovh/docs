---
title: 'Konfiguration von IP-Aliasing'
slug: network-ipaliasing
excerpt: 'So fügen Sie Additional IPs zu Ihrer Konfiguration hinzu'
section: 'Netzwerk & IP'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 16.09.2021**

## Ziel

IP-Aliasing ist eine spezielle Konfiguration im Netzwerk Ihres Servers, mit der Sie mehrere IP-Adressen auf einem einzigen Netzwerkinterface verknüpfen können.

**In dieser Anleitung erklären wir Ihnen, wie Sie diese Option konfigurieren.**

## Voraussetzungen

- Sie verfügen über einen dedizierten Server ([VPS](https://www.ovh.de/virtual_server/){.external}, [Dedicated Server](https://www.ovh.de/dedicated_server/){.external} oder eine [Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/){.external}).
- Sie verfügen über eine oder mehrere [Additional IPs](https://www.ovhcloud.com/de/bare-metal/ip/){.external}.
- Sie sind via SSH auf Ihrem Server eingeloggt (Root-Zugriff).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

In dieser Anleitung finden Sie die Konfigurationen für die gängigsten Distributionen.

### Debian 10/11

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Sie können nun die Quelldatei ändern:

```sh
editor /etc/network/interfaces.d/50-cloud-init
```

Fügen Sie anschließend ein sekundäres Interface hinzu:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Um sicherzustellen, dass das sekundäre Interface aktiviert wird, wenn auch die `eth0` Schnittstelle aktiv ist, fügen Sie die folgende Zeile zur Konfiguration von eth0 hinzu:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Wenn Sie zwei Additional IPs einrichten, muss die Datei /etc/network/interfaces.d/50-cloud-init wie folgt konfiguriert werden:

```bash
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

Alternative:

```bash
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```


#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie das Interface neu:

```sh
/etc/init.d/networking restart
```

### Debian 6/7/8 und Derivate

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Sie können nun die Quelldatei ändern:

```sh
editor /etc/network/interfaces
```

Fügen Sie anschließend ein sekundäres Interface hinzu:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Um sicherzustellen, dass das sekundäre Interface aktiviert wird, wenn auch die `eth0` Schnittstelle aktiv ist, fügen Sie die folgende Zeile zur Konfiguration von eth0 hinzu:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Wenn Sie zwei Additional IPs einrichten, muss die Datei /etc/network/interfaces wie folgt konfiguriert werden:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

```
# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```


#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ und Arch Linux

Bei diesen Distributionen wurde die Benennung von Interfaces in eth0, eth1... abgeschafft und es wird nun die generische Bezeichnung `systemd-network` verwendet.

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Sie können nun wie folgt Ihre Additional IP zur Quelldatei hinzufügen:

```sh
nano /etc/systemd/network/50-default.network
```
```sh
[Address]
Address=22.33.44.55/32
Label=failover1 # optional
```

Das Label ist optional und dient nur zur Unterscheidung der verschiedenen Additional IPs.

#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
systemctl restart systemd-networkd
```


### CentOS und Fedora (25 und vorherige)

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, um sie als Template verwenden zu können:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Schritt 2: Die Quelldatei bearbeiten

Sie können nun die Datei eth0:0 ändern, um die neue IP einzugeben:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Ersetzen Sie zunächst den Namen von `Device`, danach die existierende IP-Adresse mit der Additional IP, die Sie erhalten haben:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # For CentOS use "static"
IPADDR="ADDITIONAL_IP"
NETMASK="255.255.255.255"
BROADCAST="ADDITIONAL_IP"
```

#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
ifup eth0:0
```


### Gentoo

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Bearbeiten Sie nun die Datei, um die Additional IP hinzuzufügen. In Gentoo wird ein Alias direkt im eth0 Interface hinzugefügt. Anders als bei Red Hat oder CentOS wird hier keine eth0:0-Schnittstelle erstellt.

> [!warning]
>
> Die Standard-IP des Servers muss in derselben Zeile wie config_eth0= stehen. So wird sichergestellt, dass bestimmte OVH spezifische Vorgänge ordnungsgemäß funktionieren.
> 

Setzen Sie hierzu einen Zeilenumbruch nach netmask **255.255.255.0** und fügen Sie Ihre Additional IP hinzu (SERVER_IP muss durch die Haupt-IP Ihres Servers ersetzt werden).

```sh
editor /etc/conf.d/net
```

Fügen Sie folgende Zeile hinzu:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
```

Die Datei /etc/conf.d/net muss folgende Angaben enthalten:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0"
"ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
routes_eth0=( "default gw SERVER_IP.254" )
```

Damit Sie Ihre Additional IP pingen können, muss nur noch das Netzwerkinterface neu gestartet werden.


#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Ändern Sie anschließend die Datei /etc/sysconfig/network/ifcfg-ens32 wie folgt:

```bash
IPADDR_1=ADDITIONAL_IP
NETMASK_1=255.255.255.255
LABEL_1=ens32:0
```


### cPanel

#### Schritt 1: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/ips /etc/ips.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Ändern Sie nun die Datei /etc/ips:

```sh
editor /etc/ips
```
Anschließend fügen Sie die Additional IP zur Datei hinzu:

```bash
ADDITIONAL_IP:255.255.255.255:ADDITIONAL_IP
```

Fügen Sie danach die IP-Adresse in `/etc/ipaddrpool` hinzu:

```bash
ADDITIONAL_IP
```

#### Schritt 3: Den Dienst neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Die Netzwerkeinstellung von Windows Servern ist häufig mit DHCP konfiguriert. Wenn Sie bereits eine Additional IP angelegt oder Ihre Konfiguration als statische IP definiert haben, können Sie direkt zum nächsten Schritt übergehen.

Andernfalls wechseln Sie zunächst von einer DHCP-Konfiguration auf Netzwerkebene auf eine statische IP-Konfiguration.

Starten Sie die Eingabeaufforderung `cmd`{.action} oder `powershell`{.action} und geben Sie den folgenden Befehl ein:

```sh
ipconfig /all
```

Sie erhalten daraufhin zum Beispiel Folgendes:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Notieren Sie dann IPv4, Subnetzmaske, Standardgateway sowie den Namen der Netzwerkkarte.

In unserem Beispiel lautet die IP des Servers: **94.23.229.151**


Die nächsten Schritte können Sie entweder über Kommandozeilen oder über die grafische Benutzeroberfläche ausführen:

#### In Kommandozeilen (empfohlen)

In den untenstehenden Befehlen ersetzen Sie Folgendes:

|Befehl|Wert|
|---|---|
|NETWORK_ADAPTER| Name der Netzwerkkarte (in unserem Beispiel: Local Area Connection)|
|IP_ADDRESS| Server-IP-Adresse (in unserem Beispiel: 94.23.229.151)|
|SUBNET_MASK| Subnetzmaske (in unserem Beispiel: 255.255.255.0)|
|GATEWAY| Standardgateway (in unserem Beispiel: 94.23.229.254)|
|ADDITIONAL_IP| Additional IP-Adresse, die Sie hinzufügen möchten|

> [!warning]
>
> Achtung: Die Eingabe falscher Informationen führt dazu, dass der Server nicht mehr erreichbar ist. In diesem Fall sind Korrekturmaßnahmen im WinRescue-Modus oder über KVM erforderlich.
> 

In der Eingabeaufforderung:

1. Umschalten auf statische IP

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. DNS-Server festlegen

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
3. Additional IP hinzufügen

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Ihre Additional IP ist jetzt funktionsfähig.


#### Über die grafische Benutzeroberfläche

1. Gehen Sie zu `Start`{.action} > `Systemsteuerung`{.action} > `Netzwerk und Internet`{.action} > `Netzwerk- und Freigabecenter`{.action} > `Adaptereinstellungen ändern`{.action} (im linken Menü).
2. Klicken Sie mit der rechten Maustaste auf `LAN-Verbindung`{.action}.
3. Klicken Sie auf `Eigenschaften`{.action}.
4. Wählen Sie `Internetprotokoll Version 4 (TCP/IPv4)`{.action} aus und klicken Sie auf `Eigenschaften`{.action}.
5. Klicken Sie auf `Folgende IP-Adresse verwenden`{.action} und geben Sie die Haupt-IP-Adresse Ihres Servers, die Subnetzmaske und das Standardgateway ein, die Sie über den Befehl `ipconfig`{.action} erhalten haben. (Im Feld “Bevorzugter DNS-Server” geben Sie 213.186.33.99 ein).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Achtung: Die Eingabe falscher Informationen führt dazu, dass der Server nicht mehr erreichbar ist. In diesem Fall sind Korrekturmaßnahmen im WinRescue-Modus oder über KVM erforderlich.
> 

Klicken Sie dann auf `Erweitert`{.action} (immer noch in den `TCP/IP Einstellungen`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

Im Bereich `IP-Adresse`{.action} klicken Sie auf `Hinzufügen`{.action}

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Geben Sie dann Ihre Additional IP und die Subnetzmaske **255.255.255.255** ein.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Klicken Sie auf `Hinzufügen`{.action}.

Ihre Additional IP ist jetzt funktionsfähig.


### FreeBSD

#### Schritt 1: Interface bestimmen

Bestimmen Sie zunächst den Namen Ihres primären Netzwerkinterface. Sie können den `ifconfig`{.action}-Befehl für diesen Vorgang verwenden:

```sh
ifconfig
```

Dadurch erhalten Sie das folgende Ergebnis:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500
>>> options=10b
>>> ether 00:24:8c:d7:ba:11
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74
>>> media: Ethernet autoselect (100baseTX )
>>> status: active
>>> lo0: flags=8049 metric 0 mtu 16384
>>> options=3
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2
>>> inet6 ::1 prefixlen 128
>>> inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

In unserem Beispiel lautet der Name des Interface **nfe0**.


#### Schritt 2: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Schritt 3: Die Quelldatei bearbeiten

Die Datei /etc/rc.conf muss geändert werden:

```sh
editor /etc/rc.conf
```

Ergänzen Sie folgende Zeilen am Ende der Datei: ifconfig_INTERFACE_alias0=`inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP`.

Ersetzen Sie **INTERFACE** durch den Namen Ihres Interface (wie im ersten Schritt ermittelt) und **ADDITIONAL_IP** durch Ihre Additional IP. Hier ein Beispiel:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Schritt 4: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### Schritt 1: Interface bestimmen

Bestimmen Sie zunächst den Namen Ihres primären Netzwerkinterface. Sie können den `ifconfig`{.action}-Befehl für diesen Vorgang verwenden:

```sh
ifconfig -a
```

Dadurch erhalten Sie das folgende Ergebnis:

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

In unserem Beispiel lautet der Name des Interface **e1000g0**.


#### Schritt 2: Die Quelldatei sichern

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zum ursprünglichen Zustand zurückkehren können:

```sh
editor /etc/hostname.e1000g0:1
```

#### Schritt 3: Die Quelldatei bearbeiten

Geben Sie in dieser Datei folgende Informationen ein: **ADDITIONAL_IP/32 up**, wobei **ADDITIONAL_IP** Ihrer Additional IP entspricht. Zum Beispiel:

```bash
188.165.171.40/32 up
```

#### Schritt 4: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
svcadm restart svc:/network/physical:default
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
