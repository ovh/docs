---
title: 'Comment créer un serveur Minecraft sur un VPS ou un serveur dédié'
slug: creer-serveur-minecraft-sur-vps
excerpt: 'Craftez votre propre serveur et buildez votre monde !'
section: Tutoriel
---

## Introduction

Minecraft est un jeu vidéo de construction au succès mondial. Il nécessite un serveur pour héberger votre partie, sur lequel vous vous connectez à distance avec vos amis.

L'administration de ce serveur peut être déléguée à une entreprise externe, mais vous pouvez tout à fait l'héberger vous-même sur un [VPS](https://www.ovhcloud.com/fr/vps/){.external} ou un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}. Cela vous permet de réaliser des économies, ainsi que de personnaliser vos parties sans limite.

Dans ce tutoriel, nous allons créer de A à Z un serveur Minecraft Java Edition sur un VPS OVHcloud et tester sa connectivité.

> [!warning]
> 
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. N'hésitez pas à vous rendre sur notre [forum communautaire](https://community.ovh.com/){.external} pour échanger avec d'autres utilisateurs.
>

## Prérequis

### Ce que vous devez savoir

- Avoir des notions d'administration Linux.
- Se connecter en SSH.
- Installer une distribution (ici nous utiliserons Debian 9 ou Ubuntu 18.04).

### Ce que vous devez avoir

- Disposer d'un [VPS SSD](https://www.ovhcloud.com/fr/vps/){.external}. Un minimum de 2 Go de RAM est conseillé.
- Télécharger le paquet *minecraft_server.1.12.2.jar* sur <https://minecraft.net/fr-fr/download/server>.


## En pratique

### Étape 1 : préparez l'environnement

Nous allons préparer notre serveur VPS pour accueillir Minecraft. Si cela est possible, nous vous conseillons de réinstaller votre VPS via votre espace client (Ubuntu ou Debian sont conseillés).

Une fois le VPS installé, connectez-vous à votre VPS en SSH avec l’utilisateur principal root (administrateur), en utilisant un terminal. Mettez à jour la liste des paquets :

```sh
apt update
```

Il convient maintenant de mettre à jour le système :

```sh
apt full-upgrade
```

Pour la suite de l'installation, certains paquets non présents par défaut sont nécessaires. Voici la commande :

```sh
apt install default-jre screen nano wget git
```

Pour éviter de créer des vulnérabilités dans votre système, nous allons maintenant créer un utilisateur que nous appellerons « minecraft ». Celui-ci sera chargé d'exécuter le processus minecraft :

```sh
adduser minecraft --disabled-login --disabled-password
```

Plusieurs informations vous sont demandées ; il suffit d'appuyer sur la touche `Entrée`{.action} pour les valider.

L'utilisateur est désormais créé. Vous pourrez noter qu'aucun mot de passe n'est spécifié, ce qui est normal. Ce compte n'est accessible que par SSH et ne le sera qu'à travers le compte root.

Il est temps de vous connecter à l'utilisateur « minecraft » :

```sh
su - minecraft
```

Enfin, pour terminer la mise en place de l'environnement, nous allons créer un dossier nommé `server` dans le dossier personnel actuel :

```sh
mkdir ~/server && cd ~/server
```

> [!primary]
>
> Rappel important : cette dernière commande doit être effectuée avec l'utilisateur « minecraft » dans notre cas.
> 
  

### Étape 2 : installez un serveur Minecraft Vanilla

> [!primary]
> 
> On entend souvent parler de serveurs Vanilla, sur Minecraft ou d'autres jeux comme World of Warcraft. Il s'agit de serveurs sans add-on ou plugin : vous parcourez le jeu dans sa version la plus standard.
>
> 

Rendez-vous sur le [site officiel de Minecraft](https://minecraft.net/fr-fr/download/server) pour télécharger le paquet. Dans notre cas, il suffit d'effectuer un clic droit sur `minecraft_server.1.12.2.jar` pour copier l'adresse du lien.

Maintenant que l'adresse du paquet est récupérée, téléchargez-le sur le VPS. Vérifiez que vous vous trouvez bien dans le dossier `server` créé précédemment, puis tapez :

```sh
wget <collez le lien du paquet>
```

Avant de lancer le serveur, vous devez accepter la licence du logiciel (EULA ou _End User License Agreement_) pour éviter sa coupure instantanée.

Dans le même dossier, utilisez la commande suivante :

```sh
echo "eula=true" > eula.txt
```

Cette action a pour effet de créer le fichier `eula.txt` à la racine de votre serveur. Il contient `eula=true`, ce qui signifie que vous acceptez les conditions d’utilisation de Minecraft. Nous vous conseillons toutefois d'en prendre connaissance sur le site officiel du jeu.

Votre serveur est ensuite prêt à être lancé.

Lors de l'étape 1, nous avons installé le paquet `screen` qui permet d'ouvrir plusieurs sessions de terminal (*shell* en anglais). Nous allons démarrer Minecraft dans une nouvelle session et ainsi le lancer en tâche de fond. `screen` dispose de nombreux avantages pour notre cas d'usage, comme l'exécution de plusieurs serveurs Minecraft en simultané.

Au préalable, nous allons créer un nouveau `shell` nommé `minecraft1` :

```sh
screen -S minecraft1
```

La fenêtre active de votre terminal change, vous basculez automatiquement sur une nouvelle session `shell`. Vous pouvez créer d'autres `shells` si nécessaire et les lister via la fonction suivante :

```sh
screen -ls
```

Pour passer d'un `shell`à un autre, il existe des raccourcis claviers comme `CTRL+a n`{.action} pour aller au suivant. Cette action est aussi possible en ligne de commande, en tapant le nom du `shell` :

```sh
screen -x another_shell
```

Placez-vous dans le shell `minecraft1` que vous venez de créer, puis démarrez un serveur Minecraft avec la commande suivante :

```sh
java -jar fichierduserveurtelecharge.jar
```

Si vous désirez éteindre votre serveur, utilisez la commande `stop`.


### Étape 3 : connectez-vous à votre serveur

L'environnement et le serveur étant maintenant fonctionnels, nous allons tester la connexion. Auparavant, téléchargez le client Minecraft de votre plateforme de jeu préférée sur <https://minecraft.net/>.

Installez et lancez votre client Minecraft, puis connectez-vous avec votre compte :

![Connexion au serveur](images/login_minecraft.png){.thumbnail}

Sur l'écran suivant, dans le champ `Server name`, renseignez le nom du serveur choisi. Dans le champ `Server Address`, indiquez l'adresse IP de votre VPS.

![Informations sur le serveur](images/minecraft_server_login.png){.thumbnail}

Par défaut, aucun port n'est à renseigner.


## Conclusion

Votre serveur Vanilla Minecraft est désormais installé sur votre VPS. Avant de jouer, il ne vous reste plus qu'à le configurer selon vos envies.

À noter que cette installation fonctionne tout aussi bien sur un serveur dédié ou du Public Cloud OVHcloud. Avec ces solutions, vous profitez également de ressources physiques garanties et stables à tout moment de la journée.

Enfin, pour ajouter des add-ons et configurer plus finement votre serveur Minecraft, consultez la documentation officielle sur <https://help.mojang.com/>. D'autres versions personnalisées existent, comme la prometteuse Minecraft Bukkit, et sont également compatibles avec les produits OVHcloud.
