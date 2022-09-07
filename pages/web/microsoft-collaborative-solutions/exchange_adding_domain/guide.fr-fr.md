---
title: Ajouter un nom de domaine sur son service Exchange
slug: ajouter-domaine-exchange
excerpt: Découvrez comment ajouter un nom de domaine à votre service Exchange
section: Premiers pas avec Exchange
order: 4
---

**Dernière mise à jour le 06/01/2022**

## Objectif

Ajouter un nom de domaine sur un service Exchange est indispensable afin de pouvoir utiliser vos comptes inclus dans ce dernier. Il est également possible d'ajouter plusieurs noms de domaine à un service Exchange.

**Découvrez comment ajouter un nom de domaine à votre service Exchange.**

## Prérequis

- Disposer d'une solution [Exchange](https://www.ovhcloud.com/fr/emails/) ou [Email Pro](https://www.ovhcloud.com/fr/emails/email-pro/)).
- Disposer d'un ou plusieurs noms de domaine.
- Être en mesure de pouvoir modifier la configuration de votre nom de domaine ([zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Accéder à la gestion de votre service

Une fois votre service Exchange ou E-mail Pro créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Dans la section `Web Cloud`{.action}:

- **Exchange**: Cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. 
- **Email Pro**: Cliquez sur `Email Pro`{.action}.

Sélectionnez enfin le nom du service concerné.

### Ajouter un nom de domaine

Pour ajouter un nom de domaine, cliquez sur l'onglet `Domaine associés`{.action}. Le tableau affiche les noms de domaine actuellement associés à votre service. Pour en ajouter un nouveau, cliquez sur le bouton `Ajouter un domaine`{.action}.

> [!warning]
>
> Toutes les adresses créées sur votre service e-mail e seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander une nouvelle [solution Exchange](https://www.ovhcloud.com/fr/emails/) pour le ou les noms de domaine concernés.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Sur la fenêtre d'ajout de domaine, vous devrez choisir de :

- **sélectionner un domaine dans la liste** : seuls les noms de domaine utilisant la configuration OVHcloud et renseignés en tant que contacts dans votre identifiant client s'affichent ;

- **saisir un nom de domaine non géré par votre compte OVHcloud** : vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![Exchange](images/add_domain_exchange_step2.png#center){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration des modes.

- **Si vous avez renseigné un nom de domaine non géré par OVHcloud** : le mode non-autoritatif sera configuré par défaut.

- **Si vous avez sélectionné dans la liste un nom de domaine géré par OVHcloud** : vous devrez choisir entre deux modes.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement votre solution Exchange ou E-mail Pro avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution Exchange ou E-mail Pro conjointement à une autre solution e-mail. Vous devrez renseigner le serveur de votre autre solution e-mail.|

> [!primary]
>
> Le choix du mode n'est pas définitif et peut être modifié depuis l'espace client OVHcloud par la suite.
>

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Si vous avez sélectionné un nom de domaine géré par OVHcloud dans la liste**, la configuration de ce dernier peut être réalisée automatiquement. Pour cela, cochez les cases et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

**Si vous avez renseigné un nom de domaine non géré par OVHcloud** , la configuration devra être réalisée durant l'étape suivante.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

En fin de configuration, nous vous invitons à vérifier les informations qui s'affichent, puis à cliquer sur le bouton `Confirmer`{.action} pour valider l'ajout du domaine. Réalisez cette étape autant de fois que nécessaire si vous souhaitez ajouter plusieurs noms de domaine.

### Configurer le nom de domaine (DNS)

Une fois le nom de domaine ajouté en tant que domaine associé, assurez-vous que la configuration de ce dernier est correcte grâce au tableau qui s'affiche. Une pastille de couleur verte indique que le nom de domaine est correctement configuré. Dans le cas où la pastille est de couleur rouge :

- **si vous avez choisi une configuration automatique lors de l'ajout du domaine** : l’affichage dans l’espace client OVHcloud peut prendre quelques instants pour s'actualiser ;

- **si vous avez renseigné un nom de domaine non géré par OVHcloud** : cliquez sur la pastille de couleur rouge pour afficher les modifications que vous devez réaliser. Si ce nom de domaine n’utilise pas la configuration d’OVH (ses serveurs DNS), vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre nom de domaine. Dans le cadre d'un paramétrage CNAME, vous pouvez en apprendre plus depuis la documentation intitulée [Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/).

> [!primary]
>
> La modification de la configuration d'un nom de domaine nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

Pour vérifier que la configuration d'un nom de domaine est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service. Si la pastille est à présent verte, le nom de domaine est correctement configuré. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Configurer et utiliser les comptes

Maintenant que vous avez ajouté les noms de domaine souhaités à votre service, vous pouvez à présent configurer vos comptes e-mail avec ces derniers. Cette manipulation s'effectue depuis l'onglet `Comptes e-mail`{.action}. Si besoin, vous pouvez commander des comptes supplémentaires grâce au bouton `Action`{.action}/`Commander des comptes`{.action} ou `Ajouter un compte`{.action}.

Pour rappel, toutes les adresses créées sur votre service seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent.

Une fois les comptes totalement configurés, il ne vous reste plus qu’à les utiliser. Pour cela, OVHcloud met à votre disposition le **webmail** accessible à l’adresse <https://www.ovh.com/fr/mail/>. Pour une utilisation optimale de votre adresse sur un logiciel, assurez-vous de sa bonne compatibilité avec le service. Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, ou obtenir de l'aide concernant les fonctionnalités de votre service e-mail, consultez nos documentations accessibles depuis les pages [Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/) et [E-mail Pro](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

Il est possible d'acquérir des licences Outlook dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et des licences Office 365 sur la page [https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/). Nous vous recommandons l'une de ces solutions si vous souhaitez bénéficier du logiciel de messagerie Outlook ou de plus de logiciels de la suite Office, selon vos besoins.

### Supprimer un nom de domaine du service

Si vous souhaitez retirer un nom de domaine attaché à votre service Exchange ou E-mail Pro, il est necessaire de vérifier que celui-ci n'est pas lié à un ou plusieurs comptes. Dans ce cas il sera nécessaire de les supprimer.

> [!warning]
>
> Avant de supprimer un compte e-mail et le nom de domaine sur votre plateforme, assurez-vous qu'ils ne soient pas utilisés. Si vous devez effectuer une sauvegarde des comptes e-mail que vous devez supprimer, vous pouvez vous appuyer sur notre guide [Migrer manuellement votre adresse e-mail](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/) 


Dirigez-vous dans l'onglet `Domaine associés`{.action} de votre service, dans le tableau, vérifiez la colonne `Comptes`, celle-ci vous indiuqe le nombre de comptes associés au domaine de votre liste.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Si des comptes e-mail sont attachés au nom de domaine que vous devez supprimer de votre plateform, dirigez-vous vers l'onglet `Comptes e-mail`{.action}. À droite du compte à supprimer, cliquez sur le bouton `...`{.action}, puis `Réinitialiser ce compte`{.action} ou `Réinitialiser`{.action}

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

## Aller plus loin

[Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/)

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).