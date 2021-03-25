---
title: 'So konfigurieren Sie Ihre NetzweSo konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9'
slug: ola-debian9
excerpt: 'Die OVHcloud Link Aggregation auf Ihrem Debian 9-Server aktivieren'
section: 'Fortgeschrittene Nutzung'
order: 2
---

**Letzte Aktualisierung am 25.03.2021**

## Ziel

Die OVHcloud Link Aggregation (OLA)-Technologie wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen überflüssig machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.

**Diese Anleitung erklärt, wie Sie Ihre Netzwerkkarten verbinden, um sie für OLA in Debian 9 zu verwenden.**

## Anforderungen

- [Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation im OVHcloud Kundencenter](../ola-manager).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
>
> Sie müssen das ifenslave-Paket auf den Server herunterladen, bevor Sie OLA im OVH-Manager oder in der API aktivieren können. Verwenden Sie dazu bitte den folgenden Befehl:
>
> ```
> apt install ifenslave
> ```
>

## Anleitung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen.
<br>Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie im Bereich `Bare Metal Cloud`{.action} im linken Menü auf `Dedicated Server`{.action}, wählen Sie Ihren Server aus und klicken Sie dann auf den Tab `IPMI`{.action} (1).

Klicken Sie anschließend auf die Schaltfläche `Mit einem Java-Applet (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2021.png){.thumbnail}

Ein JNLP-Programm wird heruntergeladen. Öffnen Sie das Programm, um das IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Bei Verwendung einer OVHcloud-Vorlage werden die NICs standardmäßig entweder mit *ethX* oder *enoX* gekennzeichnet. Wenn Sie keine OVHcloud-Vorlage verwenden, können Sie die Namen Ihrer Schnittstellen mit dem folgenden Befehl ermitteln:

```bash
ip a
```

> [!primary]
>
> Mit diesem Befehl werden zahlreiche „Schnittstellen“ verknüpft. Wenn Sie Probleme haben, die physischen NICs zu bestimmen, wird die öffentliche IP-Adresse des Servers weiterhin standardmäßig der ersten Schnittstelle zugeordnet.
>

Sobald wir die Namen unserer beiden Netzwerkkarten ermittelt haben, konfigurieren wir die Netzwerkkartenbindung im Betriebssystem. Erstellen Sie die Schnittstellendatei mit dem folgenden Befehl in einem Texteditor Ihrer Wahl:

```bash
vi /etc/network/interfaces
```

Mit diesem Befehl wird eine leere Textdatei geöffnet. Zum Konfigurieren der Bond-Schnittstelle fügen Sie Folgendes am Ende der Textdatei ein:

```bash
auto bond0
  iface bond0 inet static
  Adresse 10.0.0.1/24
  Bond-Modus 802.3ad
  Bond-Sklaven eno1 eno2
  Bond-Miimon 100
  Bond-Downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer3 + 4

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Sie müssen die letzte Zeile nur dann zur Datei hinzufügen, wenn Sie das private Netzwerk über IPv6 konfigurieren möchten.
>

Abschließend starten wir den Netzwerk-Daemon mit dem folgenden Befehl neu:

```bash
Systemctl-Netzwerk neu starten
```

Dieser Neustart kann einige Minuten dauern, da die Bond-Schnittstelle erstellt wird.  Um zu testen, ob unsere Verbindung funktioniert, senden Sie einen Ping-Befehl an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie bereit. Ist dies nicht der Fall, überprüfen Sie Ihre Einstellungen oder starten Sie den Server neu.

## Weiterführende Informationen

[So konfigurieren Sie die OVHcloud Link Aggregation im OVHcloud Kundencenter](../ola-manager/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](../ola-centos7/)

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
