---
title: "So konfigurieren Sie Link-Aggregation mit LACP in Debian 12 oder Ubuntu 24.04"
excerpt: "Aktivieren Sie Link-Aggregation auf Ihrem Debian 12 oder Ubuntu 24.04 Server (Netplan), um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern"
updated: 2026-04-20
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

Die LACP-Technologie (Link Aggregation Control Protocol) wurde entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Sie können Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant gestalten. Das bedeutet, dass der Datenverkehr bei Ausfall einer Verbindung automatisch auf eine andere verfügbare Verbindung umgeleitet wird. Die verfügbare Bandbreite wird dank der Aggregation ebenfalls verdoppelt.

**Diese Anleitung erklärt, wie Sie Ihre Interfaces bündeln, um sie für die Link-Aggregation in Debian 12 (*oder neuer*) / Ubuntu 24.04 (Netplan-Konfiguration) zu verwenden.**

> [!warning]
> Obwohl die von OVHcloud bereitgestellten Debian 12 (und neueren) Images standardmäßig Netplan verwenden, gibt es zwei wesentliche Ausnahmen, bei denen stattdessen `ifupdown` (/etc/network/interfaces) verwendet wird:
>
> - **Rescue-Modus**: Obwohl er auf Debian 12 basiert, nutzt die Rescue-Umgebung das Dienstprogramm `ifupdown`.
> - **Benutzerdefinierte Images**: Debian-Installationen, die mit Ihrem eigenen Image durchgeführt werden, verwenden möglicherweise weiterhin `ifupdown` für die Netzwerkkonfiguration.
>
> Wenn Sie die Link-Aggregation im Rescue-Modus oder auf einem benutzerdefinierten Betriebssystem mit `ifupdown` konfigurieren möchten, lesen Sie stattdessen [diese Anleitung](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Voraussetzungen

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Zugang zum OVHcloud Kundencenter

- **Direktlink:** [Dedicated Server](/links/control-panel/baremetal-dedicated-servers)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Dedicated Server`{.action} > Wählen Sie Ihren Server aus

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## In der praktischen Anwendung

> [!primary]
> Die in den nachfolgenden Konfigurationen und Beispielen angegebenen Werte (MAC-Adressen, IP-Adressen usw.) dienen nur als Beispiele. Sie müssen diese Werte natürlich durch Ihre eigenen ersetzen.
>

### MAC-Adressen abrufen

Wechseln Sie zum Tab `Netzwerkinterfaces`{.action} und notieren Sie die MAC-Adressen der einzelnen Interfaces (öffentlich/privat), die unten im Menü angezeigt werden.

![OVHcloud Kundencenter](images/ControlPanel.png){.thumbnail}

> [!primary]
> Bitte beachten Sie, dass die MAC-Adresse des **öffentlichen Hauptinterfaces** diejenige ist, die DHCP-Angebote empfängt, sowohl im Betriebssystem des Servers als auch im Rescue-Modus. Dieses Interface verwaltet die öffentliche Konnektivität in der Standardkonfiguration.
>

Nachdem Sie nun wissen, welche MAC-Adressen den einzelnen Interface-Typen (öffentlich/privat) zugeordnet sind, müssen Sie die Namen der Interfaces abrufen.

### Interfacenamen abrufen

> [!primary]
>
> Wenn Sie die Netzwerkverbindung zu Ihrem Server verlieren, folgen Sie den Schritten unter "**KVM öffnen**" in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Um die Namen der Interfaces abzurufen, führen Sie folgenden Befehl aus:

```bash
ip a
```

> [!primary]
>
> Dieser Befehl gibt zahlreiche Interfaces aus. Wenn Sie Schwierigkeiten haben, Ihre physischen Interfaces zu identifizieren, ist die öffentliche IP-Adresse des Servers standardmäßig dem ersten Interface zugewiesen.
>

Hier ein Beispiel für die Ausgabe:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Sobald Sie die Namen Ihrer Interfaces ermittelt haben, können Sie die Interface-Bündelung im Betriebssystem konfigurieren.

### Interface-Bündelung konfigurieren

Wählen Sie unten den Tab aus, der der Konfiguration Ihres Servers entspricht:

- **Zwei Interfaces**: Advance Server mit zwei physischen Netzwerkkarten.
- **Vier Interfaces - Double LAG**: Scale und High Grade Server mit OLA im Modus **Active - Double LAG** (öffentliche + private Aggregate). Dies erfordert die [Aktivierung von OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) im OVHcloud Kundencenter.
- **Vier Interfaces - Fully Private**: Scale und High Grade Server mit OLA im Modus **Active - Fully Private** (einzelnes privates Aggregat für vRack). Dies erfordert die [Aktivierung von OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) im OVHcloud Kundencenter.

> [!tabs]
> Zwei Interfaces
>> Ersetzen Sie den Inhalt von `/etc/netplan/50-cloud-init.yaml` durch Folgendes:
>>
>> **Statische IP**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Vier Interfaces - Double LAG
>> Diese Konfiguration bündelt öffentliche Interfaces in `bond0` (mit öffentlicher IP) und private Interfaces in `bond1` (für vRack).
>>
>> Ersetzen Sie den Inhalt von `/etc/netplan/50-cloud-init.yaml` durch Folgendes:
>>
>> **Statische IP**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Vier Interfaces - Fully Private
>> Diese Konfiguration aggregiert alle physischen Interfaces in einem einzigen Bond ausschließlich für die vRack-Nutzung. Es besteht keine öffentliche IP-Konnektivität.
>>
>> > [!warning]
>> >
>> > Nach der Implementierung von OLA im Modus Fully Private ist die öffentliche IP nicht mehr erreichbar. Stellen Sie sicher, dass Sie über einen alternativen Zugangsweg verfügen (z. B. über einen anderen Server im vRack oder über KVM/IPMI), bevor Sie diese Konfiguration anwenden.
>> >
>>
>> Ersetzen Sie den Inhalt von `/etc/netplan/50-cloud-init.yaml` durch Folgendes:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > Im Modus Fully Private verwendet der Bond die MAC-Adresse des **privaten Hauptinterfaces**. Um diesem Bond eine IP-Adresse für die vRack-Kommunikation zuzuweisen, fügen Sie unter `bond0` einen `addresses`-Block mit Ihrer privaten vRack-IP hinzu.
>> >

### Konfiguration anwenden

> [!primary]
> Der Befehl `netplan try` kann bei der Konfiguration von Bonds nicht verwendet werden.

Wenden Sie die Konfiguration mit folgendem Befehl an:

```bash
sudo netplan apply
```

Es kann einige Sekunden dauern, bis die Bond-Interfaces verfügbar sind.

## Weiterführende Informationen

[Konfiguration von OVHcloud Link Aggregation im Kundencenter](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Treten Sie unserer [User Community](/links/community) bei.
