---
title: Configurer plusieurs serveurs dédiés dans le vRack
slug: configurer-plusieurs-serveurs-dedies-dans-le-vrack
excerpt: Apprenez à configurer plusieurs serveurs dédiés grâce au vRack
section: vRack
---

**Dernière mise à jour le 2018/02/06**

## Objectif

La technologie vRack (baie virtuelle) permet de regrouper plusieurs serveurs, qu'importe leur nombre et leur emplacement physique dans nos datacenters, et de les connecter à un switch virtuel au sein d'un même réseau privé. Vos serveurs peuvent communiquer entre eux de manière privée et sécurisée au sein d'un VLAN dédié.

**Apprenez à configurer deux ou plusieurs serveurs dédiés grâce au vRack.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/8zLXuC3QmHU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prérequis

- Posséder un [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.
- Avoir à disposition au moins deux ou plusieurs [serveurs compatibles vRack](https://www.ovh.com/ca/fr/serveurs-dedies/){.external}.
- Être connecté via SSH (ou par votre interface utilisateur graphique) sur votre serveur Linux (accès root).
- Avoir accès à [votre espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Préparer la plage d'adresses IP privées que vous avez choisie.


## En pratique

### Ajouter les serveurs dans le vRack

1. Une fois le vRack ajouté sur votre compte, rendez-vous dans la section `Cloud`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
2. Sélectionnez ensuite le menu `vRack`{.action} dans la colonne de gauche.
3. Sélectionnez votre vRack dans la liste proposée.
4. Dans la liste des services éligibles, sélectionnez les serveurs que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

![Choix du vRack](images/vrack_selection_2020.png){.thumbnail}

### Configurer les interfaces réseau

À titre d'exemple, nous utilisons une plage d'adresses IP internes de *192.168.0.0/16*.

Nous employons également les noms **eth1** et **eno4** pour l'interface réseau secondaire. Les serveurs peuvent utiliser une convention de nommage différente. Nous vous invitons à le vérifier en utilisant les commandes expliquées ci-dessous.

Pour lister les interfaces réseau, la commande à utiliser est la suivante :

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

La première interface de la liste concerne votre connexion réseau principale. Vous pouvez vérifier celle qui est active en utilisant la commande qui suit :

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Si la commande renvoie `Link detected : no`, il s'agit de l'interface réseau à utiliser pour votre configuration du vRack après avoir exécuté cette commande :

```sh
ifconfig eth1 down
```

#### CentOS 6 et 7

Ouvrez le fichier de configuration de l'interface réseau avec la commande suivante :

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Appuyez sur la touche `I` de votre clavier pour passer en mode insertion.

Configurez l'interface réseau secondaire comme suit :

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Dans l'exemple ci-dessus, vous pouvez choisir d'utiliser n'importe quelle plage IP privée et n'importe quelle adresse située dans cette plage.

1. Appuyez sur la touche `ESC`.
2. Appuyez sur la touche `SHIFT` et sur la touche *deux-points* pour ouvrir l'éditeur.
3. Saisissez `wq`.
4. Appuyez sur la touche `Entrée`.
5. Redémarrez votre serveur.
6. Répétez toutes les étapes pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.


#### Debian 7 et 8

Ouvrez le fichier de configuration de l'interface réseau avec la commande suivante :

```sh
nano /etc/network/interfaces
```

Configurez l'interface réseau secondaire comme suit :

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Dans l'exemple ci-dessus, vous pouvez choisir d'utiliser n'importe quelle plage IP privée et n'importe quelle adresse située dans cette plage.


1. `CTRL + X` pour quitter le fichier de configuration réseau.
2. Appuyez sur la touche `Y` pour enregistrer vos modifications, puis appuyez sur `Entrée`.
3. Redémarrez votre serveur.
4. Répétez toutes les étapes pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.


#### Debian 9

Ouvrez le fichier de configuration de l'interface réseau avec la commande suivante :

```sh
nano /etc/network/interfaces
```

Configurez l'interface réseau secondaire comme suit :

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Dans l'exemple ci-dessus, vous pouvez choisir d'utiliser n'importe quelle plage IP privée et n'importe quelle adresse située dans cette plage.

1. `CTRL + X` pour quitter le fichier de configuration réseau.
2. Appuyez sur la touche `Y` pour enregistrer vos modifications, puis appuyez sur `Entrée`.
3. Redémarrez votre serveur.
4. Répétez toutes les étapes pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.


#### Ubuntu Server 16

Ouvrez le fichier de configuration de l'interface réseau avec la commande suivante :

```sh
vi /etc/network/interfaces
```

Appuyez sur la touche `I` de votre clavier pour passer en mode insertion.

Configurez l'interface réseau secondaire comme suit :

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Dans l'exemple ci-dessus, vous pouvez choisir d'utiliser n'importe quelle plage IP privée et n'importe quelle adresse située dans cette plage.

1. Appuyez sur la touche `ESC`.
2. Appuyez sur `SHIFT` et sur la touche *deux-points* pour ouvrir l'éditeur.
3. Saisissez `wq`.
4. Appuyez sur la touche `Entrée`.
5. Redémarrez votre serveur.
6. Répétez toutes les étapes pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.


#### Ubuntu Server 17

Ouvrez le fichier de configuration de l'interface réseau avec la commande suivante :

```sh
nano /etc/network/interfaces
```

Configurez l'interface réseau secondaire comme suit :

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Dans l'exemple ci-dessus, vous pouvez choisir d'utiliser n'importe quelle plage IP privée et n'importe quelle adresse située dans cette plage.

1. `CTRL + X` pour quitter le fichier de configuration réseau.
2. Appuyez sur la touche `Y` pour enregistrer vos modifications, puis appuyez sur `Entrée`.
3. Redémarrez votre serveur.
4. Répétez les étapes 1 à 5 pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.


#### Windows

À titre d'exemple, nous utiliserons la plage d'adresses IP internes *192.168.0.0/16*.

Voici les étapes à effectuer:

- Connectez-vous à votre serveur Windows via le bureau à distance.
- Cliquez sur le bouton`Start`{.action}.
- Cliquez sur `Control Panel`{.action}.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Cliquez sur `Network and Internet`{.action}.

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Cliquez sur `Network and Sharing Centre`{.action}.

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Cliquez sur `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Effectuez un clic droit sur l'interface réseau secondaire.

- Cliquez sur `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Effectuez un double-clic sur `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Cliquez sur `Use the following IP address`:

    - pour `IP address`: saisissez une adresse IP de votre plage interne ;
    - pour `Subnet mask`: saisissez 255.255.0.0.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

-  Cliquez sur le bouton `OK`{.action} pour enregistrer les modifications.
- Redémarrez votre serveur.
- Répétez toutes les étapes pour vos autres serveurs et attribuez-leur une adresse IP unique appartenant à votre plage interne. Après cela, vos serveurs pourront communiquer entre eux sur le réseau privé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
