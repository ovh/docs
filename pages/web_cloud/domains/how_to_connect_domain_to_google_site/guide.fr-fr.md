---
title: "Comment connecter un nom de domaine OVHcloud à un Google Site"
excerpt: "Préparez et configurez la zone DNS de votre nom de domaine OVHcloud pour le connecter à un Google Site"
updated: 2024-09-26
---

## Objectif

Vous possédez un nom de domaine chez OVHcloud et vous souhaitez le connecter à un Google Site. Retrouvez dans ce guide les étapes de préparation et de configuration de votre zone DNS OVHcloud pour permettre la configuration de votre Google Site.

**Découvrez comment connecter votre nom de domaine OVHcloud à un Google Site.**

> [!warning]
>
> - L’assistance Google Site n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut donc pas vous conseiller sur les informations que vous devrez lui fournir.
> - OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.<br><br> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'un [nom de domaine](/links/web/domains) enregistré chez OVHcloud.
- Disposer des [autorisations appropriées](/pages/account_and_service_management/account_information/managing_contacts) pour gérer le nom de domaine depuis votre [espace client OVHcloud](/links/manager).
- Disposer d’un Google Site et en être le propriétaire.

## En pratique

Avant de suivre les étapes de ce guide, nous vous conseillons de vous familiariser avec la configuration d'une zone DNS à l'aide de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!warning]
>
> Votre zone DNS est potentiellement déjà préconfigurée ou liée à un hébergement Web. Nous allons voir comment identifier chaque enregistrement DNS nécessaire à la connexion avec votre Google Site. Certains devront être supprimés pour éviter de rentrer en conflit avec des enregistrements DNS requis dans cette configuration. D'autres devront juste être modifiés ou créés. Pour une meilleure compréhension, nous utiliserons le nom de domaine « **mydomain.ovh** » comme exemple. Remplacez celui-ci par votre nom de domaine lors de la configuration.

### Étape 1 - Configurer votre Google Site

> [!warning]
>
> Seul le propriétaire d'un Google Site peut le connecter à un nom de domaine. Si besoin, découvrez comment [modifier le propriétaire du Google site](https://support.google.com/sites/answer/97934).

Lorsque vous utilisez un Google Site avec un nom de domaine OVHcloud, préparez d'abord votre hébergement en suivant les instructions de la section **Configurer un domaine personnalisé** depuis [**cette page du support Google**](https://support.google.com/sites/answer/9068867?hl=fr#zippy=).

### Étape 2 - Configurer vos enregistrements DNS sur votre compte OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la section `Web Cloud`{.action}. Cliquez sur `Noms de domaine`{.action} dans la colonne de gauche, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

Le tableau qui s'affiche liste l'ensemble des enregistrements DNS du nom de domaine sélectionné.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Chaque enregistrement DNS peut être modifié en cliquant sur le bouton `...`{.action} à droite de la ligne du tableau concernée, puis en cliquant sur `Modifier l'entrée`{.action}.

Suivez les étapes dans l'ordre en parcourant les onglets suivants :

> [!tabs]
> **Etape 1**
>> **Enregistrement A**<br><br>
>> Pour identifier les enregistrements « A » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `A`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau qui correspond à votre nom de domaine seul, sans sous-domaine (exemple : `mydomain.ovh.`), puis cliquez sur `Modifier l'entrée`{.action}.<br>
>> - Si un enregistrement pour le sous-domaine « www » est présent (exemple : `www.mydomain.ovh.`), supprimez-le pour qu'il ne rentre pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre sous-domaine en « www »,  puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « A » existant, cliquez sur le bouton `Ajouter une entrée`{.action} en haut à droite de votre écran et sélectionnez le « Champ de pointage » `A`{.action}<br><br>
>> Créez 4 enregistrements de type « A » successivement afin de renseigner les 4 adresses IPv4 relatives à Google Site.
>> Laissez le champ **Sous-domaine** vide et saisissez la première adresse IPv4 de Google Site `216.239.32.21` dans le champ **Cible**.
>> Cliquez sur `Suivant`{.action} et validez votre enregistrement « A ». Répétez l'opération pour les trois autres adresses IPv4 `216.239.34.21`, `216.239.36.21` et `216.239.38.21`, puis passez à l'étape 2. Les valeurs de ces adresses IP étant susceptibles de changer, vérifiez dans la documentation officielle [la valeur des enregistrements A](https://support.google.com/a/answer/2579934?hl=fr&ref_topic=2721296&sjid=10373374977980680534-EU).
>>
> **Etape 2**
>> **Enregistrement AAAA**<br><br>
>> Pour identifier les enregistrements « AAAA » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `AAAA`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre nom de domaine seul, sans sous-domaine (exemple : `mydomain.ovh.`), puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si un enregistrement pour le sous-domaine « www » est présent (exemple : `www.mydomain.ovh.`), supprimez-le également pour qu'il ne rentre pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre sous-domaine en « www » puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « AAAA » existant, passez à l'étape 3.
>>
> **Etape 3**
>> **Enregistrement TXT**<br><br>
>>  Pour identifier les enregistrements « TXT » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `TXT`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Si des enregistrements « TXT » sont présents pour le nom de domaine seul (exemple : `mydomain.ovh.`) et pour son sous-domaine en « www » (exemple : `www.mydomain.ovh.`), supprimez-les pour qu'ils ne rentrent pas en conflit avec l'enregistrement CNAME que vous allez renseigner à l'étape 4. Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre  sous-domaine en « www »  puis cliquez sur `Supprimer l'entrée`{.action}.<br>
>> - Vous devez créer un enregistrement de type « TXT ». Cliquez sur le bouton `Ajouter une entrée`{.action} en haut à droite de votre écran et sélectionnez le « Champ de pointage » `TXT`{.action}.
>> Complétez les champs **Sous-domaine** et **Cible** avec les informations présentes sur la page « [Valeurs des enregistrements TXT](https://support.google.com/a/answer/2716802?hl=fr&ref_topic=2716886&sjid=3052810298579211755-EU) » de la documentation officielle. Généralement, la valeur du champ **Sous-domaine** est vide, et celle du champ **Cible** est de type `google-site-verification=XXXXXXXXXXXX`.<br>
>> Cliquez sur `Suivant`{.action} pour valider votre enregistrement « TXT » et passez à l'étape 4.
>>
> **Etape 4**
>> **Enregistrement CNAME**<br><br>
>>  Pour identifier les enregistrements « CNAME » existants, cliquez sur le menu des filtres en haut du tableau d'enregistrements DNS et sélectionnez `CNAME`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Cliquez sur le bouton `...`{.action} à droite de la ligne du tableau correspondant à votre sous-domaine en « www » (exemple : `www.mydomain.ovh.`) puis cliquez sur `Modifier l'entrée`{.action}.<br>
>> - Si vous n'avez pas d'enregistrement « CNAME » existant, cliquez sur le bouton `Ajouter une entrée`{.action} en haut à droite de votre écran et sélectionnez le « Champ de pointage » `CNAME`{.action}.
>>
>> Complétez le champ **Sous-domaine** avec la valeur `www` et saisissez `ghs.googlehosted.com.` dans le champ **Cible**. Ces valeurs étant amenées à changer, vérifiez-les sur la page « [Valeurs des enregistrements CNAME](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU) » de la documentation officielle<br>
>> Cliquez sur `Suivant`{.action} pour valider votre enregistrement « CNAME ».

La zone DNS est maintenant configurée pour faire le lien avec votre Google Site.

> [!primary]
>
> La vérification de votre nom de domaine peut prendre jusqu’à 48 heures.

Si vous utilisez une offre e-mail OVHcloud ou que vous prévoyez de souscrire à l'une de [nos offres e-mail](/links/web/emails), préparez vote zone DNS en conséquence. Consultez notre guide sur la [configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx).

## Aller plus loin <a name="go-further"></a>

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)

[Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour modifier la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).