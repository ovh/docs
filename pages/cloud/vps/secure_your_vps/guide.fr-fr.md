---
title: Sécuriser un VPS
slug: conseils-securisation-vps
section: Premiers pas
---

**Mise à jour le 21/11/2017**

## Objectif

Quand vous commandez votre VPS, une distribution est préinstallée, mais aucun protocole de sécurité n'est mis en place nativement. Il vous revient donc de sécuriser votre VPS, point sur lequel OVH ne pourra pas intervenir.

**Ce guide a pour but de vous donner des conseils généraux pour sécuriser votre serveur.**

 
> [!warning]
>
> OVH met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d'en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. 
Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d'informations dans la section "Aller plus loin" de ce guide.
> 



## Prérequis

- Être connecté en SSH à votre VPS (accès root).


## En pratique

Plusieurs conseils vont vous être apportés. Attention, ce guide est général. Certaines commandes nécessitent d'être adaptées à la distribution que vous utilisez. Quelques informations vous conseillent d'utiliser des outils externes. N'hésitez pas à vous référer à la documentation officielle de ceux-ci pour obtenir de l'aide.

### Mettre à jour le système

Les développeurs des distributions font de nombreuses mises à jour des paquets, très souvent pour des raisons de sécurité. Le maintien à jour de votre distribution est donc un point capital pour sécuriser votre VPS.

Cette mise à jour passera par deux étapes :

- La mise à jour de la liste des paquets

```sh
apt-get update
```

- La mise à jour des paquets eux-mêmes

```sh
apt-get upgrade
```

Une fois cette étape terminée, votre système est à jour. Cette opération est à effectuer régulièrement.


### Modifier le port d'écoute par défaut du service SSH


L'une des premières actions à effectuer sur votre serveur est celle du port d'écoute du service SSH. L'écoute est par défaut définie sur le **port 22**. Il est donc conseillé de ne pas le laisser en l'état et de le modifier. En effet, la plupart des piratages de serveurs sont faits par des robots qui ciblent par défaut le port 22. Modifier son paramétrage leur compliquera la tâche et rendra votre serveur plus difficile à atteindre.

Voici la commande à effectuer pour modifier le fichier de configuration du service :

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> La commande `nano`est donnée à titre d'exemple, vous pouvez utiliser la commande `vim` ou toute autre commande permettant l'édition du fichier sshd_config.
>

Il faut ensuite visualiser la ligne suivante :

```sh
# What ports, IPs and protocols we listen for Port 22
```

Remplacez le nombre 22 par celui de votre choix. **Veuillez toutefois à ne pas renseigner un numéro de port déjà utilisé sur votre système**. Sauvegardez puis quittez le fichier de configuration.

Il vous faut ensuite redémarrer votre service :

```sh
/etc/init.d/ssh restart
```

À présent, lors de votre demande de connexion SSH sur votre machine, vous devrez obligatoirement renseigner le nouveau port :

```sh
ssh root@votrevps.ovh.net -p NouveauPort
```

### Modifier le mot de passe associé à l'utilisateur "root"

À l'installation d'une distribution, un mot de passe est créé automatiquement pour l'accès principal (root). Il est très fortement conseillé de le personnaliser en le modifiant. Pour cela, une fois connecté, il vous suffit de taper la commande suivante :

```sh
passwd root
```

Votre système vous demandera alors de rentrer votre nouveau mot de passe deux fois pour le valider. Attention, **celui-ci ne s'affichera pas lors de l'écriture**, par mesure de sécurité. Vous ne pourrez donc pas voir les caractères saisis.

Une fois cette opération effectuée, vous devrez renseigner le nouveau mot de passe dès votre prochaine connexion sur le système.

### Créer un utilisateur avec des droits restreints et agir sur le système avec les droits root

La création d'un nouvel utilisateur se fait avec la commande suivante :

```sh
adduser NomUtilisateurPersonnalisé
```

Remplissez ensuite les différentes informations demandées par le système (mot de passe, nom, etc).

Cet utilisateur sera autorisé à se connecter à votre système en SSH avec le mot de passe indiqué lors de sa création.

Une fois connecté à votre système avec ce dernier, si vous souhaitez effectuer des opérations nécessitant les droits root, il suffira de taper la commande suivante :

```sh
su root
```

Il faudra alors indiquer le mot de passe associé à l'utilisateur root pour valider l'opération.

### Désactiver l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes UNIX, et est celui qui possède le plus de droits sur votre système. Il est déconseillé, voire dangereux de laisser votre VPS accessible uniquement via cet utilisateur, ce dernier pouvant effectuer des opérations irréversibles sur votre serveur.

Il est recommandé de désactiver son accès direct via le protocole SSH.

Pour effectuer cette opération, il faut modifier le fichier de configuration SSH comme vous l'avez effectué précédemment pour modifier le port d'accès à votre VPS :

```sh
nano /etc/ssh/sshd_config
```

Repérez ensuite la section suivante :

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Remplacez le **yes** par **no** pour la ligne `PermitRootLogin`.

Pour que cette modification soit prise en compte il faut redémarrer le service SSH :

```sh
/etc/init.d/ssh restart
```

Maintenant, afin de pouvoir vous connecter à votre système, servez-vous de l'utilisateur que vous venez de créer.


### Installer et configurer le paquet Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP inconnues qui tentent de pénétrer dans votre système. Ce paquet est recommandé, voire indispensable, pour vous prémunir contre toute tentative de brute force sur vos services.

L'installation de ce paquet s'effectue avec la commande suivante :

```sh
apt-get install fail2ban
```

Une fois le paquet installé, il faut modifier le fichier de configuration de ce dernier pour l'adapter à la vôtre. Avant toute modification, il est recommandé de faire une sauvegarde de ce fichier en tapant la commande suivante :

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Apportez ensuite vos modifications sur le fichier :

```sh
nano /etc/fail2ban/jail.conf
```

Une fois l'opération terminée, vous devez redémarrer le service à l'aide de cette commande :

```sh
/etc/init.d/fail2ban restart
```

Pour toute demande complémentaire concernant Fail2Ban, n'hésitez pas à consulter la [documentation officielle](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de cet outil.

### Configurer le pare-feu interne : Iptables

La distribution nue dispose d'un service de pare-feu nommé Iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Il est alors recommandé de créer et d'ajuster à votre utilisation des règles sur ce pare-feu. Pour toute information sur les différentes manipulations possibles, il vous suffit de vous référer au fonctionnement de ce service sur la documentation officielle de la distribution utilisée.

### Configurer le Firewall Network d'OVH

OVH vous propose un pare-feu à l'entrée de l'infrastructure appelé le Firewall Network. Sa mise en place et sa configuration permettent le blocage des protocoles avant même leur arrivée sur votre serveur.

Voici le [lien](https://docs.ovh.com/fr/dedicated/firewall-network/){.external} vers le guide dédié à ce pare-feu.

### Sauvegarder votre système et vos données

La notion de sécurité ne se limite pas uniquement à la protection d'un système contre des attaques.

La sécurisation de vos données est un élément primordial, c'est pourquoi OVH propose trois options de backup :

- l'option `Snapshot`, qui consiste à créer manuellement un instantané (snapshot) de votre machine virtuelle (disponible sur les VPS SSD, Cloud et Cloud RAM) ;
- l'option `Backup automatisé` est une sauvegarde de votre VPS (hors disque additionnel) planifiée quotidiennement, exportée puis répliquée trois fois avant d’être disponible depuis l'espace client (disponible uniquement sur les VPS Cloud et Cloud RAM) ;
- l'option `Backup Storage` qui permet le dépôt et la récupération manuelle des fichiers sur un espace disque dédié. Les protocoles disponibles pour faire cela sont FTP, NFS et CIFS, pour coller aux méthodes d’accès des utilisateurs de tous les systèmes d'exploitation. Vous mettez ainsi vos données à l’abri en cas d’interruption de service (disponible uniquement sur les VPS Cloud et Cloud RAM).

Toutes les informations sur nos offres de stockage pour VPS: <https://www.ovh.com/fr/vps/backup-vps.xml>.

## Aller plus loin

[Guide sur le Firewall Network](https://docs.ovh.com/fr/dedicated/firewall-network/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.