---
title: "Hébergement web - Gérer un certificat SSL"
excerpt: "Découvrez comment gérer un certificat SSL sur votre hébergement web OVHcloud"
updated: 2024-10-22
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils vous sont présentés plus bas dans ce guide. Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL sont identiques entre ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Disposer d'un certificat SSL pour son site web est incontournable pour l'utiliser en HTTPS.

**Découvrez comment gérer un certificat SSL sur votre hébergement web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder un [hébergement web OVHcloud](/links/web/hosting).
- Avoir enregistré au moins un [nom de domaine](/links/web/domains).

## En pratique

> [!warning]
>
> **Avant de poursuivre**, vérifiez que **le (les) nom(s) de domaine et/ou sous-domaine(s)** concerné(s) par votre futur certificat SSL :
>
> - pointe(nt) vers l'adresse IP de votre hébergement web ; 
> - est (sont) déclaré(s) en multisite sur votre hébergement web.
>
> Pour vous en assurer, vous pouvez consulter nos guides :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Activer un certificat SSL sur son hébergement web <a name="ssl-enable"></a>

OVHcloud propose 4 solutions pour activer/installer un certificat SSL sur un hébergement web. Chacune de ces solutions fait l'objet d'une documentation détaillée.

Retrouvez ci-dessous les 4 liens vers nos guides dédiés à ces 4 solutions :

- [Activer le certificat SSL gratuit Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt) : certificat pouvant inclure jusqu'à **99** noms de domaines/sous-domaines déclarés sur un hébergement web.
- [Activer le certificat SSL payant Sectigo (DV)](/pages/web_cloud/web_hosting/ssl_dv) : certificat valable pour un seul nom de domaine + son sous-domaine en « www » (exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (exemple : `sub.domain.tld`).
- [Activer le certificat SSL payant Sectigo (EV)](/pages/web_cloud/web_hosting/ssl_ev) : certificat valable pour un seul nom de domaine + son sous-domaine en « www » (exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (exemple : `sub.domain.tld`).
- [Installer un certificat SSL personnalisé](/pages/web_cloud/web_hosting/ssl_custom) : si vous disposez de votre propre certificat SSL ou qu'aucune des 3 solutions précédentes ne correspondent à vos besoins.

> [primary]
>
> Il n'est possible d'installer qu'un seul certificat SSL par hébergement web (parmi les 4 solutions pré-citées).
>
> Si vous avez besoin d'activer un certificat SSL pour plusieurs noms de domaine/sous-domaines déclarés sur votre hébergement web, privilégiez l'installation d'un [certificat SSL gratuit Let's Encrypt](/links/web/hosting-options-ssl) ou installez votre propre [certificat SSL personnalisé](/pages/web_cloud/web_hosting/ssl_custom).

Si nécessaire, n'hésitez pas à consulter les 4 guides ci-dessus avant de faire votre choix.

### Supprimer un certificat SSL sur un hébergement web <a name="delete-ssl"></a>

> [!warning]
>
> Si vous souhaitez supprimer un certificat SSL de votre hébergement web et **avant de poursuivre**, assurez-vous que la suppression du certificat SSL ne rendra pas vos sites web inaccessibles. Le cas échéant, vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils essaieront d'accéder à votre site web en « HTTPS ».

Cette vérification étant inhérente aux paramètres de votre ou vos sites web, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce propos.

Pour supprimer le certificat SSL installé sur votre hébergement web, effectuez les actions suivantes : 

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.
7. A droite de la mention `Certificat SSL`, cliquez sur le bouton `...`{.action}, puis sur `Supprimer le SSL`{.action}.
8. Dans la fenêtre qui s'affiche, cliquez sur `Valider`{.action} pour confirmer la suppression du certificat SSL.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

Celle-ci sera effective sous quelques heures au maximum.

> [!warning]
>
> La suppression d'un certificat SSL payant **Sectigo** (DV ou EV) est définitive, même si le certificat n'avait pas encore expiré. Aucun remboursement au prorata du temps restant ne pourra être effectué. Si vous souhaitez réinstaller un certificat SSL **Sectigo** (DV ou EV), vous devrez donc obligatoirement réaliser une nouvelle commande et payer l'intégralité du nouveau certificat SSL souscrit.
>

### Corriger les erreurs fréquemment rencontrées avec les certificats SSL proposés sur les hébergements web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ce message indique que vous êtes déjà propriétaire d'un certificat SSL. Il n'est donc pas nécessaire d'activer un nouveau certificat SSL sur votre hébergement web.

- 1 : Si le certificat SSL installé sur votre hébergement web est un certificat SSL gratuit Let's Encrypt , consultez notre guide sur le certificat SSL [Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt) pour poursuivre vos actions.

- 2 : Si le certificat SSL installé sur votre hébergement web n'est pas celui que vous souhaitez utiliser, vous pouvez [supprimer votre certificat SSL](#delete-ssl) actuel, puis [activer un nouveau certificat SSL](#ssl-enable) sur votre hébergement web.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Trois cas de figure peuvent expliquer cette notification.

- 1 : Le nom de domaine associé à votre site web pointe vers l'adresse IP du CDN de votre hébergement web, avec aucune option CDN active sur votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web sans CDN à votre nom de domaine.
Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

- 2 : Le nom de domaine associé à votre site web ne pointe pas vers l'adresse IP de votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web à votre nom de domaine.
Si vous avez activé une option CDN sur votre hébergement web, vous pouvez également utiliser l'adresse IP de l'hébergement web avec CDN.
Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

- 3 : Aucun des noms de domaines présent dans l'onglet « multisite » ne dispose d'une option SSL « active » :

Pour résoudre la situation, activez le certificat SSL pour le (les) nom(s) de domaine. Si besoin, consultez la partie « [Activer un certificat SSL](#ssl-enable) » du présent guide pour poursuivre vos actions.

#### Vous avez commandé un SSL Sectigo EV en même temps que votre hébergement web, mais le certificat n'est pas encore actif et l'hébergement web ne fonctionne pas correctement

Cette situation est liée aux étapes que vous devez réaliser afin d'activer le SSL EV sur votre hébergement web.

Si besoin, consultez notre guide « [Hébergement web - Activer un certificat SSL EV](/pages/web_cloud/web_hosting/ssl_ev) » pour résoudre cette situation.

> [!primary]
>
> Si le certificat SSL EV n'est pas totalement actif, la commande ne sera jamais clôturée et ne générera jamais de facture. De ce fait, le service d'hébergement web ne fonctionnera pas correctement.
>

#### Après l'expiration du Certificat SSL Sectigo (DV ou EV), vous rencontrez l'erreur "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Cette erreur survient chaque fois que le Certificat SSL Sectigo (activé directement depuis l'hébergement web) expire et que l'adresse IP de l'hébergement web change. De ce fait, vous devez faire pointer votre nom de domaine vers la bonne adresse IP (enregistrement de type A), directement depuis la zone DNS active de votre nom de domaine.

Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

#### Le certificat SSL est actif sur votre hébergement web, mais vous rencontrez le message "Your connection is not private" sur votre site web

Ce message apparaît dans les cas suivants :

- 1 : La règle de redirection vers votre URL en « HTTPS » est mal configurée ou inexistante dans le fichier « .htaccess » :

Pour corriger cela, consultez notre tutoriel « [Réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) » ou faites appel à un [prestataire spécialisé](/links/partner) si vous épprouvez des difficultés.

- 2 : Certains éléments de la page web ne sont pas correctement redirigés vers des éléments chiffrés en « HTTPS » :

Pour corriger cela, vous devez vous assurer que l'ensemble de votre site web est chiffré à l'aide du protocole « HTTPS ».
Si besoin, consultez notre tutoriel « [Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) » ou faites appel à un [prestataire spécialisé](/links/partner) si vous épprouvez des difficultés.

> [!success]
>
> Les éléments concernés sur la page web peuvent être vus directement à partir des informations SSL du navigateur internet, en consultant les *détails du Certificat*.
>

## Aller plus loin

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).