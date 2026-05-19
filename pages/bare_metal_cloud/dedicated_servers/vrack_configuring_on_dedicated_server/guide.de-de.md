---
title: "vRack auf Ihren Dedicated Servern konfigurieren"
excerpt: "Konfigurieren Sie das private OVHcloud vRack-Netzwerk auf zwei oder mehr Dedicated Servern für isolierte Server-zu-Server-Kommunikation."
updated: 2026-02-20
---

## Ziel

Das OVHcloud vRack (Virtual Rack) erlaubt es, mehrere Server (unabhängig von deren Anzahl und physischem Standort in unseren Rechenzentren) virtuell zusammenzufassen und diese über einen virtuellen Switch innerhalb eines privaten Netzwerks zu verbinden. Ihre Server können so privat und abgesichert über ein dediziertes VLAN untereinander kommunizieren.

**Diese Anleitung erklärt, wie Sie Dedicated Server für die Nutzung im vRack konfigurieren.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben ein [OVHcloud vRack](/links/network/vrack) in Ihrem Kunden-Account aktiviert.
- Sie haben zwei oder mehr [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account (vRack kompatibel).
- Sie haben administrativen Zugriff (sudo) auf Ihre Server (über SSH oder RDP).
- Sie haben einen privaten IP-Adressbereich für das vRack festgelegt.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).

<!-- CP-NAV-START:network-vrack -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [vRack](/links/control-panel/network-vrack)
- **Navigationspfad:** `Network`{.action} > `Privates vRack Netzwerk`{.action}

---
<!-- CP-NAV-END:network-vrack -->

## In der praktischen Anwendung

### Schritt 1: vRack bestellen

Klicken Sie im linken Menü auf den Button `Dienst hinzufügen`{.action} (Warenkorbsymbol). Benutzen Sie den Filter oben auf der Seite oder scrollen Sie nach unten, um den Dienst `vRack`{.action} zu finden.

![vRack bestellen](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}

Klicken Sie auf das Feld `vRack`{.action}, um zur Seite weitergeleitet zu werden, auf der Sie die Bestellung validieren können. Es dauert einige Minuten, bis das vRack in Ihrem Konto eingerichtet ist.

### Schritt 2: Ihre Server zum vRack hinzufügen

Wenn das vRack in Ihrem Account aktiviert ist, wählen Sie in der Liste Ihr vRack aus, um die Liste der verfügbaren Dienstleistungen anzuzeigen. Klicken Sie erst auf jeden der Server, die Sie zum vRack hinzufügen möchten, dann auf den Button `Hinzufügen`{.action}.

![vRack](images/vrack_selection.png){.thumbnail}

### Schritt 3: Konfiguration Ihrer Netzwerkinterfaces

Die folgenden Abschnitte enthalten die Konfigurationen für aktuelle Versionen der meistverwendeten Distributionen/Betriebssysteme. Loggen Sie sich zunächst mit [SSH oder RDP (Windows)](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) auf Ihrem Server ein. Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen eingeloggt sind (Administrator/sudo).

> [!primary]
>
Bitte beachten Sie, dass sich die Vorgehensweise zur Konfiguration der Netzwerkschnittstelle sowie die Dateinamen bei den verschiedenen Distributionen zwischenzeitlich geändert haben können. Wir empfehlen Ihnen, die Benutzeranleitungen und Wissensressourcen der verwendeten Betriebssystemversion zu konsultieren, falls Sie auf Probleme stoßen. 
>
Die nachfolgenden Konfigurationsdetails verwenden zu Beispielzwecken den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).
>
Sie können aber einen privaten IP-Bereich Ihrer Wahl und jede beliebige Adresse in diesem Bereich verwenden.
>

#### Identifikation des vRack Interface <a name="vrack-interface"></a>

Die Namen der Netzwerkinterfaces Ihrer Server sind nicht immer gleich.

Der sicherste Weg, das richtige Interface für das vRack zu bestimmen, ist das Prüfen des Server-Tabs `Netzwerkinterfaces`{.action} im [OVHcloud Kundencenter](/links/manager). Notieren Sie sich aus der Tabelle am Seitenende die **MAC-Adresse** des Interfaces vom Typ **Privat**, die in dieser Ansicht auch als "Name" angezeigt wird.

![vRack Interface](images/private_interface.png){.thumbnail}

Sobald Sie via SSH mit Ihrem Server verbunden sind, können Sie Ihre Netzwerkinterfaces mit folgendem Befehl auflisten:

```bash
ip a
```

In der mit ```link ether``` beginnenden Zeile können Sie verifizieren, dass das Interface dem als **Privat** definierten im [OVHcloud Kundencenter](/links/manager) entspricht. Verwenden Sie also den zugehörigen Interfacenamen, um `NETWORK_INTERFACE` in den folgenden Konfigurationen zu ersetzen. (Beispielname: `eth1`)

```console
link ether f0:00:00:ef:0e:f0
```

Zu Beispielzwecken verwenden wir den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).

#### GNU/Linux Konfigurationen

> [!tabs]
> **Debian 11**
>> 
>> Bearbeiten Sie mit einem beliebigen Texteditor die Netzwerkkonfigurationsdatei in `/etc/network/interfaces.d`. Hier heißt die Datei `50-cloud-init`:
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Fügen Sie der vorhandenen Konfiguration die folgenden Zeilen hinzu. Ersetzen Sie `NETWORK_INTERFACE`, `IP_ADDRESS` und `NETMASK` durch eigene Werte:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>> ```
>>
>> **Beispiel:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Starten Sie den Netzwerkdienst neu, um die Konfiguration anzuwenden:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.
>>
> **Ubuntu und Debian 12+**
>>
>> Bearbeiten Sie mit einem beliebigen Texteditor die Netzwerkkonfigurationsdatei in `/etc/netplan/`. Hier heißt die Datei `50-cloud-init.yaml`:
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Fügen Sie die folgenden Zeilen nach der Zeile `version: 2` zur vorhandenen Konfiguration hinzu. Ersetzen Sie `NETWORK_INTERFACE` und `IP_ADDRESS/PREFIX` durch eigene Werte.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Beispiel**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Es ist wichtig, die Zeilenausrichtung jedes Elements in den `yaml`-Dateien wie im vorstehenden Beispiel dargestellt einzuhalten. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>> >
>>
>> Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Verwenden Sie folgenden Befehl, um die Konfiguration anzuwenden:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.
>>
> **AlmaLinux und Rocky Linux (8/9)**
>>
>> Nachdem Sie Ihr privates Netzwerkinterface identifiziert haben, erstellen Sie mit folgendem Befehl eine Netzwerkkonfigurationsdatei.
>>
>> Ersetzen Sie `NETWORK_INTERFACE` durch Ihren eigenen Wert.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Wenn die private Schnittstelle zum Beispiel `eth1` heißt, ergibt sich Folgendes:
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Bearbeiten Sie dann diese Datei mit dem Texteditor Ihrer Wahl.
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Fügen Sie diese Zeilen hinzu und ersetzen Sie `NETWORK_INTERFACE`, `IP_ADDRESS` und `NETMASK` durch Ihre eigenen Werte:
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Beispiel:**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Starten Sie den Netzwerkdienst neu, um die Änderungen anzuwenden:
>>
>> ```bash
>> sudo systemctl restart NetworkManager.service
>> ```
>>
>> Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.
>>
> **Fedora 42+, AlmaLinux und Rocky Linux (10)**
>>
>> Sobald Sie den Namen Ihrer privaten Schnittstelle identifiziert haben (wie [hier](#vrack-interface) erklärt), führen Sie folgenden Befehl aus, um sicherzustellen, dass sie korrekt verbunden ist. In unserem Beispiel heißt das Interface `eno2`:
>>
>> ```bash 
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Wenn der Zustand von `DEVICE` in der Zeile `STATE` als `disconnected` erscheint, muss das Interface vor der Konfiguration der IP erst verbunden werden.
>>
>> Beim Hinzufügen einer **ethernet**-Verbindung müssen wir ein Konfigurationsprofil erstellen, das wir dann einem Interface zuweisen.
>>
>> Führen Sie den folgenden Befehl aus und ersetzen Sie `INTERFACE_NAME` und `CONNECTION_NAME` durch eigene Werte.
>>
>> In unserem Beispiel haben wir dem Konfigurationsprofil den Namen `private-interface` gegeben.
>>
>> ```bash
>> sudo nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> sudo nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> - Stellen Sie sicher, dass das Interface ordnungsgemäß verbunden wurde:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo 
>> ```
>>
>> Danach wird im Ordner `/etc/NetworkManager/system-connections` eine neue Konfigurationsdatei mit dem Namen *xxxxxxxx.nmconnection* erstellt.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Sie können diese Datei dann mit `nmcli` bearbeiten und `IP_ADDRESS`, `PREFIX` und `CONNECTION_NAME` durch eigene Werte ersetzen.
>>
>> - Fügen Sie Ihre IP hinzu:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Ändern Sie die Konfiguration von **auto** in **manual**:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Persistente Konfiguration:
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> - Starten Sie den Netzwerkdienst mit folgendem Befehl neu:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>

#### Windows-Konfiguration

Die folgenden Konfigurationen verwenden beispielhaft den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).

Loggen Sie sich über Remote-Desktopverbindung auf Ihrem Windows-Server ein und öffnen Sie die **Systemsteuerung**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Klicken Sie auf `Netzwerk und Internet`{.action}.

![Internet](images/windows_network_and_internet.png){.thumbnail}

Öffnen Sie `Netzwerk- und Freigabecenter`{.action}.

![Windows](images/windows_network_and_sharing_centre.png){.thumbnail}

Klicken Sie auf `Adaptereinstellugen ändern`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Klicken Sie mit der rechten Maustaste auf das sekundäre Netzwerkinterface und klicken Sie dann auf `Eigenschaften`{.action}.

In unserem Beispiel ist `Ethernet 2` das für vRack verwendete Interface. Es ist jedoch möglich, dass das vRack-Interface in Ihrer Konfiguration ein anderes ist. Das hier auszuwählende Interface verwendet nicht die Haupt-IP-Adresse des Servers oder eine selbst zugewiesene IP-Adresse.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}

Klicken Sie auf **Folgende IP-Adresse verwenden**. Geben Sie in den entsprechenden Feldern eine **IP-Adresse** Ihres privaten Bereichs und die zugehörige **Subnetzmaske** (`255.255.0.0` in diesem Beispiel) ein.

![Windows](images/windows_use_following_ip_address.png){.thumbnail}

Klicken Sie auf `OK`{.action}, um die Änderungen zu speichern, und starten Sie Ihren Server neu, um sie anzuwenden.

Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.

## Weiterführende Informationen

[Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

- [Dedicated Server - IP-Block in einem vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)

- [Bare Metal 3-AZ Region - Vorstellung des Angebots](/pages/bare_metal_cloud/dedicated_servers/3az-presentation)

- [Dedicated Server - Jumbo Frames im vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/VRACK_MTU_Jumbo_Frames)

- [Deploying OpenNebula Hosted Cloud on Bare Metal Servers](/pages/bare_metal_cloud/dedicated_servers/opennebula-deployment)

Treten Sie unserer [User Community](/links/community) bei.
