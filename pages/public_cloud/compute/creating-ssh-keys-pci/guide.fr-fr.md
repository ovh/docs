---
title: "Comment créer et utiliser des clés d'authentification pour les connexions SSH aux instances Public Cloud"
excerpt: "Découvrez comment créer des paires de clés pour OpenSSH sur votre périphérique local et les utiliser pour établir des connexions sécurisées à votre instance"
updated: 2024-12-09
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

Le protocole SSH permet un canal de communication sécurisé sur les réseaux publics dans une architecture client-serveur. Des paires de clés peuvent être utilisées pour authentifier ces connexions SSH entre deux hôtes approuvés, par exemple un ordinateur de bureau et un serveur distant.

Un jeu de clés se compose d'une clé publique qui peut être partagée et d'une clé privée qui reste secrète. Placée sur un serveur, la clé publique permet à tout client disposant de la clé privée correspondante de s'y connecter sans avoir à entrer de mot de passe.

Cette méthode est généralement le meilleur compromis entre la sécurité et la commodité et la valeur par défaut pour les instances Public Cloud.

**Ce guide explique comment créer et gérer des paires de clés d'authentification sur votre périphérique local et les utiliser pour se connecter à des instances Public Cloud.**

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Une application de connexion à distance compatible avec le protocole OpenSSH

> [!primary]
> Ce guide ne s'applique pas aux connexions aux systèmes d'exploitation **Windows Server** standard, car ils s'appuient par défaut sur le `Remote Desktop Protocol` (RDP).
>
> Retrouvez plus d’informations dans notre [guide sur la création d’une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## En pratique

### Création de paires de clés pour les connexions OpenSSH

Les instructions suivantes expliquent comment créer et gérer des paires de clés pour les connexions à distance avec **OpenSSH** à partir de la **ligne de commande**. La plupart des systèmes d'exploitation actuels incluent cette fonctionnalité sans avoir besoin d'installer un logiciel supplémentaire.

Si vous préférez une interface utilisateur graphique, vous pouvez trouver de nombreuses applications logicielles pour chaque type de système d'exploitation qui vous permettent de vous connecter à des hôtes distants via le protocole OpenSSH.

Par exemple, [PuTTY](https://putty.org/) est un logiciel client SSH open source doté de nombreuses fonctionnalités utiles. Découvrez comment l’utiliser pour les connexions aux serveurs et instances OVHcloud dans notre tutoriel détaillé :

- [Comment utiliser PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

> [!primary]
>
> Si vous recevez des messages d'erreur lors d'une tentative de connexion, vérifiez que vous utilisez les paramètres et les informations de connexion corrects et que votre système et les applications installées sont correctement mis à jour. Si vous recevez un message d’avertissement du type `REMOTE HOST IDENTIFICATION HAS CHANGED`, consultez notre [guide d’introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configuration des paires de clés depuis une distribution GNU/Linux ou macOS

/// details | Dépliez cette section

Ouvrez l'application en ligne de commande (`Terminal`) sur votre périphérique local.

Vérifiez que vous avez un dossier nommé `.ssh` dans votre répertoire `$HOME`. Si le dossier n'existe pas, créez-le :

```bash
mkdir ~/.ssh
```

Utilisez la commande `ssh-keygen` pour créer une paire de clés. L'option `-t` vous permet de spécifier la méthode de cryptage.

> [!primary]
>
> `Ed25519` est considéré comme le plus sûr mais `RSA` est une alternative valable. Les deux méthodes sont compatibles avec l'[espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

Exemples :

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

L'invite de commande suivante permet de nommer la clé nouvellement créée ou d'utiliser le nom de fichier standard :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Si vous confirmez avec  le bouton `Entrée`{.action} sans saisir de nom, le nom de fichier standard sera utilisé (`id_rsa` dans cet exemple).

Si vous prévoyez d'utiliser plusieurs paires de clés à l'avenir, entrez un nom de fichier individuel pour identifier la clé. Vous trouverez plus d'informations à ce sujet ci-dessous dans la section **Gestion de plusieurs clés d'authentification sur votre périphérique local**.

Les exemples de sorties ci-dessous continueront à utiliser les noms de fichiers `id_rsa` et `id_rsa.pub` à des fins d'illustration.

Vous pouvez protéger votre clé SSH avec une phrase secrète à l'invite suivante. Ceci est recommandé pour plus de sécurité.

> [!warning]
>
> L'accès distant à votre instance est aussi sécurisé que le périphérique client stockant la clé privée. Il est donc crucial de protéger votre appareil et les fichiers clés qu’il contient contre tout accès non autorisé.
>
> Pour plus de commodité et de sécurité, stockez les phrases secrètes dans un gestionnaire de mots de passe sur votre poste de travail, comme la solution open source **KeePass**.
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

Copiez cette chaîne de clé pour [l'ajouter à une nouvelle instance ou l'importer dans votre espace client](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> Dans un terminal **macOS**, vous pouvez utiliser les commandes `pbcopy` et `pbpaste` pour gérer des chaînes de clés plus rapidement. Par exemple, utilisez cette commande pour copier la clé du fichier `id_rsa.pub` dans le presse-papiers :
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gestion de plusieurs clés d’authentification sur votre périphérique local

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants ou périphériques de réseau local.

Comme tous les fichiers clés doivent être placés dans le dossier `.ssh` du répertoire `home` de votre utilisateur, les noms de fichiers doivent être différents. Lorsque vous créez une nouvelle paire de clés et qu'un nom de fichier vous est demandé, entrez un nom de votre choix, par exemple le nom de votre instance.

Exemple de sortie :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Lors de la connexion à l'instance correspondante, spécifiez le nom du fichier de clé privée en plus des détails de l'utilisateur et du serveur de connexion :

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Exemple :

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Utilisation du fichier « config »

L'alternative à l'ajout de l'option `-i` à chaque fois est d'éditer un fichier nommé `config` à l'intérieur du dossier `~/.ssh`. Il permet de configurer les détails des différentes connexions (nom d'utilisateur, port, fichier de clé, paramètres optionnels, etc.)

Si ce fichier existe à l'intérieur de `.ssh`, il contient probablement déjà des informations. En fonction de votre environnement de travail, envisagez de créer d'abord une copie de sauvegarde de l'original.

Exemple de sortie d'affichage du contenu du dossier `.ssh` :

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Le fichier `config` permet de stocker plusieurs connexions SSH ainsi que leurs paramètres individuels, en plus des valeurs standard. L’exploitation de tout le potentiel de ce fichier peut devenir complexe, car il est particulièrement utile pour les utilisateurs expérimentés qui gèrent plusieurs serveurs.

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à une instance.
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Veillez à utiliser l'adresse IP et le nom de fichier de clé corrects. La première ligne, commençant par `Host`, définit le nom de cette connexion (`instance` dans cet exemple).

Vous pouvez ensuite vous connecter à l'instance en remplaçant l'adresse IP de l'instance par le nom d'alias identifiant cette connexion (`Host`) :

```bash
ssh username@connection_name
```

Exemple :

```bash
ssh ubuntu@instance
```

Seuls l'IP de l'instance et le fichier de clé ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés.  
Pour configurer une connexion SSH à un second hôte distant avec le nom d'utilisateur « rocky », le port SSH modifié « 49160 » et la clé privée dans le fichier « myserver_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

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

Vous pourrez ensuite vous connecter à ce second host en renseignant :

```bash
ssh myserver
```

Pour plus d'informations sur le fichier `config`, consultez la [page `man` correspondante](https://manpages.org/ssh_config/5).

///


#### Configuration des paires de clés depuis un périphérique Windows

/// details | Dépliez cette section

Ouvrez l'application `Invite de commandes` en tapant « cmd » dans la barre de recherche (ou ouvrez PowerShell à partir du menu `Démarrer`{.action}).

Ouvrez le répertoire `.ssh` de votre compte utilisateur Windows actif (chemin par défaut : `C:\Users\WindowsUsername\.ssh`) :

```bash
cd .ssh
```

Utilisez la commande `ssh-keygen` pour créer une paire de clés. L'option `-t` vous permet de spécifier la méthode de cryptage.

> [!primary]
>
> `Ed25519` est considéré comme le plus sûr mais `RSA` est une alternative valable. Les deux méthodes sont compatibles avec l'[espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

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

Si vous prévoyez d'utiliser plusieurs paires de clés à l'avenir, entrez un nom de fichier individuel pour identifier la clé. Vous trouverez plus d'informations à ce sujet ci-dessous dans la section **Gestion de plusieurs clés d'authentification sur votre périphérique local**.

Les exemples de sorties ci-dessous continueront à utiliser les noms de fichiers `id_rsa` et `id_rsa.pub` à des fins d'illustration.

Vous pouvez protéger votre clé SSH avec une phrase secrète à l'invite suivante. Ceci est recommandé pour plus de sécurité.

> [!warning]
>
> L'accès distant à votre instance est aussi sécurisé que le périphérique client stockant la clé privée. Il est donc crucial de protéger votre appareil et les fichiers clés qu’il contient contre tout accès non autorisé.
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

Vous pouvez ouvrir le fichier de clés à l'aide d'un éditeur de texte (Notepad, Notepad++, etc.). Depuis l'explorateur de fichiers Windows, faites un clic droit sur le fichier et sélectionnez `Ouvrir avec`{.action}.

Vous pouvez également utiliser l'une des commandes suivantes (dans le répertoire `\Users\WindowsUsername\.ssh`) :

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copiez cette chaîne de clé pour [l'ajouter à une nouvelle instance ou l'importer dans votre espace client](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> **Utilisation du Presse-papiers**
>
> Lorsque vous travaillez à partir d'une ligne de commande **Windows**, vous pouvez utiliser un clic droit pour **coller** le contenu du Presse-papiers dans la fenêtre de ligne de commande. Pour **copier** une chaîne à partir de la fenêtre de ligne de commande, mettez-la en surbrillance, puis appuyez sur `Entrée`{.action}. Vous pouvez également retrouver ces fonctions via un clic droit sur la barre de menu de la fenêtre de ligne de commande.
>

#### Gestion de plusieurs clés d’authentification sur votre périphérique local

Vous pouvez utiliser plusieurs paires de clés SSH pour vous connecter à différents hôtes distants ou périphériques de réseau local.

Comme tous les fichiers clés doivent être placés dans le dossier `.ssh` de votre répertoire d'utilisateurs Windows, les noms de fichiers doivent être différents. Lorsque vous créez une nouvelle paire de clés et qu'un nom de fichier vous est demandé, saisissez le nom de votre choix, par exemple le nom de votre instance.

Exemple de sortie :

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Lors de la connexion à l'instance correspondante, spécifiez le nom du fichier de clé privée en plus des détails de l'utilisateur et du serveur de connexion :

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Exemple :

```bash
ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100
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

Voici un exemple simple pour vous expliquer comment configurer une connexion SSH à une instance.
Ouvrez le fichier et ajoutez les lignes suivantes en haut :

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Veillez à utiliser l'adresse IP et le nom de fichier de clé corrects. La première ligne, commençant par `Host`, définit le nom de cette connexion (`instance` dans cet exemple).

Vous pouvez ensuite vous connecter à l'instance en remplaçant l'adresse IP de l'instance par le nom d'alias identifiant cette connexion (`Host`) :

```bash
ssh username@connection_name
```

Exemple :

```bash
ssh ubuntu@instance
```

Seules l'IP de l'instance et le fichier de clé privée ont été spécifiés dans l'exemple précédent, mais des détails supplémentaires peuvent être ajoutés.

Pour configurer une connexion SSH à un second hôte distant avec le nom d'utilisateur « rocky », le port SSH modifié « 49160 » et la clé privée dans le fichier « myserver_rsa », étendez le contenu du fichier comme indiqué dans cet exemple :

```console
Host instance
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myserver_rsa
```

Vous pourrez ensuite vous connecter à ce second host en renseignant :

```bash
ssh myserver
```

Pour plus d'informations sur le fichier `config`, consultez la [page `man` correspondante](https://manpages.org/ssh_config/5).

///


### Ajout de clés publiques supplémentaires à une instance en cours d'exécution

Pour ajouter des clés SSH pour d'autres utilisateurs accédant à votre instance, répétez les étapes de création de clé mais utilisez le dossier `$HOME` approprié ou le répertoire Windows `Users` de l'utilisateur en question pour créer et stocker les clés SSH (ou exécuter les commandes sur le périphérique dédié de cette personne).

Consultez notre [guide spécifique](/pages/public_cloud/compute/configuring_additional_ssh_keys) pour une explication détaillée de ces étapes.

## Aller plus loin

[Comment créer une instance Public Cloud et s'y connecter](/pages/public_cloud/compute/public-cloud-first-steps)

[Comment bien débuter avec les connexions SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Comment configurer des clés SSH supplémentaires sur une instance](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).