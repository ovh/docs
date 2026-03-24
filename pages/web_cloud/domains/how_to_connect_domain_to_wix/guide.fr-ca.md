---
title: "Connecter un nom de domaine OVHcloud à Wix"
excerpt: Préparez et configurez la zone DNS de votre nom de domaine OVHcloud pour la connecter à un hébergement Wix
updated: 2026-03-18
---

## Objectif

Vous êtes titulaire d'un nom de domaine chez OVHcloud et vous souhaitez le connecter à un hébergement Wix. Ce guide explique comment préparer et configurer votre zone DNS OVHcloud pour votre hébergement Wix.

**Découvrez comment connecter votre nom de domaine OVHcloud à un hébergement Wix**

> [!warning]
>
> - L’assistance Wix n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut donc pas vous conseiller sur les informations que vous devrez lui fournir.
>
> - OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.<br><br> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des [autorisations appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine.
- Disposer d’un hébergement chez Wix.
- Avoir accès à la gestion de cet hébergement chez Wix.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

## En pratique

Avant de suivre les étapes de ce guide, nous vous conseillons de consulter notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!warning]
>
> Votre zone DNS est potentiellement déjà préconfigurée ou liée à un hébergement. Nous allons voir comment identifier chaque enregistrement DNS nécessaire à la connexion avec votre hébergement Wix. Certains devront être supprimés pour éviter de rentrer en conflit avec des enregistrements DNS requis dans cette configuration. D'autres seront simplement à modifier ou à créer. Pour une meilleure compréhension, nous utiliserons le nom de domaine « **mydomain.ovh** » comme exemple. Remplacez celui-ci par votre nom de domaine lors de la configuration.

### 1. Configurer votre hébergement Wix

Préparez d'abord votre hébergement Wix en suivant les instructions de **l'étape 1** depuis [**cette page de la documentation Wix**](https://support.wix.com/fr/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).

### 2. Configurer vos enregistrements DNS sur votre compte OVHcloud

> [!warning]
>
> Avant de poursuivre :
>
> - Ouvrez un onglet en parallèle sur votre navigateur internet.
> - Ouvrez [**cette page de la documentation Wix**](https://support.wix.com/fr/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882).
> - Positionnez-vous sur la partie « **Étape 2 | Mettre à jour les enregistrements DNS dans le compte de votre hébergeur de domaine** » de la documentation Wix.<br>
> Les instructions suivantes vous aideront à configurer plus facilement votre zone DNS OVHcloud.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> Le tableau liste les enregistrements DNS du nom de domaine sélectionné.
>>
> **Étape 2**
>>
>> **Configuration de l'enregistrement A**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `A` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Repérez les enregistrements « A » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « A » existants pour le sous-domaine « www ». Si plusieurs enregistrements « A » existent pour le nom de domaine seul, supprimez-les tous sauf un, que vous modifierez à la sous-étape suivante. Pour chaque enregistrement à supprimer, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Modification :** si un enregistrement « A » existe pour le nom de domaine seul, cliquez sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Laissez le champ **Sous-domaine** vide et remplacez la cible par l'adresse IPv4 relevée depuis votre interface Wix. Cliquez sur `Suivant`{.action} et validez.
>>
>> Si aucun enregistrement « A » n'existe, cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `A`{.action}, laissez le champ **Sous-domaine** vide et saisissez l'adresse IPv4 relevée depuis votre interface Wix dans le champ **Cible**. Cliquez sur `Suivant`{.action} et validez.
>>
>> Passez ensuite à l'étape 3.
>>
> **Étape 3**
>>
>> **Suppression des enregistrements AAAA**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `AAAA` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Repérez les enregistrements « AAAA » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « AAAA » identifiés (nom de domaine seul et sous-domaine « www ») pour éviter un conflit avec les nouveaux enregistrements DNS. Pour chaque enregistrement, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> Si aucun enregistrement « AAAA » n'existe, passez à l'étape 4.
>>
> **Étape 4**
>>
>> **Suppression des enregistrements TXT**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `TXT` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Repérez les enregistrements « TXT » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « TXT » identifiés (nom de domaine seul et sous-domaine « www ») pour éviter un conflit avec les nouveaux enregistrements DNS. Pour chaque enregistrement, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> Si aucun enregistrement « TXT » n'existe, passez à l'étape 5.
>>
> **Étape 5**
>>
>> **Configuration de l'enregistrement CNAME**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `CNAME` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Repérez les enregistrements « CNAME » existants pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** si plusieurs enregistrements « CNAME » existent pour le sous-domaine « www », supprimez-les tous sauf un. Pour chaque enregistrement à supprimer, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Modification :** si un enregistrement « CNAME » existe pour le sous-domaine « www », cliquez sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Remplacez uniquement la **Cible** par la valeur relevée depuis votre interface Wix. Cliquez sur `Suivant`{.action} et validez.
>>
>> Si aucun enregistrement « CNAME » n'existe pour le sous-domaine « www », cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `CNAME`{.action}, saisissez `www` dans le champ **Sous-domaine** et la valeur relevée depuis votre interface Wix dans le champ **Cible**. Cliquez sur `Suivant`{.action} et validez.

La zone DNS est maintenant configurée pour pointer vers votre hébergement Wix.

> [!primary]
>
> La vérification de votre nom de domaine peut prendre jusqu’à 48 heures.

Si vous utilisez une offre e-mail OVHcloud ou que vous prévoyez de souscrire à l'une de [nos offres e-mail](/links/web/emails), vous devez également préparer votre zone DNS en conséquence. Consultez notre guide sur la [configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx).

## Aller plus loin <a name="go-further"></a>

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour modifier la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
