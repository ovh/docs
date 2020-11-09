---
title: Modification du profil de synchronisation
slug: modification-du-profil-de-synchronisation
legacy_guide_number: '7962661'
section: Configuration de mon offre
---

### Préambule {#préambule}

Votre espace client Telecom regroupe un certain nombre de fonctionnalités, dont la gestion de vos profils de synchronisation.

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Prérequis {#prérequis}

-   Disposer d'un accès xDSL actif.
-   Être raccordé sur un NRA dégroupé par OVHcloud.

    ------------------------------------------------------------------------

### Ligne dégroupée OVHcloud {#ligne-dégroupée-ovhcoud}

-   **Comment accéder au changement de profil**

<!-- -->

-   Connectez-vous à votre [espace client Telecom OVHcloud](https://www.ovhtelecom.fr/manager/#/
-   Choisissez **votre accès**
-   Cliquez sur **"Mon accès"**
-   Choisissez le **Profil** que vous souhaitez appliquer
-   Cliquez sur **"Valider"**

![](images/2015-12-15-144213_1258x549_scrot.png){.thumbnail}

-   **Explication de différents profils**

Vous retrouverez différents types de profil ADSL ou VDSL : **512K, 2M, 24M, SAFE 1, SAFE 2, PERF 1 et PERF 2**, "17a ou 8b" également pour du VDSL. La question que vous devez vous poser est :**quel profil sélectionner** ?

Par défaut, votre accès est livré sur le profil **par défaut**, avec une marge au bruit (SNR) à 6 dB lors de la synchronisation.
Généralement, on applique un nouveau profil quand on souhaite obtenir un débit plus important ou corriger une instabilité. Voici quelques explications pour les différents types de profil :

Suivant le SNR défini le débit sera plus ou moins élevé et l'accès subira plus ou moins de perturbation.

Plus concrètement :

    Plus le SNR est faible, meilleur est le débit mais moins stable est la ligne;
    Plus le SNR est élevé, moins bon est le débit mais plus stable est la ligne.

La correspondance des profils avec leur SNR :

-   **Par défaut** : SNR 6
-   **512K** : SNR 6 avec limite de débit à 512K
-   **2M** : SNR 6 avec limite de débit à 2M
-   **24M** : SNR 6 sans limite de débit
-   **SAFE1** : SNR 10
-   **SAFE2** : SNR 16
-   **PERF1** : SNR 3
-   **PERF2** : SNR 1

**24M est le débit maximum atteignable avec un SNR à 6 dB.**
Si vous êtes juste à côté du NRA vous aurez peut-être 24M.
Cependant si vous êtes à 1 km , 24M ne sera pas atteignable vous aurez peut-être 15M, ceci dépendra de la ligne et de la marge sur bruit.


En VDSL, d’autres modulations de fréquence s’offrent à vous.

-   **17a**, recommandé pour les lignes de moins de 1 km : le profil 17a permet aux abonnés se trouvant à moins d’un kilomètre du NRA de bénéficier des meilleures performances sur leur ligne. Pour connaître cette distance, il suffit de tester son numéro sur le [test d’éligibilité OVHcloud Télécom](https://www.ovhtelecom.fr/offre-internet/eligibilite/). En fonction de la qualité de la ligne, le profil 17a ne sera pas systématiquement la meilleure option pour un abonné se trouvant à moins d’un kilomètre du NRA.
-   **8b**, pour les lignes plus longues : de manière générale, le profil 8b sera plus avantageux pour les abonnés situés à plus d’un kilomètre du nœud de raccordement téléphonique.

------------------------------------------------------------------------

### Ligne non dégroupée OVHcloud {#ligne-non-dégroupée-ovhcloud}

Malheureusement, cette option n'est pas disponible pour les lignes raccordées sur les équipements d'opérateurs de collecte.

------------------------------------------------------------------------


