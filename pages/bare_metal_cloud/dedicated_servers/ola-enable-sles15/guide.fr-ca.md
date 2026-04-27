---
title: "Configurer OVHcloud Link Aggregation sur un serveur dédié (SLES 15)"
excerpt: "Activez OVHcloud Link Aggregation sur votre serveur dédié SLES 15"
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

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible. La bande passante disponible est également doublée grâce à l'agrégation.
L'agrégation est basée sur la technologie IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Ce guide explique comment lier vos interfaces pour les utiliser pour OLA dans SLES 15.**

## Prérequis

- [Avoir configuré votre NIC pour la fonctionnalité OVHcloud Link Aggregation depuis l’espace client OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

Étant donné que nous avons une configuration privée-privée pour nos NIC sur OLA, il est impossible de se connecter en SSH au serveur. Par conséquent, vous devrez utiliser l’outil IPMI pour accéder au serveur.

Cliquez ensuite sur l'onglet `IPMI`{.action} (1) puis sur le bouton `Depuis un applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Un logiciel JNLP sera téléchargé. Lancez le logiciel pour accéder à l’IPMI. Connectez-vous en utilisant les informations d’identification associées au serveur.

Par défaut, en utilisant un modèle OVHcloud, les NIC seront nommés *eth0* et *eth1*. Si vous n’utilisez pas un modèle OVHcloud, vous pouvez retrouver les noms de vos interfaces en utilisant la commande suivante :

```bash
ip a
```

> [!primary]
> Les valeurs (adresses MAC, adresses IP, etc.) indiquées dans les configurations et exemples ci-dessous le sont à titre d'exemples. Vous devez bien entendu remplacer ces valeurs par les vôtres.
>

### Récupération des adresses MAC

Cliquez sur l'onglet `Interfaces réseau`{.action} et prenez note des adresses MAC de chaque interface (publique/privée) qui s'affichent en bas du menu.

![Espace client OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Veuillez noter que l'adresse MAC de l'interface **publique principale** est celle qui reçoit les offres DHCP, à la fois dans le système d'exploitation du serveur et en mode rescue. Cette interface gère la connectivité publique dans la configuration par défaut.
>
> Quant à l'adresse MAC de l'interface **privée principale**, il s'agit de celle dont la valeur est la plus faible. Dans l'image exemple ci-dessus, il s'agit de l'adresse `a1:b2:c3:d4:e5:d6`.
>

Maintenant que vous savez quelles adresses MAC sont associées à chaque type (public/privé) d'interface, vous devez récupérer les noms des interfaces.

### Récupération des noms d'interfaces

> [!primary]
>
> Si vous perdez la connexion réseau à votre serveur, suivez les étapes intitulées « **Ouvrir un KVM** » de [ce guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Pour récupérer les noms des interfaces, lancez la commande suivante :

```bash
ip a
```

> [!primary]
>
> Cette commande va afficher de nombreuses interfaces. Si vous avez des difficultés à déterminer quelles sont vos interfaces physiques, l'adresse IP publique du serveur reste attachée par défaut à la première interface.
>

Voici un exemple de sortie :

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

Sélectionnez l'onglet ci-dessous correspondant à la configuration de votre serveur :

- **Deux interfaces** : serveurs Advance avec deux cartes réseau physiques.
- **Quatre interfaces - Double LAG** : serveurs Scale et High Grade avec OLA en mode **Active - Double LAG** (agrégats public + privé). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.
- **Quatre interfaces - Fully Private** : serveurs Scale et High Grade avec OLA en mode **Active - Fully Private** (agrégat privé unique pour le vRack). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.

> [!tabs]
> Deux interfaces
>> Créez le fichier de configuration de l'agrégat `/etc/sysconfig/network/ifcfg-bond0` :
>>
>> **IP fixe**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configurez ensuite chaque interface physique. Éditez `/etc/sysconfig/network/ifcfg-ens22f0np0` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens22f1np1` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Les fichiers de configuration des interfaces physiques restent les mêmes que ci-dessus.
>>
>> ///
>>
> Quatre interfaces - Double LAG
>> Cette configuration lie les interfaces publiques dans `bond0` (avec l'IP publique) et les interfaces privées dans `bond1` (pour le vRack).
>>
>> Créez le fichier de configuration de l'agrégat public `/etc/sysconfig/network/ifcfg-bond0` :
>>
>> **IP fixe**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Créez le fichier de configuration de l'agrégat privé `/etc/sysconfig/network/ifcfg-bond1` :
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens33f0np0'
>> BONDING_SLAVE_1='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configurez ensuite chaque interface physique. Éditez `/etc/sysconfig/network/ifcfg-ens22f0np0` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens22f1np1` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens33f0np0` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens33f1np1` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> /// details | DHCP (bond0 uniquement)
>>
>> Pour l'agrégat public, utilisez DHCP :
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> L'agrégat privé (`ifcfg-bond1`) et tous les fichiers de configuration des interfaces physiques restent les mêmes que ci-dessus.
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
>> Créez le fichier de configuration de l'agrégat `/etc/sysconfig/network/ifcfg-bond0` :
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_SLAVE_2='ens33f0np0'
>> BONDING_SLAVE_3='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configurez ensuite chaque interface physique. Éditez `/etc/sysconfig/network/ifcfg-ens22f0np0` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens22f1np1` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens33f0np0` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Créez `/etc/sysconfig/network/ifcfg-ens33f1np1` :
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> > [!primary]
>> >
>> > En mode Fully Private, l'agrégat utilise l'adresse MAC de l'interface **privée principale**. Le champ `IPADDR` doit être défini avec votre IP privée vRack.
>> >

### Application de la configuration

Appliquez la configuration en rechargeant toutes les interfaces avec wicked :

```bash
wicked ifreload all
```

Cette opération peut prendre plusieurs secondes, car l'interface d'agrégat est en cours de construction. Pour vérifier que l'agrégat fonctionne, pingez un autre serveur sur le même vRack. Si cela fonctionne, la configuration est terminée. Si ce n'est pas le cas, vérifiez vos configurations ou essayez de redémarrer le serveur.

Vous pouvez également vérifier les paramètres de l'agrégat à l'aide de la commande suivante :

```bash
cat /proc/net/bonding/bond0
```

## Aller plus loin

[Configuration de l'agrégation de liens OVHcloud dans l'espace client OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Comment configurer l'agrégation de liens avec LACP dans Debian 12 ou Ubuntu 24.04 (Netplan)](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 à 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Échangez avec notre [communauté d'utilisateurs](/links/community).
