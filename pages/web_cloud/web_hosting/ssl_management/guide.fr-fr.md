---
title: "Hébergement web - Nouvelle gestion des certificats SSL"
excerpt: "Découvrez comment gérer un certificat SSL sur votre hébergement web OVHcloud grâce à notre nouvelle interface de gestion"
updated: 2025-10-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela empêche une personne ou un robot malveillant d'écouter clairement les données échangées entre votre site web et ses visiteurs.

Plusieurs types de certificats SSL sont proposés sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV).
- Organization validation (OV).
- Extended Validation (EV).

Les niveaux de chiffrement SSL sont identiques pour ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Il est indispensable de disposer d’un certificat SSL pour que votre site soit accessible en HTTPS.

**Découvrez comment gérer un certificat SSL sur votre hébergement web OVHcloud grâce à notre nouvelle interface de gestion.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder un [hébergement web OVHcloud](/links/web/hosting).
- Avoir enregistré au moins un [nom de domaine](/links/web/domains).

> [!warning]
>
> **Avant de poursuivre**, vérifiez que chaque **nom de domaine et/ou sous-domaine** concerné par votre futur certificat SSL :
>
> - Pointe vers l'adresse IP de votre hébergement web.
> - Est déclaré en multisite sur votre hébergement web.
>
> En cas de doute, vous pouvez vous référer aux guides ci-dessous :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

## En pratique

### Accéder à la gestion des certificats SSL depuis votre hébergement web

> [!primary]
>
> **Informations sur la migration vers la nouvelle interface de gestion des certificats SSL :**
>
> La suite de ce guide s'adresse aux clients dont les services d'hébergement web ont déjà migré vers la nouvelle interface de gestion des certificats SSL.
> Pour repérer si cette migration est effectuée, positionnez-vous sur votre hébergement web dans votre espace client OVHcloud et vérifiez la présence de l’onglet `Certificats SSL`.
> Si l'onglet `Certificats SSL` est absent, votre service n'a pas encore migré sur la nouvelle interface de gestion. Dans ce cas, consultez directement [ce guide](/pages/web_cloud/web_hosting/ssl_on_webhosting) pour gérer votre certificat SSL.
>
> Pour des raisons techniques, l'ensemble des services d'hébergement web de tous nos clients ne peut pas être migré en une seule fois. Cette migration est donc répartie sur quelques semaines et se réalise automatiquement, sans aucune incidence sur le fonctionnement de vos services d'hébergement web, et sans aucune intervention ou action nécessaire de votre part. 
>
> À terme, tous les services d'hébergement web fonctionneront avec la nouvelle interface de gestion des certificats SSL.

Pour accéder à la gestion des certificats SSL depuis votre hébergement web, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes :

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

À cet endroit, vous pourrez gérer intégralement vos certificats SSL pour tous les noms de domaine et sous-domaines associés à votre hébergement web.

### Activer un certificat SSL sur son hébergement web <a name="ssl-enable"></a>

OVHcloud propose 4 solutions pour activer ou installer un certificat SSL sur un hébergement web.

**Cliquez ci-dessous sur le certificat SSL de votre choix pour afficher les explications.**

/// details | Activer le certificat SSL gratuit Let's Encrypt (DV)

Le certificat SSL gratuit Let's Encrypt (DV) peut inclure jusqu'à **99** noms de domaine et sous-domaines déclarés sur un hébergement web.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes :

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
>> Lorsque le contenu de l'onglet apparaît, sélectionnez le nom de domaine ou le sous-domaine pour lequel vous souhaitez activer le certificat SSL gratuit Let's Encrypt (DV), sous la mention `Activer le certificat SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `Activer SSL Let's Encrypt`{.action}.

> [!success]
>
> Un certificat SSL Let's Encrypt est automatiquement généré pour chaque nom de domaine et sous-domaine récemment déclaré en multisite sur votre hébergement web. Pour vous en assurer, vérifiez que votre nom de domaine et/ou sous-domaine apparaît bien dans le tableau présent en bas de la page `Certificats SSL`{.action}.

///

/// details | Activer le certificat SSL payant Sectigo (DV)

Le certificat SSL payant Sectigo (DV) est valable pour un seul nom de domaine et son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (par exemple : `sub.domain.tld`).

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

///

/// details | Activer le certificat SSL payant Sectigo (EV)

Le certificat SSL payant Sectigo (EV) est valable pour un seul nom de domaine et son sous-domaine en « www » (par exemple : `domain.tld` et `www.domain.tld`) ou **uniquement** un sous-domaine (par exemple : `sub.domain.tld`).

> [!warning]
>
> Le certificat SSL payant Sectigo (EV) a des conditions d'éligibilité spécifiques :
>
> - Commander ou posséder un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.
> - Être une organisation (entreprise, agence gouvernementale, etc.) enregistrée auprès d'un registre officiel.
> - Disposer de l'autorisation de votre organisation pour commander un certificat SSL Sectigo EV.
> - Être en capacité de justifier avec exactitude des informations et coordonnées relatives à votre organisation.
>
> Pour vérifier si vous êtes éligible à la souscription d'un certificat SSL Sectigo EV, rendez-vous sur [ce lien](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

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
> En effet, aucun remboursement du certificat SSL Sectigo EV ne sera possible, **même si la procédure de vérification auprès de Sectigo n'aboutit pas**.

///

/// details | Installer un certificat SSL personnalisé

Cette solution vous permet d'installer votre propre certificat SSL pour votre nom de domaine, si aucune des 3 solutions précédentes ne correspond à votre besoin et que vous souhaitez utiliser un certificat SSL dont vous disposez déjà.

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
>> Lorsque le contenu de l'onglet apparaît, cliquez sur le bouton `Import de votre propre certificat SSL`{.action}.
>>
>> ![SSL personnalisé](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Étape 5**
>>
>> La fenêtre suivante affiche un formulaire avec 3 champs à compléter :
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copier le contenu de votre certificat (RSA uniquement)`{.action} : Saisissez le contenu du fichier **certificate.crt** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN CERTIFICATE-----` et `-----END CERTIFICATE-----` (ou leurs équivalents). Le chiffrement RSA correspond au chiffrement standard des certificats SSL.
>> - `Copier le contenu de votre clé privée (non chiffrée)`{.action} : Saisissez le contenu du fichier **private.key** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----` (ou leurs équivalents). La mention *non chiffrée* signifie que la clé privée ne doit pas être protégée par un mot de passe ou une passphrase. Si tel est le cas, l'installation du certificat échouera.
>> - `Copier le contenu de votre chaîne de certificats`{.action} : Saisissez le contenu du fichier **ca_bundle.crt** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN CERTIFICATE-----` et `-----END CERTIFICATE-----` (ou leurs équivalents).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Une fois les 3 champs renseignés, cliquez sur `Valider`{.action} pour finaliser l'importation du certificat SSL personnalisé sur votre hébergement web.

> [!success]
>
> Pour retrouver les éléments à renseigner dans les 3 champs, consultez uniquement les étapes **1** et **2** de notre guide « [Hébergement web - Installer un certificat SSL personnalisé](/pages/web_cloud/web_hosting/ssl_custom) ».

///

### Désactiver un certificat SSL sur un hébergement web <a name="delete-ssl"></a>

> [!warning]
>
> **Avant de poursuivre**, assurez-vous que la suppression du certificat SSL ne rendra pas vos sites web inaccessibles. Le cas échéant, vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils essaieront d'accéder à votre site web en HTTPS.

Cette vérification étant inhérente aux paramètres de votre ou vos sites web, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce sujet.

Pour supprimer le certificat SSL installé sur votre hébergement web, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes :

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

> [!warning]
>
> La suppression d'un certificat SSL payant **Sectigo** (DV ou EV) est définitive, même si le certificat n'est pas encore expiré. Aucun remboursement au prorata du temps restant ne pourra être effectué. Si vous souhaitez réinstaller un certificat SSL **Sectigo** (DV ou EV), vous devrez donc obligatoirement réaliser une nouvelle commande et payer l'intégralité du nouveau certificat SSL souscrit.

## Aller plus loin <a name="go-further"></a>

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).