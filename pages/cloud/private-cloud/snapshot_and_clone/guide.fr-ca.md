---
title: Créer un snapshot ou un clone
excerpt: 'Découvrez comment créer manuellement des snapshots ou des clones de VM'
slug: snapshot_and_clone
section: Gestion des machines virtuelles
---

**Dernière mise à jour le 12/01/2022**

## Objectif

VMWare offre la possibilité de créer manuellement des snapshots ou des clones de VM.

**Ce guide explique comment exécuter ces tâches.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))

## En pratique

### Prendre un Snapshot

Un snapshot capture l'etat d'une VM.<br>
Cela ajoute une couche de protection pour votre VM avant de procéder à des changement, en permettant de revenir à cet état si besoin.

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Prendre un snapshot`{.action}.

![TAKE](images/en01take.png){.thumbnail}

Par défaut, le nom du snapshot est la date et l'heure courante. Vous pouvez modifier ce nom à votre convenance.<br>
Vous pouvez également ajouter une description.

Si la VM est en marche, le processus de snapshot offre deux options :

- Prendre un snapshot de la mémoire de la machine virtuelle. Cela sauvegarde l'état de la RAM sur la VM pour aider les applications qui n'ont pas encore ecrit leurs données sur disque. Cela doit rendre le snapshot résistant au crash et ouvre la possibilité de récupération à chaud.
- Mettre au repos le système fichiers invité (VMware Tools doit être installé). La VM sera paramétrée comme si le sytème allait être sauvegardé : buffers nettoyés, changements enregistrés sur disque...<br>
Si la VM est éteinte, ces options sont grisées.<br>
*Nous recommandons de prendre des snapshots de VM à froid. Si cela n'est pas possible, préférez la mise au repos à un simple snapshot de mémoire, pour plus de sécurité.*

Cliquez sur `OK`{.action}.

![SNAP](images/en02snap.png){.thumbnail}

Votre snapshot est alors pris.

### Gérer les Snapshots

Vous pouvez prendre de multiples snapshots d'une seule VM en répétant le processus décrit ci-dessus.<br>
Cependant, avec le temps, les snapshots consomment beaucoup de resources pour se maintenir et finissent par affecter les performances des VMs.<br>
Voici comment restaurer ou supprimer les snapshots.

#### Restaurer un Snapshot

Dans l'interface vSphere, rendez-vous dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}

Vérifiez l'arborescence des snapshots et sélectionnez celui auquel vous souhaitez revenir.<br>
Cliquez sur `Restaurer`{.action}.

![REVERT](images/en04revert.png){.thumbnail}

Confirmez en cliquant sur `OK`{.action}.

![CONFIRM](images/en05confirm.png){.thumbnail}

Vous pouvez alors cliquer sur `Terminé`{.action}, votre VM est revenue à l'état choisi.

> [!primary]
>
> Si vous n'avez qu'un unique snapshot ou souhaitez revenir au dernier snapshot pris, vous pouvez accélérer le processus en choisissant `Restaurer le dernier snapshot`{.action} dans le menu `Snapshots`{.action}.

#### Supprimer un Snapshot

Dans l'interface vSphere, rendez-vous dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic droit sur celle-ci et, dans le menu `Snapshots`{.action}, sélectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}

Vérifiez l'arborescence des snapshots et selectionnez celui que vous souhaitez supprimer.<br>
Cliquez sur `Supprimer`{.action}.<br>
*Vous pouvez aussi supprimer tous les snapshots existants en cliquant sur `Supprimer tout`{.action}.*

![Delete](images/en06delete.png){.thumbnail}

Confirmez en cliquant sur `OK`{.action}.

![CONFIRM](images/en07confirm.png){.thumbnail}

Vous pouvez cliquer sur `Terminé`{.action}, le snapshot est alors supprimé.

> [!primary]
>
> Pour supprimer tous les snapshots, vous pouvez accélérer le processus en choisissant `Supprimer tous les snapshots`{.action} dans le menu `Snapshots`{.action}.

### Cloner une VM

Cloner permet un déploiement rapide et facile de VMs similaires.<br>
Vous pouvez cloner une VM vers une autre VM ou vers un modèle.<br>
Cloner vers une VM est un moyen rapide de dupliquer une VM et ses paramètres.<br>
Cloner vers un modèle est un meilleur moyen pour créer une copie originale qui servira à déployer de multiples VMs.

#### Cloner vers une VM

Dans l'interface vSphere, rendez-vous dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic droit sur celle-ci et, dans le menu `Cloner`{.action}, sélectionnez `Cloner vers une machine virtuelle`{.action}.

![CLONE](images/en08clonevm.png){.thumbnail}

Nommez le clone et sélectionnez son datacenter.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en09clonename.png){.thumbnail}

Sélectionnez une ressource de calcul.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en10clonecomp.png){.thumbnail}

Sélectionnez le lieu de stockage.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en11clonestor.png){.thumbnail}


Sélectionnez les options nécessaire pour le clone.

- Personnaliser le système d'exploitation lancera sysprep lors de la première utilisation de la VM.
- Personnaliser le matériel de cette machine virtuelle permet de modifier les caractéristiques techniques de la VM (taille de disque, RAM, éléments réseau...).
- Mettre sous tension la machine virtuelle après la création n'est pas recommandé. Certains changements à froid peuvent être necessaires avant de lancer la VM pour éviter des conflits.

Cliquez sur `Suivant`{.action}.

![CLONE](images/en12clonecustom.png){.thumbnail}

Vérifiez puis cliquez sur `Terminer`{.action}.

![CLONE](images/en13clonefinish.png){.thumbnail}

Le processus de clonage s'enclenche et, à l'issue de celui-ci, la nouvelle VM sera disponible.

> [!primary]
>
> Si le clone a été effectué sans personalisation, assurez-vous que vous pouvez démarrer la VM sans danger. Par exemple, si la VM d'origine a une IP fixe, désactivez la carte réseau du clone pour éviter un conflit d'adresses IP.

#### Cloner vers un modèle

Dans l'interface vSphere, rendez-vous dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, faites un clic droit sur celle-ci et, dans le menu `Cloner`{.action}, sélectionnez `Cloner vers un modèle`{.action}.

![TEMPLATE](images/en14clonetemp.png){.thumbnail}

Nommez le modèle et selectionnez son datacenter.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en15clonename.png){.thumbnail}

Sélectionnez une ressource de calcul.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en16clonecomp.png){.thumbnail}

Sélectionnez le lieu de stockage.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en17clonestor.png){.thumbnail}

Vérifiez puis cliquez sur `Terminer`{.action}.

![TEMPLATE](images/en18clonefinish.png){.thumbnail}

Le processus de clonage va s'exécuter.<br>
Aucune VM n'est directement visible mais le nouveau modèle est utilisable dans l'option "Déployer depuis un modèle".

![TEMPLATE](images/en19deploy.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
