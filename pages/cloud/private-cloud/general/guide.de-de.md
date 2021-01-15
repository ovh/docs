---
title: Allgemeines
excerpt: ''
slug: allgemeines
section: Erste Schritte
legacy_guide_number: g597
hidden: true
---


## 
Die grosse Besonderheit dieser Lösung im Vergleich zu anderen ist, dass sie direkt auf der Hardware-Ebene installiert wird (man spricht dabei von einem "Bare Metal" Hypervisor).
Es ist also nicht notwendig, erst ein "Host" Betriebssystem und dann erst auf diesem VMware ESXi zu installieren.
VMware ESXi ist ein Hypervisor, der eine präzise Verwaltung der Ressourcen für jede Virtuelle Maschine erlaubt und eine bessere Performance bietet.
Eine Virtuelle Maschine ist eigentlich eine Sammlung mehrerer Dateien, die einige besondere Eigenschaften aufweisen. Die Herausragendste ist, dass sie in der Lage sind, mehrere gleichzeitige Zugriffe zu verwalten.
ESXi verfügt auch über besondere Mechanismen für die Verwaltung des gemeinsam genutzten Arbeitsspeichers, wie zum Beispiel die Rücknahme ungenutzten Speichers sowie die Deduplikation und Dekomprimierung der Speicher-Pages.


## 
Dieses Werkzeug erlaubt die Migration einer Virtuellen Maschine von einem ESXi Server auf einen anderen im laufenden Betrieb, also ohne Unterbrechungen. Diese Operation ist möglich, wenn die Hostserver kompatible Mikroprozessoren verwenden (die von OVH angebotenen Hosts sind kompatibel) und sich der Storage-Bereich der Dateien der Virtuellen Maschinen auf einem gemeinsam genutzten SAN oder NAS befindet.


## 
Dieses Werkzeug erlaubt die Lastverteilung zwischen mehreren ESXi Servern.
Dafür sind mehrere Betriebsmodi verfügbar: es ist beispielsweise möglich, DRS die Allozierung von Ressourcen zwischen den ESXi Servern automatisch vornehmen zu lassen.
DRS stützt sich auf die Mechanismen von vMotion, um die Virtuellen Maschinen zwischen den verschiedenen ESXi Servern eines Clusters zu verschieben. Man kann auch Affinitäts-Regeln festlegen, um VMs auf einem oder mehreren ESXi zu gruppieren oder zu trennen (Beispiel: ein primärer und ein sekundärer AD).


## 
Diese Option von vCenter erstellt einen Cluster von ESXi Servern, indem sie diese miteinander verknüpft.
Die vLockStep Technologie, auf der der FT Cluster basiert, erlaubt der VM des sekundären Servers die parallele Ausführung der VM des primären Servers. Nur der primäre Server führt die Schreiboperationen zur Festplatte oder dem Netzwerk hin durch: der sekundäre Server führt die gleiche VM parallel dazu aus, jedoch ohne Schreiboperationen.
Bei einem Ausfall des primären Servers deaktiviert vCenter diesen explizit. Dies erlaubt es dem sekundären Server, dessen Funktion zu übernehmen, um den durchgängigen Betrieb dieser VM sicherzustellen.

## ACHTUNG!
Diese Funktion wird derzeit noch nicht von der Private Cloud unterstützt.


## 
vCenter ist ein Verwaltungswerkzeug, das die zentrale Verwaltung aller Virtuellen Maschinen und physischen Hosts einer virtuellen Umgebung ermöglicht.
Mit diesem Interface können auch folgende Punkte verwaltet werden:

- Die Überwachungs-Alarme (CPU/RAM)
- Die Templates (Vorlagen für vorkonfigurierte Betriebssysteme)
- Die Verwendung der Optionen (HA, vMotion, DRS).



