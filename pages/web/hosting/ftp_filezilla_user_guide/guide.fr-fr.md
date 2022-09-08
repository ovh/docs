---
title: 'Tutoriels - Utilisation du logiciel FileZilla avec votre hebergement'
slug: mutualise-guide-utilisation-filezilla
excerpt: "Retrouvez ici un tutoriel pour l'utilisation du logiciel Filezilla sur votre hebergement mutualise."
section: 'FTP et SSH'
order: 04
---

**Dernière mise à jour le 06/09/2022**

## Objectif

Retrouvez ici un tutoriel sur l'utilisation du logiciel Filezilla avec votre hébergement mutualisé.

Vous pourrez notamment vous [connecter à l'espace "FTP"](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement pour y créer/modifier/supprimer des fichiers.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
> 

## Prérequis

- Disposer d'un hébergement mutualisé OVHcloud
- Installer le logiciel Filezilla. Pour l'installer gratuitement, veuillez vous rendre sur le site : [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Généralités

<center><img src="images/2400.png"></center>

### Présentation

FileZilla est un logiciel disponible gratuitement sur plusieurs systèmes d'exploitations (Windows, MacOS, etc).

Ce dernier vous donne notamment la possibilité de mettre en ligne votre site internet (ou simplement des fichiers) en vous permettant de vous [connecter à l'espace "FTP"](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement.

### L'interface <a name="interface"></a>

![hosting](images/1818.png){.thumbnail}

La **zone 1** donne des informations sur l'état de la connexion, les transferts, les erreurs de connexions, etc. La plupart des informations qui y sont présentes ne seront pas détaillées dans ce tutoriel. Si vous souhaitez en savoir plus sur le sujet, nous vous invitons à vous rendre sur la [documentation officielle de Filezilla](https://filezilla-project.org/){.external}.

La **zone 2** reprend l'arborescence de vos dossiers (ou de vos fichiers) à transférer, présents en local sur votre ordinateur.

La **zone 3** reprend l'arborescence présente sur votre hébergement (serveur) lorsque vous êtes connecté à ce dernier. L'affichage dans cette zone se limite aux répertoires/dossiers, sous-répertoires/sous-dossiers et fichiers présents en amont et au même niveau que le répertoire/dossier dans lequel vous vous positionnez dans votre hébergement.

La **zone 4** liste le répertoire/dossier que vous avez ouvert localement sur votre ordinateur, reprenant le nom, la taille, le type et la date de modification des fichiers.

La **zone 5** liste le répertoire/dossier que vous avez ouvert sur votre hébergement (serveur).Ceci en reprenant les noms, les tailles, les types, les dates de modification, les droits et les propriétaires des fichiers.

La **zone 6** indique la liste d'attente des fichiers qui vont être transférés (ou en cours de transfert) de votre ordinateur vers le serveur (ou inversement).

La partie **encadrée** tout en haut de l'interface reprend le nom d'hôte (serveur sur lequel vous souhaitez vous connecter), ainsi que le nom d'utilisateur du **FTP** (**F**ile **T**ransfer **P**rotocol), son mot de passe et le port utilisé. Tous les paramètres sont disponibles dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## En pratique

### Connexion FTP

![hosting](images/quickcnt.png){.thumbnail}

Sur la partie haute dans Filezilla et afin d'établir la connexion au serveur distant, on vous demandera :

|Information à renseigner|Détails|
|---|---|
|Serveur FTP|Il s'agit de l'adresse de serveur vous permettant d'accéder à votre espace de stockage.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à : « Serveur », « Adresse de serveur », « Hôte », « Nom d'hôte », ou encore « Host ».Pour les hébergements mutualisés, il a généralement cette forme : *ftp.clusterXXX.hosting.ovh.net* (où les "XXX" représentent le numéro de cluster où se trouve votre hébergement mutualisé)|
|Login FTP|Il s'agit de l'identifiant vous permettant d'accéder à votre espace de stockage.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à : « Utilisateur », « Nom d'utilisateur », « Identifiant », « Login », ou encore « Username ».|
|Mot de passe de l'utilisateur FTP|Il s'agit du mot de passe associé au login FTP.<br><br> Selon le logiciel utilisé, la dénomination peut ressembler à « Mot de passe » ou « Password ».|
|Port de connexion|Celui-ci est généralement complété automatiquement par le logiciel. Si vous devez le renseigner :<br><br>- utilisez le port « 21 » pour une connexion utilisant le protocole FTP ;<br>- utilisez le port « 22 » pour une connexion utilisant le protocole SFTP (dans le cas où celui-ci est activé).|

Si vous n’êtes pas en possession de ces éléments, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie « Web Cloud », puis cliquez sur `Hébergements`{.action}. Choisissez alors le nom de l'hébergement concerné, puis positionnez-vous sur l'onglet `FTP - SSH`{.action}. Les informations liées à votre espace de stockage apparaissent alors :

![hosting](images/loginFTP-SSH.png){.thumbnail}

Une fois que tout est correctement saisi dans l'encadré **1** de l'image ci-dessous, cliquez sur `Connexion rapide`{.action} afin d'établir la connexion au serveur.

![hosting](images/1819.png){.thumbnail}

Si la connexion a bien été effectuée avec succès, vous retrouvez le statut présent dans l'encadré **2** de l'image ci-dessus. Vous pouvez ainsi voir vos répertoires/dossiers et fichiers déjà présents sur votre hébergement dans l'encadré **3**.

### Connexion SFTP

Le **SFTP** (pour **S**ecure **F**ile **T**ransfer **P**rotocol) est un protocole similaire au **FTP**. Il utilise comme le SSH : le port 22 par défaut au lieu du port 21. En plus d'établir une connexion sécurisée, il vous permettra de modifier des droits de fichiers que vous ne pouvez pas exécuter en étant connecté en **FTP** sur le port 21 par exemple.

> [!success]
>
> SFTP est activable gratuitement pour toutes les offres d'hébergements d'OVHcloud (sauf 60free/demo1g) !
> 

#### **Verifiez l'activation de SFTP**

Avant d'aller plus loin, vérifiez tout d'abord que le SFTP est activé pour votre "Login FTP".

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/manager/web){.external}, dans la partie « Web Cloud », puis cliquez sur `Hébergements`{.action}. Choisissez alors le nom de l'hébergement concerné, puis positionnez-vous sur l'onglet `FTP - SSH`{.action}.

Vérifier ensuite si le "SFTP" est actif dans le tableau en bas de page.

![Activation SFTP offre start](images/enable_sftp_start.png){.thumbnail}

Dans les autres cas :

- Cliquez sur les `"..."`{.action} à droite du tableau puis sur `Editer`{.action}.

![Activation SFTP 1](images/enable_sftp_1.png){.thumbnail}

- Dans la fenêtre qui s'affiche, vérifiez alors que l'une des 2 options suivantes est activée :

    - "FTP et SFTP", si vous ne souhaitez activer **que le SFTP** en plus du FTP.
    - "FTP, SFTP et SSH", si vous souhaitez activer le FTP, le **SFTP** et le **SSH**.

![Activation SFTP 2](images/enable_sftp_2.png){.thumbnail}

- Cliquez ensuite sur `Suivant`{.action} puis sur `Valider`{.action}

#### **Lancez la connexion SFTP**

![hosting](images/quickcnt.png){.thumbnail}

Sur la partie haute dans Filezilla et afin d'établir la connexion au serveur distant (hébergement), renseignez les éléments ci-après :

- Hôte : ftp.clusterXXX.hosting.ovh.net (n'oubliez pas de remplacer les "X" par ceux de votre cluster d'hébergement)
- Identifiant : "votre login FTP"
- Mot de passe : "le mot de passe FTP associé au login"
- Port : 22 cette fois

Après avoir cliqué sur le bouton `Connexion rapide`{.action}, une boîte de dialogue s'ouvre (voir l'image ci-dessous) afin de certifier la connexion à l'hôte sur lequel vous vous apprêtez à vous connecter. En étant connecté sur un hôte OVHcloud, vous pouvez cocher la case "*Toujours faire confiance à cet hôte, ajouter cette clé au cache*" afin que le logiciel ne vous le redemande plus à l'avenir.

![hosting](images/1834.png){.thumbnail}

### Erreurs de connexion

Le message affiché ci-dessous nous indique une erreur d'identification lors de la connexion en FTP ou SFTP à l'hébergement mutualisé :

![hosting](images/1820.png){.thumbnail}

Ce type de message est généré par une erreur dans le couple : Login/Mot de passe

Vérifiez vos identifiants afin de vous assurer qu'aucune erreur ne soit renseignée. Le cas échéant, il vous est possible de modifier le mot de passe de l'accès FTP de votre hébergement directement dans l'[espace client OVHcloud](https://www.ovh.com/manager/web){.external}.

*Un guide est disponible concernant la [modification du mot de passe FTP](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/) sur les offres mutualisées.*

Dans le cas ci-dessous, l'erreur est générée par un nom d'hôte incorrect :

![hosting](images/1824.png){.thumbnail}

Vous devez donc vérifier ce dernier par rapport au nom d'hôte déclaré dans votre [espace client OVHcloud](https://www.ovh.com/manager/web){.external}.

### Transfert des fichiers

Pour réaliser le transfert de vos fichiers en FTP, vous pouvez simplement les sélectionner et réaliser un glisser-déposer des fichiers de la fenêtre de gauche *(vos fichiers en local)* vers la fenêtre de droite *(votre espace d'hébergement)* (**zones 4 et 5** décrites dans la section de ce tutoriel relative à [l'interface](#interface) de Filezilla).

- Attention à bien sélectionner le dossier cible dans la fenêtre de droite.

Une fois cette action réalisée, vos fichiers vont automatiquement se mettre en file d'attente pour être déposés sur le serveur.

![hosting](images/1821.png){.thumbnail}

### Vue sur la file d'attente

Une vue sur la file d'attente est disponible (**zone 6** décrite dans la section de ce tutoriel relative à [l'interface](#interface) de Filezilla).

À ce niveau il vous est possible de retrouver :

- les fichiers en attente d'être déposés sur le serveur distant encore présents dans la file d'attente.
- les fichiers pour lesquels le transfert à échoué.
- les fichiers pour lesquels le transfert est réussi sur l'hébergement distant.

![hosting](images/1822.png){.thumbnail}

### Menu contextuel Serveur

Si vous réalisez un clic droit sur l'un des fichiers présents (**zone 5** décrite dans la section de ce tutoriel relative à [l'interface](#interface) de Filezilla).

Un menu contextuel apparait, et plusieurs choix vous sont proposés :

- Télécharger : *télécharge le fichier dans le dossier local ouvert.*
- Ajouter les fichiers à la file d'attente : *ajoute le fichier à la file d'attente, vous permet par exemple de différer le téléchargement des données.*
- Afficher/Éditer : *vous permet d'afficher ou d'éditer directement un fichier présent sur votre hébergement, vous devez cependant avoir un logiciel capable de lire le fichier installé sur votre poste.*
- Créer un dossier : *vous permet de créer un nouveau dossier directement sur l'hébergement distant.*
- Actualiser : *actualise l'affichage des données afin d'afficher correctement les différents fichiers présents.*
- Supprimer : *vous permet de supprimer le fichier sélectionné.*
- Renommer : *vous permet de renommer le fichier sélectionné.*
- Copier l'(es) adresse(s) dans le presse-papier : *vous permet de copier automatiquement le lien direct vers le fichier sélectionné.* *Exemple d'URL qui peut être générée : ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg*
- Permissions de fichier : *vous donne la possibilité de modifier les droits des fichiers (Chmod)*

![hosting](images/1830.png){.thumbnail}

## Informations utiles

### Droits d'accès (Chmod) sur les fichiers et les dossiers

Afin d'accéder à cette interface, réalisez un clic droit sur l'un des fichiers présents sur le serveur, puis sélectionnez `Permissions de fichier ...`{.action}.

Vous avez la possibilité dans cette interface de modifier les droits d'accès FTP (Chmod) de vos fichiers et de vos dossiers présents sur l'hébergement.

Généralement, il est plus facile de gérer les droits "Chmod" avec la valeur chiffrée (composée de 3 chiffres pouvant aller de "0" à "7") : "XXX". Le panel de permissions peut alors aller de "000" (aucun droits) à "777" (tous les droits).

[!warning]
>
> Attention, il n'est pas recommandé de mettre les droits "Chmod 000" sur vos dossiers ou vos fichiers. En effet, vous n'aurez plus la possibilité (du moins en FTP) de gérer cet élément (y compris en tant qu'administrateur FTP de votre hébergement).
>
> Il en va de même pour les droits "Chmod 777" car, à l'inverse du "Chmod 000", tout le monde peut agir sur le dossier ou le fichier : ce qui présente une faille de sécurité conséquente pour vos données hébergées.
>

Le premier des trois chiffres "XXX" définissant le "Chmod" correspond au droits du propriétaire/administrateur, le deuxième aux droits de groupes (rarement utilisé et généralement égal à 0) et le troisième aux "visiteurs" de votre site sur votre hébergement.

Par défaut, nous recommandons de ne pas dépasser les droits "Chmod **705**" pour les dossiers et les droits "Chmod **604**" pour les fichiers.

Plus le chiffre est élevé, plus les permissions sont importantes.

![hosting](images/1831.png){.thumbnail}

Renseignez les permissions que vous souhaitez attribuer, la valeur "Chmod" sera automatiquement mise à jour.

Il vous est possible de cocher "Récursion dans les sous-dossiers".

Cela aura pour effet de modifier les droits du dossier en question, ainsi que des dossiers et des fichiers qui pourraient être présents dans celui-ci.

### Reouverture de site

> [!primary]
>
> Indépendamment d'une action de votre part, il est possible que suite à la détection de fichiers malveillants ou non autorisés sur votre hébergement par nos systèmes de sécurité, votre hébergement soit désactivé.
>
> Il vous sera alors nécessaire de [sécuriser vos solutions](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#etape-2-securiser-vos-solutions) tout en corrigeant les failles de sécurité évoquées dans la notification de blocaque reçue par mail.
>

Ouvrez ensuite FileZilla, cliquez sur `Serveur`{.action} puis sélectionnez `Saisir une commande personnalisée`{.action}.

> [!primary]
>
> Dans FileZilla à la place de `Saisir une commande personnalisée`{.action} il est possible d'avoir `Entrez une commande FTP`{.action}.*
>

Renseignez la commande :

```bash
SITE CHMOD 705 /
```

> [!alert]
>
>Cette commande n'est pas fonctionnel en SFTP.
>

![hosting](images/1829.png){.thumbnail}

Si vous obtenez l'erreur suivante :

**550 would not chance perms on /. not such file or directory**

Il vous faut dans ce cas utiliser la commande :

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Pour vérifier que la réouverture est bien effective, testez votre site depuis un navigateur Internet au bout de quelques minutes.
>

> [!alert]
>
> Pour rappel, veillez à tester l'affichage après 3 heures maximum. 
> En effet, nos robots passent toutes les 3 heures minimum pour vérifier les changements d'état.
> En fonction du moment où la manipulation ci-dessus sera réalisée, le rétablissement de l'affichage de votre site pourra donc être plus ou moins rapide.
> Si le délai des 3 heures est passé et que votre site n'est toujours pas en ligne, vérifiez que la commande renseignée est bien passée en réitérant l'opération.
> Si cela ne fonctione toujours pas, veuillez contacter notre support.
> 

### Transfert de fichiers binaires

Pour les fichiers de type binaire, comme par exemple des fichiers de type **CGI** : il peut être intéressant de choisir la manière dont le transfert sera réalisé.

Pour modifier cela, sélectionnez `Transfert`{.action} dans le menu principal puis `Type de transfert`{.action}.

![hosting](images/1832.png){.thumbnail}

### Comparaison de dossiers

![hosting](images/1823.png){.thumbnail}

Cette option affiche des couleurs dans les  **zones 4** et  **5** évoquées dans la section de ce tutoriel relative à [l'interface](#interface) de Filezilla afin de comparer les différences entre les fichiers et dossiers locaux avec le serveur. En effectuant un clic-droit sur l'icône, vous pouvez changer le mode de comparaison. On vous proposera alors d'activer ou de désactiver l'option, mais également de :

- Comparer la taille des fichiers
- Comparer l'horodatage
- Masquer les fichiers identiques

Correspondance des couleurs :

- Jaune : le fichier existe uniquement d'un seul côté
- Vert : le fichier est plus récent que le fichier non marqué de l'autre côté
- Rouge : les tailles des fichiers sont différentes

### Préferences

Il vous est possible de modifier vos paramètres de reconnexion sur le serveur.

> [!alert]
>
> Attention toutefois, cela peut être considéré par de l'abus par certains serveurs et pourrait bannir votre adresse IP.
>

Pour modifier ces réglages, rendez-vous dans `Édition`{.action} puis `Paramètres`{.action} et enfin `Connexion`{.action}.

![hosting](images/1825.png){.thumbnail}

Il vous est possible de modifier les préférences concernant les actions à exécuter par défaut lors de modification d'un fichier existant.

Pour modifier ces réglages, rendez-vous dans `Édition`{.action} et ensuite dans `Paramètres`{.action} puis dans `transferts`{.action}.

![hosting](images/1826.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>

Vous trouverez ci-après le lien vers notre documentation pour [résoudre les erreurs récurrentes lors de l'utilisation d'un logiciel FTP](https://docs.ovh.com/fr/hosting/mutualise-les-problemes-ftp-recurrents/).

Plus généralement, retrouvez [l'ensemble de nos guides relatifs aux hébergements mutualisés](https://docs.ovh.com/fr/hosting/).

N'hésitez pas à consulter la [Page officielle de Filezilla](https://filezilla-project.org/).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
