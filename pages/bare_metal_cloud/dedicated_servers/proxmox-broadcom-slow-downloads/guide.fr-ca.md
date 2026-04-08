---
title: "Corriger les téléchargements lents de Proxmox VE sur un serveur dédié"
excerpt: "Résolvez les lenteurs de téléchargement dans les conteneurs et VM Proxmox VE sur les serveurs avec cartes réseau Broadcom BCM57502"
updated: 2025-01-16
---

## Objectif

Certains serveurs dédiés équipés de cartes réseau Broadcom BCM57502 peuvent subir des lenteurs importantes de téléchargement (une vitesse de l'ordre de 255 kb/s) depuis des machines virtuelles ou des conteneurs s’exécutant sur Proxmox VE (Virtual Environment).

**Découvrez comment résoudre les problèmes de téléchargements lents dans les conteneurs et les machines virtuelles s'exécutant sur Proxmox VE avec un contrôleur d'interface réseau Broadcom BCM57502 en désactivant le paramètre `generic-receive-offload`.**

## Prérequis

Le problème peut se produire sur les serveurs bare metal des gammes ADVANCE exécutant Proxmox VE (Virtual Environment).
Seuls les serveurs équipés de cartes réseau Broadcom BCM57502 sont concernés.

## En pratique

### Étape 1 - Identifier votre contrôleur d'interface réseau

Connectez-vous en SSH au serveur et exécutez la commande suivante qui liste tous les périphériques PCI de la classe 200 (contrôleurs Ethernet) :

```sh
lspci -nnd ::200
```

Si la sortie affiche des périphériques avec l'ID PCI `14e4:1752`, votre serveur est affecté. Exemple de sortie :

```text
02:00.0 Ethernet controller [0200]: Broadcom Inc. and subsidiaries BCM57502 NetXtreme-E 10Gb/25Gb/40Gb/50Gb Ethernet [14e4:1752] (rev 12)
02:00.1 Ethernet controller [0200]: Broadcom Inc. and subsidiaries BCM57502 NetXtreme-E 10Gb/25Gb/40Gb/50Gb Ethernet [14e4:1752] (rev 12)
```

### Étape 2 - Obtenir les noms des interfaces réseau

Listez les interfaces réseau avec la commande suivante :

```sh
ip -brief link show
```

Exemple de sortie :

```text
lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>
enp2s0f0np0      UP             9c:6b:00:12:34:56 <BROADCAST,MULTICAST,UP,LOWER_UP>
enp2s0f1np1      DOWN           9c:6b:00:12:34:57 <BROADCAST,MULTICAST>
vmbr0            UP             9c:6b:00:12:34:56 <BROADCAST,MULTICAST,UP,LOWER_UP>
```

Pour trouver les interfaces qui correspondent aux contrôleurs Broadcom indiqués par `lspci`, vous pouvez exécuter cette commande :

```sh
ethtool -i enp2s0f0np0
```

Exemple de sortie :

```txt
driver: bnxt_en
version: 6.8.12-5-pve
firmware-version: 229.0.121.0/pkg N/A
expansion-rom-version:
bus-info: 0000:02:00.0
supports-statistics: yes
supports-test: yes
supports-eeprom-access: yes
supports-register-dump: yes
supports-priv-flags: no
```

La ligne `bus-info` correspond à l'adresse PCI (`02:00.0` indiqué par `lspci`).

### Étape 3 - Désactivation du paramètre `generic-receive-offload`

Vous pouvez maintenant vérifier l'état du paramètre `generic-receive-offload` avec la commande suivante :

```sh
ethtool --show-offload enp2s0f0np0 | grep generic-receive-offload:
```

Exemple de sortie :

```text
generic-receive-offload: on
```

Le problème des téléchargements lents peut être résolu en désactivant `generic-receive-offload` avec la commande suivante :

```sh
ethtool --offload enp2s0f0np0 generic-receive-offload off
```

Exemple de sortie :

```text
Actual changes:
rx-gro: off
rx-gro-hw: off [not requested]
```

### Étape 4 - Conserver la modification après redémarrage

Afin de conserver ce changement après le prochain redémarrage, la commande `ethtool` peut être ajoutée aux interfaces appropriées dans `/etc/network/interfaces` en tant que commande `up`.

Par exemple :

```text
auto lo
iface lo inet loopback

iface enp2s0f0np0 inet manual
	up ethtool --offload $IFACE generic-receive-offload off

auto vmbr0
iface vmbr0 inet static
	address <IPV4>/32
	gateway 100.64.0.1
	bridge-ports enp2s0f0np0
	bridge-stp off
	bridge-fd 0
	hwaddress 9C:6B:00:12:34:56

iface vmbr0 inet6 static
	address <IPV6>/56
	gateway fe80::1
```

> [!primary]
> Le terme `$IFACE` sera remplacé par le nom de l'interface à l'exécution. Il n'est pas nécessaire de le remplacer par le nom de l'interface en question.
>
> L'application du paramètre `generic-receive-offload` sur le bridge `vmbr0` n'a aucun effet, la modification doit être appliquée aux interfaces physiques.

Vous pouvez maintenant redémarrer le service réseau pour appliquer la configuration :

```sh
systemctl restart networking.service
```

## Aller plus loin

[Configurer le réseau sur Proxmox VE sur les gammes High Grade, Scale & Advance](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale)

[Mise à niveau du matériel sur un serveur dédié High Grade ou Scale](/pages/bare_metal_cloud/dedicated_servers/hardware-upgrade-HG-Scale)

Échangez avec notre [communauté d'utilisateurs](/links/community).
