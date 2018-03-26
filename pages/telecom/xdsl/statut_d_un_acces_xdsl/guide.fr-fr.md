---
title: Statut d’un accès xDSL
slug: statut-d-un-acces-xdsl
legacy_guide_number: '7962637'
section: Premiers pas
---

### Préambule {#préambule}

Depuis votre espace client Telecom, nous vous donnons la possibilité de voir l'état de votre lien xDSL. Vous retrouverez également un certain nombre de caractéristiques très intéressantes.

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Afficher le statut d'un accès {#afficher-le-statut-dun-accès}

Afin de pouvoir accéder au statut de votre lien, authentifiez-vous via votre **espace client Telecom** et cliquez sur "**Statut**".

![](images/statut.png){.thumbnail}

Si vous possédez plusieurs accès sur votre identifiant OVH, vous allez retrouver deux parties :

![](images/statut1.png){.thumbnail}

1.  Liste des lignes xDSL : sélectionnez le numéro de la ligne afin d'afficher ses caractéristiques sur le côté droit. Vous pouvez utiliser le champ "recherche" pour retrouver votre accès.
2.  Caractéristiques et statistiques des lignes xDSL : vous trouverez un récapitulatif des caractéristiques techniques de la ligne, l'adresse du raccordement et plusieurs statistiques.

------------------------------------------------------------------------

### Détails d'un lien xDSL : {#détails-dun-lien-xdsl}

*Adresse du raccordement* :

![](images/statut3.png){.thumbnail}

Dans cette partie, vous trouverez un récapitulatif théorique concernant votre lien xDSL : le **numéro de ligne support**, l'**adresse du raccordement** ainsi que des valeurs théoriques :**Atténuation, distance NRA, le nom du NRA et le LNS utilisé** (si collecte).

Vous trouverez également le statut de votre connexion ![](images/etatSync.png){.thumbnail} → il vous indique si votre IP publique répond au PING et si votre lien est synchronisé.

**Si votre modem OVH est configuré en mode bridge et que votre routeur ne répond pas au ping, vous trouverez le symbole ![](images/warning.png){.thumbnail}**au niveau de l'état**.**

*Caractéristiques* :

![](images/statut4.png){.thumbnail}

Dans cette partie, vous trouverez un récapitulatif des **caractéristiques de votre ligne** : le débit de synchronisation, un rappel de votre atténuation, la longueur de votre lien, la mesure de votre ping, votre IP publique version 4 et 6 si celle-ci a été activée, le reverse DNS et le LNS utilisé si votre lien est raccordé sur un opérateur de collecte.

*Statistiques* :

![](images/statut5.png){.thumbnail}

Cette partie est principalement centrée sur des **graphiques de statistiquessuivants plusieurs indicateurs** :

→ Valeur de synchronisation

→ Bande passante

→ Ping

→ Rapport signal sur bruit (SNR)

→ Atténuation

Les graphiques peuvent être obtenus dans plusieurs intervalles de temps : dernièrement, journalier, hebdomadaire, mensuel et annuel.

Toutefois, ces **graphiques ne sont pas tous disponibles** si votre accès est raccordé sur des**équipements de l'opérateur de collecte**.

*Logs DSLAM:*

![](images/statut6.png){.thumbnail}

Les logs DSLAM permettent d'obtenir des informations sur l'état du port de votre connexion. En cas de coupure de connexion, vous pourrez vérifier si la synchronisation se fait correctement.

------------------------------------------------------------------------

### SDSL multi-paires {#sdsl-multi-paires}

![](images/statut7.png){.thumbnail}

Pour les accès**SDSL multi-paires**, vous trouverez dans la partie de gauche le**numéro de la première paire et les autres se présenteront de manière indentées**.

------------------------------------------------------------------------


