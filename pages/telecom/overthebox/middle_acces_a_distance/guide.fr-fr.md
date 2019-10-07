---
title: 'Accès àdistance'
keywords: 'Accès, Distance, Remote'
description: 'Accès à distance'
slug: acces-a-distance
excerpt: 'Si vous avez besoin d''accéder ou de modifier la configuration d'' OverTheBox àdistance, vous pouvez le faire. Il suffit d''activer cette fonctionnalitévia le manager.'
section: 'Fonctionnalités principales'
---

## Configuration
- Rendez-vous sur votre espace client partie **OverTheBox** : [https://www.ovhtelecom.fr/manager/#/overTheBox/](https://www.ovhtelecom.fr/manager/#/overTheBox/){.external}
- Cliquez sur votre service **OverTheBox**
- Cliquez sur **" Accès à distance "**

Chose à inscrire dans la partie " **Ajouter un accès à distance**" :

- **IP autorisée** : C'est la seule adresse IP publique qui sera autorisée à se connecter sur l'OverTheBox à distance. Laissez ce champ vide si l'IP autorisée doit être celle de votre connexion actuelle.
- **Port exposé (443, 22, ...)** : C'est le port de l' **OverTheBox** qui sera contacté lors de l'accès à distance. Choisir **443** pour un accès à distance via le navigateur ou **22** pour un accès via SSH
- **Date d'expiration** : Date à laquelle l'accès distance sera fermé.
- **Clef publique** : Permet une connexion sécurisée, elle est utile pour les connexion de type SSH.


## Exemple
Je souhaite pouvoir accéder à mon  **OverTheBox**  via un navigateur web depuis mon IP actuelle, voici ce que je dois configurer :


![overthebox](images/4446.png){.thumbnail}

Une fois cette configuration validée,vous pouvez suivre sa mise en place directement sur la même page du manager : Cela peut prendre quelques minutes.


![overthebox](images/4447.png){.thumbnail}

Vous pourrez ensuite retrouver le lien d'accès à distance :


![overthebox](images/4448.png){.thumbnail}