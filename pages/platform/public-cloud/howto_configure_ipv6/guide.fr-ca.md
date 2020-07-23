---
title: 'Configurer IPv6 sur une instance Public Cloud'
slug: configurer-ipv6
excerpt: 'Tutoriel de configuration du protocole IPv6 sur une instance Public Cloud'
section: 'Réseau'
order: 21
---

**Dernière mise à jour le 25/11/2019**

## Objectif
Internet Protocol version 6 (IPv6) est la dernière version du Internet Protocol (IP). Il est conçu pour résoudre l’épuisement longuement anticipé des adresses IPv4 en utilisant des adresses composées de 128-bits au lieu du traditionnel 32-bits de l’IPv4.

Chaque instance Public Cloud est livrée avec une adresse IPv4 et une adresse IPv6.

Par défaut, seule l'adresse IPv4 est configurée.

Dans ce tutoriel, nous allons vous apprendre à configurer une adresse IPv6 sur une instance Public Cloud.

## Prérequis

* Une instance Public Cloud, le modèle importe peu.
* Connaissance de SSH.
* Connaissances basiques en réseaux.

## En pratique

### Lexique

Voici un lexique rapide des termes utilisés dans ce tutoriel :

|Lexique|Description|
|---|---|
|IPV6_BLOCK|Bloc IPv6 assigné à votre service|
|YOUR_IPV6|L’adresse IPv6 assignée à votre service|
|IPv6_PREFIX|Le préfixe de votre bloc IPv6 (Ex: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPv6_GATEWAY|La passerelle de votre bloc IPv6|


### Récupérer les informations réseaux

Connectez-vous à votre espace client, sélectionnez le menu `Instances`{.action} puis cliquez sur `Détails de l'instance`{.action}.

![public-cloud ipv6](images/pcipv61.png){.thumbnail}

Toutes les informations nécessaires seront visibles dans la partie **Réseaux**.

![public-cloud ipv6](images/pcipv62.png){.thumbnail}

### Exemples de configurations persistantes

> [!primary] **Exemples**
> 
>Les informations fournies ci-dessous le sont à titre d'exemples.
>
>Étant l'administrateur de vos services, il vous incombe d'adapter ceux-ci à votre distribution.
>

En premier lieu, connectez-vous à votre instance en SSH.

#### **Sur Debian / Ubuntu**

Considérant que votre interface est eth0 et que vous vous trouvez sur un OS Debian, la configuration à rajouter devrait ressembler à ceci :

Fichier à modifier (avec privilèges su) : /etc/network/interfaces

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Voici un exemple concret :

```
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```
#### **Sur RedHat / CentOS**

Considérant que votre interface est eth0, la configuration devrait ressembler à ceci :

Fichier à modifier (avec privilèges sudo) : /etc/sysconfig/network-scripts/ifcfg-eth0

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Voici un exemple concret :

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### **Sur Windows**

Rendez-vous dans la rubrique `Connexion Réseaux`{.action} de votre Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Entrez ensuite dans les `Propriétés`{.action} de votre carte-réseau via un clic droit.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Cliquez alors sur `IPv6`{.action} puis sur `Propriétés`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Enfin renseignez les informations de votre IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

## Diagnostic

Vous avez configuré votre IPv6 mais rien ne fonctionne ? 

Une manipulation simple existe pour déterminer si le défaut se situe dans la configuration effectuée ou sur le réseau d'OVHcloud.

Dans un premier temps, [passez votre instance dans le mode de secours rescue-pro](../passer-une-instance-en-mode-rescue/).

Inspirez-vous ensuite des commandes suivantes pour configurer votre IP de manière non-persistante :

```
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Testez de nouveau votre réseau via un ping6 par exemple :

```
ping6 ipv6.google.com
```
Si votre instance répond, il est probable qu'une des étapes de votre configuration initiale n'ait pas été rigoureusement suivie.

Dans tous les cas, n'hésitez pas à effectuer une demande au support avec les éléments testés ci-dessus afin d'obtenir une analyse de notre part.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
