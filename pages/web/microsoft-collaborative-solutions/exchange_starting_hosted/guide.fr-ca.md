---
title: Premiers pas avec le service Exchange Hébergé
slug: premiere-configuration-exchange
excerpt: Débutez avec un service Exchange Hébergé
section: Premiers pas avec Exchange
order: 1
---

**Dernière mise à jour le 2018/10/05**

## Objectif

Le service Exchange Hébergé permet de bénéficier d’adresses e-mail professionnelles facilitant le travail collaboratif grâce à des fonctionnalités comme la synchronisation du calendrier et celle des contacts.

**Découvrez comment débuter avec votre service Exchange Hébergé.**

## Prérequis

- Avoir souscrit une offre [Exchange Hébergé](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/){.external}.
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution Exchange Hébergé.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois votre service Exchange Hébergé créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Cliquez enfin sur le nom du service Exchange Hébergé concerné.

> [!primary]
>
> Le nom d'un service Exchange Hébergé dans votre espace client OVHcloud débute par **hostedbhs-**, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service Exchange Hébergé installé, 2 pour le deuxième, etc.).
>

### Étape 2 : effectuer la première configuration du service

Votre service n'ayant encore jamais été utilisé, vous allez devoir réaliser sa première configuration. Celle-ci vous permettra par la suite de pouvoir utiliser vos nouvelles adresses e-mail Exchange.

Pour ce faire, en accédant pour la première fois à la gestion de votre service Exchange Hébergé, un assistant de configuration s'affichera. Pour débuter, cliquez sur le bouton `Commencer`{.action}.

Cet assistant de configuration vous permet plusieurs manipulations. Selon votre situation, le tableau suivant peut rendre facultatives certaines étapes de ce guide.

|Manipulation|Description|
|---|---|
|Choix du nom de domaine|Déterminez le nom de domaine qui sera utilisé pour vos adresses e-mail Exchange. Ce dernier est l'un des éléments constituant votre adresse e-mail (comme contact@mypersonaldomain.ovh par exemple).|
|Configuration du nom de domaine|Vous devrez réaliser sa configuration manuellement.|
|Configuration des comptes Exchange|Déterminez le nom de vos adresses e-mail Exchange et ajoutez des informations complémentaires.|

### Étape 3 : ajouter des domaines additionnels (facultatif)

Une fois la première configuration de votre domaine terminée, vous pouvez également configurer des noms de domaines additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait via l'assistant.

> [!warning]
>
> Toutes les adresses créées sur votre service Exchange seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander un nouveau service Exchange Hébergé pour le ou les noms de domaine concernés.
>

Pour ajouter un nouveau nom de domaine, sélectionnez le service Exchange Hébergé concerné dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et cliquez sur l'onglet `Domaines associés`{.action}. Le tableau affiche les noms de domaines actuellement configurés ou en passe de l'être sur votre service. Pour en ajouter de nouveaux, cliquez sur le bouton `Ajouter un domaine`{.action}, puis suivez les différentes étapes du processus.

Pour en apprendre plus, vous pouvez consulter la documentation intitulée [Ajouter un nom de domaine sur son service Exchange](https://docs.ovh.com/ca/fr/microsoft-collaborative-solutions/ajouter-domaine-exchange/){.external}.

> [!primary]
>
> Si un nom de domaine requiert une action particulière concernant sa configuration, une pastille rouge s'affiche dans la colonne `Diagnostic`{.action} du tableau. En cliquant dessus, les modifications à effectuer s'afficheront. Vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine. 
>

![Ajout d'un domaine](images/first-steps-hosted-exchange-add-domain.png){.external}

### Étape 4 : configurer des comptes Exchange supplémentaires (facultatif)

Vous pouvez configurer des comptes additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait via l'assistant.

Pour cela, cliquez sur le service Exchange Hébergé concerné dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, puis sur l'onglet `Comptes courriel`{.action}. Le tableau affiche les comptes actuellement configurés ou en attente de l'être sur votre service.

Les comptes en attente de configuration s'affichent dans le tableau sous la forme “*@configureme.me*”. Pour les configurer, cliquez sur le logo représentant trois points, cliquez sur `Modifier`{.action}, puis suivez les étapes.

> [!primary]
>
> Répétez cette étape autant de fois que nécessaire selon le nombre de comptes que vous possédez. Vous pouvez en commander de nouveaux grâce au bouton `Actions`{.action} puis en cliquant sur `Commander des comptes`{.action}.
>

![Ajout d'un compte](images/first-steps-hosted-exchange-add-account.png){.external}

### Étape 5 : utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne reste plus qu’à les utiliser. Pour cela, OVHcloud met à disposition le webmail **Outlook Web Application** (OWA). Ce dernier est accessible à l’adresse <https://ex.mail.ovh.ca/>. Pour y accéder, vous devez y renseigner les identifiants relatifs à votre adresse e-mail. Si vous souhaitez obtenir de l'aide sur l'utilisation de OWA, consultez notre documentation disponible sur ce lien : <https://docs.ovh.com/ca/fr/microsoft-collaborative-solutions/>.

Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, consultez notre documentation accessible depuis ce portail : <https://docs.ovh.com/ca/fr/microsoft-collaborative-solutions/>. Pour une utilisation optimale de votre adresse Exchange sur un logiciel, assurez-vous de sa bonne compatibilité avec le service.

> [!primary]
>
> Exchange permet une synchronisation complète de vos paramètres (filtres, signatures, dossiers, etc.), que vous utilisiez une application web ou un logiciel de messagerie compatible.
>
> Ainsi, si vous utilisez Exchange sur trois appareils et via des moyens de connexion différents (webmail, logiciel de messagerie ou client compatibles), toutes vos informations seront disponibles en même temps.
>

### Étape 6 : paramétrer les fonctions collaboratives (facultatif)

Maintenant que votre service Exchange Hébergé est configuré et fonctionnel, vous pouvez mettre en place les fonctionnalités collaboratives inhérentes au service dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Celles-ci peuvent vous donner la possibilité de créer des ressources (salles de réunion, équipements, etc.), mais aussi des groupes, entre autres.

Pour activer ces différentes fonctions, sélectionnez le service Exchange Hébergé concerné dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, puis choisissez parmi les onglets qui s'affichent l'action à effectuer.

![Fonctions collaboratives](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.