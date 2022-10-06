---
title: 'Configurer le réseau sur ESXi sur les gammes High Grade & SCALE'
slug: esxi-network-hg-scale
excerpt: 'Découvrez comment configurer le réseau sur ESXi sur les gammes High Grade & SCALE.'
section: 'Utilisation avancée'
order: 6
---

**Dernière mise à jour le 09/05/2022**

## Objectif

Sur les gammes High Grade & SCALE, le fonctionnement des Additional IP en mode *bridged* (via des MAC virtuelles) n'est pas possible. Il est donc nécessaire de configurer les Additional IP en mode routé ou via le vRack.

> [!primary]
>
> À ce jour, la documentation ne couvre que la solution via le vRack.
>

**Découvrez comment configurer le réseau sous ESXi.**

## Prérequis

* Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses. Le bloc doit être pointé vers le vRack.
* Préparer votre plage d'adresses IP privées choisies.
* Disposer d'un [serveur dédié compatible vRack](https://www.ovhcloud.com/fr-ca/bare-metal/){.external}.
* Activer un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.
* Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

> [!warning]
>
> Ces gammes de serveurs offrent 4 cartes réseaux. Afin de profiter de l'ensemble de la bande passante, des agrégats doivent ainsi être créés. Notre documentation se base sur ces agrégats de cartes.
>
> **En revanche, ESXi ne supporte pas nativement le LACP.** 
> Aucune redondance ne sera donc disponible. La totalité de la bande-passante des cartes réseaux de votre serveur ne pourra pas non plus être exploitée.
>

> [!warning]
>
> Un défaut connu est actuellement présent dans l'interface utilisateur graphique ESXi. Aussi l'exécution de ces étapes dans cette interface entraînerait une configuration non fonctionnelle. Il est absolument nécessaire d'appliquer cette configuration en utilisant l'interface de ligne de commande en SSH.
>

### Additional IP via le vRack

Premièrement, ajoutez votre bloc public d'adresses IP au vRack. Pour ce faire, allez dans la section `Bare Metal Cloud`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et ouvrez le menu `vRack`{.action}.

Sélectionnez votre vRack dans la liste pour afficher la liste des services éligibles. Cliquez sur le bloc public d'adresses IP que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

#### Configuration d'origine

![schema esxi](images/schema_esxi_A01_2022.png){.thumbnail}

Dans cet exemple :

* les interfaces publiques sont `vmnic2` et `vmnic3`;
* les interfaces privées sont sur `vmnic0` et `vmnic1`.

Un premier vSwitch existe mais ne comporte qu'une interface `vmnic2`.

> [!primary]
>
> Vérifiez que votre configuration est semblable. Vous disposez des informations relatives aux MAC et interfaces publiques ou privées dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ou via l'API OVHcloud.
>

#### Explications

Vous devez à présent :

* créer l'agrégat sur le vSwitch public;
* créer le vSwitch pour le vRack;
* créer un groupe de ports;
* créer les VM en utilsant le nouveau groupe de ports comme interface réseau.

#### Configurer ESXi

> [!primary]
>
> Les manipulations sont à faire en mode commande (shell) et non depuis l'interface graphique (GUI) de ESXi.
>

##### **Création de l'agrégat en mode LACP sur le vSwitch qui porte les interfaces publiques**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Résultat :

![schema esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### **Création du vSwitch et de l'agrégat pour le vRack sur les interfaces privées**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Résultat :

![schema esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Configuration de la VM**

Les VM doivent avoir en interface réseau le nouveau groupe de ports `portgroupvRackvSwitch`.

![schema esxi](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Création d'un groupe de ports pour le nouveau vSwitch « vRackvSwitch »**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Configurer une adresse IP utilisable

Dans le cas du vRack, la première et les deux dernières adresses d'un bloc d'IP donné sont toujours réservées respectivement à l'adresse du réseau, sa passerelle et son adresse de *broadcast*. Cela signifie que la première adresse utilisable est la deuxième adresse du bloc, comme indiqué ci-dessous :

```sh
46.105.135.96   # Réservée : adresse du réseau
46.105.135.97   # Première adresse utilisable
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
46.105.135.109   # Dernière adresse utilisable
46.105.135.110   # Réservée : passerelle du réseau
46.105.135.111   # Réservée : adresse de broadcast réseau
```

Pour configurer la première adresse IP utilisable, vous devez éditer le fichier de configuration réseau comme indiqué ci-dessous. Dans cet exemple, utilisez un masque de sous-réseau de **255.255.255.240**.

> [!primary]
>
> Le masque de sous-réseau utilisé dans cet exemple est approprié pour notre bloc IP. Votre masque de sous-réseau peut différer en fonction de la taille de votre bloc. Lorsque vous achetez votre bloc d'IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser.
>

#### Exemple de configuration d'une VM cliente sous Debian

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
