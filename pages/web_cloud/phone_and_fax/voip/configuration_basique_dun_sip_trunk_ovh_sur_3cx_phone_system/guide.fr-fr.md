---
title: '3CX - Configuration et utilisation'
excerpt: "Découvrez comment configurer un SIP Trunk OVHcloud avec l'IPBX 3CX et deux DDI"
updated: 2025-10-16
---

## Objectif

Pour configurer le 3CX Phone System avec un SIP Trunk et deux DDI (**D**irect **D**ialling **I**nward), nous allons suivre le sénario suivant : 

>
> - 1 SIP Trunk : XX XX XX XX 90
> - 2 DDI : XX XX XX XX 26 et XX XX XX XX 10
> - 2 Extensions : 1000 et 1001
>
> Les deux extensions peuvent passer des appels sortants via le trunk. 
> L'extension 100 reçoit les appels du DDI XX XX XX XX 26 et présente ce DDI en appel sortant.
> L'extension 101 reçoit les appels du DDI XX XX XX XX 10 et présente ce DDI en appel sortant.
> Les appels reçus directement sur le numéro du trunk sont redirigés vers le répondeur de l'extension 100.
>

**Découvrez comment configurer un SIP Trunk OVHcloud avec l'IPBX 3CX et deux DDI.**

## Prérequis

- Un [SIP Trunk OVHcloud](/links/telecom/telephonie-sip-trunk)
- Deux [alias configurés](/pages/web_cloud/phone_and_fax/voip/redirection_avec_presentation) en DDI (Redirection avec présentation du numéro)
- Un [softphone](/pages/web_cloud/phone_and_fax/voip/register-sip-softphone) ou un téléphone SIP
- [3CX](https://www.3cx.fr/) installé, activé et à jour. 

Obtenez gratuitement 3CX [en cliquant ici](https://www.3cx.fr/pabx/download-pabx-ip/).

## En pratique

> [!warning]
> 
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

### Création du trunk dans 3CX Phone System

> [!success]
> Cliquez sur les onglets ci-dessous pour afficher successivement chacune des 6 étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à l'interface d'administration de 3CX.
>> 
>> ![3CX Phone Systeme](images/3cx_phone_system-login.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur `Trunks SIP`{.action}, puis sur `Ajouter Trunk SIP`{.action}.
>>
>> ![3CX Phone Systeme](images/3cx_phone_system-trunk01.png){.thumbnail}
>>
> **Étape 3**
>>
>> Complétez le formulaire pour ajouter votre ligne SIP Trunk et l'opérateur OVHcloud :
>>
>> - Dans le champ **Choisir un Pays**, sélectionnez le pays de votre ligne SIP Trunk en fonction de son préfixe. Dans ce guide nous sélectionnons `FR`.
>> - Dans le champ **Sélectionner un opérateur de votre pays**, sélectionnez `OVH`.
>> - Dans le champ **Numéro principal**, entrez le numéro de votre trunk (dans notre exemple : `0033XXXXXXX90`).
>> - Vérifiez les informations et cliquez sur `OK`{.action}.
>>
>> ![3CX Phone Systeme](images/3cx_phone_system-trunk02.png){.thumbnail}
>>
> **Étape 4**
>>
>> L'écran suivant affiche les informations de configuration du trunk (proxy, ports, etc.).
>>
>> ![3CX Phone Systeme](images/3cx_phone_system-trunk03.png){.thumbnail}
>>
>> > [!primary]
>> > Pour retrouver vos informations de connexion :
>> >
>> > 1. Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur `Telecom`{.action}.
>> > 1. Cliquez sur `VoIP & Fax`{.action} puis sur le groupe de facturation contenant votre ligne SIP Trunk.
>> > 1. Cliquez sur l'onglet `Services`{.action} puis sur la ligne SIP Trunk concernée.
>> > 1. Dans l'onglet `Gestion`{.action}, cliquez sur `Informations générales`{.action}.
>> >
>> > Vous retrouvez alors, dans la partie « Informations SIP », le **Login**, **Domain** et **Proxy sortant** de votre ligne SIP Trunk.
>>
>> Saississez les informations d'authentification du trunk dans le formulaire en complétant les champs suivants :
>>
>> - **Nom d'hôte** : Renseignez le **Domain** de votre trunk.
>> - **Proxy sortant** : Renseignez le **Proxy sortant** de votre trunk.
>> - **ID d'authentification (SIP User ID)** : Renseignez le **Login** de votre trunk (dans notre exemple : `0033XXXXXXX90`).
>> - **Nombre d'appels simultanés** : Saisissez la valeur maximale autorisée pour votre trunk.
>> - **Mot de passe d'authentification** : Renseignez le mot de passe SIP de votre trunk.
>>
> **Étape 5**
>>
>> Personnalisez ensuite le comportement souhaité lors d'un appel à destination du trunk. Dans notre exemple, nous routons les appels vers le répondeur de l'extension 1000.
>>
>> Pour ce faire, nous sélectionnons l'option  `Messagerie vocale de l'extension` avec l'extension `1000...`, pendant et en dehors des heures de bureau.
>>
>> ![3CX Phone Systeme](images/3cx_phone_system-trunk04.png){.thumbnail}
>>
> **Étape 6**
>>
>> Nous allons associer les DDI au trunk. Cliquez sur l'onglet `SDAs`{.action} en haut de la page, puis :
>>
>> - Cliquez sur le bouton `Ajouter un SDA`{.action}.
>> - Entrez les DDI souhaités.
>> - Cliquez sur `OK`{.action} en haut de la page pour sauvegarder la configuration.
>>
>> ![3CX Phone Systeme](images/3cx_phone_system-trunk07.png){.thumbnail}
>>
>> > [!success]
>> > La création du trunk sur 3CX est maintenant terminée !

### Création et configuration des extensions

L'objectif de cette étape est de configurer les extensions 1000 et 1001.

Configurez l’extension 1000 pour lui permettre de présenter le DDI XX XX XX XX 26.

- Dans l'interface d'administration de 3CX, rendez-vous sur la catégorie `Utilisateurs`{.action}.
- Double cliquez sur l'extension `1000`.
- Dans le champ **Numéro présenté**, saisissez le DDI à présenter. Dans notre cas : 0033XXXXXXX26.
- Cliquez sur `OK`{.action} pour prendre en compte la modification.

![3CX Phone Systeme](images/3cx_phone_system-trunk05.png){.thumbnail}

Créez et configurez l'extension 1001 :

- Dans l'interface d'administration de 3CX, rendez-vous sur la catégorie `Utilisateurs`{.action}.
- Cliquez sur le bouton `Ajouter`{.action}.
- Dans le champ **Extension**, Saisissez `1001`.
- Saisissez ensuite les Nom, Prénom, Adresse mail et numéro de mobile sur la fiche de création de l'extension. 
- Dans le champ **Identifiant d'appelant transmis**, saisissez le DDI à présenter. Dans l'exemple du guide, il s'agit du 0033XXXXXXX10.
- Cliquez sur `Appliquer`{.action} pour prendre en compte la modification.

![3CX Phone Systeme](images/3cx_phone_system-trunk06.png){.thumbnail}

### Création des règles entrantes pour les DDI.

Créez des règles d'appel entrant lorsque les DDI sont appelés. 

- Dans l'interface d'administration de 3CX, rendez-vous sur la catégorie `Règles Entrantes`{.action}.
- Cliquez sur le bouton `Ajouter une règle SDA`{.action}.
- Dans le champ **Nom**, saisissez le nom de la route. Dans notre cas nous mettons `Call-In-XXXXXXX26`.
- Dans le champ **SDA/DID**, sélectionnez le DDI 0033XXXXXXX26.
- Dans le champ **Extension**, choisissez la 1000.
- Cliquez sur `OK`{.action} pour valider la configuration.

![3CX Phone Systeme](images/3cx_phone_system-trunk08.png){.thumbnail}

Pour configurer le second DDI il vous faut appliquer la même procédure, à la différence que vous devez changer le DDI présenté et l'extension cible de l'appel.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).