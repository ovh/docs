---
title: "Modifier les serveurs DNS d'une instance Public Cloud"
slug: modifier-les-serveurs-dns-dune-instance
excerpt: "Découvrez comment modifier les serveurs DNS par défaut d’une instance Public Cloud"
legacy_guide_number: 1985
section: 'Réseau'
order: 4
---

**Dernière mise à jour le 29/10/2021**

## Objectif

Par défaut, le serveur DNS configuré sur les instances Public Cloud sera celui de OVHcloud (213.186.33.99 par exemple).<br>
Vous pouvez ajouter un serveur secondaire ou remplacer cette configuration par la vôtre. Cependant, les serveurs DNS sont configurés automatiquement par un serveur DHCP et vous ne pourrez pas modifier la configuration DNS en éditant le fichier `resolv.conf`.

**Ce guide vous explique comment modifier la configuration DHCP d'une instance afin de changer les serveurs DNS.**

> [!warning]
> OVHcloud vous fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Il vous incombe par conséquent de veiller à ce que ces services fonctionnent correctement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur. Plus d’informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud.
- Disposer d’un accès administrateur (root) à l’instance via SSH ou RDP.
- Des connaissances de base en réseau et administration

## En pratique

Connectez-vous sur votre instance en SSH. Reportez-vous au guide « [Se connecter à une instance Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-4-connexion-a-votre-instance) » pour plus d'informations à ce sujet.

Passer à l'utilisateur root. Si besoin, consultez notre guide pour [passer root et définir un mot de passe](https://docs.ovh.com/ca/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/).

### Debian / Ubuntu

A l'aide de l'éditeur de texte de votre choix, éditez le fichier `/etc/dhcp/dhclient.conf` afin de configurer les serveurs DNS de votre choix.

Vous pouvez ici utiliser différentes directives pour ajouter les serveurs DNS de votre choix. Utilisez la commande de votre choix et remplacez IP1/IP2 par leurs adresses IP.

- Pour ajouter des serveurs DNS qui remplaceront effectivement celui configuré par défaut, ajoutez cette ligne :
  
```console
supersede domain-name-servers IP1, IP2;
```

- Pour ajouter des serveurs DNS qui seront préférés à celui configuré par défaut :
    
```console
prepend domain-name-servers IP1, IP2;
```

- Pour ajouter des serveurs DNS qui ne seront utilisés que si celui configuré par défaut est indisponible :
    
```console
append domain-name-servers IP1, IP2;
```

Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.

Vérifiez que la configuration s'est bien appliquée avec la commande suivante :

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver IP1
nameserver IP2
```

### CentOS/Fedora

Vérifiez la configuration actuelle avec la commande `nmcli` :

```bash
nmcli
 
eth0: connected to System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-managed
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

Récupérez le nom de votre interface publique :

```bash
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```

Désactivez la modification automatique des DNS et ajoutez les adresses IP (remplacez IP1/IP2) des serveurs DNS que vous souhaitez configurer. (Remplacez `System eth0` par la valeur réelle récupérée précédemment.)

```bash
nmcli con mod "System eth0" ipv4.ignore-auto-dns yes
nmcli con mod "System eth0" ipv4.dns "IP1 IP2"
```

Appliquer la configuration (Remplacez `System eth0` par la valeur réelle récupérée précédemment.)

```bash
nmcli con down "System eth0" && nmcli con up "System eth0"
```

Vérifiez que la configuration est bien appliquée :

```bash
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: IP1 IP2
        interface: eth0
```

### Sous Windows

Connectez-vous à l'instance via une session bureau à distance ou avec la console VNC. Consultez le guide  « [Se connecter à une instance Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-4-connexion-a-votre-instance) » pour plus d'informations à ce sujet.

Ouvrez les `Paramètres réseau`{.action}.

![modifier les serveurs dns](images/changednsservers1.png){.thumbnail}

Via le panneau de configuration, rendez-vous dans la configuration IPv4 de votre carte réseau publique.

![modifier les serveurs dns](images/changednsservers2.png){.thumbnail}

Ajoutez les serveurs que vous souhaitez utiliser dans les `Paramètres avancés`{.action}.

![modifier les serveurs dns](images/changednsservers3.png){.thumbnail}

> [!primary]
>
Dans un PowerShell, la commande `nslookup` permet de vérifier quel est le serveur DNS utilisé par défaut.
>

## Aller plus loin <a name="gofurther"></a>

[Créer une première instance Public Cloud et s’y connecter](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/)

[Passer root et définir un mot de passe](https://docs.ovh.com/ca/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/)

[Modifier le hostname d’une instance Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/modifier-le-hostname-dune-instance/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.