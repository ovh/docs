---
title: Créer un snapshot ou un clone
excerpt: ''
slug: snapshot_and_clone
section: Maintenance and monitoring
---

**Dernière mise à jour le 12/01/2022**

## Objectif

VMWare offre la possibilité de créer manuellement des snapshots ou des clones de VM.

**Ce guide explique comment exécuter ces tâches**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

### Prendre un Snapshot

Un snapshot capture l'etat d'une VM.<br>
Cela ajoute une couche de protection pour votre VM avant de procéder à des changement en permettant de revenir à cet état si besoin.

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, effectuez un clic droit et dans le menu `Snapshots`{.action} menu, selectionnez `Prendre un snapshot`{.action}.

![TAKE](images/en01take.png){.thumbnail}

Par défaut, le nom du snapshot est la date et l'heure courante. Vous pouvez le changer à votre convenance.<br>
Vous pouvez également ajouter une description.<br>
Si la VM est en marche, le processus de snapshot offre deux options:
- Prendre un snapshot de la mémoire de la machine virtuelle. Cela sauvegarde l'état de la RAM sur la VM pour aider les applications qui n'ont pas encore ecrit leurs données sur disque. Cela doit rendre le snapshot résistant au crash et ouvre la possibilité de récupération à chaud.
- Mettre au repos le système fichiers invité (VMware Tools doit être installé). La VM sera paramétrée comme si le sytème allait être sauvegardée : buffers nettoyés, changement enregistés sur disque...<br>
Si la VM est éteinte, ces options sont grisées.<br>
*Nous recommendons de prendre des snapshots de VM à froid. Si ce n'est pas possible, préférez la lise au repos à un simple snapshot de mémoire pour plus de sécurité.*<br>
Cliquez sur `OK`{.action}.

![SNAP](images/en02snap.png){.thumbnail}


Votre snapshot est pris.


### Gérer les Snapshots

Vous pouvez prendre de multiples snapshots d'une seule VM en répétant le processus vu ci-dessus.<br>
Cependant, avec le temps, les snapshots consomment beaucoup de resources pour se maintenir et finissent par affecter les performances des VMs.<br>
Voici comment restaurer ou supprimer les snapshots.

#### Restaurer un Snapshot

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, effectuez un clic droit et dans le menu `Snapshots`{.action} menu, selectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}


Vérifier l'arborescence des snapshots et selectionnez celui auquel vous souhaitez revenir.<br>
Cliquez sur `Restaurer`{.action}.

![REVERT](images/en04revert.png){.thumbnail}


Confirmer en cliquant `OK`{.action}.

![CONFIRM](images/en05confirm.png){.thumbnail}


Vous pouvez cliquer `Terminé`{.action}, votre VM est revenu à l'état choisi.

> [!primary]
>
> Si vous n'avez qu'un unique snapshot ou souhaitez revenir au dernier snapshot pris, vous pouvez accélérer le processus en choisissant `Restaurer le dernier snapshot`{.action} dans le menu `Snapshots`{.action}.


#### Supprimer un Snapshot

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, effectuez un clic droit et dans le menu `Snapshots`{.action} menu, selectionnez `Gérer les snapshots`{.action}.

![MANAGE](images/en03manage.png){.thumbnail}


Vérifier l'arborescence des snapshots et selectionnez celui auquel vous souhaitez revenir.<br>
Cliquez sur `Supprimer`{.action}.<br>
*Vous pouvez aussi supprimer tous les snapshots existants en cliquant `Supprimer tout`{.action}.*

![Delete](images/en06delete.png){.thumbnail}


Confirmer en cliquant `OK`{.action}.

![CONFIRM](images/en07confirm.png){.thumbnail}


Vous pouvez cliquer `Terminé`{.action}, le snapshot a été supprimé.

> [!primary]
>
> Pour supprimer tous les snapshots, vous pouvez accélérer le processus en choisissant `Supprimer tous les snapshots`{.action} dans le menu `Snapshots`{.action}.


### Cloner une VM

Cloner permet un déploiement rapide et facile de VMs similaires.<br>
Vous pouvez cloner une VM vers une autre VM ou vers un modèle.<br>
Cloner vers une VM est un moyen rapide de dupliquer une VM et ses paramètres.<br>
Cloner vers un modèle est un meilleur moyen pour créer une copie originale qui servira à déployer de miltiples VMS.

#### Cloner vers une VM

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, effectuez un clic droit et dans le menu `Cloner`{.action}, selectionner `Cloner vers une machine virtuelle`{.action}.

![CLONE](images/en08clonevm.png){.thumbnail}


Nommez le clone et selectionnez son datacenter.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en09clonename.png){.thumbnail}


Selectionnez une resource de calcul.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en10clonecomp.png){.thumbnail}


Selectionnez le lieu de stockage.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en11clonestor.png){.thumbnail}


Selectionnez les options nécessaire pour le clone.
- Personnaliser le système d'exploitation lancera sysprep lors de la première utilisation de la VM
- Personnaliser le matériel de cette machine virtuelle permet de modifier les charactéristiques techniques de la VM (taille de disque, RAM, éléments réseau...)
- Mettre sous tension la machine virtuelle après la création n'est pas recommandé. Certains changements à froid peuvent être necessaires avant de lancer la VM pour éviter des conflits.<br>
Cliquez sur `Suivant`{.action}.

![CLONE](images/en12clonecustom.png){.thumbnail}


Vérifiez puis cliquez sur `Terminer`{.action}.

![CLONE](images/en13clonefinish.png){.thumbnail}


Le processus de clonage s'enclenche et la nouvelle VM sera disponible une fois terminé.

> [!primary]
>
> Si le clone a été effectué sans personalisation, assurez-vous que vous pouvez démarrer la VM sans danger. Par exemple, si la VM d'origine a une IP fixe, désactivez la carte réseau du clone pour éviter un conflit d'addresse IP.



#### Cloner vers un modèle

Dans l'interface vSphere, allez dans le Tableau de bord `Hôtes et clusters`{.action}.<br>
Naviguez jusqu'à votre VM, effectuez un clic droit et dans le menu `Cloner`{.action}, selectionner `Cloner vers un modèle`{.action}.

![TEMPLATE](images/en14clonetemp.png){.thumbnail}


Nommez le modèle et selectionnez son datacenter.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en15clonename.png){.thumbnail}


Selectionnez une resource de calcul.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en16clonecomp.png){.thumbnail}


Selectionnez le lieu de stockage.<br>
Cliquez sur `Suivant`{.action}.

![TEMPLATE](images/en17clonestor.png){.thumbnail}


Vérifiez puis cliquez sur `Terminer`{.action}.

![TEMPLATE](images/en18clonefinish.png){.thumbnail}


Le processus de clonage va s'exécuter.<br>
Aucune VM n'est directement visible mais le nouveau modèle est utilisable dans l'option Deployer depuis un modèle.

![TEMPLATE](images/en19deploy.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
