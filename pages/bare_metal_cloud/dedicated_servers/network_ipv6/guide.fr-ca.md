---
title: 'Configurer IPv6 sur un serveur dédié'
excerpt: 'Découvrez comment configurer des adresses IPv6 sur notre infrastructure.'
updated: 2024-07-15
---

## Objectif

Internet Protocol version 6 (IPv6) est le successeur d'Internet Protocol version 4 (IPv4). Mis en place pour résoudre l’épuisement des adresses IPv4, IPv6 utilise des adresses de 128 bits au lieu d’adresses de 32 bits. Les serveurs des gammes High Grade, Scale et Advance (depuis juillet 2024) sont livrés avec un bloc /56 IPv6. Les anciens serveurs sont quant à eux livrés avec un bloc/64 IPv6. Un serveur livré avec un bloc /56 IPv6 permet de disposer jusqu'à 18 quintillions d’adresses IP.

**Ce guide vous explique comment configurer des adresses IPv6 sur votre serveur.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre compte OVHcloud.
- Avoir toutes les informations relatives à votre IPv6 (préfix, passerelle...).
- Avoir des connaissances de base en SSH et en réseau.

> [!warning]
> À noter que les serveurs Kimsufi sont fournis avec un seul bloc IPv6 (/128). IPv6 sera configuré automatiquement à l’installation du système d’exploitation.
>

## En pratique

Les sections suivantes contiennent les configurations des distributions que nous proposons actuellement et les distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou via une session de connexion GUI (RDP pour un serveur Windows).

Sur les serveurs dédiés, la première IPv6 est déclarée comme 2607:5300:xxxx:xxxx::/64. Par exemple, si nous avons attribué à votre serveur la plage IPv6 : `2607:5300:abcd:efgh::/64`, la première IPv6 de votre serveur est : `2607:5300:abcd:efgh::/64`.

Par défaut, la première IPv6 est configurée sur la plupart des distributions Linux récentes que nous proposons à l'installation, donc la passerelle est déjà incluse dans le fichier de configuration. Dans la plupart des cas, vous n'aurez pas besoin de l'ajouter manuellement.

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit d'une adresse IPv6 du bloc IPv6 attribué à votre serveur|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6, généralement de 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Il s'agit de la passerelle (ou *gateway*) de votre bloc IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff ou fe80::1|

Dans nos exemples, nous utiliserons l'éditeur de texte `nano`. Vous pouvez bien entendu utiliser l'éditeur de texte de votre choix.

### Passerelle par défaut (Gateway)

La première étape consiste à récupérer la passerelle (gateway) IPv6 assignée à votre serveur. Deux méthodes sont possibles, poursuivez vers celle que vous souhaitez utiliser.

- [Obtenir les informations réseau via l'espace client](#viacontrolpanel).
- [Obtenir les informations réseau via les API](#viaapi).

#### Via votre espace client <a name="viacontrolpanel"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur dédiés`{.action}.

La passerelle IPv6 assignée à votre serveur est affichée dans la section `Réseau` de l'onglet `Informations générales`{.action}. Une fois copié, poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

![configureipv6](images/ipv6_information.png){.thumbnail}

#### Via les API OVHcloud <a name="viaapi"></a>

Une autre façon de récupérer les informations réseau de votre serveur est d'[utiliser l'API OVHcloud](/pages/manage_and_operate/api/first-steps).

Exécutez l'appel API suivant, en indiquant le nom interne du serveur (exemple : `ns3956771.ip-169-254-10.eu`) :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Veuillez noter que les "0" de tête peuvent être supprimés dans une passerelle IPv6.

Exemple :

IPv6_GATEWAY : `2607:5300:60:62FF:00FF:00FF:00FF:00FF` peut aussi être écrit comme `2607:5300:60:62FF:FF:FF:FF:FF`.

> [!warning]
> 
> Avant de modifier un fichier de configuration, créez toujours une sauvegarde de l’original, pour pouvoir y revenir en cas de problème. 
> 

### Debian et systèmes d’exploitation basés sur Debian (à l'exception de Debian 12)

L'exemple de configuration ci-dessous est basé sur Debian 11 (Bullseye).


> [!warning]
>
> Avant de suivre les étapes ci-dessous, nous vous recommandons fortement de désactiver l’autoconf IPv6 et l’annonce de routage afin d’éviter des problèmes déjà connus. Vous pouvez le faire en ajoutant les lignes suivantes à votre fichier `sysctl.conf`, fichier se trouvant dans /etc/sysctl.conf :
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Une fois que cela a été fait, vous pouvez appliquer ces règles en exécutant la commande suivante : `sudo sysctl -p`.
> 

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

```sh
ssh user@serverIP
```

#### Étape 2 : Créer une sauvegarde

Le fichier de configuration réseau de votre serveur est situé dans `/etc/network/interfaces.d`. Avant de continuer, créez une sauvegarde de votre fichier en utilisant l'une des commandes suivantes :

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Étape 3 : Modifier le fichier de configuration réseau

Ne modifiez pas les lignes existantes dans le fichier de configuration. Ajoutez les lignes pour votre configuration IPv6, en remplaçant `YOUR_IPv6` et `IPv6_PREFIX` par vos propres valeurs. Dans cet exemple, l'interface réseau est appelée `eth0`. L'interface de votre serveur peut être différente.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address YOUR_IPv6
    netmask IPv6_PREFIX

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Debian 10**

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

Des adresses IPv6 supplémentaires peuvent être ajoutées avec les lignes suivantes dans le fichier de configuration : `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, etc.

Pour s'assurer que l'IPv6 est activée ou désactivée lorsque l'interface eth0 est activée ou désactivée, vous devez ajouter la ligne suivante à la configuration :

`down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
`down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`

**Exemple de configuration:**

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Ajout d'adresses IPv6 supplémentaires :

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64
    up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
    up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier, puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

```sh
sudo /etc/init.d/networking restart
```

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant la commande suivante :

```sh
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

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 38 et versions ultérieures

L'exemple de configuration ci-dessous est basé sur Fedora 39.

Fedora utilise dorénavant des fichiers clés (*keyfiles*).
Fedora utilisait auparavant des profils réseau stockés par NetworkManager au format ifcfg dans le répertoire `/etc/sysconfig/network-scripts/`.<br>
Le ifcfg étant à présent déprécié, NetworkManager ne crée plus par défaut les nouveaux profils dans ce format. Le fichier de configuration se trouve à présent dans `/etc/NetworkManager/system-connections/`.

Dans cet exemple, notre fichier s'appelle `cloud-init-eno1.nmconnection`.

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

```sh
ssh user@serverIP
```

#### Étape 2 : Créer une sauvegarde

> [!primary]
> 
> Notez que le nom du fichier réseau dans notre exemple peut être différent du vôtre. Veuillez le remplacer par le nom de votre fichier.
>

Il convient avant tout d'effectuer une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Étape 3 : Modifier le fichier de configuration réseau

Modifiez le fichier en y ajoutant les lignes suivantes, sans rien modifier dans le fichier original. Remplacez les éléments génériques (c'est-à-dire `YOUR_IPV6` et `IPv6_PREFIX`) par vos valeurs spécifiques. Nous avons également omis la configuration IPv4 pour éviter toute confusion, mais la configuration IPv6 se fait dans le même fichier de configuration.

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Si vous avez besoin de configurer plus d'adresses IPv6, votre configuration devrait ressembler à ceci :

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Exemple de configuration:**

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Nous modifions ensuite le fichier de configuration :

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Ajout d'adresses IPv6 supplémentaires :

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
address3=2607:5300:adce:f2cd::2/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez les modifications apportées au fichier puis relancez le réseau ou redémarrez votre serveur afin d’appliquer ces modifications.

```sh
sudo systemctl restart NetworkManager
```

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant la commande suivante :

```sh
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

Si vous ne parvenez pas à exécuter une commande ping sur cette adresse IPv6, vérifiez votre configuration et réessayez. Assurez-vous également que la machine à partir de laquelle vous effectuez le test est connectée à IPv6. Si cela ne fonctionne toujours pas, veuillez tester votre configuration en [mode Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Debian 12, Ubuntu 20.04 et versions ultérieures

L'exemple de configuration ci-dessous est basé sur Ubuntu 22.04 (Jammy Jellyfish).

Les fichiers de configuration du réseau sont situés dans le répertoire `/etc/netplan/`. Par défaut, le fichier de configuration principal est appelé `50-cloud-init.yaml`.

#### Étape 1 : Utilisez SSH pour vous connecter à votre serveur

```sh
ssh user@serverIP
```

#### Étape 2 : Créer le fichier de configuration réseau

La meilleure approche est de créer un fichier de configuration séparé avec une extension .yaml pour configurer les adresses IPv6 dans le répertoire `/etc/netplan/`. De cette façon, vous pouvez facilement revenir sur les changements en cas d'erreur.

Dans notre exemple, notre fichier est nommé `51-cloud-init-ipv6.yaml` :

```sh
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### Étape 3 : Modifier le fichier de configuration réseau

En utilisant un éditeur de texte, modifiez le fichier `51-cloud-init-ipv6.yaml` en ajoutant les lignes suivantes au fichier, comme montré dans l'exemple ci-dessous.

Remplacez les éléments génériques (c'est-à-dire `YOUR_IPV6` et `IPV6_PREFIX`) ainsi que l'interface réseau (si votre serveur n'utilise pas **eno3**) par vos valeurs spécifiques.

```yaml
network:
    version: 2
    ethernets:
         eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPV6_PREFIX
```

Si vous devez configurer plusieurs adresses IPv6, votre configuration devrait ressembler à ceci :

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
              - ADDITIONAL_IPV6_1/IPv6_PREFIX
              - ADDITIONAL_IPV6_2/IPv6_PREFIX
```

> [!warning]
>
> Il est important de respecter l’alignement de chaque élément de ce fichier tel que représenté dans l’exemple ci-dessus. N’utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire. 
>


**Exemple de configuration:**

```sh
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Ensuite, nous modifions le fichier de configuration :

```yaml
network:
    version: 2
    ethernets:
          eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
```

Pour plusieurs adresses IPV6 :

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
```

#### Étape 4 : Tester et appliquer la configuration

Vous pouvez tester votre configuration à l’aide de la commande suivante :

```sh
sudo netplan try
```

Si elle est correcte, appliquez-la à l’aide de la commande suivante :

```sh
sudo netplan apply
```

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant la commande suivante :

```sh
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

### CentOS 7, Alma Linux (8 & 9) et Rocky Linux (8 & 9)

L'exemple de configuration ci-dessous est basé sur CentOS 7.

Le fichier de configuration réseau est situé dans le répertoire `/etc/sysconfig/network-scripts`. Dans notre exemple, il s'appelle `ifcfg-eth0`.

#### Étape 1 : Utiliser SSH pour vous connecter à votre serveur

```sh
ssh user@serverIP
```

#### Étape 2 : Créer une sauvegarde

> [!primary]
> 
> Notez que le nom du fichier réseau dans notre exemple peut être différent du vôtre. Veuillez l'adapter à votre nom de fichier.
>

Tout d'abord, faites une copie du fichier de configuration, afin de pouvoir revenir en arrière à tout moment :

```sh
sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

#### Étape 3 : Modifier le fichier de configuration du réseau

Dans le fichier de configuration ouvert, ajoutez les lignes suivantes si elles manquent. Remplacez les éléments génériques (c'est-à-dire `YOUR_IPv6`, `IPV6_GATEWAY` et `IPV6_PREFIX`) par vos valeurs spécifiques. Par ailleurs, nous avons omis la configuration IPv4 pour éviter toute confusion, mais la configuration IPv6 se fait dans le même fichier de configuration.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Pour Alma Linux et Rocky linux, le contenu du fichier de configuration peut différer de celui indiqué ci-dessus, auquel cas il suffit d'ajouter les éléments manquants. Ne remplacez rien dans le fichier original.

Si vous devez configurer plusieurs adresses IPv6, ajoutez la ligne suivante :

```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Exemple de configuration:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

Nous modifions ensuite le fichier de configuration :

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Pour plusieurs adresses IPV6 :

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
```

#### Étape 4 : Enregistrer le fichier et appliquer les modifications

Enregistrez vos modifications dans le fichier puis redémarrez le réseau à l'aide de l'une des commandes suivantes :

```sh
sudo systemctl restart network
```

**Pour Alma Linux et Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

Vous pouvez également redémarrer votre serveur pour appliquer les changements.

#### Étape 5 : Tester la connectivité IPv6

Vous pouvez tester la connectivité IPv6 en exécutant la commande suivante :

```sh
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

#### Étape 1 : Utiliser RDP pour vous connecter à votre serveur

Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

#### Étape 2 : Ouvrir la configuration réseau de votre serveur

Tout d'abord, faites un clic droit sur l'icône du réseau dans la zone de notification pour accéder au `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}

Cliquez sur `Modifier les paramètres de l’adaptateur`{.action}.

![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}

Cliquez avec le bouton droit sur votre adaptateur réseau, puis cliquez sur `Propriétés`{.action}.

![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}

Sélectionnez `Internet Protocol Version 6`{.action}, puis cliquez sur `Propriétés`{.action}.

![Properties](images/ipv6_properties.png){.thumbnail}

#### Étape 3 : Modifier la configuration réseau 

Entrez votre configuration IPv6 (`Adresse IPv6` et `Default Gateway`), cochez la case `Valider les paramètres en quittant` et cliquez sur le bouton `OK`{.action} pour valider vos changements.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Diagnostic

Vous avez configuré votre IPv6 mais rien ne fonctionne ? 

Une manipulation simple existe pour déterminer si le défaut se situe dans la configuration effectuée ou sur le réseau d'OVHcloud.

Dans un premier temps, [mettez votre serveur en mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Inspirez-vous ensuite des commandes suivantes pour configurer votre IPv6 de manière non-persistante, en remplaçant « YOUR_IPV6 », « IPV6_PREFIX » et « IPV6_GATEWAY » par vos propres informations :

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Testez de nouveau votre réseau via un ping6 par exemple :

```sh
ping6 ipv6.google.com
```

Si votre serveur répond, il est probable qu'une des étapes de votre configuration initiale n'ait pas été rigoureusement suivie.

Dans tous les cas, n'hésitez pas à [contacter notre équipe de support](https://help.ovhcloud.com/csm?id=csm_get_help) pour demander à examiner vos configurations. Il sera nécessaire de fournir :

- le nom et la version du système d'exploitation que vous utilisez sur votre serveur ;
- le nom et le répertoire du fichier de configuration du réseau ;
- le contenu de ce fichier. 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.