---
title: "Sharepoint : synchroniser vos données sur votre ordinateur"
excerpt: Découvrez comment sauvegarder les données de votre Sharepoint OVHcloud sur votre ordinateur
updated: 2023-09-21
---

## Objectif

Si vous souhaitez récupérer ou migrer les données de votre plateforme sharepoint OVHcloud, vous trouverez dans ce guide les étapes nécessaires pour extraire l'ensemble des données vers le stockage local de votre ordinateur.

**Découvrez comment sauvegarder les données de votre Sharepoint OVHcloud sur votre ordinateur.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer d'une [solution Sharepoint OVHcloud](https://www.ovhcloud.com/fr/collaborative-tools/sharepoint/)
- Disposer d'un ordinateur utilisant le système d'exploitation Microsoft Windows pour réaliser les étapes de migration.

## En pratique

Ce guide est décomposé en 4 étapes :

- [Étape 1 - Installer OneDrive Entreprise](#installonedrive.) : la solution OneDrive Entreprise vous permettra d'effectuer le transfert des données de votre Sharepoint vers votre ordinateur
- [Étape 2 - Préparer la migration depuis l'espace client OVHcloud](#controlpanelconfig.) : configurez votre plateforme Sharepoint en désignant un seul compte administrateur qui sera en mesure de transférer le contenu du OneDrive de chaque compte Sharepoint.
- [Étape 3 - Lancer la migration depuis votre interface Sharepoint](#migrationignition.) : connectez-vous au compte désigné à l'étape 2 pour transférer le contenu vers votre ordinateur.
- [Étape 4 - Migrer le contenu des autres comptes Sharepoint](#migrationother.) : suivez le processus permettant de visualiser et synchroniser l'espace OneDrive de chaque compte sur votre plateforme Sharepoint.

### Étape 1 - Installer OneDrive Entreprise <a name="installonedrive"></a>

Pour migrer les données de votre service SharePoint OVHcloud, vous devez utiliser l'application OneDrive Entreprise, dont le nom technique est « Groove.exe ».

Pour l'installer, suivez les instructions ci-dessous:

1. Téléchargez le fichier ISO à partir du lien <https://download.mail.ovh.net/sharepoint/onedrive.iso>
2. Depuis votre ordinateur, faites un clic droit sur le fichier `onedrive.iso`, ouvrez ses `Propriétés`{.action}, cochez la case `Débloquer`{.action}, cliquez sur `Appliquer`{.action} puis sur `OK`{.action}.
3. Double-cliquez sur `onedrive.iso` pour l'ouvrir.
4. Double-cliquez sur le fichier `setup.bat` pour lancer l'installation.
5. Patientez car cette opération peut durer quelques minutes, **attendez bien que la fenêtre se ferme** pour que l'installation soit terminée.

> [!warning]
>
> Si le fichier `setup.bat` ne se lance pas correctement (à l'étape 4), vous pouvez copier le contenu du fichier `onedrive.iso` dans un dossier sur le bureau de votre ordinateur et tenter à nouveau l'étape 4.

![sharepoint](sharepoint-eol-00.gif){.thumbnail}

> [!primary]
>
> Si cette méthode n'est pas fonctionnelle sur votre ordincateur, vous pouvez installer OneDrive Entreprise en suivant [la procédure officielle Microsoft](https://learn.microsoft.com/sharepoint/install-previous-sync-app#install-groove-exe-with-office-2016).

### Étape 2 - Préparer la migration depuis l'espace client OVHcloud <a name="controlpanelconfig"></a>

Pour accéder à l'ensemble des espaces OneDrive au sein de votre service Sharepoint, vous devez supprimer le droit d'administrateur de tous les utilisateurs via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Dirigez-vous dans la section `Web Cloud`{.action} de votre espace client. Cliquez sur `Microsoft`{.action} puis sur `Sharepoint`{.action} et sélectionnez la plateforme SharePoint concernée.

Depuis l'onglet `Utilisateurs`{.action}, accédez à la gestion des comptes Sharepoint de votre plateforme. Pour chaque compte, cliquez sur le bouton `...`{.action} à droite puis sur `Retirer droits administrateur`{.action}.

![sharepoint](sharepoint-eol-01.png){.thumbnail}

Une fois que le droit administrateur a été retiré pour l'ensemble des comptes Sharepoint, il vous sera nécessaire de désigner un seul compte qui aura ainsi accès à l'ensemble des espaces OneDrive de la plateforme.

Activez le droit administrateur au compte que vous avez désigné.

Toujours depuis l'onglet `Utilisateurs`{.action} de votre plateforme Sharepoint, cliquez sur le bouton `...`{.action} à droite du compte désigné puis sur `Activer les droits administrateur`{.action}.

![sharepoint](sharepoint-eol-02.png){.thumbnail}

Vous êtes maintenant en mesure de synchroniser l'ensemble des espaces OneDrive de votre plateforme Sharepoint par l'intermédiaire de ce compte.

### Étape 3 - Lancer la migration depuis votre interface Sharepoint <a name="migrationignition"></a>

Accédez à l'interface en ligne de votre service SharePoint. Vous trouverez l'URL d'accès depuis votre espace client OVHcloud dans l'onglet `Informations générales`{.action}, sous la mention `URL consultation`.

![sharepoint](sharepoint-eol-03.png){.thumbnail}

Connectez-vous avec les identifiants de l'utilisateur qui dispose des droits administrateur.

![sharepoint](sharepoint-eol-04.png){.thumbnail}

Pour accéder à la section OneDrive, cliquez sur l'îcone en haut à gauche de l'interface Sharepoint puis cliquez sur l'icône `OneDrive`{.action}.

![sharepoint](sharepoint-eol-05.png){.thumbnail}

Pour synchroniser le contenu du OneDrive sur votre ordinateur, cliquez sur le bouton `Synchroniser`{.action} puis sur `Synchroniser maintenant`{.action}.

![sharepoint](sharepoint-eol-06.png){.thumbnail}

Une fenêtre s'affiche pour autoriser le site à ouvrir le lien **grvopen**. Pour l'autoriser, cochez la mention « Toujours autoriser **https://myServiceAddress.spX.ovh.net** à ouvrir les liens **grvopen** » puis cliquez sur `Ouvrir le lien`{.action}.

![sharepoint](sharepoint-eol-07.png){.thumbnail}

Saisissez les identifiants du compte Sharepoint administrateur. Veuillez utiliser l'utilisateur disposant des droits administrateur (configuré à [l'étape 2](#controlpanelconfig.)).

![sharepoint](sharepoint-eol-08.png){.thumbnail}

Cliquez sur `Synchroniser maintenant`{.action}.

![sharepoint](sharepoint-eol-09.png){.thumbnail}

Choisissez le modèle de bibliothèque « **Form Templates** » depuis la fenêtre « Sélectionnez la bibliothèque que vous voulez synchroniser ». Cliquez ensuite sur `Synchronisation sélectionnée`{.action}.

![sharepoint](sharepoint-eol-10.png){.thumbnail}

Une fois cette synchronisation terminée sur votre ordinateur, seules les données du compte Sharepoint sur lequel vous êtes connecté seront transférées sur votre ordinateur.

**Pour transférer le contenu des OneDrive de chaque compte de votre plateforme Sharepoint, suivez l'étape 4 ci-dessous.**

### Étape 4 - Migrer le contenu des autres compte Sharepoint <a name="migrationother"></a>

Pour accéder à l'espace OneDrive des autres utilisateurs de votre plateforme et synchroniser les données associées, vous devez modifier l'URL d'accès (depuis votre navigateur) lorsque vous êtes connecté au OneDrive du compte administrateur.

Pour cela, dans l'URL qui s'affiche, remplacez la « section » (correspondant à l'utilisateur) qui se trouve entre les parties `/personal/` et `/Documents/`.

- **Exemple 1** : pour un utilisateur **user@domain.name**, il faut remplacer les caractères « **@** » et « **.** » par des « **_** ». Vous obtenez ainsi « user_domain_name ». Par conséquent, votre lien se présentera de la façon suivante :

![sharepoint](sharepoint-eol-11.png){.thumbnail}

- **Exemple 2** : pour un utilisateur **john.smith@example.com**, vous obtenez « john_smith_example_com ». Votre lien se présentera de la façon suivante :

![sharepoint](sharepoint-eol-12.png){.thumbnail}

> [!warning]
>
> Les URLs ci-dessus sont uniquement données à titre d'exemple. Veillez à bien utiliser l'URL générée par votre plateforme Sharepoint.

Vous pourrez synchroniser les comptes suivants en recommençant cette étape.

## Aller plus loin

[Activer et gérer votre SharePoint OVHcloud](sharepoint_manage1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.