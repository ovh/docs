---
title: 'Sécuriser votre nom de domaine avec DNSSEC'
excerpt: 'Découvrez comment protéger votre nom de domaine du Cache Poisoning en activant le DNSSEC'
updated: 2023-07-21
---

## Objectif

Un serveur DNS héberge une ou plusieurs zone(s) DNS. Une zone DNS contient la configuration DNS d'un nom de domaine. C'est cette configuration qui relie votre nom de domaine aux différents services qui lui sont associés (serveur d'hébergement pour votre site web, serveurs pour vos adresses e-mail personnalisées avec votre nom de domaine, etc.).

Dans certains cas, les flux de données qui transitent par les serveurs DNS peuvent être détournés par des personnes malveillantes.
En résumé pour effectuer cela, ces derniers empoisonnent le cache des serveurs DNS avec la configuration DNS qu'ils souhaitent appliquer à votre nom de domaine : c'est ce que l'on appelle le « Cache poisoning ».
Ainsi, ils peuvent rediriger les flux entrants de votre nom de domaine vers leurs propres sites web et vers leurs propres adresses e-mail.

Le **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**), permet de protéger la configuration DNS de votre nom de domaine contre le « Cache poisoning » en vérifiant et en authentifiant les réponses DNS.

**Découvrez comment activer le DNSSEC pour votre nom de domaine afin de le protéger contre le « Cache poisoning ».**  

Pour plus d'informations sur le fonctionnement du **DNSSEC**, consultez notre page : « [Comprendre le DNSSEC](https://www.ovhcloud.com/fr/domains/dnssec/){.external} ».

N'hésitez pas également à consulter nos guides sur [les serveurs DNS OVHcloud](/pages/web/domains/dns_server_general_information/) et sur l'[édition d'une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit/) si vous souhaitez plus d'informations sur ces sujets.

## Prérequis

- Disposer d’un nom de domaine enregistré chez OVHcloud.
- Le nom de domaine concerné doit posséder une extension compatible avec le DNSSEC.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.

## En pratique

L'activation du **DNSSEC** est possible dans deux cas :

- **Votre nom de domaine utilise les serveurs DNS d'OVHcloud** : l'activation s'effectue en un clic depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} (si celle-ci n'est pas déjà activée par défaut) ;

- **Votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud** : rapprochez-vous du prestataire gérant la configuration DNS de votre nom de domaine pour lui demander ses paramètres. Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine concerné dans la liste.</br>
Sélectionnez l'onglet `DS records`{.action}, cliquez sur le bouton `Modifier`{.action} à droite puis sur le bouton `+`{.action} qui apparaît.</br>
Vous pouvez désormais renseigner les 4 champs « Key Tag », « Flag », « Algorithm », « Clé publique (encodée en base64) », avec les données communiquées par votre prestataire actuel.

> [!primary]
>
> Pour vérifier si votre nom de domaine utilise la configuration DNS OVHcloud, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine concerné dans la liste. Sélectionnez l'onglet `Serveurs DNS`{.action}, une fois positionné sur le domaine concerné.
>
> Si les noms des serveurs DNS se terminent par *ovh.net*, *ovh.ca* ou *anycast.me*, votre nom de domaine utilise bien les serveurs DNS OVHcloud.
>

### Étape 1 : accéder à la gestion du nom de domaine <a name="step1"></a>

Pour activer la solution **DNSSEC** pour votre nom de domaine, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis choisissez le nom de domaine concerné dans la liste.

La page qui apparaît affiche les informations générales de celui-ci. 

### Étape 2 : gérer le DNSSEC de son nom de domaine

Toujours dans l'onglet `Informations générales`{.action} suite à l'[étape 1](#step1), vous pouvez vérifier l'état d'activation du **DNSSEC** sur votre nom de domaine.

Pour cela, dans le cadre « Sécurité », vérifiez l'état à côté de la mention « Délégation Sécurisée - DNSSEC ».

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Grâce au bouton d'activation situé en dessus de la mention `Déléguation sécurisée - DNSSEC`{.action}, vous pouvez activer ou désactiver le **DNSSEC** sur votre nom de domaine. En réalisant cette actions, une nouvelle fenêtre apparaît depuis laquelle vous pouvez valider la modification.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> L'activation / désactivation du **DNSSEC** prend **24** heures pour être effective.
>
> De plus, si ultérieurement vous souhaitez changer les serveurs DNS associés à votre nom de domaine, la modification des serveurs DNS ne sera effective côté OVHcloud qu'après la désactivation du **DNSSEC**. Après cela, un délai supplémentaire de **24** à **48** heures sera nécessaire pour la propagation DNS de la modification.
>
> Au total, la modification des serveurs DNS d'un nom de domaine avec la solution **DNSSEC** active sera pleinement effective au bout de **48** à **72** heures.
>

## Aller plus loin

[Généralités sur les serveurs DNS OVHcloud](/pages/web/domains/dns_server_general_information/)

[Editer une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.