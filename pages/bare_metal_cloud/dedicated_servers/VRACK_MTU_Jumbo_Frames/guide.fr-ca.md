---
title: "Configurer les trames Jumbo dans le vRack sur un serveur dédié"
excerpt: "Configurez les trames Jumbo (MTU 9000) dans votre vRack OVHcloud pour optimiser le débit réseau entre serveurs dédiés"
updated: 2020-08-17
---

## Objectif

Les trames Jumbo, ou *Jumbo frames*, sont des trames Ethernet dont la charge utile est supérieure à 1500 octets et qui peut aller jusqu'à 9000 octets. Leur utilisation permet de minimiser le temps de traitement du routage. Dans le cas du vRack, cela optimisera le trafic sur celui-ci.

**Découvrez comment configurer votre distribution Linux pour qu'elle utilise les trames Jumbo au sein du vRack.**

## Prérequis

- Posséder un [vRack](/links/network/vrack).
- Ouvrir un shell avec les droits root

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.

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

[Configurer le vRack sur vos serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Configurer un bloc Additional IP dans le vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)

Échangez avec notre [communauté d'utilisateurs](/links/community).
