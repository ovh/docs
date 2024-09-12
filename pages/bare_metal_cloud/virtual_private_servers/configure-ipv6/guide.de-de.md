---
title: "IPv6 auf einem VPS einrichten"
excerpt: "Erfahren Sie hier, wie Sie IPv6 auf Ihrem OVHcloud VPS konfigurieren"
updated: 2024-09-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

IPv6 ist die neueste Version des *Internet Protocol* (IP). Jeder OVHcloud VPS wird mit einer IPv4-Adresse sowie einer IPv6-Adresse ausgeliefert. Standardmäßig ist nur IPv4 eingerichtet. Wenn Sie IPv6 konfigurieren möchten, müssen Sie dies manuell in Ihrem System tun.

**Diese Anleitung erklärt, wie Sie IPv6 auf Ihrem OVHcloud VPS über mehrere Methoden konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie verfügen über einen [OVHcloud VPS](https://www.ovhcloud.com/de/vps/).
- Sie haben administrativen Zugriff (sudo) auf Ihren VPS über SSH oder RDP (Windows).
- Sie verfügen über grundlegende Netzwerkkenntnisse.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) / die [OVHcloud API](https://api.ovh.com/).

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten Konfigurationen für die derzeit von uns angebotenen Distributionen sowie für die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt besteht immer darin, sich über SSH oder eine GUI-Session (RDP für einen Windows VPS) mit Ihrem Server zu verbinden.

> [!warning]
>
> Beachten Sie, dass bei den neuesten Linux-Betriebssystemen, die wir für VPS anbieten, die IPv6-Adresse standardmäßig konfiguriert ist. In diesem Fall müssen Sie sie nicht konfigurieren. Überprüfen Sie die Konfigurationsdatei Ihres Betriebssystems, bevor Sie Änderungen vornehmen.
>

Die Konfiguration von IPv6 auf Ihrem VPS umfasst mehrere Schritte. Sie werden regelmäßig aufgefordert, Befehle einzugeben oder die Konfiguration Ihres Servers anzupassen. 

Beachten Sie die folgende Terminologie, die in Codebeispielen und Anweisungen der nachfolgenden Abschnitte verwendet wird:

|Bezeichnung|Beschreibung|Beispiel|
|---|---|---|
|YOUR_IPV6|Die IPv6-Adresse, die Ihrem Dienst zugewiesen ist|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Das Präfix (oder *netmask*) Ihres IPv6-Blocks, in der Regel 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Das Gateway Ihres IPv6-Blocks|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Schritt 1: Die erforderlichen Netzwerkinformationen abrufen

Der erste Schritt besteht darin, die Ihrem Server zugewiesene IPv6-Adresse sowie das zugehörige IPv6-Gateway zu ermitteln. Hierzu stehen Ihnen zwei Möglichkeiten zur Auswahl:

- [Netzwerkinformationen über das Kundencenter abrufen](#viacontrolpanel)
- [Netzwerkinformationen via API abrufen](#viaapi)

#### Über Ihr Kundencenter <a name="viacontrolpanel"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server in `Virtual Private Server`{.action} aus.

Die Ihrem Server zugewiesene IPv6-Adresse sowie das zugehörige IPv6-Gateway werden im Tab `Start`{.action} unter `IP` angezeigt. Kopieren Sie diese und fahren Sie fort mit Schritt 2, [IPv6-Konfiguration anwenden](#applyipv6).

![ipv6 konfigurieren](images/vps_ipv6_information.png){.thumbnail}

#### Über die OVHcloud API <a name="viaapi"></a>

Klicken Sie auf der [OVHcloud API Seite](https://api.ovh.com/) oben rechts auf `Login`{.action} ein. Geben Sie auf der nächsten Seite Ihre OVHcloud Kundenkennung ein. 

Verwenden Sie diesen Aufruf, um die zu Ihrem Server gehörige IPv6-Adresse zu erhalten:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips
>

Mit dem folgenden Aufruf können Sie das Ihrem Server zugewiesene IPv6-Gateway abfragen:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips/{ipAddress}
>

Wenn Sie die Adressen erhalten haben, fahren Sie fort mit Schritt 2, [IPv6-Konfiguration anwenden](#applyipv6).

### Schritt 2: IPv6-Konfiguration anwenden <a name="applyipv6"></a>

Sobald Sie die zur IPv6-Konfiguration notwendigen Informationen haben, verbinden Sie sich via SSH mit Ihrem VPS. Wenn nötig lesen Sie unsere Anleitung "[SSH Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

Es gibt mehrere Vorgehensweisen, um die IPv6-Konfiguration anzuwenden. Folgen Sie der Methode, die am besten zu Ihrer Situation und Ihren Ansprüchen passt.

- [Nonpersistente Anwendung](#nonpersistent)
- [Persistente Anwendung auf Debian und Derivaten (Ubuntu, Crunchbang, SteamOS, etc.)](#persistentdebian)
- [Persistente Anwendung auf Red Hat und Derivaten (CentOS, Rocky Linux, Alma Linux, etc.)](#persistentredhat)
- [Persistente Anwendung auf Fedora](#persistentfedora)
- [Persistente Anwendung auf Windows Server](#persistentwindows)

#### Nonpersistente Anwendung <a name="nonpersistent"></a>

> [!warning]
>
> Diese Konfiguration geht bei einem Neustart Ihres VPS verloren. 
> 

Wenn Sie via SSH mit Ihrem VPS verbunden sind, verwenden Sie die nachfolgenden Befehle. Denken Sie daran, diese für folgende Elemente anzupassen:

- die zuvor abgerufenen Netzwerkinformationen (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*)
- das Netzwerkinterface, falls dieses nicht **eth0** ist

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Persistente Anwendung auf Debian und Derivaten (Ubuntu, Crunchbang, SteamOS, etc.) <a name="persistentdebian"></a>

> [!warning]
>
> Erstellen Sie immer ein Backup des Originals, bevor Sie eine Konfigurationsdatei bearbeiten.
>

Es gibt zwei Methoden, um Ihr Netzwerk entsprechend dem auf Ihrem Server installierten Betriebssystem zu konfigurieren:

- **Für Debian 10 und 11**: Verwenden Sie [die auf der Datei *interfaces* basierende Methode](#interfaces).

- **Für Debian 12, Ubuntu 20.04 und spätere Versionen**: Verwenden Sie [die *Netplan*-Methode](#netplan).

In einigen Fällen kann es sein, dass die oben genannte Methode nicht die passende ist. Um sicherzugehen, überprüfen Sie auf Ihrem System die aktive Methode. Besuchen Sie <https://netplan.io/> für weitere Informationen.<br>
Beachten Sie auch, dass die exakten Dateinamen variieren können.

##### Konfiguration von *interfaces* <a name="interfaces"></a>

Standardmäßig befinden sich die Konfigurationsdateien unter `/etc/network/interfaces.d/`.

Als *Best Practice* wird empfohlen, eine Konfigurationsdatei im Verzeichnis `/etc/network/interfaces.d/` zu erstellen.

In unserem Beispiel heißt unsere Datei `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Auf diese Weise können Sie die IPv6-Konfiguration absondern und die Änderungen im Fehlerfall problemlos rückgängig machen.

Fügen Sie folgende Zeilen zur Datei hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (falls Ihr Server nicht **eth0** verwendet) durch Ihre individuellen Werte.

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Hier ein praktisches Beispiel:

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

Starten Sie anschließend Ihren Netzwerkdienst mit einem der folgenden Befehle neu:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

Je nach Generation des auf dem Server installierten Betriebssystems können Sie die oben angegebene Konfiguration auch zu einer der folgenden Dateien hinzufügen (mit *sudo*-Berechtigungen):

- Datei `/etc/network/interfaces`
- Datei `/etc/network/interfaces.d/50-Cloud-init.cfg`

Wir empfehlen Ihnen, die relevante Konfigurationsdatei zu sichern. Verwenden Sie zum Beispiel folgenden Befehl:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Sie können die Änderungen dann mithilfe folgender Befehle rückgängig machen:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

##### Konfiguration mit *Netplan* <a name="netplan"></a>

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/netplan/`. Standardmäßig heißt die Hauptkonfigurationsdatei `50-cloud-init.yaml`. Bevor Sie fortfahren, überprüfen Sie zunächst diese Datei, um festzustellen, ob die IPv6-Adresse bereits konfiguriert wurde. Ist das der Fall, müssen Sie die IPv6-Adresse nicht erneut konfigurieren, da Sie nur eine IPv6-Adresse mit Ihrem VPS haben.

Wenn die IPv6-Adresse noch nicht konfiguriert wurde, sollten Sie eine separate Konfigurationsdatei, um die IPv6-Adressen im Verzeichnis `/etc/netplan/` zu konfigurieren. Auf diese Weise können Sie Änderungen im Falle eines Fehlers leicht rückgängig machen.

Außerdem empfehlen wir Ihnen, die Berechtigungen für die neu erstellte Datei anzupassen. Weitere Informationen zu Dateiberechtigungen finden Sie in der [offiziellen Dokumentation von Ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.

In unserem Beispiel heißt unsere Datei `51-cloud-init-ipv6.yaml`:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Bearbeiten Sie anschließend die Datei `51-cloud-init-ipv6.yaml`, indem Sie die folgenden Zeilen für die IPv6-Konfiguration hinzufügen. Ersetzen Sie die generischen Elemente (d. h. *YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (wenn Ihr Server **eth0** nicht verwendet) durch Ihre spezifischen Werte.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
# If IPV6_PREFIX is 128 then add link route to gateway
#              - to: IPv6_GATEWAY
#                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

Hier ein praktisches Beispiel (mit Präfix /128):

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: 2607:5300:201:abcd::1
                scope: link
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>

Sie können Ihre Konfiguration mit folgendem Befehl testen:

```bash
sudo netplan try
```

Ist die Änderung korrekt, verwenden Sie folgenden Befehl:

```bash
sudo netplan apply
```

#### Persistente Anwendung auf RedHat und dessen Derivaten (CentOS, Rocky Linux, Alma Linux, etc.) <a name="persistentredhat"></a>

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/sysconfig/network-scripts/`. Wir empfehlen Ihnen, zuerst die entsprechende Konfigurationsdatei zu sichern. Kopieren Sie beispielsweise die Datei `ifcfg-eth0` mit folgenden Befehlen. Denken Sie daran, **eth0** gegebenenfalls durch Ihr reales Interface zu ersetzen.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Sie können die Änderungen dann mithilfe folgender Befehle rückgängig machen:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Ändern Sie anschließend die Datei `ifcfg-eth0`, indem Sie die IPv6-Konfiguration Ihres Servers hinzufügen. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) durch Ihre personalisierten Werte.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Hier ein praktisches Beispiel:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

**In CentOS 7 müssen Sie zusätzlich zu den oben aufgeführten Schritten eine Routing-Datei erstellen:**

- Erstellen Sie eine Datei (mit *sudo*-Berechtigungen), die Ihre Standard-IPv6-Routen angibt:

```bash
sudo touch /etc/sysconfig/network-scripts/route6-eth0
```

- Bearbeiten Sie die Datei und fügen Sie die folgenden Zeilen hinzu. Ersetzen Sie die generischen Elemente (*IPV6_GATEWAY* und **eth0**, falls erforderlich) durch Ihre personalisierten Werte.

```console
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Hier ein praktisches Beispiel:

```console
2607:5300:201:abcd::1 dev eth0
default via 2607:5300:201:abcd::1
```

Starten Sie schließlich den Netzwerkdienst mit einem der folgenden Befehle neu, damit Ihr System die neue Konfiguration anwendet:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Persistente Anwendung auf Fedora 37 und höher <a name="persistentfedora"></a>

Die Netzwerkkonfigurationsdatei befindet sich unter `/etc/NetworkManager/system-connections/`. Wir empfehlen Ihnen, zunächst eine Sicherungskopie der entsprechenden Konfigurationsdatei anzulegen. In unserem Beispiel heißt unsere Datei `cloud-init-eth0.nmconnection`, daher kopieren wir die Datei `cloud-init-eth0.nmconnection` mit den folgenden Befehlen. Falls nötig, ersetzen Sie **eth0** durch Ihr aktuelles Interface.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Anschließend bearbeiten wir die Datei `cloud-init-eth0.nmconnection` und fügen nur die Zeilen für die IPv6-Konfiguration des Servers hinzu. Ersetzen Sie die generischen Elemente (d. h. *YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) durch die entsprechenden Werte.

Wenn wir davon ausgehen, dass Ihr Interface **eth0** ist, sollte die Konfiguration wie folgt aussehen:

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Wir haben die IPv4-Konfiguration ausgelassen, um Verwechslungen zu vermeiden, aber die IPv6-Konfiguration wird in derselben Konfigurationsdatei vorgenommen.

Hier ein praktisches Beispiel:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

#### Persistente Anwendung auf Windows Server <a name="persistentwindows"></a>

IPv6 ist standardmäßig nicht auf Windows Servern konfiguriert. Um es zu aktivieren, öffnen Sie die Systemsteuerung und klicken Sie auf `View network status and tasks`{.action} und danach auf `Change adapter settings`{.action}.

![ipv6 konfigurieren](images/configure-ipv6-step2.png){.thumbnail}

Klicken Sie auf `Ethernet`{.action}, um die Einstellungen zu öffnen, und klicken Sie auf `Properties`{.action}, um das Fenster `Ethernet Properties` anzuzeigen`.

Wählen Sie `Internet Protocol Version 6 (TCP/IPv6)`{.action} aus und klicken Sie dann auf den Button `Properties`{.action}.

![ipv6 konfigurieren](images/configure-ipv6-step3.png){.thumbnail}

Wählen Sie nun `Use the following IPv6 address`{.action} und geben Sie die IP-Adressen ein, die Sie im ersten Schritt identifiziert haben.

Sie können auch die DNS-Resolver Ihrer Wahl eintragen, unter `Use the following DNS server addresses`{.action}. Dies ist nicht erforderlich, wenn die DNS-Resolver der IPv4-Konfiguration bereits funktional sind.

Setzen Sie schließlich einen Haken bei `Validate settings upon exit` und klicken Sie auf den Button `OK`{.action}, um die Änderungen zu bestätigen. Es kann eine Fehlermeldung angezeigt werden, wenn sich das angegebene Gateway nicht im gleichen IPv6-Subnetz befindet (/128 und /64, zum Beispiel). Sie können diese Nachricht ignorieren und zum nächsten Schritt übergehen.

![ipv6 konfigurieren](images/configure-ipv6-step4.png){.thumbnail}

### Schritt 3: Konfiguration überprüfen und die Verbindung testen.

Je nach Betriebssystem gibt es mehrere mögliche Befehle, um die Konfiguration zu überprüfen.

- **Für ein GNU/Linux-System** sind hier zwei Beispiele für das **eth0**-Interface (anzupassen, falls erforderlich):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2607:5300:201:abcd::7c5/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2607:5300:201:abcd::7c5/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Um die Verbindung zu testen, können Sie folgenden Befehl verwenden:

```bash
ping6 proof.ovh.net
```

- **Für ein Windows-System** verwenden Sie den folgenden Befehl:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::7c5/128
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd::1
                                       51.xxx.xxx.y
```

Um die Verbindung zu testen, verwenden Sie folgenden Befehl:

```powershell
ping -6 proof.ovh.net
```

Sie können auch die Verbindung zu einem anderen Remote-Server testen. IPv6 muss jedoch auf dem Remote-Server aktiv sein, damit diese Operation funktioniert.

> [!primary]
>
> Wenn IPv6 trotz dieser Änderungen anscheinend nicht auf Ihrem Server funktioniert, kann es (in seltenen Fällen) sein, dass weitere Änderungen erforderlich sind. Führen Sie in diesem Fall folgende Operationen durch:
>
> - Je nach Betriebssystem versuchen Sie, das Präfix (*netmask*) der IP-Adresse mit /64 zu ersetzen. Dies schließt das IPv6 Gateway in Ihr Subnetz ein.
>
> - Zusätzlich zum Neustart des Netzwerkdienstes muss Ihr Server möglicherweise neu gestartet werden, um die Übernahme Ihrer IPv6-Konfiguration abzuschließen.
> 
> - Überprüfen Sie in Windows, ob die Firewall ICMP-Anfragen für IPv6 erlaubt.

### Schritt 4: Cloud-init Netzwerkmanagement deaktivieren (optional)

> [!primary]
>
> Dieser Schritt gilt nicht für Windows-Systeme.
>

Cloud-init ist ein Paket, das standardmäßig auf den VPS installiert ist. Es handelt sich hierbei um ein Framework, mit dem ein Skript nach der Erstellung oder einem Neustart Ihres Servers ausgeführt werden kann. Diese Funktion erlaubt der darunterliegenden OpenStack-Infrastruktur, Skripte in die Cloud-init-Umgebung, und somit in die Serverkonfiguration, zu injizieren.

Je nach Betriebssystem verwaltet Cloud-init: das Netzwerk, den Hostnamen, die Datei resolv.conf sowie im Falle eines Upgrades die automatische Partitionierung der Disk.

Bei neueren Distributionen (CentOS, Debian 9, Ubuntu 16.x und nachfolgenden Versionen) kann die Standardkonfiguration von Cloud-init manchmal automatisch die Netzwerkkonfiguration beim Start des Servers zurücksetzen.

In bestimmten Anwendungsfällen wird empfohlen, ein Zurücksetzen zu vermeiden, indem die automatische Netzwerkverwaltung in Cloud-init deaktiviert wird. Verwenden Sie hierzu den folgenden Befehl, um eine Datei `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` mit dem Wert `network: {config: disabled}` zu erstellen:

```bash
sudo echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Möglicherweise muss der Server neu gestartet werden, damit die Änderung aktiv wird. 
>

Um die automatische Netzwerkverwaltung mit Cloud-init wieder zu aktivieren, löschen Sie die neu erstellte Datei oder verschieben Sie sie in ein anderes Verzeichnis.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
