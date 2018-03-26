---
title: Mode Bridge IP
slug: network-bridging
excerpt: Le mode Bridge IP est utilise pour configurer vos machines virtuelles. Plusieurs modifications doivent etre apportees sur les VM pour une configuration reseau fonctionnelle.
section: Réseau & IP
---


## Prérequis
- Un serveur dédié avec un hyperviseur installé (Ex: [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.)
- Avoir assigné une Mac Virtuelle à votre IP Failover, depuis votre espace client.
- Des connaissances en [SSH](https://fr.wikipedia.org/wiki/Secure_Shell){.external}

Les exemples de configuration contiennent des mots clés en Majuscule que vous devrez changer par vos propres valeurs. Par exemple, IP_FAIL_OVER doit être remplacé par votre propre IP Failover.

L'IP principale de votre serveur.

L'IP Failover que vous souhaitez configurer.

L'IP de votre serveur avec le dernier octet remplacé par 254.


## Procedure

### Étape 1 &#58; Determiner la passerelle
Pour configurer une machine virtuelle, vous devez connaître la passerelle de votre serveur (*nsxxx.ovh.net*; *ksxxx.ovh.net*; *nsxxxxxxx.ip-xxxxxx.eu*; ...). Pour cela, vous devez remplacer le dernier groupe de chiffre de votre IP Principale par .254.

Vous pouvez retrouver cette IP directement dans l'e-mail d'installation de votre serveur, ou dans la section IP du [Manager OVH](https://www.ovh.com/manager/){.external}.


### Étape 2 &#58; Configuration


> [!warning]
>
> La passerelle que vous devez ajouter à votre machine virtuelle ne doit pas
> être l'IP de votre serveur, ni l'IP Failover, mais uniquement celle fournie
> pour votre serveur dédié. En aucun cas vous ne devez utiliser la commande
> suivante:
>
> ```sh
> route add default gw dev eth0
> ```
>
> Sinon, vous risquez une coupure de votre IP pour la machine virtuelle. Pour déterminer la bonne passerelle à utiliser:
> - L'IP Failover est: YYY.YYY.YYY.YYY
> - L'IP Principale de votre serveur est: XXX.XXX.XXX.XXX
> - L'IP de la passerelle est l'IP principale de votre serveur se terminant par .254.
> - Donc l'IP de la passerelle pour votre machine virtuelle est (GATEWAY_VM) : **XXX.XXX.XXX**.254
> 
> Cette passerelle sera nommée GATEWAY_VM dans la suite du guide.
> 


#### Debian &amp; derives (Ubuntu, CrunchBang, SteamOS...)
**Fichier: /etc/network/interfaces**


```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address IP.FAIL.OVER
    netmask 255.255.255.255
    broadcast IP.FAIL.OVER
    post-up route add GATEWAY_VM dev eth0
    post-up route add default gw GATEWAY_VM
    pre-down route del GATEWAY_VM dev eth0
    pre-down route del default gw GATEWAY_VM
```

**Fichier: /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```



> [!primary]
>
> Pour Debian 6, la configuration du serveur DNS se fait directement dans le fichier /etc/network/interfaces où vous devez retrouver cette section:
> 
> ```bash
> # dns-* options are implemented by the resolvconf package, if installed (default)
> dns-nameservers 213.186.33.99 # OVH DNS Server
> dns-search ovh.net # For faster hosts resolution on the OVH network
> ```
>
N'hésitez pas à vous réferer au [guide](https://wiki.debian.org/fr/Bind9){.external} fourni par **Debian** pour une configuration plus avancée.


#### Redhat &amp; derives (CentOS 6, Scientific Linux, ClearOS...)
**Fichier: /etc/sysconfig/network-scripts/ifcfg-eth0**


```bash
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

**Fichier : /etc/sysconfig/network-scripts/route-eth0**


```bash
GATEWAY_VM dev eth0
default via GATEWAY_VM dev eth0
```

**Fichier : /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```


#### CentOS 7


> [!warning]
>
> Pour CentOS 7, le nom de l'interface réseau est choisie automatiquement durant l'installation.
> Vous allez devoir vérifier le nom de l'interface et l'utiliser dans la configuration de votre machine virtuelle. Utilisez la commande ipaddr pour trouver le nom de l'interface réseau.
> 

**Fichier: /etc/sysconfig/network-scripts/ifcfg-(insérez le nom de l'interface ici)**


```bash
DEVICE=(insert interface Name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```



> [!primary]
>
> Si le fichier route-(insérez le nom de l'interface ici) n'existe pas, vous devrez le créer.
> Pour CentOS 7, NETWORK_GW_VM est l'IP principale de votre serveur avec le dernier octet remplacé par 0.
> 

**Fichier: /etc/sysconfig/network-scripts/route-(insert interface Name)**


```bash
GATEWAY_VM - 255.255.255.255 (insert interface Name)
NETWORK_GW_VM - 255.255.255.0 (insert interface Name)
default GATEWAY_VM
```

**Fichier: /etc/resolv.conf**


```bash
nameserver 213.186.33.99
```


#### OpenSUSE


> [!primary]
>
> Pour OpenSUSE, NETWORK_GW_VM est l'IP principale de votre serveur avec le dernier octet remplacé par 0.
> 

Si le fichier ifcfg-ens32 n'existe pas, il vous faudra le créer.

**Fichier : /etc/sysconfig/network/ifcfg-ens32**


```bash
DEVICE=ens32
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=IP.FAIL.OVER
NETMASK=255.255.255.255
GATEWAY=GATEWAY_VM
HWADDR=MY:VI:RT:UA:LM:AC
```

Si le fichier ifroute-ens32 n'existe pas, il vous faudra le créer.

**Fichier : /etc/sysconfig/network/ifroute-ens32**


```bash
GATEWAY_VM - 255.255.255.255 ens32
NETWORK_GW_VM - 255.255.255.0 ens32
default GATEWAY_VM
```

Dans /etc/sysconfig/network/config, vous devriez avoir:


```bash
NETCONFIG_DNS_STATIC_SERVERS=”213.186.33.99”
```


#### FreeBSD 8.0
**Fichier : /etc/rc.conf**


```bash
ifconfig_em0="inet IP.FAIL.OVER netmask 255.255.255.255 broadcast IP.FAIL.OVER"
static_routes="net1 net2"
route_net1="-net GATEWAY_VM/32 IP.FAIL.OVER"
route_net2="default GATEWAY_VM"
```

**Fichier : /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```


#### Windows Server 2012 / Hyper-V
Premièrement, vous devez créer un Switch Virtuel.

1. En ligne de commande sur le serveur hôte IPconfig /ALL
1. Notez le nom de l'adaptateur réseau sur lequel est configurée l'adresse IP principale du serveur.
1. Dans le manager Hyper-V, créez un nouveau Switch virtuel.
- Le type de connexion est External.
- Sélectionnez l'adaptateur comportant l'IP du serveur.
- Cochez Permettre à l'OS de gestion de partager cet adaptateur réseau.


![Virtual Switch Manager](images/network-bridging-windows-2012-1.jpg){.thumbnail}



> [!primary]
>
> Cette étape est nécessaire seulement une fois pour un serveur Hyper-V. Pour toutes les VM, un Switch Virtuel est requis pour connecter les adaptateurs réseau virtuels à l'adaptateur physique du serveur.
> 

Ensuite, sélectionnez la VM sur laquelle vous voulez configurer l'IP Failover. Utilisez le Manager Hyper-V pour changer la configuration de la VM (vous devez l'éteindre avant).

1. Ouvrir l'adaptateur réseau et cliquez sur **Fonctionnalitées avancées**.
1. Changer l'adresse à Static, et renseignez la MAC Virtuelle de l'adresse IP Failover.
1. Cliquez sur **OK** pour appliquer les changements.

![Hyper-V Manager](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Démarrez la VM et authentifiez-vous en tant qu'administrateur.

1. Panneau de **Contrôle** > **Réseau et Centre de Partage**.
1. Cliquez sur **Connections: Ethernet Link**.
1. Cliquez sur le bouton **Properties** pour afficher les propriétés Ethernet.
1. Sélectionnez **Internet Protocol Version 4 (TCP/IPv4)**.
1. Cliquez sur le bouton **Properties** pour afficher les propriétés IPv4.

![Ethernet Properties](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Dans la fenêtre de propriétés IPv4:

1. Sélectionnez **Utilisez l'adresse suivante**.
1. Entrez l'adresse IP Failover dans **Adresse IP**
1. Dans **SubnetMask**, renseignez 255.255.255.255.
1. Renseignez l'adresse IP de la Passerelle de votre serveur dans **Gateway par défaut** (l'adresse IP de votre serveur se terminant par .254. Il s'agit de la GATEWAY_VM).
1. Renseignez 213.186.33.99 Dans **Preferred DNS Server**.
1. Appuyez sur **OK** et ignorez l'avertissement à propos de l'IP de la passerelle et l'IP Principale vous indiquant qu'ils ne sont pas dans le même sous réseau.

![Ethernet Properties](images/network-bridging-windows-2012-4.jpg){.thumbnail}

Enfin, redémarrez votre serveur, et les machines virtuelles devraient alors être connectées à Internet via l'adresse IP Failover.


#### Autres distributions
Voici la configuration réseau qui devra être renseignée sur la machine virtuelle:

- **ip**: IP_FAIL_OVER
- **netmask**: 255.255.255.255

Il vous faudra ensuite ajouter la passerelle à la Machine Virtuelle:

```sh
route add GATEWAY_VM dev eth0
route add default gw GATEWAY_VM
```
Il vous sera ensuite nécessaire de configurer le DNS de votre serveur afin qu'il puisse faire la résolution de domaine. L'IP du serveur DNS OVH est 213.186.33.99.