---
title: "Einen IPv6-Block im vRack auf einem Dedicated Server konfigurieren"
excerpt: "Konfigurieren Sie einen öffentlichen IPv6-Adressblock für das private OVHcloud vRack-Netzwerk auf Ihrem Dedicated Server."
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

Das vRack-Netzwerk dient als globales privates Netzwerk, das verschiedene OVHcloud-Produkte verbindet und die Erstellung anspruchsvoller Netzwerklösungen ermöglicht. Über die Erleichterung privater Verbindungen hinaus unterstützt es auch das Routing öffentlicher IP-Adressen.

**Diese Anleitung beschreibt die Konfiguration von Additional-IPv6-Adressblöcken innerhalb eines vRack-Netzwerks.**

> [!primary]
>
> Das vRack unterstützt sowohl IPv4- als auch IPv6-öffentliches Routing mit Additional-IP-Adressblöcken. Die Anleitung zur Konfiguration von IPv4-Blöcken finden Sie hier: [Einen IP-Block im vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> Dieser Artikel behandelt die Additional-IP-Konfiguration über ein vRack-Netzwerk. Wenn Sie Informationen zur Additional-IP-Konfiguration zusammen mit einer primären IP (auf dem öffentlichen Netzwerkinterface) suchen, lesen Sie die folgenden Anleitungen:
>
> - IPv4:
>     - [IP-Aliasing auf Dedicated Servern konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [IP-Aliasing auf einem VPS konfigurieren](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
> - IPv6:
>     - [IPv6 auf Dedicated Servern konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [IPv6 auf einem VPS konfigurieren](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [IPv6 auf einer Public-Cloud-Instanz konfigurieren](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Einleitung

IPv6 revolutioniert die Vernetzung innerhalb des OVHcloud vRack, indem es die Einschränkungen von IPv4 überwindet und Funktionen für das moderne Internet einführt. Die Einführung ist eine direkte Reaktion auf den Bedarf an umfangreicheren, sichereren und anspruchsvolleren Internet-Architekturen. Dies sind die wichtigsten Vorteile der IPv6-Integration mit dem vRack:

- **Flexibilität für anspruchsvolle Netzwerke**: IPv6 vergrößert den Adressraum erheblich und bietet die nötige Flexibilität zum Skalieren der Infrastruktur, zur Verwaltung von Failover-Szenarien und zur Unterstützung größerer Lösungen. Dadurch können Netzwerke ohne die Adressierungsbeschränkungen von IPv4 wachsen und sich anpassen.

- **Hierarchisches Routing und Segmentierung**: IPv6 ermöglicht effizientes hierarchisches Routing und logische Infrastruktursegmentierung. Dies verbessert die Verwaltbarkeit und Sicherheit des Netzwerks - ideal für den Wiederverkauf von VMs mit dedizierten Subnetzen oder die Aufteilung der Infrastruktur in distinct Segmente.

- **Niedrige Latenz**: Native End-to-End-IPv6-Konnektivität kann als Enabler für latenzempfindliche Dienste wie Media-Streaming dienen, da viele neuere Provider-Netzwerke nativ mit IPv6 aufgebaut sind. In solchen Netzwerken bringt die Nutzung von IPv4-Diensten zusätzliche Latenz (und Kosten) mit sich.

Durch die Nutzung von IPv6 innerhalb des vRack können OVHcloud-Nutzer eine sicherere, effizientere und skalierbarere Netzwerkumgebung genießen, die den Anforderungen der modernen Internetnutzung gerecht wird.

## Voraussetzungen

- Sie verfügen über einen aktiven [vRack](/links/network/vrack)-Dienst in Ihrem Account.
- Sie verfügen über einen [vRack-kompatiblen Server](/links/network/vrack), der mit Ihrem vRack-Netzwerk verbunden ist.

<!-- CP-NAV-START:network-vrack -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [vRack](/links/control-panel/network-vrack)
- **Navigationspfad:** `Network`{.action} > `Privates vRack Netzwerk`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Diese Funktion kann auf Servern der [**Eco**-Produktlinie](/links/bare-metal/eco-about) eingeschränkt oder nicht verfügbar sein.
>
> Weitere Informationen finden Sie auf unserer [Vergleichsseite](/links/bare-metal/eco-compare).

## In der praktischen Anwendung

### Einen neuen Additional-IPv6-Block anfordern

Beim Anfordern eines neuen Additional-IPv6-Blocks ist zu beachten, dass die Zuteilung regional erfolgt. Das bedeutet, dass der erhaltene IPv6-Block an eine bestimmte Region gebunden ist, die festlegt, wo der öffentliche Datenverkehr in Ihr vRack-Netzwerk eintritt (also wo sich das Gateway befindet).

/// details | Einen neuen Additional-IPv6-Block anfordern

Sie können Ihren neuen zusätzlichen IPv6-Block [hier](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip) bestellen.

![Konfigurationsseite](images/500.png){.thumbnail}

Folgen Sie anschließend den schrittweisen Anweisungen.

Ihr neues Additional IPv6 ist dann auf der Konfigurationsseite Ihres vRack verfügbar.

///

### IPv6 in einem vRack konfigurieren (Basismodus)

In diesem Abschnitt stellen wir die grundlegende IPv6-Einrichtung für Ihre mit dem vRack verbundenen Hosts vor.

![IPv6 in einem vRack konfigurieren](images/20240418-03.png){.thumbnail}

Das obige Beispiel zeigt zwei Hosts, deren vRack-seitige Interfaces mit öffentlichen IPv6-Adressen konfiguriert sind. Ein Host ist manuell konfiguriert, während dem anderen eine IP-Adresse automatisch über SLAAC zugewiesen wird. Alle IP-Adressen gehören zum ersten /64-Subnetz aus einem gegebenen öffentlichen /56-Additional-IPv6-Block. Beide nutzen das vRack-Interface für die öffentliche IPv6-Konnektivität.

Das Standard-Gateway für das erste /64-Subnetz (das gebrückte) ist die erste Adresse aus dem /56-Block. In diesem Beispiel ist es `2001:41d0:abcd:ef00::1`. Dies wird über SLAAC verteilt, muss aber manuell konfiguriert werden (als Standard-Route), wenn SLAAC deaktiviert ist. Weitere Informationen finden Sie im Abschnitt **Statische IP-Konfiguration** weiter unten.

/// details | Über das OVHcloud Kundencenter

![vRack-Verwaltung](images/700.png){.thumbnail}

Auf der linken Seite sind die verfügbaren Optionen (konfigurierbare Dienste) aufgelistet.

Auf der rechten Seite sehen Sie, was bereits mit Ihrem vRack konfiguriert ist.

Wählen Sie Ihr neues Additional IPv6 aus und fügen Sie es Ihrem vRack hinzu.

![vRack-Auswahl](images/701.png){.thumbnail}

Ihr neues Additional IPv6 ist nun Ihrem vRack hinzugefügt.

### Statische IP-Konfiguration

Sobald der Additional-IPv6-/56-Block einem vRack-Netzwerk zugewiesen ist, wird das erste /64-Subnetz damit gebrückt.

Das bedeutet, dass Sie diese IPs problemlos auf Ihren Hosts mit statischer IP-Konfiguration auf vRack-Interfaces verwenden können (einen Konfigurationsbeispiel auf der Host-Seite finden Sie im nächsten Abschnitt).

### Automatische IP-Konfiguration (SLAAC)

Um die IP-Adressierung in Ihrem Netzwerk zu vereinfachen, können Sie SLAAC verwenden. Es kann nur pro gebrücktem Subnetz aktiviert werden und kann für das erste /64 Ihres Blocks (dieses ist immer gebrückt) jederzeit mit diesem Regler aktiviert werden:

![SLAAC aktivieren](images/702.png){.thumbnail}

Vergessen Sie nicht, SLAAC auf Ihrem Host-Rechner zu konfigurieren.

///


/// details | Über die APIv6 (alternativer Weg)

### Einem vRack ein Additional IPv6 zuweisen

Wenn Sie ein zusätzliches IPv6 anfordern, wird es automatisch Ihrem vRack zugewiesen.

Wenn Sie dieses neue Additional IPv6 aus Ihrem vRack entfernt haben, können Sie es mit dieser POST-Methode erneut zuweisen:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

Wie im folgenden Beispiel:

![api post add block](images/post-ipv6.png){.thumbnail}

Verwenden Sie den folgenden Aufruf, um zu überprüfen, ob das IPv6 zugewiesen wurde:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

Wie im folgenden Beispiel:

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Jetzt sehen wir unseren Block mit einem vRack konfiguriert. Der nächste Schritt ist die Konfiguration des Hosts oder der VMs.

### Statische IP-Konfiguration

Sobald der Additional-IPv6-/56-Block einem vRack-Netzwerk zugewiesen ist, wird das erste /64-Subnetz damit gebrückt. Das bedeutet, dass Sie diese IPs problemlos auf Ihren Hosts verwenden können.

Überprüfen wir, welches Subnetz gebrückt ist:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

Wie im folgenden Beispiel:

![API-Antwort mit Bridge-Subbereichen im vRack](images/20240418-05.png){.thumbnail}

Für weitere Details verwenden Sie diesen Aufruf:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Wie im folgenden Beispiel:

![API-Antwort mit Bridge-Subbereichsdetails und SLAAC-Status](images/20240418-06.png){.thumbnail}

Beachten Sie, dass die automatische IP-Konfiguration (SLAAC) standardmäßig deaktiviert ist.

### Automatische IP-Konfiguration (SLAAC)

Um die IP-Adressierung in Ihrem Netzwerk zu vereinfachen, können Sie SLAAC verwenden. Es kann nur pro gebrücktem Subnetz aktiviert werden und kann mit dieser PUT-Methode aktiviert werden:

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Wie im folgenden Beispiel:

![API call POST enable SLAAC](images/20240418-07.png){.thumbnail}

Vergessen Sie nicht, SLAAC auf Ihrem Host-Rechner zu konfigurieren.

///

### Öffentliche IP-Bandbreite im vRack verwalten

Standardmäßig profitieren Additional-IP-Blöcke, die über ein vRack geroutet werden, von einer öffentlichen Standard-Bandbreite von 5 Gbps in Europa/Kanada/USA und 100 Mbps in APAC-Regionen. Eine detaillierte Übersicht der verfügbaren Optionen finden Sie in den öffentlichen Routing-Optionen auf unserer [vRack-Produktseite](/links/network/vrack).

Da die Anforderungen an die Infrastruktur wachsen, benötigen Nutzer möglicherweise mehr Bandbreite zur Unterstützung öffentlicher Dienste mit hohem Datenverkehr. OVHcloud bietet hierfür kostenpflichtige Bandbreitenoptionen an. Beachten Sie, dass Bandbreitenoptionen **pro vRack und pro Region** angewendet werden. Da Additional-IP-Adressen an eine Region gebunden sind, wirkt sich jede Bandbreitenänderung auf alle IP-Adressen (sowohl IPv4 als auch IPv6) aus, die in der betreffenden Region zu dem spezifischen vRack geroutet werden.

/// details | Beim Bestellen einer Additional IP

#### Öffentliche Bandbreite während der Bestellung wählen

Die Standard-Bandbreite kann beim Bestellen eines neuen Additional-IP-Blocks mit einem vRack-Netzwerk als Backend geändert werden.

Um einen neuen Additional-IPv6-Block zu bestellen:

- Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an.
- Öffnen Sie den Bereich `Network`{.action} in der linken Seitenleiste.
- Wählen Sie `Öffentliche IP-Adressen`{.action}.
- Klicken Sie auf die Schaltfläche `IPs bestellen`{.action} oben auf der Seite.
- Wählen Sie die IP-Version und dann das vRack, mit dem Ihr Additional IP verbunden werden soll.
- Wählen Sie die Region für Ihr Additional IP.
- Wählen Sie die öffentliche Bandbreite, die Sie für Ihr vRack in dieser Region anwenden möchten.
- Füllen Sie die anderen Optionen nach Bedarf aus und schließen Sie die Bestellung ab.

///

/// details | Über die vRack-Verwaltungsseite

#### Öffentliche vRack-Bandbreite auf der Verwaltungsseite ändern

Für Additional-IP-Blöcke, die bereits mit einem vRack verbunden sind, kann die Bandbreite direkt über die Dienstkonfigurationsseite verwaltet werden.

Um auf die Verwaltungsoberfläche zuzugreifen:

- Öffnen Sie `Network`{.action} in der linken Seitenleiste Ihres Kundencenters.
- Wählen Sie `Privates vRack-Netzwerk`{.action}.
- Klicken Sie in der Spalte "Öffentliche IP und Bandbreite" auf die Schaltfläche `Verwalten`{.action} für das entsprechende vRack.

Die Verwaltungsseite ist in zwei Registerkarten unterteilt:

- **Alle verbundenen Dienste**: Leitet derzeit auf die klassische vRack-Verwaltungsseite weiter. Demnächst werden hier alle mit dem vRack verbundenen Produkte (Server, Cloud-Projekte usw.) übersichtlich aufgelistet.
- **Öffentliches IP-Routing**: Verwaltet die öffentlichen IP-Routing-Optionen Ihres vRack, einschließlich der Bandbreite.

Um die öffentliche Bandbreite zu ändern:

- Wechseln Sie zur Registerkarte `Öffentliches IP-Routing`{.action}.
- Die Oberfläche zeigt individuelle Verwaltungsfenster für jede mit dem vRack verbundene Region (z. B. `eu-west-par`) mit allen in dieser Region zugeordneten IP-Adressen.
- Klicken Sie im Fenster der betreffenden Region auf `Bandbreite ändern`{.action}.
- Wählen Sie die gewünschte Bandbreitenoption im rechten Bereich aus und klicken Sie auf `Zur Bestellung`{.action}, um die Bestellung zu bestätigen.
- Nach der Zahlung ist die ausgewählte Bandbreite nach einigen Minuten für Ihr vRack in der gewählten Region verfügbar.

> [!primary]
>
> Die Gebühren für den ersten Monat werden anteilig für die verbleibenden Tage berechnet. Der volle Tarif gilt ab dem nächsten Abrechnungszyklus.
>

Das ausgewählte Bandbreiten-Upgrade wird auf alle IP-Adressen in dieser Region für das gewählte vRack angewendet.

///

#### Host-seitige Befehle

/// details | Statische IP-Konfiguration

In einer Basiskonfiguration möchten Sie möglicherweise eine IP-Adresse und das Routing manuell einrichten. Dies ist auch der empfohlene Weg, wenn Ihr Rechner als Router fungiert (siehe Abschnitt [Geroutetes Subnetz konfigurieren](#routedmode)) und der Modus ipv6.forwarding aktiviert ist.

Fügen wir zunächst eine IP-Adresse auf dem vRack-Interface (in unserem Beispiel "eth1") hinzu:

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

Bitte beachten Sie, dass die erste IP-Adresse in einem Block, `2001:41d0:abcd:ef00::1/64`, die Gateway-IP-Adresse ist und nicht für die Host-Adressierung verwendet werden darf.

Optional, wenn Sie das vRack-Interface als Hauptinterface für IPv6-Datenverkehr verwenden möchten, kann die Standard-Route folgendermaßen konfiguriert werden:

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Aktivieren Sie abschließend das Interface (und überprüfen Sie die konfigurierte IP):

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Automatische IP-Konfiguration (SLAAC)

Um die automatische Konfiguration zu nutzen, stellen Sie sicher, dass Sie Ihr Interface wie folgt konfiguriert haben:

Erlauben wir zunächst unserem Host, Router-Ankündigungen (für die automatische Konfiguration) auf dem vRack-Interface (in unserem Beispiel "eth1") zu akzeptieren:

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

Beachten Sie, dass diese Einstellung nicht funktioniert, wenn ipv6.forwarding in Ihrem System aktiviert ist. Lesen Sie in diesem Fall die [Automatische IP-Konfiguration für geroutetes Subnetz](#host-side) für weitere Details.

Aktivieren Sie dann einfach das Interface:

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

Nach einem Moment (die Konfiguration muss sich propagieren) sollte eine spezifische IPv6-Adresse (mit den Flags *global* und *dynamic*) auf dem Interface sichtbar sein.

///

#### Einrichtungsüberprüfung

/// details | Lokal

Der grundlegendste Test besteht darin, eine lokale IP-Adresse auf einem Host anzupingen:

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Remote

Überprüfen wir nun die Konnektivität von einem Remote-Host:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Einen IPv6 in einem vRack für den gerouteten Modus konfigurieren <a name="routedmode"></a>

In diesem Abschnitt stellen wir eine erweiterte IPv6-Einrichtung vor, bei der Ihre mit dem vRack verbundenen Hosts als Router für gehostete virtuelle Maschinen fungieren. Solche VMs erhalten delegierte Subnetze aus dem IPv6-Hauptblock (im nachfolgenden Schema in orange dargestellt).

![Einen IPv6 in einem vRack für den gerouteten Modus konfigurieren](images/routed-mode-20240513.png){.thumbnail}

Der Datenpfad verläuft wie folgt: Eingehender Datenverkehr zu einer bestimmten VM (mit angegebenem Subnetz) wird über das kundeneigene vRack geleitet, zunächst zu einem bestimmten Host (mit einer Next-Hop-Adresse), dann über einen lokalen Link (oder vSwitch - schwarzer Link fd00::/64 im Diagramm) zur jeweiligen VM.
Der von einer solchen VM zurückkommende Datenverkehr sollte die Standard-Route über den ersten Teil des lokalen Links (den schwarzen, fd00::1) verwenden, dann die (möglicherweise Standard-)Route von einem Host zu seinem Gateway.

Für die Definition eines gerouteten Subnetzes kann jede Präfixgröße zwischen /57 und /64 verwendet werden.

Das Standard-Gateway des Hosts ist die erste Adresse aus dem /56-Block, in diesem Beispiel: `2001:41d0:abcd:ef00::1`. Das von den VMs verwendete Standard-Gateway ist die Adresse ihres Hosts über den lokalen Link, also `fd00::1` in diesem Beispiel.

#### Geroutetes Subnetz definieren

/// details | OVHcloud Kundencenter

Nach dem Hinzufügen einer Additional IP zu Ihrem vRack können Sie das geroutete Subnetz verwalten, indem Sie auf die Schaltfläche `Subnetz hinzufügen`{.action} klicken.

![vRack-Auswahl](images/600.png){.thumbnail}

Um ein geroutetes Subnetz zu erstellen, müssen wir zunächst folgendes definieren:

- **Subnetz in CIDR-Notation** (Größe zwischen /57 und /64)
- **Next-Hop-Adresse** (also die IPv6-Adresse des Hosts)

Bitte beachten Sie, dass sich ein gegebenes Subnetz nicht mit einem anderen definierten Subnetz überschneiden darf und die Next-Hop-Adresse zum ersten Teil (gebrücktes /64-Subnetz) Ihres Additional-IPv6-Präfixes gehören muss.

![Geroutetes Subnetz in CIDR-Notation und Next-Hop-Adresse definieren](images/800.png){.thumbnail}

Das erstellte geroutete Subnetz `2001:41d0:abcd::ef10::/60` ist über den Next Hop `2001:41d0:abcd::ef00::2` erreichbar.

![Erstelltes geroutetes Subnetz mit angezeigtem Next-Hop](images/801.png){.thumbnail}

///

/// details | APIv6-Befehle

Um ein geroutetes Subnetz zu erstellen, müssen wir zunächst folgendes definieren:

- **Subnetz in CIDR-Notation** (Größe zwischen /57 und /64)
- **Next-Hop-Adresse** (also die IPv6-Adresse des Hosts)

Bitte beachten Sie, dass sich ein gegebenes Subnetz nicht mit einem anderen definierten Subnetz überschneiden darf und die Next-Hop-Adresse zum ersten Teil (gebrücktes /64-Subnetz) Ihres Additional-IPv6-Präfixes gehören muss.

Das folgende Beispiel zeigt, wie ein solches Subnetz definiert wird:

![API-Aufruf zum Definieren eines gerouteten Subnetzes mit Next-Hop](images/20240418-02.png){.thumbnail}

Hier haben wir das geroutete Subnetz `2001:41d0:abcd:ef10::/60` definiert, das an die VM delegiert wird, die auf `2001:41d0:abcd:ef00::2` gehostet ist.

///

#### Host-seitige Konfiguration <a name="host-side"></a>

/// details | Statische IP-Konfiguration für einen Host (empfohlen)

Beim Hosten von Virtual Machines empfehlen wir dringend, eine statische Konfiguration auf Ihrem Host zu verwenden.

Richten Sie eine IPv6-Adresse ein, aktivieren Sie das Interface und fügen Sie (optional) die Standard-Route über das vRack-Interface hinzu:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Automatische IP-Konfiguration (SLAAC) für einen Host

In manchen Fällen möchten Sie Ihre Interfaces möglicherweise mit SLAAC und IP-Forwarding zusammen konfigurieren.

Bitte beachten Sie, dass dies zusätzliche Risiken mit sich bringt (wie den Verlust des Zugangs nicht nur zum Host, sondern auch zu allen VMs) und nicht empfohlen wird.

Aktivierung des IPv6-Forwardings sicherstellen:

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Konfiguration der Router-Ankündigungen, die auf dem vRack-Interface eth1 akzeptiert werden (in unserem Beispiel):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Konfiguration des gerouteten Subnetzes auf einem Host und innerhalb einer VM

Um sicherzustellen, dass unser Host weiß, wie er mit Paketen umgehen soll, die an das neue geroutete Subnetz (das auf einer VM liegt) adressiert sind, müssen wir eine spezifische Route dafür hinzufügen.

In unserem Beispiel ist dies der veth-Link mit der Adresse fd00::2/64 innerhalb einer VM, die wir für das Routing verwenden werden.

Bitte beachten Sie, dass dies sehr spezifisch für den installierten Hypervisor ist (es kann sich um vSwitch- oder veth-Interfaces handeln). Lesen Sie die spezifische Hypervisor-Netzwerkdokumentation für diese Einrichtung.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Konfiguration des gerouteten Subnetzes innerhalb einer VM

Auch hier gilt: Der Link zwischen Host und VMs ist sehr spezifisch für den installierten Hypervisor (es kann sich um vSwitch- oder veth-Interfaces handeln). Lesen Sie die spezifische Hypervisor-Netzwerkdokumentation für diese Einrichtung.

Fügen Sie unseren gerouteten IP-Block innerhalb einer VM hinzu, um sicherzustellen, dass sie Pakete akzeptieren kann:

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Fügen Sie die Standard-Route auf einer VM hinzu, um sicherzustellen, dass der Datenverkehr die VM verlassen kann:

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Einrichtungsüberprüfung

/// details | Lokal, auf einem Host

Ping vom Host in den Container (über den lokalen Link):

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Ping vom Host in den Container (über das geroutete Subnetz):

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Route zu unserem /60-Subnetz auf einem Host überprüfen:

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Lokal, auf einer VM

Überprüfen Sie zunächst die Routing-Tabelle:

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Ping zum Link-Local-Interface des Hosts:

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Ping zum globalen Interface des Hosts:

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Pingen wir abschließend eine externe IPv6-Adresse von einer VM:

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Oder unter Verwendung eines Domainnamens:

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | Von einem Remote-Host

Überprüfen wir die Konnektivität zu unserer VM von außerhalb des OVHcloud-Netzwerks:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

Und ein Traceroute von einem Remote-Host (irgendwo im Internet):

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

In diesem Beispiel:

- Hop 10 - IP-Adresse unseres Hosts
- Hop 11 - IP-Adresse unserer VM

///

## Mehrere Regionsstandorte vs. globales vRack

Die vRack-Technologie von OVHcloud ermöglicht es Unternehmen, Server an verschiedenen Standorten zu verbinden, als ob sie sich im selben Rechenzentrum befänden.
Andererseits sind Dienste wie Additional IPv6 regional, was bedeutet, dass ihre Funktionalität an einen bestimmten Standort gebunden ist.

Nachfolgend wird zu Lernzwecken eine Architektur mit zwei verschiedenen Regionen und verschiedenen Additional-IPv6-Blöcken präsentiert, die jeweils aus einer Region angekündigt werden. Außerdem wird ein Host mit IP-Adressen aus beiden Netzwerken sowie ein Beispiel einer suboptimalen Route vorgestellt - ein Host in einer Region mit einer in einer anderen Region angekündigten IPv6-Adresse:

![Multi-Region vRack-Architektur mit verschiedenen IPv6-Blöcken](images/20240418-08.png){.thumbnail}

Bitte beachten Sie, dass bei solchen Setups (mit Additional IPv6 aus mehr als einer Region) SLAAC **im gesamten vRack deaktiviert sein muss** (da dies zu unvorhersehbaren Ergebnissen und zufälligem Konnektivitätsverlust führen kann).

### Vorteile

- **Verbesserte Konnektivität:** Durch die Nutzung eines vRack-Netzwerks zusammen mit öffentlichen IP-Blöcken, die an mehreren Standorten geroutet werden, können Unternehmen eine nahtlose Kommunikation weltweit sicherstellen, unabhängig von den physischen Standorten der Backend-Server.
- **Migration in die Cloud:** Die vRack-Technologie kann ein wichtiger Enabler für erste Schritte in Richtung einer "Migration in die Cloud"-Organisationsstrategie sein und Legacy-Anwendungen entsperren, die noch lokale Netzwerkkommunikation erfordern.

### Risiken und Überlegungen

- **Kein SLAAC-Support in Multi-Standort-Setups:** Wenn mehr als ein Standort am Routing von öffentlichem IP-Datenverkehr (sowohl IPv4 als auch IPv6) in dasselbe vRack beteiligt ist, sollte die Stateless Address Autoconfiguration (SLAAC) **nicht verwendet werden**. Als Beispiel für eine solche Situation betrachten wir bestehende Hosts, die IPv4-Adressen verwenden. Diese Hosts werden automatisch von SLAAC mit einem IPv6-Gateway neu konfiguriert, das in einer anderen Region eingerichtet ist. Zusammen mit der IPv6-Priorisierung gegenüber IPv4 durch einige Betriebssysteme kann diese Situation zu suboptimalem Routing oder sogar zum vollständigen Konnektivitätsverlust für diese Hosts führen.

## Bekannte Einschränkungen

Das Verständnis der Einschränkungen bei der Verwendung von **Additional IPv6** in der **vRack**-Umgebung ist entscheidend für eine effektive Netzwerkplanung. Hier sind die wichtigsten zu berücksichtigenden Einschränkungen:

- **Additional IPv6 ist nur mit vRack verfügbar**: Bitte beachten Sie, dass Additional-IPv6-Adressen nur mit vRack-verbundenen Backends konfiguriert werden können.
- **SLAAC-Einschränkungen in Multi-Standort-Setups**: Die Stateless Address Autoconfiguration (SLAAC) wird nicht unterstützt, wenn öffentlicher IP-Datenverkehr (sowohl IPv6 als auch IPv4) in mehreren Regionsstandorte in das vRack geroutet wird.
- **Bis zu 128 Hosts innerhalb des gebrückten Subnetzes**: Sie können bis zu 128 IP-Adressen direkt im vRack verwenden.
- **Bis zu 128 Next-Hop-Routen**: Sie können bis zu 128 Routen für geroutete Subnetze innerhalb eines vRack verwenden.
- **Öffentliche Bandbreitenbegrenzung**: Ausgehender Datenverkehr von OVHcloud ins Internet ist auf 5 Gbps pro Regionsstandort begrenzt.
- **IPv6-Block-Zuteilungslimits**: Ein einzelner Additional-IPv6-Block pro vRack in einem Regionsstandort. Maximal 3 Blöcke (/56) pro Regionsstandort.
- **Mobilität von Additional-IPv6-Blöcken**: Aufgrund des hierarchischen Designs des IPv6-Adressraums sind Additional-IPv6-Blöcke regionsspezifisch. Das bedeutet, dass Blöcke nicht zwischen Regionen übertragen werden können, obwohl sie einem beliebigen vRack-verbundenen Backend neu zugewiesen werden können.
- **Kein direkter VLAN-802.1Q-Support im vRack durch Additional IPv6**: Die Konfiguration kann nur mit dem nativen VLAN Ihres vRack-Netzwerks erfolgen. Für die Paketweiterleitung innerhalb eines bestimmten VLANs (eines vRack) wird ein dedizierter Host auf der Kundenseite benötigt.
- **Derzeit wird das Routing von Additional IPv6 in das vRack in APAC-Regionen (Asien-Pazifik) nicht unterstützt.**

## Weiterführende Informationen

- [vRack auf Ihren Dedicated Servern konfigurieren](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

- [Dedicated Server - Additional IPs im Bridge-Modus konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Treten Sie unserer [User Community](/links/community) bei.
