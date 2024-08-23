---
title: 'Premiers pas avec le service Web Cloud Databases'
excerpt: 'Découvrez comment bien débuter avec la solution Web Cloud Databases'
updated: 2024-03-18
---

## Objectif

La solution Web Cloud Databases permet de bénéficier d’une instance de bases de données dont les ressources sont dédiées et garanties, vous offrant performances et flexibilité.
Par défaut, votre solution Web Cloud Databases est liée au réseau d'hébergements web OVHcloud. Vous pouvez aussi la lier à n'importe quel autre réseau, via une liste d'adresses IP autorisées.

**Découvrez comment bien débuter avec la solution Web Cloud Databases.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases){.external} (incluse dans une offre d'[hébergement web performance](/links/web/hosting)).
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

### Activation de votre serveur Web Cloud Databases inclus avec votre offre d'hébergement web

Si votre offre d'hébergement inclut l'option Web Cloud Databases, rendez-vous dans votre [espace client OVHcloud](/links/manager){.external}. Depuis la section `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} dans la colonne de gauche.

Depuis l'onglet `Informations générales`, dans le cadre `Configuration`, cliquez sur le bouton `...`{.action} à droite de **Web Cloud Databases**. Cliquez enfin sur `Activer`{.action} pour lancer le processus d'activation.

![Informations générales](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}

Enfin, suivez les instructions fournies afin de déterminer le type et la version de votre serveur Web Cloud Databases. Il sera ensuite accessible depuis la colonne de gauche dans `Web Cloud Databases`{.action}.

### Visionner les informations générales de l'instance

Dans la barre de services à gauche de votre [espace client OVHcloud](/links/manager){.external}, rendez-vous dans la section `Web Cloud Databases`{.action}, puis sur l'instance concernée. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}.

> [!primary]
>
> Le nom du service Web Cloud Databases dans votre espace client OVHcloud contient une partie de votre référence client et se termine par trois chiffres (001 pour le premier service Web Cloud Databases installé, 002 pour le deuxième, etc.).
>

Vous pouvez y consulter les informations importantes concernant votre instance. Nous vous invitons à prendre quelques instants afin de vous assurer que les données affichées sont correctes ou correspondent aux indications ci-dessous.

|Information|Détails|
|---|---|
|État du service|Affiche notamment si l'instance est démarrée, en cours de redémarrage ou suspendue. Votre instance doit être démarrée pour pouvoir y réaliser des actions.|
|Type|Affiche le système de bases de données utilisée par le serveur.|
|Version|Affiche la version du système de bases de données utilisée par le serveur. Veillez à la compatibilité de votre site avec la version choisie.|
|Saturation CPU|Affiche le temps CPU passé en saturation. Votre instance Web Cloud Databases n'est pas limitée en termes de CPU mais vous devez veiller à ne pas surcharger le CPU de votre Web Cloud Databases.|
|RAM|Affiche la mémoire vive disponible pour votre instance ainsi que les éventuels dépassements de mémoire. Votre instance Web Cloud Databases dispose de ressources dédiées et garanties : sa mémoire RAM. Si besoin, vous pouvez faire évoluer cette dernière et être prévenu si vous consommez toutes les ressources mémoire de votre instance.|
|Infrastructure|Affiche l'infrastructure utilisée par votre instance. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud.|
|Datacenter|Affiche le centre de données dans lequel l'instance a été créée.|
|Host|Affiche le serveur OVHcloud dans lequel votre instance est créée. Il s'agit d'une information inhérente à l'infrastructure d'OVHcloud et peut être utilisée dans nos communications liées aux [incidents OVHcloud](https://www.status-ovhcloud.com/){.external}.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Création d'une base de données

> [!primary]
>
> Cette étape ne s'applique pas au système de bases de données Redis.
>

Pour créer votre première base de données sur votre instance Web Cloud Databases, cliquez sur l'onglet `Bases de données`{.action} puis sur le bouton `Ajouter une base de données`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

Sur la fenêtre qui s'affiche, et conjointement à la création de la base de données, vous pouvez choisir de créer un utilisateur, ce dernier pourra effectuer des requêtes sur votre base de données (comme la lecture, l'insertion ou la suppression de données).

Selon votre choix, complétez maintenant les informations demandées puis cliquez sur `Valider`{.action}.

|Information|Description|
|---|---|
|Nom de la base|Il s'agit du nom de votre future base de données.|
|Nom d'utilisateur|Il s'agit de l'utilisateur qui pourra se connecter à votre base de données et y effectuer des requêtes (facultatif si la case « *Créer un utilisateur* » n'est pas cochée).|
|Droits|Il s'agit des droits qui seront associés à l'utilisateur ; pour une utilisation classique, sélectionnez `Administrateur`{.action} (facultatif si la case « *Créer un utilisateur* » n'est pas cochée).|
|Mot de passe|Sélectionnez un mot de passe, puis confirmez ce dernier (facultatif si la case « *Créer un utilisateur* » n'est pas cochée).|

> [!warning]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors de l'enregistrement des informations.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-create-user-confirmation.png){.thumbnail}

### Création d'un utilisateur

> [!primary]
>
> Cette étape ne s'applique pas au système de bases de données Redis.
>

Si vous avez créé l'utilisateur en même temps que votre base de données lors de la manipulation précédente, cette étape est facultative. Cependant, pour un projet plus spécifique, il peut s'avérer nécessaire que plusieurs utilisateurs habilités interviennent sur votre base. Par exemple, l'un des utilisateurs associés à une base de données peut bénéficier des droits de lecture et d'écriture tandis que l'autre jouira uniquement d'un droit de lecture.

Si votre projet ne nécessite pas un utilisateur additionnel, vous pouvez passer à la manipulation suivante. Dans le cas contraire, pour créer un utilisateur sur votre instance Web Cloud Databases, cliquez sur l'onglet `Utilisateurs et droits`{.action} puis sur le bouton `Ajouter un utilisateur`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Sur la fenêtre qui s'affiche, complétez maintenant les informations demandées puis cliquez sur `Valider`{.action}.

|Information|Description|
|---|---|
|Nom d'utilisateur|Il s'agit de l'utilisateur qui pourra se connecter à votre instance. Vous pourrez ensuite lui associer des droits sur votre base de données.|
|Mot de passe|Sélectionnez un mot de passe puis confirmez ce dernier.|

> [!warning]
>
> Pour des raisons de sécurité, nous vous invitons à respecter les conditions indiquées lors de l'enregistrement des informations.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user-confirmation.png){.thumbnail}

Dès qu'un utilisateur est créé, il est nécessaire de lui attribuer des droits pour lui permettre d'effectuer des actions sur votre base de données (comme la lecture, l'insertion ou la suppression de données). Pour cela, cliquez sur le logo en forme de roue dentée, puis sur `Gérer les droits`{.action}. Sur la nouvelle page, sélectionnez le droit souhaité en cliquant dessus. Pour une utilisation classique, choisissez `Administrateur`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-2.png){.thumbnail}

### Importation d'une base de données

> [!primary]
>
> Cette étape s'applique si vous souhaitez importer une sauvegarde d'une base de données déjà existante. Si ce n'est pas le cas, passez à la manipulation suivante.
>

Il existe plusieurs techniques pour importer une base de données. Un outil est notamment à votre disposition depuis l'espace client OVHcloud et nous allons nous intéresser à cette méthode. Vous pouvez cependant en utiliser une autre, selon vos préférences et connaissances.

Les étapes ci-dessous décrivent comme importer une base de données grâce à l'outil disponible dans l'espace client OVHcloud.

- **Étape 1 : accéder à l'interface d'importation**

Depuis l'onglet `Bases de donées`{.action}, cliquez sur le pictogramme en forme de roue dentée puis sur `Importer un fichier`{.action}. Sur la fenêtre qui s'affiche, cochez la case `Importer un nouveau fichier`{.action} puis cliquez sur `Suivant`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-1.png){.thumbnail}

- **Étape 2 : sélectionner et envoyer le fichier de sauvegarde**

Renseignez un nom de fichier, qui vous permettra d'identifier cette sauvegarde plus tard si vous souhaitez de nouveau la restaurer. Ensuite, à côté de **Fichier**, sélectionnez le fichier de sauvegarde de la base de données sur votre ordinateur, puis cliquez sur `Envoyer`{.action}. Patientez le temps que l'interface vous indique que le fichier a été envoyé avec succès, puis cliquez sur le bouton `Suivant`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

- **Étape 3 : lancer l'importation de la base de données**

Choisissez finalement d'appliquer ou non les options additionnelles décrites ci-dessous, puis cliquez sur `Confirmer`{.action}.

|Options additionnelles|Description|
|---|---|
|Vider la base de données actuelle|Le contenu présent dans la base de données sera intégralement supprimé puis remplacé par celui de votre sauvegarde.|
|Envoyer un e-mail à la fin de l'importation|Une notification par e-mail vous sera envoyée lorsque l'importation de la base de données sera effectuée.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-3-send-email.png){.thumbnail} 

### Autoriser une adresse IP 

Afin que l’accès à votre instance Web Cloud Databases fonctionne, il est obligatoire d'indiquer les IP ou plages d'IP pouvant se connecter à vos bases de données. Pour cela, cliquez sur l'onglet `IP autorisées`{.action} puis sur le bouton `Ajouter une adresse IP/masque`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-2.png){.thumbnail}

Sur la fenêtre qui s'affiche, indiquez l'adresse IP ou le masque que vous désirez autoriser dans `IP/masque`{.action} puis ajoutez une description si vous le souhaitez. Décidez ensuite si vous voulez donner accès uniquement aux bases de données ou au SFTP. Enfin, cliquez sur `Valider`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

### Autoriser la connexion à un hébergement web OVHcloud <a name="trustip"></a>

Par défaut, votre solution Web Cloud Databases est automatiquement liée aux hébergements web OVHcloud. Si vous le souhaitez, vous pouvez néanmoins désactiver l'accès des hébergements web OVHcloud à votre base de données Web Cloud Databases.

Pour cela, cliquez sur l'onglet `IP autorisées`{.action} puis sur le bouton `Accès aux hébergements web OVHcloud`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/access-to-ovhcloud-web-hosting.png){.thumbnail}

### Lier votre site à la base de données

Maintenant que votre base de données est créée, qu'un ou plusieurs utilisateurs disposent de droits sur cette dernière et qu'au minimum une adresse IP ou que les hébergements web OVHcloud on été autorisés sur votre instance Web Cloud Databases, il ne reste plus qu'à lier votre site à votre base de données. Cette étape peut s'effectuer de plusieurs manières, en fonction du site ou du CMS (WordPress, Joomla!, etc.) utilisé, ainsi que de l'étape à laquelle vous vous trouvez si vous installez un site web.

Afin de pouvoir mener à bien cette manipulation, vous devez quoi qu'il arrive être en possession de ces cinq informations :

|Information|Description|
|---|---|
|Nom de la base de données|Il s'agit du nom que vous avez défini lors de la création de la base de données. Vous pouvez retrouver toutes vos bases de données créées sur votre instance Web Cloud Databases depuis l'onglet `Bases de données`{.action}.|
|Nom d'utilisateur|Il s'agit du nom d'utilisateur que vous avez défini lors de la création de la base de données ou d'un éventuel utilisateur additionnel que vous auriez ajouté. Vous pouvez retrouver tous les utilisateurs créés sur votre instance Web Cloud Databases depuis l'onglet `Utilisateurs et droits`{.action}.|
|Mot de passe de l'utilisateur|Il s'agit du mot de passe, lié à l'utilisateur, que vous avez défini lors des manipulations précédentes.|
|Nom d'hôte du serveur|Il s'agit du serveur à renseigner afin que votre site puisse se connecter à votre base de données. Cette information est accessible dans votre espace client, depuis le cadre **Informations de connexion** de l'onglet `Informations générales`{.action}.|
|Port du serveur|Il s'agit du port de connexion à votre instance Web Cloud Databases pour que votre site puisse se connecter à votre base de données. Cette information est accessible dans votre espace client, depuis le cadre **Informations de connexion** de l'onglet `Informations générales`{.action}.|

> [!warning]
>
> Le champ `port`{.action} peut ne pas être proposé dans la configuration de votre site. Vous devrez ajouter ce champ après le nom d'hôte de votre serveur en les séparant par un *:* .<br><br>
> Par exemple, pour le nom d'hôte `zz1111111-002.eu.clouddb.ovh.net` avec comme port SQL `34567`, vous devrez renseigner `zz1111111-002.eu.clouddb.ovh.net:34567` dans la partie "Hôte" / "Nom d'hôte" .
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/login-information.png){.thumbnail}

### Récupérer les logs de votre serveur Web Cloud Databases

Pour accéder aux logs de votre solution Web Cloud Databases, consultez notre guide « [Web Cloud Databases - Comment récupérer les logs ?](/pages/web_cloud/web_cloud_databases/retrieve-logs) ».

## Aller plus loin

[Créer vos bases de données et vos utilisateurs sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server){.external}

[Se connecter à la base de données de votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server){.external}

[Sauvegarder et exporter une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/save-export-on-database-server){.external}

[Restaurer et importer une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server){.external}

[Configurer votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/configure-database-server){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).