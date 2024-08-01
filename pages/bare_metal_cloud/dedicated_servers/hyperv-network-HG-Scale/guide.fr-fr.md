---
title: 'Configurer le réseau sur Windows Server avec Hyper-V'
excerpt: 'Découvrez comment configurer le réseau sur Windows Server'
updated: 2024-08-01
---

## Objectif

**Découvrez comment configurer le réseau sous Windows Server avec Hyper-V.**

### Gammes High Grade & SCALE

Sur les gammes High Grade & SCALE, le fonctionnement des Additional IP en mode *bridged* (via des MAC Virtuelles) n'est pas possible. Il est donc nécessaire de configurer les Additional IP en mode routé ou via le vRack.   

### Gamme Advance

Les serveurs Advance ne disposant que de deux interfaces réseaux, il est conseillé de configurer le serveur en mode privé en créant un teaming avec les deux interfaces connectées au vRack. Un second serveur peut alors servir de passerelle internet avec une interface connectée au réseau privé et une autre connectée sur le réseau public.   

Pour ce type de configuration il est possible d’utiliser la fonctionnalité IP en alias décrite dans l’article [Configurer son adresse IP en alias](https://help.ovhcloud.com/csm/fr-dedicated-servers-network-ipaliasing?id=kb_article_view&sysparm_article=KB0043761)

Il est également possible de mettre en place cette configuration sur chacun des serveurs hyperV (une interface privée / une interface publique sur chaque serveur) et ne pas configurer d’agrégation de port mais dans ce cas le réseau privé disposera de moins de bande passante et d’aucune haute disponibilité des interfaces réseaux.


## Prérequis

* Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/)
* Disposer d'une adresse [Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/)
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!warning]
>
> Aucune MAC virtuelle ne doit être appliquée sur les Additional IP dans l'espace client OVHcloud.
>

## En pratique

> [!primary]
>
> Sur ces gammes de serveurs, il y a 4 cartes réseaux. Les deux premières pour le public, les deux dernières pour le privé. Pour profiter de l'ensemble de la bande passante, des agrégats doivent être créés.
>

### Additional IP en mode routé sur les interfaces réseaux publiques

#### Explications

Vous devez :

- configurer NIC Teaming;
- installer les rôles Hyper-V et RRAS;
- configurer RRAS pour agir en tant que routeur.

#### Identification des interfaces et configuration de NIC Teaming

Ouvrez Windows Powershell et exécutez la commande `Get-NetAdapter` :

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

Dans cet exemple :

- les interfaces publiques sont `Ethernet 3` et `Ethernet 4`;
- les interfaces privées sont `Ethernet` et `Ethernet 2`.

> [!primary]
>
> Vérifiez que votre configuration est similaire. Vous disposez des informations relatives aux MAC et interfaces publiques ou privées dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou via l'API OVHcloud.
>

Retournez à présent dans le Server Manager, allez dans `Local Server`{.action} et cliquez sur `Disabled`{.action} à côté de « NIC Teaming ».

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Sur la page suivante, faites un clic droit sur l'une des interfaces publiques précédemment identifiées, puis cliquez sur `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Donnez un nom à votre *teaming* puis ajoutez la seconde interface au *teaming*. Ouvrez ensuite les propriétés supplémentaires, définissez « Teaming Mode » sur « LACP » et cliquez sur `OK`{.action}.

#### Configurer une IP statique

Afin d'éviter une perte de connexion lors d'un redémarrage, nous devons configurer l'IP de manière statique sur le *teaming*.

Appuyez sur `Windows Key` \+ `R` pour ouvrir une fenêtre Run. Entrez `ncpa.cpl` et cliquez sur `OK`{.action}. Cela ouvrira votre fenêtre « Connexions réseau ».

![Static IP](images/static_ip_1.png){.thumbnail}

Faites un clic droit sur le *teaming* que vous avez créé et cliquez sur `Properties`{.action}.

![Static IP](images/static_ip_2.png){.thumbnail}

Double-cliquez sur `Internet Protocol Version 4(TCP/IPv4)`{.action}.

![Static IP](images/static_ip_3.png){.thumbnail}

Sélectionnez `Use the following IP address and insert your IP address`.

Le masque de sous-réseau et la passerelle par défaut seront : 255.255.255.255 et 100.64.0.1 (comme indiqué ci-dessous).

Pour les serveurs DNS, vous pouvez choisir les vôtres. Dans notre exemple, nous utilisons 213.186.33.99 et 8.8.8.8.

Une fois les adresses renseignées, cliquez sur `OK`{.action} pour fermer la fenêtre et à nouveau sur `OK`{.action} pour fermer la fenêtre des propriétés de l'adaptateur.

![Static IP](images/static_ip_4.png){.thumbnail}

#### Ajoute les rôles Hyper-V et RRAS

Dans le Server Manager, sélectionnez le `Dashboard`{.action} et  cliquez sur `Add roles and features`{.action}.

![Install roles](images/install_roles_1.png){.thumbnail}

Suivez l'assistant jusqu'à atteindre la section « Server Roles ». Sélectionnez alors `Hyper-v` et `Remote Access`.

![Install roles](images/install_roles_2.png){.thumbnail}

Continuez ensuite jusqu'à la section « Virtual Switches » de « Hyper-V » et assurez-vous qu'aucune interface n'est sélectionnée.

![Install roles](images/install_roles_3_2.png){.thumbnail}

Continuez ensuite jusqu'à la section « Role Services » de « Remote Access » et sélectionnez `Routing`.

![Install roles](images/install_roles_4.png){.thumbnail}

Enfin, dans la section « Confirmation », sélectionnez `Restart the destination server automatically if required` et cliquez sur `Install`{.action}.

#### Création du switch virtuel

Dans les versions les plus récentes de Windows Server, les switchs virtuels Hyper-V sur un cluster d'adaptateurs réseau de type LBFO sont obsolètes. Nous devrons donc créer le switch manuellement à l'aide de Powershell. Exécutez la commande suivante et remplacez "vSwitch_Name" par le nom de votre choix et remplacez "NIC_Team_Name" par le nom du NIC team que vous avez créée précédemment :

```powershell
New-VMSwitch -Name "vSwitch_Name" -NetAdapterName "NIC_Team_Name" -AllowNetLbfoTeams $true -AllowManagementOS $true 
```

#### Configurer Routing and Remote Access

Ouvrez la nouvelle application appelée « Routing and Remote Access », faites un clic droit sur votre serveur et cliquez sur `Configure and Enable Routing and Remote Access`{.action}.

![Configure RRAS](images/configure_rras_1.png){.thumbnail}

Choisissez `Custom configuration` et cliquez sur `Next`{.action}.

![Configure RRAS](images/configure_rras_2.png){.thumbnail}

Sélectionnez ensuite `LAN Routing` et cliquez sur `Next`{.action}.

![Configure RRAS](images/configure_rras_3.png){.thumbnail}

Enfin, cliquez sur `Finish`{.action} puis sur `Start Service`{.action} dans la fenêtre qui s'affichera.

![Configure RRAS](images/configure_rras_4.png){.thumbnail}

#### Définir les adresses IP statiques principale et supplémentaire sur l'interface Hyper-V

Nous devons maintenant déplacer la configuration IP vers l'interface Hyper-V.

Appuyez sur `Windows Key` \+ `R` pour ouvrir une fenêtre Run. Entrez `ncpa.cpl` et cliquez sur `OK`{.action}. Cela ouvrira votre fenêtre « Connexions réseau ».

![Static IP](images/static_ip_1.png){.thumbnail}

Faites un clic droit sur votre carte vEthernet et cliquez sur `Properties`{.action}.

![Static IP](images/static_ip_5.png){.thumbnail}

Double-cliquez sur `Internet Protocol Version 4(TCP/IPv4)`{.action}.

![Static IP](images/static_ip_3.png){.thumbnail}

Sélectionnez `Use the following IP address` et insérez votre adresse IP.

Le masque de sous-réseau et la passerelle par défaut seront : 255.255.255.255 et 100.64.0.1 (comme indiqué ci-dessous).

Pour les serveurs DNS, vous pouvez choisir les vôtres. Dans notre exemple, nous utilisons 213.186.33.99 et 8.8.8.8.

![Static IP](images/static_ip_4.png){.thumbnail}

Cliquez ensuite sur le bouton `Advanced...` et, dans la nouvelle fenêtre, cliquez sur `Add...`{.action} sous les adresses IP.

Ajoutez l'adresse IP et le masque de sous-réseau correspondant à votre Additional IP et cliquez sur `Add`{.action}

![Static IP](images/static_ip_6.png){.thumbnail}

Une fois toutes les adresses renseignées, cliquez sur `OK`{.action} pour fermer la fenêtre avancée, à nouveau sur `OK`{.action} pour fermer les paramètres TCP/IPv4, puis une dernière fois sur `OK`{.action} pour fermer la fenêtre des propriétés de la carte.

> [!warning]
>
> Cette étape peut provoquer une perte de connexion. Si cela se produit, connectez-vous en utilisant l'[IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) et modifiez de nouveau la configuration. Vous constaterez alors que votre passerelle par défaut est revenue à l'état vide. Rajoutez la gateway 100.64.0.1.
>

#### Ajouter une route statique

Ouvrez une invite de commande en tant qu'administrateur et exécutez la commande `route print interface` :

```console
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

Dans notre exemple, vous constatez que notre carte Hyper-V a l'ID 22.<br>
Prenez note de votre carte Hyper-V puis exécutez la commande `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22` (remplacez l'IP et l'ID d'interface par celui que vous avez reçu).<br>
Vous devriez obtenir le résultat « OK ! ».

```console
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Une fois créées et configurées, vos VM doivent à présent disposer d’un accès à Internet.

#### Exemple de configuration d'une VM client sur Ubuntu

Contenu du fichier `/etc/netplan/ip.yaml` :

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16/32
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```

### Additional IP via le vRack

#### Prérequis

- Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses.
- Préparer votre plage d'adresses IP privées choisies.
- Posséder un [serveur compatible vRack](https://www.ovhcloud.com/fr/bare-metal/){.external}.
- Activer un service [vRack](https://www.ovh.com/fr/solutions/vrack/){.external}.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

#### Explications

Il vous faut:

* créer un agrégat;
* créer un bridge raccordé à l’agrégat;

#### Identification des interfaces et configuration de NIC Teaming

Ouvrez Windows Powershell et exécutez la commande `Get-NetAdapter`

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

Dans cet exemple :

- les interfaces publiques sont `Ethernet 3` and `Ethernet 4`;
- les interfaces privées sont `Ethernet` et `Ethernet 2`.

> [!primary]
>
> Vérifiez que votre configuration est similaire. Vous disposez des informations relatives aux MAC et interfaces publiques ou privées dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou via l'API OVHcloud.
>

Retournez à présent dans le Server Manager, allez dans `Local Server`{.action} et cliquez sur `Disabled`{.action} à côté de « NIC Teaming ».

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Sur la page suivante, faites un clic droit sur l'une des interfaces privées précédemment identifiées, puis cliquez sur `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Donnez un nom à votre *teaming* puis ajoutez la seconde interface au *teaming*. Ouvrez ensuite les propriétés supplémentaires, définissez « Teaming Mode » sur « LACP » et cliquez sur `OK`{.action}.

#### Créer le switch virtuel dans Powershell

Nous allons avoir besoin de créer un switch virtuel qui va lier nos VMs au *teaming* que nous avons créé.

Tout d'abord, ouvrez Powershell en tant qu'administrateur et exécutez la commande suivante en remplaçant "vSwitch_Name" par le nom de votre choix et en remplaçant "NIC_Team_Name" par le nom du NIC team que vous avez créée précédemment:

```powershell
New-VMSwitch -Name "vSwitch_Name" -NetAdapterName "NIC_Team_Name" -AllowNetLbfoTeams $true -AllowManagementOS $true 
```

Vous êtes maintenant prêt à créer votre VM et à configurer son réseau.

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

#### Exemple de configuration VM cliente Ubuntu

Contenu du fichier `/etc/netplan/vrack.yaml` :

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 46.105.135.97/28
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 46.105.135.110
                                  on-link: true
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
