---
title: Dépannage C590IP/C610IP
slug: depannage-c590ip-c610ip
legacy_guide_number: '7536715'
space_key: CRTEL
space_name: Téléphonie
---

------------------------------------------------------------------------

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Configuration automatique via code d'auto-configuration {#configuration-automatique-via-code-dauto-configuration}

Pour générer un code d'auto-configuration :

-   Connectez-vous à votre Espace Client OVH : <https://www.ovhtelecom.fr/espaceclient/>
-   Cliquez sur le lien "**Administrez vos services de téléphonie via l'ancienne interface**".
-   Cliquez sur la ligne à reconfigurer.
-   Cliquez sur "**Assistance**".
-   Cliquez "**Dépannage Plug & phone**".

![](images/2015-03-09-113828_265x400_scrot.jpg){.thumbnail}

-   Le formulaire vous demande l'adresse **IP Publique** depuis laquelle le téléphone vient se connecter. Généralement (hors configuration particulière), votre ordinateur utilise la même IP Publique que le téléphone. Vous la trouverez en bas à droite du formulaire. Cliquez sur "**Suivant**".

![](images/2015-03-09-114635_721x314_scrot.jpg){.thumbnail}

-   Un code d’auto-configuration est généré. Il vous faut maintenant l'entrer dans votre téléphone.
-   **Débranchezélectriquement** la base de votre Gigaset et rebranchez-la en appuyant sur le **boutoncentral** durant **30secondes**.
    -   Réenregistrer le combiné en allant dans **Menu** &gt; **Combiné**&gt; **Enregistrer combiné**.
    -   Appuyez sur le bouton central de la base jusqu'à ce que le combiné soit enregistré. Si un**code PIN** est demandé, il s'agit de **0000**.
-   Appuyez sur la touche **Menu** du combiné.
-   Rendez vous dans **Réglages &gt; Téléphonie &gt; Assist VoIP**.
-   Entrez le code PIN : 0000.
-   Répondez **Oui**sur le combiné à la question "**Disposez-vous du code d'activation provisioning de l'opérateur ?**".
-   Entrez le code d'auto-configuration. Le téléphone sera opérationnel dans un délai de 5 minutes.

------------------------------------------------------------------------

### Mon combiné affiche "Pas de base" {#mon-combiné-affiche-pas-de-base}

Lorsque le combiné affiche "pas de base", c'est qu'il ne parvient pas à joindre celle-ci ou qu'il n'est pas enregistré sur la base.

-   Vérifiez dans un premier temps que la base est bien alimentée électriquement et que le bouton central est allumé en bleu.
-   Si c'est le cas, il faut alors enregistrer le combiné sur la base. Pour ce faire :
    -   Prenez votre **combiné**, allez dans le **Menu** du téléphone &gt; **Réglages** &gt; **Enregistrement** &gt; **Enreg. Combiné**.
    -   **Appuyez sur le bouton central** de la base jusqu'à ce que le combiné indique "**Combiné enregistré**" ou vous demande le code PIN qui par défaut est 0000. Votre téléphone doit être fonctionnel à présent.

------------------------------------------------------------------------

### Le bouton central de ma base n'est pas bleu {#le-bouton-central-de-ma-base-nest-pas-bleu}

Si le bouton central de votre base n'est pas allumé en bleu, cela peut provenir de deux points :

-   Votre base n'est pas alimentée électriquement. Il vous faut dans ce cas vérifier les branchements et vous assurer que l'alimentation est bien branchée au dos de la base.
-   Votre base n'est pas connectée en Ethernet : soit le câble est branché au mauvais endroit ou il n'est pas branché sur votre routeur.

![](images/2015-03-06-100645_442x339_scrot.jpg){.thumbnail}

Le connecteur **1** est l'alimentation et le connecteur **2** le port Ethernet.
