---
title: "Tutoriel - Comment utiliser PuTTY pour les connexions SSH et l'authentification"
excerpt: "Découvrez comment accéder à votre serveur cloud ou à votre hébergement web et gérer les clés SSH avec le logiciel client SSH PuTTY"
updated: 2024-11-11
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

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) est un logiciel client SSH open source avec une interface utilisateur graphique. Il a été développé pour Windows mais est également disponible pour d'autres systèmes d'exploitation et comprend des fonctionnalités utiles, comme la gestion des clés SSH.

**Ce tutoriel explique comment utiliser PuTTY pour sécuriser les connexions à votre service OVHcloud via le protocole SSH.**

## Prérequis

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) installé sur votre équipement local
- Des connaissances de base du [protocole SSH et de son utilisation](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)
- Être connecté à l’[espace client OVHcloud](/links/manager)

> [!warning]
> OVHcloud fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Ce tutoriel va illustrer comment utiliser les solutions OVHcloud avec des outils externes. Vous devrez peut-être adapter certaines instructions spécifiques au système d'exploitation de votre poste de travail local ou de votre serveur.
>
> Nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou [notre communauté](/links/community) si vous rencontrez des difficultés.
>

## En pratique

### Présentation du contenu

- [Installation de PuTTY](#installation)
- [Connexions SSH avec nom d'utilisateur et mot de passe](#sshconnect1)
    - [Hébergement mutualisé](#webhosting)
    - [Serveur dédié ou VPS](#cloudserver)
- [Connexions SSH avec nom d'utilisateur et authentification par clé SSH](#sshconnect2)
    - [Création de clés SSH avec PuTTY](#puttygen)
    - [Transfert des clés SSH publiques vers votre serveur](#transferkeys)
    - [Connexion à votre serveur](#puttykeys)
    - [Gestion des clés SSH privées sur un périphérique local (PuTTY authentication agent)](#pageant)
- [Utilisation des sessions de connexion PuTTY](#sessions)
- [Exemple d’utilisation : Comment utiliser les outils PuTTY pour configurer des connexions sécurisées aux serveurs OVHcloud (VPS, serveur dédié, instance Public Cloud)](#example)

<a name="installation"></a>

### Installation de PuTTY

Téléchargez la dernière version du client PuTTY depuis le [site officiel](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) et installez-la sur votre système (ou décompressez les fichiers exécutables). Les versions portées de PuTTY peuvent également être disponibles via votre gestionnaire de paquets ou [Homebrew](https://brew.sh/).

Le package d'installation standard recommandé comprend plusieurs applications qui améliorent les fonctionnalités de PuTTY, notamment pour les transferts de fichiers (`psftp`, `pscp`, non couverts dans ce tutoriel) et la gestion des clés SSH (`PuTTYgen`, `Pageant`, requis pour les parties correspondantes ci-dessous).

> [!primary]
> Les instructions suivantes sont basées sur un système d'exploitation Windows. Les fonctionnalités du logiciel PuTTY elles-mêmes doivent être similaires sur tous les systèmes d'exploitation. Cependant, si vous n'utilisez pas PuTTY sur un poste Windows, vous devrez peut-être consulter la documentation de votre système d'exploitation ou la [FAQ officielle](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html) et la [documentation](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html) de PuTTY.
>

> [!success]
> Vous pouvez avoir plusieurs instances de PuTTY et de ses outils compagnons ouvertes simultanément. Par exemple, vous pouvez ouvrir une fenêtre pour suivre les étapes du didacticiel et une deuxième pour tester les connexions.
>

<a name="sshconnect1"></a>

### Connexions SSH avec PuTTY - Nom d'utilisateur et mot de passe

Cette section explique comment établir une première connexion SSH aux services OVHcloud suivants :

- [Espace de stockage FTP d'un hébergement web compatible SSH](/links/web/hosting-compare)
- [Serveur dédié](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

#### Hébergement web

Vous aurez besoin du nom de cluster de votre hébergement web que vous trouverez dans votre [espace client OVHcloud](/links/manager) ainsi que du nom d'utilisateur FTP et du mot de passe. Consultez [le guide correspondant](/pages/web_cloud/web_hosting/ftp_connection) si vous avez besoin de plus amples informations sur cette méthode d'accès.

/// details | Connexion à un hébergement web

Ouvrez PuTTY et renseignez les identifiants FTP de votre hébergement dans les champs prévus à cet effet.

- `Host Name (or IP address)` : **ftp_username@hosting_cluster_name** (exemple : **yourlogin@ssh.cluster042.hosting.ovh.net**)
- `Port` : 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Cliquez sur `Ouvrir`{.action}.

Lors de la première connexion, le message « PuTTY Security Alert » apparaît, vous avertissant des risques possibles. Cela n’est généralement pas gênant, tant que vous vous connectez à un hôte de confiance (comme le stockage FTP d’un hébergement web).  
Cliquez sur `Accept`{.action} pour continuer. Si vous sélectionnez `Connect Once`{.action}, l'empreinte de l'hébergement web ne sera pas enregistrée dans le cache et la fenêtre d'alerte apparaîtra lors de la prochaine connexion. Vous trouverez plus de détails dans notre [guide d'introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La fenêtre de ligne de commande (PuTTY terminal) s'ouvre et vous invite à entrer le mot de passe de connexion.

Entrez le mot de passe que vous avez [attribué à cet utilisateur](/pages/web_cloud/web_hosting/ftp_connection). Vous pouvez coller la chaîne de mot de passe dans cette fenêtre via un clic droit.

Notez qu'**une invite de mot de passe n'affichera pas vos saisies clavier** dans un terminal PuTTY. Exemple de sortie :

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

Consultez notre guide « [Accès SSH pour les hébergements web OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting) » pour connaître les actions possibles sur l'espace de stockage FTP de votre hébergement web.

PuTTY peut enregistrer les informations d'identification et les paramètres d'une connexion SSH en tant que « session ». Cela vous permet de vous connecter à des hôtes connus ou à des périphériques de réseau local sans entrer à chaque fois leurs informations respectives. Apprenez à utiliser des sessions PuTTY dans la [section ci-dessous](#sessions).

///

<a name="cloudserver"></a>

#### Serveur dédié ou VPS

Vous aurez besoin de l'adresse IP de votre serveur que vous trouverez dans votre [espace client OVHcloud](/links/manager) ainsi que du nom du compte utilisateur que vous souhaitez utiliser pour cette session de connexion. N’hésitez pas à consulter nos guides « Premiers pas » si vous souhaitez obtenir plus de détails sur ce sujet :

- [Serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Comment se connecter à un hôte distant

Ouvrez PuTTY et renseignez les identifiants de connexion dans les champs appropriés.

- `Host Name (or IP address)` : **username@IPv4_server** (example: **ubuntu@203.0.113.101**)
- `Port` : 22 (sauf si vous avez changé le numéro de port SSH de votre serveur)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Cliquez sur le bouton `Open`{.action}.

Lors de la première connexion, la fenêtre « PuTTY Security Alert » apparaît, vous avertissant des risques possibles. Ce n’est généralement pas un problème, tant que vous vous connectez à un hôte de confiance (comme votre propre serveur sécurisé).  
Cliquez sur `Accept`{.action} pour continuer. Si vous sélectionnez `Connect Once`{.action}, l'empreinte du serveur ne sera pas enregistrée dans le cache et l'alerte apparaîtra à nouveau lors de la prochaine connexion. Vous trouverez plus de détails dans notre [guide d'introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La fenêtre de ligne de commande (PuTTY terminal) s'ouvre et vous invite à entrer le mot de passe du compte utilisateur. Vous pouvez coller la chaîne de mot de passe dans cette fenêtre via un clic droit.

Notez qu'**une invite de mot de passe n'affichera pas vos saisies clavier** dans un terminal PuTTY. Exemple de sortie :

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Pour en savoir plus sur les connexions SSH, consultez notre guide d'[introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

PuTTY peut enregistrer les paramètres d'une connexion SSH en tant que « session ». Cela vous permet de vous connecter à des hôtes distants ou à des périphériques réseau locaux connus sans saisir à chaque fois leurs informations respectives. Apprenez à utiliser **sessions PuTTY** dans la [section correspondante de ce tutoriel](#sessions).

///

<a name="sshconnect2"></a>

### Connexions SSH avec PuTTY - Nom d'utilisateur et clé d'authentification (fichiers de clés SSH)

Cette partie du tutoriel explique comment utiliser SSH avec **authentification par paire de clés** en PuTTY pour vous connecter aux services OVHcloud suivants :

- [Instance Public Cloud](/links/public-cloud/public-cloud)
- [Serveur dédié](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

Vous aurez besoin de l'adresse IP de votre serveur que vous trouverez dans votre [espace client OVHcloud](/links/manager) ainsi que du nom du compte utilisateur que vous souhaitez utiliser pour cette session de connexion. N’hésitez pas à consulter nos guides « Premiers pas » si vous souhaitez obtenir plus de détails sur ce sujet :

- [Instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
- [Serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!primary]
>
> PuTTY stocke les fichiers de clé dans un format spécifique qui les rend incompatibles avec les fichiers de clé SSH créés avec le client **OpenSSH**. Si vous souhaitez utiliser une **clé privée** précédemment créée avec le client SSH en ligne de commande (par exemple pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) ou une [instance Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)), vous devrez d'abord [la convertir au format PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

#### Créer des clés SSH (PuTTY key generator)

Cette étape nécessite l'outil complémentaire **PuTTY key generator** (PuTTYgen).

/// details | Comment créer des clés SSH avec PuTTYgen

##### Étape 1 : Créer une paire de clés

Ouvrez l'application PuTTYgen et sélectionnez l'algorithme de chiffrement. Cet exemple utilise **RSA**. Entrez « 4096 » dans le champ `Number of bits in a generated key:` en bas.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Cliquez sur le bouton `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Une barre de progression s'affiche. Déplacez le curseur de la souris sur la zone située sous la barre de progression jusqu'à ce que PuTTYgen dispose de suffisamment de données aléatoires pour commencer à générer votre clé.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Vous disposez désormais d'une **paire de clés** composée de deux éléments :

- **Clé publique** : chaîne de clé qui sera stockée sur le ou les hôtes distants auxquels vous souhaitez vous connecter.
- **Clé privée** : chaîne de clé qui reste sur le périphérique local à partir duquel vous vous connectez à un (ou plusieurs) hôte(s) distant(s).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Vous pouvez éventuellement modifier le champ `Comment` avec votre propre description. Elle sera affichée par les outils PuTTY lors de l'utilisation de la clé.

##### Étape 2 : Enregistrer la clé privée

Entrez une phrase secrète pour protéger votre fichier de clé privée dans les champs `Key passphrase` et `Confirm`. La meilleure approche consiste à utiliser un gestionnaire de mots de passe pour créer et stocker un mot de passe composé de plusieurs mots (passphrase).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Cliquez sur le bouton `Enregistrer la clé privée`{.action}. Sélectionnez un dossier pour vos fichiers de clés ou créez-en un nouveau, nommé `putty_key_files` par exemple.

Renseignez un nom pour votre fichier et enregistrez-le. Vous devriez maintenant avoir un nouveau fichier **private key** avec l'extension `ppk` (*PuTTY private key*) dans votre dossier.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> L’accès aux serveurs distants est aussi sécurisé que le périphérique client stockant la clé privée. Il est donc crucial de protéger votre appareil et les fichiers clés qu’il contient contre tout accès non autorisé.
>
> Pour plus de commodité, stockez les phrases secrètes dans un gestionnaire de mots de passe sur votre appareil, comme la solution open source **KeePass**, et utilisez l'outil [Pageant](#pageant) pour les connexions basées sur des clés.
>

Le bouton `Save public key`{.action} dans l'interface PuTTYgen convertira la chaîne **public key** au format « SSH-2 standard format », puis créera un fichier contenant cette chaîne. Cependant, les chaînes de clés de ce format ne sont pas pertinentes pour ce tutoriel.

##### Étape 3 : Préparer la clé publique

L'étape suivante consiste à stocker la **clé publique** sur l'hôte distant auquel vous souhaitez vous connecter. Le format de la chaîne de clé tel qu'il est affiché dans la fenêtre PuTTYgen sous `Public key for pasting into OpenSSH authorized_keys file` est compatible avec OpenSSH. Vous aurez besoin de la chaîne de clé exacte sur une seule ligne.

> [!primary]
> Il n'est pas nécessaire de stocker la clé publique en tant que fichier car vous pouvez toujours la récupérer à partir du fichier **private key**. Pour cela, ouvrez PuTTYgen et cliquez sur le bouton `Load`{.action}. Sélectionnez votre fichier de clé `ppk` et entrez votre phrase secrète pour l'ouvrir.
>
> Vous pouvez également copier la chaîne de clé publique et la coller dans un fichier texte brut (sans interrompre la chaîne de clé par des sauts de ligne).
>

Pour continuer avec [l'étape suivante](#transferkeys), veillez à mettre en surbrillance **l'intégralité de la chaîne de clé** et copiez-la.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

#### Transfert des clés SSH publiques vers votre serveur

Les actions de cette étape dépendent du type de service que vous utilisez et si vous allez installer un nouveau système d'exploitation ou ajouter la clé à un système en cours d'utilisation.

/// details | Comment ajouter une clé SSH publique lors de l'installation ou de la réinstallation d'un OS (espace client OVHcloud)

Cliquez sur l'onglet de votre service :

> [!tabs]
> **Instance Public Cloud**
>>
>> Mettez en surbrillance et copiez **l'intégralité de la chaîne de clé publique** que vous avez [créée à l'étape précédente](#puttygen) depuis la fenêtre PuTTYgen (ouvrez d'abord le **fichier de clé privée** correspondant si nécessaire). Utilisez-la ensuite comme indiqué dans la section correspondante de notre [guide sur la création d'une instance Public Cloud dans l'espace client OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Serveur dédié**
>>
>> Mettez en surbrillance et copiez **l'intégralité de la chaîne de clé publique** que vous avez [créée à l'étape précédente](#puttygen) depuis la fenêtre PuTTYgen (ouvrez d'abord le **fichier de clé privée** correspondant si nécessaire). Renseignez ensuite celle-ci dans le champ approprié lors de l'installation. Retrouvez les détails dans notre [guide de prise en main d’un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Mettez en surbrillance et copiez **l'intégralité de la chaîne de clé publique** que vous avez [créée à l'étape précédente](#puttygen) depuis la fenêtre PuTTYgen (ouvrez d'abord le **fichier de clé privée** correspondant si nécessaire). Renseignez ensuite celle-ci dans le champ approprié lors de l'installation. Retrouvez les détails dans notre [guide de démarrage avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>

///

**Comment ajouter une clé SSH publique sur un OS en cours d'exécution**

Sélectionnez votre type de service :

/// details | Instance Public Cloud

Mettez en surbrillance et copiez **l'intégralité de la chaîne de clé publique** que vous avez [créée à l'étape précédente](#puttygen) à partir de la fenêtre PuTTYgen (ouvrez d'abord le **fichier de clé privée** correspondant si nécessaire). Suivez alors les instructions du guide approprié :

- [Comment configurer des clés SSH supplémentaires sur une instance](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Comment remplacer une paire de clés SSH sur une instance Public Cloud](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Serveur dédié ou VPS

[Connectez-vous à votre serveur](#cloudserver) avec le compte utilisateur concerné. Créez le dossier `.ssh` (s'il n'existe pas) :

```bash
mkdir ~/.ssh
```

Pour stocker la clé pour l'utilisateur actuel, ouvrez (ou créez) le fichier `authorized_keys` avec votre éditeur de texte préféré (`nano` est utilisé dans cet exemple) :

```bash
nano ~/.ssh/authorized_keys
```

Mettez en surbrillance et copiez **l'intégralité de la chaîne de clé publique** que vous avez [créée à l'étape précédente](#puttygen) à partir de la fenêtre PuTTYgen (ouvrez d'abord le **fichier de clé privée** correspondant si nécessaire).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Collez votre **chaîne de clé publique complète** dans ce fichier. Assurez-vous que la chaîne de clé est toujours ininterrompue, sans sauts de ligne.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Enregistrez le fichier et quittez l'éditeur. Redémarrez votre serveur (`sudo reboot`) ou redémarrez uniquement le service OpenSSH avec l'une des commandes suivantes (la commande appropriée peut varier en fonction de votre système d'exploitation) :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Quittez la session PuTTY en cours :

```bash
logout
```

Pour vérifier que votre clé est correctement configurée, connectez-vous à votre serveur en suivant les [étapes décrites ci-dessous](#puttykeys).

///

<a name="puttykeys"></a>

#### Connexion au serveur

Pour vous connecter à un host distant (instance Public Cloud, serveur dédié ou VPS), vous devez avoir [créé la paire de clés](#puttygen) et [ajouté la chaîne de clé publique à votre serveur](#transferkeys).

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 1\. Ouvrez PuTTY.<br> 2\. Développez le nœud `SSH` sous `Connection` dans l'arborescence `Category`.<br> 3\. Développez le nœud `Auth`.<br> 4\. Cliquez sur `Credentials` pour afficher les paramètres correspondants.<br> 5\. Cliquez sur le bouton `Browse`{.action}.<br> 6\. Sélectionnez le fichier de clé privée (`keyfile.ppk`) dans le dossier dans lequel vous l'avez enregistré. |

Retournez à `Session` dans le menu de gauche. Renseignez les identifiants de connexion dans les champs appropriés.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (exemple : **ubuntu@203.0.113.101**)
- `Port` : 22 (sauf si vous avez changé le numéro de port SSH de votre serveur)

Cliquez sur le bouton `Open`{.action}. Le terminal PuTTY vous demandera le mot de passe du fichier de clé. Vous pouvez coller la chaîne de mot de passe dans cette fenêtre via un clic droit.

Notez qu'**une invite de mot de passe n'affichera pas vos saisies clavier** dans un terminal PuTTY. Exemple de sortie :

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Pour une approche plus pratique, découvrez comment associer un fichier de clé (via Pageant) et [enregistrer cette connexion](#sessions) dans les sections ci-dessous.

<a name="pageant"></a>

#### Gestion des clés SSH sur un périphérique local avec Pageant (PuTTY authentication agent)

Si vous avez suivi les instructions ci-dessus, vous pouvez accéder à votre hôte distant via l'authentification par clé. Bien que la connexion elle-même ne nécessite pas de mot de passe, PuTTY demandera toujours le mot de passe du fichier de clé privée correspondant.

![pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

L'utilisation de Pageant permet des connexions plus rapides de deux manières :

- Vous n'avez pas besoin de sélectionner le fichier de clé privée pour chaque connexion dans PuTTY.
- Vous ne devez entrer la phrase secrète pour le fichier de clé privée qu'une seule fois, lorsque le fichier de clé est ouvert par Pageant.

Ouvrez l'application Pageant [sur votre poste de travail](#installation). La fenêtre de la clé Pageant ne s'ouvrant pas automatiquement, vous devez (double-)cliquer sur son icône dans votre barre des tâches (Barre d'état système ou *system tray* dans Windows).

![pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Cela ouvrira la **Liste de clés Pageant**. Cliquez sur le bouton `Add Key`{.action}, et sélectionnez le fichier de clé privée (`keyfile.ppk`) dans le dossier où vous l'avez enregistré.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Entrez la phrase secrète pour ce fichier de clé. La clé est maintenant sur la liste et sera utilisée par PuTTY tant que Pageant est en cours d'exécution.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Même si vous fermez cette fenêtre, Pageant continuera de s'exécuter en arrière-plan. Il fonctionne tant que l'icône est présente dans la barre des tâches.

Si vous enregistrez également votre connexion en tant que session dans PuTTY comme décrit dans la section suivante, vous pourrez ouvrir des connexions à distance en quelques clics seulement.

<a name="sessions"></a>

### Utilisation de sessions de connexion PuTTY

PuTTY a la possibilité de stocker des paramètres pour différentes connexions en tant que sessions, ce qui vous permet d'établir une connexion à l'hôte distant (hébergement web, serveur, instance, périphérique réseau local) plus rapidement.

Sélectionnez la méthode de connexion appropriée :

/// details | Connexion avec nom d'utilisateur et mot de passe

Pour stocker une [session de connexion basée sur un mot de passe](#sshconnect1), effectuez les actions suivantes :

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---|
| 1\. Ouvrez PuTTY.<br> 2\. Renseignez les informations de connexion dans le champ `Host Name (or IP address)` : **username@IPv4_server** (exemple : **ubuntu@203.0.113.101**)<br> 3\. Le cas échéant, modifiez le numéro de port SSH dans le champ sous `Port`.<br> 4\. Entrez un nom pour cette connexion dans le champ sous `Saved Sessions`.<br> 5\. Cliquez sur le bouton `Save`{.action}. |

Pour ouvrir une connexion enregistrée précédemment, effectuez les actions suivantes :

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---|
| 1\. Ouvrez PuTTY.<br> 2\. Double-cliquez sur la session souhaitée dans la liste sous `Saved Sessions` ou sélectionnez-la et cliquez sur le bouton `Open`{.action}. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| Dans la fenêtre du terminal PuTTY, renseignez le mot de passe utilisateur de l'hôte distant. |

///

<a name="sessionskeys"></a>

/// details | Connexion avec nom d'utilisateur et clés d'authentification

Pour stocker une [session de connexion basée sur des clés](#puttykeys), effectuez les actions suivantes :

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---|
| 1\. Ouvrez PuTTY.<br> 2\. Renseignez les informations de connexion dans le champ `Host Name (or IP address)` : **username@IPv4_server** (exemple : **ubuntu@203.0.113.101**)<br> 3\. Le cas échéant, éditez le numéro de port SSH dans le champ sous `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Développez le nœud `SSH` sous `Connection` dans l'arborescence `Category`.<br> 5\. Développez le nœud `Auth` dans l'arborescence `Category`.<br> 6\. Cliquez sur `Credentials` pour afficher les paramètres correspondants.<br> 7\. Cliquez sur le bouton `Browse`{.action}.<br> 8\. Accédez au dossier qui stocke vos fichiers de clés privées.<br> 9\. Ouvrez le fichier de clé concerné. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Retournez à la catégorie de configuration `Session` dans le menu de gauche.<br> 11\. Entrez un nom pour cette connexion dans le champ sous `Saved Sessions`.<br> 12\. Cliquez sur le bouton `Save`{.action}. |

<a name="qconnect"></a>

Vous pouvez maintenant ouvrir rapidement toute connexion basée sur une clé précédemment enregistrée à partir de la fenêtre PuTTY ou via Pageant :

| **PuTTY** | **Pageant** |
|---|---|
| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Ouvrez PuTTY.<br> 2\. Double-cliquez sur la session souhaitée dans la liste sous `Saved Sessions`. | ![pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Faites un clic droit sur l’icône de Pageant dans la barre des tâches.<br> 2\. Cliquez sur la session souhaitée dans le sous-menu `Saved Sessions`. |

///

Pour modifier les paramètres d'une session, sélectionnez-la dans la liste et cliquez sur le bouton `Load`{.action}.

<a name="example"></a>

### Exemple d’utilisation : Comment utiliser les outils PuTTY pour configurer des connexions sécurisées aux serveurs OVHcloud

Ce tutoriel peut être appliqué à différents scénarios et différents types de connexions.

En suivant ces étapes dans l'ordre, vous configurez vos connexions pour qu'elles s'ouvrent en quelques clics :

- Étape 1 : [Installer le paquet PuTTY](#installation)
- Étape 2 : [Créer une paire de clés dans PuTTYgen](#puttygen)
- Étape 3 : [Ajouter la clé publique à votre hôte distant](#transferkeys)
- Étape 4 : [Ajouter la clé privée dans Pageant](#pageant)
- Étape 5 : [Enregistrer la connexion en tant que session dans PuTTY](#sessions)
- Étape 6 : [Se connecter à l'hôte distant via la session enregistrée correspondante](#qconnect)

## Aller plus loin

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Comment créer des clés SSH avec OpenSSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Comment créer des clés SSH avec OpenSSH pour les instances Public Cloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).