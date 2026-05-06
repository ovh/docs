---
title: "Connecter un nom de domaine OVHcloud à SquareSpace"
excerpt: "Préparez et configurez la zone DNS de votre nom de domaine OVHcloud pour la connecter à un hébergement SquareSpace"
updated: 2026-03-18
---

## Objectif

Vous êtes titulaire d'un nom de domaine chez OVHcloud et vous souhaitez le connecter à un hébergement SquareSpace. Ce guide explique comment préparer et configurer votre zone DNS OVHcloud pour votre hébergement SquareSpace.

**Découvrez comment connecter votre nom de domaine OVHcloud à un hébergement SquareSpace**

> [!warning]
>
> - L’assistance SquareSpace n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut donc pas vous conseiller sur les informations que vous devrez lui fournir.
>
> - OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.<br><br> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des [autorisations appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine.
- Disposer d’un hébergement chez SquareSpace.
- Avoir accès à la gestion de cet hébergement chez SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

## En pratique

Avant de suivre les étapes de ce guide, nous vous conseillons de vous familiariser avec la configuration d'une zone DNS à l'aide de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!warning]
>
> Votre zone DNS est potentiellement déjà préconfigurée ou liée à un hébergement. Nous allons voir comment identifier chaque enregistrement DNS nécessaire à la connexion avec votre hébergement SquareSpace. Certains devront être supprimés pour éviter de rentrer en conflit avec des enregistrements DNS requis dans cette configuration. D'autres seront simplement à modifier ou à créer. Pour une meilleure compréhension, nous utiliserons le nom de domaine « **mydomain.ovh** » comme exemple. Remplacez celui-ci par votre nom de domaine lors de la configuration.

### Configurer vos enregistrements DNS sur votre compte OVHcloud

<!-- CP-STEPS-START:configure-dns-records -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> Le tableau qui s'affiche liste l'ensemble des enregistrements DNS du nom de domaine sélectionné.
>>
> **Étape 2**
>>
>> **Configuration des enregistrements A**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `A` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Repérez les enregistrements « A » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « A » existants pour le sous-domaine « www ». Si plus de 4 enregistrements « A » existent pour le nom de domaine seul, supprimez les enregistrements excédentaires pour n'en conserver que 4. Pour chaque enregistrement à supprimer, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Modification :** modifiez chaque enregistrement « A » conservé pour le nom de domaine seul en cliquant sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Remplacez la cible par l'une des 4 adresses IPv4 de SquareSpace (une adresse différente par enregistrement) :
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Cliquez sur `Suivant`{.action} et validez.
>>
>> **4 - Ajout :** si moins de 4 enregistrements « A » existaient, créez les enregistrements manquants. Cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `A`{.action}, laissez le champ **Sous-domaine** vide et saisissez dans le champ **Cible** chaque adresse IPv4 non encore attribuée. Cliquez sur `Suivant`{.action} et validez.
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
>> **Configuration des enregistrements CNAME**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `CNAME` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Repérez les enregistrements « CNAME » existants pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** si plusieurs enregistrements « CNAME » existent pour le sous-domaine « www », supprimez-les tous sauf un. Pour chaque enregistrement à supprimer, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Modification :** si un enregistrement « CNAME » existe pour le sous-domaine « www », cliquez sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Remplacez uniquement la **Cible** par `ext-cust.squarespace.com.`. Cliquez sur `Suivant`{.action} et validez.
>>
>> Si aucun enregistrement « CNAME » n'existe pour le sous-domaine « www », cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `CNAME`{.action}, saisissez `www` dans le champ **Sous-domaine** et `ext-cust.squarespace.com.` dans le champ **Cible**. Cliquez sur `Suivant`{.action} et validez.
>>
>> **4 - Ajout :** créez un enregistrement CNAME de vérification en saisissant votre `code unique récupéré chez SquareSpace` dans le champ **Sous-domaine**, puis `verify.squarespace.com.` dans le champ **Cible**. Cliquez sur `Suivant`{.action} et validez.
<!-- CP-STEPS-END:configure-dns-records -->

La zone DNS est maintenant configurée pour pointer vers votre hébergement SquareSpace.

### Connecter son nom de domaine à SquareSpace

Les manipulations suivantes sont à réaliser depuis l'espace de gestion SquareSpace.

> [!primary]
>
> - Vous pouvez connecter votre nom de domaine à un site SquareSpace d’essai ou payant. Vous ne pouvez pas le connecter à un site expiré.
> - Si vous avez un compte e-mail associé à votre nom de domaine, vous pouvez continuer de l’utiliser une fois le domaine connecté à SquareSpace. Avant de connecter votre nom de domaine, nous vous recommandons de prendre connaissance de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/217601877-Utiliser-avec-Squarespace-une-adresse-e-mail-de-domaine-personnalis%C3%A9-que-vous-poss%C3%A9dez-d%C3%A9j%C3%A0).
> - Vous pouvez utiliser plusieurs noms de domaine personnalisés pour votre site web. Vous pouvez en connecter ou en enregistrer autant que vous le souhaitez.
> - Vous ne pouvez pas connecter un nom de domaine personnalisé à SquareSpace si le nom de domaine comprend le mot « squarespace » ou « sqsp ».

Pour commencer, suivez les étapes de connexion décrites dans l'étape 1 de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/12880712406797-Connecter-un-domaine-OVHcloud-%C3%A0-votre-site-Squarespace).

> [!warning]
>
> Si vous recevez le message d’alerte « This domain is already connected to another Squarespace site » (Ce domaine est déjà connecté à un autre site Squarespace), vérifiez vos autres sites web Squarespace pour déterminer à quel site le nom de domaine est connecté. Puis, déconnectez-le de ce site web.

Poursuivez à l’étape 2 de ce [guide SquareSpace](https://support.squarespace.com/hc/fr-fr/articles/12880712406797-Connecter-un-domaine-OVHcloud-%C3%A0-votre-site-Squarespace).

Si vous utilisez une offre e-mail OVHcloud ou que vous prévoyez de souscrire à l'une de [nos offres e-mail](/links/web/emails), préparez votre zone DNS en conséquence. Consultez notre guide sur la « [Configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx) ».

## Aller plus loin <a name="go-further"></a>

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour modifier la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
