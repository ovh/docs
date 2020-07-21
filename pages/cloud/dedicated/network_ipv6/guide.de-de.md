---
title: 'IPv6 auf einem Dedicated Server konfigurieren'
slug: netzwerk-ipv6
excerpt: 'Erfahren Sie hier, wie Sie IPv6-Adressen auf unserer Infrastruktur konfigurieren'
section: 'IP & Netzwerk'
---

**Letzte Aktualisierung am 20.07.2020**

## Ziel

Internet Protocol Version 6 (IPv6) ist die neueste Version des Internet Protocol (IP). Die Ausschöpfung der verfügbaren IPv4-Adressen wird schon lange erwartet. Hier soll die neue Version Abhilfe schaffen, indem statt der bisherigen 32 Bit der IPv4-Adressen 128-Bit-Adressen verwendet werden. Alle OVHcloud Dedicated Server werden mit einem /64 IPv6-Block ausgeliefert. Das entspricht über 18 Trillionen IP-Adressen, aus denen Sie wählen können.

**Diese Anleitung erklärt anhand verschiedener Beispiele, wie Sie IPv6-Adressen auf Ihrem Server konfigurieren.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovh.de/dedicated_server/) in Ihrem Kunden-Account.
- Sie haben Ihre IPv6-Informationen bereit (Präfix, Gateway etc.)
- Sie verfügen über Grundkenntnisse im Umgang mit [SSH](http://de.wikipedia.org/wiki/Secure_Shell) und in der Netzwerkverwaltung.

## In der praktischen Anwendung

Falls Sie für die Installation Ihres Servers ein Linux-OS-Template von OVHcloud verwenden, werden Sie feststellen, dass die erste (Haupt-) IPv6 bereits konfiguriert ist.


> [!primary]
>
> Das Standard-Gateway für Ihr IPv6-Block (IPv6_GATEWAY) ist immer xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. 
>
> Zum Beispiel:
> 
> - Die IPv6-Adresse des Servers ist 2607:5300:60:62ac::/64. Das IPv6_GATEWAY ist daher 2607:5300:60:62FF:FF:FF:FF:FF.
> - Die IPv6-Adresse des Servers ist 2001:41D0:1:46e::/64. Das IPv6_GATEWAY ist daher 2001:41D0:1:4FF:FF:FF:FF:FF.
>

### Debian und Debian-basierte Betriebssysteme

> [!warning]
>
> Es wird ausdrücklich empfohlen, dass Sie vor Befolgen der nachstehenden Schritte die IPv6-Autokonfiguration und -Router-Ankündigung deaktivieren. Fügen Sie hierzu die folgenden Zeilen zu Ihrer `sysctl.conf`-Datei, die sich in /etc/sysctl.conf befindet:
> 
> `net.IPv6.conf.all.autoconf=0`
> 
> `net.IPv6.conf.all.accept_ra=0`
> 
> Anschließend können Sie diese Regeln über folgenden Befehl anwenden: `sh sysctl -p`.
> 

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](../erste-schritte-dedicated-server/#auf-dem-server-einloggen).

#### Schritt 2: Netzwerkkonfigurationsdatei Ihres Servers öffnen

Die Netzwerkkonfigurationsdatei Ihres Servers befindet sich in /etc/network/interfaces. Verwenden Sie die Kommandozeile, um die Datei zu finden und zur Bearbeitung zu öffnen. Denken Sie daran, vorher ein Backup zu erstellen.

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Bearbeiten Sie die Datei so, dass Sie wie das folgende Beispiel aussieht. In diesem Beispiel heißt das Netzwerkinterface `eth0`. Das Interface Ihres Servers hat eventuell einen anderen Namen.

```sh
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 128

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Sie können weitere IPv6-Adressen hinzufügen, indem Sie die entsprechenden `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64`-Zeilen in der Datei hinzufügen.

#### Schritt 4: Datei speichern und Änderungen anwenden

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```


Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](../ovh-rescue/).

### Fedora 26 und höhere Versionen

> [!warning]
>
> Dieses Beispiel wurde mit CentOS 7.0 erstellt. Wenn Sie andere Redhat-Derivate verwenden, können die Ergebnisse abweichen.
>

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](../erste-schritte-dedicated-server/#auf-dem-server-einloggen).


#### Schritt 2: Netzwerkkonfigurationsdatei Ihres Servers öffnen

Die Netzwerkkonfigurationsdatei Ihres Servers befindet sich in /etc/sysconfig/network-scripts/ifcfg-eth0. Verwenden Sie die Kommandozeile, um die Datei zu finden und zur Bearbeitung zu öffnen.

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Bearbeiten Sie die Datei so, dass Sie wie das folgende Beispiel aussieht. In diesem Beispiel heißt das Netzwerkinterface eth0. Das Interface Ihres Servers hat eventuell einen anderen Namen. Um Verwirrungen zu vermeiden, ist die IPv4-Failover-Konfiguration hier nicht aufgeführt. Die IPv6-Konfiguration wird jedoch in derselben Konfigurationsdatei vorgenommen.

```sh
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPv6/64
IPV6ADDR_SECONDARIES=YOUR_2nd_IPv6/64 YOUR_3rd_IPv6/64
IPV6_DEFAULTGW=IPv6_GATEWAY
```
Wenn Sie weitere IPv6-Adressen auf Ihrer Maschine benötigen, fügen Sie diese in der Zeile `IPV6ADDR_SECONDARIES` durch Leerzeichen getrennt hinzu.

#### Schritt 4: Datei speichern und Änderungen anwenden

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](../ovh-rescue/).

### FreeBSD

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](../erste-schritte-dedicated-server/#auf-dem-server-einloggen).


#### Schritt 2: Netzwerkkonfigurationsdatei Ihres Servers öffnen

Die Netzwerkkonfigurationsdatei Ihres Servers befindet sich in /etc/rc.conf. Verwenden Sie die Kommandozeile, um die Datei zu finden und zur Bearbeitung zu öffnen.

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Bearbeiten Sie die Datei so, dass Sie wie das folgende Beispiel aussieht. In diesem Beispiel heißt das Netzwerkinterface em0. Das Interface Ihres Servers hat eventuell einen anderen Namen.

```sh
IPv6_activate_all_interfaces="YES" 
IPv6_defaultrouter="IPv6_GATEWAY" 
ifconfig_em0_IPv6="inet6 IPv6_Address prefixlen 64"
ifconfig_em0_alias0="inet6 IPv6_Address_2 prefixlen 64"
ifconfig_em0_alias1="inet6 IPv6_Address_3 prefixlen 64"
```

#### Schritt 4: Datei speichern und Server neu starten

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Wenn Sie diese IPv6-Adresse nicht anpingen können, überprüfen Sie Ihre Konfiguration und versuchen Sie es erneut. Stellen Sie außerdem sicher, dass die Maschine, von der aus Sie die Konnektivität testen, mit IPv6 verbunden ist. Sollte es immer noch nicht funktionieren, testen Sie Ihre Konfiguration im [Rescue-Modus](../ovh-rescue/).

### Ubuntu 18.04

#### Schritt 1: SSH für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](../erste-schritte-dedicated-server/#auf-dem-server-einloggen).

#### Schritt 2: Netzwerkkonfigurationsdatei Ihres Servers öffnen

Öffnen Sie die Netzwerkkonfigurationsdatei in /etc/systemd/network. In unserem Beispiel heißt die Datei 50-default.network.

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Verwenden Sie einen Text-Editor, um die Datei zu bearbeiten, und fügen Sie die folgenden Zeilen in den betreffenden Abschnitten hinzu (siehe nachstehendes Beispiel):

```sh
[Network]
Destination=Gateway_Address

[Address]
Address=IPv6_Address/64

[Route]
Destination=Gateway_Address
Scope=link
```
Um mehrere IPv6-Adressen hinzuzufügen, fügen Sie mehrere \[Address]-Abschnitte hinzu:

```sh
[Address]
Address=IPv6_Address_2/64

[Address]
Address=IPv6_Address_3/64
```
#### Schritt 4: Datei speichern und Server neu starten

Speichern Sie die Änderungen in der Datei und starten Sie anschließend das Netzwerk oder Ihren Server neu, um die Änderungen anzuwenden.

#### Schritt 5: IPv6-Konnektivität testen

Sie können die IPv6-Konnektivität testen, indem Sie folgende Befehle ausführen:

```
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
>>> 4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2012

#### Schritt 1: RDP für die Verbindung mit Ihrem Server verwenden

Weitere Informationen finden Sie in [dieser Anleitung](../erste-schritte-dedicated-server/#auf-dem-server-einloggen).


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

Geben Sie Ihre IPv6-Konfiguration (`IPv6-Adresse` und `Standardgateway`) ein und klicken Sie auf `OK`{.action}.

![Eigenschaften](images/ipv6_configuration.png){.thumbnail}

### Troubleshooting

Sollten Sie nach dem Testen Ihrer Verbindung weiterhin Probleme feststellen, erstellen Sie bitte eine Support-Anfrage im Kundencenter, um Ihre Konfiguration prüfen zu lassen. Geben Sie dabei folgende Informationen an:

- Name und Version des auf Ihrem Server verwendeten Betriebssystems
- Name und Verzeichnis der Netzwerkkonfigurationsdatei 
- Inhalt dieser Datei 


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
