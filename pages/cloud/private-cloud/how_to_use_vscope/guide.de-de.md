---
title: Verwendung von vScope
excerpt: ''
slug: verwendung_von_vscope
section: OVHcloud Dienste und Optionen
legacy_guide_number: g718
---


## Zugang
Sie können über einen Link dieser Form auf vScope zugreifen (die Angaben sind Ihrer Dedicated Cloud entsprechend anzupassen):

https://pcc-178-32-194-8.ovh.com/vScope (achten Sie auf das große "S")

![](images/img_368.jpg){.thumbnail}
Sie werden dann aufgefordert, einen Login und ein Passwort für die Verbindung anzugeben. Verwenden Sie dazu den Admin-Login, den Sie für die Verbindung mit dem vSphere Client nutzen.
Sobald Sie mit dem Interface verbunden sind, gelangen Sie unmittelbar zur Übersicht eines Ihrer Datacenter:

![](images/img_364.jpg){.thumbnail}


## Filer
Auf der linken Seite sehen Sie eine Liste Ihrer Storages sowie deren Nutzungsstatistiken.


## Hosts
In dieser Ansicht sehen Sie die Liste Ihrer Hosts mit der Anzahl der Cores, VMs, CPUs und das verwendete RAM sowie den Netzwerktraffic auf den Karten des Hosts (TX = Upload und RX = Download).
Wenn Sie einen Doppelklick auf einen Host durchführen, gelangen Sie zu einer weiteren Ansicht mit Graphen zur Ressourcennutzung (RAM, CPU, Netzwerk usw.):

![](images/img_366.jpg){.thumbnail}
Sie können in der Grafik auf einen bestimmten Bereich zoomen, indem Sie einen Linksklick darauf durchführen und den gewünschten Bereich auswählen:

![](images/img_367.jpg){.thumbnail}
Sie haben im oberen Bereich auch ein Menü, in dem Sie den Zeitraum für die Anzeige der Grafiken auswählen können (Tag, Woche, Monat, Jahr):


## Virtual Machine
In diesem Bereich finden Sie die Statistiken Ihrer virtuellen Maschinen mit folgenden Informationen:

- Der Name der VM.
- Der Storage, auf dem die vmdk Datei liegt, sowie der auf dem Datastore allozierte und verwendete Speicherplatz.
- Die Anzahl der vorhandenen, über den Snapshot Manager erstellten Snapshots für die Maschine.
- Der Host, auf dem die VM gespeichert ist.
- Sein Zustand (Power on, Off, Pause).
- Der CPU- und RAM-Verbrauch.
- Informationen zu den Festplatten (Statistiken zu Bandbreite, I/O, Latenz).


Wie bei den Hosts können Sie mit einem Doppelklick auf die detaillierten Graphen der virtuellen Maschine zugreifen.

