---
title: "Configurer votre serveur de bases de données"
excerpt: "Découvrez comment configurer et optimiser votre serveur de base de données"
updated: 2026-03-24
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

Les serveurs de bases de données Web Cloud Databases vous permettent de modifier les paramètres globaux de votre serveur. Vous pouvez également visualiser l'activité de votre serveur.

**Découvrez comment configurer et optimiser votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases) (incluse dans une offre d'[hébergement web performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Sélectionnez votre service de base de données

---
<!-- CP-NAV-END:web-cloud-databases -->

## En pratique

### Visionner les informations générales de son serveur de base de données

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}.
>>
>> Vous pouvez y consulter les informations importantes concernant votre instance SQL. Vérifiez que les informations affichées sont correctes ou correspondent aux indications ci-dessous.
>>
>> |Information|Détails|
>> |---|---|
>> |État du service|Affiche si l'instance est démarrée, en cours de redémarrage ou suspendue. Votre instance doit être démarrée pour pouvoir y réaliser des actions.|
>> |Type|Affiche le système de base de données utilisé par le serveur. Si vous ne savez pas si le type utilisé est correct, sachez que le plus courant est « MySQL », mais que d'autres existent également (PostgreSQL, MariaDB). À titre d'exemple, si votre site est un WordPress, un système MySQL convient parfaitement.|
>> |Version|Affiche la version du système de base de données utilisée par le serveur. Veillez à la compatibilité de votre site avec la version choisie.|
>> |Saturation CPU|Affiche le temps CPU passé en saturation sur les dernières 24 heures.|
>> |RAM|Affiche la mémoire vive disponible pour votre instance ainsi que les éventuels dépassements de mémoire. Votre serveur de bases de données dispose de ressources dédiées et garanties : sa mémoire RAM. Si besoin, vous pouvez faire évoluer cette dernière et être prévenu si vous consommez toutes les ressources mémoires de votre instance.|
>> |Infrastructure|Affiche l'infrastructure utilisée par votre instance. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud.|
>> |Datacenter|Affiche le centre de données dans lequel l'instance a été créée. Assurez-vous que le centre de données de votre instance soit le même que celui de l'hébergement web OVHcloud où votre site internet est, ou sera, hébergé.|
>> |Host|Affiche le serveur OVHcloud dans lequel votre instance est créée. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud et peut être utilisée dans nos communications liées aux [incidents OVHcloud](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![Informations générales](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}


### Gérer vos accès

Votre Web Cloud Databases est accessible depuis vos hébergements web OVHcloud ou/et depuis le réseau public.

**Cliquez sur chaque titre pour afficher son contenu.**

/// details | Autoriser une adresse IP

Pour accéder à votre instance Web Cloud Databases, vous devez indiquer les adresses IP ou plages d’IP autorisées à se connecter à vos bases de données.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l’onglet `IPs autorisées`{.action} puis sur le bouton `Ajouter une adresse IP / masque`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la fenêtre qui s’affiche, indiquez l’adresse IP ou le masque que vous désirez autoriser dans `IP / masque`{.action} puis ajoutez une description si vous le souhaitez. Décidez ensuite si vous voulez donner accès uniquement aux bases de données ou au SFTP. Enfin, cliquez sur `Valider`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

///

/// details | Autoriser la connexion à un hébergement web OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l’onglet `IPs autorisées`{.action}.
>>
> **Étape 3**
>>
>> Cochez `Autoriser les hébergements web OVHcloud à accéder à la base de données`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

///

### Modifier votre offre Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

> [!warning]
> 
> Si votre offre Web Cloud Databases est liée à une offre d'hébergement web **Performance**, vous devrez obligatoirement et préalablement délier l'offre Web Cloud Databases de votre hébergement **Performance** pour basculer sur une offre supérieure.
>
> Pour délier une offre Web Cloud Databases associée à un hébergement web **Performance**, consultez notre guide « [Délier ma solution Web Cloud Databases d'un hébergement web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting) ».
>
> **Cette action est irréversible et l'offre Web Cloud Databases sera ensuite facturée indépendamment de votre hébergement web Performance.**
>

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet **« Informations générales »** qui est affiché par défaut, cliquez sur `...`{.action} à droite de la mention « RAM » puis sur `Changer la quantité de la RAM`{.action} pour accéder à la commande de changement.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Étape 3**
>>
>> Choisissez la quantité de RAM souhaitée puis cliquez sur le bouton `Suivant`{.action}. Vous pouvez ensuite choisir la durée souhaitée.
>>
>> > [!primary]
>> >
>> > Un report au prorata sera effectué s'il vous reste quelques mois avant l'expiration. Ce prorata sera basé sur la date d'expiration de votre instance Web Cloud Databases et non sur celle du bon de commande.
>>
>> Après validation des contrats, vous serez redirigé vers le bon de commande afin de régler cette modification. Celle-ci sera effective sous quelques heures.
>>
>> > [!warning]
>> >
>> > Si vous disposez actuellement d'un Web Cloud Databases gratuit grâce à votre hébergement Performance, la modification de l'offre vous fera perdre sa gratuité.


### Modifier la configuration de mon serveur de bases de données

**Cliquez sur chaque titre pour afficher son contenu.**

/// details | Instance MySQL et MariaDB

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l’onglet `Configuration`{.action}.
>>
> **Étape 3**
>>
>> Vous trouverez dans le cadre **« Configuration générale de MySQL »** la configuration actuellement définie pour votre base de données. Vous pouvez directement modifier celle-ci, puis cliquer sur `Appliquer`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket** : Taille maximum des paquets.
>> - **Max_user_connections** : Nombre de connexions simultanées autorisées par utilisateur.
>> - **AutoCommit** : Définit si les requêtes sont automatiquement validées (committed) ou non.
>> - **Interactive_timeout** : Temps en secondes pendant lequel le serveur attend l’activité sur une connexion interactive avant de la fermer.
>> - **InnodbBufferPoolSize** : Choix de la taille de la mémoire tampon.
>> - **MaxConnections :** Nombre de connexions simultanées autorisées sur le serveur de bases de données.
>> - **Wait_timeout** : Temps en secondes pendant lequel le serveur attend l’activité sur une connexion non interactive avant de la fermer.
>> - **Event_scheduler** : Permet de déclencher l’exécution de requêtes programmées directement dans le serveur MySQL.
>> - **sql_mode** : L’option **sql_mode** affecte la syntaxe SQL prise en charge et les vérifications de validation des données effectuées par MySQL/MariaDB.
>>
>> > [!primary]
>> > Lorsque vous rencontrez une erreur sur votre site indiquant **« Too many connections »**, cela est dû au dépassement du nombre de connexions simultanées sur votre serveur de bases de données. Vous pouvez alors augmenter la variable **« MaxConnections »** si elle n’est pas à son maximum.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b> :
>> >
>> > &emsp;&emsp;Mode par défaut de MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Mode par défaut de MariaDB 10.2 et supérieur:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Mode par défaut de MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Mode par défaut de MySQL 5.7 et supérieur:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Nous vous recommandons de toujours utiliser le mode par défaut, sauf si votre base de données a été mise à jour depuis une version ayant un mode par défaut différent de la version actuelle.
>>
>> Effectuez les modifications nécessaires puis cliquez sur `Valider`{.action}.

> [!warning]
>
> Toute modification nécessite un redémarrage du serveur de bases de données.
>

///

/// details | Instance PostgreSQL

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Configuration`{.action}.
>>
> **Étape 3**
>>
>> Vous trouverez, dans le cadre **« Configuration générale de PostgreSQL »**, la configuration actuellement définie pour votre base de données. Vous pouvez directement modifier celle-ci, puis cliquer sur `Appliquer`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages** : Contrôle les niveaux des messages à historiser dans les logs du serveur. Les niveaux disponibles pour une solution Web Cloud Databases sont les niveaux :
>>     - **« WARNING »** : Fournit les messages d'avertissement sur de potentiels problèmes.
>>     - **« ERROR »** : Envoie l'erreur qui a engendré l'annulation d'une commande en cours.
>>     - **« LOG »** : Enregistre des informations destinées aux administrateurs du serveur.
>>     - **« FATAL »** : Envoie l'erreur qui a engendré la fin de la session en cours.
>>     - **« PANIC »** : Envoie l'erreur qui a engendré la fin de l'ensemble des sessions.
>>
>> Chacun des niveaux inclut tous les niveaux qui le suivent. Plus le niveau est élevé, moins il y a de messages enregistrés dans les logs du serveur.
>>
>> Par défaut, la valeur définie est **« WARNING »** car elle inclut les valeurs **« ERROR »**, **« LOG »**, **« FATAL »** et **« PANIC »**.
>>
>> De plus, vous pouvez activer des extensions sur vos bases de données. Pour cela, cliquez sur l'onglet `Bases de données`{.action}, puis sur l'icône de tableau de votre base de données sous la colonne **« Extensions »**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

///

### Changer la version MySQL, PostgreSQL ou MariaDB du serveur de bases de données

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans l'onglet **Informations générales**, la version actuelle apparaît à la ligne **Version**.
>>
> **Étape 3**
>>
>> Pour modifier cette version, cliquez sur `Modifier la version`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

/// details | Comment connaître la version exacte de PostgreSQL que j'utilise ?

Entrez cette commande dans phpPgAdmin en cliquant sur **votre base de données**, rubrique **« SQL »**, puis en cliquant sur `Lancer`{.action} :

```sql
select version();
```

///

/// details | Comment connaître la version exacte de MySQL ou MariaDB que j'utilise ?

Entrez cette commande dans phpMyAdmin, rubrique **« SQL »**, puis cliquez sur `Exécuter`{.action} :

```sql
show variables like "version";
```

///

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

**Cliquez sur chaque titre pour afficher son contenu.**

/// details | Accès aux logs

Pour accéder aux logs de votre solution Web Cloud Databases, consultez notre guide « [Web Cloud Databases - Comment récupérer les logs ?](/pages/web_cloud/web_cloud_databases/retrieve-logs) ».

///

/// details | Suivre la RAM consommée

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Métriques`{.action}. Vous trouverez le graphique **« Statistiques de mémoire RAM utilisée »**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

///

/// details | Suivre le nombre de connexions par minute

Ce graphique permet de suivre, sur les dernières 24 heures, la charge de connexions par minute sur votre serveur de base de données.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Métriques`{.action}. Vous trouverez le graphique **« Statistiques du total des connexions par minute »**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

///

### Optimiser vos bases de données

Entretenez votre base de données pour qu'elle reste performante et retourne rapidement les informations aux scripts. Pour cela, il faut une base de données structurée et optimisée.

**Cliquez sur chaque titre pour afficher son contenu.**

/// details | Indexer la base de données

Pour augmenter la rapidité des recherches lors d'une requête, il faut mettre un index sur les champs qui sont utilisés dans les clauses WHERE.

Exemple : vous faites régulièrement une recherche de personne par rapport à la ville. Indexez le champ « ville » avec la requête suivante :

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Purger la base de données

Certaines de vos données ne sont plus consultées ? Archivez-les, vos tables seront moins remplies et les recherches iront plus vite.

///

/// details | Limitation d'affichage

Limitez l'affichage des enregistrements à un nombre restreint (par exemple 10 par page) avec la partie LIMIT de votre requête SQL.

///

/// details | Regroupement des requêtes

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

///

/// details | Récupérer uniquement les données utiles

Dans vos requêtes SQL, vérifiez que vous ne sélectionnez que ce dont vous avez besoin, et surtout que vous n'avez pas oublié les liaisons entre les tables.

Exemple :

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Éviter les options qui consomment trop de ressources

Évitez d'utiliser **« HAVING »** par exemple. Elle alourdit vos requêtes. De la même manière, évitez d'utiliser **« GROUP BY »**, sauf si cela s'avère strictement nécessaire.

///

## Aller plus loin

[Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
