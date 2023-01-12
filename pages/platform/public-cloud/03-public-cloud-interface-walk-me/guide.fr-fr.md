---
title: "Se familiariser avec l'interface Public Cloud"
excerpt: "Visite guidée de l'interface Public Cloud"
slug: public-cloud-interface
section: Premiers pas
order: 03
---

**Dernière mise à jour le 06/12/2021**

## Objectif

Vous venez de créer votre projet Public Cloud et vous souhaitez en savoir un peu plus sur l'interface utilisateur au sein de l'espace client OVHcloud.

**Découvrez les principales sections de l'interface Public Cloud au sein de l'espace client OVHcloud**

## Prérequis

- Être connecté à l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Avoir créé un [premier projet Public Cloud](https://docs.ovh.com/fr/public-cloud/create_a_public_cloud_project/).

## En pratique

Une fois votre premier projet Public Cloud créé, vous êtes redirigé vers l'interface Public Cloud principale.

![Public Cloud interface](images/main-interface.png){.thumbnail}

### L'accès à vos informations de compte OVHcloud

Les paramètres de votre compte OVHcloud restent accessibles à tout moment, tout comme les notifications ou le changement de langue de l'espace client.

![Public Cloud interface - menu compte](images/account.png){.thumbnail}

### Votre projet Public Cloud

Comme il est possible d'utiliser plusieurs projets (selon vos quotas), le nom et l'ID du projet sont toujours affichés, quel que soit l'écran que vous visitez, afin de savoir sur quel environnement vous êtes en train d'agir.

![Menu projet](images/project-menu.png){.thumbnail}

L'ID peut être nécessaire lors de l'utilisation de la CLI, de certaines demandes de support ou autre. Vous pouvez le copier en cliquant sur l'icône située à sa droite.

Vous pouvez modifier le nom du projet via l'onglet `Paramètres`{.action}. Renseignez un nouveau nom puis cliquez sur `Mettre à jour`{.action}.

![Renommer un projet Public Cloud](images/rename-project.png){.thumbnail}

### Le menu principal Public Cloud

![Public Cloud interface - menu principal](images/main-menu.png){.thumbnail}

|Section|Description des options|
|---|---|
|**Compute**|Cette section vous permet de démarrer des instances, ces serveurs cloud disponibles à la demande.|
|**Storage**|Dans cette section, vous trouverez différentes solutions de stockages et bases de données, chacune correspondant à un besoin et une utilisation particulière.|
|**Network**|Vous trouverez dans cette section de quoi connecter vos ressources Public Cloud mais également de quoi les connecter avec d'autres produits OVHcloud.|
|**Containers and Orchestration**|Cette section vous propose différents outils pour automatiser vos architectures et gagner en flexibilité.|
|**AI & Machine Learning**|Vous trouverez dans cette section les outils OVHcloud pour l'intelligence artificielle.|
|**Data & Analytics**|Ces services vous aideront à résoudre vos problématiques de Big Data et de Data Analytics.|

### Les raccourcis

Le centre de l'écran vous propose des raccourcis permettant d'accéder rapidement aux assistants de configuration et aux guides les plus utiles.

![Public Cloud interface - menu raccourcis](images/shortcuts.png){.thumbnail}

#### Les aides à la création de ressources

Pour chaque ressource que vous souhaitez créer, vous serez accompagné par un assistant de configuration qui, étape après étape, vous permet de paramétrer la ressource selon vos besoins.
<br>La plupart du temps, vous devrez choisir la localisation de la ressource, le modèle, quelques paramétres personnalisables et, dans certains cas, le mode de facturation.

![Public Cloud interface - assistant de configuration](images/wizard.png){.thumbnail}

### Les outils de gestion

Plusieurs outils de gestion sont disponibles dans votre projet Public Cloud, ils se trouvent en bas de la barre de menu de gauche.

![Public Cloud interface - outils de gestion](images/management-tools.png){.thumbnail}

|Entrée du menu|Description|
|---|---|
|**Horizon**|C'est l'[interface graphique](https://docs.ovh.com/fr/public-cloud/horizon/) habituellement disponible sur OpenStack. Elle n'est pas modifiée, ce qui permet aux utilisateurs qui ont l'habitude de cette interface de retrouver leurs réflexes.|
|**Users and Roles**|Permet de [créer des utilisateurs](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/) et de leur attribuer un rôle. Ces utilisateurs permettent notamment d'accèder directement aux APIs ou à l'interface Horizon. Vous pouvez par exemple créer un utilisateur pour vos opérations de maintenance classiques et un utilisateur pour vos outils d'automatisation, comme par exemple Terraform.|
|**Quota and Regions**|Cet outil vous permet de piloter les localisations et les limites de ressources disponibles sur votre projet.<br><br>**Les quotas** : Suivant certains critères (nombre de factures déjà payées, utilisation d'autres produits OVHcloud), notre système met en place des quotas (des limites) au nombre de ressources que vous pouvez créer, ceci dans le but d'éviter tout problème d'impayés. Par défaut, le système augmente vos quotas automatiquement quand certains critères sont atteints. Vous pouvez cependant [effectuer une augmentation manuelle d'un quota](https://docs.ovh.com/fr/public-cloud/increase-public-cloud-quota/) depuis cet outil.<br><br>**Les régions** : Public Cloud est disponible dans plusieurs localisations dans le monde. De plus, chaque localisation peut comporter plusieurs « régions » (notion propre à OpenStack). Par exemple, pour un client européen, la zone APAC (Asie Pacifique) est désactivée par défaut. Si cela correspond à vos besoins, vous pouvez activer de nouvelles régions depuis ce menu.|
|**SSH Keys**|Un outil qui vous permet de [gérer vos clés SSH](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-1-creer-des-cles-ssh) de manière centralisée.|
|**Billing Control**|Public Cloud fonctionnant en « *pay as you go* », les factures sont éditées en fin de mois. Dans [ce menu](https://docs.ovh.com/fr/public-cloud/information-concernant-le-mode-de-facturation-cloud/), vous pourrez suivre votre consommation actuelle, voir une prévision de la prochaine facture et bien sûr retrouver vos précédentes factures.|
|**Credit and Vouchers**|Ce menu vous permet de consulter la consommation d'un coupon, d'en ajouter un ou d'[ajouter du crédit](https://docs.ovh.com/fr/public-cloud/ajouter-du-credit-cloud/) directement sur votre projet Public Cloud.|
|**Contacts and Rights**|Outre la possibilité de changer le contact technique ou le contact de facturation de votre projet, vous aurez la possibilité d'[ajouter d'autres contacts](https://docs.ovh.com/fr/public-cloud/gestion-des-contacts-dun-projet-PCI/) (compte OVHcloud) pour administrer techniquement votre projet. Vous pouvez également ajouter des utilisateurs en consultation uniquement (« *read-only* »).|
|**Project settings**|Ce dernier outil vous permet de configurer les paramètres généraux du projet comme son nom, sa configuration en tant que « projet par défaut du compte », la compatibilité HDS, ou encore de [supprimer votre projet Public Cloud](https://docs.ovh.com/fr/public-cloud/delete_a_project/)|

## Aller plus loin

[Créer une première instance Public Cloud et s’y connecter](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
