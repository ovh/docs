---
title: Création, lancement et suppression d’images dans Horizon
slug: creation-lancement-et-suppression-dimages-dans-horizon
legacy_guide_number: 1784
section: Gestion depuis Horizon
order: 13
---


## Preambule
L'ajout d'images personnalisées est possible via l'interface OpenStack Horizon. Cela peut vous permettre par exemple d'importer les images de vos anciennes machines virtuelles vers le Public Cloud, à condition que leur format soit compatible.

Ce guide vous explique les différentes étapes de la création, du lancement et de la suppression d'images dans l'interface Horizon, depuis laquelle vous gérez vos services OVHcloud.


### Prérequis
- [Créer un accès à Horizon]({legacy}1773){.ref}
- Se rendre dans le menu Images de l'interface OpenStack Horizon


![public-cloud](images/horizon_menu.png){.thumbnail}


## Gestion des images
- Par défaut, si aucune image n'a été créée, la liste des images publiques par défaut apparait :


![public-cloud](images/horizon_images.png){.thumbnail}

- Il est alors possible de lancer une image depuis une URL ou d'en créer une personnelle en cliquant sur le bouton Créer une image , qui ouvre alors le menu suivant :


![public-cloud](images/horizon_create_image.png){.thumbnail}

- Nom de l'image (*)
- Description de l'image
- Fichier Image (Envoi depuis votre poste local)
- Format de l'image (*) :

|---|---|
|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|Emulateur QEMU|
|RAW|Image disque brute|
|VDI|VirtualBox format|
|VHD|Microsoft format|
|VMDK|VMWare format|

- Architecture : x86_64
- Espace disque minimal (en Go) : si non spécifié, la valeur par défaut sera 0.
- RAM minimale (en Mo) : si non spécifiée, la valeur par défaut sera 0.

Il est également possible de définir si l'image sera publique et si sa suppression sera protégée. Une fois cela validé, l'image est placée en file d'attente pour création :


![public-cloud](images/horizon_image_saving.png){.thumbnail}

En cliquant sur le nom de l'image, on obtient son détail :


![public-cloud](images/horizon_image_details.png){.thumbnail}

Dans la colonne  **Actions**  il est possible :

- de lancer l'image sélectionnée afin de créer une instance, on obtient alors le menu :


![public-cloud](images/horizon_launch_image.png){.thumbnail}

- d'éditer les détails de l'image (uniquement pour les images que vous aurez créé)
- de supprimer l'image (uniquement pour les images que vous aurez créé), une confirmation est alors demandée :


![public-cloud](images/horizon_delete_image.png){.thumbnail}
