---
title: "Hébergement web - Comment utiliser l'accès SSH"
excerpt: "Découvrez comment vous connecter et utiliser l'accès SSH de votre hébergement web OVHcloud"
updated: 2025-09-08
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

Les offres d'hébergement web OVHcloud vous donnent accès à un espace de stockage permettant la mise en ligne des fichiers de vos sites Internet ou de vos applications. L'accès à cet espace est possible via des identifiants FTP ou SSH.

**Découvrez comment vous connecter et utiliser l'accès SSH de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting) bénéficiant d'un accès SSH.
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

> [!warning]
> 
> L'accès SSH à un hébergement web OVHcloud est disponible à partir de [l'offre Pro](/links/web/hosting-compare).

## En pratique

Pour vous connecter et utiliser l'accès SSH de votre hébergement web, vous aurez besoin des éléments suivants :

- l'utilisateur SSH actif ;
- le mot de passe associé à cet utilisateur SSH ;
- l'adresse du serveur SSH de votre hébergement web ;
- le port de connexion au serveur SSH de votre hébergement web.

### 1 - Assurez-vous que l'accès SSH est actif pour l'utilisateur SSH choisi <a name="user-ssh-enablement"></a>

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP-SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Etape 4**
>>
>> Sur la nouvelle page, les informations liées à votre espace de stockage apparaissent.
>>
>> Dans le tableau, repérez la colonne `SSH` afin de vérifier que l'utilisateur SSH (présent dans la colonne `Login` du tableau) concerné dispose bien d'un accès SSH actif. La mention `Désactivé` apparaît si ce n'est pas le cas.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Si l'accès SSH de l'utilisateur concerné est `Désactivé` dans le tableau, effectuez les opérations suivantes :
>>
>> - 1 : Cliquez sur le bouton `...`{.action} à droite de la ligne correspondant à l'utilisateur, puis sur `Modifier`{.action}.
>> - 2 : Dans la fenêtre qui s'affiche, section `Protocoles de connexion`, sélectionnez le choix `FTP, SFTP et SSH`{.action}, puis cliquez sur `Suivant`{.action}.
>> - 3 : Vérifiez le résumé de la modification demandée, puis cliquez sur `Valider`{.action}.
>>
>> > Si vous n'avez pas la possibilité de l'activer, assurez-vous que [votre offre d'hébergement web OVHcloud](/links/web/hosting) bénéficie bien d'un accès SSH.

### 2 - Récupérez les informations nécessaires pour vous connecter en SSH <a name="sshlogin"></a>

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP-SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Etape 4**
>>
>> Sur la nouvelle page, récupérez les éléments décrits dans le tableau suivant :
>>
>> |Element|Description| 
>> |---|---|
>> |**Adresse du serveur SSH**| Repérez la mention `Serveur SSH`. Il se présente sous la forme `ssh.clusterXXX.hosting.ovh.net` (où chacun des 3 `X` correspond à un chiffre compris entre `0` et `9`).|
>> |**Port de connexion au serveur SSH**| Repérez la mention `Port SSH`. Par défaut, le numéro du port SSH est le `22`.|
>> |**Utilisateur SSH actif**| Dans le tableau situé en bas de page, retrouvez-le dans la colonne `Login`.<br>Pour rappel, cet utilisateur doit [disposer d'un accès SSH actif](#user-ssh-enablement).|
>> |**Mot de passe de l'utilisateur SSH**| Si vous avez oublié ce mot de passe, cliquez sur le bouton `...`{.action} à droite de la ligne correspondant à l'utilisateur concerné dans le tableau situé en bas de page, puis sur `Changer le mot de passe`{.action}.|

### 3 - Connectez-vous en SSH à l'espace de stockage de votre hébergement web

Pour vous connecter en SSH, utilisez un terminal afin d’interagir directement avec votre espace de stockage via des lignes de commande. 

> [!primary]
>
> Les terminaux de commande sont installés par défaut sur macOS, Linux et Windows 10. Un environnement Windows plus ancien nécessitera l’installation d’un logiciel comme [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) ou l’ajout de la fonctionnalité OpenSSH.

Dès lors, deux possibilités existent pour vous connecter en SSH à votre hébergement web. 

**Cliquez ci-dessous sur la méthode de connexion de votre choix pour afficher les explications.**

/// details | Depuis un terminal

> [!warning]
>
> Il n'y a pas d'accès « super utilisateur » (ou « root ») via SSH sur nos offres d'hébergement mutualisé.

Une fois le terminal ouvert, utilisez la commande suivante en remplaçant les éléments `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` et `22` par ceux correspondant à vos identifiants SSH. 

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Après l'envoi de la commande, vous serez invité à renseigner le mot de passe de l’utilisateur SSH.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | Depuis un logiciel

Une fois le logiciel (PuTTY par exemple) ouvert, renseignez les informations de connexion SSH. Cette manipulation étant inhérente à celui-ci, nous ne pouvons pas la détailler dans cette documentation. Voici un rappel des informations que vous devrez y renseigner :

- **Serveur SSH**: Indiquez l'adresse de serveur SSH récupérée dans la [partie 2](#sshlogin). Selon le logiciel utilisé, la dénomination peut ressembler à : « Adresse de serveur », « Nom d'hôte », ou encore « Host Name ».
- **Port de connexion**: Renseignez le port de connexion SSH récupéré dans la [partie 2](#sshlogin).
- **Login SSH**: Renseignez l'utilisateur SSH. Selon le logiciel utilisé, la dénomination peut ressembler à : « Nom d'utilisateur », « Identifiant », « Login » ou encore « Username ».
- **Mot de passe de l'utilisateur SSH**: Indiquez le mot de passe associé au login SSH.<br><br> Selon le logiciel utilisé, sa dénomination peut également ressembler à « Password ».

///

Une fois connecté, poursuivez vers la partie suivante.

### 4 - Interagissez en SSH avec votre espace de stockage <a name="ssh-using"></a>

Pour interagir avec votre espace de stockage, vous devez utiliser des commandes. Celles-ci ont une signification directe tirée de l'anglais. Aidez-vous de la liste ci-dessous si nécessaire. Attention, **celle-ci n'est pas exhaustive**.

|Commande|Signification en anglais|Description| 
|---|---|---|
|pwd|Print working directory|Affiche le répertoire de travail dans lequel vous vous situez.| 
|cd `arg`|Change directory|Permet de changer de répertoire de travail pour celui renseigné à la place de `arg`.|
|cd `..`|Change directory|Permet de changer de répertoire de travail en remontant d’un niveau dans l’arborescence de vos répertoires.|
|cd|Change directory|En ne spécifiant pas d'argument, elle permet de se repositionner à la racine de votre espace de stockage (home).|
|ls|List|Liste le contenu du répertoire de travail. Ajoutez des attributs pour modifier l'affichage du résultat de la commande (comme `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Change les droits du fichier ou du répertoire mentionné en tant qu'argument `arg`.| 
|mkdir `arg`|Make directory|Permet de créer un repertoire portant le nom de l'argument `arg`.| 
|touch `arg`|Touch|Crée un fichier vide, s'il n'existe pas déjà, portant le nom mentionné en tant qu'argument `arg`.|
|rm `arg`|Remove|Supprime le fichier mentionné en tant qu'argument `arg`.| 
|rm -r `arg`|Remove|Supprime le répertoire mentionné en tant qu'argument `arg`, ainsi que tout son contenu de manière récursive.| 
|mv `arg1` `arg2`|Move|Renomme ou déplace un élément (spécifié en tant que `arg1`) vers un nouvel endroit (spécifié en tant que `arg2`).| 

Vous pouvez également lancer un script en utilisant une version spécifique de PHP. Par exemple, pour la version de PHP 7.1, utilisez la commande suivante. Adaptez-en ses éléments à votre situation personnelle.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Selon la version de PHP que vous souhaitez utiliser, il se peut que l'environnement d'exécution nécessite d'être modifié pour des raisons de compatibilité. Reportez-vous à notre documentation « [Hébergement web : environnement, version PHP, « .ovhconfig »](/pages/web_cloud/web_hosting/configure_your_web_hosting) » pour en apprendre plus. 

> [!primary]
>
> Il est également possible de copier des fichiers et/ou dossiers à l'aide du **S**ecure **C**opy **P**rotocol (**SCP**).
> Ce protocole utilise le protocole SSH pour dupliquer du contenu de manière sécurisée entre :
> 
> - un ordinateur/appareil local et un serveur distant
> - deux serveurs distants
>
> Retrouvez plus d'information sur l'utilisation de la commande `scp` avec nos hébergements web OVHcloud dans notre guide « [Hébergement Web - Copier des fichiers avec la commande SCP](/pages/web_cloud/web_hosting/using-scp-command) ».

## Aller plus loin

[Hébergement web : environnement, version PHP, « .ovhconfig »](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).