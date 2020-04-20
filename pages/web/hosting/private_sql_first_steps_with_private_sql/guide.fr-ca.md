---
title: Premiers pas avec le service SQL Privé
slug: premiers-pas-avec-sql-prive 
excerpt: Découvrez comment bien débuter avec un SQL Privé
section: SQL Privé
---

**Dernière mise à jour le 27/11/2017**

## Objectif

Le service SQL Privé permet de bénéficier d’une instance SQL fonctionnant de pair avec un hébergement web OVH et disposant de ressources dédiées et garanties. Cela offre davantage de performance et de flexibilité sur les systèmes de bases de données disponibles, ainsi que sur celles qu’il est possible de créer. Ce service s’adresse généralement à des clients ayant des besoins plus spécifiques.

**Découvrez comment bien débuter avec un SQL Privé.**

## Prérequis

- Disposer d'une instance SQL Privé (incluse dans une offre d'[hébergement web](https://www.ovh.com/fr/hebergement-web/){.external} ou commandée via une [option SQL](https://www.ovh.com/fr/hebergement-web/options-sql.xml){.external}).
- Disposer d'un [hébergement web](https://www.ovh.com/fr/hebergement-web/){.external} hébergé sur le même centre de données que votre instance SQL Privé (cette information est visible dans l'espace client OVH).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

### Visionner les informations générales de l'instance

Dans la barre de services à gauche de votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, rendez-vous dans la section `Bases de données`{.action}, puis sur l'instance SQL concernée. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}.

> [!primary]
>
> Le nom du service SQL Privé dans votre espace client OVH peut s'afficher de deux manières :
>
> - soit il contient une partie de votre référence client et se termine par trois chiffres (001 pour le premier service SQL Privé installé, 002 pour le second, etc.) ;
> - soit il débute par *sqlprive-*, puis contient une partie de votre référence client et se termine par trois chiffres (001 pour le premier service SQL Privé installé, 002 pour le second, etc.).
>

Vous pouvez y consulter les informations importantes concernant votre instance SQL. Nous vous invitons à prendre quelques instants afin de vous assurer que les informations affichées soient correctes ou correspondent aux indications ci-dessous.

|Information|Détails|
|---|---|
|État du service|Affiche notamment si l'instance est démarrée, en cours de redémarrage ou suspendue. Votre instance doit être démarrée pour pouvoir y réaliser des actions.|
|Type|Affiche le système de base de données utilisée par le serveur. Si vous ne savez pas si le type utilisé est correct, sachez que le plus courant est "MySQL", mais que d'autres existent également (PostgreSQL, MariaDB). À titre d'exemple, si votre site est un WordPress, un système MySQL convient parfaitement.|
|Version|Affiche la version du système de base de données utilisée par le serveur. Veillez à la compatibilité de votre site avec la version choisie.|
|RAM|Affiche la mémoire vive disponible pour votre instance ainsi que les éventuels dépassements de mémoire. Votre instance SQL Privé dispose de ressources dédiées et garanties : sa mémoire RAM. Si besoin, vous pouvez faire évoluer cette dernière et être prévenu si vous consommez toutes les ressources mémoires de votre instance.|
|Infrastructure|Affiche l'infrastructure utilisée par votre instance. Il s'agit d'une information inhérente à l'infrastructure d'OVH.|
|Datacenter|Affiche le centre de données dans lequel l'instance a été créée. Assurez-vous que le centre de données de votre instance soit le même que celui de l'hébergement web OVH où votre site internet est, ou sera, hébergé.|
|Host|Affiche le serveur OVH dans lequel votre instance est créée. Il s'agit d'une information inhérente à l'infrastructure d'OVH et peut être utilisée dans nos communications liées aux [incidents OVH](http://travaux.ovh.net/){.external}.|

![Informations générales](images/privatesql01-General-information.png){.thumbnail}


### Création d'une base de données

C'est dans cette dernière que seront stockées toutes les données inhérentes à votre site internet (par exemple, pour un blog, les commentaires).

Pour créer votre première base de données, cliquez sur l'onglet `Bases de données`{.action} puis sur le bouton `Ajouter une base de données`{.action}.

![Ajout d'une base de données](images/privatesql02-Adding-a-database.png){.thumbnail}

Sur la fenêtre qui s'affiche, vous pouvez créer un utilisateur. Ce dernier est indispensable, car il pourra se connecter sur votre instance et grâce à des droits qui lui sont attribués, il pourra effectuer des requêtes sur votre base de données (comme la lecture, l'insertion ou la suppression de données).

Vous avez donc la possibilité de créer l'utilisateur conjointement à votre base de données en cochant la case `Créer un utilisateur`{.action}, ou d'effectuer cette création séparément en la laissant décochée. Cochez la case pour une solution simple et rapide.

Selon votre choix, complétez maintenant les informations demandées tout en suivant les indications dans les bulles d'information, puis cliquez sur `Valider`{.action}.

- **Nom de la base** (obligatoire) : il s'agit du nom de votre future base de données.
- **Nom d'utilisateur** (facultatif si la case n'est pas cochée) : il s'agit de l'utilisateur qui pourra se connecter à votre base de données et y effectuer des requêtes.
- **Droits** (facultatif si la case n'est pas cochée) : il s'agit des droits qui seront associés à l'utilisateur sur la base de données. Pour une utilisation classique, sélectionnez `Administrateur`{.action}. Les droits peuvent être modifiés par la suite.
- **Mot de passe**/**Confirmer le mot de passe**** (facultatif si la case n'est pas cochée) : sélectionnez un mot de passe, puis confirmez ce dernier.

> [!warning]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors de l'enregistrement des informations.
>


![Ajout d'une base de données](images/privatesql03-Adding-a-database-part2.png){.thumbnail}


### Création d'un utilisateur (facultatif)

Cette étape peut être facultative si vous avez créé l'utilisateur en même temps que votre base de données lors de la manipulation précédente. Pour une utilisation classique, un utilisateur unique est amplement suffisant. Cependant, pour un projet plus spécifique, plusieurs utilisateurs habilités à intervenir sur votre base peuvent s'avérer nécessaires. Par exemple, l'un des utilisateurs associés à une base de donnée peut bénéficier des droits de lecture et d'écriture tandis que l'autre jouira uniquement d'un droit de lecture.

Si vous avez déjà créé votre premier utilisateur et que votre projet n'en nécessite pas d'additionnels, vous pouvez passer à la manipulation suivante. Selon votre choix, pour créer un utilisateur, cliquez sur l'onglet `Utilisateurs et droits`{.action} puis sur le bouton `Ajouter un utilisateur`{.action}.


![Ajout d'un utilisateur](images/privatesql04-Adding-a-user.png){.thumbnail}


Sur la fenêtre qui s'affiche, complétez les éléments demandés tout en suivant les indications dans les bulles d'information, puis cliquez sur `Valider`{.action}.

- **Nom d'utilisateur** : il s'agit de l'utilisateur qui pourra se connecter sur votre instance. Vous pourrez lui associer des droits sur votre base de données à l'étape suivante.
- **Mot de passe**/**Confirmer le mot de passe** :  sélectionnez un mot de passe puis confirmez ce dernier.


> [!warning]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors de l'enregistrement des informations
>

![Ajout d'un utilisateur](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Une fois que l'utilisateur est créé, il est nécessaire de lui attribuer des droits pour lui permettre d'effectuer des actions sur votre base de données (comme la lecture, l'insertion ou la suppression de données). Pour cela, cliquez maintenant sur le logo en forme de roue dentée, puis sur `Gérer les droits`{.action}.

![Ajout de droit](images/privatesql06-Adding-a-right.png){.thumbnail}

Sur la nouvelle page, sélectionnez le droit souhaité en cliquant dessus. Pour une utilisation classique, sélectionnez `Administrateur`{.action}.

![Ajout de droit](images/privatesql07-Adding-a-right-part2.png){.thumbnail}


### Importation d'une base de données (facultatif)

Cette étape s'applique uniquement si vous souhaitez importer une sauvegarde d'une base de données déjà existante (indispensable si vous migrez votre site chez OVH ou si vous migrez vos bases de données vers votre nouvelle instance SQL Privé). Si vous n'avez aucune base de données à importer, vous pouvez passer à la manipulation suivante.

Selon votre choix, il existe plusieurs techniques pour importer une base de données. OVH met à disposition dans son espace client un outil permettant de le faire. Nous allons nous intéresser spécifiquement à cet outil. Pour utiliser une autre méthode d'importation, reportez-vous aux documentations suivantes : pour une [base de données MySQL ou MariaDB](https://docs.ovh.com/fr/hosting/tout-sur-le-sql-prive/#export-et-import-de-base-de-donnees-mysql-ou-mariadb-hors-espace-client_1){.external} ; pour une [base de données en PostgreSQL](https://docs.ovh.com/fr/hosting/tout-sur-le-sql-prive/#export-et-import-de-base-de-donnees-postgresql-hors-espace-client_1){.external}.

#### Étape 1 : accéder à l'importation d'une base de données

Rendez-vous dans l'onglet `Bases de données`{.action}, cliquez sur le logo en forme de roue dentée, puis sur `Importer un fichier`{.action}.

![Ajout d'un fichier](images/privatesql08-import-a-file.png){.thumbnail}


Sur la fenêtre qui s'affiche, cochez la case `Importer un nouveau fichier`{.action} puis cliquez sur `Suivant`{.action}.

![Ajout d'un fichier](images/privatesql09-import-a-file-part2.png){.thumbnail}



#### Étape 2 : sélectionner et envoyer le fichier de sauvegarde

Renseignez un nom de fichier (qui vous permettra d'identifier cette sauvegarde plus tard si vous souhaitez de nouveau la restaurer), puis à côté de **Fichier (.gz)**, sélectionnez le fichier de sauvegarde de la base de données sur votre ordinateur puis cliquez sur `Envoyer`{.action}.

Patientez le temps que l'interface vous indique que le fichier a été envoyé avec succès, puis cliquez sur le bouton `Suivant`{.action}.

![Ajout d'un fichier](images/privatesql10-import-a-file-part3.png){.thumbnail}


#### Étape 3 : initier l'importation de la base de données

Enfin, choisissez d'appliquer ou non les options additionnelles affichées :

- **Vider la base de données actuelle** :  en cochant cette case, le contenu actuellement présent dans la base de données sera intégralement supprimé puis remplacé par celui de votre sauvegarde. Dans le cas présent, et dans la suite logique de nos manipulations, la base de données étant vide, vous pouvez laisser cette case décochée ;
- **Envoyer un e-mail à la fin de l'importation** : en cochant la case, une notification par e-mail vous sera envoyée lorsque l'importation de la base de données sera effectuée.

![Ajout d'un fichier](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Lier votre site à la base de données

Maintenant que votre base de données est créée et qu'un ou plusieurs utilisateurs disposent de droits sur cette dernière, il ne reste plus qu'à lier votre site à votre base de données. Cette étape peut s'effectuer de plusieurs manières, en fonction du site ou du CMS que vous utilisez (WordPress, Joomla, etc.), ou de l'étape à laquelle vous vous trouvez si vous réalisez l'installation d'un site web.

Afin de pouvoir mener à bien cette manipulation, vous devrez, quoi qu'il arrive, être en possession de ces cinq informations :

- **le nom de la base de données** : il s'agit du nom que vous avez défini lors de la création de la base de données ;
- **le nom de l'utilisateur** : il s'agit du nom d'utilisateur que vous avez défini lors de la création de la base de données ou d'un éventuel utilisateur additionnel que vous auriez créé ;
- **le mot de passe de l'utilisateur** : il s'agit du mot de passe, lié à l'utilisateur, que vous avez défini lors des manipulations précédentes ;
- **le nom d'hôte du serveur** : il s'agit du serveur à renseigner afin que votre site puisse se connecter à votre base de données. Cette information est accessible dans votre espace client dans le cadre **Connexions** depuis l'onglet `Informations générales`{.action} ;
- **le port du serveur** : il s'agit du port de connexion à votre instance SQL Privé pour que votre site puisse se connecter à votre base de données. Cette information est accessible dans votre espace client dans le cadre **Connexions** depuis l'onglet `Informations générales`{.action}.

> [!warning]
>
> Dans de rares cas, le champ `port`{.action} peut ne pas être proposé dans la configuration de votre site. Si tel est le cas, vous devrez ajouter ce champ après le nom d'hôte de votre serveur en les séparant de *:* (par exemple : nomhôte:port).
>


![Connection SQL](images/privatesql12-sql_connection.png){.thumbnail}

Dès lors, vous pourrez finaliser l'installation de votre site ou la migration de votre base de données sur votre nouvelle instance SQL.


## Aller plus loin

[Tout sur le SQL Privé](https://docs.ovh.com/fr/hosting/tout-sur-le-sql-prive/){.external}

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com)