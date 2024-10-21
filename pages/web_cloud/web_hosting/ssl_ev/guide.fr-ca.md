---
title: "Hébergement web - Activer un certificat SSL EV"
excerpt: "Découvrez comment commander et installer un certificat SSL EV sur votre hébergement Web OVHcloud"
updated: 2024-10-10
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

Pour les hébergements mutualisés OVHcloud, l'autorité de certification délivrant les certificats SSL EV est [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Les certificats SSL EV ne sont pas disponibles pour tout le monde. Vérifiez si vous êtes éligible à sa souscription **avant** de commander ce dernier, en vous aidant des éléments indiqués dans les [prérequis](#requirements) de ce guide.
>
> Sachez qu'une fois la commande initiée et transmise auprès de notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement ne sera possible**.
>

**Découvrez comment commander et installer un certificat SSL EV sur votre hébergement Web OVHcloud**

## Prérequis <a name="requirements"></a>

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting) sur lequel aucun certificat SSL n'est déjà installé.
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.
- Être une organisation (entreprise, agence gouvernementale, ...) enregistrée auprès d'un registre officiel.
- Disposer de l'autorisation de votre organisation à commander un certificat SSL EV.
- Être en capacité de justifier avec exactitude les informations et coordonnées relatives à votre organisation.

Pour vérifier si vous êtes éligible à la souscription d'un certificat SSL EV, rendez-vous sur [ce lien](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **pour toutes les étapes de vérifications directement réalisée avec l'autorité de certification Sectigo**. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

### Etape 1 : commander le certificat SSL EV

#### 1.1 - Pour un domaine et un hébergement déjà existants chez OVHcloud

Consultez notre guide sur comment [gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) et sélectionnez le **Certificat SSL EV** une fois arrivé dans le tunnel de commande.

Renseignez avec exactitude les informations demandées par **Sectigo** avant que ne vous soit délivré le certificat SSL EV. 

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Cliquez sur `Continuer`{.action} une fois **tous les éléments** correctement renseignés.

Poursuivez la commande jusqu'au paiement afin de valider la demande de création du certificat SSL.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL EV est envoyée à l'autorité de certification **Sectigo**.
>
> Assurez-vous impérativement de votre éligibilité à la souscription d'un certificat SSL EV **avant de payer le certificat**.
>
> En effet, aucun remboursement du SSL EV ne sera possible, **même si la procédure de vérification auprès de Sectigo n'aboutit pas**.
>

#### 1.2 - Pour un nouveau nom de domaine et un nouvel hébergement

Si vous n'avez pas encore commandé votre nom de domaine et l'hébergement associé, rendez-vous sur notre [page d'accueil OVHcloud](/links/website), saisissez un nom de domaine dans le **formulaire de recherche prévu à cet effet** puis cliquez sur `Rechercher`{.action} pour démarrer votre commande.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Sélectionnez ensuite votre nom de domaine, choisissez votre hébergement ainsi que vos options jusqu'à arriver à l'étape `Configurez votre hébergement web`.

Sélectionnez vos choix d'installation de `module en 1 clic`{.action} et de `CDN`{.action} puis descendez tout en bas de la page jusqu'à la section `Sécurisez votre site web avec nos certificats SSL`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Choisissez `Sectigo EV SSL`{.action} puis cliquez sur `Continuer`{.action}.

Sur la nouvelle page qui s'affiche, renseignez avec exactitude les informations demandées par **Sectigo** avant que ne vous soit délivré le certificat SSL EV :

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Cliquez sur `Continuer`{.action} une fois **tous les éléments** correctement renseignés.

Poursuivez votre commande jusqu'au paiement pour initier l'installation de vos services.

> [!alert]
>
> Une fois la commande validée, la demande de certificat SSL EV est envoyée à l'autorité de certification **Sectigo**. 
>
> Assurez-vous impérativement de votre éligibilité à la souscription d'un certificat SSL EV **avant de payer le certificat**.
>
> En effet, aucun remboursement du SSL EV ne sera possible, **même si la procédure de vérification auprès de Sectigo n'aboutit pas**.
>

### Etape 2 : vérifications avec l'Autorité de Certification (AC) Sectigo

Toutes les actions décrites dans cette étape peuvent être effectuées sur plusieurs jours. Les délais **dépendent** des vérifications réalisées par Sectigo.

> [!warning]
>
> Dans cette étape, tout le processus dépend du fournisseur de certificat **Sectigo** et des informations renseignées lors de votre commande de certificat SSL EV. 
>
> Seul **Sectigo** pourra intervenir sur cette étape et OVHcloud ne pourra pas agir à ce niveau.
>
> En effet, le rôle de l'AC Sectigo est de certifier, indépendamment et en tout impartialité, les informations de votre organisation pour les intégrer au certificat SSL EV.
>
> C'est **Sectigo** qui décide ou non de délivrer un certificat SSL EV et aucunement OVHcloud. Sectigo est par définition le seul à avoir autorité sur la certification.
>

#### 2.1 - Réception de l'e-mail de confirmation par Sectigo

Une fois votre commande effectuée, Sectigo vous enverra un e-mail contenant un lien de validation ainsi qu'une procédure à suivre.
Vérifiez vos informations et validez votre demande en suivant les indications présentes dans cet e-mail. 

Dans le but de s'assurer que les échanges par e-mail avec Sectigo se passent correctement, vérifiez également la validité de l'adresse e-mail renseignée dans le formulaire lors de votre commande du SSL EV, ainsi que l'adresse e-mail de contact associée à votre [espace client OVHcloud](/links/manager).

> [!primary]
>
> En parallèle et afin de certifier la propriété de votre domaine auprès de Sectigo, un fichier au format *.txt* est automatiquement mis en place dans l'espace FTP de votre hébergement web. Celui-ci sera ensuite supprimé lorsqu'il ne sera plus nécessaire à Sectigo.
>
> Sachez que certaines restrictions appliquées de votre côté (comme dans un fichier « .htaccess » par exemple) peuvent empêcher cette vérification.
> Si les droits d'accès FTP « CHMOD » sont également restreints ou insuffisants, la vérification peut aussi être bloquée.
>
> Nous vous recommandons aussi de **ne pas** activer ou laisser actif le [pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), disponible avec nos hébergements web, pendant toute la durée de l'installation de votre certificat SSL EV.
>

#### 2.2 - Vérifications faites par l'Autorité de Certification Sectigo

Sectigo va ensuite vérifier que votre organisation existe et est bien enregistrée auprès des registres officiels.

> [!primary]
>
> Sectigo peut ne pas être en mesure de vérifier toutes les informations auprès des registres officiels. Les services de Sectigo peuvent alors vous contacter par téléphone au numéro que vous avez renseigné lors de votre commande, ou au numéro de téléphone officiel de votre organisation.
>

Sectigo va ensuite vérifier si vous avez l'exclusivité/autorité sur la propriété et l'utilisation du domaine avec lequel vous allez utiliser le certificat SSL EV.

#### 2.3 - Dernières vérifications par téléphone avec Sectigo

Une fois les vérifications faites par Sectigo, vous serez contacté par leurs services par téléphone afin de finaliser la souscription de votre certificat SSL EV.

> [!success]
>
> Pour plus de détails sur les opérations décrites dans **l'étape 2** ci-dessus, consultez la [documentation officielle de Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} sur le sujet.
>

### Etape 3 : installation du certificat SSL EV avec votre domaine et votre hébergement OVHcloud

Une fois que Sectigo a procédé à toutes les vérifications, leurs services génèrent le certificat SSL EV et nous transmettent les éléments nécessaires à son installation sur votre hébergement.

Il ne vous restera plus qu'à [passer votre site en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) pour utiliser pleinement votre certificat SSL EV.

## Aller plus loin <a name="go-further"></a>

[Site officiel Sectigo](https://sectigostore.com){.external}

[Description des vérifications faites par Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Passer votre site en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).