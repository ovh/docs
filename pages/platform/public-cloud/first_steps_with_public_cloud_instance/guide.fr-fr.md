---
title: 'Premiers pas avec une instance Public Cloud'
slug: debuter-avec-une-instance-public-cloud
excerpt: 'Découvrez comment bien débuter avec une instance Public Cloud'
section: 'Premiers pas'
---

**Dernière mise à jour le 4 décembre 2019**

## Objectif

Vous pouvez gérer facilement vos projets Public Cloud OVHcloud depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Vous y trouverez tous vos projets d’infrastructure (instances, sauvegardes, disques, clés SSH, etc.) et de stockage (y compris la liste de vos conteneurs).

**Découvrez comment démarrer avec une instance Public Cloud.**

## Prérequis

- [Avoir créé une instance Public Cloud d’OVH depuis votre compte](../creer-instance-espace-client/).
- [Avoir créé une clé SSH](../creation-des-cles-ssh/).

## En pratique

### Accéder à l’interface de gestion de l’instance.

Tout d’abord, connectez-vous à votre [Espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} et sélectionnez l'onglet Public Cloud. Sélectionnez le service Public Cloud concerné. Cliquez ensuite sur l’onglet `Instances`{.action} à gauche.

Sur la page qui s’affiche, vous verrez un résumé de toutes vos instances. Plusieurs informations vont s’afficher ici :

- le modèle de votre instance
- son nom et sa région
- les disques durs s’il y en a
- l’adresse IP de votre instance
- son état

![public-cloud](images/compute.png){.thumbnail}

### Modifier la configuration d’une instance.

Dans l’interface de gestion de l’instance, cliquez sur les 3 points situés à droite de l’instance et sélectionnez `Éditer`{.action}.

![public-cloud](images/edit.png){.thumbnail}

Dans la fenêtre qui s’affiche, vous pouvez :

- modifier le nom de l’instance
- changer le modèle d’instance 
- réinstaller l’instance sur un autre système d’exploitation (**notez que si vous choisissez de le faire, les données actuellement stockées sur l’instance seront supprimées**)
- passer d’une facturation horaire à un tarif mensuel fixe (les factures seront alors envoyées au prorata, le jour du mois où vous effectuez la modification)

![public-cloud](images/edit1.png){.thumbnail}
![public-cloud](images/edit2.png){.thumbnail}
![public-cloud](images/edit3.png){.thumbnail}

### Créer une sauvegarde d’une instance.

Vous pouvez créer une sauvegarde d’une instance à partir de sa page d’administration.  Pour ce faire, cliquez sur les 3 points à droite de l’instance et sélectionnez `Créer un backup`{.action}. Vous verrez ensuite cette page affichant toutes les informations nécessaires : 

![public-cloud](images/backup.png){.thumbnail}

Les informations suivantes s’afficheront alors :

![public-cloud](images/backup1.png){.thumbnail}

Après votre confirmation, les informations suivantes s’afficheront : 

![public-cloud](images/backup2.png){.thumbnail}

Une fois la sauvegarde effectuée, vous pourrez la voir dans la section `Sauvegarde de l’instance`{.action} : 

![public-cloud](images/backup3.png){.thumbnail}

Vous pouvez vous référer à notre guide sur la [Sauvegarde d’une instance](../back-up-instance/) si vous avez besoin d’aide à ce sujet. 

### Créer une sauvegarde automatique d’une instance.

Vous pouvez programmer une sauvegarde automatique pour une instance depuis sa page d’administration. Pour ce faire, cliquez sur les 3 points à droite de l’instance et sélectionnez `Créer une sauvegarde automatisée`{.action} : ![public-cloud](images/backupauto.png){.thumbnail}

La page suivante s’affiche : 

![public-cloud](images/backupauto1.png){.thumbnail}

Une fois que vous aurez sélectionné les informations nécessaires et que vous aurez cliqué sur `Créer`{.action}, vous serez redirigé vers la page suivante : 

![public-cloud](images/backupauto2.png){.thumbnail}

Vous pouvez à tout moment accéder au menu `Workflow Management`{.action} pour supprimer le processus de sauvegarde automatique en cours : 

![public-cloud](images/backupautodelete.png){.thumbnail}

Vous pouvez vous référer à notre guide sur la [sauvegarde d’une instance](../back-up-instance/) si vous avez besoin d’aide à ce sujet. 

### Récupérer vos informations de connexion.

Dans l’interface de gestion de l’instance, cliquez sur `Détails de l’instance`, et vérifiez les informations affichées sous `Informations de connexion`{.action}. Vous y trouverez les commandes SSH dont vous avez besoin pour vous connecter à votre instance.

![public-cloud](images/instancedetails1.png){.thumbnail}
![public-cloud](images/instancedetails.png){.thumbnail}

### Accéder à la console VNC.

Vous pouvez accéder directement à votre instance via la console VNC. Seulement, il faudra que vous ayez au préalable configuré un mot de passe pour l’utilisateur root.

Pour accéder à cette console, cliquez sur `Console VNC`{.action} dans le tableau de bord de l’instance.

![public-cloud](images/vnc.png){.thumbnail}

La console s’affiche à l’écran :

![public-cloud](images/vnc1.png){.thumbnail}

### Redémarrer une instance.

Deux méthodes existent pour redémarrer une instance :

- Redémarrage à chaud (logiciel)
- Redémarrage à froid (matériel)

Dans l’interface de gestion de l’instance, cliquez sur les 3 points situés à droite de l’instance et sélectionnez soit `Redémarrage à chaud (soft)`{.action} soit `Redémarrage à froid (hard)`{.action}.

Ensuite confirmez votre requête dans la fenêtre qui s’affiche.

![public-cloud](images/reboot.png){.thumbnail}

### Réinstaller une instance.

Vous pouvez réinstaller une instance et conserver le même système d’exploitation. 

> [!warning]
>
Si vous choisissez de réinstaller une instance, toutes les données actuellement stockées sur celle-ci seront effacées.
>


Dans l’interface de gestion de l’instance, cliquez sur les 3 points situés à droite de l’instance et sélectionnez `Réinstaller`{.action}. Cliquez ensuite sur `Confirmer`{.action} pour lancer le processus.

![public-cloud](images/reinstall.png){.thumbnail}

### Supprimer une instance.

Vous pouvez également supprimer une instance. 

> [!warning]
>
Cette action supprimera définitivement l’instance ainsi que toutes les données qu’elle contient.
>


Dans l’interface de gestion de l’instance, cliquez sur les 3 points situés à droite de l’instance et sélectionnez `Supprimer`{.action}. Cliquez ensuite sur `Confirmer`{.action} pour lancer le processus.

![public-cloud](images/delete.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.