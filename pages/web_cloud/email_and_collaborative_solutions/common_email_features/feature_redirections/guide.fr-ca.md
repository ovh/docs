---
title: "Utiliser les alias et redirections e-mail"
excerpt: "Découvrez comment gérer vos alias et redirections e-mail"
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objectif

Retrouvez dans ce guide différentes informations et aides concernant la configuration de vos **redirections** et **alias** e-mail, par exemple pour renvoyer des e-mails reçus sur une adresse A vers une adresse B.

![emails](images/schema-redirect00.png){.thumbnail .w-640}

**Découvrez comment gérer vos alias et redirections e-mail.**

/// details | Qu'est-ce qu'une redirection e-mail ?

Une redirection permet de modifier le trajet initial d'un e-mail vers une ou plusieurs autres adresses e-mail.

Par exemple : vous souhaitez qu'à la réception d'un e-mail sur **contact@mydomain.ovh**, celui-ci soit également renvoyé vers **john.smith@otherdomain.ovh**. Une redirection permet de transmettre automatiquement un e-mail destiné à **contact@mydomain.ovh** vers **john.smith@otherdomain.ovh**.

///

/// details | Qu'est-ce qu'un alias e-mail ?

Contrairement à la redirection, l'adresse e-mail associée à l'alias n'est pas une adresse que l'on consulte, il s'agit d'un « masque ».

Créer un alias pour votre adresse e-mail vous permet de communiquer une adresse « masque » à vos contacts, sans avoir à communiquer votre adresse e-mail personnelle à l'expéditeur. Une adresse e-mail peut avoir plusieurs alias.

Par exemple : votre adresse e-mail est **john.smith@mydomain.ovh** et votre alias **information@mydomain.ovh**. Vous pouvez alors communiquer à vos contacts l'adresse **information@mydomain.ovh** et recevoir vos e-mails sur **john.smith@mydomain.ovh**, sans que l'expéditeur ait connaissance de **john.smith@mydomain.ovh**.

///

/// details | Redirection et alias en image <a name="diagram"></a>

Cliquez sur les onglets suivants pour des explications illustrées sur le fonctionnement des alias et redirections.

- `From` : Désigne l'adresse de l'expéditeur.
- `To` : Désigne l'adresse du destinataire.
- `Redirect to` : Désigne l'adresse e-mail de redirection qui a été configurée.

> [!tabs]
> **1. La redirection simple**
>>
>> L'e-mail est directement renvoyé vers l'adresse de redirection, le destinataire initial ne reçoit pas l'e-mail.
>>
>> ![emails](images/schema-redirect01.png){.thumbnail .w-640}
>>
> **2. La redirection avec copie locale**
>>
>> L'e-mail est transmis au destinataire initial ainsi qu'à l'adresse de redirection.
>>
>> ![emails](images/schema-redirect02.png){.thumbnail .w-640}
>>
> **3. L'alias e-mail**
>>
>> L'e-mail est adressé à l'alias qui le renvoie vers le destinataire sur lequel l'alias a été configuré. La mention `Received by` désigne l'adresse e-mail qui reçoit l'e-mail.
>>
>> ![emails](images/schema-redirect03.png){.thumbnail .w-640}
>>

> [!primary]
>
> Il est possible de configurer une redirection vers plusieurs adresses e-mail. Cela implique cependant de créer une par une les redirections vers chaque destinataire.

///

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'une solution e-mail OVHcloud préalablement configurée, parmi les suivantes :
    - **MX Plan** proposée avec nos [offres d’hébergement web](/links/web/hosting).
    - [Exchange](/links/web/emails).

## En pratique

**Sommaire**

- [Créer une redirection](#redirect)
    - [Depuis l'espace client](#redirect-manager)
    - [Depuis le webmail](#redirect-webmail)
- [Supprimer une redirection](#redirect-delete)
- [Créer un alias](#alias)
- [Supprimer un alias](#alias-delete)

### Créer une redirection <a name="redirect"></a>

#### Depuis l'espace client <a name="redirect-manager"></a>

Actuellement, seules les offres **MX plan** et **Redirect** disposent d'une interface de gestion des redirections via l'espace client OVHcloud.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la partie `Web Cloud`{.action}.
1. Cliquez sur `MX Plan`{.action}.
1. Sélectionnez le domaine concerné.

Dans notre exemple, il s'agit d'une **redirection avec copie locale** (voir le [schéma 2](#diagram) au début de ce guide). Si cela correspond à votre besoin, suivez les étapes ci-dessous.

Par défaut, vous êtes dans l'onglet `Informations générales`{.action} de votre MX Plan. Cliquez sur l'onglet `Emails`{.action} puis à droite sur le bouton `Gestion des redirections`{.action}.

![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}

Le tableau des redirections déjà actives s'affiche. À droite, cliquez sur le bouton `Ajouter une redirection`{.action}.

![emails](images/mxplan-legacy-2.png){.thumbnail .w-640}

Dans le formulaire `Créer une redirection`, complétez les éléments suivants :

- **De l'adresse** : Renseignez ici l'adresse e-mail que vous souhaitez rediriger.
- **Vers l'adresse** : Renseignez ici l'adresse de destination de votre redirection. Il peut s'agir de l'une de vos adresses e-mail OVHcloud, ou d'une adresse e-mail externe.
- **Choisissez un mode de copie** : Choisissez si vous souhaitez :
      - **Conserver une copie du mail chez OVHcloud** : Recevoir l'e-mail sur votre adresse principale ainsi que l'adresse de redirection (voir le [schéma 2](#diagram) au début de ce guide).
      - **Ne pas conserver de copie du mail** : Renvoyer directement vers l'adresse de redirection sans que l'adresse principale ne le reçoive (voir le [schéma 1](#diagram) au début de ce guide).

Cliquez ensuite sur `Valider`{.action} pour confirmer l'ajout de cette redirection.

![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}

> [!primary]
>
> Pour modifier l'adresse de destination ou supprimer une redirection, cliquez sur `...`{.action}, à droite de la redirection concernée.

> [!primary]
>
> Lorsque vous choisissez le mode de copie « **Conserver une copie du mail chez OVHcloud** », une redirection de l'adresse e-mail vers elle-même est créée automatiquement dans la liste des redirections, elle matérialise cette copie locale.
>

#### Depuis le webmail <a name="redirect-webmail"></a>

Rendez-vous sur le [webmail](/links/web/email). Saisissez **l'adresse e-mail** et le **mot de passe** pour vous y connecter.

![emails](images/webmail.png){.thumbnail}

La création d'une redirection se fait par le biais de règles de boîte de réception, aussi appelées « filtres » dans le webmail. En effet, ces règles que l'on applique lors de la réception d'un e-mail permettent de transférer ou rediriger un e-mail entrant.

Parcourez les onglets ci-dessous pour mettre en place votre redirection via Outlook Web App :

> [!tabs]
> **Étape 1**
>>
>> Une fois connecté à votre adresse e-mail via le [webmail](/links/web/email), cliquez sur la roue crantée en haut à droite puis sur `Options`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Étape 2**
>>
>> Depuis la fenêtre **Options**, dans la colonne de gauche, dirigez-vous dans la catégorie **Traitement automatique** de la section **Courrier** puis cliquez sur `Règles de boîte de réception et de rangement`{.action}. 
>>
>> ![emails](images/emails-all-02.png){.thumbnail .w-640}
>>
>> Cette fenêtre permet de gérer vos redirections mais également d'appliquer des filtres sur l'ensemble des e-mails entrants.
>>
> **Étape 3**
>>
>> Une fois dans la fenêtre de gestion des **Règles de boîte de réception**, cliquez sur l'icône `+`{.action} en haut à gauche.
>>
>> ![emails](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Étape 4**
>>
>> Dans la fenêtre qui s'affiche, complétez les éléments suivants :
>> - **Nom** : Définissez le nom de votre redirection.
>> - **Lorsque le message arrive et remplit toutes ces conditions** : Si votre redirection s'applique à tous les messages, sélectionnez `[Appliquer à tous les messages]`{.action}.
>>
>> ![emails](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Étape 5**
>>
>> Ensuite, dans la même fenêtre :
>>
>> **Effectuer toutes les opérations suivantes** : C'est ici que vous appliquez la redirection. Sélectionnez `Transférer, rediriger ou envoyer`{.action} puis `Rediriger le message vers...`{.action}.
>>
>> ![emails](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Étape 6**
>>
>> Renseignez ensuite l'adresse vers laquelle vous souhaitez rediriger l'e-mail devant « **Rediriger le message vers...** » puis cliquez sur `Enregistrer`{.action}. Cliquez enfin sur `OK`{.action} (icône de disquette) pour finaliser votre redirection.
>>
>> ![emails](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> Pour appliquer une **redirection simple** (voir le [schéma 1](#diagram) au début de ce guide), ajoutez une règle supplémentaire à votre **redirection avec copie locale** depuis cette fenêtre. Cliquez sur `Ajouter une action`{.action} (cadre 1) puis sur `Déplacer, copier ou supprimer`{.action} et enfin cliquez sur `supprimer le message`{.action}. Cette règle place directement le message dans la corbeille, après avoir redirigé le message vers l'adresse de redirection.
>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}
>

#### Supprimer une redirection <a name="redirect-delete"></a>

##### MX Plan via espace client <a name="redirect-delete-mxplan"></a>

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la partie `Web Cloud`{.action}.
1. Cliquez sur `MX Plan`{.action}.
1. Sélectionnez le domaine concerné.

Sélectionnez, ci-dessous, l'onglet correspondant à la technologie e-mail utilisée par votre service MX Plan :

- Par défaut, vous êtes dans l'onglet `Informations générales`{.action} de votre MX Plan.
- Cliquez sur l'onglet `Emails`{.action} puis à droite sur le bouton `Gestion des redirections`{.action}.

![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}

- Cliquez sur `...`{.action}, à droite de la redirection concernée puis sur `Supprimer la redirection`{.action}.

![emails](images/mxplan-redirect-delete01.png){.thumbnail .w-640}

##### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Rendez-vous sur le [webmail](/links/web/email). Saisissez **l'adresse e-mail** et le **mot de passe** pour vous y connecter. Depuis l'interface du webmail OWA, suivez les étapes en cliquant sur les onglets ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Une fois connecté sur l'interface du webmail OWA, cliquez sur la roue crantée en haut à droite puis sur `Options`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Étape 2**
>>
>> Depuis la fenêtre **Options**, dans la colonne de gauche, dirigez-vous dans la catégorie **Traitement automatique** de la section **Courrier** puis cliquez sur `Règles de boîte de réception et de rangement`{.action}.
>>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> Vous trouverez la fenêtre permettant de gérer vos redirections et filtres.
>>
> **Étape 3**
>>
>> Une fois dans la fenêtre de gestion des **Règles de boîte de réception**, cliquez sur la redirection que vous souhaitez supprimer, elle doit apparaître en surbrillance. Cliquez ensuite sur l'icône de corbeille.
>>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

### Créer un alias <a name="alias"></a>

Créer un alias pour votre adresse e-mail vous permet de communiquer une adresse « masque » à vos contacts, sans avoir à communiquer votre adresse e-mail personnelle à l'expéditeur. 

Connectez-vous à votre [espace client OVHcloud](/links/manager) et dirigez-vous dans la section `Web Cloud`. Choisissez ensuite le menu en fonction de votre offre e-mail :

- **Exchange** : Rendez-vous dans la section `Microsoft`{.action}, cliquez sur `Exchange`{.action} et sélectionnez la plateforme concernée. Cliquez sur l'onglet `Comptes e-mail`{.action}.

- **MX Plan** : Rendez-vous dans la section `MX Plan`{.action}, sélectionnez la plateforme concernée puis cliquez sur l'onglet `Comptes e-mail`{.action}.

Pour ajouter un alias à votre compte e-mail, suivez les étapes décrites en cliquant successivement sur chaque onglet ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Dans le tableau qui s'affiche, vous trouverez une colonne `Alias`.
>>
>> ![emails](images/email-alias012.png){.thumbnail .w-640}
>>
> **Étape 2**
>>
>> Cliquez sur le bouton `...`{.action} puis sur `Configurer les alias`{.action} (ou `Gérer les alias`{.action}).
>>
>> ![emails](images/email-alias02.png){.thumbnail .w-640}
>>
> **Étape 3**
>>
>> Cliquez sur `Ajouter un alias`{.action} puis saisissez l'adresse que vous avez choisie pour votre alias et validez votre choix.
>>
>> ![emails](images/email-alias03.png){.thumbnail .w-640}

### Supprimer un alias <a name="alias-delete"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager) et dirigez-vous dans la section `Web Cloud`. Choisissez ensuite le menu en fonction de votre offre e-mail :

- **Exchange** : Rendez-vous dans la section `Microsoft`{.action}, cliquez sur `Exchange`{.action} et sélectionnez la plateforme concernée. Cliquez sur l'onglet `Comptes e-mail`{.action}.

- **MX Plan** : Rendez-vous dans la section `MX Plan`{.action}, sélectionnez la plateforme concernée puis cliquez sur l'onglet `Comptes e-mail`{.action}.

Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton `...`{.action} à droite de l'adresse e-mail concernée. Cliquez ensuite sur `Configurer les alias`{.action} (ou `Gérer les alias`{.action}).

Cliquez sur le bouton `...`{.action} à droite de l'alias concerné, dans le menu de gestion des alias. Enfin, cliquez sur `Supprimer l'alias`{.action}.

![emails](images/email-alias04.png){.thumbnail .w-640}

## Aller plus loin

[Premiers pas avec l'offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Premiers pas avec le service Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).