---
title: Configurer un bloc IPv6 dans un vRack
excerpt: "Ce guide vous montrera comment configurer un bloc d'adresses IPv6 publiques à utiliser dans un vRack"
updated: 2025-06-04
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

Le réseau vRack est un réseau privé mondial qui relie différents produits OVHcloud et permet la création de solutions réseau sophistiquées. En plus de faciliter les connexions privées, il prend également en charge le routage des adresses IP publiques.

**Ce guide se concentre sur la configuration des blocs d’adresses Additional IPv6 au sein d’un réseau vRack.**

> [!primary]
>
> Le vRack prend en charge le routage public IPv4 et IPv6 avec des blocs d’adresses Additional IP. Retrouvez les instructions sur la configuration de blocs IPv4 dans ce guide: [Configurer un bloc IP dans le vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> Cet article détaille la configuration d'adresses Additional IP sur un réseau vRack. Si vous cherchez des instructions sur la configuration d'adresses Additional IP avec une adresse IP principale (sur l'interface réseau publique), consultez les articles suivants :
>
> - IPv4:
>   - [Configurer une adresse IP en alias sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>   - [Configurer une adresse IP en alias sur un serveur VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>   - [Configurer IPv6 sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>   - [Configurer IPv6 sur un serveur VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>   - [Configurer IPv6 sur une instance Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Introduction

L’IPv6 révolutionne la mise en réseau au sein du vRack d’OVHcloud, en offrant une solution aux limites de l’IPv4, ainsi que des fonctionnalités adaptées à l’Internet moderne. Son déploiement est une réponse directe au besoin d'architectures Internet plus étendues, plus sécurisées et plus sophistiquées. Voici les principaux avantages de l’intégration d’IPv6 au vRack :

- **Flexibilité pour les réseaux avancés** : l’IPv6 augmente considérablement l’espace d’adressage, offrant la flexibilité nécessaire pour faire évoluer l’infrastructure, gérer les scénarios de basculement et prendre en charge des solutions plus importantes. Cela permet aux réseaux de se développer et de s’adapter sans les contraintes d'addressage de l’IPv4.

- **Routage hiérarchique et segmentation** : IPv6 permet un routage hiérarchique efficace et une segmentation de l’infrastructure logique. Cela améliore la gestion et la sécurité du réseau, idéal pour la revente de machines virtuelles avec des sous-réseaux dédiés ou encore la segmentation de l'infrastructure réseau.

- **Faible latence** : La connectivité IPv6 native de bout en bout peut faciliter la mise en place de services sensibles à la latence, comme le streaming multimédia, car de nombreux réseaux de fournisseurs récents sont construits en IPv6 native. Dans de tels réseaux, l’utilisation de services IPv4 crée une latence (et des coûts) supplémentaires.

En tirant parti de l’IPv6 au sein du vRack, les utilisateurs d’OVHcloud peuvent profiter d’un environnement réseau plus sécurisé, efficace et évolutif, prêt à répondre aux exigences des utilisations modernes d’Internet.

## Prérequis

- Un service [vRack](/links/network/vrack) actif sur votre compte
- Un [serveur compatible vRack](/links/network/vrack) connecté à votre réseau vRack
- Un accès à [l'espace client OVHcloud](/links/manager)

> [!warning]
> Cette fonctionnalité peut être limitée ou indisponible sur les serveurs de [la gamme **Eco**](/links/bare-metal/eco-about).
>
> Merci de visiter notre [comparatif des serveurs Eco](/links/bare-metal/eco-compare) pour obtenir plus d'informations.

## En pratique

### Obtention d’un nouveau bloc Additional IPv6

Lors de la demande d'un nouveau bloc Additional IPv6, il est important de noter que l'allocation de celui-ci est régionale. Cela signifie que le bloc IPv6 que vous recevez sera lié à une région spécifique, définissant où le trafic public entre dans votre réseau vRack (à savoir, l'emplacement de la passerelle).

/// details | Demander un nouveau bloc Additional IPv6

Vous pouvez commander votre nouveau bloc IPv6 supplémentaire [ici](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip).

![page de configuration](images/500.png){.thumbnail}

Ensuite, suivez les instructions étape par étape.

Votre Additional IPv6 sera alors disponible sur la page de configuration de votre vRack.

///

### Configurer l’IPv6 dans un vRack (mode simple)

Dans cette section, nous présenterons la configuration IPv6 de base de vos hôtes connectés au vRack.

![Configurer une IPv6 dans un vRack](images/20240418-03.png){.thumbnail}

L'exemple ci-dessus montre deux hôtes avec leurs interfaces côté vRack configurées avec des adresses publiques IPv6. Un hôte possède une configuration manuelle, tandis qu’un autre dispose d'une adresse IP attribuée automatiquement en SLAAC. Toutes les adresses IP appartiennent au premier sous-réseau /64 d'un bloc /56 d'Additional IPv6 publiques donné. Les deux utilisent l'interface vRack pour la connectivité IPv6 publique.

La passerelle par défaut pour le premier sous-réseau /64 (celui qui est bridgé) est la première adresse du bloc /56. Dans cet exemple, la passerelle est `2001:41d0:abcd:ef00::1`. Celle-ci est distribuée via SLAAC, mais doit être configurée manuellement (en tant que route par défaut) si le SLAAC est désactivé (voir la section **Configuration IP statique** ci-dessous).

/// details | Via l'espace client OVHcloud

- Cliquez sur `Network`{.action} dans le menu situé à gauche de l'écran.
- Cliquez sur `réseau Privé vRack`{.action}.
- Sélectionnez le vRack concerné.

![vrack management](images/700.png){.thumbnail}

Sur la partie gauche, les options possibles (services éligibles à configurer) sont listées.

Sur la partie droite, vous pouvez voir ce qui est déjà configuré avec votre vRack.

Sélectionnez votre nouvelle Additional IPv6 et ajoutez-la à votre vRack.

![vrack selection](images/701.png){.thumbnail}

Vous avez maintenant votre nouvelle Additional IPv6 ajoutée à votre vRack.

### Configuration IP statique

Une fois que le bloc Additional IPv6 /56 est attribué à un réseau vRack, le premier sous-réseau /64 est bridgé avec lui.

Cela signifie que vous pouvez facilement utiliser de telles IP sur vos hôtes avec une configuration IP statique sur les interfaces vRack (voir la section suivante pour un exemple de configuration côté hôte).

### Configuration IP automatique (SLAAC)

Pour simplifier l'adressage IP à l'intérieur de votre réseau, vous pouvez utiliser SLAAC. Il peut être activé uniquement par sous-réseau bridgé, et peut aussi être activé pour le premier sous-réseau /64 de votre bloc (celui-ci est toujours bridgé) à tout moment à l'aide de ce bouton curseur :

![enabling SLAAC](images/702.png){.thumbnail}

N'oubliez pas de configurer SLAAC sur votre machine hôte.

///


/// details | Via l'APIv6 (méthode alternative)

Lorsque vous demandez une IPv6 supplémentaire, celle-ci est automatiquement assignée à votre vRack.

Si vous avez supprimé cette nouvelle Additional IPv6 de votre vRack, vous pouvez la réattribuer en utilisant cette méthode POST :

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

Comme dans l'exemple ci-dessous:

![api post add block](images/post-ipv6.png){.thumbnail}

Utilisez l'appel suivant pour vérifier que l'IPv6 a été attribuée :

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

Comme dans l'exemple ci-dessous :

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Maintenant, nous voyons notre bloc configuré avec un vRack. L’étape suivante consiste à configurer le ou les hôtes virtuels.

### Configuration IP Statique

Une fois que le bloc Additional IPv6 /56 est attribué à un réseau vRack, le premier sous-réseau /64 est bridgé avec lui. Cela signifie que vous pouvez facilement utiliser de telles IP sur vos hôtes.

Vérifions quels sont les sous-réseaux bridgés:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

Comme dans l'exemple ci-dessous :

![GET subrange bridged into your vrack](images/20240418-05.png){.thumbnail}

Pour obtenir plus de détails, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Comme dans l'exemple ci-dessous :

![GET subrange bridged into your vrack](images/20240418-06.png){.thumbnail}

Notez que la configuration d'IP automatique (SLAAC) est désactivée par défaut.

### Configuration IP automatique (SLAAC)

Pour simplifier l'adressage IP à l'intérieur de votre réseau, vous pouvez utiliser SLAAC. Il peut être activé uniquement par sous-réseau bridgé et peut être activé avec cette méthode PUT :

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Comme dans l'exemple ci-dessous :

![API call POST enable SLAAC](images/20240418-07.png){.thumbnail}

N'oubliez pas de configurer SLAAC sur votre machine hôte.

///

#### Commandes sur l'hôte

/// details | Configuration IP statique

Dans une configuration de base, vous pouvez vouloir configurer une adresse IP et un routage manuellement. Il s'agit également de la méthode recommandée lorsque votre machine est configurée comme un routeur (voir la section [configurer le sous-réseau routé](#routedmode)) et que le mode ipv6.forwarding est activé.

Tout d'abord, ajoutons une adresse IP sur l'interface vRack (dans notre exemple, "eth1") :

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

(Notez que la première adresse IP d'un bloc, ici `2001:41d0:abcd:ef00::1/64`, est l'adresse de la passerelle et ne doit pas être utilisée pour l'adressage des hôtes).

Si vous souhaitez utiliser l'interface vRack comme interface principale pour le trafic IPv6, la route par défaut peut potentiellement être configurée de la manière suivante :

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Enfin, démarrez l'interface (et vérifiez l'IP configurée dessus) :

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Configuration IP automatique (SLAAC)

Pour utiliser la configuration automatique, assurez-vous d'avoir configuré votre interface comme suit :

Tout d'abord, autorisons notre hôte à accepter les publications de routage (pour la configuration automatique) sur l'interface vRack (dans notre exemple "eth1") :

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

Il est important de noter que cette configuration ne sera pas fonctionnelle si le mode ipv6.forwarding est activé sur votre système. Dans ce cas, veuillez vous référer à la <a href="#host-side-configuration">[Configuration IP automatique pour un sous-réseau routé](#host-side)


Puis, démarrez l'interface :

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

Après une courte durée (le temps de la propagation de la configuration), une adresse spécifique IPv6 (avec les flags *global* et *dynamic*) devrait apparaître sur l'interface.

///

#### Vérification de l'installation

/// details | Local

Le test le plus simple est de lancer un ping vers une adresse IP locale depuis un hôte :

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Distant

Ensuite, vérifions la connectivité depuis une adresse distante :

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Configurer une IPv6 dans un vRack pour le mode routé <a name="routedmode"></a>

Dans cette section, nous présenterons une configuration IPv6 plus avancée, où vos hôtes connectés au vRack agissent comme des routeurs pour les machines virtuelles hébergées. Ces VMs disposent de sous-réseaux délégués provenant du bloc IPv6 principal (présenté avec une couleur orange dans le schéma ci-dessous).

![Configuring an IPv6 in a vRack for routed-mode](images/routed-mode-20240513.png){.thumbnail}

Le chemin emprunté par le trafic est le suivant : le trafic entrant vers une VM donnée (avec le sous-réseau spécifié) est routé via le vRack du client, d'abord vers un hôte spécifié (avec une adresse de prochain saut), puis en utilisant un lien local (ou vSwitch - lien noir fd00::/64 sur le diagramme) vers la machine virtuelle particulière.
Le trafic revenant d'une telle VM doit utiliser la route par défaut via la première partie du lien local (en noir sur le diagramme, fd00::1), puis la route (éventuellement par défaut) d'un hôte vers sa passerelle.

Pour la définition de sous-réseau routé, toute taille de préfixe peut être utilisée entre /57 et /64.

La passerelle par défaut de l'hôte est la première adresse du bloc /56, qui est dans cet exemple: `2001:41d0:abcd:ef00::1`. Les passerelles par défaut utilisées par les VMs sont les adresses configurées de l'hôte (ici fd00::1).

#### Définir un sous-réseau routé

/// details | Espace client OVHcloud

Après avoir ajouté Additional IP à votre vRack, vous pouvez gérer le sous-réseau routé en cliquant sur le bouton `Ajouter un sous-réseau`{.action} .

![vrack select](images/600.png){.thumbnail}

Pour créer un sous-réseau routé, nous devons d'abord définir :

- **sous-réseau en notation CIDR** (taille comprise entre /57 et /64)
- **adresse de prochain saut** (adresse IPv6 de l'hôte)

Veuillez noter qu'un sous-réseau donné ne peut pas chevaucher un autre sous-réseau défini, et que l'adresse du tronçon suivant doit appartenir à la première partie (sous-réseau /64 bridgé) de votre préfixe Additional IPv6.

![continue](images/800.png){.thumbnail}

Le sous-réseau routé `2001:41d0:abcd::ef10::/60` est accessible via le saut suivant `2001:41d0:abcd::ef00::2`.

![continue](images/801.png){.thumbnail}

///

/// details | Commandes APIv6

Pour créer un sous-réseau routé, nous devons d'abord définir :

- **sous-réseau en notation CIDR** (taille comprise entre /57 et /64)
- **adresse de prochain saut** (donc adresse IPv6 de l'hôte)

Veuillez noter qu'un sous-réseau donné ne peut pas chevaucher un autre sous-réseau défini, et que l'adresse du tronçon suivant doit appartenir à la première partie (sous-réseau /64 bridgé) de votre préfixe Additional IPv6.

L'exemple ci-dessous montre comment définir un tel sous-réseau :

![continue](images/20240418-02.png){.thumbnail}

Nous avons ici défini le sous-réseau routé `2001:41d0:abcd:ef10::/60`, qui sera délégué à la VM hébergée à l'adresse `2001:41d0:abcd:ef00::2`.

///

#### Configuration de l'hôte <a name="host-side"></a>

/// details | Configuration IP statique d'un hôte (recommandé)

Lorsque vous hébergez des VMs, nous vous recommandons fortement l'utilisation d'une configuration statique sur votre hôte.

Configurez une adresse IPv6, démarrez l'interface, puis (facultatif) ajoutez la route par défaut sur l'interface vRack:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Configuration IP automatique (SLAAC) pour un hôte

Dans certains cas, vous pouvez vouloir configurer vos interfaces avec SLAAC et les redirections IP ensemble.

Attention, ceci présente des risques supplémentaires (comme la perte d'accès non seulement à l'hôte mais aussi à toutes les VM) et n'est pas recommandé.

Vérification de l'activation du transfert IPv6 :

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Configuration des publications de routeur à accepter (sur l'interface vRack eth1 dans notre exemple) :

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Configuration du sous-réseau routé sur un hôte et à l'intérieur d'une machine virtuelle

Pour nous assurer que notre hôte sait gérer les paquets adressés au nouveau sous-réseau routé (qui sera sur une VM), nous devons ajouter une route spécifique qui lui est liée.

Dans notre exemple, il s'agit du lien vEth avec l'adresse fd00::2/64, à l'intérieur d'une VM que nous utiliserons pour le routage.

Attention, celle-ci est spécifique à l'hyperviseur installé (il peut s'agir de vSwitch ou d'interfaces vEth). Reportez-vous au guide spécifique de mise en réseau de l'hyperviseur pour cette configuration.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Configuration d'un sous-réseau routé dans une VM

Encore une fois, veuillez noter que le lien utilisé entre l'hôte et les VMs est spécifique à l'hyperviseur installé (il peut s'agir de vSwitch ou d'interfaces vEth). Merci de vous référer aux guides de configuration réseau de votre hyperviseur pour cette configuraton.

Ajouter le bloc d'IP routées à l'intérieur d'une VM, pour s'assurer qu'elle peut accepter des paquets :

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Ajouter la route par défaut sur une VM pour s'assurer que le trafic peut en sortir :

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Vérification de la configuration

/// details | Locale, sur un hôte

Effectuez un ping de l'hôte vers le conteneur (à l'aide d'un lien local) :

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Effectuez un ping de l'hôte vers le conteneur (à l'aide du sous-réseau routé) :

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Vérifiez la route vers notre sous-réseau /60 sur un hôte :

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Locale, sur une VM

Tout d'abord, vérifiez la table de routage :

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Effectuez un ping vers l'interface locale de liaison à l'hôte :

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Effectuez un ping vers l'interface globale de l'hôte :

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Enfin, effectuez un ping vers une adresse IPv6 externe depuis une VM :

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Ou, en utilisant un nom de domaine :

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | Depuis un hôte distant

Vérifions la connectivité à notre VM depuis l'extérieur du réseau OVHcloud :

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

Et lancez un traceroute depuis un hôte distant (sur Internet) :

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

Dans cet exemple :

- hop 10 - Adresse IP de l'hôte
- hop 11 - Adresse IP de la VM

///

## Emplacements multi-régions vs. vRack global

La technologie vRack d’OVHcloud permet aux entreprises de connecter des serveurs à différents emplacements, comme s’ils étaient situés dans le même datacenter.
D’autre part, les services comme Additional IPv6 sont régionaux, ce qui signifie que leur fonctionnement est lié à un emplacement particulier.

Ci-dessous, une architecture est présentée à des fins d'apprentissage avec deux régions différentes, et des blocs Additional IPv6 différents annoncés depuis chacune des deux régions. De plus, il y a un hôte configuré avec des adresses IP des deux réseaux ainsi qu'un exemple de route sous-optimale - un hôte dans une région possédant une adresse IPv6 annoncée dans une autre région :

![image](images/20240418-08.png)

Veuillez noter que dans de telles configurations (avec des Additional IPv6 provenant de plus d'une région), le SLAAC **doit être désactivé dans l'ensemble du vRack** (car cela peut entraîner des résultats imprévisibles et une perte de connectivité aléatoire).

### Avantages

- **Connectivité améliorée :** En tirant parti d'un réseau vRack et de blocs IP publics routés à plusieurs endroits, les entreprises peuvent bénéficier d'une communication transparente dans le monde entier, quels que soient les emplacements physiques des serveurs backend.
- **Migrer vers le cloud :** La technologie vRack peut grandement faciliter les premières étapes vers une stratégie organisationnelle de « migration vers le cloud », en débloquant certaines applications existantes qui nécessitent encore une communication réseau locale.

### Risques et considérations

- **Pas de prise en charge SLAAC dans les configurations multi-emplacements :** Lorsqu'il y a plus d'un emplacement impliqué dans le routage du trafic IP public (IPv4 et IPv6) dans le même vRack, la configuration automatique d'adresses sans état (SLAAC) **ne doit pas être utilisée**. Prenons l'exemple d'hôtes existants utilisant des adresses IPv4. Ces hôtes sont automatiquement reconfigurés par SLAAC avec une passerelle IPv6 configurée à partir d'une autre région. Associée à la priorisation de l’IPv6 sur l’IPv4 par certains systèmes d’exploitation, cette situation peut conduire à un routage sous-optimal, voire à une perte totale de connectivité pour ces hôtes.

## Limites Connues

Comprendre les contraintes liées à l'utilisation d'**Additional IPv6** dans l'environnement **vRack** est essentiel pour une planification efficace du réseau. Voici les principales limites à prendre en compte :

- **Additional IPv6 est fourni uniquement avec vRack** : Veuillez noter que les adresses Additional IPv6 ne peuvent être configurées qu’avec des backends connectés au vRack.
- **Limites du SLAAC dans les configurations multi-emplacements** : La configuration automatique des adresses sans état (SLAAC) n'est pas prise en charge lorsqu'il y a du trafic IP public (IPv6 et IPv4) routé dans le vRack dans plusieurs régions.
- **Jusqu'à 128 hôtes à l'intérieur du sous-réseau ponté** : Vous pouvez utiliser jusqu'à 128 adresses IP directement sur le vRack.
- **Jusqu'à 128 routes next-hop** : vous pouvez utiliser jusqu'à 128 routes pour des sous-réseaux routés à l'intérieur d'un vRack.
- **Plafonnement de la bande passante publique** : Le trafic sortant d’OVHcloud vers Internet est plafonné à 5 Gbit/s par région.
- **Limites d’allocation de blocs IPv6** : un seul bloc Additional IPv6 par vRack dans une région. Maximum de 3 blocs (/56) par emplacement de région.
- **Mobilité des blocs Additional IPv6** : En raison de la conception hiérarchique de l’espace d’adressage IPv6, les blocs Additional IPv6 sont spécifiques à chaque région. Cela signifie que les blocs ne peuvent pas être transférés entre les régions, bien qu'ils puissent être réaffectés au sein de n'importe quel backend connecté au vRack.
- **Pas de prise en charge directe du VLAN 802.1Q dans le vRack par Additional IPv6** : La configuration ne peut être effectuée qu'avec le VLAN natif de votre réseau vRack. Pour la transmission de paquets à l'intérieur d'un VLAN spécifique (dans un vRack), un hôte dédié côté client sera nécessaire.
- **Le routage d’Additional IPv6 dans le vRack n’est actuellement pas pris en charge dans les régions APAC.**

## Aller plus loin

Rejoignez notre [Communauté d'utilisateurs](/links/community).
