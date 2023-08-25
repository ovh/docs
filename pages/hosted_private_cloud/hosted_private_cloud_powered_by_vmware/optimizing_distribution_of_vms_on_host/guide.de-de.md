---
title: Optimierung der Verteilung der VM auf den Hosts
excerpt: Wie kann ich die VM bestmöglich auf den Hosts verteilen, um die Ressourcen zu optimieren?
updated: 2018-03-26
---


## Von OVH angebotene Konfiguration
In PRO enthalten ist die Dynamic Optimization, die eine automatische Verteilung der Last zwischen den verschiedenen Hosts eines Clusters erlaubt.
OVH stellt eine PRO Standardkonfiguration zur Verfügung:

![](images/img_1991.jpg){.thumbnail}
Die Dynamic Optimization wird alle 20 Minuten ausgeführt und migriert automatisch VMs von einem Host auf einen anderen, um den in den Einstellungen im Screenshot festgelegten Werten zu entsprechen.


## Eine VM von PRO ausschließen
Wenn Sie nicht möchten, dass eine VM automatisch von PRO mirgriert wird, können Sie diese ausschließen, in dem Sie folgendes Häkchen in den Einstellungen der VM setzen:

![](images/img_1992.jpg){.thumbnail}


## Anti-Affinitätsregeln
Im VMM können für jede VM Anti-Affinitätsregeln festgelegt werden. So können Sie spezifizieren, dass bestimmte VM nicht auf dem gleichen Host laufen sollen.

Begeben Sie sich dazu in die Einstellungen der VM und wählen Sie dort Hardware Configuration, Availability, Availability Sets aus:

![](images/img_1993.jpg){.thumbnail}
Erstellen Sie eine Property und fügen Sie sie im Abschnitt "Assigned Properties" hinzu:

![](images/img_1994.jpg){.thumbnail}
Wenden Sie die gleiche Vorgehensweise auf die anderen VM an, die Sie voneinander trennen möchten.

