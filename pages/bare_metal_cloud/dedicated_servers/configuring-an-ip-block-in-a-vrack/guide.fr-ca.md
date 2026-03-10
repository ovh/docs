---
title: "Configurer un bloc Additional IP dans le vRack"
excerpt: "Découvrez comment configurer un bloc d'adresses IP publiques dans le vRack"
updated: 2026-03-11
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

En plus de l'adressage IP privé, le [vRack](/links/network/vrack) vous permet de diriger le trafic IP public via le port vRack de votre serveur à l'aide d'un bloc d'adresses IP publiques.

**Ce guide vous explique comment configurer un bloc d'adresses IP publiques à utiliser avec le vRack.**

> [!primary]
>
> Le vRack prend en charge le routage public IPv4 et IPv6 avec des blocs d'adresses Additional IP. Retrouvez les instructions sur la configuration de blocs IPv6 dans ce guide : « [Configurer un bloc Additional IPv6 dans un vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack) ».
>

> [!primary]
>
> Cet article détaille la configuration d'adresses Additional IP sur un réseau vRack. Si vous cherchez des instructions sur la configuration d'adresses Additional IP avec une adresse IP principale (sur l'interface réseau publique), consultez les articles suivants :
>
> - IPv4:
>     - [Configurer une adresse IP en alias sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurer une adresse IP en alias sur un serveur VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurer IPv6 sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurer IPv6 sur un serveur VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurer IPv6 sur une instance Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Prérequis

- Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses.
- Préparer votre plage d'adresses IP privées choisies.
- Posséder un [serveur compatible vRack](/links/bare-metal/bare-metal).
- Activer un service [vRack](/links/network/vrack).
- Être connecté à l'[espace client OVHcloud](/links/manager).

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d'informations.

## En pratique

> [!primary]
>
> À titre d'exemple, nous utiliserons un bloc IP de 46.105.135.96/28 et `eth1` pour l'interface réseau secondaire, qui est dédiée au vRack.
>
> À titre d'exemple également, le fichier de configuration réseau auquel nous faisons référence se trouve dans `/etc/network/interfaces`. En fonction du système d'exploitation utilisé, le fichier équivalent peut être situé ailleurs. Le contenu du fichier peut également être différent. En cas de difficultés, n'hésitez pas à vous référer à la documentation officielle de votre distribution.

### Ajouter le bloc IP au vRack

> [!warning]
>
> Lorsqu'un bloc IP est ajouté au vRack, il n'est plus rattaché à un serveur physique.
>
> Cette configuration permet de configurer des IP d'un même bloc sur plusieurs serveurs, à condition que ces serveurs soient tous dans le même vRack que le bloc IP. Le bloc IP doit avoir au moins 2 adresses IPs utilisables ou plus pour que cela soit possible.
>

Dans votre [espace client OVHcloud](/links/manager), allez dans la section `Network`{.action}. Ensuite, ouvrez le menu `vRack`{.action}.

Sélectionnez votre vRack dans la liste pour afficher la liste des services éligibles. Cliquez sur le bloc IP que vous souhaitez ajouter au vRack et cliquez sur le bouton `Ajouter`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Gérer la bande passante des IP publiques sur le vRack

Par défaut, les blocs d'Additional IP routés via un vRack bénéficient d'une bande passante publique standard de 5 Gbps en Europe et en Amérique du Nord, ou de 100 Mbps dans les régions APAC. Pour plus de détails sur les offres disponibles, consultez les options de routage public sur notre [page produit vRack](/links/network/vrack).

Pour répondre à la montée en charge des infrastructures et aux besoins des services à fort trafic, OVHcloud propose maintenant à ses clients des options de bande passante payantes. Notez que ces options s'appliquent **par vRack et par région**. Comme les Additional IP sont liées à une région précise, toute modification de la bande passante impactera l'ensemble des adresses (IPv4 et IPv6) routées vers ce vRack dans la région concernée.

/// details | Lors de la commande d'une Additional IP

#### Choisir la bande passante publique lors de la commande

Vous pouvez modifier la bande passante par défaut au moment de commander un nouveau bloc d'Additional IP, dès lors qu'un réseau vRack est sélectionné comme service backend.

Pour commander un nouveau bloc d'Additional IP :

- Connectez-vous à [l'espace client OVHcloud](/links/manager).
- Dans la barre latérale gauche, accédez à la section `Network`{.action}.
- Sélectionnez `Adresses IP Publiques`{.action}.
- Cliquez sur le bouton `Commander des IPs`{.action} en haut de la page.
- Choisissez la version de l'IP, puis le vRack auquel l'Additional IP sera rattachée.
- Sélectionnez la région de votre Additional IP.
- Choisissez la bande passante publique à appliquer à votre vRack pour cette région.
- Configurez les autres options selon vos besoins, puis finalisez la commande.

///

/// details | Depuis la page de gestion du vRack

#### Modifier la bande passante publique depuis la page de gestion

Pour les blocs d'Additional IP déjà rattachés à un vRack, la bande passante se gère directement depuis la page de configuration du service.

Pour accéder à l'interface de gestion :

- Dans la barre latérale gauche du Tableau de bord, ouvrez `Network`{.action}.
- Sélectionnez `Réseau Privé vRack`{.action}.
- Dans la colonne « Adresse IP publique et bande passante », cliquez sur le bouton `Gérer`{.action} correspondant au vRack souhaité.

L'interface de gestion se divise en deux onglets :
- **Tous les services attachés** : Redirige actuellement vers la page de gestion classique du vRack. Prochainement, cet onglet listera de façon optimisée tous les produits (serveurs, projets Cloud, etc.) liés au vRack.
- **Connectivité IP publique** : Permet de gérer les options de routage public de votre vRack, y compris la bande passante.

Pour modifier la bande passante :

- Allez dans l'onglet `Connectivité IP publique`{.action}.
- L'interface affiche des fenêtres de gestion par région (ex : `eu-west-par`) associées au vRack, avec la liste des IP rattachées.
- Dans l'encadré de la région concernée, cliquez sur `Modifier la bande passante`{.action}.
- Sélectionnez l'option souhaitée dans le panneau de droite, puis cliquez sur `Commander`{.action} pour valider.
- Une fois le paiement effectué, la nouvelle bande passante sera effective sur votre vRack dans la région choisie après quelques minutes.

> [!primary]
>
> Le premier mois souscrit est facturé au prorata des jours restants. Le tarif complet s'appliquera lors du cycle de facturation suivant.
>

L'augmentation de bande passante s'appliquera à toutes les adresses IP de cette région pour le vRack sélectionné.

///

### Configurer une adresse IP utilisable

Dans le cas du vRack, la première, l'avant-dernière et la dernière adresse d'un bloc d'IP donné sont toujours réservées respectivement à l'adresse réseau, la passerelle réseau et au *broadcast* du réseau. Cela signifie que la première adresse utilisable est la deuxième adresse du bloc, comme indiqué ci-dessous :

```sh
46.105.135.96   # Réservée : adresse réseau
46.105.135.97   # Première IP utilisable
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109   # Dernière IP utilisable
46.105.135.110   # Réservée : passerelle réseau
46.105.135.111   # Réservée : broadcast réseau
```

Pour configurer la première adresse IP utilisable, vous devez éditer le fichier de configuration réseau comme indiqué ci-dessous. Dans cet exemple, utilisez un masque de sous-réseau de **255.255.255.240**.

> [!primary]
>
> Le masque de sous-réseau utilisé dans cet exemple est approprié pour notre bloc IP. Votre masque de sous-réseau peut différer en fonction de la taille de votre bloc. Lorsque vous achetez votre bloc d'IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser.
>

### Debian/Ubuntu

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Créer une nouvelle table de routage IP

Avant tout, il convient de télécharger et installer « iproute2 », un paquet qui permettra de configurer manuellement le routage IP sur le serveur.

Ouvrez ensuite une connexion SSH à votre serveur et utilisez la commande suivante pour télécharger et installer le paquet :

```sh
apt-get install iproute2
```

Ensuite, vous devez créer une nouvelle route IP pour le vRack. Pour cela, il convient d'ajouter une nouvelle règle de trafic en modifiant le fichier comme indiqué ci-dessous :

```sh
/etc/iproute2/rt_tables

#
# reserved values
#
255	local
254	main
253	default
0	unspec
#
# local
#
#1	inr.ruhep
1 vrack
```

### Modifier le fichier de configuration réseau

> [!primary]
>
> À titre d'exemple, le fichier de configuration réseau auquel nous faisons référence se trouve dans /etc/network/interfaces. En fonction du système d'exploitation utilisé, le fichier équivalent peut être situé ailleurs.
>

Pour finir, il reste à modifier le fichier de configuration réseau pour prendre en compte la nouvelle règle de trafic et acheminer le trafic vRack via l'adresse de passerelle réseau **46.105.135.110**.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Redémarrez le serveur pour appliquer les modifications effectuées. Vous pouvez également activer simplement la nouvelle interface réseau :

```sh
ip link set eth1 up
```

### CentOS 6/7

#### Créer le fichier pour l'interface réseau secondaire

Tout d'abord, copiez et utilisez la configuration de l'interface réseau principale, puis adaptez-la selon vos besoins :

```sh
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
```

Accédez ensuite au nouveau fichier :

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
```

Définissez les paramètres IP :

```sh
# Created by cloud-init on instance boot automatically, do not edit.
#
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.240
IPADDR=46.105.135.97
ARP=yes
```

### Créer une nouvelle table de routage IP

Ensuite, créez une nouvelle route IP pour le vRack. Ajoutez une nouvelle règle de trafic en modifiant le fichier comme indiqué ci-dessous :

```sh
/etc/iproute2/rt_tables

#
# reserved values
#
255	local
254	main
253	default
0	unspec
#
# local
#
#1	inr.ruhep
1 vrack
```

Créez ensuite le fichier nécessaire pour appliquer les nouvelles règles :

```sh
nano /etc/sysconfig/network-scripts/rule-eth1
```

Collez le contenu suivant (pensez à remplacer les variables par vos propres valeurs) :

```sh
from 46.105.135.96/28 table vrack
to 46.105.135.96/28 table vrack
```

### Modifier le fichier de configuration réseau

Pour finir, modifiez le fichier de configuration réseau pour prendre en compte la nouvelle règle de trafic et acheminer le trafic vRack via l'adresse de passerelle réseau **46.105.135.110**.

Modifiez le fichier suivant afin d'ajouter des routes persistantes et statiques :

```sh
nano /etc/sysconfig/network-scripts/route-eth1
```

Collez le contenu suivant (pensez à remplacer les variables par vos propres valeurs) :

```sh
46.105.135.96/28 dev eth1 table vrack
default via 46.105.135.110 dev eth1 table vrack
```

Redémarrez le serveur pour appliquer les modifications effectuées. Vous pouvez également activer simplement la nouvelle interface réseau :

```sh
ip link set eth1 up
```

### Windows Server 2012/2016

#### Étape 1 : Vérifier et configurer l'interface réseau secondaire

Tout d'abord, accédez aux informations de la nouvelle interface réseau :

![check the second network interface](images/win-ip-vrack-1.png){.thumbnail}

Vérifiez ensuite les propriétés :

![properties of the second network interface](images/win-ip-vrack-2.png){.thumbnail}

![properties of the second network interface](images/win-ip-vrack-3.png){.thumbnail}

#### Étape 2 : Configuration IP

Sélectionnez l'option `Utiliser l'adresse IP suivante` :

![ip configuration](images/win-ip-vrack-4.png){.thumbnail}

Définissez ensuite les informations IP :

![ip configuration](images/win-ip-vrack-5b.png){.thumbnail}

#### Étape 3 : Redémarrage de l'interface réseau

Commencez par désactiver l'interface :

![disabling network](images/win-ip-vrack-6.png){.thumbnail}

Puis activez-la :

![enabling network](images/win-ip-vrack-7.png){.thumbnail}

### Résolution des problèmes

Si vous ne parvenez pas à établir une connexion depuis votre VM ou serveur vers le réseau privé, ouvrez un ticket depuis votre espace client en fournissant les informations suivantes :

* IP source et IP de destination
* Résultat de la commande `ifconfig -a` ou `ipconfig /all` sur les deux serveurs ou VMs (configuration de l'interface réseau)
* Résultat du ping dans les deux sens
* Résultat de la commande `arp -a`
* Table de routage

Joignez les résultats des commandes ci-dessus à votre ticket.

## Aller plus loin

[Configurer plusieurs serveurs dédiés dans le vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Créer plusieurs réseaux locaux virtuels dans un vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurer un vRack entre une instance Public Cloud et un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Échangez avec notre [communauté d'utilisateurs](/links/community).
