---
title: Création et suppression d’un utilisateur OpenStack
slug: creation-et-suppression-dun-utilisateur-openstack
section: Base de connaissances
---


## Preambule
Afin d'utiliser Horizon ou les APIs OpenStack, la création d'un utilisateur (ou user) OpenStack est nécessaire, ce guide décrit comment le créer et le supprimer.

Le nombre d'utilisateurs OpenStack n'est pas limité.


### Prérequis
Disposer d’un projet Public Cloud de plus de 7 jours en cas de premier projet (ou contacter le support pour vérifier si un déblocage anticipé est possible). Les autres projets n'auront pas cette limitation.


## Création de l'utilisateur OpenStack
Dans l'Espace Client il faut se rendre sur votre projet Public Cloud (Cloud → Serveurs → Nom de votre Projet Public Cloud). Toujours dans la colonne de gauche vous verrez la rubrique `OpenStack`{.action}.

Pour créer un utilisateur OpenStack il suffit de cliquer sur `Ajouter un utilisateur`{.action} puis choisir une description. Le nom réel est auto-généré . Enfin il faut valider avec le bouton `Créer cet utilisateur`{.action} :


![public-cloud](images/add_user.png){.thumbnail}

Quelques secondes après, l'utilisateur est ajouté.

Vous avez accès pour l'utilisateur à :

- l'ID de l'utilisateur
- Le nom que vous avez choisi qui apparaîtra dans Description
- Le mot de passe


![public-cloud](images/add_user_menu.png){.thumbnail}



> [!primary]
>
> Le mot de passe présent dans votre Espace Client sera visible jusqu’au
> rafraîchissement de la page uniquement. En cas de perte, il sera nécessaire
> d'en générer un nouveau.
> 

En cliquant sur la molette en bout de ligne, vous avez la possibilité de :

- Ouvrir OpenStack Horizon
- Télécharger un fichier de configuration OpenStack
- Générer un token OpenStack


## Suppression de l'utilisateur OpenStack
La suppression de l'utilisateur OpenStack se fait directement dans l'Espace Client (Cloud → Serveurs → Nom de votre Projet Public Cloud). Dans la partie OpenStack vous trouverez à droite de l'utilisateur existant une petite corbeille :


![public-cloud](images/delete_user.png){.thumbnail}

Un simple clic dessus et une validation et l'utilisateur sera supprimé en quelques secondes.



> [!alert]
>
> Toute suppression d'utilisateur est définitive et invalidera tous les
> tokens associés, même ceux dont la date d'expiration n'est pas dépassée.
> 