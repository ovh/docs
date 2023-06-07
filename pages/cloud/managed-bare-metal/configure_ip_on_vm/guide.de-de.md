---
title: 'IP auf einer virtuellen Maschine konfigurieren'
routes:
    canonical: '/pages/cloud/private-cloud/configure_ip_on_vm'
excerpt: 'Hier erfahren Sie, wie Sie eine IP auf einer virtuellen Maschine konfigurieren'
updated: 2020-11-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 18.11.2020**

## Ziel

Nachdem Sie eine virtuelle Maschine (VM) in Ihrer Infrastruktur erstellt haben, können Sie dieser eine öffentliche oder private IP zuweisen.

**In dieser Anleitung erfahren Sie, wie Sie diese Konfiguration erstellen.**

## Voraussetzungen

- Sie haben eine virtuelle Maschine erstellt.
- Sie verfügen über einen IP-Block.

## In der praktischen Anwendung

### Informationen abrufen

Sie können die Informationen Ihres öffentlichen IP-Adressblocks direkt über den vSphere-Client abrufen, indem Sie in den Bereich Hosts `und Cluster gehen`{.action}. Klicken Sie anschließend auf Ihr Datacenter und wählen Sie den Tab `Konfigurieren`{.action}. Klicken Sie dann auf `Netzwerk`{.action} unter `OVHcloud`.

![Konfiguration auf OVHcloud Network](images/01config_ip_ovh_network.png){.thumbnail}

In jedem von OVHcloud ausgelieferten Block sind 5 IP-Adressen für die Netzwerkkonfiguration reserviert und dürfen niemals für Ihre virtuellen Maschinen verwendet werden. Es handelt sich um die erste und die letzten vier IP-Adressen des Blocks.

Ein Managed Bare Metal IP Block wird wie folgt organisiert:

- Die erste als reserviert markierte IP-Adresse (`Reserved`) entspricht der Netzwerkadresse.
- Die folgenden IPs sind für Ihre virtuellen Maschinen nutzbar: Sie sind als verfügbar (`Available`) anzugeben, wenn keine VMs sie betreiben, oder als verwendet (`Used`), wenn dies nicht der Fall ist.
- Die letzten vier IP-Adressen des Blocks sind reserviert, zwei sind OVHcloud-Routern für den Betrieb des Blocks vorbehalten, und die anderen zwei werden für Gateway und Broadcast verwendet.

![Erweiterte Konfiguration im OVH Network](images/02config_ip_ovh_network_advanced.png){.thumbnail}

### Eine öffentliche IP konfigurieren

Um eine öffentliche IP auf Ihrer virtuellen Maschine zu konfigurieren müssen Sie zunächst das `VMNetwork`{.action}-Interface in den Einstellungen der Netzwerkkarte Ihrer VM ausgewählt haben:

![VMNetwork](images/03vmnetwork.png){.thumbnail}

#### Linux

Hier ein Beispiel für die Konfiguration der Debian Distribution:

![IP-Interface](images/config_ip_interfaces.jpg){.thumbnail}

```sh
auto eth0
iface eth0 inet static
address 46.105.220.xxx
netmask 255.255.255.240
broadcast 46.105.220.xxx
gateway 46.105.220.xxx
dns-nameservers 213.186.33.99
```

Mounten Sie den Netzwerk-Adapter mithilfe eines `ifup` Interfaces.

Sie können die Konfiguration auch mit einem `ifconfig` überprüfen.

Wenn Ihre virtuelle Maschine das Netzwerk nicht findet, überprüfen Sie bitte, ob die Netzwerkkarte auf *VMNetwork* und nicht auf *LocalPortGroup* oder VLANs konfiguriert ist und das Verbindungsfeld der Karte angekreuzt ist.

#### Windows

Hier ein Beispiel für die Windows-Konfiguration:

Gehen Sie in der `Systemsteuerung`{.action} zu `Netzwerk und Internet`{.action}, dann `Netzwerk-Center und Freigabe`{.action} und dann `Netzwerk-Adapter ändern`{.action}.

Um schneller zu sein, klicken Sie auf das Suchfeld inWindows und schreiben Sie `Run`. Die Windows-Ausführungskonsole wird geöffnet und Sie können folgenden Befehl eingeben:

```shell
ncpa.cpl
```

Klicken Sie anschließend mit der rechten Maustaste auf den entsprechenden VMNetwork-Adapter und dann auf `Eigenschaften`{.action}. Wählen Sie  `TCP/IPv4`{.action} aus und klicken Sie erneut auf `Eigenschaften`{.action} und geben Sie die Informationen für Ihre IP wie folgt ein:

![Windows-Konfiguration](images/config_ip_windows.jpg){.thumbnail}

```sh
IP-Adresse: 46.105.220.xxx
Subnetzmaske: 255.255.255.240
Standard-Paserelle: 46.105.220.yyy
DNS Server: 213.186.33.99
```

### Eine private IP konfigurieren

Die Konfiguration einer privaten IP-Adresse entspricht der einer öffentlichen IP-Adresse. Verwenden Sie jedoch die für Ihr VLAN konfigurierte Netzwerkkarte.

In den Adapter-Einstellungen können Sie VLAN konfigurieren (standardmäßig 10 bis 20 und mit vRack verbunden. Sie können mehr erstellen, indem Sie dieser [Anleitung](/pages/cloud/managed-bare-metal/vlan-creation) folgen.)

In den Einstellungen Ihrer virtuellen Maschine können Sie ein VLAN auswählen:

![VLAN](images/04vlanBis.png){.thumbnail}

![VLAN](images/05vlan.png){.thumbnail}

#### Linux

Hier ein Beispiel für die Konfiguration der Debian Distribution:

![Private IP auf Linux](images/linux_private.PNG){.thumbnail}

Wenn Sie die Schnittstellendatei bearbeiten, können Sie eine private IP im IP-Bereich Ihrer Wahl angeben:

```sh
auto eth0
iface eth0 inet static
address 192.168.70.1
netmask 255.255.255.0
gateway 192.168.70.254
```

Mounten Sie den Netzwerk-Adapter mithilfe eines `ifup` Interfaces.

Sie können die Konfiguration auch mit einem `ifconfig` überprüfen.

#### Windows

Hier ein Beispiel für die Windows-Konfiguration:

Gehen Sie in der `Systemsteuerung`{.action} zu `Netzwerk und Internet`{.action}, dann `Netzwerk-Center und Freigabe`{.action} und dann `Netzwerk-Adapter ändern`{.action}.

Um schneller zu sein, klicken Sie auf das Suchfeld in Windows und schreiben Sie `Run`. Die Windows-Ausführungskonsole wird geöffnet und Sie können folgenden Befehl eingeben:

```shell
ncpa.cpl
```

Klicken Sie anschließend mit der rechten Maustaste auf den entsprechenden VMNetwork-Adapter und dann auf `Eigenschaften`{.action}. Wählen Sie  `TCP/IPv4`{.action} aus und klicken Sie erneut auf `Eigenschaften`{.action} und geben Sie die Informationen für Ihre IP wie folgt ein:

![Öffentliche Windows-IP-Konfiguration](images/windows_private.PNG){.thumbnail}

Wenn Sie dieses Interface ändern, können Sie eine private IP im IP-Bereich Ihrer Wahl angeben:

```sh
IP-Adresse: 192.168.70.2
Subnetzmaske: 255.255.255.0
Standard-Paserelle: 192.168.70.254
```


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
