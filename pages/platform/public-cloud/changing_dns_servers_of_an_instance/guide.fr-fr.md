---
title: 'Modifier les serveurs DNS d’une instance'
slug: modifier-les-serveurs-dns-dune-instance
excerpt: 'Modifier les serveurs DNS par défaut d’une instance Public Cloud'
legacy_guide_number: 1985
section: 'Base de connaissances'
---

**Dernière mise à jour le 18/11/2019**

## Objectif

Le serveur DNS configuré sur les instances sera par défaut celui d'OVH ( 213.186.33.99 ). Il est possible que vous souhaitiez modifier celui-ci ou bien que vous souhaitiez en ajouter un autre. Cependant, les serveurs DNS sont configurés automatiquement grâce au serveur DHCP et vous ne serez pas en mesure de les modifier simplement en éditant le fichier resolv.conf.

Ce guide vous explique la procédure à suivre afin de modifier la configuration DHCP de votre instance. Vous pourrez alors  modifier ensuite les serveurs DNS de vos instances.


## Prérequis
- Disposer d'une instance Public Cloud

## En pratique

### Sur Debian / Ubuntu

- Connectez-vous sur l'instance en SSH. Vous pouvez consulter le guide [Se connecter à une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiere-connexion/){.external}.
- Passez root. Vous pouvez consulter le guide [Passer root et définir un mot de passe](https://docs.ovh.com/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/){.external}.

> [!success]
>
> Il est possible de lire le fichier  resolv.conf  afin de vérifer quel est le serveur DNS configuré :
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Éditez le fichier /etc/dhcp/dhclient.conf avec les serveurs DNS désirés.
Deux choix s'offrent à vous concernant cette configuration :

    - Vous souhaitez ajouter un serveur DNS en plus de celui que nous fournissons par défaut :
  
    ```
    supersede domain-name-servers 127.0.0.1;
    ```
    
    - Vous souhaitez ajouter un serveur DNS afin de remplacer celui que nous fournissons par défaut :
    
    ```
    prepend domain-name-servers 127.0.0.1;
    ```
 
- Vérifiez que la configuration est bien appliquée (cela peut prendre plusieurs minutes) :

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### Sur CentOS / Fedora

- Connectez-vous sur l'instance en SSH. Vous pouvez consulter le guide [Se connecter à une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiere-connexion/){.external}.
- Passez root. Vous pouvez consulter le guide [Passer root et définir un mot de passe](https://docs.ovh.com/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/){.external}.
- Vérifiez la configuration actuelle via la commande nmcli :

```
nmcli
 
eth0: connecté to System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-géré
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```
- Retrouvez le nom de votre interface publique :

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Désactivez la modification des DNS automatiques et renseignez les DNS désirés :

```
nmcli con mod "Nom de votre interface" ipv4.ignore-auto-dns yes
nmcli con mod "Nom de votre interface" ipv4.dns "127.0.0.1 213.186.33.99"
```
- Appliquez la configuration :

```
nmcli con down "Nom de votre interface" && nmcli con up "Nom de votre interface"
```
- Vérifiez que la configuration est bien appliquée :

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### Sur Windows

- Connectez-vous via le bureau à distance ou la console VNC. Vous pouvez consulter le guide [Se connecter à une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiere-connexion/){.external}.

- Rendez-vous dans la configuration Network

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Rendez-vous ensuite dans la configuration IPv4 de votre carte réseau publique

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Ajoutez les serveurs DNS que vous souhaitez utiliser :

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
Dans un powershell, la commande nslookup vous permet de vérifier quel est le serveur DNS utilisé par défaut.
>

## Aller plus loin

[Se connecter à une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiere-connexion/){.external}.

[Passer root et définir un mot de passe](https://docs.ovh.com/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/){.external}.

[Modifier le hostname d’une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/modifier-le-hostname-dune-instance/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
