---
title: 'Sécuriser un VPS'
slug: conseils-securisation-vps
section: 'Premiers pas'
excerpt: 'Découvrez les éléments de base vous permettant de sécuriser votre VPS'
---

**Dernière mise à jour le 05/05/2022**

## Objectif

Lors de la commande de votre VPS, vous pouvez choisir une distribution ou un système d'exploitation à préinstaller. Le serveur est donc prêt à être utilisé après livraison mais il vous appartient en tant qu'administrateur de mettre en place les mesures assurant la sécurité et stabilité de votre système.

**Ce guide fournit quelques conseils généraux pour sécuriser un serveur basé sur GNU/Linux.**

 
> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la sécurité et la responsabilité vous incombent. En l’absence d’accès administratif à vos appareils, il vous appartient de gérer les logiciels et de vous assurer de leur bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de mesures de sécurité sur un serveur.
>


## Prérequis

- Un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Avoir accès administratif (root) via SSH en tant qu'administrateur (root)

## Instructions

> [!primary]
>
> N’oubliez pas qu’il s’agit d’un guide général basé sur un système d’exploitation serveur Ubuntu. Certaines commandes nécessitent d’être adaptées à la distribution que vous utilisez et certaines astuces vous conseillent d’utiliser des outils tiers. Veuillez vous référer à la documentation officielle de ces applications si vous avez besoin d'aide.
>
> Dans le cadre de la configuration de votre premier VPS OVHcloud, nous vous invitons à consulter notre guide "[Débuter avec un VPS](../debuter-avec-vps/)" avant de continuer.
>

Les exemples suivants supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées.

### Mise à jour du système

Les développeurs de distributions et de systèmes d’exploitation proposent de fréquentes mises à jour de progiciels, très souvent pour des raisons de sécurité. Garantir la mise à jour de votre distribution est un point essentiel pour sécuriser votre VPS.

Cette mise à jour passera par deux étapes.

- La mise à jour de la liste des paquets :

```bash
sudo apt update
```

- Mise à jour des paquets réels

```bash
sudo apt upgrade
```

Cette opération doit être effectuée régulièrement afin de maintenir un système à jour.


### Modification du port d'écoute SSH par défaut

L'une des premières actions à effectuer sur votre serveur est la configuration du port d'écoute du service SSH. Par défaut, celui-ci est défini sur le **port 22**, donc les tentatives de hacks du serveur par les robots vont cibler ce port. La modification de ce paramètre à l'aide d'un port différent est une mesure simple pour durcir votre serveur contre les attaques automatisées.

Pour cela, modifiez le fichier de configuration du service avec un éditeur de texte de votre choix (`nano` utilisé dans cet exemple) :

```bash
~$ sudo nano /etc/ssh/sshd_config
```

Vous devriez trouver les lignes suivantes ou similaires :

```console
# What ports, IPs and protocols we listen for
Port 22
```

Remplacez le nombre **22** par le numéro de port de votre choix. ** <b>Veillez toutefois à ne pas renseigner un numéro de port déjà utilisé sur votre système</b>**. Pour être sûr, utilisez un numéro entre 49152 et 65535.<br>
Enregistrez et quittez le fichier de configuration.

Redémarrer le service :

```bash
sudo systemctl restart sshd
```

Cela devrait être suffisant pour appliquer les changements. Sinon, redémarrez le VPS (`~$ sudo reboot`).

N'oubliez pas que vous devrez indiquer le nouveau port à chaque demande de connexion SSH à votre serveur, par exemple :

```bash
ssh username@IPv4_of_your_VPS -p NewPortNumber
```

### Modification du mot de passe associé à l'utilisateur "root"

Il est fortement recommandé de modifier le mot de passe de l'utilisateur root afin de ne pas le laisser à sa valeur par défaut sur un nouveau système. Veuillez vous référer aux informations de [ce guide](../root-password/) pour plus de détails.

### Création d'un utilisateur avec des droits restreints

En général, les tâches qui ne requièrent pas de privilèges root doivent être effectuées via un utilisateur standard. Vous pouvez créer un nouvel utilisateur avec la commande suivante :

```bash
sudo adduser CustomUserName
```

Vous devez ensuite remplir les informations demandées par le système : mot de passe, nom, etc.

Le nouvel utilisateur sera autorisé à se connecter en SSH. Lors de l'établissement d'une connexion, utilisez les informations d'identification spécifiées.

Une fois connecté, tapez la commande suivante pour effectuer des opérations nécessitant des autorisations root :

```bash
su root
```

Tapez le mot de passe lorsque vous y êtes invité et la connexion active sera basculée vers l'utilisateur root.

### Désactivation de l'accès au serveur via l'utilisateur root

L'utilisateur root est créé par défaut sur les systèmes GNU/Linux. Il s'agit du niveau d'accès le plus élevé à un système d'exploitation. Il est déconseillé et même dangereux de laisser votre VPS accessible uniquement en root, car ce compte peut effectuer des opérations irréversiblement dommageables.

Il est recommandé de désactiver l'accès direct des utilisateurs root via le protocole SSH. Pensez à créer un autre utilisateur avant de poursuivre les étapes ci-dessous.

Vous devez modifier le fichier de configuration SSH de la même manière que décrit précédemment :

```bash
sudo nano /etc/ssh/sshd_config
```

Repérez la section suivante :

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Remplacez **yes** par **no** sur la ligne `PermitRootLogin`.

Pour que cette modification soit prise en compte, vous devez redémarrer le service SSH :

```bash
sudo systemctl restart sshd
```

Par la suite, les connexions à votre serveur via l'utilisateur root (`ssh root@IPv4_of_your_VPS`) seront rejetées.

### Configurer le pare-feu interne (iptables)

Les distributions GNU/Linux courantes sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```bash
iptables -L
```

Pour plus d'informations sur iptables, consultez notre [guide Firewall](../../dedicated/firewall-iptables/).

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles de pare-feu. Pour plus d'informations sur les diverses manipulations possibles, reportez-vous à la section correspondante de la documentation officielle de la distribution utilisée.

### Installation de Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP depuis lesquelles des bots ou des attaquants tentent de pénétrer dans votre système. Ce paquet est recommandé, voire indispensable dans certains cas, pour protéger votre serveur des attaques "Brute Force" ou "Denial of Service".

Pour installer le package logiciel, utilisez la commande suivante :

```bash
sudo apt install fail2ban
```

Vous pouvez personnaliser les fichiers de configuration Fail2ban pour protéger les services exposés à l'Internet public contre les tentatives de connexion répétées.

Comme le recommande Fail2ban, créez un fichier de configuration local de vos services en copiant le fichier "jail" :

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Ouvrez ensuite le fichier avec un éditeur de texte :

```bash
sudo nano /etc/fail2ban/jail.local
```

Prenez soin de lire les informations en haut du fichier, notamment les commentaires sous `[DEFAULT]`.

Les paramètres `[DEFAULT]` sont globaux et s'appliqueront donc à tous les services définis pour être `enabled` dans ce fichier. 

Il est important de savoir que les paramètres globaux ne seront pris en compte que s'il n'y a pas de valeurs différentes définies dans les sections services (`JAILS`) plus bas dans le fichier.

Par exemple, considérez ces lignes sous `[DEFAULT]` :

```console
bantime  = 10m
maxretry = 5
enabled = false
```

Cela signifie qu'une adresse IP à partir de laquelle un hôte tente de se connecter sera bloquée pendant dix minutes après la cinquième tentative d'ouverture de session infructueuse.<br>
De plus, tous les paramètres spécifiés par `[DEFAULT]` et dans les sections suivantes restent désactivés sauf si la ligne `enabled = true` est ajoutée pour un service (listée ci-dessous `# JAILS`).

À titre d’exemple d’utilisation, le fait d’avoir les lignes suivantes dans la section `[sshd]` activera des restrictions uniquement pour le service OpenSSH :

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

Dans cet exemple, si une tentative de connexion SSH échoue trois fois en cinq minutes, la période d’interdiction des IP sera de 30 minutes.

Vous pouvez remplacer "ssh" par le numéro de port réel si vous l'avez modifié.

La meilleure approche consiste à activer Fail2ban uniquement pour les services qui sont réellement exécutés sur le serveur. Chaque paramètre personnalisé ajouté sous `# JAILS` sera alors prioritaire sur les valeurs par défaut.

Une fois vos modifications terminées, enregistrez le fichier et fermez l'éditeur.

Redémarrez le service pour vous assurer qu'il s'exécute avec les personnalisations appliquées :

```bash
sudo service fail2ban restart
```

Fail2ban dispose de nombreux paramètres et filtres de personnalisation ainsi que d’options prédéfinies, par exemple lorsque vous souhaitez ajouter une couche de protection à un serveur web Nginx.

Pour toute information complémentaire et recommandation concernant Fail2ban, n'hésitez pas à consulter [la documentation officielle](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de cet outil.

### Configuration du Firewall Network OVHcloud 

Les solutions OVHcloud incluent la possibilité d'activer un pare-feu au point d'entrée de l'infrastructure, appelé Firewall Network. Une configuration correcte de ce pare-feu permet de bloquer les connexions avant même qu'elles n'arrivent sur votre serveur.

Consultez le guide « [Configurer le Firewall Network](../../dedicated/firewall-network/) » si vous souhaitez l'activer.

### Sauvegarder votre système et vos données

Le concept de sécurité ne se limite pas à la protection d'un système contre les attaques.

La sécurisation de vos données est un élément clé, c'est pourquoi OVHcloud vous offre plusieurs options de sauvegarde en tant que services :

- L'option `Snapshot` qui vous permet de créer un instantané manuel.
- L'option de `Sauvegarde automatique` vous permet de conserver des sauvegardes régulières de votre VPS (à l'exception des disques supplémentaires).

Vous trouverez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit](https://www.ovhcloud.com/fr/vps/options/) et dans les [guides respectifs](../).

## Aller plus loin

[Débuter avec un VPS](../debuter-avec-vps/)

[Configurer le Firewall Network](../../dedicated/firewall-network/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.