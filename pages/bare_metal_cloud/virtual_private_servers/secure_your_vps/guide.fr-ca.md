---
title: "Sécuriser un VPS"
excerpt: "Découvrez comment mettre en place des mesures de sécurité basiques pour protéger votre VPS des attaques et des accès non autorisés"
updated: 2024-10-07
---

## Objectif

Lorsque vous commandez votre VPS, vous pouvez choisir une distribution ou un système d'exploitation à pré-installer. Le serveur est donc prêt à être utilisé après la livraison. Il vous appartient cependant, en tant qu'administrateur, de mettre en oeuvre des mesures qui garantissent la sécurité et la stabilité de votre système.

**Ce guide vous propose quelques conseils généraux pour sécuriser un serveur basé sur GNU/Linux.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la sécurité et la responsabilité vous appartiennent.
> En effet, nous n'avons pas accès aux données hébergées sur ces machines et n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> Nous mettons à disposition ce guide afin de vous accompagner au mieux sur les tâches courantes. Toutefois, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes quant à l’administration, l'utilisation ou la sécurisation de votre serveur.
> Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud
- Avoir un accès administrateur (sudo) à votre serveur via SSH

## En pratique

> [!primary]
>
> Gardez à l'esprit qu’il s’agit d’un guide général basé sur les systèmes d’exploitation Ubuntu, Debian et CentOS. Certaines commandes nécessitent d’être adaptées à la distribution que vous utilisez et certaines astuces vous invitent à utiliser des outils tiers. Veuillez vous référer à la documentation officielle de ces applications si vous avez besoin d'aide.
>
> S'il s'agit de votre première configuration d'un VPS OVHcloud, nous vous invitons à consulter en premier lieu notre guide [Débuter avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>

Les exemples suivants supposent que vous êtes connecté en tant qu'[utilisateur avec des autorisations élevées](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Mettre à jour votre système d'exploitation

Les développeurs de distributions et de systèmes d’exploitation proposent de fréquentes mises à jour de paquets, très souvent pour des raisons de sécurité.<br>
Faire en sorte que votre distribution ou système d'exploitation est à jour est un point essentiel pour sécuriser votre VPS.

> [!tabs]
> Ubuntu
>>
>> Cette mise à jour passera par deux étapes.
>> 
>> - La mise à jour de la liste des paquets :
>> 
>> ```bash
>> sudo apt update
>> ```
>> 
>> - La mise à jour des paquets à proprement parler :
>> 
>> ```bash
>> sudo apt upgrade
>> ```
>>
> Debian
>> 
>> ```bash
>> sudo apt update && sudo apt upgrade
>> ```
>>
>> La commande est identique à Ubuntu car Debian et Ubuntu utilisent tous deux `apt`.
>>
> CentOS
>>
>> ```bash
>> sudo yum update
>> ```
>>
>> Sur CentOS, la commande pour mettre à jour le système d'exploitation utilise `yum` ou `dnf`, selon la version.

Cette opération doit être effectuée régulièrement afin de maintenir un système à jour.

### Modifier le port d'écoute SSH par défaut <a name="changesshport"></a>

> [!primary]
>
> Pour cette section, les lignes de commande qui suivent sont identiques pour Ubuntu, Debian et CentOS.
>

L'une des premières actions à effectuer sur votre serveur est la configuration du port d'écoute du service SSH. Par défaut, celui-ci est défini sur le **port 22**, donc les tentatives de hack du serveur par des robots vont cibler ce port en priorité.
La modification de ce paramètre, au profit d'un port différent, est une mesure simple pour renforcer la protection de votre serveur contre les attaques automatisées.

Pour cela, modifiez le fichier de configuration du service avec l'éditeur de texte de votre choix (`nano` est utilisé dans cet exemple) :

```bash
sudo nano /etc/ssh/sshd_config
```

Vous devriez trouver les lignes suivantes ou équivalentes :

```console
#Port 49152
#AddressFamily any
#ListenAddress 0.0.0.0
```

Remplacez le nombre **22** par le numéro de port de votre choix.<br>
**Veillez toutefois à ne pas renseigner un numéro de port déjà utilisé sur votre système**. 
Pour plus de sécurité, utilisez un numéro entre 49152 et 65535.<br>Enregistrez et quittez le fichier de configuration.


Si la ligne est "commentée" (c'est-à-dire si elle est précédée d'un "#") comme dans l'exemple ci-dessus, veillez à supprimer le "#" avant d'enregistrer le fichier pour que la modification soit prise en compte. Exemple :

```console
Port 49152
#AddressFamily any
#ListenAddress 0.0.0.0
```

Redémarrez le service :

```bash
sudo systemctl restart sshd
```

Cela devrait être suffisant pour appliquer les changements. Dans le cas contraire, redémarrez le VPS (`sudo reboot`).

**Pour Ubuntu 23.04 et versions ultérieures**

Pour les dernières versions d'Ubuntu, la configuration SSH est désormais gérée dans le fichier `ssh.socket`.

Pour mettre à jour le port SSH, éditez la ligne `Listenstream` dans le fichier de configuration avec un éditeur de texte de votre choix (`nano` utilisé dans cet exemple) :

```console
[Socket]
ListenStream=49152
Accept=no
```

Enregistrez vos modifications et exécutez les commandes suivantes :

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl restart ssh.service
```

Si vous avez activé le pare-feu de votre système d'exploitation, assurez-vous d'autoriser le nouveau port dans les règles du pare-feu.

N'oubliez pas que vous devrez indiquer le nouveau port à chaque demande de [connexion SSH à votre serveur](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) :

```bash
ssh nomdutilisateur@IPv4_VPS -p NouveauPort
```

Exemple :

```bash
ssh ubuntu@203.0.113.100 -p 49152
```

### Créer un utilisateur avec des droits restreints <a name="createuser"></a>

En général, les tâches qui ne requièrent pas de privilèges root doivent être effectuées via un utilisateur standard. Pour plus d'informations, consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Configurer le pare-feu interne (iptables)

Les distributions GNU/Linux courantes sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```bash
iptables -L
```

Pour plus d'informations sur iptables, consultez notre [guide dédié](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable).

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles de pare-feu. Pour plus d'informations sur les diverses manipulations possibles, reportez-vous à la documentation officielle de la distribution utilisée.

### Installer Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP depuis lesquelles des bots ou des attaquants tentent de pénétrer dans votre système.<br>
Ce paquet est recommandé, voire indispensable dans certains cas, pour protéger votre serveur des attaques de types *Brute Force* ou *Denial of Service*.

Pour installer le package logiciel, utilisez la commande suivante :

> [!tabs]
> Ubuntu et Debian
>> 
>> ```bash
>> sudo apt install fail2ban
>> ```
>>
> CentOS
>>
>> Sur CentOS 7 et CentOS 8 (ou RHEL), installez d'abord le dépôt EPEL (**E**xtra **P**ackages for **E**nterprise **L**inux), puis Fail2ban :
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install fail2ban
>> ```

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

Les paramètres `[DEFAULT]` sont globaux et s'appliqueront donc à tous les services définis pour être activés (`enabled`) dans ce fichier. 

Il est important de savoir que les paramètres globaux ne seront pris en compte que s'il n'y a pas de valeurs différentes définies dans les sections services (`JAILS`) plus bas dans le fichier.

Prenons pour exemple ces lignes sous `[DEFAULT]` :

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

1\. Commande recommandée avec `systemctl` :

```bash
sudo systemctl restart fail2ban
```

2\. Commande avec `service` (ancienne méthode, toujours compatible) :

```bash
sudo service fail2ban restart
```

Fail2ban dispose de nombreux paramètres et filtres de personnalisation ainsi que d’options prédéfinies, par exemple lorsque vous souhaitez ajouter une couche de protection à un serveur web Nginx.

Pour toute information complémentaire et pour des recommandations concernant Fail2ban, n'hésitez pas à consulter [la documentation officielle](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de cet outil.

### Configurer le Network Firewall OVHcloud 

Les solutions OVHcloud incluent la possibilité d'activer un pare-feu au point d'entrée de l'infrastructure, appelé Network Firewall. Une configuration correcte de ce pare-feu permet de bloquer les connexions avant même qu'elles n'arrivent sur votre serveur.

Consultez le guide « [Configurer le Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) » si vous souhaitez l'activer.

### Sauvegarder votre système et vos données

Le concept de sécurité ne se limite pas à la protection d'un système contre les attaques.

La sécurisation de vos données est un élément clé, c'est pourquoi OVHcloud vous offre plusieurs options de sauvegarde en tant que services :

- L'option `Snapshot` qui vous permet de créer un instantané manuel.
- L'option de `Sauvegarde automatique` vous permet de conserver des sauvegardes régulières de votre VPS (à l'exception des disques supplémentaires).

Vous trouverez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit](/links/bare-metal/vps-options) et dans les [guides respectifs](/products/bare-metal-cloud-virtual-private-servers).

## Aller plus loin

[Débuter avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

[Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Configurer le pare-feu sous Windows](/pages/bare_metal_cloud/virtual_private_servers/activate-port-firewall-soft-win)

[Configurer le pare-feu sous Linux avec Iptables](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable)

[Configurer le Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Échangez avec notre [communauté d'utilisateurs](/links/community).
