---
title: 'Mode bridge IP'
slug: network-bridging
excerpt: 'Apprenez à utiliser le mode bridge pour configurer l’accès à Internet de vos machines virtuelles'
section: 'Réseau & IP'
---

**Dernière mise à jour le 5 septembre 2018**

## Objectif

La mise en réseau en mode bridge peut être utilisée pour configurer vos machines virtuelles. Quelques modifications sont cependant nécessaires sur celles-ci pour que la configuration de votre réseau personnel fonctionne sur celui d'OVH.

**Ce guide vous montre comment utiliser le mode bridge pour configurer l'accès à Internet pour vos machines virtuelles.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/s1qDqQ0p07Q?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prérequis

* Posséder un serveur dédié avec un hyperviseur installé ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xenserver, Proxmox, par exemple).
* Posséder au moins une adresse [IP fail-over](https://www.ovh.com/fr/serveurs_dedies/ip_failover.xml) connectée au serveur.
* Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

Pour cet exemple, nous utiliserons les valeurs suivantes dans nos exemples de code. Celles-ci devront être remplacées par vos propres valeurs :

* « SERVER_IP » : l’adresse IP principale de votre serveur ;
* « FAILOVER_IP » : votre adresse IP fail-over ;
* « GATEWAY_IP » : l’adresse de votre passerelle par défaut.

### Assigner une adresse MAC virtuelle

Connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et cliquez sur le menu `Dédié`{.action}. Cliquez ensuite sur le menu `IP`{.action} dans la barre de services à gauche, puis choisissez l'adresse IP fail-over concernée dans le tableau qui s'affichera.

![Failover IP](images/virtual_mac_01.png){.thumbnail}

Cliquez sur les trois points à droite de celle-ci, puis sur `Ajouter une adresse MAC virtuelle`{.action}.

![Ajouter une MAC virtuelle (1)](images/virtual_mac_02.png){.thumbnail}

Sélectionnez « OVH » dans la liste déroulante « Type », tapez un nom dans le champ « Nom de la machine virtuelle », puis cliquez sur `Valider`{.action}.

![Ajouter une MAC virtuelle (2)](images/virtual_mac_03.png){.thumbnail}

### Déterminer l'adresse de la passerelle

Pour configurer vos machines virtuelles pour l'accès à Internet, vous devez connaître la passerelle de votre machine hôte (c’est-à-dire, votre serveur dédié). L'adresse de la passerelle est constituée des trois premiers octets de l'adresse IP principale de votre serveur, le dernier octet étant 254. Par exemple, si l’adresse IP principale de votre serveur est :

* 123.456.789.012

Votre adresse de passerelle sera alors :

* 123.456.789.254

### Appliquer la configuration

#### Systèmes d'exploitation Debian et basés sur Debian (Ubuntu, CrunchBang, SteamOS, etc.)

Ouvrez une connexion SSH à votre machine virtuelle. Une fois connecté, ouvrez le fichier de configuration réseau de la machine virtuelle, situé dans `/etc/network/interfaces`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address FAILOVER_IP
    netmask 255.255.255.255
    broadcast FAILOVER_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

Enregistrez et fermez le fichier, puis redémarrez la machine virtuelle.

#### Systèmes d'exploitation Redhat et basés sur Redhat (CentOS 6, Scientific Linux, ClearOS, etc.)

Ouvrez une connexion SSH à votre machine virtuelle. Une fois connecté, ouvrez le fichier de configuration réseau de la machine virtuelle, situé dans `/etc/network/interfaces`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Maintenant, enregistrez et fermez le fichier.

Ouvrez ensuite le fichier de routage de la machine virtuelle. Celui-ci se trouve dans `/etc/sysconfig/network-scripts/route-eth0`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Enregistrez et fermez le fichier, puis redémarrez la machine virtuelle.

#### CentOS 7

> [!primary]
> 
> Pour CentOS 7, le nom de la carte réseau varie en fonction des options d'installation. Vous devrez vérifier le nom de l'adaptateur et l'utiliser pour configurer votre machine virtuelle. Utilisez la commande `ipaddr`{.action} pour trouver le nom de votre interface.
> 

Ouvrez une connexion SSH à votre machine virtuelle. Une fois connecté, ouvrez le fichier de configuration réseau de la machine virtuelle, qui se trouve dans `/etc/sysconfig/network-scripts/ifcfg-(nom de l'interface)`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
DEVICE=(insert interface Name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Enregistrez et fermez le fichier.

Ouvrez ensuite le fichier de routage de la machine virtuelle. Celui-ci se trouve dans `/etc/sysconfig/network-scripts/route-(nom-de l’interface)`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
GATEWAY_IP - 255.255.255.255 (insérez le nom de l'interface)
NETWORK_GW_VM - 255.255.255.0 (insérez le nom de l'interface)
default GATEWAY_IP
```

#### OpenSUSE

Ouvrez une connexion SSH à votre machine virtuelle. Une fois connecté, ouvrez le fichier de configuration réseau de la machine virtuelle, qui se trouve dans `/etc/sysconfig/network/ifcfg-ens32`. Si le fichier n'existe pas, vous devrez le créer. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
DEVICE=ens32
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=FAILOVER_IP
NETMASK=255.255.255.255
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
```

Enregistrez et fermez le fichier.

Ouvrez ensuite le fichier de routage de la machine virtuelle. Celui-ci se trouve dans `/etc/sysconfig/network-scripts/route-ens32`. Si le fichier n'existe pas, vous devrez le créer. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
GATEWAY_IP - 255.255.255.255 ens32
NETWORK_GW_VM - 255.255.255.0 ens32
default GATEWAY_IP
```

Ouvrez ensuite le fichier de routage de la machine virtuelle. Celui-ci se trouve dans `/etc/sysconfig/network/resolv.conf`. Si le fichier n'existe pas, vous devrez le créer. Modifiez le fichier pour qu'il reflète la configuration ci-dessous :

```bash
nameserver 213.186.33.99 # OVH DNS Server
```

Enregistrez et fermez le fichier, puis redémarrez la machine virtuelle.

#### Arch Linux

Dans un premier temps, établissez une connexion SSH à votre machine virtuelle et installez **Netctl**, un outil de ligne de commande utilisé pour configurer les interfaces réseau :

```ssh
# apt-get netctl
```

Une fois Netctl installé, exécutez la commande suivante pour déterminer le nom de l'interface réseau de votre machine virtuelle :

```
# ip link

1: eno3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether ac:1f:6b:67:ce:a4 brd ff:ff:ff:ff:ff:ff
```

Dans l'extrait ci-dessus, nous pouvons voir que le nom de notre interface réseau est **eno3**. Nous vous rappelons qu'il s'agit ici d'un exemple : votre interface possédera probablement un nom différent.

Copiez ensuite le contenu du fichier de configuration statique de Netctl et créez un nouveau fichier portant le nom de votre interface réseau :

```ssh
# cp /etc/netctl/examples/ethernet-static /etc/netctl/eno3
```

Modifiez ensuite le fichier que vous venez de créer, en substituant les valeurs correspondantes à l'adresse IP fail-over, au masque de sous-réseau, à l'adresse de la passerelle et à l'adresse DNS. **Concernant le masque de sous-réseau, veuillez utiliser l'adresse qui vous a été envoyée par e-mail lorsque vous avez acheté l'adresse IP fail-over.**

```sh
Description='A basic static ethernet connection'
Interface=eno3
Connection=ethernet
IP=FAILOVER_IP
Address=('255.255.255.255')
Gateway=('GATEWAY_IP')
DNS=('213.186.33.99')
```

Activez ensuite la carte réseau pour qu'elle démarre automatiquement à chaque redémarrage en utilisant la commande suivante :

```sh
# netctl enable eno3
```

Maintenant, lancez le profil réseau, comme indiqué ci-dessous :

```ssh
# netctl start eno3
```

Ensuite, arrêtez et désactivez le service DHCP :

```ssh
# systemctl stop dhcpcd
# systemctl disable dhcpcd
```

Pour terminer, redémarrez votre système pour que les modifications puissent prendre effet.

#### FreeBSD 8.0

Ouvrez une connexion SSH à votre machine virtuelle. Une fois connecté, ouvrez le fichier de configuration réseau de la machine virtuelle, situé dans `/etc/rc.conf`. Modifiez le fichier pour qu'il reflète la configuration ci-dessous. N'oubliez pas de remplacer nos variables par vos propres valeurs.

```bash
ifconfig_em0="inet FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 FAILOVER_IP"
route_net2="default GATEWAY_IP"
```

Enregistrez et fermez le fichier, puis redémarrez la machine virtuelle.

#### Ubuntu 18.04

En premier lieu, établissez une connexion SSH à votre machine virtuelle et ouvrez le fichier de configuration réseau situé dans `/etc/netplan/` à l'aide de la commande suivante. À des fins de démonstration, notre fichier s'appelle `50-cloud-init.yaml`.

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Une fois le fichier ouvert pour modification, modifiez-le avec le code suivant :

```sh
network:
    ethernets:
        votre-interface-réseau:
            addresses:
            - votre-ip-failover-ip/32
            nameservers:
                addresses:
                - 213.186.33.99
                search: []
            optional: true
            routes:
                - to: 0.0.0.0/0
                  via: votre-ip-passerelle
                  on-link: true
    Version : 2
```

Une fois les modifications effectuées, enregistrez et fermez le fichier, puis exécutez la commande suivante :

```sh
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new configuration

Changes will revert in 120 seconds
Configuration accepted.
```

#### Windows Server 2012/Hyper-V

Avant de configurer votre machine virtuelle, vous devrez créer un commutateur virtuel.

À partir de la ligne de commande de votre serveur dédié, exécutez `IPconfig / ALL`{.action}, puis notez le nom de la carte réseau contenant l'adresse IP principale du serveur.

Dans le manager Hyper-V, créez un nouveau commutateur virtuel et définissez le type de connexion sur `External`{.action}.

Sélectionnez l'adaptateur avec l'adresse IP du serveur, puis cochez « Allow management operating system to share this network adapter ».

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Cette étape n'est nécessaire qu'une seule fois pour un serveur Hyper-V. Pour toutes les machines virtuelles, un commutateur virtuel est requis pour connecter les cartes réseau virtuelles de la machine à la carte physique du serveur.
> 

Sélectionnez ensuite la machine virtuelle à laquelle vous souhaitez ajouter l'IP fail-over. Utilisez le manager Hyper-V pour modifier les paramètres de la machine virtuelle, puis fermez-le.

Ensuite, déployez la carte réseau et cliquez sur `Advanced Features`{.action}, définissez l'adresse MAC sur `static`{.action} et entrez l'adresse MAC virtuelle pour l'adresse IP fail-over. Une fois que vous avez entré ces paramètres, appuyez sur `OK`{.action} pour appliquer les modifications.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Démarrez ensuite la machine virtuelle et connectez-vous en tant qu'administrateur. Accédez ensuite à `Control Panel`{.action}, puis `Network and Sharing Center`{.action}. Cliquez sur le lien `Connections : Ethernet`{.action}, puis cliquez sur le bouton `Properties`{.action} pour afficher les propriétés Ethernet.

Sélectionnez `Internet Protocol Version 4 (TCP/IPv4)`{.action}, puis cliquez sur le bouton `Properties`{.action} pour afficher les propriétés IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Dans la fenêtre de propriétés de l’IPv4, sélectionnez « Use the following IP address ». Entrez l'adresse IP fail-over dans le champ d'adresse IP et entrez `255.255.255.255` dans le masque de sous-réseau.

Ensuite, entrez l’adresse IP de la passerelle de votre serveur dans la passerelle par défaut (par exemple, l’IP de votre serveur se terminant par 254) et entrez `213.186.33.99` dans le champ « Preferred DNS Server ».

Cliquez sur `OK`{.action} et ignorez le message d'avertissement relatif à l'adresse IP de la passerelle et à l'adresse IP attribuée qui ne figurent pas dans le même sous-réseau.

Finalement, redémarrez le serveur. La machine virtuelle doit alors être connectée à Internet à l'aide de l'adresse IP fail-over.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
