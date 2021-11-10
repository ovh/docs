---
title: 'Configuring the network on Windows Server with Hyper-V on the High Grade & SCALE ranges'
slug: hyperv-network-hg-scale
excerpt: 'Find out how to configure the network on  Windows Server with Hyper-V on the High Grade & SCALE ranges'
section: 'Advanced use'
order: 5
---

**Dernière mise à jour le 11/10/2021**

## Objectif

Sur les gammes High Grade & SCALE, le fonctionnement des IP fail-over en mode bridged (via des MAC Virtuelles) n'est pas possible. Il est donc nécessaire de configurer les IP fail-over en mode routé ou via le vRack.

**Découvrez comment configurer le réseau sous Windows Server avec Hyper-V.**

## Prérequis

* Disposer d'un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr-ca/bare-metal/)
* Disposer d'[IP fail-over](https://www.ovhcloud.com/fr-ca/bare-metal/ip/)
* Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

> [!warning]
>
> Aucune MAC virtuelle ne doit être appliquée sur les IP fail-over dans l'espace client OVHcloud.
>

## En pratique

> [!primary]
>
> Sur ces gammes de serveurs, il y a 4 cartes réseaux. Les deux premières pour le public, les deux dernières pour le privé. Pour profiter de l'ensemble de la bande passante, des agrégats doivent être créés.
>

### IP fail-over en mode routé sur les interfaces réseau publique


#### Explanations

You need to:

- Configurer NIC Teaming
- Installer les rôles Hyper-V et RRAS
- Configurer RRAS pour agir en tant que routeur

#### Identification des interfaces et configuration de NIC Teaming

Ouvrez Windows Powershell et exécutez la commande `Get-NetAdapter`

```
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

Dans cet exemple:

- Les interfaces publiques sont are `Ethernet 3` and `Ethernet 4`
- les interfaces privées sont sur `Ethernet` et `Ethernet 2`.

> [!primary]
>
> Vérifiez que votre configuration est semblable. Vous disposez des informations relatives aux MAC et interfaces publiques ou privées dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ou via l'API OVHcloud.

Maintenant, revenez au Server Manaeger et allez à "Local Server" et cliquez sur "Disabled" à côté de NIC Teaming.

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Sur la page suivante, cliquez avec le bouton droit de la souris sur l'une des interfaces publiques précédemment identifiées, puis cliquez sur `Add to New Team`

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Ensuite, donnez un nom à votre équipe, ajoutez la seconde interface à l'équipe, puis développez les propriétés supplémentaires et définissez "Teaming Mode" sur "LACP", et enfin cliquez sur "OK".

#### Configurer une IP statique

Afin d'éviter une perte de connexion lors d'un redémarrage, nous devons configurer l'IP statiquement sur l'équipe.

Appuyez sur `Windows Key + R` pour ouvrir une fenêtre Run et entrez `ncpa.cpl` et cliquez sur `open`. Cela ouvrira votre fenêtre Connexions réseau.

![Static IP](images/static_ip_1.png){.thumbnail}

Faites un clic droit sur votre équipe que vous avez créée et cliquez sur `Properties`.

![Static IP](images/static_ip_2.png){.thumbnail}

Ensuite, double-cliquez sur `Internet Protocol Version  4(TCP/IPv4)`

![Static IP](images/static_ip_3.png){.thumbnail}

Sélectionnez  `Use the following IP address and insert your IP address.`

Le masque de sous-réseau et la passerelle par défaut seront : 255.255.255.255 et 100.64.0.1 comme indiqué ci-dessous.

Pour les serveurs DNS, vous pouvez choisir le vôtre. Dans notre exemple, nous utilisons 213.186.33.99 et 8.8.8.8.

Une fois fait, cliquez sur "OK" pour fermer la fenêtre et sur "OK" pour fermer la fenêtre des propriétés de l'adaptateur.

![Static IP](images/static_ip_4.png){.thumbnail}

#### Installation des rôles Hyper-V et RRAS

Rendez-vous dans le Server Manager et sur `Dashboard` cliquez sur `Add roles and features`

![Install roles](images/install_roles_1.png){.thumbnail}

Passez par l'assistant jusqu'à ce que vous atteigniez la section "Server Roles" et sélectionnez "Hyper-v" et "Remote Access".

![Install roles](images/install_roles_2.png){.thumbnail}

Ensuite, passez à la section "Virtual Switches" de "Hyper-V" et sélectionnez votre équipe NIC que vous avez créée précédemment.

![Install roles](images/install_roles_3.png){.thumbnail}

Ensuite, passez à la section "Role Services" de "Remote Access" et sélectionnez "Routing"

![Install roles](images/install_roles_4.png){.thumbnail}

Enfin, passez à la section "Confirmation", sélectionnez "Restart the destination server automatically if required" et cliquez sur "Install".

#### Configurer Routing and Remote Access

Ouvrez la nouvelle application appelée `Routing and Remote Access` faites un clic droit sur votre serveur et choisissez `Configure and Enable Routiong and Remote Access`.

![Configure RRAS](images/configure_rras_1.png){.thumbnail}

Maintenant, choisissez `Custom configuration` et cliquez sur `Next`.

![Configure RRAS](images/configure_rras_2.png){.thumbnail}

Ensuite, vous devez sélectionner `LAN Routing` et cliquez sur `Next`

![Configure RRAS](images/configure_rras_3.png){.thumbnail}

Enfin, cliquez sur "Finish" puis sur "Start Service" dans la fenêtre qui s'affichera.

![Configure RRAS](images/configure_rras_3.png){.thumbnail}

#### Définir statiquement les adresses IP principale et supplémentaire sur l'interface Hyper-V

Nous devons maintenant déplacer la configuration IP vers l'interface Hyper-V.

Appuyez sur `Windows Key + R` pour ouvrir une fenêtre Run et entrez `ncpa.cpl` et cliquez sur `open`. Cela ouvrira votre fenêtre Connexions réseau.

![Static IP](images/static_ip_1.png){.thumbnail}

Faites un clic droit sur votre carte vEthernet et cliquez sur "Properties".

![Static IP](images/static_ip_5.png){.thumbnail}

Ensuite, double-cliquez sur `Internet Protocol Version  4(TCP/IPv4)

![Static IP](images/static_ip_3.png){.thumbnail}

Sélectionnez `Use the following IP address` et insérez votre adresse IP.

Le masque de sous-réseau et la passerelle par défaut seront : 255.255.255.255 et 100.64.0.1 comme indiqué ci-dessous.

Pour les serveurs DNS, vous pouvez choisir le vôtre. Dans notre exemple, nous utilisons 213.186.33.99 et 8.8.8.8.

![Static IP](images/static_ip_4.png){.thumbnail}

Cliquez ensuite sur le bouton `Advanced...` et dans la nouvelle fenêtre cliquez sur `Add...` sous adresses IP.

Ajoutez votre adresse IP et votre masque de sous-réseau pour votre IP Failover et cliquez sur `Add`

![Static IP](images/static_ip_6.png){.thumbnail}

Une fois fait, cliquez sur "OK" pour fermer la fenêtre avancée, cliquez de nouveau sur "OK" pour fermer les paramètres TCP/IPv4, puis cliquez enfin sur "OK" pour fermer la fenêtre des propriétés de la carte.

> [!warning]
>
> On sait que cette étape peut provoquer une perte de connexion. Si cela se produit, veuillez vous connecter en utilisant le [IPMI](../use-ipmi-serveurs-dédiés) et modifier de nouveau la configuration, vous constaterez que votre passerelle par défaut est revenue à l'état vide. Il faut rajouter la gateway de 100.64.0.1.
>


#### Ajouter une route statique

Ouvrez une invite de commande en tant qu'administrateur et exécutez la commande `route print interface`

```
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

Dans notre exemple vous verrez que notre carte Hyper-V a l'ID 22. Prenez note de votre carte Hyper-V puis exécutez la commande `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 si 22` remplacez l'IP et l'ID d'interface par celui que vous avez reçu. Vous devriez obtenir le résultat "OK !"

```
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Une fois créées et configurées, vos VM doivent maintenant disposer d’un accès à Internet.


#### Exemple de configuration d'une VM client sur Ubuntu

Contenu du fichier `/etc/netplan/ip.yaml`:

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```

### IP FailOver via le vRack

#### Explications

- Avoir réservé un bloc public d'adresses IP dans votre compte, avec un minimum de quatre adresses.
- Préparer votre plage d'adresses IP privées choisies.
- Posséder un [serveur compatible vRack](https://www.ovhcloud.com/fr-ca/bare-metal/){.external}.
- Activer un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

#### Explanations

Il vous faut:

* créer un agrégat;
* créer un bridge raccordé à l’agrégat;

#### Identification des interfaces et configuration de NIC Teaming

Ouvrez Windows Powershell et exécutez la commande `Get-NetAdapter`

```
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

Dans cet exemple:

- Les interfaces publiques sont are `Ethernet 3` and `Ethernet 4`
- les interfaces privées sont sur `Ethernet` et `Ethernet 2`.

> [!primary]
>
> Vérifiez que votre configuration est semblable. Vous disposez des informations relatives aux MAC et interfaces publiques ou privées dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ou via l'API OVHcloud.

Maintenant, revenez au Server Manaeger et allez à "Local Server" et cliquez sur "Disabled" à côté de NIC Teaming.

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Sur la page suivante, cliquez avec le bouton droit de la souris sur l'une des interfaces privée précédemment identifiées, puis cliquez sur `Add to New Team`

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Ensuite, donnez un nom à votre équipe, ajoutez la seconde interface à l'équipe, puis développez les propriétés supplémentaires et définissez "Teaming Mode" sur "LACP", et enfin cliquez sur "OK".

#### Créer le commutateur virtuel dans Hyper-VM

Nous allons avoir besoin de créer un switch virtuel qui va lier nos VMs à l'équipe que nous avons créée.

Tout d'abord, ouvrez le Gestionnaire Hyper-V et cliquez sur `Virtual Switch Manager`

![Create v-switch](images/create_vswitch_1.png){.thumbnail}

Sur cette page, assurez-vous que vous avez sélectionné "External" et cliquez sur "Create Virtual Switch".

![Create v-switch](images/create_vswitch_2.png){.thumbnail}

Maintenant, donnez un nom à votre commutateur, choisissez votre nouvel adaptateur d'équipe, cliquez sur "Apply", puis sur "OK"

![Create v-switch](images/create_vswitch_3.png){.thumbnail}

Vous êtes maintenant prêt à créer votre VM et à configurer le réseau pour celle-ci.



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

#### Configuration example of a client VM on Ubuntu

Contenu du fichier `/etc/netplan/vrack.yaml`:

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
