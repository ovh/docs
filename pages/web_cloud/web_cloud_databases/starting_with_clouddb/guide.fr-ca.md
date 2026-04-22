---
title: 'Premiers pas avec le service Web Cloud Databases'
excerpt: 'Découvrez comment bien débuter avec la solution Web Cloud Databases'
updated: 2026-03-24
---

## Objectif

La solution Web Cloud Databases permet de bénéficier d’une instance de bases de données dont les ressources sont dédiées et garanties, vous offrant performances et flexibilité.
Par défaut, votre solution Web Cloud Databases est liée au réseau d'hébergements web OVHcloud. Vous pouvez aussi la lier à n'importe quel autre réseau, via une liste d'adresses IP autorisées.

**Découvrez comment bien débuter avec la solution Web Cloud Databases.**

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

### Activation de votre serveur Web Cloud Databases inclus avec votre offre d'hébergement web

<!-- CP-STEPS-START:activation-wcdb-hosting -->
Si votre offre d'hébergement inclut l'option Web Cloud Databases, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Depuis l'onglet `Informations générales`, dans le cadre `Configuration`, cliquez sur le bouton `...`{.action} à droite de **Web Cloud Databases**. Cliquez enfin sur `Activer`{.action} pour lancer le processus d'activation.
>>
>> ![Informations générales](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Étape 3**
>>
>> Enfin, suivez les instructions fournies afin de déterminer le type et la version de votre serveur Web Cloud Databases. Il sera ensuite accessible depuis la colonne de gauche dans `Web Cloud Databases`{.action}.
<!-- CP-STEPS-END:activation-wcdb-hosting -->

### Visionner les informations générales de l'instance

<!-- CP-STEPS-START:visionner-informations-generales -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Le nom du service Web Cloud Databases dans votre espace client OVHcloud contient une partie de votre référence client et se termine par trois chiffres (001 pour le premier service Web Cloud Databases installé, 002 pour le deuxième, etc.).
>>
> **Étape 2**
>>
>> Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}.
>>
>> Vérifiez que les données affichées sont correctes ou correspondent aux indications ci-dessous.
>>
>> |Information|Détails|
>> |---|---|
>> |État du service|Affiche notamment si l'instance est démarrée, en cours de redémarrage ou suspendue. Votre instance doit être démarrée pour pouvoir y réaliser des actions.|
>> |Type|Affiche le système de bases de données utilisé par le serveur.|
>> |Version|Affiche la version du système de bases de données utilisée par le serveur. Veillez à la compatibilité de votre site avec la version choisie.|
>> |Saturation CPU|Affiche le temps CPU passé en saturation. Votre instance Web Cloud Databases n'est pas limitée en termes de CPU mais vous devez veiller à ne pas surcharger le CPU de votre Web Cloud Databases.|
>> |RAM|Affiche la mémoire vive disponible pour votre instance ainsi que les éventuels dépassements de mémoire. Votre instance Web Cloud Databases dispose de ressources dédiées et garanties : sa mémoire RAM. Si besoin, vous pouvez faire évoluer cette dernière et être prévenu si vous consommez toutes les ressources mémoire de votre instance.|
>> |Infrastructure|Affiche l'infrastructure utilisée par votre instance. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud.|
>> |Datacenter|Affiche le centre de données dans lequel l'instance a été créée.|
>> |Host|Affiche le serveur OVHcloud dans lequel votre instance est créée. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud et peut être utilisée dans nos communications liées aux [incidents OVHcloud](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}
<!-- CP-STEPS-END:visionner-informations-generales -->

### Création d'une base de données

> [!primary]
>
> Cette étape ne s'applique pas au système de bases de données Redis.

<!-- CP-STEPS-START:creation-base-de-donnees -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}.
>>
> **Étape 3**
>>
>> Cliquez sur `Ajouter une base de données`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > La création de schémas PostgreSQL est actuellement indisponible sur les serveurs Web Cloud Databases.
>>
> **Étape 4**
>>
>> Renseignez les champs en respectant les critères indiqués. Vous pouvez créer directement un utilisateur en cochant la case **« Créer un utilisateur »** :
>>
>> - **Nom de la base** (obligatoire) : il s'agit du nom de votre future base de données.
>> - **Nom d'utilisateur** (seulement si la case `Créer un utilisateur` est cochée) : il s'agit de l'utilisateur qui pourra se connecter à votre base de données et y effectuer des requêtes.
>> - **Droits** (seulement si la case `Créer un utilisateur` est cochée) : il s'agit des droits qui seront associés à l'utilisateur sur la base de données. Pour une utilisation classique, sélectionnez `Administrateur`{.action}. Les droits peuvent être modifiés par la suite.
>> - **Mot de passe**/**Confirmer le mot de passe** (seulement si la case `Créer un utilisateur` est cochée) : sélectionnez un mot de passe, puis confirmez ce dernier.
>>
>> Cliquez sur `Valider`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:creation-base-de-donnees -->

### Création d'un utilisateur

> [!primary]
>
> Cette étape ne s'applique pas au système de bases de données Redis.

Si vous avez créé l'utilisateur en même temps que votre base de données lors de la manipulation précédente, cette étape est facultative. Cependant, un projet peut nécessiter plusieurs utilisateurs avec des droits différents (par exemple, lecture/écriture pour l'un et lecture seule pour l'autre).

<!-- CP-STEPS-START:creation-utilisateur -->
Si votre projet ne nécessite pas un utilisateur additionnel, vous pouvez passer à la manipulation suivante. Dans le cas contraire, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Utilisateurs et droits`{.action}.
>>
> **Étape 3**
>>
>> Cliquez sur `Ajouter un utilisateur`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Étape 4**
>>
>> Renseignez un « nom d'utilisateur » et un « mot de passe », puis cliquez sur `Valider`{.action}.
<!-- CP-STEPS-END:creation-utilisateur -->

Si vous avez besoin de modifier les droits d'un utilisateur existant, consultez notre guide « [Web Cloud Databases - Modifier les droits d'un utilisateur](/pages/web_cloud/web_cloud_databases/modify_rights_for_users) ».

### Importation d'une base de données

> [!primary]
>
> Cette étape s'applique si vous souhaitez importer une sauvegarde d'une base de données déjà existante. Si ce n'est pas le cas, passez à la manipulation suivante.
>

Pour importer une base de données, consultez notre guide « [Restaurer et importer une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server) ».

Plusieurs méthodes d'importation y sont présentées.

### Autoriser une adresse IP

Afin que l’accès à votre instance Web Cloud Databases fonctionne, il est obligatoire d’indiquer les IP ou plages d’IP pouvant se connecter à vos bases de données.

<!-- CP-STEPS-START:autoriser-adresse-ip -->
Pour cela, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `IPs autorisées`{.action}.
>>
>> ![IPs autorisées](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui apparaît, cliquez sur le bouton `Ajouter une adresse IP / masque`{.action} situé au-dessus du tableau.
>>
>> ![Interface des IPs autorisées](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Si vous souhaitez modifier une adresse IP ou une plage d'adresses IP déjà autorisée, cliquez directement dans le tableau sur le bouton `...`{.action} situé à droite de la ligne correspondant à l'adresse IP ou à la plage d'adresses IP à modifier, puis sur `Éditer la whitelist`{.action}.
>>
> **Étape 4**
>>
>> Dans la fenêtre qui s'ouvre, plusieurs champs sont à compléter :
>>
>> ![Ajouter une adresse IP ou un masque](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / masque *`{.action} : Saisissez ici l'adresse IP (par exemple : `203.0.113.44`) ou la plage d'adresses IP (par exemple : `203.0.113.0/24` représentant toutes les adresses IP de `203.0.113.0` à `203.0.113.255`) que vous souhaitez autoriser sur votre solution Web Cloud Databases.
>> - `Description`{.action} (facultatif) : Vous pouvez, par exemple, y ajouter des informations sur le rôle de l'adresse IP ou de la plage d'adresses IP concernée.
>> - `Bases de données`{.action} : Cochez cette case pour que l'adresse IP ou la plage d'adresses IP soit autorisée à accéder aux bases de données présentes sur votre solution Web Cloud Databases.
>> - `SFTP`{.action} : Cochez cette case pour que l'adresse IP ou la plage d'adresses IP soit autorisée à accéder aux logs de votre solution Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Il est fortement déconseillé de cocher la case `Bases de données`{.action} pour autoriser la plage d'adresses IP `0.0.0.0/0` à accéder à vos bases de données.
>> >
>> > En effet, cela permettrait d'autoriser l'accès à vos bases de données à l'ensemble des adresses IPv4 existantes.
>>
>> Une fois les informations saisies, cliquez sur le bouton `Valider`{.action}.
<!-- CP-STEPS-END:autoriser-adresse-ip -->

### Autoriser la connexion à un hébergement web OVHcloud <a name="trustip"></a>

Par défaut, votre solution Web Cloud Databases est automatiquement liée aux hébergements web OVHcloud. Si vous le souhaitez, vous pouvez cependant désactiver l'accès des hébergements web OVHcloud à votre base de données Web Cloud Databases.

Pour cela, consultez les cas particuliers de notre guide « [Web Cloud Databases - Comment autoriser une adresse IP ?](/pages/web_cloud/web_cloud_databases/authorise_IP) » pour activer / désactiver l'accès des hébergements web OVHcloud à votre base de données Web Cloud Databases.

### Lier votre site à la base de données

Maintenant que votre base de données est créée, qu'un ou plusieurs utilisateurs disposent de droits sur cette dernière et qu'au minimum une adresse IP ou que les hébergements web OVHcloud ont été autorisés sur votre instance Web Cloud Databases, il ne reste plus qu'à lier votre site à votre base de données. Cette étape peut s'effectuer de plusieurs manières, en fonction du site ou du CMS (WordPress, Joomla!, etc.) utilisé, ainsi que de l'étape à laquelle vous vous trouvez si vous installez un site web.

Pour cela, vous devez disposer des 5 informations suivantes :

|Information|Description|
|---|---|
|Nom de la base de données|Il s'agit du nom que vous avez défini lors de la création de la base de données.|
|Nom d'utilisateur|Il s'agit du nom d'utilisateur que vous avez défini lors de la création de la base de données ou d'un éventuel utilisateur additionnel que vous auriez ajouté.|
|Mot de passe de l'utilisateur|Il s'agit du mot de passe, lié à l'utilisateur, que vous avez défini lors des manipulations précédentes.|
|Nom d'hôte du serveur|Il s'agit du serveur à renseigner pour que votre site web puisse se connecter à votre base de données.|
|Port du serveur|Il s'agit du port de connexion à votre instance Web Cloud Databases pour que votre site puisse se connecter à votre base de données. |

<!-- CP-STEPS-START:lier-site-base-de-donnees -->
Pour les retrouver, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Récupérez les informations de connexion suivantes :
>>
>> - **Serveur (nom d'hôte) et port :** visibles dans l'onglet `Informations générales`{.action}, encadré `Informations de connexion`.
>> - **Utilisateur :** visible dans l'onglet `Utilisateurs et droits`{.action}.
>> - **Mot de passe :** le mot de passe associé à l'utilisateur. Si vous l'avez oublié, rendez-vous dans l'onglet `Utilisateurs et droits`{.action}, cliquez sur `...`{.action} à droite de l'utilisateur concerné, puis sur `Changer le mot de passe`{.action}.
>>
>> > [!warning]
>> >
>> > Si vous changez le mot de passe de l'utilisateur d'une base de données, toutes les applications/sites web qui accèdent à cette base doivent être mises à jour en conséquence.
<!-- CP-STEPS-END:lier-site-base-de-donnees -->

> [!warning]
>
> Le champ `port`{.action} peut ne pas être proposé dans la configuration de votre site web. Vous devez ajouter ce champ après le nom d'hôte de votre serveur en les séparant par un *:* .
>
> Par exemple, pour le nom d'hôte `aaXXXXX-XXX.eu.clouddb.ovh.net` avec comme port SQL `12345`, vous devrez renseigner `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` dans la partie « Hôte » / « Nom d'hôte ».

### Récupérer les logs de votre serveur Web Cloud Databases

Pour accéder aux logs de votre solution Web Cloud Databases, consultez notre guide « [Web Cloud Databases - Comment récupérer les logs ?](/pages/web_cloud/web_cloud_databases/retrieve-logs) ».

## Aller plus loin

[Créer vos bases de données et vos utilisateurs sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Se connecter à la base de données de votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Sauvegarder et exporter une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurer et importer une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Configurer votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/configure-database-server)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).