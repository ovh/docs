---
title: "Paramétrer un DNS dynamique (DynHost/DynDNS) pour votre nom de domaine"
slug: utilisation-dynhost
excerpt: "Découvrez comment paramétrer un enregistrement DNS dynamique pour votre nom de domaine OVHcloud"
section: 'DNS et zone DNS'
order: 06
updated: 2023-06-20
---

**Dernière mise à jour le 20/06/2023**

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage. 

Vous pouvez, par exemple, y préciser :

- l'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine
- les serveurs e-mails (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Ceci afin que vous puissiez les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- des informations liés à la sécurité/authentification de vos services associés (Hébergement web, serveur web, serveur e-mail, etc.) à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.)

Si besoin, retrouvez [ici](/pages/web/domains/dns_zone_edit) sur les enregistrements DNS et l'édition d'une zone DNS depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Pour diverses raisons, comme par exemple l'auto-hébergement (à votre domicile ou dans les locaux de votre entreprise en passant par la *box* de votre **F**ournisseur d'**A**ccès à **I**nternet (**FAI**)) d'un serveur de jeu vidéo sans bénéficier d'une adresse IP dite « fixe », la mise à jour « dynamique » d'un enregistrement DNS peut éviter une interruption prolongée de l'un de vos services. 

**Découvrez comment paramétrer un enregistrement DNS dynamique (DynHost) pour votre nom de domaine OVHcloud.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Utiliser les serveurs DNS proposés par OVHcloud pour le nom de domaine concerné.
- L'enregistrement DynHost que vous vous apprêtez à créer ne doit pas déjà exister dans la zone DNS OVHcloud de votre nom de domaine en tant qu'enregistrement « A ».

> [!warning]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, rapprochez-vous du prestataire/fournisseur gérant sa configuration DNS afin de connaître la marche à suivre à son niveau.
> 
> - Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web cloud`{.action}. Dans la colonne de gauche, cliquez sur l'onglet `Noms de domaine`{.action} puis sélectionnez le nom de domaine concerné. Sur la page qui s'affiche, cliquez sur l'onglet `Serveurs DNS`{.action} pour afficher les serveurs DNS utilisés par votre nom de domaine. 
>
> Pour savoir si vous utilisez ou non les serveurs DNS d'OVHcloud, ces derniers ont la forme suivante : 
>
> - **dnsXX.ovh.net.** et **nsXX.ovh.net.** (où les "**X**" sont des chiffres à remplacer par ceux qui concernent les serveurs de votre nom de domaine) si vous n'utilisez pas l'option *DNS Anycast*
> - **dns200.anycast.me.** et **ns200.anycast.me** si vous utilisez l'option *DNS Anycast*
> 
> Si besoin, consultez notre guide relatif aux [serveurs DNS](/pages/web/domains/dns_server_general_information) pour plus d'informations.
>

## En pratique

### Étape 1 : créer un utilisateur DynHost

La première étape consiste à créer un utilisateur DynHost. Celui-ci vous permettra de réaliser la mise à jour de l'enregistrement DNS dynamique que vous souhaitez créer. Pour démarrer la manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Cliquez alors sur le bouton `Gérer les accès`{.action}, puis sur `Créer un identifiant`{.action}. Dans la fenêtre qui s'affiche, complétez les informations demandées :

|Informations|Description|
|---|---|
|Suffixe de l'identifiant|Définissez un suffixe à l'identifiant DynHost que vous êtes en train de créer.|
|Sous-domaine|Spécifiez le sous-domaine concerné par la création de l'enregistrement DNS dynamique.|
|Mot de passe|Définissez un mot de passe à l'identifiant DynHost puis confirmez-le.|

Une fois les champs complétés, cliquez sur le bouton `Valider`{.action}. L'identifiant apparaît alors dans le tableau présent sur la page actuelle. Répétez cette étape autant de fois que nécessaire si vous avez besoin d'identifiants DynHost additionnels.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Étape 2 : créer l'enregistrement DNS dynamique (DynHost)

La seconde étape consiste à créer l'enregistrement DNS qui devra être mis à jour dynamiquement. Pour rappel, celui-ci ne doit pas déjà exister dans la zone DNS OVHcloud de votre nom de domaine en tant qu'enregistrement « A ». Pour le vérifier, et le supprimer si nécessaire, reportez-vous aux informations de notre documentation « [Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external} ».

Dès que vous êtes prêt à créer l'enregistrement DynHost, repositionnez-vous sur l'accueil de l'onglet `DynHost`{.action}, puis cliquez sur le bouton `Ajouter un DynHost`{.action}. Dans la fenêtre qui s'affiche, complétez les informations demandées :

|Informations|Description|
|---|---|
|Sous-domaine|Renseignez le sous-domaine dont l'enregistrement DNS devra être mis à jour dynamiquement. Ce sous-domaine doit correspondre à celui renseigné lors de la création de l'utilisateur DynHost.|
|IP de destination|Renseignez l'adresse IP qui doit être actuellement utilisée par l'enregistrement DNS. Selon le principe du DynHost, celle-ci sera mis à jour par la suite.|

Une fois les champs complétés, cliquez sur le bouton `Valider`{.action}. L'enregistrement DynHost apparaît alors dans le tableau présent sur la page actuelle. Répétez cette étape autant de fois que nécessaire si vous avez besoin d'enregistrements DynHost supplémentaires.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Étape 3 : automatiser le changement du DynHost

Maintenant que l'utilisateur et l'enregistrement DynHost sont créés, la dernière étape consiste à automatiser la mise à jour de l'enregistrement DNS afin qu'elle soit réalisée dynamiquement. Pour cela, il est nécessaire d'utiliser un client qui se chargera de vérifier régulièrement si l'adresse IP de destination a changé afin de la mettre à jour.

> [!warning]
>
> L'installation et la configuration du client doivent être réalisées selon vos propres connaissances. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance à ce propos. 
>

Les possibilités étant vastes, sachez que ce client peut être installé sur votre serveur ou sur votre ordinateur, ou peut être déjà disponible dans l'interface de votre routeur si ce dernier est compatible. Une fois le client choisi et installé, vous devrez le configurer en utilisant les informations de l'utilisateur DynHost créé précédemment.

Selon le client utilisé, il se peut qu'une adresse URL de mise à jour soit également requise en plus des éléments de l'utilisateur DynHost et du sous-domaine concerné. Si tel est le cas, utilisez l'adresse URL ci-dessous en prenant soin d'y remplacer les informations génériques :

> https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Informations|À remplacer par|
|---|---|
|$HOSTNAME|Le sous-domaine concerné par la modification.|
|$IP|La nouvelle adresse IP de destination.|

Vous pouvez vérifier si l'adresse IP de destination a bien été mise à jour dans votre espace client depuis l'onglet `DynHost`{.action}. Vérifiez l'adresse IP qui apparaît dans la colonne `Cible`{.action}.

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
