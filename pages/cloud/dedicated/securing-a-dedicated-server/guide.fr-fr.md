---
title: 'Sécuriser un serveur dédié'
slug: securiser-un-serveur-dedie
excerpt: 'Apprenez à sécuriser votre serveur dédié grâce à quelques conseils'
section: 'Premiers pas'
order: 2
---

**Dernière mise à jour le 07/05/2020**

## Objectif

Lorsque vous commandez votre serveur dédié, aucun protocole de sécurité n'est implémenté de manière native. Il vous revient donc de le sécuriser. En effet, OVHcloud ne pourra être tenu responsable d'un défaut de sécurisation de votre machine.

**Apprenez à sécuriser votre serveur dédié grâce à quelques conseils.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Être connecté en SSH (accès root) sous Linux ou en tant qu'administrateur sous Windows.


## En pratique

> [!primary]
>
> Ce guide est à usage général. Il est possible que vous deviez adapter quelques commandes en fonction de la distribution et/ou du système d'exploitation que vous utilisez. Certains conseils pourront vous suggérer l'utilisation d'outil tiers. En cas de question quant à leur utilisation, veuillez vous référer à leur documentation officielle.  
>

### Mettre à jour votre système

Les développeurs de systèmes de distribution et d'exploitation proposent des mises à jour fréquentes de progiciels, très souvent pour des raisons de sécurité. **Garder votre distribution ou votre système d'exploitation à jour est primordial pour la sécurisation de votre serveur.**

Il s'agit d'un processus en deux parties qui implique la mise à jour de la liste des paquets (la liste des applications logicielles installées) et celle des paquets en eux-mêmes.

#### Mettre à jour la liste des paquets

Mettez à jour la liste des paquets sur votre serveur de la manière suivante :

```sh
apt-get update
```

#### Mettre à jour les paquets

Mettez ensuite à jour les paquets sur votre serveur de la manière suivante :

```sh
apt-get upgrade
```

Une fois les mises à jour terminées, votre système sera entièrement à jour. Cette opération doit être effectuée de manière régulière.


### Modifier le port d'écoute par défaut du service SSH

L'une des premières actions à effectuer sur votre serveur est la configuration du service SSH en changeant son port d'écoute. L’écoute est, par défaut, définie sur le port 22. Nous vous conseillons d'en modifier la valeur par défaut. En effet, la plupart des tentatives de piratage de serveurs sont faites par des robots qui ciblent le port 22 en priorité. Modifier ce paramètre rendra donc votre serveur plus difficile à atteindre.

> [!primary]
>
> Dans les exemples suivants, nous utiliserons l'éditeur de texte Linux appelé **Nano**, mais vous pouvez utiliser n'importe quel éditeur de texte qui vous permet d'éditer le fichier de configuration.
>

Voici la commande pour modifier le fichier de configuration du service :

```sh
nano /etc/ssh/sshd_config
```

Repérez ensuite la ligne suivante dans le fichier :

```sh
# What ports, IPs and protocols we listen for Port 22
```

Remplacez le numéro **22** par celui de votre choix puis sauvegardez et quittez le fichier de configuration. **Assurez-vous de ne pas taper un numéro de port déjà utilisé**. Il vous faut ensuite redémarrer votre serveur.

Maintenant, lorsque vous demandez une connexion SSH sur votre machine, vous devrez indiquer le nouveau port :

```sh
ssh root@VotreServeur.ovh.net -p NouveauPort
```

> [!warning]
>
> Veuillez noter que la modification du port par défaut de SSH ou de tout autre protocole constitue un risque potentiel. Vous pouvez constater que certains services ne peuvent pas être configurés pour être utilisés avec des ports non standard et ne fonctionneront pas si le port par défaut est modifié.
>


### Modifier le mot de passe associé à l'utilisateur root

Lorsqu'un système de distribution ou d'exploitation est installé, un mot de passe est créé automatiquement pour l'accès root. Nous vous conseillons vivement de le personnaliser en le modifiant. Pour cela, ouvrez une connexion SSH à votre serveur et tapez la commande suivante :

```sh
passwd root
```

Vous devrez ensuite entrer votre nouveau mot de passe deux fois. Il convient de noter que, pour des raisons de sécurité, **le mot de passe ne sera pas affiché lors de l’écriture**. Vous ne pourrez donc pas voir les caractères saisis.

Une fois cette opération effectuée, vous devrez entrer le nouveau mot de passe dès votre prochaine connexion sur le système.


### Créer un utilisateur avec des droits restreints

Nous vous recommandons de créer un compte utilisateur disposant d'un accès restreint à votre serveur pour une utilisation quotidienne. Vous pouvez créer un nouvel utilisateur avec la commande suivante :

```sh
adduser Nom_Utilisateur_Personnalisé
```

Remplissez ensuite les informations demandées par le système (mot de passe, nom, etc.).

Cet utilisateur sera autorisé à se connecter à votre système en SSH avec le mot de passe indiqué lors de la création du compte. Une fois connecté à votre système avec ces informations d'identification, si vous souhaitez effectuer des opérations nécessitant des droits d'administrateur, il suffira de taper la commande suivante :

```sh
su root
```

Vous devez ensuite entrer le mot de passe associé à l'utilisateur root pour valider l'opération.


### Désactiver l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes UNIX, comme Linux ou MAC OS. L'utilisateur root dispose de tous les droits d'administration sur votre système. Il est déconseillé, voire dangereux, de laisser votre serveur dédié accessible uniquement via cet utilisateur. Ce compte peut en effet exécuter des opérations irréversibles sur votre serveur.

Nous vous recommandons vivement de désactiver l'accès direct des utilisateurs root via le protocole SSH. Pour effectuer cette opération, vous devez modifier le fichier de configuration SSH de la même manière que vous l'avez fait précédemment pour modifier le port d'accès à votre serveur.

Pour commencer, ouvrez une connexion SSH à votre serveur et tapez la commande suivante :

```sh
nano /etc/ssh/sshd_config
```

Ensuite, repérez la section suivante et remplacez le « yes » par « no » dans la ligne `PermitRootLogin`, comme indiqué ci-dessous :

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Après avoir enregistré et fermé le fichier de configuration, redémarrez le service SSH pour appliquer les modifications en utilisant la commande suivante :

```sh
/etc/init.d/ssh restart
```

### Installer et configurer le paquet Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP inconnues tentant de pénétrer dans votre système. Ce paquet est recommandé pour vous protéger contre toute attaque par force brute sur votre serveur.

Pour installer Fail2ban, utilisez la commande suivante :

```sh
apt-get install fail2ban
```

Une fois le paquet installé, modifiez le fichier de configuration de ce dernier pour l’adapter à celle de votre système. Avant toute modification, nous vous recommandons de réaliser une sauvegarde du fichier de configuration en tapant la commande suivante :

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

Pour toute demande complémentaire concernant Fail2Ban, n’hésitez pas à consulter la [documentation officielle](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de cet outil.


### Configurer le pare-feu interne : iptables

La distribution nue dispose d’un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles sur ce pare-feu. Pour plus d'informations sur la configuration des iptables, reportez-vous à la documentation officielle de votre distribution Linux.


### Configurer le Firewall Network d’OVHcloud

Les serveurs OVHcloud incluent un pare-feu à l’entrée de l’infrastructure appelé Firewall Network. Sa mise en place et sa configuration permettent le blocage des protocoles avant même leur arrivée sur votre serveur.

Nous avons également un [guide](../firewall-network/){.external} pour configurer le Firewall Network.


### Sauvegarder votre système et vos données

La notion de sécurité ne se limite pas uniquement à la protection d’un système contre des attaques. La sécurisation de vos données est un élément primordial, c’est pourquoi OVHcloud vous offre 500 Go de stockage de sauvegarde gratuit avec votre serveur. Vous pouvez activer ce stockage de sauvegarde dans votre espace client et y accéder en utilisant les protocoles suivants :

* FTP ;
* FTPS ;
* NFS ;
* CIFS.

Vous aurez besoin d'une solution de sauvegarde tierce pour répliquer vos données et les transférer vers votre stockage de sauvegarde.

Pour plus d'informations sur nos solutions de stockage de sauvegarde, consultez notre [guide](../services-backup-storage/){.external} de stockage de sauvegarde.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.