---
title: 'Comment configurer votre NIC pour l’agrégation de liens OVHcloud dans CentOS 7'
slug: ola-centos7
excerpt: 'Activer OVHcloud Link Aggregation sur votre serveur CentOS 7'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 24 octobre 2019**

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible. 

**Découvrez comment regrouper vos NIC (Network Interface Controller) pour les utiliser avec le service OLA sur CentOS 7.**

## Prérequis

- [Configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation depuis l’espace client OVHcloud]../ola-manager){.external}

## En pratique

Étant donné que nous avons une configuration privée-privée pour nos NIC sur OLA, il est impossible de se connecter en SSH au serveur. Par conséquent, vous devrez utiliser l’outil IPMI pour accéder au serveur. Pour cela, vous devez d'abord vous connecter à [l’espace client OVHcloud](https://ca.ovh.com/manager/){.external}.  Sélectionnez ensuite le serveur que vous souhaitez configurer dans la barre latérale gauche et cliquez sur l’onglet `IPMI`{.action}.

![remote_kvm](images/remote_kvm_2020.png){.thumbnail}

Cliquez ensuite sur le bouton `Depuis un applet Java (KVM)`{.action}. Un logiciel JNLP sera téléchargé. Lancez le logiciel pour accéder à l’IPMI. Connectez-vous en utilisant les informations d’identification associées au serveur.

Par défaut, en utilisant un modèle OVHcloud, les NIC seront nommés *eth0* et *eth1*. Si vous n’utilisez pas un modèle OVHcloud, vous pouvez retrouver les noms de vos interfaces en utilisant la commande suivante :

```bash
ip a
```

> [!primary]
>
> Cette commande retournera plusieurs «interfaces.» Si vous avez du mal à identifier vos NIC physiques, la première interface aura toujours l’adresse IP publique du serveur assignée par défaut.
>

Une fois retrouvés les noms de nos deux NIC, nous configurerons le NIC bonding ou agrégation de liens sur le système d’exploitation. La première étape consiste à créer l’interface d’agrégation. Pour ce faire, créez le fichier de configuration suivant sur un éditeur de texte de votre choix:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

Cela ouvrira un fichier texte vide. Pour configurer l’interface d’agrégation, insérez les lignes suivantes dans le fichier texte :

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> Vous pouvez utiliser n’importe quelle adresse IP et de sous-réseau privées souhaitées.
>

Sauvegardez et quittez le fichier une fois  que vous avez confirmé que l’information est correcte.  Il vous faut à présent configurer les deux interfaces physiques. Par défaut, pour un serveur OVHcloud, seul *eth0* aura un fichier de configuration. Ouvrez le à l’aide de la commande suivante :

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

Par défaut, le fichier affichera le texte suivant :

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPv6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Les adresses IP seront différentes pour chaque serveur.
>

Vous devez modifier ce fichier pour qu’il affiche le texte suivant:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> L’adresse matérielle (adresse MAC) du NIC peut être retrouvée à l’aide de la commande *ip a* utilisée précédemment.  Ce sera le numéro à côté de «link/ether» du résultat affiché.
>

Le *#* devant une ligne indique que le serveur ignorera cette ligne lors de la lecture du fichier. Cela signifie que ces lignes ne seront pas prises en compte lors de la création du fichier d’interface pour *eth1*. Vous devrez créer le fichier de configuration *eth1* à l’aide de la commande suivante:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Cette fois-ci, le fichier sera vide. Vous devrez y ajouter le contenu suivant : 

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Pour finir, il faudra redémarrer le service réseau à l’aide de la commande suivante :

```bash
systemctl restart network
```

Pour vérifier que cette agrégation fonctionne, effectuez un ping vers un autre serveur sur le même vRack. Si cela fonctionne, le processus de configuration est terminé. Si ce n’est pas le cas, vérifiez vos configurations ou essayez de redémarrer le serveur.

## Conclusion

OVHcloud vous offre la liberté et la flexibilité nécessaires pour utiliser votre matériel de la manière la plus adaptée à vos besoins. Maintenant que vous avez lu cet article, vous devriez pouvoir configurer OLA (OVHcloud Link Aggregation) sur CentOS 7 afin d’utiliser vos deux NIC comme interfaces privées agrégées. 
