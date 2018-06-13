---
title: 'Comment créer un serveur Minecraft sur VPS'
slug: creer-serveur-minecraft-sur-vps
excerpt: 'Craftez votre propre serveur et buildez votre monde !'
section: 'Cas d''utilisation'
---

- Niveau : intermédiaire
- Distributions utilisées : Debian 9/Ubuntu 18.04
- Infrastructure utilisée : [VPS SSD 3](https://www.ovh.com/fr/vps/vps-ssd.xml){.external}
- Adresse du paquet Minecraft : <https://minecraft.net/fr-fr/download/server>
- Paquet Minecraft utilisé : minecraft_server.1.12.2.jar

> [!warning]
>
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur.
>

## Préparez l'environnement

Avant tout, connectez-vous à votre VPS en SSH avec l’utilisateur principal root, en utilisant un terminal. Avant tout, mettez à jour la liste des paquets :

```sh
apt update
```

Il convient maintenant de mettre à jour le système :

```sh
apt full-upgrade
```

Pour la suite de l'installation, certains paquets sont nécessaires. Voici la commande :

```sh
apt install default-jre screen nano wget git
```

Pour éviter de créer des vulnérabilités dans votre système, nous allons maintenant créer un utilisateur que nous appellerons « minecraft » qui sera chargé d'exécuter le serveur :

```sh
adduser minecraft --disabled-login --disabled-password
```

Plusieurs informations vous seront demandées, il suffit d'appuyer sur la touche `Entrée`{.action} pour les valider.

L'utilisateur est désormais créé. Vous pourrez noter qu'aucun mot de passe n'est spécifié, ce qui est normal. Ce compte n'est accessible que par SSH et ne le sera qu'à travers le compte root.

Il est temps de vous connecter à l'utilisateur « minecraft » :

```sh
su - minecraft
```

Enfin, pour en terminer avec la mise en place de l'environnement, nous allons créer un dossier nommé `server` dans le dossier personnel actuel :

```sh
mkdir ~/server && cd ~/server
```

> [!primary]
>
> Rappel important : cette dernière commande doit être effectuée avec l'utilisateur « minecraft » dans notre cas.
> 
  

## Installez un serveur Vanilla

Avant tout, rendez-vous sur le [site officiel de Minecraft](https://minecraft.net/fr-fr/download/server) pour télécharger le paquet. Dans notre cas, il suffit d'effectuer un clic droit sur `minecraft_server.1.12.2.jar` pour copier l'adresse du lien.

Maintenant que l'adresse du paquet est récupérée, téléchargez-le sur le VPS. Vérifiez que vous vous trouvez bien dans le dossier `server` créé précédemment. 

```sh
wget <collez le lien du paquet>
```

Le paquet est désormais téléchargé, passons à la suite des manipulations.


Avant de lancer le serveur, vous devez accepter la licence du logiciel (EULA ou _End User License Agreement_) pour éviter la coupure instantanée du serveur.

Dans le même dossier, utilisez la commande suivante :

```sh
echo "eula=true" > eula.txt
```

Cette commande aura pour effet de créer le fichier `eula.txt` à la racine de votre serveur. Ce fichier contiendra `eula=true`, ce qui signifie que vous acceptez les conditions d’utilisation de Minecraft. Nous vous conseillons toutefois d'en prendre connaissance sur le site officiel du jeu.

Votre serveur est enfin prêt à être lancé.

Il reste à démarrer le serveur avec la commande suivante :

```sh
java -jar fichierduserveurtelecharge.jar
```

Si vous désirez éteindre votre serveur, utilisez la commande `stop`.


## Pour finir

Votre serveur Vanilla Minecraft est désormais installé sur votre VPS, il vous reste maintenant à le configurer. Pour en discuter avec notre communauté d'utilisateurs, n'hésitez pas à vous rendre sur https://community.ovh.com/.