---
title: Configurer son IP en alias
slug: network-ipaliasing
excerpt: Ajouter des IP fail-over à votre configuration
section: Réseau & IP
---

**Dernière mise à jour le 23/01/2018**

## Objectif

L'alias d'IP (IP aliasing en anglais) est une configuration spéciale du réseau de votre serveur dédié, qui vous permet d'associer plusieurs adresses IP sur une seule interface réseau.

**Ce guide vous explique comment réaliser cet ajout.**

## Prérequis

- Posséder un serveur dédié ([Serveur dédié](https://www.ovh.com/ca/fr/serveurs_dedies/){.external},[VPS](https://www.ovh.com/ca/fr/vps/){.external} ou [instance Cloud Public](https://www.ovh.com/ca/fr/cloud-public/instances/){.external}).
- Avoir une ou plusieurs [IP fail-over](https://www.ovh.com/ca/fr/serveurs-dedies/ip_failover.xml){.external}.
- Être connecté en SSH au serveur (accès racine).


## En pratique

Voici les configurations pour les distributions principales.


### Debian 6/7/8 et dérivés

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Étape 2 : modifier le fichier source

Il est désormais possible de modifier le fichier source :

```sh
editor /etc/network/interfaces
```

Vous devez ensuite ajouter une interface secondaire :

```bash
auto eth0:0 iface eth0:0 inet static address IP_FAILOVER netmask 255.255.255.255
```

Pour vous assurer que l'interface secondaire est activée quand l'interface `eth0` l'est aussi, vous devez ajouter la ligne suivante à la configuration de eth0 :

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER pre-down /sbin/ifconfig eth0:0 down
```

Si vous avez deux IP fail-over à configurer, le fichier /etc/network/interfaces doit ressembler à ceci :

```bash
auto eth0 iface eth0 inet static address SERVER\_IP netmask 255.255.255.0 broadcast xxx.xxx.xxx.255 gateway xxx.xxx.xxx.254

auto eth0:0 iface eth0:0 inet static address IP_FAILOVER1 netmask 255.255.255.255

auto eth0:1 iface eth0:1 inet static address IP_FAILOVER2 netmask 255.255.255.255

# IPFO 1
post-up /sbin/ifconfig eth0:0 IP_FAILOVER1 netmask 255.255.255.255 broadcast IP_FAILOVER1 pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 IP_FAILOVER2 netmask 255.255.255.255 broadcast IP_FAILOVER2 pre-down /sbin/ifconfig eth0:1 down
```


#### Étape 3 : redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ et Arch Linux

Sur ces distributions, le nommage des interfaces en eth0, eth1... est aboli et nous utiliserons désormais de manière plus générique le `systemd-network`.

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Étape 2 : modifier le fichier source

Il est désormais possible d'ajouter dans le fichier source votre IP fail-over comme suit :

```sh
nano /etc/systemd/network/50-default.network
```

```sh
[Address] Address=22.33.44.55/32 Label=failover1 # optional
```

Le label est optionnel, il sert à trier vos différentes IP fail-over.

#### Étape 3 : redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
systemctl restart systemd-networkd
```


### CentOS et Fedora (25 et antérieures)

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir l'utiliser en modèle :

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Étape 2 : modifier le fichier source

Il est désormais possible de modifier le fichier eth0:0 afin de remplacer l'IP :

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Remplacez tout d'abord le nom du `Device`, puis l'IP déjà existante, par l'IP fail-over que vous avez reçue :

```bash
DEVICE="eth0:0" ONBOOT="yes" BOOTPROTO="none" # For CentOS use "static" IPADDR="IP_FAILOVER" NETMASK="255.255.255.255" BROADCAST="IP_FAILOVER"
```

#### Étape 3 : Redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
ifup eth0:0
```


### Gentoo

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Étape 2 : modifier le fichier source

Il faut maintenant éditer le fichier pour y ajouter l'IP fail-over. Sous Gentoo, un alias s'ajoute directement dans l'interface eth0. Nous ne créons pas d'interface eth0:0 comme pour Red Hat ou CentOS.

> [!warning]
>
> L'IP par défaut du serveur doit rester avec config\_eth0= sur la même ligne. Ceci afin d'assurer le bon fonctionnement de certaines manipulations spécifiques à OVH.
> 

Il vous suffit donc de faire un retour à la ligne après le netmask **255.255.255.0** et d'y ajouter votre IP fail-over (SERVER\_IP doit être remplacé par l'IP principale de votre serveur).

```sh
editor /etc/conf.d/net
```

Vous devez donc ajouter ceci :

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
```

Le fichier /etc/conf.d/net doit contenir ce qui suit :


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" ) routes_eth0=( "default gw SERVER\_IP.254" )
```

Afin de pouvoir effectuer un ping sur votre IP fail-over, vous devez simplement redémarrer l'interface réseau.


#### Étape 3 : redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Étape 2 : modifier le fichier source

Ensuite, il faut éditer le fichier /etc/sysconfig/network/ifcfg-ens32 comme ceci :

```bash
IPADDR_1=IP_FAILOVER NETMASK_1=255.255.255.255 LABEL_1=ens32:0
```


### cPanel

#### Étape 1 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/ips /etc/ips.bak
```

#### Étape 2 : modifier le fichier source

Il faut éditer ensuite le fichier /etc/ips :

```sh
editor /etc/ips
```

Puis ajouter l'IP fail-over au fichier :


```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Et ensuite ajouter l'IP dans `/etc/ipaddrpool`:

```bash
IP_FAILOVER
```

#### Étape 3 : redémarrer le service

Il vous reste à redémarrer votre interface :

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Les serveurs sous Windows sont souvent en DHCP au niveau de la configuration réseau. Si vous avez déjà paramétré une IP fail-over ou passé votre configuration en IP fixe, rendez-vous directement à l'étape suivante.

Sinon, vous devez d'abord passer d'une configuration DHCP au niveau du réseau à une configuration IP fixe.

Ouvrez l'invite de commande `cmd`{.action} ou `powershell`{.action}, puis tapez la commande suivante :

```sh
ipconfig /all
```

Cela vous donnera, par exemple, ceci :

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Récupérez alors votre IPv4, le masque de sous-réseau, la passerelle par défaut et le nom de la carte réseau.

Dans notre exemple, l'IP du serveur est : **94.23.229.151**


Vous pouvez effectuer les prochaines étapes soit via des lignes de commande, soit par l'interface graphique :

#### En lignes de commande (recommandé)

Dans les commandes ci-dessous, il vous faut remplacer :

|Commande|Valeur|
|---|---|
|NETWORK_ADAPTER|Nom de la carte réseau (dans notre exemple : Local Area Connection)|
|IP_ADDRESS|Adresse IP du serveur (dans notre exemple : 94.23.229.151)|
|SUBNET_MASK|Masque de sous-réseau (dans notre exemple : 255.255.255.0)|
|GATEWAY|Passerelle par défaut (dans notre exemple : 94.23.229.254)|
|IP_ADDRESS_FAILOVER|Adresse IP fail-over que vous voulez ajouter|

> [!warning]
>
> Attention, le serveur ne sera plus accessible si vous entrez des informations erronées. Vous serez alors obligé d'effectuer les corrections en mode Winrescue ou via le KVM.
> 

Dans l'invite de commande :

1. Passer en IP fixe

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. Définir le serveur DNS

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```

3. Ajouter une IP fail-over

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

Votre IP fail-over est désormais fonctionnelle.


#### Par l'Interface graphique

1. Allez dans le menu `Démarrer`{.action} > `Panneau de gestion`{.action} > `Réseau et Internet`{.action} > `Centre de réseau et Partage`{.action} > `Modifier les paramètres de la carte`{.action} (dans le menu de gauche).
2. Faites un clic droit sur `Connexion au réseau local`{.action}.
3. Cliquez sur `Propriétés`{.action}.
4. Sélectionnez `Protocole Internet Version 4 (TCP/IPv4)`{.action}, puis cliquez sur `Propriétés`{.action}.
5. Cliquez sur `Utiliser l'adresse IP suivante`{.action} et renseignez l'IP principale de votre serveur, le masque de sous-réseau et la passerelle par défaut obtenus grâce à la commande `ipconfig`{.action} ci-dessus. (En serveur DNS préféré, renseignez 213.186.33.99.)

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Attention, le serveur ne sera plus accessible si vous entrez des informations erronées. Vous serez alors obligé d'effectuer les corrections en mode Winrescue ou via le KVM.
> 

Ensuite, cliquez sur `Avancé`{.action} (toujours dans les `Paramètres TCP/IP`{.action}.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

Dans la partie `Adresse IP`{.action}, cliquez sur `Ajouter`{.action} :

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Entrez alors votre IP fail-over et le masque de sous-réseau **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Cliquez sur `Ajouter`{.action}.

Votre IP fail-over est désormais fonctionnelle.


### FreeBSD

#### Étape 1 : déterminer l'interface

Déterminez le nom de votre interface réseau principale. Vous pouvez utiliser la commande `ifconfig`{.action} pour cette opération :

```sh
ifconfig
```

Cela vous donnera le résultat suivant :

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500 options=10b ether 00:24:8c:d7:ba:11 inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255 inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74 media: Ethernet autoselect (100baseTX ) status: active lo0: flags=8049 metric 0 mtu 16384 options=3 inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2 inet6 ::1 prefixlen 128 inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

Le nom de l'interface est donc **nfe0** dans notre exemple.


#### Étape 2 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Étape 3 : modifier le fichier source

Éditez le fichier /etc/rc.conf :

```sh
editor /etc/rc.conf
```

Ajoutez ensuite cette ligne à la fin du fichier ifconfig_INTERFACE_alias0=`inet IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER`.

Remplacez respectivement **INTERFACE** et **IP_FAILOVER** par le nom de votre interface (identifié à la première étape) et votre IP fail-over. Voici un exemple :


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Étape 4 : redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### Étape 1 : déterminer l'interface

Déterminez le nom de votre interface réseau principale. Vous pouvez utiliser la commande `ifconfig`{.action} pour cette opération :

```sh
ifconfig -a
```

Cela vous donnera le résultat suivant :

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

Le nom de l'interface est donc **e1000g0** dans notre exemple.


#### Étape 2 : créer le fichier source

Il convient avant tout de faire une copie du fichier source afin de pouvoir revenir en arrière à tout moment :

```sh
editor /etc/hostname.e1000g0:1
```

#### Étape 3 : modifier le fichier source

Dans ce fichier, renseignez ceci: **IP_FAILOVER/32 up**, où **IP_FAILOVER** correspond à votre IP fail-over. Par exemple :

```bash
188.165.171.40/32 up
```

#### Étape 4 : Redémarrer l'interface

Il vous reste à redémarrer votre interface :

```sh
svcadm restart svc:/network/physical:default
```

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.