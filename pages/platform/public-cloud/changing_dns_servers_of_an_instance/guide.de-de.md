---
title: 'Die DNS-Server einer Instanz ändern'
slug: die-dns-server-einer-instanz-ändern
excerpt: 'Die standardmäßigen DNS-Server einer Instanz Public Cloud ändern'
legacy_guide_number: 1985
---

**letzter Stand 18.11.2019**

## Ziel

die standardmäßig auf den Instanzen konfigurierten DNS-Server werden die von OVH sein (213.186.33.99). Est ist möglich, dass Sie sie ändern oder eine weiteren hinzufügen möchten. Die DNS-Server sind jedoch durch den DHCP-Server automatisch konfiguriert und Sie werden Sie nicht einfach dadurch ändern können das Sie die Datei resolv.conf bearbeiten.

Dieser Leitfaden erklärt Ihnen wie Sie vorgehen können, um die DHCP-Konfiguration Ihrer Instanz zu ändern. Anschließend können Sie dann die DNS-Server Ihrer Instanzen ändern. 


## Voraussetzungen
- Über eine Public Cloud Instanz verfügen

## Praktische Vorgehensweise

### Auf Debian/Ubuntu

- Verbinden Sie sich in SSH mit einer Instanz Sie können den Leitfaden [Sich mit einer Instanz Public Cloud verbinden](https://docs.ovh.com/de/public-cloud/erster-login/){.external} konsultieren.
- Überspringen Sie root. Sie können den Leitfaden [Root überspringen und ein Passwort definieren](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/){.external} konsultieren.

> [!success]
>
> Sie können die Datei resolv.conf lesen um zu überprüfen welcher der konfigurierte DNS-Server ist:
> 
> cat /etc/resolv.conf
> 
> 
> Domäne openstacklocal
> suchen openstacklocal
> nameserver 213.186.33.99
>

- Editieren Sie die Datei  /etc/dhcp/dhclient.conf mit den gewünschten DNS-Servern.
Sie haben in Bezug auf diese Konfiguration zwei Möglichkeiten:

Sie möchten einen zusätzlichen DNS-Server zu den standardmäßig gelieferten hinzufügen:
  
```
supersede domain-name-servers 127.0.0.1;
```

Sie möchten einen  DNS-Server als Ersatz zu dem standardmäßig gelieferten definieren:
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Uberprüfen Sie, dass die Konfiguration richtig angewendet ist (dies kann ein paar Minuten dauern):

```bash
cat /etc/resolv.conf

Domäne openstacklocal
suchen openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### Auf CentOS / Fedora 

- Verbinden Sie sich in SSH mit einer Instanz Sie können den Leitfaden [Sich mit einer Instanz Public Cloud verbinden](https://docs.ovh.com/de/public-cloud/erster-login/){.external} konsultieren.
- Überspringen Sie root. Sie können den Leitfaden [Root überspringen und ein Passwort definieren](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/){.external} konsultieren.
- Überprüfen Sie die aktuelle Konfiguration mithilfe des Befehls nmcli:

```
nmcli
 
eth0: verbunden mit dem System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 standard
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-géré
        "lo"
        loopback (unbekannt), 00:00:00:00:00:00, sw, mtu 65536
 
DNS Konfiguration:
        Server: 127.0.0.1 213.186.33.99
        Benutzeroberfläche: eth0
```
- Finden Sie den Namen Ihrer öffentlichen Benutzeroberfläche wieder:

```
nmcli connection show
 
NAME     UUID            TYP     GERÄT
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Deaktivieren Sie automatische Änderung der DNS und geben Sie die gewünschten DNS ein:

```
nmcli con mod "Name Ihrer Benutzeroberfläche" ipv4.ignore-auto-dns yes
nmcli con mod "Name Ihrer Benutzeroberfläche"  ipv4.dns "127.0.0.1 213.186.33.99"
```
- Konfiguration anwenden:

```
nmcli con down "Name Ihrer Benutzeroberfläche" && nmcli con up "Name Ihrer Benutzeroberfläche"
```
- Überprüfen Sie, dass die Konfiguration richtig angewendet wurde:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS Konfiguration:
        Server: 127.0.0.1 213.186.33.99
        Benutzeroberfläche: eth0
```

### Auf Windows

- Verbinden Sie sich über das entfernt gelegene Büro oder über die VNC-Konsole. Sie können den Leitfaden [Sich mit einer Instanz Public Cloud verbinden](https://docs.ovh.com/de/public-cloud/erster-login/){.external} konsultieren.

- Gehen Sie zu Ihrer Network-Konfiguration

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Gehen Sie dann zu der IPv4-Konfiguration der Karte für das öffentliche Netz

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Fügen Sie die DNS-Server welche Sie hinzufügen möchen dazu: 

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
In einer Powershell ermöglicht Ihnen der Befehl nslookup zu überprüfen welcher DNS-Server standardmäßig verwendet wird.
>

## Weiterführende Informationen

[Sich mit einer Public Cloud Instanz verbinden](https://docs.ovh.com/de/public-cloud/erster-login/){.external}.

[ Root überspringen und Passwort definieren](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/){.external}.

[ Hostname einer Public Cloud Instanz ändern](https://docs.ovh.com/de/public-cloud/hostname-einer-instanz-aendern/){.external}.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.