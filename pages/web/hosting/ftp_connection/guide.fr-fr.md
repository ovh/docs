---
title: 'Se connecter à l’espace de stockage FTP de son hébergement web'
excerpt: "Découvrez comment vous connecter à l'espace de stockage FTP de votre hébergement web OVHcloud"
updated: 2023-06-28
---

## Objectif

Les offres d'hébergement web OVHcloud donnent accès à un espace de stockage FTP permettant de mettre en ligne les fichiers de vos sites internet ou de vos applications. L'accès à cet espace est possible via un utilisateur FTP ou SSH avec les mots de passe qui leurs sont associés.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wwPx8ORF1kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

**Découvrez comment vous connecter à l'espace de stockage FTP de votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.

> [!primary]
> Seuls les hébergements web **Pro** ou **Performance** permettent l'activation de plusieurs utilisateurs FTP et disposent de connexions en SSH.
>

## En pratique

### Étape 1 : récupérer les informations nécessaires pour se connecter

Pour vous connecter à votre espace de stockage FTP, récupérez les éléments suivants :

- l'utilisateur FTP ou SSH actif ;
- le mot de passe associé à cet utilisateur FTP ou SSH ;
- l'adresse du serveur FTP ou SSH de votre hébergement web ;
- le port de connexion au serveur FTP ou SSH de votre hébergement web.

> [!primary]
>
> Ces éléments vous ont été communiqués dans l’e-mail notifiant l’installation de votre hébergement web lors de sa souscription. Ils sont accessibles depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
>
> **Si vous disposez déjà de ces éléments**, poursuivez directement vers l'étape 2 « [Accéder à votre espace de stockage](#ftp_storage_access) » de ce guide.
> 

Si vous ne disposez pas de ces éléments, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur la section `Hébergements`{.action} dans la colonne de gauche. Choisissez le nom de l'hébergement web concerné, puis positionnez-vous sur l'onglet `FTP - SSH`{.action}. 

Les informations liées à votre espace de stockage apparaissent alors, ainsi qu'un tableau listant les utilisateurs FTP et SSH créés sur votre hébergement web.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

> [!primary]
>
> Si vous souhaitez créer un nouvel utilisateur FTP/SSH depuis la même page, cliquez sur le bouton `Créer un utilisateur`{.action} situé à droite.
> Définissez l'extension de nom de ce nouvel `Utilisateur`{.action} et le `Dossier racine`{.action} dans lequel cet utilisateur pourra agir puis cliquez sur `Suivant`{.action}.
> Choisissez un mot de passe pour ce nouveau compte utilisateur, cliquez sur `Suivant`{.action} puis cliquez sur `Confirmer`{.action}.
>

Tous les éléments requis pour vous connecter à l'espace de stockage FTP sont présents sur cette même page.

Retrouvez ci-dessous un descriptif des informations essentielles affichées sur la page `FTP-SSH` :

- **Serveur FTP et SFTP** : adresse du serveur FTP de votre hébergement web permettant d'accéder à votre espace de stockage FTP. Ceci en utilisant, par exemple, un logiciel FTP via le protocole FTP ou SFTP.

> Le port classique de connexion est le port « 21 ». Utilisez le port « 22 » pour une connexion via le protocole SFTP (dans le cas où celui-ci est activé)

- **Serveur SSH** : adresse du serveur SSH de votre hébergement web permettant d'accéder à votre espace de stockage FTP. Ceci en utilisant un terminal via le protocole SSH.

> Le port de connexion SSH est le port « 22 ».

- **Login principal** : identifiant (S)FTP principal créé sur votre hébergement web. Vous pouvez retrouver l'intégralité des utilisateurs (S)FTP de votre hébergement dans la colonne « Login » du tableau.

> [!primary]
>
> Selon l'offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external} que vous possédez, certaines des informations décrites ci-dessus (notamment concernant le SSH) peuvent ne pas apparaître.
>

Si vous ne connaissez plus le mot de passe d'un utilisateur FTP ou SSH, consultez notre guide « [Modifier le mot de passe d’un utilisateur FTP](/pages/web/hosting/ftp_change_password) ».

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

À ce stade, vous disposez de tous les éléments permettant de vous connecter à votre espace de stockage FTP.

### Étape 2 : accéder à votre espace de stockage FTP <a name="ftp_storage_access"></a>

La connexion à l’espace de stockage FTP peut s’effectuer de plusieurs manières. Poursuivez la lecture de cette documentation selon celle que vous souhaitez utiliser.

- [1. Connexion via le « FTP Explorer »](#ftpexplorer) : permet d’accéder à votre espace de stockage FTP depuis votre navigateur internet.

- [2. Connexion via un logiciel FTP](#ftpsoftware) : permet d'accéder à votre espace de stockage FTP via un logiciel (comme [FileZilla](/pages/web/hosting/ftp_filezilla_user_guide) ou [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac)). 
Vous devrez au préalable installer le logiciel/client FTP choisi sur votre ordinateur.

- [3. Connexion via un accès SSH](#ssh) : permet d'accéder à votre espace de stockage FTP via un accès SSH. Des connaissances avancées, ainsi qu'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external} **Pro** ou **Performance** sont nécessaires pour utiliser ce type d’accès.

#### 1. Connexion via le « FTP Explorer » <a name="ftpexplorer"></a>

Pour vous connecter à votre espace de stockage FTP via le « FTP Explorer », connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}.

Cliquez sur la section `Hébergements`{.action} dans la colonne de gauche. Choisissez le nom de l'hébergement web concerné, positionnez-vous sur l'onglet `FTP - SSH`{.action} puis cliquez sur le bouton `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Sur la nouvelle page qui apparaît, renseignez votre identifiant FTP ainsi que son mot de passe, puis connectez-vous. Si les informations sont correctes, votre espace de stockage apparaît.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Connexion via un logiciel FTP <a name="ftpsoftware"></a>

Après avoir installé au préalable le logiciel FTP de votre choix sur votre ordinateur (comme [FileZilla](/pages/web/hosting/ftp_filezilla_user_guide) ou [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac)), démarrez-le. 

Vous devriez retrouver des champs spécifiques où renseigner les informations de connexion. 

> [!warning]
>
> Cette manipulation étant inhérente au logiciel que vous utilisez ainsi qu'à sa version, nous ne pouvons pas toutes les référencer dans cette documentation.
>

Voici un rappel des informations que vous devrez y renseigner :

- **Serveur FTP et SFTP** : adresse du serveur FTP permettant d'accéder à votre espace de stockage FTP. Selon le logiciel utilisé, la dénomination peut ressembler à : « Serveur », « Adresse de serveur », « Hôte », « Nom d'hôte », ou encore « Host ».
- **Login principal** : identifiant permettant d'accéder à votre espace de stockage FTP. Selon le logiciel utilisé, la dénomination peut ressembler à : « Utilisateur », « Nom d'utilisateur », « Identifiant », « Login », ou encore « Username ».
- **Mot de passe de l'utilisateur FTP** : mot de passe associé au login FTP. Selon le logiciel utilisé, la dénomination peut ressembler à « Mot de passe » ou « Password ».
- **Port de connexion** : celui-ci est généralement complété automatiquement par le logiciel. Si vous devez le renseigner :
    - utilisez le port « 21 » pour une connexion utilisant le protocole FTP ;
    - utilisez le port « 22 » pour une connexion utilisant le protocole SFTP (dans le cas où celui-ci est activé).

Si les informations sont correctes, le logiciel que vous utilisez affiche le contenu de votre espace de stockage FTP. Un message (appelé aussi « status ») peut apparaître afin de confirmer que le contenu a bien été listé avec succès par votre logiciel FTP.

#### 3. Connexion en SSH <a name="ssh"></a>

Pour vous connecter en SSH, utilisez un terminal afin d’interagir directement avec votre espace de stockage FTP via des lignes de commande. 

Retrouvez plus d'informations sur le SSH dans notre guide sur l'[utilisation du SSH avec votre hébergement mutualisé OVHcloud](/pages/web/hosting/ssh_on_webhosting)

Cet outil est installé par défaut sur *macOS*, *Linux* et *Windows 10*. Un environnement Windows plus ancien nécessitera l’installation d’un logiciel comme [PuTTY](/pages/web/hosting/ssh_using_putty_on_windows) ou l’ajout de la fonctionnalité « *OpenSSH* ». 

> [!warning]
> 
> Cette démarche étant spécifique au système d’exploitation que vous utilisez, nous ne pouvons pas la détailler dans cette documentation.
>

Une fois la connexion SSH établie et selon la méthode choisie, il existe deux méthodes pour vous connecter : 

- **depuis un logiciel** : les zones de texte doivent être complétées par les informations de connexion ;
- **en ligne de commande** : une syntaxe spécifique devra être respectée.

En ligne de commande, utilisez la syntaxe suivante :

```bash
ssh sshlogin@sshserver -p connectionport
```

Remplacez les éléments `sshlogin`, `sshserver` et `connectionport` par vos propres informations. 

Une fois la commande envoyée, vous serez invité à renseigner le mot de passe de l'utilisateur SSH.

Si les informations sont correctes, vous serez connecté à votre espace de stockage FTP. 

Aidez-vous de notre documentation « [Utiliser une connexion SSH sur un hébergement web](/pages/web/hosting/ssh_on_webhosting) » si nécessaire.

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Aller plus loin

[Modifier le mot de passe d’un utilisateur FTP](/pages/web/hosting/ftp_change_password){.external}.

[Utiliser une connexion SSH sur un hébergement web](/pages/web/hosting/ssh_on_webhosting){.external}.

[Utiliser PuTTY pour vous connecter en SSH](/pages/web/hosting/ssh_using_putty_on_windows)

[Utilisez FileZilla avec votre hébergement web](/pages/web/hosting/ftp_filezilla_user_guide)

[Utilisez Cyberduck avec votre hébergement web](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.