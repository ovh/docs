---
title: 'Sécuriser un VPS'
slug: conseils-securisation-vps
section: 'Premiers pas'
excerpt: 'Découvrez les éléments de base vous permettant de sécuriser votre VPS'
---

**Dernière mise à jour le 13/06/2019**

## Objectif

Lorsque vous commandez votre VPS, une distribution ou un système d'exploitation est pré-installé, mais aucun protocole de sécurité n'est implémenté nativement. Il vous appartient donc de sécuriser votre machine, point sur lequel OVHcloud ne peut intervenir.

**Ce guide vous propose quelques conseils généraux pour sécuriser votre serveur.**

 
> [!warning]
>
> OVHcloud vous fournit des machines dont la responsabilité vous revient. En effet, nous n'avons pas accès à ces machines et n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à disposition ce guide afin de vous accompagner au mieux sur les tâches courantes. Toutefois, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes quant à l’administration, l'utilisation ou la sécurisation de votre serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 


## Prérequis

- Être connecté en SSH à votre VPS (accès root).


## En pratique

Plusieurs conseils vont vous être apportés. Attention, ce guide est général. Certaines commandes nécessitent d’être adaptées à la distribution que vous utilisez. Quelques informations vous conseillent d’utiliser des outils externes. N’hésitez pas à vous référer à la documentation officielle de ceux-ci pour obtenir de l’aide.

### Mettre à jour le système

Les développeurs des distributions effectuent de nombreuses mises à jour des paquets, très souvent pour des raisons de sécurité. Le maintien à jour de votre distribution est donc un point capital pour sécuriser votre VPS.

Cette mise à jour passera par deux étapes.

- La mise à jour de la liste des paquets :

```sh
apt-get update
```

- La mise à jour des paquets eux-mêmes :

```sh
apt-get upgrade
```

Une fois cette étape terminée, votre système est à jour. Cette opération est à effectuer régulièrement.


### Modifier le port d'écoute par défaut du service SSH

L'une des premières actions à effectuer sur votre serveur est de configurer le service SSH en changeant le port d'écoute. L'écoute est par défaut définie sur le **<b>port 22</b>**. Il est donc conseillé de ne pas le laisser en l’état et de le modifier. En effet, la plupart des tentatives de piratage de serveur sont effectuées par des robots ciblant par défaut le port 22. Modifier son paramétrage leur compliquera la tâche et rendra votre serveur plus difficile à atteindre.

Voici la commande pour modifier le fichier de configuration du service :

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> La commande `nano` est donnée comme exemple, vous pouvez utiliser la commande `vim` ou toute autre commande permettant de modifier le fichier « sshd_config ».
>

Vous devez ensuite trouver la ligne suivante :

```sh
# What ports, IPs and protocols we listen for Port 22
Port 22
```

Remplacez le nombre **22** par le numéro de port de votre choix. ** <b>Veillez toutefois à ne pas renseigner un numéro de port déjà utilisé sur votre système</b>**. Enregistrez et quittez le fichier de configuration.

Vous devez ensuite redémarrer votre service :

```sh
/etc/init.d/ssh restart
```

À présent, lors de votre demande de connexion SSH à votre machine, vous devrez obligatoirement renseigner le nouveau port :

```sh
ssh root@YourVps.ovh.net -p NewPort
```

### Modifier le mot de passe associé à l'utilisateur « root »

À l’installation d’une distribution, un mot de passe est créé automatiquement pour l’accès principal (root). Il est très fortement recommandé de le personnaliser en le modifiant. Pour ce faire, une fois connecté, il vous suffit d'entrer la commande suivante :

```sh
passwd root
```

Votre système vous demandera ensuite d'entrer votre nouveau mot de passe deux fois pour le valider. Attention, pour des raisons de sécurité, **l<b>e mot de passe ne sera pas affiché lors de l’écriture</b>**. Vous ne pourrez donc pas voir les caractères saisis.

Une fois cette opération effectuée, vous devez renseigner le nouveau mot de passe dès votre prochaine connexion au système.

### Créer un utilisateur avec des droits restreints et agir dans le système avec des droits root

Vous pouvez créer un nouvel utilisateur avec la commande suivante :

```sh
adduser NomUtilisateurPersonnalisé
```

Vous devez ensuite remplir les informations demandées par le système : mot de passe, nom, etc.

Cet utilisateur sera autorisé à se connecter à votre système en SSH avec le mot de passe indiqué lors de la création du compte.

Une fois connecté à votre système avec ces informations d'identification, si vous souhaitez effectuer des opérations nécessitant des droits d'administrateur, il suffira de taper la commande suivante :

```sh
su root
```

Vous devez ensuite entrer le mot de passe associé à l'utilisateur root pour valider l'opération.

### Désactiver l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes UNIX et il possède les droits les plus élevés sur votre système. Il n'est pas conseillé et même dangereux de laisser votre VPS accessible uniquement via cet utilisateur, car ce compte peut effectuer des opérations irréversibles sur votre serveur.

Il est recommandé de désactiver l'accès direct des utilisateurs root via le protocole SSH.

Pour effectuer cette opération, vous devez modifier le fichier de configuration SSH comme vous l'avez fait précédemment pour modifier le port d'accès à votre serveur.

```sh
nano /etc/ssh/sshd_config
```

Recherchez ensuite la section suivante :

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Remplacez le **oui** par **non** sur la ligne ` PermitRootLogin`.

Pour que cette modification soit prise en compte, vous devez redémarrer le service SSH :

```sh
/etc/init.d/ssh restart
```

Maintenant, pour vous connecter à votre système, utilisez les informations d'identification de compte (utilisateur) que vous venez de créer.


### Installer et configurer le paquet Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP inconnues qui tentent de pénétrer dans votre système. Ce logiciel est recommandé, même essentiel, pour se prémunir contre toute attaque brutale contre vos services.

Pour installer le package logiciel, utilisez la commande suivante :

```sh
apt-get install fail2ban
```

Une fois le paquet installé, il faut modifier le fichier de configuration de ce dernier pour l’adapter à la vôtre. Avant toute modification, il est recommandé d’effectuer une sauvegarde du fichier de configuration en tapant la commande suivante :

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Apportez ensuite vos modifications sur le fichier :

```sh
nano /etc/fail2ban/jail.conf
```

Une fois ces modifications terminées, redémarrez le service à l'aide de la commande suivante :

```sh
/etc/init.d/fail2ban restart
```

Pour toute demande complémentaire concernant Fail2Ban, n’hésitez pas à consulter la documentation officielle de cet outil en cliquant sur  [ce lien](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configurez le pare-feu interne : les iptables

Les distributions Linux et UNIX sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Nous vous recommandons alors de créer et d’ajuster à votre utilisation des règles sur ce pare-feu. Pour plus d'informations sur les diverses manipulations possibles, reportez-vous à la section correspondante de la documentation officielle de la distribution utilisée.

### Configuration du réseau de pare-feu OVHcloud

Les solutions OVHcloud incluent un pare-feu à l'entrée de l'infrastructure, appelé firewall network. Sa mise en place et sa configuration permettent le blocage des protocoles avant même leur arrivée sur votre serveur.

Nous vous proposons également un guide sur la [configuration de ce réseau](../dedicated/firewall-network/){.external} de pare-feu.

### Sauvegarder votre système et vos données

La notion de sécurité ne se limite pas uniquement à la protection d’un système contre des attaques.

La sécurisation de vos données est un élément clé, c'est pourquoi OVHcloud vous propose trois options de sauvegarde :

- l'option snapshot, qui vous permet de créer un instantané manuel de votre machine virtuelle (disponible sur VPS SSD, Cloud et Cloud RAM) ;
- l'option backup automatisé vous permet d'effectuer une sauvegarde régulière de votre VPS (hors disques additionnels), puis de l'exporter et de la répliquer trois fois avant d'être disponible à partir de votre espace client (disponible uniquement sur les VPS Cloud et les VPS Cloud RAM) ;
- l'option backup automatisé qui vous permet de déposer et de récupérer manuellement des fichiers sur un espace disque dédié. Les protocoles de transfert de fichiers disponibles sont FTP, NFS et CIFS, pour garantir la compatibilité avec les méthodes d'accès aux fichiers de tous les systèmes d'exploitation. Cela vous permet de protéger vos données en cas d'interruption de service (uniquement disponible sur les VPS Cloud et Cloud RAM VPS).

Vous trouverez toutes les informations sur nos solutions de sauvegarde VPS ici : <https://www.ovhcloud.com/fr-ca/vps/options/>.

## Aller plus loin

[Guide sur le firewall network](../dedicated/firewall-network/){.external}

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com>.
