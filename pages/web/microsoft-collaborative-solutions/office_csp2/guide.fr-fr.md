---
title: Gérer un groupe de licences Office 365 Revendeurs (CSP2) OVHcloud
slug: commander-et-gerer-un-groupe-de-licences-office-365-revendeur-csp2-ovh
excerpt: Découvrez comment  souscrire et administrer un service Office 365 Revendeurs (CSP2) chez OVHcloud
section: Office
order: 03
---

**Dernière mise à jour le 16/01/2023**

## Objectif 

Office 365 Revendeurs (CSP2) est un service vous permettant de bénéficier de plusieurs types de licences Microsoft 365 aux tarifs préférentiels afin que vous puissiez les revendre auprès de vos clients.

**Découvrez comment souscrire et administrer un service Office 365 Revendeurs (CSP2) depuis votre espace client OVHcloud.**

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d’un [MPN ID](https://learn.microsoft.com/partner-center/mpn-create-a-partner-center-account) (Microsoft Partner Network IDentifiant) 
- Être inscrit au programme CSP (Cloud Solution Provider) de Microsoft en tant que revendeur indirect dans la région où vous exercez (par exemple : « UE » pour l’Europe)

> [!warning]
>
> Depuis le 01/07/2022, tous les services Office 365 revendeurs (CSP2) qui ne disposeront pas d’un MPN ID inscrit au programme « CSP revendeur indirect » seront désactivés par Microsoft.
>
> Disposer d'un MPN ID est désormais obligatoire pour toute nouvelle souscription.
>

Si vous ne disposez pas encore d’un MPN ID, vous pouvez vous en créer un (si vous êtes éligible aux conditions de Microsoft) en suivant la documentation officielle de Microsoft [« Qu’est-ce que le Microsoft Cloud Partner Program ? »](https://docs.microsoft.com/partner-center/mpn-create-a-partner-center-account){.external}.

Pour vous inscrire ensuite en tant que revendeur indirect, nous vous invitons à consulter la documentation Microsoft [« S’inscrire au programme Fournisseur de solutions Cloud »](https://docs.microsoft.com/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

Le MPN ID vous permettra d'obtenir un cashback sur les abonnements que vous commanderez via l'espace client OVHcloud. Ce cashback est soumis à des règles définies par Microsoft, en fonction des volumes d'abonnements que vous générerez.

## En pratique

### Commander un service Office 365 Revendeurs

Pour commander un service Office 365 Revendeurs, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois connecté, sélectionnez `Sunrise`{.action} dans le bandeau supérieur puis cliquez sur `Office 365 Revendeurs`{.action}.

- *Facultatif* : vous pouvez définir un **sous-domaine personnalisé** lors de la création d'une nouvelle plateforme en cochant la case prévue à cet effet (sous réserve des noms disponibles).
- Saisissez votre MPN ID préalablement créé auprès de Microsoft.
- Complétez les informations de contact du client final, celles-ci sont demandées pour définir le gestionnaire du groupe de licences (*Tenant*) que vous allez créer.
- Dans la liste en dessous, ajoutez les licences que vous souhaitez intégrer à votre groupe.
- Cliquez sur `Commander`{.action} pour finaliser.

> [!warning]
> Veuillez vous assurer de la validité de l'adresse e-mail renseignée lors de la création de votre groupe de licences, car celle-ci servira à recevoir les informations d'identification pour la plateforme Microsoft.
>

![office365](images/csp2-01.png){.thumbnail}

> [!warning]
> S'agissant de produits sous licences, il n'est pas possible de basculer un *Tenant* Office 365 revendeurs d'un idenfiant client OVHcloud à un autre. Il est nécessaire d'arrêter l'abonnement sur le compte OVHcloud d'origine et souscrire ce même type de licence sur le nouveau compte OVHcloud.
> 

### Gérer votre service Office 365 Revendeur

Une fois le service Office 365 créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Pour cela, rendez-vous dans la section `Sunrise`{.action}. Dans le menu de gauche, choisissez `Office 365 Revendeurs`{.action} puis sélectionnez le service.

Les informations suivantes apparaissent:

- **Nom interne du service** : nom de votre service. Il n'est visible que depuis votre espace client. Il correspond aussi au *Tenant* chez Microsoft.
- **Nom d'affichage du service** : personnalisez le nom d'affichage du service dans votre espace client.
- **Créé le** : date de création du service.
- **Portail d'administration Microsoft** : lien du portail Office qui permet d'administrer vos abonnements.
- La gestion du mot de passe administrateur de votre *Tenant* Microsoft se fait directement depuis l'interface d'administration Microsoft. N'hésitez pas à consulter [la documentation de Microsoft](https://support.microsoft.com/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37).
- La gestion de domaines additionnels se fait également depuis l'interface d'administration de Microsoft. Consultez [la documentation de Microsoft](https://support.microsoft.com/office/connect-your-domain-to-office-365-cd74b4fa-6d34-4669-9937-ed178ac84515).

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Gérer vos abonnements

La gestion de vos abonnements vous permet d'augmenter ou d'annuler les licences associées à votre groupe d'abonnements. Un tableau vous permet de visualiser les détails:

- **ID** : chaque type de licence commandée dispose d'un identifiant (ID) unique.
- **Status** : correspond à l'état de votre licence.
- **Nom de la licence** : indique le type de licence souscrite.
- **Nombre de licences** : indique le nombre de licences disponibles.
- **Date de création** : indique la date de création de l'abonnement au type de licence sélectionné.
- **Dernière mise à jour** : indique la date de dernière mise à jour (comme l'ajout d'une licence par exemple) de l'abonnement.

L’icône <i class="icons-pen"></i> permet de modifier le nombre total de licences de l'abonnement. L'icône <i class="icons-bin"></i> permet de résilier l'abonnement ainsi que toutes ses licences.

> [!primary]
>
> Des conditions particulières d'utilisation fournies par Microsoft sont à respecter pour les licences Éducation. Vous pouvez retrouver ces documents officiels en fonction de votre langue et région [ici](https://www.microsoft.com/licensing/docs){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Gérer les utilisateurs

Maintenant que vous disposez d'un nombre de licences suffisant, vous devez gérer les utilisateurs qui utiliseront ces dernières. Cette partie s'effectue directement depuis le [portail d'administration Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Pour vous y connecter, vous devez renseigner votre identifiant ainsi que le mot de passe envoyé dans l'e-mail OVHcloud vous confirmant l'installation de votre groupe de licences. Ces informations sont envoyées à l'adresse renseignée lors de la création du groupe de licences.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
