---
title: 'Sécuriser votre nom de domaine avec DNSSEC'
excerpt: 'Découvrez comment protéger votre nom de domaine du Cache Poisoning en activant le DNSSEC'
updated: 2025-03-04
---

## Objectif 

Un serveur DNS héberge une ou plusieurs zone(s) DNS. Une zone DNS contient la configuration DNS d'un nom de domaine. C'est cette configuration qui relie votre nom de domaine aux différents services qui lui sont associés (serveur d'hébergement pour votre site web, serveurs pour vos adresses e-mail personnalisées avec votre nom de domaine, etc.).

Dans certains cas, les flux de données qui transitent par les serveurs DNS peuvent être détournés par des personnes malveillantes.
En résumé, pour effectuer cela, ces personnes empoisonnent le cache des serveurs DNS avec la configuration DNS qu'ils souhaitent appliquer à votre nom de domaine : c'est ce que l'on appelle le « Cache poisoning ».
Ainsi, ils peuvent rediriger les flux entrants de votre nom de domaine vers leurs propres sites web et vers leurs propres adresses e-mail.

Le **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**), permet de protéger la configuration DNS de votre nom de domaine contre le « Cache poisoning » en vérifiant et en authentifiant les réponses DNS.

**Découvrez comment activer le DNSSEC pour votre nom de domaine afin de le protéger contre le « Cache poisoning ».**

> [!primary]
>
> L'option DNSSEC est actuellement indisponible pour les noms de domaine enregistrés chez OVHcloud et dont l'extension est en **.it**.
>

Pour plus d'informations sur le fonctionnement du **DNSSEC**, consultez notre page « [Comprendre le DNSSEC](/links/web/domains-dnssec) ».

N'hésitez pas également à consulter nos guides sur [les serveurs DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information) et sur l'[édition d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) si vous souhaitez plus d'informations sur ces sujets.

## Prérequis

- Disposer d’un nom de domaine.
- Le nom de domaine concerné doit posséder une extension compatible avec le DNSSEC.
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

## En pratique

Pour vérifier si votre nom de domaine utilise la configuration DNS OVHcloud, cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **3** étapes. 

> [!warning]
>
> **Ces 3 étapes sont valables uniquement si votre nom de domaine est enregistré chez OVHcloud.** Dans le cas contraire, vous devrez effectuer la vérification auprès du bureau d'enregistrement de votre nom de domaine.
>
> Si les noms des serveurs DNS se terminent par *ovh.net* (à l'exception du serveur *snds2.ovh.net*), *ovh.ca* ou *anycast.me*, votre nom de domaine utilise bien les serveurs DNS OVHcloud.
>

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le domaine concerné.
>>
>> Si les noms des serveurs DNS se terminent par *ovh.net* (à l'exception du serveur *snds2.ovh.net*), *ovh.ca* ou *anycast.me*, votre nom de domaine utilise bien les serveurs DNS OVHcloud.

> [!primary]
>
> L'activation / désactivation du **DNSSEC** prend **24** heures pour être effective.
>
> Si vous souhaitez changer ultérieurement les serveurs DNS associés à votre nom de domaine, la modification des serveurs DNS ne sera effective côté OVHcloud qu'après la désactivation du **DNSSEC**. Après cela, un délai supplémentaire de **24** à **48** heures sera nécessaire pour la propagation DNS de la modification.
>
> Au total, la modification des serveurs DNS d'un nom de domaine avec la solution **DNSSEC** active sera pleinement effective au bout de **48** à **72** heures.
>

L'activation du **DNSSEC** est possible dans trois cas de figure détaillés ci-dessous.

### Cas n°1 - Votre nom de domaine est enregistré chez OVHcloud et utilise les serveurs DNS d'OVHcloud

Pour activer (ou désactiver) la solution **DNSSEC** pour votre nom de domaine, cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **4** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etape 3**
>>
>> La page qui apparaît affiche les informations générales de votre nom de domaine. Vous pouvez y vérifier l'état d'activation du **DNSSEC** sur celui-ci.
>>
>> Dans le cadre `Sécurité`, vérifiez l'état à côté de la mention `Délégation Sécurisée - DNSSEC`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Etape 4**
>>
>> Grâce au bouton d'activation situé en dessus de la mention `Délégation sécurisée - DNSSEC`{.action}, vous pouvez activer ou désactiver le **DNSSEC** sur votre nom de domaine. En réalisant cette action, une nouvelle fenêtre apparaît depuis laquelle vous pouvez valider la modification.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Cas n°2 - Votre nom de domaine est enregistré chez OVHcloud et n'utilise pas les serveurs DNS d'OVHcloud

Dans cette situation, rapprochez-vous du prestataire gérant la configuration DNS de votre nom de domaine pour lui demander les paramètres d'activation du DNSSEC (« Key Tag » / « Flag » / « Algorithm » / « Clé publique (encodée en base64) »).

Une fois ces 4 paramètres récupérés, cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **5** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `DS records`{.action}. **Cet onglet n'apparaît que si votre nom de domaine utilise des serveurs DNS externes**.
>>
> **Etape 4**
>>
>> Dans la nouvelle page qui apparaît, cliquez sur le bouton `Modifier`{.action} à droite, puis sur le bouton `+`{.action}.
>>
> **Etape 5**
>>
>> Renseignez les 4 formulaires `Key Tag`, `Flag`, `Algorithm` et `Clé publique (encodée en base64)` avec les données communiquées par votre prestataire actuel.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Une fois les 4 formulaires remplis, cliquez sur le bouton bleu `Valider`{.action} situé à droite du tableau.

### Cas n°3 - Votre nom de domaine n'est pas enregistré chez OVHcloud et utilise les serveurs DNS d'OVHcloud

> [!warning]
>
> Avant de poursuivre, assurez-vous auprès du bureau d'enregistrement actuel de votre nom de domaine qu'aucune option DNSSEC n'est déjà active pour celui-ci.

A l'inverse du **cas n°2**, vous devrez ici récupérer côté OVHcloud les paramètres d'activation du DNSSEC (« Key Tag » / « Flag » / « Algorithm » / « Clé publique (encodée en base64) »).

Pour cela, vous devez utiliser les [API OVHcloud](/pages/manage_and_operate/api/first-steps) et effectuer les actions suivantes : 

- Rendez-vous sur notre site [API OVHcloud](/links/api) (vérifiez bien que vous êtes sur `https://eu.api.ovh.com` si vos services sont hébergés en Europe et sur `https://ca.api.ovh.com` s'ils sont hébergés en dehors de l'Europe).
- Sur la page qui s'affiche, cliquez au centre sur `Explore the OVHcloud API`{.action}.
- Sur la nouvelle page qui apparaît et dans la partie gauche de la page, utilisez le menu déroulant situé à droite du formulaire `v1`{.action}, puis sélectionnez/saisissez le choix `/domain`.
- Parmi la liste d'API qui apparaît en dessous dans la colonne de gauche, recherchez et cliquez sur l'API suivante : **POST /domain/zone/{zoneName}/dnssec**. Vous pouvez aussi cliquer directement sur ce lien pour y accéder :

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- Sur la partie droite de la page s'affiche alors l'API avec ses différents formulaires à remplir.
- Cliquez sur le bouton situé en haut à droite intitulé `Authenticate`{.action}, puis sur le bouton `Login with OVHcloud SSO`{.action}.
- L'interface de connexion à votre [espace client OVHcloud](/links/manager) s'ouvre.
- Connectez-vous à votre compte, puis cliquez sur `Authorize`{.action} pour utiliser les API OVHcloud avec les services présents dans votre espace client.
- Vous êtes ensuite automatiquement redirigé vers la page précédente de l'API **POST /domain/zone/{zoneName}/dnssec** en y étant maintenant authentifié.
- Sur la partie droite de la page s'affiche alors l'API avec un formulaire à remplir.
- Remplissez le formulaire de la partie `PATH PARAMETERS` comme suit :
    - `zoneName` : saisissez ici le nom de domaine concerné (exemple : `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Une fois le formulaire rempli, cliquez sur le bouton bleu `EXECUTE`{.action} situé en bas à droite de la section préalablement remplie.

Au bout de quelques minutes, vous recevrez un e-mail d'OVHcloud à l'adresse e-mail de contact de votre zone DNS OVHcloud.
Cet e-mail contiendra les 4 paramètres (« Key Tag » / « Flag » / « Algorithm » / « Clé publique (encodée en base64) ») nécessaires pour activer le DNSSEC auprès du bureau d'enregistrement de votre nom de domaine.

> [!success]
>
> Vérifiez vos courriers indésirables si vous n'avez pas reçu l'e-mail au bout d'une heure.

Pour terminer, contactez le bureau d'enregistrement actuel de votre nom de domaine avec les 4 paramètres pour activer l'option DNSSEC de leur côté.

## Aller plus loin

[Généralités sur les serveurs DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).