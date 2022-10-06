---
title: Network Bridge einrichten
slug: network-bridging
excerpt: Erfahren Sie hier, wie Sie den Internet-Zugang Ihrer virtuellen Maschinen konfigurieren
section: Netzwerk & IP
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 06.10.2022**

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Dies hat keine weiteren Auswirkungen auf dessen Eigenschaften oder die Funktionalität Ihrer Dienstleistungen.
>

## Ziel

Bridged Networking kann verwendet werden, um Ihre virtuellen Maschinen zu konfigurieren. Es einige Anpassungen erforderlich, damit die Netzwerkkonfiguration in unserem Netzwerk funktioniert.

**Diese Anleitung erklärt, wie Sie den Internet-Zugang für Ihre virtuellen Maschinen mittels Network Bridging konfigurieren.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) mit installiertem Hypervisor ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.).
- Sie verfügen über mindestens eine mit dem Server verbundene [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

Die Grundschritte sind unabhängig von dem darunterliegenden System immer gleich:

- Erstellung einer virtuellen MAC-Adresse für eine Additional IP
- Ändern der MAC-Adresse der virtuellen Maschine (VM) auf diese neue Adresse
- Konfuguration von **IP-Adresse**, **Netzmaske**, **Gateway** und **Route zum Gateway** innerhalb der VM

Die Codebeispiele in den folgenden Anweisungen sind durch Ihre eigenen Werte zu ersetzen:

- "SERVER_IP": die Haupt-IP-Adresse Ihres Servers
- "ADDITIONAL_IP": Ihre Additional IP-Adresse
- "GATEWAY_IP": die Adresse des Default-Gateways

### Schritt 1: Eine virtuelle MAC-Adresse zuweisen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, gehen Sie zum Bereich `Bare Metal Cloud`{.action} und öffnen Sie `IP`{.action}.

Das Drop-down-Menü “Dienst” erlaubt es Ihnen, nach Additional IP-Adressen zu filtern.

![manage IPs](images/manageIPs.png){.thumbnail}

Klicken Sie auf `...`{.action} in der betreffenden Zeile um das Kontextmenü zu öffnen und klicken Sie dann auf `Virtuelle MAC-Adresse hinzufügen`{.action}.

![Virtuelle MAC-Adresse hinzufügen (1)](images/virtual_mac_02_2020.png){.thumbnail}

Wählen Sie `ovh`{.action} in der Drop-down-Liste "Typ" aus, wenn Sie nicht VMware ESXi verwenden - andernfalls wählen Sie `vmware`{.action}. Geben Sie einen Namen in das Feld "Name der virtuellen Maschine" ein und klicken Sie anschließend auf `Bestätigen`{.action}.

![Virtuelle MAC-Adresse hinzufügen (2)](images/addvmac2.png){.thumbnail}

### Schritt 2: Die Adresse des Gateways bestimmen

Um Ihre virtuellen Maschinen für den Internetzugang zu konfigurieren, müssen Sie das Gateway Ihrer Host-Maschine kennen, d. h. Ihres dedizierten Servers. Die Gateway-Adresse besteht aus den ersten drei Oktetten der Haupt-IP-Adresse Ihres Servers und 254 als das letzte Oktett. Angenommen, die Haupt-IP-Adresse Ihres Servers wäre:

- 169.254.10.020

Ihre Gateway-Adresse wäre dann:

- 169.254.10.**254**

### Schritt 3: Host vorbereiten

> [!primary]
>
Für alle Betriebssysteme und Distributionen **muss**** Ihre virtuelle Maschine mit der virtuellen MAC-Adresse konfiguriert werden, die in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) hinterlegt wurde.
>

#### Proxmox

Nach Erstellung der VM und während diese noch ausgeschaltet ist:

 1\. Wählen Sie die VM aus.<br>
 2\. Öffnen Sie den Bereich `Hardware`.<br>
 3\. Wählen Sie `Network Device` aus.<br>
 4\. Klicken Sie auf den Button `Edit`.<br>

![zum Netzwerk-Device navigieren](images/proxmox_01.png){.thumbnail}

Fügen Sie anschließend die zuvor erzeugte vMAC-Adresse hinzu.

![Netzwerk-Peripherie öffnen](images/proxmox_02.png){.thumbnail}

Sie können nun Ihre VM starten und zu den nächsten Schritten, abhängig vom installierten Betriebssystem, übergehen.

#### VMware ESXi

Nach Erstellung der VM und während diese noch ausgeschaltet ist klicken Sie mit der rechten Maustaste darauf und klicken dann auf `Edit settings`.

![VM Kontextmenü](images/vmware_01.png){.thumbnail}

Erweitern Sie `Netwok Adapter 1`, ändern Sie den Wert im Drop-down-Menü `MAC Address` zu `Manual` und geben Sie die die zuvor erzeugte vMAC-Adresse ein.

![Die Einstellungen ändern](images/vmware_02.png){.thumbnail}

Sie können nun Ihre VM starten und zu den nächsten Schritten, abhängig vom installierten Betriebssystem, übergehen.

### Die virtuellen Maschinen konfigurieren

#### Debian

Verbinden Sie sich mit dem Interface (*shell*) Ihrer VM. Öffnen Sie die Netzwerkkonfigurationsdatei, die sich in `/etc/network/interfaces` befindet.
Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.)

- Ältere Distributionen:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Aktuelle Distributionen:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up ip route add GATEWAY_IP dev eth0
    post-up ip route add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Ersetzen Sie auch `eth0`, wenn Ihr System *Predictible Network Interface Names* verwendet. Sie können die Netzwerkinterface-Namen mit folgendem Befehl finden:

```bash
ls /sys/class/net
```

Speichern und schließen Sie die Datei und starten Sie den Netzwerkdienst oder die VM neu.

#### Red Hat Betriebssysteme und darauf basierende (CentOS 6, Scientific Linux, ClearOS, etc.)

Öffnen Sie ein Terminal auf Ihrer VM. Öffnen Sie die Netzwerkkonfigurationsdatei, die sich in `/etc/network/interfaces` befindet. Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.)

```console
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Speichern und schließen Sie die Datei.<br>
Öffnen Sie anschließend die Routing-Datei der VM, in `/etc/sysconfig/network-scripts/route-eth0`. Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.)

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Speichern und schließen Sie die Datei und starten Sie die VM neu.

#### CentOS 7

> [!primary]
> 
> Bei CentOS 7 variiert der Name der Netzwerkkarte abhängig von den Installationsoptionen. Überprüfen Sie den Namen des Adapters und verwenden Sie diesen, um Ihre VM zu konfigurieren. Sie können die Netzwerkinterface-Namen mit dem Befehl `ls /sys/class/net` herausfinden.
> 

Öffnen Sie ein Terminal auf Ihrer VM. Öffnen Sie die Netzwerkkonfigurationsdatei, die sich in `/etc/sysconfig/network-scripts/ifcfg-(Interface_Name)` befindet. Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.)

```console
DEVICE=(interface-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Speichern und schließen Sie die Datei.<br>
Öffnen Sie anschließend die Routing-Datei der VM, die sich in `/etc/sysconfig/network-scripts/route-(Interface_Name)` befindet. Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.)

```console
GATEWAY_IP - 169.254.10.254 (interface-name)
NETWORK_GW_VM - 255.255.255.0 (interface-name)
default GATEWAY_IP
```

Speichern und schließen Sie die Datei.<br>
Öffnen Sie anschließend die DNS-Konfigurationsdatei der VM, die sich unter `/etc/sysconfig/network/resolv.conf` befindet und fügen Sie die folgende Zeile ein:

```console
nameserver 213.186.33.99
```

Speichern und schließen Sie die Datei und starten Sie den Netzwerkdienst oder die VM neu.

#### FreeBSD

Öffnen Sie ein Terminal auf Ihrer VM. Öffnen Sie die Netzwerkkonfigurationsdatei, die sich in `/etc/rc.conf` befindet. Bearbeiten Sie die Datei, um die unten stehende Konfiguration wiederzugeben. (Denken Sie daran, Ihre eigenen Werte einzufügen.) In diesem Beispiel lautet der Name des Interface "em0". Ersetzen Sie diesen Wert nötigenfalls.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Speichern und schließen Sie die Datei.<br>
Öffnen/erstellen Sie anschließend die Datei `/etc/resolv.conf` und fügen Sie die folgende Zeile ein:

```console
nameserver 213.186.33.99
```

Speichern und schließen Sie die Datei und starten Sie die VM neu.

#### Ubuntu 18.04

Öffnen Sie ein Terminal auf Ihrer VM. Öffnen Sie die Netzwerkkonfigurationsdatei, die sich in `/etc/netplan/` befindet mit folgendem Befehl. Zu Demonstrationszwecken heißt unsere Datei "50-cloud-init.yaml".

```bash
# nano /etc/netplan/50-cloud-init.yaml
```

Wenn die Datei zum Bearbeiten geöffnet ist, passen Sie die folgenden Zeilen an:

```yaml
network:
    ethernets:
        (interface-name):
            addresses:
                - ADDITIONAL_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: []
            optional: true
            routes:
                - to: 0.0.0.0/0
                  via: GATEWAY_IP
                  on-link: true
    version: 2
```

Speichern und schließen Sie die Datei und führen Sie folgenden Befehl aus:

```bash
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new configuration

Changes will revert in 120 seconds
Configuration accepted.
```

#### Windows Server 2012/Hyper-V

Bevor Sie Ihre virtuelle Maschine konfigurieren, erstellen Sie einen virtuellen Switch.

Führen Sie `ipconfig /all`{.action} über die Kommandozeile Ihres Dedicated Servers aus und notieren Sie den Namen der Netzwerkkarte mit der Haupt-IP-Adresse des Servers.

Erstellen Sie im Hyper-V Manager einen neuen virtuellen Switch und legen Sie die Art der Verbindung als `Extern`{.action} fest.

Wählen Sie den Adapter mit der IP-Adresse des Servers aus und haken Sie die Option `Dem Betriebssystem erlauben, diese Netzwerkkarte freizugeben`{.action} an.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Dieser Schritt ist nur einmal für einen Hyper-V Server erforderlich. Für alle VMs ist ein **virtueller Switch** erforderlich, um die **virtuellen Netzwerkkarten** der VM mit dem **physischen Adapter** des Servers zu verbinden.
> 

Wählen Sie nun die VM aus, zu der Sie die Additional IP hinzufügen möchten. Verwenden Sie den Hyper-V Manager, um die Einstellungen der virtuellen Maschine zu ändern, und fahren Sie sie herunter.

Erweitern Sie den Netzwerkadapter im linken Menü und klicken Sie auf `Erweiterte Einstellungen`{.action}. Ändern Sie die MAC-Adresse auf `Statisch`{.action} und geben Sie die virtuelle MAC-Adresse für die Additional IP ein. Klicken Sie anschließend auf `OK`{.action}, um die Änderungen anzuwenden.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Starten Sie anschließend die VM und loggen Sie sich als Administrator ein. Greifen Sie auf das `Netzwerk- und Freigabecenter`{.action} der Systemsteuerung zu und klicken Sie auf `Ethernet`{.action}. Klicken Sie auf den Button `Eigenschaften`{.action}.

Wählen Sie `Internet Protocol Version 4 (TCP/IPv4)`{.action} aus und klicken Sie dann auf `Eigenschaften`{.action}.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Wählen Sie im Fenster mit den IPv4-Eigenschaften `Die folgende IP-Adresse verwenden`{.action}. Tragen Sie die Additional IP im IP-Adressfeld ein und geben Sie als Subnetzmaske "255.255.255.255" ein.

Geben Sie anschließend die IP-Adresse des Gateways Ihres Servers im zugehörigen Feld ein und tragen Sie im Feld `Bevorzugter DNS Server`{.action} "213.186.33.99" ein.

Klicken Sie auf `OK`{.action} und ignorieren Sie die nachfolgende Warnmeldung.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

Nach Neustart des Servers sollte die VM über die Additional IP mit dem Internet verbunden sein.

#### Troubleshooting

Wenn Sie nicht in der Lage sind, eine Verbindung zwischen Ihrer VM und dem öffentlichen Netzwerk herzustellen, und Sie Netzwerkprobleme vermuten, starten Sie den Server im Rescue-Modus neu und konfigurieren Sie das Bridging-Netzwerk direkt auf dem Host.

Hierzu geben Sie die folgenden Befehle ein, wobei Sie die Parameter "MAC_ADDRESS" mit der im Kundencenter erzeugten vMAC ersetzen und "ADDITIONAL_IP" mit Ihrer Additional IP:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Pingen Sie nun Ihre Additional IP von einem externen Gerät aus an. 

- Wenn der Host antwortet, bedeutet das wahrscheinlich, dass es auf der virtuellen Maschine oder dem Host einen Konfigurationsfehler gibt, der die Additional IP daran hindert, im normalen Betrieb zu funktionieren.

- Wenn die IP-Adresse immer noch nicht reagiert, erstellen Sie ein Ticket in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), um Ihre Testergebnisse an unsere Support-Teams weiterzuleiten. 


## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
