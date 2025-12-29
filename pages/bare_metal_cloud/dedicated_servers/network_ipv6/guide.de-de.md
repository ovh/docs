---
title: "IPv6 auf einem Dedicated Server konfigurieren"
excerpt: "Erfahren Sie hier, wie Sie IPv6-Adressen auf unserer Infrastruktur konfigurieren"
updated: 2025-12-09
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

Internet Protocol Version 6 (IPv6) ist die neueste Version des Internet Protocol (IP). Die Ausschöpfung der verfügbaren IPv4-Adressen wird schon lange erwartet. Hier soll die neue Version Abhilfe schaffen, indem statt der bisherigen 32 Bit der IPv4-Adressen 128-Bit-Adressen verwendet werden. Die Server der Reihen High Grade, Scale und Advance (seit Juli 2024) werden mit einem /56 IPv6 Block geliefert, ältere Server mit einem /64 IPv6 Block. Ein Server, der mit einem /56 IPv6 Block geliefert wird, erlaubt es, bis zu 18 Trillionen IP-Adressen zu verwenden.

**Diese Anleitung erklärt anhand verschiedener Beispiele, wie Sie IPv6-Adressen auf Ihrem Server konfigurieren.**

> [!primary]
>
> Dieser Artikel behandelt die primäre IP-Konfiguration. Für Server, die vRack Konnektivität unterstützen, können Sie Additional IP Adressen auch im vRack konfigurieren, statt der öffentlichen Schnittstelle Ihres Servers. Die entsprechenden Anweisungen finden Sie in diesen Anleitungen:
>
> - IPv4: [IP-Block im vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)
> - IPv6: [Configuring an IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)
>

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](/links/partner) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](/links/community) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie haben Ihre IPv6-Informationen bereit (Präfix, Gateway etc.)
- Sie verfügen über Grundkenntnisse im Umgang mit [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) und in der Netzwerkverwaltung.

> [!warning]
> Beachten Sie, dass die Server der Reihe Kimsufi mit einem einzigen IPv6 Block (/128) bereitgestellt werden. IPv6 wird bei der Installation des Betriebssystems automatisch eingerichtet.
>

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen der derzeit von uns angebotenen Distributionen sowie die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt besteht immer darin, sich via SSH oder GUI (RDP für einen Windows Server) mit Ihrem Server zu verbinden.

Auf Dedicated Servern ist die erste IPv6 als 2607:5300:xxxx:xxxx::/64 deklariert. Wenn wir Ihrem Server beispielsweise den IPv6-Bereich `2607:5300:abcd:efgh::/64` zugewiesen haben, lautet die erste IPv6-Adresse Ihres Servers `2607:5300:abcd:efgh::`.

Standardmäßig ist die erste IPv6 auf den meisten neueren Linux-Distributionen konfiguriert, die wir für die Installation anbieten. Das Gateway ist also bereits in der Konfigurationsdatei enthalten. In den meisten Fällen müssen Sie es nicht manuell hinzufügen.

Beachten Sie die folgende Terminologie, die in Codebeispielen und Anweisungen der nachfolgenden Abschnitte verwendet wird:

|Bezeichnung|Beschreibung|Beispiel|
|---|---|---|
|YOUR_IPV6|IPv6-Adresse des IPv6-Blocks, der Ihrem Server zugewiesen ist|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Präfix (oder *netmask*) Ihres IPv6-Blocks, normalerweise 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Gateway Ihres IPv6-Blocks|2607:5300:xxxx:ff:ff:ff:ff oder fe80::1|

In unseren Beispielen verwenden wir den Texteditor `nano`. Sie können natürlich auch einen beliebigen Texteditor verwenden.

### Standard-Gateway

Der erste Schritt besteht darin, das Ihrem Server zugewiesene IPv6-Gateway abzurufen.

> [!tabs]
> **Über Ihr Kundencenter**
>>
>> Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server im Bereich `Dedicated Server`{.action} aus.
>>
>> Das Ihrem Server zugewiesene IPv6-Gateway wird im Bereich `Netzwerk` des Tab `Allgemeine Informationen`{.action} angezeigt. Nach dem Kopieren fahren Sie mit der Anwendung der IPv6-Konfiguration fort.
>>
>> ![configureIPv6](images/ipv6_information.png){.thumbnail}
>>
> **Über die OVHcloud API**
>>
>> Eine weitere Möglichkeit, die Netzwerkinformationen Ihres Servers abzurufen, ist die Verwendung der [OVHcloud API](/pages/manage_and_operate/api/first-steps).
>>
>> Führen Sie den folgenden API-Aufruf unter Angabe des internen Servernamens (Beispiel: `ns3956771.ip-169-254-10.eu`) aus:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>> >
>>

Nullstellen können in einem IPv6-Gateway ausgelassen werden.

Beispiel:

IPv6_GATEWAY `2607:5300:60:62FF:00FF:00FF:00FF:00FF` kann auch als `2607:5300:60:62FF:FF:FF:FF:FF` geschrieben werden.

> [!warning]
> 
> Erstellen Sie vor der Änderung einer Konfigurationsdatei immer ein Backup des Originals, um es im Fehlerfall wiederherstellen zu können. 
> 

> [!primary]
> Bei einigen Betriebssystemen ist das Hinzufügen von statischen IPv6-Routen in die ursprüngliche Konfigurationsdatei notwendig und wird standardmäßig durchgeführt. Wenn dies der Fall ist, fügen Sie einfach Ihre Konfiguration für IPv6 wie in der Anleitung beschrieben hinzu und ändern Sie keine Zeile in der Originaldatei.
>

/// details | **Debian und Debian-basierte Betriebssysteme (außer Debian 12)**

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

Die Netzwerkkonfigurationsdatei Ihres Servers befindet sich in `/etc/network/interfaces.d`. In unserem Beispiel heißt sie `50-cloud-init`. Erstellen Sie eine Sicherungskopie der Datei mit dem folgenden Befehl:

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
///

/// details | **Fedora 42 und höhere Versionen**

Die folgende Beispielkonfiguration basiert auf Fedora 42.

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
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Wenn Sie mehr IPv6-Adressen konfigurieren müssen, sollte die Konfiguration wie folgt aussehen:

```console
[ipv6]
method=manual
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

```console
[ipv6]
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Zusätzliche IPv6-Adressen hinzufügen:

```console
[ipv6]
method=manual
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
///

/// details | **Debian 12, Ubuntu 22.04 und höhere Versionen**

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
///

/// details | **CentOS 7, AlmaLinux (8/9/10) und Rocky Linux (8/9/10)**

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

Bei AlmaLinux und Rocky Linux kann der Inhalt der Konfigurationsdatei von dem oben genannten abweichen. In diesem Fall genügt es, die fehlenden Elemente hinzuzufügen. Ersetzen Sie nichts in der Originaldatei.

Wenn Sie weitere IPv6-Adressen auf Ihrer Maschine benötigen, fügen Sie diese in der Zeile `IPV6ADDR_SECONDARIES` durch Leerzeichen getrennt hinzu.

```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Beispielkonfiguration:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

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

**Für AlmaLinux und Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

Sie können Ihren Server auch neu starten, um die Änderungen zu übernehmen.

///

/// details | **Windows Server 2016 und höhere Versionen**

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

///

### Konfiguration überprüfen und die Verbindung testen.

Je nach Betriebssystem gibt es mehrere mögliche Befehle, um die Konfiguration zu überprüfen.

- **Für ein GNU/Linux-System** sind hier zwei Beispiele für das **eth0**-Interface (anzupassen, falls erforderlich):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    altname enxa8a1598c6836
    inet6 2607:5300:201:abcd::/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 2607:5300:201:abcd::1/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2607:5300:201:abcd::/64
          Scope:Global
          inet6 addr: 2607:5300:201:abcd::1/64
          Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Um die Verbindung zu testen, können Sie folgenden Befehl verwenden:

```bash
ping6 -c 4 proof.ovh.net
```

- **Für ein Windows-System** verwenden Sie den folgenden Befehl:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::/64
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::1/64
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd:ff:ff:ff:ff:ff
                                       51.xxx.xxx.y
```

Um die Verbindung zu testen, verwenden Sie folgenden Befehl:

```powershell
ping -6 proof.ovh.net
```

Sie können auch die Verbindung zu einem anderen Remote-Server testen. IPv6 muss jedoch auf dem Remote-Server aktiv sein, damit diese Operation funktioniert.

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

Treten Sie unserer [User Community](/links/community) bei.