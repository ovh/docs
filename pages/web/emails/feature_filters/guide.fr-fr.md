---
title: 'Créer des filtres pour vos adresses e-mail'
slug: mail-mutualise-guide-configuration-des-filtres-e-mail-sur-lespace-client
legacy_guide_number: 1973
excerpt: 'Découvrez comment créer et configurer un filtre sur votre adresse e-mail'
section: 'Fonctionnalités des adresses e-mail'
order: 04
---

**Dernière mise à jour le 27/09/2021**



## Objectif


Un filtre permet de configurer des conditions sur les e-mails que vous recevez, ainsi que des actions qui en découlent.

Par exemple : vous souhaitez que tout e-mail contenant "[SPAM]" dans le sujet soit supprimé.

- Condition = le sujet de l'e-mail contient *SPAM*
- Action = supprimer l'e-mail

**Découvrez comment créer et configurer un filtre sur votre adresse e-mail**


## Prérequis

- Disposer d'une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web]({ovh_www}/hebergement-web/){.external}, l'[hébergement gratuit Start 10M]({ovh_www}/domaines/offre_hebergement_start10m.xml){.external} compris avec un nom de domaine (activé au préalable) ou l'offre MX Plan commandée séparément.
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!warning]
>
> Le guide suivant s'adresse aux détenteurs de l'offre MXplan « historique ». Pour la nouvelle offre, la gestion des filtres se fait directemet via le webmail OWA (**O**utlook **W**eb **A**pplication). identifiez votre offre à l'aide du tableau ci-dessous.
> 

Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la « Référence serveur » dans le cadre « Résumé »|
|Poursuivre vers la section « [En pratique](#oldmxplan) » de ce guide|Poursuivre vers notre guide« [Règles de boîte de réception depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/regles-boite-de-reception-owa/) »|


## En pratique <a name="oldmxplan"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Web`. 

Cliquez sur `Emails`{.action} dans la barre de services à gauche, puis choisissez le nom du service MX Plan concerné. 

Dirigez-cette fois dans l'onglet `Emails`{.action} de votre service MXplan, pour afficher la liste de vos adresses e-mail. Une colonne `Filtres` vous permet d'en attribuer à chacun de vos comptes, cliquez sur l'icône de filtre pour accèder à ces derniers.

![emails](images/img_3239.jpg){.thumbnail}

Vous accéderez à la liste de vos filtres actuellement configurés pour cette adresse e-mail. Cliquez sur le bouton `Ajouter un Filtre`{.action} .

![emails](images/img_3240.jpg){.thumbnail}

### Comprendre la configuration des filtres d'e-mails

![emails](images/img_3241.jpg){.thumbnail}

#### Informations

- **Nom du filtre :** Cela sert à différencier vos filtres dans l'espace client.
- **Priorité :** Cela définit l'ordre d'exécution de vos filtres sur une même boite e-mail. Un filtre de priorité 1 s'exécutera avant un filtre de priorité 5.
- **Activer le filtre :** Cela détermine si le filtre sera effectif ou pas (Vous pouvez créer un filtre en décochant l'option si vous souhaitez l'activer plus tard par exemple).

#### Règles

C'est ici que vous allez configurer les conditions, les règles du filtre.

Premier choix (En-tête):

- **De :** Correspond à l'expéditeur, exemple : "Si l'expéditeur ..."
- **À :** Correspond au destinataire, exemple : "Si le destinataire ..."
- **Sujet du message :** Correspond au sujet du message, exemple : "Si le sujet du message ..."
- **Autre :** Autre paramètre

Deuxième choix (Règle):

- **spf :** Paramètre qui dépend du champ SPF, exemple : "... n'a pas de champ SPF ..."
- **contient :** exemple : "... contient ..."
- **ne contient pas :** exemple : "... ne contient pas ..."

Troisième choix (valeur):

- Exemple : [SPAM]

Quatrième choix (+) :

- Cela vous permet d'ajouter une ou plusieurs conditions pour la même action.

**Résultat de ces conditions** - Exemple : "Si le sujet du message contient [SPAM]"

#### Actions

C'est ici que vous allez choisir ce qui sera fait par le filtre si les conditions au dessus sont réunies.

Vous avez le choix entre :

- **Accepter :** Les e-mails remplissant les conditions seront reçus normalement.
- **Rediriger vers une adresse locale :** Redirige les e-mails remplissant les conditions vers une des adresses e-mails de votre domaine.
- **Suppression :** Les e-mails remplissant les conditions seront supprimés.
- **Rediriger vers une adresse distante :** Redirige les e-mails remplissant les conditions vers l'adresse e-mail de votre choix.

### Exemples

#### Supprimer les spams

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|Sujet du message|contient|[SPAM]|suppression|
|Ce que le filtre va faire|Si le sujet du message|contient|la suite "[SPAM]"|alors, supprimer le message.|

#### Rediriger les e-mails d'un destinataire

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|De|contient|contact@domaintest.ovh|rediriger vers une adresse distante : jean@otherdomain.ovh|
|Ce que le filtre va faire|Si l'expéditeur|est|contact@domaintest.ovh|alors, renvoyer l'e-mail vers jean@otherdomain.ovh|

#### Rediriger les e-mails adressés a une Mailing-List

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|À|contient|ML@mailing.com|Rediriger vers une adresse locale : recipient@mypersonaldomain.ovh|
|Ce que le filtre va faire|Si le message a été envoyé à la Mailing-List|appelée|ML@mailing.com|alors, renvoyer le message vers mon autre adresse : recipient@mypersonaldomain.ovh|

#### Supprimer les e-mails contenant une mention indésirable à l'exception d'un expéditeur

Deux filtres sont à ajouter :

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre 1|Sujet du message|contient|"money"|suppression|
|Paramètres du filtre 2|De|ne contient pas|john@mybank.ovh|suppression|

Si le sujet du message contient le mot "money", **et que** l'expéditeur du message n'est pas "john@mybank.ovh" alors le message sera supprimé.

Dans ce cas, la configuration sera la suivante :

![emails](images/img_3242.jpg){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
