---
title: "Hébergement web - Activer un certificat SSL gratuit Let's Encrypt"
excerpt: "Découvrez comment activer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web"
updated: 2025-12-16
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL sont identiques entre ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

Let's Encrypt est une autorité de certification gratuite, automatisée, ouverte et à but non-lucratif. Retrouvez plus d'informations sur <https://letsencrypt.org/fr/about/>.

**Découvrez comment activer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting).
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le ou les noms de domaine/sous-domaines ne doivent pas déjà être liés à un certificat SSL.

> [!primary]
>
> Depuis le **06/08/2025**, le certificat SSL Let's Encrypt est automatiquement activé par défaut pour :
>
> - tous les nouveaux noms de domaine/sous-domaines associés à un hébergement web.
> - toutes les nouvelles souscriptions d'un nom de domaine avec un nouvel hébergement web.
>
> L'objectif étant de vous faire gagner du temps lors de la configuration de vos services. Vous pourrez toujours désactiver le certificat SSL Let's Encrypt depuis votre [espace client OVHcloud](/links/manager) si vous souhaitez installer un autre certificat SSL (Sectigo DV, Sectigo EV ou un certificat SSL personnalisé).
> Retrouvez plus d'informations dans notre guide « [Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) », partie **Désactiver un certificat SSL sur un hébergement web**.

## En pratique

> [!warning]
>
> **Avant de poursuivre**, vérifiez que **chaque nom de domaine et/ou sous-domaine** concerné par un futur certificat SSL Let's Encrypt :
>
> - pointe vers l'adresse IP de votre hébergement web. 
> - est déclaré sur l'un des sites web de votre hébergement web.
> - ne dispose pas déjà d'un certificat SSL actif.
>
> Pour vous en assurer, consultez si besoin nos guides ci-dessous :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), partie **Désactiver un certificat SSL sur un hébergement web**.

### Activer le certificat SSL Let's Encrypt

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

La mise en place du certificat SSL Let's Encrypt peut prendre plusieurs heures.

### Vérifier l'activation du certificat SSL gratuit Let's Encrypt (DV)

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
>> Lorsque le contenu de l'onglet apparaît, vérifiez que chaque nom de domaine et/ou sous-domaine concerné figure dans le tableau avec le type de certificat SSL `Let's Encrypt`.
>>
>> ![Tableau de gestion des certificats SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Votre certificat SSL gratuit Let's Encrypt (DV) est désormais installé et actif. Vous pouvez dès à présent l'utiliser avec votre site web en passant, par exemple, votre [site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Aller plus loin

[Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).