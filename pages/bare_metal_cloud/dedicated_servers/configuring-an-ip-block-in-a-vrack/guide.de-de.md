---
title: Dedicated Server - IP-Block in einem vRack konfigurieren
excerpt: Konfigurieren Sie einen öffentlichen IP-Adressblock für die Nutzung mit dem privaten OVHcloud vRack-Netzwerk auf Dedicated Servern.
updated: 2026-03-13
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Neben der privaten IP-Adressierung ermöglicht das [vRack](/links/network/vrack) auch die Weiterleitung von öffentlichem IP-Verkehr über den vRack-Port Ihres Servers mithilfe eines öffentlichen IP-Adressblocks.

**In dieser Anleitung erfahren Sie, wie Sie einen Block öffentlicher IP-Adressen für die Verwendung mit dem vRack konfigurieren.**

> [!primary]
>
> Das vRack unterstützt sowohl IPv4- als auch IPv6-öffentliches Routing mit Additional IP-Adressblöcken. Die Anleitung zur Konfiguration von IPv6-Blöcken finden Sie hier: "[Konfiguration eines IPv6-Blocks in einem vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> Dieser Artikel befasst sich mit der Konfiguration von Additional IP über ein vRack-Netzwerk. Wenn Sie Anleitungen zur Konfiguration von Additional IP zusammen mit der primären IP (auf der öffentlichen Netzwerkschnittstelle) suchen, lesen Sie die folgenden Artikel:
>
> - IPv4:
>     - [Konfiguration von IP-Aliasing auf dedizierten Servern](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Konfiguration von IP-Aliasing auf einem VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Konfiguration von IPv6 auf dedizierten Servern](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Konfiguration von IPv6 auf einem VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Konfiguration von IPv6 auf einer Public Cloud Instanz](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Voraussetzungen

- Sie verfügen über einen öffentlichen IP-Adressblock in Ihrem Account mit mindestens vier Adressen.
- Sie haben Ihren gewünschten privaten IP-Adressbereich festgelegt.
- Sie verfügen über einen [vRack-kompatiblen Server](/links/bare-metal/bare-metal).
- Sie haben den [vRack](/links/network/vrack)-Dienst in Ihrem Account aktiviert.

<!-- CP-NAV-START:network-vrack -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [vRack](/links/control-panel/network-vrack)
- **Navigationspfad:** `Network`{.action} > `Privates vRack Netzwerk`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Diese Funktion kann auf Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) nicht verfügbar oder eingeschränkt sein.
>
> Weitere Informationen finden Sie auf unserer [Vergleichsseite](/links/bare-metal/eco-compare).

## In der praktischen Anwendung

> [!primary]
>
> Als Beispiel verwenden wir einen IP-Block von 46.105.135.96/28 und eth1 für die sekundäre Netzwerkschnittstelle, die dem vRack gewidmet ist.
>
> Als Beispiel befindet sich die Netzwerkkonfigurationsdatei, auf die wir verweisen, unter `/etc/network/interfaces`. Die entsprechende Datei auf Ihrem Server kann sich je nach Betriebssystem an einem anderen Ort befinden. Der Dateiinhalt kann ebenfalls abweichen. Bei Schwierigkeiten konsultieren Sie bitte die offizielle Dokumentation Ihrer Distribution.

### Den IP-Block zum vRack hinzufügen

> [!warning]
>
> Sobald ein IP-Block zum vRack hinzugefügt wird, ist er nicht mehr mit einem physischen Server verbunden.
>
> Dieses Setup ermöglicht es Ihnen, IPs desselben Blocks auf mehreren Servern zu konfigurieren, vorausgesetzt, dass sich alle Server im selben vRack wie der IP-Block befinden. Der IP-Block muss mindestens 2 nutzbare IPs oder mehr haben, damit dies möglich ist.
>

Wählen Sie Ihr vRack aus der Liste aus, um die Liste der berechtigten Dienste anzuzeigen. Klicken Sie auf den IP-Block, den Sie zum vRack hinzufügen möchten, und klicken Sie auf die Schaltfläche `Hinzufügen`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Öffentliche IP-Bandbreite im vRack verwalten

Standardmäßig profitieren Additional IP-Blöcke, die über ein vRack geroutet werden, von einer Standard-Öffentlichbandbreite von 5 Gbps in Europa/Kanada/USA und 100 Mbps in APAC-Regionen. Eine detaillierte Übersicht der Verfügbarkeit finden Sie in den öffentlichen Routing-Optionen auf unserer [vRack-Produktseite](/links/network/vrack).

Mit wachsenden Infrastrukturanforderungen benötigen Nutzer möglicherweise eine größere Bandbreite zur Unterstützung von hochfrequentierten öffentlich ausgerichteten Diensten, für die OVHcloud kostenpflichtige Bandbreitenoptionen bereitstellt. Es ist wichtig zu beachten, dass Bandbreitenoptionen **pro vRack und pro Region** angewendet werden. Da Additional IP-Adressen an eine Region gebunden sind, wirkt sich jede Bandbreitenänderung auf alle IP-Adressen (sowohl IPv4 als auch IPv6) aus, die zum spezifischen vRack in dieser bestimmten Region geroutet werden.

/// details | Während des Additional IP-Bestellvorgangs

#### Öffentliche Bandbreite bei einer Additional IP-Bestellung auswählen

Die Standard-Öffentlichbandbreite kann geändert werden, wenn Sie einen neuen Additional IP-Block mit einem vRack-Netzwerk als Backend bestellen.

So bestellen Sie einen neuen Additional IP-Block:

- Öffnen Sie den Bereich `Network`{.action} in der linken Seitenleiste.
- Wählen Sie `Öffentliche IP-Adressen`{.action}.
- Klicken Sie auf die Schaltfläche `IPs bestellen`{.action} nahe der Oberseite der Seite.
- Wählen Sie die IP-Version und dann das vRack aus, an das Sie Ihre Additional IP anhängen möchten.
- Wählen Sie die Region, in der Ihre Additional IP sein soll.
- Wählen Sie die öffentliche Bandbreite, die Sie für Ihr vRack in dieser spezifischen Region anwenden möchten.
- Füllen Sie die übrigen Optionen nach Bedarf aus und führen Sie dann Ihre Bestellung durch.

///

/// details | Von der vRack-Verwaltungsseite

#### Öffentliche vRack-Bandbreite auf der Verwaltungsseite ändern

Für Additional IP-Blöcke, die bereits an ein vRack angehängt sind, kann die Bandbreite direkt über die Dienstkonfigurationsseite verwaltet werden.

So greifen Sie auf die Verwaltungsoberfläche zu:

- Klicken Sie in der Spalte "Public IP & bandwidth" auf die Schaltfläche `Verwalten`{.action} für das entsprechende vRack.

Die Verwaltungsseite ist in zwei Tabs unterteilt:

- **All attached services**: Derzeit leitet es zur klassischen vRack-Verwaltungsseite weiter. In Kürze werden dort alle Produkte (Server, Cloud-Projekte usw.), die derzeit mit dem vRack verknüpft sind, auf neue Weise aufgelistet.
- **Public IP Routing**: Verwaltet die öffentlichen IP-Routing-Optionen Ihres vRack, einschließlich der öffentlichen Bandbreite.

So ändern Sie die öffentliche Bandbreite:

- Navigieren Sie zum Tab `Public IP Routing`{.action}.
- Die Oberfläche zeigt individuelle Verwaltungsfenster für jede Region (z. B. `eu-west-par`) an, die mit dem vRack verknüpft ist, und listet alle IP-Adressen auf, die mit dieser spezifischen Region verbunden sind.
- Klicken Sie im Fenster für die betreffende Region auf die Schaltfläche `Bandbreite ändern`{.action}.
- Wählen Sie die gewünschte Bandbreitenoption im Panel, das auf der rechten Seite erscheint, und klicken Sie dann auf `Zur Bestellung`{.action}, um die Bestellung zu bestätigen.
- Nach der Zahlung sollte die ausgewählte Bandbreite nach einigen Minuten für Ihr vRack in der gewählten Region verfügbar sein.

> [!primary]
>
> Die Gebühren für den ersten Monat werden anteilig auf der Grundlage der verbleibenden Tage berechnet, wobei der volle Tarif im nächsten Abrechnungszyklus gilt.
>

Das ausgewählte Bandbreiten-Upgrade gilt für alle IP-Adressen in dieser Region für das gewählte vRack.

///

### Eine nutzbare IP-Adresse konfigurieren

Für vRack-Zwecke sind die erste, vorletzte und letzte Adresse in einem IP-Block immer für die Netzwerkadresse, das Netzwerk-Gateway und den Netzwerk-Broadcast reserviert. Das bedeutet, dass die erste nutzbare Adresse die zweite Adresse im Block ist, wie unten gezeigt:

```sh
46.105.135.96   # Reserviert: Netzwerkadresse
46.105.135.97   # Erste nutzbare IP
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
46.105.135.109  # Letzte nutzbare IP
46.105.135.110  # Reserviert: Netzwerk-Gateway
46.105.135.111  # Reserviert: Netzwerk-Broadcast
```

Um die erste nutzbare IP-Adresse zu konfigurieren, müssen wir die Netzwerkkonfigurationsdatei bearbeiten, wie unten gezeigt. In diesem Beispiel müssen wir eine Subnetzmaske von *255.255.255.240* verwenden.

> [!primary]
>
> Die in unserem Beispiel verwendete Subnetzmaske ist für unseren IP-Block geeignet. Ihre Subnetzmaske kann je nach Größe Ihres Blocks abweichen. Beim Kauf Ihres IP-Blocks erhalten Sie eine E-Mail, die Ihnen mitteilt, welche Subnetzmaske Sie verwenden müssen.
>

### Debian/Ubuntu

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```
### Eine neue IP-Routing-Tabelle erstellen

Zunächst müssen wir iproute2 herunterladen und installieren, ein Paket, das es uns ermöglicht, das IP-Routing auf dem Server manuell zu konfigurieren.

Stellen Sie eine SSH-Verbindung zu Ihrem Server her und führen Sie den folgenden Befehl über die Befehlszeile aus. Damit wird iproute2 heruntergeladen und installiert.

```sh
# apt-get install iproute2
```

Als nächstes müssen wir eine neue IP-Route für das vRack erstellen. Wir fügen eine neue Verkehrsregel hinzu, indem wir die Datei wie folgt ergänzen:

```sh
/etc/iproute2/rt_tables

#
# reservierte Werte
#
255	local
254	main
253	default
0	unspec
#
# lokal
#
#1	inr.ruhep
1 vrack
```

### Die Netzwerkkonfigurationsdatei anpassen

> [!primary]
>
> Als Beispiel befindet sich die Netzwerkkonfigurationsdatei, auf die wir verweisen, unter /etc/network/interfaces. Die entsprechende Datei auf Ihrem Server kann sich je nach Betriebssystem an einem anderen Ort befinden.
>

Schließlich müssen wir die Netzwerkkonfigurationsdatei anpassen, um die neue Verkehrsregel zu berücksichtigen und den vRack-Verkehr über die Netzwerk-Gateway-Adresse **46.105.135.110** zu routen.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Starten Sie nun Ihren Server neu, um die Änderungen zu übernehmen, oder aktivieren Sie alternativ einfach die neue Netzwerkschnittstelle:

```sh
ip link set eth1 up
```

### CentOS 6/7

#### Die Datei für die sekundäre Netzwerkschnittstelle erstellen

Zunächst können wir die Konfiguration der primären Netzwerkschnittstelle kopieren und nach unseren Bedürfnissen anpassen:

```sh
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
```
Dann öffnen wir die neue Datei:

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
```
Und wir definieren die IP-Einstellungen:
```sh
# Automatisch beim Instanzstart durch cloud-init erstellt, nicht bearbeiten.
#
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.240
IPADDR=46.105.135.97
ARP=yes
```

### Eine neue IP-Routing-Tabelle erstellen

Als nächstes müssen wir eine neue IP-Route für das vRack erstellen. Wir fügen eine neue Verkehrsregel hinzu, indem wir die Datei wie folgt ergänzen:

```sh
/etc/iproute2/rt_tables

#
# reservierte Werte
#
255	local
254	main
253	default
0	unspec
#
# lokal
#
#1	inr.ruhep
1 vrack
```

Als nächstes erstellen wir die Datei, die zum Anwenden der neuen Regeln benötigt wird:
```sh
nano /etc/sysconfig/network-scripts/rule-eth1
```

Und fügen den folgenden Inhalt ein (denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen):

```sh
from 46.105.135.96/28 table vrack
to 46.105.135.96/28 table vrack
```

### Die Netzwerkkonfigurationsdatei anpassen

Schließlich müssen wir die Netzwerkkonfigurationsdatei anpassen, um die neue Verkehrsregel zu berücksichtigen und den vRack-Verkehr über die Netzwerk-Gateway-Adresse **46.105.135.110** zu routen.

Dazu bearbeiten wir die folgende Datei, um persistente und statische Routen hinzuzufügen:

```sh
nano /etc/sysconfig/network-scripts/route-eth1
```

Fügen Sie den folgenden Inhalt ein (denken Sie daran, unsere Variablen durch Ihre eigenen Werte zu ersetzen):

```sh
46.105.135.96/28 dev eth1 table vrack
default via 46.105.135.110 dev eth1 table vrack
```

Starten Sie nun Ihren Server neu, um die Änderungen zu übernehmen, oder aktivieren Sie alternativ einfach die neue Netzwerkschnittstelle:

```sh
ip link set eth1 up
```

### Windows Server 2012/2016

#### Schritt 1: Die sekundäre Netzwerkschnittstelle prüfen und konfigurieren

Zunächst müssen wir auf die Informationen der neuen Netzwerkschnittstelle zugreifen:

![die zweite Netzwerkschnittstelle prüfen](images/win-ip-vrack-1.png){.thumbnail}

Anschließend müssen wir die Eigenschaften prüfen:

![Netzwerkadapter-Eigenschaften für das vRack-Interface](images/win-ip-vrack-2.png){.thumbnail}

![IPv4-Eigenschaften des vRack-Netzwerkadapters](images/win-ip-vrack-3.png){.thumbnail}

#### Schritt 2: IP-Konfiguration

Wir müssen die Option ```Use the following IP address``` auswählen:

![Option "Folgende IP-Adresse verwenden" auswählen](images/win-ip-vrack-4.png){.thumbnail}

Und wir können schließlich die IP-Informationen festlegen:

![IP-Adresse und Subnetzmaske für vRack ausgefüllt](images/win-ip-vrack-5b.png){.thumbnail}

#### Schritt 3: Neustart der Netzwerkschnittstelle

Zunächst deaktivieren wir die Schnittstelle:

![Netzwerk deaktivieren](images/win-ip-vrack-6.png){.thumbnail}

Dann aktivieren wir sie wieder:

![Netzwerk aktivieren](images/win-ip-vrack-7.png){.thumbnail}

### Fehlersuche

Wenn Sie keine Verbindung von Ihrer VM oder Ihrem Server zum privaten Netzwerk herstellen können, senden Sie uns bitte ein Ticket über Ihr Kundencenter mit folgenden Angaben:

- Quell-IP und Ziel-IP
- Ifconfig -a oder ipconfig /all von beiden Servern oder VMs (Setup der Netzwerkkonfigurationsschnittstelle)
- Ping in beide Richtungen
- Arp -a
- Routing-Tabelle

Bitte fügen Sie die Ergebnisse der oben genannten Punkte in Ihr Ticket ein.

## Weiterführende Informationen

[Konfiguration des vRack auf Ihren dedizierten Servern](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Mehrere VLANs in einem vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Das vRack zwischen der Public Cloud und einem dedizierten Server konfigurieren](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

- [Dedicated Server - IP-Block-Ankündigung im vRack ändern](/pages/bare_metal_cloud/dedicated_servers/vrack_change_zone_announce)

Treten Sie unserer [User Community](/links/community) bei.
