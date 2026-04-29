---
title: "Connecter un nom de domaine OVHcloud à Webflow"
excerpt: Préparez et configurez la zone DNS de votre nom de domaine OVHcloud pour la connecter à un hébergement Webflow
updated: 2026-03-18
---

## Objectif

Vous êtes titulaire d'un nom de domaine chez OVHcloud et vous souhaitez le connecter à un hébergement Webflow. Ce guide explique comment préparer et configurer votre zone DNS OVHcloud pour votre hébergement Webflow.

**Découvrez comment connecter votre nom de domaine OVHcloud à un hébergement Webflow**

> [!warning]
>
> - L’assistance Webflow n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut donc pas vous conseiller sur les informations que vous devrez lui fournir.
> - OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.<br><br> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des [autorisations appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine.
- Disposer d’un hébergement chez Webflow.
- Avoir accès à la gestion de cet hébergement chez Webflow.

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
> Votre zone DNS est potentiellement déjà préconfigurée ou liée à un hébergement. Nous allons voir comment identifier chaque enregistrement DNS nécessaire à la connexion avec votre hébergement Webflow. Certains devront être supprimés pour éviter de rentrer en conflit avec des enregistrements DNS requis dans cette configuration. D'autres seront simplement à modifier ou à créer. Pour une meilleure compréhension, nous utiliserons le nom de domaine « **mydomain.ovh** » comme exemple. Remplacez celui-ci par votre nom de domaine lors de la configuration.

### 1. Configurer votre hébergement Webflow

Préparez d'abord votre hébergement Webflow en suivant les instructions de la section **How to connect your custom domain** depuis [**cette page de la documentation Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configurer vos enregistrements DNS sur votre compte OVHcloud

> [!warning]
>
> Avant de poursuivre :
>
> - Ouvrez un onglet en parallèle sur votre navigateur internet.
> - Ouvrez [**cette page de la documentation Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Positionnez-vous sur la partie « **How to set your DNS records** » de la documentation Webflow.<br>
> Les instructions suivantes vous aideront à configurer plus facilement votre zone DNS OVHcloud.

<!-- CP-STEPS-START:configure-dns-records -->
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
>> **Configuration des enregistrements A**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `A` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Repérez les enregistrements « A » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « A » existants pour le sous-domaine « www ». Si plus de 2 enregistrements « A » existent pour le nom de domaine seul, supprimez les enregistrements excédentaires pour n'en conserver que 2. Pour chaque enregistrement à supprimer, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Modification :** modifiez chaque enregistrement « A » conservé pour le nom de domaine seul en cliquant sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Remplacez la cible par l'une des 2 adresses IPv4 de Webflow (une adresse différente par enregistrement) :
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Cliquez sur `Suivant`{.action} et validez.
>>
>> **4 - Ajout :** si moins de 2 enregistrements « A » existaient, créez les enregistrements manquants. Cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `A`{.action}, laissez le champ **Sous-domaine** vide et saisissez dans le champ **Cible** chaque adresse IPv4 non encore attribuée. Cliquez sur `Suivant`{.action} et validez.
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
>> **Configuration de l'enregistrement TXT**
>>
>> **1 - Identification :** filtrez les enregistrements DNS en sélectionnant le type `TXT` dans le menu des filtres situé en haut à droite du tableau.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Repérez les enregistrements « TXT » existants pour votre nom de domaine seul (exemple : `mydomain.ovh.`) et pour le sous-domaine « www » (exemple : `www.mydomain.ovh.`).
>>
>> **2 - Suppression :** supprimez tous les enregistrements « TXT » identifiés (nom de domaine seul et sous-domaine « www ») pour éviter un conflit avec les nouveaux enregistrements DNS. Pour chaque enregistrement, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante, puis sur `Supprimer l'entrée`{.action}.
>>
>> **3 - Ajout :** créez un enregistrement TXT de vérification. Cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `TXT`{.action}, saisissez `_webflow` dans le champ **Sous-domaine** et dans le champ **Cible** la valeur de type `one-time-verification=XXXXXXXX` présente dans la section `Site settings > Publishing tab > Production`{.action} de votre compte Webflow. Cliquez sur `Suivant`{.action} et validez.
>>
>> Passez ensuite à l'étape 5.
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
>> **3 - Modification :** si un enregistrement « CNAME » existe pour le sous-domaine « www », cliquez sur le bouton `...`{.action} puis sur `Modifier l'entrée`{.action}. Remplacez uniquement la **Cible** par `proxy-ssl.webflow.com.`. Cliquez sur `Suivant`{.action} et validez.
>>
>> Si aucun enregistrement « CNAME » n'existe pour le sous-domaine « www », cliquez sur `Ajouter une entrée`{.action} en haut à droite, sélectionnez le champ de pointage `CNAME`{.action}, saisissez `www` dans le champ **Sous-domaine** et `proxy-ssl.webflow.com.` dans le champ **Cible**. Cliquez sur `Suivant`{.action} et validez.
<!-- CP-STEPS-END:configure-dns-records -->

La zone DNS est maintenant configurée pour pointer vers votre hébergement Webflow.

> [!primary]
>
> La vérification de votre nom de domaine peut prendre jusqu’à 48 heures.

Si vous utilisez une offre e-mail OVHcloud ou que vous prévoyez de souscrire à l'une de [nos offres e-mail](/links/web/emails), vous devez également préparer votre zone DNS en conséquence. Consultez notre guide sur la [configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx).

## Aller plus loin <a name="go-further"></a>

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour modifier la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
