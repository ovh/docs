---
title: 'Créer des filtres pour vos adresses e-mail'
excerpt: 'Découvrez comment créer et configurer un filtre sur votre adresse e-mail'
updated: 2024-03-20
---

## Objectif

Un filtre e-mail permet d'appliquer différents traitements sur les messages que vous recevez, selon les critères de votre choix.

Par exemple : vous souhaitez que tout e-mail contenant « [SPAM] » dans le sujet soit supprimé.

- Critère = le sujet de l'e-mail contient *SPAM*
- Traitement = supprimer l'e-mail

**Découvrez comment créer et configurer un filtre sur votre adresse e-mail.**

## Prérequis

- Disposer d'une offre e-mail MX Plan (disponible via : une offre d’[hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}, l'[hébergement gratuit 100M](https://www.ovhcloud.com/fr/domains/free-web-hosting/){.external} compris avec un nom de domaine, ou l'offre MX Plan commandée séparément).
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!warning]
>
> Le guide suivant s'adresse aux détenteurs de l'offre MXplan « historique ». Pour la nouvelle offre, la gestion des filtres se fait directement via le webmail OWA (**O**utlook **W**eb **A**pp). Identifiez votre offre à l'aide du tableau ci-dessous.
>

Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la « Référence serveur » dans le cadre « Résumé »|
|Poursuivez la lecture de ce guide à partir de la section « [En pratique](#oldmxplan) ».|Poursuivez vers notre guide « [Règles de boîte de réception depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan) ».|

## En pratique <a name="oldmxplan"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Web Cloud`.

Cliquez sur `Emails`{.action}, puis choisissez le nom du service MX Plan concerné.

Dans l'onglet `Emails`{.action} de votre service MXplan, vous trouverez la liste de vos adresses e-mail. Une colonne `Filtres` est visible dans le tableau des comptes e-mail. Cliquez sur l'icône d'entonnoir.

![emails](images/img_3239.png){.thumbnail}

Vous accédez alors à la liste des filtres actuellement configurés pour cette adresse e-mail.

![emails](images/img_3240.jpg){.thumbnail}

Pour ajouter une règle à votre adresse e-mail, cliquez sur le bouton `Ajouter un Filtre`{.action}.

- **Nom du filtre :** choisissez un nom pour votre filtre.

- **Priorité :** définit l'ordre d'exécution de vos filtres sur un message entrant. Un filtre de priorité 1 s'exécutera avant un filtre de priorité 2.

- **Activer le filtre :** décochez cette option si vous souhaitez appliquer ce filtre plus tard.

### Comprendre la configuration des filtres d'e-mails

Lorsque vous ajoutez un filtre, la fenêtre suivante s'affiche :

![emails](images/img_3241.jpg){.thumbnail}

#### Règles

Cette partie vous permet de définir les messages sur lesquels le filtre s'appliquera.

Premier choix (en-tête) :

- **De :** désigne l'adresse e-mail de l'expéditeur, par exemple : « Si l'expéditeur ... »
- **À :** désigne l'adresse e-mail du destinataire, par exemple : « Si le destinataire ... »
- **Sujet du message :** désigne le contenu du sujet du message, par exemple : « Si le sujet du message ... ».
- **Autre :** indiquez un autre élément à prendre en compte dans l'en-tête de l'e-mail.

Deuxième choix (règle) :

- **spf :** Indiquez une valeur du [champ SPF](/pages/web_cloud/domains/dns_zone_spf) à prendre en compte, par exemple : « ... n'a pas de champ SPF ... ».
- **contient :** exemple : « ... contient ... ».
- **ne contient pas :** exemple : « ... ne contient pas ... ».

> [!primary]
>
> Le SPF (Sender Policy Framework) permet au serveur qui reçoit un e-mail de s’assurer que ce dernier a bien été envoyé depuis un serveur de confiance.
> Il permet de prévenir les potentielles usurpations d'identité venant d'adresses e-mail utilisant votre nom de domaine (spoofing). Pour plus d'infos sur le SPF, reportez-vous au guide « [Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf) ».

Troisième choix (valeur) :

- Exemple : [SPAM]

Quatrième choix (+) :

- Cela vous permet d'ajouter une ou plusieurs conditions pour la même action.

#### Actions

Cette partie vous permet de définir les actions à appliquer.

Vous avez le choix entre :

- **Accepter :** les e-mails remplissant les conditions seront reçus normalement.
- **Rediriger vers une adresse locale :** redirige les e-mails remplissant les conditions vers une des adresses e-mail de votre domaine.
- **Suppression :** les e-mails remplissant les conditions seront supprimés.
- **Rediriger vers une adresse distante :** redirige les e-mails remplissant les conditions vers l'adresse e-mail de votre choix.

### Exemples de filtres

#### Supprimer les spams

> [!warning]
>
> Dans notre exemple nous évoquons la mention [SPAM] dans l'object d'un e-mail. Cette mention apparait lorsque l'antispam du serveur de réception délivre les e-mails, qu'il considère comme indésirable, directement dans la boite de réception. Ce qui est le cas de la version historique de l'offre MX Plan.

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|Sujet du message|contient|[SPAM]|suppression|
|Ce que le filtre va faire|Si le sujet du message|contient|[SPAM]|alors, supprimer le message.|

#### Rediriger les e-mails d'un destinataire

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|De|contient|contact@domaintest.ovh|rediriger vers une adresse distante : jean@otherdomain.ovh|
|Ce que le filtre va faire|Si l'expéditeur|est|contact@domaintest.ovh|alors, renvoyer l'e-mail vers jean@otherdomain.ovh|

#### Rediriger les e-mails adressés a une Mailing-List

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre|À|contient|ml@mailing.com|Rediriger vers une adresse locale : recipient@mypersonaldomain.ovh|
|Ce que le filtre va faire|Si le message a été envoyé à la Mailing-List|appelée|ml@mailing.com|alors, renvoyer le message vers mon autre adresse : recipient@mypersonaldomain.ovh|

#### Supprimer les e-mails contenant une mention indésirable, à l'exception d'un expéditeur

Deux filtres sont à ajouter :

||En-tête|Règle|Valeur|Action|
|---|---|---|---|---|
|Paramètres du filtre 1|Sujet du message|contient|"money"|suppression|
|Paramètres du filtre 2|De|ne contient pas|john@mybank.ovh|suppression|

Si le sujet du message contient le mot « money », **et que** l'expéditeur du message n'est pas « john@mybank.ovh », alors le message sera supprimé :

![emails](images/img_3242.jpg){.thumbnail}

## Aller plus loin

[Premiers pas avec l’offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Règles de boîte de réception depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
