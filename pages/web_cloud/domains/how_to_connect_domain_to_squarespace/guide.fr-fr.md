---
title: "Comment connecter un nom de domaine OVHcloud à un hébergement SquareSpace"
excerpt: "Préparez et configurez la zone DNS de votre nom de domaine OVHcloud pour la connecter à un hébergement SquareSpace"
updated: 2024-05-15
---

## Objectif

Vous possédez un nom de domaine chez OVHcloud et vous souhaitez le connecter à un hébergement SquareSpace. Vous trouverez dans ce guide les étapes de préparation et de configuration de votre zone DNS OVHcloud pour permettre la configuration de votre hébergement SquareSpace.

**Découvrez comment connecter votre nom de domaine OVHcloud à un hébergement SquareSpace**

> [!warning]
>
> - L’assistance SquareSpace n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut donc pas vous conseiller sur les informations que vous devrez lui fournir.
>
> - OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.<br><br> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.
- Disposer d'un [nom de domaine](/links/web/domains){.external} enregistré chez OVHcloud.
- Disposer des [autorisations appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine depuis votre [espace client OVHcloud](/links/manager){.external}.
- Disposer d’un hébergement chez SquareSpace.
- Avoir accès à la gestion de cet hébergement chez SquareSpace.

## En pratique

Avant de suivre les deux étapes de ce guide, nous vous conseillons de vous familiariser avec la configuration d'une zone DNS à l'aide de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!warning]
>
> Votre zone DNS est potentiellement déjà préconfigurée ou liée à un hébergement. Nous allons voir comment identifier chaque enregistrement DNS nécessaire à la connexion avec votre hébergement SquareSpace. Certains devront être supprimés pour éviter de rentrer en conflit avec des enregistrements DNS requis dans cette configuration. D'autres seront simplement à modifier ou à créer. Pour une meilleure compréhension, nous utiliserons le nom de domaine « **mydomain.ovh** » comme exemple. Remplacez celui-ci par votre nom de domaine lors de la configuration.

### Configurer vos enregistrements DNS sur votre compte OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager){.external} dans la section `Web Cloud`{.action}. Cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

Le tableau qui s'affiche liste l'ensemble des enregistrements DNS du nom de domaine sélectionné.

![dnszone](images/tab.png){.thumbnail}

Chaque enregistrement DNS peut être modifié en cliquant sur le bouton `...`{.action} à droite de la ligne du tableau concernée puis en cliquant sur `Modifier l'entrée`{.action}.

Suivez les étapes dans l'ordre en parcourant les onglets suivants :

> [!tabs]
> **Etape 1**
>> **Enregistrement A**<br><br>
>> Pour identifier les enregistrements « A » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau qui correspond à votre nom de domaine seul, sans sous-domaine (exemple: `mydomain.ovh.`), puis cliquez sur `Modifier l'entrée`{.action}.<br>
>> - Si un enregistrement pour le sous-domaine « www » est présent (exemple: `www.mydomain.ovh.`), vous devez le supprimer pour qu'il ne rentre pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre nom de domaine seul avec le sous-domaine « www »  puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « A » existant, cliquez sur le bouton `Ajouter une entrée`{.action} en haut à droite de votre écran et sélectionnez le « Champ de pointage » `A`{.action}<br><br>
>> Vous devrez créer 4 enregistrements de type « A » successivement afin de renseigner les 4 adresses IPv4 relatives à SquareSpace. 
>> Laissez le champ **Sous-domaine** vide et saisissez la première adresse IPv4 de SquareSpace `198.185.159.144` dans le champ **Cible**.
>> Cliquez sur `Suivant`{.action}, validez votre enregistrement « A », ; répétez l'opération pour les 3 autres adresses IPv4 `198.185.159.145` ; `198.49.23.144` ; `198.49.23.145` et passez à l'étape 2.
> **Etape 2**
>> **Enregistrement AAAA**<br><br>
>> Pour identifier les enregistrements « AAAA » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau qui correspond à votre nom de domaine seul, sans sous-domaine (exemple: `mydomain.ovh.`), puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si un enregistrement pour le sous-domaine « www » est présent (exemple: `www.mydomain.ovh.`), supprimez-le également pour qu'il ne rentre pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre nom de domaine avec le sous-domaine « www »  puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « AAAA » existant, passez à l'étape 3.
> **Etape 3**
>> **Enregistrement TXT**<br><br>
>>  Pour identifier les enregistrements « TXT » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}<br>
>> - Si des enregistrements « TXT » sont présents pour le nom de domaine seul (exemple: `mydomain.ovh.`) et pour son sous-domaine en « www » (exemple: `www.mydomain.ovh.`), vous devez les supprimer pour qu'ils ne rentrent pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre nom de domaine seul avec le sous-domaine « www »  puis cliquez sur `Supprimer l'entrée`{.action}.<br>
> **Etape 4**
>> **Enregistrement CNAME**<br><br>
>>  Pour identifier les enregistrements « CNAME » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre sous-domaine en « www » (exemple: `mydomain.ovh.`) puis cliquez sur `Modifier l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « CNAME » existant, cliquez sur le bouton `Ajouter une entrée`{.action} en haut à droite de votre écran et sélectionnez le « Champ de pointage » `CNAME`{.action}.
>> Complétez le champ **Sous-domaine** avec la valeur `www` et saisissez `verify.squarespace.com.` dans le champ **Cible**.<br>
>> ![cname-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Cliquez sur `Suivant`{.action} puis validez votre enregistrement « CNAME ».
>> Ajoutez le deuxième enregistrement CNAME en saisissant `ext-cust.squarespace.com.` dans le champ **Cible**.<br>

La zone DNS est maintenant configurée pour faire le lien avec un hébergement SquareSpace.

### Connecter son nom de domaine à SquareSpace

Les manipulations pour cette étape sont à réaliser depuis l'espace de gestion de SquareSpace. 

> [!primary]
>
> - Vous pouvez connecter votre nom de domaine à un site SquareSpace d’essai ou payant. Vous ne pouvez pas le connecter à un site expiré.
> - Si vous avez un compte e-mail associé à votre nom de domaine, vous pouvez continuer de l’utiliser une fois le domaine connecté à SquareSpace. Avant de connecter votre nom de domaine, nous vous recommandons de prendre connaissance de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/217601877-Utiliser-avec-Squarespace-une-adresse-e-mail-de-domaine-personnalis%C3%A9-que-vous-poss%C3%A9dez-d%C3%A9j%C3%A0){.external}.
> - Vous pouvez utiliser plusieurs noms de domaine personnalisés pour votre site web. Vous pouvez en connecter ou en enregistrer autant que vous le souhaitez.
> - Vous ne pouvez pas connecter un nom de domaine personnalisé à SquareSpace si le nom de domaine comprend le mot « squarespace » ou « sqsp ».

Pour commencer, suivez les étapes de connexion décrites dans l'étape 1 de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/12880712406797-Connecter-un-domaine-OVHcloud-%C3%A0-votre-site-Squarespace){.external}.

> [!warning]
>
> Si vous recevez le message d’alerte « This domain is already connected to another Squarespace site » (Ce domaine est déjà connecté à un autre site Squarespace), vérifiez vos autres sites web Squarespace pour déterminer à quel site le nom de domaine est connecté. Puis, déconnectez-le de ce site web. 

Pour la suite du processus, poursuivez à l’étape 2 de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/12880712406797-Connecter-un-domaine-OVHcloud-%C3%A0-votre-site-Squarespace){.external}.

Si vous utilisez une offre e-mail OVHcloud ou que vous prévoyez de souscrire à l'une de [nos offres e-mail](/links/web/emails), préparez votre zone DNS en conséquence. Consultez notre guide sur la « [Configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx) ».

## Aller plus loin <a name="go-further"></a>

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)

[Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour modifier la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).