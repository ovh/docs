---
title: 'Netzwerk auf Proxmox VE für die High Grade & SCALE Reihen konfigurieren'
slug: proxmox-network-hg-scale
excerpt: 'Erfahren Sie, wie Sie das Netzwerk auf Proxmox VE für die High Grade & SCALE Reihen einrichten'
section: 'Fortgeschrittene Nutzung'
order: 5
updated: 2023-05-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 28.10.2022**

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Die Namensänderung hat keine Auswirkungen auf dessen technische Funktionen.
>

## Ziel

Bei den High Grade & SCALE Server-Reihen ist der Betrieb von Additional IPs im *Bridged*-Modus (über virtuelle MAC-Adressen) nicht möglich. Es ist deshalb notwendig, die Additional IPs im *Routed*-Modus oder über das vRack zu konfigurieren.

**Diese Anleitung erklärt, wie Sie das Netzwerk mit Proxmox VE konfigurieren.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie verfügen über eine [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/)-Adresse oder einen Additional IP-Block.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
>
> Im OVHcloud Kundencenter dürfen keine virtuellen MACs für Additional IPs angelegt werden.
>

## In der praktischen Anwendung

> [!primary]
>
> Bei diesen Serverreihen gibt es 4 Netzwerkkarten: jeweils zwei für das öffentliche und lokale Netzwerk. Um die gesamte Bandbreite zu nutzen, müssen Aggregate erstellt werden.
>

### Additional IPs im gerouteten Modus für öffentliche Netzwerkinterfaces

Diese Konfiguration bietet eine bessere Performance im Hinblick auf die Bandbreite, ist aber weniger flexibel. Bei dieser Konfiguration müssen die Additional IP-Adressen mit einem dedizierten Server verbunden werden. Wenn Sie mehrere Proxmox Virtualisierungsserver haben und eine VM von einem Server auf einen anderen migrieren möchten, müssen Sie auch die Additional IP-Adresse über das OVHcloud Kundencenter oder die OVHcloud API auf den Zielserver migrieren. Sie können diesen Schritt automatisieren, indem Sie ein Skript schreiben, das die OVHcloud API verwendet.  

#### Schema der Zielkonfiguration

![Schema](images/schema_route2022.png){.thumbnail}

#### Erläuterungen

Proxmox basiert auf einer Debian Distribution. In dieser Anleitung wird die Netzwerkkonfiguration über SSH und nicht über das Webinterface geändert.

Folgende Schritte sind notwendig:

- Zugriff über SSH (root) auf den Server
- Erstellung des Aggregats (Linux bond)
- Erstellung der Bridge
- Forwarding erlauben
- proxy_arp erlauben
- Routen hinzufügen

#### Hypervisor konfigurieren

Verbinden Sie sich via SSH mit dem Proxmox Server:

```bash
ssh PUB_IP_DEDICATED_SERVER
# Sie können auch die im vRack konfigurierte private IP verwenden
```

Die gesamte Konfiguration befindet sich in der Datei `etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  # Enable proxy-arp only for public bond
  up echo "1" > /proc/sys/net/ipv4/conf/bond0/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```

Starten Sie anschließend den Netzwerkdienst neu oder rebooten Sie den Server.

```bash
systemctl restart networking.service
```

Wenn Sie `networking.service` neu starten, können sich die Bridges (z.B. vmbr0) im inaktiven Zustand befinden. Das liegt daran, dass Proxmox jede VM von den Bridges abkoppelt und nicht wieder verbindet. Um die Wiederanbindung der VMs an die Bridges zu erzwingen, können Sie die VMs neu starten.

#### Beispielkonfiguration einer Client VM in Debian

Inhalt der Datei `etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Test und Validierung

Jetzt sollten Ihre virtuellen Maschinen in der Lage sein, öffentliche Dienste über Internet zu erreichen. Darüber hinaus können Ihre virtuellen Maschinen auch direkt über die Additional IP über Internet erreicht werden. Die verfügbare Bandbreite entspricht der auf den öffentlichen Interfaces Ihres Servers verfügbaren Bandbreite und beeinträchtigt nicht die für das vRack verwendeten privaten Interfaces. Diese Bandbreite wird mit anderen virtuellen Maschinen auf demselben Host geteilt, die eine Additional IP-Adresse nutzen sowie dem Proxmox-Host für öffentlichen Zugang.

Prüfen Sie Ihre öffentliche IP von der VM aus:

```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Additional IP über vRack

Diese Konfiguration ist flexibler. Sie verbinden die Additional IP nicht mit einem Server, sondern mit dem vRack. Das bedeutet, dass eine virtuelle Maschine, die eine Additional IP-Adresse verwenden möchte, diese direkt ohne zusätzliche Konfiguration und unabhängig ihrem Host anfordern kann.

> [!warning]
>
> Diese Konfiguration ist auf 600 Mbit/s ausgehenden Traffic begrenzt.
>

#### Voraussetzungen

- Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Kunden-Account. Der IP-Adressblock muss auf das vRack zeigen.
- Sie haben Ihren gewünschten privaten IP-Adressbereich festgelegt.
- Sie verfügen über einen mit vRack kompatiblen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben ein [vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account eingerichtet.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

#### Schema der Zielkonfiguration

![vRack Schema](images/schema_vrack2022.png){.thumbnail}

#### Erläuterungen

Folgende Schritte sind notwendig:

- Erstellung eines Aggregats
- Erstellung der mit dem Aggregat verbundenen Bridge

Fügen Sie Ihren öffentlichen IP-Adressblock zum vRack hinzu. Gehen Sie hierzu in den Bereich `Bare Metal Cloud`{.action} in Ihrem OVHcloud Kundencenter und öffnen Sie `vRack`{.action}.

Wählen Sie in der Liste Ihr vRack aus, um die Liste der verfügbaren Dienstleistungen anzuzeigen. Klicken Sie auf den öffentlichen IP-Adressblock, den Sie zum vRack hinzufügen möchten, und klicken Sie dann auf den Button `Hinzufügen`{.action}.

#### Eine verwendbare IP-Adresse konfigurieren

Im Fall des vRack sind die erste, die vorletzte und die letzte Adresse eines bestimmten IP-Blocks immer für die Netzwerkadresse, das Netzwerk-Gateway und den *Broadcast* des Netzwerks reserviert. Das heißt, die erste verwendbare Adresse ist die zweite Adresse des Blocks, wie im Folgenden dargestellt:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Um die erste verwendbare IP-Adresse zu konfigurieren, bearbeiten Sie die Netzwerkkonfigurationsdatei wie im Folgenden beschrieben. In diesem Beispiel ist die Subnetzmaske **255.255.255.240**.

> [!primary]
>
> Die in diesem Beispiel verwendete Subnetzmaske ist passend zum IP-Block. Ihre Subnetzmaske kann je nach Größe Ihres Blocks variieren. Wenn Sie Ihren IP-Block bestellen, erhalten Sie eine E-Mail mit der zu verwendenden Subnetzmaske.
>

#### Hypervisor konfigurieren

Die gesamte Konfiguration befindet sich in der Datei `etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

Hier ist die Konfiguration von `bond1` und `vmbr1` wichtig:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

Starten Sie anschließend den Netzwerkdienst neu oder rebooten Sie den Server.

#### Beispielkonfiguration einer Client VM in Debian

Inhalt der Datei `etc/network/interfaces`:

```bash
auto lo ens18
iface lo loopback
iface18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.