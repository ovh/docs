---
title: 'vRack auf Ihren Dedicated Servern konfigurieren'
slug: mehrere-dedizierte-server-im-vrack-konfigurieren
excerpt: 'Erfahren Sie hier, wie Sie ein vRack auf zwei oder mehr Servern einrichten'
section: vRack
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.05.2022**

## Ziel

Das OVHcloud vRack (Virtual Rack) erlaubt es, mehrere Server (unabhängig von deren Anzahl und physischem Standort in unseren Rechenzentren) virtuell zusammenzufassen und diese über einen virtuellen Switch innerhalb eines privaten Netzwerks zu verbinden. Ihre Server können so privat und abgesichert über ein dediziertes VLAN untereinander kommunizieren.

**Diese Anleitung erklärt, wie Sie Dedicated Server für die Nutzung im vRack konfigurieren.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben ein [OVHcloud vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account aktiviert.
- Sie haben zwei oder mehr [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account (vRack kompatibel).
- Sie haben administrativen Zugriff (Root) auf Ihre Server (über SSH oder RDP).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen privaten IP-Adressbereich für das vRack festgelegt.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

### Schritt 1: vRack bestellen

Wenn Sie sich in Ihrem OVHcloud Kundencenter eingeloggt haben, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und klicken Sie auf den Button `Bestellen`{.action}. Klicken Sie unter diesem Menü auf `vRack`{.action}.

![vRack bestellen](images/orderingvrack.png){.thumbnail}

Sie werden auf eine andere Seite weitergeleitet, um die Bestellung zu validieren. Der Vorgang dauert einige Minuten.


### Schritt 2: Ihre Server zum vRack hinzufügen

Wenn das vRack in Ihrem Account aktiviert ist, gehen Sie in den Bereich `Bare Metal Cloud`{.action}, klicken Sie auf `Network`{.action} und öffnen Sie das Menü `vRack`{.action}.

Wählen Sie in der Liste Ihr vRack aus, um die Liste der verfügbaren Dienstleistungen anzuzeigen. Klicken Sie erst auf jeden der Server, die Sie zum vRack hinzufügen möchten, dann auf den Button `Hinzufügen`{.action}.

![vRack](images/vrack_selection.png){.thumbnail}

### Schritt 3: Konfiguration Ihrer Netzwerkinterfaces

Die folgenden Abschnitte enthalten die Konfigurationen für aktuelle Versionen der meistverwendeten Distributionen/Betriebssysteme. Loggen Sie sich zunächst mit [SSH oder RDP (Windows)](../erste-schritte-dedicated-server/) auf Ihrem Server ein. Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen eingeloggt sind (Administrator/sudo).

> [!primary]
>
Bitte beachten Sie, dass sich die Vorgehensweise zur Konfiguration der Netzwerkschnittstelle sowie die Dateinamen bei den verschiedenen Distributionen zwischenzeitlich geändert haben können. Wir empfehlen Ihnen, die Benutzeranleitungen und Wissensressourcen der verwendeten Betriebssystemversion zu konsultieren, falls Sie auf Probleme stoßen. 
>
Die nachfolgenden Konfigurationsdetails verwenden zu Beispielzwecken den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).
>
Sie können aber einen privaten IP-Bereich Ihrer Wahl und jede beliebige Adresse in diesem Bereich verwenden.
>

#### GNU/Linux Konfigurationen

Die Namen der Netzwerkinterfaces Ihrer Server sind nicht immer die gleichen. Ersetzen Sie in den nachfolgenden Beispielen NETWORK_INTERFACE stets mit der korrekten Interface-Bezeichnung.

Der sicherste Weg, das richtige Interface für das vRack zu bestimmen, ist das Prüfen des Server-Tabs `Netzwerkinterfaces`{.action} im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Notieren Sie sich aus der Tabelle am Seitenende die **MAC-Adresse** des Interfaces vom Typ **Privat**, die in dieser Ansicht auch als "Name" angezeigt wird.

![vRack Interface](images/private_interface.png){.thumbnail}

Sobald Sie via SSH mit Ihrem Server verbunden sind, können Sie Ihre Netzwerkinterfaces mit folgendem Befehl auflisten:

```bash
ip a
```

In der mit ```link ether``` beginnenden Zeile können Sie verifizieren, dass das Interface dem als **Privat** definierten im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) entspricht. Verwenden Sie also den zugehörigen Interfacenamen, um `NETWORK_INTERFACE` in den folgenden Konfigurationen zu ersetzen. (Beispielname: `eno2`)

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

Bearbeiten Sie mit einem beliebigen Texteditor die Netzwerkkonfigurationsdatei in `/etc/network/interfaces.d`. Hier heißt die Datei `50-cloud-init`:

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Fügen Sie folgende Zeilen hinzu:

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
address 192.168.0.1
netmask 255.255.0.0
```

Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.

Starten Sie den Netzwerkdienst neu, um die Konfiguration anzuwenden:

```bash
systemctl restart networking
```

Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.

##### **Ubuntu**

Bearbeiten Sie mit einem beliebigen Texteditor die Netzwerkkonfigurationsdatei in `/etc/netplan/`. Hier heißt die Datei `50-cloud-init.yaml`:

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Fügen Sie die IP-Konfiguration zu den bereits vorhandenen Zeilen hinzu, unterhalb der Zeile `ethernets:`:

```yaml
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> Es ist wichtig, die Zeilenausrichtung jedes Elements in den `yaml`-Dateien wie im vorstehenden Beispiel dargestellt einzuhalten. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen. Nur die Leertaste ist notwendig.
>

Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.

Verwenden Sie folgenden Befehl, um die Konfiguration anzuwenden:

```bash
netplan apply
```

Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.

##### **CentOS**

Bearbeiten Sie mit einem beliebigen Texteditor die Netzwerkkonfigurationsdatei `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Fügen Sie diese Zeilen hinzu:

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Speichern Sie Ihre Änderungen der Konfigurationsdatei und schließen Sie den Editor.

Starten Sie den Netzwerkdienst neu, um die Änderungen anzuwenden:

```bash
systemctl restart networking
```

Verwenden Sie in **CentOS 8** diesen Befehl:

```bash
systemctl restart NetworkManager.service
```

Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.

#### Windows-Konfiguration

Die folgenden Konfigurationen verwenden beispielhaft den IP-Adressbereich `192.168.0.0/16` (**Subnetzmaske**: `255.255.0.0`).

Loggen Sie sich über Remote-Desktopverbindung auf Ihrem Windows-Server ein und gehen Sie zur **Systemsteurung**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Klicken Sie auf `Network and Internet`{.action}.

![Internet](images/windows_network_and_internet.png){.thumbnail}

Öffnen Sie `Network and Sharing Center`{.action}.

![Windows](images/windows_network_and_sharing_centre.png){.thumbnail}

Klicken Sie auf `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Klicken Sie mit der rechten Maustaste auf das sekundäre Netzwerkinterface und klicken Sie dann auf `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}

Klicken Sie auf **Use the following IP address**. Geben Sie in den entsprechenden Feldern eine **IP-Adresse** Ihres privaten Bereichs und die zugehörige **Subnetzmaske** (`255.255.0.00` in diesem Beispiel) ein.

![Windows](images/windows_use_following_ip_address.png){.thumbnail}

Klicken Sie auf `OK`{.action}, um die Änderungen zu speichern, und starten Sie Ihren Server neu, um sie anzuwenden.

Wiederholen Sie diesen Vorgang für Ihre anderen Server und weisen Sie jedem Server eine noch ungenutzte IP-Adresse aus Ihrem privaten Bereich zu. Ihre Server können dann über das private Netzwerk untereinander kommunizieren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
