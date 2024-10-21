---
title: 'Migrer une adresse e-mail MX Plan vers un compte Exchange'
excerpt: 'Découvrez comment migrer une adresse e-mail MX Plan vers un compte Exchange'
hidden: true
updated: 2022-11-22
---

## Objectif

OVHcloud propose plusieurs solutions e-mail : MX Plan (vendu seul ou compris dans une offre d'hébergement web) et Exchange. Celles-ci bénéficient de fonctionnalités propres et peuvent s'adapter à plusieurs usages. Vos besoins évoluent ? OVHcloud met à votre disposition un outil de migration vous permettant de passer d'une solution à une autre.

**Découvrez comment migrer une adresse e-mail MX Plan vers un compte Exchange.**

## Prérequis

- Disposer d'une adresse e-mail MX Plan (via l'offre MX Plan ou incluse dans une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}).
- Disposer d'un service [Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/){.external} avec au minimum un compte non configuré (qui apparaîtra sous la forme « @configureme.me »).
- **Ne pas avoir paramétré de redirection sur l'adresse e-mail MX Plan que vous souhaitez migrer**.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

### Étape 1 : délimiter votre projet

Avec une adresse Exchange, vous pouvez utiliser des fonctionnalités collaboratives, telles que les calendriers et la synchronisation des contacts. Veuillez consulter la [page de l'offre Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/) pour obtenir une liste détaillée des fonctionnalités.

Si vous devez migrer plusieurs comptes, nous vous conseillons de mettre en place un plan de migration.

### Étape 2 : commander vos comptes Exchange

Cette étape est facultative si vous disposez déjà d'un service Exchange vers lequel vous effectuez cette migration.

Dans le cas contraire, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), puis commandez le service Exchange de votre choix. Suivez les différentes étapes, puis patientez jusqu'à l'installation du service. Un e-mail vous sera envoyé dès la fin de celle-ci.

> [!primary]
>
> Une fois le compte commandé, laissez-le sous la forme « @configureme.me » dans un premier temps. En effet, il sera renommé lors de la migration.
>

### Étape 3 : Réaliser la migration

Avant de débuter votre migration, il vous faudra identifier la version du MXPlan depuis lequel vous migrez.

Pour cela, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, partie `Web Cloud`{.action}. Cliquez sur `Emails`{.action}, puis choisissez le nom de l'offre concernée. Poursuivez selon la version que vous possédez en vous référant au tableau ci-dessous.

|Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Votre offre se situe dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Vous retrouvez une `Référence serveur` dans le cadre « Résumé » commençant par "mxplan-"|
|Poursuivre vers « [Version historique de l'offre MX Plan](#VersionHistoriqueMxplan) »|Poursuivre vers « [Nouvelle version de l'offre MX Plan](#NouvelleVersionMxplan) »|

#### 3.1 Migrer une offre MXPlan historique <a name="VersionHistoriqueMxplan"></a>

> [!primary]
>
> Votre compte OVHcloud doit préalablement être contact administrateur **et** contact technique du service MX plan à migrer, **ainsi que** du service Exchange vers lequel vous migrez.
>
> Pour plus d'information sur les changements de contacts, consultez notre guide pour [gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).
>

La migration peut être effectuée depuis deux interfaces :<br>

- **celle de l'assistant de configuration Hosted Exchange**, uniquement si vous venez de commander un service Hosted Exchange et que vous n'avez encore rien paramétré sur ce dernier ;
- **celle du MX Plan**, dès que vous êtes en possession d'un service Exchange (déjà configuré ou non) et d'une adresse MX Plan que vous souhaitez migrer.

> Pour rappel, avant de débuter la migration, assurez-vous qu'aucune **redirection** ou qu'aucun **répondeur** ne soient paramétrés sur votre MXplan.
> ![email](images/mxplan-legacy-redirect.png){.thumbnail}

Une fois que vous êtes prêt, poursuivez la lecture de cette documentation selon l'interface sélectionnée. Nous vous rappelons que le délai de migration dépend de la quantité de contenu à migrer vers votre nouveau compte. Celui-ci peut varier de quelques minutes à plusieurs heures.

> [!warning]
>
> Une fois la migration confirmée, vous ne pourrez plus accéder à votre ancienne adresse e-mail MX Plan ni annuler le processus de migration. Nous vous conseillons vivement de réaliser cette opération à un horaire propice.
>
> Même si vous ne pourrez plus accéder à votre adresse e-mail actuelle, les messages déjà réceptionnés ainsi que ceux reçus ne seront pas perdus. Tous seront immédiatement accessibles depuis votre nouveau compte.
>

##### **Migration depuis l'assistant de configuration Exchange**

Pour y accéder, sélectionnez dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} le service concerné. L'assistant devrait apparaître afin de vous aider à configurer votre nouveau service Exchange. Durant ce processus, vous pourrez sélectionner les comptes e-mails MX Plan à migrer.

Si l'assistant de configuration ne s'affiche pas, les informations générales du service Exchange apparaîtront à la place. Dans ce cas, vous devrez réaliser la migration de vos comptes via l'interface MX Plan.

##### **Migration depuis l'interface MX Plan**

Pour réaliser la migration depuis cette interface, rendez-vous dans la section `E-mails`{.action} de votre espace client OVHcloud. Choisissez alors le service portant le nom de domaine de vos adresses e-mail. Cliquez sur le logo en forme d'engrenage sur la ligne du compte e-mail concerné (également appelé compte source) puis sur `Migrer le compte`{.action}.

![exchange](images/access_the_migration_tool.png){.thumbnail}

Dans la fenêtre qui s'affiche, sélectionnez le service de destination (celui vers lequel vous souhaitez migrer l'adresse) puis cliquez sur `Suivant`{.action}. S'il possède au minimum un compte « libre » (c'est-à-dire encore non paramétré), la migration s'effectuera vers l'un de ces comptes. Dès lors, prenez connaissance des informations qui s'affichent, validez-les, puis cliquez sur `Suivant`{.action} afin de poursuivre la manipulation.

Si vous ne possédez pas de compte « libre », un bouton `Commander des comptes`{.action} apparaîtra. Suivez les étapes, puis patientez le temps que les comptes soient installés pour effectuer de nouveau la manipulation.

Confirmez enfin le mot de passe de l'adresse e-mail source (celle que vous voulez migrer), puis cliquez sur `Migrer`{.action}. Cette manipulation sera à répéter autant de fois que nécessaire pour la migration d'autres comptes.

![exchange](images/account_migration_steps.png){.thumbnail}

#### 3.2 Migrer la nouvelle version du MXPlan <a name="NouvelleVersionMxplan"></a>

> [!warning]
>
> Si vous venez de commander votre nouvelle offre e-mail, ajoutez d'abord le nom de domaine à votre plateforme e-mail, avant de commencer votre migration. <br> - *Par exemple, pour migrer le compte « myemail@mydomain.ovh », vous devez ajouter le nom de domaine « mydomain.ovh » à votre plateforme.*
>
>Sélectionnez l’onglet `Domaines associés`{.action} sur votre plateforme, puis cliquez sur `Ajouter un domaine`{.action}. Une fois le nom de domaine ajouté, assurez-vous que la mention `OK` est bien présente dans la colonne `Statut`.
>
>![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Pour plus de détails sur l'ajout d'un nom de domaine, suivez [le guide Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

La migration de votre MXPlan se fera en 3 grandes étapes, **Renommer**,**Créer** et **Migrer**.

![exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Renommez** le compte MXPlan à migrer avec un nom provisoire ( exemple: pour migrer le compte MX plan *john.smith@mydomain.ovh*, renommez celui-ci en *john.smith01@mydomain.ovh*).

Dans l'onglet `Comptes e-mail`{.action} de votre plateforme MX Plan, cliquez sur le bouton `...`{.action} puis sur `Modifier`{.action}.

![exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> La modification du compte n'est pas immédiate, veuillez patienter jusqu'à la fin de l'opération avant de passer à l'étape suivante.

2\. **Créez** votre adresse e-mail sur le nouveau compte de votre plateforme Exchange (en prenant l'exemple précédent, vous allez donc créer *john.smith@mydomain.ovh* sur votre nouvelle plateforme).

Dans l'onglet `Comptes e-mail`{.action} de votre plateforme Exchange, cliquez sur le bouton `...`{.action} puis sur `Modifier`{.action}.

![exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migrez** le compte MXPlan vers le compte de votre nouvelle plateforme à l'aide de notre outil [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

Pour plus d'informations sur OMM, consultez notre guide [Migrer des comptes e-mail via OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

Le délai de migration dépend de la quantité de contenu à migrer vers votre nouveau compte. Celui-ci peut varier de quelques minutes à plusieurs heures.

Vérifiez, après la migration, que vous retrouvez vos éléments en vous connectant au webmail à l'adresse <https://www.ovh.com/ca/fr/mail/>

Vous pouvez conserver ou supprimer le compte d'origine avec le nom provisoire après cette migration.

Si vous souhaitez le supprimer, dirigez-vous dans l'onglet `Comptes e-mail`{.action} de votre MXPlan, cliquez sur le bouton `...`{.action} puis sur `Réinitialiser ce compte`{.action}.

### Étape 4 : vérifier ou modifier la configuration de votre domaine

À cette étape, vos adresses e-mail doivent déjà être migrées et fonctionnelles. Par sécurité, nous vous invitons à vous assurer que la configuration de votre domaine est correcte en consultant votre espace client.

Pour cela, sélectionnez le service Exchange concerné, puis rendez-vous sur l'onglet `Domaines associés`{.action}. Dans le tableau qui s'affiche, la colonne « Diagnostic » vous permettra de voir si la configuration DNS est correcte : une pastille rouge apparaît si la configuration doit être modifiée.

> [!primary]
>
> Si vous venez juste de réaliser la migration ou de modifier un enregistrement DNS de votre domaine, il se peut que l’affichage dans l’[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} nécessite quelques heures pour se mettre à jour.
>

Pour modifier la configuration, cliquez sur la pastille rouge et réalisez la manipulation demandée. Cette dernière nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Étape 5 : utiliser vos adresses e-mail migrées

Il ne vous reste plus qu’à utiliser vos adresses e-mail migrées. Pour cela, OVHcloud met à disposition un applicatif en ligne (_web app_) accessible à l’adresse <https://www.ovh.com/ca/fr/mail/>. Vous devez y renseigner les identifiants relatifs à votre adresse e-mail.

Si vous avez configuré l'un des comptes migrés sur un client de messagerie (comme Outlook), vous devez de nouveau le paramétrer. Les informations de connexion au serveur OVHcloud ont changé suite à la migration. Pour vous aider dans vos manipulations, consultez notre documentation [Hosted Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan). Si vous n'êtes pas en mesure de reconfigurer le compte dans l'immédiat, l'accès via l'applicatif en ligne est toujours possible.

### Organisation du contenu de vos adresses e-mail suite à une migration <a name="content-after-migration"></a>

Lorsque vous vous connectez pour la première fois sur votre nouveau compte e-mail, le contenu migré peut être partiellement caché. Pour afficher l'ensemble des éléments, depuis le webmail, cliquez sur le chevron à côté de la `Boîte de réception` pour révéler les sous-dossiers. Le contenu migré de votre ancien compte e-mail devrait apparaitre.

![exchange](images/owa_migrate_content.png){.thumbnail}

Les dossiers par défaut, comme « éléments envoyés » ou « corbeille » apparaissent en anglais (« Sent items » et « Trash »), à l'exception des dossiers que vous avez créés.

Après une migration, n'hésitez pas à explorer l'ensemble des dossiers et sous-dossiers de votre compte pour vérifier que tous les éléments sont présents.

### Migrer Manuellement

Vous pouvez également migrer manuellement vos adresses e-mail vers votre nouvelle offre e-mail OVHcloud en utilisant uniquement votre logiciel de messagerie. Appuyez-vous de notre guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration). Nous vous préconisons toutefois de n'utiliser cette méthode que lorsque les méthodes principales ne sont pas possibles.

## Aller plus loin

[Guides Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
