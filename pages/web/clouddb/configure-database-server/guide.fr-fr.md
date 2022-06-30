---
title: 'Configurer votre serveur de bases de données'
slug: configurer-optimiser-son-serveur-de-base-de-donnees
excerpt: 'Découvrez comment configurer et optimiser votre serveur de base de données'
section: 'Configuration'
order: 6
---

**Dernière mise à jour le 30/06/2022**

## Objectif

Les serveurs de bases de données CloudDB vous donnent la possibilité d'agir sur les paramètres globaux de votre serveur. Vous pouvez également visualiser l'activité de votre serveur.

**Découvrez comment configurer et optimiser votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance CloudDB](https://www.ovh.com/fr/cloud/cloud-databases/) (incluse dans une offre d'[hébergement web performance](https://www.ovhcloud.com/fr/web-hosting/)).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Visionner les informations générales de son serveur de base de données

Dans [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bases de données`{.action}, puis sur l'instance SQL concernée. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}.

Vous pouvez y consulter les informations importantes concernant votre instance SQL. Nous vous invitons à prendre quelques instants afin de vous assurer que les informations affichées soient correctes ou correspondent aux indications ci-dessous.

|Information|Détails|
|---|---|
|État du service|Affiche si l'instance est démarrée, en cours de redémarrage ou suspendue. Votre instance doit être démarrée pour pouvoir y réaliser des actions.|
|Type|Affiche le système de base de données utilisé par le serveur. Si vous ne savez pas si le type utilisé est correct, sachez que le plus courant est "MySQL", mais que d'autres existent également (PostgreSQL, MariaDB). À titre d'exemple, si votre site est un WordPress, un système MySQL convient parfaitement.|
|Version|Affiche la version du système de base de données utilisée par le serveur. Veillez à la compatibilité de votre site avec la version choisie.|
|Saturation CPU|Affiche le temps CPU passé en saturation sur les dernières 24 heures.|
|RAM|Affiche la mémoire vive disponible pour votre instance ainsi que les éventuels dépassements de mémoire. Votre serveur de bases de données dispose de ressources dédiées et garanties : sa mémoire RAM. Si besoin, vous pouvez faire évoluer cette dernière et être prévenu si vous consommez toutes les ressources mémoires de votre instance.|
|Infrastructure|Affiche l'infrastructure utilisée par votre instance. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud.|
|Datacenter|Affiche le centre de données dans lequel l'instance a été créée. Assurez-vous que le centre de données de votre instance soit le même que celui de l'hébergement web OVHcloud où votre site internet est, ou sera, hébergé.|
|Host|Affiche le serveur OVHcloud dans lequel votre instance est créée. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud et peut être utilisée dans nos communications liées aux [incidents OVHcloud](https://web-cloud.status-ovhcloud.com/).|

![Informations générales](images/privatesql01-General-information.png){.thumbnail}

### Gérer vos accès

Votre CloudDB est accessible depuis vos hébergements web OVHcloud ou/et depuis le réseau publique.

#### Autoriser une adresse IP

Afin que l’accès à votre instance CloudDB fonctionne, il est obligatoire d'indiquer les adresses IP ou plages d'IP pouvant se connecter à vos bases de données.

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bases de données`{.action}, puis sur l'instance CloudDB concernée.

Cliquez sur l'onglet `IP autorisées`{.action} puis sur le bouton `Ajouter une adresse IP/masque`{.action}.

![clouddb](images/clouddb-add-ip.png){.thumbnail}

Sur la fenêtre qui s'affiche, indiquez l'adresse IP ou le masque que vous désirez autoriser dans `IP/masque`{.action} puis ajoutez une description si vous le souhaitez. Décidez ensuite si vous voulez donner accès uniquement aux bases de données ou au SFTP. Enfin, cliquez sur `Valider`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

#### Autoriser la connexion à un hébergement web OVHcloud

Pour un hébergement web OVHcloud, vous pouvez simplement cocher `Autoriser les hébergements web OVHcloud à accéder à la base de données`.

![clouddb](images/clouddb-add-ip-step3.png){.thumbnail}

### Modifier votre offre CloudDB

Pour modifier votre offre CloudDB, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données.

Dans l'onglet **« Informations générales »** qui est affiché par défaut, cliquez sur `...`{.action} à droite de la mention « RAM » puis sur `Changer la quantité de la RAM`{.action} afin d'accéder à la commande de ce basculement.

![clouddb](images/private-sql-order-ram01.png){.thumbnail}

Choisissez la quantité de RAM souhaitée puis cliquez sur le bouton `Suivant`{.action}. Vous pouvez ensuite choisir la durée souhaitée.

> [!primary]
>
> Un report au prorata sera effectué s'il vous reste quelques mois avant l'expiration. Ce prorata sera basé sur la date d'expiration de votre instance CloudDB et non sur celle du bon de commande.
> 

Après validation des contrats, vous serez redirigé vers le bon de commande afin de régler cette modification. Celle-ci sera effective sous quelques heures.

> [!warning]
>
> Si vous disposez actuellement d'un CloudDB gratuit grâce à votre hébergement Performance, la modification de l'offre vous fera perdre sa gratuité.
> 

### Modifier la configuration de mon serveur de bases de données

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur CloudDB.

#### Instance MySQL et MariaDB

- Cliquez sur l'onglet `Configuration`.

Vous trouverez dans le cadre **« Configuration générale de MySql »** la configuration actuellement définie pour votre base de données. Vous pouvez directement modifier celle-ci, puis cliquer sur `Appliquer`{.action}.

![clouddb](images/private-sql-config02.png){.thumbnail}

- **Tmpdir** : Répertoire des fichiers temporaires. **/dev/shm** correspond à la mémoire RAM de l'instance. **/tmp** correspond au disque dur de l'instance.
- **MaxAllowedPacket** : Taille maximum des paquets.
- **Max_user_connections** : Nombre de connexions simultanées autorisées par utilisateur.
- **AutoCommit** : Définit si les requêtes sont automatiquement validées (committed) ou non.
- **Interactive_timeout** : Temps en secondes pendant lequel le serveur attend l'activité sur une connexion interactive avant de la fermer.
- **InnodbBufferPoolSize** : Choix de la taille de la mémoire tampon.
- **MaxConnexions :** Nombre de connexions simultanées autorisées sur le de bases de données.
- **Wait_timeout** : Temps en secondes pendant lequel le serveur attend l'activité sur une connexion non interactive avant de la fermer.
- **Event_scheduler** : Permet de déclencher l’exécution de requêtes programmées directement dans le serveur MySQL.
- **sql_mode** : L'option **sql_mode** affecte la syntaxe SQL prise en charge et les vérifications de validation des données effectuées par MySQL/MariaDB.

> [!primary]
> Lorsque vous rencontrez une erreur sur votre site indiquant **« Too many connections»**, cela est dû au dépassement du nombre de connexions simultanées sur votre de bases de données.Vous pouvez alors augmenter la variable **« MaxConnections »** si elle n'est pas à son maximum.
>

> [!primary]
>
> <b>Tmpdir</b> :
>
> - /dev/shm : Le serveur de bases de données allouera la moitié de sa mémoire RAM à ce répertoire pour plus de performances.
>
> - /tmp : Le serveur allouera sur son disque dur un espace illimité pour ce répertoire, mais cela sera beaucoup moins performant. Nous vous conseillons d'utiliser ce répertoire uniquement pour les opérations occasionnelles lourdes.
>

> [!primary]
>
> <b>sql_mode</b> :
>
> &emsp;&emsp;Mode par défaut de MariaDB 10.1:
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</span> </pre>
> 
> &emsp;&emsp;Mode par défaut de MariaDB 10.2 et supérieur:
> <pre class="highlight command-prompt"> <span class="prompt">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> &emsp;&emsp;Mode par défaut de MySQl 5.6:
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION</span> </pre>
>
> &emsp;&emsp;Mode par défaut de MySQL 5.7 et supérieur:
> <pre class="highlight command-prompt"> <span class="prompt">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> Nous vous recommandons de toujours utiliser le mode par défaut, sauf si votre base de données a été mis à jour depuis une version ayant un mode par défaut différent de la version actuelle.
>

Effectuez les modifications nécessaires puis cliquez sur `Confirmer`{.action}.

> [!warning]
>
> Toute modification nécessite un redémarrage du serveur de bases de données.
> 

#### Instance PostgreSQL

Il n'est pas possible de modifier la configuration d'une instance PostgreSQL.

Vous pouvez néanmoins activer des extensions sur vos bases de données. Pour cela, dirigez-vous-vous dans l'onglet `Bases de données`, cliquez sur l'icône de tableau de votre base de données sous la colonne **« Extensions »**

![clouddb](images/private-sql-config03.png){.thumbnail}

### Changer la version MySQL, PostgreSQL ou MariaDB du serveur de bases de données

Pour connaître la version de MySQL, PostgreSQL ou MariaDB de votre serveur de bases de données, vous devez vous rendre sur l'onglet **« Informations générales »** après avoir choisi votre serveur de bases de données.

La version actuelle apparaît à la ligne **« Version »**.

Pour modifier cette version, cliquez sur `Modifier la version`{.action}.

![clouddb](images/private-sql-config04.png){.thumbnail}


#### **Comment connaitre la version exacte de PostgreSQL que j'utilise ?**

Entrez cette commande dans phpPgAdmin en cliquant sur **votre base de données**, rubrique **« SQL »**, puis en cliquant sur `Lancer`{.action} :

```sql
select version();
```

#### **Comment connaitre la version exacte de MySQL ou MariaDB que j'utilise ?**

Il faut pour cela entrer cette commande dans phpMyAdmin, rubrique **« SQL »**, puis cliquer sur `Exécuter`{.action} :

```sql
show variables like "version";
```

> [!primary]
>
> - Avant de migrer vers une version supérieure, assurez-vous que votre base de données est compatible avec la version choisie.
> - La modification est effective sous quelques minutes.
>

> [!warning]
>
> Il n'est pas possible de passer d'une ancienne version à la dernière
> directement. Il est obligatoire de passer par toutes les versions intermédiaires.
> 

### Logs et Métriques

#### Connaitre le temps d'exécution des requêtes

Cela vous permet de visualiser le temps d'exécution des requêtes sur votre serveur de bases de données dans les dernières 24 heures.

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données.

Dirigez-vous dans l'onglet `Métriques` de votre serveur de bases de données. Vous trouverez le graphique **« Statistiques du temps d'exécution des requêtes »**.

![clouddb](images/private-sql-metrics01.png){.thumbnail}

#### Accès aux logs « Slow Query »

> **Définition des « slow query log »**
> 
> Ce sont les requêtes qui prennent plus de temps à s'exécuter. La valeur est définie à 1 seconde sur nos serveurs de bases de données dans la variable **« long_query_time »**.

Ces logs, appellés **« slow-query.log »**, peuvent être récupérés à la racine de l'espace SFTP de votre serveur de bases de données.

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données.

Dans l'onglet `informations générales`, vous trouverez la section **« SFTP »** dans le cadre **« Informations de connexion »**

![clouddb](images/private-sql-SFTP01.png){.thumbnail}

Pour vous y connecter en **SFTP**, vous pouvez le faire via le logiciel Filezilla en vous aidant du guide: [« Utilisation du logiciel FileZilla avec votre hébergement »](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/).

Si ce fichier est vide, c'est que vous n'avez aucune requête lente.


#### Suivre la RAM consommée

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données.

Dirigez-vous dans l'onglet `Métriques` de votre espace client. Vous trouverez le graphique **« Statistiques de mémoire RAM utilisée »**.

![clouddb](images/private-sql-metrics02.png){.thumbnail}

#### Suivre le nombre de connexions par minute

Ce graphique permet de suivre, sur les dernières 24 heures, la charge de connexions par minute sur votre serveur de base de données.

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données.

Dirigez-vous dans l'onglet `Métriques` de votre espace client. Vous trouverez le graphique **« Statistiques du total des connexions par minute »**.

![clouddb](images/private-sql-metrics03.png){.thumbnail}

### Optimiser vos bases de données

Il est conseillé d'entretenir sa base de données pour qu'elle soit performante. Ce que l'on entend par performante, c'est le fait que les informations contenues dans la base de données soient le plus rapidement retournées au script qui les demande. Pour cela, il faut une base de données structurée et optimisée.

#### **Indexer la base de données**

Pour augmenter la rapidité des recherches lors d'une requête, il faut mettre un index sur les champs qui sont utilisés dans les clauses WHERE.

Exemple : vous faites régulièrement une recherche de personne par rapport à la ville. Indexez le champ « ville » avec la requête suivante :

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

#### **Purger la base de données**

Certaines de vos données ne sont plus consultées ? Archivez-les, vos tables seront moins remplies et les recherches iront plus vite.

#### **Limitation d'affichage**

Limitez l'affichage des enregistrements à un nombre restreint (par exemple 10 par page) avec la partie LIMIT de votre requête SQL.

#### **Regroupement des requêtes**

Regroupez vos requêtes en début de script de cette manière :

```bash
connexion_base
requete1
requete2
...
déconnexion_base
Affichage ...
Traitement des données
Boucles ...
Affichage ...
...
```

#### **Récupérer uniquement les données utiles**

Dans vos requêtes SQL, vérifiez que vous ne sélectionnez que ce dont vous avez besoin, et surtout que vous n'avez pas oublié les liaisons entre les tables.

Exemple :

```sql
(where table1.champs = table2.champs2)
```

#### **Éviter les options qui consomme trop de ressources**

Évitez d'utiliser **« HAVING »** par exemple. Elle alourdit vos requêtes. De la même manière, évitez d'utiliser **« GROUP BY »**, sauf si cela s'avère strictement nécessaire.

## Aller plus loin

[Liste des adresses IP des clusters et hebergements web](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
