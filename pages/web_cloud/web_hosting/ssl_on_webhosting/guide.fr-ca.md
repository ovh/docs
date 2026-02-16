---
title: "Hébergement web - Gérer un certificat SSL"
excerpt: "Découvrez comment gérer un certificat SSL sur votre hébergement web OVHcloud"
updated: 2025-12-16
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées depuis votre site web.

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
> **Avant de poursuivre**, vérifiez que **le ou les noms de domaine et/ou sous-domaines** concernés par votre ou vos futurs certificats SSL :
>
> - pointe(nt) vers l'adresse IP de votre hébergement web. 
> - est (sont) déclaré(s) sur l'un des sites web de votre hébergement web.
> - ne dispose(nt) pas déjà d'un certificat SSL actif.
>
> Pour vous en assurer, consultez si besoin nos guides ci-dessous :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), partie **Désactiver un certificat SSL sur un hébergement web**.

### Activer un certificat SSL sur son hébergement web <a name="ssl-enable"></a>

OVHcloud propose 4 solutions pour activer/installer un certificat SSL sur un hébergement web. Chacune de ces solutions fait l'objet d'une documentation détaillée.

Retrouvez ci-dessous les 4 liens vers nos guides dédiés à ces 4 solutions :

- [Hébergement web - Activer un certificat SSL gratuit Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) : Certificat gratuit disponible avec nos hébergement web.
- [Hébergement web - Activer un certificat SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) : Certificat valable pour un seul nom de domaine + son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (par exemple : `sub.domain.tld`).
- [Hébergement web - Activer un certificat SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev) : Certificat valable pour un seul nom de domaine + son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (par exemple : `sub.domain.tld`).
- [Hébergement web - Installer un certificat SSL personnalisé](/pages/web_cloud/web_hosting/ssl_custom) : Si vous disposez de votre propre certificat SSL ou qu'aucune des 3 solutions précédentes ne correspond à votre besoin.

### Désactiver un certificat SSL sur un hébergement web <a name="delete-ssl"></a>

> [!warning]
>
> La suppression d'un certificat SSL payant **Sectigo** (DV ou EV) est définitive, même si le certificat n'est pas encore expiré. Aucun remboursement au prorata du temps restant ne pourra être effectué. Si vous souhaitez réinstaller un certificat SSL **Sectigo** (DV ou EV), vous devrez donc obligatoirement réaliser une nouvelle commande et payer l'intégralité du nouveau certificat SSL souscrit.
>
> De plus, si vous souhaitez désactiver définitivement un certificat SSL de votre hébergement web, assurez-vous **avant de poursuivre** que la désactivation définitive du certificat SSL ne rendra pas vos sites web inaccessibles. Le cas échéant, vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils essaieront d'accéder à votre site web en « HTTPS ».
>
> Cette vérification étant inhérente aux paramètres de votre ou de vos sites web, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce sujet.

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
>> Dans le tableau présent en bas de la nouvelle page qui s'affiche, cliquez sur le bouton `⁝`{.action}, situé à droite de la ligne correspondant au nom de domaine concerné, puis cliquez sur `Désactiver SSL`{.action}.
>>
>> ![Désactiver SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Étape 5**
>>
>> Dans la fenêtre qui s'ouvre, confirmez la désactivation en cliquant sur `Valider`{.action}.
>>
>> ![Supprimer SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

La désactivation du certificat SSL sera effective sous quelques heures au maximum.

### Corriger les erreurs régulièrement rencontrées avec les certificats SSL proposés sur les hébergements web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ce message indique que vous êtes déjà propriétaire d'un certificat SSL. Il n'est donc pas nécessaire d'activer un nouveau certificat SSL sur votre hébergement web.

Si le certificat SSL installé sur votre hébergement web n'est pas celui que vous souhaitez utiliser, vous pouvez [désactiver votre certificat SSL](#delete-ssl) actuel, puis [activer un nouveau certificat SSL](#ssl-enable) sur votre hébergement web.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Deux situations peuvent expliquer cette notification.

- 1 : Le nom de domaine associé à votre site web pointe vers l'adresse IP du CDN de votre hébergement web, avec aucune option CDN active sur votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web sans CDN à votre nom de domaine.
Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

- 2 : Le nom de domaine associé à votre site web ne pointe pas vers l'adresse IP de votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web à votre nom de domaine.
Si vous avez activé une option CDN sur votre hébergement web, vous pouvez également utiliser l'adresse IP de l'hébergement web avec CDN.
Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

#### Vous avez commandé un SSL Sectigo EV en même temps que votre hébergement web, mais le certificat n'est pas encore actif et l'hébergement web ne fonctionne pas correctement

Cette situation est liée aux étapes que vous devez réaliser afin d'activer le SSL EV sur votre hébergement web.

Si besoin, consultez notre guide « [Hébergement web - Activer un certificat SSL EV](/pages/web_cloud/web_hosting/ssl_ev) » pour résoudre cette situation.

> [!primary]
>
> Si le certificat SSL EV n'est pas totalement actif, la commande ne sera jamais clôturée et ne générera jamais de facture. De ce fait, le service d'hébergement web ne fonctionnera pas correctement.

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
> Les éléments concernés sur la page web peuvent être vus directement à partir des informations SSL du navigateur internet, en consultant les *détails du certificat*.

## Aller plus loin

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).