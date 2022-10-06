---
title: 'Netzwerk auf ESXi für die High Grade & SCALE Reihen konfigurieren'
slug: esxi-network-hg-scale
excerpt: 'Erfahren Sie, wie Sie das Netzwerk auf VMware ESXi für die High Grade & SCALE Reihen einrichten'
section: 'Fortgeschrittene Nutzung'
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 09.05.2022**

## Ziel

Bei den High Grade & SCALE Reihen ist der Betrieb von Additional IPs im *Bridged*-Modus (über virtuelle MAC-Adressen) nicht möglich. Es ist deshalb notwendig, die Additional IPs im *Routed*-Modus oder über das vRack zu konfigurieren.

> [!primary]
>
> Die bisher existierende Dokumentation deckt lediglich die Lösung über das vRack ab.
>

**Diese Anleitung erklärt, wie Sie das Netzwerk mit VMware ESXi konfigurieren.**

## Voraussetzungen

- Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Kunden-Account. Der IP-Adressblock muss auf das vRack zeigen.
- Sie haben Ihren gewünschten privaten IP-Adressbereich festgelegt.
- Sie verfügen über einen mit vRack kompatiblen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben ein [vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account eingerichtet.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

> [!warning]
>
> Diese Server-Reihen verfügen über 4 Netzwerkkarten. Um die gesamte Bandbreite nutzen zu können, müssen Aggregate erstellt werden. Unsere Dokumentation basiert auf diesen Kartenaggregaten.
>
> **ESXi unterstützt LACP nativ nicht.**
> Es ist also keine Redundanz verfügbar. Auch die gesamte Bandbreite der Netzwerkkarten Ihres Servers kann deshalb nicht genutzt werden.
>

> [!warning]
>
> Derzeit ist ein bekannter Fehler in der grafischen Benutzeroberfläche von ESXi vorhanden. Die Ausführung der Schritte in diesem Interface würde daher zu einer nicht funktionalen Konfiguration führen. Es ist absolut notwendig, diese Konfiguration über das SSH-Kommandozeileninterface anzuwenden.
>

### Additional IP über vRack

Fügen Sie Ihren öffentlichen IP-Adressblock zum vRack hinzu. Gehen Sie hierzu in den Bereich `Bare Metal Cloud`{.action} in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und öffnen Sie `vRack`{.action}.

Wählen Sie in der Liste Ihr vRack aus, um die Liste der verfügbaren Dienstleistungen anzuzeigen. Klicken Sie auf den öffentlichen IP-Adressblock, den Sie zum vRack hinzufügen möchten, und klicken Sie dann auf den Button `Hinzufügen`{.action}.

#### Ursprüngliche Konfiguration

![Schema ESXI](images/schema_esxi_A01_2022.png){.thumbnail}

In diesem Beispiel gilt:

- Die öffentlichen Schnittstellen sind `vmnic2` und `vmnic3`.
- Die privaten Interfaces sind `vmnic0` und `vmnic1`.

Es existiert ein erster vSwitch, der jedoch nur das Interface `vmnic2` enthält.

> [!primary]
>
> Überprüfen Sie, dass Ihre Konfiguration identisch ist. Sie verfügen über Informationen zu öffentlichen oder privaten MAC-Adressen und Interfaces in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über die OVHcloud API.
>

#### Erläuterungen

Folgende Schritte sind notwendig:

- Erstellung des Aggregats auf dem öffentlichen *vSwitch*.
- *vSwitch* für das vRack erstellen.
- Eine *Port Group* erstellen.
- VMs erstellen, indem die neue Portgruppe als Netzwerkinterface verwendet wird.

#### ESXi konfigurieren

> [!primary]
>
> Die Änderungen sind im *command mode* (Shell) statt über das grafische Interface (GUI) von ESXi vorzunehmen.
>

##### **Erstellung des Aggregats im LACP-Modus auf dem vSwitch, der die öffentlichen Interfaces hat**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Ergebnis:

![Schema ESXI](images/schema_esxi_A02_2022.png){.thumbnail}

##### **vSwitch und Aggregat für das vRack auf privaten Interfaces erstellen**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Ergebnis:

![Schema ESXI](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Konfiguration der VM**

Die VMs müssen über eine Netzwerkschnittstelle die neue Gruppe von `portgroupvRackvSwitch` Ports verfügen.

![Schema ESXI](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Erstellung einer Portgruppe für den neuen vSwitch "vRackvSwitch"**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Eine verwendbare IP-Adresse konfigurieren

Im Fall des vRack sind die erste und die beiden letzten Adressen eines bestimmten IP-Blocks stets der Netzwerkadresse, dem Gateway und der Broadcast-Adresse *vorbehalten*. Das heißt, die erste verwendbare Adresse ist die zweite Adresse des Blocks, wie im Folgenden zu sehen ist:

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

Um die erste verwendbare IP-Adresse zu konfigurieren, bearbeiten Sie die Netzwerkkonfigurationsdatei wie im Folgenden beschrieben. In unserem Beispiel verwenden wir **255.255.255.240** als Subnetzmaske.

> [!primary]
>
> Die in diesem Beispiel verwendete Subnetzmaske passt zu unserem IP-Block. Ihre Subnetzmaske kann je nach Größe Ihres Blocks variieren. Wenn Sie Ihren IP-Block bestellen, erhalten Sie eine E-Mail mit der zu verwendenden Subnetzmaske.
>

#### Beispielkonfiguration eines VM Clients mit Debian

Inhalt der Datei `etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
