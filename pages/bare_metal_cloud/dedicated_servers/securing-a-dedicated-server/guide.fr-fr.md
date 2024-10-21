---
title: "Sécuriser un serveur dédié"
excerpt: "Découvrez comment mettre en place des mesures de sécurité basiques pour protéger votre serveur dédié des attaques et des accès non autorisés"
updated: 2024-02-20
---

## Objectif

Lorsque vous commandez votre serveur dédié, vous pouvez choisir une distribution ou un système d'exploitation à pré-installer. Le serveur est donc prêt à être utilisé après la livraison. Il vous appartient cependant, en tant qu'administrateur, de mettre en oeuvre des mesures qui garantissent la sécurité et la stabilité de votre système.

**Ce guide vous propose quelques conseils généraux pour sécuriser un serveur basé sur GNU/Linux.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la sécurité et la responsabilité vous appartiennent.
> En effet, nous n'avons pas accès aux données hébergés sur ces machines et n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> Nous mettons à disposition ce guide afin de vous accompagner au mieux sur les tâches courantes. Toutefois, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes quant à l’administration, l'utilisation ou la sécurisation de votre serveur.
> Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal).
- Avoir un accès administrateur (sudo) à votre serveur via SSH.

## En pratique

> [!primary]
>
> Gardez à l'esprit qu’il s’agit d’un guide général basé sur un système d’exploitation Ubuntu Server. Certaines commandes nécessitent d’être adaptées à la distribution que vous utilisez et certaines astuces vous invitent à utiliser des outils tiers. Veuillez vous référer à la documentation officielle de ces applications si vous avez besoin d'aide.
>
> S'il s'agit de votre première configuration d'un serveur dédié OVHcloud, nous vous invitons à consulter en premier lieu notre guide [Premiers pas avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>

Les exemples suivants supposent que vous êtes connecté en tant qu'[utilisateur avec des autorisations élevées](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Mettre à jour votre système d'exploitation

Les développeurs de distributions et de systèmes d’exploitation proposent de fréquentes mises à jour de paquets, très souvent pour des raisons de sécurité.<br>
Faire en sorte que votre distribution ou système d'exploitation est à jour est un point essentiel pour sécuriser votre serveur.

Cette mise à jour passera par deux étapes.

- La mise à jour de la liste des paquets :

```bash
sudo apt update
```

- La mise à jour des paquets à proprement parler :

```bash
sudo apt upgrade
```

Cette opération doit être effectuée régulièrement afin de maintenir un système à jour.

### Modifier le port d'écoute SSH par défaut

L'une des premières actions à effectuer sur votre serveur est la configuration du port d'écoute du service SSH. Par défaut, celui-ci est défini sur le **port 22** donc les tentatives de hack du serveur par des robots vont cibler ce port en priorité.
La modification de ce paramètre, au profit d'un port différent, est une mesure simple pour renforcer la protection de votre serveur contre les attaques automatisées.

Pour cela, modifiez le fichier de configuration du service avec l'éditeur de texte de votre choix (`nano` est utilisé dans cet exemple) :

```bash
sudo nano /etc/ssh/sshd_config
```

Vous devriez trouver les lignes suivantes ou équivalentes :

```console
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
```

Remplacez le nombre **22** par le numéro de port de votre choix.<br>
**Veillez toutefois à ne pas renseigner un numéro de port déjà utilisé sur votre système**. 
Pour plus de sécurité, utilisez un numéro entre 49152 et 65535.<br>
Enregistrez et quittez le fichier de configuration.

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

Cela devrait être suffisant pour appliquer les changements. Dans le cas contraire, redémarrez le serveur (`sudo reboot`).

**Pour Ubuntu 23.04 et versions ultérieures**

Pour les dernières versions d'Ubuntu, la configuration SSH est désormais gérée dans le fichier `ssh.socket`.

Pour mettre à jour le port SSH, éditez la ligne `Listenstream` dans le fichier de configuration avec un éditeur de texte de votre choix (`nano` utilisé dans cet exemple) :

```bash
sudo nano /lib/systemd/system/ssh.socket
```

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
ssh nomdutilisateur@IPv4_server -p NouveauPort
```

Exemple :

```bash
ssh ubuntu@203.0.113.100 -p 49152
```

> [!warning]
>
> Veuillez noter que la modification du port par défaut de SSH ou de tout autre protocole constitue un risque potentiel. Vous pouvez constater que certains services ne peuvent pas être configurés pour être utilisés avec des ports non standard et ne fonctionneront pas si le port par défaut est modifié.
>

### Créer un utilisateur avec des droits restreints

En général, les tâches qui ne requièrent pas de privilèges root doivent être effectuées via un utilisateur standard. Pour plus d'informations, consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Configurer le pare-feu interne (iptables)

Les distributions GNU/Linux courantes sont fournies avec un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```bash
iptables -L
```

Pour plus d'informations sur iptables, consultez notre [guide dédié](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles de pare-feu. Pour plus d'informations sur les diverses manipulations possibles, reportez-vous à la documentation officielle de la distribution utilisée.

### Installer Fail2ban

Fail2ban est un framework de prévention contre les intrusions dont le but est de bloquer les adresses IP depuis lesquelles des bots ou des attaquants tentent de pénétrer dans votre système.<br>
Ce paquet est recommandé, voire indispensable dans certains cas, pour protéger votre serveur des attaques de types *Brute Force* ou *Denial of Service*.

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

Les paramètres `[DEFAULT]` sont globaux et s'appliqueront donc à tous les services définis pour être activés (`enabled`) dans ce fichier. 

Il est important de savoir que les paramètres globaux ne seront pris en compte que s'il n'y a pas de valeurs différentes définies dans les sections services (`JAILS`) plus bas dans le fichier.

Prenons pour exemple ces lignes sous `[DEFAULT]` :

```console
bantime = 10m
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

Pour toute information complémentaire et pour des recommandations concernant Fail2ban, n'hésitez pas à consulter [la documentation officielle](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de cet outil.

### Configurer le Network Firewall OVHcloud 

Les solutions OVHcloud incluent la possibilité d'activer un pare-feu au point d'entrée de l'infrastructure, appelé Network Firewall. Une configuration correcte de ce pare-feu permet de bloquer les connexions avant même qu'elles n'arrivent sur votre serveur.

Consultez le guide « [Configurer le Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) » si vous souhaitez l'activer.

### Sauvegarder votre système et vos données

La notion de sécurité ne se limite pas uniquement à la protection d’un système contre des attaques. La sécurisation de vos données est un élément primordial, c’est pourquoi OVHcloud vous offre 500 Go de stockage de sauvegarde gratuit avec votre serveur. Vous pouvez activer ce stockage de sauvegarde dans votre espace client et y accéder en utilisant les protocoles suivants :

* FTP ;
* FTPS ;
* NFS ;
* CIFS.

Vous aurez besoin d'une solution de sauvegarde tierce pour répliquer vos données et les transférer vers votre stockage de sauvegarde.

Pour plus d'informations sur nos solutions de stockage de sauvegarde, consultez notre [guide](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage){.external} de stockage de sauvegarde.

## Aller plus loin

[Configurer le pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win)

[Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.