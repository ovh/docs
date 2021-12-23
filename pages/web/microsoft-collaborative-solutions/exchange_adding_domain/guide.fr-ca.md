---
title: Ajouter un nom de domaine sur son service Exchange
slug: ajouter-domaine-exchange
excerpt: Découvrez comment ajouter un nom de domaine à votre service Exchange
section: Premiers pas avec Exchange
order: 4
---

**Dernière mise à jour le 2018/10/05**

## Objectif

Ajouter un nom de domaine sur un service Exchange est indispensable afin de pouvoir utiliser vos comptes inclus dans ce dernier. Il est également possible d'ajouter plusieurs noms de domaine à un service Exchange. 

**Découvrez comment ajouter un nom de domaine à votre service Exchange.**

## Prérequis

- Disposer d'une [solution Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/){.external}.
- Disposer d'un ou plusieurs noms de domaine.
- Être en mesure de pouvoir modifier la configuration de votre nom de domaine (sa zone DNS).
- Être connecté à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois votre service Exchange créé et disponible, vous pouvez le gérer depuis votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action} dans la barre de services à gauche. Sélectionnez enfin le nom du service Exchange concerné.

> [!primary]
>
> Le nom d'un service Exchange dans votre espace client OVH débute par **hostedbhs-**, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service Exchange Hébergé installé, 2 pour le deuxième, etc.).
>

### Étape 2 : ajouter un nom de domaine

Pour ajouter un nom de domaine, cliquez sur l'onglet `Domaine associés`{.action}. Le tableau affiche les noms de domaine actuellement associés à votre service Exchange. Pour en ajouter un nouveau, cliquez sur le bouton `Ajouter un domaine`{.action}.

> [!warning]
>
> Toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander une nouvelle [solution Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/){.external} pour le ou les noms de domaine concernés.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Sur la fenêtre d'ajout de domaine, saisissez le nom de domaine que vous souhaitez ajouter. Vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![Exchange](images/add_domain_exchange_step2-ca.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration des modes et du nom de domaine. Le choix du mode n'est pas définitif et peut être modifié depuis l'espace client OVH par la suite.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement la solution Exchange avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service Exchange.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution Exchange conjointement à une autre solution e-mail. Vous devrez renseigner le serveur de votre autre solution e-mail.|

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![Exchange](images/add_domain_exchange_step3-ca.png){.thumbnail}

En fin de configuration, nous vous invitons à vérifier les informations qui s'affichent, puis à cliquer sur le bouton `Valider`{.action} pour confirmer l'ajout du domaine. Réalisez cette étape autant de fois que nécessaire si vous souhaitez ajouter plusieurs noms de domaine.

### Étape 3 : configurer le nom de domaine (DNS)

Une fois le nom de domaine ajouté en tant que domaine associé, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service Exchange. Une pastille de couleur rouge indique que le nom de domaine n'est pas correctement configuré.

Cliquez sur la pastille de couleur rouge `CNAME`{.action} pour récupérer les informations nécessaires. Le champ CNAME apparaît dans la fenêtre. Vous devez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine. Une fois ajouté, un temps de propagation de 4 à 24 heures maximum est nécessaire afin que la manipulation soit pleinement effective.

![Exchange](images/add_domain_exchange_step4-ca.png){.thumbnail}

Pour vérifier que la configuration du champ CNAME est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service Exchange. Si la pastille est à présent verte, le nom de domaine est correctement ajouté.

Dans le cas où la pastille est de couleur rouge, cliquez dessus puis réalisez les modifications depuis l’interface vous permettant de gérer la configuration de votre nom de domaine.

Pour vérifier que la configuration d'un nom de domaine est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre service Exchange. Si la pastille est à présent verte, le nom de domaine est correctement configuré. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![Exchange](images/add_domain_exchange_step5-ca.png){.thumbnail}

### Étape 4 : configurer et utiliser les comptes

Maintenant que vous avez ajouté les noms de domaine souhaités à votre service Exchange, vous pouvez à présent configurer vos comptes Exchange avec ces derniers. Cette manipulation s'effectue depuis l'onglet `Comptes courriel`{.action}. Si besoin, vous pouvez commander des comptes supplémentaires grâce au bouton `Commander des comptes`{.action} ou `Ajouter un compte`{.action}.

Pour rappel, toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent.

Une fois les comptes totalement configurés, il ne vous reste plus qu’à les utiliser. Pour cela, OVH met à votre disposition le *webmail* **Outlook Web Application** (OWA) accessible à l’adresse <https://ex.mail.ovh.ca/>. Pour une utilisation optimale de votre adresse Exchange sur un logiciel, assurez-vous de sa bonne compatibilité avec le service. Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, ou obtenir de l'aide concernant les fonctionnalités d'Exchange, consultez nos documentations accessibles depuis ce portail : <https://docs.ovh.com/ca/fr/microsoft-collaborative-solutions/>.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.