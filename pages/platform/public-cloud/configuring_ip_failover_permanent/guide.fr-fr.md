---
title: Rendre la configuration IP Fail Over persistante
slug: rendre-la-configuration-ip-fail-over-persistante
legacy_guide_number: 1885
section: Réseau
order: 4
---


## Préambule
Dans l'optique de conserver votre instance sur du long terme, il serait sans doute préférable de configurer vos adresses IP Fail Over de manière persistante afin de ne pas devoir reconfigurer celle ci à chaque redémarrage. Ce guide vous explique comment configurer définitivement une IP fail over sur une instance.


### Prérequis
- Posséder une instance Public Cloud.
- Avoir importé une IP Fail Over vers le projet Public Cloud.
- Être connecté au serveur via SSH.


## Configuration de l'IP Fail Over

### Pour Debian / Ubuntu
- Éditer le fichier de configuration avec la commande :

```bash
vi /etc/network/interfaces
```

- Ajouter en fin de fichier :

```bash
auto ethX:Y
iface ethX:Y inet static
        address xxx.xxx.xxx.xxx
        netmask 255.255.255.255
        broadcast xxx.xxx.xxx.xxx
```


|Paramètres|Valeurs|
|---|---|
|X|numéro de l'interface principale (généralement eth0)|
|xxx.xxx.xxx.xxx|IP failover à configurer|
|Y|numéro de l'alias (partir de de 0 puis 1... en fonction du nombre d'ip à configurer)|

Valeurs



> [!success]
>
> Dans le cas de plusieurs IP à ajouter, il faut toujours rajouter sur les même lignes   :
> en incrémentant la valeur Y ( numéro de l'alias ).
> 

- Redémarrer les services nertwork avec la commande :

```bash
service networking restart
```



### Pour CentOS / Fedora
- Éditer le fichier de configuration avec la commande :

```bash
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```


|Paramètres|Valeurs|
|---|---|
|X|numéro de l'interface principale (généralement eth0)|
|Y|numéro de l'alias (partir de de 0 puis 1... en fonction du nombre d'ip à configurer)|

- Ajouter dans le fichier :

```bash
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```

- Redémarrer les services nertwork avec la commande :

```bash
ifup ethX:Y
```



### Pour Windows
Windows n'accepte pas la configuration d'adresse IP FailOver en complément de la configuration de l'adresse IP principale en DHCP. Il faudra donc reconfigurer votre carte réseau avec une IP fourni de manière manuelle.

- Récupérer les informations réseaux à l'aide de " ipconfig " :


![public-cloud](images/3545.png){.thumbnail}

- Se rendre dans le panneau de configuration puis dans le centre de réseau et partage :


![public-cloud](images/3543.png){.thumbnail}

- Modifier les paramètres de la carte :


![public-cloud](images/3544.png){.thumbnail}

- Accéder aux propriétés de votre interface :


![public-cloud](images/3546.png){.thumbnail}

- Accéder a la configuration du protocole TCP/IPv4


![public-cloud](images/3547.png){.thumbnail}

- Passer votre configuration en manuelle, et utilisez une configuration similaire à celle présenté ci-dessous en adaptant les adresses IP selon les informations que vous avez obtenu à l'aide de votre " ipconfig " puis cliquer sur " Avancé :


![public-cloud](images/3548.png){.thumbnail}

- Ajouter votre IP Failover comme suit :


![public-cloud](images/3551.png){.thumbnail}
