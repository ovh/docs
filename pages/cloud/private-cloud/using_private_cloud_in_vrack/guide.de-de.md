---
title: Hinzufügen der Dedicated Cloud zum Vrack 1.5 und Konfiguration einer VM
excerpt: In dieser Hilfe wird beschrieben, wie Sie Ihre Dedicated Cloud über das OVH Kundencenter oder die API zum Vrack 1.5 hinzufügen und eine VM im Vrack konfigurieren können.
slug: hinzufugen_der_dedicated_cloud_zum_vrack_15_und_konfiguration_einer_vm
section: OVHcloud Funktionen
legacy_guide_number: g1257
---


## 
Verbinden Sie sich über folgenden Link mit Ihrem OVH Kundencenter: [Kundencenter](https://www.ovh.com/manager/dedicated/)

Nach der Anmeldung können Sie Ihre Dedicated Cloud zum vRack hinzufügen, indem Sie die Server über die Funktion "Hinzufügen/Entfernen" vom linken in den rechten Bereich verschieben:

![](images/img_1062.jpg){.thumbnail}
Es wird dann automatisch ein Task zum Hinzufügen erstellt.


## Verbindung mit der API (per Skript)
Die Vorgehensweise wird in folgender Hilfe beschrieben: [Erste Schritte mit der API](https://api.ovh.com/g934.first_step_with_api)


## Verbindung mit der API (über das Web-Interface)
Rufen Sie die API-Seite auf: [API](https://api.ovh.com/console/)

Und melden Sie sich über den "Login"-Button rechts oben an.


## Hinzufügen der Dedicated Cloud zum Vrack 1.5
Nachdem Sie sich angemeldet haben begeben Sie sich in die Rubrik /vrack und wählen GET /vrack aus. Klicken Sie anschließend auf "Execute", um den "ServiceName" Ihres Vracks abzurufen:

![](images/img_1054.jpg){.thumbnail}
Nachdem Sie den ServiceName abgerufen haben wählen Sie POST /vrack/ServiceName/DedicatedCloud aus, geben den Namen Ihrer Dedicated Cloud an und klicken auf "Execute":

![](images/img_1056.jpg){.thumbnail}


## Löschung der Dedicated Cloud aus dem Vrack 1.5
Die Vorgehensweise ist die gleiche wie beim Hinzufügen, verwenden Sie stattdessen einfach die "DELETE"-Funktion der API:

![](images/img_1057.jpg){.thumbnail}


## Im VSS (Virtual Standard Switch) Modus
In dieser Konfiguration genügt es, wenn Sie wie hier im Beispiel in den Einstellungen der Netzwerkkarte die Portgroup "VM Network" auswählen:

![](images/img_1059.jpg){.thumbnail}


## Im VDS (Virtual Distributed Switch) oder 1000v Modus
Die Vorgehensweise ist die gleiche wie bei VSS, lediglich der Name der Portgroup ändert sich:

![](images/img_1060.jpg){.thumbnail}


## Verwendung der VXLAN auf dem 1000v
Es kann auch sein, dass Sie ein VXLAN verwenden möchten, damit Ihre Maschinen nicht im VLAN Ihrer Dedicated Cloud laufen.

Dies ist möglich, dafür muss aber eine zusätzliche Maschine konfiguriert werden, die als Gateway für die VMs im VXLAN fungiert. Diese Maschine hat dann also eine Karte im VXLAN und eine Karte im "VM Network" des 1000v, wie in diesem Beispiel aufgeführt:

![](images/img_1061.jpg){.thumbnail}

