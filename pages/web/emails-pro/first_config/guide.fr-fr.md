---
title: 'Configurer sa solution E-mail Pro'
slug: premiere-configuration
excerpt: 'Découvrez comment réaliser la configuration de votre solution E-mail Pro'
section: Général
---

**Dernière mise à jour le 22/08/2018**

## Objectif

Vous venez d’acquérir une solution E-mail Pro. Celle-ci vous permet de bénéficier d'adresses e-mail professionnelles au prix le plus juste pour soutenir ou commencer votre activité.

**Découvrez comment réaliser la configuration de votre solution E-mail Pro.**

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external}.
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution E-mail Pro.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois le service E-mail Pro créé et disponible, vous pouvez le gérer depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `E-mail Pro`{.action} dans la barre de services à gauche, puis choisissez le nom du service concerné.

> [!primary]
>
> Le nom d'un service E-mail Pro dans votre espace client OVH débute par *emailpro-*, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service E-mail Pro installé, 2 pour le deuxième, etc.).
>

### Étape 2 : ajouter votre nom de domaine

Si vous venez juste de commander votre service E-mail Pro, une fenêtre s'affiche automatiquement vous invitant à `Ajouter un domaine`{.action}. Si cette dernière ne s'affiche pas, rendez-vous sur l'onglet `Domaines associés`{.action} puis cliquez sur le bouton `Ajouter un domaine`{.action}.

Vous devrez choisir de :

- **sélectionner un domaine dans la liste** : seuls les domaines utilisant la configuration OVH et renseignés en tant que contact à votre identifiant client s'affichent ;
- **saisir un nom de domaine non géré par votre compte OVH** : vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service E-mail Pro puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration d'un mode.

- **Si vous avez renseigné un nom de domaine non géré par OVH** : le mode non-autoritatif sera configuré par défaut.
- **Si vous avez sélectionné dans la liste un nom de domaine géré par OVH** : vous devrez choisir entre deux modes.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement la solution E-mail Pro avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service E-mail Pro.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution E-mail Pro conjointement à une autre solution e-mail.| 

> [!primary]
>
> Le choix du mode n'est pas définitif, il peut être modifié depuis l'espace client OVH par la suite.
>

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Si vous avez sélectionné dans la liste un nom de domaine géré par OVH**, la configuration de ce dernier peut être réalisée automatiquement. Pour ce faire, cochez les cases et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

**Si vous avez renseigné un nom de domaine non géré par OVH** , la configuration devra être réalisée durant l'étape suivante.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

En fin de configuration, nous vous invitons à vérifier les informations qui s'affichent puis à cliquer sur le bouton `Confirmer`{.action} pour lancer l'ajout du domaine.

### Étape 3 : configurer votre nom de domaine

Une fois le nom de domaine ajouté en tant que domaine associé, vérifiez son paramétrage grâce au tableau qui s'affiche.

La colonne `Diagnostic`{.action} vous permet de contrôler la configuration des champs MX du nom de domaine. Une pastille rouge apparaîtra si ces paramètres doivent être modifiés.

- **Si vous avez choisi une configuration automatique lors de l'ajout du domaine** : l’affichage dans l’espace client OVH peut prendre quelques heures.
- **Si vous avez renseigné un nom de domaine non géré par OVH** : cliquez sur la pastille rouge afin de découvrir les modifications à réaliser. Si vous venez juste de les effectuer, l’affichage dans l’espace client OVH peut prendre quelques heures.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

Même si cela est facultatif, vous avez également la possibilité d'ajouter un champ SRV à la configuration de votre nom de domaine. Il devrait permettre à un logiciel de messagerie ou à un autre appareil, comme un _smartphone_ ou une tablette, de récupérer automatiquement les éléments nécessaires pour configurer votre compte E-mail Pro (serveurs, ports et protocoles de sécurité).

Si vous ne souhaitez pas en bénéficier, allez directement à l'étape 4. Dans le cas contraire, ajoutez le champ SRV depuis l’interface du prestataire gérant la configuration de votre nom de domaine. S'il s'agit d'OVH, reportez-vous aux instructions décrites dans notre documentation « [Éditer une zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external} » en utilisant les éléments ci-dessous :

|Domaine|Type d'enregistrement|Priorité|Poids|Port|Cible|
|---|---|---|---|---|
|_autodiscover._tcp.*mypersonaldomain.ovh*_|SRV|0|0|443|autodiscover.mail.ovh.net.|

N'oubliez pas de remplacer l’information générique « mypersonaldomain.ovh » par votre nom de domaine.

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
|Mot de passe et confirmation|Définissez un mot de passe et confirmez-le.| 

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}, vérifiez les informations affichées, puis cliquez sur `Confirmer`{.action} pour initier la configuration du compte.

> [!primary]
>
> Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition. Vous pouvez commander des comptes additionnels grâce au bouton `Commander des comptes`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Étape 5 : utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne vous reste plus qu'à les utiliser ! Pour cela, OVH met à disposition un applicatif en ligne (une *webapp*). Ce dernier est accessible à l’adresse <https://pro1.mail.ovh.net> et vous devrez y renseigner les identifiants relatifs à votre adresse e-mail.

Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un appareil, comme un _smartphone_ ou une tablette, consultez nos documentations depuis ce portail : <https://docs.ovh.com/fr/emails-pro/>. Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre compte E-mail Pro, retrouvez ci-dessous les paramètres à utiliser :

|Type de serveur|Nom du serveur|Type de sécurité|Port|
|---|---|---|---|
|Entrant|pro1.mail.ovh.net|SSL/TLS|993|
|Sortant|pro1.mail.ovh.net|STARTTLS|587|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.