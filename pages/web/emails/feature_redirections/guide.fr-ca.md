---
title: 'Utiliser les alias et redirections e-mail'
slug: guide-des-redirections-emails
excerpt: 'Découvrez comment gérer vos alias et redirections e-mail'
section: 'Fonctionnalités des adresses e-mail'
order: 01
updated: 2020-05-20
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Dernière mise à jour le 01/02/2023**

## Objectif

Vous trouverez dans ce guide différentes informations et aides concernant la configuration de vos redirections et alias e-mail, par exemple pour renvoyer des e-mails reçus sur une adresse A vers une adresse B.

**Découvrez comment gérer vos alias et redirections e-mail**

### Qu'est-ce qu'une redirection e-mail ?

Une redirection permet de modifier le trajet initial d'un e-mail vers une ou plusieurs autres adresses e-mail.

Par exemple, vous souhaitez qu'à l'envoi d'un e-mail sur **contact@mydomain.ovh**, celui-ci soit également renvoyé vers **john.smith@otherdomain.ovh**. Cela permet de transmettre automatiquement un e-mail destiné à **contact@mydomain.ovh** vers **john.smith@otherdomain.ovh**.

### Qu'est-ce qu'un alias e-mail ?

Contrairement à la redirection, l'adresse e-mail associée à l'alias n'est pas une adresse que l'on consulte, il s'agit d'un « masque ».

Créer un alias pour votre adresse e-mail vous permet de communiquer une adresse « masque » à vos contacts, sans avoir à communiquer votre adresse e-mail personnelle à l'expéditeur. Une adresse e-mail peut avoir plusieurs alias.

Par exemple, votre adresse e-mail est **john.smith@mydomain.ovh** et votre alias **information@mydomain.ovh**. Vous pouvez alors communiquer à vos contacts l'adresse **information@mydomain.ovh** et recevoir vos e-mails sur **john.smith@mydomain.ovh**, sans que l'expéditeur ait connaissance de **john.smith@mydomain.ovh**.

### Redirection et alias en image <a name="diagram"></a>

- **La redirection simple (schéma n°1 ci-dessous)** : l'e-mail est directement renvoyé vers l'adresse de redirection, le destinataire initial ne reçoit pas l'e-mail.

- **La redirection avec copie locale (schéma n°2 ci-dessous)** : l'e-mail est transmis au destinataire initial ainsi qu'à l'adresse de redirection.

- **L'alias e-mail (schéma n°3 ci-dessous)** : l'e-mail est adressé à l'alias qui le renvoie vers le destinataire sur lequel l'alias a été configuré.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Sachez qu'il est possible de configurer une redirection vers plusieurs adresses e-mail.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Disposer d'une solution e-mail OVHcloud préalablement configurée (**MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/), incluse dans un [hébergement Start10M gratuit](https://www.ovhcloud.com/fr-ca/domains/free-web-hosting/) ou commandée séparément comme solution autonome, telle que [Hosted Exchange](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/)).

## En pratique

Les chapitres « [créer une redirection](#redirect) » et « [créer un alias](#alias) » concernent l'ensemble de nos offres e-mail OVHcloud, **sauf si** vous possédez un nom de domaine enregistré chez OVHcloud sans offre e-mail attachée.

Pour ces deux exceptions, consultez directement le chapitre « [Créer une redirection ou un alias sur une offre MX Plan historique ou un nom de domaine sans offre e-mail](#mxplanlegacy) ».

### Créer une redirection <a name="redirect"></a>

La gestion des redirections ne se fait pas via l'espace client mais directement via le webmail de l'adresse e-mail concernée.

Rendez-vous sur l'adresse <https://www.ovhcloud.com/fr-ca/mail/>. Saisissez **l'adresse e-mail** et le **mot de passe** pour vous y connecter.

![emails](images/webmail.png){.thumbnail}

Dans notre exemple, il s'agit d'une **redirection avec copie locale** (voir le [schéma 2](#diagram) au début de ce guide). Si cela correspond à votre besoin, cliquez sur `OK`{.action} (icône de disquette) en haut à gauche et la règle sera appliquée. Sinon, passez à l'étape ci-dessous.

Suivez les étapes décrites en cliquant successivement sur chaque onglet ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> Une fois connecté à votre adresse e-mail via le [webmail](https://www.ovhcloud.com/fr-ca/mail/), cliquez sur la roue crantée en haut à droite puis sur `Options`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Etape 2**
>> Depuis la fenêtre **Options**, dans la colonne de gauche, dirigez-vous dans la catégorie **Traitement automatique** de la section **Courrier** puis cliquez sur `Règles de boîte de réception et de rangement`{.action}. <br><br>
>> ![emails](images/emails-all-02.png){.thumbnail}<br><br>
>> Cette fenêtre permet de gérer vos redirections mais également d'appliquer des filtres sur l'ensemble des e-mails entrants.<br>
>>
> **Etape 3**
>>
>> Une fois dans la fenêtre de gestion des **Règles de boîte de réception**, cliquez sur l'icône `+`{.action} en haut à gauche.<br><br>
>> ![emails](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Etape 4**
>>
>> **Nom** : définissez le nom de votre redirection. <br>
>> **Lorsque le message arrive et remplit toutes ces conditions** : si votre redirection s'applique à tous les messages, sélectionnez `[Appliquer à tous les messages]`{.action}.<br><br>
>>![emails](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Etape 5**
>>
>> **Effectuer toutes les opérations suivantes** : c'est ici que vous appliquez la redirection, selectionnez `Transférer, rediriger ou envoyer`{.action} puis `Rediriger le message vers...`{.action}.<br><br>
>>![emails](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Etape 6**
>>
>> Tapez ensuite l'adresse vers laquelle vous souhaitez rediriger l'e-mail devant «**Rediriger le message vers...**» puis cliquez sur `Enregistrer`{.action}. Cliquez enfin sur `OK`{.action} (icône de disquette) pour finaliser votre redirection.<br><br>
>>![emails](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
>
> Pour appliquer une **redirection simple** (voir le [schéma 1](#diagram) au début de ce guide), ajoutez une règle supplémentaire à votre **redirection avec copie locale** depuis cette fenêtre. Cliquez sur `Ajouter une action`{.action} (cadre 1) puis sur `Déplacer, copier ou supprimer`{.action} et enfin cliquez sur `supprimer le message`{.action}. Cette règle place directement le message dans la corbeille, après avoir redirigé le message vers l'adresse de redirection.<br><br>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}

### Créer un alias <a name="alias"></a>

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et dirigez-vous dans la section `Web Cloud`. Choisissez ensuite le menu en fonction de votre offre e-mail :

- **Exchange** : dans `Microsoft`{.action} puis sur `Exchange`{.action} et sélectionnez la plateforme concernée. Cliquez sur l'onglet `Comptes e-mail`{.action}.

- **Emails** (MXplan): dans `Emails`{.action}, sélectionnez la plateforme concernée puis cliquez sur l'onglet `Comptes e-mail`{.action}.

Pour ajouter un alias à votre compte e-mail, suivez les étapes décrites en cliquant successivement sur chaque onglet ci-dessous :

> [!tabs]
> **Etape 1**
>>
>> Dans le tableau qui s'affiche, vous trouverez une colonne `Alias`.<br><br>
>> ![emails](images/email-alias012.png){.thumbnail}<br>
>>
> **Etape 2**
>>
>> Cliquez sur le bouton `...`{.action} puis sur `Configurer les alias`{.action} (ou `Gérer les alias`{.action}).<br><br>
>> ![emails](images/email-alias02.png){.thumbnail}<br>
>>
> **Etape 3**
>>
>> Cliquez sur `Ajouter un alias`{.action} puis saisissez l'adresse que vous avez choisie pour votre alias et validez votre choix.<br><br>
>> ![emails](images/email-alias03.png){.thumbnail}<br>

#### Supprimer un alias

Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton `...`{.action} à droite de l'adresse e-mail concernée. Cliquez ensuite sur `Configurer les alias`{.action} ( ou `Gérer les alias`{.action}).

Cliquez sur le bouton `...`{.action} à droite de l'alias concerné, dans le menu de gestion des alias. Enfin, cliquez sur `Supprimer l'alias`{.action}

![emails](images/email-alias04.png){.thumbnail}

### Créer une redirection ou un alias sur une offre MX Plan historique ou un nom de domaine sans offre e-mail <a name="mxplanlegacy"></a>

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et dirigez-vous dans la section `Web Cloud`. Dirigez-vous dans la sections `Emails`{.action} :

La méthode pour créer un alias ou une redirection est strictement la même. Suivez les étapes décrites en cliquant successivement sur chaque onglet ci-dessous :

> [!tabs]
> **Etape 1**
>> Par défaut, vous êtes dans l'onglet `Informations générales`{.action} de votre MX Plan. Cliquez sur l'onglet `Emails`{.action} puis à droite sur le bouton `Gestion des redirections`{.action}.<br><br>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Etape 2**
>>
>> Le tableau des redirections déjà actives s'affiche. À droite, cliquez sur le bouton `Ajouter une redirection`{.action}.<br><br>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Etape 3**
>>
>> **De l'adresse** : renseignez ici l'adresse e-mail que vous souhaitez rediriger.<br><br>
>> **Vers l'adresse**: renseignez ici l'adresse de destination de votre redirection. Il peut s'agir de l'une de vos adresses e-mail OVHcloud, ou d'une adresse e-mail externe.<br><br>
>> **Choisissez un mode de copie**: choisissez si vous souhaitez : <br> - **Conserver une copie du mail chez OVHcloud** (recevoir l'e-mail sur votre adresse principale ainsi que l'adresse de redirection)<br> *cf. le [schéma 2](#diagram) au début de ce guide.*<br><br> - **Ne pas conserver de copie du mail** (renvoyer directement vers l'adresse de redirection sans que l'adresse principale ne le reçoive) <br> *cf. le [schéma 1](#diagram) au début de ce guide.*<br><br>
>> Cliquez ensuite sur `Valider`{.action} pour confirmer l'ajout de cette redirection.<br><br>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail}


> [!primary]
>
> Lorsque vous choisissez le mode de copie « **Conserver une copie du mail chez OVHcloud** », une redirection de l'adresse e-mail vers elle-même est créée automatiquement dans la liste des redirections, elle matérialise cette copie locale.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
