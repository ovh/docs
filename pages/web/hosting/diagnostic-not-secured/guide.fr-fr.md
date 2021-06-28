---
title: "Que faire si mon site est considéré comme non-sécurisé ?"
slug: erreur-site-non-securise
excerpt: "Réagir en cas de messages d'erreur liés à la sécurité de votre site"
section: Diagnostic
---

**Dernière mise à jour le 28/06/2021**
 
## Objectif

Plusieurs messages d'erreurs peuvent apparaître en cas d'inaccessibilité de votre site. Les exemples ci-dessous indiquent que votre hébergement web ne contient pas de certificat SSL (si votre site n'affiche pas l'une des anomalies décrites dans ce guide, consultez la section [Aller plus loin](#aller-plus-loin)) : 

|Navigateur|Erreur concernée|
|-|---|
|Sur Chrome : « Votre connexion n'est pas privée »|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Sur Firefox : « Attention : risque probable de sécurité »|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Sur Edge : « Votre connexion n’est pas privée »|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Sur Safari : « Cette connexion n'est pas privée »|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Découvez comment résoudre les erreurs du type "Site non sécurisée"**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Avoir la gestion de ses serveurs et de sa zone [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns)
- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
 
## En pratique

### Étape 1 : Vérifiez l'hébergement auquel est relié votre nom de domaine

Pour retrouver l'adresse IP de l'hébergement auquel votre nom de domaine est lié, cliquez en haut à gauche de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) sur `Noms de domaine`{.action}, puis sur le domaine de votre site : 

![click-on-domain-name](images/click-on-domain-name.png){.thumbnail}

Cliquez ensuite sur l'onglet `Serveurs DNS`{.action}, puis `Zone DNS`{.action} :

![dns-tabs](images/dns-tabs.png){.thumbnail}

> [!warning]
>
> 
>
> 

Dans cette étape, vous allez retrouver l'adresse IP de votre hébergement, puis l'ajouter à votre `Zone DNS`{.action}.

Si votre site est hébergé en dehors de l'infrastructure OVHcloud ou par une tierce personne, contactez le support de l'hébergeur ou le prestataire concerné, afin d'obtenir l'adresse IP du serveur hébergeant votre site.

Si votre site est hébergé sur l'une de vos offres mutualisées OVHcloud, cliquez sur l'onglet `Hébergements`{.action} à gauche de votre écran, puis sur l'hébergement concerné.

![hosting-menu](images/hosting-menu.png){.thumbnail}

Dans l'onglet `Informations générales`{.action}, copiez l'adresse IPV4 et/ou IPV6 de votre domaine, 

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

Puis reportez-la dans la [Zone DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1) de votre domaine, en modifiant ou créant une ou plusieurs entrées de type `A`. Patientez enfin 24 heures au maximum (délai technique maximum de propagation des modifications dans la `Zone DNS`{.action}).

### Étape 2 : Vérifiez le certificat SSL de votre hébergement

#### Scénario 1 : 

#### Scénario 2 : 

#### Scénario 3 : 

#### Scénario 4 : 

### Étape 3 : Vérifiez la zone DNS <a name="etape3"></a>

## Aller plus loin <a name="aller-plus-loin"></a>

[Résoudre l’erreur « Site non installé »](../erreur-site-non-installe/)

[Comment diagnostiquer une page blanche ?](../comment-diagnostiquer-page-blanche/)

[Que faire en cas d’erreur 500 Internal Server Error ?](../erreur-500-internal-server-error/)

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](../erreurs-frequentes-modules-en-1-clic/)
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.