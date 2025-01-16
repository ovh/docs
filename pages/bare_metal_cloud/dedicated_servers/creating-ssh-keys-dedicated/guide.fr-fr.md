---
title: "Comment créer et utiliser des clés d'authentification pour les connexions SSH aux serveurs OVHcloud"
excerpt: "Découvrez comment créer des paires de clés pour OpenSSH sur votre appareil local et comment les utiliser pour établir des connexions sécurisées à votre serveur dédié ou votre VPS"
updated: 2025-01-06
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Le protocole SSH permet d'établir un canal de communication sécurisé sur les réseaux publics dans une architecture client-serveur. Des paires de clés peuvent être utilisées pour authentifier ces connexions SSH entre deux hôtes approuvés, par exemple un ordinateur de bureau et un serveur distant.

Un jeu de clés se compose d'une clé publique qui peut être partagée et d'une clé privée qui reste secrète. Placée sur un serveur, la clé publique permet à tout client disposant de la clé privée correspondante de s'y connecter sans avoir à entrer de mot de passe.

Cette méthode de communication est généralement le meilleur compromis entre la sécurité et la commodité.

**Découvrez comment créer et gérer des paires de clés d'authentification sur votre appareil local et les utiliser pour se connecter à des serveurs distants.**

## Prérequis

- Disposer d'un [serveur dédié](/links/bare-metal/bare-metal) ou d'un [VPS](/links/bare-metal/vps) sur votre compte OVHcloud
- Une application de connexion à distance compatible avec le protocole OpenSSH

> [!primary]
> Ce guide ne s'applique pas aux connexions aux systèmes d'exploitation **Windows Server** standard, car ils s'appuient par défaut sur le `Remote Desktop Protocol` (RDP). Les connexions SSH sont cependant utilisées pour le mode rescue d’OVHcloud.
>
> Retrouvez plus d’informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## En pratique

<a name="getstarted"></a>

N’oubliez pas de consulter nos guides « Premiers pas » :

- pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) ;
- pour un [serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco) ;
- pour un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Création de paires de clés pour les connexions OpenSSH

Les instructions suivantes expliquent comment créer et gérer des paires de clés pour les connexions à distance avec **OpenSSH** en **ligne de commande**. La plupart des systèmes d'exploitation actuels incluent cette fonctionnalité sans avoir besoin d'installer un logiciel supplémentaire.

Si vous préférez une interface utilisateur graphique, il existe de nombreuses applications logicielles pour chaque type de système d'exploitation qui vous permettent de vous connecter à des hôtes distants via le protocole OpenSSH.

Par exemple, [PuTTY](https://putty.org/) est un logiciel client SSH open source doté de nombreuses fonctionnalités utiles. Découvrez comment l’utiliser pour les connexions aux serveurs OVHcloud dans notre tutoriel détaillé :

- [Comment utiliser PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

> [!primary]
>
> Si vous recevez des messages d'erreur lors d'une tentative de connexion, vérifiez que les paramètres et les informations de connexion utilisés sont corrects ainsi que votre système et les applications installées sont correctement mis à jour. Si vous recevez un message d’avertissement du type `REMOTE HOST IDENTIFICATION HAS CHANGED`, consultez notre [guide d’introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configuration des paires de clés depuis une distribution GNU/Linux ou macOS

/// details | Dépliez cette section

Ouvrez l'application en ligne de commande (`Terminal`) sur votre périphérique local.

Vérifiez que vous avez un dossier nommé `.ssh` dans votre répertoire `$HOME`. Si le dossier n'existe pas, créez-le :

```bash
mkdir ~/.ssh
```

Utilisez la commande `ssh-keygen` pour créer une paire de clés. L'option `-t` permet de spécifier la méthode de cryptage.

> [!primary]
>
> `Ed25519` est considéré comme la méthode la plus sûre mais `RSA` est une alternative valable. Les deux sont compatibles avec l’espace client OVHcloud si vous souhaitez [stocker les clés publiques dans votre compte client](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Exemples :

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

L'invite suivante permet de nommer la clé nouvellement créée ou d'utiliser le nom de fichier standard :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Si vous confirmez avec `Entrée`{.action} sans entrer de nom, le nom de fichier standard sera utilisé (`id_rsa` dans cet exemple).

Si vous prévoyez d'utiliser plusieurs paires de clés à l'avenir, entrez un nom de fichier individuel pour identifier la clé. Vous trouverez plus d'informations à ce sujet ci-dessous dans la section **Gérer plusieurs clés d'authentification sur votre périphérique local**.

Les exemples de sorties ci-dessous continueront à utiliser les noms de fichiers `id_rsa` et `id_rsa.pub` à des fins d'illustration.

Vous pouvez protéger votre clé SSH avec une phrase secrète à l'invite suivante. Ceci est recommandé pour plus de sécurité.

> [!warning]
>
> Lors de l'utilisation de clés d'authentification, l'accès à distance à votre serveur est aussi sécurisé que le périphérique client stockant la clé privée. Il est donc primordial de protéger votre appareil et les fichiers clés qu’il contient contre tout accès non autorisé.
>
> Pour plus de commodité et de sécurité, stockez les phrases secrètes dans un gestionnaire de mots de passe sur votre appareil, comme la solution open source **KeePass**.
>

Toutes les clés SSH sont stockées dans le répertoire `.ssh` par défaut. Les fichiers de clé publique auront `.pub` ajouté au nom de fichier.

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

Afin d'afficher et d'exporter votre clé publique, utilisez la commande `cat` sur votre fichier de clé `.pub` ou ouvrez-le avec un éditeur de texte.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Copiez cette chaîne de clé pour [l'ajouter à un nouveau serveur](#getstarted) ou pour [l'importer dans votre espace client](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> Dans un terminal **macOS**, vous pouvez utiliser les commandes `pbcopy` et `pbpaste` pour gérer des chaînes de clés plus rapidement. Par exemple, utilisez cette commande pour copier la clé du fichier `id_rsa.pub` dans le presse-papiers :
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gérer plusieurs clés d'authentification sur votre périphérique local

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants ou périphériques de réseau local.

Comme tous les fichiers clés doivent être placés dans le dossier `.ssh` du répertoire `home` de votre utilisateur, les noms des fichiers doivent être différents. Lorsque vous créez une nouvelle paire de clés et qu'un nom de fichier vous est demandé, entrez le nom de votre choix, par exemple le nom de votre serveur.

Exemple de sortie :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Lors de la connexion au serveur correspondant, spécifiez le nom du fichier de clé privée en plus des détails de l'utilisateur et du serveur de connexion :

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Exemple :

```bash
ssh -i ~/.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Utilisation du fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois est d'éditer un fichier nommé `config` à l'intérieur du dossier `~/.ssh`. Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe à l'intérieur de `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez de créer d'abord une copie de sauvegarde de l'original.

Exemple de sortie de listage du contenu du dossier `.ssh` :

```bash
ls ~/.ssh/
```

```console
config	id_rsa	id_rsa.pub	known_hosts	 known_hosts.old
```

Le fichier `config` permet de stocker plusieurs connexions SSH ainsi que leurs paramètres individuels, en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car elle est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à un serveur.  
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Veillez à utiliser l'adresse IP et le nom de fichier de clé corrects. La première ligne, commençant par `Host`, définit le nom de cette connexion (`dedicated_server` dans cet exemple).

Vous pouvez ensuite vous connecter au serveur en remplaçant l'adresse IP du serveur par le nom d'alias identifiant cette connexion (`Host`) :

```bash
ssh username@connection_name
```

Exemple :

```bash
ssh ubuntu@dedicated_server
```

Seules l'IP du serveur et le fichier de clé ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés.  
Pour configurer une connexion SSH à un second hôte distant avec le nom d'utilisateur « rocky », le port SSH modifié « 49160 » et la clé privée dans le fichier « myVPS_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myVPS_rsa
```

Vous pourrez ensuite vous connecter à ce second host en renseignant :

```bash
ssh vps
```

Pour plus d'informations sur le fichier `config`, consultez la [page `man` correspondante](https://manpages.org/ssh_config/5).

///


#### Comment configurer des paires de clés sur un appareil Windows

/// details | Dépliez cette section

Ouvrez l'application Invite de commandes en tapant « cmd » dans la barre de recherche (ou ouvrez PowerShell à partir du menu « Démarrer »).

Ouvrez le répertoire `.ssh` de votre compte utilisateur Windows actif (chemin par défaut : `C:\Users\WindowsUsername\.ssh`) :

```bash
cd .ssh
```

Utilisez la commande `ssh-keygen` pour créer une paire de clés. L'option `-t` vous permet de spécifier la méthode de cryptage.

> [!primary]
>
> `Ed25519` est considéré comme la méthode la plus sûre mais `RSA` est une alternative valable. Les deux sont compatibles avec l’espace client OVHcloud si vous souhaitez [stocker les clés publiques dans votre compte client](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Exemples :

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

L'invite suivante permet de nommer la clé nouvellement créée ou d'utiliser le nom de fichier standard :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Si vous confirmez avec la touche `Entrée`{.action} sans saisir de nom, le nom de fichier standard sera utilisé (`id_rsa` dans cet exemple).

Si vous prévoyez d'utiliser plusieurs paires de clés à l'avenir, entrez un nom de fichier individuel pour identifier la clé. Vous trouverez plus d'informations à ce sujet ci-dessous dans la section **Gérer plusieurs clés d'authentification sur votre périphérique local**.

Les exemples de sorties ci-dessous continueront à utiliser les noms de fichiers `id_rsa` et `id_rsa.pub` à des fins d'illustration.

Vous pouvez protéger votre clé SSH avec une phrase secrète à l'invite suivante. Ceci est recommandé pour plus de sécurité.

> [!warning]
>
> Lors de l'utilisation de clés d'authentification, l'accès à distance à votre serveur est aussi sécurisé que le périphérique client stockant la clé privée. Il est donc primordial de protéger votre appareil et les fichiers clés qu’il contient contre tout accès non autorisé.
>
> Pour plus de commodité et de sécurité, stockez les phrases secrètes dans un gestionnaire de mots de passe sur votre poste de travail, comme la solution open source **KeePass**.
>

Toutes les clés SSH sont stockées dans le répertoire `.ssh` par défaut. Les fichiers de clé publique auront `.pub` ajouté au nom de fichier.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
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

Vous pouvez ouvrir le fichier de touches à l'aide d'un éditeur de texte (Notepad, Notepad++, etc.). Depuis l'Explorateur de fichiers Windows, faites un clic droit sur le fichier et sélectionnez « Ouvrir avec ».  
Vous pouvez également utiliser l'une des commandes suivantes (dans le répertoire `\Users\WindowsUsername\.ssh`) :

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copiez cette chaîne de clé pour [l'ajouter à un nouveau serveur](#getstarted) ou pour [l'importer dans votre espace client](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> **Utilisation du Presse-papiers**
>
> Lorsque vous travaillez à partir d'une ligne de commande **Windows**, utilisez le clic droit pour **coller** le contenu du Presse-papiers dans la fenêtre de ligne de commande. Pour **copier** une chaîne à partir de la fenêtre de ligne de commande, mettez-la en surbrillance, puis appuyez sur `Entrée`{.action}. Vous pouvez également retrouver ces fonctions via un clic droit sur la barre de menu de la fenêtre de ligne de commande.
>

#### Gérer plusieurs clés d’authentification sur votre périphérique local

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants ou périphériques de réseau local.

Comme tous les fichiers clés doivent être placés dans le dossier `.ssh` de votre répertoire d'utilisateurs Windows, les noms de fichiers doivent être différents. Lorsque vous créez une nouvelle paire de clés et qu'un nom de fichier vous est demandé, entrez un nom de votre choix, par exemple le nom de votre serveur.

Exemple de sortie :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Lors de la connexion au serveur correspondant, spécifiez le nom du fichier de clé privée en plus des détails de l'utilisateur et du serveur de connexion :

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Exemple :

```bash
ssh -i C:\Users\Username\.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Utilisation du fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois est d'éditer un fichier nommé `config` à l'intérieur du dossier `C:\Users\Username\.ssh`. Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe à l'intérieur de `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez de créer d'abord une copie de sauvegarde de l'original.

Exemple de sortie de listage du contenu du dossier `.ssh` :

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts	
known_hosts.old
```

Le fichier `config` permet de stocker plusieurs connexions SSH ainsi que leurs paramètres individuels, en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car elle est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à un serveur.
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Veillez à utiliser l'adresse IP et le nom de fichier de clé corrects. La première ligne, commençant par `Host`, définit le nom de cette connexion (`dedicated_server` dans cet exemple).

Connectez-vous ensuite au serveur en remplaçant l'adresse IP du serveur par le nom d'alias identifiant cette connexion (`Host`) :

```bash
ssh username@connection_name
```

Exemple :

```bash
ssh ubuntu@dedicated_server
```

Seules l'IP du serveur et le fichier de clé ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés.  
Pour configurer une connexion SSH à un second hôte distant avec le nom d'utilisateur « rocky », le port SSH modifié « 49160 » et la clé privée dans le fichier « myVPS_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myVPS_rsa
```

Vous pourrez ensuite vous connecter à ce second host en renseignant :

```bash
ssh vps
```

Pour plus d'informations sur le fichier `config`, consultez la [page `man` correspondante](https://manpages.org/ssh_config/5).

///


#### Ajout de clés publiques supplémentaires à votre serveur

Pour ajouter une authentification par clé pour d'autres utilisateurs accédant à votre serveur, créez une nouvelle paire de clés mais utilisez le dossier `$HOME` approprié ou **Windows** `Users` de l'utilisateur en question pour stocker les clés d'authentification (ou exécuter les commandes sur le périphérique dédié de cette personne).  
Ajoutez ensuite la nouvelle chaîne de clé publique au serveur dans le fichier `authorized_keys` comme décrit ci-dessus.

#### Suppression des clés publiques de votre serveur

Ouvrez le fichier `authorized_keys` sur votre serveur comme décrit ci-dessus, puis supprimez la chaîne de clé qui correspond au compte d'utilisateur dont l'accès est révoqué.

<a name="gofurther"></a>

## Aller plus loin

[Introduction au protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Mode rescue sur serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Mode Rescue sur VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
