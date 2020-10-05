---
title: Eine Maschine bei auftretenden Verlangsamungen überprüfen
excerpt: ''
slug: eine_maschine_bei_auftretenden_verlangsamungen_uberprufen
section: Wartung und Monitoring
legacy_guide_number: g601
---


## 
Wir erläutern hier die zur Diagnose von starken Verlangsamungen bei einer VM einzuhaltende Vorgehensweise.

Sie müssen den vSphere Client verwenden, entweder indem Sie über Ihren eigenen lokalen Client darauf zugreifen, oder indem Sie die RDP Verbindung nutzen, die wir Ihnen bei der Aktivierung Ihres PCC eingerichtet haben.


## Überprüfung der VMs:
Zuerst wählen Sie die VM aus, die Probleme macht, und rufen dann den Tab "Performance" auf. Dort finden Sie eine Zusammenfassung der Nutzungs-Graphen Ihrer VM (CPU, RAM...). Wenn Sie in diesem Fenster eine starke Auslastung sehen, dann liegt die Ursache auf Seiten der VM.
In diesem Fall können Sie dann die Ressourcen Ihrer VM erhöhen, nachdem Sie in den VM-Parametern unter "Resources" überprüft haben, dass es diesbezüglich keine Einschränkungen gibt (Rechtsklick auf die VM und dann "Edit Settings", "Resources").


## Überprüfung des Clusters / Ressourcen-Pools
Wählen Sie auf dem Cluster oder Ressourcen-Pool den Tab "Performance" aus, es werden Ihnen dann Graphen zur Leistung und Ressourcen-Nutzung angezeigt:

![](images/img_95.jpg){.thumbnail}
In der Rubrik "Resource allocation" sehen Sie, wieviel von den verfügbaren Ressourcen alle Ihre VMs verwenden:

![](images/img_96.jpg){.thumbnail}
Dabei gibt es zwei mögliche Fälle:


- Wenn ein Host überlastet ist, dann können Sie von Hand eine Migration Ihrer VM auf einen anderen Host durchführen - mit vMotion ist dies auch im laufenden Betrieb möglich.

Wenn Sie über eine Enterprise Lizenz verfügen, dann können Sie die DRS Funktion nutzen, die diese Operation abhängig von der Ressourcen-Verwendung Ihrer Hosts automatisch durchführt.


- Wenn alle Ihre Hosts eine starke Last aufweisen, dann können Sie über die Tabs "privateCloud OVH" oder "OVH storage" weitere hinzufügen.




## Überprüfung der Storages
Zusätzlich zu den System-Ressourcen Ihrer VMs können Sie auch Ihre Storages überwachen. Wählen Sie dazu in der "Datastore" Ansicht Ihr NAS und dann dort den Tab "Performance" aus:

![](images/img_97.jpg){.thumbnail}


## Überprüfung des Netzwerks
Zuletzt können Sie auch noch den Zustand des Netzwerks überprüfen.
In Ihrem OVH Manager sehen Sie die verwendete Bandbreite sowie die Einschränkungen, die Sie für Ihr VLAN definiert haben:


- Manager v5 -> Private Cloud -> Zusammenfassung/Empfang



