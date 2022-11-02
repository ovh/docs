---
title: "Consulter son compte Exchange depuis l'interface OWA"
slug: exchange-2016-guide-utilisation-outlook-web-app
legacy_guide_number: 1918
excerpt: 'Retrouvez ici le detail concernant Outlook Web App pour Exchange '
section: "Utilisation d'Outlook Web Application (OWA)"
order: 1
---

**Dernière mise à jour le 25/06/2021**

## Objectif

Avec OVHcloud Hosted Exchange, vous pouvez envoyer et recevoir vos e-mails à partir d’un appareil et d’un logiciel client de votre choix. OVHcloud fournit un service de messagerie en ligne appelé Outlook Web Application (OWA) qui permet, via un navigateur web, d’accéder à un compte, quel que soit l’endroit. Tous les comptes de messagerie actifs sur MX Plan, Email Pro et Hosted Exchange ont un seul point d’accès à l’interface OWA qui leur correspond : notre page de [connexion au webmail](https://www.ovh.com/ca/fr/mail/).

**Ce guide explique comment effectuer des actions courantes avec votre adresse électronique depuis l'interface OWA.**

## Prérequis

- Disposer d'une solution e-mail OVHcloud, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/) ou commandée séparément comme solution autonome telle que [**Hosted Exchange**](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/)
- Connaître les identifiants de connexion de l’adresse e-mail que vous souhaitez configurer

## En pratique

Ce guide vous permettra de mieux comprendre les tâches habituelles disponibles dans un compte de messagerie sous OWA. Cependant, comme cette interface n'a pas été créée à l'origine par OVHcloud, nous ne pouvons pas fournir des instructions spécifiques sur les paramètres non abordés dans ce guide. 

Concernant les fonctionnalités spécifiques à Exchange, vous pourrez retrouver quelques guides supplémentaires dans la section [Aller plus loin](./#aller-plus-loin_1) en bas de ce guide.


> [!primary]
>
> Après les deux premières étapes, il n'est pas nécessaire de suivre les instructions dans l'ordre donné. Vous pouvez utiliser la barre de navigation sur le côté gauche de ce guide pour passer aux paragraphes qui vous sont utiles.
>

### Étape 1 : Se connecter à OWA

Pour vous connecter à OWA avec votre adresse e-mail, ouvrez la page de [connexion au webmail](https://www.ovh.com/ca/fr/mail/). Saisissez entièrement votre adresse e-mail et votre mot de passe. Ensuite, cliquez sur `Connexion`{.action}.

![useowa](images/owa_exchange_step1.png){.thumbnail}

Si c'est la première fois que vous vous connectez à OWA avec cette adresse e-mail, vous serez invité à définir la langue de l'interface ainsi que le fuseau horaire. Ensuite, cliquez sur `Enregistrer`{.action} pour continuer.

![useowa](images/owa_exchange_step2.png){.thumbnail}

Dorénavant, votre boîte de réception apparaîtra par défaut dès que vous serez connecté.

![useowa](images/owa_exchange_step3.png){.thumbnail}

### Étape 2 : Comprendre l’affichage d’OWA

L'interface OWA comporte plusieurs sections. Veuillez vous référer au tableau et à l'image ci-dessous pour vous familiariser avec celle-ci.

|Parties|Description|  
|---|---|  
|Section supérieure (1)|Elle dispose de deux barres d'onglets : la première permet d'accéder aux paramètres généraux (tels que la [rubrique Options](./#acceder-a-la-section-options)). La seconde barre peut être utilisée pour des actions spécifiques avec votre adresse (telles que l'envoi ou la réponse aux e-mails).|  
|Côté gauche (2)|Affiche la liste des dossiers pour votre adresse e-mail. Ces dossiers se présentent sous la forme d'une arborescence que vous pouvez développer ou masquer.|
|Segment central (3)|Affiche la liste des messages (lus et non lus) du dossier sélectionné dans le menu de gauche. Cette section peut également afficher les résultats de recherche.|
|Côté droit (4)|Affiche le volet de lecture lorsqu'un e-mail a été sélectionné.|

![useowa](images/owa_exchange_step4.png){.thumbnail}

Notez que vous pouvez modifier la taille des sections verticales en cliquant et en faisant glisser leurs lignes de bordure.

### Afficher les e-mails

Pour consulter vos e-mails, sélectionnez un dossier sur le côté gauche. Les e-mails entrants qui ne sont pas traités par les règles de messagerie s’afficheront dans le dossier « Boîte de réception ». Pour savoir si vous avez reçu de nouveaux e-mails, vérifiez si un numéro apparaît à côté du dossier correspondant.

![useowa](images/owa_exchange_step5.png){.thumbnail}

Pour lire un e-mail, sélectionnez son dossier si nécessaire. Cliquez ensuite sur l’e-mail pour afficher son contenu dans le coin de lecture. Une couleur différente est utilisée pour les messages non lus afin de les distinguer de ceux qui ont été lus.

![useowa](images/owa_exchange_step6.png){.thumbnail}

### Envoyer et répondre

Pour **envoyer un nouveau message**, cliquez sur l'icône `Nouveau`{.action} en haut de l'interface du webmail. Le volet d’édition apparaîtra sur le côté droit. Remplissez les champs de votre e-mail (destinataires, objet, corps du message, pièces jointes). Dès que vous êtes prêt à l'envoyer, cliquez sur `Envoyer`{.action}.

![useowa](images/owa_exchange_step7.png){.thumbnail}

Pour **répondre à un message**, [cliquez d'abord](./#afficher-les-e-mails) sur celui-ci pour l'afficher. Cliquez ensuite sur `Répondre à tous`{.action}. Par contre, utilisez le bouton flèche vers le bas si vous souhaitez uniquement répondre à l'expéditeur de l’e-mail (excluant tout destinataire mis en copie).

![useowa](images/owa_exchange_step8.png){.thumbnail}

Lorsque vous choisissez de répondre, l'éditeur de réponse rapide apparaîtra au-dessus de l’e-mail. Saisissez-y votre réponse, et dès que vous êtes prêt à envoyer votre message, cliquez sur `Envoyer`{.action}. Veuillez noter que pour chaque option de réponse (comme l'ajout d'une signature), il faut d'abord l'étendre à l'ensemble du panneau d'édition en cliquant sur le symbole de la double flèche.

![useowa](images/owa_exchange_step9.png){.thumbnail}

### Organiser votre messagerie

OWA propose plusieurs façons d'organiser votre messagerie. Vous pouvez :

- [créer des dossiers et des sous-dossiers](./#creer-un-dossier),
- [déplacer des e-mails](./#deplacer-des-e-mails),
- [définir des règles](./#creer-des-regles-de-gestion-de-la-messagerie) afin d’effectuer automatiquement des actions dès la réception d'un nouvel e-mail.

#### Créer un dossier

Pour créer un nouveau dossier, faites un clic droit sur le nom de votre adresse e-mail dans l'arborescence des dossiers, puis choisissez `Créer un nouveau dossier`{.action}. Vous pouvez créer un sous-dossier dans des dossiers existants de la même manière en cliquant sur `Créer un nouveau sous-dossier`{.action}. 

![useowa](images/owa_exchange_step10.png){.thumbnail}

#### Déplacer des e-mails

Pour **déplacer un e-mail**, vous pouvez simplement le glisser-déposer dans le dossier cible ou faire un clic droit et sélectionner `Déplacer`{.action}.
Pour simultanément **déplacer plusieurs e-mails**, sélectionnez les tous grâce à leur case à cocher. Ensuite cliquez sur  `Déplacer`{.action} (sur le coté droit) ou sur `Déplacer vers`{.action} (dans la section supérieure). Choisissez ensuite le dossier de destination.

![useowa](images/owa_exchange_step11.png){.thumbnail}

#### Créer des règles de gestion de la messagerie

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Pour créer et gérer des règles, cliquez d’abord sur l'icône d'engrenage en haut, puis sur `Options`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Dans la nouvelle page qui s’ouvre, cliquez sur `Règles de boîte de réception et de rangement`{.action} qui se trouve dans le menu de gauche. Dans l’arborescence « Options », vous pouvez trouver cette fonctionnalité dans « Courrier », sous « Traitement automatique ». Ici, vous pouvez créer, modifier et déplacer des règles de la liste. 

Pour ajouter une nouvelle règle, cliquez sur le bouton `+`{.action}  

![useowa](images/owa_exchange_step13.png){.thumbnail}

Renseignez les informations demandées en fonction de la tâche que vous voudrez effectuer avec cette règle. Cliquez ensuite sur `OK`{.action}. 

![useowa](images/owa_exchange_step14.png){.thumbnail}

Pour des instructions plus détaillées sur la création des règles de gestion de messagerie, veuillez vous référer à notre guide : [Création de règles de gestion de messagerie sous OWA](../regles-boite-de-reception-owa/).

#### Bloquer un expéditeur

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Cliquez sur l'icône de l'engrenage en haut à droite, puis cliquez sur `Options`{.action}. Toujours dans la colonne de gauche, suivre l'arborescence "Courrier" sous "Comptes", puis "Bloquer ou autoriser".

Dans la section « **Expéditeurs bloqués** », tapez une adresse e-mail ou un nom de domaine à bloquer, puis cliquez sur le bouton `+`{.action} pour l'ajouter dans la liste. 

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gérer une liste de contacts

Pour gérer vos contacts, cliquez d’abord sur le bouton bleu du « App launcher » en haut de la page, ensuite sur `Contacts`{.action}.

![useowa](images/owa_exchange_step15.png){.thumbnail}

Dans la nouvelle page, vous pouvez ajouter un nouveau contact, créer une liste de contacts et supprimer des contacts existants.

Pour **ajouter un nouveau contact**, cliquez sur `Nouveau`{.action}, et introduisez les coordonnées du contact à ajouter. Une fois cela fait, cliquez sur `Enregistrer`{.action}.

![useowa](images/owa_exchange_step16.png){.thumbnail}

Pour **créer une liste de contacts**, cliquez sur la flèche vers le bas à côté de « Nouveau », puis cliquez sur `Liste de contacts`{.action}. Donnez-lui un nom, ajoutez-y des contacts et cliquez sur `Enregistrer`{.action}.

![useowa](images/owa_exchange_step17.png){.thumbnail}

### Modifier le mot de passe

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Vous pouvez modifier le mot de passe de votre compte lorsque vous êtes connecté à OWA. Pour ce faire, cliquez sur l'icône d'engrenage en haut, puis cliquez sur `Options`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Sur la nouvelle page, développez l'onglet « Général » dans l'arborescence de gauche, puis cliquez sur `Mon compte`{.action}. Enfin, cliquez sur `Modifier votre mot de passe`{.action}.

![useowa](images/owa_exchange_step18.png){.thumbnail}

Dans la nouvelle fenêtre qui s'ouvre, entrez votre mot de passe actuel. Saisissez ensuite un nouveau mot de passe, puis confirmez-le en le saisissant à nouveau. Cliquez sur `Enregistrer`{.action} pour enregistrer le nouveau mot de passe.

> [!primary]
>
> N'oubliez pas d’enter votre nouveau mot de passe sur tous vos appareils utilisés pour accéder à ce compte (par exemple dans le logiciel client de messagerie). En cas de difficultés avec votre mot de passe, contactez votre administrateur de services.
>

![useowa](images/owa_exchange_step19.png){.thumbnail}

### Ajouter la réponse automatique

Sous OWA, vous pouvez créer un répondeur automatique dans votre messagerie afin de ne pas laisser les e-mails sans réponse pendant vos absences. Pour ce faire, cliquez sur l'icône de l'engrenage en haut, puis cliquez sur `Réponses automatiques`{.action}.

![useowa](images/owa_exchange_step20.png){.thumbnail}

Dans la fenêtre qui s’ouvre, sélectionnez l’option « Envoyer des réponses automatiques ». Vous pouvez alors paramétrer le répondeur automatique pour qu'il réponde à plusieurs critères tels que :

- envoyer des e-mails de réponse automatique pendant un intervalle de temps fixe, ou en continu jusqu'à ce qu'il soit désactivé manuellement
- définir les expéditeurs qui recevront les e-mails de réponse automatique (expéditeurs internes uniquement, ou inclure les expéditeurs externes)

Remplissez les informations demandées en fonction de la tâche que vous voudrez effectuer grâce à cette règle. Une fois cela fait, cliquez sur OK.

![useowa](images/owa_exchange_step21.png){.thumbnail}

Pour des instructions plus détaillées sur la création des règles de gestion de messagerie, veuillez vous référer à notre guide : [Créer un répondeur automatique sous OWA](../exchange_2016_guide_mise_en_place_dun_repondeur_sous_owa/).

### Ajouter une signature

Pour ajouter une signature électronique, cliquez sur l'icône de l'engrenage en haut, puis cliquez sur `Options`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Sur le côté gauche de la nouvelle page, cliquez sur `Signature électronique`{.action}. Dans les options de l’arborescence, cet élément se trouve sous « Courrier » et « Disposition ». À partir de là, vous pouvez activer, désactiver et modifier la signature.

![useowa](images/owa_exchange_step22.png){.thumbnail}

Composez votre signature électronique dans la boîte d'éditeur. Vous pouvez spécifier si vous souhaitez inclure la signature par défaut dans les nouveaux e-mails uniquement ou également dans les réponses et les e-mails transférés. Une fois que vous avez terminé, cliquez sur `Enregistrer`{.action} pour confirmer.

Pour obtenir des instructions sur la création de signatures automatiques en utilisant des modèles pour l'ensemble du domaine, veuillez vous référer à notre guide : [Créer des signatures automatiques](../exchange-signature-automatique-disclaimer/).

### Accéder à la section Options

Pour accéder à tous vos paramètres, cliquez sur l'icône d’engrenage en haut, puis cliquez sur `Options`{.action}.

![useowa](images/owa_exchange_step12.png){.thumbnail}

Vous pouvez ensuite naviguer dans l'arborescence « Options » sur le côté gauche de la page. D'autres ajustements sur la présentation et le comportement de votre compte de messagerie peuvent être effectués à partir de cette page. Veuillez noter que pour des raisons de sécurité, certaines options du compte peuvent être désactivées par OVHcloud.

![useowa](images/owa_exchange_step23.png){.thumbnail}

### Gestion des cookies

Le webmail qui est utilisé pour nos offres e-mail est basé sur le logiciel Microsoft Outlook Web Application. Il est donc susceptible d'échanger des métadonnées avec les serveurs de Microsoft, sous forme de cookies nommés `appsforoffice.microsoft.com`.

Si vous souhaitez désactiver ces échanges, vous pouvez utiliser sur votre navigateur une extension de type bloqueur de contenus (tel que uBlock Origin ou Ghostery).
La désactivation de ces cookies peut néanmoins affecter la stabilité de votre webmail.

## Aller plus loin

[Création de réponses automatiques sous OWA](../exchange_2016_guide_mise_en_place_dun_repondeur_sous_owa/)

[Partager un dossier depuis l’interface OWA](../exchange-2016-partager-un-dossier-via-le-webmail-owa/)

[Partager des calendriers via l’interface OWA](../exchange-2016-partager-un-calendrier-via-le-webmail-owa/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
