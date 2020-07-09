---
title: Synchroniser un NAS Synology avec l’Object Storage
slug: pcs/pcs-syno
excerpt: Retrouvez ici comment synchroniser un NAS Synology a un conteneur.
section: Object Storage
---


## Preambule
[DiskStation Manager 6.0](https://www.synology.com/en-global/dsm/6.0beta){.external} de Synology propose un outil de synchronisation avec différentes solutions Cloud.

Celui ci est compatible avec l'Object Storage du Public Cloud OVH et vous permettra donc de pouvoir effectuer une sauvegarde de vos données, et de les rendre accessibles depuis n'importe quel endroit.

Ce guide vous explique comment configurer DiskStation Manager 6.0 afin de synchroniser les fichiers se trouvant sur votre NAS vers votre Object Storage.


### Prérequis
- [Créer un conteneur de stockage](../create_container/guide.fr-fr.md){.ref}
- [Créer un accès à Horizon](https://www.ovh.com/fr/publiccloud/guides/g1773.créer_un_acces_a_horizon){.external}


## Configuration de DiskStation Manager 6.0

### Recuperation de vos identifiants Openstack
Afin de configurer la synchronisation de votre NAS Synology, vous devez être en possession des identifiants de votre utilisateur OpenStack.

Vous pouvez les récupérer en téléchargeant le fichier OpenRC à l'aide de la première partie du guide suivant :

- [Charger les variables d'environnement OpenStack](../../../public-cloud/charger-les-variables-denvironnement-openstack/#recuperation-des-variables_1){.ref}


### Configuration du point de synchronisation avec Cloud Sync
Une fois en possession de vos identifiants, vous pouvez vous connecter sur votre NAS et effectuer ces différentes actions :

- Lancer l'application Cloud Sync :


![public-cloud](images/3791.png){.thumbnail}

- Sélectionner OpenStack Swift en tant que Cloud Providers


![public-cloud](images/3788.png){.thumbnail}

- Renseigner les informations de votre utilisateur OpenStack :


![public-cloud](images/3792.png){.thumbnail}

Toutes ces informations sont trouvables dans le fichier OpenRC que vous avez récupéré lors de la précédente étape.

- Configurer votre dossier à synchroniser


![public-cloud](images/3790.png){.thumbnail}



> [!alert]
>
> Ce guide est basé sur la version beta de DiskStation Manager 6.0, la procédure de configuration peut être amenée à changer.
> 
