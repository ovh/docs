---
title: "Utiliser un certificat SSL EV pour votre site Web"
slug: ssl-ev
excerpt: "Découvrez comment commander et installer un certificat SSL EV sur votre hébergement Web OVHcloud"
section: SSL
order: 03
---

**Dernière mise à jour le 01/12/2022**
 
## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer/crypter les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne "écouter" clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur ces offres d'[hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/). Ces dernières sont présentées dans notre guide "[Gérer un certificat SSL sur son hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)". Ces derniers sont incontournables pour la sacurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL reste identique entre ces trois types de certificat.

La principale différence entre ces types réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Les certificats SSL EV sont ceux pour lesquels les niveaux de vérification et de sécurité sont les plus élevés. Généralement, ce dernier est utilisé pour de très gros sites web ou des sites web "sensibles". Ainsi, le certificat SSL EV fournira le plus haut niveau d'identification disponible.

**Découvrez comment commander et installer un certificat SSL EV sur votre hébergement Web OVHcloud**

Pour les hébergements mutualisés OVHcloud, l'autorité de certification délivrant les certificats SSL EV est [Sectigo](https://sectigostore.com){.external}. 

> [!warning]
>
> Les certificats SSL EV ne sont pas disponibles pour tout le monde. Vérifiez si vous êtes élligibles à sa souscription **avant** de commander ce dernier. Ceci à l'aide des éléments indiqués dans les ["Prérequis"](#Requirements).
>
> Sachez qu'une fois la commande initiée et transmise auprès de notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement ne sera possible**.
>

## Prérequis <a name="Requirements"></a>

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d'un [hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) sur lequel aucun certificat SSL n'est déjà installé
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL
- Être une organisation (entreprise, agence gouvernementale, ...) enregistrée auprès d'un registre officiel
- Disposer de l'autorisation de votre organisation à commander un certificat SSL EV
- Être capable de justifier avec exactitude les informations et coordonnées relative à votre organisation

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **pour toutes les étapes de vérifications directement réalisée avec l'autorité de certification**. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Etape 1 : commander le certificat SSL EV

### Commande depuis l'espace client OVHcloud

Pour cela, consultez notre guide sur comment [gérer un certificat SSL sur son hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/) et sélectionnez bien le **Certificat SSL EV** une fois arrivé dans le tunnel de commande.

Remplissez avec exactitude les informations demandés dans le formulaire de l'étape 1 : Sélection du service du tunnel de commande.

Poursuivez la commande jusqu'au paiement afin de valider la demande de création du certificat SSL.

### Commande depuis le site web OVHcloud (groupée avec l'hébergement et le nom de domaine)