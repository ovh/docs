---
title: 'Activer l’hébergement gratuit 100M'
excerpt: 'Découvrez comment activer votre hébergement gratuit 100M '
updated: 2022-09-15
---


## Objectif

Avec [l'hébergement gratuit 100M](https://www.ovhcloud.com/fr/domains/free-web-hosting/){.external}, OVHcloud vous offre un hébergement Web de 100 Mo et un compte e-mail disposant de 5 Go de stockage. 
Ce guide vous présente comment activer cette offre sur votre [nom de domaine](https://www.ovhcloud.com/fr/domains/){.external}.

> [!warning]
>
> Cet hébergement gratuit de 100 Mo convient pour une simple page Web de présentation, il **n'inclut pas de base de données**.
> Il convient également si vous n'avez pas besoin de plusieurs adresses e-mail de type "MX plan". 
> Si vous souhaitez mettre en place un site Web comprenant plusieurs pages et nécessitant une base de données, tel qu'un CMS (WordPress, Joomla!, PrestaShop, Drupal, etc.), nous vous invitons à commander directement l'une de [nos offres d'hébergement Web](https://www.ovhcloud.com/fr/web-hosting/) depuis notre site ou votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
>

**Découvrez comment activer votre hébergement gratuit 100M**

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/){.external} dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, détaché de tout hébergement Web et sans aucun [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) associé.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.

Dans le cadre **Informations générales** vous trouverez la mention *Hébergement Web et e-mail gratuit*. Cliquez sur le bouton `...`{.action} à droite puis sur `Activer`{.action}.

![free100m](images/start10m-step1-01.png){.thumbnail}

La fenêtre d'activation s'affiche. **L'étape 1** vous rappelle l'offre et son tarif, cliquez sur `Suivant`{.action}. Pour **l'étape 2**, choisissez les modifications à apporter sur votre zone DNS :

![free100m](images/start10m-step1-02.png){.thumbnail}

> [!warning]
>
> Si vous cochez l'une des deux cases `Entrée DNS A` et `Entrée DNS MX` ou les deux, cela écrasera la configuration initialement mise en place dans la zone DNS de votre domaine.
>
> Si votre zone DNS n'est pas gérée dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, vous devrez effectuer les modifications manuellement dans votre zone DNS externe.
>
> Pour plus de détails, consultez notre guide sur [l'édition d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>

| Choix                                       	| Description                                                                                                               								|
|--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Entrée DNS A                         	| Le nom de domaine pointera vers l'adresse IP de l'hébergement 100M.                                               								|
| Entrée DNS MX 	| Les serveurs e-mail (`mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) d'OVHcloud seront appliqués au nom de domaine. 	|

> [!primary]
>
> Si votre projet est amené à évoluer rapidement vers un hébergement disposant d'une base de données, d'un espace de stockage plus important ou davantage d'adresses e-mail, vous pourrez basculer directement et uniquement de l'hébergement gratuit 100M vers une offre d'hébergement **Perso** depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
>
> Une bascule vers l'offre **Pro** ou **Performance** nécessite de passer préalablement de l'offre d'hébergement gratuit 100M à l'offre **Perso**.
>
> Vous pouvez aussi choisir de supprimer l'offre gratuite en prenant soin de récupérer au préalable vos données d'hébergement et le contenu de votre adresse mail.
>
> Pour plus de détails, consultez nos [offres d'hébergement](https://www.ovhcloud.com/fr/web-hosting/).
>

**L'étape 3** vous rappelle la tarification de l'offre. 

Lors de **l'étape 4**, vous devez prendre connaissance des contrats et valider votre commande.

Une fois votre commande validée, un e-mail vous sera transmis avec les informations de [connexion FTP](/pages/web_cloud/web_hosting/ftp_connection){.external} à votre hébergement gratuit 100M.

Consultez le guide de [création d'un compte E-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation){.external} pour profiter de l'adresse e-mail incluse avec votre hébergement gratuit 100M.

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement Web](/pages/web_cloud/web_hosting/ftp_connection){.external}

[Créer une adresse e-mail avec son offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
