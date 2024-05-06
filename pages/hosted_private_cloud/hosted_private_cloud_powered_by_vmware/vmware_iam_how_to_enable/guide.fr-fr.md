---
title: "Gérer IAM dans Hosted Private Cloud - VMware On OVHcloud"
excerpt: "Comment activer avec IAM dans un cloud privée OVH"
updated: 2024-05-24
---

# Table of Contents
1. [Premiers pas avec IAM](lien vers doc getting started)
1. [Les Prérequis](lien vers doc)
2. [Les concepts IAM dans un PCC](lien vers doc)
3. [Comment activer IAM](lien vers doc)
4. [Comment ajouter un role IAM manuellement](lien vers doc)


## Objectif

**Ce guide vous détaille comment activer IAM dans votre Cloud Privée VMware on OVHcloud**

## Prérequis

Pour activer IAM, vous aurez besoin des éléments suivants :

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).


## En pratique

La gestion des accès OVHcloud est basée sur un système de gestion des politiques. Il est possible d’écrire différentes politiques donnant accès aux utilisateurs à des fonctionnalités spécifiques sur les produits liés à un compte OVHcloud.

Pour comprendre un peu mieux les concepts IAM au sein de votre Hosted Private Cloud - VMware On OVHcloud (PCC), vous pouvez lire [Premiers pas avec IAM](lien vers doc getting started)

### Etape 1 : Activer IAM

#### Comment lier un role à une polittique IAM ?


pccVMware:vSphere:assumeRole?iam-

1. Via l'espace client :

> [!CAUTION]
> Cette opération pourra prendre jusqu’à 30 minutes.

Dans le menu de gestion des utilisateur de votre environnment Hosted Private cloud, Cliquez : sur `Activer l'IAM OVHcloud`.

[Lien OVHcloud:](https://www.ovh.com/manager/#/dedicated/dedicated_cloud/pcc-X-X-X-X/users).

[Enable IAM](images/iam_enable.png)

2. Via l'API :

> [!CAUTION]
> Cette opération pourra prendre jusqu’à 30 minutes.

Vous pouvez activer l'option IAM sur votre Hosted Private Cloud depuis l'API OVHcloud. Exécutez l'appel suivant :


> [!tabs]
> 1st tab title
>> > [!api]
>> >
>> > @api {v1} POST /dedicatedCloud/{serviceName}/iam/enable
>> >


## Aller plus loin

Pour aller plus moin avec IAM vous pourvez lire ces guides :
1. [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

