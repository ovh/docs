---
title: 'Configuration des trames Jumbo dans le vRack'
slug: 'network-jumbo'
excerpt: 'Découvrez comment configurer les Jumbo frames dans le vRack'
section: 'vRack'
---

**Derniére mise à jour le 17/08/2020**

## Objectif

Les trames Jumbo, ou *Jumbo frames*, sont des trames Ethernet dont la charge utile est supérieure à 1500 octets et qui peut aller jusqu'à 9000 octets. Leur utilisation permet de minimiser le temps de traitement du routage. Dans le cas du vRack, cela optimisera le trafic sur celui-ci.

**Découvrez comment configurer votre distribution Linux pour qu'elle utilise les trames Jumbo au sein du vRack.**

## Prérequis

- Posséder un [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.
- Ouvrir un shell avec les droits root

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.

> [!primary]
>
> La taille MTU doit être identique sur tous les hôtes d'un même sous-réseau. 
>

## En pratique

### Vérifier la MTU

```sh
ip link show | grep mtu
```

### Définir une nouvelle taille et tester la commande

```sh
ip link set <nom de l’interface> mtu 9000
```

### Rendre le changement permanent 

Editez le fichier `/etc/network/interface` et ajoutez-y les lignes suivantes :

#### Pour une interface gérée par DHCP

```sh
Auto <nom de l’interface>

Iface <nom de l’interface> inet dhcp

  Pre-up /sbin/ip link set dev <nom de l’interface> up mtu 9000
```

#### Pour une interface en IP fixe

```sh
Auto <nom de l’interface>

Iface <nom de l’interface> inet static
  mtu 9000
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
