---
title: 'Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7'
excerpt: 'Die OVHcloud Link Aggregation auf Ihrem CentOS 7-Server aktivieren'
updated: 2021-03-25
---

**Letzte Aktualisierung am 25.03.2021**

## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.

**Diese Anleitung erklärt, wie Sie Ihre Netzwerkkarten verbinden, um sie für OLA in CentOS 7 zu verwenden.**

## Voraussetzungen

- [Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation im OVHcloud Kundencenter](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen.
<br>Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie im Bereich `Bare Metal Cloud`{.action} Ihren Server aus `Dedicated Server`{.action}, aus und klicken Sie dann auf den Tab `IPMI`{.action} (1).

Klicken Sie anschließend auf die Schaltfläche `Mit einem Java-Applet (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Ein JNLP-Applet wird heruntergeladen. Öffnen Sie es, um IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Bei Verwendung eines OVHcloud Templates werden die NICs standardmäßig mit *eth0* und *eth1* gekennzeichnet. Wenn Sie kein OVHcloud Template verwenden, können Sie die Namen Ihrer Schnittstellen mit dem folgenden Befehl ermitteln:

```bash
ip a
```

> [!primary]
>
> Mit diesem Befehl werden mehrere "interfaces" verknüpft. Wenn Sie Probleme haben, die physischen NICs zu bestimmen, wird die öffentliche IP-Adresse des Servers weiterhin standardmäßig der ersten Schnittstelle zugeordnet.
>

Sobald wir die Namen unserer beiden Netzwerkkarten ermittelt haben, konfigurieren wir die Netzwerkkartenbindung im Betriebssystem. Im ersten Schritt wird eine Verbindungsschnittstelle erstellt. Erstellen Sie dazu die folgende Konfigurationsdatei in einem Texteditor Ihrer Wahl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-bond0
```

Zum Konfigurieren der Bond-Schnittstelle fügen Sie Folgendes am Ende der Datei ein:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> Sie können jede private IP-Adresse und jedes Subnetz Ihrer Wahl verwenden.
>

Speichern und schließen Sie die Datei, sobald Sie die Richtigkeit der Angaben bestätigt haben. Als nächstes müssen wir beide physischen Schnittstellen konfigurieren. Standardmäßig verfügt auf einem OVHcloud-Server nur *eth0* über eine Konfigurationsdatei. Öffnen Sie sie mit dem folgenden Befehl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-eth0
```

Unverändert wird die Datei wird folgt angezeigt:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Die IP-Adressen unterscheiden sich bei jedem Server.
>

Wir werden die Datei folgendermaßen ändern:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> Die Hardwareadresse (MAC-Adresse) der Netzwerkkarte kann mit dem zuvor verwendeten Befehl *ip a* ermittelt werden. Es ist die Nummer neben "link/ether" in der Ausgabe.
>

Das *#* vor einer Zeile bedeutet, dass der Server diese Zeile beim Lesen der Datei ignoriert. Daher ignorieren wir diese Zeilen vollständig, wenn wir unsere Schnittstellendatei für *eth1* erstellen. Wir erstellen die Konfigurationsdatei *eth1* mit dem folgenden Befehl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-eth1
```

Dieses Mal ist die Datei leer. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Abschließend starten wir den Netzwerk-Daemon mit dem folgenden Befehl neu:

```bash
systemctl restart network
```

Um zu testen, ob die Verbindung funktioniert, senden Sie einen Ping-Befehl an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie bereit. Ist dies nicht der Fall, überprüfen Sie Ihre Einstellungen oder starten Sie den Server neu.

## Weiterführende Informationen

[Konfigurieren der OVHcloud Link Aggregation im OVHcloud Kundencenter](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
