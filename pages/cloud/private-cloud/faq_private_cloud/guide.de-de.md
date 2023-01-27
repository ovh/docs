---
title: Hosted Private Cloud FAQ
excerpt: ''
slug: dedicated_cloud_faq
legacy_guide_number: g598
section: FAQ
updated: 2022-12-08
---


## Bei der Konfiguration von HA erhalte ich den Fehler: "HA Fehler: Die HA Konfiguration kann nicht durchgeführt werden".
Wenn dieser Fehler dauerhaft auftritt, dann müssen Sie HA für Ihren Cluster von Hand erst de- und dann wieder rekonfigurieren. Rufen Sie dazu die Eigenschaften Ihres Clusters auf, wählen Sie die HA Option ab und bestätigen Sie die Änderung. Sobald dieser Task abgeschlossen wurde können Sie dann in den Eigenschaften die HA Option wieder reaktivieren. Nachdem der entsprechende Task ausgeführt wurde ist dann die HA Option für Ihren Cluster aktiv.


## Wozu dient die Option "Rescan Datastore" auf dem Cluster?
Diese Option wird für iSCSI Storages verwendet, um die Zugangs-Routen zu updaten.
Diese Operation wird bei OVH nicht benötigt, da sie nur für iSCSI Filer verwendet wird, die wir nicht anbieten.


## Nach einem Alarm bleibt dieser für den Host angezeigt (rotes Dreieck)
Sie müssen im Tab Alarm Ihres Hosts den Alarm bestätigen und wieder auf grün umstellen. Führen Sie dazu einen Rechtsklick auf den angezeigten Alarm durch.


## Ich habe eine VM im Zustand "Invalid"
Entfernen Sie in diesem Fall die VM mit einem Rechtsklick darauf aus dem Inventar.
ACHTUNG: wählen Sie dazu "Aus dem Inventar entfernen" und nicht "Von der Festplatte entfernen" aus, sonst gehen die Daten Ihrer VM verloren!
Danach können Sie die VM dann einfach wieder zum Inventar hinzufügen.


## Beim Zugriff auf die Konsole meiner VM sehe ich nur einen schwarzen Bildschirm
In diesem Fall hat das Betriebssystem der VM wahrscheinlich die Anzeige ausgeschaltet. Drücken Sie dann einfach eine Taste auf Ihrer Tastatur, um diese wieder zu aktivieren.

