---
title: Configuration IPv6
slug: network-ipv6
excerpt: Decouvrez ici comment configurer des adresses IPv6 sur notre infrastructure.
section: Réseau & IP
---


## Prérequis
- Avoir un serveur dédié.
- Avoir une IP Failover et une MAC Virtuelle.
- Des connaissances en [SSH](https://fr.wikipedia.org/wiki/Secure_Shell){.external}.
- Des connaissances de base en réseau.

Internet Protocol version 6 (IPv6) est la dernière version du Internet Protocol (IP).

Il est conçu pour résoudre l’épuisement longuement anticipé des adresses IPv4 en utilisant des adresses composé de 128 bits au lieu du traditionnel 32 bits de l’IPv4.

Tous les serveurs dédiés comprennent un block /64 IPv6 à votre disposition. Ce block représente 18,446,744,073,709,551,616 adresses IPs dont vous pouvez disposer à votre guise.

Block IPv6 assigné à votre serveur.

L'IPv6 que vous souhaitez configurer.

Le préfixe de votre Block IPv6 (Ex: 2607:5300:60:62ac::/64 -> netmask = 64).

La passerelle de votre Block IPv6.


## Application de la configuration


> [!primary]
>
> Le serveur DNS OVH est en mesure de faire la résolution de noms de domaine IPv6. Réferez-vous à [ce guide](../network_bridging/guide.fr-fr.md).
> 

Tous les serveurs dédiés comprennent un block /64 IPv6 mis à votre disposition.

Si vous utilisez un système d'exploitation fourni par OVH. Vous constaterez que l’adresse IPv6 principale de votre block est déjà configurée.

Si vous désirez utiliser plus d’une adresse IPv6 sur votre serveur (ou si vous désirez l’utiliser sur une Machine Virtuelle) vous devez avoir une adresse IP failover configurée avec une vMAC. Autrement, l’adresse IPv6 ne sera pas routée par nos routeurs et switchs.



> [!primary]
>
> La passerelle par défaut de votre Block IPv6 (IPv6_GATEWAY) est toujours IP:v:6FF:FF:FF:FF:FF.
> Quelques exemples :
> - L'IPv6 du serveur est 2607:5300:60:62ac::/64. L'IPv6_GATEWAY sera alors 2607:5300:60:62FF:FF:FF:FF:FF.
> - L'IPv6 du serveur est 2001:41D0:1:46e::/64. L'IPV6_GATEWAY sera alors 2001:41D0:1:4FF:FF:FF:FF:FF.
>

### Debian &amp; derives
**Fichier: /etc/network/interfaces**

Considérant que votre interface est eth0, la configuration devrait ressembler à ceci :


```bash
iface eth0 inet6 static
    address YOUR_IPV6
    netmask IPV6_PREFIX

    post-up /sbin/ip -f inet6 route add IPV6_GATEWAY dev eth0
    post-up /sbin/ip -f inet6 route add default via IPV6_GATEWAY
    pre-down /sbin/ip -f inet6 route del IPV6_GATEWAY dev eth0
    pre-down /sbin/ip -f inet6 route del default via IPV6_GATEWAY
```



> [!warning]
>
> Par mesure de précaution, nous suggérons fortement à nos clients de désactiver l’autoconf IPv6 et l’annonce de routage afin d’éviter tout dysfonctionnement.
> Vous pouvez le faire en ajoutant les lignes suivantes à votre fichier sysctl.conf:
> 
> ```bash
> net.ipv6.conf.eth0.autoconf=0
> net.ipv6.conf.eth0.accept_ra=0
> ```
> 
> Une fois complété, vous pouvez appliquer ces règles en éxécutant la commande suivante:
> ```sh
> sysctl -p
> ```
> 

Une fois configuré, redémarrez l’interface réseau (ou redémarrez la Machine Virtuelle):

```sh
service networking restart
```
Enfin, pour tester la connectivité IPv6, il vous faut simplement envoyer une requête ping à une autre adresse IPv6.

```sh
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
Si le test PING ne fonctionne pas, n'hésitez pas à [contacter notre support](https://www.ovh.com/support/){.external} !


### Redhat &amp; derives


> [!warning]
>
> Cet exemple à été fait avec CentOS 7.0. Dans certains cas, les résultats peuvent varier selon le système dérivé utilisé.
> 

Considérant que votre interface est eth0, la configuration devrait ressembler à ceci:

**Fichier: /etc/sysconfig/network-scripts/ifcfg-eth0**



> [!primary]
>
> Dans cet exemple, la configuration IPv4 Failover à été cachée pour éviter la confusion, mais la configuration IPv6 se trouve dans le même fichier.
> 


```bash
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX ---> (basically your IPV6 in CIDR notation)
IPV6_DEFAULTGW=IPV6_GATEWAY
```


### FreeBSD 10
**Fichier: /etc/rc.conf**

Considérant que votre interface est em0, la configuration devrait ressembler à ceci:


```bash
ipv6_activate_all_interfaces="YES"
ipv6_defaultrouter="IPV6_GATEWAY"
ifconfig_em0_ipv6="inet6 YOUR_IPV6 prefixlen 64"
```



> [!warning]
>
> Si vous utilisez la version FreeBSD 8.3 ou antérieur, la configuration devrait ressembler à ceci:
> 
> ```bash
> ipv6_enable="YES"
> ipv6_defaultrouter="IPV6_GATEWAY"
> ipv6_ifconfig_em0="YOUR_IPV6 prefixlen 64"
> ```
>

### Windows 2008/2012/Hyper-V


> [!primary]
>
> Travail en cours..
> 
