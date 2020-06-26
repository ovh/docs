---
title: Ajouter un champ SPF à la configuration de son nom de domaine
slug: le-champ-spf
excerpt: Apprenez à ajouter un champ SPF à la configuration de votre nom de domaine chez OVHcloud
section: DNS et zone DNS
order: 5
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Le SPF (Sender Policy Framework) permet à un serveur qui reçoit un e-mail de s’assurer que ce dernier a bien été envoyé par un serveur qui en a le droit. Le SPF s'ajoute en tant qu'entrée dans une zone DNS où sont indiqués les serveurs ou les adresses IP autorisés à envoyer des e-mails vers le domaine en question.

**Apprenez à ajouter un champ SPF à la configuration de votre domaine chez OVHcloud.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Le nom de domaine concerné doit utiliser la configuration OVHcloud (c'est à dire les serveurs DNS d'OVHcloud).

> [!warning]
>
> Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification du SPF depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
>
> Si votre nom de domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration OVHcloud dans votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external} depuis l'onglet `Serveurs DNS`{.action}, une fois positionné sur le domaine concerné.
>

## En pratique

### Étape 1 : comprendre le champ SPF

Avant d'ajouter ou de modifier un champ SPF dans la configuration de votre domaine, il est important d'en comprendre l'utilité. Ce dernier vise à éviter les potentielles usurpations d'identité avec les adresses e-mail utilisant votre nom de domaine.

Cette action est rendue possible grâce aux informations renseignées dans le SPF lui-même. On peut y retrouver :

- **des serveurs ou plusieurs adresses IP** : ceci permettra de les identifier en tant que source d'envoi légitime ;
- **un qualifieur** : il permettra de préconiser au serveur réceptionnant les e-mails une manière spécifique de réagir à un message considéré comme non légitime, c'est à dire provenant d'une source présentant un risque potentiel.

Vous devrez donc vous assurer de mettre dans le SPF les sources d'envoi que vous utilisez pour émettre vos e-mails avec votre domaine. Ces sources peuvent être votre propre serveur, celui de votre prestataire ou l'une des solutions e-mail d'OVHcloud.

> [!primary]
>
> Le SPF n'est qu'une indication fournie aux serveurs recevant des e-mails, dont les vôtres. Il appartient à ces derniers d'appliquer ou non ce qui est spécifié dans le SPF des domaines pour lesquels ils reçoivent des messages.
>

### Étape 2 : connaître la configuration OVHcloud

La configuration OVHcloud s'applique aux solutions ci-dessous :

- MX Plan seule ou incluse dans une offre d’[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external} ;
- [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external} ;
- [Hosted Exchange](https://www.ovh.com/ca/fr/emails/hosted-exchange/){.external}.

Lorsque vous commandez l'une de ces solutions, nous vous recommandons d'utiliser un SPF comportant les informations d'OVHcloud dans la configuration de votre domaine. Ce dernier ressemble à ceci :

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Si votre domaine utilise la configuration OVHcloud, vous pouvez vérifier si un SPF est déjà configuré pour ce dernier. Pour cela, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, puis dans la barre de services à gauche. Rendez-vous dans la section `Domaines`{.action}. Cliquez ensuite sur le domaine concerné, puis rendez-vous ensuite dans l'onglet `Zone DNS`{.action}.

Un tableau devrait apparaître. Ce dernier affiche la configuration de votre domaine chez OVHcloud. Elle est constituée de plusieurs enregistrements DNS, tous symbolisés par une ligne du tableau.

> [!primary]
>
> Si votre domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise la configuration OVHcloud depuis l'onglet `Serveurs DNS`{.action}.
>

Dans le tableau, pour retrouver la ligne correspondante au SPF OVHcloud, un champ de filtrage peut être utilisé. Ce dernier pouvant apparaître à deux endroits différents, sélectionnez dans le champ de filtrage `TXT`{.action} ou `SPF`{.action}  en passant de l'un à l'autre si nécessaire. Dès lors, l'affichage du tableau peut être différent.

- **"v=spf1 include:mx.ovh.com ~all" est affiché dans la colonne cible** : votre domaine utilise déjà la configuration OVHcloud. Si vous ne souhaitez plus l'utiliser, vous devrez la modifier lors de l'étape suivante.

- **Un SPF ne correspondant pas aux informations OVHcloud est affiché dans la colonne cible** : votre domaine utilise déjà un SPF personnalisé. Sa modification ou le choix de la configuration OVHcloud se font à l'étape suivante.

- **Aucun SPF ne s'affiche dans la colonne cible** : vérifiez au préalable si le champ n'est pas créé en tant que SPF ou TXT en modifiant le filtrage. Si aucun SPF ne s'affiche qu'importe le filtrage, votre domaine n'en utilise pas. Vous pourrez en ajouter un lors de l'étape suivante.

> [!primary]
>
> Un SPF se compose toujours de la forme suivante : "v=spf1 sources qualifieur". Par exemple, le SPF OVHcloud est : "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Étape 3 : modifier le SPF

Pour modifier le SPF dans la configuration OVHcloud de votre domaine, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Domaines`{.action}, cliquez sur le domaine concerné, puis rendez-vous ensuite dans l'onglet `Zone DNS`{.action}.

Le tableau affiche la configuration OVHcloud de votre domaine. Chaque ligne correspond à un enregistrement DNS.

Pour modifier ou ajouter un SPF, vous devrez ajouter une nouvelle entrée dans la configuration OVHcloud (zone DNS) de votre domaine. Pour ce faire, cliquez sur `Ajouter une entrée`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Dans la fenêtre qui s'affiche, plusieurs champs DNS vous sont proposés. Concernant l'ajout d'un SPF, deux possibilités s'offrent à vous :

- **ajouter manuellement le SPF** : pour les utilisateurs avertis ou disposant déjà des informations à renseigner (communiquées par votre prestataire gérant vos e-mails par exemple) ;
- **utiliser notre assistant de configuration SPF** : pour les utilisateurs non avertis ou ne possédant pas les informations nécessaires.

Selon votre décision, la suite de la procédure sera différente.

![domain](images/spf_records_add_entry.png){.thumbnail}

#### Ajouter manuellement le SPF

Parmi les champs proposés, cliquez sur `TXT`{.action}, puis complétez les informations demandées. Dans la zone `Valeur`{.action}, renseignez le SPF que vous souhaitez utiliser.

Pour finaliser l'action, cliquez sur `Suivant`{.action}. Assurez-vous que les informations affichées sont correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Utiliser l'assistant de configuration SPF d'OVHcloud

Parmi les champs proposés, cliquez sur `SPF`{.action}. Sur l'étape suivante, deux choix s'offrent à vous :

- utiliser le SPF pour les solutions OVHcloud (MX Plan, E-mail Pro et Hosted Exchange) ;
- personnaliser le SPF grâce à notre assistant.

##### Utiliser le SPF OVHcloud

Cliquez sur le bouton `Utiliser le SPF pour mutualisé OVH`{.action}. Les informations relatives au SPF OVHcloud s'afficheront. Cliquez sur le bouton `Valider`{.action} pour réaliser la modification.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

##### Personnaliser le SPF

L'assistant de configuration vous permettra de personnaliser au fur et à mesure votre SPF. Pour ce faire, vous devrez répondre aux différentes questions et apporter les informations nécessaires. Certains éléments demandés peuvent s'adresser à des utilisateurs avertis.

Nous allons les aborder progressivement.

|Détails|Description|
|---|---|
|Sous-domaine|Complétez si le SPF doit s'appliquer à un sous-domaine de votre domaine. Cela s'applique si vous envoyez des e-mails depuis un sous-domaine.|
|TTL|Il s'agit du temps de propagation (d'application) qui s'appliquera lorsque vous modifierez de nouveau cet enregistrement DNS.|
|Autoriser l'IP à envoyer des e-mails|Peut être pertinent si votre site internet et vos adresses e-mail sont hébergés sur un serveur utilisant la même adresse IP (par exemple sur votre serveur dédié).|
|Autoriser les serveurs MX à envoyer des e-mails|Peut être pertinent si les serveurs réceptionnant vos e-mails peuvent également en envoyer.|
|Autoriser tous les serveurs dont le nom se termine par votre domaine à envoyer des e-mails|Cette option n'est pas recommandée car elle peut ajouter de manière trop large des sources légitimes dans votre SPF.|

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Concernant la question : "**D'autres serveurs envoient-ils le courrier avec votre domaine ?**", plusieurs éléments peuvent être complétés :

|Détails|Description|
|---|---|
|a|Renseignez ici des noms de domaine. Cela légitimera les serveurs hébergeant les sites de ces derniers à envoyer des e-mails avec vos adresses.|
|mx|Renseignez ici les serveurs qui réceptionnent vos e-mails (serveurs MX) si ces derniers peuvent également en envoyer. Ils seront ainsi identifiés comme une source d'envoi légitime.|
|ptr|Renseignez ici des noms d'hôtes dont le *reverse* est fonctionnel (grâce à un champ PTR dans la zone DNS). Ils seront ainsi identifiés comme une source d'envoi légitime.|
|ip4|Indiquez les IP ou les plages d'IP (IPv4) autorisées à envoyer des e-mails avec vos adresses.|
|ip6|Indiquez les IP ou les plages d'IP (IPv6) autorisées à envoyer des e-mails avec vos adresses.|
|include|Renseignez ici des noms de domaine. Cela permettra d'utiliser le SPF de ces derniers pour votre propre domaine. Par exemple, OVHcloud utilise cette méthode dans sa configuration SPF :  "v=spf1 include:mx.ovh.com ~all", ce qui permet à OVHcloud de gérer le SPF de mx.ovh.com et de permettre à ses clients de l'utiliser.|

Enfin, concernant la question : "**Est-ce que les informations que vous avez indiquées décrivent tous les hôtes qui envoient du courrier avec votre domaine ?**", trois choix sont possibles :

|Détails|Description|
|---|---|
|Oui, je suis sûr|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les rejeter s'ils proviennent d'une source non légitime (non présente dans votre SPF).|
|Oui, mais utiliser le safe mode|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les accepter s'ils proviennent d'une source non légitime (non présent dans votre SPF), mais de les taguer afin qu'ils soient identifiables comme potentiellement non légitimes (en tant que "spam" par exemple).|
|Non|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les accepter s'ils proviennent d'une source non légitime (non présente dans votre SPF), sans action particulière. L'entête de l'e-mail sera cependant incrémenté.|

Pour rappel, le SPF reste une indication donnée aux serveurs qui reçoivent des e-mails, dont les vôtres. Reste à ces derniers d'appliquer ou non ce qui est spécifié dans le SPF des domaines pour lesquels ils reçoivent des messages.

Une fois les informations complétées, cliquez sur `Suivant`{.action}, assurez-vous que les informations affichées soient bien correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

## Aller plus loin

[Généralités sur les serveurs DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
