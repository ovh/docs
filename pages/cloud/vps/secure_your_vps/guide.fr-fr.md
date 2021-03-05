---
title: 'Sécuriser un VPS'
slug: conseils-securisation-vps
section: 'Premiers pas'
excerpt: 'Découvrez les éléments de base vous permettant de sécuriser votre VPS'
---

**Dernière mise à jour le 15 janvier 2021**

## Objectif

Lorsque vous commandez votre VPS, une distribution ou un système d'exploitation est pré-installé, mais aucun protocole de sécurité n'est implémenté nativement. Il vous appartient donc de sécuriser votre machine, point sur lequel OVHcloud ne peut intervenir.

**Ce guide vous propose quelques conseils généraux pour sécuriser votre serveur.**

 
> [!warning]
>
> OVHcloud vous fournit des machines dont la responsabilité vous revient. En effet, nous n'avons pas accès à ces machines et n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à disposition ce guide afin de vous accompagner au mieux sur les tâches courantes. Toutefois, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes quant à l’administration, l'utilisation ou la sécurisation de votre serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
> 


## Exigences

- une offre [VPS](https://www.ovhcloud.com/fr/vps/) sur votre compte OVHcloud
- accès administratif (racine) via SSH à votre serveur

## Instructions

> [!primary]
>
> Gardez à l'esprit qu'il s'agit d'un guide général. Certaines commandes doivent être adaptées au système de distribution ou d'exploitation que vous utilisez et des conseils vous conseilleront d'utiliser des outils tiers. Si vous avez besoin d'aide, reportez-vous à la documentation officielle de ces applications.
>
> Si vous configurez votre premier VPS OVHcloud, nous vous recommandons de consulter notre guide sur [la mise en route d'un VPS](../debuter-avec-vps/) en premier.
>


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

L'une des premières actions à effectuer sur votre serveur est de configurer le service SSH en changeant le port d'écoute. L'écoute est par défaut définie sur le **port 22**. Il est donc conseillé de ne pas le laisser en l’état et de le modifier. En effet, la plupart des tentatives de piratage de serveur sont effectuées par des robots ciblant par défaut le port 22. Modifier son paramétrage leur compliquera la tâche et rendra votre serveur plus difficile à atteindre.

Voici la commande pour modifier le fichier de configuration du service :

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> La commande `nano` est donnée comme exemple, vous pouvez utiliser la commande `vim` ou toute autre commande permettant de modifier le fichier « sshd_config ».
>

Vous devez ensuite trouver les lignes suivantes:

```sh
# What ports, IPs and protocols we listen for Port 22
Port 22
```

Remplacez le numéro **22** par le numéro de port de votre choix. **N'entrez pas de numéro de port déjà utilisé sur votre système**. Pour des raisons de sécurité, utilisez un nombre compris entre 49152 et 65535. <br>Enregistrez et quittez le fichier de configuration.

Redémarrez le service:

```sh
systemctl restart sshd
```

Cela devrait suffire pour appliquer les modifications. Vous pouvez également redémarrer le VPS (`~$ reboot`).

N'oubliez pas que vous devez indiquer le nouveau port chaque fois que vous demandez une connexion SSH à votre serveur, par exemple:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Modification du mot de passe associé à l'utilisateur "root"

Il est fortement recommandé de modifier le mot de passe de l'utilisateur root de façon à ne pas le laisser à la valeur par défaut sur un nouveau système. Pour plus d'informations, reportez-vous aux informations de [ce guide](../root-password/).

### Création d'un utilisateur avec des droits restreints

En général, les tâches qui ne nécessitent pas de privilèges root doivent être effectuées via un utilisateur standard. Vous pouvez créer un utilisateur à l'aide de la commande suivante:

```sh
adduser NomUtilisateurPersonnalisé
```

Remplissez ensuite les informations demandées par le système (mot de passe, nom, etc.).

Le nouvel utilisateur sera autorisé à se connecter via SSH. Lors de la connexion, utilisez les informations d'identification spécifiées.

Une fois connecté à votre système avec ces informations d'identification, si vous souhaitez effectuer des opérations nécessitant des droits administrateur, tapez la commande suivante :

```sh
su root
```

Entrez le mot de passe lorsque vous y êtes invité et la connexion active sera basculée vers l'utilisateur root.

### Désactivation de l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes GNU/Linux. L'accès à la racine signifie avoir le plus d'autorisations sur un système d'exploitation. Il n'est pas recommandé ni même dangereux de laisser votre VPS accessible uniquement par racine, car ce compte peut effectuer des opérations irréversiblement dommageables.

Nous vous recommandons de désactiver l'accès direct à l'utilisateur root via le protocole SSH. N'oubliez pas de créer un autre utilisateur avant de suivre les étapes ci-dessous.

Vous devez modifier le fichier de configuration SSH de la même manière que décrit ci-dessus:

```sh
nano /etc/ssh/sshd_config
```

Localisez la section suivante:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Remplacez **yes** par **no** sur la ligne `PermitRootLogin`.

Pour que cette modification soit prise en compte, vous devez redémarrer le service SSH:

```sh
systemctl restart sshd
```

Par la suite, les connexions à votre serveur via l'utilisateur root (`ssh root@IPv4_of_your_VPS`) seront rejetées.


### Installation de Fail2ban

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

### Configuration du pare-feu interne (iptables)

Les distributions Linux et UNIX sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Nous vous recommandons alors de créer et d’ajuster à votre utilisation des règles sur ce pare-feu. Pour plus d'informations sur les diverses manipulations possibles, reportez-vous à la section correspondante de la documentation officielle de la distribution utilisée.

### Configuration du pare-feu réseau OVHcloud 

Les solutions OVHcloud incluent la possibilité d'activer un pare-feu au point d'entrée de l'infrastructure, appelé pare-feu réseau. La configuration correcte permet de bloquer les connexions avant même qu'elles n'arrivent sur votre serveur.

Reportez-vous au [Network Firewall Guide](../../dedicated/firewall-network/) si vous souhaitez l'activer.

### Sauvegarde de votre système et de vos données

Le concept de sécurité ne se limite pas à la protection d'un système contre les attaques.

La sécurisation de vos données est un élément clé, c'est pourquoi OVHcloud vous offre plusieurs options de sauvegarde en tant que service:

- L'option `Snapshot` qui vous permet de créer un instantané manuel.
- L'option `Automated Backup` vous permet de conserver des sauvegardes régulières de votre VPS (à l'exception des disques supplémentaires).

Vous trouverez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit](https://www.ovhcloud.com/fr/vps/options/) et dans les [guides respectifs](../).

## Allez plus loin

[Débuter avec un VPS](../debuter-avec-vps/) 

[Guide de pare-feu réseau](../../dedicated/firewall-network/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.