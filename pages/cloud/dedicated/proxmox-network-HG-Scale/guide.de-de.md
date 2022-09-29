---
title: 'Netzwerk auf Proxmox VE für die High Grade & SCALE Reihen konfigurieren'
slug: proxmox-network-hg-scale
excerpt: 'Erfahren Sie, wie Sie das Netzwerk auf Proxmox VE für die High Grade & SCALE Reihen einrichten'
section: 'Fortgeschrittene Nutzung'
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 04.10.2021**

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

### Additional IP im gerouteten Modus auf öffentlichen Netzwerkinterfaces

#### Schema der Zielkonfiguration

![route diagram](images/schema_route2022.png){.thumbnail}

#### Erläuterungen

Folgende Schritte sind notwendig:

- Erstellung eines Aggregats
- Erstellung der Bridge
- Forwarding erlauben und Routen hinzufügen

#### Hypervisor konfigurieren

Die gesamte Konfiguration befindet sich in der Datei `etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

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

# private interface 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
# LACP aggregate on public interfaces
# configured in DHCP mode on this example
# Has the server's public IP
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
        bond-miimon 100
	bond-mode 802.3ad
        post-up echo 1 > /proc/sys/net/ipv4/conf/bond0/proxy_arp
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward

#Private

auto vmbr0
# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
iface vmbr0 inet static
	address 192.168.0.1
        netmask 255.255.255.255
	bridge-ports none
	bridge-stp off
	bridge-fd 0
        post-up ip route add A.B.C.D/X dev vmbr0
```

Starten Sie anschließend den Netzwerkdienst neu oder rebooten Sie den Server.

#### Beispielkonfiguration eines VM Clients mit Debian

Inhalt der Datei `etc/network/interfaces`:

```bash
auto lo ens18
iface lo loopback
iface18 inet static
    address IP_FO
    netmask 255.255.255.255
    gateway 192.168.0.1
```

### Additional IP über das vRack einrichen

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

Im Fall des vRack sind die erste, die vorletzte und die letzte Adresse eines bestimmten IP-Blocks immer für die Netzwerkadresse, das Netzwerk-Gateway und den *Broadcast* des Netzwerks reserviert. Das heißt, die erste verwendbare Adresse ist die zweite Adresse des Blocks, wie im Folgenden dargestelltt:

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

# private interface 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
        bond-miimon 100
	bond-mode 802.3ad
        post-up echo 1 > /proc/sys/net/ipv4/conf/bond0/proxy_arp
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward

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

```

Starten Sie anschließend den Netzwerkdienst neu oder rebooten Sie den Server.

#### Beispielkonfiguration eines VM Clients mit Debian

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

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
