---
title: 'Configurer le réseau sur Proxmox VE sur les gammes High Grade, Scale & Advance'
excerpt: 'Découvrez comment configurer le réseau sur Proxmox VE'
updated: 2025-05-16
---

> [!primary]
>
> Les rubriques relatives aux serveurs de la gamme Advance s’appliquent uniquement aux serveurs Advance de troisième génération équipés de processeurs EPYC 4004 Series.
>
> Les générations de serveurs Advance plus anciennes ne reposent pas sur la même infrastructure réseau.
>

> [!warning]
>
> Depuis mai 2025, les adresses MAC virtuelles peuvent être utilisées sur les serveurs des gammes High Grade et Scale.
>
> Si vous souhaitez utiliser des adresses MAC virtuelles pour configurer le réseau sur Proxmox VE sur vos serveurs des gammes High Grade et Scale, vous pouvez vous référer au [guide sur la configuration des Additional IP en mode network bridge](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

## Objectif

**Découvrez deux manières de configurer une *Additional IP* sous Proxmox VE : via les interfaces publiques et via les interfaces privées (vRack).**

## Prérequis

- Un [serveur dédié OVHcloud](/links/bare-metal/bare-metal)
- Une ou plusieurs adresses [Additional IP](/links/network/additional-ip)
- Être connecté à votre [espace client OVHcloud](/links/manager)

> [!warning]
>
> Aucune MAC virtuelle ne doit être appliquée sur les Additional IP dans l'espace client OVHcloud.
>

## En pratique

### Additional IP en mode routé sur les interfaces réseau publiques <a name="additionalipmoderoute"></a>

Avec cette configuration, les adresses Additional IP doivent être attachées à un serveur dédié. Si vous disposez de plusieurs serveurs de virtualisation Proxmox et que vous souhaitez migrer une VM d'un serveur à l'autre, vous devrez également migrer l'adresse Additional IP vers le serveur de destination, via l'espace client OVHcloud ou via l'API OVHcloud. Vous pouvez automatiser cette étape en écrivant un script qui utilise les API d'OVHcloud.

#### Schéma de la configuration cible

> [!tabs]
> Gammes High Grade & Scale
>>
>> ![schema route](images/schema_route2022.png){.thumbnail}
>>
> Gamme Advance
>>
>> ![schema route](images/gamme-advance-01.png){.thumbnail}
>>

#### Explications

Proxmox est une distribution basée sur Debian qui s'appuie sur `ifupdown2` pour la configuration réseau. Dans ce guide, la configuration réseau sera modifiée via SSH et non via l'interface Web.

Les étapes ci-dessous décrivent successivement comment :

- se connecter en SSH sur Proxmox ;
- créer une interface d'agrégation (*bond*) (uniquement pour les gammes High Grade & Scale) ;
- créer une interface bridge connectée au *bond* ;
- autoriser le routage de paquets entre les interfaces ;
- ajouter des routes vers les Additional IP.

#### Configurer l'hyperviseur

Connectez-vous au serveur Proxmox via SSH :

```bash
ssh PUB_IP_DEDICATED_SERVER
```

##### Autoriser le routage de paquets

Activez le paramètre sysctl `ip_forward`. Pour cela, nous vous recommandons de modifier le fichier de configuration `sysctl.conf`.

Ajoutez la ligne suivante à `/etc/sysctl.conf` :

```text
# Activer ip_forward
net.ipv4.ip_forward = 1
```

Rechargez ensuite la configuration sysctl :

```bash
sysctl -p
```

##### Configurer les interfaces réseau

> [!tabs]
> Gammes High Grade & Scale
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Interfaces publiques
>> auto bond0
>> iface bond0 inet manual
>>         bond-slaves ens33f0 ens33f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr0
>> iface vmbr0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         # Définissez un réseau privé utilisé pour communiquer avec les VM,
>>         # il ne doit pas chevaucher d'autres réseaux privés configurés sur le serveur
>>         address 192.168.0.1/24
>>         bridge-ports bond0
>>         bridge-stp off
>>         bridge-fd 0
>>         # Ajoutez une seule Additional IP
>>         up ip route add ADDITIONAL_IP/32 dev $IFACE
>>         # Ajoutez un bloc IP
>>         up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE
>>
>> # Interfaces privées
>> auto bond1
>> iface bond1 inet manual
>>         bond-slaves ens35f0 ens35f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports bond1
>>         bridge-stp off
>>         bridge-fd 0
>> ```
> Gamme Advance
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Interface publique
>> auto vmbr0
>> iface vmbr0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         # Définissez un réseau privé utilisé pour communiquer avec les VM,
>>         # il ne doit pas chevaucher d'autres réseaux privés configurés sur le serveur
>>         address 192.168.0.1/24
>>         bridge-ports enp8s0f0np0
>>         bridge-stp off
>>         bridge-fd 0
>>         # Ajoutez une seule Additional IP
>>         up ip route add ADDITIONAL_IP/32 dev $IFACE
>>         # Ajoutez un bloc IP
>>         up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE
>>
>> # Interface privée
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports enp8s0f1np1
>>         bridge-stp off
>>         bridge-fd 0
>> ```

À ce stade, redémarrez les services réseau :

```bash
systemctl restart networking.service
```

> [!primary]
>
> Lorsque les services réseau sont redémarrés, les VM ne sont pas ajoutées au bridge. En effet, Proxmox déconnecte chaque VM des bridges et ne les reconnecte pas. Pour forcer la reconnexion des VM aux bridges, vous pouvez redémarrer les VM.


#### Exemple de configuration VM cliente

> [!tabs]
> Debian (ifupdown)
>> Contenu du fichier `/etc/network/interfaces` :
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> auto eth0
>>
>> iface eth0 inet static
>>         address 192.168.0.2/24
>>
>> iface eth0 inet static
>>         address ADDITIONAL_IP/32
>>         # L'option "src" doit être définie afin que les paquets à destination d'Internet
>>         # aient comme source l'IP publique et non l'IP privée 192.168.0.2
>>         up ip route replace default via 192.168.0.1 dev $IFACE onlink src ADDITIONAL_IP
>> ```
>>
> Ubuntu (Netplan)
>> Contenu du fichier `/etc/netplan/01-netcfg.yaml` :
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
>>           # Pour que les paquets à destination d'Internet aient l'IP publique comme source,
>>           # et non l'IP privée 192.168.0.3
>>           from: ADDITIONAL_IP
>> ```
>>

#### Test et validation

Dorénavant, vos machines virtuelles devraient pouvoir accéder à Internet depuis les adresses Additional IP. Elles doivent également être accessibles directement depuis Internet via leurs adresses Additional IP. La bande passante disponible correspond à la bande passante disponible sur les interfaces publiques de votre serveur et n'affectera pas les interfaces privées utilisées pour le vRack. Cette bande passante publique est partagée avec d’autres machines virtuelles sur le même hôte, ainsi qu’avec l’hôte Proxmox lui-même.

Pour vérifier votre IP publique, depuis la VM :

```bash
curl ifconfig.io
ADDITIONAL_IP # doit retourner votre Additional IP
```

> [!primary]
>
> Vous devez redémarrer les services réseau de la VM pour que la configuration soit prise en compte.

### Additional IP via le vRack

Cette configuration est plus souple car il n'est pas nécessaire d'associer une Additional IP à un serveur, mais à un vRack. Cela signifie que si vous disposez de plusieurs serveurs de virtualisation Proxmox et que vous souhaitez migrer une machine virtuelle d'un serveur à un autre, vous n'avez pas besoin d'effectuer d'action via les API OVHcloud. La seule condition est que tous les serveurs soient connectés au même vRack.

> [!warning]
>
> Cette configuration ne fonctionne qu'avec un bloc d'Additional IP.
> Il n'est pas possible d'utiliser une seule Additional IP (/32) directement dans le vRack. Pour utiliser une Additional IP, elle doit être [configurée sur une interface publique](#additionalipmoderoute) et ne peut pas être directement intégrée au vRack.
>

#### Prérequis

* Un [serveur compatible avec le vRack](/links/bare-metal/bare-metal)
* Un service [vRack](/links/network/vrack)
* Un bloc d'additional IP
* Être connecté à votre [espace client OVHcloud](/links/manager)

#### Schéma de la configuration cible

![schema vrack](images/schema_vrack2022.png){.thumbnail}

#### Explications

Proxmox est une distribution basée sur Debian qui s'appuie sur `ifupdown2` pour la configuration réseau. Dans ce guide, la modification de la configuration réseau se fera en SSH et non via l'interface Web.

Nous allons :

* créer une interface d'agrégation (*bond*) (uniquement pour les gammes High Grade & SCALE) ;
* créer une interface bridge connectée au *bond*.

Premièrement, ajoutez votre bloc d'Additional IP au vRack. Pour ce faire, allez dans la section `Bare Metal Cloud`{.action} de votre espace client OVHcloud et ouvrez le menu `vRack`{.action}.

Sélectionnez votre vRack dans la liste pour afficher la liste des services éligibles. Cliquez sur le bloc d'Additional IP que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

#### Déterminer les adresses IP assignables

Lorsqu'elles sont utilisées dans un vRack, la première, l'avant-dernière et la dernière adresses d'un bloc d'IP donné sont toujours réservées respectivement à l'adresse réseau, la passerelle réseau et au *broadcast* du réseau. Cela signifie que la première adresse assignable est la deuxième adresse du bloc, comme indiqué dans l'exemple ci-dessous pour le bloc `46.105.135.96/28` :

```sh
46.105.135.96   # Réservée : adresse réseau
46.105.135.97   # Première IP assignable
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
46.105.135.109   # Dernière IP assignable
46.105.135.110   # Réservée : passerelle réseau
46.105.135.111   # Réservée : broadcast réseau
```

> [!primary]
>
> Le masque de sous-réseau utilisé dans cet exemple est adapté à notre bloc d'Additional IP. Votre masque de sous-réseau peut différer en fonction de la taille de votre bloc. Lorsque vous achetez votre bloc d'IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser.
>

#### Configurer l'hyperviseur

Connectez-vous au serveur Proxmox en SSH :

```bash
ssh PUB_IP_DEDICATED_SERVER
```

> [!tabs]
> Gammes High Grade & Scale
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Interfaces publiques
>> auto bond0
>> iface bond0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         bond-slaves ens33f0 ens33f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> # Interfaces privées
>> auto bond1
>> iface bond1 inet manual
>>         bond-slaves ens35f0 ens35f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports bond1
>>         bridge-stp off
>>         bridge-fd 0
>> ```
>>
> Gamme Advance
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Interface publique
>> auto enp8s0f0np0
>> iface enp8s0f0np0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>
>> # Interface privée
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports enp8s0f1np1
>>         bridge-stp off
>>         bridge-fd 0
>> ```


À ce stade, redémarrez les services réseau :

```bash
systemctl restart networking.service
```

> [!primary]
>
> Lorsque les services réseau sont redémarrés, les VM ne sont pas ajoutées au bridge. En effet, Proxmox déconnecte chaque VM des bridges et ne les reconnecte pas. Pour forcer la reconnexion des VM aux bridges, vous pouvez redémarrer les VM.

#### Exemple de configuration VM cliente

La VM doit être attachée au bridge `vmbr1`.

> [!tabs]
> Debian (ifupdown)
>> Contenu du fichier `/etc/network/interfaces` :
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> auto eth0
>> iface eth0 inet static
>>         address 46.105.135.97/28
>>         gateway 46.105.135.110
>> ```
> Ubuntu (Netplan)
>> Contenu du fichier `/etc/netplan/01-netcfg.yaml` :
>>
>> ```yaml
>> network:
>>   version: 2
>>   ethernets:
>>     eth0:
>>       addresses:
>>         - 46.105.135.98/28
>>       routes:
>>         - to: default
>>           via: 46.105.135.110
>> ```

#### Test et validation

Dorénavant, vos machines virtuelles devraient pouvoir accéder à Internet depuis les adresses Additional IP. Elles doivent également être accessibles directement depuis Internet via leurs adresses Additional IP.

Pour vérifier votre IP publique, depuis la VM :

```bash
curl ifconfig.io
ADDITIONAL_IP # doit retourner votre Additional IP
```

> [!primary]
>
> Vous devez redémarrer les services réseau de la VM pour que la configuration soit prise en compte.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
