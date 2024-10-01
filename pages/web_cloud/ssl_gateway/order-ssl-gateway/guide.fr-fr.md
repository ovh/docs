---
title: 'Commander un SSL Gateway'
excerpt: 'Sécurisez les connexions vers votre site web'
updated: 2024-09-30
---

## Objectif

L'offre SSL Gateway est conçue pour vous faire bénéficier d'un certificat SSL pour votre nom de domaine et votre service d'hébergement (VPS, serveur mail, serveur dédié, etc.).

> [!warning]
>
> Les SSL Gateways sont incompatibles avec les offres d'[hébergements mutualisés OVHcloud](/links/web/hosting). Si vous souhaitez bénéficier d'un certificat SSL pour ce type d'offre, consultez notre guide « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ».
>

**Découvrez comment commander un SSL Gateway.**

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) ou sous-domaine actif.
- Disposer d'un accès à la zone DNS de celui-ci.

## En pratique

### Commande

Pour commander notre offre SSL Gateway, [cliquez ici](/links/web/ssl-gateway).

Choisissez votre offre, puis cliquez sur `Activer maintenant`{.action}.

![order ssl gateway](images/configure-my-ssl-gateway.png)

Sur la nouvelle page qui s'affiche, indiquez dans le formulaire `Rechercher votre nom de domaine`{.action} le nom de domaine ou le sous-domaine concerné, puis cliquez sur l'icône en forme de loupe sur la droite.

> [!warning]
>
> - Offre Free : seuls les noms de domaine jusqu’à 3 niveaux (www.domain.tld) sont autorisés.
>
> - Offre Advanced : les noms de domaine de 4ème niveau (blog.www.domain.tld) et plus sont autorisés.
>

Notre système va ensuite détecter automatiquement la ou les adresses IP de votre site configurées sur votre nom de domaine ou votre sous-domaine. Si vous disposez de plusieurs IPs, choisissez-en une.

> [!warning]
>
> - Si vous disposez de plusieurs adresses IP pour votre site web, vous pourrez n'en choisir qu'une seule lors de la commande.
> - Si vous disposez de l'offre Advanced, vous pourrez par la suite ajouter jusqu'à 2 IPs supplémentaires depuis votre [espace client OVHcloud](/links/manager).
>

Ensuite, choisissez la localisation du datacentre où vous souhaitez installer le SSL Gateway parmi les 2 disponibles.

Si vous le souhaitez et si celle-ci est disponible lors de la commande, cochez la case `Je gère la zone DNS de ce domaine et autorise OVHcloud à modifier automatiquement l'enregistrement DNS requis`{.action}. La zone DNS associée à votre nom de domaine ou votre sous-domaine sera alors automatiquement mise à jour avec l'adresse IP du SSL Gateway.

> [!warning]
>
> Toute modification de votre zone DNS peut prendre jusqu'à 24 heures avant de fonctionner, en raison du cache présent chez les fournisseurs d'accès internet.
>

Vérifiez que l'ensemble de vos choix sont corrects sur la page de commande, puis cliquez sur `Continuer`{.action}.

Pour terminer, laissez-vous guider jusqu'à la validation / paiement de votre bon de commande.

### Configuration de votre zone DNS

Une fois votre bon de commande validé et si vous n'avez pas coché la case `Je gère la zone DNS de ce domaine et autorise OVHcloud à modifier automatiquement l'enregistrement DNS requis`{.action}, un e-mail vous sera envoyé afin de vous demander de faire pointer votre nom de domaine ou votre sous-domaine vers l'infrastructure OVHcloud dans un délai de 3 jours.

> [!warning]
>
> Sans modification de votre zone DNS dans un délai de 3 jours, votre commande sera annulée.
> 

> [!faq]
>
> Cas 1 : votre zone DNS est gérée par les serveurs DNS mutualisés OVHcloud.
>> 
>> - Si votre identifiant est contact *administrateur* ou *technique* de cette zone DNS, vous devrez la modifier dans votre [espace client OVHcloud](/links/manager).
>> - Si vous n'êtes pas contact *administrateur* ou *technique* de cette zone DNS, contactez la personne en charge de celle-ci pour la modifier.
>> 
>> Reportez-vous aux instructions du guide « [Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create) » si nécessaire.
>> 
>
> Cas 2 : votre zone DNS n'est pas gérée par les serveurs DNS mutualisés OVHcloud.
>> 
>> - Dans ce cas il vous suffit de modifier l'IP dans votre zone DNS en vous rendant sur l'interface de votre prestataire ou de votre serveur dédié.
>>
>

Une fois votre modification prise en compte par notre infrastructure, vous recevrez un e-mail de confirmation.

> [!warning]
>
> Toute modification de votre zone DNS peut prendre jusqu'à 24 heures avant de fonctionner, en raison du cache présent chez les fournisseurs d'accès internet.
>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).