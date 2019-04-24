---
title: 'IP-Block im vRack konfigurieren'
slug: vrack-ip-block-hinzufuegen-oder-entfernen
excerpt: 'So konfigurieren Sie einen öffentlichen IP-Adressblock im vRack'
section: vRack
---

**Stand 24.04.2019**

## Einleitung

Neben Private IP Addressing ist es mit dem [vRack](https://www.ovh.de/loesungen/vrack/){.external} auch möglich, mithilfe eines öffentlichen IP-Adressblocks den öffentlichen IP-Traffic über den vRack Port Ihres Servers zu routen.

**In dieser Anleitung erfahren Sie, wie Sie einen öffentlichen IP-Adressblock so konfigurieren, dass Sie ihn mit dem vRack verwenden können.**


## Voraussetzungen

* Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Account reserviert.
* Sie haben den gewünschten privaten IP-Adressbereich vorbereitet.
* Sie verfügen über einen mit vRack kompatiblen [Server](https://www.ovh.de/dedicated_server/){.external}.
* Sie haben einen [vRack](https://www.ovh.de/loesungen/vrack/){.external} Dienst aktiviert.
* Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.


## Beschreibung

> [!primary]
>
> In der vorliegenden Anleitung verwenden wir als Beispiel den IP-Block 46.105.135.96/28 sowie `eth1` als sekundäres Netzwerk, das dem vRack zugewiesen ist.
>

### Eine verwendbare IP-Adresse konfigurieren

Beim vRack sind die erste, die vorletzte und die letzte Adresse eines gegebenen IP-Blocks immer jeweils für die Netzwerkadresse, das Netzwerk-Gateway sowie für den Netzwerk-*Broadcast* reserviert. Das heißt, die erste verwendbare Adresse ist die zweite Adresse des Blocks, wie im Folgenden zu sehen ist:

```sh
46.105.135.96   # Reserviert: Netzwerkadresse
46.105.135.97   # Erste verwendbare IP
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
46.105.135.109   # Letzte verwendbare IP
46.105.135.110   # Reserviert: Netzwerk-Gateway 
46.105.135.111   # Reserviert: Netzwerk-Broadcast
```

Um die erste verwendbare IP-Adresse zu konfigurieren, bearbeiten Sie die Netzwerkkonfigurationsdatei wie im Folgenden beschrieben. In unserem Beispiel verwenden wir **255.255.255.240** als Subnetzmaske.

> [!primary]
>
> Die von uns in diesem Beispiel verwendete Subnetzmaske passt zu unserem IP-Block. Ihre Subnetzmaske kann je nach Größe Ihres Blocks variieren. Wenn Sie Ihren IP-Block kaufen, erhalten Sie eine E-Mail mit der zu verwendenden Subnetzmaske.
>


```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Neue IP-Routing-Tabelle erstellen

Wir empfehlen Ihnen, zuerst „iproute2“ herunterzuladen und zu installieren. Mit diesem Paket ist es möglich, das IP-Routing auf dem Server manuell zu konfigurieren.

Stellen Sie eine SSH-Verbindung zu Ihrem Server her und verwenden Sie folgenden Befehl, um das Paket herunterzuladen und zu installieren.

```sh
apt-get install iproute2
```

Erstellen Sie anschließend eine neue IP-Route für das vRack. Hierzu empfehlen wir, eine neue Traffic-Regel hinzuzufügen, indem Sie die Datei wie folgt bearbeiten:

```sh
/etc/iproute2/rt_tables

# # #
# reserved values
# # #
255	local
254	main
253	default
0	unspec
# # #
local
# # #
#1	inr.ruhep
1 vrack
```

### Netzwerkkonfigurationsdatei bearbeiten

> [!primary]
>
> Im vorliegenden Beispiel befindet sich die Netzwerkkonfigurationsdatei in `/etc/network/interfaces`. Je nach verwendetem Betriebssystem kann sich die entsprechende Datei auch an einem anderen Speicherort befinden. Im Zweifelsfall lesen Sie die offizielle Dokumentation Ihrer Distribution.
>

Um den Vorgang abzuschließen, muss nun noch die Netzwerkkonfigurationsdatei bearbeitet werden, damit die neue Traffic-Regel umgesetzt und der vRack Traffic über die Netzwerk-Gateway-Adresse **46.105.135.110** geleitet wird.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Starten Sie jetzt den Server neu, um die Änderungen anzuwenden.


## Weiterführende Informationen

[Mehrere dedizierte Server im vRack konfigurieren](../mehrere-dedizierte-server-im-vrack-konfigurieren/){.external}

[Mehrere VLANs im vRack erstellen](../vrack-vlan-erstellen){.external}

[vRack zwischen Public Cloud und Dedicated Server einrichten](../vrack-zwischen-public-cloud-dedicated-server-einrichten/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.