---
title: 'So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7'
slug: ola-centos7
excerpt: 'Die OVHcloud Link Aggregation auf Ihrem CentOS 7-Server aktivieren'
section: 'Fortgeschrittene Nutzung'
---

**Letzte Aktualisierung am 24\. Oktober 2019**

## Ziel

Die OVHcloud Link Aggregation (OLA)-Technologie wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen überflüssig machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet. In diesem Artikel werden wir behandeln, wie Sie Ihre Netzwerkkarten verbinden, um sie für OLA in CentOS 7 zu verwenden.

## Anforderungen

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation im OVH-Manager](https://docs.ovh.com/de/dedicated/ola-manager){.external}

## Anleitung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen. Melden Sie sich dazu zuerst beim [OVH-Manager](https://www.ovh.com/manager/){.external} an.  Wählen Sie dann in der linken Seitenleiste den Server aus, den Sie konfigurieren möchten, und klicken Sie auf die Registerkarte **IPMI**.

![remote_kvm](images/remote_kvm.png){.thumbnail}

Klicken Sie anschließend auf die Schaltfläche **Aus einem Java-Applet (KVM)**. Ein JNLP-Programm wird heruntergeladen. Öffnen Sie das Programm, um das IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Bei Verwendung einer OVH-Vorlage werden die NICs standardmäßig mit *eth0* und *eth1* gekennzeichnet. Wenn Sie keine OVH-Vorlage verwenden, können Sie die Namen Ihrer Schnittstellen mit dem folgenden Befehl ermitteln:

```bash
ip a
```

> [!primary]
>
> Mit diesem Befehl werden zahlreiche „Schnittstellen“ verknüpft. Wenn Sie Probleme haben, die physischen NICs zu bestimmen, wird die öffentliche IP-Adresse des Servers weiterhin standardmäßig der ersten Schnittstelle zugeordnet.
>

Sobald wir die Namen unserer beiden Netzwerkkarten ermittelt haben, konfigurieren wir die Netzwerkkartenbindung im Betriebssystem. Im ersten Schritt wird eine Verbindungsschnittstelle erstellt. Erstellen Sie dazu die folgende Konfigurationsdatei in einem Texteditor Ihrer Wahl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-bond0
```

Mit diesem Befehl wird eine leere Textdatei geöffnet. Zum Konfigurieren der Verbindungsschnittstelle fügen Sie Folgendes am Ende der Textdatei ein:

```bash
DEVICE=bond0
TYPE=Bond
NAME = bond0
BOOTPROTO=keine
ONBOOT=ja
BONDING_MASTER=ja
IPADDR = 10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS = "mode = 802.3ad miimon = 100"
```

> [!primary]
>
> Sie können jede private IP-Adresse und jedes Subnetz Ihrer Wahl verwenden.
>

Speichern und schließen Sie die Datei, sobald Sie die Richtigkeit der Angaben bestätigt haben.  Als nächstes müssen wir beide physischen Schnittstellen konfigurieren. Standardmäßig verfügt auf einem OVH-Server nur *eth0* über eine Konfigurationsdatei. Öffnen Sie sie mit dem folgenden Befehl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-eth0
```

Standardgemäß wird die Datei wird folgt angezeigt:

```bash
DEVICE=eth0
BOOTPROTO=statisch
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=ja
GATEWAY=203.0.113.254
IPV6INIT=ja
IPV6_AUTOCONF=nein
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Die IP-Adressen unterscheiden sich bei jedem Server.
>

Wir werden die Datei folgendermaßen ändern:

```bash
DEVICE=eth0
BOOTPROTO=statisch
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=ja
#GATEWAY=203.0.113.254
#IPV6INIT=ja
#IPV6_AUTOCONF=nein
# IPV6ADDR = 2001: 0db8: 0000: 0001 :: / 64
TYPE=Ethernet
HWADDR = 00: 53: 00: 00: 00: 00
MASTER=bond0
SLAVE=ja
```

> [!primary]
>
> Die Hardwareadresse (MAC-Adresse) der Netzwerkkarte kann mit dem zuvor verwendeten Befehl *ip a* ermittelt werden.  Das ist die Nummer neben „link/ether“ in der Ausgabe.
>

Das *#* vor einer Zeile bedeutet, dass der Server diese Zeile beim Lesen der Datei ignoriert. Daher ignorieren wir diese Zeilen vollständig, wenn wir unsere Schnittstellendatei für *eth1* erstellen. Wir erstellen die Konfigurationsdatei *eth1* mit dem folgenden Befehl:

```bash
vi / etc / sysconfig / network-scripts / ifcfg-eth1
```

Dieses Mal ist die Datei leer. Fügen Sie den folgenden Inhalt zur Datei hinzu:

```bash
DEVICE=eth1
BOOTPROTO=statisch
ONBOOT=ja
TYPE=Ethernet
HWADDR = 00: 53: 00: 00: 00: 01
MASTER=bond0
SLAVE=ja
```

Abschließend starten wir den Netzwerk-Daemon mit dem folgenden Befehl neu:

```bash
systemctl-Netzwerk neu starten
```

Um zu testen, ob unsere Verbindung funktioniert, senden Sie einen Ping-Befehl an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie bereit. Ist dies nicht der Fall, überprüfen Sie Ihre Einstellungen oder starten Sie den Server neu.

## Fazit

OVHcloud bietet unseren Kunden die Freiheit und Flexibilität, ihre Hardware so einzusetzen, wie es ihren Bedürfnissen am besten entspricht. Nachdem Sie diesen Artikel gelesen haben, sollten Sie in der Lage sein, OVHcloud Link Aggregation (OLA) in CentOS 7 zu konfigurieren, um beide Ihrer NICs als verbundene private Schnittstellen zu verwenden.