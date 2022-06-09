---
title: 'Introduction au SSH'
slug: ssh-introduction
excerpt: "Découvrez comment utiliser les connexions SSH pour accéder à votre serveur"
section: 'Premiers pas'
---

**Dernière mise à jour le 08/06/2022**

## Objectif

Le protocole de communication SSH (Secure Shell) est la pratique principale pour établir des connexions d'hôte chiffrées via des réseaux non approuvés. L'outil OpenSSH est installé nativement sur tous les serveurs OVHcloud (VPS, serveurs dédiés, instances Public Cloud) afin de permettre des connexions sécurisées à des serveurs distants et d'autres opérations.

**Ce guide vous explique comment sécuriser l'accès à votre serveur en SSH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


> [!warning]
>OVHcloud vous offre un certain nombre de services dont la configuration et la gestion relèvent de votre responsabilité. Il vous incombe par conséquent de veiller à ce que ces services fonctionnent correctement.
>
>Si vous rencontrez des difficultés lors de l'exécution de ces actions, merci de contacter un prestataire spécialisé et/ou d'échanger avec notre communauté sur https://community.ovh.com/. OVHcloud ne peut pas vous fournir d’assistance technique à ce sujet.
>

## Prérequis

- Avoir un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) ou un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud.
- Une application cliente SSH (ligne de commande ou GUI)

> [!primary]
> Ce guide ne s'applique pas aux installations standard de serveurs Windows car elles reposent sur le protocole Bureau à distance pour les connexions. Les connexions SSH sont cependant utilisées pour le mode rescue OVHcloud. Plus d’informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## En pratique

Il existe plusieurs moyens d'authentifier une connexion à un périphérique distant via SSH. Les instructions suivantes concernent la méthode d'authentification avec le nom d'utilisateur et le mot de passe. Vous pouvez également configurer des clés SSH pour activer les connexions sécurisées sans mot de passe. Retrouvez tous les détails dans notre [guide des clés SSH](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/).

Les identifiants (identifiant et mot de passe) vous sont envoyés par e-mail après une installation ou une réinstallation de serveur depuis votre [espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=fr). Le nom d'utilisateur correspond au système d'exploitation, par exemple `ubuntu` ou `debian`. Pour vous connecter, vous devez également spécifier l'adresse IPv4 ou le nom d'hôte du serveur. Ces informations sont disponibles dans l’e-mail d’installation et dans le Manager.

N’oubliez pas de consulter également nos guides Premiers pas :

- Pour un [serveur dédié](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/)
- Pour un [serveur dédié de la gamme de produits **Eco**](https://docs.ovh.com/fr/dedicated/getting-started-dedicated-server-eco/)
- Pour un [VPS](https://docs.ovh.com/fr/vps/debuter-avec-vps/)

### Connexion depuis une distribution GNU/Linux ou macOS

Un client de ligne de commande SSH (OpenSSH) est généralement disponible par défaut. Ouvrez l'application Terminal et connectez-vous au serveur avec la commande suivante :

```bash
ssh username@server_IP
```

Si le port SSH du serveur n'est pas le port standard, utilisez plutôt la commande suivante :

```bash
ssh username@server_IP -p port_number
```

### Connexion à partir d'un périphérique Windows 10/11

Les dernières versions de Windows intègrent nativement OpenSSH pour les connexions depuis le Powershell ou l'application Command Prompt.

Faites un clic droit sur le bouton Démarrer de Windows et sélectionnez `Windows PowerShell`{.action}. Vous pouvez également utiliser le champ de recherche pour démarrer l'un de ces programmes.

![PowerShell](images/windowsps.png){.thumbnail}

Connectez-vous au serveur avec la commande suivante :


```bash
ssh username@server_IP
```

Si le port SSH du serveur n'est pas le port standard, utilisez cette commande :

```bash
ssh username@server_IP -p port_number
```

### Login et fingerprint

Lorsque vous êtes invité à entrer un mot de passe, tapez celui de l'utilisateur connecté et appuyez sur `Entrée`.

S'il s'agit d'une nouvelle connexion, votre client SSH recevra une empreinte de clé du serveur. Renseignez "yes" pour confirmer puis le mot de passe de l'utilisateur qui se connecte pour se connecter.


```bash
ssh ubuntu@169.254.10.254
```
```console
The authenticity of host '169.254.10.254 (169.254.10.254)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '169.254.10.254' (ECDSA) to the list of known hosts.
ubuntu@169.254.10.254's password:
```

L'empreinte est ensuite enregistrée sur votre appareil et vérifiée à chaque nouvelle connexion. Si la clé a changé sur l'hôte distant, un message d'avertissement s'affiche lorsque vous essayez de vous connecter, par exemple :

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Cela signifie que l'une des situations suivantes s'est produite :

- Le serveur a été réinstallé.
- Le service SSH sur le serveur a été réinstallé.
- Vous vous connectez à un autre hôte avec la même adresse IP.

> [!primary]
> Le message d'avertissement n'indique pas nécessairement un problème de sécurité. Cependant, si vous n'avez pas initié l'un de ces incidents, le serveur distant peut être compromis.
>

Pour résoudre ce problème, utilisez la commande suivante avec l'adresse IP de votre serveur :

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 169.254.10.254
```

Vous pouvez également ouvrir le fichier `known_hosts` situé dans votre dossier personnel à l'aide d'un éditeur de texte et supprimer la ligne "offending" spécifiée dans le message d'avertissement :

```bash
nano ~/.ssh/known_hosts
```

Enregistrez les modifications et quittez l'éditeur. La nouvelle empreinte digitale doit être acceptée lors de la prochaine connexion au serveur.

Sous Windows, l'emplacement du fichier `known_hosts` et la ligne à supprimer sont également spécifiés, par exemple :

```powershell
Offending ECDSA key in C:\\Users\\YourWindowsUser/.ssh/known_hosts:3
```

Accédez à ce dossier, faites un clic droit sur le fichier et ouvrez-le avec l'application Bloc-notes.

![known_hosts](images/windowskh.png){.thumbnail}

Supprimer la ligne concernée, en l'occurrence la troisième. Enregistrez les modifications et quittez l'éditeur. La nouvelle empreinte digitale doit être acceptée lors de la prochaine connexion au serveur.

### Utilisation de clients GUI ou de logiciels compatibles SSH

Pour chaque type de système d’exploitation, de nombreux logiciels vous permettent de vous connecter à votre serveur via le protocole SSH. 

Par exemple, [PuTTY](https://putty.org/){.external} pour Windows est un logiciel client SSH open source doté d’une interface utilisateur graphique. Il a également été porté sur d'autres plateformes et est disponible sur [le site officiel](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), les gestionnaires de paquets logiciels et [Homebrew](https://brew.sh/).

Démarrez PuTTY et entrez l'adresse IP du serveur. Spécifiez le numéro de port si le port standard n'est pas utilisé. Cliquez ensuite sur `Ouvrir`{.action} pour vous connecter. Un nom d'utilisateur et un mot de passe vous seront demandés.

![PuTTY](images/putty_01.png){.thumbnail}

Un avantage de PuTTY est la possibilité d’enregistrer plusieurs sessions. Entrez les informations de connexion dans le champ `Sessions` enregistrées et cliquez sur `Enregistrer`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Comme d’habitude, l’avertissement d’empreinte s’affiche à la première connexion. Cliquez sur `Accepter`{.action} pour enregistrer l'empreinte digitale ou sélectionnez `Connexion unique`{.action}.

![PuTTY](images/putty_03.png){.thumbnail}

Veuillez consulter la FAQ officielle et la documentation de PuTTY pour plus d'informations.


## Aller plus loin <a name="gofurther"></a>

[Création de clés SSH](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/)

[Mode rescue serveur dédié](https://docs.ovh.com/fr/dedicated/ovh-rescue/)

[VPS mode rescue](https://docs.ovh.com/fr/vps/mode-rescue-vps/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
