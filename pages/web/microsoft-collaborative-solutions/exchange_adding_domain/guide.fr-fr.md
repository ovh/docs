---
title: Ajouter un nom de domaine sur son service Exchange
slug: ajouter-domaine-exchange
excerpt: Découvrez comment ajouter un nom de domaine à votre service Exchange
section: Premiers pas avec Exchange
order: 4
---

**Dernière mise à jour le 09/01/2018**

## Objectif

Ajouter un nom de domaine sur un service Exchange est indispensable afin de pouvoir utiliser vos comptes inclus dans ce dernier. Il est également possible d'ajouter plusieurs noms de domaine à un service Exchange. 

**Découvrez comment ajouter un nom de domaine à votre service Exchange.**

## Prérequis

- Disposer d'une [solution Exchange](https://www.ovh.com/fr/emails/){.external}.
- Disposer d'un ou plusieurs noms de domaine.
- Être en mesure de pouvoir modifier la configuration de votre nom de domaine (sa zone DNS).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois votre service Exchange créé et disponible, vous pouvez le gérer depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action} dans la barre de services à gauche. Sélectionnez enfin le nom du service Exchange concerné.

> [!primary]
>
> Le nom d'un service Exchange dans votre espace client OVH débute par **hosted-** ou **private-**, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service Hosted ou Private Exchange installé, 2 pour le deuxième, etc.).
>

### Étape 2 : ajouter un nom de domaine

Pour ajouter un nom de domaine, cliquez sur l'onglet `Domaine associés`{.action}. Le tableau affiche les noms de domaine actuellement associés à votre service Exchange. Pour en ajouter un nouveau, cliquez sur le bouton `Ajouter un domaine`{.action}.

> [!warning]
>
> Toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander une nouvelle [solution Exchange](https://www.ovh.com/fr/emails/){.external} pour le ou les noms de domaine concernés.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Sur la fenêtre d'ajout de domaine, vous devrez choisir de :

- **sélectionner un domaine dans la liste** : seuls les noms de domaine utilisant la configuration OVH et renseignés en tant que contacts dans votre identifiant client s'affichent ;

- **saisir un nom de domaine non géré par votre compte OVH** : vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration des modes.

- **Si vous avez renseigné un nom de domaine non géré par OVH** : le mode non-autoritatif sera configuré par défaut.

- **Si vous avez sélectionné dans la liste un nom de domaine géré par OVH** : vous devrez choisir entre deux modes.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement la solution Exchange avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service Exchange.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution Exchange conjointement à une autre solution e-mail. Vous devrez renseigner le serveur de votre autre solution e-mail.|

> [!primary]
>
> Le choix du mode n'est pas définitif et peut être modifié depuis l'espace client OVH par la suite.
>

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Si vous avez sélectionné un nom de domaine géré par OVH dans la liste**, la configuration de ce dernier peut être réalisée automatiquement. Pour cela, cochez les cases et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

**Si vous avez renseigné un nom de domaine non géré par OVH** , la configuration devra être réalisée durant l'étape suivante.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

En fin de configuration, nous vous invitons à vérifier les informations qui s'affichent, puis à cliquer sur le bouton `Confirmer`{.action} pour valider l'ajout du domaine. Réalisez cette étape autant de fois que nécessaire si vous souhaitez ajouter plusieurs noms de domaine.

### Étape 3 : configurer le nom de domaine (DNS)

Une fois le nom de domaine ajouté en tant que domaine associé, assurez-vous que la configuration de ce dernier est correcte grâce au tableau qui s'affiche. Une pastille de couleur verte indique que le nom de domaine est correctement configuré. Dans le cas où la pastille est de couleur rouge :

- **si vous avez choisi une configuration automatique lors de l'ajout du domaine** : l’affichage dans l’espace client OVH peut prendre quelques instants pour s'actualiser ;

- **si vous avez renseigné un nom de domaine non géré par OVH** : cliquez sur la pastille de couleur rouge pour afficher les modifications que vous devez réaliser. Si ce nom de domaine n’utilise pas la configuration d’OVH (ses serveurs DNS), vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre nom de domaine. Dans le cadre d'un paramétrage CNAME, vous pouvez en apprendre plus depuis la documentation intitulée [Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/){.external}.

> [!primary]
>
> La modification de la configuration d'un nom de domaine nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

Pour vérifier que la configuration d'un nom de domaine est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service Exchange. Si la pastille est à présent verte, le nom de domaine est correctement configuré. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Étape 4 : configurer et utiliser les comptes

Maintenant que vous avez ajouté les noms de domaine souhaités à votre service Exchange, vous pouvez à présent configurer vos comptes Exchange avec ces derniers. Cette manipulation s'effectue depuis l'onglet `Comptes e-mail`{.action}. Si besoin, vous pouvez commander des comptes supplémentaires grâce au bouton `Commander des comptes`{.action} ou `Ajouter un compte`{.action}.

Pour rappel, toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent.

Une fois les comptes totalement configurés, il ne vous reste plus qu’à les utiliser. Pour cela, OVH met à votre disposition le *webmail* **Outlook Web Application** (OWA) accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Pour une utilisation optimale de votre adresse Exchange sur un logiciel, assurez-vous de sa bonne compatibilité avec le service. Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, ou obtenir de l'aide concernant les fonctionnalités d'Exchange, consultez nos documentations accessibles depuis ce portail : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

Il est possible d'acquérir des licences Outlook dans l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et des licences Office 365 sur la page [https://www.ovh.com/fr/office-365/](https://www.ovh.com/fr/office-365/){.external}. Nous vous recommandons l'une de ces solutions si vous souhaitez bénéficier du logiciel de messagerie Outlook ou de plus de logiciels de la suite Office, selon vos besoins.

## Aller plus loin

[Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.