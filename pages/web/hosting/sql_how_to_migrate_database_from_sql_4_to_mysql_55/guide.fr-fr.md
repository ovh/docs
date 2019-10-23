---
title: Comment migrer votre base de donnees de MySQL 4 vers MySQL 5.6
slug: mutualise-comment-migrer-votre-base-de-donnees-de-sql-4-vers-mysql-55
legacy_guide_number: 1957
excerpt: Ce guide va vous permettre de migrer votre base de donnees de MySQL 4 vers MySQL 5.6
section: Bases de données
---

Vous trouverez dans ce guide différentes informations et aides concernant la migration de la version MySQL 4 vers la version MySQL 5.6 de vos bases de données.

Retrouvez nos [différents guides mutualisés/hébergement Web](https://www.ovh.com/fr/hebergement-web/faq/){.external} disponibles.


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Généralités sur les bases de donnees

### Pourquoi effectuer la migration ?
Il est important de toujours travailler sur les dernières versions sorties des éditeurs de services. Ces versions ultérieures ajoutent parfois des fonctionnalités, mais en règle générale elles augmentent la sécurité et l'optimisation du service. En amenant tous ses services sur les dernières versions, cela permet une meilleure qualité et sécurité sur les services que vous gérez.


### Combien de temps pour effectuer cette migration ?
En suivant les différentes étapes de ce guide, la migration devrait vous prendre entre 10 et 40 minutes maximum.


## Retrouver les acces et acceder a votre base de donnees

### Ou retrouver les acces a votre base de donnees
Dans un premier temps il faut vous connecter à votre [espace client](https://www.ovh.com/manager/web/login/){.external}.

Une fois identifié, sélectionnez votre hébergement concerné à gauche dans la partie Hébergement. Rendez-vous ensuite dans l'onglet Bases de données.

Dans cet onglet vous verrez la liste de vos bases de données actuellement créées. Repérez  **la ligne qui concerne votre base en version 4** . Vous aurez le  **nom d'utilisateur**  et l' **adresse du serveur** qui vous serviront à l'étape suivante.

Cliquez sur le  **rouage à droite**  : Vous pourrez ainsi  **changer le mot de passe**  de votre base de données, si vous ne le connaissez plus.


![hosting](images/changepassword.png){.thumbnail}


### Comment se connecter a votre base de donnees en version MySQL 4 ?
Pour vous connecter à votre base de données en version MySQL 4, vous avez deux possibilités :

- Utilisez [ce lien](https://phpmyadmin.ovh.net/old/){.external} .
- Sur votre [espace client](https://www.ovh.com/manager/web/login/){.external} , dans la partie Hébergement & onglet SQL, cliquez sur le rouage à droite de votre base de données en MySQL 4, et cliquez sur " Accéder à phpMyAdmin " puis sur [https://phpmyadmin.ovh.net/old/](https://phpmyadmin.ovh.net/old/){.external} (en bas de la page).


![hosting](images/go-to-phpmyadmin.png){.thumbnail}

Une fois sur l'interface [phpmyadmin](https://phpmyadmin.ovh.net/old/){.external}, il faut rentrer vos identifiants :

- Server = Adresse du serveur, que vous pouvez retrouver dans votre espace client, onglet SQL.
- Username = Utilisateur de la base de données (En bleu sur la capture ci-dessus)
- Password = Mot de passe de la base de données


![hosting](images/phpmyadminold.png){.thumbnail}


## Exporter, vider, et supprimer votre base de donnees en version MySQL 4

### Comment enregistrer une sauvegarde de votre base de donnees en version MySQL 4 ?
Une fois connecté sur PhpMyAdmin, cliquez sur votre  **base de données dans la colonne de gauche** , en dessous des boutons d'accueil. Cliquez ensuite sur l'onglet " **Exporter**  **".** **Choisissez vos options d'exportation.** **Si vous ne savez pas, nous vous conseillons de laisser les options choisies par défaut.**

**Enfin, cliquez tout en bas à droite sur "**  **Exécuter** ".

Cela va vous générer du texte, représentant le contenu de votre base.

Il vous suffit de copier/coller tout ce texte dans un fichier texte, sur votre ordinateur, que vous enregistrez au format ".SQL".

Votre base de données est maintenant sauvegardée en local dans votre ordinateur.


![hosting](images/3224.png){.thumbnail}


### Comment vider votre base de donnees en version MySQL 4 ?
Une fois votre base sauvegardée, il vous faut maintenant la vider, toujours sur PhpMyAdmin. Pour cela, cliquez à nouveau sur votre base de données dans la colonne de gauche.

Au centre vous aurez un aperçu de toutes vos tables.

Il vous suffit de cliquer en dessous sur " **Tout cocher** ", puis à droite cliquez sur le choix " **Pour la sélection**" et remplacez-le par " **Supprimer**  **".**

**Cliquez ensuite sur "**  **Exécuter** .

Une fenêtre de confirmation s'affichera, il vous suffit de valider en cliquant sur "Oui".

Suite à cette opération, votre base de donnée se retrouvera vide.


![hosting](images/3226.png){.thumbnail}


### Comment supprimer votre base de donnees en version MySQL 4 ?
Vous pouvez maintenant quitter PhpMyAdmin. A nouveau sur votre [espace client](https://www.ovh.com/manager/web/login/){.external}, cliquez sur votre hébergement, puis sur l'onglet SQL.

A droite de la ligne de votre base de données en version MYSQL v4.0, cliquez sur le rouage, puis choisissez "Supprimer la base de données".

Un pop-up de confirmation vous demandera de confirmer en cliquant sur "Valider".

Il faudra ensuite patienter un délai de 10-15 minutes pour que votre base soit effectivement supprimée.


![hosting](images/3776.png){.thumbnail}


## Créer et restaurer votre base de donnees en version MySQL 5.6.

### Comment créer votre base de donnees en version MySQL 5.6 ?
Maintenant que vous avez supprimé votre base de données en version MySQL 4, il vous faut maintenant en créer une nouvelle en version MySQL 5.6. Pour cela rendez-vous sur votre [espace client](https://www.ovh.com/manager/web/login/){.external}, section Hébergement, onglet SQL.

Ici, cliquez sur le bouton Créer une base de données.

Choisissez votre moteur MySQL et la version uniquement disponible pour le moment : 5.6, puis cliquez sur Suivant.

Il faudra patienter 5 à 10 minutes maximum, le temps que la base se créée. Vous pouvez suivre cette étape dans l'onglet "Plus + - Tâches en cours".


### Comment restaurer/importer votre sauvegarde, dans votre base de donnees en version MySQL 5.6 ?
Pour restaurer votre sauvegarde de base de données, il vous suffit de suivre [ce guide]({legacy}1393){.ref}.


## Modifier le fichier de configuration de votre site

### Mon site ne fonctionne plus alors que j'ai sauvegarde et restaure ma base, pourquoi ?
Il est normal, si vous avez exporté/restauré votre base, que votre site affiche un message du type "Erreur de connexion à la base de données".

Cela se produit car votre site tente toujours de se connecter à l'ancienne base de données, qui a été supprimé. Il vous faut donc indiquer à votre site, qu'il doit utiliser la nouvelle base de données, en modifiant son fichier de configuration.


### Comment modifier mon fichier de configuration ?
En fonction du type de site que vous avez, il peut se trouver à différents endroits, mais toujours sur votre espace FTP. Pour vous connecter à votre espace FTP, il vous suffit de suivre [ce guide]({legacy}1380){.ref}.

Par exemple si votre site est basé sur WordPress, le fichier de configuration se nomme wp-config.php et se trouve dans le dossier principal de votre site, sur votre espace FTP.

Pour les autres CMS ou les sites faits par un développeur, le mieux est de vous rapprocher du prestataire qui a fait votre site pour lui demander ou se situe le fichier de configuration.

Une fois que vous avez retrouvé ce fichier sur votre espace FTP, il faut éditer ce fichier. Dans un premier temps, copiez le fichier en local sur votre ordinateur, et éditez le avec un logiciel de texte, comme WordPad ou un blocnote.

Il vous faut modifier les lignes de type "DB_NAME", "DBPASSWORD", "DB_USER" et "DB_HOST" (peut s'appeler différemment en fonction du type de site), et modifier les valeurs correspondantes, par les nouvelles valeurs, que vous retrouvez sur votre [espace client](https://www.ovh.com/manager/web/login/){.external}, onglet SQL.


## Cas particuliers
Vous obtenez une erreur "Echec de la connexion sécurisée"*********************************************************

Il est possible que vous obteniez l'erreur "Echec de la connexion sécurisée" lors d'opérations sur vos bases de données. Cela est un conflit entre votre version de FireFox et notre site PhpMyAdmin.

Pour contourner cela, utilisez un autre navigateur, vous ne rencontrerez plus ce problème.


### L'import peut ne pas se derouler correctement.
Normalement, vous ne devriez pas voir de problème pour importer vos bases créées sous MySQL 4 sur un serveur MySQL 5.6. Cependant,  **vous ne pouvez pas utiliser de nom de table ayant une partie, ou la totalité, identique à des mots propres réservés à MySQL**  définis dans la liste suivante :

|---|
|ADD ALL ALTER ANALYZE AND AS ASC ASENSITIVE BEFORE BETWEEN BIGINT BINARY BLOB BOTH BY CALL CASCADE CASE CHANGE CHAR CHARACTER CHECK COLLATE COLUMN CONDITION CONNECTION CONSTRAINT CONTINUE CONVERT CREATE CROSS CURRENT_DATE CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURSOR DATABASE DATABASES DAY_HOUR DAY_MICROSECOND DAY_MINUTE DAY_SECOND DEC DECIMAL DECLARE DEFAULT DELAYED DELETE DESC DESCRIBE DETERMINISTIC DISTINCT DISTINCTROW DIV DOUBLE DROP DUAL EACH ELSE ELSEIF ENCLOSED ESCAPED EXISTS EXIT EXPLAIN FALSE FETCH FLOAT FLOAT4 FLOAT8 FOR FORCE FOREIGN FROM FULLTEXT GRANT GROUP HAVING HIGH_PRIORITY HOUR_MICROSECOND HOUR_MINUTE HOUR_SECOND IF IGNORE IN INDEX INFILE INNER INOUT INSENSITIVE INSERT INT INT1 INT2 INT3 INT4 INT8 INTEGER INTERVAL INTO IS ITERATE JOIN KEY KEYS KILL LEADING LEAVE LEFT LIKE LIMIT LINES LOAD LOCALTIME LOCALTIMESTAMP LOCK LONG LONGBLOB LONGTEXT LOOP LOW_PRIORITY MATCH MEDIUMBLOB MEDIUMMINT MEDIUMTEXT MIDDLEINT MINUTE_MICROSECOND MINUTE_SECOND MOD MODIFIES NATURAL NOT NO_WRITE_TO_BINLOG NULL NUMERIC ON OPTIMIZE OPTION OPTIONALLY OR ORDER OUT OUTER OUTFILE PRECISION PRIMARY PROCEDURE PURGE RAID0 READ READS REAL REFERENCES REGEXP RELEASE RENAME REPEAT REPLACE REQUIRE RESTRICT RETURN REVOKE RIGHT RLIKE SCHEMA SCHEMAS SECOND_MICROSECOND SELECT SENSITIVE SEPARATOR SET SHOW SMALLINT SONAME SPATIAL SPECIFIC SQL SQLEXCEPTION SQLSTATE SQLWARNING SQL_BIG_RESULT SQL_CALC_FOUND_ROWS SQL_SMALL_RESULT SSL STARTING STRAIGHT_JOIN TABLE TERMINATED THEN TINYBLOB TINYINT TINYTEXT TO TRAILING TRIGGER TRUE UNDO UNION UNIQUE UNLOCK UNSIGNED UPDATE USAGE USE USING ETC_DATE ETC_TIME UTC_TIMESTAMP VALUES VARBINARY VARCHAR VARCHARACTER VARYING WHEN WHERE WHILE WITH WRITE X509 XOR YEAR_MONTH ZEROFILL|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
