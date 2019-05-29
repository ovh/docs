---
title: 'Créer un champ CNAME à l''ajout d''un domaine associé'
slug: exchange-ajouter-un-champ-de-type-cname
excerpt: 'Apprenez pourquoi l''ajout d''un champ CNAME peut être requis et comment en ajouter un chez OVH'
section: 'Premiers pas avec Exchange'
order: 5
---

**Dernière mise à jour le 26/03/2019**

## Objectif

Lors de l'ajout d'un nom de domaine à votre offre e-mail, une configuration du champ CNAME (DNS) peut vous être demandée. Celle-ci a pour but de s'assurer que l'ajout du nom de domaine en question est légitime.

**Apprenez pourquoi l'ajout d'un champ CNAME peut être requis et comment en ajouter un chez OVH.**

## Prérequis

- Disposer d'une offre e-mail OVH.
- Avoir effectué l'ajout d'un nom de domaine sur votre offre e-mail demandant l'ajout d'un champ CNAME.
- Pouvoir modifier la configuration de votre nom de domaine (sa zone DNS).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

### Étape 1 : comprendre le diagnostic CNAME d'OVH

La pastille de diagnostic **CNAME** (Canonical Name) apparaît dans certains cas spécifiques lors de la déclaration d'un nom de domaine sur votre offre e-mail.

Son but est de prouver que vous êtes bien l'administrateur du nom de domaine que vous souhaitez déclarer.

Ce diagnostic peut apparaître dans les cas suivants :

- le nom de domaine déclaré n'est pas enregistré chez OVH ;
- le nom de domaine déclaré n'est pas géré par votre identifiant client ;
- le nom de domaine déclaré n'utilise pas la configuration OVH (ses serveurs DNS).

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

### Étape 2 : récupérer la configuration CNAME d'OVH

Positionnez-vous sur l'onglet `Domaine associés`{.action} et cliquez sur la pastille de couleur rouge `CNAME`{.action} pour récupérer les informations nécessaires.

Le champ CNAME apparaît sur l'image.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

Dès lors, deux possibilités peuvent se présenter :

- **votre domaine utilise la configuration  OVH** : vous pouvez réaliser la manipulation décrite ci-dessous depuis votre espace client OVH ;

- **votre domaine n'utilise pas la configuration  OVH** : vous devez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine.

> [!primary]
>
> Si votre nom de domaine est enregistré chez OVH, vous pouvez vérifier si ce dernier utilise notre configuration dans votre espace client depuis l’onglet `Serveurs DNS`{.action}, une fois le nom de domaine concerné sélectionné.
>

### Étape 3 : créer le champ CNAME dans la configuration OVH

Cliquez sur `Domaines`{.action} dans la barre de services à gauche dans votre espace client, puis sur le nom de domaine concerné. Sélectionnez ensuite l'onglet `Zone DNS`{.action}.

Un tableau devrait apparaître. Ce dernier affiche la configuration de votre domaine chez OVH. Celle-ci est constituée de plusieurs enregistrements DNS, tous symbolisés par une ligne du tableau.

Pour ajouter une entrée CNAME, cliquez sur le bouton `Ajouter une entrée`{.action}.

![cnamedomainemail](images/cname_exchange_add_entry_step1.png){.thumbnail}

Dans la fenêtre qui s’affiche, plusieurs champs DNS vous sont proposés. Cliquez sur `CNAME`{.action} et remplissez ensuite les champs avec les informations récupérées lors du diagnostic.

![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}

Une fois ces informations complétées, cliquez sur `Suivant`{.action}. Assurez-vous que les informations affichées soient correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

Pour vérifier que la configuration du champ CNAME est correcte, repositionnez-vous sur le tableau `Domaine associés`{.action} de votre offre e-mail. Si la pastille est à présent verte, le nom de domaine est correctement ajouté. Dans le  cas contraire, il se peut que la propagation ne soit pas encore terminée.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.