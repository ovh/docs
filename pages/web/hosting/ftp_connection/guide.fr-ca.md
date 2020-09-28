---
title: 'Se connecter à l’espace de stockage de son hébergement web'
slug: connexion-espace-stockage-ftp-hebergement-web
excerpt: 'Découvrez comment vous connecter à l''espace de stockage de votre hébergement web OVHcloud'
section: 'FTP et SSH'
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les offres d'hébergement web d'OVHcloud vous donnent accès à un espace de stockage permettant la mise en ligne des fichiers de vos sites internet ou de vos applications. L'accès à cet espace est possible notamment via un utilisateur FTP ou SSH et des mots de passe qui leurs sont associés.

**Découvrez comment vous connecter à l'espace de stockage de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

### Étape 1 : récupérer les informations nécessaires pour se connecter

Pour vous connecter à votre espace de stockage, vous devez être en possession des éléments suivants :

- un utilisateur FTP ou SSH actif ;
- le mot de passe associé à cet utilisateur FTP ou SSH ;
- l'adresse de ce serveur ;
- le port de connexion au serveur.

> [!primary]
>
> Ces éléments vous ont été communiqués dans l’e-mail vous notifiant l’installation de votre hébergement web et sont accessibles depuis votre espace client OVHcloud.
>
> **Si vous êtes déjà en possession de ces derniers**, poursuivez directement vers l'étape 2 « [Accéder à votre espace de stockage](./#etape-2-acceder-a-votre-espace-de-stockage) ».
> 

Si vous n’êtes pas en possession de ces éléments, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} dans la partie « Web », puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Choisissez alors le nom de l'hébergement concerné, puis positionnez-vous sur l'onglet `FTP - SSH`{.action}. 

Les informations liées à votre espace de stockage apparaissent alors, ainsi qu'un tableau listant les utilisateurs FTP et SSH créés sur votre hébergement.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

Grâce à ces informations, vous devriez pouvoir retrouver les éléments requis pour vous connecter à l'espace de stockage. Si besoin, aidez-vous du tableau ci-dessous si vous n'arrivez pas à les identifier. À noter que certaines informations peuvent ne pas apparaître selon l'offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} que vous possédez.

|Information|Description|
|---|---|
|Serveur FTP|Il s'agit de l'adresse de serveur permettant d'accéder à votre espace de stockage. Utilisez-la pour vous y connecter via un logiciel FTP.<br><br> Le port classique de connexion est le « 21 ». Utilisez le port « 22 » pour une connexion via le protocole SFTP (dans le cas où celui-ci est activé).|
|Accès SSH au cluster|L'élément qui apparaît vous permet de récupérer deux informations : <br>**- l'adresse de serveur** : elle débute après « ssh:// » et se termine avant les « : » ;<br> **- le port de connexion** : le numéro est mentionné après les « : ». <br><br>On pourrait par exemple retrouver : ssh://`ssh.cluster023.hosting.ovh.net`:`22`/, donc « ssh.cluster023.hosting.ovh.net » en adresse de serveur et « 22 » en port de connexion.|
|Login FTP principal|Il s'agit de l'identifiant FTP principal créé sur votre hébergement. Vous pouvez retrouver l'intégralité des utilisateurs FTP de votre hébergement en vous reportant à la colonne « Login FTP » du tableau.|
|Login SSH principal|Il s'agit de l'identifiant SSH principal créé sur votre hébergement. Vous pouvez retrouver l'intégralité des utilisateurs SSH de votre hébergement en vous reportant à la colonne « Login SSH » du tableau.|

Si vous ne connaissez plus le mot de passe d'un utilisateur FTP ou SSH, selon votre offre, utilisez soit le pictogramme en forme de crayon, ou le bouton `...`{.action} suivi du bouton `Changer le mot de passe`{.action}. Notre documentation « [Modifier le mot de passe d’un utilisateur FTP](../modifier-mot-de-passe-utilisateur-ftp/) » peut vous accompagner dans cette démarche.

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

À présent, vous devez être en possession des éléments vous permettant de vous connecter à votre espace de stockage.

### Étape 2 : accéder à votre espace de stockage

La connexion à l’espace de stockage peut s’effectuer de plusieurs manières. Poursuivez la lecture de cette documentation selon celle que vous souhaitez utiliser.

[1. Connexion via le FTP Explorer](./#1-connexion-via-le-ftp-explorer) : vous permet d’accéder à votre espace de stockage depuis votre navigateur internet.

[2. Connexion via un logiciel FTP](./#2-connexion-via-un-logiciel-ftp) : vous permet d'accéder à votre espace de stockage via un logiciel (comme FileZilla ou Cyberduck). Vous devrez au préalable installer le logiciel choisi sur votre ordinateur.

[3. Connexion via un accès SSH](./#3-connexion-en-ssh) : vous permet d'accéder à votre espace de stockage via un accès SSH. Des connaissances plus avancées, ainsi qu'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} spécifique sont nécessaires pour utiliser ce type d’accès.

#### 1. Connexion via le FTP Explorer

Pour vous connecter à votre espace de stockage via le FTP Explorer, connectez-vous à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} dans la partie « Web », cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. 

Positionnez-vous ensuite sur l'onglet `FTP - SSH`{.action}, puis cliquez sur le bouton `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Sur la nouvelle page qui apparaît, renseignez l'identifiant FTP ainsi que son mot de passe, puis connectez-vous. Si les informations sont correctes, vous pouvez à présent interagir avec votre espace de stockage.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Connexion via un logiciel FTP

Après avoir installé au préalable le logiciel FTP de votre choix sur votre ordinateur (comme FileZilla ou Cyberduck), démarrez-le. 

Vous devriez trouver un endroit où renseigner les informations de connexion. Cette manipulation étant inhérente au logiciel que vous utilisez ainsi qu'à sa version, nous ne pouvons pas toutes les référencer dans la présente documentation.

Si besoin, voici un rappel des informations que vous devrez y renseigner :

|Information à renseigner|Détails|
|---|---|
|Serveur FTP|Il s'agit de l'adresse de serveur vous permettant d'accéder à votre espace de stockage.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à : « Serveur », « Adresse de serveur », « Hôte », « Nom d'hôte », ou encore « Host ».|
|Login FTP|Il s'agit de l'identifiant vous permettant d'accéder à votre espace de stockage.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à : « Utilisateur », « Nom d'utilisateur », « Identifiant », « Login », ou encore « Username ».|
|Mot de passe de l'utilisateur FTP|Il s'agit du mot de passe associé au login FTP.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à « Mot de passe » ou « Password ».|
|Port de connexion|Celui-ci est généralement complété automatiquement par le logiciel. Si vous devez le renseigner :<br><br>- utilisez le port « 21 » pour une connexion utilisant le protocole FTP ;<br>- utilisez le port « 22 » pour une connexion utilisant le protocole SFTP (dans le cas où celui-ci est activé).|

Si les informations sont correctes, le logiciel que vous utilisez devrait afficher le contenu de votre espace de stockage. Un message (appelé aussi « status ») peut apparaître afin de confirmer que le contenu a bien été listé avec succès par votre logiciel.

#### 3. Connexion en SSH

Pour vous connecter en SSH, utilisez un terminal afin d’interagir directement avec votre espace de stockage via des lignes de commande. 

Cet outil est installé par défaut sur macOS, Linux et Windows 10. Un environnement Windows plus ancien nécessitera l’installation d’un logiciel comme PuTTY ou l’ajout de la fonctionnalité « OpenSSH ».Cette démarche étant spécifique au système d’exploitation que vous utilisez, nous ne pouvons pas la détailler dans cette documentation.

Une fois la connexion SSH établie et selon la méthode choisie, il existe deux manières pour vous connecter : 

- depuis un logiciel : les zones de texte doivent être complétées par les informations de connexion ;
- depuis une ligne de commande : une syntaxe spécifique devra être respectée.

Pour une utilisation en ligne de commande, voici celle que vous devrez utiliser. Remplacez les éléments « sshlogin », « sshserver » et « connectionport » par ceux adaptés à votre situation personnelle. Une fois la commande envoyée, vous serez invité à renseigner le mot de passe de l'utilisateur SSH.

```ssh
ssh sshlogin@sshserver -p connectionport
```

Si les informations sont correctes, vous pourrez alors interagir avec votre espace de stockage. Aidez-vous de notre documentation « [Utiliser une connexion SSH sur un hébergement web](../mutualise-le-ssh-sur-les-hebergements-mutualises/) » si nécessaire.

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Aller plus loin

[Modifier le mot de passe d’un utilisateur FTP](../modifier-mot-de-passe-utilisateur-ftp/){.external}.

[Utiliser une connexion SSH sur un hébergement web](../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
