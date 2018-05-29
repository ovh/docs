---
title: 'Importer une sauvegarde dans la base de données d''un hébergement web'
slug: mutualise-guide-importation-dune-base-de-donnees-mysql
excerpt: 'Découvrez comment importer une sauvegarde dans la base de données de votre hébergement web OVH'
section: 'Bases de données'
order: 4
---

**Dernière mise à jour le 29/05/2018**

## Objectif

Aujourd'hui utilisées par la quasi-totalité des systèmes de gestion de contenu (Content Management System ou CMS) comme WordPress, Joomla!, les bases de données permettent de stocker des éléments dits dynamiques comme des commentaires ou des articles par exemple. Pour diverses raisons, vous pouvez être amené à importer des données dans l'une de vos bases afin d'en modifier ou remplacer le contenu.

**Découvrez comment importer une sauvegarde dans la base de données de votre hébergement web OVH.**

## Prérequis

- Disposer d'une offre d’[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}.
- Disposer d'une base de données créée dans le cadre d'une offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}.
- Être en possession de la sauvegarde que vous souhaitez importer dans votre base de données ou être en mesure de pouvoir la récupérer.
- Selon la méthode d'importation utilisée, disposer d'un accès à la gestion de l'offre d'hébergement web depuis l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} ou des informations permettant de vous connecter à la base de données.

## En pratique

Avant de débuter, vous devez définir la méthode que vous allez utiliser pour importer la sauvegarde dans la base de données concernée. Plusieurs possibilités s’offrent à vous suivant les compétences techniques dont vous disposez sur le sujet.

- **Restaurer en quelques clics votre base de données à une date antérieure** : cette solution permet de restaurer le contenu de vos bases de données grâce aux sauvegardes présentes dans l'outil de sauvegarde d'OVH. Cette solution ne demande pas de compétences techniques particulières et est exécutable depuis l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Importer en quelques clics votre propre fichier de sauvegarde** : cette solution permet d'importer les données de votre propre fichier de sauvegarde, préalablement en votre possession, dans l'une de vos bases de données. Cette solution se réalise depuis l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Effectuer l'import depuis l'interface web phpMyAdmin** : cette solution nécessite de vous connecter à l'interface phpMyAdmin pour y réaliser la manipulation. Des connaissances sur cette dernière sont donc nécessaires afin de pouvoir l'utiliser et une limite de taille sur le fichier de sauvegarde est imposée.

- **Réaliser l'import en utilisant un script** : cette solution nécessite de créer un script, hébergé sur votre hébergement web OVH, afin de réaliser l'import. Des connaissances spécifiques pour créer ce script sont nécessaires.

- **Réaliser l'import depuis une commande SSH** : cette solution nécessite de se connecter à votre espace de stockage via le protocole SSH, puis d'utiliser des commandes pour interagir avec celui-ci. Des connaissances plus avancées, ainsi qu’une offre d’[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} spécifique sont nécessaires pour utiliser ce type d’accès.

Certaines des méthodes ci-dessus ne sont pas inhérentes à une interface OVH. Vous devrez donc, pour ces dernières, accomplir la manipulation selon vos propres connaissances. Quelques informations sont cependant présentes ci-dessous, mais elles ne se substituent pas à l’aide d’un webmaster.

Poursuivez la lecture de cette documentation selon la méthode d'importation souhaitée.

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

### Restaurer une sauvegarde depuis l'espace client

Pour effectuer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web. Dès lors, cliquez sur les trois points à droite de la base de données que vous souhaitez restaurer à une date antérieure, puis sur `Restaurer une sauvegarde`{.action}. Sachez que cette action remplacera le contenu actuel de la base de données par celui de la sauvegarde.

![databaseimport](images/database-import-step5.png){.thumbnail}

Toutes les sauvegardes disponibles de la base de données sélectionnée s'affichent alors. Vous pourrez y visionner la date précise des sauvegardes ainsi que la date à laquelle ces dernières seront supprimées de l'outil d'OVH.

Cliquez sur les trois points à droite de la sauvegarde que vous souhaitez restaurer, puis sur `Restaurer la sauvegarde`{.action}. Sur la fenêtre qui apparaît, assurez-vous que les informations sont correctes puis cliquez sur `Valider`{.action}. Patientez maintenant le temps que la restauration se réalise.

![databaseimport](images/database-import-step6.png){.thumbnail}

### Importer votre propre sauvegarde depuis l'espace client

Pour effectuer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web. Dès lors, cliquez sur les trois points à droite de la base de données dans laquelle vous souhaitez importer des données, puis sur `Importer un fichier`{.action}.

![databaseimport](images/database-import-step1.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez `Importer un nouveau fichier`{.action} puis cliquez sur `Suivant`{.action}.

> [!primary]
>
> Le bouton `Utiliser un fichier existant`{.action} permet d'importer de nouveau les données d'un fichier déjà envoyé dans l'outil d'import.
>

![databaseimport](images/database-import-step2.png){.thumbnail}

Renseignez un nom de fichier (qui vous permettra d’identifier cette sauvegarde plus tard si vous souhaitez de nouveau la restaurer), puis à côté de `Fichier`, sélectionnez le fichier de sauvegarde de la base de données sur votre ordinateur. Cliquez sur `Envoyer`{.action}.

Patientez le temps que l’interface vous indique que le fichier a été envoyé avec succès, puis cliquez sur le bouton `Suivant`{.action}.

![databaseimport](images/database-import-step3.png){.thumbnail}

Enfin, choisissez d’appliquer ou non les options additionnelles affichées :

- **vider la base de données actuelle** : en cochant cette case, le contenu actuellement présent dans la base de données sera intégralement supprimé puis remplacé par celui de votre sauvegarde. Si, et seulement si, vous souhaitez remplacer le contenu actuel de la base de données par celui du fichier de sauvegarde, nous vous conseillons de cocher cette case ;

- **envoyer un e-mail à la fin de l’importation** : en cochant la case, une notification par e-mail vous sera envoyée lorsque l’importation de la base de données sera effectuée.

Une fois votre choix fait, cliquez sur le bouton `Valider`{.action} puis patientez le temps que l'importation arrive à son terme.

![databaseimport](images/database-import-step4.png){.thumbnail}

### Réaliser l'import depuis l'interface web phpMyAdmin

Pour réaliser la manipulation, vous devez vous connecter à phpMyAdmin. Pour connaître le lien d'accès à ce dernier, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

Le tableau qui s'affiche contient toutes les bases de données créées dans le cadre de votre offre d'hébergement web. Cliquez dans ce dernier sur les trois points à droite de la base de données concernée, puis sur `Accéder à phpMyAdmin`{.action}.

![databaseimport](images/database-import-step7.png){.thumbnail}

Une fois sur la page de phpMyAdmin, renseignez les informations de la base de données, choisissez dans le menu déroulant d'accéder aux données actuelles de la base de données, puis connectez-vous. Une fois connecté, rendez-vous à présent sur l'onglet `Importer`{.action} et complétez les informations demandées. Pour rappel, une limite de taille sur le fichier de sauvegarde vous est imposée.

> [!warning]
>
> L'interface phpMyAdmin n'ayant pas été créée par OVH, vous devrez réaliser la manipulation selon vos propres connaissances. Nous vous recommandons de faire appel à un prestataire spécialisé et/ou de vous rapprocher du site l’éditeur de l'interface si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
>

### Importer une sauvegarde en utilisant un script

La manipulation s'effectue en plusieurs étapes. Assurez-vous d'être en possession du fichier de sauvegarde que vous souhaitez importer ainsi que des informations permettant de se connecter à la base de données qui recevra l'import : un nom d’utilisateur, son mot de passe, le nom de la base de données ainsi que l’adresse du serveur.

> [!warning]
>
> Cette solution est technique et requiert des compétences en programmation. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

#### Étape 1 : créer le script d'import

La première étape consiste à créer le script qui permettra de réaliser l'import vers la base de données. Vous trouverez ci-dessous un exemple de script pouvant vous aider dans votre démarche, mais il ne se substitue pas à l’aide d’un webmaster.

```php
<?php
system("cat nom_fichier_sauvegarde.sql | mysql --host=adresse_du_serveur --user=nom_utilisateur --password=mot_de_passe_utilisateur nom_base_de_données");
?>
```

Prenez soin de remplacer les informations génériques présentes dans ce script par les informations de la base de données concernée en vous aidant des éléments ci-dessous. Une fois le script terminé, nous vous conseillons de le nommer « import.php » par exemple.

|Informations|À remplacer par|
|---|---|
|nom_fichier_sauvegarde|Le nom que porte le fichier de sauvegarde que vous souhaitez importer.|
|adresse_du_serveur|L'adresse du serveur de la base de données vers laquelle vous allez importer les données.|
|nom_utilisateur|Le nom d'utilisateur disposant d'un accès à la base de données concernée.|
|mot_de_passe_utilisateur|Le mot de passe du nom d'utilisateur indiqué précédemment.|
|nom_base_de_données|Le nom de la base de données concernée.|

#### Étape 2 : télécharger le script et la sauvegarde sur l'espace de stockage

Une fois le script d'import correctement créé, vous devez le télécharger ainsi que le fichier de sauvegarde que vous souhaitez importer sur l'espace de stockage de votre hébergement web. Pour cela, vous devrez vous connecter à ce dernier. Si vous ne savez pas comment faire, reportez-vous aux informations décrites dans l'étape 2 de la documentation intitulée « [Se connecter à l’espace de stockage](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#2-se-connecter-a-lespace-de-stockage){.external} ».

Afin de pouvoir mener à bien les étapes suivantes, téléchargez le script d'import et le fichier de sauvegarde dans le dossier « www ». **Nous vous invitons à être particulièrement attentif quant au nom du fichier du script d'import.** Assurez-vous de ne pas écraser un fichier déjà existant portant le même nom sur l'espace de stockage lorsque vous allez télécharger le script. Si un message d'avertissement de ce type apparaît, modifiez le nom du script nouvellement créé pour un autre, puis tentez de nouveau de le télécharger.

#### Étape 3 : appeler le script

Maintenant que le script d'import et le fichier de sauvegarde sont téléchargés sur l'espace de stockage, il ne reste plus qu'à initier la manipulation. Pour cela, il est nécessaire d'appeler le script.

Pour effectuer cette manipulation, vous devez accéder depuis votre navigateur internet à l'adresse URL complète du script (par exemple : mypersonaldomain.ovh/import.php si vous avez nommé votre script « import.php »). Si les informations renseignées dans le script sont correctes, l'importation s'initie. Il ne vous reste plus qu'à patienter quelques instants le temps qu'elle s'exécute. Si ce n'est pas le cas, vérifiez les informations renseignées dans le script puis tentez de nouveau la manipulation.

Une fois l'importation réalisée, nous vous conseillons vivement de supprimer le fichier de sauvegarde ainsi que le script du répertoire « www ».

### Importer une sauvegarde via une commande SSH

Pour réaliser la manipulation, vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage.

> [!warning]
>
> Des connaissances plus avancées sont nécessaires pour utiliser ce type d’accès. Quelques informations sur comment procéder sont présentes ci-dessous, cependant, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos.
>

Une fois connecté à votre espace de stockage via une connexion en SSH, vous devez utiliser une commande permettant de réaliser l'importation de la base de données. Vous en trouverez une ci-dessous pouvant vous aider dans votre démarche. Prenez en compte que vous devrez au préalable télécharger la sauvegarde que vous souhaitez importer sur l'espace de stockage et que vous devrez envoyer la commande dans votre terminal en vous positionnant sur le répertoire où se situe cette dernière.

```sh
cat nom_fichier_sauvegarde.sql | mysql --host=adresse_du_serveur --user=nom_utilisateur --password=mot_de_passe_utilisateur nom_base_de_données
```

Prenez soin de remplacer les informations génériques de cette commande par les informations de la base de données concernée. Une fois l'importation réalisée, nous vous conseillons de supprimer le fichier de sauvegarde du répertoire dans lequel vous l'avez téléchargé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.