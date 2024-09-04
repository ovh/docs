---
title: Comment créer et utiliser des clés SSH pour les instances Public Cloud
excerpt: Découvrez comment créer des paires de clés SSH sur votre appareil local et les utiliser pour établir des connexions sécurisées à votre instance
updated: 2024-09-02
---

## Objectif

L'utilisation du protocole SSH ouvre un canal sécurisé sur un réseau non sécurisé dans une architecture client-serveur, en connectant un client SSH à un serveur SSH. La création d'un jeu de clés SSH vous permet d'obtenir une clé publique et une clé privée. Vous pouvez stocker la clé publique sur un serveur puis vous y connecter avec un client qui possède la clé privée correspondante. Si les clés SSH publique et privée correspondent, vous serez connecté sans avoir besoin d'un mot de passe.

Il s’agit généralement de la méthode de connexion la plus sûre et la plus pratique, ainsi que de la méthode par défaut sur les instances Public Cloud.

**Ce guide vous explique comment créer et gérer des clés SSH sur votre appareil local pour vous connecter à des instances Public Cloud.**

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Une application client SSH (ligne de commande ou GUI)

> [!primary]
> Ce guide ne s'applique pas aux installations **Windows Server** standard, car elles reposent sur le protocole `Remote Desktop Protocol` (RDP) pour les connexions.
>
> Retrouvez plus d’informations dans notre [guide sur la création d’une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## En pratique

Les instructions suivantes couvrent deux méthodes d'utilisation des clés SSH :

- [La création d'une paire de clés **Open SSH** et la connexion à un serveur à partir du client SSH en ligne de commande](#openssh)
- [La création d'une paire de clés `PuTTY` et la connexion à un serveur à partir du client SSH `PuTTY`](#useputty)

Vous pouvez utiliser les deux méthodes simultanément, mais gardez à l'esprit que `PuTTY` garde les fichiers de clé dans un format spécifique, ce qui les rend incompatibles avec les fichiers de clé SSH créés avec le client **Open SSH**.

Cela signifie qu'une clé privée créée avec le client SSH en ligne de commande devra d'abord être [convertie au format `PuTTY` et inversement](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

<a name="openssh"></a>

#### Création d'une paire de clés SSH en ligne de commande

À partir d'un ordinateur **Mac** ou d'un périphérique sur lequel un système d'exploitation **Linux** est installé, ouvrez l'application en ligne de commande (`Terminal`).

Vérifiez que vous avez un dossier nommé `.ssh` dans votre répertoire `$HOME`. Si le dossier n'existe pas, créez-le :

```bash
mkdir ~/.ssh
```

Sur un système d'exploitation **Windows** actuel, ouvrez l'`invite de commandes` en tapant « cmd » dans la barre de recherche (ou ouvrez `PowerShell` à partir du menu).

Rendez-vous dans le répertoire `.ssh` de votre utilisateur **Windows** actif (par défaut : `C:\Users\WindowsUsername.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Utilisez la commande suivante pour créer une clé RSA 4096 bits :

```bash
ssh-keygen -b 4096
```

L'utilisation de l'option `-t` avec cette commande vous permet de spécifier une autre méthode de cryptage, par exemple :

```bash
ssh-keygen -t ed25519 -a 256
```

La ligne de commande vous invite à enregistrer la clé nouvellement créée dans le fichier standard :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Vous pouvez confirmer avec `Enter` pour accepter le nom de fichier proposé ou saisir un autre nom. Ceci est pertinent si plusieurs paires de clés sont placées dans le répertoire `.ssh`. Retrouvez plus d'informations à ce sujet dans la section [Gérer plusieurs clés SSH](#multiplekeys).  
Cet exemple utilise les noms de fichiers standard `id_rsa` et `id_rsa.pub`.

Vous pouvez protéger votre clé SSH avec une phrase secrète (*passphrase*) à l'invite suivante. Ceci est recommandé pour plus de sécurité.

> [!warning]
>
> L’accès à distance à votre serveur est aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
>
> Pour des raisons de commodité et de sécurité, nous vous recommandons d'utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source « Keepass ».
>

Toutes les clés SSH doivent être stockées dans le répertoire `.ssh`. Les fichiers de clé publique auront le suffixe `.pub` ajouté au nom de fichier.

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

Afin d'afficher et d'exporter votre clé publique, utilisez la commande `cat` sur votre fichier de clé `.pub`. Copiez cette chaîne de clé pour l'[ajouter à une nouvelle instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou pour l'[importer dans l’espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

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
> Dans un terminal **macOS**, vous pouvez utiliser les commandes `pbcopy` et `pbpaste` pour gérer des chaînes de touches plus rapidement. Par exemple, utilisez cette commande pour copier la clé du fichier `id_rsa.pub` dans le presse-papiers :
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

Sur un système d'exploitation **Windows**, ouvrez le fichier à l'aide de l'application `Bloc-notes` à partir de l'`Explorateur de fichiers` (faites `un clic droit` sur le fichier et sélectionnez `Ouvrir avec`) ou utilisez l'une des commandes suivantes (dans `\Users\WindowsUsername\.ssh`) :

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copiez cette chaîne de clé pour l'[ajouter à une nouvelle instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou pour l'[importer dans l’espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Utilisation du presse-papiers**
>
> Lorsque vous travaillez en ligne de commande sous **Windows**, faites un `clic droit` pour **coller** le contenu du presse-papiers dans la fenêtre de ligne de commande. Pour **copier** une chaîne à partir de la fenêtre de ligne de commande, mettez-la en surbrillance avec votre souris puis appuyez sur la touche `Entrée`. Vous pouvez également retrouver ces fonctions via un `clic droit` sur la barre de menu.
>

<a name="useputty"></a>

#### Créer une paire de clés SSH avec PuTTY

[PuTTY](https://putty.org/){.external} est un logiciel client SSH open source avec une interface utilisateur graphique, disponible pour **Windows** et d'autres systèmes d'exploitation. Il fournit un logiciel complémentaire pour créer des clés SSH : `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> L'objectif principal de `PuTTY` est de gérer les connexions SSH d'un périphérique client **Windows** vers un serveur **GNU/Linux**. `PuTTY` stocke les fichiers de clé dans un format spécifique, ce qui les rend incompatibles avec les fichiers de clés SSH créés avec le client **Open SSH** inclus nativement dans la plupart des systèmes d'exploitation modernes.
>
> Si nécessaire et comme expliqué plus haut dans ce guide, les clés générées en *ligne de commande* peuvent être [converties au format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) afin de les utiliser avec le client `PuTTY`. Pour une utilisation plus pratique des clés SSH, choisissez une option et respectez-la (clés privées **Open SSH** ou clés privées `PuTTY`).
>

S'il n'est pas déjà installé (consultez votre liste d'applications ou utilisez la fonction de recherche), téléchargez `PuTTY` depuis [le site officiel](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. Le package d'installation standard recommandé contient déjà `PuTTYgen` mais il est également disponible en tant que fichier autonome sur le site Web.

Ouvrez `PuTTYgen` et sélectionnez l'un des algorithmes de chiffrement pris en charge. Cet exemple utilise RSA. Entrez 4096 comme nombre de bits dans le coin inférieur droit, puis cliquez sur le bouton `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Déplacez librement le curseur de la souris dans la zone située sous la barre de progression :

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

La clé est prête lorsque la barre de progression est pleine.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copiez cette chaîne de clé pour l'[ajouter à une nouvelle instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou pour l'[importer dans l’espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Enregistrez les deux clés en tant que fichiers en cliquant sur les boutons correspondants et entrez également une phrase secrète (*passphrase*) pour les protéger.

> [!warning]
>
> L'accès distant à votre instance est aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
>
> Pour des raisons de commodité et de sécurité, nous vous recommandons d'utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source `KeePass`.
>

L'un des avantages de l'utilisation de `PuTTY` est la possibilité d'enregistrer différentes connexions sous le nom de `Sessions`. Retrouvez plus d'informations ci-dessous dans la section [Gestion de plusieurs clés SSH sur votre appareil local](#puttykeys).

<a name="multiplekeys"></a>

### Gestion de plusieurs clés SSH sur votre équipement local

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants.

> [!primary]
>
> Si vous utilisez `PuTTY`, passez à [la section correspondante](#puttykeys) ci-dessous.
>

Comme toutes les clés doivent être placées dans le dossier `.ssh` sur votre unité locale, les noms de fichiers doivent être différents. Lorsque vous [créez une nouvelle paire de clés](#createnewkey) et qu'il vous est demandé de fournir un nom de fichier, entrez le nom de votre choix. Associez-le au nom de votre instance par exemple.

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

Exemple :

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Comme indiqué dans les sections précédentes, les mêmes instructions fonctionneront sur un client **Windows**. Remplacez uniquement `~/` par le chemin d'accès de votre dossier utilisateur **Windows**, par défaut `C:\Users\WindowsUsername\`. Par exemple : `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@203.0.113.100`.

#### Via un fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois consiste à modifier un fichier nommé `config` dans le dossier `~/.ssh` (`\Users\Username\.ssh` pour **Windows**). Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe dans `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez d'abord de créer une copie de sauvegarde de l'original.

Exemple de contenu de dossier `.ssh` :

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Avec le fichier `config`, plusieurs connexions SSH peuvent être stockées avec leurs paramètres individuels, en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car elle est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs sur une base régulière.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à une instance.

Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Vous pourrez ensuite vous connecter à l'instance avec le nom d'alias que vous aurez défini comme `Host` :

```bash
ssh ubuntu@instance
```

Seules l'IP du serveur et le fichier de clé ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés.  
Pour configurer une connexion SSH à un second serveur avec le nom d'utilisateur « rocky », le port SSH modifié « 49160 » et la clé privée dans le fichier « myserver_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Vous pourrez ensuite vous connecter à ce serveur en renseignant :

```bash
ssh myserver
```

Vous pouvez consulter la [page `man` correspondante](https://manpages.org/ssh_config/5) pour plus d'informations.

<a name="puttykeys"></a>

#### Via PuTTY

`PuTTY` peut enregistrer les informations d'identification et les paramètres d'une connexion SSH en tant que `Session`. Cela vous permet également de vous connecter à différents serveurs à l'aide de clés individuelles.

Ouvrez `PuTTY` et dépliez la sous-section `SSH` dans le menu de gauche puis cliquez sur `Auth` et `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Cliquez sur le bouton `Browse`{.action} et sélectionnez le fichier de clé privée `PuTTY` (`keyfile.ppk`) dans le dossier où vous l'avez enregistré.

Le fichier de clé est maintenant associé à la session SSH en cours. Basculez sur `Session` dans le menu de gauche et renseignez vos identifiants de connexion au serveur (`username@IPv4_address`).

Entrez un nom pour cette connexion sous `Saved Sessions` et cliquez sur `Save`{.action} pour l'ajouter à la liste.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Dès à présent, vous pouvez cliquer sur cet élément de `Session` et ouvrir une connexion à votre serveur. Pour le tester, cliquez sur `Open`{.action}. Si vous avez protégé le fichier de clé avec une phrase secrète, saisissez-la à ce stade.

#### Ajout de clés publiques supplémentaires à votre instance

Pour ajouter des clés SSH pour d'autres utilisateurs accédant à votre instance, répétez les étapes de création de clé mais utilisez le dossier `$HOME` approprié ou **Windows** `Users` de l'utilisateur en question pour créer et stocker les clés SSH (ou exécuter les commandes sur l'appareil dédié de cette personne).

Consultez notre [guide dédié](/pages/public_cloud/compute/configuring_additional_ssh_keys) pour une explication détaillée de ces étapes.

<a name="gofurther"></a>

## Aller plus loin

[Comment créer une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Premiers pas avec SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configuration de clés SSH supplémentaires sur une instance](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).