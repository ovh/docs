---
title: Configurer IPv6 sur un serveur dédié
slug: network-ipv6
excerpt: Decouvrez comment configurer des adresses IPv6 sur notre infrastructure.
section: Réseau & IP
---

**Dernière mise à jour le 04/05/2022**

## Objectif

Internet Protocol version 6 (IPv6) est le successeur d'Internet Protocol version 4 (IPv4). Mis en place pour résoudre l’épuisement des adresses IPv4, IPv6 utilise des adresses de 128-octets au lieu d’adresses de 32-octets. Tous les serveurs dédiés d’OVHCloud comprennent un bloc /64 IPv6. Ceci représente plus de 18 quintillions d’adresses IP dont vous pouvez disposer à votre guise.

**Ce guide vous explique comment configurer des adresses IPv6 sur votre serveur.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
>Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre compte OVHcloud.
- Avoir toutes les informations relatives à votre IPv6 (préfix, passerelle...).
- Avoir des connaissances de base en SSH et en réseau.

> [!warning]
> À noter que les serveurs Kimsufi sont fournis avec un seul bloc IPv6 (/128). IPv6 sera configuré automatiquement à l’installation du système d’exploitation.
>

## En pratique

En installant votre serveur à l’aide d’un modèle de système d’exploitation Linux fourni par OVHcloud, vous constaterez que la première adresse IPv6 (l'adresse principale) est déjà configurée, prête à l’emploi.

Si vous souhaitez configurer plusieurs adresses IPv6 sur votre serveur (ou si vous souhaitez l’utiliser sur une VM) vous devez disposer d’une IP fail-over configurée avec une vMAC. Dans le cas contraire, l'IPv6 ne pourra pas être routée par nos routeurs/switchs.

> [!primary]
>
> La passerelle par défaut de votre bloc IPv6 (IPv6_GATEWAY) demeure xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. Veuillez noter que les "0" de tête peuvent être supprimés dans une IPv6 afin d'éviter des erreurs lors de la determination de la passerelle. 
>
> Par exemple :
> 
> - L’adresse IPv6 du serveur est 2607:5300:60:62ac::/64 ou 2607:5300:60:62ac:0000:0000:0000:0000/64. L’IPv6_GATEWAY sera alors 2607:5300:60:62FF:FF:FF:FF:FF.
> - L’adresse IPv6 du serveur est 2001:41D0:1:46e::/64 ou 2001:41D0:0001:046e:0000:0000:0000:0000/64. L’IPv6_GATEWAY sera alors 2001:41D0:1:4FF:FF:FF:FF:FF.
>
> Le moyen le plus sûr de récupérer les informations réseau de votre serveur est d'[utiliser l'API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/). Exécutez l'appel API suivant, en indiquant le nom interne du serveur (exemple : `ns3956771.ip-169-254-10.eu`) :
>


> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>


### Debian et systèmes d’exploitation basés sur Debian

> [!warning]
>
> Avant de suivre les étapes ci-dessous, nous vous recommandons fortement de désactiver l’autoconf IPv6 et l’annonce de routage afin d’éviter des problèmes déjà connus. Vous pouvez le faire en ajoutant les lignes suivantes à votre fichier `sysctl.conf`, fichier se trouvant dans /etc/sysctl.conf :
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Une fois que cela a été fait, vous pouvez appliquer ces règles en exécutant la commande suivante : `sh sysctl -p`.
> 

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](../premiers-pas-serveur-dedie/).

#### Étape 2 : Ouvrir le fichier de configuration réseau de votre serveur

Le fichier de configuration réseau de votre serveur est situé dans `/etc/network/interfaces`. Utilisez la ligne de commande pour localiser le fichier et ouvrez-le pour l'éditer. Avant de le faire, envisagez de créer une copie de sauvegarde.

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier afin qu'il ressemble à l'exemple ci-dessous. Dans cet exemple, l'interface réseau est appelée `eth0`. L'interface sur votre serveur peut être différente.

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 128

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Des adresses IPv6 supplémentaires peuvent être ajoutées grâce aux lignes `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64`, lignes présentes dans le fichier.

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant les commandes suivantes :

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](../ovh-rescue/).

### Fedora 26 et ultérieur

> [!warning]
>
> Cet exemple a été réalisé avec CentOS 7.0. Les résultats peuvent être différents si vous utilisez d'autres dérivés de Redhat.
>

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](../premiers-pas-serveur-dedie/).


#### Étape 2 : Ouvrir le fichier de configuration réseau de votre serveur

Le fichier de configuration réseau de votre serveur est situé dans `/etc/sysconfig/network-scripts/ifcfg-eth0` Utilisez la ligne de commande pour localiser le fichier et ouvrez-le pour l'éditer.

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier afin qu'il ressemble à l'exemple ci-dessous. Dans cet exemple, l'interface réseau est appelée eth0. L'interface sur votre serveur peut être différente. En outre, nous avons omis la configuration d’IPv4 Failover pour éviter toute confusion, mais la configuration IPv6 est réalisée dans le même fichier de configuration.

```console
IPv6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPv6/64
IPV6ADDR_SECONDARIES=YOUR_2nd_IPv6/64 YOUR_3rd_IPv6/64
IPV6_DEFAULTGW=IPv6_GATEWAY
```
Si vous avez besoin de plus d'adresses IPv6 sur la machine, ajoutez-les dans la ligne `IPV6ADDR_SECONDARIES`, en les séparant par des espaces.

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

#### Étape 5 : Tester la connectivité IPv6


Vous pouvez tester la connectivité IPv6 en exécutant les commandes suivantes :

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](../ovh-rescue/).

### FreeBSD

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](../premiers-pas-serveur-dedie/).

#### Étape 2 : Ouvrir le fichier de configuration réseau de votre serveur

Le fichier de configuration réseau de votre serveur est situé dans `/etc/rc.conf`. Utilisez la ligne de commande pour localiser le fichier et ouvrez-le pour l'éditer.

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier afin qu'il ressemble à l'exemple ci-dessous. Dans cet exemple, l'interface réseau est appelée em0. L'interface sur votre serveur peut être différente.

```console
IPv6_activate_all_interfaces="YES" 
IPv6_defaultrouter="IPv6_GATEWAY" 
ifconfig_em0_IPv6="inet6 IPv6_Address prefixlen 64"
ifconfig_em0_alias0="inet6 IPv6_Address_2 prefixlen 64"
ifconfig_em0_alias1="inet6 IPv6_Address_3 prefixlen 64"
```

#### Étape 4 : Enregistrez le fichier et redémarrez le serveur

Enregistrez les modifications apportées au fichier, puis relancez le service réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant les commandes suivantes :

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](../ovh-rescue/).

### Ubuntu 18.04

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](../premiers-pas-serveur-dedie/).

#### Étape 2 : Ouvrir le fichier de configuration réseau de votre serveur

Ouvrez le fichier de configuration du réseau, fichier se trouvant dans `/etc/systemd/network`. À des fins de démonstration, notre fichier est appelé 50-default.network.

#### Étape 3 : Modifier le fichier de configuration réseau

Comme indiqué dans l'exemple ci-dessous, utilisez un éditeur de texte pour modifier le fichier en ajoutant aux sections concernées les lignes suivantes :

```console
[Network]
Destination=Gateway_Address

[Address]
Address=IPv6_Address/64

[Route]
Destination=Gateway_Address
Scope=link
```
pour ajouter plusieurs adresses IPv6, ajoutez plusieurs sections \[Address].

```console
[Address]
Address=IPv6_Address_2/64

[Address]
Address=IPv6_Address_3/64
```
#### Étape 4 : Enregistrez le fichier et redémarrez le serveur

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

#### Étape 5 : Tester la connectivité IPv6


Vous pouvez tester la connectivité IPv6 en exécutant les commandes suivantes :

```bash
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2012

#### Étape 1 : Utiliser RDP pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](../premiers-pas-serveur-dedie/).


#### Étape 2 : Ouvrir la configuration réseau de votre serveur

Tout d'abord, faites un clic droit sur l'icône du réseau dans la zone de notification pour accéder au `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}

Cliquez sur `Modifier les paramètres de l’adaptateur`{.action}.

![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}

Cliquez avec le bouton droit sur votre adaptateur réseau, puis cliquez sur `Propriétés`{.action}.

![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}

Sélectionnez `Internet Protocol Version 6`{.action}, puis cliquez sur `Propriétés`{.action}.

![Properties](images/ipv6_properties.png){.thumbnail}

#### Étape 3 : Modifier la configuration réseau 

Entrez dans votre configuration IPv6 (`Adresse IPv6` et `Default Gateway`) puis cliquez sur `OK`{.action}.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Résolution des défauts

Si vous rencontrez toujours des problèmes après avoir testé votre connexion, veuillez créer une demande d'assistance afin de revoir vos configurations. Dans ce cas, il sera nécessaire d’indiquer :

- le nom et la version du système d'exploitation que vous utilisez sur votre serveur,
- le nom et le répertoire du fichier de configuration du réseau, 
- le contenu de ce fichier. 


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
