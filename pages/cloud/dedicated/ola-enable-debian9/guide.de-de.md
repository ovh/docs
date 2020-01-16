---
title: 'So konfigurieren Sie Ihre NetzweSo konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9'
slug: ola-debian9
excerpt: 'Die OVHcloud Link Aggregation auf Ihrem Debian 9-Server aktivieren'
section: 'Fortgeschrittene Nutzung'
---

**Letzte Aktualisierung am 24\. Oktober 2019**

## Ziel

Die OVHcloud Link Aggregation (OLA)-Technologie wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen überflüssig machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet. In diesem Artikel werden wir behandeln, wie Sie Ihre Netzwerkkarten verbinden, um sie für OLA in Debian 9 zu verwenden.  

## Anforderungen

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation im OVH-Manager](https://docs.ovh.com/de/dedicated/ola-manager){.external}

> [!warning]
>
> Sie müssen das ifenslave-Paket auf den Server herunterladen, bevor Sie OLA im OVH-Manager oder in der API aktivieren können. Verwenden Sie dazu bitte den folgenden Befehl:
>
> ```
> apt install ifenslave
> ```
>

## Anleitung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen. Melden Sie sich dazu zuerst beim [OVH-Manager](https://www.ovh.com/manager/){.external} an.  Wählen Sie dann in der linken Seitenleiste den Server aus, den Sie konfigurieren möchten, und klicken Sie auf die Registerkarte **IPMI**.

![Remote-KVM](images/remote_kvm.png){.thumbnail}

Klicken Sie anschließend auf die Schaltfläche **Aus einem Java-Applet (KVM)**. Ein JNLP-Programm wird heruntergeladen. Öffnen Sie das Programm, um das IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Bei Verwendung einer OVH-Vorlage werden die NICs standardmäßig entweder mit *ethX* oder *enoX* gekennzeichnet. Wenn Sie keine OVH-Vorlage verwenden, können Sie die Namen Ihrer Schnittstellen mit dem folgenden Befehl ermitteln:

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

## Fazit

OVHcloud bietet unseren Kunden die Freiheit und Flexibilität, ihre Hardware so einzusetzen, wie es ihren Bedürfnissen am besten entspricht. Nachdem Sie diesen Artikel gelesen haben, sollten Sie in der Lage sein, OVHcloud Link Aggregation (OLA) in Debian 9 zu konfigurieren, um beide Ihrer NICs als verbundene private Schnittstellen zu verwenden. 
