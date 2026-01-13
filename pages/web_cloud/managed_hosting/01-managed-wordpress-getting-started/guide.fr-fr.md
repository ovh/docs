---
title: Découvrir le Managed Hosting for WordPress (version Bêta)
excerpt: Découvrez la solution OVHcloud qui gère pour vous l’hébergement, la sécurité et la maintenance de vos sites web WordPress.
updated: 2025-12-31
---

## Objectif

Le **Managed Hosting for WordPress** est une nouvelle offre OVHcloud permettant d’héberger et d’administrer vos sites web WordPress en toute simplicité. Pensé pour les professionnels, les agences et les indépendants, ce service vous libère des tâches techniques liées à la gestion de l’infrastructure et des mises à jour, afin que vous puissiez vous concentrer sur votre contenu et votre activité. Ce guide présente le concept du produit, ses principaux avantages et les fonctionnalités disponibles dans le cadre de la **phase Bêta**.

## Prérequis

- Avoir accès au programme [OVHcloud Labs](https://labs.ovhcloud.com/en/managed-wp/) pour la phase Bêta.
- Être connecté à l’[espace client OVHcloud](/links/manager).

## En pratique

### Présentation du produit

#### Une gestion WordPress 100 % OVHcloud

Avec Managed Hosting for WordPress, **OVHcloud s’occupe de tout** :

- Hébergement, infrastructure, cache et sécurité.
- Installation et maintenance de WordPress.
- Sauvegardes et mises à jour automatiques.
- Supervision des performances et de la disponibilité.
- Gestion simplifiée des domaines, des plugins et des environnements de staging (phases Bêta et GA (*General Availability*)).

Aucune connaissance serveur n’est nécessaire : tout est **accessible depuis l’espace client OVHcloud**. Vous pouvez ainsi **créer, importer et administrer vos sites WordPress en quelques clics**, sans jamais avoir à manipuler de FTP, de base de données ni de ligne de commande.

#### Une solution clé en main

Chaque site web bénéficie d’un environnement optimisé, prêt à l’emploi :

- **Installation WordPress automatique** dès la commande.
- **Infrastructure managée** : maintenance, patchs, mises à jour logicielles et sécurité gérés par OVHcloud.
- **Performances garanties** : cache WordPress intégré, hébergement sur infrastructure optimisée et monitoring continu.
- **Évolutivité intégrée** : surveillez l'utilisation en temps réel à l'aide d'indicateurs clés (stockage, trafic, nombre de sites) et adaptez-vous facilement à l'évolution de vos besoins.
- **Compatibilité totale** : accès via l’espace client OVHcloud, permettant l’intégration dans vos workflows existants.

#### Une approche progressive

Le produit est actuellement disponible en **version Bêta** dans le cadre du programme [OVHcloud Labs](https://labs.ovhcloud.com/en/managed-wp/). Cette première phase permet de tester les fonctionnalités essentielles :

- Création et gestion de sites WordPress managés.
- Import de sites externes.
- Mise à jour automatique de WordPress et des plugins.
- Affichage du statut de vos sites web dans un tableau de bord de votre espace client.

> [!primary]
>
> D’autres fonctionnalités, comme la gestion avancée des domaines, le clonage, et le staging seront progressivement ajoutées lors des phases **Bêta** et **GA (*General Availability*)**.

### Fonctionnalités

Connectez-vous à [l’espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action} puis cliquez sur `Managed hosting for WordPress`{.action}.

#### Créer un site web

Pour créer un site web, cliquez sur le bouton `Créer`{.action}. La page ci-dessous s’affiche :

![managed_wordpress](images/managed_wordpress_create_site.png){.thumbnail}

Remplissez les champs du formulaire afin de définir les identifiants de votre site web WordPress :

- `Langue de l’admin WordPress`{.action} : sélectionnez la langue par défaut de l’interface d’administration.
- `Version PHP`{.action} : choisissez la version PHP souhaitée pour votre environnement WordPress. Consultez les versions disponibles de PHP sur [cette page](/pages/web_cloud/web_hosting/web_hosting_main_info).
- `E-mail de l’admin`{.action} : saisissez l’adresse e-mail de l’administrateur du site WordPress.
- `Mot de passe admin`{.action} : définissez le mot de passe associé à ce compte administrateur.

Cliquez sur `Continuer`{.action} pour valider les informations.

Vous êtes redirigé vers l’onglet `Mes sites`{.action}. En haut de l’écran, un message de confirmation s’affiche vous indiquant que la requête de votre création de site web a été prise en compte.

![managed_wordpress](images/managed_wordpress_banner_creation_site.png){.thumbnail}

Dans le tableau, une nouvelle ligne concernant votre nouveau site web apparaît :

- Colonne `Nom de domaine`{.action} : correspond au nom de domaine technique de votre site web. Il sert d’URL de staging (pré-production), permettant d’accéder à votre site web avant de l’associer à votre propre nom de domaine.
- Colonne `Statut`{.action} : indique l’état d’avancement de la création du site web. Le statut apparaît d’abord comme `En cours`{.action}, le temps que l’infrastructure soit déployée et que WordPress soit installé. Une fois votre site web opérationnel, le statut passe à `Activé`{.action}, indiquant que votre WordPress est désormais disponible en ligne via son nom de domaine technique.

![managed_wordpress](images/managed_wordpress_tab_new_line.png){.thumbnail}

Vous pouvez également suivre la progression de la création de votre site web en cliquant sur l’onglet `Tâches`{.action}.

![managed_wordpress](images/managed_wordpress_task_new_line.png){.thumbnail}

#### Importer un site web

Vous pouvez importer un site web WordPress existant vers le Managed Hosting for WordPress. L’import vous permet de transférer automatiquement :

- Le contenu WordPress (plugins, themes, médias, articles, pages, utilisateurs).
- Les fichiers.
- La base de données.

> [!primary]
>
> L’import automatique d’un site web WordPress hébergé sur un Hébergement Web OVHcloud (mutualisé) sera disponible lors de la phase Bêta.

Pour importer un site web WordPress, cliquez sur le bouton `Importer`{.action}. L’écran ci-dessous s’affiche :

![managed_wordpress](images/managed_wordpress_import_site.png){.thumbnail}

> [!primary]
>
> Un message d’information vous indique que votre site web sera installé sur un environnement utilisant une version de PHP stable (PHP 8.4 dans notre exemple) et la dernière version de WordPress.

Renseignez les champs du formulaire :

- `URL d’administration du site`{.action} : indiquez l’adresse utilisée pour vous connecter à l’interface d’administration de votre site web WordPress actuel, par exemple `https://www.monsite.com/wp-admin`{.action}.
- `Compte admin`{.action} : saisissez le nom d’utilisateur administrateur WordPress.
- `Mot de passe admin`{.action} : indiquez le mot de passe de l’utilisateur administrateur WordPress.

Ces informations permettent au système d’accéder à votre site web existant afin d’en extraire automatiquement les fichiers, la base de données et la configuration nécessaire.

Une fois les champs obligatoires remplis, cliquez sur `Continuer`{.action} pour lancer le processus d’import.

Vous pourrez alors sélectionner les éléments à importer, y compris les plugins, thèmes, médias et bases de données.

> [!warning]
> Pour garantir une parfaite cohérence des données, veillez à ne plus effectuer de modifications sur votre site jusqu'à la fin de l'import.
>
> Nous vous conseillons d'activer le mode maintenance sur votre site à importer ou de prendre les mesures nécessaires pour éviter toute divergence de données pendant l'import.

Une fois tous les éléments sélectionnés, cliquez sur `Lancer l'import`{.action}.

![managed_wordpress](images/managed_wordpress_import_site_selection.png){.thumbnail}

#### Supprimer un site web

##### Supprimer un seul site web

Pour supprimer un site web, dirigez-vous dans l’onglet `Mes sites`{.action} et identifiez la ligne du tableau correspondant à votre site web. Cliquez sur le bouton `⋮`{.action} puis sur `Supprimer`{.action}.

![managed_wordpress](images/managed_wordpress_delete_site_button.png){.thumbnail}

Un message de confirmation s’affiche. Cliquez sur `Supprimer`{.action} pour confirmer la suppression de votre site web.

![managed_wordpress](images/managed_wordpress_delete_site_confirmation.png){.thumbnail}

Vous êtes redirigé vers l’onglet `Mes sites`{.action}. En haut de l’écran, un message de confirmation s’affiche vous indiquant que le processus de suppression de votre site web est en cours.

![managed_wordpress](images/managed_wordpress_delete_site_banner_validation.png){.thumbnail}

Lorsque votre site web est définitivement supprimé, sa ligne correspondante dans le tableau disparaît.

##### Supprimer plusieurs sites web à la fois

Pour supprimer plusieurs sites web en même temps, dirigez-vous dans l’onglet `Mes sites`{.action}. Identifiez les lignes du tableau correspondant aux sites web que vous souhaitez supprimer et cochez les cases situées à gauche. Une fois les sites web sélectionnés, cliquez sur le bouton `Supprimer mes X sites`{.action}.

![managed_wordpress](images/managed_wordpress_delete_several_sites.png){.thumbnail}

Un message de confirmation s’affiche. Cliquez sur `Supprimer`{.action} pour confirmer la suppression de vos sites web.

![managed_wordpress](images/managed_wordpress_delete_several_sites_confirmation.png){.thumbnail}

Vous êtes redirigé vers l’onglet `Mes sites`{.action}. En haut de l’écran, un message de confirmation s’affiche vous indiquant que le processus de suppression de vos sites web est en cours.

![managed_wordpress](images/managed_wordpress_delete_several_site_banner_validation.png){.thumbnail}

Lorsque vos sites web sont définitivement supprimés, leurs lignes correspondantes dans le tableau disparaissent.

#### Gérer ses sites web

Pour gérer tous vos sites web, dirigez-vous dans l’onglet `Mes sites`{.action} puis cliquez sur `Gérer mes sites`{.action}. Ce bouton ouvre automatiquement le gestionnaire de flotte, intégré au Managed Hosting for WordPress. Cet espace vous permet de gérer plusieurs sites web WordPress simultanément, depuis une interface unifiée.

##### Tableau de bord

Le gestionnaire de flotte est un outil de supervision et de gestion centralisée fourni automatiquement avec votre offre. Il vous permet d’administrer vos sites web WordPress managés sans avoir à vous connecter à chaque site web individuellement.

Depuis ce tableau de bord, vous pouvez notamment :

- Consulter l’état global de tous vos sites web : mises à jour disponibles, alertes, performances, sécurité.
- Gérer les mises à jour WordPress (plugins, thèmes, etc.) de manière centralisée.
- Accéder rapidement à chaque site web pour vérifier son état ou intervenir.
- Superviser les activités récentes (changements, mises à jour, synchronisations).
- Utiliser les fonctionnalités intégrées de sécurité, monitoring, sauvegardes, et analyses (dans les phases futures).

#### Mises à jour automatiques intelligentes

Les mises à jour automatiques peuvent entraîner des problèmes de compatibilité qui affectent la stabilité, les performances et l'expérience utilisateur du site. Lorsque vous gérez plusieurs sites WordPress, la gestion manuelle des mises à jour augmente les frais généraux opérationnels et le risque d'interruption de service pour les utilisateurs finaux.

La solution Managed Hosting for WordPress atténue ces risques grâce à un processus de mise à jour contrôlé :

- **Tests avant déploiement**
    Toutes les mises à jour, y compris celles du cœur de WordPress, des plugins et des thèmes, sont d'abord appliquées à un environnement cloné de votre site.
- **Contrôles de validation**
    Le site cloné est évalué en termes de performances, de fonctionnalités et d'expérience utilisateur afin de détecter les régressions ou les erreurs avant le déploiement.
- **Processus de décision automatisé**
    - Si aucun problème n'est détecté, la mise à jour est automatiquement déployée sur le site en ligne.
    - Si des problèmes sont identifiés, le site en ligne reste inchangé. Vous êtes averti via le tableau de bord et recevez un e-mail décrivant les problèmes détectés ainsi que les mesures correctives recommandées.

Cette approche garantit que les mises à jour sont appliquées en toute sécurité tout en préservant la fiabilité du site et en minimisant l'impact sur les utilisateurs finaux.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d’utilisateurs](/links/community).