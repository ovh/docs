---
title: "OVHcloud Link Aggregation auf einem Dedicated Server konfigurieren (Debian)"
excerpt: "Aktivieren Sie OVHcloud Link Aggregation auf Ihrem Debian-Server (von Debian 9 bis Debian 11)."
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

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet. Die verfügbare Bandbreite wird durch Aggregation ebenfalls verdoppelt.
Die Aggregation basiert auf dem Standard IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Diese Anleitung erklärt, wie Sie Ihre Schnittstellen für die Verwendung mit OLA in Debian 9 bis 11 zusammenfassen können (ifupdown-Konfiguration).**

> [!warning]
> Diese Anleitung enthält Anweisungen zum Konfigurieren der Netzwerk-Schnittstellenaggregation speziell mit `ifupdown`, dessen Konfigurationsdatei sich unter `/etc/network/interfaces` befindet. Sie gilt auch für den Rescue-Modus.
>
> Wenn die Netzwerkkonfiguration Ihres Systems stattdessen `Netplan` verwendet (Debian 12 oder neuer, Ubuntu 24.04), lesen Sie bitte [diese Anleitung](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).
>

## Voraussetzungen

- [OVHcloud Link Aggregation im OVHcloud Kundencenter konfigurieren](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direktlink:** [Dedicated Server](/links/control-panel/baremetal-dedicated-servers)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Dedicated Server`{.action} > Wählen Sie Ihren Server aus

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## In der praktischen Anwendung

> [!primary]
> Die in den Konfigurationen und Beispielen unten angezeigten Werte (MAC-Adressen, IP-Adressen usw.) dienen nur als Beispiele. Sie müssen diese Werte natürlich durch Ihre eigenen ersetzen.
>

> [!warning]
>
> Sie müssen das Paket ifenslave auf dem Server installieren, bevor Sie OLA im OVHcloud Kundencenter oder in der API aktivieren können. Verwenden Sie dazu den folgenden Befehl:
>
> ```bash
> apt install ifenslave
> ```
>

### Ermittlung der MAC-Adressen

Wechseln Sie zum Tab `Netzwerkinterfaces`{.action} und notieren Sie die MAC-Adressen für jede Schnittstelle (öffentlich/privat), die am unteren Ende des Menüs angezeigt werden.

![OVHcloud Kundencenter](images/ControlPanel.png){.thumbnail}

> [!primary]
> Bitte beachten Sie, dass die MAC-Adresse der **öffentlichen Hauptschnittstelle** diejenige ist, die DHCP-Angebote empfängt, sowohl im Betriebssystem des Servers als auch im Rescue-Modus. Diese Schnittstelle verwaltet die öffentliche Konnektivität in der Standardkonfiguration.
>
> Außerdem ist die MAC-Adresse der **privaten Hauptschnittstelle** diejenige mit dem niedrigsten Wert. Im obigen Beispielbild ist dies die Adresse `a1:b2:c3:d4:e5:d6`.
>

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen.
<br>Klicken Sie auf den Tab `IPMI`{.action} (1).

Klicken Sie anschließend auf die Schaltfläche `Mit einem Java-Applet (KVM)`{.action} (2).

### Ermittlung der Interface-Namen

> [!primary]
>
> Wenn Sie die Netzwerkverbindung zu Ihrem Server verlieren, folgen Sie den Schritten unter "**KVM öffnen**" in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Führen Sie den folgenden Befehl aus, um die Interface-Namen abzurufen:

```bash
ip a
```

> [!primary]
>
> Dieser Befehl zeigt mehrere Interfaces an. Wenn Sie Schwierigkeiten haben, Ihre physischen Interfaces zu identifizieren, ist an der ersten Schnittstelle standardmäßig die öffentliche IP-Adresse des Servers angehängt.
>

Hier ein Beispiel der Ausgabe:

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

Sobald Sie die Namen Ihrer Interfaces ermittelt haben, können Sie die Interface-Aggregation im Betriebssystem konfigurieren.

### Konfiguration der Interface-Aggregation

Wählen Sie den unten stehenden Tab entsprechend Ihrer Server-Konfiguration:

- **Zwei Interfaces**: Advance-Server mit zwei physischen NICs.
- **Vier Interfaces - Double LAG**: Scale- und High-Grade-Server mit OLA im Modus **Active - Double LAG** (öffentliche + private Aggregate). Dies erfordert die [Aktivierung von OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) im OVHcloud Kundencenter.
- **Vier Interfaces - Fully Private**: Scale- und High-Grade-Server mit OLA im Modus **Active - Fully Private** (einzelnes privates Aggregat für vRack). Dies erfordert die [Aktivierung von OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) im OVHcloud Kundencenter.

> [!tabs]
> Zwei Interfaces
>> Ersetzen Sie den Inhalt von `/etc/network/interfaces` durch Folgendes:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # MAC-Adresse der öffentlichen Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # MAC-Adresse der öffentlichen Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> ///
>>
> Vier Interfaces - Double LAG
>> Diese Konfiguration aggregiert öffentliche Interfaces in `bond0` (mit öffentlicher IP) und private Interfaces in `bond1` (für vRack).
>>
>> Ersetzen Sie den Inhalt von `/etc/network/interfaces` durch Folgendes:
>>
>> **Statische IP**
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # MAC-Adresse der öffentlichen Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Optional: Konfiguration des privaten Aggregats
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # MAC-Adresse der privaten Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # MAC-Adresse der öffentlichen Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Optional: Konfiguration des privaten Aggregats
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # MAC-Adresse der privaten Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> ///
>>
> Vier Interfaces - Fully Private
>> Diese Konfiguration aggregiert alle physischen Interfaces in einem einzigen Aggregat ausschließlich für den vRack-Einsatz. Es gibt keine öffentliche IP-Konnektivität.
>>
>> > [!warning]
>> >
>> > Nach der Implementierung von OLA im Fully-Private-Modus ist die öffentliche IP nicht mehr erreichbar. Stellen Sie sicher, dass Sie über einen alternativen Zugangsweg verfügen (z. B. über einen anderen Server im vRack oder via KVM/IPMI), bevor Sie diese Konfiguration anwenden.
>> >
>>
>> Ersetzen Sie den Inhalt von `/etc/network/interfaces` durch Folgendes:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 10.0.0.1/24
>>   # MAC-Adresse der privaten Hauptschnittstelle des Servers
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1 ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > Im Fully-Private-Modus verwendet das Aggregat die MAC-Adresse der **privaten Hauptschnittstelle**. Das Feld `address` sollte auf Ihre private vRack-IP gesetzt werden.
>> >

### Anwenden der Konfiguration

Wenden Sie die Konfiguration an, indem Sie den Netzwerk-Daemon neu starten:

```bash
systemctl restart networking
```

Dieser Neustart kann einige Sekunden dauern, da die Bond-Schnittstelle erstellt wird. Um zu testen, ob das Aggregat funktioniert, senden Sie einen Ping an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie fertig. Wenn nicht, überprüfen Sie Ihre Konfigurationen oder versuchen Sie, den Server neu zu starten.

## Weiterführende Informationen

[OVHcloud Link Aggregation im OVHcloud Kundencenter konfigurieren](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 12 oder Ubuntu 24.04 mit Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfigurieren der OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Treten Sie unserer [User Community](/links/community) bei.
