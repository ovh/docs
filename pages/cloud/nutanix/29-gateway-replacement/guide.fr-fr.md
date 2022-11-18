---
title: Remplacer la passerelle OVHgateway par un serveur dédié 
slug: gateway-replacement
excerpt: "Comment remplacer votre passerelle intégrée à Nutanix par un serveur dédié pour augmenter la bande passante"
section: Réseau et sécurité
order: 09
---

**Dernière mise à jour le 18/11/2022**

## Présentation

Une machine virtuelle **OVHgateway** est installée lors d'une déploiement d'une solution Nutanix, cette machine virtuelle sert de passerelle Internet Sortante pour le cluster elle a une limite de 1 gb/s sur le réseau public.

Si vous avez besoin d'avoir une bande passante plus importante il faut remplacer cette passerelle par un serveur dédié et choisir une offre qui vous permettra d'aller entre 1 gb/s à 10 gb/s sur le réseau public comme indiqué sur ce lien [Serveurs dédiés OVHcloud](https://www.ovhcloud.com/fr/bare-metal/).

**Nous allons voir comment remplacer la passerelle par défaut par un serveur dédié OVHcloud pour augmenter la bande passante**


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central. 
- Disposer d'un serveur dédié qui utilise deux cartes réseaux une sur le réseau privé (vRACK) l'autre sur le réseau public.

## En pratique

Nous allons déployer un serveur dédié sous Linux qui utilise 4 cartes réseaux (2 sur le réseau public, 2 sur le réseau privé) pour remplacer la machine virtuelle OVHgateway.

Le réseau public utilisera une seule carte réseau et le réseau privé utilisera deux cartes réseau en équipe.

Pour remplacer l'OVHgateway nous allons prendre utilisez ces paramètres :

- Lan public en DHCP qui fournit une adresse publique.
- Lan privé sur une équipe de deux cartes et des adresses privés manuelle sur plusieurs VLAN
    - VLAN 1 : adresse IP privée et masque de l'OVHgateway (Dans notre exemple 172.16.3.254/22)

### Récupération des informations nécessaires au déploiement de votre serveur

Allez dans votre espace client OVHcloud cliquez sur `Hosted Private Cloud`{.action} dans la barre d'onglet sélectionnez votre cluster Nutanix à gauche et notez le nom du vRack associé à votre cluster Nutanix dans `Private network (vRack)`.

![01 get nutanix vrack 01](images/01-get-nutanix-vrack01.png){.thumbnail}

Toujours dans dans votre espace client OVHcloud allez sur l'onglet `Bare Metal Cloud`{.action}. Séléctionnez dans la barre de menu à gauche votre serveur dédié. Ensuite cliquez sur `Network interfaces`{.action}.

En bas à droite de la page vous verrez apparaitre la liste des interfaces avecs leur **MAC address** (2 sur le réseau public, 2 sur le réseau privé). Notez ou copiez ces **MAC address** avec le réseau associé. 

![02 getnetworkinformation 01](images/02-getnetworkinformation01.png){.thumbnail}

Au travers de l'encadrement **Bandwith** cliquez sur `Modify public bandwidth`{.action} pour changer le débit de votre réseau public.

> [!warning]
> En fonction du débit que vous souhaitez le prix de l'abonnement à votre serveur augmentera et il faudra le valider par une commande dans votre espace client OVHcloud.
>

![03 Change bandwitdh 01](images/03-change-bandwidth01.png){.thumbnail}

Sélectionnez la vitessse désirée et cliquez sur `Next`{.action}.

![03 Change bandwitdh 02](images/03-change-bandwidth02.png){.thumbnail}

Cliquez sur `Pay`{.action}.

![03 Change bandwitdh 03](images/03-change-bandwidth03.png){.thumbnail}

Cliquez sur `View purshase order`{.action} pour voir le bon de commande.

![03 Change bandwitdh 04](images/03-change-bandwidth04.png){.thumbnail}

Dès que la commande sera validé votre débit sur la bande passante publique sera changée.

![03 Change bandwitdh 05](images/03-change-bandwidth05.png){.thumbnail}

### Connexion au vRack du serveur dédié

Restez sur la configuration, cliquez en bas de la page sur `Le bouton de configuration`{.action} des cartes du réseau privé.

![04 attach bm to nutanix vrack 01](images/04-attach-bm-to-nutanix-vrack01.png){.thumbnail}

Séléctionnez le vRack dans **Select private network** qui correspond à votre serveur Nutanix noté précedemment. 

![04 attach bm to nutanix vrack 02](images/04-attach-bm-to-nutanix-vrack02.png){.thumbnail}

Le vRack est affiché dans la colonne **Private Network**.

![04 attach bm to nutanix vrack 03](images/04-attach-bm-to-nutanix-vrack03.png){.thumbnail}

### Installation du système d'exploitation

Nous allons maintenant installer un système d'exploitation Linux Ubuntu 22 à partir de l'espace client.

Au travers des onglets du serveur dédié allez sur `General information`{.action}. Cliquez sur le bouton de `Last operating system (OS) installed by OVHcloud`{.action} de la rubrique **General information**.

![05 install OS 01](images/05-install-os01.png){.thumbnail}

Cliquez sur `LINUX (18)`{.action}.

![05 install OS 02](images/05-install-os02.png){.thumbnail}

Sélectionnez `Ubuntu Server 22.04 LTS`{.action} et cliquez sur `Next`{.action}.

![05 install OS 03](images/05-install-os03.png){.thumbnail}

Cliquez sur `Confirm`{.action}.

![05 install OS 04](images/05-install-os04.png){.thumbnail}

L'installation du système d'exploitation se lance un fenêtre de l'état d'avancement apparait et disparaitra quand l'installation sera terminée.

Un message vous sera envoyé dans votre boite au lettre et contiendra le compte utilisateur administrateur et de son mot de passe.  

![05 install OS 04](images/05-install-os05.png){.thumbnail}

### Arrêt de la machine virtuelle OVHgateway sur Prism Central

Nous allons arrêter la machine virtuelle **OVHgateway** avant de configurer le serveur dédié.

Allez dans **Prism Central** dans la gestion des machines virtuelles séléctionnez la machine virtuelle `OVHgateway` allez dans le menu `Actions`{.action} et choisissez `Guest Shutdown`{.action}.

![07 Shutdown ovhgateway 01](images/07-shutdown-ovhgateway01.png){.thumbnail}

La machine virtuelle est éteinte 

![07 Shutdown ovhgateway 02](images/07-shutdown-ovhgateway02.png){.thumbnail}

### Configuration réseau en tant que passerelle Linux

Lorsque l'on déploie un serveur Linux à partir de l'interface client OVHcloud une seule carte réseau est configurée c'est l'adresse IP publique elle servira pour vous connecer en SSH et effectuer votre coniguration.

Connectez vous en SSH au serveur dédié avec cette commande

```bash
ssh ubuntu@dedicated-server-public-ip-address
```

Créer un fichier nommé `configurenetwork.sh` qui active le routage, le NAT et installe des outils nécessaires. 

```bash
#!/bin/bash
set -eux
 
apt update && apt upgrade -y
apt install vlan net-tools -y
echo "8021q" >> /etc/modules
echo 'bonding' | tee -a /etc/modules

# Disable cloud-init networking
touch /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
echo "network: {config: disabled}">> /etc/cloud/cloud.cfg.d/99-disabl"ii:ii:yy:yy:yy:yy""e-network-config.cfg

# Enable forwarding
sed -i s/#net.ipv4.ip_forward/net.ipv4.ip_forward/g /etc/sysctl.conf
sysctl net.ipv4.ip_forward

# get public interface
NIC=$(ip link | grep UP | awk -F: '$0 !~ "lo|vir|wl|^[^0-9]"{print $2;getline}')

# routing traffic to public interface
iptables -t nat -A POSTROUTING -o ${NIC} -j MASQUERADE

# Saving Rules
echo iptables-persistent iptables-persistent/autosave_v4 boolean true | debconf-set-selections
echo iptables-persistent iptables-persistent/autosave_v6 boolean true | debconf-set-selections
apt -y install iptables-persistent --no-install-recommends
```

Lancez ces commandes pour executer le script et redémarrer votre serveur:

```bash
sudo chmod u+x configurenetwork.sh
sudo ./configurenetwork.sh
sudo reboot
```

Saisissez cette commande pour faire apparaitre les cartes qui ne sont pas connectés et reperez avec les adresse MAC le nom des deux cartes réseaux du réseau privé :

```bash
ip a | grep -C1 DOWN
```

Vous verrez apparaitre 3 cartes réseau avec l'état **DOWN**, reprenez la liste des adresses MAC et récupérer le nom des deux cartes privées comme dans l'exemple ci-dessous :

```bash
3: "publiccardname2": <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether "mac-address-public-card2" brd gg:gg:gg:gg:gg:gg
4: "privatecardname1": <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether "mac-address-private-card1" brd ff:ff:ff:ff:ff:ff
5: "privatecardname2": <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether "mac-address-private-card1" brd ff:ff:ff:ff:ff:ff
```

lancer cette commande 

```bash
ip a | grep -C1 UP
```

Vous verrez apparaitre 2 cartes avec l'état **UP**, la carte loopback et une carte physique dont l'adresse MAC doit correspondre à une des adresses publiques notés dans l'espace client OVHcloud. récuperer le nom de cette carte privé 


```bash
1: "lo": <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
--
       valid_lft forever preferred_lft forever
2: "publiccardname1": <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether "mac-address-public-card1" brd ff:ff:ff:ff:ff:ff
```

En s'appuyant sur les informations recueillies, nous allons editer le fichier `/etc/netplan/50-cloud-init.yaml` et remplacer les noms des cartes et des adresses MAC comme ceci :


* "publiccardname1" : Le nom de la première carte publique. 
* "mac-address-public-card1" : L'addresse MAC de la première carte réseau publique.

* "privatecardname1" : le nom de la première carte réseau privée.
* "mac-address-private-card1" : L'addresse MAC de la première carte réseau privée.

* "privatecardname2" : le nom de la deuxième carte réseau privée.
* "mac-address-private-card2" : L'addresse MAC de la deuxième carte réseau privée


Exécuter cette commande pour éditer le fichier

```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

```yaml
# This file is generated from information provided by the datasource.  Changes
# to it will not persist across an instance reboot.  To disable cloud-init's
# network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
# network: {config: disabled}
network:
    version: 2
    ethernets:
        enp26s0f0np0:
            accept-ra: false
            addresses:
            - 2001:41d0:20b:4500::/56
            dhcp4: true
            gateway6: fe80::1
            match:
                macaddress: 0c:42:a1:65:d4:16
            nameservers:
                addresses:
                - 2001:41d0:3:163::1
            set-name: enp26s0f0np0
        #vRack interface
        enp96s0f0np0:
            match:
                macaddress: 04:3f:72:bf:13:9e
            optional: true
        enp96s0f1np1:
            match:
                macaddress: 04:3f:72:bf:13:9f
            optional: true
    bonds:
        bond0:
            dhcp4: no
            addresses: [192.168.254.2/24]
            interfaces: [enp96s0f0np0,enp96s0f1np1]
            parameters:
                mode: 802.3ad
                transmit-hash-policy: layer3+4
                mii-monitor-interval: 100
    vlans:
        bond0.1:
            dhcp4: no
            dhcp6: no
            id: 1
            addresses: [172.16.3.254/22]
            link: bond0
        bond0.2:
            dhcp4: no
            dhcp6: no
            id: 2
            addresses: [10.2.3.254/22]
            link: bond0
```

Exécutez ces commandes pour appliquer la configuration :

```bash
# Apply network configuration
sudo netplan apply
# Reboot server
sudo reboot
```

La passerelle est disponible pour le Cluster Nutanix pour le VLAN1 et le VLAN2.


## Aller plus loin <a name="gofurther"></a>

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
