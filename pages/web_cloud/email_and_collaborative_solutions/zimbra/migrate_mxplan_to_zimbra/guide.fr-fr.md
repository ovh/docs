---
title: 'Migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud'
excerpt: 'Découvrez comment migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud'
updated: 2026-04-10
---

## Objectif

Si vous souhaitez faire évoluer votre offre e-mail MX Plan vers une offre [Zimbra OVHcloud](/links/web/zimbra), vous disposez de l'outil [**O**VH **M**ail **M**igrator](/links/web/omm) pour effectuer votre migration.

**Découvrez comment migrer une adresse e-mail MX Plan vers un compte Zimbra OVHcloud.**

## Prérequis

- Disposer d'une adresse e-mail MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](/links/web/hosting)).
- Disposer d'un compte e-mail Zimbra OVHcloud.
- **Ne pas avoir paramétré de redirection sur l'adresse e-mail MX Plan que vous souhaitez migrer**.

<!-- CP-NAV-START:web-zimbra -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zimbra](/links/control-panel/web-zimbra)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## En pratique

> [!warning]
>
> Si votre compte e-mail gère des informations sensibles ou si vous rencontrez des problèmes lors de la migration, nous vous recommandons d’attendre la mise en place de l’outil d’automatisation dans l’espace client OVHcloud.

La migration d'un compte e-mail MX Plan vers un compte e-mail Zimbra se fait en 2 temps. Pour éviter de couper la réception sur l'adresse e-mail d'origine, il est nécessaire de respecter le processus suivant :

1. **[Transférer le contenu du compte MX Plan vers un compte Zimbra](#step1)**
    - [1.1 - Création d'une adresse e-mail Zimbra](#step11)
    - [1.2 - Migration des e-mails avec OVHcloud Mail Migrator](#step12)
    - [1.3 - Sauvegarde des e-mails du compte source (facultatif)](#step13)
2. **[Supprimer le compte MX Plan d'origine et réassigner son adresse au compte Zimbra](#step2)**
    - [2.1 - Suppression de l'ancienne adresse e-mail MX Plan](#step21)
    - [2.2 - Renommer l'adresse e-mail Zimbra](#step22)

Dans l'exemple ci-dessous, nous migrons l'adresse `contact@mydomain.ovh`. Pour cela nous allons créer le compte Zimbra sous le nom `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Transférer le contenu du compte MX Plan vers un compte Zimbra <a name="step1"></a>

#### 1.1 - Création d'une adresse e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Si vous disposez déjà d'une adresse e-mail Zimbra, passez à la [Migration des e-mails avec OVHcloud Mail Migrator](#step12).

Créez dans un premier temps une adresse e-mail avec un nom provisoire. Vous pouvez créer, par exemple, l'adresse `contact2@mydomain.ovh` si vous devez migrer l'adresse `contact@mydomain.ovh`.

Pour créer une adresse e-mail Zimbra, consultez la section « Créer un compte e-mail » de notre guide [Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - Migration des e-mails avec OVHcloud Mail Migrator <a name="step12"></a>

Utilisez l’outil de migration [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**) pour transférer le contenu du compte MX Plan d’origine vers le nouveau compte de destination Zimbra, en reprenant l’exemple évoqué dans le schéma plus haut.

La migration avec OMM se déroule en 3 étapes : créer un projet, configurer la migration, puis suivre son avancement. Cliquez sur chaque onglet pour afficher les instructions correspondantes.

> [!tabs]
> **Étape 1**
>>
>> **Créer un projet de migration**
>>
>> Rendez-vous sur <https://omm.ovhcloud.com/> et cliquez sur `Nouvelle migration`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Adresse e-mail de contact du projet** : Saisissez une adresse e-mail qui recevra les identifiants et les notifications de suivi. N’utilisez pas une adresse qui sera migrée dans ce projet.
>> - **Mot de passe du projet** : Définissez un mot de passe (10 caractères minimum, avec au moins 1 caractère spécial, 1 chiffre, 1 majuscule et 1 minuscule).
>>
>> Cliquez sur `Créer mon projet`{.action}. Vous recevrez un e-mail de confirmation contenant l’identifiant unique du projet.
>>
> **Étape 2**
>>
>> **Se connecter au projet et créer la migration**
>>
>> Depuis la page d’accueil d’[OMM](/links/web/omm), cliquez sur `Suivre une migration`{.action}, saisissez l’`Identifiant du projet` et le `Mot de passe du projet`, puis cliquez sur `Se connecter au projet`{.action}.
>>
>> Cliquez ensuite sur `Nouvelle migration`{.action} pour paramétrer votre migration :
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Compte source** :
>>     - **Type de compte** : Sélectionnez `OVHcloud`, puis choisissez `MX Plan` ou `Autodétection`. Cliquez sur `Se connecter`{.action} pour vous identifier avec votre compte OVHcloud et sélectionner automatiquement le service et l’adresse à migrer (exemple : `john.smith@mydomain.ovh`). Saisissez ensuite le mot de passe de ce compte e-mail.
>> - **Compte de destination** :
>>     - **Type de compte** : Sélectionnez `OVHcloud`, puis choisissez `Zimbra`. Cliquez sur `Se connecter`{.action} pour vous identifier avec votre compte OVHcloud et sélectionner le service Zimbra et l’adresse de destination (exemple : `zimbra2@mydomain.ovh`). Saisissez ensuite le mot de passe de ce compte e-mail.
>> - **Données à transférer** : Vérifiez les types de données pris en charge et décochez ceux que vous ne souhaitez pas migrer.
>> - **Début du transfert** : Choisissez `Immédiatement` ou cochez `Plus tard` pour planifier la migration à une date et heure définies.
>>
>> Cliquez sur `Migrer mon compte`{.action} pour lancer la migration.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Étape 3**
>>
>> **Suivre la migration**
>>
>> Deux méthodes vous permettent d’accéder au suivi de votre projet de migration :
>>
>> - Depuis l’e-mail reçu lors de la création du projet, via le lien fourni (l’identifiant du projet y est prérempli).
>> - Depuis la page d’accueil d’[OMM](/links/web/omm) : cliquez sur `Suivre une migration`{.action}, saisissez votre `Identifiant du projet` et votre `Mot de passe du projet`, puis cliquez sur `Se connecter au projet`{.action}.
>>
>> Depuis la page du projet, cliquez sur le bouton `⋮`{.action} à droite de la ligne de votre migration pour afficher les options :
>>
>> - `Voir plus de détails`{.action} : Suivez la progression de la migration et consultez le rapport une fois terminée.
>> - `Annuler la migration`{.action} : Annule la migration en cours. Les éléments déjà migrés sont conservés sur le compte de destination.
>> - `Supprimer mes données de migration (RGPD)`{.action} : Déclenche la suppression de toutes les données relatives à la migration. Les informations sur les événements de la migration sont conservées.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

Pour plus de détails sur l’utilisation d’OMM, consultez notre guide « [Migrer des comptes e-mail via OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) ».

> [!primary]
>
> Le temps de migration varie en fonction du volume de données et peut aller de quelques minutes à plusieurs heures. Une fois la migration terminée, vérifiez que tous les e-mails sont bien migrés.

#### 1.3 - Sauvegarde des e-mails du compte source (facultatif) <a name="step13"></a>

> [!warning]
>
> Avant de supprimer votre compte MX Plan, **effectuez une sauvegarde de vos e-mails** pour éviter toute perte de données.

Utilisez les options d'export de votre client de messagerie. Vous trouverez, dans notre guide « [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) », les détails d'export manuel d'une adresse e-mail depuis un client de messagerie.

### 2 - Supprimer le compte MX Plan d'origine et réassigner son adresse au compte Zimbra <a name="step2"></a>

#### 2.1 - Suppression de l'ancienne adresse e-mail MX Plan <a name="step21"></a>

Pour supprimer l'adresse e-mail MX Plan (exemple : `john.smith@mydomain.ovh`), suivez notre guide « [Supprimer un compte e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account) ».

> [!warning]
>
> Si vous migrez depuis un compte MX Plan utilisant le webmail Zimbra, attendez 5 minutes que la suppression soit effective avant de renommer le second compte e-mail.

#### 2.2 - Renommer l'adresse e-mail Zimbra <a name="step22"></a>

Dans votre espace client OVHcloud, accédez à votre service Zimbra et renommez l'adresse e-mail Zimbra provisoire en l'adresse MX Plan migrée. Si on reprend l'exemple de l'étape 2 du chapitre 1.2 plus haut, l'adresse provisoire `zimbra2@mydomain.ovh` sera renommée en `john.smith@mydomain.ovh` qui est son adresse e-mail d'usage.

### Conclusion <a name="conclusion"></a>

Votre compte e-mail est maintenant migré vers Zimbra. Pour finaliser la configuration, consultez les guides ci-dessous :

- [Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Configurer votre adresse e-mail Zimbra sur un logiciel de messagerie](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Aller plus loin <a name="go-further"></a>

[FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).