---
title: Configurer IPv6 sur un serveur dédié
excerpt: Decouvrez comment configurer des adresses IPv6 sur notre infrastructure.
updated: 2023-11-17
---

## Objectif

Internet Protocol version 6 (IPv6) est le successeur d'Internet Protocol version 4 (IPv4). Mis en place pour résoudre l’épuisement des adresses IPv4, IPv6 utilise des adresses de 128 bits au lieu d’adresses de 32 bits. La plupart des serveurs dédiés OVHcloud sont livrés avec un bloc /64 IPv6, à l'exception des serveurs High Grade et Scale qui sont livrés avec un bloc /56 IPv6. Ceci représente plus de 18 quintillions d’adresses IP dont vous pouvez disposer à votre guise.

**Ce guide vous explique comment configurer des adresses IPv6 sur votre serveur.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
>Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre compte OVHcloud.
- Avoir toutes les informations relatives à votre IPv6 (préfix, passerelle...).
- Avoir des connaissances de base en SSH et en réseau.

> [!warning]
> À noter que les serveurs Kimsufi sont fournis avec un seul bloc IPv6 (/128). IPv6 sera configuré automatiquement à l’installation du système d’exploitation.
>

## En pratique

En installant votre serveur à l’aide d’un modèle de système d’exploitation Linux fourni par OVHcloud, vous devrez configurer la première adresse IPv6 (l'adresse principale) sur le serveur.

Par exemple, si nous avons attribué à votre serveur la plage IPv6 : `2607:5300:xxxx:xxxx::/64` vous pouvez utiliser comme IPv6 principale de votre serveur l'IPv6 : `2607:5300:xxxx:xxxx::1/64`.

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit d'une adresse IPv6 du bloc IPv6 attribué à votre serveur|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6, généralement de 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Il s'agit de la passerelle (ou *gateway*) de votre bloc IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff ou fe80::1|

### Passerelle par défaut

La première étape consiste à récupérer la passerelle (gateway) IPv6 assignée à votre serveur. Deux méthodes sont possibles, poursuivez vers celle que vous souhaitez utiliser.

- [Obtenir les informations réseau via l'espace client](#viacontrolpanel).
- [Obtenir les informations réseau via les API](#viaapi).

#### Via votre espace client <a name="viacontrolpanel"></a>

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur dédiés`{.action}.

La gateway IPv6 assignée à votre serveur est affichée dans la section `Réseau` de l'onglet `Informations générales`{.action}. Une fois copié, poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

![configureipv6](images/ipv6_information.png){.thumbnail}

#### Via les API OVHcloud <a name="viaapi"></a>

Une autre façon de récupérer les informations réseau de votre serveur est d'[utiliser l'API OVHcloud](/pages/manage_and_operate/api/first-steps).

Exécutez l'appel API suivant, en indiquant le nom interne du serveur (exemple : `ns3956771.ip-169-254-10.eu`) :

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>

> [!warning]
> 
> Avant de modifier un fichier de configuration, créez toujours une sauvegarde de l’original, pour pouvoir y revenir en cas de problème. 
> 

### Debian et systèmes d’exploitation basés sur Debian (à l'exception de Debian 12)

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

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

#### Étape 2 : Créer une sauvegarde

Le fichier de configuration réseau de votre serveur est situé soit dans `/etc/network/interfaces` ou `/etc/network/interfaces.d`. Avant de poursuivre, créez une sauvegarde de votre fichier à l'aide de l'une des commandes suivantes :

```sh
cp /etc/network/interfaces/50-cloud-init /etc/network/interfaces/50-cloud-init.bak
```

Ou

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier afin qu'il ressemble à l'exemple ci-dessous. Dans cet exemple, l'interface réseau est appelée `eth0`. L'interface sur votre serveur peut être différente.

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Des adresses IPv6 supplémentaires peuvent être ajoutées grâce aux lignes `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64` présentes dans le fichier.

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

```sh
sudo /etc/init.d/networking restart
```

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

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 37 et versions ultérieures

Fedora utilise dorénavant des fichiers clés (*keyfiles*).
Fedora utilisait auparavant des profils réseau stockés par NetworkManager au format ifcfg dans le répertoire `/etc/sysconfig/network-scripts/`.<br>
Le ifcfg étant à présent déprécié, NetworkManager ne crée plus par défaut les nouveaux profils dans ce format. Le fichier de configuration se trouve à présent dans `/etc/NetworkManager/system-connections/`.

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

#### Étape 2 : Créer une sauvegarde

> [!primary]
> 
> Notez que le nom du fichier réseau dans notre exemple peut être différent du vôtre. Veuillez le remplacer par le nom de votre fichier.
>

Il convient avant tout d'effectuer une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier afin qu'il ressemble à l'exemple ci-dessous. Remplacez les éléments génériques (YOUR_IPV6, IPV6_PREFIX et IPV6_GATEWAY) par vos valeurs spécifiques.
De plus, nous avons omis la configuration IPv4 pour éviter toute confusion, mais la configuration IPv6 est effectuée dans le même fichier de configuration.

```bash
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/PREFIX
gateway=IPv6_GATEWAY
```

Si vous avez besoin de configurer plus d'adresses IPv6, votre configuration devrait ressembler à ceci :

```bash
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/PREFIX
address2=YOUR_2nd_IPV6/PREFIX
address3=YOUR_3rd_IPV6/PREFIX
gateway=IPv6_GATEWAY
```

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

```sh
sudo systemctl restart NetworkManager
```

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

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### FreeBSD

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

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

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Debian 12, Ubuntu 20.04 et versions ultérieures

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

#### Étape 2 : Créer le fichier de configuration réseau

Les fichiers de configuration réseau se trouvent dans le dossier `/etc/netplan/`. Par défaut, le fichier de configuration principal s'appelle '50-cloud-init.yaml'.

La meilleure approche consiste à créer un fichier de configuration séparé pour configurer les adresses IPv6 dans le dossier `/etc/netplan/`. Cela permet de revenir facilement en arrière en cas d'erreur.

À des fins d'exemple, notre fichier est appelé '51-cloud-init-ipv6.yaml'.

#### Étape 3 : Modifier le fichier de configuration réseau

À l'aide d'un éditeur de texte, modifiez le fichier '50-cloud-init.yaml' en ajoutant les lignes suivantes aux sections concernées, comme indiqué dans l'exemple ci-dessous.

Remplacez les éléments génériques (YOUR_IPV6, IPV6_PREFIX et IPV6_GATEWAY) ainsi que l'interface réseau (si votre serveur n'utilise pas eno3) par vos valeurs spécifiques.

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
>
> Il est important de respecter l’alignement de chaque élément de ce fichier tel que représenté dans l’exemple ci-dessus. N’utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire. 
>

#### Étape 4 : Tester et appliquer la configuration

Vous pouvez tester votre configuration à l’aide de la commande suivante :

```bash
sudo netplan try
```

Si elle est correcte, appliquez-la à l’aide de la commande suivante :

```bash
sudo netplan apply
```

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

### Windows Server 2016 et versions ultérieures

#### Étape 1 : Utiliser RDP pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

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
