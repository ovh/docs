---
title: 'Installer Ghost sur son hébergement Cloud Web'
slug: installer-ghost-cloud-web
excerpt: 'Apprenez à installer un blog avec le moteur Ghost sur Cloud Web'
section: Tutoriels
order: 1
---

## Introduction

[Ghost](https://ghost.org/){.external} est un moteur de blog open source. Il est conçu pour simplifier le processus de publication en ligne par des blogueurs ou journalistes. Ce logiciel est écrit en JavaScript et utilise [Node.js](https://nodejs.org/){.external}, une plateforme logicielle permettant de créer vos sites et API en JavaScript côté serveur.

L'[hébergement Cloud Web OVH]({ovh_www}/hebergement-web/cloud-web.xml){.external} permet d'utiliser Node.js comme moteur d'exécution pour vos sites web et donc d'y installer et héberger Ghost ou toute autre application conçue pour Node.js.

Dans ce tutoriel, nous allons installer un blog avec Ghost sur un hébergement Cloud Web d'OVH et le mettre à disposition derrière votre nom de domaine.

## Prérequis

### Ce que vous devez savoir

- Connaître les bases de l'écosystème Node.js.
- Se connecter en SSH.
- Éditer un fichier en ligne de commande via Vim, Emacs ou Nano par exemple.

### Ce que vous devez avoir

- Disposer d'un [hébergement Cloud Web OVH]({ovh_www}/hebergement-web/cloud-web.xml){.external}.
- Avoir activé Node.js comme moteur d'exécution.
- Avoir ajouté le nom de domaine concerné en tant que multisite et avoir défini Node.js comme étant son moteur d'exécution.
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

### Étape 1 : activer Node.js comme moteur d'exécution

Pour accéder aux moteurs d'exécution de votre hébergement Cloud Web, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement Cloud Web concerné. Positionnez-vous enfin sur l'onglet `Moteurs d'exécution`{.action}.

Le tableau qui apparaît affiche les moteurs d’exécution ajoutés actuellement. Assurez-vous alors que le moteur d'exécution Node.js est bien activé. Si tel est le cas, poursuivez vers l'étape 2 « [Associer Node.js à un multisite](./#etape-2-associer-nodejs-a-un-multisite) ».

![ghostcloudweb](images/ghost-cloud-web-step1.png){.thumbnail}

Si ce n'est pas le cas, ajoutez-en un nouveau (si votre offre vous le permet) ou modifiez le moteur d'exécution existant.

- **Si vous souhaitez ajouter un moteur** : cliquez sur `Actions`{.action} au-dessus du tableau, puis sur `Ajouter un moteur d'exécution`{.action}.
- **Si vous souhaitez modifier un moteur** : cliquez sur le bouton `...`{.action} à droite du moteur concerné, puis sur `Modifier`{.action}.

Dans la fenêtre qui s'affiche, complétez les informations demandées avec les valeurs suivantes de notre exemple ou adaptez-les à votre situation personnelle.

|Information|Valeur à renseigner| 
|---|---| 
|Nom personnalisé|NodeJS 8|
|Moteur d'exécution|nodejs-8|
|Chemin d'accès au répertoire public|public|
|Environnement de l'application|production|
|Script de lancement de l'application|server.js|

Une fois les informations complétées, cliquez sur `Valider`{.action}. Si vous souhaitez obtenir plus d'informations sur la gestion des moteurs d'exécution, reportez-vous à notre guide « [Gérer les moteurs d’exécution de Cloud Web](../gerer-moteurs-execution-runtime-cloud-web/){.external} ».

![ghostcloudweb](images/ghost-cloud-web-step2.png){.thumbnail}

### Étape 2 : associer Node.js à un multisite

Maintenant que Node.js est activé en tant que moteur d'exécution, vous devez l'associer à l'un de vos multisites. Pour cela, positionnez-vous sur l'onglet `Multisite`{.action}. Le tableau qui s’affiche contient tous les noms de domaine qui ont été ajoutés en tant que multisite. 

![ghostcloudweb](images/ghost-cloud-web-step3.png){.thumbnail}

Deux colonnes doivent retenir votre attention dans le tableau ci-dessus. Vérifiez alors que le moteur d'exécution Node.js est bien lié aux domaines concernés et que le dossier racine est correct. Aidez-vous des informations ci-dessous si nécessaire. Si tel est le cas, poursuivez vers l'étape 3 « [Créer une base de données MySQL](./#etape-3-creer-une-base-de-donnees-mysql) ».

|Colonne|Description| 
|---|---| 
|Dossier racine|Il s'agit du dossier racine qui devra contenir le code source du domaine concerné (il correspond au « DocumentRoot »). Dans notre exemple, nous choisissons de spécifier « ghost ». Celui-ci devra donc contenir notre code source Node.js.|
|Moteur d'exécution|Il s'agit du moteur d'exécution associé au domaine concerné. Le nom qui s’affiche correspond au « Nom personnalisé » que vous avez défini lors de la création du moteur d'exécution. Dans notre exemple, vous devriez retrouver « NodeJS 8 ».|

Si ce n'est pas le cas, ajoutez un nouveau multisite ou modifiez celui existant.

- **Si vous souhaitez ajouter un multisite** : cliquez sur `Ajouter un domaine ou sous-domaine`{.action} à droite du tableau.
- **Si vous souhaitez modifier un multisite** : cliquez sur le bouton en forme de roue dentée à droite du nom de domaine concerné, puis sur `Modifier`{.action}.

Dans la fenêtre qui s'affiche, complétez les informations demandées selon votre situation personnelle. Le tableau ci-dessous montre celles utilisées pour ce tutoriel.

|Information|Valeur utilisée en exemple pour ce tutoriel| 
|---|---| 
|Domaine|ghost.demo-nodejs.ovh|
|Dossier racine|ghost|
|Moteur d'exécution|NodeJS 8|

En ce qui concerne les options supplémentaires, choisissez celles que vous souhaitez activer. Une fois les informations complétées, cliquez sur `Suivant`{.action}, puis finalisez la manipulation. Cet ajout peut prendre jusqu’à une heure. Cependant, la modification de la configuration DNS peut prendre jusqu'à 24 heures avant d’être pleinement effective. Si vous souhaitez obtenir plus d'informations sur la gestion des multisites, reportez-vous à notre guide « [Partager son hébergement entre plusieurs sites](../../hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external} ».

![ghostcloudweb](images/ghost-cloud-web-step4.png){.thumbnail}

### Étape 3 : créer une base de données MySQL

Positionnez-vous maintenant sur l'onglet `Bases de données`{.action}. Si celui-ci n'apparaît pas dans la liste, appuyez au préalable sur le bouton représentant trois barres. Le tableau affiche les bases de données déjà créées sur votre hébergement. Pour initier la création d’une nouvelle base de données, il existe deux possibilités :

- **si vous n’avez pas encore créé de base de données**, cliquez sur le bouton `Créer une base de données`{.action} ;

- **si vous avez déjà créé une base de données**, cliquez sur le bouton `Actions`{.action} au-dessus du tableau, puis sur `Créer une base de données`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step5.png){.thumbnail}

Dans la fenêtre qui s'affiche, sélectionnez alors « MySQL », puis choisissez une version. Pour ce tutoriel, nous avons sélectionné la version « 5.6 ». Sélectionnez ensuite « Stockée dans votre instance Cloud Web », puis cliquez sur `Suivant`{.action}.

Personnalisez ensuite un nom d'utilisateur et définissez-lui un mot de passe. Une fois ceci fait, cliquez sur `Suivant`{.action}. Confirmez alors la création de la base de données en cliquant sur `Valider`{.action}. Patientez ensuite quelques minutes le temps que la manipulation se réalise.

![ghostcloudweb](images/ghost-cloud-web-step6.png){.thumbnail}

### Étape 4 : créer les variables d'environnement

Cette étape peut être facultative si vous ne souhaitez pas créer des variables d'environnement. Cependant, nous vous le recommandons fortement. 

Pour ce tutoriel, nous allons créer des variables d'environnement dans lesquelles nous renseignerons les informations de connexion à notre base de données MySQL. Ainsi, si celles-ci évoluent, suite à une modification du mot de passe par exemple, nous devrons simplement modifier la valeur de la variable depuis l'espace client, plutôt que de devoir modifier le code source.

Pour cela, positionnez-vous sur l'onglet `Variables d'environnement`{.action}. Le tableau affiche les variables déjà créées. Pour en ajouter une nouvelle, cliquez sur le bouton `Actions`{.action} au-dessus du tableau, puis sur `Ajouter une variable d'environnement`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step7.png){.thumbnail}

Dans la fenêtre qui s'affiche, complétez les informations demandées selon votre situation personnelle, puis cliquez sur le bouton `Confirmer`{.action} pour créer la variable. Voici celles que nous avons créées pour ce tutoriel :

|Nom|Type de variable|Valeur| 
|---|---|---|
|database\__connection__host|string|L'adresse du serveur MySQL|
|database\__connection__user|string|Le nom d'utilisateur MySQL choisi à sa création|
|database\__connection__database|string|Le nom de la base MySQL|
|database\__connection__password|password|Le mot de passe MySQL choisi à sa création|
|database__client|string|mysql|
|server__port|integer|80|
|server__host|string|0.0.0.0|

![ghostcloudweb](images/ghost-cloud-web-step8.png){.thumbnail}

### Étape 5 : se connecter à votre Cloud Web via SSH

Récupérez d'abord les informations vous permettant de vous connecter. Pour cela, positionnez-vous sur l'onglet `FTP - SSH`{.action}. Si celui-ci n'apparaît pas dans la liste, appuyez au préalable sur le bouton représentant trois barres. Les informations liées à votre espace de stockage apparaissent alors. Repérez celles mentionnées à côté des éléments suivants :

|Éléments|Description| 
|---|---| 
|Accès SSH au cluster|L'élément qui apparaît vous permet de récupérer deux informations : <br>**- l'adresse de serveur** : elle débute après « ssh:// » et se termine avant les « : » ;<br> **- le port de connexion** : le numéro est mentionné après les « : ». <br><br>On pourrait par exemple retrouver : ssh://`sshcloud.cluster024.hosting.ovh.net`:`12345`/, donc « sshcloud.cluster024.hosting.ovh.net » en adresse de serveur et « 12345 » en port de connexion.|
|Login SSH principal|Il s'agit de l'identifiant SSH principal créé sur votre hébergement.|

Si vous ne connaissez plus le mot de passe de l'utilisateur SSH, cliquez sur le bouton `...`{.action} à droite de l'utilisateur concerné dans le tableau, puis sur `Changer le mot de passe`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step9.png){.thumbnail}

À présent, pour vous connecter en SSH, vous devez utiliser un terminal. Cet outil est installé par défaut sur macOS ou Linux. Un environnement Windows nécessitera l’installation d’un logiciel comme PuTTY ou l’ajout de la fonctionnalité « OpenSSH ». Cette démarche étant spécifique au système d’exploitation que vous utilisez, nous ne pouvons pas la détailler dans cette documentation.

Voici l'exemple d'une ligne de commande que vous pouvez utiliser. Remplacez les éléments « sshlogin », « sshserver » et « connectionport » par ceux adaptés à votre situation personnelle. Une fois la commande envoyée, vous serez invité à renseigner le mot de passe de l’utilisateur SSH.

```sh
ssh sshlogin@sshserver -p connectionport
```

Vous pouvez alors par exemple vérifier que les variables d'environnements créées [lors de l'étape 4](./#etape-4-creer-les-variables-denvironnement) sont bien présentes. Pour notre tutoriel, nous retrouvons alors :

```sh
demonon@cloudweb-ssh:~ $ env | grep "database_"
database__client=mysql
database__connection__host=demononghost.mysql.db
database__connection__user=demononghost
database__connection__password=ZuperZecure123
database__connection__database=demononghost
```

### Étape 6 : installer Ghost

Commencez en vous plaçant dans le dossier racine spécifié [lors de l'étape 2](./#etape-2-associer-nodejs-a-un-multisite). Dans notre tutoriel, il s'agit du répertoire « ghost ».

```sh
demonon@cloudweb-ssh:~ $ ls -l
drwxr-xr-x 3 demonon demonon 4 Mar  6 16:53 ghost
drwx---r-x 3 demonon demonon 5 Mar  6 16:48 www
demonon@cloudweb-ssh:~ $ cd ghost/
demonon@cloudweb-ssh:~/ghost $
```

Récupérez la [dernière version de Ghost](https://ghost.org/fr/developers/){.external} et décompressez son contenu.

```sh
demonon@cloudweb-ssh:~/ghost $ ls
public  server.js
demonon@cloudweb-ssh:~/ghost $ curl -s -LO https://github.com/TryGhost/Ghost/releases/download/2.16.4/Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ unzip Ghost-2.16.4.zip
Archive:  Ghost-2.16.4.zip
   creating: content/
   creating: content/adapters/
  inflating: content/adapters/README.md 
   creating: content/apps/
  inflating: content/apps/README.md 
  ....
demonon@cloudweb-ssh:~/ghost $ rm Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ ls
Gruntfile.js  LICENSE  MigratorConfig.js  PRIVACY.md  README.md  content  core  index.js  package.json  public  server.js  yarn.lock
```

Ghost utilise [Yarn](https://yarnpkg.com/en/){.external}, une alternative à **npm**, comme gestionnaire de dépendances Node.js. Installez Yarn via **npm**, et ajoutez ces binaires dans votre « PATH » :

```sh
demonon@cloudweb-ssh:~/ghost $ npm-node8 install yarn
npm notice created a lockfile as package-lock.json. You should commit this file.
+ yarn@1.13.0
added 1 package and audited 1 package in 2.893s
found 0 vulnerabilities
 
demonon@cloudweb-ssh:~/ghost $ export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/
demonon@cloudweb-ssh:~/ghost $ node --version
v8.15.0
demonon@cloudweb-ssh:~/ghost $ yarn --version
1.13.0
```

Vous pouvez persister ces changements dans votre « PATH » en ajoutant l'export dans le fichier « ~/.profile » :

```sh
demonon@cloudweb-ssh:~ $ echo "export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/" >> ~/.profile
```

Installez ensuite les dépendances de Ghost en utilisant Yarn :

```sh
demonon@cloudweb-ssh:~/ghost $ yarn install
yarn install v1.13.0
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 269.89s.
```

Toujours positionné dans le dossier « ~/ghost », créez un fichier `config.production.json` contenant la configuration de Ghost :

```json
{
    "url": "http://ghost.demo-nodejs.ovh",
    "paths": {
        "contentPath": "content/"
    }
}
```

Faites pointer ensuite le fichier `server.js` (défini [lors de l'étape 1](./#etape-1-activer-nodejs-comme-moteur-dexecution)) vers le fichier `index.js` de Ghost :

```sh
demonon@cloudweb-ssh:~/ghost $ unlink  server.js
demonon@cloudweb-ssh:~/ghost $ ln -s index.js server.js
```

L'installation et la configuration de Ghost sont maintenant terminées. Il ne vous reste plus qu'à redémarrer le *daemon* Node.js pour qu'il prenne en compte les changements effectués dans le dossier « ~/ghost ».

### Étape 7 : redémarrer le *daemon* Node.js

Pour redémarrer le *daemon* Node.js, retournez sur votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Positionnez-vous sur l'onglet `Multisite`{.action}, cliquez à droite du nom de domaine concerné sur le bouton représentant une roue dentée, puis sur `Redémarrer`{.action}

Une fois ceci fait, l'application sera accessible via le nom de domaine choisi dans la configuration de votre multisite.

![ghostcloudweb](images/ghost-cloud-web-step10.png){.thumbnail}

### Étape 8 : utiliser HTTPS

Pour plus de sécurité sur votre site, vous pouvez mettre en place une redirection HTTP vers HTTPS. Pour ce faire, toujours positionné dans le dossier `ghost`, créez un fichier `.htaccess` avec le contenu suivant :

```
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Conclusion

Nous avons vu comment installer une application Node.js sur un hébergement Cloud Web en respectant les différentes étapes. Il ne vous reste plus qu'à utiliser Ghost et y publier vos premiers contenus !