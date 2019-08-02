---
title: 'Mehrere VLANs im vRack erstellen'
slug: vrack-vlan-erstellen
excerpt: 'So erstellen Sie mehrere VLANs im vRack'
section: vRack
---

**Stand 02.08.2019**

## Einleitung

Bei der [Standardkonfiguration des vRack](https://docs.ovh.com/de/dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/){.external} können Sie nur ein VLAN erstellen. Das bedeutet, Sie können jede IP-Adresse nur einmal verwenden. Seit Version 2.0 der vRack Konfiguration ist es jedoch möglich, bis zu 4000 lokale virtuelle Netzwerke in nur einem vRack einzurichten. Das bedeutet, Sie können jede IP-Adresse bis zu 4000 mal verwenden.

**In dieser Anleitung erfahren Sie, wie Sie mehrere VLANs im vRack erstellen.**


## Voraussetzungen

- Sie verfügen über einen oder mehrere mit dem vRack kompatible [Dedicated Server](https://www.ovh.de/dedicated_server/){.external}.
- Sie haben einen [vRack](https://docs.ovh.com/de/dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/){.external} Dienst aktiviert.
- Sie haben Zugriff auf den von Ihnen gewählten privaten IP-Adressbereich.
- Sie sind via SSH als Root-Benutzer eingeloggt (Linux).
- Sie sind mit dem Administratorkonto eingeloggt (Windows).
- Sie haben die [Konfiguration des vRack](https://docs.ovh.com/de/dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/){.external} abgeschlossen.


## Beschreibung

### Linux

> [!primary]
>
> In unserem Beispiel verwenden wir `eth1` als Netzwerkinterface, **10** als VLAN-Tag und **192.168.0.0/16** als IP-Adressbereich. 
>
> Die Befehle müssen an die jeweils verwendete Distribution angepasst werden. Wenn Sie Fragen haben, lesen Sie die offizielle Dokumentation Ihrer Distribution.
>

Installieren Sie zuerst das Paket „VLAN“ auf Ihrem Server. Verwenden Sie hierzu folgenden Befehl:

```sh
sudo apt-get install vlan
```

Erstellen Sie anschließend ein VLAN-Tag. Das Tag ist die Kennung, mit der Sie verschiedene VLANs voneinander unterscheiden können:

```sh
vconfig add eth1 10

Added vlan with VID == 10 to IF -:eth1:-
```

Geben Sie danach im vRack den IP-Adressbereich an und taggen Sie ihn mit Ihrer Kennung. Verwenden Sie hierzu folgenden Befehl:

```sh
ip addr add 192.168.0.0/16 dev eth1.10
```

Es kann vorkommen, dass das Interface getrennt wird:
```sh
# ip  addr show dev eth1
7: eno2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state DOWN group default qlen 1000
[...]
```

Um es wieder zu verbinden:
```sh
ip link set dev eth1 up
```

Um den Vorgang abzuschließen, bearbeiten Sie die Konfiguration des Netzwerkinterfaces, damit diese das VLAN-Tag erkennt. Öffnen Sie hierzu die Konfigurationsdatei des Netzwerkinterfaces und bearbeiten Sie sie wie folgt:

```sh
nano /etc/network/interfaces

auto eth1:1
iface eth1 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### Unter Windows

Verbinden Sie sich über den Remotedesktop mit Ihrem Server und öffnen Sie die Anwendung „Server Manager“. Wählen Sie dann `Local Server`{.action} aus und klicken Sie neben „**NIC Teaming**“ auf den Link `Disabled`{.action}:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

Erstellen Sie anschließend ein neues Team, indem Sie ein Netzwerkinterface auswählen und im Feld „**Team name**“ einen Teamnamen eingeben. Wenn Sie damit fertig sind, bestätigen Sie mit `OK`{.action}.

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Geben Sie nun das VLAN-Tag an. Klicken Sie im „**NIC Teaming**“-Fenster im Panel „**Adapters and Interfaces**“ mit der rechten Maustaste auf das Interface, das Sie gerade zum neuen Team hinzugefügt haben, und klicken Sie dann auf `Properties`{.action}. Klicken Sie jetzt auf `Specific VLAN`{.action} und geben Sie das Tag ein:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Konfigurieren Sie nun die IP-Adresse des VLANs. Öffnen Sie hierzu das Startmenü und klicken Sie auf `Systemsteuerung`{.action}:

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Klicken Sie auf `Netzwerk und Internet`{.action}:

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Klicken Sie dann auf `Netzwerk- und Freigabecenter`{.action}:

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Klicken Sie anschließend auf `Adaptereinstellungen ändern`{.action}:

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Klicken Sie nun mit der rechten Maustaste auf das VLAN-Interface und klicken Sie dann auf `Eigenschaften`{.action}.

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Doppelklicken Sie auf `Internetprotokoll, Version 4 (TCP/IPv4)`{.action}.

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Klicken Sie auf `Folgende IP-Adresse verwenden`{.action}. Geben Sie in das Feld „**IP-Adresse**“ eine IP-Adresse aus Ihrem internen IP-Bereich ein. Geben Sie in das Feld „**Subnetzmaske**“ die Subnetzmaske „255.255.0.0“ ein.

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Klicken Sie abschließend auf den Button `OK`{.action}, um die Änderungen zu speichern, und starten Sie den Server neu.

## Weiterführende Informationen

[Mehrere dedizierte Server im vRack konfigurieren](https://docs.ovh.com/de/dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
