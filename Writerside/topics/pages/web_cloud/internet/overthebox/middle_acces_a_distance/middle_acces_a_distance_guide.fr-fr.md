---
title: 'Ajouter un accès à distance sur OverTheBox'
excerpt: "Découvrez comment configurer votre matériel pour accéder à distance à votre OverTheBox"
updated: 2021-04-13
---

## Configuration

- Rendez-vous sur votre espace client partie **OverTheBox** : [https://www.ovhtelecom.fr/manager/#/overTheBox/](https://www.ovhtelecom.fr/manager/#/overTheBox/){.external}
- Cliquez sur votre service **OverTheBox**
- Cliquez sur **“ Accès à distance ”**

Informations à inscrire dans la partie “**Ajouter un accès à distance**” :

- **IP autorisée** : C'est la seule adresse IP publique qui sera autorisée à se connecter sur l'OverTheBox à distance. Laissez ce champ vide si l'IP autorisée doit être celle de votre connexion actuelle.
- **Port exposé (443, 22, ...)** : C'est le port de l' **OverTheBox** qui sera contacté lors de l'accès à distance. Choisir **443** pour un accès à distance via le navigateur ou **22** pour un accès via SSH
- **Date d'expiration** : Date à laquelle l'accès à distance sera fermé.
- **Clef publique** : Permet une connexion sécurisée, elle est obligatoire pour les connexions de type SSH.

## Exemple

Je souhaite pouvoir accéder à mon  **OverTheBox**  via un navigateur web depuis mon IP actuelle, voici ce que je dois configurer :

![overthebox](4446.png){.thumbnail}

Une fois cette configuration validée,vous pouvez suivre sa mise en place directement sur la même page du manager : Cela peut prendre quelques minutes.

![overthebox](4447.png){.thumbnail}

Vous pourrez ensuite retrouver le lien d'accès à distance :

![overthebox](4448.png){.thumbnail}
