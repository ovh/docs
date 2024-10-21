---
title: 'IP-Block im vRack konfigurieren'
excerpt: 'So konfigurieren Sie einen öffentlichen IP-Adressblock im vRack'
updated: 2023-08-31
---

## Einleitung

Neben Private IP Addressing ist es mit dem [vRack](https://www.ovh.de/loesungen/vrack/){.external} auch möglich, mithilfe eines öffentlichen IP-Adressblocks den öffentlichen IP-Traffic über den vRack Port Ihres Servers zu routen.

**In dieser Anleitung erfahren Sie, wie Sie einen öffentlichen IP-Adressblock so konfigurieren, dass Sie ihn mit dem vRack verwenden können.**

## Voraussetzungen

- Sie haben einen öffentlichen IP-Adressblock mit mindestens vier Adressen in Ihrem Account reserviert.
- Sie haben den gewünschten privaten IP-Adressbereich vorbereitet.
- Sie verfügen über einen mit vRack kompatiblen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben einen [vRack](https://www.ovh.de/loesungen/vrack/){.external} Dienst aktiviert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## Beschreibung

> [!primary]
>
> In der vorliegenden Anleitung verwenden wir als Beispiel den IP-Block 46.105.135.96/28 sowie `eth1` als sekundäres Netzwerk, das dem vRack zugewiesen ist.
>
> Ebenfalls nur als Beispiel: Die Netzwerkkonfigurationsdatei, auf die wir uns beziehen, befindet sich unter `/etc/network/interfaces`. Je nach verwendetem Betriebssystem kann sich die entsprechende Datei an anderer Stelle befinden. Auch der Inhalt der Datei kann unterschiedlich sein. Bei Schwierigkeiten können Sie gerne die offizielle Dokumentation Ihrer Distribution zu Rate ziehen.

### IP-Block zum vRack hinzufügen

> [!warning]
>
> Wenn ein IP-Block zum vRack hinzugefügt wird, ist er nicht mehr an einen physischen Server gebunden.
>
> Mit dieser Konfiguration können IP-Adressen eines Blocks auf mehreren Servern konfiguriert werden, sofern sich alle Server im selben vRack befinden wie der IP-Block. Der IP-Block muss über mindestens 2 IP-Adressen oder mehr verfügen, damit dies möglich ist.
>

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Bare Metal Cloud`{.action} und klicken Sie auf `Network`{.action}. Öffnen Sie anschließend das Menü `vRack`{.action}.

Wählen Sie in der Liste Ihr vRack aus, um die Liste der verfügbaren Dienstleistungen anzuzeigen. Klicken Sie auf den IP-Block, den Sie zum vRack hinzufügen möchten, und klicken Sie auf den Button `Hinzufügen`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

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

Wir empfehlen Ihnen, zuerst “iproute2” herunterzuladen und zu installieren. Mit diesem Paket ist es möglich, das IP-Routing auf dem Server manuell zu konfigurieren.

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
# local
# # #
#1	inr.ruhep
1 vrack
```

### Netzwerkkonfigurationsdatei bearbeiten

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

[Mehrere dedizierte Server im vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external}

[Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack){.external}

[vRack zwischen Public Cloud und Dedicated Server einrichten](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
