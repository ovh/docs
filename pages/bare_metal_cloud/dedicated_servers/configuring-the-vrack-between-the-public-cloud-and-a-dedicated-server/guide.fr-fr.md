---
title: 'Configurer le vRack entre Public Cloud et un serveur dédié'
excerpt: 'Découvrez comment configurer un réseau privé entre une instance Public Cloud et un serveur dédié.'
updated: 2026-02-17
---

## Objectif

Le [vRack](/links/network/vrack) OVHcloud est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [Serveurs dédiés](/links/bare-metal/bare-metal) OVHcloud. Mais il vous permet également d'ajouter des [instances Public Cloud](/links/public-cloud/compute) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) et un [Serveur dédié](/links/bare-metal/bare-metal).**

## Prérequis

* Avoir créé une [instance Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Avoir activé un service [vRack](/links/network/vrack)
* Posséder un [serveur dédié](/links/bare-metal/bare-metal) compatible avec le vRack
* Être connecté à l'[espace client OVHcloud](/links/manager)
* Une plage d'adresses IP privées de votre choix
* Les deux services doivent se trouver dans le même vRack.

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.

## En pratique

### Ajouter un projet Public Cloud au vRack

> [!primary]
> Ceci ne s'applique pas aux projets nouvellement créés et livrés automatiquement avec un vRack. Pour visualiser le vRack une fois le projet créé, cliquez sur `Network`{.action} dans le menu situé à gauche de l'écran, puis sur `Réseau Privé vRack`{.action} pour visualiser le(s) vRack(s).
>
> Vous pouvez également retirer le projet du vRack qui lui a été attribué et l'attacher à un autre vRack si vous le souhaitez, en particulier si vous aviez déjà un vRack existant avec votre/vos serveur(s) dédié(s).

Dans la liste des services éligibles, sélectionnez le projet que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

![ajouter un projet au vrack](images/addprojectvrack.png){.thumbnail}

### Intégrer une instance dans le vRack

> [!primary]
> Ce guide se concentre sur une configuration simple de vRack entre une instance Public Cloud et un serveur dédié.
> Si vous avez déployé vos instance(s) avec un mode de déploiement tel que les zones locales ou multi AZ, notez que les zones locales ne prennent pas encore en charge le vRack.
> En outre, le **vRack** est un réseau L2 global et ne prend pas en charge la résilience au niveau "zone" ou "région".
>

Deux situations peuvent se présenter à vous :

- L'instance n'existe pas encore.
- L’instance existe déjà et vous devez l’ajouter au vRack.

#### Cas d’une nouvelle instance

Si vous avez besoin d’aide, consultez le guide [Créer une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps). Lors de la création d’une instance, vous pourrez spécifier, durant l’étape 5, un réseau privé dans lequel intégrer votre instance.

#### Cas d’une instance déjà existante

Une fois que votre projet est lié à un vRack, vous pouvez créer un réseau privé et l'attacher à des instances existantes.

Dans l'onglet `Public cloud`{.action}, cliquez sur `Private Network`{.action} dans le menu de gauche sous **Network**.

Cliquez sur le bouton `Ajouter un réseau privé`{.action}. 

![create private network](images/vrack2022-03.png){.thumbnail}

La page suivante vous permet de personnaliser plusieurs paramètres.

Sélectionnez la région dans laquelle vous souhaitez placer le réseau privé . Assurez-vous qu'il se trouve dans la même région que l'instance existante.

![select region](images/vrack2024-01.png){.thumbnail}

Pour que les deux services puissent communiquer entre eux, ils doivent être « taggués » avec le même **VLAN ID**.

Ceci peut être configuré à l'étape suivante.

![configure network](images/configure_private_network.png){.thumbnail}

Cette étape offre plusieurs options de configuration. Pour les besoins de ce guide, nous allons nous concentrer sur les éléments nécessaires. Cliquez sur les onglets ci-dessous pour afficher les détails :

> [!tabs]
> **Nom du réseau privé**
>>
>> Entrez un nom pour votre réseau privé.
>>
> **Options réseau Layer 2**
>>
>> Par défaut, le VLAN ID des serveurs dédiés est **0**. Pour utiliser ce VLAN ID pour une instance, il sera nécessaire de marquer le réseau privé avec le VLAN **0** également.
>> Cochez la case **Set a VLAN ID** et sélectionnez VLAN ID **0**.
>>
>> Si vous ne cochez pas la case, le système attribuera un numéro d'identifiant VLAN aléatoire à votre réseau privé.
>>
> **Utilisation d'un VLAN ID différent**
>>
>> Si vous n'avez pas l'intention d'utiliser le VLAN ID **0**, vous pouvez sélectionner un ID différent compris entre 1 et 4000. Dans ce cas :
>>
>> - Lors de la configuration du vRack sur le serveur dédié, ce VLAN ID doit être inclus dans le(s) fichier(s) de configuration réseau.
>>
>> > [!primary]
>> > Il est possible d'utiliser le même VLAN ID pour plusieurs réseaux privés, mais cela nécessite une gestion rigoureuse des adresses IP privées.  L'utilisation d'allocation pool DHCP sans chevauchement peut être une façon de gérer cette problématique.
>>
>> > [!primary]
>> > Contrairement aux serveurs dédiés (lorsque l’on utilise un VLAN ID différent de 0), il n’est pas nécessaire d’inclure directement le VLAN ID dans le fichier de configuration réseau de l’instance Public Cloud une fois qu’il est paramétré dans l’espace client OVHcloud.
>>
>> Exemple : si votre réseau privé d'instance est « taggué » avec le VLAN 2, ce VLAN ID doit être inclus dans la configuration réseau du serveur dédié uniquement. Pour plus d'informations, consultez le guide suivant : [Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
> **Options de distribution des adresses DHCP**
>>
>> Vous pouvez conserver la plage IP privée par défaut ou en utiliser une autre.
>>

Une fois la configuration terminée, cliquez sur `Créer`{.action}. Cette opération peut prendre quelques minutes.

Dans le tableau de bord de l'instance concernée, localisez la section « Réseaux » et cliquez sur le bouton `...`{.action} à côté de « Réseau(x) privé(s) ». Sélectionnez `Attacher un réseau`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le ou les réseaux privés à attacher à votre instance et cliquez sur `Attacher`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configurer vos interfaces réseau

Configurez ensuite les interfaces réseau sur votre serveur dédié.

> [!tabs]
> **Debian 11**
>>
>> La configuration ci-dessous est basée sur Debian 11 (Bullseye).
>>
>> - Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez les commandes suivantes pour installer le paquet VLAN :
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Ensuite, chargez le module noyau 8021q :
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
>> - Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Récupérez les noms des interfaces et identifiez l'interface privée :
>>
>> ```sh
>> ip a
>> ```
>> 
>> Dans cet exemple, l'interface privée est `eno2`.
>>
>> - Ensuite, créez une sous-interface VLAN pour l'interface réseau (configuration non persistante) et attribuez-lui (taguez) le VLAN ID. Dans cet exemple, le VLAN ID est 10.
>>
>> Remplacez les valeurs par les vôtres.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - Ensuite, attribuez une adresse IP privée à la nouvelle sous-interface VLAN :
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - Ensuite, activez la sous-interface VLAN :
>>
>> ```sh
>> sudo ip link set dev eno2.10 up
>> ```
>> 
>> - Pour rendre la configuration persistante, ajoutez les entrées suivantes au fichier de configuration :
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Aperçu :
>>
>> ![config](images/config_debian.png){.thumbnail}
>>
>> - Redémarrez le réseau pour appliquer les modifications :
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu 20.04+ et Debian 12+**
>>
>> La configuration ci-dessous est basée sur Ubuntu 25.10.
>>
>> - Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez la commande suivante pour installer le paquet VLAN :
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Ensuite, chargez le module noyau 8021q :
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
>> - Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Créez ou modifiez le fichier de configuration `cloud.cfg` pour empêcher les modifications automatiques de la configuration réseau :
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Ajoutez cette ligne :
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Enregistrez et fermez le fichier.
>>
>> - Pour obtenir le nom de l'interface réseau et son adresse MAC :
>>
>> ```sh
>> ip a
>> ```
>>
>> - Ici, l'interface que nous souhaitons configurer est `eno2` avec l'adresse MAC : `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/ubuntu_ip_a.png){.thumbnail}
>>
>> - Ajoutez la configuration réseau pour cette interface et la déclaration VLAN au fichier de configuration, en veillant à le placer directement sous la ligne `version: 2`. Remplacez les valeurs par les vôtres :
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
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # ID VLAN
>>             link: eno2                  # Nom de l'interface
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Aperçu
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Enregistrez et fermez le fichier, puis exécutez la commande suivante :
>>
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> - Si vous recevez le message suivant :
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> - Vous pouvez le résoudre en installant le paquet suivant :
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Vérifiez que la configuration a bien été appliquée :
>>
>> ```sh
>> ip a
>> ```
>>
> **AlmaLinux et Rocky Linux (8/9)**
>>
>> La configuration ci-dessous est basée sur Almalinux 9.
>>
>> - Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez la commande suivante pour charger le module noyau 8021q :
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
>> - Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Récupérez les noms des interfaces et identifiez l'interface privée :
>>
>> ```sh
>> ip a
>> ```
>>
>> Dans cet exemple, l'interface privée est `eno2`.
>>
>> - Ensuite, créez un fichier de configuration de sous-interface pour le VLAN dans le fichier de configuration réseau principal. Dans cet exemple, le fichier est nommé `ifcfg-eno2.10`, ici, eno2 fait référence à l'interface réseau privée et `10` fait référence au VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>> 
>> - Ajoutez les entrées suivantes au fichier de configuration. Remplacez ces valeurs par les vôtres.
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Enregistrez et fermez le fichier.
>>
>> - Aperçu
>>
>> ![config](images/config_alma.png){.thumbnail}
>>
>> - Redémarrez l'interface réseau :
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux & Rocky Linux (10)**
>>
>> La configuration ci-dessous est basée sur Fedora 43.
>>
>> - Avant de commencer, établissez une connexion SSH vers votre serveur et exécutez la commande suivante pour charger le module noyau 8021q :
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
>> - Exécutez la commande suivante pour vous assurer que les modules sont chargés de manière permanente au démarrage :
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Pour obtenir le nom de l'interface réseau :
>>
>> ```sh
>> ip a
>> ```
>>
>> Dans cet exemple, l'interface s'appelle `eno2`. Nous devons créer une sous-interface VLAN avant d'attribuer une adresse IP privée à celle-ci.
>>
>> - Utilisez la commande suivante pour créer l'interface VLAN :
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Remplacez `vlan-name` par le nom de la sous-interface VLAN, `parent-interface` par le nom de l'interface privée et `vlan-id` par l'ID VLAN.
>>
>> Dans cet exemple :
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> - Attribuez une adresse IP privée à la sous-interface VLAN :
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> Dans cet exemple :
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - Ensuite, activez la sous-interface VLAN :
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> Dans cet exemple :
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Les étapes ci-dessus créent un fichier de configuration pour l'interface VLAN. Ce fichier se trouve dans `/etc/NetworkManager/system-connections/` et suit le format de nommage `vlan-name.nmconnection`.
>>
>> Dans cet exemple, le fichier s'appelle `eno2.10.nmconnection`.
>>
>> - Aperçu :
>>
>> ![config](images/fedora_file_name.png){.thumbnail}
>>
>> ![config](images/config_fedora.png){.thumbnail}
>>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).