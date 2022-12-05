---
title: Partager un dossier depuis l'interface OWA
slug: exchange-2016-partager-un-dossier-via-le-webmail-owa
legacy_guide_number: 1929
excerpt: Retrouvez ici la procedure de partage d’un dossier depuis votre compte Exchange 
section: Utilisation d'Outlook Web Application (OWA)
order: 05
---
**Dernière mise à jour le 07/04/2020**

## Objectif

Déléguer l'utilisation de tout un compte e-mail n’est pas toujours la bonne solution. La fonction de partage de dossiers Exchange vous permet d'accorder à d'autres utilisateurs l'accès à des dossiers sélectionnés sur votre compte en leur attribuant des autorisations spécifiques.

**Découvrez comment partager des dossiers et définir leurs autorisations d'accès à l'aide de l'application web Outlook (OWA).**

> [!primary]
>
> Bien que ce guide fasse référence à nos services Exchange, vous pouvez également suivre ces instructions pour les comptes [Email Pro](https://www.ovhcloud.com/fr-ca/emails/email-pro/).
>


## Prérequis

- Disposer d'une offre [Exchange OVHcloud ](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/)
- Avoir accès à votre compte Exchange (adresse e-mail et mot de passe)


## Instructions

### Étape 1 : Définir les autorisations d’accès à un dossier

Connectez-vous à votre compte Exchange via le [webmail OVHcloud](https://www.ovhcloud.com/fr-ca/mail). Faites un clic droit sur le dossier à partager et sélectionnez `Autorisations...`{.action} dans le menu contextuel.

![sharefolder](images/exchange-folder-step1.png){.thumbnail}

Dans l'interface suivante, ajoutez d'abord un utilisateur en cliquant sur l'icône `+`{.action}. Commencez à saisir votre contact pour afficher des suggestions. Entrez une adresse e-mail complète ou lancez une recherche sur le `Répertoire de recherche`{.action}.

Il existe des ensembles d'autorisations prédéfinies (« niveaux d'autorisation ») parmi lesquelles choisir. Il est plus facile de sélectionner d'abord l'un de ces rôles, par exemple "Auteur", pour voir quelles autorisations seront accordées. Ensuite, personnalisez-les en fonction de vos besoins en modifiant les cases à cocher.

![sharefolder](images/exchange-folder-step2aag.gif){.thumbnail}

#### Détails des autorisations

- **Lecture**

|Autorisation|Description|
|---|---|
|Aucun|L’utilisateur ne peut pas voir le contenu du dossier.|
|Tous les détails|L’utilisateur peut voir le contenu du dossier.|


- **Supprimer des éléments**

|Autorisation|Description|
|---|---|
|Aucun|L’utilisateur ne peut supprimer aucun élément.|
|Personnels|L’utilisateur peut supprimer les éléments qu’il a créés.|
|Tous|L’utilisateur peut supprimer n’importe quel élément du dossier.|


- **Écriture**

|Autorisation|Description|
|---|---|
|Création d’éléments|L’utilisateur peut créer de nouveaux éléments dans le dossier.|
|Création de sous-dossiers|L’utilisateur peut créer de nouveaux sous-dossiers dans le dossier partagé.|
|Modification des éléments personnels|L’utilisateur peut modifier les éléments qu’il a créés.|
|Modification de tous les éléments|L’utilisateur peut modifier n’importe quel élément du dossier.|


- **Autre**

|Autorisation|Description|
|---|---|
|Propriétaire du dossier|L’utilisateur a les mêmes autorisations que le propriétaire du dossier (c’est-à-dire toutes les autorisations).|
|Contact pour le dossier|L'utilisateur peut recevoir des notifications et des demandes concernant le dossier (changements de statut, demandes d'autorisation, messages d'erreur).|
|Dossier visible|Le dossier apparaît sur le compte de l’utilisateur.|

> [!primary]
>**Sous-dossiers**
> 
> - Les sous-dossiers créés dans un dossier partagé héritent automatiquement des autorisations du dossier parent. Si vous accordez de nouvelles autorisations sur un dossier et que ses sous-dossiers doivent également être partagés, des autorisations doivent être définies **pour chaque sous-dossier**.
> 
> - Si vous partagez un **sous-dossier** d'un dossier existant qui lui-même n'a pas d’autorisations définies, assurez-vous de cocher au moins « Dossier visible » sur le **dossier parent**. Sans cela, le sous-dossier n'apparaîtra pas sur le compte de l'autre utilisateur. (L'utilisateur ne pourra pas voir le contenu du dossier parent, à moins que vous n'accordiez également l'autorisation « Lecture »).
> 
> - Les utilisateurs ne peuvent pas supprimer les sous-dossiers qu'ils n'ont pas créés eux-mêmes.
> 
> - Les utilisateurs disposant de l’autorisation « Propriétaire du dossier » sur un sous-dossier peuvent le renommer et lui accorder des autorisations.
>


### Étape 2 : Récupérer un dossier partagé

![sharefolder](images/exchange-folder-step3.png){.thumbnail}

Connectez-vous à votre compte Exchange via le [webmail OVHcloud](https://www.ovhcloud.com/fr-ca/mail). Faites un clic droit sur le nom de votre compte dans l’onglet de navigation à gauche et sélectionnez `Ajouter un dossier partagé...`{.action} depuis le menu contextuel. Dans la nouvelle fenêtre, indiquez le nom du compte à partir duquel un dossier a été partagé. Commencez à saisir du texte pour afficher des suggestions de vos contacts. Entrez des adresses e-mail complètes ou bien lancez une recherche sur le `Répertoire de recherche`{.action}. Confirmez et cliquez sur `Ajouter`{.action}. Le nouveau dossier partagé apparaît alors immédiatement sous vos autres dossiers.


## Aller plus loin

[Consulter son compte Exchange depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/)

[Déléguer des droits sur un compte Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-donner-les-droits-full-access-sur-un-compte/)

[Partager un calendrier depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-partager-un-calendrier-via-le-webmail-owa/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.