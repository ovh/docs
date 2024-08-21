---
title: 'Configuring the network on Proxmox VE'
excerpt: 'Find out how to configure the network on Proxmox VE'
updated: 2024-07-16
---

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

**Find out about two ways of configuring an _additional IP_ on Proxmox VE: via the public interfaces and via the private interfaces (vRack).**

## Requirements

- An [OVHcloud dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An [Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/)

> [!warning]
>
> No virtual MACs should be applied to Additional IPs in the OVHcloud Control Panel.
>

## Instructions

### Additional IP in routed mode on public network interfaces <a name="additionalipmoderoute"></a>

This configuration offers a better performance in terms of bandwidth, but is less flexible. With this configuration, the Additional IP has to be attached to a dedicated server. If you have multiple Proxmox hosts and want to migrate a VM from one host to another, you must also migrate the Additional IP linked to the VM. This can be done via the OVHcloud Control Panel or the OVHcloud API (you can automate this task by creating a script).

#### Target configuration schema
> [!tabs]
> High Grade & SCALE ranges
>>![route diagram](images/schema_route2022.png){.thumbnail}<br>
>>
> ADVANCE range
>>![route diagram](images/gamme-advance-01.png){.thumbnail}<br>
>>

#### Explanations

Since Proxmox is based on the Debian distribution, we will update the network configuration file using SSH and not the web UI.

You need to:

- Have administrative access (root) via SSH.
- Create an aggregation (linux bond), only for High Grade & SCALE ranges.
- Create a bridge.
- Allow forwarding.
- Allow proxy_arp.
- Add routes.

#### Configure the hypervisor

Login using ssh on Proxmox host:

```bash
ssh root@IPv4_of_your_server
# you can also use a private IP on vRack if you have a jumphost
```

The entire configuration is done in the `/etc/network/interfaces` file:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  # Enable proxy-arp only for public bond
  up echo "1" > /proc/sys/net/ipv4/conf/bond0/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```

At this point, restart the network services or restart the server.

```bash
systemctl restart networking.service
```

When you restart `networking.service`, the bridges (for example: vmbr0) may be in a shutdown state. This is because Proxmox disconnects each VM from the bridges and does not reconnect them. To force the VMs to reconnect to the bridges, you can reboot the VMs.

#### Configuration example of a client VM on Debian

File contents `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Test and validation

Now, your VMs should be able to reach a public service over internet. In addition, your VMs can also be reached directly over the internet through the Additional IP. The bandwith available corresponds to the bandwith available on the Public interfaces of your server and will not impact the private interfaces used for the vRack. This bandwidth is shared with other VMs on the same host that are using Additional IPs and the Proxmox host for public access.

To check your public IP, from the VM:

```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Additional IP via vRack

This configuration is more flexible, you don't have to associate an Additional IP to a server but rather to a vRack. This means that if a VM wants to use an Additional IP, it can claim it directly without any additional configuration and independently of the host it is hosted on.

> [!warning]
>
> This configuration is limited to 600 Mb/s for egress traffic.
>

#### Requirements

- A public block of IP addresses in your account, with a minimum of four addresses. The block must be pointed to the vRack.
- Your chosen private IP address range.
- a [vRack compatible dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/){.external}..
- A [vRack](https://www.ovh.co.uk/solutions/vrack/){.external} service activated in your account.
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

#### Target configuration schema

![vrack diagram](images/schema_vrack2022.png){.thumbnail}

#### Explanations

You need to:

- Create an aggregate.
- Create a bridge connected to the aggregate.

First, add your public block of IP addresses to the vRack. To do so, go to the `Bare Metal Cloud`{.action} section of your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and open the `vRack`{.action} menu.

Select your vRack from the list to display the list of eligible services. Click on the IP block you want to add to the vRack and then click the `Add`{.action} button.

#### Configure a usable IP address

For vRack, the first, penultimate, and last addresses in a given IP block are always reserved for the network address, network gateway, and network *broadcast* respectively. This means that the first usable address is the second address in the block, as shown below:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

To configure the first usable IP address, you must edit the network configuration file as shown below. In this example, we use a subnet mask of **255.255.255.240**.

> [!primary]
>
> The subnet mask used in this example is appropriate for our IP block. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you will receive an email notifying you of the subnet mask to use.
>

#### Configure the hypervisor

The entire configuration is done in the `/etc/network/interfaces` file:

```bash
vi /etc/network/interfaces
```

What matters here is the `bond1` and `vmbr1` configuration:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad

#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

At this point, restart the network services or restart the server.

#### Configuration example of a client VM on Debian

Content of the file `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.









---
title: 'Configurer le réseau sur Proxmox VE'
excerpt: 'Découvrez comment configurer le réseau sur Proxmox VE'
updated: 2024-07-16
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

**Découvrez deux manières de configurer une _additional IP_ sous Proxmox VE : via les interfaces publiques et via les interfaces privées (vRack).**

## Prérequis

- Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
- Disposer d'[Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!warning]
>
> Aucune MAC virtuelle ne doit être appliquée sur les Additional IP dans l'espace client OVHcloud.
>

## En pratique   

   
### Additional IP en mode routé sur les interfaces réseau publiques <a name="additionalipmoderoute"></a>

Avec cette configuration, les adresses Additional IP doivent être attachées à un serveur dédié. Si vous disposez de plusieurs serveurs de virtualisation Proxmox et que vous souhaitez migrer une VM d'un serveur à l'autre, vous devrez également migrer l'adresse Additional IP  vers le serveur de destination, via l'espace client OVHcloud ou via l'API OVHcloud. Vous pouvez automatiser cette étape en écrivant un script qui utilise les API d'OVHcloud.  

#### Schéma de la configuration cible
> [!tabs]
> Gammes High Grade & SCALE
>>![schema route](images/schema_route2022.png){.thumbnail}<br>
>>
> Gamme ADVANCE
>>![schema route](images/gamme-advance-01.png){.thumbnail}<br>
>>

#### Explications

Proxmox est basé sur une distribution Debian. Dans ce guide, la configuration réseau sera modifiée via SSH et non via l'interface web.

Il faut :

- se connecter en SSH sur Proxmox ;
- créer un agrégat (linux bond), uniquement pour les gammes High Grade & SCALE ;
- créer un bridge ;
- autoriser le forwarding ;
- autoriser le proxy_arp ;
- ajouter les routes.

#### Configurer l'hyperviseur

Connectez-vous au serveur Proxmox via SSH :

```bash
ssh PUB_IP_DEDICATED_SERVER
# vous pouvez aussi utiliser l'IP privée configurée sur le vRack
```

> [!tabs]
> Gammes High Grade & SCALE
>>
>> ### Activation de l'ip_forward et du proxy_arp
>> 
>> Il faut activer les paramètres `sysctl` `ip_forward` et `proxy_arp`. Pour ce faire il est recommandé de modifier le fichier de configuration `sysctl.conf`.
>> 
>> Ajoutez les lignes suivantes dans `/etc/sysctl.conf`:
>> 
>> ```text
>> # Activation de l'ip_forward
>> net.ipv4.ip_forward = 1
>> 
>> # Activation du proxy_arp pour le bond public
>> net.ipv4.conf.bond0.proxy_arp = 1
>> ```
>> 
>> Ensuite, rechargez la configuration sysctl:
>> 
>> ```bash
>> sysctl -p
>> ```
>> 
>> ### Modification du fichier `/etc/network/interfaces` :
>> 
>> ```bash
>> vi /etc/network/interfaces
>> ```
>> 
>> ```bash
>> auto lo
>> iface lo inet loopback
>> 
>> # interface publique 1
>> auto ens33f0
>> iface ens33f0 inet manual
>> 	bond-master bond0
>> 
>> # interface publique 2
>> auto ens33f1
>> iface ens33f1 inet manual
>> 	bond-master bond0
>> 
>> # interface privée 1
>> auto ens35f0
>> iface ens35f0 inet manual
>> 
>> # interface privée 2
>> auto ens35f1
>> iface ens35f1 inet manual
>> 
>> # Agrégat LACP sur les interfaces publiques
>> # configuré en mode DHCP sur cet exemple
>> # Porte l'IP publique du serveur
>> auto bond0
>> iface bond0 inet static
>>  address PUB_IP_DEDICATED_SERVER/32
>> 	gateway 100.64.0.1
>> 	bond-slaves ens33f0 ens33f1
>> 	bond-mode 4
>> 	bond-miimon 100
>> 	bond-downdelay 200
>> 	bond-updelay 200
>> 	bond-lacp-rate 1
>> 	bond-xmit-hash-policy layer3+4
>> 	# Ici il faut renseigner l'adresse MAC d'une des deux interface publiques
>> 	hwaddress AB:CD:EF:12:34:56
>>     
>> #Private
>> auto bond1
>> iface bond1 inet static
>> 	bond-slaves ens35f0 ens35f1
>> 	bond-mode 4
>> 	bond-miimon 100
>> 	bond-downdelay 200
>> 	bond-updelay 200
>> 	bond-lacp-rate 1
>> 	bond-xmit-hash-policy layer3+4
>> 	# Ici il faut renseigner l'adresse MAC d'une des deux interface privées
>> 	hwaddress GH:IJ:KL:12:34:56
>>
>> auto vmbr0
>> # Configuration du bridge avec une adresse privée et l'ajout de route(s) pour y envoyer les Additional IP
>> # A.B.C.D/X  => Subnet des Additional IP affectées au serveur, cela peut être un host avec du /32
>> auto vmbr0
>> iface vmbr0 inet dhcp
>> 	# Définissez une IP privée, elle ne doit pas chevaucher vos réseaux privés existants sur le vRack par exemple
>> 	address 192.168.0.1/24 
>> 	bridge-ports bond0
>> 	bridge-stp off
>> 	bridge-fd 0
>> 	# Ajoutez une Additional IP unique
>> 	up ip route add ADDITIONAL_IP/32 dev $IFACE
>> 	# Ajoutez un bloc IP
>> 	up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE
>> 
>> # Bridge utilisé pour les réseaux privés sur le vRack 
>> # La fonctionnalité VLAN est activée
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports bond1
>>         bridge-stp off
>>         bridge-fd 0
>>         bridge-vlan-aware yes
>>         bridge-vids 2-4094
>> 
>> ```
> Gamme ADVANCE
>> Pour les serveurs de la gamme ADVANCE qui ne possèdent pas 4 interfaces réseau, il est inutile de configurer le bonding. Vous pouvez passer directement à la configuration des interfaces disponibles.
>>
>> Tout se passe dans le fichier `/etc/network/interfaces` :
>> 
>> ```bash
>> vi /etc/network/interfaces
>> ``` 
>> 
>> ```bash
>> auto lo
>> iface lo inet loopback
>> 
>> auto enp8s0f0np0
>> iface enp8s0f0np0 inet static
>>     address PUB_IP_DEDICATED_SERVER/32
>>     gateway 100.64.0.1
>> 
>> auto vmbr0
>> iface vmbr0 inet static
>>     address 192.168.0.1/24
>>     bridge-ports none
>>     bridge-stp off
>>     bridge-fd 0
>>     up ip route add ADDITIONAL_IP/32 dev $IFACE
>>     up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE  
>> ```


À ce stade, relancez les services réseau ou redémarrez le serveur :

```bash
systemctl restart networking.service
```

Lorsque vous redémarrez les services réseau, les bridges (vmbr0 par exemple) peuvent être à l'état inactif. Cela est dû au fait que Proxmox déconnecte chaque VM des bridges et ne les reconnecte pas. Pour forcer la reconnexion des VM aux bridges, vous pouvez redémarrer les VM.

#### Exemple de configuration VM cliente 

> [!tabs]
> Debian
>> Contenu du fichier `/etc/network/interfaces` :
>> 
>> ```bash
>> auto lo
>> iface lo inet loopback
>> 
>> auto eth0
>> 
>> iface eth0 inet static
>>   address 192.168.0.2/24
>> 
>> iface eth0 inet static
>>   address ADDITIONAL_IP/32
>>   # L'option "src" doit être définie afin que les paquets à destination d'Internet
>>   # aient comme source l'IP publique et non l'IP privée 192.168.0.2
>>   up ip route replace default via 192.168.0.1 dev $IFACE onlink src ADDITIONAL_IP  
>> ```
>> 
> Ubuntu
>> Contenu du fichier `/etc/netplan/01-eth0.yaml` :
>> 
>> ```yaml
>> network:
>>   version: 2
>>   ethernets:
>>     eth0:
>>       addresses:
>>         - 192.168.0.3/24
>>         - ADDITIONAL_IP/32 
>>       routes:
>>         - to: default
>>           via: 192.168.0.1
>>           # Pour que les paquets à destination d'Internet aient comme source
>>           # l'IP publique et non l'IP privée 192.168.0.3
>>           from: ADDITIONAL_IP  
>> ```
>> 


#### Test et validation

Désormais, vos machines virtuelles devraient pouvoir joindre un service public sur Internet. De plus, vos machines virtuelles peuvent également être jointes directement sur Internet via l'adresse Additional IP. La bande passante disponible correspond à la bande passante disponible sur les interfaces publiques de votre serveur et n'affectera pas les interfaces privées utilisées pour le vRack. Cette bande passante est partagée avec les autres machines virtuelles sur le même hôte qui utilisent une adresse Additional IP et l'hôte Proxmox pour l'accès public.

Pour vérifier votre IP publique, depuis la VM :

```bash
curl ifconfig.io
ADDITIONAL_IP    				# doit retourner votre additional ip
```

### Additional IP via le vRack

Cette configuration est plus souple, vous n'avez pas à associer d'Additional IP à un serveur mais au vRack. Cela signifie que si une machine virtuelle souhaite utiliser une adresse Additional IP, elle peut la réclamer directement sans aucune configuration supplémentaire et quel que soit l'hôte sur lequel elle est hébergée.


> [!warning]
>
> Il n'est pas possible d'utiliser une IP Failover (/32) directement dans le vRack. Pour utiliser une IP Failover, elle doit être [configurée sur une interface publique](#additionalipmoderoute) et ne peut pas être directement intégrée au vRack.
>

#### Prérequis

* Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses. Le bloc doit être pointé vers le vRack.
* Préparer votre plage d'adresses IP privées choisies.
* Posséder un [serveur compatible vRack](https://www.ovhcloud.com/fr/bare-metal/){.external}.
* Activer un service [vRack](https://www.ovh.com/fr/solutions/vrack/){.external}.
* Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

#### Schéma de la configuration cible

![schema vrack](images/schema_vrack2022.png){.thumbnail}

#### Explications

Il vous faut:

* créer un agrégat, uniquement pour les gammes High Grade & SCALE;
* créer un bridge raccordé à l’agrégat;

Premièrement, ajoutez votre bloc public d’adresses IP au vRack. Pour ce faire, allez dans la section `Bare Metal Cloud`{.action} de votre espace client OVHcloud et ouvrez le menu `vRack`{.action}.

Sélectionnez votre vRack dans la liste pour afficher la liste des services éligibles. Cliquez sur le bloc public d’adresses IP que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

#### Configurer une adresse IP utilisable

Dans le cas du vRack, la première, l'avant-dernière et la dernière adresses d'un bloc d'IP donné sont toujours réservées respectivement à l'adresse réseau, la passerelle réseau et au *broadcast* du réseau. Cela signifie que la première adresse utilisable est la deuxième adresse du bloc, comme indiqué ci-dessous :

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

#### Configurer l'hyperviseur

Tout se passe dans le fichier `/etc/network/interfaces` :

```bash
vi /etc/network/interfaces
```

Ce qui compte ici, c'est la configuration `bond1` et `vmbr1` :

```bash
auto lo
iface lo inet loopback

# interface publique 1
auto ens33f0
iface ens33f0 inet manual

# interface publique 2
auto ens33f1
iface ens33f1 inet manual

# interface privée 1
auto ens35f0
iface ens35f0 inet manual

# interface privée 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
        bond-miimon 100
	bond-mode 802.3ad
        post-up echo 1 > /proc/sys/net/ipv4/conf/bond0/proxy_arp
        post-up echo 1 > /proc/sys/net/ipv4/ip_forward

auto bond1
# Agrégat LACP sur les interfaces privées
# Pas d'IP dessus
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
        bond-miimon 100
	bond-mode 802.3ad

#Private

auto vmbr1
# Bridge raccordé sur l'agrégat bond1
# Pas besoin d'IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

```

A ce stade, relancez les services réseau ou redémarrez le serveur.

#### Exemple de configuration VM cliente Debian

Contenu du fichier `/etc/network/interfaces` :

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
