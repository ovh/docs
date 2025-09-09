---
title: "Hébergement web - Comment utiliser FileZilla"
excerpt: "Découvrez comment vous connecter à l'espace de stockage de votre hébergement web OVHcloud et gérer les données qu'il contient grâce au logiciel FileZilla"
updated: 2025-06-10
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

> [!primary]
> **Désactivation de l'outil FTP Explorer/Net2FTP**
>
> Pour les hébergements web, il n'est plus possible de se connecter à l'espace de stockage FTP via l'outil en ligne FTP Explorer/Net2FTP. Pour continuer à vous connecter en FTP à votre hébergement web, utilisez les logiciels [FileZilla](https://filezilla-project.org/download.php) ou [Cyberduck](https://cyberduck.io/).

## Objectif

FileZilla est un logiciel disponible gratuitement sur plusieurs systèmes d'exploitations (Windows, macOS, etc).
Il permet de mettre en ligne des fichiers ou votre site internet en vous [connectant à l'espace de stockage](/pages/web_cloud/web_hosting/ftp_connection) de votre hébergement web.

**Découvrez comment vous connecter à l'espace de stockage de votre hébergement web OVHcloud et gérer les données qu'il contient grâce au logiciel FileZilla.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/wwPx8ORF1kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder une [offre d'hébergement web](/links/web/hosting).
- Avoir installé le logiciel FileZilla sur votre ordinateur. Celui-ci est disponible gratuitement depuis la page [filezilla-project.org](https://filezilla-project.org/download.php).

## Présentation de l'interface <a name="interface"></a>

/// details | Cliquez ici pour afficher le contenu de cette section.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- La partie supérieure **encadrée** permet une connexion rapide à votre hébergement en y renseignant son nom d’**hôte**, le nom d’**utilisateur**, son **mot de passe** associé et le numéro de **port** utilisé.
- **zone 1** : Détails sur l’historique des opérations, la connexion à l’espace FTP, les transferts de fichiers, les erreurs, etc. Pour en savoir plus, rendez-vous sur la [documentation officielle de FileZilla](https://filezilla-project.org/).
- **zone 2** : Arborescence des répertoires/fichiers locaux sur votre ordinateur.
- **zone 3** : Arborescence des répertoires/fichiers distants lorsque vous êtes connecté à votre hébergement.
- **zone 4** : Liste des répertoires/fichiers dans le répertoire sélectionné en local sur votre ordinateur.
- **zone 5** : Liste des répertoires/fichiers distants dans le répertoire sélectionné sur votre hébergement.
- **zone 6** : Liste des opérations de transfert en cours, en attente ou en erreur entre votre ordinateur et votre hébergement.

///

## En pratique

### 1 - Récupérer les informations de connexion à l'espace de stockage de l'hébergement web <a name="part-1"></a>

Effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
3. Sur la page qui s'affiche, cliquez sur l'onglet `FTP-SSH`{.action}. 
4. Sur la nouvelle page, les informations liées à votre espace de stockage apparaissent. Récupérez-y les éléments suivants :
    - Le `Serveur FTP et SFTP` représenté sous la forme suivante : `ftp.clusterXXX.hosting.ovh.net` (où chacun des 3 `X` correspond à un chiffre compris entre `0` et `9`).
    - L'un des utilisateurs présents dans la colonne `Login` du tableau situé en bas de page. Vous pouvez aussi utiliser le `Login principal` si vous le souhaitez.
    - Le numéro du `Port FTP` ou le numéro du `Port SFTP` en fonction du protocole de connexion que vous souhaiterez utiliser pour vous connecter à votre espace de stockage.

> [!primary]
>
> Pour des raisons de sécurité, le mot de passe d'un utilisateur n'apparaît pas sur la page de l'onglet `FTP-SSH`{.action}. Si vous l'avez oublié, consultez [ce guide](/pages/web_cloud/web_hosting/ftp_change_password) pour le modifier.

### 2 - Se connecter à l'espace de stockage de votre hébergement grâce à FileZilla

La connexion peut se faire grâce à deux protocoles de transfert de fichiers :

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
> Dans la mesure du possible, nous vous recommandons de privilégier l'utilisation du protocole **SFTP** pour vous connecter à votre espace de stockage avec FileZilla.
>
> En effet, le protocole **SFTP** chiffre les échanges de données entre votre appareil et votre hébergement web. Cependant, si vous rencontrez des contraintes d'utilisation, notamment sur la segmentation des utilisateurs ou des dossiers, vous devrez dans ce cas utiliser le protocole **FTP**.

**Cliquez sur le protocole de connexion de votre choix pour afficher les explications.**

/// details | Se connecter en SFTP à l'espace de stockage de votre hébergement web grâce à FileZilla. <a name="sftp"></a>

Le **SFTP** utilise, comme le SSH, le port 22 par défaut au lieu du port 21. Si vous utilisez une offre d'hébergement Cloud Web, vous devez utiliser le port qui s'affiche dans votre [espace client OVHcloud](/links/manager). Le port 22 est par sécurité désactivé en SSH et en SFTP pour les hébergements Cloud Web.

> [!success]
>
> SFTP est activable gratuitement pour toutes les offres d'hébergements OVHcloud (sauf les anciennes offres 60free et demo1g).
>

**Verifier l'activation du protocole SFTP**

Pour cela, retournez dans l'onglet `FTP-SSH`{.action} de votre [espace client OVHcloud](/links/manager) comme indiqué dans la [première partie](#part-1) de ce guide.

Dans le tableau situé en bas de page, repérez la colonne `SFTP` afin de vérifier que l'utilisateur (présent dans la colonne `Login` du tableau) concerné dispose bien d'un accès SFTP actif. La mention `Désactivé` apparaît si ce n'est pas le cas.

Si l'accès SFTP de l'utilisateur concerné est `Désactivé` dans le tableau, effectuez les opérations suivantes:

- Pour les offres Perso, cochez la case située à gauche de la mention `Désactivé` dans le tableau.

 - Pour les offres Pro et Performance :

    - 1 : Cliquez sur le bouton `...`{.action} à droite de la ligne correspondant à l'utilisateur, puis sur `Modifier`{.action}.
    - 2 : Dans la fenêtre qui s'affiche, section `Protocoles de connexion`, sélectionnez le choix `FTP et SFTP`{.action}, puis cliquez sur `Suivant`{.action}.
    - 3 : Vérifiez le résumé de la modification demandée, puis cliquez sur `Valider`{.action}.

**Se connecter en SFTP avec FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Depuis la barre de connexion rapide, complétez les informations en vous aidant du tableau ci-dessous :

|Informations à renseigner|Détails|
|---|---|
|Hôte| Adresse du serveur permettant d'accéder à l'espace de stockage de votre hébergement web.<br> Elle a généralement cette forme : `ftp.clusterXXX.hosting.ovh.net` (les `XXX` représentent le numéro du cluster où se trouve votre hébergement web).|
|Utilisateur|Identifiant vous permettant d'accéder à l'espace de stockage de votre hébergement.|
|Mot de passe|Mot de passe associé à l'utilisateur.|
|Port|Renseignez le numéro du port SFTP récupéré précédemment dans la [première partie](#part-1) de ce guide pour une connexion SFTP.|

Une fois que tout est correctement saisi dans l'encadré **1** de l'image ci-dessous, cliquez sur `Connexion rapide`{.action}.

Une boîte de dialogue s'ouvre alors (voir l'image ci-dessous) afin de certifier la connexion à l'hôte sur lequel vous vous apprêtez à vous connecter. En étant connecté sur un hôte OVHcloud, vous pouvez cocher la case *Toujours faire confiance à cet hôte, ajouter cette clé au cache* afin que le logiciel ne vous le redemande plus à l'avenir.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Se connecter en FTP à l'espace de stockage de votre hébergement web grâce à FileZilla.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Depuis la barre de connexion rapide, complétez les informations en vous aidant du tableau ci-dessous :

|Informations à renseigner|Détails|
|---|---|
|Hôte| Adresse du serveur permettant d'accéder à l'espace de stockage de votre hébergement web.<br> Elle a généralement cette forme : `ftp.clusterXXX.hosting.ovh.net` (les `XXX` représentent le numéro du cluster où se trouve votre hébergement web).|
|Utilisateur|Identifiant vous permettant d'accéder à l'espace de stockage de votre hébergement.|
|Mot de passe|Mot de passe associé à l'utilisateur.|
|Port|Il est généralement complété automatiquement par le logiciel. Sinon, renseignez le port `21` pour une connexion FTP.|

Une fois que tout est correctement saisi dans l'encadré **1** de l'image ci-dessous, cliquez sur `Connexion rapide`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Si la connexion s'est bien effectuée avec succès, vous en serez informé via le statut présent dans l'encadré **2** de l'image ci-dessus. Vous pouvez ainsi voir vos répertoires/dossiers et fichiers déjà présents sur votre hébergement (encadré **3**).

///

#### Erreurs de connexion

**Cliquez sur l'erreur que vous rencontrez pour afficher la solution.**

/// details | Authentication failed - Could not connect to server 

Le message affiché ci-dessous indique une erreur d'identification lors de la connexion en FTP ou SFTP à l'hébergement mutualisé :

![hosting](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Ce type de message est généré par une erreur dans le couple Login/Mot de passe.

Vérifiez vos identifiants afin de vous assurer qu'aucune erreur ne soit renseignée. Le cas échéant, vous pouvez [modifier le mot de passe de l'accès FTP](/pages/web_cloud/web_hosting/ftp_change_password) de votre hébergement web directement dans l'[espace client OVHcloud](/links/manager).

///

/// details | Connectino timed out after 20 seconds of inactivity - Could not connect to server

Dans le cas ci-dessous, l'erreur est générée par un nom d'hôte incorrect :

![hosting](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Vérifiez alors ce dernier par rapport au nom d'hôte déclaré dans votre [espace client OVHcloud](/links/manager).

///

### 3 - Transfert de fichiers

Pour réaliser le transfert de vos fichiers en (S)FTP, vous pouvez les sélectionner puis réaliser un glisser-déposer des répertoires/fichiers depuis la fenêtre de gauche *(ordinateur)* vers la fenêtre de droite *(hébergement)* (**zones 4 et 5** décrites dans la section de ce tutoriel relative à [l'interface](#interface) de FileZilla).

Faites attention à bien sélectionner le répertoire cible dans la fenêtre de droite.

Une fois cette action réalisée, vos fichiers vont automatiquement se mettre en file d'attente pour être déposés sur le serveur.

![hosting](/pages/assets/screens/other/web-tools/filezilla/drag-drop-fr.png){.thumbnail}

### 4 - Autres fonctionnalités de FileZilla

**Cliquez sur les titres ci-dessous pour afficher leurs contenus respectifs.**

/// details | Vue sur la file d'attente

Une vue sur la file d'attente est disponible (**zone 6** décrite dans la section de ce tutoriel relative à [l'interface](#interface) de FileZilla).

Dans cete zone, vous retrouvez :

- les fichiers en attente d'être déposés sur le serveur distant encore présents dans la file d'attente ;
- les fichiers pour lesquels le transfert à échoué ;
- les fichiers pour lesquels le transfert est réussi sur l'hébergement distant.

![hosting](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Menu contextuel Serveur

Faites un clic-droit sur l'un des fichiers présents dans la **zone 5** (décrite dans la section de ce tutoriel relative à [l'interface](#interface) de FileZilla).

Un menu contextuel apparait, et plusieurs choix vous sont proposés :

- Télécharger : Télécharge le fichier dans le dossier local ouvert.
- Ajouter les fichiers à la file d'attente : Ajoute le fichier à la file d'attente, vous permet par exemple de différer le téléchargement des données.
- Afficher/Éditer : Vous permet d'afficher ou d'éditer directement un fichier présent sur votre hébergement. Vous devez cependant avoir un logiciel capable de lire le fichier installé sur votre poste.
- Créer un dossier : Vous permet de créer un nouveau dossier directement sur l'hébergement distant.
- Actualiser : Actualise l'affichage des données afin d'afficher correctement les différents fichiers présents.
- Supprimer : Vous permet de supprimer le fichier sélectionné.
- Renommer : Vous permet de renommer le fichier sélectionné.
- Copier l'(es) adresse(s) dans le presse-papier : Vous permet de copier automatiquement le lien direct vers le fichier sélectionné. Exemple d'URL qui peut être générée : `ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg`.
- Permissions de fichier : Vous donne la possibilité de modifier les droits des fichiers (Chmod).

![hosting](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Droits d'accès (Chmod) sur les fichiers et les dossiers

Faites un clic-droit sur l'un des fichiers présents sur le serveur, puis sélectionnez `Permissions de fichier ...`{.action}.

Vous pouvez modifier les droits d'accès (Chmod) de vos fichiers et de vos dossiers présents sur l'hébergement.

Généralement, il est plus facile de gérer les droits Chmod avec la valeur chiffrée `XXX` (composée de 3 chiffres pouvant aller de 0 à 7). Le panel de permissions peut alors aller de `000` (aucun droit) à `777` (tous les droits).

> [!alert]
>
> Attention, il n'est pas recommandé de mettre les droits Chmod 000 sur vos dossiers ou vos fichiers. En effet, vous n'aurez plus la possibilité (du moins en FTP) de gérer cet élément (y compris en tant qu'administrateur FTP).
>
> Il en va de même pour les droits Chmod 777 car, à l'inverse du Chmod 000, tout le monde peut agir sur le dossier ou le fichier, ce qui présente une faille de sécurité conséquente pour vos données hébergées.
>

Le premier des trois chiffres `XXX` définissant le Chmod correspond aux droits du propriétaire/administrateur, le deuxième aux droits de groupes (rarement utilisé et généralement égal à 0) et le troisième aux visiteurs de votre site sur votre hébergement.

Par défaut, nous recommandons de ne pas dépasser les droits Chmod **705** pour les dossiers et les droits Chmod **604** pour les fichiers.

Plus le chiffre est élevé, plus les permissions sont importantes.

![hosting](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Renseignez les permissions que vous souhaitez attribuer, la valeur Chmod sera automatiquement mise à jour.

Vous pouvez cocher la case « Récursion dans les sous-dossiers ».

Cela aura pour effet de modifier les droits du dossier en question, ainsi que des dossiers et des fichiers qui pourraient être présents dans celui-ci.

///

/// details | Réouverture de site web

> [!primary]
>
> Indépendamment d'une action de votre part, votre hébergement peut être désactivé suite à la détection de fichiers malveillants ou non autorisés sur votre hébergement par nos systèmes de sécurité.
>
> Vous devez alors [sécuriser vos solutions](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#etape-2-securiser-vos-solutions) tout en corrigeant les failles de sécurité évoquées dans la notification de blocage reçue par e-mail.
>

Cliquez ensuite sur `Serveur`{.action} puis sélectionnez `Saisir une commande personnalisée`{.action} (cette option peut aussi s'appeler `Entrez une commande FTP`{.action}).

Renseignez la commande suivante :

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Cette commande n'est pas fonctionnelle en SFTP.
>

![hosting](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Si vous obtenez l'erreur `550 would not change perms on /. not such file or directory`, utilisez la commande suivante :

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Pour vérifier que la réouverture est bien effective, testez votre site depuis un navigateur Internet au bout de quelques minutes.
>

> [!warning]
>
> Veillez à tester l'affichage après 3 heures maximum.<br>
> En effet, nos robots passent toutes les 3 heures minimum pour vérifier les changements d'état.<br>
> En fonction du moment où la manipulation ci-dessus sera réalisée, le rétablissement de l'affichage de votre site pourra donc être plus ou moins rapide.<br>
> Si le délai des 3 heures est passé et que votre site n'est toujours pas en ligne, vérifiez que la commande renseignée est bien passée en réitérant l'opération.<br>
> Si cela ne fonctionne toujours pas, veuillez contacter notre support.
> 

///

/// details | Transfert de fichiers binaires

Pour les fichiers de type binaire, comme par exemple les fichiers de type **CGI**, il peut être intéressant de choisir la manière dont le transfert sera réalisé.

Pour modifier le type de transfert, sélectionnez `Transfert`{.action} dans le menu principal puis `Type de transfert`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Comparaison de dossiers

![hosting](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

L'option de comparaison de fichiers affiche des couleurs dans les **zones 4** et **5** (présentées dans la section de ce tutoriel relative à [l'interface](#interface) de FileZilla). Cette option permet de mettre en évidence les différences entre les fichiers et dossiers locaux et ceux sur le serveur. 

En effectuant un clic-droit sur l'icône, vous pouvez changer le mode de comparaison. Il vous sera alors proposé d'activer ou de désactiver l'option, mais également de :

- comparer la taille des fichiers;
- comparer l'horodatage;
- masquer les fichiers identiques.

**Signification des couleurs** : 

- Jaune : Le fichier existe uniquement d'un seul côté.
- Vert : Le fichier est plus récent que le fichier non coloré de l'autre côté.
- Rouge : Les tailles des fichiers sont différentes.

///

## Aller plus loin <a name="go-further"></a>

Vous trouverez ci-après le lien vers notre documentation pour [résoudre les erreurs récurrentes lors de l'utilisation d'un logiciel FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

Plus généralement, retrouvez [l'ensemble de nos guides relatifs aux hébergements mutualisés](/products/web-cloud-hosting).

N'hésitez pas à consulter la [page officielle de FileZilla](https://filezilla-project.org/).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).