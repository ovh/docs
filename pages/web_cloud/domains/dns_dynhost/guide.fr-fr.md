---
title: "Paramétrer un DNS dynamique (DynHost/DynDNS) pour votre nom de domaine"
excerpt: "Découvrez comment paramétrer un enregistrement DNS dynamique pour votre nom de domaine OVHcloud"
updated: 2024-07-12
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage. 

Pour plus d'explications, consultez nos guides suivants :

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

La mise à jour de manière « dynamique » d'un enregistrement DNS peut éviter une interruption prolongée de l'un de vos services si vous ne disposez pas d'une adresse IP dite « fixe » (qui ne change pas).

Par exemple, le **DynHost** peut être utilisé si vous *auto-hébergez* (dans les locaux de votre entreprise ou à votre domicile en passant par la *box* de votre **F**ournisseur d'**A**ccès à **I**nternet (**FAI**)) un serveur de jeux vidéo sans bénéficier d'une adresse IP « fixe ».

> [!primary]
>
> Tout enregistrement « A » ou « AAAA » avec un TTL (**T**ime **T**o **L**ive) de 60 secondes est considéré comme DynHost. Le TTL est une valeur qui indique la durée pendant laquelle un enregistrement DNS est mis en cache par les serveurs DNS avant d'être mis à jour.
>

**Découvrez comment paramétrer un enregistrement DNS dynamique (DynHost) pour votre nom de domaine OVHcloud.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis votre [espace client OVHcloud](/links/manager){.external}.
- Utiliser les serveurs DNS proposés par OVHcloud pour le nom de domaine concerné.
- L'enregistrement DynHost que vous vous apprêtez à créer ne doit pas déjà exister dans la zone DNS OVHcloud de votre nom de domaine en tant qu'enregistrement « A » ou « AAAA ».

> [!warning]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, rapprochez-vous du prestataire/fournisseur gérant sa configuration DNS afin de connaître la procédure à suivre à son niveau.
> 
> - Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur l'onglet `Noms de domaine`{.action} puis sélectionnez le nom de domaine concerné. Sur la page qui s'affiche, cliquez sur l'onglet `Serveurs DNS`{.action} pour afficher les serveurs DNS utilisés par votre nom de domaine. 
>
> Pour savoir si vous utilisez ou non les serveurs DNS d'OVHcloud, ces derniers ont la forme suivante : 
>
> - **dnsXX.ovh.net.** et **nsXX.ovh.net.** (où les "**X**" sont des chiffres à remplacer par ceux qui concernent les serveurs de votre nom de domaine) si vous n'utilisez pas l'option *DNS Anycast*
> - **dns200.anycast.me.** et **ns200.anycast.me** si vous utilisez l'option *DNS Anycast*
> 
> Si besoin, consultez notre guide relatif aux [serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) pour plus d'informations.
>

## En pratique

### Étape 1 : créer un utilisateur DynHost <a name="step1"></a>

Pour créer un utilisateur DynHost, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur l'onglet `Noms de domaine`{.action} puis sélectionnez le nom de domaine concerné. Sur la page qui s'affiche, cliquez sur l'onglet `DynHost`{.action}.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}

Cliquez sur le bouton `Gérer les accès`{.action} puis sur `Créer un identifiant`{.action}. Dans la fenêtre qui s'affiche, complétez les informations demandées :

|Informations|Description|
|---|---|
|Suffixe de l'identifiant|Définissez un suffixe pour l'identifiant DynHost que vous êtes en train de créer.|
|Sous-domaine|Spécifiez le sous-domaine concerné par la création de l'enregistrement DNS dynamique. Si vous souhaitez gérer l'ensemble des sous-domaines avec un seul identifiant, précisez juste `*` dans le formulaire de saisie|
|Mot de passe|Définissez le mot de passe associé à l'identifiant DynHost puis confirmez-le.|

> [!success]
>
> Pour mettre en place un DynHost directement pour votre nom de domaine, saisissez uniquement `*` dans le formulaire de saisie intitulé `Sous-domaine`{.action}.
>

Une fois les champs complétés, cliquez sur le bouton `Valider`{.action}. L'identifiant apparaît alors dans le tableau présent sur la page actuelle. Répétez cette étape autant de fois que nécessaire si vous avez besoin de créer plusieurs identifiants DynHost.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}

### Étape 2 : créer l'enregistrement DNS dynamique (DynHost) <a name="step2"></a>

La seconde étape consiste à créer l'enregistrement DNS qui devra être mis à jour dynamiquement. Pour rappel, celui-ci ne doit pas déjà exister dans la zone DNS OVHcloud de votre nom de domaine en tant qu'enregistrement « A » ou « AAAA ». Pour le vérifier, et le supprimer si nécessaire, reportez-vous aux informations de notre documentation « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

Dès que vous êtes prêt à créer l'enregistrement DynHost, repositionnez-vous sur l'onglet `DynHost`{.action} puis cliquez sur le bouton `Ajouter un DynHost`{.action}. Dans la fenêtre qui s'affiche, complétez les informations demandées :

|Informations|Description|
|---|---|
|Sous-domaine|Renseignez le sous-domaine dont l'enregistrement DNS devra être mis à jour dynamiquement. Ce sous-domaine doit correspondre à celui renseigné lors de la création de l'utilisateur DynHost. **Si vous souhaitez mettre en place un DynHost directement pour votre nom de domaine, laissez ce formulaire de saisie vide**|
|IP de destination|Renseignez l'adresse IP (IPv4 ou IPv6) qui doit être actuellement utilisée par l'enregistrement DNS. Il s'agit généralement de l'adresse IP publique de votre *box* Internet ou de votre serveur auto-hébergé. Selon le principe du DynHost, celle-ci sera mise à jour automatiquement par la suite.|

> [!warning]
>
> L'utilisation d'un wildcard (en placant uniquement le caractère `*` dans le formulaire `Sous-domaine`{.action}) pour la mise en place d'un enregistrement DNS dynamique est indisponible.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}

Une fois les champs complétés, cliquez sur le bouton `Valider`{.action}. L'enregistrement DynHost apparaît alors dans le tableau présent sur la page actuelle. Répétez cette étape autant de fois que nécessaire si vous avez besoin d'enregistrements DynHost supplémentaires.

### Étape 3 : automatiser le changement du DynHost

Une fois l'[utilisateur](#step1) et l'[enregistrement DynHost](#step2) créés, il vous faut automatiser la mise à jour de l'enregistrement DNS afin qu'elle soit réalisée de manière dynamique. Pour cela, vous devrez utiliser un logiciel/client qui se chargera de vérifier régulièrement si l'adresse IP de destination a changé afin de la mettre à jour automatiquement.

> [!warning]
>
> L'installation et la configuration du logiciel/client doivent être réalisées selon vos propres connaissances. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce sujet. 
> Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Il existe plusieurs possibilités concernant le logiciel/client : 

- il peut être installé sur votre serveur ou sur votre ordinateur ;
- il peut déjà être disponible dans l'interface de votre routeur/*box* Internet si ce dernier est compatible. Si vous éprouvez des difficultés dans ce cas de figure, rapprochez du support de votre **FAI** pour effectuer la configuration.

Une fois le client choisi et installé, vous devrez le configurer en utilisant les informations de l'utilisateur DynHost créé précédemment dans l'espace client OVHcloud.

Selon le client utilisé, une adresse URL de mise à jour peut être requise en plus des éléments de l'utilisateur DynHost et du sous-domaine concerné. Si tel est le cas, utilisez l'adresse URL ci-dessous en prenant soin d'y remplacer les informations génériques :

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Information|À remplacer par|
|---|---|
|$HOSTNAME|Le sous-domaine concerné par la modification.|
|$IP|La nouvelle adresse IPv4 ou IPv6 de destination.|

Vous pouvez vérifier si l'adresse IP de destination a bien été mise à jour. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur l'onglet `Noms de domaine`{.action} puis sélectionnez le nom de domaine concerné. Sur la page qui s'affiche, cliquez sur l'onglet `DynHost`{.action}. Vérifiez l'adresse IP qui apparaît dans la colonne `Cible`{.action}.

> [!warning]
>
> Toute modification dans la zone DNS active d'un nom de domaine via DynDNS peut entraîner un délai de propagation de la mise à jour de plusieurs minutes.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).