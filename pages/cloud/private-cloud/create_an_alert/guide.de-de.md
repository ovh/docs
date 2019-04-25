---
title: Einen Alarm erstellen
excerpt: ''
slug: einen_alarm_erstellen
legacy_guide_number: g599
---


## 
Sie müssen den vSphere Client verwenden, entweder indem Sie über Ihren eigenen lokalen Client darauf zugreifen, oder indem Sie die RDP Verbindung nutzen, die wir Ihnen bei der Aktivierung Ihres PCC eingerichtet haben.


## 
Sie können Alarme für sämtliche Elemente Ihrer Private Cloud erstellen: die Private Cloud selbst, die Cluster, die VMs, die Datastores, das Netzwerk...
Machen Sie dazu einen Rechtsklick auf die Private Cloud oder das zu überwachende Element und wählen Sie "Alarm" und dann "Add Alarm" aus.

![](images/img_91.jpg){.thumbnail}
Im Tab "General" geben Sie einen Namen für den Alarm an und wählen dann den Alarm-Typ aus:

![](images/img_92.jpg){.thumbnail}
Im Tab "Triggers" können Sie die zu überwachenden Parameter und die Bedingungen für die Auslösung eines Alarms festlegen. Der Button "Add" erlaubt Ihnen die Personalisierung der Regel.
Sie können so zum Beispiel das RAM eines Hosts überwachen, indem Sie eine Schwelle angeben, die nicht überschritten werden darf, sonst wird ein Alarm ausgelöst und Sie erhalten eine Benachrichtigung per E-Mail.

![](images/img_93.jpg){.thumbnail}
Im Tab "Reporting" können Sie einen Puffer angeben, bevor ein Alarm ausgelöst wird, und die Frequenz, in der dieser wiederholt werden soll.
Beispiel: wenn Ihr Host länger als 5 Minuten zu mehr als 95% ausgelastet ist, dann werden Sie per E-Mail benachrichtigt.

Im Tab "Actions" legen Sie die Aktionen fest, die durchgeführt werden sollen, sobald der Alarm ausgelöst wurde: E-Mail versenden, VM anhalten oder einen Befehl ausführen.

![](images/img_103.jpg){.thumbnail}

