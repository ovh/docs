---
title: 'Migrer des comptes e-mail via OVH Mail Migrator'
slug: exchange-migration-de-comptes-e-mail-ovh-mail-migrator
excerpt: 'Apprenez à migrer vos comptes e-mail vers OVHcloud grâce à notre outil OVH Mail Migrator'
section: 'Migration de comptes'
order: 03
---

**Dernière mise à jour le 25/11/2021**

## Objectif

[OVH Mail Migrator](https://omm.ovh.net/){.external} est un outil créé par OVHcloud. Il permet de migrer vos comptes e-mail vers vos adresses e-mail OVHcloud ou un service e-mail externe. Le processus prend en charge différents types de contenus, tels que les e-mails, les contacts, les calendriers et les tâches, tant que ces derniers sont compatibles avec vos adresses e-mails.

**Apprenez à migrer vos comptes e-mail vers OVHcloud grâce à notre outil OVH Mail Migrator.**


## Prérequis

- Disposer d'un service e-mail chez OVHcloud, tel qu'une offre [Exchange](https://www.ovhcloud.com/fr/emails/){.external}, [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/){.external} ou MX Plan (via l'offre MX Plan seule ou incluse dans une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}).
- Disposer des identifiants relatifs aux comptes e-mail que vous souhaitez migrer (les comptes e-mail source).
- Disposer des identifiants relatifs aux comptes e-mail de destination.

## En pratique

**OVH Mail Migrator** est accessible depuis la page <https://omm.ovh.net/>. Il gère 3 types de migrations:

- [Migration unique](#standalone) : Migrer un compte e-mail vers un autre compte e-mail. Cette solution est recommandée pour migrer un ou quelques comptes e-mail (les étapes doivent être répétées pour chaque adresse migrée).
- [Migration par fichier](#file) : Migrer le contenu d'un compte e-mail, récupéré au préalable dans un fichier, vers une autre adresse e-mail. Les formats PST, ICS et VCF sont ici pris en charge.
- [Migration multiple (mode projet)](#project) : Permet de gérer plusieurs migrations en un seul projet. Cette solution s'adresse aux personnes souhaitant migrer un nombre conséquent d'adresses.

### Migration unique <a name="standalone"></a>

#### Lancer la migration

Depuis la page <https://omm.ovh.net/>, dans l'onglet `Migration`{.action} au dessus, cliquez sur `Nouvelle migration`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Sur la page qui s'affiche, complétez maintenant les informations pour chaque partie.

- **Compte** : renseignez les informations du **compte source** et du **compte de destination**. Pour rappel, le contenu du **compte source** sera migré vers le **compte de destination**.

|Information|Description|
|---|---|
|Type de serveur|Sélectionnez le type de serveur correspondant à vos comptes. Si l'un d'eux est une adresse OVHcloud, **Hosted by OVHcloud (Autodetect)**, cela vous permet de compléter automatiquement les informations, à l'exeption du mot de passe.|
|URL du serveur|Renseignez l'adresse du serveur où sont hébergés vos comptes. Ce champ peut être complété automatiquement lors du choix du type de serveur.|
|Login|Saisissez l'adresse e-mail complète.|
|Compte administrateur avec délégation|Ce champ apparaît uniquement avec certains types de serveurs.|
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|

- **Options** : sélectionnez les éléments que vous souhaitez migrer. Certains contenus peuvent être indisponibles selon le type de serveur choisi auparavant.

- **Informations** : renseignez une adresse e-mail afin d'être notifié sur l'avancement de la migration.

Cliquez sur `Démarrer la migration`{.action} une fois les informations complétées. Si ces dernières sont correctes, le processus débutera.

La page qui apparaît alors détaille le suivi de la migration. Pensez à conserver l'`Identifiant de migration`{.action} affiché et patientez jusqu'à ce que le processus arrive à son terme ; ce délai est variable selon le nombre d'éléments à migrer. Si vous souhaitez accéder de nouveau à ce suivi, poursuivez vers la section « Suivre une migration unique » ci-dessous.

#### Suivre la migration  

Il existe deux chemins pour accéder au suivi d'une migration unique :

- depuis l'e-mail reçu, vous notifiant sur l'avancement de la migration ;
- depuis la page <https://omm.ovh.net/>, dans l'onglet `Migration`{.action}, cliquez sur `Suivre / Synchroniser`{.action}. Vous devrez renseigner alors l'`Identifiant de migration`{.action} ainsi que le `Compte source`{.action} concerné.

![omm](images/omm-migration-track.png){.thumbnail}

La page qui s'affiche vous permet de suivre l'avancement de votre migration. Un message vous indique si le processus va débuter, est en cours ou est terminé. Selon cet état, plusieurs interactions sont possibles :

- `Stopper le processus `{.action} : Permet d'annuler la migration. Les éléments déjà migrés seront conservés sur le compte de destination.
- `Supprimer les éléments migrés`{.action} : Permet de supprimer des éléments déjà migrés vers le compte de destination. Vous pouvez effacer des éléments à partir d'un point de synchronisation précis.
- `Synchroniser`{.action} : Permet de récupérer des nouveaux éléments non migrés lors d'une précédente synchronisation entre le compte source et le compte de destination. Nous considérons cette action comme une migration des éléments manquants sur le compte de destination par rapport au compte source.

### Migration par fichier <a name="file"></a>

#### Lancer la migration

Depuis la page <https://omm.ovh.net/>, dans l'onglet `PST / ICS / VCF`{.action} au dessus, cliquez sur `Nouvelle migration PST / ICS / VCF`{.action}.

Ici, vous devez être en possession du fichier comportant le contenu que vous souhaitez migrer sur le compte e-mail.

![omm](images/omm-migration-files.png){.thumbnail}

Sur la page qui s'affiche, complétez les informations du **compte de destination** puis cliquez sur le bouton `Démarrer la migration`{.action}.

Si les informations renseignées sont correctes, vous serez invité à sélectionner le fichier sur votre ordinateur. Ensuite, cliquez sur le bouton `Upload`{.action} et patientez pendant le téléchargement ; ceci peut prendre un certain temps selon la taille du fichier. Vous pouvez consulter l'état d'avancement du téléchargement depuis la présente page.

Une fois le fichier téléchargé sur OMM, renseignez de nouveau le mot de passe du **compte de destination** puis cliquez sur `Démarrer la migration`{.action}. Si les informations indiquées sont correctes, vous pourrez lancer la migration en cliquant sur le bouton `Démarrer la migration`{.action}.

La page qui apparaît alors détaille le suivi de la migration. Pensez à conserver l'`Identifiant de migration`{.action} affiché et patientez jusqu'à la fin de la migration ; ce délai est variable selon le nombre d'éléments à migrer. Si vous souhaitez accéder de nouveau à ce suivi, poursuivez vers la section ci-dessous.

#### Suivre la migration

Il existe deux chemins pour accéder au suivi d'une migration par fichier PST, ICS ou VCF :

- depuis l'e-mail reçu vous notifiant le début de la migration ;

- depuis la page <https://omm.ovh.net/>, en passant votre souris sur l'onglet `Migration`{.action} dans la barre de menu au dessus de la page puis en cliquant sur `Suivre / Synchroniser`{.action}. Vous devrez renseigner alors l'`Identifiant de migration`{.action} ainsi que le `Compte de destination`{.action} concerné.

![omm](images/omm-migration-track.png){.thumbnail}

La page qui s'affiche vous permet de suivre l'avancement de votre migration. Un message vous indique si le processus va débuter, est en cours ou est terminé. Selon cet état, plusieurs interactions sont possibles :

- Stopper le processus : Permet d'annuler la migration. Les éléments déjà migrés seront conservés sur le compte de destination.
- Supprimer les éléments migrés : Permet de supprimer les éléments migrés sur le compte de destination.

### Réaliser et suivre une migration multiple (mode projet) <a name="project"></a>

Depuis la page <https://omm.ovh.net/>, dans l'onglet `Projet`{.action} au dessus, cliquez sur `Nouveau projet de migrations multiples`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Complétez les informations du **Nouveau projet**:

- Donnez un nom à votre projet de migration.
- Un mot de passe pour accèder à l'interface de suivi de votre projet de migration.
- une adresse e-mail pour être notifié sur l'avancement de votre projet de migration.

Cliquez sur `Créer le projet`{.action}. La page suivante vous permet de gérer et suivre votre projet de migration. Conservez bien **le numéro du projet** affiché au dessus.

![omm](images/omm-migration-project01.png){.thumbnail}

Vous pouvez maintenant débuter la migration de vos comptes. L'interface présente différents onglets :

- `Continuer` : Permet de suivre l'avancement des migrations sur votre projet. Vous disposez d'un bouton permettant de mettre en attente et de reprendre les migrations en cours.

- `Création multiple` : Permet d'ajouter dans la file d'attente plusieurs migrations grâce à l'import d'un fichier (CSV ou Excel). Ce dernier doit respecter un formatage précis; nous vous recommandons d'utiliser les modèles fournis. Le fichier se présente sous cette forme:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

Il est préférable de l'ouvrir avec un logiciel de tableur pour le compléter.

- `Ajouter` : Permet d'ajouter, compte par compte, des migrations dans la file d'attente. Vous pourrez cependant conserver les serveurs source et de destination en tant que valeurs par défaut.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Options` : Permet de personnaliser les éléments que l'outil OVH Mail Migrator doit migrer ainsi que le nombre de requêtes simultanées que l'outil peut effectuer lorsqu'il réalise les migrations.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Déconnexion` : Permet de vous déconnecter de la page de suivi du projet, sans conséquence sur le déroulé de la migration.

Pour accéder de nouveau au suivi de votre projet de migration, connectez-vous à la page <https://omm.ovh.net/>, dans l'onglet `Projet`{.action} au dessus, cliquez sur `Suivre un projet`{.action}. Vous devrez renseigner alors l'`Identifiant du projet de migration`{.action} ainsi que le `Mot de passe`{.action} associé à ce dernier.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
