---
title: 'Premiers pas avec la solution E-mail Pro'
slug: premiere-configuration
excerpt: 'Découvrez comment réaliser la configuration de votre solution E-mail Pro'
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 07/04/2020**

## Objectif

Vous venez d’acquérir une solution E-mail Pro. Celle-ci vous permet de bénéficier d'adresses e-mail professionnelles au prix le plus juste pour soutenir ou commencer votre activité.

**Découvrez comment réaliser la configuration de votre solution E-mail Pro.**

## Prérequis

- Disposer d'une offre [E-mail Pro]({ovh_www}/emails/email-pro/){.external}.
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution E-mail Pro.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois le service E-mail Pro créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `E-mail Pro`{.action} dans la barre de services à gauche, puis choisissez le nom du service concerné.

> [!primary]
>
> Le nom d'un service E-mail Pro dans votre espace client OVHcloud débute par *emailpro-*, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service E-mail Pro installé, 2 pour le deuxième, etc.).
>

### Étape 2 : ajouter votre nom de domaine

Après la commande de votre service E-mail Pro, une fenêtre s'affiche automatiquement vous invitant à `Ajouter un domaine`{.action}. Si cette dernière ne s'affiche pas, rendez-vous sur l'onglet `Domaines associés`{.action} puis cliquez sur le bouton `Ajouter un domaine`{.action}.

Deux choix sont possibles :

- **sélectionner un domaine dans la liste** : seuls s'affichent les noms de domaines dont vous avez la gestion dans votre espace client OVHcloud;
- **saisir un nom de domaine non géré par votre compte OVHcloud** : vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service E-mail Pro puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration d'un mode.

- **Pour un nom de domaine non géré par OVHcloud** : le mode non-autoritatif sera configuré par défaut.
- **Pour un nom de domaine géré par OVHcloud** : vous devrez choisir entre deux modes.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement la solution E-mail Pro avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service E-mail Pro.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution E-mail Pro conjointement à une autre solution e-mail.| 

> [!primary]
>
> Le choix du mode n'est pas définitif, il peut être modifié depuis l'espace client OVHcloud par la suite.
>

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Si vous avez sélectionné un nom de domaine géré par OVHcloud**, la configuration de ce dernier peut être réalisée automatiquement. Pour ce faire, cochez les cases souhaitées et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

- **SRV** : enregistrement DNS permettant la configuration automatique de votre logiciel de messagerie lorsque vous y ajoutez votre adresse e-mail.
- **MX** : enregistrement DNS des serveurs e-mail nécessaire à la réception des e-mails sur le nom de domaine concerné.

**Pour un nom de domaine non géré par OVHcloud**, suivez l'étape 3.

En fin de configuration, vérifiez les informations qui s'affichent puis cliquez sur le bouton `Confirmer`{.action} pour lancer l'ajout du domaine.

### Étape 3 : configurer votre nom de domaine

Une fois le nom de domaine ajouté en tant que domaine associé, vérifiez son paramétrage grâce au tableau qui s'affiche.

La colonne `Diagnostic`{.action} vous permet de contrôler la configuration DNS du nom de domaine. Une pastille rouge apparaîtra si ces paramètres doivent être modifiés. Il y a deux possibilités:

- **Configuration automatique lors de l'ajout d'un nom de domaine OVHcloud** : si vous venez juste d'effectuer la modification, l’affichage dans [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} peut prendre quelques heures.

- **Configuration manuelle pour nom de domaine non géré par OVHcloud** : cliquez sur la pastille rouge afin de découvrir les modifications à réaliser. <br>*Pour un enregistrement CNAME*, aidez-vous de notre guide « [Créer un champ CNAME à l’ajout d’un domaine associé](../../microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/) ». <br>*Pour un enregistrement MX*, aidez-vous de notre guide « [Ajouter un champ MX à la configuration de son nom de domaine](../../domains/mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh/) ». <br>*Pour un enregistrement SRV*, complétez votre zone DNS à l'aide des informations données lorsque vous cliquez sur la pastille rouge. Vous pouvez vous aider du guide « [Éditer une zone DNS OVH](../../domains/editer-ma-zone-dns/) » pour ajouter cet enregistrement.

![emailpro](images/first_config_email_pro_configure_domain_update.png){.thumbnail}

### Étape 4 : configurer les comptes E-mail Pro

Pour configurer vos adresses e-mail, positionnez-vous sur l'onglet `Comptes e-mail`{.action}. Le tableau affiche les comptes que vous avez commandés sous la forme “*@configureme.me*”.

Pour les configurer, cliquez sur le logo en forme de crayon.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Complétez les informations qui s'affichent.

|Intitulé|Description|
|---|---|
|Compte e-mail|Renseignez le nom que portera votre adresse e-mail (votre prénom.nom, par exemple) et sélectionnez le domaine concerné dans la liste.|
|Prénom|Renseignez un prénom.|
|Nom|Renseignez un nom.|
|Nom à afficher|Renseignez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.|
|Mot de passe et confirmation|Définissez un mot de passe fort composé d'au minimum 8 caractères et comprenant au moins une majuscule, une minuscule, un chiffre.| 

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}, vérifiez les informations affichées puis cliquez sur `Confirmer`{.action} pour initier la configuration du compte.

> [!primary]
>
> Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition. Vous pouvez commander des comptes additionnels grâce au bouton `Commander des comptes`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Étape 5 : utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne vous reste plus qu'à les utiliser ! Pour cela, OVHcloud met à disposition un applicatif en ligne (une *webapp*). Ce dernier est accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external} et vous devrez y renseigner les identifiants relatifs à votre adresse e-mail.

Pour configurer votre adresse e-mail sur un logiciel de messagerie ou un appareil, comme un _smartphone_ ou une tablette, [aidez-vous de nos guides de configuration](../). Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre compte E-mail Pro, retrouvez ci-dessous les paramètres à utiliser :

|Type de serveur|Nom du serveur|Type de sécurité|Port|
|---|---|---|---|
|Entrant|pro**X**.mail.ovh.net|SSL/TLS|993|
|Sortant|pro**X**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**X**.mail.ovh.net. Vous devrez remplacer le « X » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `E-mail Pro`{.action}
>  dans la colonne de gauche. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.