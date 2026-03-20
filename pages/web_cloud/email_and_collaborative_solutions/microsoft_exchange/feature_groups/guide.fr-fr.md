---
title: 'Exchange - Créer un groupe de contacts'
excerpt: 'Retrouvez ici la mise en place et l’utilisation de groupe via votre compte Exchange'
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objectif

Grâce aux groupes Exchange, de nombreux participants peuvent communiquer par envoi d’e-mails à une seule adresse, celle du groupe. Cette fonction collaborative vous permet de créer et gérer des listes de diffusion constituées aussi bien d’utilisateurs d’Exchange que de contacts externes.

**Ce guide va vous expliquer comment utiliser les groupes Exchange via l’espace client OVHcloud et le service Outlook Web App (OWA).**

## Prérequis

- Avoir souscrit une [solution Exchange OVHcloud](/links/web/emails-hosted-exchange)

<!-- CP-NAV-START:web-exchange -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Exchange](/links/control-panel/web-exchange)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Exchange`{.action} > Sélectionnez votre plateforme

---
<!-- CP-NAV-END:web-exchange -->

## En pratique

### Créer un nouveau groupe

Cliquez sur l'onglet `Groupes`{.action} dans le menu horizontal.

![contactgroups](images/exchange-groups-create01.png){.thumbnail .w-600 .h-600}

Cliquez sur `Créer un groupe de contacts`{.action} afin d’ouvrir une nouvelle fenêtre à partir de laquelle vous pourrez définir les paramètres du groupe :

![contactgroups](images/exchange-groups-create02.png){.thumbnail .w-600 .h-600}

- **Adresse e-mail** : Définissez une nouvelle adresse pour envoyer des messages à la liste de diffusion. Veillez à ne pas utiliser une adresse déjà fonctionnelle.
- **Nom du Groupe** : Utilisez le nom apparaissant dans votre [espace client OVHcloud](/links/manager) et dans votre [messagerie Web OVHcloud](/links/web/email) (OWA).
- **Taille maximale d’entrée ou de sortie** : Vous pouvez spécifier la taille maximale des e-mails entrants et des e-mails sortants.
- **Masquer dans Outlook** : Lorsque cette case est cochée, l’adresse du groupe ne s’affichera pas dans la liste des adresses du service Exchange.
- **Authentification requise** : Lorsque cette case est cochée, seuls les utilisateurs de la même plate-forme pourront envoyer des messages avec l’adresse du groupe.

Cliquez sur `Suivant`{.action} pour continuer.

Sur la deuxième page, sélectionnez les **Contacts** du groupe et désignez les **Administrateurs**. Ces choix se feront uniquement parmi les adresses e-mail et les contacts externes déjà répertoriés dans le service.

- **Administrateurs** : Comptes e-mail autorisés à envoyer un e-mail à l'ensemble des contacts du groupe.
- **Contacts** : Comptes e-mail qui recevront les e-mails envoyés au groupe par les administrateurs.

> [!primary]
>
> Veuillez noter que les administrateurs doivent être configurés en tant que **Contacts** afin de recevoir les e-mails du groupe.

![contactgroups](images/exchange-groups-create03.png){.thumbnail .w-600 .h-600}

Cliquez sur `Suivant`{.action} pour continuer et cliquez sur `Confirmer`{.action} pour finaliser vos choix.

### Gérer les groupes

Après la création de votre groupe, vous pouvez modifier les paramètres que vous avez définis. Pour cela, cliquez sur `...`{.action} à droite du groupe dans le tableau.

![contactgroups](images/exchange-groups-options01.png){.thumbnail .w-600 .h-600}

#### Gérer les utilisateurs d'un groupe

Pour ajouter des `Contacts` à votre groupe ou définir les `Administrateurs`, cliquez sur le bouton `...`{.action} puis sur `Configurer les utilisateurs`{.action}. Cochez les attributs que vous souhaitez attacher aux adresses e-mail de la colonne `Compte e-mail`.

> [!primary]
>
> Un groupe peut contenir un nombre maximum de 10 000 contacts.

![contactgroups](images/exchange-group-options-users01.png){.thumbnail .w-600 .h-600}

#### Gérer les délégations d'un groupe

L’option `Configurer les délégations`{.action} du menu s’affichera. Cette option vous permet de déléguer l’accès de la même manière qu’on le fait pour un compte Exchange. Retrouvez tous les détails dans [ce guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation).

![contactgroups](images/exchange-groups-options-delegation01.png){.thumbnail .w-600 .h-600}

> [!primary]
>
> Veuillez noter que chaque modification à ce service peut prendre quelques minutes pour être appliquée. Vous pouvez vérifier l’état de la plupart des opérations en sélectionnant les options `Plus`{.action} et `Tâches récentes`{.action} à partir du menu horizontal.

### Écrivez à un groupe via OWA

Vous pouvez déjà tester votre liste de diffusion via [la messagerie Web d’OVHcloud](/links/web/email) (OWA). Il suffit d’envoyer un e-mail à l’adresse du groupe.

## Aller plus loin <a name="go-further"></a>

[Déléguer des permissions sur un compte Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Consulter son compte Exchange depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Partager des calendriers via l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
