---
title: "IPv6 auf einem Dedicated Server konfigurieren"
excerpt: "Erfahren Sie hier, wie Sie IPv6-Adressen auf unserer Infrastruktur konfigurieren"
updated: 2024-03-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Internet Protocol Version 6 (IPv6) ist die neueste Version des Internet Protocol (IP). Die Ausschöpfung der verfügbaren IPv4-Adressen wird schon lange erwartet. Hier soll die neue Version Abhilfe schaffen, indem statt der bisherigen 32 Bit der IPv4-Adressen 128-Bit-Adressen verwendet werden. Die Server der Reihen High Grade, Scale und Advance (seit Juli 2024) werden mit einem /56 IPv6 Block geliefert, ältere Server mit einem /64 IPv6 Block. Ein Server, der mit einem /56 IPv6 Block geliefert wird, erlaubt es, bis zu 18 Trillionen IP-Adressen zu verwenden.

**Diese Anleitung erklärt anhand verschiedener Beispiele, wie Sie IPv6-Adressen auf Ihrem Server konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Ihre IPv6-Informationen bereit (Präfix, Gateway etc.)
- Sie verfügen über Grundkenntnisse im Umgang mit [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) und in der Netzwerkverwaltung.

> [!warning]
> Beachten Sie, dass die Server der Reihe Kimsufi mit einem einzigen IPv6 Block (/128) bereitgestellt werden. IPv6 wird bei der Installation des Betriebssystems automatisch eingerichtet.
>

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen der derzeit von uns angebotenen Distributionen sowie die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt besteht immer darin, sich via SSH oder GUI (RDP für einen Windows Server) mit Ihrem Server zu verbinden.

Auf Dedicated Servern ist die erste IPv6 als 2607:5300:xxxx:xxxx::/64 deklariert. Wenn wir Ihrem Server beispielsweise den IPv6-Bereich `2607:5300:abcd:efgh::/64` zugewiesen haben, lautet die erste IPv6-Adresse Ihres Servers `2607:5300:abcd:efgh::/64`.

Standardmäßig ist die erste IPv6 auf den meisten neueren Linux-Distributionen konfiguriert, die wir für die Installation anbieten. Das Gateway ist also bereits in der Konfigurationsdatei enthalten. In den meisten Fällen müssen Sie es nicht manuell hinzufügen.

Beachten Sie die folgende Terminologie, die in Codebeispielen und Anweisungen der nachfolgenden Abschnitte verwendet wird:

|Bezeichnung|Beschreibung|Beispiel|
|---|---|---|
|YOUR_IPV6|IPv6-Adresse des IPv6-Blocks, der Ihrem Server zugewiesen ist|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Präfix (oder *netmask*) Ihres IPv6-Blocks, normalerweise 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Gateway Ihres IPv6-Blocks|2607:5300:xxxx:ff:ff:ff:ff oder fe80::1|

In unseren Beispielen verwenden wir den Texteditor `nano`. Sie können natürlich auch einen beliebigen Texteditor verwenden.

### Standard-Gateway

Der erste Schritt besteht darin, das Ihrem Server zugewiesene IPv6-Gateway abzurufen. Es gibt zwei Möglichkeiten. Fahren Sie mit der Methode fort, die Sie verwenden möchten.

- [Netzwerkinformationen über das Kundencenter abrufen](#viacontrolpanel).
- [Netzwerkinformationen über API abrufen](#viaapi).

#### Über Ihr Kundencenter <a name="viacontrolpanel"></a>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server im Bereich `Dedicated Server`{.action} aus.

Das Ihrem Server zugewiesene IPv6-Gateway wird im Bereich `Netzwerk` des Tab `Allgemeine Informationen`{.action} angezeigt. Nachdem Sie die Datei kopiert haben, fahren Sie mit Schritt 2 "[IPv6-Konfiguration anwenden](#applyipv6)" fort.

![configureIPv6](images/ipv6_information.png){.thumbnail}

#### Über die OVHcloud API <a name="viaapi"></a>

Eine weitere Möglichkeit, die Netzwerkinformationen Ihres Servers abzurufen, ist die Verwendung der [OVHcloud API](/pages/manage_and_operate/api/first-steps).

Führen Sie den folgenden API-Aufruf unter Angabe des internen Servernamens (Beispiel: `ns3956771.ip-169-254-10.eu`) aus:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Nullstellen können in einem IPv6-Gateway ausgelassen werden.

Beispiel:

IPv6_GATEWAY `2607:5300:60:62FF:00FF:00FF:00FF:00FF` kann auch als `2607:5300:60:62FF:FF:FF:FF:FF` geschrieben werden.

> [!warning]
> 
> Erstellen Sie vor der Änderung einer Konfigurationsdatei immer ein Backup des Originals, um es im Fehlerfall wiederherstellen zu können. 
> 

### Debian und Debian-basierte Betriebssysteme (außer Debian 12)

Die folgende Beispielkonfiguration basiert auf Debian 11 (Bullseye).

> [!warning]
>
> Es wird ausdrücklich empfohlen, dass Sie vor Befolgen der nachstehenden Schritte die IPv6-Autokonfiguration und die Router-Ankündigung deaktivieren. Fügen Sie hierzu die folgenden Zeilen Ihrer `sysctl.conf`-Datei hinzu, die sich in /etc/sysctl.conf befindet:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Anschließend können Sie diese Regeln über folgenden Befehl anwenden: `sudo sysctl -p`.
> 

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

```sh
ssh user@serverIP
```

#### Schritt 2: Backup erstellen

Die Netzwerkkonfigurationsdatei Ihres Servers befindet sich in `/etc/network/interfaces.d`. Erstellen Sie eine Sicherungskopie der Datei mit einem der folgenden Befehle, bevor Sie den Vorgang fortsetzen:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Ändern Sie keine vorhandenen Zeilen in der Konfigurationsdatei. Fügen Sie die Zeilen für Ihre IPv6-Konfiguration hinzu und ersetzen Sie `YOUR_IPv6` und `IPv6_PREFIX` durch Ihre eigenen Werte. In diesem Beispiel heißt die Netzwerkschnittstelle `eth0`. Das Interface Ihres Servers kann abweichen.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address YOUR_IPv6
    netmask IPv6_PREFIX

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Debian 10**

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

Zusätzliche IPv6-Adressen können mit folgenden Zeilen in der Konfigurationsdatei hinzugefügt werden: `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, etc.

Um sicherzustellen, dass IPv6 aktiviert oder deaktiviert ist, wenn das Interface **eth0** aktiviert oder deaktiviert ist, müssen Sie folgende Zeile zur Konfiguration hinzufügen:

`down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
`down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`

**Beispielkonfiguration:**

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Zusätzliche IPv6-Adressen hinzufügen:

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64
    up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
    up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Schritt 4: Datei speichern und Änderungen anwenden

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

```sh
sudo /etc/init.d/networking restart
```

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 38 und höhere Versionen

Die folgende Beispielkonfiguration basiert auf Fedora 39.

Fedora verwendet Schlüsseldateien (*keyfiles*).

Fedora hat zuvor Netzwerkprofile verwendet, die NetworkManager im Format ifcfg im Verzeichnis `/etc/sysconfig/network-scripts/` gespeichert hat.<br>
Da ifcfg nun veraltet ist, erstellt NetworkManager die neuen Profile in diesem Format nicht mehr standardmäßig. Die Konfigurationsdatei befindet sich nun unter `/etc/NetworkManager/system-connections/`.

In diesem Beispiel heißt die Datei `cloud-init-eno1.nmconnection`.

#### Schritt 1: Über SSH die Verbindung mit Ihrem Server herstellen

```sh
ssh user@serverIP
```

#### Schritt 2: Backup erstellen

> [!primary]
>
> Beachten Sie, dass der Name der Netzwerkdatei in unserem Beispiel von Ihrem Namen abweichen kann. Ersetzen Sie dies durch den Namen Ihrer Datei.
>

Erstellen Sie zunächst eine Kopie der Quelldatei, damit Sie jederzeit zurücksetzen können:

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Bearbeiten Sie die Datei, indem Sie die folgenden Zeilen hinzufügen, ohne die Originaldatei zu ändern. Ersetzen Sie die generischen Elemente (`YOUR_IPV6` und `IPv6_PREFIX`) durch Ihre spezifischen Werte. Wir haben auch die IPv4-Konfiguration ausgelassen, um Verwechslungen zu vermeiden, aber die IPv6-Konfiguration erfolgt in derselben Konfigurationsdatei.

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Wenn Sie mehr IPv6-Adressen konfigurieren müssen, sollte die Konfiguration wie folgt aussehen:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Beispielkonfiguration:**

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Anschließend bearbeiten wir die Konfigurationsdatei:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Zusätzliche IPv6-Adressen hinzufügen:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
address3=2607:5300:adce:f2cd::2/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Schritt 4: Datei speichern und Änderungen anwenden

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

```sh
sudo systemctl restart NetworkManager
```

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgenden Befehl ausführen:

```sh
ping6 -c 4 2001:4860:4860::8888
```

```console
PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Debian 12, Ubuntu 20.04 und höhere Versionen

Die folgende Beispielkonfiguration basiert auf Ubuntu 22.04 (Jammy Jellyfish).

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/netplan/`. Standardmäßig heißt die Hauptkonfigurationsdatei `50-cloud-init.yaml`.

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

```sh
ssh user@serverIP
```

#### Schritt 2: Netzwerkkonfigurationsdatei erstellen

Am besten erstellen Sie eine separate Konfigurationsdatei mit der Erweiterung .yaml, um IPv6-Adressen im Verzeichnis `/etc/netplan/` zu konfigurieren. Auf diese Weise können Sie Änderungen im Falle eines Fehlers leicht rückgängig machen.

In unserem Beispiel heißt unsere Datei `51-cloud-init-ipv6.yaml`:

```sh
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Bearbeiten Sie mithilfe eines Texteditors die Datei `51-cloud-init-ipv6.yaml`, indem Sie der Datei die folgenden Zeilen hinzufügen, wie im folgenden Beispiel gezeigt.

Ersetzen Sie die generischen Elemente (d. h. `YOUR_IPV6` und `IPV6_PREFIX`) sowie das Netzwerkinterface (wenn Ihr Server **eno3** nicht verwendet) durch Ihre spezifischen Werte.

```yaml
network:
    version: 2
    ethernets:
         eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPV6_PREFIX
```

Wenn Sie mehrere IPv6-Adressen konfigurieren müssen, sollte die Konfiguration folgendermaßen aussehen:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
              - ADDITIONAL_IPV6_1/IPv6_PREFIX
              - ADDITIONAL_IPV6_2/IPv6_PREFIX
```

> [!warning]
>
> Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>

**Beispielkonfiguration:**

```sh
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Anschließend bearbeiten wir die Konfigurationsdatei:

```yaml
network:
    version: 2
    ethernets:
          eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
```

Für mehrere IPV6-Adressen:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
```

#### Schritt 4: Konfiguration testen und anwenden

Sie können Ihre Konfiguration mit folgendem Befehl testen:

```sh
sudo netplan try
```

Ist der Befehl korrekt, verwenden Sie den folgenden Befehl:

```sh
sudo netplan apply
```

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### CentOS 7, Alma Linux (8 & 9) und Rocky Linux (8 & 9)

Die folgende Beispielkonfiguration basiert auf CentOS 7.

Die Netzwerkkonfigurationsdatei befindet sich im Verzeichnis `/etc/sysconfig/network-scripts`. In unserem Beispiel heißt es `ifcfg-eth0`.

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

```sh
ssh user@serverIP
```

#### Schritt 2: Backup erstellen

> [!primary]
>
> Beachten Sie, dass der Name der Netzwerkdatei in unserem Beispiel von Ihrem Namen abweichen kann. Passen Sie die Angaben an Ihren Dateinamen an.
>

Erstellen Sie zunächst eine Kopie der Konfigurationsdatei, damit Sie jederzeit zur vorherigen Version zurückkehren können:

```sh
sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Fügen Sie in der geöffneten Konfigurationsdatei die folgenden Zeilen hinzu, falls diese fehlen. Ersetzen Sie die generischen Elemente (`YOUR_IPv6`, `IPV6_GATEWAY` und `IPV6_PREFIX`) durch Ihre spezifischen Werte. Außerdem haben wir die IPv4-Konfiguration ausgelassen, um Verwechslungen zu vermeiden, aber die IPv6-Konfiguration wird in derselben Konfigurationsdatei vorgenommen.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Bei Alma Linux und Rocky Linux kann der Inhalt der Konfigurationsdatei von dem oben genannten abweichen. In diesem Fall genügt es, die fehlenden Elemente hinzuzufügen. Ersetzen Sie nichts in der Originaldatei.

Wenn Sie weitere IPv6-Adressen auf Ihrer Maschine benötigen, fügen Sie diese in der Zeile `IPV6ADDR_SECONDARIES` durch Leerzeichen getrennt hinzu.

```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Beispielkonfiguration:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

Anschließend bearbeiten wir die Konfigurationsdatei:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Für mehrere IPV6-Adressen:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
```

#### Schritt 4: Datei speichern und Änderungen übernehmen

Speichern Sie die Änderungen in der Datei, und starten Sie das Netzwerk dann mit einem der folgenden Befehle neu:

```sh
sudo systemctl restart network
```

**Für Alma Linux und Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

Sie können Ihren Server auch neu starten, um die Änderungen zu übernehmen.

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Windows Server 2016 und höhere Versionen

#### Schritt 1: RDP für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#auf-dem-server-einloggen).

#### Schritt 2: Netzwerkkonfiguration Ihres Servers öffnen

Klicken Sie zuerst mit der rechten Maustaste auf das Netzwerksymbol im Meldungsbereich, um zum `Netzwerk- und Freigabecenter`{.action} zu gelangen.

![Netzwerk- und Freigabecenter](images/ipv6_network_sharing_center.png){.thumbnail}

Klicken Sie auf `Adaptereinstellungen ändern`{.action}.

![Adaptereinstellungen ändern](images/ipv6_change_adapter_settings.png){.thumbnail}

Klicken Sie mit der rechten Maustaste auf Ihren Netzwerkadapter und klicken Sie dann auf `Eigenschaften`{.action}.

![Netzwerkadapter Eigenschaften](images/ipv6_network_adapter_properties.png){.thumbnail}

Wählen Sie `Internetprotokoll, Version 6 (TCP/IPv6)`{.action} aus und klicken Sie auf `Eigenschaften`{.action}.

![Eigenschaften](images/ipv6_properties.png){.thumbnail}

#### Schritt 3: Netzwerkkonfiguration bearbeiten 

Geben Sie Ihre IPv6-Konfiguration ein (`IPv6-Adresse` und `Standardgateway`), setzen Sie einen Haken bei `Einstellungen beim Beenden bestätigen` und klicken Sie auf `OK`{.action}, um Ihre Änderungen zu bestätigen.

![Eigenschaften](images/ipv6_configuration.png){.thumbnail}

### Troubleshooting

Wenn Ihre IPv6-Konfiguration dennoch nicht funktioniert, können Sie herausfinden, ob der Fehler in der durchgeführten Konfiguration oder im Netzwerk von OVHcloud liegt.

Versetzen Sie Ihren Server zunächst in den [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Nutzen Sie dann die folgenden Befehle, um Ihr IPv6 nicht-persistent zu konfigurieren, indem Sie "YOUR_IPV6", "IPV6_PREFIX" und "IPV6_GATEWAY" durch Ihre eigenen Werte ersetzen:

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Testen Sie Ihr Netzwerk erneut mit einem Ping6, zum Beispiel:

```sh
ping6 ipv6.google.com
```

Wenn Ihr Server antwortet, wurde wahrscheinlich einer der Schritte Ihrer ursprünglichen Konfiguration fehlerhaft ausgeführt.

Zögern Sie in jedem Fall nicht, sich an [unser Support-Team](https://help.ovhcloud.com/csm?id=csm_get_help) zu wenden, um Ihre Konfigurationen zu überprüfen. Es müssen folgende Angaben gemacht werden:

- Name und Version des auf Ihrem Server verwendeten Betriebssystems
- Name und Verzeichnis der Netzwerkkonfigurationsdatei 
- Inhalt dieser Datei 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
