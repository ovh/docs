---
title: Änderung der Größe einer Instanz
excerpt: Änderung der Größe einer Instanz in Horizon
slug: nderung_der_groe_einer_instanz
legacy_guide_number: g1778
---


## 
Durch einen Anstieg der Last oder aufgrund neuer Anforderungen kann es mit der Zeit dazu kommen, dass die Ressourcen Ihrer Instanz nicht mehr ausreichen. Bei der Public Cloud können Sie in diesem Fall einfach mit einigen Klicks die Ressourcen Ihrer Instanz erhöhen.

In dieser Anleitung wird die Vorgehensweise zur Änderung der Größe Ihrer Instanz über den OpenStack Horizon Manager beschrieben.

## Achtung:
Die Änderung der Größe kann ausschließlich zu einem größeren Modell hin erfolgen.

Während der Dauer dieses Eingriffs ist die Instanz nicht verfügbar.


## Voraussetzungen

- [Erstellung eines Zugangs zu Horizon]({legacy}1773)
- Eine erstellte Instanz




## Änderung der Größe einer Instanz
Um die Größe einer Instanz anzupassen gehen Sie wie folgt vor:


- Verbinden Sie sich mit Horizon
- Klicken Sie in dem Menü auf der linken Seite auf Instanzen
- Wählen Sie für die gewünschte Instanz in der Dropdown-Liste Instanzgröße ändern aus



![](images/img_2718.jpg){.thumbnail}


## Rubrik "Varianten Auswahl"
In dieser Rubrik wird das derzeit verwendete Template angezeigt, und Sie können ein neues Template für die Ressourcen der Instanz auswählen.

![](images/img_2717.jpg){.thumbnail}

## Tip:
Hier können die verwendeten Ressourcen im Verhältnis zu den dem Projekt zugewiesenen Gesamtressourcen angezeigt werden.


## Rubrik "Weitergehende Optionen"
In dieser Rubrik können Sie die Partitionierung der Festplatte verwalten.

Festplattenpartition: Automatisch oder Manuell)

![](images/img_2652.jpg){.thumbnail}

- Zum Fertigstellen der Konfiguration klicken Sie auf Größe ändern




## Änderung der Größe der Festplatte unter Windows
 Achtung 

Bei der Redimensionierung einer Windows Instanz wird die Größe der Partition nicht automatisch angepasst, Sie müssen dies in der Datenträgerverwaltung durchführen:


- Starten Sie die Datenträgerverwaltung:



![](images/img_2980.jpg){.thumbnail}

- Machen Sie einen Rechtsklick auf die Hauptpartition



![](images/img_2981.jpg){.thumbnail}

- Erweitern Sie die Hauptpartition



![](images/img_2978.jpg){.thumbnail}

- Bestätigen Sie die Erweiterung der Partition:



![](images/img_2979.jpg){.thumbnail}


## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

