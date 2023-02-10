---
title: Etendre un volume dans vSphere et dans un OS
slug: extend-disk
excerpt: "Découvrez comment augmenter la taille d'un disque virtuel et l'intégrer à votre VM"
section: Gestion des machines virtuelles
updated: 2022-01-13
---

**Dernière mise à jour le 13/01/2022**

## Objectif

Nous allons vous montrer comment utiliser vSphere et les outils de gestion d'OS pour augmenter la taille d'un disque virtuel sous Windows et sous Linux.

**Ce guide est un cas d'étude avec toutes les étapes pour atteindre l'objectif**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Disposer d'un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))

## En pratique

> [!warning]
>
> Avant de procéder à ce type de changement, nous recommandons une sauvegarde complète ou un clonage de la machine virtuelle.
>

### VM Windows

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.

![MENU](images/en01dash.png){.thumbnail}

Sur la gauche de votre écran, naviguez vers la VM à modifier, faites un clic-droit et sélectionnez `Modifier les paramètres`{.action}.

![EDIT](images/en02vm.png){.thumbnail}

Trouvez le disque à étendre et modifiez la valeur de sa taille (dans notre exemple, changement de 80 à 100 GB).<br>
Cliquez sur `OK`{.action}.

![EDIT](images/en03hdd.png){.thumbnail}

Vous pouvez vérifier que le changement a été appliqué dans la vue des tâches récentes.

![EDIT](images/en04task.png){.thumbnail}

Connectez-vous à la VM et rendez-vous dans la console de gestion des disques.<br>
Un moyen simple est de faire un clic-droit sur « Démarrer » puis de cliquer sur `Gestion des disques`{.action}.

![WIN](images/en05start.png){.thumbnail}

Dans la console, vous constatez qu'il y a 20 GB d'espace disponible, soit l'espace précédement ajouté au disque virtuel.

![WIN](images/en06unallocated.png){.thumbnail}

Faites un clic-droit sur le volume existant et selectionnez `Étendre le volume`{.action}.

![WIN](images/en07extend.png){.thumbnail}

Cliquez sur `Suivant`{.action} dans la première fenêtre de du didacticiel.<br>
Dans la deuxième, tout l'espace est selectionné et appliqué par défaut. Cliquez sur `Suivant`{.action}.<br>
Cliquez sur `Terminer`{.action} dans la dernière fenêtre.

![WIN](images/en08wiz.png){.thumbnail}

Le disque est maintenant étendu et prêt à l'usage.

![WIN](images/en09done.png){.thumbnail}

### VM Linux

> [!primary]
>
> Pour les VM sous Linux, nous utilisons un utilitaire de partition. Il existe de multiples produits et nous n'en avons aucun à recommander en particulier. L'utilisation de [GParted LiveCD](http://gparted.sourceforge.net/livecd.php) ne signifie pas que nous recommandons son utilisation.
> 
> Pour créer une librairie d'ISOs et monter un ISO sur une VM, consultez notre guide pour [Connecter une image ISO à une VM](https://docs.ovh.com/fr/private-cloud/connect_iso_to_vm/).


Dans l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.

![MENU](images/en01dash.png){.thumbnail}

Sur la gauche de votre écran, naviguez vers la VM à modifier, faites un clic-droit et sélectionnez `Modifier les paramètres`{.action}.

![EDIT](images/en10vm.png){.thumbnail}

Connectez l'image ISO de l'utilitaire à la VM ([Connecter une image ISO à une VM](https://docs.ovh.com/fr/private-cloud/connect_iso_to_vm/)).<br> 
Trouvez le disque à étendre et modifiez la valeur de sa taille (dans notre exemple, changement de 20 à 70 GB).<br>

![EDIT](images/en11hdd.png){.thumbnail}

Dans l'onglet `Options VM`{.action}, cochez la case « Lors du démarrage suivant, forcez l'entrée dans l'écran de configuration BIOS » pour pouvoir booter depuis l'utilitaire de partition.<br>
Cliquez sur `OK`{.action}.

![EDIT](images/en12bios.png){.thumbnail}

Vous pouvez vérifier que le changement a été appliqué dans la vue des tâches récentes.

![EDIT](images/en13task.png){.thumbnail}

Démarrez (ou redémarrez) la VM et lancer l'utilitaire de partition.<br>
*Veuillez vous référer à la documentation du développeur pour le boot et l'accès à la console de management.*<br>
Dans la console de management, vous constatez la présence de 50GB d'espace non alloué, soit l'espace précédemment ajouté au disque virtuel.

![LIN](images/en14unallocated.png){.thumbnail}

Faites un clic-droit sur le volume existant et sélectionnez `Redimensionner/Déplacer`{.action}.

![LIN](images/en15extend.png){.thumbnail}

Déplacez la flèche droite pour selectionner tout l'espace disponible ou tapez 0 dans le champ « Espace libre suivant ».<br>
Cliquez sur `Redimensionner/Déplacer`{.action}.

![LIN](images/en16wiz.png){.thumbnail}

Cliquez sur la coche verte pour appliquer toutes les opérations.

![LIN](images/en17apply.png){.thumbnail}

Cliquez sur `Appliquer`{.action} pour confirmer.

![LIN](images/en18confirm.png){.thumbnail}

Enfin, cliquez sur `Fermer`{.action}.

![LIN](images/en19close.png){.thumbnail}

Vous constatez que le volume contient maintenant l'espace libre.<br>
Cependant, il nous faut encore allouer l'espace au disque.

![LIN](images/en20disk.png){.thumbnail}

Faites un clic-droit sur le disque existant et sélectionnez `Redimensionner/Déplacer`{.action}.

![LIN](images/en21extend.png){.thumbnail}

Déplacez la flèche droite pour selectionner tout l'espace disponible ou tapez 0 dans le champ « Espace libre suivant ».<br>
Cliquez sur `Redimensionner`{.action}.

![LIN](images/en22wiz.png){.thumbnail}

Cliquez sur la coche verte pour appliquer toutes les opérations.

![LIN](images/en23apply.png){.thumbnail}

Cliquez sur `Appliquer`{.action} pour confirmer.

![LIN](images/en18confirm.png){.thumbnail}

Enfin, cliquez  sur `Fermer`{.action}.

![LIN](images/en19close.png){.thumbnail}

Le disque est maintenant étendu et prêt à l'usage.<br>

![LIN](images/en24done.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
