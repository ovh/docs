---
title: "Configurer l'IPv6 sur un serveur VPS"
excerpt: "Apprenez à configurer l'IPv6 sur votre serveur VPS OVHcloud"
updated: 2024-09-11
---

## Objectif

L'IPv6 est la dernière version de l'*Internet Protocol* (IP). Chaque serveur VPS OVHcloud est livré avec une adresse IPv4 ainsi qu'une adresse IPv6. Par défaut, seule l'IPv4 y est configurée. Si vous devez configurer l'IPv6, vous devez le faire manuellement sur votre système.

**Apprenez à configurer l'IPv6 sur votre serveur VPS OVHcloud via plusieurs méthodes.**

> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'un [serveur VPS OVHcloud](https://www.ovhcloud.com/fr-ca/vps/){.external}.
- Être connecté à votre VPS en SSH (accès root) ou via un bureau à distance (Windows).
- Disposer de connaissances basiques en réseau.
- Être connecté à l'[espace client OVHcloud](/links/manager){.external} ou à l'[API OVHcloud](https://ca.api.ovh.com/).

## En pratique

Les sections suivantes contiennent des configurations pour les distributions que nous proposons actuellement, ainsi que pour les distributions/systèmes d'exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur via SSH ou une session de connexion GUI (RDP pour un VPS Windows). 

> [!warning]
>
> Veuillez noter que sur les systèmes d'exploitation Linux récents que nous proposons pour les VPS, l'adresse IPv6 est configurée par défaut. Dans ce cas, vous n'avez pas besoin de la configurer. Assurez-vous de vérifier le fichier de configuration de votre système d'exploitation avant d'effectuer tout changement.
>

La configuration de l'IPv6 sur votre serveur VPS s'effectue en plusieurs étapes. Vous serez régulièrement invité à utiliser des commandes ou à personnaliser la configuration de votre serveur.

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit de l’adresse IPv6 assignée à votre service|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6, généralement de 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Il s'agit de la passerelle de votre bloc IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Étape 1 : obtenir les informations réseau nécessaires

La première étape consiste à récupérer l’adresse IPV6 et la gateway IPv6 assignées à votre serveur. Deux méthodes sont possibles, poursuivez vers celle que vous souhaitez utiliser.

- [Obtenir les informations réseau via l'espace client](#viacontrolpanel).
- [Obtenir les informations réseau via les API](#viaapi).

#### Via votre espace client <a name="viacontrolpanel"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

L'adresse IPv6 et la gateway IPv6 assignées à votre serveur apparaissent dans la partie `IP`. Récupérez ces dernières puis poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

![configureipv6](images/vps_ipv6_information.png){.thumbnail}

#### Via les API OVHcloud <a name="viaapi"></a>

Rendez-vous sur le site <https://ca.api.ovh.com/> et connectez-vous à ce dernier avec votre identifiant OVHcloud. Utilisez ensuite les deux API ci-dessous.

La première vous permet de récupérer l'adresse IPv6 assignée à votre serveur.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips
>

La seconde vous permet de récupérer la gateway IPv6 assignée à votre serveur.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips/{ipAddress}
>

Une fois les adresses récupérées, continuez à l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

### Étape 2 : appliquer la configuration IPv6 <a name="applyipv6"></a>

Une fois les informations nécessaires pour la configuration IPv6 en votre possession, connectez-vous en SSH à votre VPS. Si besoin, aidez-vous des informations de notre documentation « [Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction){.external} ».

Il existe plusieurs méthodes pour appliquer la configuration IPv6. En fonction de votre situation et de vos besoins, poursuivez vers celle que vous souhaitez utiliser.

- [Application non persistante](#nonpersistent).
- [Application persistante sur Debian et dérivés (Ubuntu, Crunchbang, SteamOS…)](#persistentdebian).
- [Application persistante sur Redhat et dérivés (CentOS, Rocky Linux & Alma Linux…)](#persistentredhat).
- [Application persistante sur Fedora](#persistentfedora).
- [Application persistante sur Windows Server](#persistentwindows).

#### Application non persistante <a name="nonpersistent"></a>

> [!warning]
>
> Cette configuration sera perdue après un redémarrage de votre serveur VPS (configuration non persistante). 
> 

Connecté en SSH à votre VPS, utilisez les commandes suivantes. Prenez soin de personnaliser ces dernières pour :

- les éléments génériques (*YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) grâce aux informations récupérées précédemment ;
- l'interface réseau si celle que vous utilisez n'est pas **eth0**.

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Application persistante sur Debian et dérivés (Ubuntu, Crunchbang, SteamOS…) <a name="persistentdebian"></a>

> [!warning]
>
> Avant de modifier un fichier de configuration, créez toujours une sauvegarde de l'original en cas de problème.
>

Deux méthodes existente pour configurer votre réseau selon le système d'exploitation installé sur votre serveur :

- **pour Debian 10 et 11** : utilisez la [méthode basée sur le fichier *interfaces*](#interfaces) ;

- **pour Debian 12, Ubuntu 20.04 et versions ultérieures** : utilisez la [méthode basée sur la fonction *Netplan*](#netplan).

Dans certains cas, il se peut que la méthode à utiliser ne soit pas celle spécifiée ci-dessus. Pour vous en assurer, naviguez dans votre système pour vérifier la méthode active dans votre cas. Visitez le site <https://netplan.io/> pour plus d'informations, si nécessaire.

> [!primary]
>
> Soyez vigilant, les noms exacts de fichiers peuvent varier.
>

##### Configuration des fichiers *interfaces* <a name="interfaces"></a>

Par défaut, les fichiers de configuration sont situés dans `/etc/network/interfaces.d/`.

La méthode la plus souvent préconisée est de créer un fichier de configuration dans le répertoire `/etc/network/interfaces.d/`. Dans notre exemple, notre fichier s'appelle `51-cloud-init-ipv6` :

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Cela vous permet de séparer la configuration IPv6 et de rétablir facilement les modifications en cas d'erreur.

Ajoutez les lignes suivantes au fichier. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs personnalisées.

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Voici un exemple concret :

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

Redémarrez ensuite votre service réseau avec l'une des commandes suivantes :

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

Vous pouvez également ajouter la configuration ci-dessus à l'un des fichiers suivants (avec les privilèges *sudo*), selon la génération du système d'exploitation installé sur le serveur :

- le fichier `/etc/network/interfaces`
- le fichier `/etc/network/interfaces.d/50-cloud-init.cfg`

Nous vous recommandons de sauvegarder le fichier de configuration approprié. Par exemple, utilisez la commande suivante :

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Vous pourrez alors annuler les modifications à l'aide des commandes suivantes :

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

##### Configuration à l'aide de Netplan <a name="netplan"></a>

Les fichiers de configuration du réseau sont situés dans le répertoire `/etc/netplan/`. Par défaut, le fichier de configuration principal est appelé `50-cloud-init.yaml`. Avant de continuer, vérifiez d'abord ce fichier pour voir si l'adresse IPv6 a déjà été configurée. Si c'est le cas, vous n'avez pas besoin de configurer l'adresse IPv6 à nouveau car vous n'avez qu'une seule adresse IPv6 avec votre serveur VPS.

Si l'adresse IPv6 n'a pas été configurée, la meilleure approche est de créer un fichier de configuration séparé pour configurer l'adresse IPv6 dans le répertoire `/etc/netplan/`. De cette façon, vous pouvez facilement revenir sur les modifications en cas d'erreur.

De plus, nous vous recommandons d'ajuster les permissions pour le fichier nouvellement créé. Pour plus d'informations sur les permissions des fichiers, consultez la [documentation officielle d'ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.

Dans notre exemple, notre fichier est nommé `51-cloud-init-ipv6.yaml` :

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Modifiez ensuite le fichier `51-cloud-init-ipv6.yaml` en ajoutant les lignes suivantes pour la configuration IPv6. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs spécifiques.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
# If IPV6_PREFIX is 128 then add link route to gateway
#              - to: IPv6_GATEWAY
#                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

Voici un exemple concret (avec préfixe /128) :

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: 2607:5300:201:abcd::1
                scope: link
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Il est important de respecter l'alignement de chaque élément de ce fichier tel que représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire.
>

Vous pouvez tester votre configuration à l'aide de la commande suivante :

```bash
sudo netplan try
```

Si elle est correcte, appliquez-la à l'aide de la commande suivante :

```bash
sudo netplan apply
```

#### Application persistante sur Red Hat et ses dérivés (CentOS, Rocky Linux & Alma Linux, etc.) <a name="persistentDat"></a>

Les fichiers de configuration réseau se trouvent dans le répertoire `/etc/sysconfig/network-scripts/`. Nous vous recommandons de commencer par sauvegarder le fichier de configuration approprié. Par exemple, copiez le fichier `ifcfg-eth0` à l'aide des commandes suivantes. N'oubliez pas de remplacer **eth0** par votre interface réelle si nécessaire.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Vous pourrez alors annuler les modifications à l'aide des commandes suivantes :

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Modifiez ensuite le fichier `ifcfg-eth0`, en ajoutant la configuration IPv6 de votre serveur. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) par vos valeurs personnalisées.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Voici un exemple concret :

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

**Sur CentOS 7, vous devez créer un fichier de routage en plus des étapes ci-dessus :**

- Créez un fichier (avec les privilèges *sudo*), indiquant les itinéraires IPv6 par défaut :

```bash
sudo touch /etc/sysconfig/network-scripts/route6-eth0
```

- Modifiez le fichier et ajoutez les lignes ci-dessous. Remplacez les éléments génériques (*IPV6_GATEWAY* et **eth0**, si nécessaire) par vos valeurs personnalisées.

```console
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Voici un exemple concret :

```console
2607:5300:201:abcd::1 dev eth0
default via 2607:5300:201:abcd::1
```

Enfin, redémarrez votre service réseau pour permettre au système d'appliquer la nouvelle configuration à l'aide de l'une des commandes suivantes:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Application persistante sur Fedora 37 et versions ultérieures <a name="persistentfedora"></a>

Le fichier de configuration réseau se trouve dans `/etc/NetworkManager/system-connections/`. Nous recommandons de commencer par sauvegarder le fichier de configuration correspondant. Dans notre exemple, notre fichier s'appelle `cloud-init-eth0.nmconnection`, nous copions donc le fichier `cloud-init-eth0.nmconnection` en utilisant les commandes suivantes. Pensez à remplacer **eth0** par votre interface actuelle si nécessaire.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Nous éditons ensuite le fichier `cloud-init-eth0.nmconnection` en ajoutant uniquement les lignes pour la configuration IPv6 du serveur. Remplacez les éléments génériques (c'est à dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) par vos valeurs spécifiques.

Si nous supposons que votre interface est eth0, la configuration devrait ressembler à ceci :

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Nous avons omis la configuration IPv4 pour éviter toute confusion, mais la configuration IPv6 se fait dans le même fichier de configuration.

Voici un exemple concret :

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

#### Application persistante sur Windows Server <a name="persistentwindows"></a>

Par défaut, l'adresse IPv6 n'est pas configurée sur les serveurs Windows. Pour l'activer, ouvrez le `Panneau de configuration`{.action} et cliquez sur `Afficher l'état et les tâches du réseau`{.action}, puis sur `Modifier les paramètres de la carte`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Cliquez sur `Ethernet`{.action} pour ouvrir les paramètres et cliquez sur le bouton `Propriétés`{.action} pour afficher `Propriétés Ethernet`.

Sélectionnez `Protocol Internet version 6 (TCP/IPv6)`{.action}, puis cliquez sur le bouton `Propriétés`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Dans la fenêtre Propriétés IPv6, sélectionnez `Utiliser l'adresse IPv6 suivante`. Entrez les adresses IP que vous avez récupérées à la première étape.

Vous avez également la possibilité d'entrer les résolutions DNS IPv6 de votre choix sous `Utiliser l'adresse de serveur DNS suivante`. Cela n'est pas obligatoire si les résolveurs DNS de la configuration IPv4 sont déjà fonctionnels.

Enfin, cochez la case `Valider les paramètres en quittant` et cliquez sur le bouton `OK`{.action} pour valider vos modifications. Un message d'erreur peut s'afficher si la passerelle spécifiée ne se trouve pas sur le même sous-réseau IPv6 (/128 et /64, par exemple). Vous pouvez ignorer ce message et passer à l'étape suivante.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Étape 3 : Vérifier la configuration et tester la connexion.

Pour vérifier que la configuration est fonctionnelle, il existe plusieurs commandes possibles, selon le système d'exploitation.

- **Pour un système GNU/Linux**, voici deux exemples pour l'interface **eth0** (à adapter si nécessaire) :

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2607:5300:201:abcd::7c5/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2607:5300:201:abcd::7c5/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Pour tester la connexion, vous pouvez utiliser la commande suivante :

```bash
ping6 proof.ovh.net
```

- **Pour un système Windows**, utilisez la commande suivante :

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::7c5/128
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd::1
                                       51.xxx.xxx.y
```

Pour tester la connexion, vous pouvez utiliser la commande suivante:

```powershell
ping -6 proof.ovh.net
```

Vous pouvez également tester la connexion à un autre serveur distant. Cependant, il est nécessaire que l'adresse IPv6 soit active sur le serveur distant pour que cette opération fonctionne.

> [!primary]
>
> Si, malgré ces modifications, IPv6 ne semble pas fonctionner sur votre serveur, il est possible (dans de rares cas) que vous deviez effectuer des modifications supplémentaires. Dans ce cas, effectuez les opérations suivantes:
>
> - En fonction du système d'exploitation, tentez de remplacer le préfixe (ou *netmask*) de votre adresse IP par /128 et /64. Cela inclura la passerelle IPv6 dans votre sous-réseau.
>
> - En plus de redémarrer le service réseau, il se peut qu'un redémarrage de votre serveur soit nécessaire pour finaliser la prise en compte de votre configuration IPv6.
> 
> - Dans Windows, vérifiez que le pare-feu autorise les demandes ICMP pour IPv6.

### Étape 4 : Désactiver la gestion du réseau Cloud-init (en option)

> [!primary]
>
> Cette étape ne s'applique pas pour les systèmes basés sur Windows.
>

Cloud-init est un package installé par défaut sur les instances VPS. Il s’agit d’un framework permettant d’exécuter un script fourni lors de la création de votre serveur ou de son redémarrage. La mécanique en place permet simplement à l’infrastructure OpenStack d’injecter des scripts à l’environnement Cloud-Init et, donc, à la configuration du serveur.

Selon le système d'exploitation, Cloud-init va gérer : le réseau, le hostname, le fichier resolv.conf ou encore le partitionnement automatique du disque dur en cas d'upgrade.

Dans le cas des distributions plus récentes, la configuration par défaut du cloud.init peut parfois automatiquement réinitialiser la configuration réseau au démarrage du serveur.

Dans certains cas d'utilisation spécifiques, il est recommandé d'éviter la réinitialisation en désactivant la gestion automatique du réseau dans Cloud-init. Pour cela, utilisez la commande suivante permettant de créer un fichier `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` comportant la valeur `network: {config: disabled}` :

```bash
sudo echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Redémarrez votre serveur pour que la manipulation soit prise en compte. 
>

Pour revenir à une gestion automatique de votre réseau par Cloud-init, supprimez le fichier nouvellement créé ou déplacez-le dans un autre répertoire.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
