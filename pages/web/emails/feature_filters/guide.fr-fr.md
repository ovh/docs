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


Un filtre e-mail permet d'appliquer différents traitements sur les messages que vous recevez selon les critères de votre choix.

Par exemple : vous souhaitez que tout e-mail contenant "[SPAM]" dans le sujet soit supprimé.

- Critère = le sujet de l'e-mail contient *SPAM*
- Traitement = supprimer l'e-mail

**Découvrez comment créer et configurer un filtre sur votre adresse e-mail**


## Prérequis

- Disposer d'une offre e-mail MX Plan ( disponible via : une offre d’[hébergement web]({ovh_www}/hebergement-web/){.external}, l'[hébergement gratuit Start 10M]({ovh_www}/domaines/offre_hebergement_start10m.xml){.external} compris avec un nom de domaine ou l'offre MX Plan commandée séparément).
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!warning]
>
> Le guide suivant s'adresse aux détenteurs de l'offre MXplan « historique ». Pour la nouvelle offre, la gestion des filtres se fait directement via le webmail OWA (**O**utlook **W**eb **A**pplication). identifiez votre offre à l'aide du tableau ci-dessous.
> 

Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la « Référence serveur » dans le cadre « Résumé »|
|Poursuivre vers la section « [En pratique](#oldmxplan) » de ce guide|Poursuivre vers notre guide« [Règles de boîte de réception depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/regles-boite-de-reception-owa/) »|


## En pratique <a name="oldmxplan"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Web Cloud`. 

Cliquez sur `Emails`{.action} dans la barre de services à gauche, puis choisissez le nom du service MX Plan concerné. 

Dans l'onglet `Emails`{.action} de votre service MXplan, vous trouverez la liste de vos adresses e-mail. Une colonne `Filtres` est visible dans le tableau des comptes e-mail. Cliquez sur l'icône d'entonnoir pour accèder au paramètrage des filtres d'un compte e-mail.

![emails](images/img_3239.jpg){.thumbnail}

Vous accéderez à la liste des filtres actuellement configurés pour cette adresse e-mail.

![emails](images/img_3240.jpg){.thumbnail}

- **Nom du filtre :** choisissez un nom pour votre filtre.

- **Priorité :** définit l'ordre d'exécution de vos filtres sur un message entrant. Un filtre de priorité 1 s'exécutera avant un filtre de priorité 2.

- **Activer le filtre :** Décochez cette option si vous souhaitez appliquer ce filtre plus tard. 

Pour ajouter une règle à votre adresse e-mail, cliquez sur le bouton `Ajouter un Filtre`{.action}.

### Comprendre la configuration des filtres d'e-mails

Lorsque vous ajoutez un filtre, vous avez la fenêtre suivante:

![emails](images/img_3241.jpg){.thumbnail}

#### Règles

Cette partie vous permet de définir les messages sur lesquels le filtre s'appliquera.

Premier choix (En-tête):

- **De :** Désigne l'adresse e-mail de l'expéditeur, exemple : "Si l'expéditeur ..."
- **À :** Désigne l'adresse e-mail du destinataire, exemple : "Si le destinataire ..."
- **Sujet du message :** Désigne le contenu du sujet du message, exemple : "Si le sujet du message ..."
- **Autre :** Indiquez un autre élément à prendre en compte dans l'en-tête de l'e-mail

Deuxième choix (Règle):

- **spf :** Indiquez une valeur du [champ SPF](https://docs.ovh.com/fr/domains/le-champ-spf/) à prendre en compte, exemple : "... n'a pas de champ SPF ..."
- **contient :** exemple : "... contient ..."
- **ne contient pas :** exemple : "... ne contient pas ..."

Troisième choix (valeur):

- Exemple : [SPAM]

Quatrième choix (+) :

- Cela vous permet d'ajouter une ou plusieurs conditions pour la même action.


#### Actions

Cette partie vous permet de définir les actions à appliquer.

Vous avez le choix entre :

- **Accepter :** Les e-mails remplissant les conditions seront reçus normalement.
- **Rediriger vers une adresse locale :** Redirige les e-mails remplissant les conditions vers une des adresses e-mails de votre domaine.
- **Suppression :** Les e-mails remplissant les conditions seront supprimés.
- **Rediriger vers une adresse distante :** Redirige les e-mails remplissant les conditions vers l'adresse e-mail de votre choix.

### Exemples de filtres

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

Si le sujet du message contient le mot "money", **et que** l'expéditeur du message n'est pas "john@mybank.ovh" alors le message sera supprimé:

![emails](images/img_3242.jpg){.thumbnail}

## Aller plus loin

[Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/)

[Règles de boîte de réception depuis l’interface OWA](https://docs.ovh.com/fr/emails/regles-boite-de-reception-owa-mx-plan/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
