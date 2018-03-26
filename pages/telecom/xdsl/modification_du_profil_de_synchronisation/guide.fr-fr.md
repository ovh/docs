---
title: Modification du profil de synchronisation
slug: modification-du-profil-de-synchronisation
legacy_guide_number: '7962661'
section: Configuration de mon offre
---

### Préambule {#préambule}

Votre espace client Telecom regroupe un certain nombre de fonctionnalités, dont la gestion de vos profils de synchronisation

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Prérequis {#prérequis}

-   Disposer d'un accès xDSL actif.
-   Être raccordé sur un NRA OVH.

    ------------------------------------------------------------------------

### Ligne dégroupée OVH {#ligne-dégroupée-ovh}

-   **Comment accéder au changement de profil**

<!-- -->

-   Rendez vous dans votre Espace Client sur <https://www.ovhtelecom.fr/espaceclient/>
-   Choisissez **votre accès**
-   Cliquez sur **"Mon accès"**
-   Choisissez le **Profil** que vous souhaitez appliquer
-   Cliquez sur **"Valider"**

![](images/2015-12-15-144213_1258x549_scrot.png){.thumbnail}

-   **Explication de différents profils**

Lors de la sélection du nouveau profil, vous retrouverez différents types de profil : **Interleaved, G.INP, AUTO**et**SNR**. La question que vous devez vous poser est :**quel profil sélectionner** ?

Par défaut, votre accès est livré sur le profil dit "Interleaved". Généralement, on applique un nouveau profil quand on souhaite obtenir un débit plus important ou corriger une instabilité. Mais le changement de profil ne s'effectuent pas de n'importe quelle manière. Voici quelques explications pour les différents types de profil :

-   **G.INP :**cette extension améliore la correction d'erreur de ligne sans affecter la performance de la ligne.****
-   **AUTO :**le DSLAM va synchroniser au **maximum sur le débit**.
-   **SNR :**le DSLAM va analyser la qualité de la ligne et va négocier un rapport signal/bruit (SNR) au chiffre indiqué. Plus le **chiffre est grand, plus la stabilité de la ligne sera bonne, mais plus le débit sera faible.** Sur le profil non SNR, le DSLAM essaie d'avoir un SNR à 6.
-   **FAST :**ce profil permet d'**améliorer votre ping** sans appliquer de correction d'erreur.

**Surun lien instable, ce type de profil n'est pas adapté.**

------------------------------------------------------------------------

### Ligne non dégroupée OVH {#ligne-non-dégroupée-ovh}

Malheureusement, cette option n'est pas disponible pour les lignes raccordées sur les équipements d'opérateurs de collecte.

------------------------------------------------------------------------


