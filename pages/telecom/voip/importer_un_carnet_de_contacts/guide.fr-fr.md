---
title: 'Gérer un carnet de contacts sur une ligne SIP'
slug: importer_un_carnet_de_contacts
excerpt: 'Apprenez à gérer un carnet de contacts sur une ligne SIP OVHcloud'
section: 'Lignes téléphoniques'
---

**Dernière mise à jour le 21/06/2022**

## Objectif

Votre ligne SIP OVHcloud vous permet de recevoir et d’émettre des appels. Afin de rendre les interactions avec vos correspondants plus faciles, vous avez la possibilité de créer un carnet de contacts permettant de retrouver ou d'identifier ceux-ci directement depuis vos téléphones, dans le répertoire ou lors d'un appel entrant.

**Apprenez à gérer le carnet de contacts et les numéros abrégés de vos lignes SIP OVHcloud.**

## Prérequis

- Disposer au moins d'une [ligne SIP OVHcloud](https://www.ovhtelecom.fr/telephonie/voip/){.external}.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Télécom`{.action} :

![espace client Telecom VoIP](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

## En pratique

### Étape 1 : accéder à la gestion du carnet de contacts

Vous avez la possibilité de gérer le carnet de contacts d'une seule ligne ou d'un groupe de lignes, permettant ainsi à toutes les lignes rattachées à ce groupe d'en bénéficier.

- **Pour accéder à la gestion du carnet de contacts d'une seule ligne** :

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et assurez-vous de vous situer dans la section `Télécom`. Cliquez sur `Téléphonie`{.action} puis sélectionnez la ligne concernée. Positionnez-vous sur l'onglet `Téléphone`{.action} et cliquez sur `Carnets de contacts`{.action}.
 
![carnet de contacts](images/carnetligne.png){.thumbnail}

- **Pour accéder à la gestion du carnet de contacts d'un groupe de lignes** :

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et assurez-vous de vous situer dans la section `Télécom`. Cliquez sur `Téléphonie`{.action} dans la barre de services à gauche, puis cliquez sur le groupe de lignes concerné. Cliquez enfin sur le bouton `Carnet de contacts`{.action}.
 
![carnet de contacts](images/carnetgroupe.png){.thumbnail}

### Étape 2 : gérer le carnet de contacts

La gestion du carnet de contacts s'effectue de la même manière, que vous ayez sélectionné une seule ligne ou un groupe de lignes. Poursuivez en fonction de la manipulation que vous souhaitez réaliser.

#### Créer un carnet de contacts

Pour créer un carnet de contacts, renseignez le nom du carnet dans la zone de texte en dessous de « Nom du carnet de contacts », puis cliquez sur le bouton `Créer le carnet de contacts`{.action}.

![carnet de contacts](images/creercarnet.png){.thumbnail}

#### Ajouter ou modifier un contacts

Pour ajouter un nouveau contact, cliquez sur le bouton `Actions`{.action}, puis sur `Ajouter`{.action}. Pour modifier un contact existant, cliquez sur le bouton représentant trois points à droite du contact concerné, puis sur `Éditer`{.action}.

![carnet de contacts](images/creercarnetV2.png){.thumbnail}

Remplissez ensuite les informations demandées. Les numéros doivent être renseignés au format international (par exemple, « 0033123456789 » pour un numéro français). Une fois les informations complétées, cliquez sur le bouton `Valider`{.action} pour ajouter le contact. Répétez cette manipulation autant de fois que nécessaire.

![carnet de contacts](images/carnet-contacts-step5.png){.thumbnail}

#### Importer des contacts

Pour importer des contacts dans le carnet de contacts, cliquez sur le bouton `Actions`{.action}, puis sur `Importer`{.action}. Dans la fenêtre qui s'affiche, cliquez sur le bouton `Fichier de contact`{.action}. Pour être accepté par l'outil d'import, le fichier doit être au format .csv et respecter une forme précise dans son contenu. Vous trouverez un exemple ci-dessous :

|group|surname|name|workPhone|workMobile|homePhone|homeMobile|countryCode|
|---|---|---|---|---|---|---|---|
|Aucune|OVH|Support|100000000| | |6000000000|33|

Vous pouvez également utiliser une version texte en séparant chaque cellule du tableau par un point-virgule (donnant par exemple : « Aucune;OVH;Support;100000000;;;6000000000;33 »). Une fois le fichier sélectionné dans la fenêtre d'import, cliquez sur le bouton `Valider`{.action}.

> [!warning]
>
> Si aucun indicatif pays n'est renseigné dans la colonne « countryCode », nous y ajouterons automatiquement l'indicatif correspondant au pays de votre identifiant client. 
>

![carnetcontacts](images/carnet-contacts-step6.png){.thumbnail}

#### Télécharger le carnet de contacts

Pour télécharger la liste actuelle des contacts ajoutés dans le carnet, cliquez sur le bouton `Actions`{.action}, puis sur `Exporter`{.action}. Une fenêtre apparaît alors, vous invitant à enregistrer le fichier.

Le fichier obtenu sera au format .csv.

#### Supprimer un ou plusieurs contacts

Pour supprimer un seul contact, cliquez sur le bouton `...`{.action} à droite du contact concerné, puis sur `Supprimer`{.action}. Pour en supprimer plusieurs, cochez la case à gauche des contacts concernés, puis cliquez sur `Supprimer les contacts sélectionnés`{.action}.

![carnetcontacts](images/supprimercontact.png){.thumbnail}

#### Supprimer un carnet de contacts

Pour supprimer un carnet de contacts, cliquez sur le bouton `Supprimer le carnet de contacts`{.action}, puis sur `Valider`{.action}.

### Étape 3 : utiliser le carnet de contacts sur votre téléphone

Afin que votre téléphone puisse utiliser le carnet de contacts ou récupérer les éventuelles modifications effectuées dans celui-ci, commencez par le redémarrer. Une fois votre téléphone redémarré, il devrait avoir téléchargé le nouveau carnet de contacts.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
