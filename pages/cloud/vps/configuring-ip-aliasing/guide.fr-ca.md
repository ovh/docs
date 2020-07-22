---
title: 'Configurer un IP en alias'
slug: network-ipaliasing-vps
excerpt: 'Ce guide explique comment ajouter des IPs Failover a votre configuration'
section: 'Network Management'
---

**Dernière mise à jour 2019/03/13**

## Objectif

L'IP en Alias est une configuration réseau spéciale pour vos serveurs OVHcloud, qui vous permet d'associer plusieurs adresses IP à une seule interface réseau.

**Ce guide explique comment ajouter des IPs Failover à votre configuration VPS.**

## Prérequis

* un [serveur virtuel privé](https://www.ovhcloud.com/fr-ca/vps/){.external}
* une [adresse IP failover](https://www.ovh.com/ca/fr/serveurs-dedies/ip_failover.xml){.external} ou un bloque d'IP failover
* un accès d'administrateur (root) au serveur via SSH

## En pratique

### Debian 9

#### Étape 1: Désactiver la configuration automatique du réseau

Premièrement, ouvrir le fichier ci-dessous:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```
Ensuite, editer le fichier avec la configuraiton ci-dessous. Ceci empêchera les modifications d'être appliqué automatiquement a votre configuration réseau.

```sh
network: {config: disabled}
```

### Étape 2: Editer le fichier de configuration réseau.

Ensuite, ouvrir le fichier de configuration réseau pour l'éditer avec la commande suivante:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Éditer le fichier avec la configuration suivante:

> [!primary]
>
Noter que les noms des interfaces réseau dans notre exemple peuvent différer des votres. S'il vous plaît, remplacez-les par vos interfaces.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Chaque adresse IP failover aura besoin de sa propre ligne dans le fichier. Le fichier de configuration pour les adresses IP failover devrait se nommer `50-cloud-init.yaml`.

#### Étape 1: Créer un fichier de configuration.

Se connecter au serveur via SSH et exécuter la commande suivante:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Ensuite, éditer le fichier avec le contenu ci-dessous:

```sh
network:
    version: 2
    ethernets:
        your_network_interface:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: your_network_interface
            addresses:
            - your_failover_ip/32
```
Finalement, enregistrer et fermer le fichier.

Répéter cette procédure pour chaque adresse IP failover.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur https://community.ovh.com.
