---
title: Créer et utiliser un compte partagé
slug: exchange-utilisation-des-comptes-partages
excerpt: Ajouter et utiliser les comptes partages avec votre offre Exchange.
section: Fonctionnalités des comptes Exchange
order: 5
---

**Dernière mise à jour le 15/06/2021**


## Objectif

Les comptes partagés sont accessibles depuis OWA (webmail Exchange) ou via le logiciel de messagerie Outlook grâce à une délégation. Ce type de compte vous permet par exemple de créer une boîte générale à laquelle chaque compte Exchange peut avoir accès. Un compte partagé ne possède pas de mot de passe, il est donc nécessaire de déléguer son accès à un ou plusieurs comptes de la plateforme Exchange.

**Découvrez comment créer et gérer un compte partagé sur votre plateforme Exchange.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir souscrit une offre [Exchange OVHcloud](https://www.ovh.com/fr/emails/hosted-exchange).

## En pratique

### Ajouter un compte partagé

Connectez-vous  à votre [espace client OVHcloud ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Accédez à la section « Web » et sélectionnez votre service Exchange dans la colonne figurant sous `Microsoft`{.action} puis `Exchange`{.action} située sur le côté gauche. 

Sélectionnez l’onglet `Comptes partagés`{.action} dans le menu horizontal et cliquez `Ajouter un compte partagé`{.action}.

![emails](images/exchange-shared_accounts01.png){.thumbnail}

Renseignez les champs demandés :

|Fonction|Description|
|---|---|
|Compte e-mail|choisissez le nom de votre compte partagé. **Il ne doit pas s'agir d'une adresse e-mail existante.**|
|Quota|indiquez le quota souhaité pour votre compte partagé. Le quota maximal est de **10 Go pour l'ensemble de vos comptes partagés**.|
|Nom à afficher|Le nom d'affichage que vous souhaitez faire apparaître lors d'un envoi depuis votre compte partagé.|
|Cacher l'adresse dans l'annuaire|Cacher l’adresse dans l’annuaire permet que l’adresse du groupe ne soit pas visible dans la liste des adresses du service Exchange.|


Cliquez ensuite sur `Suivant`{.action} pour accéder au récapitulatif. Finalisez l'opération en cliquant sur `Valider`{.action}.

![emails](images/exchange-shared_accounts02.png){.thumbnail}


### Gérer la délégation d'un compte partagé

Une fois votre compte partagé créé, il est nécessaire de déléguer son accès à un ou plusieurs comptes de votre plateforme.

Un compte partagé n'est pas directement accessible car celui-ci ne possède pas de mot de passe. Il n'est donc pas configurable directement dans un client type Outlook ou accessible depuis le webmail.

Une délégation doit nécessairement être mise en place entre un compte et le compte partagé.

Depuis l’onglet `Comptes partagés`{.action} de votre palteforme Exchange, cliquez sur le bouton `...`{.action} devant le compte partagé, puis cliquez sur  `Configurer les délégations`{.action}.

![emails](images/exchange-shared_accounts03.png){.thumbnail}

Cliquez sur le bouton `...`{.action} à droite de votre compte puis **"Configurer les délégations"**. Vous pourrez ensuite choisir dans votre liste de compte, ceux qui auront la possibilité d'accéder au compte partagé.

Choisissez les actions possibles sur le compte sélectionné :

|Fonction|Description|
|---|---|
|Droit d’envoi|Permet de réaliser un envoi depuis le compte e-mail « en tant que » l'adresse e-mail partagée.|
|Droit d’envoyer de la part|Permet de réaliser un envoi « de la part de » l'adresse e-mail partagée depuis l'adresse e-mail sur laquelle vous êtes connecté.|
|Droit d’accès|Autorise le compte e-mail à afficher et gérer le compte partagé depuis OWA (webmail) ou Outlook.|

![emails](images/exchange-shared_accounts04.png){.thumbnail}

Dans notre exemple, nous permettons aux comptes **guide-exchange@** et **test@** d'avoir accès au compte partagé, **guide-exchange@** aura aussi le droit d'envoyer « en tant que » et **test@** d'envoyer « de la part de » .

Cliquez ensuite sur `Suivant`{.action} et `Valider`{.action} pour enregistrer les modifications. 

### Utilisation du compte partagé depuis OWA (webmail)

Connectez-vous au webmail Exchange (OWA) à l'adresse <https://www.ovh.com/fr/mail/> avec un compte ayant le droit d'accès au compte partagé. Dans notre exemple nous nous connectons avec le compte **guide-exchange@**.

Une fois connecté, dans la colonne de gauche, faites un clic droit sur l'arborescence principale de votre adressee-mail puis `Ajouter un dossier partagé`{.action}. 

![emails](images/exchange-shared_accounts05.png){.thumbnail}

Saisissez ensuite le nom de votre compte partagé.puis cliquez sur `ajouter`{.action} lorsque celui-ci a été trouvé dans l'annuaire exchange.

![emails](images/exchange-shared_accounts06.png){.thumbnail}


Votre compte partagé est maintenant accessible depuis le compte **guide-exchange@**.


![emails](images/exchange-shared_accounts07.png){.thumbnail}


![emails](images/1351.png){.thumbnail}

### Utilisation du compte partagé depuis Outlook

Depuis votre logiciel Outlook, vous retrouverez votre compte partagé dans la colonne de gauche, de la même façon que sur le webmail

![emails](images/exchange-shared_accounts10.png){.thumbnail}

## Aller plus loin

[Consulter son compte Exchange depuis l’interface OWA](../exchange-2016-guide-utilisation-outlook-web-app/)

[Déléguer des permissions sur un compte Exchange](../exchange-donner-les-droits-full-access-sur-un-compte/)

[Partager un calendrier via le webmail OWA](../exchange-2016-partager-un-calendrier-via-le-webmail-owa/)

[Ajouter un pied de page pour vos comptes Exchange](../exchange-signature-automatique-disclaimer/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.