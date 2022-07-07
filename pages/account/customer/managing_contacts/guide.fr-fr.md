---
title: 'Gérer les contacts de ses services'
slug: gestion-des-contacts
excerpt: 'Découvrez comment gérer les contacts de vos services OVHcloud'
section: 'Premiers pas'
order: 6
---

**Dernière mise à jour le 13/12/2021** 

## Objectif

Le plupart des services créés chez OVHcloud sont gérés par plusieurs contacts. Chacun de ces contacts est associé à un identifiant client. 

**Apprenez à gérer les contacts de vos services OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Définition

Trois types de contacts existent:

- **le contact administrateur** gère les aspects administratifs et techniques d'un service. Il possède des droits de modification sur l'ensemble des contacts et peut effectuer des changements dans les informations du propriétaire d'un service, comme les noms de domaine par exemple.
- **le contact technique** gère uniquement les aspects techniques d'un service.
- **le contact facturation** gère uniquement la facturation d'un service dont ses prélèvements. Ce contact reçoit notamment les notifications liées au renouvellement. 

L'identifiant client est un identifiant personnel que vous recevez par e-mail lors de la création de votre compte client chez OVHcloud. Il est le plus souvent composé de deux lettres suivies de chiffres. Par exemple : **xx11111-ovh**. Lorsque vous commandez des services, cet identifiant leur est associé en tant que contact.

![Contact management](images/managing_contacts_scheme.png){.thumbnail}

## Prérequis

- Être connecté à  votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}
- Disposer d'un accès à l'adresse e-mail renseignée dans votre profil.
- Disposer de droits suffisants sur le service concerné.
- Posséder l'identifiant client du nouveau contact (pour qui vous réalisez la modification).
- Le nouveau contact doit quant à lui disposer d'un accès à l'adresse e-mail renseignée dans son profil.
- L'ancien et le nouveau contact facturation doivent être à jour de leurs règlements.

## En pratique

### Accéder à la gestion des contacts <a name="gestion_des_contacts"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur le nom rattaché à votre identifiant client dans la barre de menu en haut à droite, puis cliquez sur `Gestion des contacts`{.action}.

![Contact management](images/hubcontacts.png){.thumbnail}

Le tableau qui apparaît permet ainsi de visionner les différents services pour lesquels votre identifiant client est renseigné en tant que contact.

![Contact management](images/managing_contacts_02.png){.thumbnail}

### Modifier les contacts d'un service

Une fois sur la page de gestion des contacts, cliquez sur `...`{.action} à droite du service à modifier, puis sur `Modifier les contacts`{.action}. Renseignez le ou les nouveaux contacts souhaités puis cliquez sur `Valider`{.action} votre demande.

![Contact management](images/managing_contacts_03.png){.thumbnail}

![Contact management](images/managing_contacts_04.png){.thumbnail}

Un e-mail va être envoyé aux contacts impliqués dans ce processus de modification.

> [!warning]
>
> Aucun changement de contact ne sera autorisé si l'ancien ou le nouveau compte client concernés ont une ou plusieurs factures impayées.
>

#### Je suis contact administrateur <a name="administrateur"></a>

En qualité d'administrateur, vous pouvez réaliser plusieurs manipulations sur les contacts d'un service :

- Nommer un nouveau contact sur la gestion technique et/ou la facturation. Une validation de votre part ainsi que de celle du nouveau contact seront nécessaires. L'ancien contact recevra un e-mail l'informant de la modification si celle-ci arrive à son terme.
- Récupérer la gestion technique et/ou la facturation. Vous devrez valider cette demande. L'ancien contact recevra un e-mail l'informant de la modification. 
- Désigner un nouveau contact administrateur à votre place. Une validation par e-mail de votre part ainsi que de celle du nouveau contact seront nécessaires. 

#### Je suis contact technique <a name="technique"></a>

Vous pouvez uniquement désigner un autre contact technique pour vous remplacer. Une validation par mail de votre part ainsi que de celle du nouveau contact technique seront nécessaires.

#### Je suis contact facturation

Vous pouvez uniquement désigner un autre contact facturation pour vous remplacer. Une validation par mail de votre part ainsi que de celle du nouveau contact facturation seront nécessaires.

### Valider, refuser ou suivre un changement de contact

Pour suivre et gérer les demandes en cours, cliquez sur l'onglet `Mes demandes`{.action}. C'est ici que vous pourrez accepter ou refuser une demande.

![Contact management](images/managing_contacts_05.png){.thumbnail}

Pour cela, vous devez être en possession du code de validation (aussi appelé token) contenu dans l'e-mail pour valider ou refuser la demande.

> [!primary]
>
> Ce code est personnel, à usage unique et sa composition différera pour les deux contacts.
>

L'e-mail reçu contient également un lien menant directement sur la page permettant de valider ou de refuser la demande. En passant par cet e-mail, le code de validation (token) sera automatiquement prérempli.

Si l'un des contacts n'a pas reçu l'e-mail, il se peut que l'adresse de contact renseignée dans le profil ne soit pas à jour. Vous pouvez la vérifier dans votre profil, la modifier si nécessaire puis redemander l'envoi de l'e-mail en cliquant sur `Renvoyer la demande`{.action}.

![Contact management](images/managing_contacts_06.png){.thumbnail}

Si un seul contact a validé le changement, un message apparaîtra, vous informant que la demande est toujours en attente de validation par l'autre contact. Si l'un des contacts vient tout juste de valider une demande, l'affichage dans [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) se mettra à jour sous quelques minutes.

![Contact management](images/managing_contacts_007.png){.thumbnail}

Le changement de contact sera effectif quelques minutes après que les deux contacts aient validé la demande. Ils recevront ensuite un e-mail les informant que la demande a bien été traitée.

### Exemple de cas concret : confier la gestion technique de votre site à votre webmaster <a name="use-case"></a>

Vous venez de souscrire à un abonnement OVHcloud permettant de créer votre propre [boutique en ligne](https://www.ovhcloud.com/fr/web-hosting/ecommerce-website/).<br>Vous avez fait appel à l'un de nos [partenaires](https://partner.ovhcloud.com/fr/directory/) et celui-ci vous demande les droits d'accès à vos services OVHcloud, afin de commencer à créer votre site.

> [!warning]
>
> Nous vous déconseillons de donner à un tiers, quel qu'il soit, les identifiants d'accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
>

Dans cette situation, vous pouvez confier à votre prestataire le droit « [contact technique](#gestion_des_contacts) » sur votre hébergement OVHcloud.<br>
Cet accès lui permettra d'effectuer les manipulations nécessaires à la mise en ligne de votre site (ajout d'un domaine ou sous-domaine dans le multisite, installation d'un module en 1 clic, modification du mot de passe FTP ou de la base de données, création d'un certificat SSL, etc...).

Si votre nom de domaine n'est pas relié à votre hébergement et que vous souhaitez aussi confier les opérations nécessaires à votre webmaster, donnez-lui alors le droit « [contact technique](#gestion_des_contacts) » sur la [zone DNS](../../domains/editer-ma-zone-dns/) de votre domaine.

Le droit « [contact technique](#gestion_des_contacts) » ne permet pas de modifier les contacts administrateur ou facturation d'un service.<br>
Il ne donnera pas à votre webmaster les accès à vos factures ou commandes, au renouvellement de vos services ou à vos moyens de paiement.<br>
Il ne lui permettra pas non plus d'effectuer le [transfert de la gestion de votre nom de domaine](../../domains/transfert-sortant-dun-nom-de-domaine-generique-ou-geographique/) vers un autre hébergeur ou de [changer son propriétaire](../../domains/changement-proprietaire-domaine/).

En tant que [contact administrateur](#administrateur), vous pourrez enfin à tout moment récupérer le « [contact technique](#technique) » de votre service.

### Cas particulier d’un propriétaire de domaine

Lors de la commande d'un service OVHcloud, vous avez défini un propriétaire pour celui-ci. Le propriétaire a la possibilité, s'il n'a aucun accès au(x) compte(s) OVHcloud associés au service qu'il souhaite récupérer, de céder la propriété d'un domaine à un tiers ou de récupérer l'administration du domaine, via les procédures suivantes :

[Changer le propriétaire d'un service](https://www.ovh.com/cgi-bin/fr/procedure/procedureChangeOwner.cgi)

[Modifier les contacts de votre domaine](https://www.ovh.com/fr/cgi-bin/fr/procedure/procedureChangeContacts.cgi)

Le suivi de chaque procédure s'effectue par e-mail et une vérification d'identité sera nécessaire. Les instructions détaillées vous seront fournies tout au long de chaque procédure.

## Aller plus loin <a name="gofurther"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
