---
title: Configurer un bloc d''IP dans le vRack
slug: ajouter-ou-enlever-un-bloc-ip-du-vrack
excerpt: Découvrez comment configurer un bloc d'adresses IP publiques dans le vRack
section: vRack
---

**Dernière mise à jour le 2018/08/24**

## Objectif

En plus de l'adressage IP privé, le [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external} vous permet de diriger le trafic IP public via le port vRack de votre serveur à l'aide d'un bloc d'adresses IP publiques.

**Ce guide vous explique comment configurer un bloc d'adresses IP publiques à utiliser avec le vRack.**


## Prérequis

* Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses.
* Préparer votre plage d'adresses IP privées choisies.
* Posséder un [serveur compatible vRack](https://www.ovh.com/ca/fr/serveurs_dedies/){.external}.
* Activer un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.
* Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

> [!primary]
>
> À titre d'exemple, nous utiliserons un bloc IP de 46.105.135.96/28 et `eth1` pour l'interface réseau secondaire, qui est dédiée au vRack.
>

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


```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Créer une nouvelle table de routage IP

Avant tout, il convient de télécharger et installer « iproute2 », un paquet qui permettra de configurer manuellement le routage IP sur le serveur.

Ouvrez ensuite une connexion SSH à votre serveur et utilisez la commande suivante pour télécharger et installer le paquet :

```sh
apt-get install iproute2
```

Ensuite, vous devez créer une nouvelle route IP pour le vRack. Pour cela, il convient d'ajouter une nouvelle règle de trafic en modifiant le fichier comme indiqué ci-dessous :

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

### Modifier le fichier de configuration réseau

> [!primary]
>
> À titre d’exemple, le fichier de configuration réseau auquel nous faisons référence se trouve dans `/etc/network/interfaces`. En fonction du système d'exploitation utilisé, le fichier équivalent peut être situé ailleurs. En cas de difficulté, n'hésitez pas à vous référer à la documentation officielle de votre distribution.
>

Pour finir, il reste à modifier le fichier de configuration réseau pour prendre en compte la nouvelle règle de trafic et acheminer le trafic vRack via l'adresse de passerelle réseau **46.105.135.110**.

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

Redémarrez le serveur pour appliquer les modifications effectuées.


## Aller plus loin

[Configurer plusieurs serveurs dédiés dans le vRack](https://docs.ovh.com/ca/fr/dedicated/configurer-plusieurs-serveurs-dedies-dans-le-vrack/){.external}

[Créer plusieurs réseaux locaux virtuels dans un vRack](https://docs.ovh.com/ca/fr/dedicated/creer-vlan-vrack/){.external}

[Configurer un vRack entre une instance Public Cloud et un serveur dédié](https://docs.ovh.com/ca/fr/dedicated/configurer-vrack-entre-pci-serveur-dedie/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.