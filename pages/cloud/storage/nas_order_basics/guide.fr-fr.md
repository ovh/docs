---
title: Le NAS-HA
slug: nas/decouverte
excerpt: Decouvrez ici comment commander et utiliser un NAS-HA.
section: NAS
---


## Prérequis
Le NAS (Network Attached Storage) est un serveur de fichiers relié à un réseau dont la principale fonction est le stockage de données en un volume centralisé pour des clients réseau hétérogènes.

Pour commander un NAS-HA et le configurer, il faut :

- Disposer d'une IP attachée à un service OVH (Serveur dédié, VPS, Instance Public Cloud, ADSL, ...)
- Avoir accès à l'espace client.


## Commander un NAS-HA
Pour commander un NAS-HA, il vous faut dans un premier temps vous connecter à votre espace client.

Ensuite, rendez-vous dans l'univers `Cloud`{.action}, section `Plateformes et services`{.action}, puis sélectionnez `NAS`{.action}.


![NAS](images/NAS.png){.thumbnail}

Vous pouvez ainsi choisir la localisation de votre NAS, le type de NAS, et la durée d'engagment initiale.

Il ne vous reste plus qu'à lire et valider les conditions générales afin de générer le bon de commande qui vous permettra de régler la location du NAS.


## Utiliser un NAS-HA

### Créer une partition
Une fois le NAS-HA en votre possession, rendez-vous dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur `Créer une partition`{.action}.


![createpartition](images/createpartition.png){.thumbnail}

Il vous suffit désormais de renseigner le **Nom de votre partition**, la **taille** de celle-ci, ainsi que le **protocole autorisé** (NFS ou CIFS).


### Modifier la taille d'une partition
Pour modifier la taille d'une partition, rendez-vous dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur l'engrenage situé à droite de la partition existante, puis `Modifier la taille`{.action}.


![createpartition2](images/createpartition2.png){.thumbnail}

Indiquez la nouvelle taille, puis validez.


### Modifier la frequence des snapshots
Par défaut, un snapshot du contenu de votre NAS a lieu toutes les heures, et s'enregistre sur votre NAS.

Il vous est néanmoins possible de créer jusqu'à 3 snapshots supplémentaires à des fréquences différentes si vous le souhaitez, qui seront également enregistrés sur votre NAS.

Pour cela, rendez-vous dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur l'engrenage situé à droite de la partition existante, puis `Fréquence des snasphots`{.action}.


![createpartition2](images/createpartition2.png){.thumbnail}

Choisissez la fréquence, puis validez.


### Ajouter un acces
Afin de pouvoir accéder à la partition que vous avez créée précédemment, il vous est nécessaire de configurer un accès.



> [!primary]
>
> Seules les IP de services OVH sont compatibles à l'utilisation de votre NAS (ex : Un serveur dédié, une ligne ADSL, un VPS, une instance Public Cloud, etc...)
> 

Rendez-vous alors dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur l'engrenage situé à droite de la partition existante, puis `Gérer les accès`{.action}.


![createpartition2](images/createpartition2.png){.thumbnail}

Désormais vous pouvez `Ajouter un accès`{.action}, et sélectionner l'IP de votre produit OVH.


![createaccess](images/createaccess.png){.thumbnail}


### Supprimer une partition


> [!warning]
>
> La suppression d'une partition entraîne la suppression totale et définitive de toute données présentes sur celle-ci.
> 

Pour supprimer une partition, rendez-vous dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur l'engrenage situé à droite de la partition existante, puis `Supprimer`{.action}.


![createpartition2](images/createpartition2.png){.thumbnail}


### Supprimer un acces
Pour supprimer un accès, rendez-vous dans votre espace client, univers `Cloud`{.action}, section `Plateformes et services`{.action}, onglet `NAS`{.action}, et sélectionnez votre NAS.

Cliquez alors sur l'engrenage situé à droite de la partition existante, puis `Gérer les accès`{.action}.


![createaccess](images/createaccess.png){.thumbnail}

Il vous suffit ensuite de cliquer l'icône située à droite de l'accès actuellement présent, et confirmer la suppression.