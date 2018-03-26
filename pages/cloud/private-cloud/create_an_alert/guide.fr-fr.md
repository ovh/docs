---
title: Créer une alerte
slug: creer-une-alerte
legacy_guide_number: '7766615'
section: Gestion des machines virtuelles
---


Il est possible de créer une alerte sur tous les éléments de votre Dedicated Cloud : le datacentre lui-même, les clusters, les VM, les datastores, le réseau...Pour cela, faites un clic droit sur le datacentre ou tout autre élément à surveiller, puis sélectionner « Alarms » et enfin « New Alarm Definition ».

![](images/alarme1.png){.thumbnail}

Création de l'alarme
--------------------

Sur l’onglet « General», indiquez le nom de votre alerte, et sélectionnez le type d’alarme :

![](images/alarme2.png){.thumbnail}

Les déclencheurs (Triggers)
---------------------------

L’onglet « Triggers », vous permet d’indiquer les paramètres que vous allez surveiller, ainsi que les conditions d’alerte. Le bouton « + » vous permet de personnaliser la règle.Vous pouvez ainsi surveiller la RAM d’un host par exemple, en indiquant un seuil à ne pas dépasser avant que son statut ne passe en alerte et que vous ne recevrez un e-mail d'avertissement.

![](images/alarme3.png){.thumbnail}

Les actions
-----------

Sur l’onglet « Actions », vous allez définir l’action à mener une fois l’alarme détectée : un envoi de mail, un arrêt de VM par exemple. Vous pouvez également configurer via cet onglet la fréquence de répétition des alertes:

![](images/alarme4.png){.thumbnail}
