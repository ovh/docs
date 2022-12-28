---
title: "Configurer l'IPv6 sur un serveur VPS"
slug: configurer-ipv6
excerpt: "Apprenez à configurer l'IPv6 sur votre serveur VPS OVHcloud"
section: 'Réseau et IP'
---

**Dernière mise à jour le 01/12/2022**

## Objectif

L'IPv6 est la dernière version de l'*Internet Protocol* (IP). Chaque serveur VPS OVHcloud est livré avec une adresse IPv4 ainsi qu'une adresse IPv6. Par défaut, seule l'IPv4 y est configurée. Si vous devez configurer l'IPv6, vous devez le faire manuellement sur votre système.

**Apprenez à configurer l'IPv6 sur votre serveur VPS OVHcloud via plusieurs méthodes.**

> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://marketplace.ovhcloud.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'un [serveur VPS OVHcloud](https://www.ovhcloud.com/fr/vps/){.external}.
- Être connecté à votre VPS en SSH (accès root) ou via un bureau à distance (Windows).
- Disposer de connaissances basiques en réseau.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} ou à l'[API OVHcloud](https://api.ovh.com/).

## En pratique

> [!primary]
>
> Les configurations visibles dans ce guide sont fournies à titre d'exemple, celles-ci peuvent varier selon le système d'exploitation que vous utilisez sur votre VPS.
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

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

L'adresse IPv6 et la gateway IPv6 assignées à votre serveur apparaissent dans la partie `IP`. Récupérez ces dernières puis poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Via les API OVHcloud <a name="viaapi"></a>

Rendez-vous sur le site <https://api.ovh.com/console/> et connectez-vous à ce dernier avec votre identifiant OVHcloud. Utilisez ensuite les deux API ci-dessous.

La première vous permet de récupérer l'adresse IPv6 assignée à votre serveur.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

La seconde vous permet de récupérer la gateway IPv6 assignée à votre serveur.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Une fois les adresses récupérées, continuez à l'étape 2 « [Appliquer la configuration IPv6](#applyipv6) ».

### Étape 2 : appliquer la configuration IPv6 <a name="applyipv6"></a>

Une fois les informations nécessaires pour la configuration IPv6 en votre possession, connectez-vous en SSH à votre VPS. Si besoin, aidez-vous des informations de notre documentation « [Introduction au SSH](../../dedicated/ssh-introduction/){.external} ».

Il existe plusieurs méthodes pour appliquer la configuration IPv6. En fonction de votre situation et de vos besoins, poursuivez vers celle que vous souhaitez utiliser.

- [Application non persistante](#nonpersistent).
- [Application persistante sur Debian et dérivés (Ubuntu, Crunchbang, SteamOS…)](#persistentdebian).
- [Application persistante sur Redhat et dérivés (CentOS, ClearOS…)](#persistentredhat).
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

Deux méthodes existent pour configurer votre réseau selon le système d'exploitation installé sur votre serveur :

- **pour Debian 11 et inférieure, Ubuntu 16.04 et inférieure** : utilisez la [méthode basée sur le fichier *interfaces*](#interfaces) ;

- **pour Ubuntu 17.04 et versions ultérieures** : utilisez la [méthode basée sur la fonction *Netplan*](#netplan).

Dans certains cas, il se peut que la méthode à utiliser ne soit pas celle spécifiée ci-dessus. Pour vous en assurer, naviguez dans votre système pour vérifier la méthode active dans votre cas.  Visitez le site <https://netplan.io/> pour plus d'informations, si nécessaire.

> [!primary]
>
> Soyez vigilant, les noms exacts de fichiers peuvent varier.
>

##### Configuration des fichiers *interfaces* <a name="interfaces"></a>

La méthode la plus souvent préconisée est de créer un fichier de configuration dans le répertoire `/etc/network/interfaces.d/`:

```bash
nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Cela vous permet de séparer la configuration IPv6 et de rétablir facilement les modifications en cas d'erreur.

Ajoutez les lignes suivantes au fichier. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs personnalisées.

```
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

```
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```

Redémarrez ensuite votre service réseau avec l'une des commandes suivantes :

```bash
service networking restart
```

```bash
systemctl restart networking
```

Vous pouvez également ajouter la configuration ci-dessus à l'un des fichiers suivants (avec les privilèges *sudo*), selon la génération du système d'exploitation installé sur le serveur :

- le fichier `/etc/network/interfaces`
- le fichier `/etc/network/interfaces.d/50-cloud-init.cfg`

Nous vous recommandons de sauvegarder le fichier de configuration approprié. Par exemple, utilisez la commande suivante :

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Vous pourrez alors annuler les modifications à l'aide des commandes suivantes :

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

##### Configuration à l'aide de Netplan <a name="netplan"></a>

Les fichiers de configuration réseau se trouvent dans le répertoire `/etc/netplan/`. Nous vous recommandons de commencer par sauvegarder le fichier de configuration approprié. Dans ce cas, copiez le fichier `50-cloud-init.yaml` à l'aide des commandes suivantes :

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Vous pourrez alors annuler les modifications à l'aide des commandes suivantes :

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Avant de le modifier, créez une copie du fichier de configuration IPv6 :

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Modifiez ensuite le fichier `51-cloud-init-ipv6.yaml`, en ajoutant la configuration IPv6 de votre serveur. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs personnalisées.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
              - to: IPv6_GATEWAY
                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
>
> Il est important de respecter l'alignement de chaque élément de ce fichier tel que représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire.
>

Vous pouvez tester votre configuration à l'aide de la commande suivante :

```bash
netplan try
```

Si elle est correcte, appliquez-la à l'aide de la commande suivante :

```bash
netplan apply
```

#### Application persistante sur Red Hat et ses dérivés (CentOS, ClearOS, etc.) <a name="persistentDat"></a>

Les fichiers de configuration réseau se trouvent dans le répertoire `/etc/sysconfig/network-scripts/`. Nous vous recommandons de commencer par sauvegarder le fichier de configuration approprié. Par exemple, copiez le fichier `ifcfg-eth0` à l'aide des commandes suivantes. N'oubliez pas de remplacer **eth0** par votre interface réelle si nécessaire.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Vous pourrez alors annuler les modifications à l'aide des commandes suivantes :

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Modifiez ensuite le fichier `ifcfg-eth0`, en ajoutant la configuration IPv6 de votre serveur. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) par vos valeurs personnalisées.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Voici un exemple concret :

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999/128
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

**Sur CentOS 7, vous devez créer un fichier de routage en plus des étapes ci-dessus :**

- Créez un fichier (avec les privilèges *sudo*), indiquant les itinéraires IPv6 par défaut :

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

- Modifiez le fichier et ajoutez les lignes ci-dessous. Remplacez les éléments génériques (*IPV6_GATEWAY* et **eth0**, si nécessaire) par vos valeurs personnalisées.

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Enfin, redémarrez votre service réseau pour permettre au système d'appliquer la nouvelle configuration à l'aide de l'une des commandes suivantes:

```bash
service networking restart
```

```bash
systemctl restart networking
```


#### Application persistante sur Windows Server <a name="persistentwindows"></a>

Par défaut, IPv6 n'est pas configuré sur les serveurs Windows. Pour l'activer, ouvrez le `Panneau de configuration`{.action} et cliquez sur `Afficher l'état et les tâches du réseau`{.action}, puis sur `Modifier les paramètres de la carte`{.action}.

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

- **Pour un système GNU/Linux**, voici deux exemples pour l'interface **eth0** (à adapter si nécessaire):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Pour tester la connexion, vous pouvez utiliser la commande suivante:

```bash
ping6 proof.ovh.net
```

- **Pour un système Windows**, utilisez la commande suivante:

```
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Pour tester la connexion, vous pouvez utiliser la commande suivante:

```
ping -6 proof.ovh.net
```

Vous pouvez également tester la connexion à un autre serveur distant. Cependant, il est nécessaire que IPv6 soit actif sur le serveur distant pour que cette opération fonctionne.

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

Dans le cas des distributions plus récentes (telles que CentOS, Debian 9, Ubuntu 16.x et versions ultérieures), la configuration par défaut du cloud.init peut parfois automatiquement réinitialiser la configuration réseau au démarrage du serveur.

Dans certains cas d'utilisation spécifiques, il est recommandé d'éviter la réinitialisation en désactivant la gestion automatique du réseau dans Cloud-init. Pour cela, utilisez la commande suivante permettant de créer un fichier `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` comportant la valeur `network: {config: disabled}` :

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Redémarrez votre serveur pour que la manipulation soit prise en compte. 
>

Pour revenir à une gestion automatique de votre réseau par Cloud-init, supprimez le fichier nouvellement créé ou déplacez-le dans un autre répertoire.

## Aller plus loin

[OVHcloud Marketplace](https://marketplace.ovhcloud.com/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
