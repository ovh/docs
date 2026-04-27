---
title: "Gérer un carnet de contacts sur une ligne SIP"
excerpt: "Apprenez à gérer un carnet de contacts sur une ligne SIP OVHcloud"
updated: 2025-12-30
---

## Objectif

Votre ligne SIP OVHcloud vous permet de recevoir et d'émettre des appels. Pour faciliter les interactions avec vos correspondants, vous pouvez créer un carnet de contacts permettant de retrouver ou d'identifier ceux-ci directement depuis vos téléphones, dans le répertoire ou lors d'un appel entrant.

**Apprenez à gérer le carnet de contacts et les numéros abrégés de vos lignes SIP OVHcloud.**

## Prérequis

- Disposer au moins d'une [ligne SIP OVHcloud](/links/telecom/telephonie-voip).

<!-- CP-NAV-START:telecom-voip-fax -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VoIP & Fax](/links/control-panel/telecom-voip-fax)
- **Pour accéder à vos services :** `Télécom`{.action} > `VoIP & Fax`{.action} > Sélectionnez votre groupe de téléphonie

---
<!-- CP-NAV-END:telecom-voip-fax -->

![espace client Telecom VoIP](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

## En pratique

### Étape 1 : accéder à la gestion du carnet de contacts

Vous pouvez gérer le carnet de contacts d'une seule ligne ou d'un groupe de lignes, permettant ainsi à toutes les lignes rattachées à ce groupe d'en bénéficier.

> [!success]
> L'avantage de l'ajout d'un carnet de contacts sur un **groupe de lignes** est qu'il permet d'avoir un carnet **commun** pour toutes les lignes du groupe.

Pour bénéficier d'un carnet de contacts sur une seule ligne SIP, celle-ci doit être associée à un téléphone fourni par OVHcloud.

- **Pour accéder à la gestion du carnet de contacts d'une seule ligne** :

<!-- CP-STEPS-START:acces-carnet-ligne -->
Cliquez sur l'onglet `Téléphone`{.action} puis sur `Carnets de contacts`{.action}.

![carnet de contacts](images/carnetligne.png){.thumbnail}
<!-- CP-STEPS-END:acces-carnet-ligne -->

- **Pour accéder à la gestion du carnet de contacts d'un groupe de lignes** :

<!-- CP-STEPS-START:acces-carnet-groupe -->
Cliquez sur l'onglet `Carnet de contacts`{.action}.

![carnet de contacts](images/carnetgroupe.png){.thumbnail}
<!-- CP-STEPS-END:acces-carnet-groupe -->

### Étape 2 : gérer le carnet de contacts

La gestion du carnet de contacts s'effectue de la même manière, que vous ayez sélectionné une seule ligne ou un groupe de lignes. Poursuivez en fonction de la manipulation que vous souhaitez réaliser.

#### Créer un carnet de contacts

<!-- CP-STEPS-START:creer-carnet -->
Pour créer un carnet de contacts, renseignez le nom du carnet dans la zone de texte en dessous de « Nom du carnet de contacts », puis cliquez sur le bouton `Créer le carnet de contacts`{.action}.

![carnet de contacts](images/creercarnet.png){.thumbnail}
<!-- CP-STEPS-END:creer-carnet -->

#### Ajouter ou modifier un contact

<!-- CP-STEPS-START:ajouter-modifier-contact -->
Pour ajouter un nouveau contact, cliquez sur le bouton `Actions`{.action}, puis sur `Ajouter`{.action}. Pour modifier un contact existant, cliquez sur le bouton représentant trois points à droite du contact concerné, puis sur `Éditer`{.action}.

![carnet de contacts](images/creercarnetV2.png){.thumbnail}

Remplissez ensuite les informations demandées. Les numéros doivent être renseignés au format international (par exemple, « 0033123456789 » pour un numéro français). Une fois les informations complétées, cliquez sur le bouton `Valider`{.action} pour ajouter le contact. Répétez cette manipulation autant de fois que nécessaire.

![carnet de contacts](images/carnet-contacts-step5.png){.thumbnail}
<!-- CP-STEPS-END:ajouter-modifier-contact -->

#### Importer des contacts

<!-- CP-STEPS-START:importer-contacts -->
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
<!-- CP-STEPS-END:importer-contacts -->

#### Télécharger le carnet de contacts

<!-- CP-STEPS-START:telecharger-carnet -->
Pour télécharger la liste actuelle des contacts ajoutés dans le carnet, cliquez sur le bouton `Actions`{.action}, puis sur `Exporter`{.action}. Une fenêtre apparaît alors, vous invitant à enregistrer le fichier.

Le fichier obtenu sera au format .csv.
<!-- CP-STEPS-END:telecharger-carnet -->

#### Supprimer un ou plusieurs contacts

<!-- CP-STEPS-START:supprimer-contacts -->
Pour supprimer un seul contact, cliquez sur le bouton `...`{.action} à droite du contact concerné, puis sur `Supprimer`{.action}. Pour en supprimer plusieurs, cochez la case à gauche des contacts concernés, puis cliquez sur `Supprimer les contacts sélectionnés`{.action}.

![carnetcontacts](images/supprimercontact.png){.thumbnail}
<!-- CP-STEPS-END:supprimer-contacts -->

#### Supprimer un carnet de contacts

<!-- CP-STEPS-START:supprimer-carnet -->
Pour supprimer un carnet de contacts, cliquez sur le bouton `Supprimer le carnet de contacts`{.action}, puis sur `Valider`{.action}.
<!-- CP-STEPS-END:supprimer-carnet -->

### Étape 3 : utiliser le carnet de contacts sur votre téléphone

Afin que votre téléphone puisse utiliser le carnet de contacts ou récupérer les éventuelles modifications effectuées dans celui-ci, commencez par le redémarrer. Une fois votre téléphone redémarré, il devrait avoir téléchargé le nouveau carnet de contacts.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
