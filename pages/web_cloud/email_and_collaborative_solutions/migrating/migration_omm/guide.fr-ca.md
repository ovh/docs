---
title: 'Migrer des comptes e-mail via OVH Mail Migrator'
excerpt: 'Apprenez à migrer vos comptes e-mail vers OVHcloud grâce à notre outil OVH Mail Migrator'
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objectif

[OVH Mail Migrator](/links/web/omm) est un outil créé par OVHcloud qui répond au besoin de réversibilité. Il permet de migrer vos comptes e-mail vers vos adresses e-mail OVHcloud ou un service e-mail externe. Le processus prend en charge différents types de contenus, tels que les e-mails, les contacts, les calendriers et les tâches, tant que ces derniers sont compatibles avec vos adresses e-mails.

**Apprenez à migrer vos comptes e-mail vers OVHcloud grâce à notre outil OVH Mail Migrator.**

## Prérequis

- Disposer d'un service e-mail externe ou chez OVHcloud, tel qu'une offre [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) ou MX Plan (via l'offre MX Plan seule ou incluse dans une offre d'[hébergement web OVHcloud](/links/web/hosting)).
- Disposer des identifiants relatifs aux comptes e-mail que vous souhaitez migrer (les comptes e-mail source).
- Disposer des identifiants relatifs aux comptes e-mail de destination.

## En pratique

Pour accéder à OMM, rendez-vous sur l'adresse <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Créer un projet de migration <a name="create-project"></a>

Avant de lancer une migration, il est nécessaire de créer un projet. Ce projet vous permettra de lancer une ou plusieurs migrations et suivre celles-ci.

Cliquez sur `Nouvelle migration`{.action} pour débuter la création de votre projet:

**Adresse e-mail de contact du projet** : Saisissez une adresse e-mail qui servira à recevoir les identifiants et les notifications de suivi de vos migrations. Il est déconseillé de renseigner une des adresses e-mail qui sera migrée dans votre projet.
**Mot de passe du projet** : Saisissez un mot de passe qui servira à vous connecter à votre projet. Il doit contenir au moins 10 caractères, inclure au moins 1 caractère spécial, 1 chiffre, 1 majuscule et 1 minuscule.

Cliquez sur `Créer mon projet`{.action} pour lancer la création du projet.

Sur l'adresse e-mail de contact du projet, vous recevrez un e-mail de confirmation contenant l'identifiant unique du projet et un lien pour y accéder.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Le projet de migration et les données associées à celui-ci seront automatiquement supprimés après 60 jours d'inactivité.

### Créer une de migration <a name="create-migration"></a>

Une fois votre projet créé, connectez-vous à celui-ci. depuis la page d'accueil d'[OMM](/links/web/omm):

- Cliquez sur `Suivre une migration`{.action}.
- Saisissez l'`Identifiant du projet` reçu par e-mail.
- Saisissez le `Mot de passe du projet` que vous avez défini à sa création.
- Cliquez sur `Se connecter au projet`{.action} pour terminer.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Vous êtes maintenant sur la page d'accueil du projet qui vous permettra de lancer votre première migration.

- Cliquez sur `Nouvelle migration`{.action} en haut à gauche du tableau.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Une nouvelle page s'affiche sur laquelle vous allez définir les informations de connexion au compte source et au compte de destination pour pouvoir planifier ou lancer directement cette migration. Pour rappel, le contenu du **compte source** sera migré vers le **compte de destination**.

Avant de commencer votre migration, il est important de bien connaitre les 3 types de comptes que l'on peut migrer et vers lesquelles vous pouvez migrer:

- **OVHcloud** : l'`Auto détection` est conseillée si vous devez migrer un compte hébergé sur n'importe quelle offre e-mail OVHcloud. Si vous possédez un grand nombre de comptes e-mail OVHcloud, sélectionnez parmi les offres `MX plan`, `E-mail Pro`, `Exchange` et `Zimbra`. Il vous sera demandé de vous connecter au compte OVHcloud associéà l'offre associée à la migration . Pour plus d'information, consultez la rubrique « [Migrer via une connexion au compte client OVHcloud](#sso-migration) ».
- **Autres** : ils font référence à des services e-mail souscrits hors OVHcloud, vous trouvez une liste non exhaustive de services e-mail pris en charge par OMM. Si le type de service de votre compte e-mail n'est pas listé, utilisez les protocoles `Imap` ou `Pop`, qui sont compatibles avec la plupart des serveurs e-mail.
- **Importation de fichiers** : Il est possible de migrer le contenu de fichier PST, ICS, CSV et Xml Rules via OMM vers un compte e-mail de destination. Lorsque cette fonction est sélectionnée, il suffit de glisser-déposer votre document dans la zone prévue à cet effet ou de parcourir votre terminal via le bouton `parcourir vos fichiers`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Complétez les informations selon le type de compte :

- **Compte source**
    - **Type de compte** : sélectionnez le type de compte source.
    - **E-mail** : saisissez l'adresse e-mail du compte source.
    - **Mot de passe** : saisissez le mot de passe au compte source.
    - **URL du serveur** / **Domaine du serveur** *(selon le type)*: renseignez le nom d'hôte du serveur e-mail associé au compte e-mail que vous souhaitez migrer.
    - **Identifiant OVHcloud** *(selon le type)*: ce champ est automatiquement rempli lorsque vous êtes connecté à un compte OVHcloud. Pour plus d'informations, consultez la rubrique « [Migrer via une connexion au compte client OVHcloud](#sso-migration) ».
    - **Organization** *(selon le type)*: sélectionnez l'organisation associée au compte e-mail source.
    - **Platform** *(selon le type)*: sélectionnez la plateforme associée au compte e-mail source.
    - **Service** *(selon le type)*: sélectionnez le service associé au compte e-mail source.
    - **Paramètres avancés** > **Identifiant du compte de délégation** *(selon le type)*: Lorsque le compte e-mail que vous migrez est un compte partagé, vous devez renseigner l'adresse e-mail du compte administrateur sur ce compte de délégation.
- **Compte de destination**
    - **Type de compte** : sélectionnez le type de compte de destination.
    - **E-mail** : saisissez l'adresse e-mail de destination.
    - **Mot de passe** : saisissez le mot de passe associé au compte de destination.
    - **URL du serveur** / **Domaine du serveur** *(selon le type)*: renseignez le nom d'hôte du serveur e-mail associé au compte e-mail de destination.
    - **Identifiant OVHcloud** *(selon le type)*: ce champ est automatiquement rempli lorsque vous êtes connecté à un compte OVHcloud. Pour plus d'informations, consultez la rubrique « [Migrer via une connexion au compte client OVHcloud](#sso-migration) ».
    - **Organization** *(selon le type)*: sélectionnez l'organisation associée au compte e-mail de destination.
    - **Platform** *(selon le type)*: sélectionnez la plateforme associée au compte e-mail de destination.
    - **Service** *(selon le type)*: sélectionnez le service associé au compte e-mail de destination.
    - **Paramètres avancés** > **Identifiant du compte de délégation** *(selon le type)*: Lorsque le compte e-mail de destination est un compte partagé, vous devez renseigner l'adresse e-mail du compte administrateur sur ce compte de délégation.
- **Début du transfert** : vous pouvez lancer la migration `immédiatement` ou cocher `Plus tard` pour différer la migration. La migration différée vous permet de lancer celle-ci automatiquement à une date et une heure que vous définissez.
- **Données à transférer** : En fonction du type de compte e-mail que vous migrez et du compte de destination, cette section vous indiquera les différents types de données qui sont prises en charge lors de la migration. Cela dépend du compte source et du compte de destination.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Si vous migrez un compte disposant de fonctionnalités que le compte destination ne possède pas, il vous sera nécessaire de sauvegarder par vos moyens les éléments qui ne pourront pas être migrés par OMM. Pour vous aider, appuyez-vous de notre guide « [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

Une fois les paramètres des comptes source et destination complétés, cliquez sur:

- `Migrer et ajouter un autre compte`{.action} si vous souhaitez ajouter une autre migration dans la liste de votre projet 
- `Migrer mon compte`{.action} pour lancer la migration paramétrée et revenir à l'accueil du projet.

### Migrer via une connexion au compte client OVHcloud <a name="sso-migration"></a>

Lors d'une migration vers ou depuis un compte OVHcloud, il est possible de sélectionnez parmi l'une de nos offres `MX plan`, `E-mail Pro`, `Exchange` et `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Lorsque vous sélectionnez une de ces offres, suivez les étapes ci-dessous:

> [!tabs]
> **Etape 1**
>>
>> - Cliquez sur `Se connecter`{.action} pour afficher la fenêtre de connexion à l'espace client OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Etape 2**
>>
>> Connectez-vous au compte client OVHcloud:
>>
>> - Saisissez l'identifiant ou l'adresse e-mail associé au compte OVhcloud, saisissez le mot de passe associé et cliquez sur `Se connecter`{.action}.
>> - Cliquez sur `Continuer`{.action} si vous étiez déjà identifié.
>>
>> > [!primary]
>> >
>> > Le compte client OVHcloud doit être associé à l'offre e-mail qui fait l'objet de la migration.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Etape 3**
>>
>> - Une nouvelle fenêtre s'affiche, celle-ci permet d'autoriser OMM à accéder aux fonctions de votre espace client listant les offres et comptes e-mail présents. Par défaut, la validité (Validity) de ces droits est de 24h (1day). Définissez la temporalité qui vous conviendra, puis cliquez sur `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Etape 4**
>>
>> - Vous serez à présent en mesure de sélectionner vos services et comptes à l'aide de menus déroulants, cela facilite la recherche des éléments et évitera les erreurs de saisie. Il est toutefois nécessaire de saisir le mot de passe associé au compte e-mail sélectionné.
>>
>> Exemple avec un service Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> Il est possible de déconnecter les accès en cours depuis un espace client OVHcloud en cliquant sur `Se déconnecter`{.action}, puis sous la mention `Identifiant OVHcloud` cliquez sur `Se connecter du compte`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Suivre un projet de migration <a name="follow-migration"></a>

Il existe deux moyens pour accéder au suivi de projet de migration:

- Depuis l'e-mail reçu lors de la création de votre projet. Vous trouverez un lien qui vous permet d'accéder à la page de connexion du projet avec l'`Identifiant du projet` prérempli, seul le `Mot de passe du projet` est à saisir.
- Depuis la page d'accueil OMM, cliquez sur `Suivre une migration`{.action}. Saisissez votre `Identifiant du projet` et votre `Mot de passe du projet`.

Cliquez ensuite sur `Se connecter au projet`{.action} pour accédez à la page d'accueil du projet et suivre vos migrations.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Depuis cette page, vous retrouvez la liste des migrations en cours ou planifiées. Le status du projet s'affiche également à droite.

Cliquez sur le bouton `⋮`{.action} à droite de la ligne d'une migration pour afficher les options :

- `Voir plus de détails`{.action} : Vous êtes renvoyé vers une page vous permettant de suivre la progression d'une migration ou de lire le rapport une fois que celle-ci est terminée
- `Annuler la migration`{.action} : Permet d'annuler la migration en cours. Les éléments déjà migrés seront conservés sur le compte de destination.
- `Supprimer mes données de migration (RGPD)`{.action} : cette option déclenche la suppression de toutes les données relatives à la migration du compte. Vous conservez néanmoins les informations concernant les événements survenus pendant la migration.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Exemple de suivi de migration :

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Si une erreur survient durant la migration un lien vers le journal des erreurs vous est fourni dans la fenêtre `Voir plus de détails`{.action}

## Aller plus loin

[Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).