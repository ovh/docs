---
title: 'Mettre en ligne un site internet sur son hébergement web'
slug: mettre-mon-site-en-ligne
excerpt: 'Apprenez à mettre en ligne un site internet sur votre hébergement web OVHcloud'
section: 'Premiers pas'
order: 2
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Sur le web, il existe une multitude de sites internet. Qu'il s'agisse de créer un blog ou une boutique en ligne, de partager une passion ou de promouvoir une activité professionnelle, votre [hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} vous permet d'y héberger le site internet que vous souhaitez, tant que celui-ci est compatible avec la [configuration de nos infrastructures](https://cluster015.hosting.ovh.net/infos/){.external}.

**Apprenez à mettre en ligne un site internet sur votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external}.
- Avoir reçu l'e-mail vous confirmant l'installation de votre hébergement web.
- Disposer d'un [nom de domaine]({ovh_www}/domaines/){.external} qui sera l'adresse sur laquelle votre site sera accessible.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : délimiter votre projet

Posséder une vision claire de votre objectif est primordial pour mener à bien votre projet. Que souhaitez-vous faire avec votre site internet ? Comment le mettre en ligne ? Plusieurs possibilités s'offrent à vous pour concrétiser votre projet sur un hébergement web OVHcloud.

- **Utiliser un site clés en main grâce aux modules en 1 clic OVHcloud** : cette solution permet de bénéficier d’une structure de site prête à l’emploi à personnaliser (thème, textes, etc.). OVHcloud en propose quatre déjà compatibles avec nos infrastructures avec ses modules en 1 clic à découvrir sur la page [« Créer un site Internet avec les modules en 1 clic »]({ovh_www}/hebergement-web/site/){.external}.

- **Utiliser un site clés en main à installer manuellement** : cette solution permet de bénéficier d’une structure de site prête à l’emploi à personnaliser (thème, textes, etc.) que vous devrez installer vous-même sur votre hébergement web OVHcloud.

- **Créer vous même votre site internet** : cette solution est plus technique et requiert des compétences en programmation, mais offre la possibilité de créer un projet sur mesure.

- **Migrer un site internet déjà existant chez OVHcloud** : cette solution peut s’avérer sensible si une interruption n’est pas envisageable pour le site concerné. Pour vous aider dans cette démarche, nous vous invitons également à consulter cette documentation : [« Migrer son site et ses e-mails vers OVHcloud »](../migrer-mon-site-chez-ovh/){.external}.


Après avoir évalué les différentes possibilités ci-dessus, deux choix s'offrent à vous :

- **vous souhaitez utiliser nos modules en 1 clic** : reportez-vous aux instructions décrites dans notre documentation [« Installer son site avec les modules en 1 clic »](../modules-en-1-clic/){.external} ;

- **vous ne souhaitez pas utiliser nos modules en 1 clic** : vous devrez réaliser l'installation de votre site manuellement sur votre hébergement. Pour cela, les informations présentes dans cette documentation pourront vous aider dans vos démarches, mais elles ne se substituent pas à l'aide d'un webmaster.
 
> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

### Étape 2 : mise en ligne des fichiers du site sur l'espace de stockage

Mettre en ligne un site manuellement sur un hébergement nécessite  plusieurs manipulations. Certaines d'entre elles peuvent être facultatives selon le site que vous installez et il peut exister plusieurs manières de les réaliser. Cependant, pour la plupart des projets actuels, on peut distinguer deux grandes étapes accompagnant la mise en ligne d'un site internet ; la première étant le téléchargement des fichiers du site sur l'espace de stockage.

Cette mise en ligne se réalise en différentes sous-étapes.

#### 1. Récupérer les fichiers du site.

Assurez-vous d'être en possession des fichiers du site que vous souhaitez mettre en ligne. Si vous êtes en train de migrer un site internet déjà existant, récupérez ces fichiers chez votre ancien hébergeur.

#### 2. Se connecter à l'espace de stockage.

Pour vous connecter à votre espace de stockage, vous devez être en possession des éléments suivants :

- un utilisateur FTP ou SSH actif ;
- le mot de passe associé à cet utilisateur FTP ou SSH ;
- l’adresse de ce serveur ;
- le port de connexion au serveur.

Ces éléments vous ont été communiqués dans l’e-mail vous notifiant l’installation de votre hébergement web. Si vous n’êtes pas en possession de ces derniers, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} dans la partie « Web », puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Choisissez alors le nom de l'hébergement concerné, puis positionnez-vous sur l'onglet `FTP - SSH`{.action}. 

![siteinstallation](images/get-website-online-step1.png){.thumbnail}

Les informations liées à votre espace de stockage apparaissent alors. Vous devriez pouvoir retrouver les éléments requis pour vous connecter à celui-ci. Si nécessaire, nous vous invitons à consulter notre guide : [« Se connecter à l’espace de stockage de son hébergement web »](../connexion-espace-stockage-ftp-hebergement-web/){.external}. Si vous n'êtes plus en possession du mot de passe, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](../modifier-mot-de-passe-utilisateur-ftp/){.external}.

Une fois tous les éléments en votre possession, la connexion à l'espace de stockage peut s'effectuer de trois manières différentes :

- **utiliser le FTP Explorer d'OVHcloud** : vous permet d'accéder à votre espace de stockage depuis votre navigateur internet. Pour l'utiliser, toujours depuis l'onglet `FTP - SSH`{.action}, cliquez sur le bouton `FTP Explorer`{.action} ;

- **utiliser un logiciel compatible avec le protocole FTP ou SFTP** : vous devrez installer un logiciel compatible sur votre ordinateur, comme FileZilla. Nous vous invitons à vous rapprocher de l'éditeur du logiciel installé si vous souhaitez obtenir de l'aide sur son utilisation, OVHcloud n'ayant pas créé celui-ci ;

- **utiliser un accès SSH** : vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage. Des connaissances plus avancées, ainsi qu'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} spécifique sont nécessaires pour utiliser ce type d'accès.

#### 3. Télécharger les fichiers sur l'espace de stockage.

Une fois connecté à votre espace de stockage, il ne vous reste plus qu'à mettre en ligne les fichiers de votre site. **Nous vous invitons à être particulièrement attentif quant au répertoire sur lequel vous allez télécharger les fichiers.** Dans un cas d'utilisation classique, le site doit être téléchargé dans le dossier « www ». Cependant, si vous utilisez votre hébergement pour héberger plusieurs sites internet, vous avez sûrement déclarer plusieurs **Multisite**.

Pour vérifier le dossier dans lequel doit être publié le site internet, positionnez-vous sur l'onglet `Multisite`{.action} depuis votre espace client OVHcloud. Dans le tableau qui s'affiche, pour le domaine souhaité, regardez le `Dossier racine`{.action} qui s'affiche. Publiez alors les fichiers du site dans ce dernier.

Il se peut que vous trouviez sur votre espace de stockage un fichier s'intitulant « index.html ». Ce dernier peut avoir été créé par OVHcloud lors de l'installation de votre hébergement pour afficher une page par défaut sur votre site internet. Si tel est le cas, n'oubliez pas de le supprimer lors de la mise en ligne de vos fichiers.

![siteinstallation](images/get-website-online-step2.png){.thumbnail}

### Étape 3 : lier le site internet à une base de données

> [!primary]
>
> Cette partie est facultative si votre site internet n'a pas besoin d'être relié à une base de données.
>

Aujourd'hui, la quasi-totalité des systèmes de gestion de contenu (CMS), tels que WordPress et Joomla! utilisent une base de données pour y stocker des éléments dits dynamiques, comme des commentaires ou des articles. Une connexion entre les fichiers du site et la base de données est donc indispensable afin que le site internet puisse fonctionner correctement. Pour cela, il existe un fichier de configuration disposant des informations de la base qui permet cette connexion.

Selon le site internet utilisé, ce lien doit être créé manuellement ou via une interface générée par le site lui-même. Il est réalisé en différentes sous-étapes, dont certaines peuvent être facultatives.

#### 1. Récupérer la base de données existante (facultatif).

Si vous êtes en train de migrer un site internet, récupérez la base de données existante chez votre ancien hébergeur. S'il s'agit d'un nouveau site, poursuivez vers l'étape suivante.

#### 2. Créer la base de données chez OVHcloud (facultatif).

Si vous disposez déjà d'une base de données que vous souhaitez utiliser (issue d'une offre d'[hébergement web OVHcloud]({ovh_www}/hebergement-web/){.external} ou d'une solution [SQL Privé]({ovh_www}/hebergement-web/options-sql.xml){.external} ou [Cloud DB]({ovh_www}/cloud/cloud-databases/){.external}), munissez-vous du nom d'utilisateur et de son mot de passe, du nom de la base de données ainsi que de l'adresse du serveur. Poursuivez alors vers l'étape suivante.

Si vous souhaitez créer une nouvelle base de données chez OVHcloud, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Choisissez le nom de l'hébergement concerné et positionnez-vous enfin sur l'onglet `Base de données`{.action}.

Dès lors, cliquez sur le bouton `Créer une base de données`{.action} ou, si ce dernier n'apparaît pas, sur `Actions`{.action} puis sur `Créer une base de données`{.action}. Suivez alors les informations qui s'affichent.

![siteinstallation](images/get-website-online-step3.png){.thumbnail}


#### 3. Importer la base de données existante (facultatif).

Si vous êtes en train de migrer un site internet, importez la base de données existante dans celle nouvellement créée. S'il s'agit d'un nouveau site, poursuivez vers l'étape suivante.

Il existe plusieurs méthodes pour effectuer cet import. OVHcloud en propose un depuis son espace client. Une fois positionné sur la liste des bases de données créées sur votre service dans votre espace client OVHcloud, cliquez sur les trois points à droite de la base de données nouvellement créée, puis sur `Importer un fichier`{.action}. Suivez alors les informations qui s'affichent.

![siteinstallation](images/get-website-online-step4.png){.thumbnail}

#### 4. Lier le site à la base de données.

Une fois la base de données disponible et les fichiers téléchargés sur votre espace de stockage, il ne vous reste plus qu'à les relier. Pour cela, vous devez être en possession des informations permettant de vous connecter à la base de données : un nom d'utilisateur, son mot de passe, le nom de la base de données ainsi que de l'adresse du serveur.

Créer ce lien dépend du site internet que vous êtes en train de mettre en ligne. Celui-ci est inhérent à la configuration du site internet et non à OVHcloud. Nous vous recommandons donc de vous rapprocher de l'éditeur de votre site ou de faire appel à un professionnel tel qu'un prestataire spécialisé si vous souhaitez obtenir de l'aide pour réaliser cette manipulation.

### Étape 4 : accéder à votre site internet

Une fois les fichiers téléchargés sur votre espace de stockage et la base de données liée à ce dernier (si votre site en utilise une), vous pouvez à présent accéder à votre site internet. Celui-ci devrait ainsi s'afficher correctement par le biais de votre navigateur.

Si vous constatez que celui-ci ne s'affiche pas correctement, nous vous conseillons de :

- **vérifier la configuration du nom de domaine** : il se peut que la configuration DNS du nom de domaine ne permette pas à celui-ci d'afficher le site que vous venez de télécharger sur votre hébergement web OVHcloud. Assurez-vous que l'enregistrement A paramétré actuellement dans la zone DNS de votre domaine correspond bien à l'adresse IP de votre hébergement web OVHcloud ;

- **vous assurer qu'aucun fichier n'est manquant** : il se peut que lors du téléchargement des fichiers vers votre hébergement web OVHcloud, vous ayez oublié des fichiers ou qu'une erreur se soit produite. Soyez tout de même vigilant lors de vos manipulations afin de ne pas briser le lien entre les fichiers du site et la base de données (si ce dernier en utilise une) ;

- **vérifier que le code du site ne comporte pas d'erreur** : cette vérification est sûrement la plus technique, mais il se peut que les fichiers que vous avez téléchargés comportent des erreurs et ne permettent pas au serveur d'afficher correctement, voir pas du tout, votre site internet.

Pour rappel, si vous rencontrez des difficultés lors de la mise en ligne de votre site internet, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service (du CMS installé par exemple).

## Aller plus loin

[Migrer son site et ses e-mails vers OVHcloud](../migrer-mon-site-chez-ovh/){.external}.

[Installer son site avec les modules en 1 clic](../modules-en-1-clic/){.external}.

[Se connecter à l’espace de stockage de son hébergement web](../connexion-espace-stockage-ftp-hebergement-web/){.external}.

[Modifier le mot de passe d’un utilisateur FTP](../modifier-mot-de-passe-utilisateur-ftp/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
