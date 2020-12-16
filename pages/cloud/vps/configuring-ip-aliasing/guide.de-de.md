---
title: 'IP-Adresse als Alias konfigurieren'
slug: ip-aliasing-vps
excerpt: 'Hier erfahren Sie, wie Sie Ihre VPS-Konfiguration mit Failover-IPs verbinden'
section: 'Netzwerk und IP'
---

**Letzte Aktualisierung am 8 April 2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

IP-Alias (*IP Aliasing*) ist eine spezielle Netzwerkkonfiguration für Ihre OVHcloud Server, mit der Sie mehrere IP-Adressen über ein einziges Netzwerkinterface verbinden können.

**In dieser Anleitung erfahren Sie, wie Sie Failover-IPs zu Ihrer Netzwerkkonfiguration hinzufügen.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Account
- eine Failover-IP-Adresse oder einen Failover-IP-Block (RIPE)
- einen Administrator-Zugang (root) über SSH oder einen remote desktop (Windows) auf Ihrem Server


## In der praktischen Anwendung

> [!primary]
>
Wenn Sie eine neuere Distribution verwenden möchten, kann es für die Konfiguration Ihres Netzwerkinterfaces Anpassungen geben. Bei Problemen empfehlen wir Ihnen die Dokumentation zu Ihrem Betriebssystem. 
> 

Hier die Konfigurationen für die wichtigsten Distributionen und Betriebssysteme.

### Debian 9

#### Schritt 1: Automatische Netzwerkkonfiguration deaktivieren

Öffnen Sie zuerst die folgende Datei wie folgt:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Ändern Sie anschließend die Datei mit der unten stehenden Konfiguration. Dadurch wird verhindert, dass die Konfiguration Ihres Netzwerks automatisch geändert wird.

```sh
network: { config disabled
```

### Schritt 2: Netzwerkkonfigurationsdatei bearbeiten

Öffnen Sie die Netzwerkkonfigurationsdatei, um diese mit folgendem Befehl zu ändern:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Ändern Sie die Datei mit folgender Konfiguration:

> [!primary]
>
Beachten Sie, dass sich die Namen der Netzwerkinterfaces in unseren Beispielen von Ihren eigenen Namen unterscheiden können. Bitte passen Sie die entsprechenden Benutzernamen an.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Jede Failover-IP benötigt in dieser Datei eine eigene Zeile. Die Konfigurationsdatei Ihrer Failover-IPs muss als "50-cloud-init.yaml"bezeichnet werden.

#### Schritt 1: die Konfigurationsdatei erstellen

Verbinden Sie sich via SSH mit Ihrem Server und führen Sie folgenden Befehl aus:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Ändern Sie anschließend die Datei mit folgendem Inhalt:

```sh
network:
    version: 2
    ethernets:
        ihr_netzwerkinterface:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: ihr_netzwerk_interface
            addresses:
            - Ihre_ip_failover/32
```

Speichern und schließen Sie die Datei.

Geben Sie anschließend die Konfiguration an:

```sh
# netplan apply
# netplan try
```

Wiederholen Sie diesen Vorgang für jede Failover-IP.

### CentOS und Fedora (25 und frühere Versionen)

#### Schritt 1: Die Quelldatei erstellen

Kopieren Sie zuerst die Quelldatei, um diese als Vorlage verwenden zu können:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Schritt 2: Die Quelldatei bearbeiten

Sie können nun die Datei eth0:0 ändern, um die IP-Adresse zu ersetzen:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Ersetzen Sie zunächst den Namen des Device und ersetzen Sie anschließend die bestehende IP-Adresse mit der Failover-IP, die Sie erhalten haben:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # Prozent CentOS verwenden Sie "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### Schritt 3: Interface neu starten

Starten Sie jetzt Ihr Interface neu:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### Schritt 1: Die Haupt-IP-Konfiguration überprüfen

Zunächst müssen wir die Informationen der primären IP-Adresse abrufen:

![Die Haupt-IP-Konfiguration überprüfen](images/image1-1.png){.thumbnail}

#### Schritt 2: IPv4 Eigenschaften ändern

Die IP-Eigenschaften der "automatischen"Konfiguration müssen manuell in die "statische"Konfiguration geändert werden:

![die IP-Konfiguration ändern](images/image2.png){.thumbnail}

Wir können nun die zuvor erhaltenen IP-Informationen definieren:

![die IP-Konfiguration ändern](images/image3-3.png){.thumbnail}

#### Schritt 3: Die Failover-IP im Bereich 'Fortgeschrittene Konfiguration' hinzufügen

![fortgeschrittener Konfigurationsabschnitt](images/image4-4.png){.thumbnail}

Hier müssen wir die Failover-IP-Informationen und die zugehörige Subnetzmaske festlegen (normalerweise ist die Subnetzmaske 255.255.255.255).

![Konfiguration der Failover-IP](images/image5-5.png){.thumbnail}

#### Schritt 4: Neustart des Netzwerkinterfaces

Wir führen zuerst den Deaktivierungsvorgang durch.

![Netzwerkdeaktivierung](images/image6.png){.thumbnail}

Dann der Aktivierungsprozess.

![Netzwerkaktivierung](images/image7.png){.thumbnail}

#### Schritt 5: Überprüfung der neuen Netzwerkkonfiguration

Mit der Konsole und dem Befehl ipconfig ___können___ wir die neue Netzwerkkonfiguration überprüfen.

![Aktuelle Netzwerkkonfiguration überprüfen](images/image8-8.png){.thumbnail}


### cPanel (auf CentOS 6)

#### Schritt 1: Die Quelldatei erstellen

Kopieren Sie zuerst die Quelldatei, damit Sie jederzeit zu einem früheren Zeitpunkt zurückkehren können:

```sh
cp /etc/ips /etc/ips.bak
```

#### Schritt 2: Die Quelldatei bearbeiten

Ändern Sie die Datei /etc/ips:

```sh
editor /etc/ips
```

Fügen Sie anschließend die Failover-IP zur Datei hinzu:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Fügen Sie dann die IP-Adresse in /etc/ipaddrpool hinzu:

```bash
IP_FAILOVER
```

#### Schritt 3: Interface neu starten

Starten Sie jetzt Ihr Interface neu:

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### Schritt 1: auf die Verwaltung der IP-Adressen im Konfigurationspanel zugreifen

Gehen Sie in den Bereich ```Tools & Settings``` > ```IP Addresses``` :

![Zugang zur Verwaltung der IP-Adressen](images/pleskip1.png){.thumbnail}

#### Schritt 2: zusätzliche IP-Informationen hinzufügen

Klicken Sie auf den Button `Add IP Address`{.action}:

![IP-Informationen hinzufügen](images/pleskip2-2.png){.thumbnail}

Fügen Sie die zusätzlichen IP-Informationen in das Formular ein und klicken Sie auf `OK`{.action}.

![IP-Informationen hinzufügen](images/pleskip3-3.png){.thumbnail}

#### Schritt 3: Die aktuelle IP-Konfiguration im Plesk Konfigurationspanel überprüfen

![aktuelle IP-Konfiguration](images/pleskip4-4.png){.thumbnail}

### Fehlerdiagnose

Wenn Sie keine Verbindung zwischen dem öffentlichen Netzwerk und Ihrer Alias-IP herstellen können und ein Netzwerkproblem vermuten, starten Sie den Server im Rescue-Modus neu und konfigurieren Sie den Alias direkt auf dem Server.

Wenn Sie Ihren Server im Rescue-Modus neu gestartet haben, geben Sie hierzu folgenden Befehl ein:

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Ersetzen Sie FAILOVER_IP mit der tatsächlichen Failover-IP.

Danach müssen Sie nur von außen ein Ping auf Ihren IPFO senden. Wenn dies funktioniert, muss wahrscheinlich ein Konfigurationsfehler korrigiert werden. Wenn die IP dagegen noch nicht funktioniert, informieren Sie bitte unsere Teams, indem Sie eine Support-Anfrage aus Ihrem [OVHcloud Kundencenter erstellen](https://www.ovh.com/manager/dedicated/#/support/tickets/new), um mehr Informationen zu erhalten.
 
## Weiterführende Informationen

[Rescue-Modus für einen VPS aktivieren](../rescue/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
