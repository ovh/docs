---
title: Gérer un groupe de licences Office 365 Revendeurs (CSP2) OVHcloud
slug: commander-et-gerer-un-groupe-de-licences-office-365-revendeur-csp2-ovh
excerpt: Découvrez comment  souscrire et administrer un service Office 365 Revendeurs (CSP2) chez OVHcloud
section: Office
order: 03
---

**Dernière mise à jour le 17/06/2022**

## Objectif

Office 365 Revendeurs (CSP2) est un service vous permettant de bénéficier de différents types de licences Microsoft 365 aux tarifs préférentiels afin que vous puissiez les revendre auprès de vos clients.

**Découvrez comment  souscrire et administrer un service Office 365 Revendeurs (CSP2) chez OVHcloud.**

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d’un MPN ID (Microsoft Partner Network IDentifiant) 
- Être inscrit au programme CSP (Cloud Solution Provider) de Microsoft en tant que revendeur indirect dans la région où vous exercez (par exemple : « UE » pour l’Europe)

> [!warning]
>
> A partir du 01/07/2022, tous les services Office 365 revendeurs (CSP2) qui ne disposeront pas d’un MPN ID inscrit au programme « CSP revendeur indirect » seront désactivés par Microsoft.
>
> Disposer d'un MPN ID est désormais obligatoire pour toute nouvelle souscription.
>

Si vous ne disposez pas encore d’un MPN ID, vous pouvez vous en créer un (si vous êtes éligible aux conditions de Microsoft) en suivant la [documentation officielle de Microsoft](https://docs.microsoft.com/fr-fr/partner-center/mpn-create-a-partner-center-account){.external}.

Pour vous inscrire ensuite en tant que revendeur indirect, nous vous invitons à consulter cette autre [documentation officielle de Microsoft](https://docs.microsoft.com/fr-fr/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> Le MPN ID vous permettra d'obtenir un cashback sur les abonnements que vous commanderez via l'espace client OVHcloud. Ce cashback est soumis à des règles définies par Microsoft, en fonction des volumes d'abonnements que vous générerez.
>

## En pratique

### Commander un service Office 365 Revendeurs

Pour commander un service Office 365 Revendeurs, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Une fois connecté, sélectionnez `Sunrise`{.action} dans le bandeau supérieur puis cliquez sur `Office 365 Revendeurs`{.action}.

- Saisissez votre MPN ID préalablement créé auprès de Microsoft.
- Complétez les informations de contact du client final, celles-ci sont demandées pour définir le gestionnaire du groupe de licences (Tenant) que vous allez créer.

> [!primary]
> 
> Vous pouvez également définir un **sous-domaine personnalisé** lors de la création d'une nouvelle plateforme en cochant la petite case prévue à cet effet (sous réserve des noms disponibles).
>

- Dans la liste en dessous, indiquez les licences que vous souhaitez ajouter à votre groupe.
- Cliquez sur `Commander`{.action} pour finaliser votre commande.

> [!warning]
>
> Veuillez vous assurer de la validité de l'adresse e-mail renseignée lors de la création de votre groupe de licences, car celle-ci recevra les informations d'identification à la plateforme Microsoft.
>

![office365](images/csp2-01.png){.thumbnail}

#### Cas particulier des délégations

- Si vous disposez déjà d'un service Office 365 CSP2 chez Microsoft, vous avez la possibilité d'en déléguer l'administration à OVHcloud. Vous pourrez ainsi ajouter des abonnements supplémentaires directement depuis votre espace client OVHcloud. Lors de la commande d'un nouveau groupe de licences, vous devrez alors choisir `Délégation d'une plateforme créée au préalable chez Microsoft` et préciser avec exactitude le **Tenant Office 365 existant** que vous pouvez retrouver sur votre portail Microsoft, ainsi que votre MPN ID.

- Si vous passez déjà par un autre fournisseur qu'OVHcloud pour votre Office 365 revendeurs, vous pourrez également en déléguer l'administration à OVHcloud mais vous devrez rompre au préalable le lien avec votre ancien fournisseur.

- Une double validation sera nécessaire pour finaliser l'apparition du tenant dans votre espace client OVHcloud.

- Une fois les licences souscrites sur le tenant délégué, ces dernières seront disponibles sur votre [portail d'administration Microsoft](https://portal.office.com/Admin/Default.aspx){.external}. Vous devrez alors remplacer vos anciennes licences dans votre [portail d'administration Microsoft](https://portal.office.com/Admin/Default.aspx){.external} par les licences OVHcloud puis résilier vos anciennes licences afin de ne pas continuer à les payer en double.

- Rassurez-vous, si vous disposez de licences indisponibles à l'achat chez OVHcloud, vous pouvez tout à fait conserver ces licences actives chez Microsoft.

> [!warning]
> Etant donné qu'il s'agit de produits sous licences, il n'est pas possible de basculer un tenant Office 365 revendeurs d'un idenfiant client OVHcloud à un autre.
> 


### Gérer votre service Office 365 Revendeur

Une fois le service Office 365 créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Pour cela, rendez-vous dans la section `Sunrise`{.action}. Dans le menu de gauche, choisissez `Office 365 Revendeurs`{.action} puis sélectionnez le service.

Les informations suivantes apparaissent:

- **Nom interne du service** : indique le nom de votre service. Il n'est visible que depuis votre espace client. Il correspond aussi au *Tenant* (ce qui contient votre groupe de licences) chez Microsoft.
- **Nom d'affichage du service** : permet de personnaliser le nom d'affichage du service dans votre espace client.
- **Créé le** : indique la date de création du service.
- **Portail d'administration Microsoft** : lien du portail Office qui permet d'administrer vos abonnements.
- **Réinitialiser le mot de passe administrateur** : permet de modifier le mot de passe de connexion au portail d’administration Microsoft.

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Configurer automatiquement un nom de domaine hébergé chez OVHcloud

OVHcloud met à disposition un outil facilitant la configuration de la zone DNS de votre nom de domaine. Vous pouvez configurer automatiquement vos noms de domaine utilisant la zone DNS OVHcloud afin qu'ils puissent fonctionner avec les solutions suivantes :

- Exchange Online;
- Skype;
- Intune.

Pour réaliser la manipulation, vous devez choisir le domaine concerné dans la liste déroulante puis sélectionner les solutions souhaitées. Nous créerons alors les champs DNS adéquats dans la zone DNS OVHcloud du domaine.

> [!warning]
> Pour que la configuration soit fonctionnelle, vous devez vous assurer que vous utilisez bien les serveurs DNS OVHcloud pour les noms de domaine concernés. N'hésitez pas à consulter notre guide [Modifier les serveurs DNS d’un nom de domaine OVHcloud](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).
>

![office365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Gérer vos abonnements

La gestion de vos abonnements vous permet d'augmenter ou d'annuler les licences associées à votre groupe d'abonnements. Un tableau vous permet de visualiser les détails:

- **ID** : chaque type de licence commandée dispose d'un identifiant (ID) unique.
- **Status** : correspond à l'état de votre licence.
- **Nom de la licence** : indique le type de licence souscrite.
- **Nombre de licences** : indique le nombre de licences disponibles.
- **Date de création** : indique la date de création de l'abonnement au type de licence sélectionné.
- **Dernière mise à jour** : indique la date de dernière mise à jour (comme l'ajout d'une licence par exemple) de l'abonnement.

`L’icône en forme de crayon` permet de modifier le nombre total de licences de l'abonnement. `L'icône en forme de corbeille` permet de résilier l'abonnement ainsi que toutes ses licences.

> [!primary]
>
> Des conditions particulières d'utilisation fournies par Microsoft sont à respecter pour les licences Éducation. Vous pouvez retrouver ces documents officiels en fonction de votre langue et région [ici](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Gérer les utilisateurs

Maintenant que vous disposez d'un nombre de licences suffisant, vous devez gérer les utilisateurs qui utiliseront ces dernières. Cette partie s'effectue directement depuis le [portail d'administration Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Pour vous y connecter, vous devez renseigner votre identifiant ainsi que le mot de passe envoyé dans l'e-mail OVHcloud vous confirmant l'installation de votre groupe de licences. Ces informations sont envoyées à l'adresse renseignée lors de la création du groupe de licences.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}
