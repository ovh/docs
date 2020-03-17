---
title: 'IPv6 auf einem VPS einrichten'
slug: ipv6-konfigurieren
excerpt: 'So konfigurieren Sie IPv6 auf Ihrem OVH VPS'
section: 'Netzwerk und IP'
order: 1
---

**Stand 12.03.2020**

## Einleitung

IPv6 ist die neueste Version des *Internet Protocol* (IP). Jeder OVH VPS wird mit einer IPv4-Adresse und einer IPv6-Adresse geliefert. Standardmäßig ist nur IPv4 eingerichtet. Allerdings möchten Sie möglicherweise aus verschiedenen Gründen auch IPv6 konfigurieren.

**In dieser Anleitung erfahren Sie, wie Sie eine IPv6 auf Ihrem OVH VPS einrichten.**

> [!warning]
>
> OVH stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten. Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## Voraussetzungen

- Sie verfügen über einen [VPS von OVH](https://www.ovh.de/virtual_server/){.external}.
- Sie sind via SSH auf Ihrem VPS eingeloggt (Root-Zugriff).
- Sie verfügen über grundlegende Netzwerkkenntnisse.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Server`{.action} (früher „Cloud“).

## Beschreibung

Die Konfiguration von IPv6 auf Ihrem VPS umfasst mehrere Schritte. Sie werden unter anderem aufgefordert, Befehle auszuführen oder die Konfiguration Ihres Servers anzupassen. 

Bevor Sie beginnen und um durchgehend konsistente Terminologie zu verwenden, lesen Sie sich die nachstehende Tabelle durch. Sie enthält Bezeichnungen, die wir in dieser Anleitung verwenden werden.

|Bezeichnung|Beschreibung|Beispiel|
|---|---|---|
|YOUR_IPV6|Dies ist die IPv6-Adresse, die Ihrem Dienst zugewiesen ist|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Dies ist das Präfix (bzw. die *netmask*) Ihres IPv6-Blocks. In der Regel ist dies 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Hierbei handelt es sich um das Gateway Ihres IPv6-Blocks|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Schritt 1: Die erforderlichen Netzwerkinformationen abrufen

Der erste Schritt besteht darin, die Ihrem Server zugewiesene IPv6-Adresse sowie das zugehörige IPv6-Gateway zu ermitteln. Hierzu stehen Ihnen zwei Möglichkeiten zur Auswahl.

- [Netzwerkinformationen über das Kundencenter abrufen](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#uber-ihr-kundencenter)
- [Netzwerkinformationen via API abrufen](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#via-ovh-api)

#### Über Ihr Kundencenter

Loggen Sie sich hierzu in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und gehen Sie in den Bereich `Server`{.action} (früher „Cloud“). Klicken Sie im linken Menü auf `VPS`{.action} und wählen Sie den betreffenden VPS aus. Vergewissern Sie sich, dass Sie sich im Tab `Start`{.action} befinden.

Die Ihrem Server zugewiesene IPv6-Adresse sowie das zugehörige IPv6-Gateway werden im Bereich `IP` angezeigt. Speichern Sie diese und gehen Sie weiter zu Schritt 2 „[IPv6-Konfiguration anwenden](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#schritt-2-ipv6-konfiguration-anwenden_1){.external}“.

![ipv6 konfigurieren](images/configure-ipv6-step1.png){.thumbnail}

#### Via OVH API

Gehen Sie auf die Seite <https://api.ovh.com/console/> und loggen Sie sich mir Ihrer OVH Kennung ein. Verwenden Sie anschließend die nachstehenden API-Aufrufe.

Über den ersten erhalten Sie die zu Ihrem Server gehörige IPv6-Adresse.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

Über den zweiten Aufruf erhalten Sie das zu Ihrem Server gehörige IPv6-Gateway.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Speichern Sie diese und gehen Sie weiter zu Schritt 2 „[IPv6-Konfiguration anwenden](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#schritt-2-ipv6-konfiguration-anwenden_1){.external}“.

### Schritt 2: IPv6-Konfiguration anwenden

Sobald Sie die zur IPv6-Konfiguration notwendigen Informationen haben, verbinden Sie sich via SSH mit Ihrem VPS. Wenn nötig lesen Sie unsere Anleitung „[SSH Einführung](https://docs.ovh.com/de/dedicated/ssh-einfuehrung/){.external}“.

Es gibt mehrere Vorgehensweisen, um die IPv6-Konfiguration anzuwenden. Folgen Sie der Methode, die am besten zu Ihrer Situation passt.

- [Nicht persistente Anwendung](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#nicht-persistente-anwendung)
- [Persistente Anwendung auf Debian und Derivaten (Ubuntu, Crunchbang, SteamOS, ...)](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#persistente-anwendung-auf-debian-und-derivaten-ubuntu-crunchbang-steamos)
- [Persistente Anwendung auf Red Hat und Derivaten (CentOS, ClearOS, ...)](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#persistente-anwendung-auf-red-hat-und-derivaten-centos-clearos_1)
- [Persistente Anwendung auf Windows Server](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#persistente-anwendung-auf-windows-server)

#### Nicht persistente Anwendung

> [!warning]
>
> Diese Konfiguration geht bei einem Neustart Ihres VPS verloren (nicht persistente Konfiguration). 
> 

Wenn Sie via SSH mit Ihrem VPS verbunden sind, verwenden Sie die nachfolgenden Befehle. Denken Sie daran, diese für folgende Elemente anzupassen:

- generische Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) mithilfe der zuvor abgerufenen Informationen
- das Netzwerkinterface, falls dieses nicht **eth0** ist

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Persistente Anwendung auf Debian und Derivaten (Ubuntu, Crunchbang, SteamOS, ...)

Je nach installiertem Betriebssystem gibt es zwei Methoden, um Ihr Netzwerk zu konfigurieren:

- **für Debian 8 und älter, Ubuntu 16.04 und älter**: Konfiguration der „interfaces“-Datei

- **für Debian 9, Ubuntu 17.04 und neuere Version**: Konfiguration der „Netplan“-Funktion

In manchen Fällen (vor allem bei Debian 9), kann es vorkommen, dass die oben angegebene Methode nicht verfügbar ist. Überprüfen Sie in Ihrem System, welche Sie verwenden können. Wenn nötig, gehen Sie für weitere Informationen auf die Seite <https://netplan.io/>.

> [!warning]
>
> Denken Sie daran, vor jeder Änderung einer Konfigurationsdatei ein Backup zu erstellen! So können Sie falls nötig wieder zu einem vorherigen Zustand zurückkehren.
> 

Befolgen Sie jetzt die Vorgehensweise, die zu Ihrer Situation passt.

- [„interfaces“-Datei konfigurieren](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#interfaces-datei-konfigurieren)
- [Netplan-Funktion konfigurieren](https://docs.ovh.com/de/vps/ipv6-konfigurieren/#netplan-funktion-konfigurieren)

#####  „interfaces“-Datei konfigurieren

Bearbeiten Sie je nach Generation des auf Ihrem VPS installierten Betriebssystems eine der folgenden Dateien mit *sudo*-Berechtigungen:

- `/etc/network/interfaces`
- `/etc/network/interfaces.d/50-cloud-init.cfg`

Wir empfehlen Ihnen, zunächst ein Backup der betreffenden Konfigurationsdatei zu erstellen. Verwenden Sie hierzu zum Beispiel folgenden Befehl:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

So können Sie später mithilfe der nachstehenden Befehle zu einem früheren Zustand zurückkehren:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

Wenn Sie bereit sind, um die Einstellungen durchzuführen, fügen Sie folgende Zeilen zur Konfigurationsdatei hinzu. Denken Sie daran, die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface anzupassen (wenn Sie nicht **eth0** verwenden).

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Starten Sie anschließend Ihren Netzwerkdienst neu:

```bash
service networking restart
```

#####  Netplan-Funktion konfigurieren

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/netplan/`. Wir empfehlen Ihnen, zunächst ein Backup der betreffenden Konfigurationsdatei zu erstellen. Kopieren Sie hierzu im vorliegenden Fall die Datei `50-cloud-init.yaml` mithilfe folgender Befehle:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

So können Sie später mithilfe der nachstehenden Befehle zu einem früheren Zustand zurückkehren:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Wenn Sie bereit sind, um die Konfiguration vorzunehmen, erstellen Sie eine Kopie der IPv4-Datei, um sie wie gewünscht zu überarbeiten. 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Bearbeiten Sie anschließend die Datei `51-cloud-init-ipv6.yaml` so, dass Sie die IPv6-Konfiguration Ihres Servers enthält. Denken Sie daran, die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface anzupassen (wenn Sie nicht **eth0** verwenden).

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
```

> [!warning]
>
> Es ist wichtig, dass Sie beim Schreiben Ihrer Datei das Alignment der Argumente genau wie im oben stehenden Befehl einhalten. Verwenden Sie nicht die „Tab“-Taste, um Lücken zu erstellen. Sie benötigen hierzu nur die Leertaste.
>

Testen Sie anschließend Ihre Konfiguration mit folgendem Befehl:

```bash
netplan try
```

Wenn Sie korrekt ist, können Sie sie mit folgendem Befehl anwenden:

```bash
netplan apply
```

#### Persistente Anwendung auf Red Hat und Derivaten (CentOS, ClearOS, ...)

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/sysconfig/network-scripts/`. Wir empfehlen Ihnen, zunächst ein Backup der betreffenden Konfigurationsdatei zu erstellen. Kopieren Sie zum Beispiel die Datei `ifcfg-eth0` mithilfe folgender Befehle. **Passen Sie das Netzwerkinterface an, falls Sie nicht eth0 verwenden**.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

So können Sie später mithilfe der nachstehenden Befehle zu einem früheren Zustand zurückkehren:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Wenn Sie bereit sind, bearbeiten Sie die aktuell verwendete Konfigurationsdatei und fügen Sie die nachfolgenden Zeilen hinzu. Denken Sie daran, die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) anzupassen.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Erstellen Sie anschließend eine Datei (mit sudo-Berechtigungen), die die Standardrouten angibt.

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Bearbeiten Sie diese Datei, indem Sie die nachstehenden Elemente anpassen (*IPV6_GATEWAY* und falls nötig das Interface **eth0**). 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Wenn Sie damit fertig sind, starten Sie Ihren Netzwerkdienst neu, damit das System die neue Konfiguration übernimmt:

```bash
service network restart
```

#### Persistente Anwendung auf Windows Server

IPv6 ist standardmäßig nicht auf Windows Server eingerichtet. Um IPv6 zu aktivieren, öffnen Sie die `Systemsteuerung`, klicken Sie auf `Netzwerkstatus und -aufgaben anzeigen`{.action} und dann auf `Adaptereinstellungen ändern`{.action}.

![ipv6 konfigurieren](images/configure-ipv6-step2.png){.thumbnail}

Öffnen Sie den Verbindungsstatus von `Ethernet` und klicken Sie auf `Eigenschaften`{.action}. Im neuen Fenster, wählen Sie `Internetprotokoll Version 6 (TCP/IPv6)` aus, sodass es hervorgehoben wird, und klicken Sie auf den Button `Eigenschaften`{.action}.

![ipv6 konfigurieren](images/configure-ipv6-step3.png){.thumbnail}

Setzen Sie im neuen Fenster einen Haken bei „Folgende IPv6-Adresse verwenden“. Füllen Sie die darunter stehenden Felder mit den im ersten Schritt abgerufenen Informationen aus. 

Unter „Folgende DNS-Serveradressen verwenden“ haben Sie die Möglichkeit, die IPv6-DNS-_Resolver_ Ihrer Wahl in den entsprechenden Feldern einzugeben. Dieser Schritt ist optional, wenn die in der IPv4-Konfiguration enthaltenen _Resolver_ diese Aufgabe bereits übernehmen.

Wenn Sie die Elemente angegeben haben, setzen Sie einen Haken bei `Einstellungen beim Beenden überprüfen` und klicken Sie dann auf `OK`{.action}, um die Änderungen zu bestätigen. Es kann sein, dass eine Fehlermeldung erscheint, wenn das angegebene Gateway sich nicht im selben IPv6-Subnetzwerk befindet (zum Beispiel /128 und 64/). Ist das der Fall, sollten Sie dennoch einfach zum nächsten Schritt übergehen können.

![ipv6 konfigurieren](images/configure-ipv6-step4.png){.thumbnail}

### Schritt 3: Konfiguration überprüfen und Verbindung testen

Um zu überprüfen, ob die Konfiguration korrekt ist, gibt es je nach Betriebssystem verschiedene Befehle. 

- **Für Linux-basierte Systeme**, hier zwei Beispiele für das Interface **eth0** (eventuell anzupassen):

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

Um die Verbindung zu testen, verwenden Sie folgenden Befehl: 

```bash
ping6 proof.ovh.net
```

- **Für ein Windows-basiertes System** verwenden Sie folgende Befehle:

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

Sie können auch die Verbindung zu einem anderen Remote-Server testen. Hierzu ist jedoch erforderlich, das IPv6 auf diesem aktiviert ist. 

> [!primary]
>
> Wenn Sie all diese Einstellungen vorgenommen haben und IPv6 dennoch nicht auf Ihrem Server funktioniert, kann es in seltenen Fällen sein, dass zusätzliche Änderungen notwendig sind. Probieren Sie in diesem Fall die folgenden Schritte:
>
> - Ändern Sie entsprechend dem verwendeten Betriebssystem das Präfix (*netmask*) Ihrer IP von /128 zu /64. So wird Ihr IPv6-Gateway in Ihr Subnetz aufgenommen.
>
> - Neben dem Neustart des Netzwerkdienstes muss möglicherweise auch Ihr Server neu gestartet werden, damit die IPv6-Konfiguration fertig umgesetzt wird.
>

### Schritt 4: Netzwerkverwaltung mit cloud-init deaktivieren

> [!primary]
>
> Dieser Schritt gilt nicht für Windows-Systeme.
>

Cloud-init ist ein Paket, das standardmäßig auf den VPS-Instanzen installiert ist. Es handelt sich hierbei um ein Framework, mit dem ein Skript ausgeführt werden kann, das während Erstellung oder Neustart Ihres Servers angegeben wurde. Der Mechanismus ist einfach: Er erlaubt der OpenStack-Infrastruktur, Skripte in die cloud-init-Umgebung, und somit in die Serverkonfiguration, zu injizieren.

Je nach Betriebssystem verwaltet cloud-init: das Netzwerk, den Hostnamen, die Datei resolv.conf sowie im Falle eines Upgrades die automatische Partitionierung der Festplatte.

Bei neueren Distributionen (wie CentOS, Debian 9, Ubuntu 16.x und neueren Versionen) wird die Standardkonfiguration von cloud-init beim Start des Servers automatisch die Netzwerkkonfiguration zurücksetzen.

Um diese weiterhin selbst verwalten zu können, muss die automatische Netzwerkverwaltung in **cloud-init** deaktiviert werden. Verwenden Sie hierzu den folgenden Befehl, um eine `/etc/cloud/cloud.cfg.d/98-disable-network-config.cf`-Datei mit dem Wert `network: {config: disabled}` zu erstellen:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Ist diese erstellt, starten Sie Ihren Server neu, damit die Änderung angewandt wird. 

Um die automatische Netzwerkverwaltung mit cloud-init wieder zu aktivieren, löschen Sie die neu erstellte Datei oder verschieben Sie sie in ein anderes Verzeichnis.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.