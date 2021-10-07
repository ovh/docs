---
title: 'Netzwerk auf ESXi für die High Grade & SCALE Reihen konfigurieren'
slug: esxi-network-hg-scale
excerpt: 'Erfahren Sie, wie Sie das Netzwerk auf ESXi für die High Grade & SCALE Reihen einrichten.'
section: 'Fortgeschrittene Nutzung'
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 07.10.2021**

## Ziel

Bei den High Grade & SCALE Reihen ist der Betrieb von Failover-IPs im *Bridged*-Modus (über virtuelle MAC-Adressen) nicht möglich. Konfigurieren Sie deshalb die Failover-IPs im Router-Modus oder über das vRack.

> [!primary]
>
> Die Dokumentation deckt bisher nur die Lösung über das vRack ab.
>

**Hier erfahren Sie, wie Sie das Netzwerk mit ESXi konfigurieren.**

## Voraussetzungen

* Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Account reserviert.
* Sie haben den gewünschten privaten IP-Adressbereich vorbereitet.
* Sie verfügen über einen [mit vRack kompatiblen Dedicated Server](https://www.ovhcloud.com/de/bare-metal/){.external}.
* Sie haben einen [vRack](https://www.ovh.de/loesungen/vrack/){.external} Dienst aktiviert.
* Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

## In der praktischen Anwendung

> [!primary]
>
> In diesen Serverreihen gibt es 4 Netzwerkkarten. Zwei für das Publikum, zwei für das Private. Um die gesamte Bandbreite zu nutzen, müssen Aggregate erstellt werden.
>

### Failover-IP über das vRack

#### Ursprüngliche Konfiguration

![Schema ESXI](images/schema_esxi_A01_2022.png){.thumbnail}

In diesem Beispiel:

* die öffentlichen Schnittstellen `vmnic2` und `vmnic3`;
* Die privaten Interfaces sind auf `vmnic0` UND `vmnic1`.

Es existiert ein erster vSwitch, der jedoch nur ein `vmnic2` Interface enthält.

> [!primary]
>
> Überprüfen Sie, dass Ihre Konfiguration gleich ist. Sie verfügen über Informationen zu öffentlichen oder privaten MAC-Adressen und Interfaces in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über die OVHcloud API.
>

#### Erläuterungen

Sie müssen nun:

* Erstellung des Aggregats auf dem öffentlichen vSwitch;
* vSwitch für das vRack erstellen
* eine Hafengruppe zu erstellen;
* VMs erstellen, indem die neue Portgruppe als Netzwerkinterface verwendet wird.

#### ESXi konfigurieren

> [!primary]
>
> Die Änderungen sind im Bestellmodus (shell) und nicht über das grafische Interface (GUI) von ESXi vorzunehmen.
>

##### **Erstellung des Aggregats im LACP-Modus auf dem vSwitch, der die öffentlichen Interfaces trägt**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Ergebnis:

![Schema ESXI](images/schema_esxi_A02_2022.png){.thumbnail}

##### **vSwitch und Aggregat für das vRack auf privaten Interfaces erstellt**

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
46.105.135.96 # Reserviert: Netzwerkadresse
46.105.135.97 # Erste verwendbare Adresse
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
46.105.135.109 # Letzte verwendbare Adresse
46.105.135.110 # Reserviert: Netzwerk-Gateway
46.105.135.111 # Reserviert: Broadcast-Netzwerkadresse
```

Um die erste verwendbare IP-Adresse zu konfigurieren, bearbeiten Sie die Netzwerkkonfigurationsdatei wie im Folgenden beschrieben. In unserem Beispiel verwenden wir **255.255.255.240** als Subnetzmaske.

> [!primary]
>
> Die von uns in diesem Beispiel verwendete Subnetzmaske passt zu unserem IP-Block. Ihre Subnetzmaske kann je nach Größe Ihres Blocks variieren. Wenn Sie Ihren IP-Block kaufen, erhalten Sie eine E-Mail mit der zu verwendenden Subnetzmaske.
>

#### Beispiel für die Konfiguration einer Kunden-VM unter Debian

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
