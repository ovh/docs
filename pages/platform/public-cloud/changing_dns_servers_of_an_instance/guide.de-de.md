---
title: 'Die DNS-Server einer Instanz anpassen'
slug: die-dns-server-einer-instanz-aendern
excerpt: 'Erfahren Sie hier, wie Sie den vorkonfigurierten DNS-Server einer Public Cloud Instanz ändern'
section: 'Netzwerk und IP'
legacy_guide_number: 1985
---

**Letzte Aktualisierung am 16.11.2020**

## Ziel

Der OVHcloud DNS-Server wird auf einer Public Cloud Instanz voreingestellt (213.186.33.99). Sie haben die Möglichkeit, diesen zu ändern oder weitere hinzuzufügen. DNS-Server werden jedoch vom DHCP-Server automatisch konfiguriert und Sie werden Sie nicht einfach dadurch ändern können, dass Sie die Datei `resolv.conf` bearbeiten. 

**Diese Anleitung erklärt, wie Sie vorgehen können, um die DHCP-Konfiguration Ihrer Instanz zu ändern. Anschließend können Sie die DNS-Server anpassen.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).

## In der praktischen Anwendung

### Auf Debian/Ubuntu

- Verbinden Sie sich über SSH mit der Instanz.
- Wechseln Sie zu root.

> [!success]
>
> Sie können die Datei resolv.conf auslesen, um zu überprüfen welcher der konfigurierte DNS-Server ist:
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Editieren Sie die Datei /etc/dhcp/dhclient.conf mit den gewünschten DNS-Servern. Sie haben in Bezug auf diese Konfiguration zwei Möglichkeiten:

Sie können einen zusätzlichen DNS-Server hinzufügen:
  
```
supersede domain-name-servers 127.0.0.1;
```

Sie können den vorkonfigurierten DNS-Server ersetzen:
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Überprüfen Sie, dass die Konfiguration angewendet wurde (dies kann einige Minuten dauern):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### Auf CentOS / Fedora 

- Verbinden Sie sich über SSH mit der Instanz.
- Wechseln Sie zu root.
- Überprüfen Sie die aktuelle Konfiguration mithilfe des Befehls nmcli:

```
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
- Rufen Sie den Namen Ihrer öffentlichen Schnittstelle ab:

```
nmcli connection show
 
NAME     UUID            TYP     GERÄT
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Deaktivieren Sie die automatische DNS-Konfiguration und geben Sie die gewünschten DNS ein:

```
nmcli con mod "Name Ihrer Schnittstelle" ipv4.ignore-auto-dns yes
nmcli con mod "Name Ihrer Schnittstelle"  ipv4.dns "127.0.0.1 213.186.33.99"
```
- Konfiguration anwenden:

```
nmcli con down "Name Ihrer Schnittstelle" && nmcli con up "Name Ihrer Schnittstelle"
```
- Überprüfen Sie, dass die Konfiguration richtig angewendet wurde:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### Auf Windows

- Verbinden Sie sich über Remote Desktop oder über die VNC-Konsole. Sie können die Anleitung [Auf einer Public Cloud Instanz einloggen](../erster-login/){.external} konsultieren.

- Gehen Sie zu den Netzwerk-Einstellungen.

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Öffnen Sie dann zu der IPv4-Konfiguration der öffentlichen Netzwerk-Schnittstelle.

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Fügen Sie Ihre DNS-Server hinzu. 

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
Über Powershell ermöglicht Ihnen der Befehl nslookup zu überprüfen, welche DNS-Server standardmäßig verwendet werden.
>

## Weiterführende Informationen

[Auf einer Public Cloud Instanz einloggen](../erster-login/)

[Root-Rechte erlangen und Passwort festlegen](../root-rechte_erlangen_und_passwort_festlegen/)

[Hostname einer Public Cloud Instanz ändern](../hostname-einer-instanz-aendern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.