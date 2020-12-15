---
title: "Configurer son adresse IP en alias"
slug: ip-aliasing-vps
excerpt: ''Découvrez comment ajouter des adresses IP fail-over à votre configuration VPS'
section: 'Réseau et IP'
---

**Dernière mise à jour le 8 avril 2020**

## Objectif

L'alias d'IP (*IP aliasing* en anglais) est une configuration spéciale du réseau pour vos serveurs OVHcloud, qui vous permet d'associer plusieurs adresses IP sur une seule interface réseau.

**Ce guide explique comment ajouter des adresses IP fail-over à votre configuration réseau.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- une adresse IP fail-over ou un bloc IP fail-over (RIPE)
- un accès administrateur (root) via SSH ou un remote desktop (Windows) sur votre serveur


## En pratique

> [!primary]
>
Si vous souhaitez utiliser une distribution récente, la procédure adéquate pour configurer votre interface réseau peut nécessiter des adaptations. Si vous rencontrez des difficultés, nous vous recommandons de consulter la documentation relative à votre système d’exploitation. 
> 

Voici les configurations pour les distributions et les systèmes d’exploitation principaux.

### Debian 9

#### Étape 1 : désactiver la configuration automatique du réseau

Ouvrez d'abord le fichier suivant, comme indiqué ci-dessous :

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Ensuite, modifiez le fichier avec la configuration ci-dessous. Cela empêchera que des modifications soient apportées automatiquement à la configuration de votre réseau.

```sh
network: {config: disabled}
```

### Étape 2 : modifier le fichier de configuration réseau

Ouvrez le fichier de configuration réseau pour le modifier à l'aide de la commande suivante :

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Modifiez alors le fichier avec la configuration suivante :

> [!primary]
>
Notez que les noms des interfaces réseau dans nos exemples peuvent différer de vos propres noms. Veuillez adapter les noms d'interface appropriés.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Chaque adresse IP fail-over nécessite sa propre ligne dans ce fichier. Le fichier de configuration de vos adresses IP fail-over doit être appelé "50-cloud-init.yaml".

#### Étape 1 : créer le fichier de configuration

Connectez-vous à votre serveur via SSH et exécutez la commande suivante :

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Ensuite, modifiez le fichier avec le contenu ci-dessous :

```sh
network:
    version: 2
    ethernets:
        votre_interface_réseau:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: votre_interface_réseau
            addresses:
            - votre_ip_failover/32
```

Enfin, enregistrez et fermez le fichier.

Appliquez ensuite la configuration :

```sh
# netplan apply
# netplan try
```

Répétez cette procédure pour chaque adresse IP fail-over.

### CentOS et Fedora (25 et versions antérieures)

#### Étape 1 : créer le fichier source

Tout d'abord, faites une copie du fichier source afin de pouvoir l'utiliser comme gabarit :

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Étape 2 : modifier le fichier source

Vous pouvez maintenant modifier le fichier eth0:0 afin de remplacer l'adresse IP :

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Tout d'abord, remplacez le nom du « device », puis remplacez l'adresse IP existante par l'adresse IP fail-over que vous avez reçue:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # Pour CentOS, utilisez "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### Étape 3 : redémarrer l'interface

Vous devez maintenant redémarrer votre interface:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### Étape 1 : vérifier la configuration IP principale

Tout d'abord, nous devons récupérer les informations de l'adresse IP principale :

![vérifier la configuration IP principale](images/image1-1.png){.thumbnail}

#### Étape 2 : modifier les propriétés IPv4

Il est nécessaire de modifier manuellement les propriétés IP de configuration « automatique » en configuration « statique » :

![modifier la configuration IP](images/image2.png){.thumbnail}

Nous pouvons maintenant définir les informations IP obtenues précédemment :

![modifier la configuration IP](images/image3-3.png){.thumbnail}

#### Étape 3 : ajouter l'adresse IP fail-over dans la section 'Configuration avancée'

![section de configuration avancée](images/image4-4.png){.thumbnail}

Nous devons définir ici les informations IP fail-over et le masque de sous-réseau correspondant (normalement le masque de sous-réseau est 255.255.255.255).

![Configuration de l'IP fail-over](images/image5-5.png){.thumbnail}

#### Étape 4 : redémarrage de l'interface réseau

Nous effectuons d'abord  le processus de désactivation.

![désactivation du réseau](images/image6.png){.thumbnail}

Puis le processus d'activation.

![activation du réseau](images/image7.png){.thumbnail}

#### Étape 5 : vérification de la nouvelle configuration réseau

À l'aide de la console et de la commande ___ipconfig___, nous pouvons vérifier la nouvelle configuration réseau.

![vérifier la configuration réseau actuelle](images/image8-8.png){.thumbnail}


### cPanel (sur CentOS 6)

#### Étape 1 : créer le fichier source

Tout d'abord, faites une copie du fichier source, afin de pouvoir revenir en arrière à tout moment :

```sh
cp /etc/ips /etc/ips.bak
```

#### Étape 2 : modifier le fichier source

Vous devez modifier le fichier /etc/ips :

```sh
editor /etc/ips
```

Ajoutez ensuite l'adresse IP fail-over au fichier :

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Puis ajoutez l'adresse IP dans /etc/ipaddrpool :

```bash
IP_FAILOVER
```

#### Étape 3 : redémarrer l'interface

Vous devez maintenant redémarrer votre interface :

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### Étape 1 : accéder à la gestion des adresses IP dans le panneau de configuration

Accédez à la section  ```Tools & Settings``` > ```IP Addresses``` :

![accès à la gestion des adresses IP](images/pleskip1.png){.thumbnail}

#### Étape 2 : ajouter les informations IP supplémentaires

Cliquez sur le bouton `Add IP Address`{.action}  :

![ajouter des informations IP](images/pleskip2-2.png){.thumbnail}

Ajoutez alors les informations IP supplémentaires dans le formulaire et cliquez sur `OK`{.action}.

![ajouter des informations IP](images/pleskip3-3.png){.thumbnail}

#### Étape 3 : vérifier la configuration IP actuelle dans le panneau de configuration Plesk

![configuration IP actuelle](images/pleskip4-4.png){.thumbnail}

### Dépannage

Si vous ne parvenez pas à établir une connexion entre le réseau public et votre adresse IP d'alias et que vous suspectez un problème réseau, redémarrez le serveur en mode rescue et configurez l'alias directement sur le serveur.

Pour ce faire, une fois que vous avez redémarré votre serveur en mode rescue, entrez la commande suivante :

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Remplacez FAILOVER_IP par l'adresse IP fail-over réelle.

Ensuite, il vous suffit d'envoyer un ping à votre IPFO depuis l'extérieur. Si cela fonctionne, cela signifie probablement qu'une erreur de configuration doit être corrigée. Si, au contraire, l'IP ne fonctionne toujours pas, veuillez en informer nos équipes en créant une demande de support depuiss votre [espace client OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new) pour obtenir plus d'informations.
 
## Allez plus loin

[Activer le mode rescue sur un VPS](../mode-rescue-vps/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.