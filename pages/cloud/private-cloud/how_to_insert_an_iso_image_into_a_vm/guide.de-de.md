---
title: Eine ISO-Datei zu einer VM hinzufügen
excerpt: Wie kann ich eine ISO-Datei in einer virtuellen Maschine einbinden?
slug: eine_iso-datei_zu_einer_vm_hinzufugen
section: Verwaltung virtueller Maschinen
legacy_guide_number: g1438
---


## VM und Templates
Die Änderung muss in der Rubrik "VMs and Services" im Abschnitt Cloud durchgeführt werden, in dem Ihre VMs aufgelistet werden.

![](images/img_1976.jpg){.thumbnail}


## 
Führen Sie einen Rechtsklick auf die Eigenschaften der VM durch und wählen Sie die Rubrik "Hardware Configuration" aus.

![](images/img_1977.jpg){.thumbnail}

![](images/img_1978.jpg){.thumbnail}


## 
In der Rubrik "Virtual DVD Drive" wählen Sie "Existing ISO image" aus und geben dann die ISO-Datei an, die Sie in der VM mounten möchten.
Es kann eine ISO-Datei aus der OVH-Library oder Ihrer eigenen Library angegeben werden.
Denken Sie daran, ein Häkchen bei "Share file instead of copying it" zu setzen, sonst müssen Sie warten, bis die ISO-Datei auf den Host kopiert wurde, bevor Sie sie verwenden können.

![](images/img_1979.jpg){.thumbnail}

