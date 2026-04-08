---
title: "Dedicated Server - Jumbo Frames im vRack konfigurieren"
excerpt: "Konfigurieren Sie Jumbo Frames (MTU 9000) in Ihrem OVHcloud vRack, um den Netzwerkdurchsatz zwischen Dedicated Servern zu optimieren."
updated: 2020-08-17
---

## Einleitung

*Jumbo-Frames* sind Ethernet-Frames mit einer Kapazität von über 1500 und bis zu 9000 Bytes. Ihr Einsatz ermöglicht eine schnellere Verarbeitung des Routings. Dies optimiert den Traffic im vRack.

**Sehen Sie hier, wie Sie Ihre Linux -Distribution konfigurieren können, damit sie im vRack Jumbo-Frames verwendet.**

## Voraussetzungen

- Sie besitzen ein [vRack](/links/network/vrack).
- Eine Shell mit Root-Rechten ausführen

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).

> [!primary]
>
> Die MTU-Größe muss auf allen Hosts eines Netzwerks übereinstimmen.  
>

## Praktische Anwendung

### Die Größe der MTU überprüfen

```sh
ip link show | grep mtu
```

### Eine neue Größe bestimmen und den Befehl testen

```sh
ip link set <interface name> mtu 9000
```

### Die Änderung als dauerhaft festlegen 

Bearbeiten Sie die Datei `/etc/network/interface`, indem Sie folgende Zeilen hinzufügen:

#### Für ein DHCP-verwaltetes Interface

```sh
Auto <interface name>

Iface <interface name> inet dhcp

  Pre-up /sbin/ip link set dev <interface name> up mtu 9000
```

#### Für ein Interface mit fester IP

```sh
Auto <interface name>

Iface <interface name> inet static
  mtu 9000
```

## Weiterführende Informationen

- [vRack auf Ihren Dedicated Servern konfigurieren](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

- [Dedicated Server - IP-Block in einem vRack konfigurieren](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
