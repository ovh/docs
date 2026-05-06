---
title: "Configurer un Serveur Vocal Interactif (SVI)"
excerpt: "Découvrez comment configurer un serveur vocal interactif depuis l'espace client OVHcloud"
updated: 2026-01-22
---

## Objectif

Configurer un numéro en Serveur Vocal Interactif (SVI) permet de proposer à vos correspondants un menu avec lequel ils pourront interagir, grâce aux touches de leurs téléphones.<br>
L'exemple le plus courant consiste à orienter un appelant entre plusieurs services d'une société : « *Appuyez sur la touche 1 pour une demande commerciale ou sur la touche 2 pour une demande technique* ».

**Découvrez comment configurer un serveur vocal interactif depuis l'espace client OVHcloud.**

## Prérequis

- Disposer d'un [numéro alias](/links/telecom/telephonie-numeros).

<!-- CP-NAV-START:telecom-voip-fax -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VoIP & Fax](/links/control-panel/telecom-voip-fax)
- **Pour accéder à vos services :** `Télécom`{.action} > `VoIP & Fax`{.action} > Sélectionnez votre groupe de téléphonie

---
<!-- CP-NAV-END:telecom-voip-fax -->

![espace client Telecom VoIP](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

> [!primary]
>
> Consultez notre guide « [Choisir et appliquer une configuration pour un numéro](/pages/web_cloud/phone_and_fax/voip/quelle_configuration_est_adaptee_a_mes_besoins) » pour plus de détails sur les différentes configurations applicables à un numéro alias.
>

## En pratique

### Étape 1 : Appliquer la configuration « Serveur Vocal Interactif »

<!-- CP-STEPS-START:etape-1-appliquer-configuration-svi -->
- Si votre numéro n'est actuellement pas configuré, cliquez sur l'onglet `Configuration`{.action}, sélectionnez `Serveur Vocal Interactif`{.action} puis cliquez sur `Paramétrer`{.action}.

- Si votre numéro a déjà une configuration en place, cliquez sur l'onglet `Configuration`{.action} puis sur `Changer de configuration`{.action}. Sélectionnez ensuite `Serveur Vocal Interactif`{.action} et cliquez sur `Paramétrer`{.action}. Vous devrez alors confirmer la perte de la configuration actuellement en place.

![sviconfiguration](images/svi-1-2026.png){.thumbnail}

> [!primary]
>
> Pour appliquer le même type de configuration à plusieurs numéros, cliquez sur `Appliquer à plusieurs numéros`{.action}, sélectionnez les numéros concernés puis cliquez sur `Valider`{.action}.
> 
> ![configurationnumeroalias](images/selection-alias-conf.png){.thumbnail}
>
> Cliquez sur le bouton `Paramétrer`{.action} et patientez quelques instants pendant l'application du paramétrage.
>
> Si vous appliquez le même type de configuration à plusieurs numéros, vous devrez finaliser la configuration sur chacun des numéros concernés.
<!-- CP-STEPS-END:etape-1-appliquer-configuration-svi -->

### Étape 2 : Accéder à la configuration du serveur vocal interactif

<!-- CP-STEPS-START:etape-2-acceder-configuration-svi -->
Une fois la configuration de serveur vocal interactif appliquée, la page de configuration du SVI vous est présentée.

![sviconfiguration](images/2026-VoIP-SVI-01.png){.thumbnail}

Pour revenir à cette page à tout moment, cliquez sur l'onglet `Mon numéro`{.action} puis, dans le cadre « Configuration », cliquez sur `Paramétrer la configuration`{.action}.

![sviconfiguration](images/svi-1.png){.thumbnail}
<!-- CP-STEPS-END:etape-2-acceder-configuration-svi -->

#### Présentation de l'interface

L'interface de configuration du SVI se présente sous la forme d'une arborescence surmontée de deux menus. Un menu supplémentaire est disponible sur chaque étape de l'arborescence.

<!-- CP-STEPS-START:presentation-interface-svi -->
|Menu du numéro|Menu de la configuration|Menu d'étape|
|---|---|---|
|![menu numéro](images/menu-numero-svi.png){.thumbnail}|![menu configuration](images/menu-configuration-svi.png){.thumbnail}|![menu étape](images/menu-etape-svi.png){.thumbnail}|
<!-- CP-STEPS-END:presentation-interface-svi -->
|Permet de gérer les options principales de la configuration.|Permet de gérer les étapes de la configuration ainsi que les options d'affichage des appels.|Permet d'ajouter des actions au sein d'une étape ainsi que des conditions d'exécution de l'étape.|

### Étape 3 : Configurer le serveur vocal interactif

Les étapes suivantes peuvent être suivies sans ordre particulier. Néanmoins, à des fins de facilité de prise en main, nous vous recommandons de suivre l'ordre ci-dessous.

#### 3.1 Gérer les sons

<!-- CP-STEPS-START:etape-3-1-gerer-sons -->
**L'ajout d'un son d'accueil est la première étape indispensable pour créer votre SVI**. Ce son d'accueil sera joué dès le début de l'appel. Il précise à l'appelant les différents choix offerts par les touches.

Vous pouvez ajouter plusieurs sons si vous souhaitez créer des choix de touches successifs. En effet, il vous faudra alors un son par menu interactif.
<br> Nous vous conseillons également de créer un son dédié aux actions invalides. Ainsi, si un appelant compose une touche que vous n'avez pas configurée, un son peut lui rappeler les choix de touches possibles.

> [!warning]
>
> La création des fichiers-sons est à votre charge. Nous vous conseillons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) car OVHcloud ne sera pas en mesure de créer ces fichiers pour vous.
> <br>Sachez qu'il est également possible de créer des fichiers-sons via le logiciel open source et gratuit [Audacity](https://www.audacityteam.org/).
>

Ouvrez le **menu du numéro** puis cliquez sur `Gérer les sons`{.action}.

![gérer les sons](images/gerer-sons-svi.png){.thumbnail}

Cliquez alors sur `Ajouter un son`{.action} pour téléverser un son depuis votre poste.
<!-- CP-STEPS-END:etape-3-1-gerer-sons -->

#### 3.2 Créer un menu interactif <a name="creer-menu-interactif"></a>

<!-- CP-STEPS-START:etape-3-2-creer-menu-interactif -->
Ouvrez le **menu du numéro** puis cliquez sur `Gérer les menus interactifs`{.action}.

![gérer les menus](images/gerer-menus-svi.png){.thumbnail}

Sur la nouvelle page qui s'affiche, cliquez sur `+ Ajouter un menu interactif`{.action}.

![sviconfiguration](images/svi-menu-creation.png){.thumbnail}

Une fenêtre de création s'affiche. Complétez les informations demandées :

|Information|Description|
|---|---|
|Nom du menu interactif|Définissez un nom pour ce menu interactif. Celui-ci ne peut contenir que des lettres (sans accents), des chiffres, des tirets bas ainsi que des espaces.|
|Son d'accueil|Sélectionnez le son qui sera joué dès le début de l'appel. Celui-ci précise à l'appelant les différents choix offerts par les touches.|
|Son en cas d'action invalide|Choisissez le son qui sera joué si l'appelant appuie sur une touche non reconnue par le serveur vocal interactif.|

Une fois les informations renseignées, cliquez sur `Créer`{.action}.
<!-- CP-STEPS-END:etape-3-2-creer-menu-interactif -->

#### 3.3 Ajouter des entrées dans le menu interactif

<!-- CP-STEPS-START:etape-3-3-ajouter-entrees-menu -->
Une fois votre menu interactif créé, vous pouvez y ajouter des entrées. Pour cela, cliquez sur le bouton `+`{.action} situé en bas de celui-ci.

![sviconfiguration](images/svi-menu-creation-entree.png){.thumbnail}

Dans la fenêtre qui s'affiche, complétez les informations demandées :

|Information|Description|
|---|---|
|Touche|Définissez la touche d'entrée du menu que vous souhaitez configurer.|
|Action à exécuter|Sélectionnez l'action qui se réalisera lorsque l'appelant appuiera sur la touche correspondante. Aidez-vous des informations qui s'affichent pour choisir l'option la plus adaptée à votre besoin.|
|Paramètre d'action supplémentaire|Selon l'action que vous avez définie, une case supplémentaire peut apparaître et vous inviter à renseigner un élément complémentaire. Suivez alors les indications qui s'affichent.|

Une fois les informations complétées, cliquez sur `Créer`{.action}. Selon vos besoins, répétez ces manipulations si vous voulez créer plusieurs menus interactifs. Vous pourrez alors les imbriquer dans votre serveur vocal interactif en tant que sous-menus, si vous souhaitez par exemple réaliser plusieurs embranchements.

![sviconfiguration](images/svi-sous-menu.png){.thumbnail}
<!-- CP-STEPS-END:etape-3-3-ajouter-entrees-menu -->

### Étape 4 : Configurer les étapes et actions

<!-- CP-STEPS-START:etape-4-creer-etape -->
Une fois vos menus interactifs créés, cliquez sur `Retour à la configuration du numéro`{.action}.

Vous devez à présent créer des étapes pour déclencher vos menus interactifs selon vos besoins. Vous pourrez par exemple définir des périodes de disponibilité (plages horaires) et les actions à déclencher en dehors de ces périodes.
<!-- CP-STEPS-END:etape-4-creer-etape -->

#### 4.1 Créer une étape

<!-- CP-STEPS-START:etape-4-1-creer-etape -->
Pour créer une première étape, ouvrez le **menu de configuration** puis cliquez sur `Ajouter une étape`{.action}.

![sviconfiguration](images/svi-etape2021.png){.thumbnail}

> [!primary]
>
> Pour réordonner les étapes et actions de votre plan de configuration, cliquez sur le bouton `Réordonner les étapes et actions`{.action} situé en haut à gauche.
>
> Utilisez le bouton dédié (entre chaque étape) pour modifier l'ordre de vos étapes et actions puis validez ce nouvel ordre en cliquant sur `Valider les modifications`{.action}
>
<!-- CP-STEPS-END:etape-4-1-creer-etape -->

#### 4.2 Ajouter une action à une étape

<!-- CP-STEPS-START:etape-4-2-ajouter-action -->
Les actions ajoutées à une étape s'activent lorsqu'un appelant contacte votre numéro.

Pour ajouter une action à une étape, cliquez sur le bouton `...`{.action} dans l'étape concernée puis sur `Ajouter une action`{.action}

![sviconfiguration](images/svi-action2021.png){.thumbnail}

Complétez les informations demandées :

|Information|Description|
|---|---|
|Action à exécuter|Définissez l'action qui sera effectuée lorsque l'appelant contactera votre numéro. Aidez-vous des informations qui s'affichent pour choisir celle la plus adaptée à votre besoin.<br><br> Afin de pouvoir utiliser un menu interactif ([créé lors de l'étape 2](./#creer-menu-interactif)), vous devez sélectionner l'action « Lancer un menu interactif ».|
|Paramètre d'action supplémentaire|Selon l'action que vous avez définie, une case supplémentaire peut apparaître et vous inviter à renseigner un élément complémentaire. Suivez alors les indications qui s'affichent.|

Une fois les informations complétées, cliquez sur `Créer`{.action}.

![sviconfiguration](images/svi-action2021b.png){.thumbnail}

Selon vos besoins, répétez ces manipulations si vous souhaitez créer plusieurs actions dans une étape.

> [!primary]
>
> À des fins de lisibilité, vous pouvez choisir à tout moment d'afficher ou masquer toutes les actions définies dans vos étapes. Cliquez sur `Options d'affichage`{.action} en haut à gauche de votre interface puis sur `Afficher toutes les actions`{.action} ou `Masquer toutes les actions`{.action}.
>
<!-- CP-STEPS-END:etape-4-2-ajouter-action -->

#### 4.3 Ajouter une condition à une étape

<!-- CP-STEPS-START:etape-4-3-ajouter-condition -->
Lorsqu'une ou plusieurs conditions sont ajoutées à une étape, celles-ci doivent être remplies pour que l'étape se déclenche. Si les conditions ne sont pas remplies, soit une action correspondant aux **conditions non-vérifiées** se déclenche, soit l'étape suivante de votre plan de configuration se déclenche.

> [!success]
>
> Vous pouvez ainsi faire en sorte que votre SVI se déclenche uniquement lors de vos horaires d'ouverture. En dehors de ces horaires, vous pouvez, par exemple, diffuser un son rappelant les horaires d'ouverture de votre entreprise ou déclencher le [répondeur d'une ligne SIP OVHcloud](/pages/web_cloud/phone_and_fax/voip/configurer-consulter-repondeur-ligne-ovh).
>

Pour ajouter une condition à une étape, ouvrez le menu de l'étape via le bouton `...`{.action}, puis choisissez `Configuration avancée`{.action}.

![svi conditions](images/svi-conditions2021.png){.thumbnail}

Le menu qui apparaît vous permet de définir jusqu'à trois types de conditions.

![svi conditions](images/svi-conditions2021b.png){.thumbnail}

Une fois vos conditions créées, vous pouvez définir une ou plusieurs action(s) correspondant aux conditions non-vérifiées. Ces actions seront alors prises en compte pour les appels ne remplissant pas les conditions.

Ainsi, dans l'exemple ci-dessous, un appel pendant les plages horaires définies pour l'étape 1 lancera le menu interactif nommé « Menu principal ». (1).
<br>Un appel en dehors de ces plages horaires sera réceptionné sur le répondeur d'une ligne SIP OVHcloud (2).

![SVI conditions exemple](images/exemple-svi-plages2021.png){.thumbnail}

Poursuivez la lecture de ce guide selon la condition que vous désirez paramétrer :

- [Condition de « Jours exceptionnels »](./#condition-de-jours-exceptionnels)
- [Condition de « Plages horaires génériques »](./#condition-de-plages-horaires-generiques)
- [Condition de « Filtrages d'appels »](./#condition-de-filtrages-dappels)
<!-- CP-STEPS-END:etape-4-3-ajouter-condition -->

##### **Condition de « Jours exceptionnels »** <a name="jours-exceptionnels"></a>

<!-- CP-STEPS-START:condition-jours-exceptionnels -->
Après avoir cliqué sur `Jours exceptionnels`{.action} depuis le menu de configuration avancée, choisissez le créneau que vous souhaitez appliquer. Vous revenez ensuite automatiquement dans la fenêtre de configuration avancée. Cliquez alors sur `Modifier`{.action}.

![SVI - jours exceptionnels](images/creneaux-activation2021.png){.thumbnail}

Vous devez à présent configurer le créneau que vous venez de sélectionner (ou vous assurer que celui-ci l'est correctement). Pour cela, ouvrez le **Menu du Numéro** via le bouton `...`{.action} puis cliquez sur `Gérer les créneaux exceptionnels`{.action}.

![gérer créneaux exceptionnels](images/svi-creneaux2021.png){.thumbnail}

La page de gestion des fermetures exceptionnelles apparaît alors. Dans la partie `Planification des jours de fermeture`, positionnez vos fermetures exceptionnelles sur le calendrier en cliquant sur les jours concernés. Complétez les informations demandées :

|Information|Description|
|---|---|
|Plage horaire/journée entière|Choisissez si la fermeture exceptionnelle concerne uniquement une plage horaire ou une journée entière.|
|Objet|Définissez un titre vous permettant d'identifier cette fermeture exceptionnelle dans le calendrier.|
|Catégorie|Choisissez le créneau dans lequel vous souhaitez ajouter la fermeture exceptionnelle.|
|Du/au|Définissez la date et l'heure (le cas échéant) de la fermeture exceptionnelle.|
|Description|Vous pouvez ajouter une description plus détaillée sur cette fermeture exceptionnelle.|

Une fois les informations renseignées, cliquez sur `Créer l'événement`{.action}. Répétez cette manipulation afin d'ajouter toutes les fermetures exceptionnelles nécessaires. Cliquez enfin sur le bouton `Valider`{.action} pour sauvegarder ces changements.

![gérer fermetures exceptionnels](images/creneaux2021.png){.thumbnail}
<!-- CP-STEPS-END:condition-jours-exceptionnels -->

##### **Condition de « Plages horaires génériques »** <a name="plages-horaires"></a>

<!-- CP-STEPS-START:condition-plages-horaires -->
Après avoir cliqué sur `Plages horaires génériques`{.action} depuis le menu de configuration avancée, cliquez sur `Ajouter des plages horaires`{.action}.

Configurez maintenant les plages horaires qui correspondent à vos besoins. Pour cela, sélectionnez les jours concernés puis renseignez les horaires dans les cases prévues à cet effet. Cliquez sur le bouton `V`{.action} à droite pour enregistrer la plage.

Une fois toutes vos plages horaires définies, cliquez sur le bouton `Modifier`{.action} pour les valider.

![SVI plages horaires](images/plages-svi2021.gif){.thumbnail}

> [!primary]
> Pour modifier une plage horaire déjà créée, il est nécessaire de la supprimer puis de créer une nouvelle plage horaire.
>
<!-- CP-STEPS-END:condition-plages-horaires -->

##### **Double condition : « Jours exceptionnels » et « Plages horaires génériques »**

<!-- CP-STEPS-START:condition-double -->
Pour obtenir une configuration contenant à la fois des jours exceptionnels et des plages horaires génériques, il convient de placer les jours exceptionnels sur l'étape 1 et les plages horaires génériques sur l'étape 2.

En effet, le système lit les étapes dans l'ordre : si les conditions de l'étape 1 sont remplies, les actions associées à cette étape sont exécutées. Dans le cas contraire, le système passe automatiquement à l'étape 2.

![SVI - double condition](images/svi-double-condition.png){.thumbnail}
<!-- CP-STEPS-END:condition-double -->

##### **Condition de « Filtrages d'appels »** <a name="filtrages-appels"></a>

<!-- CP-STEPS-START:condition-filtrages-appels -->
Après avoir cliqué sur `Filtrages d'appels`{.action} depuis le menu de configuration avancée, choisissez si vous souhaitez filtrer vos appels entrants selon une « liste noire » ou une « liste blanche ».

|Liste|Description|
|---|---|
|Liste noire|Les numéros ou les tranches de numéros inscrits dans la liste ne peuvent plus vous contacter.|
|Liste blanche|**Seuls** les numéros ou les tranches de numéros inscrits dans la liste sont autorisés à vous contacter.|

Une fois que vous avez sélectionné la liste que vous souhaitez utiliser, complétez-la en ajoutant les numéros ou les tranches de numéros adéquats. Pour cela, utilisez le champ `Ajouter un numéro à la liste`, puis cliquez sur le bouton `Ajouter`{.action}. Vous pouvez supprimer une entrée dans la liste grâce à l'icône représentant une corbeille.

Pour enregistrer vos modifications, cliquez sur `Modifier`{.action}.

![SVI -filtrages](images/filtrages2021.png){.thumbnail}
<!-- CP-STEPS-END:condition-filtrages-appels -->

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
