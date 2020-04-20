---
title: Premiers pas avec le service Hosted Exchange
slug: premiere-configuration-exchange
excerpt: Débutez avec un service Hosted Exchange
section: Premiers pas avec Exchange
order: 1
---

**Dernière mise à jour le 09/01/2018**

## Objectif

Le service Hosted Exchange permet de bénéficier d’adresses e-mail professionnelles facilitant le travail collaboratif grâce à des fonctionnalités comme la synchronisation du calendrier et celle des contacts.

**Découvrez comment débuter avec votre service Hosted Exchange.**

## Prérequis

- Avoir souscrit une offre [Hosted Exchange](https://www.ovh.com/fr/emails/hosted-exchange/){.external}.
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution Hosted Exchange.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois votre service Hosted Exchange créé et disponible, vous pouvez le gérer depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action} dans la barre de services à gauche. Cliquez enfin sur le nom du service Hosted Exchange concerné.

> [!primary]
>
> Le nom d'un service Hosted Exchange dans votre espace client OVH débute par **hosted-**, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service Hosted Exchange installé, 2 pour le deuxième, etc.).
>

### Étape 2 : effectuer la première configuration du service

Votre service n'ayant encore jamais été utilisé, vous allez devoir réaliser sa première configuration. Celle-ci vous permettra par la suite de pouvoir utiliser vos nouvelles adresses e-mail Exchange.

Pour ce faire, en accédant pour la première fois à la gestion de votre service Hosted Exchange, un assistant de configuration s'affichera. Pour débuter, cliquez sur le bouton `Commencer`{.action}.

Cet assistant de configuration vous permet plusieurs manipulations. Selon votre situation, le tableau suivant peut rendre facultatives certaines étapes de ce guide.

|Manipulation|Description|
|---|---|
|Choix du nom de domaine|Déterminez le nom de domaine qui sera utilisé pour vos adresses e-mail Exchange. Ce dernier est l'un des éléments constituant votre adresse e-mail (comme contact@mypersonaldomain.ovh par exemple).|
|Configuration du nom de domaine|Le nom de domaine renseigné sera automatiquement configuré si ce dernier est géré par OVH sur le même identifiant client que votre Exchange. Dans le cas contraire, vous devrez réaliser sa configuration manuellement.|
|Configuration des comptes Exchange|Déterminez le nom de vos adresses e-mail Exchange et ajoutez des informations complémentaires.|
|Migration de données (si applicable)|Si vous êtes engagé dans un processus de migration de vos adresses e-mail depuis l'une des solutions OVH (MX Plan ou E-mail Pro), vous avez la possibilité d'initier cette migration depuis cet assistant. Si vous utilisez un logiciel de messagerie, il vous faudra également configurer de nouveau vos comptes.|

### Étape 3 : ajouter des domaines additionnels (facultatif)

Une fois la première configuration de votre domaine terminée, vous pouvez également configurer des noms de domaines additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait via l'assistant.

> [!warning]
>
> Toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander un nouveau service Hosted Exchange pour le ou les noms de domaine concernés.
>

Pour ajouter un nouveau nom de domaine, sélectionnez le service Hosted Exchange concerné dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et cliquez sur l'onglet `Domaines associés`{.action}. Le tableau affiche les noms de domaines actuellement configurés ou en passe de l'être sur votre service. Pour en ajouter de nouveaux, cliquez sur le bouton `Ajouter un domaine`{.action}, puis suivez les différentes étapes du processus.

Pour en apprendre plus, vous pouvez consulter la documentation intitulée [Ajouter un nom de domaine sur son service Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/ajouter-domaine-exchange/){.external}.

> [!primary]
>
> Si un nom de domaine requiert une action particulière concernant sa configuration, une pastille rouge s'affiche dans la colonne `Diagnostic`{.action} du tableau. En cliquant dessus, les modifications à effectuer s'afficheront. Si ce nom de domaine n’utilise pas la configuration d’OVH (ses serveurs DNS), vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine. 
>

![Ajout d'un domaine](images/first-steps-hosted-exchange-add-domain.png){.external}


### Étape 4 : configurer des comptes Exchange supplémentaires (facultatif)

Vous pouvez configurer des comptes additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait via l'assistant.

Pour cela, cliquez sur le service Hosted Exchange concerné dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, puis sur l'onglet `Comptes e-mail`{.action}. Le tableau affiche les comptes actuellement configurés ou en attente de l'être sur votre service.

Les comptes en attente de configuration s'affichent dans le tableau sous la forme “*@configureme.me*”. Pour les configurer, cliquez sur le logo en forme de crayon, puis suivez les étapes.

> [!primary]
>
> Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition. Vous pouvez en commander de nouveaux grâce au bouton `Commander des comptes`{.action}.
>

![Ajout d'un compte](images/first-steps-hosted-exchange-add-account.png){.external}

### Étape 5 : utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne reste plus qu’à les utiliser. Pour cela, OVH met à disposition le webmail **Outlook Web Application** (OWA). Ce dernier est accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Pour y accéder, vous devez y renseigner les identifiants relatifs à votre adresse e-mail. Si vous souhaitez obtenir de l'aide sur l'utilisation de OWA, consultez notre documentation disponible sur ce lien : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, consultez notre documentation accessible depuis ce portail : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}. Pour une utilisation optimale de votre adresse Exchange sur un logiciel, assurez-vous de sa bonne compatibilité avec le service.

OVH propose des licences Outlook dans l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, ainsi que des licences Office 365 sur la page [https://www.ovh.com/fr/office-365/](https://www.ovh.com/fr/office-365/){.external}. Nous vous recommandons l'une de ces solutions si vous souhaitez bénéficier du logiciel de messagerie Outlook ou de plus de logiciels de la suite Office, selon vos besoins.

> [!primary]
>
> Exchange permet une synchronisation complète de vos paramètres (filtres, signatures, dossiers, etc.), que vous utilisiez une application web ou un logiciel de messagerie compatible.
> Ainsi, si vous utilisez Exchange sur trois appareils et via des moyens de connexion différents (webmail, logiciel de messagerie ou client compatibles), toutes vos informations seront disponibles en même temps.
>

### Étape 6 : paramétrer les fonctions collaboratives (facultatif)

Maintenant que votre service Hosted Exchange est configuré et fonctionnel, vous pouvez mettre en place les fonctionnalités collaboratives inhérentes au service dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Celles-ci peuvent vous donner la possibilité de créer des ressources (salles de réunion, équipements, etc.), mais aussi des groupes, entre autres.

Pour activer ces différentes fonctions, sélectionnez le service Hosted Exchange concerné dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, puis choisissez parmi les onglets qui s'affichent l'action à effectuer.

Pour obtenir de l'aide sur l'une des fonctionnalités, consultez notre documentation accessible depuis ce portail : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

![Fonctions collaboratives](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.