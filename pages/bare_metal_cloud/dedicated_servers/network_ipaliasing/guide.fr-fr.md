---
title: 'Configurer son adresse IP en alias'
excerpt: 'Découvrez comment ajouter des Additional IP à votre configuration'
updated: 2024-09-27
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](/links/network/additional-ip). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

L'alias d'IP (*IP aliasing* en anglais) est une configuration spéciale du réseau de votre serveur dédié OVHcloud, qui vous permet d'associer plusieurs adresses IP sur une seule interface réseau.

**Ce guide vous explique comment réaliser cet ajout.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/s1qDqQ0p07Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal){.external}
- Avoir une ou plusieurs [Additional IP](/links/network/additional-ip){.external}.
- Être connecté en SSH au serveur ou via remote desktop pour Windows.

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr/compare/) pour plus d’informations.

## En pratique

Les sections suivantes contiennent les configurations des distributions que nous proposons actuellement et les distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou via une session de connexion GUI (RDP pour un serveur Windows).

> [!primary]
>  
>Si vous souhaitez utiliser une distribution récente, la procédure adéquate pour configurer votre interface réseau peut nécessiter des adaptations. Si vous rencontrez des difficultés, nous vous recommandons de consulter la documentation relative à votre système d’exploitation.

**Veuillez prendre note de la terminologie suivante qui sera utilisée dans les exemples de code et les instructions des sections du guide ci-dessous :**

|Terme|Description|Exemples|
|---|---|---|
|ADDITIONAL_IP|Adresse IP supplémentaire attribuée à votre service|203.0.113.1|
|NETWORK_INTERFACE|Nom de l'interface réseau|*eth0*, *ens3*|
|ID|ID de l'alias IP, commençant par *0* (en fonction du nombre d'IP supplémentaires à configurer)|*0*, *1*|

Dans les exemples ci-dessous, nous utiliserons l'éditeur de texte `nano`. Avec certains systèmes d'exploitation, vous devrez d'abord l'installer avant de l'utiliser. Si c'est le cas, vous serez invité à le faire. Vous pouvez bien sûr utiliser l'éditeur de texte de votre choix.

### Debian 11

Par défaut, le fichier de configuration est situé dans `/etc/network/interfaces.d/`. Il est recommandé de commencer par sauvegarder le fichier de configuration correspondant.

#### Étape 1 : créer une sauvegarde

Dans notre exemple, notre fichier s'appelle `50-cloud-init`, nous copions donc le fichier `50-cloud-init` en utilisant la commande suivante :

```bash
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

En cas d'erreur, vous pourrez alors revenir en arrière grâce aux commandes ci-dessous :

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Étape 2 : éditer le fichier de configuration

> [!primary]
>
> Les noms donnés aux interfaces réseau dans ce guide peuvent différer des vôtres. Veuillez adapter les manipulations en conséquence.

Vous pouvez désormais modifier le fichier de configuration :

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Vous devez ensuite ajouter une interface virtuelle ou un alias ethernet. Dans notre exemple, notre interface s'appelle `eth0`, donc notre alias est `eth0:0`. Faites ceci pour chaque adresse Additional IP que vous souhaitez configurer.

Ne modifiez pas les lignes existantes dans le fichier de configuration, ajoutez simplement votre Additional IP au fichier comme indiqué ci-dessous, en remplaçant `ADDITIONAL_IP/32` ainsi que l'interface virtuelle (si votre serveur n'utilise pas **eth0:0**) par vos propres valeurs :

```console
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Vous pouvez également configurer votre Additional IP en ajoutant les lignes suivantes dans le fichier de configuration :

```console
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Avec la configuration ci-dessus, l'interface virtuelle est activée ou désactivée chaque fois que l'interface `eth0` est activée ou désactivée.

Si vous avez deux Additional IP à configurer, le fichier `/etc/network/interfaces.d/50-cloud-init` doit ressembler à ceci :

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

Ou à cela :

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```

Exemple de configuration :

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address 203.0.113.1
netmask 255.255.255.255
```

Ou :

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 203.0.113.1 netmask 255.255.255.255 broadcast 203.0.113.1
pre-down /sbin/ifconfig eth0:0 down
```

#### Étape 3 : redémarrer l’interface

Pour redémarrer l'interface, utilisez la commande suivante :

```bash
sudo /etc/init.d/networking restart
```

### Fedora 39 et versions ultérieures

Fedora utilise dorénavant des fichiers clés (*keyfiles*).
Fedora utilisait auparavant des profils réseau stockés par NetworkManager au format ifcfg dans le répertoire `/etc/sysconfig/network-scripts/`.<br>
Le ifcfg étant à présent déprécié, NetworkManager ne crée plus par défaut les nouveaux profils dans ce format. Le fichier de configuration se trouve à présent dans `/etc/NetworkManager/system-connections/`.

#### Étape 1 : créer une sauvegarde

> [!primary]
>
> Notez que le nom du fichier réseau dans notre exemple peut différer du vôtre. Veuillez adapter les exemples avec le nom approprié.
>

Il est recommandé de commencer par sauvegarder le fichier de configuration correspondant. Dans notre exemple, notre fichier de configuration s'appelle `cloud-init-eno1.nmconnection` :

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```
En cas d'erreur, vous pourrez alors revenir en arrière grâce aux commandes ci-dessous :

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Étape 2 : éditer le fichier de configuration

> [!primary]
> Veuillez noter que le nom du fichier réseau dans notre exemple peut être différent du vôtre. Veuillez adapter les commandes à votre nom de fichier.
> 

Pour obtenir le nom de votre interface réseau afin d'éditer le fichier réseau approprié, vous pouvez exécuter l'une des commandes suivantes :

```bash
ip a
```

```bash
nmcli connection show
```

Ne modifiez pas les lignes existantes dans le fichier de configuration, ajoutez votre Additional IP dans le fichier comme suit, en remplaçant `ADDITIONAL_IP/32` par vos propres valeurs :

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

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

Exemple de configuration :

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.1/32
```

#### Étape 3 : redémarrer l'interface

Vous devez maintenant redémarrer votre interface :

```bash
sudo systemctl restart NetworkManager
```

### Debian 12, Ubuntu 20.04 et versions suivantes

Par défaut, les fichiers de configuration sont situés dans le répertoire `/etc/netplan`.

La meilleure approche consiste à créer un fichier de configuration séparé pour configurer les adresses Additional IP. Cela permet de revenir facilement en arrière en cas d'erreur.

#### Étape 1 : déterminer l’interface

```bash
ip a
```

Notez le nom de l'interface (celle sur laquelle est configurée l'adresse IP principale de votre serveur).

#### Étape 2 : créer le fichier de configuration

Ensuite, créez un fichier de configuration avec une extension `.yaml`. Dans notre exemple, notre fichier s'appelle `51-cloud-init.yaml`.

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Ensuite, éditez le fichier avec le contenu ci-dessous, en remplaçant `INTERFACE_NAME` et `ADDITIONAL_IP` par vos propres valeurs :

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    INTERFACE_NAME:
      dhcp4: true
      addresses:
        - ADDITIONAL_IP/32
```

Si vous avez deux adresses Additional IP à configurer, le fichier de configuration devrait ressembler à ceci :

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
> Il est important de respecter l’alignement de chaque élément de ce fichier, tel que représenté dans l’exemple ci-dessus. N’utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire. 
>

Exemple de configuration :

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: true
      addresses:
        - 203.0.113.1/32
```

Enregistrez et fermez le fichier. Vous pouvez tester la configuration avec la commande suivante :

```bash
sudo netplan try
```

#### Étape 3 : appliquer la configuration

Si elle est correcte, appliquez-la à l'aide de la commande suivante :

```bash
sudo netplan apply
```

> [!primary]
> Lors de l'utilisation de la commande `netplan try`, il est possible que le système renvoie un message d'avertissement tel que `Permissions for /etc/netplan/xx-cloud-init.yaml are too open. Netplan configuration should NOT be accessible by others`. Cela signifie simplement que le fichier n'a pas de permissions restrictives. Cela n'affecte pas la configuration de votre Additional IP. Pour plus d'informations sur les permissions de fichiers, consultez la [documentation officielle d'ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.

### AlmaLinux (8 & 9), Rocky Linux (8 & 9)

Le fichier de configuration principal se trouve dans `/etc/sysconfig/network-scripts/`. Dans notre exemple, il est appelé `ifcfg-eth0`. Avant d'apporter des modifications, vérifiez le nom de fichier réel dans ce dossier.

Pour chaque Additional IP à configurer, nous créons un fichier de configuration séparé avec les paramètres suivants : `ifcfg-NETWORK_INTERFACE:ID`. Où `NETWORK_INTERFACE` représente l'interface physique et `ID` est l'interface réseau virtuelle ou l'alias ethernet commençant par une valeur de 0. Par exemple, pour notre interface nommée `eth0`, le premier alias est `eth0:0`, le second alias est `eth0:1`, etc...

#### Étape 1 : déterminer l'interface

```bash
ip a
```

Notez le nom de l'interface (celle sur laquelle l'adresse IP principale de votre serveur est configurée).

#### Étape 2 : créer le fichier de configuration

Commencez par créer le fichier de configuration. Remplacez `NETWORK_INTERFACE:ID` par vos propres valeurs.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Ensuite, modifiez le fichier avec le contenu ci-dessous, en remplaçant `NETWORK_INTERFACE:ID` et `ADDITIONAL_IP` par vos propres valeurs :

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # Pour CentOS utilisez "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

Exemple de configuration :

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # Pour CentOS utilisez "static"
IPADDR=203.0.113.1
NETMASK=255.255.255.255
BROADCAST=203.0.113.1
```

#### Étape 3 : redémarrer l'interface alias

Vous devez maintenant redémarrer votre interface :

```bash
sudo systemctl restart NetworkManager
```

### cPanel

#### Étape 1 : accéder à la section Gestion IP de WHM

Dans l'espace client WHM, cliquez sur `IP Functions`{.action} et sélectionnez `Add a New IP Address`{.action} dans le menu de gauche.

![Ajouter une nouvelle adresse IP](images/Cpanel-1.png){.thumbnail}

#### Étape 2 : Ajouter les informations des Additional IP

Renseignez votre adresse Additional IP sous la forme « xxx.xxx.xxx.xxx » dans le champ « New IP or IP range to add ».

Sélectionnez `255.255.255.255` comme masque de sous-réseau puis cliquez sur `Submit`{.action}.

![renseigner de nouvelles informations sur la nouvelle adresse IP](images/Cpanel-2024.png){.thumbnail}

> [!warning]
>
> Attention, si vous avez plusieurs IP à configurer sur un même bloc et que vous les ajoutez toutes en même temps, le système WHM vous forcera à utiliser le masque de sous-réseau `255.255.255.0`. Il n'est pas recommandé d'utiliser cette configuration, il faut ajouter chaque IP individuellement pour pouvoir utiliser le masque de sous-réseau approprié `255.255.255.255`.
>

#### Étape 3 : Vérifier la configuration IP actuelle

De retour dans la section `IP Functions`{.action}, cliquez sur `Show or Delete Current IP Addresses`{.action} pour vérifier que l'adresse Additional IP a été correctement ajoutée.

![check configured IP](images/Cpanel-2024-1.png){.thumbnail}

### Windows Servers

Les serveurs sous Windows sont souvent en DHCP au niveau de la configuration réseau. Si vous avez déjà paramétré une Additional IP ou passé votre configuration en IP fixe, rendez-vous directement à l’étape suivante.

Sinon, vous devez d’abord passer d’une configuration DHCP au niveau du réseau à une configuration IP fixe.

Ouvrez l’invite de commande `cmd`{.action} ou `powershell`{.action}, puis tapez la commande suivante :

```powershell
ipconfig
```

Cela vous donnera un résultat similaire à l’exemple suivant :

![Result of "ipconfig" command](images/ipconfig.png){.thumbnail}

Identifiez et notez votre adresse IPv4, votre masque de sous-réseau, votre passerelle par défaut et le nom du contrôleur d'interface réseau (carte réseau).

Dans notre exemple, l’adresse  IP du serveur est **192.0.2.28**.

Vous pouvez effectuer les prochaines étapes via des lignes de commande ou l’interface graphique.

#### En lignes de commande (recommandé)

Dans les commandes ci-dessous, vous devez remplacer les informations suivantes :

|Commande|Valeur|
|---|---|
|NETWORK_ADAPTER| Nom de la carte réseau (dans notre exemple : « Ethernet 2 »).|
|IP_ADDRESS| Adresse IP du serveur (dans notre exemple : « 192.0.2.28 »).|
|SUBNET_MASK| Masque de sous-réseau (dans notre exemple : « 255.255.255.0 »).|
|GATEWAY| Passerelle par défaut (dans notre exemple : « 192.0.2.254 »).|
|ADDITIONAL_IP| Adresse Additional IP que vous voulez ajouter.|

> [!warning]
>
> Attention, le serveur ne sera plus accessible si vous entrez des informations incorrectes. Vous devrez alors effectuer les corrections en mode WinRescue ou via le KVM.
> 

Dans l’invite de commande :

Passez en premier lieu en IP fixe :

```powershell
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```

Définissez ensuite le serveur DNS :

```powershell
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```

Puis ajoutez une adresse Additional IP :

```powershell
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Votre Additional IP est désormais fonctionnelle.

#### Via l’interface graphique d’utilisateur

1. Allez dans le menu `Démarrer`{.action}, puis `Panneau de gestion`{.action}, `Réseau et Internet`{.action}, `Centre de réseau et Partage`{.action} et `Modifier les paramètres de la carte`{.action} dans la barre de gauche ;
2. Effectuez un clic droit sur votre connexion réseau, dans notre exemple `Ethernet 2`{.action} ;
3. Cliquez sur `Propriétés`{.action} ;
4. Sélectionnez `Protocole Internet Version 4 (TCP/IPv4)`{.action}, puis cliquez sur `Propriétés`{.action} ;
5. Cliquez sur `Utiliser l’adresse IP suivante`{.action} et renseignez l’IP principale de votre serveur, le masque sous-réseau et la passerelle par défaut obtenus grâce à la commande `ipconfig`{.action} ci-dessus. Dans la case « Serveur DNS Préféré », tapez « 213.186.33.99 ».

![Propriétés Protocole Internet Version 4 (TCP/IPv4)](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Attention, le serveur ne sera plus accessible si vous entrez des informations incorrectes. Vous serez alors obligé d’effectuer les corrections en mode [WinRescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode#windows) ou via le [KVM](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
> 

Ensuite, cliquez sur `Avancé`{.action} en étant toujours positionné dans les `Paramètres TCP/IP`{.action}.

![Propriétés Protocole Internet Version 4 (TCP/IPv4)](images/configure-main-ip-1.png){.thumbnail}

Dans la partie « Adresse IP », cliquez sur `Ajouter`{.action} :

![Paramètres avancés TCP/IPv4](images/add-additional-ip.png){.thumbnail}

Renseignez alors votre Additional IP et le masque de sous-réseau « **255.255.255.255** ». Cliquez sur `Ajouter`{.action}.

![Adresses TCP/IP](images/configure-additional-ip.png){.thumbnail}

Cliquez sur `OK`{.action} pour valider votre configuration.

Votre Additional IP est désormais fonctionnelle, vous pouvez vérifier la configuration avec la commande suivante :

```powershell
ipconfig
```

Cela vous donnera un résultat similaire à l’exemple suivant :

![Final configuration](images/final-ip-configuration.png){.thumbnail}

### Plesk

#### Etape 1 : accéder à la section Gestion de Plesk IP

Dans le panneau de configuration Plesk, choisissez `Outils et paramètres`{.action} dans la barre latérale gauche.

![accès à la gestion des adresses IP](images/pleskip1.png){.thumbnail}

Cliquez sur `Adresses IP`{.action} sous **Outils et ressources**.

#### Etape 2 : ajouter les informations IP supplémentaires

Dans cette section, cliquez sur le bouton `Add IP Address`{.action}.

![ajouter des informations IP](images/Plesk-2024.png){.thumbnail}

Entrez votre adresse Additional IP sous la forme `xxx.xxx.xxx.xxx/32` dans le champ « Adresse IP et masque de sous-réseau », puis cliquez sur `OK`{.action}.

![ajouter des informations IP](images/Plesk-2024-1.png){.thumbnail}

#### Etape 3 : vérifier la configuration IP actuelle

Dans la section « Adresses IP », vérifiez que l'adresse Additional IP a été correctement ajoutée.

![configuration IP actuelle](images/Plesk-2024-2.png){.thumbnail}

#### Résolution des défauts

Si vous ne parvenez pas à établir une connexion entre le réseau public et votre alias IP et que vous soupçonnez un problème réseau, redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) et configurez l'alias directement sur le serveur.

Pour ce faire, une fois que vous avez redémarré votre serveur en mode rescue, veuillez exécuter la commande suivante :

```bash
ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Où vous remplacerez « ADDITIONAL_IP » par la véritable Additional IP.

Il vous suffit ensuite d'effectuer un ping depuis votre Additional IP vers l'extérieur. Si cela fonctionne, cela signifie probablement qu'il y a une erreur de configuration devant être corrigée. Si, au contraire, l'adresse IP ne fonctionne toujours pas, veuillez ouvrir un ticket auprès de l'équipe d'assistance via le [Centre d'aide OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help){.external} en précisant les informations suivantes :

- Le nom et la version du système d'exploitation que vous utilisez sur votre serveur.
- Le nom et le répertoire du fichier de configuration réseau.
- Le contenu de ce fichier.

## Aller plus loin

[Mode bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Échangez avec notre [communauté d'utilisateurs](/links/community).
