---
title: Que faire si mon site est inaccessible ?
slug: erreur-serveurs-inaccessibles
excerpt: Diagnostiquez les causes de l'inaccessibilité de votre site
section: Diagnostic
---

**Dernière mise à jour le 16/06/2021**
 
## Objectif

Plusieurs erreurs peuvent apparaître en cas d'inaccessibilité de votre site. Les erreurs suivantes indiquent une configuration erronée de vos DNS ou un domaine suspendu : 

Sur Chrome :

![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}

Sur Firefox : 

![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}

Sur Edge : 

![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}

Sur Safari : 

![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}
 
**Découvez comment résoudre les erreurs du type "Ce site est inaccessible"**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovh.com/fr/domaines/)
- Avoir la gestion de ses serveurs et de sa zone [DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns)
- Etre connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
 
## En pratique

### Étape 1 : Vérifiez la validité de votre nom de domaine

Pour vérifier si votre nom de domaine fonctionne ou non, cliquez en haut à droite sur votre nom et prénom, afin de faire apparaître le menu de droite.

Puis cliquez sur `Produits et services`{.action}

Vérifiez la `Disponibilité`{.action} de votre nom de domaine.

Renouvelez-le si nécessaire, via le bouton `...`{.action} à droite de l'écran, puis `Renouveler`{.action}.

> [!warning]
>
> Le renouvellement de vos services est sous votre entière responsabilité. OVHcloud, en tant qu'hébergeur, a l'obligation de supprimer définitivement les domaines et services qui n'ont pas été renouvelés à temps, ainsi que les données qu'ils contiennent.
>
> De ce fait, nous vous recommandons d'activer le [renouvellement automatique](https://docs.ovh.com/fr/billing/renouvellement-automatique-ovh/#en-pratique) sur l'ensemble de vos abonnements.

### Étape 2 : Vérifiez les serveurs DNS

Pour vérifier la validité de vos [serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/), cliquez en haut à droite de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) sur `Noms de domaine`{.action}, puis sur le domaine de votre site.

Cliquez ensuite sur l'onglet `Zone DNS`{.action}, puis `Serveurs DNS`{.action} : 

|Scénario|Action à entreprendre|
|---|---|
|Les serveurs DNS indiqués sont identiques aux cibles des entrées de type `NS` dans la zone de votre domaine. |Passez à [l'étape 3](#etape3).|
|Aucun serveurs DNS n'est renseigné dans l'onglet `Serveurs DNS`{.action}.|[Renseignez les cibles]((https://docs.ovh.com/fr/domains/generalites-serveurs-dns/#modifier-les-serveurs-dns)) des entrées de type `NS` indiquées dans votre `Zone DNS`{.action}, puis patientez 48 heures au maximum (délai technique maximum de propagation des changements de serveurs DNS)|
|

### Étape 3 : Vérifiez la zone DNS
 
## Aller plus loin <a name="aller-plus-loin"></a>
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.