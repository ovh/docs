---
title: Utiliser une imprimante locale
keywords: imprimante, locale, virtuelle, utilisation
slug: printer-on-clouddesktop
description: Utilisation de l’imprimante locale depuis le bureau virtuel
excerpt: Il est possible d’utiliser votre imprimante locale depuis votre bureau virtuel. Ceci est rendu possible grace au client lourd de VMware &#58; Horizon View.
section: Utilisation
---


## Sur Windows
Il n'y aucun pré-requis quant à l'utilisation de votre imprimante sur le bureau virtuel. Il suffit qu'elle soit installée sur votre Windows local pour que Horizon View la détecte.


## Sur MacOS
Avant de pouvoir utiliser une imprimante sur votre bureau virtuel vous devez avant tout démarrer les **Services d'impression** sur Horizon View.

Pour ce faire, après avoir démarré Horizon client et avant d'avoir lancé votre bureau virtuel :

- Cliquez sur `Connexion`{.action}
- Cliquez sur `Démarrer les services d'impression`{.action}
- Suivez le processus d'identification afin de valider l'opération

Après avoir réalisé cette opération, il sera possible d'utiliser votre imprimante sur le bureau virtuel.


## Sur Linux
Le bundle de programme d'installation d'Horizon View inclut un composant d'impression virtuelle.

Afin de profiter de ce dernier, spécifiez lors de l'installation du client que le programme d'installation doit enregistrer et démarrer les services d'impression (Virtual Printing daemon).