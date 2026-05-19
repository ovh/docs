---
title: "Créer plusieurs VLAN dans le vRack sur un serveur dédié"
excerpt: "Créez et gérez plusieurs VLAN dans votre vRack OVHcloud pour segmenter le trafic réseau entre serveurs dédiés"
updated: 2026-02-20
---

## Objectif

La [configuration standard du vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) vous permet de créer un seul VLAN. Cela signifie que vous ne pouvez utiliser chaque adresse IP qu'une seule fois. Cependant, avec la version 2.0 de la configuration du vRack, vous pouvez créer jusqu'à 4 000 réseaux locaux virtuels au sein d'un seul vRack. Cela signifie que vous pouvez utiliser chaque adresse IP jusqu'à 4 000 fois.

**Ce guide vous explique comment créer plusieurs VLAN dans le vRack.**

## Prérequis

- Posséder un ou plusieurs [serveurs dédiés](/links/bare-metal/bare-metal) compatibles avec le vRack.
- Avoir activé un service [vRack](/links/network/vrack).
- Avoir accès à votre plage d'adresses IP privées choisie.
- Être connecté en SSH avec l'identifiant root (Linux).
- Être connecté avec le compte administrateur (Windows).
- Avoir finalisé la [configuration du vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.

## En pratique

### Sous Linux

> [!primary]
>
> À titre d'exemple, nous utiliserons **eno2** comme interface réseau, **10** et **11** comme balises VLAN, et **192.168.0.0/16** et **10.0.0.0/16** comme plages d'adresses IP privées. 
>
> Toutes les commandes sont à adapter en fonction de la distribution utilisée. N'hésitez pas à vous reporter à la documentation officielle de votre distribution en cas de doute.
>

> [!tabs]
> **Debian 11**
>>
>> Tout d'abord, établissez une connexion SSH vers votre serveur et exécutez les commandes suivantes depuis la ligne de commande pour installer le paquet VLAN sur votre serveur :
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Ensuite, chargez le module noyau 8021q :
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Pour vérifier que le module est chargé :
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Ensuite, récupérez les noms de vos interfaces et identifiez l'interface privée :
>>
>> ```sh
>> ip a
>> ```
>>
>> Ensuite, créez une balise VLAN. La balise sert d'identifiant, vous permettant de distinguer plusieurs VLAN :
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **Dans cet exemple :**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Utilisez la même commande pour chaque balise VLAN que vous souhaitez ajouter.
>>
>> Ensuite, déclarez la plage d'adresses IP privée dans le vRack et étiquetez-la avec l'identifiant en utilisant la commande suivante :
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Modifiez la configuration de votre interface réseau pour y intégrer la balise VLAN. Ouvrez votre fichier de configuration d'interface réseau et ajoutez les entrées suivantes :
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> Pour plusieurs VLAN configurés, votre configuration réseau devrait ressembler à ceci :
>>
>> ![debian VLAN](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu et Debian 12+**
>>
>> Ces commandes ont été exécutées sous Ubuntu 24.04 (Noble Numbat).
>>
>> Tout d'abord, établissez une connexion SSH vers votre serveur et exécutez les commandes suivantes depuis la ligne de commande pour installer le paquet VLAN sur votre serveur :
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Ensuite, chargez le module noyau 8021q :
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Pour vérifier que le module est chargé :
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Créez ou modifiez le fichier `cloud.cfg` de configuration pour empêcher les modifications automatiques de votre configuration réseau :
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Ajoutez la ligne suivante :
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Récupérez le nom de l'interface réseau et son adresse MAC :
>>
>> ```sh
>> ip a
>> ```
>>
>> Ici, l'interface que nous souhaitons configurer est `eno2` avec l'adresse MAC : `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Ajoutez la configuration réseau pour cette interface réseau et les informations VLAN dans le fichier suivant, en veillant à les placer directement sous la ligne `version : 2`. Remplacez les valeurs par les vôtres :
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID    
>>             link: eno2                  # Nom de l'interface
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:                    
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> Pour plusieurs VLAN configurés, votre configuration réseau devrait ressembler à ceci :
>>
>> ![ubuntu VLAN](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Enregistrez et fermez le fichier, puis exécutez la commande suivante :
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Utilisez la commande suivante pour vous assurer que la configuration a été correctement appliquée :
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux et Rocky Linux (8/9)**
>>
>> Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez la commande suivante pour charger le module noyau 8021q :
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Pour vérifier que le module est chargé :
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Ensuite, exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Récupérez les noms des interfaces et identifiez l'interface privée :
>>
>> ```sh
>> ip a
>> ```
>> 
>> Ensuite, créez un fichier de configuration d'interface secondaire pour le VLAN dans le fichier de configuration réseau principal.
>> 
>> Dans cet exemple, le fichier est nommé `ifcfg-eno2.10`, où eno2 fait référence à l'interface réseau privée et `10` au VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>> 
>> Ajoutez les entrées suivantes au fichier de configuration, en veillant à remplacer les valeurs par les vôtres :
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Enregistrez et fermez le fichier.
>>
>> Pour plusieurs VLAN configurés, vous devriez créer un nouveau fichier pour chaque identifiant VLAN :
>>
>> ![alma VLAN](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Redémarrez l'interface réseau :
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux et Rocky Linux (10)**
>>
>> La configuration ci-dessous est basée sur Fedora 43.
>>
>> Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez la commande suivante pour charger le module noyau 8021q :
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Pour vérifier que le module est chargé :
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Pour obtenir le nom de l'interface réseau privée :
>>
>> ```sh
>> ip a
>> ```
>>
>> Dans cet exemple, l'interface s'appelle `eno2`. Nous devons créer une interface secondaire VLAN avant d'attribuer une adresse IP privée à celle-ci.
>>
>> Utilisez la commande suivante pour créer l'interface VLAN :
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Remplacez `vlan-name` par le nom de l'interface secondaire VLAN, `parent-interface` par le nom de l'interface privée et `vlan-id` par l'ID VLAN.
>>
>> **Dans cet exemple :**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Attribuez une adresse IP privée à l'interface secondaire VLAN :
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **Dans cet exemple :**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> Ensuite, activez l'interface secondaire VLAN :
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **Dans cet exemple :**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Utilisez les mêmes commandes pour chaque interface VLAN que vous souhaitez ajouter.
>>
>> Une fois terminé, un fichier de configuration pour l'interface VLAN est créé. Ce fichier se trouve dans `/etc/NetworkManager/system-connections/` et suit le format de nommage `vlan-name.nmconnection`.
>>
>> Pour plusieurs VLAN, plusieurs fichiers de configuration seront créés :
>>
>> - Aperçu :
>>
>> ![config](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![config](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Sous Windows

Connectez-vous à votre serveur via le bureau à distance et ouvrez l'application « Gestionnaire de serveur ». Sélectionnez ensuite `Serveur local`{.action}, puis cliquez sur le lien `Désactivé`{.action} à côté de **Association des cartes réseau** :

![Server Manager Local Server avec NIC Teaming desactive](images/vrack2-windows-01.png){.thumbnail}

Faites ensuite un clic droit sur l'interface réseau et sélectionnez `Ajouter à une nouvelle équipe`{.action}.

![Menu contextuel pour ajouter l'interface a une nouvelle equipe](images/vrack2-windows-02.0.png){.thumbnail}

Dans la fenêtre qui apparaît, créez une nouvelle équipe en entrant un nom d'équipe dans le champ **Nom de l'équipe**. Lorsque vous avez terminé, cliquez sur `OK`{.action}.

![Dialogue New Team avec nom de l'equipe et bouton OK](images/vrack2-windows-02.png){.thumbnail}

Il convient ensuite de préciser le tag du VLAN. Dans le panneau « **CARTES ET INTERFACES** » de l’écran « **Association des cartes réseau** », allez dans l'onglet `Interfaces d'équipe`{.action} et faites un clic droit sur l’interface que vous venez d’ajouter à la nouvelle équipe, puis cliquez sur `Propriétés`{.action}. Cliquez maintenant sur `VLAN spécifique`{.action}, et précisez le tag :

![Proprietes de l'interface NIC Teaming avec tag VLAN spécifique](images/vrack2-windows-03.png){.thumbnail}

Il faut maintenant configurer l’adresse IP du VLAN. Cliquez sur le bouton `Start`{.action} du menu de démarrage, puis sur `Panneau de configuration`{.action} :

![Menu Demarrer de Windows affichant l'option Panneau de configuration](images/vrack2-windows-04.png){.thumbnail}

Cliquez sur `Réseau et Internet`{.action} :

![Panneau de configuration avec categorie Réseau et Internet](images/vrack2-windows-05.png){.thumbnail}

Cliquez ensuite sur `Centre Réseau et partage`{.action} :

![Lien Centre Réseau et partage sous Windows](images/vrack2-windows-06.png){.thumbnail}

Cliquez alors sur `Modifier les paramètres de la carte`{.action} :

![Modifier les paramètres de la carte dans le Centre Réseau et partage](images/vrack2-windows-07.png){.thumbnail}

Ensuite, faites un clic droit sur l’interface VLAN, puis cliquez sur `Propriétés`{.action} :

![Clic droit sur l'interface VLAN pour ouvrir les Proprietes](images/vrack2-windows-08.png){.thumbnail}

Dans notre exemple, `Ethernet 2` est l'interface utilisée pour le vRack. Cependant, il est possible que le NIC vRack soit une interface différente dans votre configuration. La bonne interface à sélectionner sera celle qui n'a pas l'adresse IP principale du serveur ou qui a une IP auto-attribuée.

Effectuez un double clic sur `Internet Protocol Version 4 (TCP/IPv4)`{.action} :

![Proprietes de la carte avec protocole IPv4 mis en évidence](images/vrack2-windows-09.png){.thumbnail}

Dans l'étape suivante, cliquez sur `Utiliser l'adresse IP suivante`{.action}. Pour « **Address IP** », tapez une adresse IP de votre plage interne. Pour « **Masque de sous-réseau** », tapez « 255.255.0.0 ».

![Paramètres IPv4 avec adresse IP et masque de sous-réseau du VLAN](images/vrack2-windows-10.png){.thumbnail}

Pour finir, cliquez sur le bouton `OK`{.action} pour sauvegarder les modifications et enfin redémarrez le serveur.

## Aller plus loin

[Configurer plusieurs serveurs dédiés dans le vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Configurer le vRack entre Public Cloud et un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Échangez avec notre [communauté d'utilisateurs](/links/community).
