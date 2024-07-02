---
title: "Gérer son hébergement web avec Visual Studio Code via SFTP"
excerpt: "Administrer un site internet sur un hébergement web avec Visual Studio Code grâce à une extension SFTP"
updated: 2023-11-06
---

## Objectif

Si vous disposez d’un hébergement web OVHcloud, vous pouvez accéder à un espace de stockage qui vous permet de gérer votre site internet. L’accès à cet espace de stockage est possible via le protocole SFTP. Même s’il est possible de se connecter avec un terminal, vous pouvez également utiliser l’environnement de développement intégré (IDE) Visual Studio Code pour gérer les dossiers et fichiers de votre site web.

> [!primary]
>
> Si vous souhaitez administrer votre site web à distance sans utiliser Visual Studio Code, vous pouvez installer le client FTP FileZilla. N'hésitez pas à consulter notre guide « [Utiliser FileZilla avec votre hébergement OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) ». Si vous souhaitez vous connecter à votre site web en SSH, découvrez notre documentation « [Utiliser l'accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting) ».
>

**Découvrez comment administrer votre site internet via Visual Studio Code.**
  
## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting)
- Installer [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) sur votre machine

## En pratique
 
> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) ou à [l'éditeur de l'IDE Visual Studio Code](https://code.visualstudio.com/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

### Installer l’extension SFTP pour Visual Studio Code

> [!warning]
>
> Dans ce tutoriel, nous avons choisi l'extension « SFTP/FTP sync » de *Natizyskunk*. Vous êtes libre d'en choisir une autre. Cependant, notez qu'une extension sur Visual Studio Code est un logiciel souvent créé par un développeur indépendant, lequel peut stopper à tout moment son développement.
>

Après avoir démarré Visual Studio Code, dirigez-vous dans le menu horizontal en haut de l'interface, cliquez sur `View`{.action} puis `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

Pour effectuer la même action avec le raccourci clavier, sélectionnez :

- `Ctrl + Shift + X` si vous êtes sur Windows, 
- `Maj + Command + X` si vous êtes sur macOS.

En haut à gauche de l’interface, entrez le nom de l’extension « SFTP/FTP sync » de *Natizyskunk* et cliquez sur `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

Il est également possible d’installer [l’extension « SFTP/FTP sync »](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code) depuis la marketplace de Visual Studio.
  
### Initialiser le projet en local

Pour synchroniser les fichiers de votre site web présents sur l’hébergement web depuis Visual Studio Code, renseignez l’emplacement de votre projet en local. Pour cela, créez un dossier à l’emplacement souhaité.

Retournez dans Visual Studio Code dans le menu horizontal en haut de l'interface, cliquez sur `View`{.action} puis `Command Palette`{.action} pour afficher l'éditeur de commandes.

Pour effectuer la même action avec le raccourci clavier, sélectionnez :

- `Ctrl + Shift + P` si vous êtes sur Windows, 
- `Maj + Command + P` si vous êtes sur macOS.

Entrez la commande suivante : `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

Grâce à cette commande, Visual Studio Code va créer le fichier de configuration « sftp.json » à la racine du dossier local précédemment créé. Mais comme Visual Studio Code ne connait pas encore l’emplacement de votre projet en local, le message suivant devrait apparaitre :

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Cliquez sur `Open Folder`{.action}, dirigez-vous à l’emplacement du dossier local de votre choix et cliquez sur  `Select Folder`{.action} pour confirmer.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

Dans Visual Studio Code, entrez à nouveau la commande `SFTP: Config`. Un fichier de configuration nommé « sftp.json » apparaît dans Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

Ce fichier est présent dans le dossier .vscode, lui-même positionné à la racine de votre projet local.

### Configurer le fichier sftp.json

Avant de travailler sur votre projet, téléchargez-le dans votre dossier local précédemment créé. Cependant, dans un premier temps, assurez-vous que le fichier « sftp.json » est correctement configuré. Les informations utiles sont présentes dans votre [espace client OVHcloud](/links/manager). Dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action}. Sélectionnez l'hébergement concerné, puis cliquez sur l'onglet `FTP - SSH`{.action}.

Dans le fichier « sftp.json » , rentrez les valeurs pour les entrées suivantes :

#### name 

Repérez-le aux deux emplacements surlignés en orange.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> La valeur `name`(nom) étant personnalisable, vous pouvez attribuer celle de votre choix. Cependant, si vous configurez plusieurs fichiers « sftp.json » , il est préférable de prendre comme référence les valeurs visibles ci-dessus pour des raisons d'organisation.
>

#### host

Toujours dans l’onglet `FTP-SSH`{.action}, le nom d'hôte (`host`) est visible sous la mention `Serveur FTP et SFTP`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Repérez le nom d'utilisateur (`username`) dans la colonne `Login`{.action} du tableau.

#### remotePath

Retrouvez le chemin distant (`remotePath`) sous la mention `chemin du répertoire home`{.action}. Cependant, si plusieurs utilisateurs sont configurés, le chemin indiqué peut être différent. Dans ce cas, remplacez le nom d'utilisateur mentionné après `home/` par celui de votre choix dans liste `Login`{.action} de votre hébergement web.

**Exemple** : Si votre nom d'utilisateur est « john-smith » vous obtiendrez `home/john-smith`

Enfin, n'oubliez pas d'ajouter cette ligne dans le fichier « sftp.json » : `"openSsh": true`

> [!primary]
>
> Pour ne pas avoir à entrer votre mot de passe après chaque commande dans Visual Studio Code, enregistrez-le dans le fichier « sftp.json » en ajoutant la ligne : `"password": "<password>"`
>

Voici un exemple de fichier « sftp.json » :

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

Pour plus de détail concernant les options du fichier « sftp.json » , reportez-vous à la [documentation du projet](https://github.com/Natizyskunk/vscode-sftp/wiki/configuration).

### Télécharger le projet en local

Une fois le fichier « sftp.json » configuré, téléchargez le contenu de votre projet pour récupérer l’ensemble des dossiers et fichiers de votre site web. Pour ce faire, rendez-vous dans Visual Studio Code et entrez la commande suivante : `SFTP: Download Project`.

Visual Studio Code vous demande de sélectionner le dossier que vous souhaitez télécharger sur votre hébergement web. Saisissez la valeur `name` précédement définie dans le fichier « sftp.json » .

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

S'il est demandé, saisissez le mot de passe associé à l’utilisateur renseigné dans le fichier « sftp.json » , puis cliquez sur `enter`. Après le téléchargement, vous visualisez l’ensemble des dossiers et fichiers de votre projet dans l’explorateur de fichiers situé dans la colonne à gauche de l’interface Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> Pour rappel, la bonne configuration du fichier « sftp.json » est primordiale. Si vous rencontrez une erreur avant le téléchargement de votre projet, elle est généralement causée par un défaut de configuration du fichier « sftp.json ». Pour toute question, reportez-vous à la section [FAQ de l'extension](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Effectuer des modifications sur les fichiers

Maintenant que le projet est téléchargé en local sur votre machine, vous pouvez facilement éditer, ajouter ou supprimer des fichiers sur Visual Studio Code.

Si vous souhaitez que vos modifications locales soient synchronisées chaque fois que vous sauvegardez un fichier, ajoutez cette ligne dans le fichier « sftp.json » : `"uploadOnSave": true`

Pour désactiver cette fonction, tout en la gardant dans le fichier « sftp.json », remplacez la valeur `true` par `false`.

Jusqu'à présent, nous avons seulement mentionné les commandes : `SFTP: Config` et `SFTP: Download Project`. Il existe d'autres commandes que vous pouvez observer par autocomplétion en saisissant `SFTP:` dans l'éditeur de commande.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Retrouvez la liste des commandes [ici](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

À présent, vous êtes en mesure d'accéder et de modifier le contenu de votre hébergement web via Visual Studio Code.
Ce guide a pour but de présenter d'une manière efficace la gestion d'un projet depuis Visual Studio Code. Il convient pour une première expérience. Néanmoins, si vous modifiez plusieurs fichiers et que ces derniers sont synchronisés sur votre hébergement web, il vous sera impossible de voir l'historique de vos modifications pour éventuellement revenir dessus ou rattraper une erreur.

## Aller plus loin <a name="go-further"></a>

[Se connecter à l'espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection)

[Utiliser FileZilla avec votre hébergement OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utiliser l'accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting). N'oubliez pas que pour utiliser le SSH, vous devez disposer d'une [offre d'hébergement web Pro ou Performance](/links/web/hosting).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).