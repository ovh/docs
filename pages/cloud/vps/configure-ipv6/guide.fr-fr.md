---
title: 'Configurer l''IPv6 sur un serveur VPS'
slug: configurer-ipv6
excerpt: 'Apprenez à configurer l''IPv6 sur votre serveur VPS OVHcloud'
section: 'Réseau et IP'
order: 1
---

**Dernière mise à jour le 12/03/2019**

## Objectif

L'IPv6 est la dernière version de l'*Internet Protocol* (IP). Chaque serveur VPS OVHcloud est livré avec une adresse IPv4 ainsi qu'une adresse IPv6. Par défaut, seule l'IPv4 y est configurée. Pour diverses raisons, vous pouvez également vouloir paramétrer l'IPv6.

**Apprenez à configurer l'IPv6 sur votre serveur VPS OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'un [serveur VPS OVHcloud](https://www.ovhcloud.com/fr/vps/){.external}.
- Être connecté en SSH à votre VPS (accès root).
- Disposer de connaissances basiques en réseau.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Cloud`{.action}.

## En pratique

> [!primary]
>
> Les configurations visibles dans ce guide sont fournies à titre d'exemple, celles-ci peuvent varier selon le système d'exploitation que vous utilisez sur votre VPS.
> 

La configuration de l'IPv6 sur votre serveur VPS s'effectue en plusieurs étapes. Durant ces dernières, vous serez invité à utiliser des commandes ou à personnaliser la configuration de votre serveur. 

Avant de débuter, et afin d’utiliser les mêmes terminologies durant les manipulations, nous vous invitons à prendre connaissance du tableau ci-dessous. Il référence des termes que nous utiliserons dans cette documentation :

|Terme|Description|Exemple|
|---|---|---|
|YOUR_IPV6|Il s'agit de l’adresse IPv6 assignée à votre service|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Il s'agit du préfixe (ou *netmask*) de votre bloc IPv6. Celui-ci est généralement de 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Il s'agit de la passerelle de votre bloc IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Étape 1 : obtenir les informations réseau nécessaires

La première étape consiste à récupérer l’adresse IPV6 et la gateway IPv6 assignées à votre serveur. Deux méthodes sont possibles, poursuivez vers celle que vous souhaitez utiliser.

- [Obtenir les informations réseau via l'espace client](https://docs.ovh.com/fr/vps/configurer-ipv6/#via-votre-espace-client).
- [Obtenir les informations réseau via les API](https://docs.ovh.com/fr/vps/configurer-ipv6/#via-les-api-ovhcloud).

#### Via votre espace client

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Cloud`{.action}. Cliquez sur `Serveurs`{.action} dans la barre de services à gauche, puis choisissez le serveur VPS concerné. Assurez-vous d'être bien positionné sur l'onglet `Accueil`{.action}.

L'adresse IPv6 et la gateway IPv6 assignées à votre serveur apparaissent dans la partie `IP`. Récupérez ces dernières puis poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](https://docs.ovh.com/fr/vps/configurer-ipv6/#etape-2-appliquer-la-configuration-ipv6_1){.external} ».

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Via les API OVHcloud

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

Récupérez ces dernières puis poursuivez vers l'étape 2 « [Appliquer la configuration IPv6](https://docs.ovh.com/fr/vps/configurer-ipv6/#etape-2-appliquer-la-configuration-ipv6_1){.external} ».

### Étape 2 : appliquer la configuration IPv6

Une fois les informations nécessaires pour la configuration IPv6 en votre possession, connectez-vous en SSH à votre VPS. Si besoin, aidez-vous des informations de notre documentation « [Introduction au SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/){.external} ».

Il existe plusieurs méthodes pour appliquer la configuration IPv6. En fonction de votre situation et de vos besoins, poursuivez vers celle que vous souhaitez utiliser.

- [Application non persistante](https://docs.ovh.com/fr/vps/configurer-ipv6/#application-non-persistante).
- [Application persistante sur Debian et dérivés (Ubuntu, Crunchbang, SteamOS…)](https://docs.ovh.com/fr/vps/configurer-ipv6/#application-persistante-sur-debian-et-derives-ubuntu-crunchbang-steamos).
- [Application persistante sur Redhat et dérivés (CentOS, ClearOS…)](https://docs.ovh.com/fr/vps/configurer-ipv6/#application-persistante-sur-redhat-et-derives-centos-clearos_1).
- [Application persistante sur Windows Server](https://docs.ovh.com/fr/vps/configurer-ipv6/#application-persistante-sur-windows-server).

#### Application non persistante

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

#### Application persistante sur Debian et dérivés (Ubuntu, Crunchbang, SteamOS…)

Il existe deux méthodes pour configurer votre réseau selon le système d'exploitation installé sur votre serveur :

- **pour Debian 8 et inférieure, Ubuntu 16.04 et inférieure** : utilisez la méthode basée sur le fichier "interfaces" ;

- **pour Ubuntu 17.04 et versions ultérieures** : utilisez la méthode basée sur la fonction « Netplan ».

Dans certains cas, il se peut que la méthode à utiliser ne soit pas celle spécifiée ci-dessus. Pour vous en assurer, naviguez dans votre système pour vérifier la méthode active dans votre cas (systemd-network, cloud-init ou interfaces).

> [!warning]
>
> Avant toute modification d'un fichier de configuration, pensez à en faire une sauvegarde ! En cas d'erreur, vous pourrez facilement revenir en arrière.
> 

Poursuivez à présent vers la méthode qui correspond à votre situation.

- [Configuration du fichier « interfaces »](https://docs.ovh.com/fr/vps/configurer-ipv6/#configuration-du-fichier-interfaces)
- [Configuration via la fonction Netplan](https://docs.ovh.com/fr/vps/configurer-ipv6/#configuration-via-la-fonction-netplan)

#####  Configuration du fichier « interfaces »

Selon la génération du système d'exploitation installé sur le serveur, vous devez modifier avec privilèges *sudo* :

- soit le fichier `/etc/network/interfaces` ;
- soit le fichier `/etc/network/interfaces.d/50-cloud-init.cfg`.

Nous vous recommandons de débuter par sauvegarder le fichier de configuration concerné. Par exemple, aidez-vous de la commande :

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Vous pourrez ainsi revenir en arrière grâce aux commandes ci-dessous :

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

Dès que vous êtes prêt à réaliser le paramétrage, ajoutez les lignes suivantes au fichier de configuration. Prenez soin de personnaliser les éléments génériques (*YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau si celle que vous utilisez n'est pas **eth0**.

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Relancez ensuite votre service réseau :

```bash
service networking restart
```

#####  Configuration via la fonction Netplan

Les fichiers de configuration réseau se situent dans le répertoire `/etc/netplan/`. Nous vous recommandons de débuter par sauvegarder le fichier de configuration concerné. Dans le cas présent, copiez le fichier `50-cloud-init.yaml` en vous aidant des commandes suivantes :

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Vous pourrez ainsi revenir en arrière grâce aux commandes :

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Dès que vous êtes prêt à réaliser la configuration, créez une copie du fichier IPv4 pour le retravailler à votre convenance. 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Éditez ensuite le fichier `51-cloud-init-ipv6.yaml` afin qu'il contienne la configuration IPv6 de votre serveur. Prenez soin de personnaliser les éléments génériques (*YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau si celle que vous utilisez n'est pas **eth0**.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
```

> [!warning]
>
> Il est primordial de respecter l'alignement des arguments tel que réalisé dans l'exemple ci-dessus lors de l'écriture de votre fichier. N'utilisez pas la touche « tabulation » pour créer vos espacements. Seule la touche « espace » est nécessaire.
>

Testez ensuite votre configuration en utilisant la commande :

```bash
netplan try
```

Si celle-ci est correcte, appliquez-la en utilisant la commande :

```bash
netplan apply
```

#### Application persistante sur Redhat et dérivés (CentOS, ClearOS…)

Les fichiers de configuration réseau se situent dans le répertoire `/etc/sysconfig/network-scripts/`. Nous vous recommandons de débuter par sauvegarder le fichier de configuration concerné. Par exemple, copiez le fichier `ifcfg-eth0` en vous aidant des commandes suivantes. **Personnalisez l'interface réseau si celle que vous utilisez n'est pas eth0**.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Vous pourrez ainsi revenir en arrière grâce aux commandes :

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Dès que vous êtes prêt, éditez le fichier de configuration actuellement utilisé pour y ajouter les lignes suivantes. Prenez soin de personnaliser les éléments génériques (*YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*).

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Vous devrez ensuite créer un fichier (avec privilèges sudo) indiquant les routes par défaut.

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Éditez-le en personnalisant les éléments ci-dessous (*IPV6_GATEWAY* et interface **eth0** si nécessaire). 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Une fois fait, relancez votre service réseau afin de permettre au système de reprendre la nouvelle configuration :

```bash
service network restart
```

#### Application persistante sur Windows Server

Par défaut, l'IPv6 n'est pas configurée sur Windows Server. Pour l'activer, ouvrez le `Panneau de configuration`, cliquez sur `Afficher l'état et la gestion du réseau`{.action}, puis sur `Modifier les paramètres de la carte`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Ouvrez l'état de la connexion `Ethernet` et cliquez sur `Propriétés`{.action}. Dans la nouvelle fenêtre, sélectionnez sur le nom `Protocole Internet version 6 (TCP/IPv6)` pour qu’il s’affiche en surbrillance, puis cliquez sur le bouton `Propriétés`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Au sein de cette nouvelle fenêtre, cochez la case « Utiliser l'adresse IPv6 suivante ». Complétez les champs au-dessous avec les informations récupérées lors de la première étape. 

En dessous de « Utiliser l’adresse de serveur DNS suivante », vous avez la possibilité de renseigner les _résolveurs_ DNS IPv6 de votre choix dans les champs proposés. Cet ajout peut être optionnel si les _résolveurs_ mentionnées dans la configuration IPv4 réalisent déjà ce travail.

Une fois les éléments complétés, cochez la case `Valider les paramètres en quittant` puis cliquez sur les boutons `OK`{.action} pour valider vos modifications. Un message d'erreur peut apparaître dans le cas où la gateway renseignée n'est pas sur le même sous-réseau IPv6 (/128 et /64 par exemple). Si tel est le cas, vous devriez pouvoir poursuivre vers l'étape suivante sans tenir compte du message.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Étape 3 : vérifier la configuration et tester la connexion

Pour vérifier que la configuration est fonctionnelle, il existe plusieurs commandes selon le système d'exploitation. 

- **Pour un système basé sur Linux**, voici deux exemples pour l'interface **eth0** (à adapter si besoin) :

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

Pour tester la connexion, utilisez la commande suivante : 

```bash
ping6 proof.ovh.net
```

- **Pour un système basé sur Windows**, utilisez les commandes suivantes :

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

Pour tester la connexion, utilisez la commande suivante : 

```
ping -6 proof.ovh.net
```

Vous pouvez également tester la connexion vers un autre serveur distant, cependant il est nécessaire que l'IPv6 soit active sur ce dernier afin que l'opération aboutisse. 

> [!primary]
>
> Si malgré les différentes manipulations, l'IPv6 ne fonctionne pas sur votre serveur, il se peut dans de rares cas que vous deviez réaliser des manipulations supplémentaires. Aidez-vous alors des éléments ci-dessous si nécessaire.
>
> - Selon les systèmes d'exploitation, tentez de modifier le préfixe (ou *netmask*) de votre IP de /128 en /64. Ceci permettra d'inclure la gateway IPv6 dans votre sous-réseau.
>
> - En plus de relancer le service réseau, il se peut qu'un redémarrage de votre serveur soit nécessaire pour finaliser la prise en compte de votre configuration IPv6.
>

### Étape 4 : désactiver la gestion du réseau par Cloud-init

> [!primary]
>
> Cette étape ne s'applique pas pour les systèmes basés sur Windows.
>

Cloud-init est un package installé par défaut sur les instances VPS. Il s’agit d’un framework permettant d’exécuter un script fourni lors de la création de votre serveur ou de son redémarrage. La mécanique en place permet simplement à l’infrastructure OpenStack d’injecter des scripts à l’environnement Cloud-Init et, donc, à la configuration du serveur.

Selon le système d'exploitation, Cloud-init va gérer : le réseau, le hostname, le fichier resolv.conf ou encore le partitionnement automatique du disque dur en cas d'upgrade.

Dans le cas des distributions plus récentes (telles que CentOS, Debian 9, Ubuntu 16.x et versions ultérieures), la configuration par défaut du cloud.init va automatiquement au démarrage du serveur réinitialiser la configuration réseau.

Afin de garder la main sur celle-ci, vous devez désactiver la gestion automatique du réseau dans le **cloud.init**. Pour cela, utilisez la commande suivante permettant de créer un fichier `/etc/cloud/cloud.cfg.d/98-disable-network-config.cf` comportant la valeur `network: {config: disabled}` :

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Une fois fait, redémarrez votre serveur pour que la manipulation soit prise en compte. 

Pour revenir à une gestion automatique de votre réseau par Cloud-init, supprimez le fichier nouvellement créé ou déplacez-le dans un autre répertoire.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.