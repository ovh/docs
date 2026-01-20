---
title: "Migrer vos adresses e-mail d'une plateforme e-mail OVHcloud vers une autre"
excerpt: "Découvrez comment migrer les adresses e-mail d'une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange, E-mail Pro, MX Plan ou Zimbra"
updated: 2026-01-16
---

## Objectif

Vous souhaitez migrer vos adresses e-mail présentes sur une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange, E-mail Pro ou MX Plan. Vous trouverez dans ce guide un processus de migration en deux phases :

1. **Configurer la plateforme de destination**.
2. **Migrer les comptes e-mail** de votre plateforme actuelle vers la nouvelle.

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Pour migrer une solution MX Plan vers une plateforme Exchange ou E-mail Pro, nous vous invitons à suivre notre guide [Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
>

**Découvrez comment migrer les adresses e-mail d'une plateforme Exchange ou E-mail Pro vers une autre plateforme Exchange ou E-mail Pro.**

## Prérequis

- Disposer d'une plateforme **«source»** avec des comptes [Exchange](/links/web/emails-hosted-exchange) ou [E-mail Pro](/links/web/email-pro) configurés ou [Zimbra](/links/web/zimbra).
- Disposer d'une plateforme de **«destination»** avec des comptes [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) ou MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](/links/web/hosting)). Cette plateforme doit disposer de comptes non configurés ou disponibles pour accueillir les adresses e-mail qui doivent être migrées.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Configurer la plateforme de destination

> [!warning]
>
> Avant de commencer votre migration, si vous venez de commander votre nouvelle offre e-mail, ajoutez d'abord le nom de domaine à votre plateforme e-mail. Si vous migrez vers une plateforme MX Plan, le nom de domaine attaché étant « fixe », vous pouvez directement passer à [l'étape suivante](#accountsmigration).
>
> Sélectionnez l’onglet `Domaines associés`{.action} ou `Domaine`{.action} sur votre plateforme, puis cliquez sur `Ajouter un domaine`{.action}. Une fois le nom de domaine ajouté, assurez-vous que la mention `OK` ou `Actif`{.action} est bien présente dans la colonne `Statut`.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Pour plus de détails sur l'ajout d'un nom de domaine, suivez [le guide E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config), [le guide Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) ou [le guide Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### Migrer les comptes e-mail <a name="accountsmigration"></a>

La migration de vos comptes e-mail se fera en 3 grandes étapes, **Renommer** le compte e-mail d'origine, **créer** le nouveau compte e-mail et **migrer** de la plateforme d'origine vers la nouvelle.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Cas particulier:
>
> - Si vous devez migrer **un compte Exchange ou Zimbra PRO** vers un compte **E-mail Pro** ou **Zimbra STARTER**, vous devez vous assurer que vos comptes e-mail n'excèdent pas les 10 Go (E-mail Pro) ou 15 Go (Zimbra STARTER). Les fonctions collaboratives, la synchronisation des calendriers et contacts ne sont pas présentes sur E-mail Pro ou Zimbra STARTER et ne peuvent pas être migrées.
> - Si vous devez migrer **un compte Exchange, E-mail Pro ou Zimbra** vers un compte **MX Plan**, vous devez vous assurer que votre compte e-mail n'excède pas les 5 Go. Les fonctions collaboratives, la synchronisation des calendriers et contacts  ne sont pas présentes sur MX Plan et ne peuvent pas être migrées.

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
> - [Alias](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections) 
> - [Délégations de droits](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation) 
> - [Groupes](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)
> - Contacts externes
> - [Pied de page](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Migrez le compte e-mail « source » vers le compte de votre nouvelle plateforme à l'aide de notre outil [OMM](/links/web/omm) (OVHcloud Mail Migrator).

Pour plus d'informations sur OMM, consultez notre guide [Migrer des comptes e-mail via OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![email-migration](images/migration_platform06.png){.thumbnail}

Le délai de migration dépend de la quantité de données à migrer vers votre nouveau compte. Celui-ci peut varier de quelques minutes à plusieurs heures.

Vérifiez, après la migration, que vous retrouvez tous vos éléments en vous connectant au webmail à l'adresse [Webmail](/links/web/email).

Une fois la migration effectuée, vous pouvez conserver ou supprimer le compte d'origine avec le nom provisoire.

Si vous souhaitez le supprimer, dirigez-vous dans l'onglet `Comptes e-mail`{.action} de votre plateforme e-mail d'origine, cliquez sur le bouton `...`{.action} puis sur `Réinitialiser ce compte`{.action}.

### Vérifier ou modifier la configuration de votre domaine

À cette étape, vos adresses e-mail doivent déjà être migrées et fonctionnelles. Par sécurité, nous vous invitons à vous assurer que la configuration de votre domaine est correcte en consultant votre espace client.

Pour cela, sélectionnez le service E-mail Pro, Exchange ou Zimbra concerné, puis rendez-vous sur l'onglet `Domaines associés`{.action} ou `Domaine`{.action} sur votre plateforme. Vérifiez la rubrique ou la colonne `Diagnostic`{.action}.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> Si vous venez juste de réaliser la migration ou de modifier un enregistrement DNS de votre domaine, il se peut que l’affichage dans l’[espace client OVHcloud](/links/manager) nécessite quelques heures pour se mettre à jour.

Pour modifier la configuration, cliquez sur la pastille rouge et réalisez la manipulation demandée. Cette dernière nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.

### Utiliser vos adresses e-mail migrées

Il ne vous reste plus qu’à utiliser vos adresses e-mail migrées. Pour cela, OVHcloud met à disposition un applicatif en ligne (_web app_) accessible à l’adresse [Webmail](/links/web/email). Vous devez y renseigner les identifiants relatifs à votre adresse e-mail.

Si vous avez configuré l'un des comptes migrés sur un client de messagerie (exemple: Outlook, Thunderbird), vous devez de nouveau le paramétrer. Les informations de connexion au serveur OVHcloud ont changé suite à la migration.

> [!primary]
>
> Vous pouvez également migrer manuellement des adresses e-mail vers OVHcloud en utilisant notre outil [OVHcloud Mail Migrator (OMM)](/links/web/omm). Pour cela, vous devez être en possession des informations (utilisateur, mot de passe, serveurs) de l'e-mail source et de l'e-mail de destination.

## Aller plus loin

[Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).

[Premiers pas avec l'offre E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config).

[Premiers pas avec l'offre Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted).

[Premiers pas avec l'offre Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Échangez avec notre [communauté d'utilisateurs](/links/community).