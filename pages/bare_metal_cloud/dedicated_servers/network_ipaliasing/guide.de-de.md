---
title: "Konfiguration von IP-Aliasing"
excerpt: "Erfahren Sie hier, wie Sie Additional IPs zu Ihrer Konfiguration hinzufügen"
updated: 2024-03-25
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Die Namensänderung hat keine Auswirkungen auf dessen technische Funktionen.
>

## Ziel

IP-Aliasing ist eine spezielle Konfiguration im Netzwerk Ihres Servers, mit der Sie mehrere IP-Adressen auf einem einzigen Netzwerkinterface verknüpfen können.

**Diese Anleitung erklärt, wie Sie diese Option konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie verfügen mindestens eine [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/).
- Sie haben administrativen Zugriff (sudo) auf Ihren Server über SSH oder GUI.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen der derzeit von uns angebotenen Distributionen sowie die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt besteht immer darin, sich via SSH oder GUI (RDP für einen Windows Server) mit Ihrem Server zu verbinden.

> [!primary]
>  
> Wenn Sie eine neuere Distribution verwenden möchten, muss die richtige Vorgehensweise zur Einrichtung Ihrer Netzwerkschnittstelle möglicherweise angepasst werden. Sollten Sie dabei auf Schwierigkeiten stoßen, empfehlen wir Ihnen, die Dokumentation zu Ihrem Betriebssystem zu konsultieren.
>

Beachten Sie die folgende Terminologie, die in Codebeispielen und Anweisungen der nachfolgenden Abschnitte verwendet wird:

|Bezeichnung|Beschreibung|Beispiel|
|---|---|---|
|ADDITIONAL_IP|Zusätzliche IP-Adresse, die Ihrem Dienst zugewiesen ist|203.0.113.1|
|NETWORK_INTERFACE|Name der Netzwerkschnittstelle|*eth0*, *ens3*|
|ID|ID der Alias IP, beginnend mit *0* (abhängig von der Anzahl der zu konfigurierenden zusätzlichen IPs)|*0*, *1*|

In unseren Beispielen verwenden wir den Texteditor `nano`. Bei einigen Betriebssystemen muss es vor der Verwendung installiert werden. Ist das der Fall, werden Sie dazu aufgefordert. Sie können natürlich auch einen beliebigen Texteditor verwenden.

### Debian 10/11

Standardmäßig befindet sich die Konfigurationsdatei unter `/etc/network/interfaces.d/`. Es wird empfohlen, zunächst eine Sicherungskopie der entsprechenden Konfigurationsdatei zu erstellen.

#### Schritt 1: Backup erstellen

In unserem Beispiel heißt die Datei `50-cloud-init`, also kopieren wir die Datei `50-cloud-init` mit folgendem Befehl:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

Wenn Sie einen Fehler gemacht haben, können Sie mit den folgenden Befehlen zum vorherigen Zustand zurückkehren:

```sh
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Schritt 2: Konfigurationsdatei bearbeiten

> [!primary]
>
> Die Namen der Netzwerkschnittstellen in dieser Anleitung können von den Namen Ihres Systems abweichen. Passen Sie die Einstellungen entsprechend an.
>

Sie können nun die Konfigurationsdatei bearbeiten:

```sh
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Fügen Sie anschließend ein virtuelles Interface oder einen Ethernet-Alias hinzu. In unserem Beispiel heißt das Interface `eth0`, der Alias ist also `eth0:0`. Tun Sie dies für jede Additional IP-Adresse, die Sie konfigurieren möchten.

Ändern Sie nicht die bestehenden Zeilen in der Konfigurationsdatei, sondern fügen Sie einfach Ihre Additional IP wie unten beschrieben zu der Datei hinzu und ersetzen Sie `ADDITIONAL_IP/32` sowie das virtuelle Interface (wenn Ihr Server nicht **eth0:0** verwendet) durch Ihre eigenen Werte:

```console
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Sie können Ihre Additional IP auch konfigurieren, indem Sie der Konfigurationsdatei die folgenden Zeilen hinzufügen:

```console
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Bei der oben stehenden Konfiguration wird das virtuelle Interface jedes Mal aktiviert oder deaktiviert, wenn das `eth0` Interface aktiviert oder deaktiviert wird.

Wenn Sie zwei Additional IPs konfigurieren müssen, sollte die Datei `/etc/network/interfaces.d/50-cloud-init` wie folgt aussehen:

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

Oder:

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```

**Konfigurationsbeispiel:**

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address 203.0.113.1
netmask 255.255.255.255
```

Oder

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 203.0.113.1 netmask 255.255.255.255 broadcast 203.0.113.1
pre-down /sbin/ifconfig eth0:0 down
```

#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie das Interface neu:

```sh
sudo /etc/init.d/networking restart
```

### Fedora 38 und spätere Versionen

Fedora verwendet nunmehr Schlüsseldateien (*keyfiles*).
Fedora speicherte zuvor im Verzeichnis `/etc/sysconfig/network-scripts/` Netzwerkprofile im Format ifcfg.<br>
Da ifcfg nicht mehr unterstützt wird, erstellt NetworkManager keine neuen Profile mehr in diesem Format. Die Konfigurationsdatei befindet sich nun in `/etc/NetworkManager/system-connections/`.

#### Schritt 1: Backup erstellen

> [!primary]
>
> Beachten Sie, dass der Name der Netzwerkdatei in unserem Beispiel von Ihrem abweichen kann. Bitte passen Sie die Beispiele mit dem passenden Namen an.
>

Es wird empfohlen, zunächst eine Sicherungskopie der entsprechenden Konfigurationsdatei zu erstellen. In unserem Beispiel heißt die Konfigurationsdatei `cloud-init-eno1.nmconnection`:

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

Wenn Sie einen Fehler gemacht haben, können Sie mit den folgenden Befehlen zum vorherigen Zustand zurückkehren:

```sh
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Schritt 2: Konfigurationsdatei bearbeiten

> [!primary]
>
> Beachten Sie, dass der Name der Netzwerkdatei in unserem Beispiel sich von Ihrem unterscheiden kann. Passen Sie die Befehle an den Namen Ihrer Datei an. 
>

Um den Namen Ihres Netzwerkinterfaces für die Netzwerkdatei zu erhalten, können Sie folgenden Befehl ausführen: 

```sh
ip a
```

```sh
nmcli connection show
```

Ändern Sie keine bestehenden Zeilen in der Konfigurationsdatei. Fügen Sie Ihre Additional IP wie folgt in die Datei ein und ersetzen Sie `ADDITIONAL_IP/32` durch Ihre eigenen Werte:


```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Wenn Sie zwei Additional IP-Adressen konfigurieren möchten, sollte die Konfigurationsdatei wie folgt aussehen:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Konfigurationsbeispiel:**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.1/32
```

#### Schritt 3: Interface neu starten

Als letzten Schritt starten Sie Ihr Interface neu:

```sh
sudo systemctl restart NetworkManager
```

### Debian 12, Ubuntu 20.04 und spätere Versionen

Standardmäßig befinden sich die Konfigurationsdateien im Verzeichnis `/etc/netplan`.

Am besten erstellen Sie eine separate Konfigurationsdatei, um die Additional IP-Adressen zu konfigurieren. So können Sie im Falle eines Fehlers die Konfiguration wiederherstellen.

#### Schritt 1: Interface bestimmen

```sh
ip a
```

Notieren Sie sich den Namen des Interface (das Interface, auf dem die Haupt-IP-Adresse Ihres Servers konfiguriert ist).

#### Schritt 2: Konfigurationsdatei erstellen

Erstellen Sie anschließend eine Konfigurationsdatei mit der Erweiterung `.yaml`. In unserem Beispiel heißt die Datei `51-cloud-init.yaml`.

```sh
sudo nano /etc/netplan/51-cloud-init.yaml
```

Bearbeiten Sie anschließend die Datei mit folgendem Inhalt und ersetzen Sie `INTERFACE_NAME` und `ADDITIONAL_IP` durch Ihre eigenen Werte:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP/32
```

Wenn Sie zwei Additional IPs konfigurieren müssen, sollte die Konfigurationsdatei wie folgt aussehen:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32
```

> [!warning]
>
> Es ist wichtig, die Ausrichtung jedes Elements in dieser Datei zu beachten, wie im obigen Beispiel dargestellt. Verwenden Sie nicht die Tabulatortaste, um Abstand zu erstellen. Es ist nur die Leertaste erforderlich.
>

**Konfigurationsbeispiel:**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.1/32         
```

Datei speichern und schließen. Sie können die Konfiguration mit folgendem Befehl testen:

```sh
sudo netplan try
```

#### Schritt 3: Änderung anwenden

Führen Sie anschließend folgende Befehle aus, um die Konfiguration anzuwenden:

```sh
sudo netplan apply
```

> [!primary]
> Bei Verwendung des Befehls `netplan try` kann eine Warnmeldung wie `Permissions for /etc/netplan/xx-cloud-init.yaml are too open. Netplan configuration should NOT be accessible by others`. Das bedeutet nur, dass die Datei keine einschränkenden Berechtigungen hat. Dies hat keine Auswirkungen auf die Konfiguration Ihrer Additional IP. Weitere Informationen zu Dateiberechtigungen finden Sie in der [offiziellen Dokumentation von Ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.
>

### CentOS, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

Die Hauptkonfigurationsdatei befindet sich unter `/etc/sysconfig/network-scripts/`. In unserem Beispiel heißt es `ifcfg-eth0`. Überprüfen Sie Ihren Dateinamen in diesem Ordner, bevor Sie Änderungen vornehmen.

Für jede zu konfigurierende Additional IP wird eine separate Konfigurationsdatei mit den folgenden Parametern erstellt: `ifcfg-NETWORK_INTERFACE:ID`. Dabei steht `NETWORK_INTERFACE` für die physische Schnittstelle und `ID` für die virtuelle Netzwerkschnittstelle oder den Ethernet-Alias, der mit einem Wert von 0 beginnt. Für unsere Schnittstelle `eth0` ist der erste Alias beispielsweise `eth0:0`, der zweite Alias ist `eth0:1`, etc.

#### Schritt 1: Schnittstelle bestimmen

```sh
ip a
```

Notieren Sie sich den Namen des Interface (das Interface, auf dem die Haupt-IP-Adresse Ihres Servers konfiguriert ist).

#### Schritt 2: Konfigurationsdatei erstellen

Erstellen Sie zunächst die Konfigurationsdatei. Ersetzen Sie `NETWORK_INTERFACE:ID` durch Ihre eigenen Werte.

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Bearbeiten Sie anschließend die Datei mit dem unten stehenden Inhalt und ersetzen Sie `NETWORK_INTERFACE:ID` und `ADDITIONAL_IP` durch Ihre eigenen Werte:

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

**Konfigurationsbeispiel:**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=203.0.113.1
NETMASK=255.255.255.255
BROADCAST=203.0.113.1
```

#### Schritt 3: Interface neu starten

Im letzten Schritt starten Sie Ihr Interface neu:

```sh
ifup eth0:0
```

#### Für AlmaLinux und Rocky Linux

```sh
sudo systemctl restart NetworkManager
```

## cPanel 

#### Schritt 1: Zugang zum WHM IP Verwaltungsbereich

Klicken Sie im WHM-Kundencenter auf `IP functions`{.action} und wählen Sie im Menü links `Add a New IP Address`{.action} aus.

![Eine neue IP-Adresse hinzufügen](images/Cpanel-1.png){.thumbnail}

#### Schritt 2: Zusätzliche IP-Informationen hinzufügen

Geben Sie Ihre Additional IP in der Form "xxx.xxx.xxx.xxx" im Feld "New IP or IP range to add" ein.

Klicken Sie auf `255.255.255.255` als Subnetzmaske und dann auf `Submit`{.action}.

![Neue Informationen zur neuen IP-Adresse eingeben](images/Cpanel-2024.png){.thumbnail}

> [!warning]
>
> Achtung: Wenn Sie mehrere IP-Adressen in einem einzigen Block konfigurieren müssen und alle gleichzeitig hinzufügen, wird das WHM-System die Verwendung der Subnetzmaske `255.255.255.0` erzwingen. Die Verwendung dieser Konfiguration wird nicht empfohlen. Um die entsprechende Subnetzmaske `255.255.255.255` verwenden zu können, fügen Sie die IP-Adressen stattdessen einzeln hinzu.
>

#### Schritt 3: Aktuelle IP-Konfiguration überprüfen

Zurück im Abschnitt `IP functions`{.action} klicken Sie auf `Show or Delete Current IP Addresses`{.action}, um zu überprüfen, ob die Additional IP korrekt hinzugefügt wurde.

![check konfiguration IP](images/Cpanel-2024-1.png){.thumbnail}


### Windows Server

Die Netzwerkeinstellung von Windows Servern ist häufig mit DHCP konfiguriert. Wenn Sie bereits eine Additional IP angelegt oder Ihre Konfiguration als statische IP definiert haben, können Sie direkt zum nächsten Schritt übergehen.

Andernfalls wechseln Sie zunächst von einer DHCP-Konfiguration auf Netzwerkebene zur statischen IP-Konfiguration.

Starten Sie die Eingabeaufforderung `cmd`{.action} oder `powershell`{.action} und geben Sie den folgenden Befehl ein:

```powershell
ipconfig
```

Sie erhalten daraufhin zum Beispiel Folgendes:

![Result of "ipconfig" command](images/ipconfig.png){.thumbnail}

Notieren Sie dann IPv4, Subnetzmaske, Standardgateway sowie den Namen der Netzwerkkarte.

In diesem Beispiel lautet die IP des Servers: **192.0.2.28**.

Die nächsten Schritte können Sie entweder über die Eingabeaufforderung oder über die grafische Benutzeroberfläche ausführen.

#### In der Kommandozeile (empfohlen)

In den untenstehenden Befehlen ersetzen Sie Folgendes:

|Befehl|Wert|
|---|---|
|NETWORK_ADAPTER| Name der Netzwerkkarte (in unserem Beispiel: Ethernet 2)|
|IP_ADDRESS| Server-IP-Adresse (in unserem Beispiel: 192.0.2.28)|
|SUBNET_MASK| Subnetzmaske (in unserem Beispiel: 255.255.255.0)|
|GATEWAY| Standardgateway (in unserem Beispiel: 192.0.2.254)|
|ADDITIONAL_IP| Additional IP-Adresse, die Sie hinzufügen möchten|

> [!warning]
>
> Die Eingabe falscher Daten führt dazu, dass der Server nicht mehr erreichbar ist. In diesem Fall sind dann Korrekturmaßnahmen im WinRescue-Modus oder über KVM erforderlich.
> 

In der Eingabeaufforderung:

1\. Umschalten auf statische IP

```powershell
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2\. DNS-Server festlegen

```powershell
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```

3\. Additional IP hinzufügen

```powershell
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Ihre Additional IP ist damit funktionsfähig.

#### Grafische Benutzeroberfläche

1. Öffnen Sie `Start`{.action}, `Control Panel`{.action}, `Network and Internet`{.action}, `Network and Sharing Centre`{.action}, `Change Adapter Settings`{.action} (im linken Menü).
2. Klicken Sie mit der rechten Maustaste auf Ihre Netzwerkverbindung, in unserem Beispiel `Ethernet 2`{.action}.
3. Klicken Sie auf `Properties`{.action}.
4. Wählen Sie `Internet Protocol Version 4 (TCP/IPv4)`{.action} aus und klicken Sie auf `Properties`{.action}.
5. Klicken Sie auf `Use the following IP address`{.action} und geben Sie die Haupt-IP-Adresse Ihres Servers, die Subnetzmaske und das Standardgateway ein, die Sie über den Befehl `ipconfig`{.action} erhalten haben. (Im Feld “Preferred DNS Server” geben Sie 213.186.33.99 ein).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Achtung, der Server wird unerreichbar, wenn Sie falsche Werte eingeben. Die Korrekturen müssen dann im [WinRescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode#windows) oder über [IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) durchgeführt werden.
> 

Klicken Sie auf `Advanced`{.action} (in `TCP/IP Settings`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/configure-main-ip-1.png){.thumbnail}


Im Bereich `IP Address`{.action} klicken Sie auf `Add`{.action}.

![Advanced TCP/IPv4 Settings](images/add-additional-ip.png){.thumbnail}


Geben Sie dann Ihre Additional IP und die Subnetzmaske **255.255.255.255** ein. Klicken Sie auf `Add`{.action}.

![TCP/IP Address](images/configure-additional-ip.png){.thumbnail}

Klicken Sie auf `OK`{.action}, um Ihre Konfiguration zu bestätigen.

Ihre Additional IP ist nun betriebsbereit. Sie können die Konfiguration mit folgendem Befehl überprüfen:

```powershell
ipconfig
```

Sie erhalten daraufhin zum Beispiel Folgendes:

![Result of "ipconfig" command](images/final-ip-configuration.png){.thumbnail}


### Plesk

#### Schritt 1: Auf die IP-Verwaltung von Plesk zugreifen

Wählen Sie im Plesk Konfigurationspanel `Tools & Settings`{.action} im linken Menü aus.

![Zugang zur Verwaltung der IP-Adressen](images/pleskip1.png){.thumbnail}

Klicken Sie auf `IP Addresses`{.action} unter **Tools & Resources**.

#### Schritt 2: Additional IP hinzufügen

Klicken Sie in diesem Abschnitt auf den Button `Add IP Address`{.action}.

![IP-Informationen hinzufügen](images/Plesk-2024.png){.thumbnail}

Geben Sie Ihre Additional IP in der Form `xxx.xxx.xxx.xxx/32` in das Feld "IP address and subnet mask" ein und klicken Sie dann auf `OK`{.action}.

![IP-Informationen hinzufügen](images/Plesk-2024-1.png){.thumbnail}

#### Schritt 3: Aktuelle IP-Konfiguration überprüfen

Überprüfen Sie im Bereich "IP Addresses" ob die Additional IP korrekt hinzugefügt wurde.

![aktuelle IP-Konfiguration](images/Plesk-2024-2.png){.thumbnail}

#### Fehlerbehebung

Starten Sie den Server neu. Wenn keine Verbindung zwischen dem öffentlichen Netzwerk und Ihrer Alias IP hergestellt werden kann, und Sie ein Netzwerkproblem vermuten, versetzen Sie den Server in den [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) und konfigurieren Sie den Alias direkt auf dem Server.

Wenn Sie über SSH im Rescue-Modus auf dem Server eingeloggt sind, führen Sie folgenden Befehl aus:

```bash
ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Ersetzen Sie "ADDITIONAL_IP" mit Ihrer Additional IP-Adresse.

Um die Verbindung zu testen, senden Sie einen Ping an Ihre Additional IP. Wenn dies Rescue-Modus funktioniert, bedeutet es wahrscheinlich, dass ein Konfigurationsfehler besteht. Wenn die IP-Adresse immer noch nicht reagiert, erstellen Sie ein Ticket in Ihrem [OVHcloud Help Center](https://help.ovhcloud.com/csm?id=csm_get_help){.external} mit folgenden Angaben:

- Name und Version des auf dem Server verwendeten Betriebssystems
- Name und Verzeichnis der Netzwerkkonfigurationsdatei
- Inhalt dieser Datei

## Weiterführende Informationen

[Network Bridge einrichten](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
