---
title: Eviter l'usurpation d'IP avec le service SpoofGuard
slug: spoofguard
excerpt: Paramètrez des politiques pour éviter l'usurpation d'IP
legacy_guide_number: '4816988'
space_key: ND
space_name: NSX
section: NSX
order: 10
---

**Dernière mise à jour le 28/02/2019**

## Objectif

Le service SpoofGuard permet d'éviter une forme d'attaque malveillante appelée « falsification Web » ou « hameçonnage ».

**Ce guide explique comment établir cette solution**

## Prérequis

- Disposer d'un utilisateur ayant accès  à [l'interface de gestion NSX](https://docs.ovh.com/fr/private-cloud/acceder-a-l-interface-de-gestion-nsx/)

## En pratique

Pour accèder au service SpoofGuard, rendez vous dans l'interface de gestion NSX et séléctionnez le service disponible sur le bandeau latéral gauche.

![](images/spoofguard.png){.thumbnail}

### Créer une politique SpoofGuard

Cliquez sur le bouton `+ Ajouter`{.action} pour créer une nouvelle politique.

Entrez le nom de votre politique, puis activez la.

Séléctionnez le mode de votre choix :

- Approuver automatiquement les attributions d'adresse IP lors de leur première utilisation : pour faire confiance à toutes les sessions de propriété intellectuelle lors de l'enregistrement initial.

- Inspecter et approuver manuellement toutes les attributions d'adresses IP avant leurs utilisation : pour exiger l'approbation manuelle de toutes les adresses IP.
> [!warning]
>
> Ceci entraînera une interruption de tout votre trafic réseau jusqu'à ce que vous validiez tous les couples IP/MAC**.
>

Vous pouvez également cocher la case permettant d'autoriser les adresses locales (169.254.0.0/16, fe80::/64) comme adresses valides dans l'espace de noms.

![](images/spoofguard_NewPolicy1.png){.thumbnail}

Séléctionnez ensuite les portGroup sur lesquels vous souhaitez appliquer votre politique.

![](images/spoofguard_NewPolicy2.png){.thumbnail}

Puis cliquer sur `Terminer`

Votre politique est à présent ajoutée, des premières actions pourront être en attente. 

![](images/spoofguard_NewPolicy3.png){.thumbnail}

Après avoir cliquer sur le nombre disponible dans la colonne `Nombre total de vNic` vous arriverez sur cette interface.

> [!primary]
>
> Si vous cliquez sur les nombres disponibles dans les colonnes `En attente d'approbation` ou `Adresses IP en conflit` vous arriverez sur la même page.
>

![](images/spoofguard_NewPolicy4.png){.thumbnail}


> [!warning]
>
> Attention à ne pas effacer les IP affectées à vos machines virtuelles sous peine d'entrainer une coupure de communication.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.