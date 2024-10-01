---
title: 'Configuration IPv6 sur une instance Public Cloud'
excerpt: 'Découvrez comment configurer le protocole IPv6 sur une instance Public Cloud'
updated: 2024-02-15
---

## Objectif

Internet Protocol version 6 (IPv6) est la dernière version du Internet Protocol (IP). Il est conçu pour résoudre l’épuisement longuement anticipé des adresses IPv4 en utilisant des adresses composées de 128-bits au lieu du traditionnel 32-bits de l’IPv4.

Chaque instance Public Cloud est livrée avec une adresse IPv4 et une adresse IPv6.

Par défaut, seule l'adresse IPv4 est configurée.

**Dans ce tutoriel, nous allons vous apprendre à configurer une adresse IPv6 sur une instance Public Cloud.**

> [!primary]
> 
> Actuellement, les offres Floating IP et Gateway ne prennent pas en charge l'IPv6. L'IPv6 n'est utilisable qu'avec les instances en [mode public](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts#publicmode).
>

## Prérequis

* Une instance Public Cloud, le modèle importe peu.
* Disposer d’un accès administrateur (sudo) via SSH ou bureau à distance (Windows) à votre serveur.
* Disposer de connaissances basiques en réseau.
* Être connecté à l'[espace client OVHcloud](/links/manager).

## En pratique

Les sections suivantes contiennent les configurations des distributions que nous proposons actuellement, ainsi que les distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou via une session de connexion GUI (RDP pour une instance Windows).

> [!warning]
>
> Veuillez noter que sur les versions récentes des systèmes d’exploitation Linux, l’adresse IPv6 est configurée par défaut sur les instances Public Cloud. Dans ce cas, vous n'avez pas besoin de la configurer. Assurez-vous de vérifier le fichier de configuration de votre système d'exploitation avant d'effectuer tout changement.

### Lexique

Voici un lexique rapide des termes utilisés dans ce tutoriel :

|Lexique|Description|
|---|---|
|YOUR_IPV6|L’adresse IPv6 assignée à votre service|
|IPV6_PREFIX|Le préfixe de votre bloc IPv6 (Ex: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPV6_GATEWAY|La passerelle de votre bloc IPv6|

### Récupérer les informations réseaux

Connectez-vous à votre espace client, cliquez sur l’onglet `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur la rubrique `Instances`{.action} dans le menu de gauche. Ensuite, cliquez sur le bouton `...`{.action} à droite de l'instance correspondante et cliquez sur `Détails de l'instance`{.action}.

![public-cloud ipv6](images/pci2022.png){.thumbnail}

Toutes les informations nécessaires seront visibles dans la partie **Réseaux**.

![public-cloud ipv6](images/pci2022.1.png){.thumbnail}

### Exemples de configurations persistantes

> [!primary] 
> **Exemples**
> 
> Les informations fournies ci-dessous le sont à titre d'exemples.
>
> Étant l'administrateur de vos services, il vous incombe d'adapter ceux-ci à votre distribution.
>

> [!warning]
>
> Avant de modifier un fichier de configuration, créez toujours une sauvegarde de l’original pour y revenir en cas de problème.
> 

<br>En premier lieu, connectez-vous à votre instance en SSH.

#### Sur Debian (sauf Debian 12)

Par défaut, les fichiers de configuration sont situés dans le répertoire `/etc/network/interfaces.d/`. 

La meilleure pratique est de créer un fichier de configuration séparé dans le répertoire `/etc/network/interfaces.d/` pour configurer l'IPV6. Dans notre exemple, notre fichier s'appelle `51-cloud-init-ipv6` :

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Cela vous permet de séparer la configuration IPv6 et de revenir facilement sur les changements en cas d'erreur.

Ajoutez les lignes suivantes au fichier. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs spécifiques :

```console
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Voici un exemple concret :

```console
iface eth0 inet6 static
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

#### Sur Ubuntu et Debian 12

Les fichiers de configuration du réseau sont situés dans le répertoire `/etc/netplan/`. 

La meilleure pratique est de créer un fichier de configuration séparé dans le répertoire `/etc/netplan/` pour configurer l'IPV6. Dans notre exemple, notre fichier s'appelle `51-cloud-init-ipv6.yaml` :

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Cela vous permet de séparer la configuration IPv6 et de revenir facilement sur les changements en cas d'erreur.

Ajoutez les lignes suivantes au fichier. Remplacez les éléments génériques (c'est-à-dire *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) ainsi que l'interface réseau (si votre serveur n'utilise pas **eth0**) par vos valeurs spécifiques :

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
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

Voici un exemple concret :

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: ::/0
                via: 2607:5300:201:abcd::1
```


> [!warning]
>
> Il est important de respecter l’alignement de chaque élément de ce fichier tel que représenté dans l’exemple ci-dessus. N’utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace est nécessaire.
> 

Vous pouvez tester votre configuration à l’aide de la commande suivante :

```bash
sudo nano netplan try
```

Si elle est correcte, appliquez-la à l’aide de la commande suivante :

```bash
sudo nano netplan apply
```

#### Sur RedHat / CentOS / Rocky Linux / Alma Linux

Les fichiers de configuration du réseau sont situés dans le répertoire `/etc/sysconfig/network-scripts/`. Nous vous recommandons de commencer par sauvegarder le fichier de configuration concerné.

Dans notre exemple, notre fichier s'appelle `ifcfg-eth0`, donc nous faisons une sauvegarde du fichier `ifcfg-eth0` en utilisant les commandes suivantes. N'oubliez pas de remplacer **eth0** par votre interface réelle si nécessaire.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Vous pourrez alors revenir sur les modifications en utilisant les commandes ci-dessous :

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Nous éditons ensuite le fichier `ifcfg-eth0`, en ajoutant seulement les lignes pour la configuration IPv6 du serveur. Remplacez les éléments génériques (i.e. *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) par vos valeurs spécifiques.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Nous avons omis la configuration IPv4 pour éviter toute confusion, mais la configuration IPv6 se fait dans le même fichier de configuration.

Voici un exemple concret :

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

#### Sur Fedora

Le fichier de configuration du réseau se trouve dans le répertoire `/etc/NetworkManager/system-connections/`. Nous vous recommandons de commencer par sauvegarder le fichier de configuration concerné. 

Dans notre exemple, notre fichier s'appelle `cloud-init-eth0.nmconnection`, donc nous faisons une copie du fichier `cloud-init-eth0.nmconnection` en utilisant les commandes suivantes. N'oubliez pas de remplacer **eth0** par votre interface réelle si nécessaire.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Nous éditons ensuite le fichier `cloud-init-eth0.nmconnection`, en ajoutant seulement les lignes pour la configuration IPv6 du serveur. Remplacez les éléments génériques (i.e. *YOUR_IPV6*, *IPV6_PREFIX* et *IPV6_GATEWAY*) par vos valeurs spécifiques.

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

#### Sur Windows

Par défaut, l'IPv6 n'est pas configurée sur les serveurs Windows. Pour l'activer, procédez comme suit :

Rendez-vous dans la rubrique `Connexion Réseaux`{.action} de votre Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Ensuite, faites un clic droit sur votre carte réseau pour accéder à `Propriétés`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Cliquez ensuite sur `Internet Protocol Version 6 (TCP/IPv6)`{.action} puis sur le bouton `Propriétés`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Enfin renseignez les informations de votre IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

Une fois terminé, cochez la case `Valider les paramètres à la sortie` et cliquez sur le bouton `OK`{.action} pour valider vos changements.

### Diagnostic

Vous avez configuré votre IPv6 mais rien ne fonctionne ? 

Une manipulation simple existe pour déterminer si le défaut se situe dans la configuration effectuée ou sur le réseau d'OVHcloud.

Dans un premier temps, [passez votre instance dans le mode de secours rescue-pro](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Inspirez-vous ensuite des commandes suivantes pour configurer votre IP de manière non-persistante :

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Testez de nouveau votre réseau via un ping6 par exemple :

```bash
ping6 ipv6.google.com
```
Si votre instance répond, il est probable qu'une des étapes de votre configuration initiale n'ait pas été rigoureusement suivie.

Dans tous les cas, n'hésitez pas à effectuer une demande au support avec les éléments testés ci-dessus afin d'obtenir une analyse de notre part.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
