---
title: "Tutoriel - Comment changer le domaine d'un site existant"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Découvrez comment changer le nom de domaine d'un site existant"
section: "Cas d'usage"
order: 02
---

**Dernière mise à jour le 26/09/2022**

## Objectif

Au cours de la vie de votre site internet, vous pouvez être amené à changer le nom de domaine de votre site. Le cas le plus courant est lorsque le nom de votre entreprise change par exemple.

Ce tutoriel a pour objectif de vous expliquer les principales étapes à suivre lorsque vous souhaitez changer le nom de domaine d'accès à votre site internet.

**Découvrez comment changer le nom de domaine d'un site existant**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Disposer d'un [hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> [!warning]
>
> Le changement de nom de domaine pour accéder à votre site peut avoir des conséquences sur son référencement. 
> Soyez vigilant quant aux manipulations que vous allez entreprendre ou contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) dans le référencement si nécessaire.
>

Pour changer le nom de domaine d'accès à votre site web, plusieurs étapes sont à réaliser dans un ordre bien précis.

### Etape 1 : Déclarer le nouveau domaine sur votre hébergement mutualisé

Déclarez votre nouveau nom de domaine à l'aide de notre documentation sur l'[ajout d'un multisite sur votre hébergement mutualisé](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Déclarez également votre nouveau domaine avec son sous-domaine en "www" si vous souhaitez, par exemple, que *www.NewDomain.tld* affiche aussi votre site en plus de *NewDomain.tld*.

> [!warning]
>
> Votre nouveau domaine doit pointer vers le même `dossier racine`{.action} que le domaine utilisé actuellement pour accéder à votre site.
> 
> Vérifiez que votre nouveau domaine pointe bien vers l'adresse IP de votre hébergement mutualisé. Pour récupérer l'adresse IP de votre hébergement si la zone DNS active de votre domaine n'est pas gérée sur votre espace client OVHcloud, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `hébergements`{.action} puis récupérez **l'IPv4** dans l'onglet `Informations générales`{.action}.
>
> Utilisez bien la bonne adresse IP notamment si vous activez les options `IP du pays`{.action} ou `CDN`{.action} avec votre nouveau domaine.
>
> Retrouvez également les adresses IP des hébergement mutualisés à l'aide de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>

Si le domaine initialement utilisé pour accéder à votre site dispose d'un certificat SSL, consultez nos deux guides afin d'effectuer ou de vérifier les actions décrites juste en dessous de ces deux liens :

 - [Gérer un certificat SSL sur son hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)
 - [Passer son site internet en HTTPS grâce au SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)


> [!primary]
>
> Pour le certificat SSL *Let's Encrypt* gratuit, il vous suffira d'activer l'option `SSL`{.action} **dès à présent** pour votre nouveau domaine via l'onglet `multisites`{.action} de votre hébergement puis de `Régénérer le certificat SSL`{.action} à l'aide du bouton situé à droite du tableau indiquant vos multistes. 
>
> Pour les certificats SSL payants proposés par OVHcloud *Sectigo DV* et *Sectigo EV*, ces derniers sont uniquement valables pour un seul nom de domaine et son sous-domaine en "www". **Après avoir effectué toutes les étapes de ce guide**, vous devrez supprimer votre certificat SSL payant afin d'en souscrire un nouveau pour votre nouveau domaine.
> *Attention, la suppression est irréversible et aucun remboursement ne sera effectué sur le temps restant de votre ancien certificat SSL.*
>
> Pour les autres certificats SSL *custom* que vous auriez installé par vous-même, contactez votre fournisseur de certificats SSL afin de connaître les possibilités qui s'offrent à vous dans cette situation.
>

Si l'ensemble des actions ont été correctement réalisées, vos deux domaines pointent au même endroit.

> [!primary]
>
> L'étape 1 une fois réalisée nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

Si votre site n'utilise pas de bases de données et/ou que vous n'effectuez pas de réécritures d'URL pour votre site web, ce dernier doit alors s'afficher avec votre nouveau domaine. Dans ce cas, passez directement à [l'étape 3](#step3) de ce guide. Si non, poursuivez à l'étape 2.

### Etape 2 : Réécritures des URLs dans votre site web avec le nouveau domaine

La plupart des sites utilisent des bases de données pour fonctionner. L'arborescence de ces dernières est généralement construite autour du domaine initialement utilisé pour votre site. Le fait de changer le nom de domaine d'accès peut rendre inopérant votre site.

> [!warning]
>
> Attention, les opérations décrites dans l'étape 2 sont extrêmement sensibles et peuvent avoir des conséquences graves pour votre site web si elle ne sont pas effectuées avec précaution. Si vous avez le moindre doute, ne tentez rien et faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/).
>

> [!primary]
>
> Avant toute action, nous vous invitons à récupérer une [sauvegarde de votre espace de stockage FTP](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) ainsi qu'une [sauvegarde de votre base de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/). Cela vous permettra de restaurer votre site en cas de mauvaises manipulations.
>




## Aller plus loin <a name="go-further"></a>

[Liste des IPs de nos hébergements mutualisés](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/)

[Gérer un certificat SSL sur son hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Passer son site internet en HTTPS grâce au SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.