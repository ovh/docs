---
title: Wie verwalte ich meine Ressourcen?
excerpt: ''
slug: wie_verwalte_ich_meine_ressourcen
legacy_guide_number: g602
section: Ressourcen-Management
---


## 
In dieser Hilfe wird erklärt, wie Sie die Ressourcen Ihrer Private Cloud überwachen können.
Sie müssen den vSphere Client verwenden, entweder indem Sie über Ihren eigenen auf Ihrer Maschine installierten Client darauf zugreifen, oder indem Sie die RDP Verbindung nutzen, die wir Ihnen bei der Aktivierung Ihres PCC eingerichtet haben.


## Auf den Hosts
Einen globalen Überblick über Ihre Host-Ressourcen erhalten Sie in Ihrem PCC im Tab "Hosts":

![](images/img_98.jpg){.thumbnail}


## Auf einem Cluster oder Ressourcen-Pool
Sie können sich einen Überblick über sämtliche Ressourcen-Informationen Ihres PCC über dessen Tab "Resource Allocation" verschaffen.
Dort werden sämtliche verfügbaren Ressourcen angezeigt: CPU, RAM, Speicherplatz. Diese Ansicht erlaubt es Ihnen im Fall einer bei einer VM auf einem der Hosts oder in einem der virtuellen Datacenter auftretenden unnormal hohen Last, deren Ursache einzugrenzen. Sie können dann zum Beispiel Begrenzungen für den Zugriff (I/O) auf Ihre Storages festlegen. Sie können auch Prioritäten für Ihre VMs definieren oder Ressourcen-Limits für Ihre VMs festlegen, um zu verhindern, dass bestimmte VMs zu viele Ressourcen in Anspruch nehmen und so die Gesamt-Performance beeinträchtigen. Ausserdem ist es möglich, die Ressourcen eines VM-Pools zu verwalten.

![](images/img_96.jpg){.thumbnail}


## Graphen zur Ressourcen-Nutzung für Ihre Cluster oder Hosts
Im Tab "Performance" finden Sie Graphen zur Nutzung Ihrer Cluster oder Hosts:

![](images/img_95.jpg){.thumbnail}
Sie können diese Graphen auch über den Button "Advanced" und dann "Chart Option..." personalisieren.
Sie können so das anzuzeigende Zeitfenster oder den Graphen-Typ auswählen, um eine präzisere Analyse der Daten durchzuführen:

![](images/img_100.jpg){.thumbnail}
Personalisierung der Graphen:

![](images/img_101.jpg){.thumbnail}


## Auf den Storages
In der Rubrik "Datacenter" sehen Sie im Tab "Datastore" alle Ihre Storages. Sie können so den von Ihrer gesamten Infrastruktur verwendeten Speicherplatz überwachen:

![](images/img_102.jpg){.thumbnail}

