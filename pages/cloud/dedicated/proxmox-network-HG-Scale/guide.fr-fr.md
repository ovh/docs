---
title: 'Configurer le réseaux sur ProxMox VE sur les gammes HighGrade & SCALE'
slug: proxmox-network-HG-Scale
excerpt: 'Découvrez comment configurer le réseaux sur ProxMox VE sur les gammes HighGrade & SCALE.'
section: 'Utilisation avancée'
order: 1
---

**Dernière mise à jour le 30/09/2021**

## Objectif

Sur les gammes HighGrade & SCALE, le fonctionnement des IP Failover en mode bridgé (via des MAC Virtuelles) n'est pas possible. L'objectif est de configurer les IP failover en mode routé ou via le vRack

**Découvrez comment configurer le réseau sous ProxMox VE.**


## Prérequis

- Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
- Disposer d'IP FailOver
- Ne pas mettre de MAC virtuelle sur les IP FO dans le manager OVH.

## Pour info

Sur ces gammes de serveurs, il y a 4 cartes réseaux. Les deux premieres pour le public, les deux dernieres pour le privé. Pour profiter de l'ensemble de la bande passante, des aggrégat doivent être crée.

## IP FailOver en mode routé sur la patte publique

### Schéma de la configuration cible

![schema route](images/scema_route2022.png){.thumbnail}

### Explications
Il faut:
- Créer un agrégat
- Créer un bridge
- autoriser le forwardind et ajouter les routes

### Configuration hyperviseur

Tout se passe dans le fichier /etc/network/interfaces

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback

# interface publique 1
auto ens33f0
iface ens33f0 inet manual

# interface publique 2
auto ens33f1
iface ens33f1 inet manual

# interface privée 1
auto ens35f0
iface ens35f0 inet manual

# interface privée 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
# Agrégat LACP sur les interfaces Publiques
# configuré en mode dhcp sur cet exemple
# Porte l'IP Publique du serveur
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
        bond-miimon 100
	bond-mode 802.3ad
        post-up echo 1 > /proc/sys/net/ipv4/conf/bond0/proxy_arp
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward

#Private

auto vmbr0
# Configuration du bridge avec une adresse privée et l'ajout de route pour y envoyer les IP FailOver
# A.B.C.D/X  => Subnet des IP FailOver affectées au serveur
iface vmbr0 inet static
	address 192.168.0.1
        netmask 255.255.255.255
	bridge-ports none
	bridge-stp off
	bridge-fd 0
        post-up ip route add A.B.C.D/X dev vmbr0
```

Relance des servcies réseaux ou reboot serveur.

### Exemple Configuration VM Cliente Debian

Contenu du fichier /etc/network/interfaces

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address IP_FO
    netmask 255.255.255.255
    gateway 192.168.0.1
```

## IP FailOver via le vRack

### Prérequis

* Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses.
* Préparer votre plage d'adresses IP privées choisies.
* Posséder un [serveur compatible vRack](https://www.ovh.com/fr/serveurs_dedies/){.external}.
* Activer un service [vRack](https://www.ovh.com/fr/solutions/vrack/){.external}.
* Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

### Schéma de la configuration cible

![schema vrack](images/scema_vrack2022.png){.thumbnail}

### Explications
Il faut:
- Créer un aggrégat
- Créer un bridge pluggé à l'aggrégat

### Configurer une adresse IP utilisable

Dans le cas du vRack, la première, l'avant-dernière et la dernière adresse d'un bloc d'IP donné sont toujours réservées respectivement à l'adresse réseau, la passerelle réseau et au *broadcast* du réseau. Cela signifie que la première adresse utilisable est la deuxième adresse du bloc, comme indiqué ci-dessous :

```sh
46.105.135.96   # Réservée : adresse réseau
46.105.135.97   # Première IP utilisable
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
46.105.135.109   # Dernière IP utilisable
46.105.135.110   # Réservée : passerelle réseau Reserved: Network gateway
46.105.135.111   # Réservée : broadcast réseau
```

Pour configurer la première adresse IP utilisable, vous devez éditer le fichier de configuration réseau comme indiqué ci-dessous. Dans cet exemple, utilisez un masque de sous-réseau de **255.255.255.240**.

> [!primary]
>
> Le masque de sous-réseau utilisé dans cet exemple est approprié pour notre bloc IP. Votre masque de sous-réseau peut différer en fonction de la taille de votre bloc. Lorsque vous achetez votre bloc d'IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser.
>

### Configuration hyperviseur

Tout se passe dans le fichier /etc/network/interfaces

Ici, ce qui compte c'est la configuration bond1 et vmbr1

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback

# interface publique 1
auto ens33f0
iface ens33f0 inet manual

# interface publique 2
auto ens33f1
iface ens33f1 inet manual

# interface privée 1
auto ens35f0
iface ens35f0 inet manual

# interface privée 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
        bond-miimon 100
	bond-mode 802.3ad
        post-up echo 1 > /proc/sys/net/ipv4/conf/bond0/proxy_arp
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward

auto bond1
# Agrégat LACP sur les interfaces Privées
# Pas d'IP dessus
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
        bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge pluggé sur l'agrégat bond1
# Pas besoin d'IP
iface vmbr1 inet static
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

```

Relance des servcies réseaux ou reboot serveur.

### Exemple Configuration VM Cliente Debian

Contenu du fichier /etc/network/interfaces

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```



Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>

