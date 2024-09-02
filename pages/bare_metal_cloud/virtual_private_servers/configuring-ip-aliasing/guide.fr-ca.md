---
title: 'Configurer une adresse IP en alias'
excerpt: 'Découvrez comment ajouter des adresses Additional IP à votre configuration VPS'
updated: 2024-03-27
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](/links/network/additional-ip). Cela n'a pas de conséquences sur ses fonctionnalités.
>

## Objectif

L'alias d'IP (*IP aliasing* en anglais) est une configuration spéciale du réseau pour vos serveurs OVHcloud. Elle vous permet d'associer plusieurs adresses IP sur une seule interface réseau.

**Découvrez comment ajouter des adresses Additional IP à votre configuration réseau.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et nous ne pourrons pas vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://marketplace.ovhcloud.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d'une offre [VPS](https://www.ovhcloud.com/fr-ca/vps/) dans votre compte OVHcloud
- Disposer d'une [adresse Additional IP](https://www.ovhcloud.com/fr-ca/bare-metal/ip/)
- Avoir un accès administrateur (sudo) via SSH ou GUI sur votre serveur
- Avoir les connaissances de base sur les réseaux et leur administration

## En pratique

Ce guide contient les configurations des distributions/systèmes d'exploitation les plus couramment utilisés. La première étape consiste toujours à se connecter à votre serveur via SSH ou via une session de connexion à l'interface graphique utilisateur (RDP pour un VPS Windows). Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées (Administrateur/sudo).

> [!primary]
>
En ce qui concerne les différentes versions de distributions, veuillez noter que la procédure appropriée pour configurer votre interface réseau ainsi que les noms de fichiers peuvent avoir été modifiés. Si vous rencontrez des difficultés, nous vous recommandons de consulter la documentation relative à votre système d’exploitation.
>

**Veuillez prendre note de la terminologie suivante qui sera utilisée dans les exemples de code et les instructions détaillées dans ce guide :**

|Terme|Description|Exemples|
|---|---|---|
|ADDITIONAL_IP|Adresse Additional IP attribuée à votre service|203.0.113.0|
|NETWORK_INTERFACE|Nom de l'interface réseau|*eth0*, *ens3*|
|ID|ID de l'alias IP, commençant par *0* (en fonction du nombre d'adresses IP supplémentaires à configurer)|*0*, *1*|

### Debian 10/11

#### Étape 1 : désactiver la configuration automatique du réseau

Ouvrez le chemin d'accès au fichier suivant avec un éditeur de texte, dans notre exemple nous utilisons `nano`. :

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Entrez la ligne suivante, puis enregistrez et quittez l'éditeur.

```console
network: {config: disabled}
```

La création de ce fichier de configuration empêche l'exécution automatique des modifications apportées à la configuration de votre réseau.

#### Étape 2 : créer une sauvegarde

Par défaut, le fichier de configuration est situé dans le chemin `etc/network/interfaces.d`.

Dans notre exemple, notre fichier s'appelle `50-cloud-init`, donc nous faisons une copie du fichier `50-cloud-init` en utilisant la commande suivante :

```bash
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

En cas d'erreur, vous pourrez revenir sur les modifications en utilisant les commandes ci-dessous :

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Étape 3 : éditer le fichier de configuration

Vérifiez le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

Ouvrez le fichier de configuration réseau pour le modifier à l'aide de la commande suivante :

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Pour configurer votre adresse Additional IP, ajoutez une interface virtuelle ou un alias Ethernet à votre interface réseau. Dans notre exemple, notre interface s'appelle `eth0`, donc notre premier alias est `eth0:0`. Faites ceci pour chaque adresse Additional IP que vous souhaitez configurer.

Ne modifiez pas les lignes existantes dans le fichier de configuration, ajoutez uniquement votre adresse Additional IP au fichier comme suit, en remplaçant `NETWORK_INTERFACE`, `ID` et `ADDITIONAL_IP` par vos propres valeurs :

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Si vous configurez plus d'une adresse Additional IP, votre fichier de configuration devrait ressembler à ceci :

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP1
address ADDITIONAL_IP2
netmask 255.255.255.255
```

**Exemple**

```console
auto eth0:0
iface eth0:0 inet static
address 203.0.113.0
netmask 255.255.255.255
```

#### Étape 4 : redémarrer l'interface

Appliquez les modifications à l'aide de la commande suivante :

```bash
sudo systemctl restart networking
```

### Debian 12, Ubuntu 20.04 et versions ultérieures

Le fichier de configuration de vos adresses Additional IP se trouve dans le fichier `/etc/netplan/`. Dans cet exemple, il s'appelle `50-cloud-init.yaml`.

La meilleure pratique consiste à créer un fichier de configuration distinct pour définir les adresses Additional IP. De cette manière, vous pouvez facilement revenir sur les modifications en cas d'erreur.

#### Étape 1 : créer le fichier de configuration du réseau

Dans notre exemple, notre fichier s'appelle `51-cloud-init.yaml` :

```bash
sudo touch /etc/netplan/51-cloud-init.yaml
```

#### Étape 2 : modifier le fichier de configuration

Vérifiez le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

Ouvrez le fichier de configuration réseau pour le modifier à l'aide de la commande suivante :

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Editez le fichier avec le contenu ci-dessous, en remplaçant `INTERFACE_NAME` et `ADDITIONAL_IP` par vos propres valeurs :

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32    
```

Si vous avez plus d'une adresse Additional IP à configurer, le fichier de configuration devrait ressembler à ceci :

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32
```


> [!warning]
>
> Il est important de respecter l'alignement de chaque élément de ce fichier tel que représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement.
>

**Exemple**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.0/32
```

Enregistrez et fermez le fichier.

#### Étape 3 : appliquer la nouvelle configuration réseau

Testez votre configuration à l'aide de la commande suivante :

```bash
sudo netplan try
```

Si elle est correcte, appliquez-la à l'aide de la commande suivante :

```bash
sudo netplan apply
```

Répétez cette procédure pour chaque adresse Additional IP.

### CentOS 7, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

Le fichier de configuration principal est situé dans le dossier `/etc/sysconfig/network-scripts/`. Dans cet exemple, il est appelé `ifcfg-eth0`. Avant de faire des changements, vérifiez le nom réel du fichier dans ce dossier.

Pour chaque adresse Additional IP à configurer, créez un fichier de configuration séparé avec les paramètres suivants : `ifcfg-NETWORK_INTERFACE:ID`. Où `NETWORK_INTERFACE` représente l'interface physique et `ID` représente l'interface réseau virtuelle ou l'alias ethernet commençant par une valeur de 0. Par exemple, pour notre interface nommée `eth0` le premier alias est `eth0:0`, le second alias est `eth0:1`, etc.

#### Étape 1 : déterminer l'interface

Vérifiez le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

#### Étape 2 : créer le fichier de configuration

Tout d'abord, créez le fichier de configuration. Remplacez `NETWORK_INTERFACE:ID` par vos propres valeurs.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Ensuite, éditez le fichier avec le contenu ci-dessous, en remplaçant `NETWORK_INTERFACE:ID`, et `ADDITIONAL_IP` par vos propres valeurs :

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

**Exemple**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=203.0.113.0
NETMASK=255.255.255.255
BROADCAST=203.0.113.0
```

#### Étape 3 : redémarrer l'interface

```bash
sudo systemctl restart network
```

#### Pour AlmaLinux et Rocky Linux

```bash
sudo systemctl restart NetworkManager
```

### Fedora 37 et versions ultérieures

Fedora utilise maintenant des fichiers clés. NetworkManager stockait auparavant les profils réseau au format ifcfg dans ce répertoire : `/etc/sysconfig/network-scripts/`. Cependant, le format ifcfg est maintenant obsolète. Par défaut, NetworkManager ne crée plus de nouveaux profils dans ce format. Le fichier de configuration se trouve maintenant dans `/etc/NetworkManager/system-connections/`.

#### Étape 1 : créer une sauvegarde

Dans notre exemple, notre fichier s'appelle `cloud-init-eno1.nmconnection`, donc nous faisons une copie du fichier `cloud-init-eno1.nmconnection` en utilisant la commande suivante :

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

En cas d'erreur, vous pourrez revenir sur les modifications en utilisant les commandes ci-dessous :

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Étape 2 : modifier le fichier de configuration

> [!primary]
> Veuillez noter que le nom du fichier réseau dans notre exemple peut être différent du vôtre. Veuillez adapter les commandes à votre nom de fichier.
> 

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Ne modifiez pas les lignes existantes dans le fichier de configuration, ajoutez votre Additional IP au fichier comme suit, en remplaçant `ADDITIONAL_IP/32` par vos propres valeurs :

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Si vous avez deux adresses Additional IP à configurer, la configuration devrait ressembler à ceci :

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Exemple**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.0/32
```

#### Étape 3 : redémarrer l'interface

Redémarrez votre interface :

```bash
sudo systemctl restart NetworkManager
```

### cPanel

#### Étape 1 : accéder à la section de gestion des IP du WHM

Dans l'espace client WHM, cliquez sur `IP Functions`{.action} et sélectionnez `Add a New IP Address`{.action} dans le menu de gauche.

![Add new IP](images/cpanel-alma-1.png){.thumbnail}

#### Étape 2 : ajouter les informations des Additional IP

Renseignez votre adresse Additional IP sous la forme « xxx.xxx.xxx.xxx » dans le champ « New IP or IP range to add ».

Sélectionnez `255.255.255.255` comme masque de sous-réseau puis cliquez sur `Submit`{.action}.

![enter new IP information](images/cpanel-alma-2.png){.thumbnail}

> [!warning]
>
> Attention, si vous avez plusieurs IP à configurer sur un même bloc et que vous les ajoutez toutes en même temps, le système WHM vous forcera à utiliser le masque de sous-réseau `255.255.255.0`. Il n'est pas recommandé d'utiliser cette configuration, il faut ajouter chaque IP individuellement pour pouvoir utiliser le masque de sous-réseau approprié `255.255.255.255`.
>

#### Étape 3 : vérifier la configuration IP actuelle

De retour dans la section `IP Functions`{.action}, cliquez sur `Show or Delete Current IP Addresses`{.action} pour vérifier que l'adresse Additional IP a été correctement ajoutée.

![check configured IP](images/cpanel-alma-3.png){.thumbnail}

### Plesk

#### Étape 1 : accéder à la gestion d'IP de Plesk

Dans le panneau de configuration Plesk, choisissez `Tools & Settings`{.action} dans la barre latérale gauche.

![accès à la gestion des adresses IP](images/pleskip1.png){.thumbnail}

Cliquez sur `IP Addresses`{.action} sous **Tools & Settings**.

#### Étape 2 : ajouter les informations des Additional IP

Dans cette section, cliquez sur le bouton `Add IP Address`{.action}.

![ajouter des informations IP](images/Plesk-2024-vps.png){.thumbnail}

Entrez votre adresse Additional IP sous la forme `xxx.xxx.xxx.xxx/32` dans le champ « IP address and subnet mask », puis cliquez sur `OK`{.action}.

![ajouter des informations IP](images/Plesk-additional-ip.png){.thumbnail}

#### Étape 3 : vérifier la configuration IP actuelle

Dans la section « IP Addresses », vérifiez que l'adresse Additional IP a été correctement ajoutée.

![configuration IP actuelle](images/plesk-final-configuration.png){.thumbnail}

### Windows Server

#### Étape 1 : vérifier la configuration réseau

Faites un clic droit sur le bouton `Menu Démarrer`{.action} et ouvrez `Exécuter`{.action}.

Tapez `cmd` et cliquez sur `OK`{.action} pour ouvrir l'application de ligne de commande.

![cmdprompt](images/vps_win07.png){.thumbnail}

Pour récupérer la configuration IP actuelle, entrez `ipconfig` dans l'invite de commande.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : openstacklocal
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

#### Étape 2 : modifier les propriétés IPv4

1. Allez dans le menu `Démarrer`{.action}, puis `Panneau de gestion`{.action}, `Réseau et Internet`{.action}, `Centre de réseau et Partage`{.action} et `Modifier les paramètres de la carte`{.action} dans la barre de gauche ;
2. Effectuez un clic droit sur `Connexion au réseau local`{.action} ;
3. Cliquez sur `Propriétés`{.action} ;
4. Sélectionnez `Protocole Internet Version 4 (TCP/IPv4)`{.action}, puis cliquez sur `Propriétés`{.action} ;
5. Cliquez sur `Utiliser l’adresse IP suivante`{.action} et renseignez l’IP principale de votre serveur, le masque sous-réseau et la passerelle par défaut obtenus grâce à la commande `ipconfig`{.action} ci-dessus. Dans la case « Serveur DNS Préféré », tapez « 213.186.33.99 ».

![change the ip configuration](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Attention, le serveur ne sera plus accessible si vous entrez des informations incorrectes. Vous serez alors obligé d’effectuer les corrections via le KVM.
> 

#### Étape 3 : ajouter l'adresse Additional IP dans les Paramètres TCP/IP avancés

Dans la nouvelle fenêtre, cliquez sur `Ajouter...`{.action} sous « Adresses IP ». Entrez votre adresse Additional IP et le masque de sous-réseau (255.255.255.255).

![advance configuration section](images/configure-additional-ip.png){.thumbnail}

Confirmez en cliquant sur `Ajouter`{.action}.

![Additional IP configuration](images/additional-ip-config.png){.thumbnail}

Cliquez ensuite sur `OK`{.action} pour appliquer la configuration.

![Additional IP configuration](images/final-configuration.png){.thumbnail}

Vous perdrez la connexion à votre serveur pendant quelques secondes.

#### Étape 4 : vérifier la nouvelle configuration réseau

Ouvrez l'invite de commandes (cmd) et entrez `ipconfig`. La configuration doit maintenant inclure la nouvelle adresse Additional IP.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   IPv4 Address. . . . . . . . . . . : 203.0.113.0
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

### Diagnostic

Tout d'abord, redémarrez votre serveur via la ligne de commande ou son interface utilisateur. Si vous ne parvenez toujours pas à établir une connexion entre le réseau public et votre adresse IP d'alias et que vous suspectez un problème réseau, redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue). Vous pouvez ensuite configurer l'adresse Additional IP directement sur le serveur.

Une fois que vous êtes connecté à votre serveur via SSH, entrez la commande suivante :

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Pour tester la connexion, envoyez un ping à votre adresse Additional IP depuis l'extérieur. S'il répond en mode rescue, cela signifie probablement qu'il y a une erreur de configuration. Toutefois, si l'IP ne fonctionne toujours pas, veuillez en informer nos équipes du support en créant un [ticket d'assistance](https://help.ovhcloud.com/csm?id=csm_get_help).

## Aller plus loin <a name="go-further"></a>

[Activer le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
