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

Sur les gammes High Grade & SCALE, le fonctionnement des Additional IP en mode bridged (via des MAC Virtuelles) n'est pas possible. Il en est de même pour les nouveaux serveurs de dernière génération livrés avec les cpu AMD Epyc 4K et 8K. Il est donc nécessaire de configurer les Additional IP en mode routé ou via le vRack.


> [!primary]
>
> D'ici la fin de l'année 2024, cette fonctionnalité sera livrée pour l'ensemble des gammes High Grade, SCALE & ADVANCE.
>

**Découvrez comment configurer le réseau sous Proxmox VE.**

## Prérequis

- Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
- Disposer d'[Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!warning]
>
> Aucune MAC virtuelle ne doit être appliquée sur les Additional IP dans l'espace client OVHcloud.
>

## En pratique

> [!primary]
>
> Sur ces gammes de serveurs, il y a 4 cartes réseaux. Les deux premières pour le public, les deux dernières pour le privé. Pour profiter de l'ensemble de la bande passante, des agrégats doivent être créés.
>

### Additional IP en mode routé sur les interfaces réseau publiques <a name="additionalipmoderoute"></a>

Cette configuration offre de meilleures performances en termes de bande passante mais s'avère moins flexible. Avec cette configuration, les adresses Additional IP doivent être attachées à un serveur dédié. Si vous disposez de plusieurs serveurs de virtualisation Proxmox et que vous souhaitez migrer une VM d'un serveur à l'autre, vous devrez également migrer l'adresse Additional IP  vers le serveur de destination, via l'espace client OVHcloud ou via l'API OVHcloud. Vous pouvez automatiser cette étape en écrivant un script qui utilise les API d'OVHcloud.  

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
>> Il faut activer `ip_forward` et `proxy_arp`. Pour ce faire il est recommandé de modifier le fichier de configuration `sysctl` pour une gestion plus propre et pérenne.
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
>>     up ip route add ADDITIONAL_IP/28 dev $IFACE  
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
123.456.789.96   # Réservée : adresse réseau
123.456.789.97   # Première IP utilisable
123.456.789.98
123.456.789.99
123.456.789.100
123.456.789.101
123.456.789.102
123.456.789.103
123.456.789.104
123.456.789.105
123.456.789.106
123.456.789.107
123.456.789.108
123.456.789.109   # Dernière IP utilisable
123.456.789.110   # Réservée : passerelle réseau
123.456.789.111   # Réservée : broadcast réseau
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
