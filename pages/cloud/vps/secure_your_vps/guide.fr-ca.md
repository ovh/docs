---
title: 'Sécuriser un VPS'
slug: conseils-securisation-vps
section: 'Premiers pas'
excerpt: 'Découvrez les éléments de base vous permettant de sécuriser votre VPS'
---

**Dernière mise à jour le 15 janvier 2021**

## Objectif

Lorsque vous commandez votre VPS, vous pouvez choisir une distribution ou un système d'exploitation à pré-installer. Le serveur est donc prêt à être utilisé après la livraison.  Il vous incombe toutefois, en tant qu'administrateur, de mettre en oeuvre des mesures qui garantissent la sécurité et la stabilité de votre système.

**Ce guide vous propose quelques conseils généraux pour sécuriser votre serveur.**

> [!warning]
>
> OVHcloud vous fournit des machines dont la responsabilité vous revient. En effet, nous n'avons pas accès aux données hébergés sur ces machines et n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à disposition ce guide afin de vous accompagner au mieux sur les tâches courantes. Toutefois, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes quant à l’administration, l'utilisation ou la sécurisation de votre serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- une offre [VPS](https://www.ovhcloud.com/fr-ca/vps/) sur votre compte OVHcloud
- accès administratif (root) via SSH à votre serveur

## En pratique

> [!primary]
>
> Gardez à l'esprit qu'il s'agit d'un guide général. Certaines commandes doivent être adaptées à la distribution ou au système d'exploitation que vous utilisez. Nous vous conseillerons parfois d'utiliser des outils tiers. Si vous avez besoin d'assistance, reportez-vous à la documentation officielle de ces applications.
>
> Si vous configurez votre premier VPS OVHcloud, nous vous recommandons de consulter en premier lieu notre guide sur [la mise en service d'un VPS](../debuter-avec-vps/).
>

### Mettre à jour le système

Les développeurs des distributions effectuent de nombreuses mises à jour des paquets, très souvent pour des raisons de sécurité. Le maintien à jour de votre distribution est donc un point capital pour sécuriser votre VPS.

Cette mise à jour passera par deux étapes.

- La mise à jour de la liste des paquets :

```sh
apt-get update
```

- La mise à jour des paquets eux-mêmes :

```sh
apt-get upgrade
```

Cette opération est à effectuer régulièrement afin de conserver un système à jour.

### Modifier le port d'écoute par défaut du service SSH

L'une des premières actions à effectuer sur votre serveur est de configurer le service SSH en changeant le port d'écoute. Il est défini sur le **port 22** par défaut. Par conséquent, les tentatives de piratage de serveurs par des robots cibleront ce port. La modification de ce paramètre à l'aide d'un autre port est une mesure simple pour renforcer la protection de votre serveur contre les attaques automatisées.

Voici la commande pour modifier le fichier de configuration du service :

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> La commande `nano` est donnée comme exemple, vous pouvez utiliser la commande `vim` ou toute autre commande permettant de modifier des fichiers de configuration.
>

Vous devez ensuite trouver les lignes suivantes:

```sh
# What ports, IPs and protocols we listen for
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

Une fois connecté à votre système avec ces informations d'identification, si vous souhaitez effectuer des opérations nécessitant des droits administrateur, tapez la commande suivante :

```sh
su root
```

Entrez le mot de passe lorsque vous y êtes invité et la connexion active sera basculée vers l'utilisateur root.

### Désactivation de l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes GNU/Linux. L'accès root signifie avoir le plus d'autorisations sur un système d'exploitation. Il n'est pas recommandé et même dangereux de laisser votre VPS accessible uniquement par le biais de l'accès root, car ce compte peut effectuer des opérations irréversiblement dommageables.

Nous vous recommandons de désactiver l'accès direct à l'utilisateur root via le protocole SSH. N'oubliez pas de créer un autre utilisateur avant de suivre les étapes ci-dessous.

Vous devez modifier le fichier de configuration SSH de la même manière que décrit ci-dessus :

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

Pour installer le package logiciel, utilisez la commande suivante :

```sh
apt-get install fail2ban
```

Une fois le paquet installé, il faut modifier le fichier de configuration de ce dernier pour l’adapter à votre usage. Avant toute modification, il est recommandé d’effectuer une sauvegarde du fichier de configuration en tapant la commande suivante :

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Apportez ensuite vos modifications sur le fichier :

```sh
nano /etc/fail2ban/jail.conf
```

Une fois ces modifications terminées, redémarrez le service à l'aide de la commande suivante :

```sh
/etc/init.d/fail2ban restart
```

Pour toute demande complémentaire concernant Fail2Ban, n’hésitez pas à consulter la documentation officielle de cet outil en cliquant sur [ce lien](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configuration du pare-feu interne (iptables)

Les distributions Linux et UNIX sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Nous vous recommandons alors de créer des règles sur ce pare-feu et de les ajuster à votre utilisation. Pour plus d'informations sur les diverses manipulations possibles, consultez la documentation officielle de la distribution utilisée.

### Configuration du Firewall Network OVHcloud

Les solutions OVHcloud incluent la possibilité d'activer un pare-feu au point d'entrée de l'infrastructure, appelé Firewall Network. Une configuration correcte de ce pare-feu permet de bloquer les connexions avant même qu'elles n'arrivent sur votre serveur.

Consultez le guide « [Configurer le Firewall Network](../../dedicated/firewall-network/) » si vous souhaitez l'activer.

### Sauvegarder votre système et vos données

Le concept de sécurité ne se limite pas à la protection d'un système contre les attaques.

La sécurisation de vos données est un élément clé, c'est pourquoi OVHcloud vous offre plusieurs options de sauvegarde en tant que services :

- L'option `Snapshot` qui vous permet de créer un instantané manuel.
- L'option de `Sauvegarde automatique` vous permet de conserver des sauvegardes régulières de votre VPS (à l'exception des disques supplémentaires).

Vous trouverez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit](https://www.ovhcloud.com/fr-ca/vps/options/) et dans les [guides respectifs](../).

## Aller plus loin

[Débuter avec un VPS](../debuter-avec-vps/)

[Configurer le Firewall Network](../../dedicated/firewall-network/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
