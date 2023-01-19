---
title: "Tutoriel - Que faire lorsque ma base de données est saturée ?"
slug: overquota-database
excerpt: "Découvrez comment agir lorsque votre base de données est saturée"
section: 'Bases de données'
order: 06
---

**Dernière mise à jour le 17/01/2023**

## Objectif

Une base de données permet, par exemple, de stocker des informations relatives à votre site web et à son fonctionnement. Ces informations sont structurées pour que votre site web y accède facilement : ce qui permet une consultation optimale et personnalisée pour les utilisateurs/visiteurs de votre site web. 

Au cours de son utilisation, une base de données peut acquérir, modifier ou supprimer des informations (données de connexion, données utilisateurs, données d'affichage, données nécessaires au bon fonctionnement de votre site web, etc.). 

Dans certains cas, la base de données enregistre une telle quantité d'informations que l'espace de stockage qui lui est alloué sature. Lorsque la base de données est saturée, on parle d'**overquota**.

Ce tutoriel vous propose des actions lorsque votre base de données mutualisée OVHcloud arrive à saturation ou déjà en **overquota**.

**Découvrez comment agir lorsque votre base de données est saturée**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer d'une [offre d'hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) avec une base de données mutualisée OVHcloud associée.
  
## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Lorsque votre base de données mutualisée OVHcloud arrive à saturation (**overquota**), nos robots vous avertissent par e-mail sur l'adresse e-mail du [contact « Administrateur »](https://docs.ovh.com/fr/customer/gestion-des-contacts/) de la base de données. 

Un premier e-mail est envoyé lorsque votre base de données a consommé plus de **80%** de sa capacité. Un deuxième e-mail est envoyé lorsque vous avez dépassé **90%**.

Lorsque votre base de données est en **overquota**, un troisième e-mail d'avertissement vous est envoyé. Votre base de données bascule alors en `READ ONLY` (lecture seule). Vous ne pouvez plus ajouter ou modifier les entrées de votre base de données mais elle reste accessible en *lecture* et en *suppression*. 

### Etape 1 : identifier la ou les table(s) volumineuse(s)

Une base de données est constituée d'une ou plusieurs **tables**, elles-mêmes constituées d'une ou plusieurs **lignes** organisées à l'aide de **colonnes** prédéterminées.

La première étape consiste à identifier la ou les tables volumineuses présentes dans votre base de données.

>[!primary]
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} est disponible sur l'ensemble des bases de données mutualisées OVHcloud.
> Cette application de gestion de base de données facilite la réalisation des actions manuelles que vous pouvez effectuer avec votre base de données.
>
> Toutes les actions expliquées ci-après dans ce tutoriel seront décrites à partir de **phpMyAdmin**.
>

#### 1.1 - Se connecter à la base de données via phpMyAdmin

Récupérez le mot de passe d'accès à votre base de données directement dans le fichier de configuration de votre site web. Réalisez cette action à l'aide de l'**étape 1** de notre guide sur [le changement du mot de passe d'une base de données](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Web Cloud`{.action} dans la barre de navigation en haut de l’écran. Cliquez sur `Hébergements`{.action} puis choisissez l’hébergement web avec lequel votre base de données mutualisée OVHcloud est associée. Positionnez-vous enfin sur l'onglet `Bases de données`{.action}.

![phpMyAdmin Access](images/pma_access.png){.thumbnail}

Toujours depuis l'onglet `Bases de données`{.action}, cliquez sur le bouton `...`{.action} à droite de la base de données qui est pleine, puis sur `Accéder à phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma_interface.png){.thumbnail}

Renseignez le mot de passe d'accès à votre base de données en complément des informations pré-remplies puis cliquez sur `Exécuter`{.action}.

#### 1.2 - Rechercher les tables les plus volumineuses

> [!Alert]
>
> A partir de maintenant, vous intervenez directement sur le contenu de votre base de données. Les manipulations que vous réalisez dans phpMyAdmin peuvent avoir des conséquences irréversibles si celles-ci ne sont pas réalisées correctement.
>
> Soyez sûr des manipulations que vous effectuez. Si vous éprouvez la moindre difficulté, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/). En effet, OVHcloud ne pourra pas vous fournir une assistance sur le contenu de votre base de données.
>

Une fois connecté, la page suivante s'affiche :

![phpMyAdmin Login](images/pma_login.png){.thumbnail}

Cliquez sur le `« Nom de votre base de données »`{.action} dans la colonne de gauche puis sur `Taille`{.action} en haut à droite du tableau qui s'affiche :

![phpMyAdmin Tables](images/pma_show_table.png){.thumbnail}

Les tables les plus volumineuses apparaissent en haut du tableau. Identifiez les **tables** les plus volumineuses puis passez à l'**étape 2**.

### Etape 2 : déterminer l'utilité du contenu présent dans la ou les table(s) volumineuse(s)

Une fois les tables volumineuses identifiées, déterminez si l'intégralité de leurs contenus est nécessaire au fonctionnement de votre site ou non.

>[!primary]
>
> Si vous utilisez un Content Managment System (CMS) tel que WordPress, Joomla!, PrestaShop ou Drupal, vérifiez que vos tables volumineuses ne sont pas liées à un plugin/thème récemment installé ou mis à jour.
>
> Dans ce cas, contactez l'éditeur du plugin/thème pour qu'il vous indique les correctifs à appliquer pour votre CMS.
>
 
Pour les autres cas liés aux CMS, nous vous recommandons de contacter directement l'éditeur de votre CMS avant de réaliser les actions qui suivent.

Retrouvez ci-dessous les liens vers les sites officiels des CMS proposés en installation « **En un clic** » par OVHcloud :

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> Si votre site a été développé « **manuellement** » par un prestataire spécialisé, nous vous recommandons de le contacter afin qu'il vous accompagne.
>

### Etape 3 : mener une action corrective

Une fois que vous avez déterminé si le contenu de vos tables est nécessaire ou non au fonctionnement de votre site, plusieurs options s'offrent à vous :

#### Cas 1 - l'ensemble du contenu de la table volumineuse est nécessaire au bon fonctionnement de votre site :

Vous devrez basculer votre base de données sur une base de données plus volumineuse.

Consultez notre offre de base de données [Cloud Databases](https://www.ovh.com/fr/cloud-databases/) pour choisir votre nouveau service de base de données. 

Nous recommandons cette offre pour les bases de données volumineuses.

Suivez ensuite nos guides pour déplacer le contenu de votre ancienne base de données vers la nouvelle :

- [Exporter votre base de données existante](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/)
- [Premiers pas avec l'offre Cloud Databases](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/)
- [Importer votre ancienne base de données dans votre offre Cloud Databases](https://docs.ovh.com/fr/clouddb/restaurer-importer-base-de-donnees/)

#### Cas 2 - Une partie ou l'ensemble du contenu de la table volumineuse n'est pas nécessaire au fonctionnement de votre site :

Avant d'effectuer ce qui suit, vérifiez si les données contenues dans la table volumineuse correspondent à des éléments qui peuvent être supprimés depuis l'espace d'administration de votre CMS. 

**Exemples** :

- anciens commentaires/posts
- éléments présents dans le menu `Corbeille` de votre CMS
- données liées à un ancien thème et/ou plugin

>[!alert]
>
> La suite de ce guide vous décrit comment supprimer des données présentes dans votre base de données. Assurez-vous de ce que vous faites ou contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) en cas de doute.
>

Les bases de données mutualisées OVHcloud disposent de plusieurs commandes SQL pour agir sur leurs contenus.

Dans le cas d'un overquota ou d'une table volumineuse, **trois commandes** sont disponibles.

Vous pouvez directement effectuer ces requêtes depuis l'interface **phpMyAdmin** via l'onglet `SQL`{.action} :

![phpMyAdmin SQL request](images/pma_sql_request.png){.thumbnail}

La commande **DELETE** : 

Elle permet de supprimer **une ou plusieurs lignes** d'une table donnée. Cette commande est utile si une partie du contenu de la table est nécessaire au bon fonctionnement de votre site web.

**Exemples** :

```bash
DELETE FROM `table_1` WHERE `id` = 1
```
Supprime la ou les ligne(s) de la **table_1** dont la valeur de la colonne **id** est égal à **1**.

La commande **TRUNCATE** : 

Elle permet de supprimer **toutes les lignes** d'une table donnée.

**Exemple** :

```bash
TRUNCATE TABLE `table_1`
```
Supprime l'ensemble des lignes de la **table_1** sans exception.

La commande **DROP** : 

Elle permet de supprimer complètement **une table et l'ensemble des lignes qu'elle contient**. Cette commande n'est pas à utiliser si la table doit continuer d'exister.

**Exemple** :

```bash
DROP TABLE `table_1`
```
Supprime la table **table_1** et l'ensemble des lignes qu'elle contient.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.