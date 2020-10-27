---
title: Migrer manuellement votre adresse e-mail 
slug: migrer-ses-adresses-email-manuellement
excerpt: Découvrez comment migrer manuellement votre adresse e-mail vers une autre adresse e-mail
section: Migration
order: 1
---

**Dernière mise à jour le 27/10/2020**

## Objectif

Vous souhaitez effectuer une migration manuelle d'une adresse e-mail vers une autre de vos adresses e-mail.

**Découvrez comment migrer manuellement votre adresse e-mail vers une autre adresse e-mail**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Retrouvez plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'un service e-mail chez OVHcloud, tel qu'une offre [Exchange](https://www.ovh.com/fr/emails/){.external}, [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external} ou MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/){.external}).
- Disposer des identifiants relatifs aux comptes e-mail que vous souhaitez migrer (les comptes source).
- Disposer des identifiants relatifs aux comptes e-mail OVHcloud qui reçoivent les données migrées (les comptes de destination).


## En pratique

> [!primary]
> Dans un premier temps, vérifiez si la migration automatique est possible par notre outil [OVH Mail Migrator](https://omm.ovh.net/){.external}. Pour cela, aidez-vous du guide [Migrer des comptes e-mail via OVH Mail Migrator](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/){.external}.

Dans ce guide nous avons réalisé les opérations sur les 3 logiciels de messagerie les plus utilisés, **Outlook**, **Mail** sur Mac OS et **Thunderbird**.

Les instructions qui suivent sont décomposées en deux parties : 

- **L'exportation**. Cela vous permet d'extraire une sauvegarde complète de votre adresse e-mail pour la basculer vers un autre poste ou logiciel. Si vous devez déplacer des éléments d'une adresse e-mail vers une autre adresse qui est configurée sur le même logiciel de messagerie, il est conseillé de copier/coller ou de glisser/déposer l'une vers l'autre.

- **L'importation**. Cela vous permet d'appliquer une sauvegarde que vous avez réalisée sur votre nouveau poste ou nouveau logiciel. Vérifiez que le fichier de sauvegarde à importer est compatible avec le logiciel de messagerie que vous utilisez.

### Outlook 

#### Exporter depuis Windows

- Cliquez sur `fichier` en haut à gauche, puis sur `Ouvrir et exporter` et enfin sur `importer/exporter`

![emails](images/outlook-export-import-win.png){.thumbnail}

- Sélectionnez `Exporter des données vers un fichier` puis cliquez sur `Suivant`. 

![emails](images/outlook-export-win02.png){.thumbnail}

- Sélectionnez `Fichier de données Outlook (.pst)` puis cliquez sur `Suivant`.

![emails](images/outlook-export-win03.png){.thumbnail}

- Sélectionnez le nom du compte e-mail à exporter.

> [!primary]
> Vous ne pouvez exporter qu'un seul compte à la fois.

Cochez bien `Inclure les sous-dossiers` puis cliquez sur `Suivant`.

![emails](images/outlook-export-win04.png){.thumbnail}

- Choisissez le dossier de destination de votre sauvegarde et entrez un nom pour celle-ci en cliquant sur `Parcourir`. Sélectionnez l'option qui vous convient puis cliquez sur `Terminer`.

![emails](images/outlook-export-win05.png){.thumbnail}

L'exportation de votre fichier commence. Lors de la création d'un fichier, il vous sera demandé de définir un mot de passe. Celui-ci est facultatif. 

![emails](images/outlook-export-win06.png){.thumbnail}

#### Importer depuis Windows

- Cliquez sur `fichier` en haut à gauche, puis sur `Ouvrir et exporter` et enfin sur `importer/exporter`.

![emails](images/outlook-export-import-win.png){.thumbnail}

- Sélectionnez `Importer à partir d’un autre programme ou fichier` puis cliquez sur `Suivant`. 

![emails](images/outlook-import-win02.png){.thumbnail}

- Sélectionnez `Fichier de données Outlook (.pst)` puis cliquez sur `Suivant`.

![emails](images/outlook-import-win03.png){.thumbnail}

- Choisissez votre fichier de sauvegarde en cliquant sur `Parcourir`. Sélectionnez l'option qui vous convient puis cliquez sur `Terminer`.

![emails](images/outlook-import-win04.png){.thumbnail}

- Si vous avez défini un mot de passe sur votre fichier de sauvegarde, entrez celui-ci puis cliquez sur `OK`.

- Sélectionnez `Importer les éléments dans le dossier actif` puis cliquez sur `Terminer`.

L'importation de votre sauvegarde se lance. 

#### Exporter depuis Mac OS

Dans l’onglet `Outils` de votre fenêtre Outlook, cliquez sur `Exporter`.

![emails](images/outlook-export-mac01.png){.thumbnail}

Depuis la fenêtre « Exporter vers un fichier archive (.olm) », cochez les éléments que vous souhaitez ajouter à votre fichier sauvegarde, puis cliquez sur `Continuer`.

![emails](images/outlook-export-mac02.png){.thumbnail}

Sélectionnez ensuite le dossier de destination pour votre sauvegarde, puis cliquez sur `Enregistrer`.

![emails](images/outlook-export-mac03.png){.thumbnail}

Une fenêtre de progression s'affichera, cliquez sur `Continuer` à la fin de l'opération. Vous retrouverez votre fichier de sauvegarde dans le dossier choisi précédemment.

#### Importer depuis Mac OS

Dans l’onglet `Outils` de votre fenêtre Outlook, cliquez sur `Importer`.

![emails](images/outlook-import-mac01.png){.thumbnail}

Choisissez le format de sauvegarde que vous allez importer, puis cliquez sur `Continuer`.

![emails](images/outlook-import-mac02.png){.thumbnail}

Sélectionnez votre fichier de sauvegarde, puis cliquez sur `importer`.

![emails](images/outlook-import-mac03.png){.thumbnail}

Une fenêtre de progression s'affichera, cliquez sur `Continuer` à la fin de l'opération. Votre sauvegarde est alors déployée sur votre Outlook.

### Mail sur Mac OS 

#### Exporter

Depuis la colonne de gauche, sélectionnez un ou plusieurs comptes e-mail. Cliquez sur `Boîte aux lettres` dans le menu horizontal, puis sur `Exporter la boîte aux lettres`.

![emails](images/mail-export-mac01.png){.thumbnail}

Sélectionnez le dossier de votre choix ou créez-en un nouveau, puis cliquez sur `Choisir`.

![emails](images/mail-export-mac02.png){.thumbnail}

Votre exportation se présente sous forme d'un fichier « .mbox ». 

#### Importer 

Cliquez sur `Fichier` dans le menu horizontal, puis sur `Importer des boîtes aux lettres`.

![emails](images/mail-import-mac01.png){.thumbnail}

Sélectionnez votre fichier de sauvegarde au format « .mbox », puis cliquez sur `Continuer`.

![emails](images/mail-import-mac02.png){.thumbnail}

Depuis la colonne de gauche, les e-mails importés se trouvent dans un nouveau compte e-mail nommé « Importation ». Vous pouvez faire glisser les dossiers et les messages à partir du compte « Importation » vos comptes e-mail déjà configurés. Une fois vos transferts terminés, vous pourrez supprimer le compte « Importation ».

### Thunderbird 

Il n'existe actuellement pas d'outil natif pour exporter ou importer son compte e-mail depuis Thunderbird. Il est néanmoins possible de sauvegarder son profil Thunderbird qui contient l'ensemble des comptes et e-mails en local sur votre ordinateur. Nous allons voir comment sauvegarder un profil Thunderbird et le réintégrer sur un nouveau Thunderbird.
 
#### Exporter 

Depuis la fenêtre principale, cliquez sur le menu en haut à droite puis sur `Aide` et enfin sur `Informations de dépannage`.

![emails](images/thunderbird_menu.png){.thumbnail}

Un tableau apparaît. Identifiez la ligne `Répertoire de profil`{.action} et cliquez sur le bouton `Ouvrir le dossier correspondant`.

![emails](images/thunderbird_open_folder.png){.thumbnail}

Vous serez alors dirigé dans le dossier du profil. Remontez d'un dossier dans l'arborescence.

![emails](images/thunderbird_profil_folder1.png){.thumbnail}

Copiez le dossier du profil via un clic-droit sur celui-ci, puis collez ce dossier dans le dossier ou support de votre choix.

![emails](images/thunderbird_profil_folder2.png){.thumbnail}

#### Importer

Plutôt qu'une importation, il sera question ici d'un chargement de votre profil. En effet, lorsque Thunderbird va lire votre profil sauvegardé, il chargera uniquement ce que vous aviez sur ce dernier. Si quelque chose a déjà été configuré sur le Thunderbird de destination, il sera sur un autre profil. C'est pourquoi, nous vous conseillons de charger le profil sauvegardé et ensuite de configurer vos comptes supplémentaires.

Vous devez d'abord démarrer Thunderbird via le gestionnaire de profils. 

- Sur Windows, allez sur le menu `Démarrer`{.action} puis sur le programme `Exécuter`{.action}. Sur ce dernier, tapez `thunderbird.exe -ProfileManager`et cliquez sur `OK`{.action}.

![emails](images/thunderbird-run-profil.png){.thumbnail}

- Sur Mac OS, lancez l'application Terminal puis glissez-déposez votre application Thunderbird dans la fenêtre du Terminal, en ajoutant à la ligne `/Contents/MacOS/thunderbird-bin -ProfileManager`. Tapez sur la touche `Entrée` (⏎) pour valider.

![emails](images/thunderbird-terminal-profil.png){.thumbnail}

La fenêtre suivante vous affiche les profils existants. Cliquez sur `Créer un profil`{.action} puis sur `Suivant`{.action} lorsque le message d'information s'affiche.

![emails](images/thunderbird-profil-create01.png){.thumbnail}

À l'étape suivante, nommez votre profil et identifiez le dossier dans lequel sera créé le profil, en dessous de la phrase « Vos paramètres utilisateur, préférences et toutes vos données personnelles seront enregistrées dans : »

![emails](images/thunderbird-profil-create02.png){.thumbnail}

> [!primary]
> Nous vous conseillons de copier la sauvegarde de votre profil Thunderbird dans le dossier de profils de Thunderbird. 

Cliquez sur `Choisir un dossier...`{.action} pour sélectionner le dossier contenant votre sauvegarde. Cliquez sur `Terminer`{.action} pour créer le profil avec votre sauvegarde.

Vous retrouvez la fenêtre de choix de votre profil avec votre nouveau profil sélectionné. Cliquez sur `Démarrer Thunderbird`{.action}, Thunderbird sera lancé avec tous les éléments que vous aviez dans votre sauvegarde.


### Vérifier l'importation sur la nouvelle adresse e-mail

Lorsque vous avez fait le nécessaire en suivant les instructions d'importation, vérifiez que vos éléments sont bien présents sur le serveur.

Connectez-vous au [webmail](https://www.ovh.com/fr/mail/).

Vous retrouverez dans votre boite de réception et dans la colonne de gauche les dossiers et e-mails de votre adresse e-mail sauvegardée.

> [!primary]
> Il faut tenir compte du délai de chargement des éléments présents sur votre ordinateur vers le serveur e-mail. Cela peut prendre plusieurs minutes ou plusieurs heures en fonction de votre connexion à Internet.

## Aller plus loin

[Migrer des comptes e-mail via OVH Mail Migrator](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
