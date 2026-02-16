---
title: "Hébergement web - Activer un certificat SSL Sectigo EV"
excerpt: "Découvrez comment commander et installer un certificat SSL Sectigo EV sur votre hébergement Web OVHcloud"
updated: 2025-12-16
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL sont identiques entre ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Les certificats SSL EV sont ceux pour lesquels les niveaux de vérification et de sécurité sont les plus élevés. Généralement, le certificat SSL EV est utilisé pour de très gros sites web ou des sites web sensibles. Ce certificat fournira le plus haut niveau d'identification disponible.

Pour les hébergements mutualisés OVHcloud, l'autorité de certification délivrant les certificats SSL EV est [Sectigo](https://sectigostore.com).

> [!warning]
>
> Les certificats SSL EV ne sont pas disponibles pour tout le monde. Vérifiez si vous êtes éligible à sa souscription **avant** de commander ce dernier, en vous aidant des éléments indiqués dans les [prérequis](#requirements) de ce guide.
>
> Sachez qu'une fois la commande initiée et transmise auprès de notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement ne sera possible**.

**Découvrez comment commander et installer un certificat SSL Sectigo EV sur votre hébergement Web OVHcloud**

## Prérequis <a name="requirements"></a>

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting).
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.
- Être une organisation (entreprise, agence gouvernementale, etc.) enregistrée auprès d'un registre officiel.
- Disposer de l'autorisation de votre organisation à commander un certificat SSL Sectigo EV.
- Être en capacité de justifier avec exactitude les informations et coordonnées relatives à votre organisation.

Pour vérifier si vous êtes éligible à la souscription d'un certificat SSL Sectigo EV, rendez-vous sur [ce lien](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **pour toutes les étapes de vérifications directement réalisées avec l'autorité de certification Sectigo**. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.

### 1 - Commander le certificat SSL Sectigo EV

> [!warning]
>
> Les certificats SSL Sectigo EV proposés chez OVHcloud ne sont valables que pour l'un des deux cas suivants sur votre hébergement web :
>
> - Un seul nom de domaine + son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`).
> - Un seul sous-domaine (par exemple : `sub.domain.tld`).
>
> Si d'autres noms de domaine ou sous-domaines sont déclarés sur votre hébergement web et que vous souhaitez également leur attribuer un certificat SSL, vous pouvez soit :
>
> - [Activer un certificat SSL gratuit Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (si ce n'est pas déjà le cas par défaut).
> - Activer un (ou plusieurs) autre(s) certificat(s) SSL payant(s) ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) ou [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Installer votre propre certificat SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Avant de commander le certificat SSL Sectigo EV sur votre hébergement web**, vérifiez que **le nom de domaine/sous-domaine** concerné par votre certificat SSL : 

- pointe vers l'adresse IP de votre hébergement web. 
- est déclaré sur l'un des sites web de votre hébergement web.
- ne dispose pas déjà d'un certificat SSL actif.

Pour vous en assurer, consultez si besoin nos guides ci-dessous :

- [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), partie **Désactiver un certificat SSL sur un hébergement web**.

> [!primary]
>
> Si vous souhaitez souscrire un certificat SSL Sectigo EV pour un nom de domaine (par exemple : `domain.tld`), vérifiez bien que son sous-domaine en « www » (par exemple : `www.domain.tld`) pointe bien également vers l'adresse IP de votre hébergement web et est correctement déclaré sur l'un des sites web de votre hébergement web.
>
> En effet, le cas échéant et si vous commandez le certificat SSL Sectigo EV sans vous en assurer, vous devrez effectuer un correctif a posteriori. Vous devrez alors supprimer le certificat SSL Sectigo EV précédemment souscrit **sans être remboursé**, puis en commander un nouveau. L'objectif est que le nouveau certificat SSL Sectigo EV englobe bien à la fois votre nom de domaine `domain.tld` et son sous-domaine en « www » `www.domain.tld`.
>
> Pour rappel, si vous souscrivez un certificat SSL Sectigo EV directement pour un sous-domaine (par exemple : `sub.domain.tld`), vous n'êtes pas concerné par cette situation.

#### 1.1 - Pour un nom de domaine/sous-domaine et un hébergement web déjà existants chez OVHcloud

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **6** étapes :

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
>> Dans la nouvelle fenêtre qui s'ouvre, sélectionnez le nom de domaine ou sous-domaine concerné à l'aide du menu déroulant, puis cliquez sur `Valider`{.action} pour être redirigé vers le bon de commande de votre certificat SSL Sectigo EV.
>>
>> ![SSL Sectigo sélection du domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Étape 6**
>>
>> Dans le tunnel de commande, sélectionnez le **Certificat SSL Sectigo EV**, puis poursuivez la commande.
>>
>> Renseignez avec exactitude les informations demandées par **Sectigo** avant que le certificat SSL Sectigo EV ne vous soit délivré.
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Cliquez sur `Continuer`{.action} une fois **tous les éléments** correctement renseignés.
>>
>> Poursuivez la commande jusqu'au paiement afin de valider la demande de création du certificat SSL.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL Sectigo EV est envoyée à l'autorité de certification **Sectigo**.
>
> Assurez-vous impérativement de votre éligibilité à la souscription d'un certificat SSL Sectigo EV **avant de payer le certificat**.
>
> En effet, aucun remboursement du SSL Sectigo EV ne sera possible, **même si la procédure de vérification auprès de Sectigo n'aboutit pas**.

#### 1.2 - Pour un nouveau nom de domaine et un nouvel hébergement web

Si vous n'avez pas encore commandé votre nom de domaine et l'hébergement associé, rendez-vous sur notre [page d'accueil OVHcloud](/links/website), saisissez un nom de domaine dans le **formulaire de recherche prévu à cet effet** puis cliquez sur `Rechercher`{.action} pour démarrer votre commande.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Sélectionnez ensuite votre nom de domaine, choisissez votre hébergement ainsi que vos options jusqu'à arriver à l'étape `Configurez votre hébergement web`.

Sélectionnez vos choix d'installation de `module en 1 clic`{.action} et de `CDN`{.action} puis descendez tout en bas de la page jusqu'à la section `Sécurisez votre site web avec nos certificats SSL`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Choisissez `Sectigo EV SSL`{.action} puis cliquez sur `Continuer`{.action}.

Sur la nouvelle page qui s'affiche, renseignez avec exactitude les informations demandées par **Sectigo** avant que ne vous soit délivré le certificat SSL Sectigo EV :

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Cliquez sur `Continuer`{.action} une fois **tous les éléments** correctement renseignés.

Poursuivez votre commande jusqu'au paiement pour initier l'installation de vos services.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL Sectigo EV est envoyée à l'autorité de certification **Sectigo**.
>
> Assurez-vous impérativement de votre éligibilité à la souscription d'un certificat SSL Sectigo EV **avant de payer le certificat**.
>
> En effet, aucun remboursement du SSL Sectigo EV ne sera possible, **même si la procédure de vérification auprès de Sectigo n'aboutit pas**.

### 2 - Vérifications avec l'Autorité de Certification (AC) Sectigo

Toutes les actions décrites dans cette étape peuvent être effectuées sur plusieurs jours. Les délais **dépendent** des vérifications réalisées par Sectigo.

> [!warning]
>
> Dans cette étape, tout le processus dépend du fournisseur de certificat **Sectigo** et des informations renseignées lors de votre commande de certificat SSL Sectigo EV.
>
> Seul **Sectigo** pourra intervenir sur cette étape et OVHcloud ne pourra pas agir à ce niveau.
>
> En effet, le rôle de l'AC Sectigo est de certifier, indépendamment et en tout impartialité, les informations de votre organisation pour les intégrer au certificat SSL Sectigo EV.
>
> C'est **Sectigo** qui décide ou non de délivrer un certificat SSL Sectigo EV et aucunement OVHcloud. Sectigo est par définition le seul à avoir autorité sur la certification.

#### 2.1 - Réception de l'e-mail de confirmation par Sectigo

Une fois votre commande effectuée, Sectigo vous enverra un e-mail contenant un lien de validation ainsi qu'une procédure à suivre.
Vérifiez vos informations et validez votre demande en suivant les indications présentes dans cet e-mail. 

Dans le but de s'assurer que les échanges par e-mail avec Sectigo se passent correctement, vérifiez également la validité de l'adresse e-mail renseignée dans le formulaire lors de votre commande du SSL Sectigo EV, ainsi que l'adresse e-mail de contact associée à votre [espace client OVHcloud](/links/manager).

> [!primary]
>
> En parallèle et afin de certifier la propriété de votre domaine auprès de Sectigo, un fichier au format *.txt* est automatiquement mis en place dans l'espace FTP de votre hébergement web. Celui-ci sera ensuite supprimé lorsqu'il ne sera plus nécessaire à Sectigo.
>
> Sachez que certaines restrictions appliquées de votre côté (comme dans un fichier « .htaccess » par exemple) peuvent empêcher cette vérification.
> Si les droits d'accès FTP « CHMOD » sont également restreints ou insuffisants, la vérification peut aussi être bloquée.
>
> Nous vous recommandons aussi de **ne pas** activer ou laisser actif le [pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), disponible avec nos hébergements web, pendant toute la durée de l'installation de votre certificat SSL Sectigo EV.

#### 2.2 - Vérifications faites par l'Autorité de Certification Sectigo

Sectigo va ensuite vérifier que votre organisation existe et est bien enregistrée auprès des registres officiels.

> [!primary]
>
> Sectigo peut ne pas être en mesure de vérifier toutes les informations auprès des registres officiels. Les services de Sectigo peuvent alors vous contacter par téléphone au numéro que vous avez renseigné lors de votre commande, ou au numéro de téléphone officiel de votre organisation.

Sectigo va ensuite vérifier si vous avez l'exclusivité/autorité sur la propriété et l'utilisation du domaine avec lequel vous allez utiliser le certificat SSL Sectigo EV.

#### 2.3 - Dernières vérifications par téléphone avec Sectigo

Une fois les vérifications faites par Sectigo, vous serez contacté par leurs services par téléphone afin de finaliser la souscription de votre certificat SSL Sectigo EV.

> [!success]
>
> Pour plus de détails sur les opérations décrites dans la **partie 2** ci-dessus, consultez la [documentation officielle de Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) sur le sujet.

### 3 - Installation du certificat SSL Sectigo EV avec votre domaine et votre hébergement OVHcloud

Une fois que Sectigo a procédé à toutes les vérifications, leurs services génèrent le certificat SSL Sectigo EV et nous transmettent les éléments nécessaires à son installation sur votre hébergement web.

Il ne vous restera plus qu'à [passer votre site en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) pour utiliser pleinement votre certificat SSL Sectigo EV.

## Aller plus loin <a name="go-further"></a>

[Site officiel Sectigo](https://sectigostore.com)

[Description des vérifications faites par Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Passer votre site en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).