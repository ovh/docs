---
title: "Activer l’hébergement gratuit 100M"
excerpt: "Découvrez comment activer votre hébergement gratuit 100M"
updated: 2023-12-18
---

## Objectif

Avec [l'hébergement gratuit 100M](domains-free-hosting.){.external}, OVHcloud vous offre un hébergement Web de 100 Mo et un compte e-mail disposant de 5 Go de stockage. 
Ce guide vous présente comment activer cette offre sur votre [nom de domaine](domains.){.external}.

> [!warning]
>
> Cet hébergement gratuit de 100 Mo convient pour une simple page Web de présentation, il **n'inclut pas de base de données**.
> Il convient également si vous n'avez pas besoin de plusieurs adresses e-mail de type "MX plan". 
> Si vous souhaitez mettre en place un site Web comprenant plusieurs pages et nécessitant une base de données, tel qu'un CMS (WordPress, Joomla!, PrestaShop, Drupal, etc.), nous vous invitons à commander directement l'une de [nos offres d'hébergement Web](hosting.) depuis notre site ou votre [espace client OVHcloud](manager.){.external}.
>

**Découvrez comment activer votre hébergement gratuit 100M**

## Prérequis

- Disposer d'un [nom de domaine](domains.){.external} dans votre [espace client OVHcloud](manager.){.external}, détaché de tout hébergement Web et sans aucun [MX Plan](email_generalities1.) associé.
- Être connecté à votre [espace client OVHcloud](manager.){.external}.

## En pratique

Connectez-vous à votre [espace client OVHcloud](manager.){.external}, cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.

Dans le cadre **Informations générales** vous trouverez la mention *Hébergement Web et e-mail gratuit*. Cliquez sur le bouton `...`{.action} à droite puis sur `Activer`{.action}.

![enable 100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}

La fenêtre d'activation s'affiche. **L'étape 1** vous rappelle l'offre et son tarif, cliquez sur `Suivant`{.action}. Pour **l'étape 2**, choisissez les modifications à apporter sur votre zone DNS :

![activate100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}

> [!warning]
>
> Si vous cochez l'une des deux cases `Entrée DNS A` et `Entrée DNS MX` ou les deux, cela écrasera la configuration initialement mise en place dans la zone DNS de votre domaine.
>
> Si votre zone DNS n'est pas gérée dans votre [espace client OVHcloud](manager.){.external}, vous devrez effectuer les modifications manuellement dans votre zone DNS externe.
>
> Pour plus de détails, consultez notre guide sur [l'édition d'une zone DNS OVHcloud](dns_zone_edit1.).
>

| Choix                                       	| Description                                                                                                               								|
|--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Entrée DNS A                         	| Le nom de domaine pointera vers l'adresse IP de l'hébergement 100M.                                               								|
| Entrée DNS MX 	| Les serveurs e-mail (`mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) d'OVHcloud seront appliqués au nom de domaine. 	|

> [!primary]
>
> Si votre projet est amené à évoluer rapidement vers un hébergement disposant d'une base de données, d'un espace de stockage plus important ou davantage d'adresses e-mail, vous pourrez basculer directement et uniquement de l'hébergement gratuit 100M vers une offre d'hébergement **Perso** depuis votre [espace client OVHcloud](manager.){.external}.
>
> Une bascule vers l'offre **Pro** ou **Performance** nécessite de passer préalablement de l'offre d'hébergement gratuit 100M à l'offre **Perso**.
>
> Vous pouvez aussi choisir de supprimer l'offre gratuite en prenant soin de récupérer au préalable vos données d'hébergement et le contenu de votre adresse mail.
>
> Pour plus de détails, consultez nos [offres d'hébergement](hosting.).
>

**L'étape 3** vous rappelle la tarification de l'offre. 

Lors de **l'étape 4**, vous devez prendre connaissance des contrats et valider votre commande.

Une fois votre commande validée, un e-mail vous sera transmis avec les informations de [connexion FTP](ftp_connection1.){.external} à votre hébergement gratuit 100M.

Consultez le guide de [création d'un compte E-mail MX Plan](email_creation1.){.external} pour profiter de l'adresse e-mail incluse avec votre hébergement gratuit 100M.

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement Web](ftp_connection1.){.external}

[Créer une adresse e-mail avec son offre MX Plan](email_creation1.){.external}

[Gérer un certificat SSL sur son hébergement web](ssl_on_webhosting1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](partner.).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](support.).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>