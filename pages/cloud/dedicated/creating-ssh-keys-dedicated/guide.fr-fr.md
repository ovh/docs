---
title: Création et utilisation de clés SSH
excerpt: Découvrez comment créer une clé SSH pour une connexion sécurisée à votre serveur dédié
updated: 2022-03-31
---

## Objectif

L'utilisation du protocole SSH ouvre un canal sécurisé sur un réseau non sécurisé dans une architecture client-serveur, en connectant un client SSH à un serveur SSH. La création d'un jeu de clés SSH vous permet d'obtenir une clé publique et une clé privée. Vous pouvez placer la clé publique sur un serveur, puis vous y connecter avec un client qui possède la clé privée correspondante. Si les clés SSH publique et privée correspondent, vous serez connecté sans avoir besoin de mot de passe.

Il s’agit généralement de la méthode de connexion la plus sûre et la plus pratique.

**Ce guide explique comment configurer des clés SSH sur votre appareil local pour sécuriser les connexions aux serveurs distants.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Un [serveur](https://www.ovhcloud.com/fr/bare-metal/) dédié ou un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Une application client SSH (ligne de commande ou GUI)
- Accès administrateur (root) via SSH

> [!primary]
> Ce guide ne s'applique pas aux installations **Windows Server** standard, car elles reposent sur le `Remote Desktop Protocol` (RDP) pour les connexions. Les connexions SSH sont cependant utilisées pour le mode rescue d’OVHcloud. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Instructions

N’oubliez pas de consulter nos guides « Premiers pas » : <a name="getstarted"></a>

- Pour un [serveur dédié](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- Pour un [serveur dédié de la gamme **Eco**](/pages/cloud/dedicated/getting-started-with-dedicated-server-eco)
- Pour un [VPS](/pages/cloud/vps/starting_with_a_vps)

Nous vous invitons à consulter également le guide de présentation [SSH](/pages/cloud/dedicated/ssh_introduction).

Les instructions suivantes couvrent deux méthodes d'utilisation des clés SSH :

- [Création d'une paire de clés **Open SSH** et connexion à un serveur à partir du client SSH en ligne de commande](#openssh)
- [Création d'une paire de clés `PuTTY` et connexion à un serveur à partir du client SSH `PuTTY`](#useputty)

Vous pouvez utiliser les deux méthodes côte à côte, mais gardez à l'esprit que `PuTTY` stocke les fichiers de clé dans un format spécifique qui les rend incompatibles avec les fichiers de clé SSH créés avec le client **Open SSH**. Cela signifie qu'une clé privée créée avec le client SSH en ligne de commande devra d'abord être [convertie au format `PuTTY` et inversement](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).

### Création d'une paire de clés SSH à partir de la ligne de commande <a name="openssh"></a>

À partir d'un ordinateur **Mac** ou d'un périphérique sur lequel un système d'exploitation **Linux** est installé, ouvrez l'application en ligne de commande (`Terminal`).

Vérifiez que vous avez un dossier nommé `.ssh` dans votre répertoire `$HOME`. Si le dossier n'existe pas, le créer :

```bash
mkdir ~/.ssh
```

Sur un système d'exploitation **Windows** actuel, ouvrez l'`invite` de commandes en tapant « cmd » dans la barre de recherche (ou ouvrez `PowerShell` à partir du menu).

Rendez-vous dans le répertoire `.ssh` de votre utilisateur **Windows** actif (par défaut : `C:\Users\WindowsUsername.ssh`):

```powershell
cd .ssh
```

<a name="createnewkey"></a>
Utiliser la commande suivante pour créer une clé RSA de 4096 bits :

```bash
ssh-keygen -b 4096
```

L'utilisation de l'option `-t` avec cette commande permet de spécifier une autre méthode de chiffrement, par exemple :

```bash
ssh-keygen -t ed25519 -a 256
```

La ligne de commande vous invite à enregistrer la clé nouvellement créée dans le fichier standard :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Vous pouvez confirmer avec `Entrée` pour accepter le nom de fichier proposé ou entrer un nom individuel. Ceci est pertinent si plusieurs paires de clés sont placées dans le répertoire `.ssh`. Plus d'informations dans la section [Managing multiple SSH keys](#multiplekeys).<br>
Cet exemple utilise les noms de fichiers standard `id_rsa` et `id_rsa.pub`.

Vous pouvez protéger votre clé SSH avec une phrase secrète à l'invite suivante. C’est une étape recommandée pour plus de sécurité.

> [!warning]
>
> L'accès à distance à votre serveur est aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
> 
> Pour des raisons de commodité et de sécurité, pensez à utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source `KeePass`.
> 

Toutes les clés SSH doivent être stockées dans le répertoire `.ssh`. Le fichier `.pub` sera ajouté au nom de fichier des fichiers de clé publique.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

<a name="publickey"></a>

Pour afficher et exporter votre clé publique, utilisez la commande `cat` sur votre fichier de clé `.pub`. Copiez la chaîne de clé complète dans le Presse-papiers afin de l'[ajouter à votre serveur](#addserverkey).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```


> [!primary]
>
> Dans un terminal **MacOS**, vous pouvez utiliser les commandes `pbcopy` et `pbpaste` pour gérer des chaînes de touches plus rapidement. Par exemple, utilisez cette commande pour copier la clé du fichier `id_rsa.pub` dans le Presse-papiers :
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

Sur un système d'exploitation **Windows**, vous pouvez ouvrir le fichier à l'aide de l'application `Bloc`-notes à partir de l'`Explorateur de fichiers` (cliquez avec le bouton `droit` sur le fichier et sélectionnez `Ouvrir avec`) ou utiliser l'une des commandes suivantes (in `\Users\WindowsUsername\.ssh`) :

- `cmd`

```powershell
more id_rsa.pub
```

- `powershell`

```powershell
cat id_rsa.pub
```

Copiez la chaîne de clé complète dans le Presse-papiers afin de l'[ajouter à votre serveur](#addserverkey).

> [!primary]
>
> **Utilisation du Presse-papiers**
>
> Lorsque vous travaillez à partir d'une ligne de commande **Windows**, utilisez un `clic droit` pour **coller** le contenu du Presse-papiers dans la fenêtre de ligne de commande. Pour **copier** une chaîne à partir de la fenêtre de ligne de commande, mettez-la en surbrillance, puis appuyez sur `Entrée`. Vous pouvez également retrouver ces fonctions via un `clic droit` sur la barre de menu.
>

### Créer une paire de clés SSH avec PuTTY <a name="useputty"></a>

[PuTTY](https://putty.org/){.external} est un logiciel client SSH open source avec une interface utilisateur graphique, disponible pour **Windows** et d'autres systèmes d'exploitation. Il fournit un logiciel complémentaire pour créer des clés SSH : `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> L'objectif principal de `PuTTY` est de gérer les connexions SSH d'un périphérique client **Windows** vers un serveur **GNU/Linux**. `PuTTY` stocke les fichiers de clé dans un format spécifique qui les rend incompatibles avec les fichiers de clé SSH créés avec le client **Open SSH** inclus nativement dans la plupart des systèmes d'exploitation modernes.
>
> Si nécessaire, les clés générées à partir de la ligne de commande comme expliqué ci-dessus peuvent être [converties au format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) afin de les utiliser avec le client `PuTTY`. Pour une utilisation plus pratique des clés SSH, choisissez une option et respectez-la (clés privées **Open SSH** ou clés privées `PuTTY`).
>

S'il n'est pas déjà installé (consultez votre liste d'applications ou utilisez la fonction de recherche), téléchargez `PuTTY` depuis [le site officiel](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). Le package d'installation standard recommandé contient `PuTTYgen`, mais il est également disponible en tant que fichier autonome sur le site Web.

Ouvrez `PuTTYgen` et sélectionnez un algorithme de chiffrement pris en charge. Cet exemple utilise RSA. Entrez 4096 comme nombre de bits dans le coin inférieur droit, puis cliquez sur le bouton `Generate`{.action}.

![clé PuTTy](images/puttygen_01.png){.thumbnail}

Déplacez librement le curseur de la souris dans la zone située sous la barre de progression :

![clé PuTTy](images/puttygen_02.gif){.thumbnail}

La clé est prête lorsque la barre de progression est pleine.

![clé PuTTy](images/puttygen_03.png){.thumbnail}

Copiez la chaîne de clé complète dans le presse-papiers afin de l'[ajouter à votre serveur](#addserverkey) et éventuellement de l'[importer dans votre espace client](#importkey). Enregistrez les deux clés en tant que fichiers en cliquant sur les boutons correspondants et entrez également une phrase secrète pour les protéger.

> [!warning]
>
> L'accès à distance à votre serveur est aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
> 
> Pour des raisons de commodité et de sécurité, pensez à utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source `KeePass`.
>

L'un des avantages d'utiliser `PuTTY` est la possibilité d'enregistrer différentes connexions sous forme de `sessions`. Retrouvez plus d'informations ci-dessous dans la section [Gestion de plusieurs clés SSH sur votre appareil](#puttykeys) local.

Pour en savoir plus sur les connexions SSH, consultez les guides [« Getting Started](#getstarted) » et notre introduction [SSH](/pages/cloud/dedicated/ssh_introduction).

### Ajouter des clés SSH à votre serveur <a name="addserverkey"></a>

[Connectez](/pages/cloud/dedicated/ssh_introduction)-vous à votre serveur et assurez-vous que vous vous trouvez dans le répertoire `$HOME` de votre utilisateur. Créer le dossier `.ssh` (s'il n'existe pas) :

```bash
mkdir ~/.ssh
```

Pour stocker la clé pour l'utilisateur actuel, ouvrez (ou créez) le fichier `authorized_keys` avec votre éditeur de texte préféré (`nano` est utilisé dans cet exemple) :

```bash
nano ~/.ssh/authorized_keys
```

Collez votre [**clé publique**](#publickey) dans ce fichier. Enregistrez le fichier et quittez l’éditeur. Redémarrez votre serveur ou redémarrez uniquement le service OpenSSH avec l'une des commandes suivantes (la commande appropriée peut varier en fonction de votre système d'exploitation) :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Pour vérifier que votre clé a été correctement configurée, connectez-vous à votre serveur avec la commande suivante. Remplacez « user » par le nom d'utilisateur pour lequel les clés ont été créées et « IP_ADDRESS » par l'adresse IP (ou le nom d'hôte) du serveur auquel vous souhaitez accéder :

```bash
ssh user@IP_ADDRESS
```

Par exemple :
    
```bash
ssh ubuntu@169.254.10.250
```

#### Ajouter des clés publiques supplémentaires à votre serveur

Pour ajouter des clés SSH pour d'autres utilisateurs accédant à votre serveur, répétez les étapes de création de clé, mais utilisez le dossier `$HOME` approprié ou le répertoire de **Windows** `Users` de l'utilisateur en question pour créer et stocker les clés SSH (ou exécuter les commandes sur le périphérique dédié de cette personne). Ajoutez ensuite la nouvelle clé publique au serveur dans `authorized_keys` comme décrit ci-dessus.

#### Suppression des clés publiques de votre serveur

Ouvrez le fichier `authorized_keys` comme [décrit ci-dessus](#addserverkey) et supprimez la chaîne de clé qui correspond à l'utilisateur dont l'accès a été révoqué.

Enregistrez le fichier et quittez l’éditeur.

### Gestion de plusieurs clés SSH sur votre équipement local <a name="multiplekeys"></a>

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants. (Si vous utilisez `PuTTY`, passez à [la section correspondante](#puttykeys) ci-dessous.) 

Comme toutes les clés doivent être placées dans le dossier `.ssh` sur votre périphérique local, les noms de fichiers doivent être différents. Lorsque vous [créez une nouvelle paire de clés](#createnewkey) et qu'un nom de fichier vous est demandé, entrez le nom de votre choix. Faites-le correspondre à votre nom de serveur par exemple.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Lors de la connexion au serveur correspondant, spécifiez le nom du fichier de clé en plus des détails de l'utilisateur et du serveur :

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Par exemple :
    
```bash
ssh -i ~/.ssh/myVPS_rsa ubuntu@169.254.10.250
```

Comme indiqué dans les sections précédentes, les mêmes instructions fonctionneront sur un client **Windows**. Remplacez uniquement `~/` par le chemin d'accès de votre dossier utilisateur **Windows**, par défaut `C:\Users\WindowsUsername\`. (Exemple : `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@169.254.10.250`)

#### Utilisation du fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois consiste à modifier un fichier nommé `config` dans le dossier `~/.ssh` (`\Users\Username\.ssh` pour **Windows**). Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe dans `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez de créer d'abord une copie de sauvegarde de l'original.

Exemple de contenu de dossier `.ssh` :
    
```bash
ls ~/.ssh/
config  id_rsa  id_rsa.pub  known_hosts  known_hosts.old
```

Le fichier de `configuration` permet de stocker plusieurs connexions SSH ainsi que leurs paramètres individuels, en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car elle est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs sur une base régulière.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à un VPS.<br>
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa
```

Vous pourrez ensuite vous connecter au VPS avec le nom d'alias que vous avez défini comme `Host` :

```bash
ssh ubuntu@vps
```

Seules l'IP du serveur et le fichier de clé ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés. Pour configurer une connexion SSH à un second serveur avec le nom d'utilisateur « rocky », le [port SSH modifié](/pages/cloud/vps/secure_your_vps#changesshport) « 49160 » et la clé privée dans le fichier « myserver_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 169.254.10.251
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Vous pourrez ensuite vous connecter à ce serveur en renseignant :

```bash
ssh dedicated_server
```

Vous pouvez consulter [la page `man` correspondante](https://manpages.org/ssh_config/5) pour plus d'informations.

#### Utilisation de PuTTY <a name="puttykeys"></a>

Si vous avez suivi les instructions des sections [Création d'une paire de clés SSH avec `PuTTY`](#useputty) et [Ajout de clés SSH à votre serveur](#addserverkey), vous disposez d'une paire de clés vous permettant de vous connecter à votre serveur. 

`PuTTY` peut enregistrer les informations d'identification et les paramètres d'une connexion SSH en tant que `Session`. Cela vous permet également de vous connecter à différents serveurs à l'aide de clés individuelles.

Ouvrez `PuTTY` et développez la sous-section `SSH` dans le menu de gauche, puis cliquez sur `Auth` and `Credentials`.

![clé PuTTy](images/puttygen_04.png){.thumbnail}

Cliquez sur le bouton `Browse`{.action} et sélectionnez le fichier de clé privée `PuTTY` (`keyfile.ppk`) dans le dossier où vous l'avez enregistré.

Le fichier de clé est maintenant associé à la session SSH en cours. Basculez sur `Session` dans le menu de gauche et renseignez vos identifiants de [connexion au serveur](#getstarted) (`username@IPv4_address`).

Entrez un nom pour cette connexion sous `Saved Sessions` et cliquez sur `Save`{.action} pour l'ajouter à la liste.

![clé PuTTy](images/puttygen_05.png){.thumbnail}

Dès à présent, vous pouvez cliquer sur cet élément de `session` et ouvrir une connexion à votre serveur. Pour le tester, cliquez sur `Open`{.action}. Si vous avez protégé le fichier de clé avec une phrase secrète, vous devez l'entrer à ce stade.

Pour configurer une autre connexion au serveur, répétez les étapes suivantes :

- [Créer la paire de clés](#useputty).
- [Ajouter la clé publique à votre serveur](#addserverkey).
- [Renseignez les détails du serveur et ajoutez le fichier de clé en `PuTTY`](#puttykeys).


### Importer sa clé SSH dans l'espace client <a name="importkey"></a>

L'espace client OVHcloud vous permet de stocker des clés publiques si elles ont été créées avec l'un des types de chiffrement pris en charge. Cette fonctionnalité peut vous faire gagner du temps lors de la configuration ou de la réinstallation d'un nouveau serveur, car vous n'avez pas besoin d'[ajouter manuellement la clé publique à votre serveur](#addserverkey). 

Ouvrez la barre de navigation latérale en cliquant sur votre nom dans le coin supérieur droit et utilisez le raccourci `Produits et services`{.action}.

![Espace de gestion des clés SSH](images/SSH_keys_panel_2022.png){.thumbnail}

Dans `Mes services`, positionnez-vous sur l'onglet `Clés SSH`{.action} et cliquez sur `Ajouter une clé SSH`{.action}.

![Espace de gestion des clés SSH](images/SSH_keys_panel_2.1.png){.thumbnail}

Sélectionnez `Dédié` dans le menu déroulant.

Dans la nouvelle fenêtre, entrez un identifiant (un nom de votre choix) pour la clé. Collez la chaîne de clé (copiée depuis [votre fichier `.pub`](#publickey) ou depuis [la fenêtre `PuTTYgen`)](#useputty) dans le champ `Key`.

![Espace de gestion des clés SSH](images/SSH_keys_panel_3.png){.thumbnail}

Si vous avez copié la sortie complète, l'identifiant après la clé doit déjà être ajouté. Notez que pour stocker votre clé, vous devrez spécifier votre identifiant local après la clé collée. (Voir l'exemple de format ci-dessus). C'est une exigence de l’espace client OVHcloud. Cliquez sur `Confirmer`{.action} pour stocker votre clé publique.

> [!primary]
>
> Toutes les clés enregistrées dans la section `Dédié` sont disponibles en préinstallation sur un serveur dédié ou un VPS. En ce qui concerne les clés SSH pour les services Public Cloud, veuillez vous référer à [ce guide](/pages/platform/public-cloud/public-cloud-first-steps).
>

### Définir une clé SSH par défaut (uniquement pour la section « Dédié ») <a name="cpsshkey"></a>

Si vous avez ajouté plusieurs clés SSH dans votre espace client, il est possible de définir une clé à utiliser comme clé par défaut sur le compte. 

> [!warning]
> À noter qu’une fois la clé par défaut paramétrée, elle sera également utilisée comme moyen de connexion au redémarrage d’un serveur en mode rescue. Pour recevoir un mot de passe à la place, la clé par défaut doit être [désactivée](#disablesshkey) avant de redémarrer le serveur en mode rescue. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
> 

Ouvrez la barre de navigation latérale en cliquant sur le nom de votre compte dans le coin supérieur droit et utilisez le raccourci `Produits et services`{.action} pour accéder à la section Clés `SSH`{.action}.

![Espace de gestion des clés SSH](images/SSH_keys_panel_2022.png){.thumbnail}

Dans la liste des clés, cliquez sur l'icône `Clé` à côté de la clé SSH de votre choix pour la définir comme clé par défaut.

![Espace de gestion des clés SSH](images/defaultsshkey.png){.thumbnail}

Une fois ceci fait, un message apparaît, vous confirmant que la clé a été définie par défaut et que l'icône `Clé` est mise en surbrillance.

![Espace de gestion des clés SSH](images/defaultsshkey1.png){.thumbnail}

### Désactivation de la clé SSH par défaut <a name="disablesshkey"></a>

Pour désactiver la clé SSH par **défaut actuelle**, accédez à la section `Clés SSH`{.action} comme décrit ci-dessus. Cliquez sur l'icône `Clé` bleue à côté de la clé SSH correspondante pour désactiver l'option par défaut.

## Aller plus loin <a name="gofurther"></a>

[Introduction au SSH](/pages/cloud/dedicated/ssh_introduction)

[Mode rescue serveur dédié](/pages/cloud/dedicated/rescue_mode)

[Mode Rescue VPS](/pages/cloud/vps/rescue)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
