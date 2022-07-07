---
title: 'Tutoriel - Comment créer un serveur Minecraft sur un VPS ou un serveur dédié'
slug: creer-serveur-minecraft-sur-vps
excerpt: 'Découvrez comment installer votre propre serveur Minecraft'
section: Tutoriel
---

**Dernière mise à jour le 29/06/2021**

## Objectif

Minecraft est un jeu vidéo de construction au succès mondial. Il doit être hébergé sur un serveur si vous souhaitez jouer en mode multijoueur.

Vous pouvez louer un serveur Minecraft préconstruit ou le configurer vous-même sur un [VPS](https://www.ovhcloud.com/fr/vps/) ou sur un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/). Cela vous permettra de réaliser des économies et vous donnera le contrôle total sur votre instance de jeu.

**Ce tutoriel décrit comment lancer un serveur Minecraft Java Edition sur un VPS OVHcloud et tester sa connectivité.**

> [!warning]
>Ce guide vous explique comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes et décrit les actions à effectuer dans un contexte spécifique. Vous devrez peut-être adapter les instructions en fonction de votre situation.
>
>Si vous éprouvez des difficultés à appliquer ces instructions, nous vous recommandons de faire appel à un prestataire spécialisé. Pour plus d'informations, consultez la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Avoir installé une distribution GNU/Linux sur le serveur
- Disposer d'un accès administrateur (root) via SSH à votre serveur
- Avoir une compréhension basique de l'administration GNU/Linux

## En pratique

> [!primary]
> Ce tutoriel est basé sur la version « 1.17 » de Minecraft Java Edition et la version « 16.0.1 » de OpenJDK.
>

### Étape 1 : préparer le serveur

La première étape consiste à configurer votre VPS pour une installation de Minecraft.
<br>Il est recommandé de commander un nouveau VPS ou de réinstaller un VPS existant depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), en utilisant la dernière version disponible d'Ubuntu ou de Debian.
<br>Consultrez notre guide « [Débuter avec un VPS](../debuter-avec-vps/#installation-ou-reinstallation-de-votre-vps-gamme-vps-actuelle) » si nécessaire.

Une fois le système d'exploitation installé, connectez-vous à votre VPS en SSH comme décrit dans le guide « [Débuter avec un VPS](../debuter-avec-vps/) ».

En premier lieu, mettez à jour les paquets avec leurs dernières versions :

```sh
~$ sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Utilisez la commande suivante pour vous assurer que tous les paquets nécessaires sont installés :

```sh
~$ sudo apt install screen nano wget git
```

Installez le paquet Java :

```sh
~$ sudo apt install openjdk-16-jdk
```

Pour éviter de créer des vulnérabilités dans votre système, créez un utilisateur nommé « minecraft » qui exécutera les actions du serveur :

```sh
~$ sudo adduser minecraft --disabled-login --disabled-password
```

Plusieurs informations vous sont demandées ; il suffit d'appuyer sur la touche `Entrée`{.action} pour les valider.

L'utilisateur est maintenant créé. Notez qu'aucun mot de passe n'a été spécifié pour cet utilisateur. C'est normal car le compte n'est accessible que lorsqu'il est déjà connecté par SSH avec votre propre compte d'utilisateur.

Basculez vers le nouvel utilisateur :

```sh
~$ sudo su - minecraft
```

> [!primary]
>
> Les commandes suivantes doivent être exécutées par l'utilisateur « minecraft ».
>

Pour terminer la préparation de l'installation, créez un dossier nommé `server`.

```sh
~$ mkdir ~/server && cd ~/server
```

### Étape 2 : installer votre serveur Vanilla Minecraft

> [!primary]
>
> Les serveurs « Vanilla », sur Minecraft ou d'autres jeux comme World of Warcraft, sont des serveurs sans add-on ou plugin. Vous découvrez alors le jeu tel qu'il a été créé par les développeurs.
>

Vous devez d'abord copier/coller le lien de téléchargement pour le logiciel serveur.
<br>Sur le [site Web officiel de Minecraft](https://minecraft.net/download/server){.external}, faites un clic droit sur le lien de téléchargement et sélectionnez `Copier l'adresse du lien`{.action}.

![Téléchargement du serveur](images/download_jar.png){.thumbnail}

Dans votre terminal de ligne de commande, vérifiez que vous êtes toujours dans le dossier `server` et utilisez `wget` pour télécharger le fichier. 
<br>Remplacez `lien_de_telechargement` par l'URL réelle que vous avez copiée précédemment.

```sh
~/server$ wget lien_de_telechargement
```

Avant de lancer le serveur, vous devez accepter la licence du logiciel (EULA ou _End User License Agreement_) pour éviter sa coupure instantanée. Pour ce faire, entrez la commande suivante :

```sh
~/server$ echo "eula=true" > eula.txt
```

Un fichier nommé `eula.txt` est alors créé à la racine de votre serveur, contenant la ligne `eula=true`. Cela indique au logiciel que vous acceptez les conditions d’utilisation de Minecraft.
<br>Nous vous invitons à consulter les conditions générales sur le [site officiel de Minecraft](https://www.minecraft.net/){.external}.

Votre serveur est ensuite prêt à être lancé.

Au cours de l'étape 1, nous avons installé le paquet `screen` qui permet d'ouvrir plusieurs sessions du terminal (*shell*). Nous allons démarrer Minecraft dans une nouvelle session qui peut s'exécuter en arrière-plan. L'utilisation de `screen` peut être très pratique car elle vous permet de lancer plusieurs serveurs Minecraft simultanément.

Tout d'abord, nous allons créer un nouveau `shell` nommé `minecraft1` :

```sh
~/server$ screen -S minecraft1
```

La fenêtre active de votre terminal change, vous basculez automatiquement sur une nouvelle session `shell`. Vous pouvez créer d'autres `shells` si nécessaire et les lister via la commande suivante :

```sh
screen -ls
```

Pour vous détacher du `shell` (et le maintenir en cours d'exécution), appuyez sur `Ctrl`{.action}, puis sur `a`{.action}, puis sur `d`{.action} sur votre clavier.

Pour passer d'un `shell`à un autre, utilisez la commande suivante:

```sh
~/server$ screen -x nom_du_shell
```

Vous pouvez également appuyer sur `Ctrl`{.action}, puis sur `a`{.action}, puis sur `n`{.action} sur votre clavier.

Dans le shell `minecraft1` précédemment créé, lancez le serveur Minecraft avec la commande suivante. (Utilisez `ls` pour vérifier le nom du fichier au cas où il serait différent.)

```sh
~/server$ java -jar server.jar
```

Pour arrêter votre serveur, entrez la commande `stop`.

### Étape 3 : se connecter au serveur

Votre instance de serveur est maintenant fonctionnelle. Pour jouer au jeu, téléchargez le client Minecraft depuis [le site Web officiel](https://www.minecraft.net/){.external}.

Installez et lancez le client pour votre système d'exploitation et connectez-vous.

![Connexion au serveur](images/login_minecraft.png){.thumbnail}

Sur l'écran suivant, renseignez le nom du serveur dans le champ `Server name` et l'adresse IP du serveur dans le champ `Server Address`.

![Informations sur le serveur](images/minecraft_server_login.png){.thumbnail}

Par défaut, aucun port n'est à renseigner.

### Conclusion

Votre serveur Vanilla Minecraft est maintenant installé sur votre VPS.

Notez que ce guide d'installation est également valable pour un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr/bare-metal/) ou une instance [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/). Avec ces solutions, vous profitez également de ressources physiques garanties et stables à tout moment de la journée, puisque le matériel est dédié.

## Aller plus loin <a name="gofurther"></a>

Pour ajouter des add-ons, des mods et configurer plus finement votre serveur Minecraft, veuillez consulter la documentation officielle suivante: <https://help.mojang.com/>.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
