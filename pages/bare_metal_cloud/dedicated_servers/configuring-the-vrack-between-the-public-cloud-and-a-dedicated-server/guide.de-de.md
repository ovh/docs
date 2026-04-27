---
title: "Das vRack zwischen Public Cloud und einem Dedicated Server konfigurieren"
excerpt: "Richten Sie ein privates Netzwerk zwischen einer OVHcloud Public Cloud Instanz und einem Dedicated Server über das vRack ein."
updated: 2026-02-20
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Ziel

OVHcloud [vRack](/links/network/vrack) ist ein privates Netzwerk, mit dem Sie das Routing zwischen zwei oder mehr OVHcloud [Dedicated Servern](/links/bare-metal/bare-metal) einrichten können. Darüber hinaus können Sie auch [Public Cloud Instanzen](/links/public-cloud/compute) zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur aus physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung erklärt, wie Sie eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) und einen [dedizierten Server](/links/bare-metal/bare-metal) über vRack verbinden.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) in Ihrem Kunden-Account.
- Sie haben ein [vRack](/links/network/vrack) in Ihrem Kunden-Account eingerichtet.
- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) (kompatibel mit vRack) in Ihrem Kunden-Account.
- Sie haben einen privaten IP-Adressbereich für das vRack festgelegt.
- Beide Dienste müssen sich im selben vRack befinden.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).

## In der praktischen Anwendung

### Public Cloud Projekt zum vRack hinzufügen

> [!primary]
> Dies gilt nicht für neu erstellte Projekte, da diese automatisch mit einem vRack ausgeliefert werden. Sobald das Projekt erstellt wurde, können Sie das vRack anzeigen, indem Sie im linken Menü auf `Network`{.action} und dann auf `Privates vRack Netzwerk`{.action} klicken.
>
> Sie können das Projekt auch aus dem zugewiesenen vRack entfernen und an ein anderes vRack anhängen, etwa wenn bereits ein vRack für dedizierte Server besteht.

Wählen Sie in der Liste der verfügbaren Dienstleistungen das Projekt aus, das Sie zum vRack hinzufügen möchten, und klicken Sie dann auf den Button `Hinzufügen`{.action}.

![Public Cloud Projekt zum Hinzufügen zum vRack auswählen](images/addprojectvrack.png){.thumbnail}

### Instanz in das vRack integrieren

> [!primary]
> Diese Anleitung beschreibt die Einrichtung einer einfachen vRack-Konfiguration zwischen einer Public Cloud Instanz und einem Dedicated Server.
> Wenn Sie Ihre Instanz(en) mit einem Bereitstellungsmodus wie lokalen Zonen oder Multi AZ eingerichtet haben, beachten Sie, dass lokale Zonen das vRack derzeit nicht unterstützen.
> Darüber hinaus ist das **vRack** ein globales L2-Netzwerk und unterstützt keine Ausfallsicherheit auf "Zonen-" oder "Regions"-Ebene.
>

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

#### Im Fall einer neuen Instanz

Wenn Sie Hilfe benötigen, folgen Sie dieser Anleitung: [Erste Public Cloud Instanz erstellen](/pages/public_cloud/compute/public-cloud-first-steps). Bei der Erstellung einer Instanz können Sie in Schritt 5 einen Netzwerkmodus und anschließend ein privates Netzwerk auswählen, in das Ihre Instanz integriert werden soll.

#### Im Fall einer bereits bestehenden Instanz

Sobald Ihr Projekt mit einem vRack verknüpft ist, können Sie ein privates Netzwerk erstellen und es mit vorhandenen Instanzen verbinden.

Gehen Sie zum Tab `Public Cloud`{.action} und klicken Sie dann im linken Menü unter **Network** auf `Private Network`{.action}.

Klicken Sie auf `Privates Netzwerk hinzufügen`{.action}.

![Bereich "Privates Netzwerk" mit Schaltfläche Privates Netzwerk hinzufügen](images/vrack2022-03.png){.thumbnail}

Auf der nächsten Seite können Sie mehrere Einstellungen anpassen.

Wählen Sie die Region aus, in der Sie das private Netzwerk platzieren möchten. Stellen Sie sicher, dass es sich in derselben Region wie die vorhandene Instanz befindet.

![Regionauswahl für das private Netzwerk](images/vrack2024-01.png){.thumbnail}

Damit die beiden Dienste miteinander kommunizieren können, müssen sie mit derselben **VLAN-ID** getaggt sein.

Diese kann im nächsten Schritt konfiguriert werden.

![Formular für Name des privaten Netzwerks, VLAN-ID und DHCP-Konfiguration](images/configure_private_network.png){.thumbnail}

Dieser Schritt bietet mehrere Konfigurationsoptionen. Für die Zwecke dieser Anleitung werden wir uns auf die notwendigen Elemente konzentrieren. Klicken Sie auf die Tabs, um Details anzuzeigen:

> [!tabs]
> **Name des privaten Netzwerks**
>>
>> Geben Sie einen Namen für Ihr privates Netzwerk ein.
>>
> **Netzwerk-Optionen von Layer 2**
>>
>> Die VLAN-ID für Dedicated Server ist standardmäßig **0**. Um diese VLAN-ID für eine Instanz zu verwenden, muss das private Netzwerk ebenfalls mit dem VLAN **0** gekennzeichnet werden.
>> Aktivieren Sie die Option **Set a VLAN ID** und wählen Sie VLAN ID **0** aus.
>>
>> Wenn Sie die Option nicht aktivieren, weist das System Ihrem privaten Netzwerk eine zufällige VLAN-ID zu.
>>
> **Verwendung einer anderen VLAN-ID**
>>
>> Wenn Sie die VLAN-ID **0** nicht verwenden möchten, können Sie eine andere ID zwischen 1 und 4000 auswählen. Es gelten folgende Regeln:
>>
>> - Bei der Konfiguration des vRacks auf dem Dedicated Server muss diese VLAN-ID in der Netzwerkkonfigurationsdatei enthalten sein.
>>
>> > [!primary]
>> > Es ist möglich, die gleiche VLAN-ID für mehrere private Netzwerke zu verwenden, dies erfordert jedoch eine sorgfältige Verwaltung der privaten IP-Adressen. Die Verwendung von nicht überlappenden DHCP-Pool-Zuweisungen ist eine Möglichkeit, dieses Problem zu lösen.
>> >
>>
>> > [!primary]
>> > Im Gegensatz zu Dedicated Servern (bei Verwendung einer VLAN-ID ungleich 0) ist es nicht erforderlich, die VLAN-ID direkt in die Netzwerkkonfigurationsdatei der Public Cloud-Instanz einzufügen, sobald sie im OVHcloud Kundencenter eingerichtet wurde.
>> >
>>
>> Beispiel: Wenn Ihr privates Netzwerk der Instanz mit VLAN 2 getaggt ist, muss diese VLAN-ID nur in der Netzwerkkonfiguration des Dedicated Servers enthalten sein. Weitere Informationen finden Sie in folgender Anleitung: [Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
> **Verteilungsoptionen für DHCP-Adressen**
>>
>> Sie können den standardmäßigen privaten IP-Bereich beibehalten oder einen anderen IP-Bereich verwenden.
>>
>> Wählen Sie "DHCP für dieses private Netzwerk aktivieren", um die private IP-Adresse auf der Instanz automatisch zuzuweisen und zu konfigurieren. Sie müssen dann nur noch die Netzwerkschnittstellen des Dedicated Servers konfigurieren.
>>
>> Wenn diese Option nicht ausgewählt ist, ist eine manuelle Konfiguration sowohl auf der Public Cloud Instanz als auch auf dem Dedicated Server erforderlich.
>>
>> **Netzwerk-Gateway-Optionen**
>>
>> Stellen Sie sicher, dass beide Optionen deaktiviert sind.
>>

Klicken Sie nach Abschluss der Konfiguration auf `Konfigurieren Sie Ihr privates Netzwerk`{.action}. Dieser Vorgang kann einige Minuten dauern.

Klicken Sie im Dashboard der entsprechenden Instanz den Bereich "Netzwerke" und klicken Sie auf den Button `...`{.action} neben "Privates Netzwerk(e)". Wählen Sie `Netzwerk verbinden`{.action}.

![Instanz-Dashboard mit Option Netzwerk anhängen](images/vrack2021-01.png){.thumbnail}

Wählen Sie im angezeigten Fenster das oder die privaten Netzwerke aus, die Sie mit Ihrer Instanz verbinden möchten, und klicken Sie auf `Anfügen`{.action}.

![Popup zum Auswählen und Anhängen eines privaten Netzwerks an die Instanz](images/attach_network.png){.thumbnail}

### Netzwerkinterfaces konfigurieren

> [!primary]
> Wenn Sie die Option gewählt haben, das private Netzwerk auf Ihrer Instanz mithilfe von DHCP zu konfigurieren, müssen Sie nur die Netzwerkschnittstellen auf dem Dedicated Server konfigurieren.
>

#### Konfiguration bei Verwendung der standardmäßigen VLAN-ID 0

Bevor Sie beginnen, verbinden Sie sich via SSH mit Ihrem Server und listen Sie Ihre Netzwerkschnittstellen mit folgendem Befehl auf:

```bash
ip a
```

Für Dedicated Server suchen Sie die Zeile, die mit ```link ether``` beginnt, und überprüfen Sie, dass diese Schnittstelle mit der **Private** Schnittstelle übereinstimmt, die im Tab ` Netzwerkinterfaces`{.action} im Dashboard Ihres Servers aufgeführt ist.

Verwenden Sie diesen Schnittstellennamen, um `NETWORK_INTERFACE` in den folgenden Konfigurationen zu ersetzen (Beispiel: `eth1`).

Als Beispiel verwenden wir den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).

> [!tabs]
> **Debian 11**
>>
>> Öffnen Sie mit einem Texteditor Ihrer Wahl die Netzwerkkonfigurationsdatei in `/etc/network/interfaces.d` zur Bearbeitung. Hier heißt die Datei `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Fügen Sie die folgenden Zeilen zur vorhandenen Konfiguration hinzu und ersetzen Sie `NETWORK_INTERFACE`, `IP_ADDRESS` und `NETMASK` durch Ihre eigenen Werte:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>>```
>>
>> **Beispiel:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Speichern Sie Ihre Änderungen in der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Starten Sie den Netzwerkdienst neu, um die Konfiguration anzuwenden:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu und Debian 12+**
>>
>> Öffnen Sie mit einem Texteditor Ihrer Wahl die Netzwerkkonfigurationsdatei in `/etc/netplan/` zur Bearbeitung. Hier heißt die Datei `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Fügen Sie die folgenden Zeilen zur vorhandenen Konfiguration nach der Zeile `version: 2` hinzu. Ersetzen Sie `NETWORK_INTERFACE` und `IP_ADDRESS/PREFIX` durch Ihre eigenen Werte.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Beispiel:**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Es ist wichtig, die Ausrichtung jedes Elements in `yaml`-Dateien wie im obigen Beispiel dargestellt zu beachten. Verwenden Sie nicht die Tabulatortaste, um Leerzeichen zu erstellen. Nur die Leertaste ist erforderlich.
>> >
>>
>> Speichern Sie Ihre Änderungen in der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Wenden Sie die Konfiguration an:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
> **AlmaLinux und Rocky Linux (8/9)**
>>
>> Nachdem Sie Ihre private Netzwerkschnittstelle identifiziert haben, verwenden Sie den folgenden Befehl, um eine Netzwerkkonfigurationsdatei zu erstellen.
>>
>> Ersetzen Sie `NETWORK_INTERFACE` durch den Namen Ihrer privaten Schnittstelle.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Wenn die private Schnittstelle beispielsweise `eth1` heißt, haben wir Folgendes:
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Verwenden Sie dann einen Texteditor Ihrer Wahl, um diese Datei zu bearbeiten.
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
>> Speichern Sie Ihre Änderungen in der Konfigurationsdatei und schließen Sie den Editor.
>>
>> Starten Sie den Netzwerkdienst neu, um die Änderungen anzuwenden:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux und Rocky Linux (10)**
>>
>> Nachdem Sie den Namen Ihrer privaten Schnittstelle identifiziert haben, führen Sie den folgenden Befehl aus, um zu überprüfen, ob sie verbunden ist. In unserem Beispiel heißt unsere Schnittstelle `eno2`:
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
>> Wenn der `STATE` des `DEVICE` als `disconnected` angezeigt wird, muss es verbunden werden, bevor die IP konfiguriert wird.
>>
>> Beim Hinzufügen einer **Ethernet**-Verbindung müssen wir ein Konfigurationsprofil erstellen, das wir dann einem Gerät zuweisen.
>>
>> Führen Sie den folgenden Befehl aus und ersetzen Sie `INTERFACE_NAME` und `CONNECTION_NAME` durch Ihre eigenen Werte.
>>
>> In unserem Beispiel haben wir unser Konfigurationsprofil `private-interface` genannt.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> Überprüfen Sie, ob die Schnittstelle korrekt verbunden wurde:
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
>> Sobald dies erledigt ist, wird eine neue Konfigurationsdatei mit dem Namen *xxxxxxxxxx.nmconnection* im Ordner `/etc/NetworkManager/system-connections` erstellt.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Sie können diese Datei dann mit dem `nmcli`-Handler bearbeiten und dabei `IP_ADDRESS`, `PREFIX` und `CONNECTION_NAME` durch Ihre eigenen Werte ersetzen.
>>
>> - Fügen Sie Ihre IP hinzu:
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Beispiel:**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Ändern Sie die Konfiguration von **auto** auf **manual**:
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
>> - Machen Sie die Konfiguration persistent:
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
>> Starten Sie Ihr Netzwerk mit folgendem Befehl neu:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Windows-Konfiguration**
>>
>> Loggen Sie sich über Remote-Desktopverbindung auf Ihrem Windows-Server ein und öffnen Sie die **Systemsteuerung**.
>>
>> ![Windows Control Panel](images/windows_control_panel.png){.thumbnail}
>>
>> Klicken Sie auf `Network and Internet`{.action}.
>>
>> ![Network and Internet](images/windows_network_and_internet.png){.thumbnail}
>>
>> Öffnen Sie `Network and Sharing Center`{.action}.
>>
>> ![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}
>>
>> Klicken Sie auf `Change Adapter Settings`{.action}.
>>
>> ![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}
>>
>> Klicken Sie mit der rechten Maustaste auf die sekundäre Netzwerkschnittstelle und klicken Sie dann auf `Properties`{.action}.
>>
>> In unserem Beispiel ist `Ethernet 2` die für das vRack verwendete Schnittstelle. Es ist jedoch möglich, dass die vRack-Schnittstelle in Ihrer Konfiguration ein anderes ist. Das hier auszuwählende Schnittstelle verwendet nicht die Haupt-IP-Adresse des Servers oder eine selbst zugewiesene IP-Adresse.
>>
>> ![Windows Properties](images/windows_properties_button.png){.thumbnail}
>>
>> Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}
>>
>> Klicken Sie auf **Use the following IP address**. Geben Sie in den entsprechenden Feldern eine **IP-Adresse** Ihres privaten Bereichs und die zugehörige **Subnetzmaske** (`255.255.0.0` in diesem Beispiel) ein.
>>
>> ![Folgende IP-Adresse verwenden](images/windows_use_following_ip_address.png){.thumbnail}
>>
>> Klicken Sie auf `OK`{.action}, um die Änderungen zu speichern, und starten Sie Ihren Server neu, um sie anzuwenden.

/// details | **Konfiguration bei Verwendung einer anderen VLAN-ID**

In diesem Beispiel verwenden wir **10** als VLAN-ID (Tag) und **192.168.0.0/16** als privaten IP-Adressbereich.

> [!tabs]
> **Debian 11**
>>
>> Die folgende Konfiguration basiert auf Debian 11 (Bullseye).
>>
>> - Bevor Sie beginnen, stellen Sie eine SSH-Verbindung zu Ihrem Server her und führen Sie die folgenden Befehle aus, um das VLAN-Paket zu installieren:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Laden Sie dann das Kernel-Modul 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Um zu überprüfen, ob das Modul geladen ist:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Module beim Booten dauerhaft geladen werden:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Rufen Sie die Schnittstellennamen ab und identifizieren Sie die private Schnittstelle:
>>
>> ```sh
>> ip a
>> ```
>>
>> In diesem Beispiel wird die private Netzwerkschnittstelle als `eno2` identifiziert.
>>
>> - Als Nächstes erstellen Sie eine VLAN-Subschnittstelle für die Netzwerkschnittstelle (nicht persistente Konfiguration) und weisen Sie ihr die VLAN-ID zu (taggen Sie sie). In diesem Beispiel ist die VLAN-ID 10.
>>
>> Ersetzen Sie die Werte durch Ihre eigenen.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - Weisen Sie dann der neu erstellten VLAN-Subschnittstelle eine private IP-Adresse zu:
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - Aktivieren Sie dann die private Schnittstelle und die VLAN-Subschnittstelle:
>>
>> ```sh
>> sudo ip link set dev eno2 up
>> sudo ip link set dev eno2.10 up
>> ```
>>
>> - Um die Konfiguration persistent zu machen, fügen Sie die folgenden Einträge zur Konfigurationsdatei hinzu:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Übersicht:
>>
>> ![config](images/config_debian.png){.thumbnail}
>>
>> - Starten Sie das Netzwerk neu, um die Änderungen anzuwenden:
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu und Debian 12+**
>>
>> Die folgende Konfiguration basiert auf Ubuntu 24.04 (Noble Numbat).
>>
>> - Bevor Sie beginnen, stellen Sie eine SSH-Verbindung zu Ihrem Server her und führen Sie den folgenden Befehl aus, um das VLAN-Paket zu installieren:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Laden Sie dann das Kernel-Modul 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Um zu überprüfen, ob das Modul geladen ist:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Module beim Booten dauerhaft geladen werden:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Erstellen oder bearbeiten Sie die Konfigurationsdatei `cloud.cfg`, um automatische Änderungen an der Netzwerkkonfiguration zu verhindern:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Fügen Sie diese Zeile hinzu:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Speichern und schließen Sie die Datei.
>>
>> - Um den Namen der Netzwerkschnittstelle und ihre MAC-Adresse zu erhalten:
>>
>> ```sh
>> ip a
>> ```
>>
>> - Hier ist die Schnittstelle, die wir konfigurieren möchten, `eno2` mit der MAC-Adresse: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/ubuntu_ip_a.png){.thumbnail}
>>
>> - Fügen Sie die Netzwerkkonfiguration für diese Schnittstelle und die VLAN-Deklaration zur Konfigurationsdatei hinzu und stellen Sie sicher, dass sie direkt unter der Zeile `version: 2` platziert wird. Ersetzen Sie die Werte durch Ihre eigenen:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # VLAN-ID
>>             link: eno2                  # Interface-Name
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Übersicht:
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Speichern und schließen Sie die Datei und führen Sie dann den folgenden Befehl aus:
>>
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> - Wenn Sie die folgende Meldung erhalten:
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> - Können Sie dies beheben, indem Sie das folgende Paket installieren:
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Überprüfen Sie, ob die Konfiguration ordnungsgemäß angewendet wurde:
>>
>> ```sh
>> ip a
>> ```
>>
> **AlmaLinux und Rocky Linux (8/9)**
>>
>> Die folgende Konfiguration basiert auf Almalinux 9.
>>
>> - Bevor Sie beginnen, stellen Sie eine SSH-Verbindung zu Ihrem Server her und führen Sie den folgenden Befehl aus, um das Kernel-Modul 8021q zu laden:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Um zu überprüfen, ob das Modul geladen ist:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Module beim Booten dauerhaft geladen werden:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Rufen Sie die Schnittstellennamen ab und identifizieren Sie die private Schnittstelle:
>>
>> ```sh
>> ip a
>> ```
>>
>> In diesem Beispiel heißt die private Schnittstelle `eno2`.
>>
>> - Erstellen Sie als Nächstes eine Subschnittstellen-Konfigurationsdatei für das VLAN in der Hauptnetzwerkkonfigurationsdatei. In diesem Beispiel heißt die Datei `ifcfg-eno2.10`, wobei eno2 sich auf die private Netzwerkschnittstelle und `10` auf die VLAN-ID bezieht.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>>
>> - Fügen Sie die folgenden Einträge zur Konfigurationsdatei hinzu. Ersetzen Sie die Werte durch Ihre eigenen.
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Speichern und schließen Sie die Datei.
>>
>> - Übersicht:
>>
>> ![config](images/config_alma.png){.thumbnail}
>>
>> - Starten Sie die Netzwerkschnittstelle neu:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux & Rocky Linux (10)**
>>
>> Die folgende Konfiguration basiert auf Fedora 43.
>>
>> - Bevor Sie beginnen, stellen Sie eine SSH-Verbindung zu Ihrem Server her und führen Sie den folgenden Befehl aus, um das Kernel-Modul 8021q zu laden:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Um zu überprüfen, ob das Modul geladen ist:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Module beim Booten dauerhaft geladen werden:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Um den Namen der Netzwerkschnittstelle zu erhalten:
>>
>> ```sh
>> ip a
>> ```
>>
>> In diesem Beispiel heißt die Schnittstelle `eno2`. Wir müssen eine VLAN-Subschnittstelle erstellen, bevor wir ihr eine private IP-Adresse zuweisen.
>>
>> - Verwenden Sie den folgenden Befehl, um die VLAN-Schnittstelle zu erstellen:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Ersetzen Sie `vlan-name` durch den Namen der VLAN-Subschnittstelle, `parent-interface` durch den Namen der privaten Schnittstelle und `vlan-id` durch die VLAN-ID.
>>
>> **In diesem Beispiel:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> - Weisen Sie der VLAN-Subschnittstelle eine private IP-Adresse zu:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **In diesem Beispiel:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - Aktivieren Sie dann die VLAN-Subschnittstelle:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **In diesem Beispiel:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Die obigen Schritte erstellen eine Konfigurationsdatei für die VLAN-Schnittstelle. Diese Datei befindet sich unter `/etc/NetworkManager/system-connections/` und folgt dem Benennungsformat `vlan-name.nmconnection`.
>>
>> In diesem Beispiel heißt die Datei `eno2.10.nmconnection`.
>>
>> - Übersicht:
>>
>> ![config](images/fedora_file_name.png){.thumbnail}
>>
>> ![config](images/config_fedora.png){.thumbnail}
>>
> **Windows**
>>
>> Verbinden Sie sich über Remote-Desktop mit Ihrem Server und öffnen Sie die Anwendung "Server-Manager". Wählen Sie dann `Lokaler Server`{.action} aus und klicken Sie neben "**NIC Teamvorgang**" auf den Link `Deaktiviert`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}
>>
>> Klicken Sie dann mit der rechten Maustaste auf das Netzwerkinterface und wählen Sie `Zum neuen Team hinzufügen`{.action}.
>>
>> ![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}
>>
>> Erstellen Sie anschließend ein neues Team, indem Sie ein Netzwerkinterface auswählen und im Feld "**Teamname**" einen Teamnamen eingeben. Wenn Sie damit fertig sind, bestätigen Sie mit `OK`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}
>>
>> Geben Sie nun das VLAN-Tag an. Klicken Sie im "**NIC-Teamvorgang**"-Fenster im Panel "**ADAPTER UND SCHNITTSTELLEN**", Gehen Sie zur Registerkarte `Teamschnittstellen`{.action} und mit der rechten Maustaste auf das Interface, das Sie gerade zum neuen Team hinzugefügt haben, und klicken Sie dann auf `Eigenschaften`{.action}. Klicken Sie jetzt auf `Spezifisches VLAN`{.action} und geben Sie den Tag ein.
>>
>> ![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}
>>
>> Konfigurieren Sie nun die IP-Adresse des VLANs. Öffnen Sie hierzu über das Startmenü die `Systemsteuerung`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}
>>
>> Klicken Sie auf `Netzwerk und Internet`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}
>>
>> Klicken Sie dann auf `Netzwerk- und Freigabecenter`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}
>>
>> Klicken Sie anschließend auf `Adaptereinstellugen ändern`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}
>>
>> Klicken Sie nun mit der rechten Maustaste auf das VLAN-Interface und klicken Sie dann auf `Eigenschaften`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}
>>
>> In unserem Beispiel ist `Ethernet 2` das für vRack verwendete Interface. Es ist jedoch möglich, dass das vRack-Interface in Ihrer Konfiguration ein anderes ist. Das hier auszuwählende Interface verwendet nicht die Haupt-IP-Adresse des Servers oder eine selbst zugewiesene IP-Adresse.
>>
>> Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}
>>
>> Klicken Sie auf `Folgende IP-Adresse verwenden`{.action}. Geben Sie in das Feld "**IP-Adresse**" eine IP-Adresse aus Ihrem internen IP-Bereich ein. Geben Sie in das Feld "**Subnetzmaske**" die Subnetzmaske "255.255.0.0" ein.
>>
>> ![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}
>>
>> Klicken Sie abschließend auf den Button `OK`{.action}, um die Änderungen zu speichern, und starten Sie den Server neu.
>>

///

## Weiterführende Informationen

[Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

- [vRack auf Ihren Dedicated Servern konfigurieren](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Treten Sie unserer [User Community](/links/community) bei.
