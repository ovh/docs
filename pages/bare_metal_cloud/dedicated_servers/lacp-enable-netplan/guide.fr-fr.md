---
title: "Configurer l'agrégation LACP sur un serveur dédié (Debian/Ubuntu)"
excerpt: "Configurez l'agrégation de liens LACP sur un serveur dédié Debian 12 ou Ubuntu 24.04 avec Netplan pour la bande passante et la redondance"
updated: 2026-04-20
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

La technologie LACP (Link Aggregation Control Protocol) est conçue pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. Vous pouvez agréger vos cartes réseau et rendre vos liens réseau redondants. Cela signifie que si un lien tombe en panne, le trafic est automatiquement redirigé vers un autre lien disponible. La bande passante disponible est également doublée grâce à l'agrégation.

**Ce guide explique comment lier vos interfaces pour les utiliser pour l'agrégation de liens dans Debian 12 (*ou plus récent*) / Ubuntu 24.04 (configuration Netplan).**

> [!warning]
> Bien que les images Debian 12 (ou plus récentes) fournies par OVHcloud utilisent `Netplan` par défaut, il existe deux exceptions clés où `ifupdown` (/etc/network/interfaces) est utilisé à la place :
>
> - **Mode rescue** : Bien qu'il soit basé sur Debian 12, le mode rescue s'appuie sur l'utilitaire `ifupdown`.
> - **Images personnalisées** : Il se peut que les installations Debian effectuées à l'aide de votre propre image utilisent toujours `ifupdown` pour leur configuration réseau.
>
> Si vous souhaitez configurer l'agrégation de liens en mode rescue, ou sur un OS personnalisé s'appuyant sur `ifupdown`, veuillez vous référer à [ce guide](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9) à la place.
>

## Prérequis

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

> [!primary]
> Les valeurs (adresses MAC, adresses IP, etc.) indiquées dans les configurations et exemples ci-dessous le sont à titre d'exemples. Vous devez bien entendu remplacer ces valeurs par les vôtres.
>

### Récupération des adresses MAC

Cliquez sur l'onglet `Interfaces réseau`{.action} et prenez note des adresses MAC de chaque interface (publique/privée) qui s'affichent en bas du menu.

![Espace client OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Veuillez noter que l'adresse MAC de l'interface **publique principale** est celle qui reçoit les offres DHCP, à la fois dans le système d'exploitation du serveur et en mode rescue. Cette interface gère la connectivité publique dans la configuration par défaut.
>

Maintenant que vous savez quelles adresses MAC sont associées à chaque type (public/privé) d'interface, vous devez récupérer les noms des interfaces.

### Récupération des noms d'interfaces

> [!primary]
>
> Si vous perdez la connexion réseau à votre serveur, suivez les étapes intitulées « **Ouvrir un KVM** » de [ce guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Pour récupérer les noms des interfaces, lancez la commande suivante :

```bash
ip a
```

> [!primary]
>
> Cette commande va afficher de nombreuses interfaces. Si vous avez des difficultés à déterminer quelles sont vos interfaces physiques, l'adresse IP publique du serveur reste attachée par défaut à la première interface.
>

Voici un exemple de sortie :

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Une fois que vous avez déterminé les noms de vos interfaces, vous pouvez configurer l'agrégation d'interfaces dans le système d'exploitation.

### Configuration de l'agrégation d'interfaces

Sélectionnez l'onglet ci-dessous correspondant à la configuration de votre serveur :

- **Deux interfaces** : serveurs Advance avec deux cartes réseau physiques.
- **Quatre interfaces - Double LAG** : serveurs Scale et High Grade avec OLA en mode **Active - Double LAG** (agrégats public + privé). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.
- **Quatre interfaces - Fully Private** : serveurs Scale et High Grade avec OLA en mode **Active - Fully Private** (agrégat privé unique pour le vRack). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.

> [!tabs]
> Deux interfaces
>> Remplacez le contenu de `/etc/netplan/50-cloud-init.yaml` par ce qui suit :
>>
>> **IP fixe**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # Adresse MAC de l'interface publique principale du serveur
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # Adresse MAC de l'interface publique principale du serveur
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quatre interfaces - Double LAG
>> Cette configuration lie les interfaces publiques dans `bond0` (avec l'IP publique) et les interfaces privées dans `bond1` (pour le vRack).
>>
>> Remplacez le contenu de `/etc/netplan/50-cloud-init.yaml` par ce qui suit :
>>
>> **IP fixe**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Adresse MAC de l'interface publique principale du serveur
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Facultatif : configuration d'un agrégat privé
>>         bond1:
>>             # Adresse MAC de la première interface privée
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Adresse MAC de l'interface publique principale du serveur
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Facultatif : configuration d'un agrégat privé
>>         bond1:
>>             # Adresse MAC de la première interface privée
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quatre interfaces - Fully Private
>> Cette configuration agrège toutes les interfaces physiques dans un seul agrégat pour une utilisation vRack uniquement. Il n'y a pas de connectivité IP publique.
>>
>> > [!warning]
>> >
>> > Suite à la mise en œuvre d'OLA en mode Fully Private, l'IP publique n'est plus accessible. Assurez-vous de disposer d'un moyen d'accès alternatif (par exemple via un autre serveur dans le vRack, ou via KVM/IPMI) avant d'appliquer cette configuration.
>> >
>>
>> Remplacez le contenu de `/etc/netplan/50-cloud-init.yaml` par ce qui suit :
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Adresse MAC de l'interface privée principale du serveur
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > En mode Fully Private, l'agrégat utilise l'adresse MAC de l'interface **privée principale**. Pour attribuer une adresse IP à cet agrégat pour la communication vRack, ajoutez un bloc `addresses` sous `bond0` avec votre IP privée vRack.
>> >

### Application de la configuration

> [!primary]
> La commande `netplan try` ne peut pas être utilisée lors de la configuration des agrégats.

Appliquez la configuration à l'aide de la commande suivante :

```bash
sudo netplan apply
```

Un intervalle de quelques secondes peut être observé avant que les agrégats soient opérationnels.

## Aller plus loin

[Configuration de l'agrégation de liens OVHcloud dans l'espace client OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Échangez avec notre [communauté d'utilisateurs](/links/community).
