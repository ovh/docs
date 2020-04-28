---
title: Dépannage SPA504G
slug: depannage-spa504g
legacy_guide_number: '7536664'
space_key: CRTEL
space_name: Téléphonie
section: Cisco SPA504g
hidden: true
---

------------------------------------------------------------------------

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

### Configuration d'un SPA500 {#configuration-dun-spa500}

Si votre poste est bloqué ou que vous l'avez réinitialisé, voici la procédure pour le reconfigurer :

-   **Connectez-vous** sur votre **EspaceClientTelecom** : <https://www.ovhtelecom.fr/espaceclient/>
-   Cliquez sur le lien "**Administrez vos services de téléphonie via l'ancienne interface**".
-   Cliquez sur la ligne **associée** au poste.
-   Cliquez sur l'onglet "**Assistance**" dans le menu "**Navigation**".
-   Cliquez sur "**Dépannage plug and Phone**".
-   Le formulaire vous demande l'adresse **IP Publique** depuis laquelle le téléphone vient se connecter. Généralement (hors configuration particulière), votre ordinateur utilise la même IP Publique que le téléphone. Vous la trouverez en bas à droite du formulaire. Cliquez sur "**Suivant**".

![](images/2015-03-09-114635_721x314_scrot.jpg){.thumbnail}

-   Cliquez sur le bouton "**Reconfiguration manuelle**".

Dans un premier temps, il faut réinitialiser la configuration du téléphone :

-   Sur le téléphone, appuyez sur la touche "**Menu**", représentée par cette icône : ![](images/BtnMenu.png){.thumbnail}.
-   Entrez dans le menu "**14 - Factory Reset / Réinitialisation usine**". Le téléphone va redémarrer et sera vierge de toute configuration.

Il faut à présent récupérer l'adresse IP du poste. Pour ce faire :

-   Sur le téléphone, appuyez sur la touche "**Menu**", représentée par cette icône : ![](images/BtnMenu.png){.thumbnail}.
-   Appuyez ensuite sur le touche "**9**".
-   Notez l'adresse IP affichée sur l'**écran** à la ligne "**Current IP**".
-   Entrez l'adresse IP relevée dans votre Espace Client et cliquez sur le bouton "**Valider**".

![](images/2015-06-05-112807_457x59_scrot.png){.thumbnail}

-   Rendez-vous ensuite sur le lien généré dans le Manager sous la forme : **http://ip\_du\_tel\_relevee/admin/advanced**
-   Cliquez sur le bouton "**Provisioning**" en haut de la page.
-   Sur le champ "**Provision enable**" sélectionnez "**Yes**".
-   Dans le champ "**Profile Rule**", entrez la valeur suivante : **`http://cisco.prov.voip.ovh.net/init.cfg`**
-   Pour valider la configuration, cliquez sur le bouton en bas de page "**Submit All Changes**".

Le téléphone va ensuite redémarrer et se reconfigurer.

------------------------------------------------------------------------

### Mon téléphone émet mais ne reçoit plus les appels {#mon-téléphone-émet-mais-ne-reçoit-plus-les-appels}

Lorsque votre téléphone présente ce symptôme, c'est que la fonction **DND** ou **NPD** est activée.

Pour désactiver cette fonction, appuyez sur le bouton sur l'écran correspondant à cette fonction :

![](images/Menu.png){.thumbnail}

------------------------------------------------------------------------

### Les touches de mon téléphone sont allumées en orange {#les-touches-de-mon-téléphone-sont-allumées-en-orange}

Si votre téléphone affiche les touches sur le côté de l'écran orange, c'est que votre ligne n'est pas enregistrée. Vérifiez le bon fonctionnement de votre connexion Internet et le raccordement de votre téléphone à votre réseau local.

------------------------------------------------------------------------

### Mon téléphone affiche "Checking DNS" ou "Recherche DHCP" {#mon-téléphone-affiche-checking-dns-ou-recherche-dhcp}

Généralement cette problématique est présente lorsque le téléphone ne se voit pas attribuer d'adresse IP par votre serveur DHCP. Vérifiez le bon raccordement de votre poste à votre réseau et vérifiez la configuration de votre routeur.
