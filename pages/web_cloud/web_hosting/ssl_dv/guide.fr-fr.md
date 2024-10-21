---
title: "Hébergement web - Activer un certificat SSL Sectigo DV"
excerpt: "Découvrez comment activer un certificat SSL Sectigo DV sur votre hébergement Web OVHcloud"
updated: 2024-10-18
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes émises depuis votre site web.

Nous proposons plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL sont identiques entre ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Pour les hébergements mutualisés OVHcloud, l'autorité de certification délivrant les certificats SSL DV est [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Une fois la commande du certificat réalisée et transmise à notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement de commande n'est possible**.
>

**Découvrez comment activer un certificat SSL Sectigo DV sur votre hébergement Web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting) sur lequel aucun certificat SSL n'est déjà installé.
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.

## En pratique

> [!warning]
>
> Les certificats SSL Sectigo DV proposés chez OVHcloud ne sont valables que pour l'un des deux cas suivants sur votre hébergement web :
>
> - un seul nom de domaine + son sous-domaine en « www » (exemple : `domain.tld` et `www.domain.tld`) ;
> - un seul sous-domaine (exemple : `sub.domain.tld`).
>
> Cela signifie que si vous avez d'autres noms de domaine/sous-domaines déclarés en multisite sur votre hébergement web, ces derniers ne pourront pas bénéficier d'un certificat SSL.
>
> En effet, il n'est possible d'installer qu'un seul certificat SSL par hébergement web.
>
> Si vous avez besoin d'activer un certificat SSL pour plusieurs noms de domaine/sous-domaines déclarés sur votre hébergement web, privilégiez l'installation d'un [certificat SSL gratuit Let's Encrypt](/links/web/hosting-options-ssl) ou installez votre propre [certificat SSL personnalisé](/pages/web_cloud/web_hosting/ssl_custom).

**Avant de commander le certificat SSL Sectigo DV sur votre hébergement web**, vérifiez que **le nom de domaine/sous-domaine** concerné par votre certificat SSL : 

- pointe vers l'adresse IP de votre hébergement web ; 
- est déclaré en multisite sur votre hébergement web.

> [!primary]
>
> Dans le cas où vous souhaitez souscrire à un certificat SSL Sectigo DV pour un nom de domaine (exemple : `domain.tld`), vérifiez bien que son sous-domaine en « www » (exemple : `www.domain.tld`) pointe bien également vers l'adresse IP de votre hébergement web et est correctement déclaré en multisite.
>
> En effet, le cas échéant et si vous commandez le certificat SSL Sectigo DV sans vous en assurer, vous devrez effectuer un correctif a posteriori. Vous devrez alors supprimer le certificat SSL Sectigo DV précédemment souscrit **sans être remboursé**, puis en commander un nouveau. L'objectif est que le nouveau certificat SSL Sectigo DV englobe bien à la fois votre nom de domaine `domain.tld` et son son sous-domaine en « www » `www.domain.tld`.
>
> Pour rappel, si vous souscrivez à un certificat SSL Sectigo DV directement pour un sous-domaine (Exemple : `sub.domain.tld`), vous n'êtes pas concerné par cette situation.

Vérifiez également les point suivants :

- La case `SSL` ne doit pas être cochée lors de l'ajout en multisite du nom de domaine/sous-domaine concerné par votre certificat SSL Sectigo DV.
- Le statut `A générer` ou `Actif` ne doit pas déjà être présent pour le nom de domaine/sous-domaine concerné par votre certificat SSL Sectigo DV.

Si besoin et pour vous en assurer, consultez nos guides :

- [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
- [Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Commander le certificat SSL Sectigo DV

Pour commander le certificat SSL Sectigo DV, réalisez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.
7. A droite de la mention `Certificat SSL`, cliquez sur le bouton `...`{.action}, puis sur `Commander un certificat SSL`{.action}.


![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez `Certificat payant`{.action} parmi la liste des choix possibles.

Sélectionnez ensuite le nom de domaine/sous-domaine concerné dans la liste déroulante qui apparaît, puis cliquez sur `Suivant`{.action}.

Dans la nouvelle fenêtre qui s'affiche, cliquez sur `Valider`{.action} pour être redirigé vers le bon de commande de votre certificat SSL Sectigo DV.

Poursuivez la commande jusqu'au paiement afin de valider la demande de création du certificat SSL Sectigo DV pour votre nom de domaine/sous-domaine sur votre hébergement web.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL Sectigo DV est envoyée à l'autorité de certification Sectigo.
>
> Dès lors, aucun remboursement du SSL Sectigo DV ne sera possible.

L'installation du certificat SSL Sectigo DV peut prendre jusqu'à **24** heures.

### Vérifier l'activation du certificat SSL Sectigo DV

Pour vérifier que l'installation est terminée, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.

Si tout est terminé, vous devez retrouver, en dessous de la mention `Certificat SSL`, une valeur équivalente à celle-ci : `Oui - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

Votre certificat SSL Sectigo DV est désormais installé et actif. Vous pouvez dès à présent l'utiliser avec votre site web en passant, par exemple, votre [site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Aller plus loin <a name="go-further"></a>

[Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).