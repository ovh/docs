---
title: "Tutoriel - Sauvegarder votre site WordPress"
slug: realize-backup-wordpress
excerpt: "Découvrez comment sauvegarder le contenu de votre site WordPress et sa base de données"
section: 'Tutoriels'
order: 021
updated: 2023-02-07
---

**Dernière mise à jour le 07/02/2023**

## Objectif

Même en prenant toutes les précautions d'usage, votre site web reste exposé à un potentiel dysfonctionnement (erreur de manipulation, écrasement accidentel de fichiers, défaut de configuration, faille de sécurité ou piratage) qui peut avoir pour conséquence la perte partielle ou totale de vos données .<br>
La sauvegarde régulière des informations de votre site web est une bonne pratique à adopter. Elle vous permettra de revenir à un état antérieur de votre site lorsque vous rencontrez un dysfonctionnement.

Sur un hébergement web mutualisé, vous êtes responsable des sauvegardes de votre site web. Même si OVHcloud propose des sauvegardes (non contractuelles), nous vous recommandons de réaliser également vous-même des sauvegardes régulières et de gérer vos propres supports de sauvegarde (disque dur, clé USB, etc.) pour plus de précautions.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) ou à [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

**Découvrez comment sauvegarder le contenu de votre site WordPress et sa base de données.**

## Prérequis

- Disposer d'un [hébergement web](https://www.ovhcloud.com/fr/web-hosting/) et avoir installé WordPress

## En pratique

Vous pouvez effectuer une sauvegarde de deux façons : **manuellement** ou par le **biais d'une extension**.

OVHcloud fournit un [service (non contractuel) de sauvegarde automatique des données](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) ainsi que la mise à disposition de ces sauvegardes. Il est toutefois de votre responsabilité de mettre en place votre propre politique de restauration et de déterminer des points de restauration aux moments que vous jugez opportuns.

### Méthode n°1 - réaliser une sauvegarde manuelle

La sauvegarde manuelle doit se faire en deux étapes. Vous devez d'abord sauvegarder les fichiers PHP de votre site web puis exporter votre base de données.

#### 1.1 - Sauvegardez les fichiers de votre site web

La récupération se fait via un client FTP comme FileZilla. Consultez notre guide « [Utiliser FileZilla avec votre hébergement OVHcloud](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) » pour plus d'informations.

Lorsque vous vous connectez sur votre serveur en FTP, vous devez récupérer (en effectuant un glisser/déposer) le contenu du répertoire `www` sur le volet de droite. Ce répertoire contient la totalité des fichiers et répertoires de votre site WordPress (configuration, thèmes, médias, etc.).

![Vue des fichiers et répertoires WordPress à la racine](images/how_to_backup_your_wordpress_1.png)

Cliquez sur le répertoire `www` et glissez-le sur le répertoire de votre choix dans la fenêtre de gauche. Le transfert des fichiers commencera automatiquement.

En cas de dysfonctionnement sur votre site web, vous devrez réaliser l'opération inverse en écrasant les fichiers de destination.

#### 1.2 - Exportez votre base de données

Pour exporter votre base de données, rendez-vous sur l'interface _PHPMyAdmin_ via l'URL qui vous a été communiquée lors de la souscription de votre offre d'hébergement web.

> [!success]
>
> N'hésitez pas à consulter notre guide sur [l'export d'une base de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/).

![Accès PHPMyAdmin - Accueil](images/how_to_backup_your_wordpress_2.png)

Cliquez sur `Exporter`{.action} en haut de la page :

![Accès PHPMyAdmin - Exporter](images/how_to_backup_your_wordpress_3.png)

Laissez les choix proposés par défaut : méthode d'exportation rapide et format SQL.

Cliquez sur `Exécuter`{.action}, vous téléchargez alors votre base de données complète au format SQL (Structured Query Language).

![Accès PHPMyAdmin - Exporter - Téléchargement](images/how_to_backup_your_wordpress_4.png)

### Méthode n°2 - réaliser une sauvegarde avec une extension

De nombreuses extensions WordPress permettent de gérer vos sauvegardes. La plus populaire est [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external} qui compte plusieurs millions d'installations actives. La version gratuite est suffisante pour sauvegarder votre site web. La version premium offre plus d'options telles que les sauvegardes incrémentales, un outil de migration, la sauvegarde multisites, plus de choix sur les clouds destinés à stocker les données, etc.

Téléchargez l'extension au format `.zip` sur votre ordinateur. Pour des raisons de clarté, le fichier téléchargé de l'extension sera renommé **updraftplus.zip** dans la suite de ce tutoriel.

#### 2.1 - Connectez-vous à l'interface d'administration pour installer l'extension

Par défaut, il s'agit de votre nom de domaine suivi de `/wp-admin` :

![Accès connexion administrateur sur wp-admin](images/how_to_backup_your_wordpress_5.png)

Sur la page d'accueil, rendez-vous dans la section `Extensions`{.action} puis cliquez sur `Ajouter`{.action} :

![Ajouter une extension](images/how_to_backup_your_wordpress_6.png)

Téléversez l'extension en cliquant sur le bouton `Parcourir`{.action} :

![Uploader l'extension](images/how_to_backup_your_wordpress_7.png)

Cliquez sur `Installer maintenant`{.action} :

![Installer l'extension](images/how_to_backup_your_wordpress_8.png)

Après l'installation, vous êtes invité à activer l'extension :

![Confirmation d'installation](images/how_to_backup_your_wordpress_9.png)

Une fois activée, celle-ci apparaitra dans la liste des extensions :

![Liste des extensions installées](images/how_to_backup_your_wordpress_10.png)

#### 2.2 - Configurez vos sauvegardes

Sur la page mentionnée ci-dessus, cliquez sur `Réglages`{.action} puis, sur la page `UpdraftPlus Backup/Restore`, cliquez sur l'onglet `Réglages`{.action} :

![Page UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_11.png)

Définissez la sauvegarde quotidienne de vos fichiers et de votre base de données :

![Page UpdraftPlus Réglages](images/how_to_backup_your_wordpress_12.png)

Choisissez la sauvegarde par e-mail.

Les sauvegardes seront envoyées sur l'adresse e-mail du compte administrateur (le compte que vous utilisez) :

![Sauvegarde par adresse mail](images/how_to_backup_your_wordpress_13.png)

En bas de la page, cliquez sur `Enregistrer les modifications`{.action} pour valider.

#### 2.3 - Effectuez votre première sauvegarde

Revenez sur l'onglet `Sauvegarder/restaurer`{.action} et cliquez sur le bouton `Sauvegarder`{.action} :

![Page UpdraftPlus Sauvegarder/Restaurer](images/how_to_backup_your_wordpress_14.png)

Dans la fenêtre qui s'affiche, cliquez à nouveau sur `Sauvegarder`{.action} :

![Page UpdraftPlus modale Sauvegarder/Restaurer](images/how_to_backup_your_wordpress_15.png)

Une fois, vos sauvegardes terminées, vous recevrez deux e-mails : l'un avec le contenu de votre Wordpress, l'autre avec la base de données de votre site web.
Si vous ne recevez pas les e-mails, vérifiez l'adresse e-mail du compte que vous utilisez (dans la section `Comptes`{.action}). Vérifiez également vos dossiers « SPAM / Courrier indésirable ».

### À quelle fréquence effectuer des sauvegardes ?

La fréquence de vos sauvegardes est déterminée par celle à laquelle vous modifiez votre contenu. Une sauvegarde quotidienne est utile si vous publiez tous les jours du contenu sur votre site web. Adaptez donc la fréquence en fonction de celle de vos publications. Vous avez la possibilité de faire manuellement la mise à jour (c'est l'option qui est proposée par défaut). Il est également conseillé de faire une sauvegarde dès que vous installez ou modifiez un thème ou une extension.

### Ce qu'il faut retenir

- Intégrer une routine de sauvegardes régulières est un bon moyen de sécuriser le contenu de votre site web.
- Veillez à ce que vos sauvegardes soient elles-mêmes sécurisées.
- Réalisez une sauvegarde avant d'effectuer une mise à jour et vérifiez après celle-ci que tout fonctionne correctement sur votre site web. 

En appliquant ces bonnes pratiques, vous aurez la possibilité de revenir à une version antérieure saine.

## Aller plus loin <a name="go-further"></a>

- [Site officiel de WordPress](https://wordpress.org){.external}
- [Plus d'informations sur les sauvegardes de votre hébergement web](https://docs.ovh.com/fr/hosting/specificites-techniques-hebergements-mutualises/#informations-sur-les-sauvegardes-automatiques)
