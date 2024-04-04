---
title: Comment connecter un nom de domaine OVHcloud à un hébergement Shopify
excerpt: Vous trouverez dans ce guide les astuces pour vous connecter à votre nom de domaine OVHcloud depuis un hébergement Shopify
updated: 2024-04-03
---

## Objectif

Si vous possédez un nom de domaine chez OVHcloud et que vous souhaitez le connecter à un hébergement Shopify, vous trouverez de ce guide la démarche à suivre.

**Découvrez comment connecter à votre nom de domaine OVHcloud à un hébergement Shopify**

> [!warning]
>
> L’assistance Shopify n’a pas accès aux paramètres de votre nom de domaine OVHcloud et ne peut, par conséquent, pas vous conseiller sur les informations que vous devrez lui fournir.
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Posséder un [nom de domaine](https://www.ovhcloud.com/fr/domains/){.external} enregistré chez OVHcloud.
- Disposer d'un accès à la gestion du nom de domaine concerné depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d’un hébergement chez Shopify.
- Disposer des [autorisations appropriées pour gérer](/pages/account_and_service_management/account_information/managing_contacts) le nom de domaine depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Avoir accès à la gestion de la zone DNS de votre nom de domaine OVHcloud.

> [!warning]
>
> Vous ne pouvez avoir que des enregistrements A et CNAME `www`{.action} associés à votre domaine. Si celui-ci possède déjà ces enregistrements `www`{.action}, vous devez les modifier pour qu’ils pointent vers Shopify. Vous pouvez avoir plusieurs enregistrements CNAME associés à votre domaine, mais chacun doit avoir un nom unique, comme ‘www’{.action} ou ‘shop’{.action}.

## En pratique

### Les bonnes pratiques pour commencer

Avant de vous lancer dans les deux étapes de ce guide, nous vous prions de prendre connaissance des guides suivants :
- Pour vous familiarisez avec les notions de DNS et CNAME, consultez [ce guide](/pages/web_cloud/domains/dns_zone_edit) 
- Pour changer les enregistrements **A** et **CNAME**, [Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information) 

### Etape 1 : modifier vos enregistrements DNS sur votre compte OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la section `Web Cloud`{.action}. Cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}. 

cliquez sur le bouton `...`{.action} à droite de chaque ligne du tableau concernée puis cliquez sur `Modifier l'entrée`{.action}.


3. Changez les enregistrements suivants :
    a. Pointez l’enregistrement **A** vers l’adresse IPV4 de Shopify `23.227.38.65`{.action}.
    b. Au besoin, remplacez le nom d’**hôte** par le symbole ‘@’ {.action}.
    c. Supprimez tous les autres enregistrements A sur le domaine, le cas échéant.
    d. Pointez l’**enregistrement CNAME** avec le nom **www** vers `shops.myshopify.com`{.action}. Assurez-vous d’inclure le point à la fin du domaine.
4. Enregistrez vos modifications.

> [!primary]
>
> Vous n’avez pas besoin de modifier le numéro de **TTL** dans vos paramètres DNS. Utilisez la valeur par défaut. 

### Etape 2 : Connecter son domaine à Shopify

Les démarches de cette étape étant spécifiques à votre administrateur Shopify, nous vous invitons à vous rendre directement à l’étape 2 de [leur guide]( https://help.shopify.com/fr/manual/domains/add-a-domain/connecting-domains/connect-domain-manual){.external}.

**Remarque** : la vérification de votre domaine peut prendre jusqu’à 48 heures.

> [!warning]
>
> Si vous avez des e-mails OVHcloud ou comptez en souscrire, vous devez modifier l'adresse IPv4, modifier le champ ‘CNAME’ (ou l'ajouter s'il n'existe pas) avec le sous-domaine « www », et supprimer les champs IPv6 s'ils sont présents dans la zone DNS. Consultez le guide suivant pour plus d’informations sur la [configuration d’un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx). 

## Aller plus loin <a name="gofurther"></a>

[Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create). 

[Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Configurer un enregistrement MX](/pages/web_cloud/domains/dns_zone_mx)

Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, suivez [ce guide](/pages/account_and_service_management/account_information/managing_contacts).

[Changer le propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.