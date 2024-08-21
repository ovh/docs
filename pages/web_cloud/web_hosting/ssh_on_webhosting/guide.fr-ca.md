---
title: "Utiliser l'accès SSH de son hébergement web"
excerpt: "Apprenez à vous connecter et utiliser l'accès SSH de votre hébergement web OVHcloud"
updated: 2024-01-22
---

## Objectif

Les offres d'hébergement web d'OVHcloud vous donnent accès à un espace de stockage permettant la mise en ligne des fichiers de vos sites internet ou de vos applications. L'accès à cet espace est possible notamment via un utilisateur FTP ou SSH et des mots de passe qui leur sont associés.

**Découvrez comment vous connecter et utiliser l'accès SSH de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting){.external} bénéficiant d'un accès SSH.
- Être en possession des informations permettant de vous connecter en SSH à l'espace de stockage.
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}, partie `Web Cloud`{.action}.

> [!warning]
> 
> L'accès SSH à un hébergement web OVHcloud est disponible à partir de [l'offre Pro](/links/web/hosting-compare).

## En pratique

### Étape 1 : s'assurer que l'accès SSH est actif <a name="sshcheck"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} dans la partie `Web Cloud`{.action}, puis cliquez sur `Hébergements`{.action}. Sélectionnez l'hébergement concerné, cliquez sur l'onglet `FTP - SSH`{.action}. Les informations liées à votre espace de stockage apparaissent.

Repérez dans le tableau la colonne « SSH » afin de vérifier que l'utilisateur (ou « login ») SSH concerné dispose bien d'un accès SSH actif. La mention « Désactivé » apparaît si ce n'est pas le cas.

![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Si l'accès SSH n'est pas actif, cliquez sur le bouton `...`{.action} à droite de l'utilisateur concerné, puis sur `Modifier`{.action}. Dans la fenêtre qui s'affiche, activez alors l'accès SSH puis finalisez la modification. Si vous n'avez pas la possibilité de l'activer, assurez-vous que [votre offre d'hébergement web OVHcloud](/links/web/hosting){.external} bénéficie bien d'un accès SSH.

### Étape 2 : récupérer les informations nécessaires pour se connecter <a name="sshlogin"></a>

Pour vous connecter en SSH à votre espace de stockage, retrouvez les éléments nécessaires depuis l'onglet `FTP - SSH`{.action}:

- **Utilisateur SSH actif**: Repérez-le dans la colonne « **Login** » du tableau. Pour rappel, cet utilisateur doit [disposer d'un accès SSH actif](#sshcheck).
- **Mot de passe de l'utilisateur SSH**: Si vous avez oublié ce mot de passe, vous avez la possibilité de le modifier en cliquant sur le bouton `...`{.action}, puis sur `Changer le mot de passe`{.action}.
- **Adresse du serveur SSH**: Repérez la mention « **Serveur SSH** ».
- **Port de connexion au serveur SSH**: Repérez la mention « **Port SSH**»

### Étape 3 : se connecter en SSH à l'espace de stockage

Pour vous connecter en SSH, utilisez un terminal afin d’interagir directement avec votre espace de stockage via des lignes de commande. 

> [!primary]
>
> Cet outil est installé par défaut sur macOS, Linux et Windows 10. Un environnement Windows plus ancien nécessitera l’installation d’un logiciel comme PuTTY ou l’ajout de la fonctionnalité OpenSSH.

Dès lors, il existe deux possibilités pour vous connecter selon la méthode que vous utilisez :

#### 3.1 Depuis un terminal

Une fois le terminal ouvert, utilisez la commande suivante en remplaçant les éléments « yourlogin », « ssh.cluster000.hosting.ovh.net » et « 22 » par ceux correspondant à vos identifiants SSH. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Après l'envoi de la commande, vous serez invité à renseigner le mot de passe de l’utilisateur SSH. Une fois connecté, poursuivez vers l'étape suivante « [Interagir en SSH avec son espace de stockage](./#etape-4-interagir-en-ssh-avec-son-espace-de-stockage) ».

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2 Depuis un logiciel

Une fois le logiciel (PuTTY par exemple) ouvert, vous devriez trouver un endroit où renseigner les informations de connexion. Cette manipulation étant inhérente à celui-ci, nous ne pouvons pas la détailler dans cette documentation. Si besoin, voici un rappel des informations que vous devrez y renseigner :

- **Serveur SSH**: Indiquez l'adresse de serveur SSH récupérée [lors de l'étape 2](#sshlogin). Selon le logiciel utilisé, la dénomination peut ressembler à : « Adresse de serveur », « Nom d'hôte », ou encore « Host Name ».
- **Port de connexion**: Renseignez le port de connexion SSH récupéré [lors de l'étape 2](#sshlogin).
- **Login SSH**: Renseignez l'utilisateur SSH. Selon le logiciel utilisé, la dénomination peut ressembler à « Nom d'utilisateur », « Identifiant », « Login » ou encore « Username ».
- **Mot de passe de l'utilisateur SSH**: Indiquez le mot de passe associé au login SSH. Selon le logiciel utilisé, sa dénomination peut également ressembler à « Password ».
Une fois connecté, poursuivez vers l'étape suivante.

### Étape 4 : interagir en SSH avec son espace de stockage

Pour interagir avec votre espace de stockage, vous devez utiliser des commandes. Celles-ci ont une signification directe tirée de l'anglais. Aidez-vous de la liste ci-dessous si nécessaire. Attention, **celle-ci n'est pas exhaustive**.

|Commande|Signification en anglais|Description| 
|---|---|---|
|pwd|Print working directory|Affiche le répertoire de travail dans lequel vous vous situez.| 
|cd `arg`|Change directory|Permet de changer de répertoire de travail pour celui renseigné à la place de `arg`.|
|cd `..`|Change directory|Permet de changer de répertoire de travail en remontant d’un niveau dans l’arborescence de vos répertoires.|
|cd|Change directory|En ne spécifiant pas d'argument, permet de se repositionner à la racine de votre espace de stockage (home).|
|ls|List|Liste le contenu du répertoire de travail. Ajoutez des attributs pour modifier l'affichage du résultat de la commande (comme `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Change les droits du fichier ou du répertoire mentionné en tant qu'argument `arg`.| 
|mkdir `arg`|Make directory|Permet de créer un repertoire portant le nom de l'argument `arg`.| 
|touch `arg`|Touch|Crée un fichier vide, s'il n'existe pas déjà, portant le nom mentionné en tant qu'argument `arg`.|
|rm `arg`|Remove|Supprime le fichier mentionné en tant qu'argument `arg`.| 
|rm -r `arg`|Remove|Supprime le répertoire mentionné en tant qu'argument `arg`, ainsi que tout son contenu de manière récursive.| 
|mv `arg1` `arg2`|Move|Renomme ou déplace un élément (spécifié en tant que `arg1`) vers un nouvel endroit (spécifié en tant que `arg2`).| 

Via une commande, vous pouvez également lancer un script en utilisant une version spécifique de PHP. Par exemple, pour la version de PHP 7.1, utilisez la commande suivante. Adaptez-en ses éléments à votre situation personnelle.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Selon la version de PHP que vous souhaitez utiliser, il se peut que l'environnement d'exécution doive être modifié pour une question de compatibilité. Reportez-vous à notre documentation « [Hébergement web : environnement, version PHP, « .ovhconfig »](/pages/web_cloud/web_hosting/configure_your_web_hosting) » pour en apprendre plus.

> [!primary]
>
> Il est également possible de copier des fichiers et/ou dossiers à l'aide du **S**ecure **C**opy **P**rotocol (**SCP**).
> Ce protocol utilise le protocol SSH pour dupliquer du contenu de manière sécurité entre :
> 
> - un ordinateur/appareil local vers un serveur distant
> - un serveur distant et un ordinateur/appareil local
> - deux serveurs distants
>
> Retrouvez plus d'information sur l'utilisation de la commande `scp` avec nos hébergements web OVHcloud dans notre guide « [Hébergement Web - Copier des fichiers avec la commande SCP](/pages/web_cloud/web_hosting/using-scp-command) »
>

## Aller plus loin

[Hébergement web : environnement, version PHP, « .ovhconfig »](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).