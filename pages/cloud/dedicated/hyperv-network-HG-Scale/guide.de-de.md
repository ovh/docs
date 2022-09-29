---
title: 'Netzwerk auf Windows Server mit Hyper-V für die High Grade & SCALE Reihen konfigurieren'
slug: hyperv-network-hg-scale
excerpt: 'Erfahren Sie, wie Sie das Netzwerk auf Windows Server mit Hyper-V für die High Grade & SCALE Reihen konfigurieren'
section: 'Fortgeschrittene Nutzung'
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 15.11.2021**

## Ziel

Bei den High Grade & SCALE Server-Reihen ist der Betrieb von Additional IPs im *Bridged*-Modus (über virtuelle MAC-Adressen) nicht möglich. Es ist deshalb notwendig, die Additional IPs im *Routed*-Modus oder über das vRack zu konfigurieren.

**Diese Anleitung erklärt, wie Sie das Netzwerk mit Hyper-V auf Windows Server konfigurieren.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie verfügen über eine [Additional IP](https://www.ovhcloud.com/de/bare-metal/ip/)-Adresse oder einen Additional IP-Block.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
>
> Im OVHcloud Kundencenter dürfen keine virtuellen MACs für Additional IPs angelegt werden.
>

## In der praktischen Anwendung

> [!primary]
>
> Bei diesen Serverreihen gibt es 4 Netzwerkkarten: jeweils zwei für das öffentliche und lokale Netzwerk. Um die gesamte Bandbreite zu nutzen, müssen Aggregate erstellt werden.
>

### Additional IP im gerouteten Modus auf öffentlichen Netzwerkinterfaces

#### Erläuterungen

Folgende Schritte sind notwendig:

- NIC Teaming konfigurieren
- Die Hyper-V- und RRAS-Rollen installieren
- RRAS als Router konfigurieren

#### Identifikation der Interfaces und NIC-Teaming-Konfiguration

Öffnen Sie Windows Powershell und führen Sie den Befehl `Get-NetAdapter` aus:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

In diesem Beispiel bedeutet das folgendes:

- Die öffentlichen Schnittstellen sind `Ethernet 3` und `Ethernet 4`.
- Die privaten Schnittstellen sind `Ethernet` und `Ethernet 2`.

> [!primary]
>
> Überprüfen Sie, dass Ihre Konfiguration ähnlich ist. Sie können Informationen zu öffentlichen oder privaten MAC-Adressen und Interfaces in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über die OVHcloud API abrufen.
>

Öffnen Sie den Server Manager, gehen Sie zu `Local Server`{.action} und klicken Sie auf `Disabled`{.action} neben "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Klicken Sie auf der nächsten Seite mit der rechten Maustaste auf eine der zuvor identifizierten öffentlichen Interfaces und klicken Sie dann auf `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Geben Sie einen Namen für Ihr Team ein und fügen Sie das zweite Interface hinzu. Öffnen Sie anschließend die erweiterten Einstellungen, stellen Sie "Teaming Mode" auf `LACP` ein und klicken Sie auf `OK`{.action}.

#### Statische IP konfigurieren

Um einen Verbindungsverlust beim Neustart zu vermeiden, muss die IP-Adresse statisch für das Team eingerichte werden.

Drücken Sie `Windows Key` \+ `R`, um ein *Run*-Fenster ("Ausführen") zu öffnen. Geben Sie `ncpa.cpl` ein und klicken Sie auf `OK`{.action}. Die Systemsteuerung für die Netzwerkverbindungen öffnet sich.

![static IP](images/static_ip_1.png){.thumbnail}

Klicken Sie rechts auf das von Ihnen erstellte Team und klicken Sie auf `Properties`{.action}.

![static IP](images/static_ip_2.png){.thumbnail}

Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![static IP](images/static_ip_3.png){.thumbnail}

Geben Sie unter `Use the following IP address` Ihre IP-Adresse ein.

Die Subnetzmaske und das Standardgateway sind: 255.255.255.255 und 100.64.0.1 (siehe unten).

Die DNS-Server können Sie selbst auswählen. In unserem Beispiel verwenden wir 213.186.33.99 und 8.8.8.8.

Klicken Sie auf `OK`{.action}, um das Fenster zu schließen, und erneut auf `OK`{.action}, um das Fenster der Adaptereigenschaften zu schließen.

![static IP](images/static_ip_4.png){.thumbnail}

#### Server-Rollen Hyper-V und RRAS hinzufügen

Gehen Sie im Server Manager zum `Dashboard`{.action} und klicken Sie auf `Add Roles and Features`{.action}.

![Install Roles](images/install_roles_1.png){.thumbnail}

Folgen Sie dem Assistenten bis zum Abschnitt "Server Roles". Wählen Sie dann `Hyper-V` und `Remote Access` aus.

![Install Roles](images/install_roles_2.png){.thumbnail}

Gehen Sie dann zum Unterbereich "Virtual Switches" von "Hyper-V" und wählen Sie Ihr zuvor erstelltes *NIC Team* aus.

![Install Roles](images/install_roles_3.png){.thumbnail}

Gehen Sie dann zum Unterbereich "Role Services" von "Remote Access" und haken Sie `Routing` an.

![Install Roles](images/install_roles_4.png){.thumbnail}

Wählen Sie im Bereich "Confirmation" die Option `Restart the destination server automatically if required` aus und klicken Sie auf `Install`{.action}.

#### Routing und Remote Access konfigurieren

Öffnen Sie die neue Anwendung "Routing and Remote Access" und rechtsklicken Sie auf Ihren Server. Klicken Sie hier auf `Configure and Enable Routing and Remote Access`{.action}.

![RRAS Config](images/configure_rras_1.png){.thumbnail}

Wählen Sie `Custom configuration` aus und klicken Sie auf `Next`{.action}.

![RRAS Config](images/configure_rras_2.png){.thumbnail}

Wählen Sie dann `LAN Routing` aus und klicken Sie auf `Next`{.action}.

![RRAS Config](images/configure_rras_3.png){.thumbnail}

Klicken Sie auf `Finish`{.action} und im neuen Fenster auf `Start Service`{.action}.

![RRAS Config](images/configure_rras_4.png){.thumbnail}

#### Die primären und zusätzlichen IP-Adressen im Hyper-V Interface statisch konfigurieren

Die IP-Konfiguration muss nun auf das Hyper-V-Interface angewendet werden.

Drücken Sie `Windows Key` \+ `R`, um ein *Run*-Fenster ("Ausführen") zu öffnen. Geben Sie `ncpa.cpl` ein und klicken Sie auf `OK`{.action}. Die Systemsteuerung für die Netzwerkverbindungen öffnet sich.

![static IP](images/static_ip_1.png){.thumbnail}

Klicken Sie rechts auf den "vEthernet"-Adapter und klicken Sie dann auf `Properties`{.action}.

![static IP](images/static_ip_5.png){.thumbnail}

Doppelklicken Sie `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![static IP](images/static_ip_3.png){.thumbnail}

Wählen Sie `Use the following IP address` aus und tragen Sie Ihre IP-Adresse ein.

Die Subnetzmaske und das Standardgateway sind: 255.255.255.255 und 100.64.0.1 (siehe unten).

Die DNS-Server können Sie selbst auswählen. In unserem Beispiel verwenden wir 213.186.33.99 und 8.8.8.8.

![static IP](images/static_ip_4.png){.thumbnail}

Klicken Sie dann auf `Advanced...` und klicken Sie im neuen Fenster auf `Add...`{.action} unter "IP addresses".

Fügen Sie die IP-Adresse und die Subnetzmaske Ihrer Additional IP hinzu und klicken Sie auf `Add`{.action}.

![static IP](images/static_ip_6.png){.thumbnail}

Wenn Sie alle Adressen angegeben haben, klicken Sie auf `OK`{.action}, um das Einstellungsfenster zu schließen und erneut auf `OK`{.action}, um die TCP/IPv4-Einstellungen zu schließen. Klicken Sie nochmals auf `OK`{.action}, um die Adaptereinstellungen zu schließen.

> [!warning]
>
> Dieser Schritt kann zu einem Verbindungsabbruch führen. Sollte dies der Fall sein, loggen Sie sich via [IPMI](https://docs.ovh.com/de/dedicated/verwendung-ipmi-dedicated-server/) ein und ändern Sie die Konfiguration erneut. Sie werden feststellen, dass der Eintrag zum Standardgateway fehlt. Fügen Sie das Gateway 100.64.0.1 wieder hinzu.
>

#### Statische Route hinzufügen

Öffnen Sie eine Eingabeaufforderung als Administrator und führen Sie den Befehl `route print interface` aus:

```powershell
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

In diesem Beispiel hat der Hyper-V-Adapter die ID "22".<br>
Merken Sie sich diese ID und führen Sie dann den Befehl `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 si 22` aus. (Verwenden Sie hierbei jeweils Ihre IP-Adresse und die zuvor abgerufene ID statt der Beispielwerte).<br>
Sie sollten dann als Antwortausgabe bekommen: "OK!"

```powershell
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Nachdem Sie Ihre VM erstellt und konfiguriert haben, sollte sie damit Internetzugang haben.

#### Beispielkonfiguration eines VM Clients mit Ubuntu

Inhalt der Datei `/etc/netplan/ip.yaml`:

```yaml
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```


### Additional IP über das vRack

#### Voraussetzungen

- Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Kunden-Account.
- Sie haben Ihren gewünschten privaten IP-Adressbereich festgelegt.
- Sie verfügen über einen mit vRack kompatiblen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben ein [vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account eingerichtet.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

#### Erläuterungen

Folgende Schritte sind notwendig:

- Erstellung eines Aggregats
- Erstellung der Bridge

#### Identifikation der Interfaces und NIC-Teaming-Konfiguration

Öffnen Sie Windows Powershell und führen Sie den Befehl `Get-NetAdapter` aus:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

In diesem Beispiel bedeutet das folgendes:

- Die öffentlichen Schnittstellen sind `Ethernet 3` und `Ethernet 4`.
- Die privaten Schnittstellen sind `Ethernet` und `Ethernet 2`.

> [!primary]
>
> Überprüfen Sie, dass Ihre Konfiguration ähnlich ist. Sie können Informationen zu öffentlichen oder privaten MAC-Adressen und Interfaces in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über die OVHcloud API abrufen.
>

Öffnen Sie den Server Manager, gehen Sie zu `Local Server`{.action} und klicken Sie auf `Disabled`{.action} neben "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Klicken Sie auf der nächsten Seite mit der rechten Maustaste auf eine der zuvor identifizierten öffentlichen Interfaces und klicken Sie dann auf `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Geben Sie einen Namen für Ihr Team ein und fügen Sie das zweite Interface hinzu. Öffnen Sie anschließend die erweiterten Einstellungen, stellen Sie "Teaming Mode" auf `LACP` ein und klicken Sie auf `OK`{.action}.

#### Virtuellen Switch im Hyper-V Manager erstellen

Es wird ein virtueller Switch benötigt, der die VMs an das zuvor erstellte Team bindet.

Öffnen Sie zuerst den Hyper-V Manager und klicken Sie auf `Virtual Switch Manager`{.action}.

![v-switch Create](images/create_vswitch_1.png){.thumbnail}

Vergewissern Sie sich, dass Sie "External" ausgewählt haben, und klicken Sie auf `Create Virtual Switch`{.action}.

![v-switch Create](images/create_vswitch_2.png){.thumbnail}

Geben Sie Ihrem Switch einen Namen, wählen Sie Ihren neuen Team-Adapter aus, klicken Sie auf `Apply`{.action} und dann auf `OK`{.action}.

![v-switch Create](images/create_vswitch_3.png){.thumbnail}

Sie können jetzt Ihre VM erstellen und das Netzwerk darauf konfigurieren.

#### Eine verwendbare IP-Adresse konfigurieren

Im Fall des vRack sind die erste, die vorletzte und die letzte Adresse eines bestimmten IP-Blocks immer für die Netzwerkadresse, das Netzwerk-Gateway und den *Broadcast* des Netzwerks reserviert. Das heißt, die erste verwendbare Adresse ist die zweite Adresse des Blocks, wie im Folgenden dargestelltt:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Um die erste verwendbare IP-Adresse zu konfigurieren, bearbeiten Sie die Netzwerkkonfigurationsdatei wie im Folgenden beschrieben. In diesem Beispiel ist die Subnetzmaske **255.255.255.240**.

> [!primary]
>
> Die in diesem Beispiel verwendete Subnetzmaske ist passend zum IP-Block. Ihre Subnetzmaske kann je nach Größe Ihres Blocks variieren. Wenn Sie Ihren IP-Block bestellen, erhalten Sie eine E-Mail mit der zu verwendenden Subnetzmaske.
>

#### Beispielkonfiguration eines VM Clients mit Ubuntu

Inhalt der Datei `/etc/netplan/vrack.yaml`:

```yaml
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 46.105.135.97/28
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 46.105.135.110
                                  on-link: true
```

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
