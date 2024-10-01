---
title: "IPv6 auf einer Public Cloud Instanz konfigurieren"
excerpt: "Erfahren Sie hier, wie Sie das IPv6-Protokoll auf einer Public Cloud-Instanz konfigurieren"
updated: 2024-03-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Internet Protocol Version 6 (IPv6) ist die neueste Version des Internet Protocol (IP). Seit Langem wird die Ausschöpfung der verfügbaren IPv4-Adressen erwartet. Diese Version soll Abhilfe schaffen, indem Adressen aus 128 Bits statt der 32 Bits des IPv4 verwendet werden.

Jede Public Cloud Instanz wird mit einer IPv4-Adresse und einer IPv6-Adresse ausgeliefert.

Standardmäßig ist nur die IPv4-Adresse eingerichtet.

**Diese Anleitung erklärt, wie Sie eine IPv6-Adresse auf einer Public Cloud Instanz konfigurieren können.**

> [!primary]
> 
> Floating IP und Gateway sind derzeit nicht mit IPv6 kompatibel. Sie können IPv6 nur mit Instanzen im [Public Mode](#/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts#publicmode) verwenden.
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über eine Public Cloud Instanz, wobei das Modell keine Rolle spielt.
- Sie haben Kenntnisse zu SSH.
- Sie haben Grundkenntnisse zu Netzwerken.

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen der derzeit von uns angebotenen Distributionen sowie die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt besteht immer darin, sich via SSH oder GUI (RDP für eine Windows-Instanz) mit Ihrem Server zu verbinden.

> [!warning]
>
> Bitte beachten Sie, dass bei den neuesten Linux-Betriebssystemversionen die IPv6-Adresse standardmäßig auf Public-Cloud-Instanzen konfiguriert ist. In diesem Fall müssen Sie sie nicht konfigurieren. Überprüfen Sie die Konfigurationsdatei Ihres Betriebssystems, bevor Sie Änderungen vornehmen.
>

### Glossar

Hier ein kurzes Glossar der in dieser Anleitung verwendeten Begriffe:

|Glossar|Beschreibung|
|---|---|
|YOUR_IPV6|Die IPv6-Adresse, die Ihrem Dienst zugewiesen ist|
|IPV6_PREFIX|Das Präfix Ihres IPv6-Blockes (Bsp. für "2607:5300:60:62ac::/128": netmask = 128)|
|IPV6_GATEWAY|Das Gateway Ihres IPv6-Blocks|

### Netzwerk-Informationen abrufen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Wählen Sie das Menü `Instances`{.action} und klicken Sie dann auf `...`{.action} und `Instanz-Details`{.action} neben der gewünschten Instanz.

![Public-Cloud-IPv6](images/pci2022.png){.thumbnail}

Alle erforderlichen Informationen werden im Abschnitt **Netzwerke** angezeigt.

![Public-Cloud-IPv6](images/pci2022.1.png){.thumbnail}

### Beispiele für persistente Konfigurationen

> [!primary]
> **Beispiele**
> 
> Die untenstehenden Informationen dienen lediglich als Beispiele.
>
> Als Administrator Ihrer Dienste obliegt es Ihnen, diese an Ihre Distribution anzupassen.
>

> [!warning]
>
> Erstellen Sie immer ein Backup des Originals, bevor Sie eine Konfigurationsdatei bearbeiten.
>

<br>Verbinden Sie sich zunächst über SSH mit Ihrer Instanz.

#### Debian (außer Debian 12)

Standardmäßig befinden sich die Konfigurationsdateien im Verzeichnis `/etc/network/interfaces.d/`.

Es empfiehlt sich, eine separate Konfigurationsdatei im Verzeichnis `/etc/network/interfaces.d/` zu erstellen, um IPV6 zu konfigurieren. In unserem Beispiel heißt die Datei `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Dies ermöglicht es Ihnen, die IPv6-Konfiguration zu trennen und im Falle eines Fehlers einfach auf die Änderungen zurückzugreifen.

Fügen Sie der Datei die folgenden Zeilen hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (wenn Ihr Server nicht **eth0** verwendet) durch Ihre spezifischen Werte:

```console
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Hier ein konkretes Beispiel:

```console
iface eth0 inet6 static
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

Starten Sie anschließend den Netzwerkdienst mit einem der folgenden Befehle neu:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Ubuntu und Debian 12

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/netplan/`.

Es empfiehlt sich, eine separate Konfigurationsdatei im Verzeichnis `/etc/netplan/` zu erstellen, um IPV6 zu konfigurieren. In unserem Beispiel heißt die Datei `51-cloud-init-ipv6.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

Dies ermöglicht es Ihnen, die IPv6-Konfiguration zu trennen und im Falle eines Fehlers einfach auf die Änderungen zurückzugreifen.

Fügen Sie der Datei die folgenden Zeilen hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) sowie das Netzwerkinterface (wenn Ihr Server nicht **eth0** verwendet) durch Ihre spezifischen Werte:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

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
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

Hier ein praktisches Beispiel:

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>

Sie können Ihre Konfiguration mit folgendem Befehl testen:

```bash
sudo nano netplan try
```

Ist die Änderung korrekt, verwenden Sie folgenden Befehl:

```bash
sudo nano netplan apply
```

#### RedHat / CentOS / Rocky Linux / Alma Linux

Die Netzwerkkonfigurationsdateien befinden sich im Verzeichnis `/etc/sysconfig/network-scripts/`. Wir empfehlen, zunächst ein Backup der betreffenden Konfigurationsdatei zu erstellen.

In unserem Beispiel heißt die Datei `ifcfg-eth0`, also speichern wir die Datei `ifcfg-eth0` mit den folgenden Befehlen. Denken Sie daran, **eth0** bei Bedarf durch Ihr Netzwerk-Interface zu ersetzen.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Sie können die Änderungen mit folgenden Befehlen zurücksetzen:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Anschließend bearbeiten wir die Datei `ifcfg-eth0` und fügen nur die Zeilen für die IPv6-Konfiguration des Servers hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) nach Ihren spezifischen Werten.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Wir haben die IPv4-Konfiguration ausgelassen, um Verwechslungen zu vermeiden, aber die IPv6-Konfiguration wird in derselben Konfigurationsdatei vorgenommen.

Hier ein konkretes Beispiel:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

Starten Sie anschließend den Netzwerkdienst mit einem der folgenden Befehle neu:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Fedora

Die Netzwerkkonfigurationsdatei befindet sich im Verzeichnis `/etc/NetworkManager/system-connections/`. Wir empfehlen Ihnen, zunächst ein Backup der betreffenden Konfigurationsdatei zu erstellen.

In unserem Beispiel heißt die Datei `cloud-init-eth0.nmconnection`, daher erstellen wir eine Kopie der Datei `cloud-init-eth0.nmconnection` mit den folgenden Befehlen. Denken Sie daran, **eth0** bei Bedarf durch Ihr Interface zu ersetzen.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Anschließend bearbeiten wir die Datei `cloud-init-eth0.nmconnection` und fügen nur die Zeilen für die IPv6-Konfiguration des Servers hinzu. Ersetzen Sie die generischen Elemente (*YOUR_IPV6*, *IPV6_PREFIX* und *IPV6_GATEWAY*) mit Ihren spezifischen Werten.

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

Starten Sie die den Dienst mit folgendem Befehl neu:

```bash
sudo systemctl restart NetworkManager
```

#### Windows

Standardmäßig ist IPv6 auf Windows-Servern nicht konfiguriert. Führen Sie folgende Schritte aus, um die Funktion zu aktivieren:

Gehen Sie in den Bereich `Netzwerkverbindungen`{.action} Ihrer Windows-Oberfläche.

![Public-Cloud-IPv6](images/pcipv63.png){.thumbnail}

Klicken Sie dann mit der rechten Maustaste auf Ihre Netzwerkkarte, um auf `Eigenschaften`{.action} zuzugreifen.

![Public-Cloud-IPv6](images/pcipv64.png){.thumbnail}

Klicken Sie dann auf `Internet Protocol Version 6 (TCP/IPv6)`{.action} und dann auf `Eigenschaften`{.action}.

![Public-Cloud-IPv6](images/pcipv65.png){.thumbnail}

Tragen Sie schließlich die Informationen zu Ihrem IPv6 in die passenden Felder ein.

![Public-Cloud-IPv6](images/pcipv66.png){.thumbnail}


Wenn Sie damit fertig sind, setzen Sie einen Haken in dem Feld `Einstellungen ausgehend überprüfen` und klicken Sie auf `OK`{.action}, um Ihre Änderungen zu bestätigen.

### Diagnose

Sie haben IPv6 konfiguriert, aber es funktioniert dennoch nicht? 

Mit einem einfachen Mittel lässt sich herausfinden, ob der Fehler in der durchgeführten Konfigurierung oder im Netzwerk von OVHcloud liegt.

Zunächst [stellen Sie Ihre Instanz auf den Rescuemodus "rescue-pro" um](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Nutzen Sie nun die nachfolgenden Befehle, um Ihre IP-Adresse nicht-persistent zu konfigurieren, wobei Sie die Platzhalter mit Ihren Spezifikationen ersetzen:

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Prüfen Sie Ihr Netzwerk erneut mit "ping6", zum Beispiel:

```bash
ping6 ipv6.google.com
```

Wenn Ihre Instanz antwortet, wurde wahrscheinlich ein Schritt in Ihrer ursprünglichen Konfigurierung nicht korrekt ausgeführt.

Zögern Sie jedenfalls nicht, sich mit Testergebnissen zu den oben erwähnten Angaben an unseren [Kundendienst zu wenden](https://help.ovhcloud.com/csm?id=csm_get_help), um eine Analyse von unserer Seite zu erhalten.

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
