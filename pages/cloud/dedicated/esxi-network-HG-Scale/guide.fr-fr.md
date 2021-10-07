---
title: 'Configurer le réseaux sur ESXi sur les gammes High Grade & SCALE'
slug: esxi-network-HG-Scale
excerpt: 'Découvrez comment configurer le réseaux sur ESXi sur les gammes High Grade & SCALE.'
section: 'Utilisation avancée'
order: 1
---

**Dernière mise à jour le 07/10/2021**

## Objectif

Sur les gammes HighGrade & SCALE, le fonctionnement des IP Failover en mode bridgé (via des MAC Virtuelles) n'est pas possible. L'objectif est de configurer les IP failover en mode routé ou via le vRack.

> [!primary]
>
> A ce jour, la documentation ne couvre que la solution via le vRack.
>

**Découvrez comment configurer le réseau sous ESXi.**


## Prérequis

* Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
* Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
* Disposer d'IP FailOver


## En pratique

> [!primary]
>
> Sur ces gammes de serveurs, il y a 4 cartes réseaux. Deux pour le public, deux pour le privé. Pour profiter de l'ensemble de la bande passante, des agrégat doivent être crée.
>


### IP FailOver via le vRack

#### Configuration d'origine

![schema esxi](images/schema_esxi_A01_2022.png){.thumbnail}

Sur cet exemple, les interfaces:
- publiques sont vmnic2 et vmnic3
- privées sont sur vmnic0 et vmnic1

Un premier vSwitch existe mais ne comporte qu'une interface "vnic2".

> [!primary]
>
> Vérifier que dans votre cas c'est pareil avec les informations sur quelles MAC sont Publique ou Privée dans le manager ou via l'API.
>

#### Explications
Il faut:
- Créer l'agrégat sur le vSwitch publique
- Créer le vSwitch pour le vRack
- Créer un groupe de port
- créer les VM en utilsant le nouveau groupe de port comme interface réseau

#### Configuration ESXi

> [!primary]
>
> En mode commande
>

##### Création de l'agrégat en mode LACP sur le vSwitch qui porte les interfaces publiques:

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Résultat:

![schema esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### Création du vSwitch et de l'agrégat pour le vRack sur les interfaces privées :

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Résultat:

![schema esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### Création d'un groupe de ports pour le nouveau vSwitch "vRackvSwitch"
```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```
##### Configuration de la VM

Les VM doivent avoir en interface réseau le nouveau groupe de ports "portgroupvRackvSwitch"

![schema esxi](images/schema_esxi_A04_2022.png){.thumbnail}


#### Configurer une adresse IP utilisable

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
46.105.135.110   # Réservée : passerelle réseau Reserved: Network gateway
46.105.135.111   # Réservée : broadcast réseau
```

Pour configurer la première adresse IP utilisable, vous devez éditer le fichier de configuration réseau comme indiqué ci-dessous. Dans cet exemple, utilisez un masque de sous-réseau de **255.255.255.240**.

> [!primary]
>
> Le masque de sous-réseau utilisé dans cet exemple est approprié pour notre bloc IP. Votre masque de sous-réseau peut différer en fonction de la taille de votre bloc. Lorsque vous achetez votre bloc d'IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser.
>


#### Exemple Configuration VM Cliente Debian

Contenu du fichier /etc/network/interfaces

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
