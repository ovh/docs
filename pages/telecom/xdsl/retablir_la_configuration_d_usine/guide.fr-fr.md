---
title: Rétablir la configuration d’usine
slug: retablir-la-configuration-d-usine
legacy_guide_number: '18121109'
section: Configuration de mon offre
---

> \[!info\]
>
> Afin de repartir sur de bonne base ou utiliser OverTheBox dans une nouvelle configuration, vous pouvez re-initialiser OverTheBox.
>
> Attention votre device id sera aussi ré-initialisé, il faudra le mettre à jour dans votre service OverTheBox dans l'espace client.

Action dans l'interface OverTheBox {#action-dans-linterface-overthebox}
----------------------------------

-   Connectez vous sur <http://overthebox.ovh>
-   Rendez vous dans **System** &gt; **Backup/Flash Firmware** &gt; **Flash new firmware image**
-   Choisissez le fichier image : <http://downloads.overthebox.ovh/trunk/x86/64/openwrt-x86-64-combined-ext4.img.gz>
-   Indiquez de ne pas garder la configuration, décochez « **Keep settings** »
-   Cliquez sur "**Flash image**"

Action en commande SSH {#action-en-commande-ssh}
----------------------

-   Connectez vous en SSH à votre **OverTheBox**.
-   Saisissez cette commande :
-   **cd /recovery/ && sysupgrade -n openwrt-x86-64-combined-ext4.img.gz**
-   Attendez que l'opération se termine pour que votre réinitialisation soit effective.

Action manuelle {#action-manuelle}
---------------

-   Attention cette méthode ne propose aucun retour visuel (ni voyant, ni indicateur)
-   Appuyez brièvement 5 fois sur le bouton on/off
-   Attendez 15 minutes pour qu'**OverTheBox** soit de nouveau opérationnelle

Procédure de ré-installation par clé USB {#procédure-de-ré-installation-par-clé-usb}
----------------------------------------

-   Téléchargez l'image "Rescue" "**openwrt-x86-64-rescue-ext4.img.gz**" sur la page<http://downloads.overthebox.ovh/trunk/x86/64/>
-   Décompressez l'image et flashez-la sur une clé USB, par exemple avec le commande "dd" sous linux ou MacOs, utilisez un logiciel dédié sous Windows,

    gunzip -c usb.img.gz dd of=/dev/YOUR-USB-DEVICE if=usb.img bs=512

-   Éteignez votre OverTheBox, branchez la clé USB flashée sur le port USB de façade.
-   Appuyer sur le bouton Power de votre OverTheBox, l'installation va se réalisée automatiquement
-   Attendez jusqu'à ce que le bouton Power soit éteint
-   Débranchez la clé USB et rallumez votre OverTheBox, celle-ci est réinstallée.


