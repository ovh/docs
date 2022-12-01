---
title: "Migrer vos adresses e-mail d'une plateforme e-mail OVHcloud vers une autre"
slug: migration-email-platform
excerpt: "Découvrez comment migrer les adresses e-mail d'une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange, E-mail Pro ou MX Plan"
section: Migration d’un compte Exchange
order: 2
---

**Dernière mise à jour le 21/10/2020**

## Objectif

Vous souhaitez migrer vos adresses e-mail présentes sur une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange, E-mail Pro ou MX Plan. Vous trouverez dans ce guide un processus de migration en deux phases :

1. **Configurer la plateforme de destination**.
2. **Migrer les comptes e-mail** de votre plateforme actuelle vers la nouvelle.

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Pour migrer une solution MX Plan vers une plateforme Exchange ou E-mail Pro, nous vous invitons à suivre notre guide [Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/).
>

**Découvrez comment migrer les adresses e-mail d'une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange ou E-mail Pro.**

## Prérequis

- Disposer d'une plateforme **«source»** avec des comptes [Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/){.external} ou [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/){.external} configurés.
- Disposer d'une plateforme de **«destination»** avec des comptes [Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/){.external}, [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/){.external} ou MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}). Cette plateforme doit disposer de comptes non configurés ou disponibles pour accueillir les adresses e-mail qui doivent être migrées.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

### Configurer la plateforme de destination

Avant de commencer votre migration, si vous venez de commander votre nouvelle offre e-mail, ajoutez d'abord le nom de domaine à votre plateforme [E-mail Pro](../../emails-pro/premiere-configuration/#etape-2-ajouter-votre-nom-de-domaine) ou [Exchange](../ajouter-domaine-exchange/). Si vous migrez vers une plateforme MX Plan, le nom de domaine attaché étant « fixe », vous pouvez directement passer à [l'étape suivante](#accountsmigration).

> Sélectionnez l’onglet `Domaines associés`{.action} sur votre plateforme, puis cliquez sur `Ajouter un domaine`{.action}. Configurez votre nom de domaine en **non-autoritatif**. Une fois le nom de domaine ajouté, assurez-vous que la mention `OK` est bien présente dans la colonne `Statut`.
>
> ![email-migration](images/migration_platform02.png){.thumbnail}
>
> Pour plus de détails sur l'ajout d'un nom de domaine, suivez [le guide E-mail Pro](../../emails-pro/premiere-configuration/#etape-2-ajouter-votre-nom-de-domaine) ou [le guide Exchange](../ajouter-domaine-exchange/).

### Migrer les comptes e-mail <a name="accountsmigration"></a>

La migration de vos comptes e-mail se fera en 3 grandes étapes, **Renommer** le compte e-mail d'origine, **créer** le nouveau compte e-mail et **migrer** de la plateforme d'origine vers la nouvelle.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Cas particulier:
>
> - Si vous devez migrer **un compte Exchange** vers un compte **E-mail Pro**, vous devez vous assurer que vos comptes e-mail n'excèdent pas les 10Go. Les fonctions collaboratives, la synchronisation des calendriers et contacts  ne sont pas présentes sur E-mail Pro et ne peuvent pas être migrées.
> - Si vous devez migrer **un compte Exchange ou E-mail Pro** vers un compte **MX Plan**, vous devez vous assurer que votre compte e-mail n'excède pas les 5Go. Les fonctions collaboratives, la synchronisation des calendriers et contacts  ne sont pas présentes sur MX Plan et ne peuvent pas être migrées.

#### Renommer

Renommez le compte e-mail à migrer avec un nom provisoire (exemple: pour migrer le compte e-mail *john.smith@mydomain.ovh*, renommez celui-ci en *john.smith01@mydomain.ovh*).

Dans l'onglet `Comptes e-mail`{.action} de votre plateforme e-mail, cliquez sur le bouton `...`{.action} puis sur `Modifier`{.action}.

![email-migration](images/migration_platform04.png){.thumbnail}

#### Créer

Créez votre adresse e-mail sur le nouveau compte de votre plateforme E-mail Pro, Exchange ou MX Plan ( en prenant l'exemple précédent, vous allez donc créer *john.smith@mydomain.ovh* sur votre nouvelle plateforme)

Dans l'onglet `Comptes e-mail`{.action} de votre plateforme, cliquez sur le bouton `...`{.action}, à droite du compte e-mail de destination, puis sur `Modifier`{.action}.

![email-migration](images/migration_platform05.png){.thumbnail}

#### Migrer

> [!warning]
> 
> Seules les données de vos comptes e-mail seront migrées (e-mails, contacts, calendriers, règles de boîte de réception, etc.). Les fonctionnalités liées à votre plateforme devront être recréées sur la nouvelle plateforme :
>
> - [Alias](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-alias-sur-un-e-mail-depuis-le-manager/) 
> - [Délégations de droits](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-donner-les-droits-full-access-sur-un-compte/) 
> - [Groupes](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-utilisation-des-groupes-mailing-list/)
> - Contacts externes
> - [Pied de page](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-signature-automatique-disclaimer/)

Migrez le compte e-mail « source » vers le compte de votre nouvelle plateforme à l'aide de notre outil [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

> Si vous devez migrer plusieurs comptes e-mail, nous vous conseillons d'utiliser le mode [Project](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/#project) via [OMM](https://omm.ovh.net/Project/Create), il vous permettra d'importer un tableau au format CSV contenant les informations des comptes e-mail à migrer.

Pour plus d'informations sur OMM, consultez notre guide [Migrer des comptes e-mail via OVH Mail Migrator](../exchange-migration-de-comptes-e-mail-ovh-mail-migrator/).

![email-migration](images/migration_platform06.png){.thumbnail}

Le délai de migration dépend de la quantité de données à migrer vers votre nouveau compte. Celui-ci peut varier de quelques minutes à plusieurs heures.

Vérifiez, après la migration, que vous retrouvez tous vos éléments en vous connectant au webmail à l'adresse <https://www.ovh.com/fr/mail/>.

Une fois la migration effectuée, vous pouvez conserver ou supprimer le compte d'origine avec le nom provisoire.

Si vous souhaitez le supprimer, dirigez-vous dans l'onglet `Comptes e-mail`{.action} de votre plateforme e-mail d'origine, cliquez sur le bouton `...`{.action} puis sur `Réinitialiser ce compte`{.action}.

### Vérifier ou modifier la configuration de votre domaine

À cette étape, vos adresses e-mail doivent déjà être migrées et fonctionnelles. Par sécurité, nous vous invitons à vous assurer que la configuration de votre domaine est correcte en consultant votre espace client.

Pour cela, sélectionnez le service E-mail Pro ou Exchange concerné , puis rendez-vous sur l'onglet `Domaines associés`{.action}. Dans le tableau qui s'affiche, la colonne « Diagnostic » vous permettra de voir si la configuration DNS est correcte : une pastille rouge apparaît si la configuration doit être modifiée.

> [!primary]
>
> Si vous venez juste de réaliser la migration ou de modifier un enregistrement DNS de votre domaine, il se peut que l’affichage dans l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} nécessite quelques heures pour se mettre à jour.
>

Pour modifier la configuration, cliquez sur la pastille rouge et réalisez la manipulation demandée. Cette dernière nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.

![email-migration](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Utiliser vos adresses e-mail migrées

Il ne vous reste plus qu’à utiliser vos adresses e-mail migrées. Pour cela, OVHcloud met à disposition un applicatif en ligne (_web app_) accessible à l’adresse <https://www.ovh.com/fr/mail/>. Vous devez y renseigner les identifiants relatifs à votre adresse e-mail.

Si vous avez configuré l'un des comptes migrés sur un client de messagerie (exemple: Outlook, Thunderbird), vous devez de nouveau le paramétrer. Les informations de connexion au serveur OVHcloud ont changé suite à la migration.
<br>Pour vous aider dans vos manipulations, consultez notre documentation depuis les sections des guides consacrées à [E-mail Pro](https://docs.ovh.com/fr/emails-pro/){.external} et [Hosted Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}. Si vous n'êtes pas en mesure de reconfigurer le compte dans l'immédiat, l'accès via l'applicatif en ligne est toujours possible.

> [!primary]
>
> Vous pouvez également migrer manuellement des adresses e-mail vers OVHcloud en utilisant notre outil [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}. Pour cela, vous devez être en possession des informations (utilisateur, mot de passe, serveurs) de l'e-mail source et de l'e-mail de destination.
>

## Aller plus loin

[Gérer les contacts de ses services](https://docs.ovh.com/fr/customer/gestion-des-contacts/){.external}.

[Guides E-mail Pro](https://docs.ovh.com/fr/emails-pro/){.external}.

[Guides Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
