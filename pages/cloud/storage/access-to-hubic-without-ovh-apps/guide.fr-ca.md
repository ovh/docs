---
title: 'Comment se connecter à hubiC sans utiliser le site internet ou les applications'
slug: se-connecter-hubic-sans-application
excerpt: 'Apprenez à vous connecter à un cluster hubiC via trois méthodes'
section: hubiC
---

## Introduction 

Le service hubiC est basé sur des clusters de stockage OpenStack Swift. Vous pouvez donc y accéder de différentes manières. Si l'utilisation du site hubic.com reste la méthode recommandée, il est tout à fait possible d'utiliser votre service en vous connectant via des outils tiers.

**Apprenez à vous connecter à un cluster hubiC via trois méthodes : Cyberduck (client Swift), Mountain Duck (disque réseau) ou un montage svfs.**

> [!warning]
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation ! 
>
Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur https://community.ovh.com/. OVH ne sera pas en mesure de vous fournir une assistance. 
>

## Prérequis

### Ce que vous devez savoir

- Savoir installer une application sur votre machine locale (pour les solutions Cyberduck et Mountain Duck).
- Se connecter en SSH (pour le montage svfs).

### Ce que vous devez avoir

- Posséder un compte hubiC actif. 
- Disposer d'un ordinateur utilisant un système d'exploitation Windows, macOS ou GNU/Linux.
- Bénéficier d'une connexion internet fonctionnelle.
- Disposer d'une licence valide dans le cadre de l'utilisation de logiciels propriétaires payants (par exemple : Mountain Duck).


## En pratique 


### Déterminez la méthode de connexion la plus adaptée à votre situation

Selon votre système d'exploitation et vos connaissances personnelles, vous pouvez privilégier certaines méthodes de connexion. 

- Si vous souhaitez utiliser une solution pour Windows ou macOS à paramétrer par vos soins, vous pouvez consulter la partie de ce tutoriel intitulée « [Se connecter à un cluster hubiC via Cyberduck](/#se-connecter-à-un-cluster-hubic-via-cyberduck) » pour vous connecter à un cluster hubiC via le client Swift.  

- Si vous souhaitez utiliser une solution « tout en un » pour Windows ou macOS avec très peu de paramétrages à effectuer et via un disque réseau, consultez la partie de ce tutoriel intitulée « [Se connecter à un cluster hubiC via Mountain Duck](/#se-connecter-a-un-cluster-hubic-via-mountainDduck) » pour vous connecter à un cluster hubiC via un logiciel payant.

- Si vous utilisez une distribution GNU/Linux, consultez la partie de ce tutoriel intitulée « [Se connecter à un cluster hubiC via svfs](/#se-connecter-a-un-cluster-hubiC-via-svfs) » pour vous connecter à un cluster hubiC via un montage svsf.


## Connectez-vous à un cluster hubiC via Cyberduck

Vous pouvez vous connecter à un cluster hubiC en utilisant un client Swift. Dans ce tutoriel, nous allons utiliser Cyberduck, disponible pour les plateformes Windows et macOS. 


### Étape 1 : téléchargez et installez Cyberduck

Récupérez la dernière version de Cyberduck correspondant à votre système d'exploitation (Windows ou macOS) via [ce lien](https://cyberduck.io/download/){.external}. 

Cette application est gratuite et peut être utilisée sans restriction. Après l'installation, lancez le logiciel afin de vérifier que l'opération s'est bien déroulée, puis **quittez le logiciel**.


### Étape 2 : obtenez les données d'authentification 

Vous devez obtenir et renseigner un profil de connexion particulier pour pouvoir vous connecter à hubiC via Cyberduck.

Ce profil se présente sous la forme d'un fichier qu'il est possible de télécharger en cliquant sur [ce lien](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Ouvrez ce dernier, ce qui lancera Cyberduck ainsi qu'une fenêtre de configuration.


### Étape 3 : autorisez Cyberduck à se connecter à votre compte hubiC

Dans la fenêtre ouverte précédemment, entrez l'adresse e-mail de connexion à votre compte hubiC dans le champ « E-mail ».

![entrer email](images/hubic_cyberduck_02.png){.thumbnail}

Dans l'application Cyberduck, effectuez un double clic sur l'icône de disque dur à côté de laquelle votre adresse e-mail est indiquée. 

Une page internet doit s'ouvrir, vous invitant à entrer vos identifiants de connexion à hubiC. Saisissez les éléments demandés, puis cliquez sur le bouton `Accept`{.action}. Cette action autorisera Cyberduck à se connecter à hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

Une fois ceci fait, vous obtiendrez un code d'autorisation validant cet accès.

![token](images/hubic_cyberduck_04.png){.thumbnail}

Copiez et collez-le dans Cyberduck, partie « Authorization code », puis cliquez sur `Continuer`{.action}. 

![oauth](images/oauth.png){.thumbnail}

Une fois la fenêtre disparue, cliquez sur `Login`{.action}.

### Étape 4 : connectez-vous à votre compte hubiC via Cyberduck

Une fois revenu dans le logiciel Cyberduck, vous pourrez vous connecter à tout moment à votre espace hubiC en effectuant un double clic sur l'icône en forme de disque dur.

![login](images/hubic_cyberduck_05.png){.thumbnail}

Vous pourrez y retrouver vos fichiers et dossiers. 

![navigate](images/hubic_cyberduck_06.png){.thumbnail}

Un clic droit sur un fichier ou un dossier vous permettra alors d'accéder à différentes options : le `download` vous permet de télécharger le fichier ou le dossier concerné ou encore le `delete` vous permet de supprimer le fichier ou le dossier concerné.

> [!warning]
> 
> Ne supprimez en aucun cas la partie « *Default* » ou « *Default_segments* », sous peine de rendre votre compte hubiC inutilisable et de perdre les données stockées.
>

## Connectez-vous à un cluster hubiC via Mountain Duck

Mountain Duck est un logiciel disponible sous Windows et macOS, vous permettant de vous connecter simplement à certains services de stockage de données, comme hubiC. Ils seront présentés comme des disques réseau au sein de votre ordinateur et seront utilisables comme tels. 

> [!primary]
>
> Mountain Duck est une application payante. **Une version d'essai (*Trial version*) est disponible, mais elle ne permet pas d'établir des connexions de plus de dix minutes**.

### Étape 1 : téléchargez et installez Mountain Duck

Téléchargez la dernière version de Mountain Duck correspondant à votre système d'exploitation via [ce lien](https://mountainduck.io/){.external}. Lancez l'installation, puis entrez la clé d'enregistrement reçue lors de l'achat de votre licence.

### Étape 2 : obtenez les données d'authentification 

Vous devez obtenir et renseigner un profil de connexion particulier pour pouvoir vous connecter à hubiC via Mountain Duck.

Ce profil se présente sous la forme d'un fichier qu'il est possible de télécharger en cliquant sur [ce lien](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Ouvrez ensuite sur ce dernier, ce qui devrait avoir pour effet d'ajouter hubiC à la liste des services supportés.

### Étape 3 : ouvrez un disque dur réseau hubiC

Vérifiez que Mountain Duck fonctionne correctement, puis effectuez un clic droit sur l'icône correspondante dans la barre des tâches.

![barre des tâches](images/hubic_mountainduck_01.png){.thumbnail}

Une fenêtre de configuration s'ouvre alors. Sélectionnez `hubiC (OVH)`{.action} dans le menu déroulant.

![barre des tâches](images/hubic_mountainduck_02.png){.thumbnail}

Dans la nouvelle fenêtre qui apparaît, renseignez l'adresse e-mail de votre compte hubiC dans le champ « E-mail », puis cliquez sur le bouton `Connect`{.action}.

### Étape 4 : autorisez Mountain Duck à se connecter à votre compte hubiC

Une page internet s'ouvre alors, vous invitant à entrer vos identifiants de connexion à hubiC. Saisissez les éléments demandés, puis cliquez sur le bouton `Accept`{.action}. Cette action autorisera Mountain Duck à se connecter à hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

Une nouvelle page s'ouvre ensuite, vous présentant un code d'autorisation validant cet accès.

![token](images/hubic_cyberduck_04.png){.thumbnail}

Copiez et collez celui-ci dans la fenêtre correspondante.

![auth md](images/hubic_mountainduck_03.png){.thumbnail}

Une fois ce code renseigné dans Mountain Duck, votre espace hubiC sera désormais accessible en tant que lecteur réseau sur votre ordinateur.

![network drive](images/hubic_mountainduck_04.png){.thumbnail}

## Connectez-vous à un cluster hubiC via svfs

Si vous utilisez un ordinateur exploitant une distribution GNU/Linux (Debian dans notre exemple), vous pouvez accéder à votre espace hubiC via un point de montage svfs (*Swift Virtual File System*). Plus d'informations à propos de svfs sont disponibles via le [dépôt GitHub du projet](https://github.com/ovh/svfs).

### Étape 1 : installez svfs

Connectez-vous en SSH et récupérez le paquet svfs compatible avec hubiC via la commande suivante :

```sh
wget https://github.com/ovh/svfs/releases/download/v0.9.1/svfs_0.9.1_amd64.deb
```

Procédez ensuite à l'installation de ce dernier :

```sh
dpkg -i svfs_0.9.1_amd64.deb
```

Lors de cette phase d'installation, vous pouvez rencontrer des erreurs de correspondance. La plupart d'entre elles peuvent être corrigées par la commande suivante (toujours sous Debian et systèmes dérivés) :

```sh
apt --fix-broken install
```

Vous pourrez alors relancer l'installation, qui devrait ne plus rencontrer de dysfonctionnement.

### Étape 2 : paramétrez le point de montage

Connectez-vous à [hubic.com](https://hubic.com). Cliquez sur `Mon compte`{.action}, sur `Développeurs`{.action}, puis sur `Ajouter une application`{.action}. Nommez-la puis indiquez dans « Domaine de redirection » :

```sh
http://localhost
```

![application](images/hubic_svfs_01.png){.thumbnail}

À droite de l'application créée, cliquez sur `Détails`{.action} et récupérez les informations dans les champs « Client ID » et « Client Secret ».

![client_secret](images/client_secret.png){.thumbnail}

Connecté en SSH, entrez alors la commande suivante :

```ssh
hubic-application
```

Vous pourrez renseigner les informations demandées :

| Nom du champ              | Information à renseigner               |
|---------------------------|----------------------------------------|
| Application redirect URL  | http://localhost/                      |
| Application Client ID     | Le client ID récupéré précédemment.     |
| Application Client Secret | Le client secret récupéré précédemment. |

Puis complétez les éléments suivants :

```
1. Setting scope ... OK ~> Email: /votre mail hubic/ ~> Password: /mot de passe hubic/
2. Granting access ... OK
3. Getting refresh token ... OK == Your mount options == ~> hubic_auth=xxxxxxxx ~> hubic_token=xxxxxxxx
```

### Étape 3 : créez le point de montage

Une fois tous les éléments renseignés, vous pouvez créer un point de montage svfs en utilisant les éléments ainsi obtenus.

```
# sudo mount -t svfs hubic /mountpoint -o hubic_auth=<hubic_auth>,hubic_token=<hubic_token>,container=default
```

## Conclusion

Vous pouvez désormais accéder à votre espace de stockage hubiC sans utiliser l'application officielle ou le site hubic.com (l'application web). 

Notez néanmoins que l'accès à vos données via hubic.com reste la méthode que nous vous recommandons. OVH ne pourra pas vous apporter d'aide concernant les manipulations présentées ci-dessus.