---
title: 'Effectuer un changement de contacts pour vos groupes de téléphonie'
excerpt: "Découvrez comment déléguer la gestion d'un groupe de téléphonie à un autre compte OVHcloud."
updated: 2023-12-22
---

## Objectif

OVHcloud vous permet de différencier la gestion administrative, technique et de facturation d'un service pour la confier à plusieurs contacts, chacun d'eux associé à un identifiant client. Cette gestion de contacts pour les services de téléphonie est partiellement différente de la [gestion de contacts des autres services OVHcloud](/pages/account_and_service_management/account_information/managing_contacts). En effet, la gestion de contacts VoIP peut être réalisée sur un groupe de téléphonie (le conteneur dans lequel sont stockés les lignes téléphoniques et numéros alias).

**Découvrez comment modifier les contacts d'un groupe de téléphonie.**

## Généralités

### Les droits des différents contacts

- **Le contact administrateur :** Cet identifiant peut gérer l’intégralité des options sur les lignes et numéros, aussi bien techniquement que commercialement. Le contact administrateur peut modifier les offres sur les lignes et ajouter des options. 

- **Le contact technique :** Cet identifiant peut gérer les modifications techniques sur les lignes et numéros. Il permet de gérer les configurations des services et options.

- **Le contact facturation :** Cet identifiant peut gérer la facturation et télécharger les relevés de consommations. La modification du contact facturation permet de donner accès uniquement aux relevés de consommations et aux factures.

> [!primary]
>
> Le changement de contacts sur un groupe de téléphonie ne peut être réalisé que par le contact administrateur.
>

## Prérequis

- Être connecté à  votre [espace client OVHcloud](/links/manager){.external}
- Disposer d’un accès à l’adresse e-mail renseignée dans votre profil.
- Posséder l’identifiant client du nouveau contact (destinataire de la modification).
- Le nouveau contact doit quant à lui disposer d’un accès à l’adresse e-mail renseignée dans son profil.
- En cas de modification du contact facturation, l’ancien et le nouveau contacts facturation doivent avoir validé leurs comptes via [la procédure de validation VoIP](/pages/web_cloud/phone_and_fax/voip/la_procedure_de_validation_voip) et être à jour de leurs règlements.

> [!success]
>
> Si vous souhaitez réorganiser vos services de téléphonie au sein de vos groupes de téléphonie, consultez notre guide sur la [gestion des groupes de téléphonie](/pages/web_cloud/phone_and_fax/voip/regrouper_services_telephonie).

## En pratique

### Modifier les contacts

> [!primary]
>
> En cas de changement de tous les contacts pour un service, le contact administrateur est à modifier **en dernier**. En effet, si vous le modifiez en premier, vous ne disposerez plus des droits nécessaires pour modifier les contacts technique ou facturation.
>

Connectez-vous à l'[espace client OVHcloud](/links/manager){.external}, cliquez sur `Télécom`{.action} puis sur `Téléphonie`{.action}.

![espace client Telecom VoIP](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

Sélectionnez votre groupe de téléphonie puis cliquez sur l'onglet `Gestion des contacts`{.action}.

![gestion des contacts](images/gestion-contacts01.png){.thumbnail}

Vous pourrez alors cliquer sur le bouton d'édition à droite de votre groupe de téléphonie et renseigner le nouveau « NIC » (identifiant client) qui récupérera la gestion de ce groupe. Cliquez sur le bouton `V`{.action} de validation pour valider la modification. Ce changement s'appliquera à tous les services du groupe.

Un e-mail va être envoyé aux contacts impliqués dans ce processus de modification.

### Valider, refuser ou suivre un changement de contact

> [!primary]
>
> Cette étape est identique à celle décrite dans le [guide de changement de contacts](/pages/account_and_service_management/account_information/managing_contacts#validation) pour tous les services OVHcloud.
>

Pour suivre et gérer les demandes en cours, cliquez d'abord sur le nom rattaché à votre identifiant client dans la barre de menu en haut à droite de l'espace client. Cliquez ensuite sur `Mes contacts`{.action} à gauche et enfin sur `Mes demandes`{.action}. C’est ici que vous pourrez accepter ou refuser une demande.

![gestion contacts VoIP](images/managing_contacts_05.png){.thumbnail}

Pour cela, vous devez être en possession du code de validation (aussi appelé token) contenu dans l’e-mail pour valider ou refuser la demande.

> [!primary]
> Ce code est personnel, à usage unique et sa composition différera pour les deux contacts.

L'e-mail reçu contient également un lien menant directement sur la page permettant de valider ou de refuser la demande. En passant par cet e-mail, le code de validation (token) sera automatiquement prérempli.

Si l'un des contacts n'a pas reçu l'e-mail, il se peut que l'adresse de contact renseignée dans le profil ne soit pas à jour. Vous pouvez la vérifier dans votre profil, la modifier si nécessaire puis redemander l'envoi de l'e-mail en cliquant sur `Renvoyer la demande`{.action}.

![gestion contacts VoIP](images/managing_contacts_06.png){.thumbnail}

Si un seul contact a validé le changement, un message apparaîtra, vous informant que la demande est toujours en attente de validation par l'autre contact. Si l'un des contacts vient tout juste de valider une demande, l'affichage dans l'espace client se mettra à jour sous quelques minutes.

![gestion contacts VoIP](images/managing_contacts_07.png){.thumbnail}

Dès que les deux contacts ont validé la demande, le changement sera effectif sous quelques minutes. Les deux contacts recevront un e-mail les informant que la demande a bien été traitée.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).