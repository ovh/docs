---
title: 'IPv6 auf einem VPS einrichten'
slug: ipv6-konfigurieren
excerpt: Erfahren Sie hier, wie Sie IPv6 auf Ihrem OVHcloud VPS konfigurieren'
section: 'Netzwerk & IP'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 01.12.2022**

## Ziel

IPv6 ist die neueste Version des *Internet Protocol* (IP). Jeder OVHcloud VPS wird mit einer IPv4-Adresse sowie einer IPv6-Adresse ausgeliefert. Standardmäßig ist nur IPv4 eingerichtet. Wenn Sie IPv6 konfigurieren möchten, müssen Sie dies manuell in Ihrem System tun.

**In dieser Anleitung erfahren Sie, wie Sie IPv6 auf Ihrem OVHcloud VPS über mehrere Methoden konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie verfügen über einen [OVHcloud VPS](https://www.ovhcloud.com/de/vps/).
- Sie haben administrativen Zugriff (Root) auf Ihren VPS über SSH oder RDP (Windows).
- Sie verfügen über grundlegende Netzwerkkenntnisse.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) / die [OVHcloud API](https://api.ovh.com/console/).

## In der praktischen Anwendung

> [!primary]
>
> Die in dieser Anleitung aufgeführten Konfigurationen können je nach verwendetem Betriebssystem variieren.
> 

Die Konfiguration von IPv6 auf Ihrem VPS umfasst mehrere Schritte. Sie werden regelmäßig aufgefordert, Befehle einzugeben oder die Konfiguration Ihres Servers anzupassen. 

Bitte beachten Sie die folgende Terminologie, die in Codebeispielen und Anweisungen der nachfolgenden Abschnitte verwendet wird:

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

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server in `Virtual Private Server`{.action} aus.

Die Ihrem Server zugewiesene IPv6-Adresse sowie das zugehörige IPv6-Gateway werden im Tab `Start`{.action} unter `IP` angezeigt. Kopieren Sie diese und fahren Sie fort mit Schritt 2, [IPv6-Konfiguration anwenden](#applyipv6).

![ipv6 konfigurieren](images/configure-ipv6-step1.png){.thumbnail}

#### Über die OVHcloud API <a name="viaapi"></a>

Klicken Sie auf der [OVHcloud API Seite](https://api.ovh.com/console/) oben rechts auf `Login`{.action} ein. Geben Sie auf der nächsten Seite Ihre OVHcloud Kundenkennung ein. 

Verwenden Sie diesen Aufruf, um die zu Ihrem Server gehörige IPv6-Adresse zu erhalten:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

Mit dem folgenden Aufruf können Sie das Ihrem Server zugewiesene IPv6-Gateway abfragen:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Wenn Sie die Adressen erhalten haben, fahren Sie fort mit Schritt 2, [IPv6-Konfiguration anwenden](#applyipv6).

### Schritt 2: IPv6-Konfiguration anwenden <a name="applyipv6"></a>

Sobald Sie die zur IPv6-Konfiguration notwendigen Informationen haben, verbinden Sie sich via SSH mit Ihrem VPS. Wenn nötig lesen Sie unsere Anleitung "[SSH Einführung](../../dedicated/ssh-einfuehrung/)".

Es gibt mehrere Vorgehensweisen, um die IPv6-Konfiguration anzuwenden. Folgen Sie der Methode, die am besten zu Ihrer Situation und Ihren Ansprüchen passt.

- [Nonpersistente Anwendung](#nonpersistent)
- [Persistente Anwendung auf Debian und Derivaten (Ubuntu, Crunchbang, SteamOS, etc.)](#persistentdebian)
- [Persistente Anwendung auf Red Hat und Derivaten (CentOS, ClearOS, etc.)](#persistentredhat)
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

- **für Debian 11 und älter, Ubuntu 16.04 und darunter**: Verwenden Sie [die auf der *interfaces*-Datei basierende Methode](#interfaces).

- **für Ubuntu 17.04 und spätere Versionen**: Verwenden Sie [die *Netplan*-Methode](#netplan).

In einigen Fällen kann es sein, dass die oben genannte Methode nicht die passende ist. Um sicherzugehen, überprüfen Sie auf Ihrem System die aktive Methode. Besuchen Sie <https://netplan.io/> für weitere Informationen.<br>
Beachten Sie auch, dass die exakten Dateinamen variieren können.


##### Konfiguration von *interfaces* <a name="interfaces"></a>

Als *Best Practice* wird empfohlen, eine Konfigurationsdatei im Verzeichnis `/etc/network/interfaces.d/` zu erstellen:

```bash
nano /etc/network/interfaces.d/51-Cloud-init-ipv6
```

Auf diese Weise können Sie die IPv6-Konfiguration absondern und die Änderungen im Fehlerfall problemlos rückgängig machen.

Fügen Sie folgende Zeilen zur Datei hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (falls Ihr Server nicht **eth0** verwendet) durch Ihre personalisierten Werte.

```
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

Starten Sie anschließend Ihren Netzwerkdienst mit einem der folgenden Befehle neu:

```bash
service networking restart
```

```bash
systemctl restnetworking
```

Je nach Generation des auf dem Server installierten Betriebssystems können Sie die oben angegebene Konfiguration auch zu einer der folgenden Dateien hinzufügen (mit *sudo*-Berechtigungen):

- Datei `/etc/network/interfaces`
- Datei `/etc/network/interfaces.d/50-Cloud-init.cfg`

Wir empfehlen Ihnen, die relevante Konfigurationsdatei zu sichern. Verwenden Sie zum Beispiel folgenden Befehl:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Sie können die Änderungen dann mithilfe folgender Befehle rückgängig machen:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

##### Konfiguration mit *Netplan* <a name="netplan"></a>

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/netplan/`. Wir empfehlen Ihnen, zuerst die entsprechende Konfigurationsdatei zu sichern. Kopieren Sie in diesem Fall die Datei `50-Cloud-init.yaml` mit folgenden Befehlen:

```bash
cd /etc/netplan/
mkdir backup
cp 50-Cloud-init.yaml backup/50-Cloud-init.yaml
```

Sie können die Änderungen dann mithilfe folgender Befehle rückgängig machen:

```bash
rm -f /etc/netplan/50-Cloud-init.yaml
cp /etc/netplan/backup/50-Cloud-init.yaml /etc/netplan/50-Cloud-init.yaml
```

Erstellen Sie vor der Bearbeitung eine Kopie der IPv6-Konfigurationsdatei:

```bash
cd /etc/netplan
cp 50-Cloud-init.yaml 51-Cloud-init-ipv6.yaml
```

Ändern Sie anschließend die `51-Cloud-init-ipv6.yaml`-Datei, indem Sie die IPv6-Konfiguration Ihres Servers hinzufügen. Ersetzen Sie die generischen Elemente (*YOUR_IPV*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (falls Ihr Server nicht **eth0** verwendet) durch Ihre personalisierten Werte.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
              - to: IPv6_GATEWAY
                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
>
> Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>

Sie können Ihre Konfiguration mit folgendem Befehl testen:

```bash
netplan try
```

Ist die Änderung korrekt, verwenden Sie folgenden Befehl:

```bash
netplan apply
```

#### Persistente Anwendung auf Red Hat und dessen Derivaten (CentOS, ClearOS, etc.) <a name="persistentDat"></a>

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/sysconfig/network-scripts/`. Wir empfehlen Ihnen, zuerst die entsprechende Konfigurationsdatei zu sichern. Kopieren Sie beispielsweise die Datei `ifcfg-eth0` mit folgenden Befehlen. Denken Sie daran, **eth0** gegebenenfalls durch Ihr reales Interface zu ersetzen.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Sie können die Änderungen dann mithilfe folgender Befehle rückgängig machen:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Ändern Sie anschließend die Datei `ifcfg-eth0`, indem Sie die IPv6 Konfiguration Ihres Servers hinzufügen. Ersetzen Sie die generischen Elemente (*YOUR_IPV*, *IPV6_PREFIX* und *IPV6_GATEWAY*) durch Ihre personalisierten Werte.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

**In CentOS 7 müssen Sie zusätzlich zu den oben aufgeführten Schritten eine Routing-Datei erstellen:**

- Erstellen Sie eine Datei (mit *sudo*-Berechtigungen), die Ihre Standard-IPv6-Routen angibt:

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

- Bearbeiten Sie die Datei und fügen Sie die folgenden Zeilen hinzu. Ersetzen Sie die generischen Elemente (*IPV6_GATEWAY* und **eth0**, falls erforderlich) durch Ihre personalisierten Werte.

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Starten Sie schließlich den Netzwerkdienst mit einem der folgenden Befehle neu, damit Ihr System die neue Konfiguration anwendet:

```bash
service networking restart
```

```bash
systemctl restnetworking
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
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Um die Verbindung zu testen, können Sie folgenden Befehl verwenden:

```bash
ping6 proof.ovh.net
```

- **Für ein Windows-System** verwenden Sie den folgenden Befehl:

```
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Um die Verbindung zu testen, verwenden Sie folgenden Befehl:

```
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

Je nach Betriebssystem verwaltet Cloud-init: das Netzwerk, den Hostnamen, die Datei resolv.conf sowie im Falle eines Upgrades die automatische Partitionierung der Festplatte.

Bei neueren Distributionen (CentOS, Debian 9, Ubuntu 16.x und nachfolgenden Versionen) kann die Standardkonfiguration von Cloud-init manchmal automatisch die Netzwerkkonfiguration beim Start des Servers zurücksetzen.

In bestimmten Anwendungsfällen wird empfohlen, ein Zurücksetzen zu vermeiden, indem die automatische Netzwerkverwaltung in Cloud-init deaktiviert wird. Verwenden Sie hierzu den folgenden Befehl, um eine Datei `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` mit dem Wert `network: {config: disabled}` zu erstellen:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Möglicherweise muss der Server neu gestartet werden, damit die Änderung aktiv wird. 
>

Um die automatische Netzwerkverwaltung mit Cloud-init wieder zu aktivieren, löschen Sie die neu erstellte Datei oder verschieben Sie sie in ein anderes Verzeichnis.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
