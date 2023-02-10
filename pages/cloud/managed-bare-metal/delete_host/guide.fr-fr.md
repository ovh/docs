---
title: Supprimer un serveur hôte
slug: suppression-serveur-hote
routes:
    canonical: 'https://docs.ovh.com/fr/private-cloud/suppression-serveur-hote/'
excerpt: "Découvrez comment supprimer un serveur hôte d'une infrastructure Managed Bare Metal"
legacy_guide_number: '1442308'
section: Fonctionnalités OVHcloud
order: 08
updated: 2021-03-19
---

**Dernière mise à jour le 19/03/2021**

## Objectif

Dans certains cas il peut être utile de supprimer un serveur hôte (_host_) de votre cluster, par exemple pour rendre un « _spare_ » non utilisé ou pour évoluer vers une gamme supérieure.

**Ce guide vous explique comment retirer en toute sécurité un serveur hôte de votre infrastructure Managed Bare Metal.**

## Prérequis

* Posséder une offre [Managed Bare Metal](https://www.ovhcloud.com/fr/managed-bare-metal/){.external}.
* Accéder à l’interface de gestion vSphere.

## En pratique

> [!warning]
>
> Attention à ne pas éteindre le serveur hôte que vous souhaitez retirer car cela n'aurait pas l'effet escompté. En effet, cela entraînerait la livraison d'un serveur hôte de spare et le serveur hôte éteint ne serait pas automatiquement retiré.
>

La suppression d’un serveur hôte se déroule en deux étapes : la mise en mode maintenance de cette ressource, puis la suppression de celle-ci.

### Activer le mode maintenance

Une fois connecté dans vSphere, rendez-vous dans l'inventaire de vos serveurs hôtes et clusters. Sélectionnez le serveur hôte concerné avec un simple clic droit, puis choisissez `Mode de maintenance`{.action} et `Passer en mode maintenance`{.action}. Si des machines virtuelles (VM) sont en fonctionnement sur ce serveur hôte, elles seront automatiquement enregistrées sur un autre serveur hôte présent dans votre cluster (modes HA et DRS activés).

![Activation du mode maintenance](images/removehost01.png){.thumbnail}

Vous avez accès à une fenêtre vous permettant de confirmer le passage en maintenance.

![Confirmation du mode maintenance](images/removehost02.png){.thumbnail}

Vous pouvez suivre la progression du passage en mode maintenance dans la zone `Tâches récentes`.

![Suivi du mode Maintenance](images/removehost03.png){.thumbnail}

### Supprimer le serveur hôte

Le serveur hôte est maintenant en mode maintenance. Faites un clic droit sur celui-ci, puis choisissez `OVHcloud`{.action} et enfin `Retirer ce Host...`{.action}

![Retirer l'hôte](images/removehost04.png){.thumbnail}

Dans la fenêtre qui apparaît, il ne reste qu'à confirmer la suppression avec `Next`{.action}.

![Confirmation de la suppression](images/removehost05.png){.thumbnail}

La demande de suppression a dès lors été prise en compte.

![Validation de la suppression](images/removehost06.png){.thumbnail}

Vous pouvez suivre la progression de la suppression du serveur hôte dans la zone `Tâches récentes`.

![Suivi de la tâche de suppression](images/removehost07.png){.thumbnail}

En quelques minutes, le serveur hôte est supprimé et n’est plus visible.

> [!primary]
>
> La suppression passera en erreur si le moindre répertoire ou fichier qui n’était pas présent initialement sur le stockage local du serveur hôte a été ajouté. Seuls les répertoires de base et les fichiers de vSwap ne bloquent pas cette opération.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
