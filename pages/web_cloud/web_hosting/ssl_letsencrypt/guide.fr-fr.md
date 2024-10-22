---
title: "Hébergement web - Activer un certificat SSL gratuit Let's Encrypt"
excerpt: "Découvrez comment activer ou regénérer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web"
updated: 2024-10-21
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

**Découvrez comment activer ou regénérer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting) sur lequel aucun certificat SSL n'est déjà installé.
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le ou les noms de domaine/sous-domaines ne doivent pas déjà être liés à un certificat SSL.

## En pratique

### 1. Pré-attribuer le futur certificat SSL Let's Encrypt à votre (vos) nom(s) de domaine/sous-domaine(s) <a name="ssl-multisite"></a>

Contrairement à d'autres certificats, le [certificat SSL gratuit Let's Encrypt](/links/web/hosting-options-ssl) peut être activé pour plusieurs noms de domaines/sous-domaines à la fois. Ceci dans la limite de **99** domaines ou sous-domaines par hébergement web.

Par conséquent et avant d'installer le certificat SSL Let's Encrypt, vous devrez préparer tous les noms de domaines / sous-domaines qui bénéficieront de ce certificat SSL.

Pour cela, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Multisite`{.action}.

Le tableau qui s'affiche contient tous les noms de domaine/sous-domaines déjà déclarés en multisites sur votre hébergement web. La colonne « SSL » indique l'état d'activation du SSL sur vos noms de domaine/sous-domaines déclarés en multisites.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Dans cette colonne et de manière générale, trois états peuvent apparaître :

|État|Description|
|---|---|
|Activé|Un certificat SSL a déjà été activé pour cette entrée multisite. Si tel est le cas, [vérifiez que le certificat SSL est bien un certificat SSL Let's Encrypt](#check-ssl). Si oui, consultez d'abord le [cas particulier](#regenerate-ssl) situé plus bas dans ce guide. Sinon, consultez notre guide « [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) » si vous souhaitez supprimer votre certificat SSL actuel (gratuit ou payant), puis le remplacer par un certificat SSL Let's Encrypt.|
|À générer|Un certificat SSL a été activé pour cette entrée multisite, mais celui-ci n'est toujours pas techniquement actif. Pour cela, vous devrez [régénérer le certificat SSL Let's Encrypt](#regenerate-ssl) afin qu'il inclue les nouveaux noms de domaine/sous-domaines déclarés en multisite et pour lesquels le statut `À générer` est présent.|
|Désactivé|Aucun certificat SSL n'est activé pour cette entrée multisite. Pour l'activer, suivez les étapes ci-dessous.|

> [!primary]
>
> Si l'un de vos noms de domaine/sous-domaines n'est pas encore déclaré sur votre hébergement web, consultez les guides suivants pour résoudre cette situation :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Toujours depuis l'onglet `Multisite`{.action} et pour pré-attribuer l'option SSL Let's Encrypt sur un nom de domaine/sous-domaine déclaré en multisite sur votre hébergement web, effectuez les actions suivantes :

1. Dans le tableau contenant tous les noms de domaine/sous-domaines déjà déclarés en multisites sur votre hébergement web, cliquez sur le bouton `...`{.action} à droite de la ligne du nom de domaine/sous-domaine concerné.
2. Cliquez ensuite sur `Modifier le domaine`{.action}.
3. Dans la fenêtre qui s'affiche, cochez la case `SSL`{.action}, puis cliquez sur `Suivant`{.action}.
4. Dans la nouvelle fenêtre qui apparaît, vous retrouvez un résumé de la configuration de votre nom de domaine/sous-domaine. Cliquez sur `Valider`{.action} pour appliquer la modification demandée pour cette entrée multisite.

Une fois la modification validée, le statut dans la colonne SSL pour l'entrée multisite concernée passera de `Désactivé` à `À générer` au bout de quelques secondes. Si vous avez d'autres noms de domaine/sous-domaines concernés parmi les entrées multisites de votre hébergement web, répétez l'opération autant de fois que néccessaire.

### 2. Activer un certificat SSL Let's Encrypt <a name="enable-ssl"></a>

Avant de procéder à cette configuration, assurez-vous que l'[étape précédente](#ssl-multisite) a été effectuée correctement. Dans l'onglet `Multisite`{.action} de votre hébergement web, au moins un nom de domaine/sous-domaine doit avoir l'option SSL avec le statut `Activé` ou `A générer` pour installer le certificat SSL Let's Encrypt.

> [!warning]
>
> **Avant de poursuivre**, vérifiez que **l'ensemble des noms de domaine et/ou sous-domaines** concernés par votre futur certificat SSL Let's Encrypt :
>
> - pointent vers l'adresse IP de votre hébergement web ; 
> - sont déclarés en multisite sur votre hébergement web.
>
> Pour vous en assurer, vous pouvez consulter nos guides :
>
> - [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Liste des adresses IP des clusters et hébergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour activer votre certificat SSL Let's Encrypt, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.
7. A droite de la mention `Certificat SSL`, cliquez sur le bouton `...`{.action}, puis sur `Commander un certificat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez `Certificat gratuit (Let's Encrypt)`{.action} parmi la liste des choix possibles, puis cliquez sur `Suivant`{.action} pour valider la demande d'activation du SSL.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

La mise en place du certificat SSL Let's Encrypt peut prendre plusieurs heures.

<a name="check-ssl"></a>

Pour vérifier que l'installation est terminée, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.

Si tout est terminé, vous devez retrouver, en dessous de la mention `Certificat SSL`, une valeur équivalente à celle-ci : `Oui - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Votre certificat SSL Let's Encrypt est désormais installé et actif. Vous pouvez dès à présent l'utiliser avec votre (vos) site(s) web en passant, par exemple, votre (vos) [site(s) web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Cas particulier : Regénérer le certificat SSL Let's Encrypt sur un hébergement web <a name="regenerate-ssl"></a>

Lors de l'utilisation de votre hébergement web, vous pouvez être amené à ajouter par la suite des noms de domaine/sous-domaines en multisite pour lesquels vous aurez besoin d'activer l'option SSL.

Même si vous avez déjà activé un certificat SSL Let's Encrypt pour certains de vos noms de domaine/sous-domaines, vous pouvez toujours en ajouter de nouveaux (dans la limite des **99** noms de domaine/sous-domaines précisée plus haut dans ce guide).

Pour cela, effectuez **dans l'ordre** les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Pré-attribuez le certificat SSL Let's Encrypt à vos nouveaux noms de domaine/sous-domaines comme précisé dans la [première partie](#ssl-multisite) de ce guide.
3. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
4. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
5. Sélectionnez l'hébergement web concerné.
6. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
7. Positionnez-vous dans l'encadré intitulé `Configuration`.
8. A droite de la mention `Certificat SSL`, cliquez sur le bouton `...`{.action}, puis sur `Regénérer le certificat SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Prenez connaissance des informations affichées dans la fenêtre qui apparaît, puis cliquez sur le bouton `Valider`{.action}. Attendez ensuite que votre certificat SSL soit régénéré. 

Cette étape peut prendre plusieurs heures.

> [!warning]
>
> Let's Encrypt, l'autorité qui fournit le certificat SSL, [limite à cinq le nombre de régénérations possibles par semaine](https://letsencrypt.org/docs/rate-limits/){.external}. Par conséquent, soyez vigilant sur les différentes régénérations que vous pourriez entreprendre à court terme afin de ne pas être temporairement bloqué.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Votre certificat SSL Let's Encrypt est désormais regénéré et actif. Vous pouvez dès à présent l'utiliser avec votre (vos) nouveau(x) site(s) web en passant, par exemple, votre (vos) nouveau(x) [site(s) web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Aller plus loin

[Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).