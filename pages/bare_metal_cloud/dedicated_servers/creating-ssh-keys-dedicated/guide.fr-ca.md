---
title: Créer et utiliser des clés SSH
excerpt: Découvrez comment créer une paire de clés SSH sur votre poste de travail et les utiliser pour établir une connexion sécurisée à votre serveur
updated: 2024-06-26
---

## Objectif

L'utilisation du protocole SSH ouvre un canal sécurisé sur un réseau non sécurisé dans une architecture client-serveur, en connectant un client SSH à un serveur SSH. La création d'un jeu de clés SSH vous permet d'obtenir une clé publique et une clé privée. Vous pouvez placer la clé publique sur un serveur puis vous y connecter avec un client qui possède la clé privée correspondante. Si les clés SSH publique et privée correspondent, vous serez connecté sans avoir besoin d'un mot de passe.

Il s’agit généralement de la méthode de connexion la plus sûre et la plus pratique.

**Ce guide explique comment configurer des clés SSH sur votre appareil local pour sécuriser les connexions a des serveurs distants.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager)
- Disposer d'un [serveur dédié](/links/bare-metal/bare-metal) ou d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Installer au préalable une application client SSH (ligne de commande ou GUI)
- Disposer d'un accès administrateur (sudo) via SSH

> [!primary]
> Ce guide ne s'applique pas aux installations **Windows Server** standard car elles reposent sur le `Remote Desktop Protocol` (RDP) pour les connexions. Les connexions SSH sont cependant utilisées pour le mode rescue d’OVHcloud. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## En pratique

N’oubliez pas de consulter nos guides « Premiers pas » : <a name="getstarted"></a>

- pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) ;
- pour un [serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco) ;
- pour un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

Nous vous invitons à consulter également le guide de présentation du [protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

<a name="create-ssh-key"></a>

### Création d'une paire de clés SSH

Les instructions suivantes couvrent deux méthodes d'utilisation des clés SSH :

- [La création d'une paire de clés **Open SSH** et la connexion à un serveur à partir du client SSH en ligne de commande](#openssh)
- [La création d'une paire de clés `PuTTY` et la connexion à un serveur à partir du client SSH `PuTTY`](#useputty)

Vous pouvez utiliser les deux méthodes simultanément, mais gardez à l'esprit que `PuTTY` garde les fichiers de clé dans un format spécifique, ce qui les rend incompatibles avec les fichiers de clé SSH créés avec le client **Open SSH**.

Cela signifie qu'une clé privée créée avec le client SSH en ligne de commande devra d'abord être [convertie au format `PuTTY` et inversement](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

#### Création d'une paire de clés SSH en ligne de commande <a name="openssh"></a>

À partir d'un ordinateur **Mac** ou d'un périphérique sur lequel un système d'exploitation **Linux** est installé, ouvrez l'application en ligne de commande (`Terminal`).

Vérifiez que vous avez un dossier nommé `.ssh` dans votre répertoire `$HOME`. Si le dossier n'existe pas, créez-le :

```bash
mkdir ~/.ssh
```

Sur un système d'exploitation **Windows** actuel, ouvrez l'`invite de commandes` en tapant « cmd » dans la barre de recherche (ou ouvrez `PowerShell` à partir du menu).

Rendez-vous dans le répertoire `.ssh` de votre utilisateur **Windows** actif (par défaut : `C:\Users\WindowsUsername.ssh`):

```powershell
cd .ssh
```

<a name="createnewkey"></a>
Utilisez ensuite la commande suivante pour créer une clé RSA de 4096 bits :

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

Confirmez avec la touche `Entrée` pour accepter le nom de fichier proposé ou entrer un nom individuel. Ceci est pertinent si plusieurs paires de clés sont placées dans le répertoire `.ssh`. Retrouvez plus d'informations à ce sujet dans la section « [Gestion de plusieurs clés SSH sur votre équipement local](#multiplekeys) » de ce guide.<br>
Cet exemple utilise les noms de fichiers standard `id_rsa` et `id_rsa.pub`.

Vous pouvez protéger votre clé SSH avec une phrase secrète (*passphrase*) à l'opération suivante. C’est une étape recommandée pour plus de sécurité.

> [!warning]
>
> L'accès à distance à votre serveur doit être aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
> 
> Pour des raisons de commodité d'usage et de sécurité, pensez à utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source `KeePass`.
> 

Toutes les clés SSH doivent être stockées dans le répertoire `.ssh`. L'extension `.pub` sera ajoutée aux noms des fichiers de clés publiques.

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

Pour afficher et exporter votre clé publique, utilisez la commande `cat` sur votre fichier de clés `.pub`. Copiez la chaîne de clé complète dans le Presse-papiers afin de l'[ajouter à votre serveur](#addserverkey).

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

Sur un système d'exploitation **Windows**, ouvrez le fichier à l'aide de l'application `Bloc-notes` à partir de l'`Explorateur de fichiers` (faites `un clic droit` sur le fichier et sélectionnez `Ouvrir avec`) ou utilisez l'une des commandes suivantes (dans `\Users\WindowsUsername\.ssh`) :

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
> Lorsque vous travaillez en ligne de commande sous **Windows**, faites un `clic droit` pour **coller** le contenu du Presse-papiers dans la fenêtre de ligne de commande. Pour **copier** une chaîne à partir de la fenêtre de ligne de commande, mettez-la en surbrillance avec votre souris puis appuyez sur la touche `Entrée`. Vous pouvez également retrouver ces fonctions via un `clic droit` sur la barre de menu.
>

#### Créer une paire de clés SSH avec PuTTY <a name="useputty"></a>

[PuTTY](https://putty.org/){.external} est un logiciel client SSH open source avec une interface utilisateur graphique, disponible pour **Windows** et d'autres systèmes d'exploitation. Il fournit un logiciel complémentaire pour créer des clés SSH : `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> L'objectif principal de `PuTTY` est de gérer les connexions SSH d'un périphérique client **Windows** vers un serveur **GNU/Linux**. `PuTTY` stocke les fichiers de clé dans un format spécifique, ce qui les rend incompatibles avec les fichiers de clés SSH créés avec le client **Open SSH** inclus nativement dans la plupart des systèmes d'exploitation modernes.
>
> Si nécessaire et comme expliqué plus haut dans ce guide, les clés générées en *ligne de commande* peuvent être [converties au format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) afin de les utiliser avec le client `PuTTY`. Pour une utilisation plus pratique des clés SSH, choisissez une option et respectez-la (clés privées **Open SSH** ou clés privées `PuTTY`).
>

S'il n'est pas déjà installé (consultez votre liste d'applications ou utilisez la fonction de recherche), téléchargez `PuTTY` depuis [le site officiel](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. Le package d'installation standard recommandé contient déjà `PuTTYgen` mais il est également disponible en tant que fichier autonome sur le site Web.

Ouvrez `PuTTYgen` et sélectionnez l'un des algorithmes de chiffrement pris en charge. Cet exemple utilise RSA. Entrez 4096 comme nombre de bits dans le coin inférieur droit, puis cliquez sur le bouton `Generate`{.action}.

![clé PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Déplacez librement le curseur de la souris dans la zone située sous la barre de progression :

![clé PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

La clé est prête lorsque la barre de progression est pleine.

![clé PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copiez la chaîne de clé complète dans le Presse-papiers afin de l'[ajouter à votre serveur](#addserverkey). Enregistrez les deux clés en tant que fichiers en cliquant sur les boutons correspondants et entrez également une phrase secrète (*passphrase*) pour les protéger.

> [!warning]
>
> L'accès à distance à votre serveur doit être aussi sécurisé que le périphérique client stockant la clé privée. La protection de votre appareil et de vos fichiers contre les accès non autorisés est donc cruciale lors de l'utilisation de clés SSH.
> 
> Pour des raisons de commodité d'usage et de sécurité, pensez à utiliser un gestionnaire de mots de passe sur votre appareil, comme la solution open source `KeePass`.
>

L'un des avantages d'utiliser `PuTTY` est la possibilité d'enregistrer différentes connexions sous forme de « sessions ». Retrouvez plus d'informations ci-dessous dans la section « [Gestion de plusieurs clés SSH sur votre appareil local](#puttykeys) ».

Pour en savoir plus sur les connexions SSH, consultez les guides de [premiers pas](#getstarted) » et notre introduction au [protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

### Ajouter des clés SSH à votre serveur <a name="addserverkey"></a>

#### Transfert de clés publiques créées sur des systèmes basés sur GNU/Linux, MacOS ou BSD

Si vous avez créé vos paires de clés SSH sur un système basé sur GNU/Linux, MacOS ou BSD, vous pouvez utiliser la commande `ssh-copy-id` pour ajouter les clés publiques à votre serveur.

L'utilitaire `ssh-copy-id` copie les clés publiques dans le fichier `~/.ssh/authorized_keys` sur le serveur distant spécifié et crée automatiquement le fichier dans ce répertoire si nécessaire.

```bash
ssh-copy-id user@IP_ADDRESS
```

Par défaut, `ssh-copy-id` tentera de transférer toutes les clés publiques dans le répertoire `~/.ssh` de votre utilisateur local. Cependant, si vous n'avez besoin d'ajouter qu'une seule clé publique, vous pouvez spécifier ce fichier de clé avec l'option `-i` suivie du chemin du fichier :

```bash
ssh-copy-id -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Exemple :

```bash
ssh-copy-id -i ~/.ssh/VPS_rsa.pub ubuntu@203.0.113.100
```

Le mot de passe de l'utilisateur vous sera demandé. vous recevrez un message comme ci-dessous.

```console
Number of key(s) added: 1

Now try logging into the machine, with: "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Si un message d'erreur apparait, vous pouvez ajouter vos clés publiques manuellement en suivant les étapes ci-dessous.

> [!primary]
>
> Pour des raisons de sécurité et de praticité, une paire de clés ne doit pas être utilisée par plusieurs utilisateurs. Puisque chaque utilisateur sur les systèmes GNU/Linux a son propre fichier `authorized_keys` dans `~/.ssh/`, vous pouvez utiliser la commande `ssh-copy-id` comme indiqué ci-dessus et adapter `KeyFileName` et `user` après avoir [créé la paire de clés](#openssh).
>

#### Ajout manuel de clés publiques à un serveur

[Connectez-vous](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) à votre serveur et assurez-vous que vous vous trouvez dans le répertoire `$HOME` de votre utilisateur. S'il n'existe pas déjà, créez le dossier `.ssh` :

```bash
mkdir ~/.ssh
```

Pour stocker la clé pour l'utilisateur actuel, ouvrez (ou créez) le fichier `authorized_keys` avec votre éditeur de texte préféré (`nano` est utilisé dans cet exemple) :

```bash
nano ~/.ssh/authorized_keys
```

Collez votre [**clé publique**](#publickey) dans ce fichier. Enregistrez le fichier et quittez l’éditeur. Redémarrez votre serveur (`sudo reboot`) ou redémarrez uniquement le service OpenSSH avec l'une des commandes suivantes (la commande appropriée peut varier en fonction de votre système d'exploitation) :

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
ssh ubuntu@203.0.113.100
```

#### Ajouter des clés publiques supplémentaires à votre serveur

Pour ajouter des clés SSH pour d'autres utilisateurs accédant à votre serveur, répétez les étapes de création de clé mais utilisez le dossier `$HOME` approprié ou le répertoire de **Windows** `Users` de l'utilisateur en question pour créer et stocker les clés SSH (ou exécuter les commandes sur le périphérique dédié de cette personne). Ajoutez ensuite la nouvelle clé publique au serveur dans `authorized_keys`, comme décrit ci-dessus.

#### Suppression des clés publiques de votre serveur

Ouvrez le fichier `authorized_keys` (comme [décrit ci-dessus](#addserverkey)) et supprimez la chaîne de clé correspondant à l'utilisateur dont l'accès doit être révoqué.

Enregistrez le fichier et quittez l’éditeur.

### Gestion de plusieurs clés SSH sur votre équipement local <a name="multiplekeys"></a>

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants. Si vous utilisez `PuTTY`, passez à [la section correspondante](#puttykeys) ci-dessous.

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
ssh -i ~/.ssh/myVPS_rsa ubuntu@203.0.113.100
```

Comme indiqué dans les sections précédentes, les mêmes instructions fonctionneront sur un client **Windows**. Remplacez uniquement `~/` par le chemin d'accès de votre dossier utilisateur **Windows**, par défaut `C:\Users\WindowsUsername\`. Par exemple : `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@203.0.113.100`.

#### Utilisation du fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois consiste à modifier un fichier nommé `config` dans le dossier `~/.ssh` (`\Users\Username\.ssh` pour **Windows**). Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe dans `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez d'abord de créer une copie de sauvegarde de l'original.

Exemple de contenu de dossier `.ssh` :

```bash
ls ~/.ssh/
```

```console
config  id_rsa  id_rsa.pub  known_hosts  known_hosts.old
```

Le fichier de `config` permet de stocker plusieurs connexions SSH ainsi que leurs paramètres individuels en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car il est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs de manière régulière.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à un VPS.<br>
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa
```

Vous pourrez ensuite vous connecter au VPS avec le nom d'alias que vous avez défini comme `Host` :

```bash
ssh ubuntu@vps
```

Seuls l'IP du serveur et le fichier de clé ont été spécifiés dans l'exemple précédent mais des détails supplémentaires peuvent être ajoutés. Pour configurer une connexion SSH à un second serveur avec le nom d'utilisateur « rocky », le [port SSH modifié](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps#changesshport) « 49160 » et la clé privée dans le fichier « myserver_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Vous pourrez ensuite vous connecter à ce serveur en renseignant :

```bash
ssh dedicated_server
```

Vous pouvez consulter [la page `man` correspondante](https://manpages.org/ssh_config/5){.external} pour plus d'informations.

#### Utilisation de PuTTY <a name="puttykeys"></a>

Si vous avez suivi les instructions des sections « [Création d'une paire de clés SSH avec `PuTTY`](#useputty) » et « [Ajout de clés SSH à votre serveur](#addserverkey) », vous disposez d'une paire de clés permettant de vous connecter à votre serveur. 

`PuTTY` peut enregistrer les informations d'identification et les paramètres d'une connexion SSH en tant que `Session`. Cela vous permet également de vous connecter à différents serveurs à l'aide de clés individuelles.

Ouvrez `PuTTY` et dépliez la sous-section `SSH` dans le menu de gauche puis cliquez sur `Auth` et `Credentials`.

![clé PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Cliquez sur le bouton `Browse`{.action} et sélectionnez le fichier de clé privée `PuTTY` (`keyfile.ppk`) dans le dossier où vous l'avez enregistré.

Le fichier de clé est maintenant associé à la session SSH en cours. Basculez sur `Session` dans le menu de gauche et renseignez vos identifiants de [connexion au serveur](#getstarted) (`username@IPv4_address`).

Entrez un nom pour cette connexion sous `Saved Sessions` et cliquez sur `Save`{.action} pour l'ajouter à la liste.

![clé PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Dès à présent, vous pouvez cliquer sur cet élément de `Session` et ouvrir une connexion à votre serveur. Pour le tester, cliquez sur `Open`{.action}. Si vous avez protégé le fichier de clé avec une phrase secrète, saisissez-la à ce stade.

Pour configurer une autre connexion au serveur, répétez les étapes suivantes :

- [Créez la paire de clés](#useputty).
- [Ajoutez la clé publique à votre serveur](#addserverkey).
- [Renseignez les détails du serveur et ajoutez le fichier de clé dans `PuTTY`](#puttykeys).


## Aller plus loin <a name="gofurther"></a>

[Introduction au protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Mode rescue sur serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Mode Rescue sur VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
