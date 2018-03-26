---
title: Public Cloud und vRack - Erklärungen und Roadmap
excerpt: Public Cloud und vRack - Erklärungen und Roadmap
slug: public_cloud_und_vrack_-_erklarungen_und_roadmap
legacy_guide_number: g2148
---


## 
vRack ist die OVH Technologie, mit der Sie Ihre verschiedenen OVH Produkte in einem privaten Netzwerk miteinander verbinden können, unabhängig vom physischen Standort. Einzige Bedingung: Die Produkte müssen vRack kompatibel sein.

Sie können sich das vRack wie einen privaten virtuellen Switch vorstellen, mit dem Sie zum Beispiel Dedicated Server in Beauharnois, Cloud Server in Straßburg und eine Dedicated Cloud in Roubaix miteinander verbinden können.

Wenn Ihre verschiedenen Produkte erst einmal über den "Switch" verbunden sind, können Sie sie ganz einfach per VLAN - ein isoliertes privates Netzwerk - untereinander kommunizieren lassen.


## 
Das vRack für Public Cloud ist ein vRack der dritten Generation. Aus diesem Grund müssen einige Teile des Equipments ausgetauscht oder upgedated werden, damit das vRack voll funktionsfähig ist. Hierbei gehen wir in mehreren Schritten vor.


## Schritt 1: verfügbar nur für Public Cloud und nur in Straßburg und Gravelines

- in Produktion.


Der erste Schritt besteht in der Verfügbarmachung dieser Technologie für Public Cloud Instanzen in den Rechenzentren Straßburg und Gravelines.

So können Instanzen in SBG1 und GRA1 innerhalb eines Projekts miteinander kommunizieren.


## Schritt 2: Verfügbarmachung aller Rechenzentren für Public Cloud

- in Produktion.


Im zweiten Schritt wird vRack für alle Rechenzentren verfügbar gemacht. Außer SBG1 und GRA1 kann das vRack dann auch in Beauharnois (BHS1) aktiviert werden.

Außerdem werden die verschiedenen Standorte untereinander verbunden, die Kommunikation zwischen den verschiedenen Rechenzentren wird für die Dienste desselben Nutzers möglich.

Private Netzwerke mit derselben ID werden automatisch miteinander verbunden. So kann etwa eine Instanz aus SBG1 mit einer Instanz desselben Nutzers in demselben privaten Netzwerk in BHS1 oder GRA1 kommunizieren.


## Schritt 3: Öffnen des vRack Public Cloud für andere Produkte
Über das vRack soll es auch möglich sein, Public Cloud Instanzen mit anderen OVH Produkten zu verbinden.

Hierfür müssen dann nur die Dienstleistungen dem vRack hinzugefügt werden, in dem das Public Cloud Projekt bereits eingebunden ist. Alle demselben vRack zugeordneten OVH Dienstleistungen können dann untereinander kommunizieren, ganz gleich, ob sie in Straßburg, Gravelines, Beauharnois oder einem anderen OVH Rechenzentrum liegen. So können beispielsweise die Instanzen eines Public Cloud Projekts, die in BHS1 liegen, mit den Instanzen in SBG1 ebenso wie mit einer Dedicated Cloud in Roubaix kommunizieren.


## 
Bei den Dedicated Servern gibt es zwei Möglichkeiten für die Konfiguration des vRack Netzwerk-Interface (eth1 unter Linux).


- eth1: 192.168.0.2 - Hier wurde eth1 direkt eine private IP-Adresse zugewiesen. In diesem Fall wird das vRack Netzwerk die VLAN ID 0 für die Kommunikation der Server verwenden.
- eth1.8: 10.8.0.2 - Hier wurde durch das Taggen von eth1 die VLAN ID 8 vergeben. Die VLAN ID wurde spezifisch ausgewählt und eine private Adresse wird auf diesem getaggten Interface verwendet. 


So werden sämtliche VLANs auf dem Interface des Dedicated Servers zusammengeführt, und die Konfiguration des Netzwerk-Interface sortiert die VLANs anhand der verwendeten ID. 

Wenn Sie für Ihre Public Cloud private Netzwerke verwenden möchten, muss Ihr Projekt einem vRack zugewiesen werden.

Wenn das Projekt an das vRack angeschlossen ist, können private Netzwerke erstellt werden, die sofort die zuvor gewählte VLAN ID tragen. So müssen die Interfaces in den Instanzen nicht mehr getaggt werden, da die Isolation direkt auf der Ebene des privaten Netzwerks vorgenommen wird.

Um mehrere VLANs zu verwenden, haben Sie für die Public Cloud Instanzen  entsprechend mehrere Netzwerk-Interfaces (eth1, eth2 ...), wohingegen Sie beim Dedicated Server dasselbe Interface mit verschiedenen Tags verwenden (eth1.4, eth1.123 ...).


## 
[Public Cloud und vRack - Alles zur Verwendung von vRack und privaten Netzwerken mit den OVH Public Cloud Instanzen]({legacy}2162)


## 
... beachten Sie auch unsere anderen Hilfen zum Thema Cloud!

