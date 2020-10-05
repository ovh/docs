---
title: Erstellung eines Templates mit dem VMM
excerpt: In dieser Hilfe wird beschrieben, wie Sie mit dem VMM ein Template von einer existierenden Festplatte aus erstellen
slug: erstellung_eines_templates_mit_dem_vmm
section: Ressourcen-Management
legacy_guide_number: g1436
---


## Library
Die Erstellung des Templates erfolgt im Abschnitt Library des VMM:

![](images/img_1966.jpg){.thumbnail}
Dort finden Sie einen "Create VM Template" Button.

![](images/img_1967.jpg){.thumbnail}

## Select Source
Wählen Sie im Assistenten die gewünschte Option aus. In unserem Beispiel entscheiden wir uns dafür, das Template von einer existierenden Festplatte aus zu erstellen.
Die gewählte Festplatte wird von OVH in der Library zur Verfügung gestellt.

![](images/img_1971.jpg){.thumbnail}

## Identity
Wählen Sie den Namen des Templates aus und versehen Sie es falls gewünscht mit einer Beschreibung.

## Configure Hardware
Hier können Sie die gewünschte Konfiguration auswählen.
Vergessen Sie nicht die Einstellungen für HA, die Cloud Kompatibilität und die Berechtigungen für die Migration von VM.
HA:

![](images/img_1997.jpg){.thumbnail}
Cloud Kompatibilität:

![](images/img_1998.jpg){.thumbnail}
Berechtigungen für die Migration bei unterschiedlichen CPU:

![](images/img_1999.jpg){.thumbnail}

## Configure Operating System
Wählen Sie die gewünschte Konfiguration aus: Standardpasswort, zugewiesene Rollen oder Features, Run Onces...

![](images/img_1969.jpg){.thumbnail}

## Zusammenfassung
Die Erstellung des Templates wird abgeschlossen, sobald Sie auf Create klicken.

![](images/img_1970.jpg){.thumbnail}


## Jobs
Sie können den Fortschritt der Erstellung im Kontextmenü "Jobs" einsehen.

![](images/img_1972.jpg){.thumbnail}
Der Job wird auf der rechten Seite in der History angezeigt.

![](images/img_1973.jpg){.thumbnail}

