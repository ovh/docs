---
title: Création de conteneur Object Storage
slug: pcs/creation-de-conteneur
excerpt: Découvrez comment créer vos conteneurs Object Storage depuis votre espace client OVHcloud
section: Object Storage Standard (Swift)
order: 110
---

**Dernière mise à jour le 27/10/2021**

## Objectif

L'offre Object Storage pour Public Cloud propose une solution de stockage illimité avec une facturation simple et adaptée à vos besoins. Il existe de nombreux types de conteneurs d'objets :

- pour de l'hébergement statique (site web statique);
- pour de l'hébergement privé (Exemple : stockage de données personnelles);
- pour de l'hébergement public (pour stocker tout ce qui est accessible au public);
- pour du stockage à froid (archivage).

La première étape est la création d’un conteneur qui regroupera vos fichiers. 

**Ce guide explique comment le créer depuis l'espace client OVHcloud et depuis l’interface Horizon d’Openstack.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

Si vous utilisez Horizon :

- Avoir créé un [utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/).

## En pratique

### Création d'un conteneur Object Storage depuis l'espace client OVHcloud

Connectez-vous à votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez ensuite sur `Object Storage`{.action} dans la barre de navigation de gauche sous `Storage`.

Cliquez ensuite sur `Create an object container`{.action}.

S'il s'agit de votre premier conteneur :

![pcs dashboard](images/create-container-20211005102334181.png)

Si vous avez déjà créé un/des conteneur(s) :

![pcs dashboard](images/create-container-20211005115040834.png)

Sélectionnez votre solution puis cliquez sur `Next`{.action} :

![select your solution](images/create-container-20211005110710249.png)

Sélectionnez la région de votre conteneur, puis cliquez sur `Next`{.action} :

![select a region](images/create-container-20211005110859551.png)

Sélectionnez le type de conteneur, puis cliquez sur `Next`{.action} :

![select a type of container](images/create-container-20211005111542718.png)

Nommez votre conteneur, puis cliquez sur `Create the container`{.action} :

> [!warning]
>
> Si vous souhaitez lier votre conteneur à un nom de domaine, le nom de votre conteneur de doit pas contenir les caractères suivants : - [ . ] - [ _ ] et vous ne devez pas utiliser de majuscules.
> Pour plus d'informations, consultez notre guide « [Lier un conteneur a un nom de domaine](https://docs.ovh.com/fr/storage/pcs/link-domain/) ».
>

![container name](images/create-container-20211005111805966.png)

Votre conteneur est créé :

![container created](images/create-container-20211005112013807.png)

### Création d'un conteneur Object Storage depuis Horizon

> [!primary]
>
> Il n'est pas possible de créer un conteneur Public Cloud Archive depuis Horizon
>

Connectez-vous à votre [espace Horizon](https://horizon.cloud.ovh.net){.external} :

![horizon login](images/create-container-20211005155245752.png)

Développez le menu `Object Store`{.action}, cliquez sur `Containers`{.action} puis sur `+ Container`{.action}

![Horizon containers](images/create-container-20211005155704887.png)

Nommez votre conteneur.

  > [!warning]
  >
  > Si vous souhaitez lier votre conteneur à un nom de domaine, le nom de votre   conteneur de doit pas contenir les caractères suivants :
  > - [ . ]
  > - [ _ ]
  > - Et vous ne devez pas utiliser de majuscules.
  > Pour plus d'informations, consultez notre guide « [Lier un conteneur a un nom de domaine](https://docs.ovh.com/fr/storage/pcs/link-domain/) ».
  >

Sélectionnez la politique d'accès de votre conteneur puis cliquez sur `Suivant`{.action}

![horizon create container](images/create-container-20211005155824902.png)

Votre conteneur est créé.

![horizon container created](images/create-container-20211005155936971.png)

Vous pouvez également le voir dans votre espace client OVHcloud :

![pcs dashboard](images/create-container-20211005160503200.png)

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
