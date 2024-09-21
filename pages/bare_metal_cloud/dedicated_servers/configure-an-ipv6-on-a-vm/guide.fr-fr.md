---
title: "Configurer une IPv6 sur une machine virtuelle"
excerpt: "Découvrez comment configurer une adresse IPv6 sur une machine virtuelle"
updated: 2024-09-11
---

## Objectif

Internet Protocol version 6 (IPv6) est le successeur d'Internet Protocol version 4 (IPv4). Mis en place pour résoudre l’épuisement des adresses IPv4, IPv6 utilise des adresses de 128 bits au lieu d’adresses de 32 bits. Les serveurs des gammes High Grade, Scale et Advance (depuis juillet 2024) sont livrés avec un bloc /56 IPv6. Les anciens serveurs sont quant à eux livrés avec un bloc/64 IPv6. Un serveur livré avec un bloc /56 IPv6 permet de disposer jusqu'à 18 quintillions d’adresses IP.

Notre infrastructure vous permet également de configurer l'IPv6 sur vos machines virtuelles.

**Ce guide vous explique comment configurer des adresses IPv6 sur votre machine virtuelle.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](links/directory) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](/links/bare-metal/bare-metal) disposant d'un bloc IPv6 (/64) ou (/56) dans votre compte OVHcloud.
- Avoir installez un système d'exploitation permettant la virtualisation (Proxmox, ESXi, Hyper-V etc..).
- Avoir toutes les informations relatives à votre IPv6 (préfix, passerelle...).
- Avoir des connaissances de base en SSH et en réseau.

## En pratique

Les sections suivantes contiennent les configurations des distributions que nous proposons actuellement et les distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou via une session de connexion GUI (RDP pour un serveur Windows).

Sur les serveurs dédiés, la première IPv6 est déclarée comme 2607:5300:xxxx:xxxx::/64. Par exemple, si nous avons attribué à votre serveur la plage IPv6 : `2607:5300:abcd:efgh::/64`, la première IPv6 de votre serveur est : `2607:5300:abcd:efgh::/64`.

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit d'une adresse IPv6 du bloc IPv6 attribué à votre serveur|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6, généralement de 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Il s'agit de la passerelle (ou *gateway*) de votre bloc IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff ou fe80::1|

Dans nos exemples, nous utiliserons l'éditeur de texte `nano`. Vous pouvez bien entendu utiliser l'éditeur de texte de votre choix.

### Passerelle par défaut (Gateway)

La première étape consiste à récupérer la passerelle (gateway) IPv6 assignée à votre serveur. Deux méthodes sont possibles:

- Obtenir les informations réseau via l'espace client
- Obtenir les informations réseau via les API

#### Via votre espace client

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur dédiés`{.action}.

La passerelle IPv6 assignée à votre serveur est affichée dans la section `Réseau` de l'onglet `Informations générales`{.action}.

![configureipv6](images/ipv6_information.png){.thumbnail}

#### Via les API OVHcloud 

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
> Please note that we no longer offer Vmware EXSi as an operating system, as a result, the configuration examples in this guide will focus on Proxmox and Windows Hyper-V.
>

### Configuration sur Proxmox 

#### Pour une machine virtuelle

Before you begin, make sure you have uploaded the ISO image to use for the installation of the VM.

The first step is to create the virtual machine in Proxmox.

Once you are connected to the Proxmox dashboard, click on your server's name in the left-corner, then on `Create VM`{.action}.

![create vm](images/create_vm_proxmox.png){.thumbnail}

**Create: Virtual Machine**

> [!tabs]
> **General**
>>
>> **Name:** Enter a name for your VM.<br><br>
>>![create vm](images/create-vm-name.png){.thumbnail}<br>
>> 
> **OS**
>> Click on the drop down arrow next to `ISO image` to select the image of your choice. In our exmaple, we are using ubuntu 24.04 ISO.<br><br>
>>![iso image](images/select-iso.png){.thumbnail}<br>
>>
> **Confirm**
>>
>> Once done, click on `Finish`{.action} to create the VM<br><br>
>>![create vm](images/create-vm.png){.thumbnail}<br>

Once the virtual machine has been created, the next step is to launch it and proceed with the installation of the operating system. During the installation of the OS, make sure you do not configure the network.

**Ubuntu et Debian 12**

Once you are connected to your virtual machine, the first step is to access the configuration file

```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

Next, configure the IPv6 address of your choice, replacing *YOUR_IPV6*, *IPV6_PREFIX* and *IPV6_GATEWAY* with your own values.

```yaml
network:
    ethernets:
        ens18:
            dhcp4: true
            dhcp6: false
            addresses:
              - YOUR_IPV6/IPV6_PREFIX  
            routes:
              - to: default
                via: IPV6_GATEWAY
                on-link: true
    version: 2
```

To test the connectivity of your IPv6, run the `ping` command:

![ping](images/ping-debian.png){.thumbnail}<br>

**Debian**

Once you are connected to your virtual machine, the first step is to access the configuration file

```bash
sudo nano /etc/network/interfaces
```

Next, configure the IPv6 address of your choice, replacing *YOUR_IPV6*, *IPV6_PREFIX* and *IPV6_GATEWAY* with your own values. Replace `ens18` with your own values

```console
auto lo
iface lo inet loopback

auto ens18
iface ens18 inet6 static
address YOUR_IPV6/IPV6_PREFIX
gateway IPV6_GATEWAY
```

Once done, restart the network with the following command:

```bash
sudo systemctl restart networking.service
```

To test the connectivity of your IPv6, run the `ping` command:

![ping](images/ping-debian.png){.thumbnail}


**Almalinux, Rocky Linux and CentOS**

#### Pour un conteneur

Once your container has been created, click on it in the left-tab menu. Next, click on `Network`{.action}.

Click on `edit`{.action} to edit the existing network.

![container configuration](images/create-vm.png){.thumbnail}

Fill in the IPV6 fields with the correct information

![container configuration](images/create-vm.png){.thumbnail}

Once done, click on `OK`{.action} to save the changes.

Connect to your container to verify the IPv6 connectivity with the `ping` command:

![ping](images/ping-container.png){.thumbnail}