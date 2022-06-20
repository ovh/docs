---
title: "DNS Server einer Public Cloud Instanz ändern"
slug: die-dns-server-einer-instanz-aendern
excerpt: 'Erfahren Sie hier, wie Sie den vorkonfigurierten DNS-Server einer Public Cloud Instanz anpassen'
section: 'Netzwerk und IP'
legacy_guide_number: 1985
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 29.10.2020**

## Ziel

Der OVHcloud DNS-Server wird auf einer Public Cloud Instanz voreingestellt (z.B. 213.186.33.99).<br>
Sie können einen sekundären Server hinzufügen oder diese Konfiguration durch Ihre eigene ersetzen. Die DNS-Server werden jedoch vom DHCP-Server automatisch konfiguriert und Sie werden die DNS-Konfiguration nicht ändern können, indem Sie die Datei `resolv.conf` bearbeiten.
 
**Diese Anleitung erklärt, wie Sie die DHCP-Konfiguration einer Instanz anpassen, um die DNS-Server zu ändern.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (Root) auf Ihre Instanz über SSH oder RDP.
- Grundlegende Kenntnisse der Netzwerkverwaltung.

## In der praktischen Anwendung

Verbinden Sie sich über SSH mit Ihrer Instanz. Weitere Informationen hierzu finden Sie in der Anleitung zum [Einloggen auf einer Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#connect-to-instance).

Wechseln Sie zum Root-Benutzer. Falls nötig lesen Sie unsere [Anleitung zu diesem Thema](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/).

### Debian / Ubuntu

Bearbeiten Sie die Datei `/etc/dhcp/dhclient.conf` mithilfe eines Texteditors Ihrer Wahl, um die gewünschten DNS Server zu konfigurieren.

Hier können Sie verschiedene "Statements" nutzen, um die DNS Server Ihrer Wahl hinzuzufügen. Fügen Sie die betreffende Zeile hinzu und ersetzen Sie dabei IP1/IP2 jeweils mit deren IP-Adressen.

- Um DNS-Server hinzuzufügen, die den voreingestellten Server ersetzen, fügen Sie diese Zeile hinzu:
  
```console
supersede domain-name-servers IP1, IP2;
```

- Um DNS-Server hinzuzufügen, die den standardmäßig konfigurierten vorgezogen werden:
    
```console
prepend domain-name-servers IP1, IP2;
```

- Um DNS-Server hinzuzufügen, die nur verwendet werden, wenn der vorkonfigurierte Server nicht verfügbar ist:
    
```console
append domain-name-servers IP1, IP2;
```

Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.

Überprüfen Sie, ob die Konfiguration korrekt übernommen wurde mit folgendem Befehl:

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver IP1
nameserver IP2
```

### CentOS/Fedora

Überprüfen Sie die aktuelle Konfiguration mit dem Befehl `nmcli`:

```bash
nmcli
 
eth0: connected to System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-managed
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

Überprüfen Sie den Namen Ihres öffentlichen Interface:

```bash
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```

Deaktivieren Sie die automatische Änderung der DNS-Einstellungen und fügen Sie die IP-Adressen der DNS Server hinzu (ersetzen Sie IP1/IP2), die Sie konfigurieren möchten. (Ersetzen Sie `System eth0` mit dem zuvor abgerufenen Wert.)

```bash
nmcli con mod "System eth0" ipv4.ignore-auto-dns yes
nmcli con mod "System eth0" ipv4.dns "IP1 IP2"
```

Wenden Sie die Konfiguration an. (Ersetzen Sie `System eth0` mit dem zuvor abgerufenen Wert.)

```bash
nmcli con down "System eth0" && nmcli con up "System eth0"
```

Überprüfen Sie, dass die Konfiguration korrekt übernommen wurde:

```bash
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: IP1 IP2
        interface: eth0
```

### Windows

Loggen Sie sich über eine Remote-Verbindung (RDP) oder mit der VNC-Konsole auf der Instanz ein. Weitere Informationen hierzu finden Sie in der Anleitung zum [Einloggen auf einer Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#connect-to-instance).

Öffnen Sie die `Netzwerkeinstellungen`{.action}.

![DNS Server ändern](images/changednsservers1.png){.thumbnail}

Gehen Sie über die Systemsteuerung zur IPv4-Konfiguration Ihrer öffentlichen Netzwerkschnittstelle.

![DNS Server ändern](images/changednsservers2.png){.thumbnail}

Fügen Sie die gewünschten Server in den `Erweiterten Einstellungen`{.action} hinzu.

![DNS Server ändern](images/changednsservers3.png){.thumbnail}

> [!primary]
>
In PowerShell kann mit dem Befehl `nslookup` überprüft werden, welche DNS-Server konfiguriert sind.
>


## Weiterführende Informationen <a name="gofurther"></a>

[Eine erste Public Cloud Instanz erstellen und sich damit verbinden](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/)

[Root-Rechte erlangen und Passwort festlegen](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/)

[Hostname einer Public Cloud Instanz ändern](https://docs.ovh.com/de/public-cloud/hostname-einer-instanz-aendern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.