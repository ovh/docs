---
title: "Configurer le vRack entre Public Cloud et un serveur dédié"
excerpt: "Mettez en place un réseau privé entre une instance Public Cloud OVHcloud et un serveur dédié via le vRack"
updated: 2026-02-20
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Objectif

Le [vRack](/links/network/vrack) OVHcloud est un réseau privé qui vous permet de configurer l'adressage entre deux ou plusieurs [Serveurs dédiés](/links/bare-metal/bare-metal) OVHcloud. Mais il vous permet également d'ajouter des [instances Public Cloud](/links/public-cloud/compute) à votre réseau privé afin de créer une infrastructure de ressources physiques et virtuelles.

**Ce guide vous montre comment configurer le réseau privé entre une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) et un [Serveur dédié](/links/bare-metal/bare-metal).**

## Prérequis

* Avoir créé une [instance Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Avoir activé un service [vRack](/links/network/vrack)
* Posséder un [serveur dédié](/links/bare-metal/bare-metal) compatible avec le vRack
* Une plage d'adresses IP privées de votre choix
* Les deux services doivent se trouver dans le même vRack.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

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

![Sélection d'un projet Public Cloud a ajouter au vRack](images/addprojectvrack.png){.thumbnail}

### Intégrer une instance dans le vRack

> [!primary]
> Ce guide décrit la mise en place d’une configuration simple de vRack entre une instance Public Cloud et un serveur dédié.
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

![Section Private Network avec bouton Ajouter un réseau prive](images/vrack2022-03.png){.thumbnail}

La page suivante vous permet de personnaliser plusieurs paramètres.

Sélectionnez la région dans laquelle vous souhaitez placer le réseau privé. Assurez-vous qu'il se trouve dans la même région que l'instance existante.

![Sélection de la region pour le réseau prive](images/vrack2024-01.png){.thumbnail}

Pour que les deux services puissent communiquer entre eux, ils doivent être « taggués » avec le même **VLAN ID**.

Ceci peut être configuré à l'étape suivante.

![Formulaire de configuration du réseau prive avec nom, VLAN ID et DHCP](images/configure_private_network.png){.thumbnail}

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
>> > Il est possible d'utiliser le même VLAN ID pour plusieurs réseaux privés, mais cela nécessite une gestion rigoureuse des adresses IP privées. L'utilisation d'allocation pool DHCP sans chevauchement peut être une façon de gérer cette problématique.
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
>> Sélectionnez « Activer DHCP pour ce réseau privé » pour attribuer et configurer automatiquement une adresse IP privée sur l'instance. Il vous suffira ensuite de configurer les interfaces réseau du serveur dédié.
>>
>> Lorsque cette option n'est pas sélectionnée, une configuration manuelle est requise à la fois sur l'instance Public Cloud et sur le serveur dédié.
>>
>> **Options de passerelle réseau**
>>
>> Assurez-vous que les deux options sont décochées.
>>

Une fois la configuration terminée, cliquez sur `Configurez votre réseau privé`{.action}. Cette opération peut prendre quelques minutes.

Dans le tableau de bord de l'instance concernée, localisez la section « Réseaux » et cliquez sur le bouton `...`{.action} à côté de « Réseau(x) privé(s) ». Sélectionnez `Attacher un réseau`{.action}.

![Tableau de bord de l'instance avec option Attacher un réseau](images/vrack2021-01.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le ou les réseaux privés à attacher à votre instance et cliquez sur `Attacher`{.action}.

![Popup pour sélectionner et attacher un réseau prive a l'instance](images/attach_network.png){.thumbnail}

### Configurer vos interfaces réseau

> [!primary]
> Si vous avez choisi l'option permettant de configurer le réseau privé sur votre instance à l'aide du protocole DHCP, vous devez uniquement configurer les interfaces réseau sur le serveur dédié.
>

#### Configuration en cas d'utilisation du VLAN ID 0 par défaut

Avant de commencer, connectez-vous à votre serveur via SSH et listez vos interfaces réseau à l'aide de la commande suivante :

```bash
ip a
```

Pour les serveurs dédiés, repérez la ligne qui commence par ```link ether``` et vérifiez que cette interface correspond à l'interface **Privée** répertoriée dans l'onglet `Interfaces réseau`{.action} du tableau de bord de votre serveur.

Utilisez ce nom d'interface pour remplacer `NETWORK_INTERFACE` dans les configurations ci-dessous (exemple : `eth1`).

À titre d'exemple, nous utiliserons la plage d'adresses IP `192.168.0.0/16` (**masque de sous-réseau** : `255.255.0.0`).

> [!tabs]
> **Debian 11**
>>
>> Dans un éditeur de texte, ouvrez le fichier de configuration réseau situé dans `/etc/network/interfaces.d` pour le modifier. Ici, le fichier s'appelle `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Ajoutez les lignes suivantes à la configuration existante, remplacez `NETWORK_INTERFACE`, `IP_ADDRESS` et `NETMASK` par vos propres valeurs :
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>> ```
>>
>> **Exemple :**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.
>>
>> Redémarrez le service réseau pour appliquer la configuration :
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu et Debian 12+**
>>
>> A l'aide de l'éditeur de texte de votre choix, ouvrez le fichier de configuration réseau se trouvant dans `/etc/netplan/` afin de l'éditer. Ici, le fichier s'appelle `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Ajoutez les lignes suivantes à la configuration existante après la ligne `version: 2`. Remplacez `NETWORK_INTERFACE` et `IP_ADDRESS/PREFIX` par vos propres valeurs.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>           dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Exemple :**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Il est important de respecter l'alignement de chaque élément dans les fichiers `yaml` comme représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace doit être utilisée.
>> >
>>
>> Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.
>>
>> Appliquez la configuration :
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
> **AlmaLinux et Rocky Linux (8/9)**
>>
>> Une fois que vous avez identifié votre interface de réseau privé, utilisez l'éditeur de texte de votre choix pour créer le fichier de configuration réseau suivant. 
>>
>> Remplacez `NETWORK_INTERFACE` par le nom de votre interface privée.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Par exemple, si l'interface privée est nommée `eth1`, nous avons ce qui suit :
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Ensuite, utilisez l'éditeur de texte de votre choix pour modifier ce fichier.
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Ajoutez ces lignes, en remplaçant `NETWORK_INTERFACE`, `IP_ADDRESS` et `NETMASK` par vos propres valeurs :
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Exemple :**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.
>>
>> Redémarrez le service réseau pour appliquer les modifications :
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux et Rocky Linux (10)**
>>
>> Une fois que vous avez identifié le nom de votre interface privée, lancez la commande suivante pour vérifiez qu'elle est bien connectée. Dans notre exemple, notre interface est appelée `eno2` :
>>
>> ```bash 
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Si le `STATE` du `DEVICE` apparaît comme `disconnected`, il est nécessaire de le connecter avant de configurer l'IP.
>>
>> Lors de l'ajout d'une connexion **ethernet**, nous devons créer un profil de configuration que nous assignons ensuite à un périphérique.
>>
>> Exécutez la commande suivante, en remplaçant `INTERFACE_NAME` et `CONNECTION_NAME` par vos propres valeurs.
>>
>> Dans notre exemple, nous avons nommé notre profil de configuration `private-interface`.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Exemple :**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> - Vérifiez que l'interface a été correctement connectée :
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo              
>> ```
>>
>> Une fois cela fait, un nouveau fichier de configuration nommé *xxxxxxxxxx.nmconnection* sera créé dans le dossier `/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Vous pouvez alors éditer ce fichier en utilisant le gestionnaire `nmcli`, en remplaçant `IP_ADDRESS`, `PREFIX` et `CONNECTION_NAME` par vos propres valeurs.
>>
>> - Ajoutez votre IP :
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Exemple :**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Changez la configuration de **auto** à **manual** :
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Exemple :**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Rendez la configuration persistante :
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Exemple :**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> - Redémarrez votre réseau avec la commande suivante :
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Configuration Windows**
>>
>> Connectez-vous à votre serveur Windows via le bureau à distance et allez dans le **Panneau de configuration**.
>>
>> ![Windows Control Panel](images/windows_control_panel.png){.thumbnail}
>>
>> Cliquez sur `Network and Internet`{.action}.
>>
>> ![Réseau et Internet](images/windows_network_and_internet.png){.thumbnail}
>>
>> Ouvrez `Network and Sharing Center`{.action}.
>>
>> ![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}
>>
>> Cliquez sur `Change Adapter Settings`{.action}.
>>
>> ![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}
>>
>> Faites un clic-droit sur l'interface réseau secondaire, puis cliquez sur `Propriétés`{.action}.
>>
>> Notez que, dans notre exemple, `Ethernet 2` est l'interface utilisée pour le vRack. Cependant, il est possible que la carte réseau vRack utilise une interface différente. Utilisez une interface qui ne possède pas l'adresse IP principale du serveur ou qui utilise une adresse IP auto-attribuée.
>>
>> ![Windows Properties](images/windows_properties_button.png){.thumbnail}
>>
>> Double-cliquez sur `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}
>>
>> Cliquez sur **Utiliser l'adresse IP suivante**. Entrez n'importe quelle adresse **IP** de votre plage privée et le **masque** de sous-réseau approprié (`255.255.0.0` dans cet exemple) dans le champ correspondant.
>>
>> ![Utiliser l'adresse IP suivante](images/windows_use_following_ip_address.png){.thumbnail}
>>
>> Cliquez sur `OK`{.action} pour sauvegarder les modifications puis redémarrez votre serveur pour les appliquer.
>>

/// details | **Configuration lors de l'utilisation d'un identifiant VLAN différent**

Dans cet exemple, nous utiliserons **10** comme identifiant (balise) VLAN et **192.168.0.0/16** comme plage d'adresses IP privées.

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
>> Dans cet exemple, l'interface réseau privée s'appelle `eno2`.
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
>> - Ensuite, activez l'interface privée et la sous-interface VLAN :
>>
>> ```sh
>> sudo ip link set dev eno2 up
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
> **Ubuntu et Debian 12+**
>>
>> La configuration ci-dessous est basée sur Ubuntu 24.04 (Noble Numbat).
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
>> - Ici, l'interface que nous souhaitons configurer est identifiée sous le nom `eno2` avec l'adresse MAC : `d0:50:99:d6:6b:14`.
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
>> - Aperçu :
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Enregistrez et fermez le fichier, puis exécutez la commande suivante :
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
>> Dans cet exemple, l'interface privée s'appelle `eno2`.
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
>> - Aperçu :
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
>> - Récupérez les noms des interfaces et identifiez l'interface privée :
>>
>> ```sh
>> ip a
>> ```
>>
>> Dans cet exemple, l'interface privée s'appelle `eno2`. Nous devons créer une sous-interface VLAN avant d'attribuer une adresse IP privée à celle-ci.
>>
>> - Utilisez la commande suivante pour créer l'interface VLAN :
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Remplacez `vlan-name` par le nom de la sous-interface VLAN, `parent-interface` par le nom de l'interface privée et `vlan-id` par le VLAN ID.
>>
>> **Dans cet exemple :**
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
>> **Dans cet exemple :**
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
>> **Dans cet exemple :**
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
> **Windows**
>>
>> Connectez-vous à votre serveur via le bureau à distance et ouvrez l'application « Gestionnaire de serveur ». Sélectionnez ensuite `Serveur local`{.action}, puis cliquez sur le lien `Désactivé`{.action} à côté de **Association des cartes réseau** :
>>
>> ![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}
>>
>> Faites ensuite un clic droit sur l'interface réseau et sélectionnez `Ajouter à une nouvelle équipe`{.action}.
>>
>> ![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}
>>
>> Dans la fenêtre qui apparaît, créez une nouvelle équipe en entrant un nom d'équipe dans le champ **Nom de l'équipe**. Lorsque vous avez terminé, cliquez sur `OK`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}
>>
>> Il convient ensuite de préciser le tag du VLAN. Dans le panneau « **CARTES ET INTERFACES** » de l’écran « **Association des cartes réseau** », allez dans l'onglet `Interfaces d'équipe`{.action} et faites un clic droit sur l’interface que vous venez d’ajouter à la nouvelle équipe, puis cliquez sur `Propriétés`{.action}. Cliquez maintenant sur `VLAN spécifique`{.action}, et précisez le tag :
>>
>> ![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}
>>
>> Il faut maintenant configurer l’adresse IP du VLAN. Cliquez sur le bouton `Start`{.action} du menu de démarrage, puis sur `Panneau de configuration`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}
>>
>> Cliquez sur `Réseau et Internet`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}
>>
>> Cliquez ensuite sur `Centre Réseau et partage`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}
>>
>> Cliquez alors sur `Modifier les paramètres de la carte`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}
>>
>> Ensuite, faites un clic droit sur l’interface VLAN, puis cliquez sur `Propriétés`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}
>>
>> Dans notre exemple, `Ethernet 2` est l'interface utilisée pour le vRack. Cependant, il est possible que le NIC vRack soit une interface différente dans votre configuration. La bonne interface à sélectionner sera celle qui n'a pas l'adresse IP principale du serveur ou qui a une IP auto-attribuée.
>>
>> Effectuez un double clic sur `Internet Protocol Version 4 (TCP/IPv4)`{.action} :
>>
>> ![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}
>>
>> Dans l'étape suivante, cliquez sur `Utiliser l'adresse IP suivante`{.action}. Pour « **Address IP** », tapez une adresse IP de votre plage interne. Pour « **Masque de sous-réseau** », tapez « 255.255.0.0 ».
>>
>> ![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}
>>
>> Pour finir, cliquez sur le bouton `OK`{.action} pour sauvegarder les modifications et enfin redémarrez le serveur.
>>

///

## Aller plus 

[Créer plusieurs VLAN dans le vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurer le vRack sur vos serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Échangez avec notre [communauté d'utilisateurs](/links/community).
