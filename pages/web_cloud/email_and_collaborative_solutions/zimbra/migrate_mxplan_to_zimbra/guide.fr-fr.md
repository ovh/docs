---
title: 'Migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud'
excerpt: 'Découvrez comment migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud'
updated: 2025-05-22
---

## Objectif

Dans le cadre de la transition progressive des comptes MX Plan vers Zimbra, il est possible d'anticiper cette migration et d'effectuer vous-même le transfert de comptes e-mail avant la mise en place d’un outil automatisé par OVHcloud. Ce guide vous explique comment effectuer cette migration manuellement.

**Découvrez comment migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud.**

## Prérequis

- Disposer d'une adresse e-mail MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](/links/web/hosting)).
- Disposer d'un compte e-mail Zimbra OVHcloud.
- **Ne pas avoir paramétré de redirection sur l'adresse e-mail MX Plan que vous souhaitez migrer**.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!warning]
>
> Si votre compte e-mail gère des informations sensibles ou si vous rencontrez des problèmes lors de la migration, nous vous recommandons d’attendre la mise en place de l’outil d’automatisation dans l’espace client OVHcloud.

La migration d'un compte e-mail MX Plan vers un compte e-mail Zimbra se fait en 2 temps. Pour éviter de couper la réception sur l'adresse e-mail d'origine, il est nécessaire de respecter le processus suivant :

1. **Transférer le contenu du compte MX Plan vers un compte Zimbra**
    - [1.1 - Création d'une adresse e-mail Zimbra](#step11)
    - [1.2 - Migration des e-mails avec OVHcloud Mail Migrator](#step12)
    - [1.3 - Sauvegarde des e-mails du compte source (facultatif)](#step13)
2. **Supprimer le compte MX Plan d'origine et réassigner son adresse au compte Zimbra**
    - [2.1 - Suppression de l'ancienne adresse e-mail MX Plan](#step21)
    - [2.2 - Renommer l'adresse e-mail Zimbra](#step22)

Dans l'exemple ci-dessous, nous migrons l'adresse `contact@mydomain.ovh`. Pour cela nous allons créer le compte Zimbra sous le nom `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1.1 - Création d'une adresse e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Si vous disposez déjà d'une adresse e-mail Zimbra, passez à la [Migration des e-mails avec OVHcloud Mail Migrator](#step12).

Créez dans un premier temps une adresse e-mail avec un nom provisoire. Vous pouvez créer, par exemple, l'adresse `contact2@mydomain.ovh`{.action} si vous devez migrer l'adresse `contact@mydomain.ovh`{.action}.

Pour créer une adresse e-mail Zimbra, consultez la section « Créer un compte e-mail » de notre guide [Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### 1.2 - Migration des e-mails avec OVHcloud Mail Migrator <a name="step12"></a>

Utilisez l’outil de migration [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**) pour transférer le contenu du compte MX Plan d'origine vers le nouveau compte de destination Zimbra, en reprenant l'exemple évoqué dans le schéma plus haut.

#### Étape 1 : Accéder à OVHcloud Mail Migrator

Rendez-vous sur [OVHcloud Mail Migrator](/links/web/omm).

Sur la page [OMM](/links/web/omm), dans l'onglet `Migration`{.action}, cliquez sur `New migration`{.action}.

![omm](images/omm-migration-create01.png){.thumbnail}

#### Étape 2 : Renseigner les informations de migration

**Account**

- **Source Account** :
    - **Server type** : Sélectionnez `Hosted by OVHcloud (Autodetect)`, cela vous permet de compléter automatiquement les informations, à l'exception du mot de passe.
    - **Server URL** : Ce champ est complété automatiquement.
    - **Login** : Saisissez l'adresse e-mail complète du compte à migrer (exemple : `contact@mydomain.ovh`).
    - **Password** : Renseignez le mot de passe de l'adresse e-mail concernée.
- **Destination Account** :
    - **Server type** : Sélectionnez `Zimbra` pour le type de serveur de destination.
    - **Server URL** : Renseignez l'adresse du serveur Zimbra <https://zimbra1.mail.ovh.net>.
    - **Login** : Saisissez l'adresse e-mail complète du compte Zimbra de destination (exemple :`contact2@mydomain.ovh`).
    - **Password** : Renseignez le mot de passe de l'adresse e-mail du compte Zimbra de destination.

**Options**

Sélectionnez les éléments que vous souhaitez migrer. Certains contenus peuvent être indisponibles selon le type de serveur choisi auparavant.

**Informations**

Renseignez une adresse e-mail afin d'être notifié sur l'avancement de la migration. Cochez la case en bas de la page pour accepter les termes et conditions d'OMM.

![omm](images/omm-migration-create02.png){.thumbnail}

#### Étape 3 : Lancer la migration

Vérifiez que toutes les informations sont correctes, puis cliquez sur `Start migration`{.action}. La page qui apparaît détaille le suivi de la migration. Conservez l'identifiant de migration (Migration ID) affiché et patientez jusqu'à ce que le processus arrive à son terme. Ce délai est variable selon le nombre d'éléments à migrer.

#### Étape 4 : Suivre la migration

Deux méthodes vous permettent d'accéder au suivi d'une migration unique :

- Depuis l'e-mail reçu qui vous notifie sur l'avancement de la migration.
- Depuis la page [OMM](/links/web/omm) : dans l'onglet `Migration`{.action}, cliquez sur `Track/Synchronize`{.action}. Renseignez l'identifiant de migration (`Migration ID`{.action}) ainsi que le compte d'origine (`Source account`{.action}) concerné.

![omm](images/omm-migration-track.png){.thumbnail}

La page qui s'affiche vous permet de suivre l'avancement de votre migration. Un message vous indique si le processus va débuter, est en cours ou est terminé. Selon cet état, plusieurs interactions sont possibles :

- `Stop the process`{.action} : Permet d'annuler la migration. Les éléments déjà migrés seront conservés sur le compte de destination.
- `Delete migrated elements`{.action} : Permet de supprimer des éléments déjà migrés vers le compte de destination. Vous pouvez effacer des éléments à partir d'un point de synchronisation précis.
- `Synchronize`{.action} : Permet de récupérer de nouveaux éléments non migrés lors d'une synchronisation précédente entre le compte source et le compte de destination. Cette action réalise une migration des éléments manquants sur le compte de destination par rapport au compte source.

Pour réaliser une migration par fichier ou multiple, consultez les sections « Migration par fichier » et « Réaliser et suivre une migration multiple (mode projet) » de notre guide « [Migrer des comptes e-mail via OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) ».

> [!primary]
>
> Le temps de migration varie en fonction du volume de données et peut aller de quelques minutes à plusieurs heures. Une fois la migration terminée, vérifiez que tous les e-mails sont bien migrés.

### 1.3 - Sauvegarde des e-mails du compte source (facultatif) <a name="step13"></a>

> [!warning]
>
> Avant de supprimer votre compte MX Plan, **effectuez une sauvegarde de vos e-mails** pour éviter toute perte de données.

Utilisez les options d'export de votre client de messagerie. Vous trouverez, dans notre guide « [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) », les détails d'export manuel d'une adresse e-mail depuis un client de messagerie.

### 2.1 - Suppression de l'ancienne adresse e-mail MX Plan <a name="step21"></a>

Pour supprimer l'adresse e-mail MX Plan (exemple: `contact@mydomain.ovh`), suivez notre guide « [Supprimer un compte e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account) ».

> [!warning]
>
> Si vous migrez depuis un compte MX Plan utilisant le webmail Zimbra, attendez 5 minutes que la suppression soit effective avant de renommer le second compte e-mail.

### 2.2 - Renommer l'adresse e-mail Zimbra <a name="step22"></a>

Dans votre espace client OVHcloud, accédez à votre service Zimbra Starter et renommez l'adresse de votre compte e-mail Zimbra avec le nom du compte e-mail migré (par exemple : `contact2@mydomain.ovh` en `contact@mydomain.ovh`).

### Conclusion <a name="conclusion"></a>

Votre compte e-mail est maintenant entièrement migré vers Zimbra Starter. Vous pouvez désormais utiliser Zimbra pour gérer votre messagerie.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurer son adresse e-mail Zimbra sur un logiciel de messagerie](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).