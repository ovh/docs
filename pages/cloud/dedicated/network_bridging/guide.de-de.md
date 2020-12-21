---
title: 'IP Bridge Modus'
slug: network-bridging
excerpt: ‚Hier erfahren Sie, wie Sie den Internet-Zugang Ihrer virtuellen Maschinen mithilfe des Bridge-Modus konfigurieren.‘
section: 'Netzwerk & IP'
---

**Stand 21.12.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Die Vernetzung im Bridge-Modus kann verwendet werden, um Ihre virtuellen Maschinen zu konfigurieren. Es sind einige Änderungen notwendig, damit die Konfiguration in unserem Netzwerk funktioniert.

**In dieser Anleitung erfahren Sie, wie Sie den Bridge Modus verwenden, um den Internetzugang für Ihre virtuellen Maschinen zu konfigurieren.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über einen Dedicated Server mit installiertem Hypervisor ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox zum Beispiel).
- Sie verfügen über mindestens eine mit dem [Server verbundene Failover-IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.

## In der praktischen Anwendung

Die Grundschritte sind unabhängig von den verwendeten Systemen immer gleich:
- Erstellung einer virtuellen MAC-Adresse für eine Wechsel-IP-Adresse
- die MAC-Adresse der virtuellen Maschine (VM) auf diese neue Adresse einstellen;
- IP-Adresse, Netzmaske, Gateway und Route zum Gateway innerhalb der virtuellen Maschine konfigurieren.

Für dieses Beispiel verwenden wir die folgenden Werte in unseren Codebeispielen. Diese müssen durch Ihre eigenen Werte ersetzt werden:

- "SERVER_IP": die Haupt-IP-Adresse Ihres Servers
- "FAILOVER_IP": Ihre Failover-IP
- "GATEWAY_IP": standardmäßig die Adresse Ihres Gateways.

### Eine virtuelle MAC-Adresse zuweisen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und klicken Sie auf das Menü `Bare Metal Cloud`{.action}. Klicken Sie dann links im Menü auf `IP`{.action} und suchen Sie Ihre Failover-IP in der Tabelle.

![IP Failover](images/virtual_mac_01_2020_1.png){.thumbnail}

Klicken Sie auf die `...`{.action} und klicken Sie dann auf `Virtuelle MAC-Adresse hinzufügen`{.action}.

![Virtuelle MAC-Adresse hinzufügen (1)](images/virtual_mac_02_2020.png){.thumbnail}

Wählen Sie "OVH"in der Drop-down-Liste "Typ"aus, geben Sie einen Namen in das Feld "Name der virtuellen Maschine"ein und klicken Sie anschließend auf `Bestätigen`{.action}.

![Virtuelle MAC-Adresse hinzufügen (2)](images/virtual_mac_03.png){.thumbnail}

### Die Adresse des Gateways bestimmen

Um Ihre virtuellen Maschinen für den Internetzugang zu konfigurieren, müssen Sie das Gateway Ihrer Host-Maschine kennen, d. h. Ihren dedizierten Server. Die Gateway-Adresse besteht aus den ersten drei Bytes der Haupt-IP-Adresse Ihres Servers, das letzte Byte beträgt 254. Wenn zum Beispiel die Haupt-IP-Adresse Ihres Servers ist:

- 123.456.789.012

Ihre Gateway-Adresse ist:

- 123.456.789.254

### Host vorbereiten

> [!primary]
>
Für alle Betriebssysteme und Distributionen müssen Sie Ihre virtuelle Maschine mit der virtuellen MAC-Adresse konfigurieren, die in Ihrem [OVHcloud Kundencenter erstellt wurde](https://www.ovh.com/auth/?action=gotomanager){.external}.
>

#### Proxmox

Nachdem Sie die Virtuelle Maschine erstellt haben und diese noch ausgeschaltet ist:

 1. Wählen Sie die virtuelle Maschine aus.
 2. Öffnen Sie den Bereich "Hardware"
 3. Wählen Sie `Netzwerk-Peripherie`{.action} aus
 4. Klicken Sie auf den Button `Ändern`{.action}.

![zum Netzwerk-Device navigieren](images/proxmox_01.png){.thumbnail}

Fügen Sie anschließend die MAC-Adresse hinzu, die Sie zuvor erstellt haben.

![Netzwerk-Peripherie öffnen](images/proxmox_02.png){.thumbnail}


Sie können nun abhängig vom gewählten Betriebssystem Ihre virtuelle Maschine starten und zu den nächsten Schritten übergehen.

#### VMware ESXi Distribution

Nachdem Sie die virtuelle Maschine erstellt haben, klicken Sie mit der rechten Maustaste auf sie und klicken Sie auf `Einstellungen ändern`{.action}.

![VM Kontextmenü](images/vmware_01.png){.thumbnail}

Erweitern Sie `Netwok Adapter Eins`{.action} und ändern Sie den Wert im Drop-down-Menü `MAC-Adresse`{.action} im "Manuell"-Modus und geben Sie die zuvor erstellte MAC-Adresse VMware ein.

![Die Einstellungen ändern](images/vmware_02.png){.thumbnail}

Sie können nun Ihre virtuelle Maschine starten und abhängig von Ihrem Betriebssystem zu den nächsten Schritten übergehen.

### Die virtuellen Maschinen konfigurieren

#### Debian

Verbinden Sie sich mit dem Systeminterface (oder *shell*) Ihrer virtuellen Maschine. Nachdem Sie eingeloggt sind, öffnen Sie die Netzwerkkonfigurationsdatei der virtuellen Maschine, die sich in `/etc/network/interfaces befindet`.
Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. Denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen:

- Alte Distributionen:

```
auto lo eth0
iface lo loopback
iface eth0 inet static
    address FAILOVER_IP
    netmask 255.255.255.255
    broadcast FAILOVER_IP
    postup route add GATEWAY_IP dev eth0
    postup route add default gw GATEWAY_IP
    vordown route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Aktuelle Distributionen:

```
auto lo eth0
iface lo loopback
iface eth0 inet static
    address FAILOVER_IP
    netmask 255.255.255.255
    broadcast FAILOVER_IP
    postup ipRoute add GATEWAY_IP dev eth0
    postup ipIP route add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Ersetzen Sie auch `eth0`, wenn Ihr System berechenbare Netzwerkschnittstellennamen verwendet. Sie können die Netzwerkinterface-Namen mit folgendem Befehl finden:

```sh
ls /sys/class/net
```

Speichern und schließen Sie die Datei und starten Sie die Virtuelle Maschine neu.

#### Red Hat Betriebssysteme basierend auf Red Hat (CentOS 6, Scientific Linux, ClearOS etc.)

Öffnen Sie ein Terminal auf Ihrer virtuellen Maschine. Wenn Sie eingeloggt sind, öffnen Sie die Netzwerkkonfigurationsdatei der virtuellen Maschine. Dieser befindet sich in `/etc/network/interfaces`. Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. Denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen:

```sh
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Speichern und schließen Sie die Datei.

Öffnen Sie anschließend die Routing-Datei der virtuellen Maschine. Diese befindet sich in ` /etc/sysconfig/network-scripts/route-eth0`. Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. Denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen:

```bash
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Speichern und schließen Sie die Datei und starten Sie die Virtuelle Maschine neu.

#### CentOS 7

> [!primary]
> 
> Bei CentOS 7 variiert der Name der Netzwerkkarte abhängig von den Installationsoptionen. Überprüfen Sie den Namen des Adapters und verwenden Sie diesen, um Ihre virtuelle Maschine zu konfigurieren. Sie können die Netzwerkinterface-Namen mit dem Befehl `ls /sys/class/net finden`.
> 

Öffnen Sie ein Terminal auf Ihrer virtuellen Maschine. Nachdem Sie eingeloggt sind, öffnen Sie die Netzwerkkonfigurationsdatei der virtuellen Maschine, die sich in `/etc/sysconfig/network-scripts/ifcfg-(Name des Interfaces)` befindet. Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. Denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen:

```sh
DEVICE=(interface-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Speichern und schließen Sie die Datei.

Öffnen Sie anschließend die Routing-Datei der virtuellen Maschine, die sich in `/etc/sysconfig/network-scripts/route-(Name des Interface)` befindet. Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. Denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen:

```bash
GATEWAY_IP - 255.255.255.255.255.255 (Benutzername)
NETWORK_GW_VM - 255.255.255.0 (Name des Interface einfügen)
default GATEWAY_IP
```

Speichern und schließen Sie die Datei.

Öffnen Sie anschließend die Routing-Datei der virtuellen Maschine. Diese finden Sie unter `/etc/sysconfig/network/resolv.conf`.

```bash
nameserver 213.186.33.33.99
```

Nachdem Sie die Datei gespeichert und geschlossen haben, starten Sie Ihr Netzwerk oder Ihre virtuelle Maschine neu.

#### OpenSUSE

> [!primary]
> 
> Bei OpenSUSE variiert der Name der Netzwerkkarte abhängig von den Installationsoptionen. Überprüfen Sie den Namen des Adapters und verwenden Sie diesen, um Ihre virtuelle Maschine zu konfigurieren. Sie können die Netzwerkinterface-Namen mit dem Befehl `ls /sys/class/net` finden.
> 

Öffnen Sie ein Terminal auf Ihrer virtuellen Maschine. Wenn Sie eingeloggt sind, öffnen Sie die Netzwerkkonfigurationsdatei der virtuellen Maschine. Diese befindet sich in `/etc/sysconfig/network-scripts/ifcfg-(Name des Interface)`. Wenn die Datei nicht existiert, erstellen Sie diese. Ändern Sie die Datei, um die nachstehende Konfiguration wiederzugeben:

```bash
DEVICE=(interface-name)
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=FAILOVER_IP
NETMASK=255.255.255.255
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
```

Speichern und schließen Sie die Datei.

Öffnen Sie anschließend die Routing-Datei der virtuellen Maschine. Diese befindet sich in `/etc/sysconfig/network-scripts/route-(Name des Interface)`. Wenn die Datei nicht existiert, erstellen Sie diese. Ändern Sie die Datei, um die nachstehende Konfiguration wiederzugeben:

```bash
GATEWAY_IP - 255.255.255.255.255.255 (Benutzername)
NETWORK_GW_VM - 255.255.255.0 (Name des Interface einfügen)
default GATEWAY_IP
```

Öffnen Sie anschließend die Routing-Datei der virtuellen Maschine, die sich in `/etc/sysconfig/network/resolv.conf` befindet. Wenn die Datei nicht existiert, erstellen Sie diese. Ändern Sie die Datei, um die nachstehende Konfiguration wiederzugeben:

```bash
nameserver 213.186.33.99 # OVH DNS Server
```

Speichern und schließen Sie die Datei und starten Sie die Virtuelle Maschine neu.


#### FreeBSD

Öffnen Sie ein Terminal auf Ihrer virtuellen Maschine. Wenn Sie eingeloggt sind, öffnen Sie die Netzwerkkonfigurationsdatei der virtuellen Maschine, die sich im Ordner `/etc/rc.conf` befindet. Ändern Sie die Datei, um die unten stehende Konfiguration wiederzugeben. In diesem Beispiel lautet der Name des Interface "em0". Sie können es bei Bedarf ändern.

```bash
ifconfig_em0="inet FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 - interface em0"
route_net2="default GATEWAY_IP"
```

Speichern und schließen Sie die Datei. Bearbeiten Sie anschließend die Datei `/etc/resolv.conf`. Erstellen Sie es, wenn nötig.

```sh
nameserver 213.186.33.33.99
```

Speichern und schließen Sie die Datei und starten Sie die Virtuelle Maschine neu.

#### Ubuntu 18.04

Stellen Sie zunächst eine SSH-Verbindung zu Ihrer virtuellen Maschine her und öffnen Sie die Netzwerkkonfigurationsdatei in `/etc/netplan`/mit folgendem Befehl. Zu Demonstrationszwecken heißt unsere Datei "50-cloud-init.yaml".

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Wenn die Datei geöffnet ist, ändern Sie sie mit folgendem Code:

```sh
network:
    ethernets:
        (Name des Interface):
            addresses:
                - FAILOVER_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: []
            optional: EU
            Straßen
                - 0.0.0.0/0
                  per: GATEWAY_IP
                  on-link: EU
    Version : 2
```

Wenn die Änderungen vorgenommen wurden, speichern und schließen Sie die Datei und führen Sie folgenden Befehl aus:

```sh
# netplan try
Warning: systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new konfiguration

Änderung will revert in 120 Sekunden
Konfiguration akzeptiert.
```

#### Windows Server 2012/Hyper-V

Bevor Sie Ihre virtuelle Maschine konfigurieren, erstellen Sie einen virtuellen Schalter.

Führen Sie `IPconfig / ALL`{.action} über die Kommandozeile Ihres Dedicated Servers aus und notieren Sie den Namen der Netzwerkkarte mit der Haupt-IP-Adresse des Servers.

Erstellen Sie im Hyper-V Konfigurationspanel einen neuen virtuellen Schalter und legen Sie die Art der Verbindung zu `External`{.action} fest.

Wählen Sie den Adapter mit der IP-Adresse des Servers aus und wählen Sie `Dem Betriebssystem erlauben, diese Netzwerkkarte freizugeben`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Dieser Schritt ist nur einmal für einen Hyper-V Server erforderlich. Für alle virtuellen Maschinen ist ein virtueller Schalter erforderlich, um die virtuellen Netzwerkkarten der virtuellen Maschine mit der physischen Karte des Servers zu verbinden.
> 

Wählen Sie dann die virtuelle Maschine aus, zu der Sie die Failover-IP hinzufügen möchten. Verwenden Sie das Hyper-V Konfigurationspanel, um die Einstellungen der virtuellen Maschine zu ändern, und schließen Sie es ab.

Deployen Sie anschließend die Netzwerkkarte und klicken Sie auf `Advanced Features`{.action}, definieren Sie die MAC-Adresse auf `Static`{.action} und geben Sie die virtuelle MAC-Adresse für die Failover-IP ein. Wenn Sie diese Einstellungen angegeben haben, klicken Sie auf `OK`{.action}, um die Änderungen anzuwenden.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Starten Sie anschließend die Virtuelle Maschine und verbinden Sie sich als Administrator und greifen Sie dann auf `Control Panel`{.action} und `Network and Sharing Center`{.action} zu. Klicken Sie auf den Link `Connections: Ethernet`{.action}, klicken Sie auf den Button `Properties`{.action}, um die Ethernet-Eigenschaften anzuzeigen.

Wählen Sie `Internet Protocol Version 4 (TCP/IPv4)`{.action} aus und klicken Sie dann auf `Properties`{.action}, um die IPv4-Eigenschaften anzuzeigen.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Wählen Sie im Fenster mit den Eigenschaften von IPv4 `Use the following IP address`{.action}. Geben Sie die Failover-IP im IP-Adressfeld an und geben Sie in der Subnetzmaske "255.255.255.255"ein.

Geben Sie anschließend die IP-Adresse des Gateways Ihres Servers im Standard-Gateway ein (zum Beispiel endet die IP Ihres Servers mit 254) und geben Sie im Feld `Preferred DNS Server`{.action} "213.186.33.99" ein.

Klicken Sie auf `OK`{.action} und ignorieren Sie die Warnmeldung für die IP-Adresse des Gateways und die zugeteilte IP-Adresse, die nicht im selben Subnetz sind.

Starten Sie den Server neu. Die virtuelle Maschine muss dann über die Failover-IP mit dem Internet verbunden werden.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Fehlerbehebung

Wenn Sie nicht in der Lage sind, eine Verbindung zwischen Ihrer virtuellen Maschine und dem öffentlichen Netzwerk herzustellen, und Sie Netzwerkprobleme vermuten, starten Sie den Server im Rescue-Modus neu und konfigurieren Sie das Gateway-Interface direkt auf dem Host.

Hierzu geben Sie nach dem Neustart Ihres Servers im Rescue-Modus folgende Befehle ein:

```bash
ip link add name test-bridge link eth0 macvlan
ip-link set-dev test-bridge address MAC_ADDRESS
ipLink set-test-bridge up
IPaddr FAILOVER_IP/32 dev test-bridge
```

Ersetzen Sie "MAC_ADDRESS" durch die im Konfigurationspanel erstellte virtuelle MAC-Adresse und "FAILOVER_IP" durch die tatsächliche Failover-IP.

Danach genügt es, von außen auf Ihre Failover-IP zu pingen. Wenn dies funktioniert, bedeutet dies wahrscheinlich, dass es auf der virtuellen Maschine oder dem Host einen Konfigurationsfehler gibt, der die Failover-IP daran hindert, im normalen Modus zu arbeiten. Wenn die IP dagegen noch nicht funktioniert, öffnen Sie bitte ein Ticket für das Support-Team über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} für eine weitere Untersuchung.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
