---
title: "Hébergement web - Activer un certificat SSL Sectigo DV"
excerpt: "Découvrez comment activer un certificat SSL Sectigo DV sur votre hébergement Web OVHcloud"
updated: 2025-12-16
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

Pour les hébergements mutualisés OVHcloud, l'autorité de certification délivrant les certificats SSL DV est [Sectigo](https://sectigostore.com).

> [!warning]
>
> Une fois la commande du certificat réalisée et transmise à notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement de commande n'est possible**.

**Découvrez comment activer un certificat SSL Sectigo DV sur votre hébergement Web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting).
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.

## En pratique

> [!warning]
>
> Les certificats SSL Sectigo DV proposés chez OVHcloud ne sont valables que pour l'un des deux cas suivants sur votre hébergement web :
>
> - Un seul nom de domaine + son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`).
> - Un seul sous-domaine (par exemple : `sub.domain.tld`).
>
> Si d'autres noms de domaine ou sous-domaines sont déclarés sur votre hébergement web et que vous souhaitez également leur attribuer un certificat SSL, vous pouvez soit :
>
> - [Activer un certificat SSL gratuit Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (si ce n'est pas déjà le cas par défaut).
> - Activer un (ou plusieurs) autre(s) certificat(s) SSL payant(s) ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) ou [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Installer votre propre certificat SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Avant de commander le certificat SSL Sectigo DV sur votre hébergement web**, vérifiez que **le nom de domaine/sous-domaine** concerné par votre certificat SSL : 

- pointe vers l'adresse IP de votre hébergement web. 
- est déclaré sur l'un des sites web de votre hébergement web.
- ne dispose pas déjà d'un certificat SSL actif.

> [!primary]
>
> Si vous souhaitez souscrire un certificat SSL Sectigo DV pour un nom de domaine (par exemple : `domain.tld`), vérifiez bien que son sous-domaine en « www » (par exemple : `www.domain.tld`) pointe bien également vers l'adresse IP de votre hébergement web et est correctement déclaré sur l'un des sites web de votre hébergement web.
>
> En effet, le cas échéant et si vous commandez le certificat SSL Sectigo DV sans vous en assurer, vous devrez effectuer un correctif a posteriori. Vous devrez alors supprimer le certificat SSL Sectigo DV précédemment souscrit **sans être remboursé**, puis en commander un nouveau. L'objectif est que le nouveau certificat SSL Sectigo DV englobe bien à la fois votre nom de domaine `domain.tld` et son sous-domaine en « www » `www.domain.tld`.
>
> Pour rappel, si vous souscrivez à un certificat SSL Sectigo DV directement pour un sous-domaine (par exemple : `sub.domain.tld`), vous n'êtes pas concerné par cette situation.

Pour vous en assurer, consultez si besoin nos guides ci-dessous :

- [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), partie **Désactiver un certificat SSL sur un hébergement web**.

### Commander le certificat SSL Sectigo DV

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes :

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Hébergement web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Certificats SSL`{.action}.
>>
>> ![Certificats SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Étape 4**
>>
>> Lorsque le contenu de l'onglet apparaît, cliquez sur le bouton `Commander un certificat SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Étape 5**
>>
>> Dans la nouvelle fenêtre qui s'ouvre, sélectionnez le nom de domaine ou sous-domaine concerné à l'aide du menu déroulant, puis cliquez sur `Valider`{.action} pour être redirigé vers le bon de commande de votre certificat SSL Sectigo DV.
>>
>> ![SSL Sectigo sélection du domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Poursuivez la commande jusqu'au paiement afin de valider la demande de création du certificat SSL Sectigo DV pour votre nom de domaine et/ou sous-domaine sur votre hébergement web.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL Sectigo DV est envoyée à l'autorité de certification Sectigo.
>
> Dès lors, aucun remboursement du SSL Sectigo DV n'est possible.

L'installation du certificat SSL Sectigo DV peut prendre jusqu'à **24** heures.

### Vérifier l'activation du certificat SSL Sectigo DV

Pour vérifier que l'installation est terminée, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes :

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Hébergement web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Certificats SSL`{.action}.
>>
>> ![Certificats SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Étape 4**
>>
>> Lorsque le contenu de l'onglet apparaît, vérifiez que chaque nom de domaine et/ou sous-domaine concerné figure dans le tableau avec le type de certificat SSL `Sectigo`.
>>
>> ![Tableau de gestion des certificats SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Votre certificat SSL Sectigo DV est désormais installé et actif. Vous pouvez dès à présent l'utiliser avec votre site web en passant, par exemple, votre [site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Aller plus loin <a name="go-further"></a>

[Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
 Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).