---
title: "IP-Adresse als Alias konfigurieren"
excerpt: "Erfahren Sie hier, wie Sie Additional IPs in Ihre VPS-Konfiguration einbinden"
updated: 2024-04-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](/links/network/additional-ip). Die Namensänderung hat keine Auswirkungen auf dessen technische Funktionen.
>

## Ziel

Bei *IP Aliasing* handelt es sich um eine spezielle Netzwerkkonfiguration für bestimme OVHcloud Dienste, mit der Sie mehrere IP-Adressen über ein einziges Netzwerkinterface verbinden können.

**Diese Anleitung erklärt, wie Sie Additional IPs zu Ihrer Netzwerkkonfiguration hinzufügen.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Account.
- Sie verfügen über eine [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/)-Adresse.
- Sie haben administrativen Zugriff (sudo) auf Ihren VPS über SSH oder GUI. 
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen für die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt ist immer die Anmeldung an Ihrem Server über SSH oder einen GUI-Login (RDP für einen Windows-VPS). Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen (Administrator/sudo) angemeldet sind.

> [!primary]
>
Bitte beachten Sie, dass sich bei unterschiedlichen Distributionen die korrekte Vorgehensweise zur Konfiguration Ihrer Netzwerkschnittstelle sowie die Dateinamen geändert haben können. Wir empfehlen Ihnen, bei Problemen die Dokumentationen und Wissensressourcen der jeweiligen Betriebssystemversionen zu konsultieren. 
>

**Bitte beachten Sie die Terminologie, die in den nachfolgenden Codebeispielen und Anweisungen dieser Anleitung verwendet wird:**

|Bezeichnung|Beschreibung|Beispiele|
|---|---|---|
|ADDITIONAL_IP|Ihrem Dienst zugewiesene Additional IP|203.0.113.0|
|NETWORK_INTERFACE|Name des Netzwerkinterfaces|*eth*, *ens3*|
|ID|ID der Alias-IP, beginnend mit *0* (abhängig von der Anzahl der zu konfigurierenden zusätzlichen IP-Adressen)|*0*, *1*|

### Debian 10/11

#### Schritt 1: Automatische Netzwerkkonfiguration deaktivieren

Öffnen Sie diesen Dateipfad mit einem Texteditor:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Fügen Sie die folgende Zeile ein, speichern Sie und schließen Sie dann den Editor.

```console
network: {config: disabled}
```

Die Erstellung dieser Konfigurationsdatei verhindert die automatische Ausführung von Änderungen an der Konfiguration Ihres Netzwerks.

#### Schritt 2: Backup erstellen

Standardmäßig ist der Pfad zur Konfigurationsdatei: `etc/network/interfaces.d`.

In unserem Beispiel heißt die Datei `50-cloud-init`, also erstellen wir eine Kopie der Datei `50-cloud-init` mit folgenden Befehlen:

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Schritt 3: Netzwerkkonfigurationsdatei bearbeiten

Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:

```bash
ip a
```

Öffnen Sie die Netzwerkkonfigurationsdatei zur Bearbeitung:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Um Ihre Additional IP-Adresse zu konfigurieren, fügen Sie ein virtuelles Interface oder einen Ethernet-Alias zu Ihrem Netzwerkinterface hinzu. In unserem Beispiel heißt das Interface `eth0`, also ist unser erster Alias `eth0:0`. Tun Sie dies für jede Additional IP-Adresse, die Sie konfigurieren möchten.

Ändern Sie keine vorhandenen Zeilen in der Konfigurationsdatei, sondern fügen Sie der Datei nur Ihre Additional IP-Adresse hinzu, indem Sie `NETWORK_INTERFACE`, `ID` und `ADDITIONAL_IP` durch eigene Werte ersetzen:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Wenn Sie mehr als eine Additional IP-Adresse konfigurieren, sollte die Konfigurationsdatei wie folgt aussehen:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP1
address ADDITIONAL_IP2
netmask 255.255.255.255
```

**Beispiel**

```console
auto eth0:0
iface eth0:0 inet static
address 203.0.113.0
netmask 255.255.255.255
```

#### Schritt 4: Interface neu starten

Wenden Sie die Änderungen mit folgendem Befehl an:

```bash
sudo systemctl restart networking
```

### Debian 12, Ubuntu 20.04 und höher

Die Konfigurationsdatei für Ihre Additional IPs befindet sich in `/etc/netplan/`. In diesem Beispiel heißt sie `50-cloud-init.yaml`. 

Es empfiehlt sich, eine separate Konfigurationsdatei zu erstellen, in der die Additional IP-Adressen definiert werden. Auf diese Weise können Sie die Änderungen im Falle eines Fehlers leicht rückgängig machen.

#### Schritt 1: Netzwerkkonfigurationsdatei erstellen

In unserem Beispiel heißt die Datei `51-cloud-init.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init.yaml
```

#### Schritt 2: Netzwerkkonfigurationsdatei bearbeiten

Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:

```bash
ip a
```

Öffnen Sie die Netzwerkkonfigurationsdatei zur Bearbeitung:

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Editieren Sie die Datei mit dem unten stehenden Inhalt und ersetzen Sie `INTERFACE_NAME` und `ADDITIONAL_IP` durch Ihre eigenen Werte:

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

Wenn Sie mehr als eine Additional IP-Adresse konfigurieren müssen, sollte die Konfigurationsdatei wie folgt aussehen:

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
> Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen.
>

**Beispiel**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.0/32
```

Speichern und schließen Sie die Datei.

#### Schritt 3: Neue Netzwerkkonfiguration anwenden

Sie können Ihre Konfiguration mit folgendem Befehl testen:

```bash
sudo netplan try
```

Ist die Änderung korrekt, verwenden Sie folgenden Befehl, um sie anzuwenden:

```bash
sudo netplan apply
```

Wiederholen Sie diesen Vorgang für jede Additional IP-Adresse.

### CentOS 7, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

Die Hauptkonfigurationsdatei befindet sich im Ordner `/etc/sysconfig/network-scripts/`. In diesem Beispiel ist es `ifcfg-eth0`. Überprüfen Sie den Dateinamen in Ihrem Ordner, bevor Sie Änderungen vornehmen.

Erstellen Sie für jede zu konfigurierende Additional IP-Adresse eine separate Konfigurationsdatei mit den folgenden Einstellungen: `ifcfg-NETWORK_INTERFACE:ID`. Dabei steht `NETWORK_INTERFACE` für die physische Schnittstelle und `ID` für die virtuelle Netzwerkschnittstelle oder den Ethernet-Alias, der mit einem Wert von 0 beginnt. Für unsere Schnittstelle `eth0` ist der erste Alias beispielsweise `eth0:0`, der zweite Alias ist `eth0:1` usw.

#### Schritt 1: Netzwerkkonfigurationsdatei bearbeiten

Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:

```bash
ip a
```

#### Schritt 2: Netzwerkkonfigurationsdatei erstellen

Erstellen Sie zuerst die Konfigurationsdatei. Ersetzen Sie `NETWORK_INTERFACE:ID` durch eigene Werte.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Bearbeiten Sie anschließend die Datei mit folgendem Inhalt und ersetzen Sie `NETWORK_INTERFACE:ID` und `ADDITIONAL_IP` durch Ihre eigenen Werte:

```console
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
ONBOOT=yes
```

**Beispiel**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=static
IPADDR=203.0.113.0
NETMASK=255.255.255.255
BROADCAST=203.0.113.0
```

#### Schritt 3: Interface neu starten

Wenden Sie die Änderungen mit folgendem Befehl an:

```bash
sudo systemctl restart network
```

#### AlmaLinux und Rocky Linux

```bash
sudo systemctl restart NetworkManager
```

### Fedora 37 und höher

Fedora verwendet Schlüsseldateien. NetworkManager hat zuvor Netzwerkprofile im Format ifcfg in diesem Verzeichnis gespeichert: `/etc/sysconfig/network-scripts/`. Da ifcfg nicht mehr unterstützt wird, erstellt NetworkManager keine neuen Profile mehr in diesem Format. Die Konfigurationsdatei befindet sich nun in `/etc/NetworkManager/system-connections/`.

#### Schritt 1: Backup erstellen

In unserem Beispiel heißt die Datei `cloud-init-eno1.nmconnection`, daher erstellen wir eine Kopie der Datei `cloud-init-eno1.nmconnection` mit folgendem Befehl:

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

Wenn Sie einen Fehler gemacht haben, können Sie die Änderungen mit den folgenden Befehlen rückgängig machen:

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Schritt 2: Netzwerkkonfigurationsdatei bearbeiten

> [!primary]
> Beachten Sie, dass der Name der Netzwerkdatei in unserem Beispiel von Ihrem Namen abweichen kann. Passen Sie die Befehle an Ihren Dateinamen an.
>

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Ändern Sie keine bestehenden Zeilen in der Konfigurationsdatei. Fügen Sie Ihre Additional IP wie folgt zur Datei hinzu und ersetzen Sie `ADDITIONAL_IP/32` durch Ihre eigenen Werte:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Wenn Sie zwei Additional IPs konfigurieren müssen, sollte die Konfiguration folgendermaßen aussehen:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Beispiel**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.0/32
```

#### Schritt 3: Interface neu starten

Starten Sie Ihr Interface neu:

```bash
sudo systemctl restart NetworkManager
```

### cPanel

#### Schritt 1: Auf den Bereich IP-Verwaltung des WHM zugreifen

Klicken Sie im WHM Interface auf `IP Functions`{.action} und wählen Sie `Add a New IP Address`{.action} im Menü auf der linken Seite.

![Add new IP](images/cpanel-alma-1.png){.thumbnail}

#### Schritt 2: Additional IP-Informationen hinzufügen

Geben Sie Ihre Additional IP-Adresse in der Form "xxx.xxx.xxx.xxx" in das Feld "New IP or IP range to add" ein.

Wählen Sie `255.255.255.255` als Subnetzmaske aus, und klicken Sie dann auf `Submit`{.action}.

![Enter new IP information](images/cpanel-alma-2.png){.thumbnail}

> [!warning]
>
> Achtung: Wenn Sie mehrere IP-Adressen auf einem Block konfigurieren müssen und alle gleichzeitig hinzufügen, erzwingt das WHM-System die Subnetzmaske `255.255.255.0`. Es wird nicht empfohlen, diese Konfiguration zu verwenden. Sie müssen jede IP einzeln hinzufügen, um die entsprechende Subnetzmaske `255.255.255.255` verwenden zu können.
>

#### Schritt 3: Aktuelle IP-Konfiguration überprüfen

Zurück im Abschnitt `IP Functions`{.action}, klicken Sie auf `Show or Delete Current IP Addresses`{.action}, um zu überprüfen, dass die Additional IP korrekt hinzugefügt wurde.

![check configured IP](images/cpanel-alma-3.png){.thumbnail}

### Plesk

#### Schritt 1: Auf die IP-Verwaltung von Plesk zugreifen

Wählen Sie im Plesk Konfigurationspanel `Tools & Settings`{.action} im linken Menü aus.

![Zugang zur Verwaltung der IP-Adressen](images/pleskip1.png){.thumbnail}

Klicken Sie auf `IP Addresses`{.action} unter **Tools & Resources**.

#### Schritt 2: Die zusätzliche IP-Information hinzufügen

Klicken Sie in diesem Abschnitt auf den Button `Add IP Address`{.action}.

![IP-Informationen hinzufügen](images/Plesk-2024-vps.png){.thumbnail}

Geben Sie Ihre Additional IP in der Form `xxx.xxx.xxx.xxx/32` in das Feld "IP address and subnet mask" ein und klicken Sie dann auf `OK`{.action}.

![IP-Informationen hinzufügen](images/Plesk-additional-ip.png){.thumbnail}

#### Schritt 3: Aktuelle IP-Konfiguration überprüfen

Überprüfen Sie im Bereich "IP Addresses" ob die Additional IP korrekt hinzugefügt wurde.

![aktuelle IP-Konfiguration](images/plesk-final-configuration.png){.thumbnail}

### Windows Server

#### Schritt 1: Netzwerkkonfiguration überprüfen

Klicken Sie mit der rechten Maustaste auf `Start`{.action} und öffnen Sie `Run`{.action}.

Geben Sie `cmd` ein und klicken Sie auf `OK`{.action}, um die Eingabeaufforderung zu öffnen.

![cmdprompt](images/vps_win07.png){.thumbnail}

Um die aktuelle IP-Konfiguration anzuzeigen, geben Sie `ipconfig` ein.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : openstacklocal
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

#### Schritt 2: IPv4 Eigenschaften ändern

Die IP-Eigenschaften müssen nun zu einer statischen Konfiguration geändert werden.

1. Gehen Sie in das Menü `Start`{.action}, dann `Control Panel`{.action}, `Network and Internet`{.action}, `Network and Sharing Centre`{.action} und `Change Adapter Settings`{.action} in der linken Leiste.
2. Klicken Sie mit der rechten Maustaste auf `Ethernet`{.action}.
3. Klicken Sie auf `Properties`{.action};
4. Wählen Sie `Internet Protocol Version 4 (TCP/IPv4)`{.action} aus, und klicken Sie auf `Properties`{.action};
5. Klicken Sie auf `Use the following IP address`{.action} und geben Sie die Haupt-IP Ihres Servers, die Subnetzmaske und das Standardgateway ein, die Sie über den Befehl `ipconfig`{.action} erhalten haben. Geben Sie im Feld "Preferred DNS Server" `213.186.33.99` ein.

![change the IP configuration](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Achtung, der Server wird unerreichbar, wenn Sie falsche Informationen eingeben. In diesem Fall sind Korrekturen über das KVM-Interface erforderlich.
>

#### Schritt 3: Die Additional IP in "Erweiterte TCP/IP Einstellungen" hinzufügen

Klicken Sie im neuen Fenster auf `Add...`{.action} unter "IP addresses". Geben Sie Ihre Additional IP und die Subnetzmaske (255.255.255.255) ein.

![Advance Configuration section](images/configure-additional-ip.png){.thumbnail}

Bestätigen Sie, indem Sie auf `Add`{.action} klicken.

![Additional IP configuration](images/additional-ip-config.png){.thumbnail}

Klicken Sie dann auf `OK`{.action}, um die Konfiguration zu übernehmen.

![Additional IP configuration](images/final-configuration.png){.thumbnail}

Die Verbindung zu Ihrem Server wird für einige Sekunden unterbrochen.

#### Schritt 4: Neue Netzwerkkonfiguration überprüfen

Öffnen Sie die Eingabeaufforderung (cmd), und geben Sie `ipconfig` ein. Die Konfiguration muss nun die neue Additional IP-Adresse enthalten.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   IPv4 Address. . . . . . . . . . . : 203.0.113.0
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

### Diagnose

Starten Sie zunächst Ihren Server über die Kommandozeile oder dessen Benutzeroberfläche neu. Wenn Sie dann immer noch keine Verbindung zwischen dem öffentlichen Netzwerk und Ihrer Alias-Adresse herstellen können und ein Netzwerkproblem vermuten, ist es notwendig, den Server im [Rescue-Modus](/pages/bare_metal_cloud/virtual_private_servers/rescue) neu zu starten. Anschließend können Sie die Additional IP direkt auf dem Server konfigurieren.

Sobald Sie über SSH mit Ihrem Server verbunden sind, geben Sie folgenden Befehl ein:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Um die Verbindung zu testen senden Sie einfach von außerhalb einen Ping an Ihre Additional IP. Wenn sie im Rescue-Modus antwortet, bedeutet dies wahrscheinlich, dass ein Konfigurationsfehler vorliegt. Wenn die IP jedoch noch nach wie vor nicht funktioniert, informieren Sie unsere Support-Teams, indem Sie ein [Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen.

## Weiterführende Informationen <a name="go-further"></a>

[VPS Rescue-Modus aktivieren](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
